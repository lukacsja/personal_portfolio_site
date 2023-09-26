import ContactForm from '@/components/contact-form';
import CurrentTab from '@/components/current-tab-desktop';
import DropdownItem from '@/components/dropdown-item';
import PageTitle from '@/components/page-title';
import { contactsData } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Contact = () => {
  return (
    <main className='mt-[56px] flex-1 px-[27px] pb-[24px] pt-[21px] text-text-white lg:flex lg:px-0 lg:py-0'>
      <div className='lg:flex lg:min-w-[310px] lg:max-w-[310px] lg:flex-col'>
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
                  <Link href={contactsData.github.url} target='_blank'>
                    {contactsData.github.title}
                  </Link>
                </address>
                <address className='flex gap-[10px] transition-all duration-300 hover:text-text-white'>
                  <Image
                    src={contactsData.linkedin.icon}
                    alt={contactsData.linkedin.title}
                    priority
                  />
                  <Link href={contactsData.linkedin.url} target='_blank'>
                    {contactsData.linkedin.title}
                  </Link>
                </address>
              </div>
            }
          />
        </div>
      </div>
      <div className='w-full lg:flex lg:flex-col lg:border-l lg:border-lines'>
        <CurrentTab title='contacts' />
        <ContactForm />
      </div>
    </main>
  );
};

export default Contact;
