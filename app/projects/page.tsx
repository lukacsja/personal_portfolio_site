'use client';

import PageTitle from '@/components/page-title';
import React, { useState } from 'react';
import { projectsList, technologies } from '@/lib/data';
import DropdownItem from '@/components/dropdown-item';
import Image from 'next/image';
import CurrentTab from '@/components/current-tab-desktop';
import { Technology } from '@/lib/types';
import ProjectCard from '@/components/project-card';

const Projects = () => {
  // const filteredTechnologies = technologies.filter((tech) =>
  //   currentFilters.includes(tech.title)
  // );
  const [currentFilters, setCurrentFilters] = useState<string[]>(['HTML']);
  // const [filteredTechs, setFilteredTechs] =
  //   useState<Technology[]>(technologies);

  const handleCheckboxChange = (techTitle: string) => {
    if (currentFilters.includes(techTitle)) {
      setCurrentFilters(currentFilters.filter((title) => title !== techTitle));
    } else {
      setCurrentFilters([...currentFilters, techTitle]);
    }
  };

  return (
    <main className='mt-[56px] flex-1 px-[27px] pb-[24px] pt-[21px] text-text-white lg:flex lg:px-0 lg:py-0'>
      <div className='lg:flex lg:min-w-[310px] lg:max-w-[310px] lg:flex-col'>
        <PageTitle title='_projects' />

        <div className='flex flex-col gap-[3px] lg:gap-0'>
          <DropdownItem
            title={'projects'}
            content={
              <div className='flex flex-col gap-[16px] py-[16px] text-secondary-gray lg:px-[22px]'>
                {technologies.map((tech) => (
                  <div
                    key={tech.title}
                    className='flex cursor-pointer items-center gap-[24px] hover:text-text-white'
                  >
                    <div
                      onClick={() => handleCheckboxChange(tech.title)}
                      className={`${
                        currentFilters.includes(tech.title)
                          ? 'bg-secondary-gray'
                          : 'bg-inherit'
                      } flex h-[18px] w-[18px] items-center justify-center rounded-sm border border-secondary-gray transition-all duration-300 checked:bg-secondary-gray`}
                    >
                      <Image
                        src='/icons/technologies/pipe.svg'
                        alt='pipe logo'
                        width={12}
                        height={12}
                        priority
                        className={`${
                          currentFilters.includes(tech.title)
                            ? 'display:block'
                            : 'hidden'
                        } h-auto w-auto`}
                      />
                    </div>
                    <label
                      htmlFor={`${tech.title}-checkbox`}
                      className='flex select-none gap-[10px] transition-all duration-300'
                    >
                      <Image src={tech.icon} alt={tech.title} priority />
                      <p
                        className={
                          currentFilters.includes(tech.title)
                            ? 'text-text-white'
                            : ''
                        }
                      >
                        {tech.title}
                      </p>
                    </label>
                  </div>
                ))}
              </div>
            }
          />
        </div>
      </div>

      <div className='w-full lg:flex lg:flex-col lg:border-l lg:border-lines'>
        <CurrentTab title='// projects / filters' />
        <div className='mt-[42px] lg:hidden'>
          <span className='text-text-white'>{`// projects`}</span>
          <span>{` / all`}</span>
        </div>
        <div className='mt-[16px] lg:mt-0 lg:flex lg:h-full lg:w-full lg:items-center lg:justify-center lg:gap-[12px] lg:p-[48px]'>
          <ul className='flex w-full flex-col justify-center gap-[20px] text-secondary-gray md:grid md:grid-cols-2 md:gap-[30px] lg:grid lg:grid-cols-3 lg:gap-[40px]'>
            {projectsList.map((project, index) => (
              <li className='' key={project.title}>
                <div className='mb-[16px]'>
                  <span className='text-secondary-blue'>{`Project ${
                    index + 1
                  }`}</span>
                  <span>{` / ${project.title}`}</span>
                </div>
                <ProjectCard
                  title={project.title}
                  url={project.url}
                  image='/images/project1.jpg'
                  desc={project.desc}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
};

export default Projects;
