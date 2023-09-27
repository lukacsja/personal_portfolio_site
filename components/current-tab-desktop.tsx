import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface CurrentTabProps {
  title: string;
  onClose?: (title: string) => void;
}

const CurrentTab: React.FC<CurrentTabProps> = ({ title, onClose }) => {
  return (
    <div className='hidden text-[16px] text-secondary-gray lg:flex'>
      <div className='flex justify-between gap-[16px] border-r border-lines px-[16px]'>
        <div className='py-[10px]'>{title}</div>
        {onClose ? (
          <Image
            src='/icons/close-icon.svg'
            alt='close'
            width='18'
            height='18'
            className='cursor-pointer py-[5px] transition-all duration-300 hover:scale-150'
            onClick={() => onClose(title)}
          />
        ) : (
          <Link href='/' className='flex items-center justify-center'>
            <Image
              src='/icons/close-icon.svg'
              alt='close'
              width='18'
              height='18'
              className='cursor-pointer py-[5px] transition-all duration-300 hover:scale-150'
            />
          </Link>
        )}
      </div>
    </div>
  );
};

export default CurrentTab;
