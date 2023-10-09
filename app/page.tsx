import Intro from '@/components/animated-intro';
import SnakeGame from '@/components/snake-game/snake-game';

export default function Home() {
  return (
    <main className='mt-[56px] flex-1 px-[27px] pb-[84px] pt-[96px] lg:flex lg:items-center lg:justify-center lg:gap-20 lg:px-12 lg:py-0'>
      <div className='gradient-circle top-left' />
      <div className='gradient-circle bottom-right' />
      <Intro />
      <SnakeGame />
    </main>
  );
}
