import Image from 'next/image';
import React from 'react';

interface CurrentTabProps {
  title: string | null;
}

const CurrentTab: React.FC<CurrentTabProps> = ({ title }) => {
  return (
    <div className='hidden text-[16px] text-secondary-gray lg:flex lg:border-b lg:border-lines'>
      <div className='flex justify-between gap-[16px] border-r border-lines px-[16px] '>
        <div className='py-[10px]'>{title}</div>
        <Image
          src='/icons/close-icon.svg'
          alt='close'
          width='18'
          height='18'
          className='py-[5px]'
        />
      </div>
    </div>
  );
};

export default CurrentTab;
