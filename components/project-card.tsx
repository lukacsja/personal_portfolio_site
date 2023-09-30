import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Project } from '@/lib/types';

type ProjectCardProps = Project;

const ProjectCard: React.FC<ProjectCardProps> = ({ url, image, desc }) => {
  return (
    <div className='flex h-auto w-auto max-w-[385px] flex-col overflow-hidden rounded-lg border border-lines transition-all duration-300 hover:scale-105'>
      <div className='h-1/2 w-auto'>
        <Image
          src={image}
          alt='project image'
          width={1024}
          height={1024}
          className='w-auto object-contain'
          priority
          placeholder='blur'
        />
      </div>
      <div className='flex h-1/2 w-full flex-col gap-[24px] p-[30px]'>
        <p className='w-full leading-[130%] text-secondary-gray'>{desc}</p>
        <Link
          href={url}
          target='_blank'
          className='h-auto w-[130px] rounded-lg bg-[#1C2B3A] px-[14px] py-[10px] text-[14px] text-text-white transition-all hover:bg-[#263B50] '
        >
          view-project
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
