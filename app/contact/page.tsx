'use client';

import CodeSnippet from '@/components/code-snippet';
import DropdownItem from '@/components/dropdown-item';
import PageTitle from '@/components/page-title';
import { contactsData } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

enum FieldErrors {
  SenderName = 'Your name is required.',
  SenderEmail = 'Please provide a valid email address.',
  FormMessage = "Don't forget to type your message!",
}

const Contact = () => {
  const [formData, setFormData] = useState({
    senderName: '',
    senderEmail: '',
    formMessage: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [pending, setPending] = useState(false);
  const [fieldErrors, setFieldErrors] = useState({
    senderName: '',
    senderEmail: '',
    formMessage: '',
  });

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      setPending(true);
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
      setPending(false);
      setFieldErrors({
        senderName: '',
        senderEmail: '',
        formMessage: '',
      });
    }
  };

  const handleFieldErrors = (
    event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>,
    fieldName: string,
    message: string
  ) => {
    event.preventDefault();

    setFieldErrors((prevErrors) => ({
      ...prevErrors,
      [fieldName]: message,
    }));
  };

  return (
    <main
      className='flex-1 px-[27px] pb-[24px] pt-[21px] text-text-white 
    lg:flex lg:px-0 lg:py-0'
    >
      <div className='lg:flex lg:w-[310px] lg:flex-col lg:border-r-[1px] lg:border-lines'>
        <PageTitle title='_contact-me' />
        <div className='flex flex-col gap-[3px] lg:gap-0'>
          <DropdownItem
            title={'contacts'}
            content={
              <div className='flex flex-col gap-[10px] py-[16px] text-secondary-gray lg:px-[22px]'>
                <div className='flex gap-[10px] transition-all duration-300 hover:text-text-white'>
                  <Image
                    src={contactsData.email.icon}
                    alt={contactsData.email.title}
                    priority
                  />
                  <Link href={`mailto:${contactsData.email.address}`}>
                    {contactsData.email.address}
                  </Link>
                </div>
                <address className='flex gap-[10px] transition-all duration-300 hover:text-text-white'>
                  <Image
                    src={contactsData.phone.icon}
                    alt={contactsData.phone.title}
                    priority
                  />
                  <Link href={`tel:${contactsData.phone.number}`}>
                    {contactsData.phone.number}
                  </Link>
                </address>
              </div>
            }
          />
          <DropdownItem
            title={'find-me-also-in'}
            content={
              <div className='flex flex-col gap-[10px] py-[16px] text-secondary-gray lg:px-[22px]'>
                <address className='flex gap-[10px] transition-all duration-300 hover:text-text-white'>
                  <Image
                    src={contactsData.github.icon}
                    alt={contactsData.github.title}
                    priority
                  />
                  <Link href={`mailto:${contactsData.github.url}`}>
                    {contactsData.github.title}
                  </Link>
                </address>
                <address className='flex gap-[10px] transition-all duration-300 hover:text-text-white'>
                  <Image
                    src={contactsData.linkedin.icon}
                    alt={contactsData.linkedin.title}
                    priority
                  />
                  <Link href={`tel:${contactsData.linkedin.url}`}>
                    {contactsData.linkedin.title}
                  </Link>
                </address>
              </div>
            }
          />
        </div>
      </div>

      <div className='lg:flex lg:w-full lg:items-center lg:justify-center lg:gap-[48px] lg:px-[24px] lg:py-[48px]'>
        {submitted ? (
          <div className='mt-[42px] flex flex-col items-center justify-center gap-[20px] lg:mt-[0] lg:w-[30%]'>
            <h2 className='text-[24px] text-text-white'>Thank you! ✌️</h2>
            <p className='mb-[10px] text-center text-secondary-gray'>
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
            className='mt-[42px] flex flex-col gap-[18px] text-secondary-gray lg:mt-0 lg:w-[30%]'
          >
            <div className='flex flex-col gap-[10px]'>
              <span>_name:</span>
              <input
                type='text'
                value={formData.senderName}
                onChange={(e) =>
                  setFormData((prevData) => ({
                    ...prevData,
                    senderName: e.target.value,
                  }))
                }
                required
                onInvalid={(e) =>
                  handleFieldErrors(e, 'senderName', FieldErrors.SenderName)
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
                onChange={(e) =>
                  setFormData((prevData) => ({
                    ...prevData,
                    senderEmail: e.target.value,
                  }))
                }
                required
                onInvalid={(e) =>
                  handleFieldErrors(e, 'senderEmail', FieldErrors.SenderEmail)
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
                onChange={(e) =>
                  setFormData((prevData) => ({
                    ...prevData,
                    formMessage: e.target.value,
                  }))
                }
                style={{ resize: 'none' }}
                required
                onInvalid={(e) =>
                  handleFieldErrors(e, 'formMessage', FieldErrors.FormMessage)
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
              disabled={pending}
              className='w-[50%] rounded-lg bg-[#1C2B3A] px-[14px] py-[10px] text-[14px] text-text-white transition-all hover:bg-[#263B50] disabled:bg-opacity-20'
            >
              submit-message
            </button>
          </form>
        )}
        <CodeSnippet
          name={formData.senderName}
          email={formData.senderEmail}
          message={formData.formMessage}
        />
      </div>
    </main>
  );
};

export default Contact;
