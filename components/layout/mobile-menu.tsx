import React, { useEffect } from 'react';
import { navLinks } from '@/lib/data';
import Link from 'next/link';
import { useMobileMenu } from '@/context/mobileMenuContext';

const MobileMenu = () => {
  const { isMobileMenuOpen, closeMobileMenu } = useMobileMenu();

  useEffect(() => {
    window.addEventListener('resize', closeMobileMenu);
    return () => window.removeEventListener('resize', closeMobileMenu);
  }, [window.innerWidth]);

  return (
    <div
      className={`fixed bottom-12 top-14 z-[1000] flex w-full flex-col justify-between overflow-hidden bg-primary-medium transition-all duration-300 lg:hidden`}
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
    </div>
  );
};

export default MobileMenu;
