'use client';

import PageTitle from '@/components/page-title';
import React, { useRef, useState } from 'react';
import { contactsData, aboutData } from '@/lib/data';
import Image from 'next/image';
import DropdownItem from '@/components/dropdown-item';
import Link from 'next/link';
import LineNumbers from '@/components/line-numbers';
import CurrentTab from '@/components/current-tab-desktop';

const About = () => {
  const [currentContent, setCurrentContent] = useState<string>('bio');

  const paragraphRef = useRef<HTMLDivElement>(null);

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
    <main className='mt-[56px] flex-1 px-[27px] pb-[24px] pt-[21px] text-text-white lg:flex lg:px-0 lg:py-0'>
      <div className='lg:flex lg:min-w-[310px] lg:max-w-[310px] lg:flex-col'>
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
                        alt='arrow right'
                        width={16}
                        height={16}
                        priority
                        className={`${
                          item.title === currentContent ? 'rotate-90' : ''
                        } h-auto w-auto transition-all`}
                      />
                      <div className='flex select-none gap-[10px] transition-all duration-300'>
                        <Image
                          src={item.icon}
                          alt={item.title}
                          width={14}
                          height={14}
                          priority
                        />
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
                    width={14}
                    height={14}
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
                    width={14}
                    height={14}
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

      <div className='w-full lg:flex lg:flex-col lg:border-l lg:border-lines'>
        <div className='hidden border-b border-lines lg:flex'>
          <CurrentTab title={getParentSectionTitle(currentContent) || ''} />
        </div>

        <div className='items-start lg:flex lg:h-full lg:w-full lg:gap-[12px] lg:px-[24px]'>
          <div className='mt-[42px] h-full w-full justify-center py-[38px] text-secondary-gray lg:mt-0 lg:flex lg:min-w-[50%] lg:border-r lg:border-lines lg:px-[24px]'>
            <div className='mb-[16px] lg:hidden'>
              <span className='text-text-white'>
                {`// ${getParentSectionTitle(currentContent)} `}
              </span>
              <span>{`/ ${currentContent}`}</span>
            </div>
            <div className='flex h-full w-full items-start justify-center gap-[20px] text-[18px] leading-[27px] text-secondary-gray'>
              <LineNumbers codeContainerRef={paragraphRef} lineHeight={27} />
              <div className='' ref={paragraphRef}>
                {getCurrentParagraph(currentContent)}
              </div>
            </div>
          </div>
          <div className='hidden justify-center lg:flex lg:h-full lg:w-full lg:items-start lg:gap-[20px] lg:px-[24px] lg:py-[38px] lg:text-[18px] lg:leading-[27px] lg:text-secondary-gray'>
            code snippet showcase
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
