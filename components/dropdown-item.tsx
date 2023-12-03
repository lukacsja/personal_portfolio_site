import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface DropdownItemProps {
  title: string;
  icon: string;
  onClick?: () => void;
  hasArrow?: boolean;
  currentContent?: string;
  isLink?: boolean;
  url?: string;
}

const DropdownItem: React.FC<DropdownItemProps> = ({
  title,
  icon,
  onClick,
  hasArrow: arrow,
  currentContent,
  isLink,
  url,
}) => {
  return (
    <>
      <div
        key={title}
        className='flex cursor-pointer gap-3 hover:text-text-white'
        onClick={onClick}
      >
        {arrow && (
          <Image
            src='/icons/arrow-right-fill.svg'
            alt={title}
            width={16}
            height={16}
            priority
            className={`${
              title === currentContent ? 'rotate-90' : ''
            } h-auto w-auto transition-all`}
          />
        )}

        <div className='flex select-none gap-2 transition-all duration-300'>
          <Image src={icon} alt={title} width={14} height={14} priority />

          {isLink ? (
            <Link href={url || ''} target='_blank' rel='noopener noreferrer'>
              {title}
            </Link>
          ) : (
            <p className={title === currentContent ? 'text-text-white' : ''}>
              {title}
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default DropdownItem;
