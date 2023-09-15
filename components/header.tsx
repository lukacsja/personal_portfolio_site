'use client';

import React from 'react';
import { navLinks } from '@/lib/data';
import Link from 'next/link';
import { useMobileMenu } from '@/context/mobileMenuContext';
import MobileMenu from './mobileMenu';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import SectionDivider from './sectionDivider';

const Header = () => {
  const { isMobileMenuOpen, toggleMobileMenu } = useMobileMenu();
  const pathName = usePathname();

  return (
    <>
      <header className='flex h-[56px] w-full items-center justify-between px-[18px] text-secondary-gray lg:justify-normal lg:px-[0]'>
        <div className='lg:w-[309px]'>
          {/* temp hardcode */}
          <Link href='/' className='p-[18px] pr-0 lg:pl-[22px]'>
            janos-lukacs
          </Link>
        </div>
        <SectionDivider direction='vertical' />
        <nav className='hidden lg:flex'>
          {navLinks.map((link) => (
            <div key={link.href} className='flex'>
              <div className='group flex flex-col'>
                <Link
                  href={link.href}
                  className='px-8 py-4 transition-all duration-500 hover:bg-lines'
                >
                  {link.name}
                </Link>
                <span
                  className={`${
                    pathName === link.href ? 'max-w-full' : ''
                  } z-10 mt-[-3px] block h-[3px] max-w-0 bg-accent-yellow transition-all duration-500 group-hover:max-w-full`}
                ></span>
              </div>
              <SectionDivider direction='vertical' />
            </div>
          ))}
        </nav>
        <div className='flex'>
          <button onClick={toggleMobileMenu}>
            <Image
              src={isMobileMenuOpen ? '/icons/x.svg' : '/icons/hamburger.svg'}
              alt='linkedin logo'
              width={24}
              height={24}
              quality={95}
              priority
              className='h-auto w-auto transform transition-transform duration-300 ease-in-out active:rotate-90 lg:hidden'
            />
          </button>
        </div>
      </header>
      <SectionDivider direction='horizontal' />
      <MobileMenu />
    </>
  );
};

export default Header;
