'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { useMobileMenu } from '@/context/mobileMenuContext';
import MobileMenu from './mobile-menu';
import { navLinks } from '@/lib/data';
import { usePathname } from 'next/navigation';
import { Twirl as Hamburger } from 'hamburger-react';

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
      <header className='fixed top-0 z-[999] flex h-14 w-full items-center justify-between border-b border-lines px-[18px] text-secondary-gray lg:justify-normal'>
        <Link href='/' className='flex items-center lg:w-[292px]'>
          janos-lukacs
        </Link>
        <nav className='hidden lg:flex'>
          {navLinks.map((link) => (
            <div
              key={link.href}
              className='group flex flex-col border-l border-lines last:border-r'
            >
              <Link
                href={link.href}
                className='flex h-14 items-center px-8 transition-all duration-500 hover:bg-lines'
              >
                {link.name}
              </Link>
              {/* animated underline on hover => */}
              <span
                className={`${
                  pathName === link.href ? 'max-w-full' : ''
                } z-10 mt-[-3px] block h-[3px] max-w-0 bg-accent-yellow transition-all duration-500 group-hover:max-w-full`}
              />
            </div>
          ))}
        </nav>
        <div className='lg:hidden'>
          <Hamburger
            label='Show menu'
            size={24}
            direction='left'
            duration={0.4}
            distance='lg'
            color='#607b96'
            easing='ease-in-out'
            toggled={isMobileMenuOpen}
            toggle={toggleMobileMenu}
          />
        </div>
      </header>
      <MobileMenu />
    </>
  );
};

export default Header;
