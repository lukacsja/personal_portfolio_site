'use client';

import PageTitle from '@/components/page-title';
import React, { useState } from 'react';
import { contactsData, aboutData } from '@/lib/data';
import Image from 'next/image';
import DropdownItem from '@/components/dropdown-item';
import Link from 'next/link';

const About = () => {
  const [currentContent, setCurrentContent] = useState<string>('bio');

  const getCurrentParagraph = (title: string) => {
    for (const section of aboutData) {
      const item = section.content.find((item) => item.title === title);
      if (item) {
        return item.paragraph;
      }
    }
    return null;
  };

  const getParentSectionTitle = (paragraphTitle: string) => {
    for (const section of aboutData) {
      const item = section.content.find(
        (item) => item.title === paragraphTitle
      );
      if (item) {
        return section.title;
      }
    }
    return null;
  };

  return (
    <main className='flex-1 px-[27px] pb-[24px] pt-[21px] text-text-white lg:flex lg:px-0 lg:py-0'>
      <div className='lg:flex lg:min-w-[310px] lg:max-w-[310px] lg:flex-col lg:border-r-[1px] lg:border-lines'>
        <PageTitle title='_about-me' />

        <div className='flex flex-col gap-[3px] lg:gap-0'>
          {aboutData.map((section) => (
            <DropdownItem
              key={section.title}
              title={section.title}
              content={
                <div className='flex flex-col gap-[10px] py-[16px] text-secondary-gray lg:px-[22px]'>
                  {section.content.map((item) => (
                    <div
                      key={item.title}
                      className='gap- flex cursor-pointer gap-[12px] hover:text-text-white'
                      onClick={() => setCurrentContent(item.title)}
                    >
                      <Image
                        src='/icons/arrow-right.svg'
                        alt='asd'
                        width={16}
                        height={16}
                        className={`${
                          item.title === currentContent ? 'rotate-90' : ''
                        } h-auto w-auto transition-all`}
                        priority
                      />
                      <div className='flex gap-[10px] transition-all duration-300'>
                        <Image src={item.icon} alt={item.title} priority />
                        <p
                          className={
                            item.title === currentContent
                              ? 'text-text-white'
                              : ''
                          }
                        >
                          {item.title}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              }
            />
          ))}

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
        </div>
      </div>

      <div className='py-[38px] text-secondary-gray'>
        <span className='text-text-white'>{`// ${getParentSectionTitle(
          currentContent
        )} `}</span>
        <span>{`/ ${currentContent}`}</span>
        <p className='mt-[16px]'>{getCurrentParagraph(currentContent)}</p>
      </div>
    </main>
  );
};

export default About;
