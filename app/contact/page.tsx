'use client';

import ContactForm from '@/components/contact-form';
import DropdownItem from '@/components/dropdown-item';
import PageTitle from '@/components/page-title';
import SectionDivider from '@/components/sectionDivider';
import { contactsData } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React from 'react';

const Contact = () => {
  return (
    <main
      className='flex-1 px-[27px] pb-[24px] pt-[21px] text-text-white 
    lg:flex lg:px-0 lg:py-0'
    >
      <div className='lg:flex lg:min-w-[310px] lg:max-w-[310px] lg:flex-col lg:border-r-[1px] lg:border-lines'>
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
      <div className='w-full lg:flex lg:flex-col'>
        <div className='hidden text-[16px] text-secondary-gray lg:flex lg:py-[5px]'>
          <div className='flex justify-between px-[15px]'>
            <div>contacts</div>
            <Image src='/icons/x.svg' alt='close' width='18' height='18' />
          </div>
        </div>
        <SectionDivider direction='horizontal' />
        <ContactForm />
      </div>
    </main>
  );
};

export default Contact;
