import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Project } from '@/lib/types';

type ProjectCardProps = Project;

const ProjectCard: React.FC<ProjectCardProps> = ({
  url,
  image,
  desc,
  title,
  id,
}) => {
  return (
    <div className='flex w-full min-w-[280px] max-w-[455px] flex-col gap-4'>
      <div className='whitespace-nowrap'>
        <p className=''>
          <span className='font-bold text-secondary-blue'>{`${id}`}</span>
          {` / ${title}`}
        </p>
      </div>
      <div className='flex flex-col rounded-lg border border-lines transition-all duration-300 hover:scale-105'>
        <Image
          src={image}
          alt='project image'
          width={512}
          height={200}
          className='object-contain'
          priority
          placeholder='blur'
        />

        <div className='flex w-full flex-col gap-6 p-7'>
          <p className='h-20 w-full overflow-hidden text-ellipsis leading-[130%] text-secondary-gray'>
            {desc}
          </p>
          <Link
            href={url}
            target='_blank'
            rel='noopener noreferrer'
            className='flex w-2/3 items-center justify-center rounded-lg bg-[#1C2B3A] px-4 py-3 text-[14px] text-text-white transition-all hover:bg-[#263B50]'
          >
            view-project
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
