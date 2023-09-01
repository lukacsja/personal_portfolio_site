'use client';

import React from 'react';
import { navLinks } from '@/lib/data';
import Link from 'next/link';
import { useMobileMenu } from '@/context/mobileMenuContext';
import MobileMenu from './mobileMenu';
import Image from 'next/image';

const Header = () => {
  const { isMobileMenuOpen, toggleMobileMenu } = useMobileMenu();

  return (
    <>
      <header className='flex h-[56px] w-full items-center justify-between border-b border-lines px-[18px] text-secondary-gray lg:justify-normal lg:px-[0]'>
        <div className='lg:w-[309px]'>
          {/* temp hardcode above */}
          <Link href='/' className='p-[18px] pr-0 lg:pl-[22px]'>
            janos-lukacs
          </Link>
        </div>
        <div className='hidden lg:flex'>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className='border-x-[1px] border-lines px-8 py-4 last:ml-auto'
            >
              {link.name}
            </Link>
          ))}
        </div>
        <div className='flex'>
          <button onClick={toggleMobileMenu}>
            <Image
              src={isMobileMenuOpen ? '/icons/x.svg' : '/icons/hamburger.svg'}
              alt='linkedin logo'
              width='24'
              height='24'
              quality={95}
              priority
              className='transform transition-transform duration-300 ease-in-out active:rotate-90 lg:hidden'
            />
          </button>
        </div>
      </header>
      <MobileMenu />
    </>
  );
};

export default Header;
