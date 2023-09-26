import SnakeGame from '@/components/snake-game/snake-game';
import { contactsData } from '@/lib/data';
import Link from 'next/link';

export default function Home() {
  return (
    <main className='mt-[56px] flex-1 px-[27px] pb-[84px] pt-[96px] lg:flex lg:items-center lg:justify-center lg:gap-20 lg:px-12 lg:py-0'>
      <div className='gradient-circle top-left'></div>
      <div className='gradient-circle bottom-right'></div>
      <div className='flex h-full flex-col justify-between lg:justify-evenly'>
        <section className='flex flex-col leading-none'>
          <p className='mb-[10px] text-[18px] text-text-white'>Hi all. I am</p>
          <h1 className='mb-[5px] text-[62px] text-text-white'>Janos Lukacs</h1>
          <h2 className='text-[20px] text-accent-green lg:text-[32px] lg:text-secondary-blue'>{`> Front-end developer`}</h2>
        </section>

        <section className='flex flex-col gap-4 text-[14px] lg:text-[16px]'>
          <p className='text-secondary-gray lg:hidden'>{`// find my profile on Github:`}</p>
          <p className='hidden text-secondary-gray lg:block'>{`// complete or skip the game to continue`}</p>
          <p className='hidden text-secondary-gray lg:block'>{`// you can also see it on my Github page:`}</p>
          <div>
            <span className='text-secondary-blue'>const </span>
            <span className='text-accent-green'>githubLink </span>
            <span className='text-white'>= </span>
            <Link
              className='text-accent-rose underline'
              href={contactsData.github.url}
              target='_blank'
            >
              {contactsData.github.url}
            </Link>
          </div>
        </section>
      </div>
      <SnakeGame />
    </main>
  );
}
