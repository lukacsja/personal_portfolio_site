import Image from 'next/image';
import React from 'react';

interface Position {
  position: string;
}

const BoardCorner: React.FC<Position> = ({ position }) => {
  const applyPosition = () => {
    switch (position) {
      case 'top-left':
        return 'top-[12px] left-[12px]';
      case 'top-right':
        return 'top-[12px] right-[12px]';
      case 'bottom-left':
        return 'bottom-[12px] left-[12px]';
      case 'bottm-right':
        return 'bottom-[12px] right-[12px]';
      default:
        return '';
    }
  };
  return (
    <div
      className={`${applyPosition()} absolute flex h-[13px] w-[13px] items-center justify-center rounded-full bg-[#196C6A]`}
    >
      <Image
        src='/icons/gameIcons/gametable-x.svg'
        alt='x icon'
        width={6}
        height={6}
      />
    </div>
  );
};

export default BoardCorner;
