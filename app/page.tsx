import React from 'react';
import Intro from '@/components/animated-intro';
import SnakeGame from '@/components/snake-game/snake-game';

export default function Home() {
  return (
    <div className='w-full flex-1 px-7 py-20 lg:flex lg:items-center lg:justify-center lg:gap-20 lg:px-12 lg:py-12'>
      <div className='gradient-circle top-left' />
      <div className='gradient-circle bottom-right' />
      <Intro />
      <SnakeGame />
    </div>
  );
}
