'use client';

import React from 'react';
import { contactsData } from '@/lib/data';
import Image from 'next/image';
import SectionDivider from './sectionDivider';

const Footer = () => {
  return (
    <>
      <SectionDivider />
      <footer className='flex h-12 items-center justify-between pl-[18px]'>
        <span className='text-secondary-gray'>find me in:</span>
        <div className='flex'>
          <a
            href={contactsData.github.url}
            target='_blank'
            className='flex h-12 w-12 items-center justify-center border-l-[1px] border-lines transition-all duration-300 hover:bg-lines'
          >
            <Image
              src={contactsData.github.icon}
              alt='github logo'
              width='24'
              height='24'
            />
          </a>
          <a
            href={contactsData.linkedin.url}
            target='_blank'
            className='flex h-12 w-12 items-center justify-center border-l-[1px] border-lines transition-all duration-300 hover:bg-lines'
          >
            <Image
              src={contactsData.linkedin.icon}
              alt='linkedin logo'
              width='24'
              height='24'
            />
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
