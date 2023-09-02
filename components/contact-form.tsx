import React, { useState } from 'react';
import { FieldErrors, FormFields, FormData } from '@/lib/types';
import CodeSnippet from './code-snippet';
import SectionDivider from './sectionDivider';

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    senderName: '',
    senderEmail: '',
    formMessage: '',
  });
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [isSubmitPending, setIsSubmitPending] = useState<boolean>(false);
  const [fieldErrors, setFieldErrors] = useState({
    senderName: '',
    senderEmail: '',
    formMessage: '',
  });

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      setIsSubmitPending(true);
      await fetch('/api/send-email/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      setSubmitted(true);
      setFormData({
        senderName: '',
        senderEmail: '',
        formMessage: '',
      });
    } catch (error) {
      console.error('Error sending email:', error);
    } finally {
      setIsSubmitPending(false);
      setFieldErrors({
        senderName: '',
        senderEmail: '',
        formMessage: '',
      });
    }
  };

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    fieldName: FormFields
  ) => {
    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: event.target.value,
    }));
    setFieldErrors((prevErrors) => ({
      ...prevErrors,
      [fieldName]: '',
    }));
  };

  const handleFieldErrors = (
    event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>,
    fieldName: FormFields,
    message: FieldErrors
  ) => {
    event.preventDefault();

    setFieldErrors((prevErrors) => ({
      ...prevErrors,
      [fieldName]: message,
    }));
  };

  return (
    <div className='items-start lg:flex lg:w-full lg:gap-[12px] lg:px-[24px]'>
      <div className='mt-[42px] flex w-full justify-center text-secondary-gray lg:mt-0 lg:px-[24px] lg:pt-[156px]'>
        {submitted ? (
          <div className='flex flex-col items-center justify-center gap-[20px]'>
            <h2 className='text-[24px] text-text-white'>Thank you! ✌️</h2>
            <p className='mb-[10px] text-center'>
              Your message has been accepted. You will receive answer really
              soon!
            </p>
            <button
              className='w-[50%] rounded-lg bg-[#1C2B3A] px-[14px] py-[10px] text-[14px] text-text-white transition-all hover:bg-[#263B50] disabled:bg-opacity-50'
              onClick={() => setSubmitted(false)}
            >
              send-new-message
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className='flex w-full flex-col lg:w-[75%] lg:max-w-[480px]'
          >
            <div className='flex flex-col gap-[10px]'>
              <span>_name:</span>
              <input
                type='text'
                value={formData.senderName}
                onChange={(e) => handleInputChange(e, FormFields.SenderName)}
                required
                onInvalid={(e) =>
                  handleFieldErrors(
                    e,
                    FormFields.SenderName,
                    FieldErrors.SenderName
                  )
                }
                className='h-[42px] rounded-lg border border-lines bg-primary-medium px-[15px] py-[5px]'
              />
              <span className='pl-[5px] text-[12px] text-accent-rose'>
                {fieldErrors.senderName}
              </span>
            </div>
            <div className='flex flex-col gap-[10px]'>
              <span>_email:</span>
              <input
                type='email'
                value={formData.senderEmail}
                onChange={(e) => handleInputChange(e, FormFields.SenderEmail)}
                required
                onInvalid={(e) =>
                  handleFieldErrors(
                    e,
                    FormFields.SenderEmail,
                    FieldErrors.SenderEmail
                  )
                }
                className='h-[42px] rounded-lg border border-lines bg-primary-medium px-[15px] py-[5px]'
              />
              <span className='pl-[5px] text-[12px] text-accent-rose'>
                {fieldErrors.senderEmail}
              </span>
            </div>
            <div className='flex flex-col gap-[10px]'>
              <span>_message:</span>
              <textarea
                value={formData.formMessage}
                onChange={(e) => handleInputChange(e, FormFields.FormMessage)}
                style={{ resize: 'none' }}
                required
                onInvalid={(e) =>
                  handleFieldErrors(
                    e,
                    FormFields.FormMessage,
                    FieldErrors.FormMessage
                  )
                }
                maxLength={5000}
                className='h-[145px] rounded-lg border border-lines bg-primary-medium p-[15px]'
              />
              <span className='pl-[5px] text-[12px] text-accent-rose'>
                {fieldErrors.formMessage}
              </span>
            </div>
            <button
              type='submit'
              disabled={isSubmitPending}
              className='w-[50%] rounded-lg bg-[#1C2B3A] px-[14px] py-[10px] text-[14px] text-text-white transition-all hover:bg-[#263B50] disabled:animate-pulse disabled:bg-opacity-20'
            >
              submit-message
            </button>
          </form>
        )}
      </div>
      <SectionDivider direction='vertical' />
      <CodeSnippet
        name={formData.senderName}
        email={formData.senderEmail}
        message={formData.formMessage}
      />
    </div>
  );
};

export default ContactForm;
