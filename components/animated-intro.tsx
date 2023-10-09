'use client';

import React from 'react';
import Link from 'next/link';
import { contactsData } from '@/lib/data';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';

const Intro = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  return (
    <div className='flex h-full flex-col justify-between lg:justify-evenly'>
      <section className='flex flex-col leading-none'>
        <TypeAnimation
          sequence={[300, 'Hi all. I am']}
          cursor={false}
          className='mb-[10px] block text-[18px] text-text-white'
        />

        <TypeAnimation
          cursor={false}
          sequence={[1250, 'Janos Lukacs']}
          className='mb-[5px] block break-words text-[62px] text-text-white'
        />

        <TypeAnimation
          cursor={false}
          sequence={[2250, '> Front-end developer']}
          className='block text-[20px] text-accent-green lg:text-[32px] lg:text-secondary-blue'
        />
      </section>

      <motion.ol
        variants={container}
        initial='hidden'
        animate='show'
        className='flex flex-col gap-4 text-[14px] lg:text-[16px]'
      >
        <motion.li variants={item} className='text-secondary-gray lg:hidden'>
          {`// find my profile on Github:`}
        </motion.li>
        <motion.li
          variants={item}
          className='hidden text-secondary-gray lg:block'
        >
          {`// complete or skip the game to continue`}
        </motion.li>
        <motion.li
          variants={item}
          className='hidden text-secondary-gray lg:block'
        >
          {`// you can also see it on my Github page:`}
        </motion.li>
        <motion.li variants={item}>
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
        </motion.li>
      </motion.ol>
    </div>
  );
};

export default Intro;
