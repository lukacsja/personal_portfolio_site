'use client';

import React from 'react';
import Link from 'next/link';
import { contactsData } from '@/lib/data';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';

const Intro = () => {
  return (
    <div className='flex h-full flex-col justify-between lg:justify-evenly'>
      <section className='flex flex-col leading-none'>
        <TypeAnimation
          sequence={[500, 'Hi all. I am']}
          cursor={false}
          className='mb-[10px] block text-[18px] text-text-white'
        />

        <TypeAnimation
          cursor={false}
          speed={25}
          sequence={[2000, 'Janos Lukacs']}
          className='mb-[5px] block break-words text-[62px] text-text-white'
        />

        <TypeAnimation
          cursor={false}
          sequence={[3300, '> Front-end developer']}
          className='block text-[20px] text-accent-green lg:text-[32px] lg:text-secondary-blue'
        />
      </section>

      <motion.div
        initial={{ x: -1000 }}
        animate={{ x: 0 }}
        transition={{
          duration: 10,
          type: 'spring',
          damping: 10,
          stiffness: 100,
          delay: 5,
        }}
        className='flex flex-col gap-4 text-[14px] lg:text-[16px]'
      >
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
      </motion.div>
    </div>
  );
};

export default Intro;
