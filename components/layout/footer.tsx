'use client';

import React from 'react';
import { contactsData } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import SocialLink from '../social-link';

const Footer = () => {
  return (
    <footer className='sticky bottom-0 z-[999] flex h-12 w-full items-center justify-between border-t border-lines bg-primary-light'>
      <div className='flex items-center justify-center'>
        <span className='px-6 text-secondary-gray'>find me in:</span>
        <SocialLink
          href={contactsData.github.url}
          src={contactsData.github.icon}
          alt='visit github profile'
        />
        <SocialLink
          href={contactsData.linkedin.url}
          src={contactsData.linkedin.icon}
          alt='visit linkedin profile'
        />
      </div>
      <Link
        href='/janos-lukacs-cv-front-end.pdf'
        download
        target='_blank'
        rel='noopener noreferrer'
        className='flex h-12 w-12 items-center justify-center gap-[10px] border-l border-lines text-secondary-gray transition-all duration-300 hover:bg-lines lg:w-auto lg:px-[20px]'
      >
        <Image src='/icons/cv.svg' alt='download cv' width={24} height={24} />
        <span className='hidden lg:block'>download-cv</span>
      </Link>
    </footer>
  );
};

export default Footer;
