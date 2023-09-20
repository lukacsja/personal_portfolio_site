import React from 'react';
import { navLinks } from '@/lib/data';
import Link from 'next/link';
import { useMobileMenu } from '@/context/mobileMenuContext';
import Footer from './footer';

const MobileMenu = () => {
  const { isMobileMenuOpen, closeMobileMenu } = useMobileMenu();
  return (
    <div
      className={`fixed bottom-0 top-[57px] z-[999] box-border flex w-full flex-col justify-between bg-primary-light transition-all duration-300 ${
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
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default MobileMenu;
