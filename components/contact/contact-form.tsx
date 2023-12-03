'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FormData, FieldErrorMessages } from '@/lib/types';
import CodeSnippet from './code-snippet';
import SubmitMessage from './submit-message';

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
    setError,
  } = useForm<FormData>();

  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isSubmitPending, setIsSubmitPending] = useState<boolean>(false);

  const senderName = watch('senderName');
  const senderEmail = watch('senderEmail');
  const message = watch('formMessage');

  const onSubmit = async (data: FormData) => {
    try {
      setIsSubmitPending(true);
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSubmitted(true);
        reset();
      } else if (!response.ok) {
        const responseData = await response.json();

        for (const field in responseData.errors) {
          setError(field as keyof FormData, {
            type: 'server',
            message: responseData.errors[field],
          });
        }
      }
    } catch (error) {
      console.error('Error sending email:', error);
    } finally {
      setIsSubmitPending(false);
    }
  };

  return (
    <div className='lg:flex lg:h-full lg:w-full lg:items-start lg:gap-3 lg:px-6'>
      <div className='mt-10 flex h-full w-full items-center justify-center text-secondary-gray lg:mt-0 lg:border-r lg:border-lines lg:px-6'>
        {isSubmitted ? (
          <SubmitMessage setIsSubmitted={setIsSubmitted} />
        ) : (
          <form
            onSubmit={handleSubmit(onSubmit)}
            className='flex w-full flex-col lg:w-3/4 lg:max-w-[480px]'
          >
            <div className='flex flex-col gap-3'>
              <span>_name:</span>
              <input
                {...register('senderName', {
                  required: FieldErrorMessages.EmptyName,
                })}
                type='text'
                className='h-10 rounded-lg border border-lines bg-primary-medium px-4 py-1'
              />
              <span className='pl-1 text-[12px] text-accent-rose'>
                {errors.senderName?.message}
              </span>
            </div>
            <div className='flex flex-col gap-3'>
              <span>_email:</span>
              <input
                {...register('senderEmail', {
                  required: FieldErrorMessages.EmptyEmail,
                })}
                type='email'
                className='h-10 rounded-lg border border-lines bg-primary-medium px-4 py-1'
              />
              <span className='pl-1 text-[12px] text-accent-rose'>
                {errors.senderEmail?.message}
              </span>
            </div>
            <div className='flex flex-col gap-3'>
              <span>_message:</span>
              <textarea
                {...register('formMessage', {
                  required: FieldErrorMessages.EmptyMessage,
                })}
                style={{ resize: 'none' }}
                maxLength={5000}
                className='h-[145px] rounded-lg border border-lines bg-primary-medium p-4'
              />
              <span className='pl-1 text-[12px] text-accent-rose'>
                {errors.formMessage?.message}
              </span>
            </div>
            <button
              type='submit'
              disabled={isSubmitPending}
              className={`mt-4 w-1/2 rounded-lg bg-[#1C2B3A] px-4 py-3 text-[14px] text-text-white transition-all hover:bg-[#263B50] ${
                isSubmitPending ? 'animate-pulse bg-opacity-20' : ''
              }`}
            >
              {isSubmitPending ? 'sending...' : 'submit-message'}
            </button>
          </form>
        )}
      </div>
      <CodeSnippet name={senderName} email={senderEmail} message={message} />
    </div>
  );
};

export default ContactForm;
