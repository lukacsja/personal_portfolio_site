import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Project } from '@/lib/types';

type ProjectCardProps = Project;

const ProjectCard: React.FC<ProjectCardProps> = ({
  url,
  image,
  desc,
  id,
  title,
}) => {
  return (
    <div className='flex w-full min-w-[285px] max-w-[475px] flex-col gap-[16px]'>
      <div>
        <span className='text-secondary-blue'>{`Project ${id}`}</span>
        <span>{` / ${title}`}</span>
      </div>
      <div className='flex flex-col overflow-hidden rounded-lg border border-lines transition-all duration-300 hover:scale-105'>
        <Image
          src={image}
          alt='project image'
          width={1024}
          height={1024}
          className='h-auto object-fill'
          priority
          placeholder='blur'
        />
        <div className='flex h-1/2 w-full flex-col gap-[24px] p-[30px]'>
          <p className='h-[54px] w-full leading-[130%] text-secondary-gray'>
            {desc}
          </p>
          <Link
            href={url}
            target='_blank'
            className='h-auto w-[130px] rounded-lg bg-[#1C2B3A] px-[14px] py-[10px] text-[14px] text-text-white transition-all hover:bg-[#263B50] '
          >
            view-project
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
