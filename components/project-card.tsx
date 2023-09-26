import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Project } from '@/lib/types';

type ProjectCardProps = Project;

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  url,
  image,
  desc,
}) => {
  return (
    <div className='flex h-auto w-full max-w-[385px] flex-col overflow-hidden rounded-lg border border-lines'>
      <div className='w-full'>
        <Image
          src={image}
          alt='project image'
          width={300}
          height={150}
          objectFit='cover'
          className='w-full'
        />
      </div>
      <div className='flex w-full flex-col gap-[24px] p-[30px]'>
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
