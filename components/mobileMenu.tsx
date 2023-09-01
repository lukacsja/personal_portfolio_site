import React from 'react';
import { navLinks } from '@/lib/data';
import Link from 'next/link';
import SectionDivider from './sectionDivider';
import { useMobileMenu } from '@/context/mobileMenuContext';
import Footer from './footer';

const MobileMenu = () => {
  const { isMobileMenuOpen, closeMobileMenu } = useMobileMenu();
  return (
    <div
      className={`z-999 fixed bottom-0 top-[56px] flex w-full flex-col justify-between bg-primary-light transition-all duration-300 lg:hidden ${
        isMobileMenuOpen ? 'right-0' : 'right-[-100%]'
      }`}
    >
      <div className='flex flex-col text-text-white'>
        {navLinks.map((link) => (
          <React.Fragment key={link.href}>
            <Link
              onClick={closeMobileMenu}
              href={link.href}
              className='p-[18px]'
            >
              {link.name}
            </Link>
            <SectionDivider />
          </React.Fragment>
        ))}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default MobileMenu;
