'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import PageTitle from '@/components/page-title';
import DropdownMenu from '@/components/dropdown-menu';
import CurrentTab from '@/components/current-tab-desktop';
import ProjectCard from '@/components/project-card';
import { projectsList, technologies } from '@/lib/data';
import { Project, TechItems } from '@/lib/types';

const Projects = () => {
  const [currentFilters, setCurrentFilters] = useState<TechItems[]>(
    technologies.map((tech) => tech.title)
  );
  const [filteredProjects, setFilteredProjects] =
    useState<Project[]>(projectsList);

  const filterProjects = () => {
    const filtered = projectsList.filter((project) => {
      return currentFilters.some((tech) => project.tags.includes(tech));
    });
    setFilteredProjects(filtered);
  };

  const handleCheckboxChange = (tech: TechItems) => {
    if (currentFilters.includes(tech)) {
      const newFilters = currentFilters.filter((item) => item !== tech);
      setCurrentFilters(newFilters);
    } else {
      const newFilters = [...currentFilters, tech];
      setCurrentFilters(newFilters);
    }
  };

  useEffect(() => {
    filterProjects();
  }, [currentFilters]);

  return (
    <div className='flex-1 px-7 py-4 text-text-white lg:flex lg:p-0'>
      <div className='lg:flex lg:min-w-[292px] lg:max-w-[292px] lg:flex-col'>
        <PageTitle title='_projects' />

        <div className='flex flex-col gap-1 lg:gap-0'>
          <DropdownMenu
            title={'tech-stack'}
            content={
              <div className='flex flex-col gap-4 py-4 text-secondary-gray lg:px-5'>
                {technologies.map((tech) => (
                  <div
                    key={tech.title}
                    className='flex cursor-pointer items-center gap-6 hover:bg-primary-medium hover:text-text-white
                  '
                    onClick={() => handleCheckboxChange(tech.title)}
                  >
                    <div
                      className={`${
                        currentFilters.includes(tech.title)
                          ? 'bg-secondary-gray'
                          : 'bg-inherit'
                      } flex h-[18px] w-[18px] items-center justify-center rounded-sm border border-secondary-gray transition-all duration-300`}
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
                    <div className='flex select-none gap-[10px] transition-all duration-300'>
                      <Image
                        src={tech.icon}
                        alt={tech.title}
                        width={14}
                        height={14}
                        priority
                      />
                      <p
                        className={
                          currentFilters.includes(tech.title)
                            ? 'text-text-white'
                            : ''
                        }
                      >
                        {tech.title}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            }
          />
        </div>
      </div>

      <div className='w-full lg:flex lg:flex-col lg:border-l lg:border-lines'>
        <div className='hidden border-b border-lines lg:flex'>
          {currentFilters.map((filter) => (
            <CurrentTab
              title={filter}
              key={filter}
              onClose={() => handleCheckboxChange(filter)}
            />
          ))}
        </div>
        <div className='mt-[42px] lg:hidden'>
          <span className='text-text-white'>{`// projects`}</span>
          {currentFilters.length === technologies.length ||
          !currentFilters.length ? (
            <span className='text-secondary-gray'>{` / all`}</span>
          ) : (
            <>
              <span className='text-secondary-gray'> / </span>
              {currentFilters.map((filter) => (
                <span
                  key={filter}
                  className='text-secondary-gray'
                >{`${filter}; `}</span>
              ))}
            </>
          )}
        </div>
        <div className='mt-4 lg:mt-0 lg:flex lg:h-full lg:w-full lg:items-start lg:justify-center lg:gap-3 lg:p-3'>
          <ul className='projects-grid w-full text-secondary-gray'>
            {filteredProjects.map((project) => (
              <li className='' key={project.id}>
                <ProjectCard
                  title={project.title}
                  url={project.url}
                  image={project.image}
                  desc={project.desc}
                  tags={project.tags}
                  id={project.id}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Projects;
