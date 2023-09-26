'use client';

import React from 'react';
import { contactsData } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='flex h-12 w-full items-center justify-between border-t border-lines bg-inherit pl-[18px]'>
      <span className='text-secondary-gray'>find me in:</span>
      <div className='flex'>
        <Link
          href={contactsData.github.url}
          target='_blank'
          className='flex h-12 w-12 items-center justify-center border-l border-lines transition-all duration-300 hover:bg-lines'
        >
          <Image
            src={contactsData.github.icon}
            alt='github logo'
            width='24'
            height='24'
          />
        </Link>
        <Link
          href={contactsData.linkedin.url}
          target='_blank'
          className='flex h-12 w-12 items-center justify-center border-l border-lines transition-all duration-300 hover:bg-lines'
        >
          <Image
            src={contactsData.linkedin.icon}
            alt='linkedin logo'
            width='24'
            height='24'
          />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
