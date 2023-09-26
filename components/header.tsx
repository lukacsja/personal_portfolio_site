'use client';

import React, { useEffect } from 'react';
import { navLinks } from '@/lib/data';
import Link from 'next/link';
import { useMobileMenu } from '@/context/mobileMenuContext';
import MobileMenu from './mobileMenu';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const Header = () => {
  const { isMobileMenuOpen, toggleMobileMenu } = useMobileMenu();
  const pathName = usePathname();

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <header className='fixed left-0 top-0 z-[999] flex h-[56px] min-h-[56px] w-full flex-none items-center justify-between border-b border-lines bg-inherit px-[18px] text-secondary-gray lg:justify-normal lg:px-[0]'>
        <div className='lg:w-[310px]'>
          <Link href='/' className='p-[18px] pr-0 lg:pl-[22px]'>
            janos-lukacs
          </Link>
        </div>
        <nav className='hidden lg:flex'>
          {navLinks.map((link) => (
            <div
              key={link.href}
              className='group flex flex-col border-l border-lines last:border-r'
            >
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
          ))}
        </nav>
        <div className='flex lg:hidden'>
          <button onClick={toggleMobileMenu}>
            <Image
              src={isMobileMenuOpen ? '/icons/x.svg' : '/icons/hamburger.svg'}
              alt='linkedin logo'
              width={24}
              height={24}
              quality={95}
              priority
              className='h-auto w-auto transform transition-transform duration-300 ease-in-out active:rotate-90'
            />
          </button>
        </div>
      </header>
      <MobileMenu />
    </>
  );
};

export default Header;
