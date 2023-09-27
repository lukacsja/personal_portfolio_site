'use client';

import Image from 'next/image';
import React, { useState } from 'react';

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
      <div
        className='mx-[-27px] flex cursor-pointer select-none items-center gap-3 border-lines bg-lines px-[27px] py-[5px] text-[16px] lg:mx-0 lg:w-full lg:border-b lg:bg-inherit lg:px-[22px] lg:py-[10px]'
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
      {isDropdownOpen && content}
    </>
  );
};

export default DropdownItem;
