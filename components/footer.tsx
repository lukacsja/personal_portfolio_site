'use client';

import React from 'react';
import { contactsData } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='box-border flex h-[48px] w-full items-center justify-between border-t border-lines bg-inherit pl-[18px]'>
      <div className='flex items-center justify-center'>
        <span className='pr-[18px] text-secondary-gray'>find me in:</span>
        <Link
          href={contactsData.github.url}
          target='_blank'
          className='flex h-12 w-12 items-center justify-center border-x border-lines transition-all duration-300 hover:bg-lines'
        >
          <Image
            src={contactsData.github.icon}
            alt='github logo'
            width={24}
            height={24}
          />
        </Link>
        <Link
          href={contactsData.linkedin.url}
          target='_blank'
          className='flex h-12 w-12 items-center justify-center border-r border-lines transition-all duration-300 hover:bg-lines'
        >
          <Image
            src={contactsData.linkedin.icon}
            alt='linkedin logo'
            width={24}
            height={24}
          />
        </Link>
      </div>
      <Link
        href='/janos-lukacs-cv-front-end.pdf'
        download
        target='_blank'
        className='flex h-12 w-12 items-center justify-center gap-[10px] border-l border-lines text-secondary-gray transition-all duration-300 hover:bg-lines lg:w-auto lg:px-[20px]'
      >
        <Image src='/icons/cv.svg' alt='cv logo' width={24} height={24} />
        <span className='hidden lg:block'>download-cv</span>
      </Link>
    </footer>
  );
};

export default Footer;
