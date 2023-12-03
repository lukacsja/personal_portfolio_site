'use client';

import PageTitle from '@/components/page-title';
import React, { useRef, useState } from 'react';
import { contactsData, aboutData, technologies } from '@/lib/data';
import DropdownMenu from '@/components/dropdown-menu';
import LineNumbers from '@/components/line-numbers';
import CurrentTab from '@/components/current-tab-desktop';
import DropdownItem from '@/components/dropdown-item';
import MagneticContainer from '@/components/magnetic-container';
import Image from 'next/image';
import Paragraph from '@/components/paragraph';

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
    <div className='flex-1 px-7 py-4 text-text-white lg:flex lg:p-0'>
      <div className='lg:flex lg:min-w-[292px] lg:max-w-[292px] lg:flex-col'>
        <PageTitle title='_about-me' />

        <div className='flex flex-col gap-1 lg:gap-0'>
          {aboutData.map((section) => (
            <DropdownMenu
              key={section.title}
              title={section.title}
              content={section.content.map((item) => (
                <DropdownItem
                  key={item.title}
                  title={item.title}
                  icon={item.icon}
                  hasArrow
                  currentContent={currentContent}
                  onClick={() => setCurrentContent(item.title)}
                />
              ))}
            />
          ))}
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
        </div>
      </div>

      <div className='w-full lg:flex lg:flex-col lg:border-l lg:border-lines'>
        <div className='hidden border-b border-lines lg:flex'>
          <CurrentTab title={getParentSectionTitle(currentContent) || ''} />
        </div>

        <div className='lg:flex lg:h-full lg:w-full lg:items-start lg:gap-3 lg:px-6'>
          <div className='mt-11 h-full w-full justify-center py-10 text-secondary-gray lg:mt-0 lg:flex lg:min-w-[50%] lg:border-r lg:border-lines lg:px-6'>
            <div className='mb-4 lg:hidden'>
              <span className='text-text-white'>
                {`// ${getParentSectionTitle(currentContent)} `}
              </span>
              <span>{`/ ${currentContent}`}</span>
            </div>
            <div className='flex h-full w-full items-start justify-center gap-5 text-[18px] leading-[27px] text-secondary-gray'>
              <LineNumbers
                codeContainerRef={paragraphRef}
                lineHeight={27}
                content={getCurrentParagraph(currentContent)}
              />
              <div ref={paragraphRef}>
                <Paragraph
                  content={getCurrentParagraph(currentContent) || ''}
                />
              </div>
            </div>
          </div>
          <div className='hidden lg:flex lg:h-full lg:w-full lg:items-start lg:justify-center lg:gap-5 lg:px-6 lg:py-10 lg:text-[18px] lg:leading-[27px] lg:text-secondary-gray'>
            <div className='flex flex-wrap gap-10'>
              {technologies.map((tech) => (
                <MagneticContainer>
                  <Image
                    src={tech.icon}
                    alt={tech.title}
                    width={40}
                    height={40}
                    priority
                  />
                </MagneticContainer>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
