import React from 'react';
import { navLinks } from '@/lib/data';
import Link from 'next/link';
import { useMobileMenu } from '@/context/mobileMenuContext';
import Footer from './footer';

const MobileMenu = () => {
  const { isMobileMenuOpen, closeMobileMenu } = useMobileMenu();
  return (
    <div
      className={`fixed bottom-0 top-[56px] z-[999] flex w-full flex-col justify-between overflow-hidden bg-primary-light transition-all duration-300 lg:hidden ${
        isMobileMenuOpen ? 'right-0' : 'right-[-100%]'
      }`}
    >
      <div className='flex flex-col text-text-white'>
        {navLinks.map((link) => (
          <Link
            key={link.href}
            onClick={closeMobileMenu}
            href={link.href}
            className='border-b border-lines p-[18px]'
          >
            {link.name}
          </Link>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default MobileMenu;
