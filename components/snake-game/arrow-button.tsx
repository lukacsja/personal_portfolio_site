import Image from 'next/image';
import React from 'react';
import { MoveDirections } from '@/lib/types';

interface ArrowButtonProps {
  isGameOver: boolean;
  direction: MoveDirections;
  moveSnake: (direction: MoveDirections) => void;
  image: string;
}

const ArrowButton: React.FC<ArrowButtonProps> = ({
  isGameOver,
  moveSnake,
  direction,
  image,
}) => {
  return (
    <button
      disabled={isGameOver}
      onClick={() => moveSnake(direction)}
      className='flex h-[30px] w-[50px] items-center justify-center rounded-md border-[1px] border-[#1E2D3D] bg-primary-dark transition-all duration-300 hover:bg-accent-rose'
    >
      <Image
        src={image}
        alt='arrow'
        className='h-auto w-auto'
        width={8}
        height={6}
      />
    </button>
  );
};

export default ArrowButton;
