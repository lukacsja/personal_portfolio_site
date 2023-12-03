'use client';

import Image from 'next/image';
import React, { useState } from 'react';

type Props = {
  title: string;
  content: React.ReactNode;
};

const DropdownMenu: React.FC<Props> = ({ title, content }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  const toggleDropdownIcons = () => {
    setIsDropdownOpen((prevstate) => !prevstate);
  };

  return (
    <>
      <div
        className='-mx-7 flex cursor-pointer select-none items-center gap-3 border-lines bg-lines px-7 py-1 text-[16px] lg:mx-0 lg:w-full lg:border-b lg:bg-inherit lg:px-6 lg:py-3'
        onClick={toggleDropdownIcons}
      >
        <Image
          src='/icons/arrow-right-fill.svg'
          alt='open menu'
          width={8}
          height={8}
          priority
          className={`${isDropdownOpen ? 'rotate-90' : ''} transition-all`}
        />
        {title}
      </div>
      {isDropdownOpen && (
        <div className='flex flex-col gap-2 py-4 text-secondary-gray lg:px-6'>
          {content}
        </div>
      )}
    </>
  );
};

export default DropdownMenu;
