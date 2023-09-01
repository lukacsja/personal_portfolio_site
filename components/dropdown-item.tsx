'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import SectionDivider from './sectionDivider';

type Props = {
  title: string;
  content: React.ReactElement<HTMLDivElement>;
};

const DropdownItem: React.FC<Props> = ({ title, content }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  const toggleDropdownIcons = () => {
    setIsDropdownOpen((prevstate) => !prevstate);
  };

  return (
    <>
      <div className='flex w-full items-center gap-3 bg-lines px-[27px] py-[5px] text-[16px] lg:bg-inherit lg:px-[22px]'>
        <button onClick={toggleDropdownIcons}>
          <Image
            src='/icons/arrow-right-fill.svg'
            alt='open menu'
            width='8'
            height='8'
            priority
            className={`${isDropdownOpen ? 'rotate-90' : ''} transition-all`}
          />
        </button>
        {title}
      </div>
      {isDropdownOpen && content}
      <div className='hidden lg:block'>
        <SectionDivider />
      </div>
    </>
  );
};

export default DropdownItem;
