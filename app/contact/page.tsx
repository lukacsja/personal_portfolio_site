import React from 'react';
import { contactsData } from '@/lib/data';
import ContactForm from '@/components/contact/contact-form';
import CurrentTab from '@/components/current-tab-desktop';
import DropdownItem from '@/components/dropdown-item';
import DropdownMenu from '@/components/dropdown-menu';
import PageTitle from '@/components/page-title';

const Contact = () => {
  return (
    <div className='flex-1 px-7 py-4 text-text-white lg:flex lg:p-0'>
      <div className='lg:flex lg:min-w-[292px] lg:max-w-[292px] lg:flex-col'>
        <PageTitle title='_contact-me' />
        <div className='flex flex-col gap-1 lg:gap-0'>
          <DropdownMenu
            title={'contacts'}
            content={
              <>
                <DropdownItem
                  title={contactsData.email.address}
                  icon={contactsData.email.icon}
                  isLink
                  url={`mailto:${contactsData.email.address}`}
                />
                <DropdownItem
                  title={contactsData.phone.number}
                  icon={contactsData.phone.icon}
                  isLink
                  url={`tel:${contactsData.phone.number}`}
                />
              </>
            }
          />
          <DropdownMenu
            title={'find-me-also-in'}
            content={
              <>
                <DropdownItem
                  title={contactsData.linkedin.title}
                  icon={contactsData.linkedin.icon}
                  isLink
                  url={contactsData.linkedin.url}
                />
                <DropdownItem
                  title={contactsData.github.title}
                  icon={contactsData.github.icon}
                  isLink
                  url={contactsData.github.url}
                />
              </>
            }
          />
        </div>
      </div>

      <div className='w-full lg:flex lg:flex-col lg:border-l lg:border-lines'>
        <div className='hidden border-b border-lines lg:flex'>
          <CurrentTab title='contacts' />
        </div>
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
