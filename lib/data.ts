import emailIcon from '@/public/icons/email.svg';
import githubIcon from '@/public/icons/contacts/github.svg';
import linkedinIcon from '@/public/icons/contacts/linkedin.svg';
import phoneIcon from '@/public/icons/phone.svg';
import folderRose from '@/public/icons/folder-rose.svg';
import folderBlue from '@/public/icons/folder-blue.svg';
import folderGreen from '@/public/icons/folder-green.svg';
import { ContactsData } from './types';

export const navLinks = [
  {
    name: '_hello',
    href: '/',
  },
  {
    name: '_about-me',
    href: '/about',
  },
  {
    name: '_projects',
    href: '/projects',
  },
  {
    name: '_contact-me',
    href: '/contact',
  },
];

export const contactsData: ContactsData = {
  github: {
    title: 'github',
    url: 'https://github.com/lukacsja',
    icon: githubIcon,
  },
  linkedin: {
    title: 'linkedin',
    url: 'https://linkedin.com/in/janos-lukacs-25786025a',
    icon: linkedinIcon,
  },
  phone: {
    title: 'phone',
    number: '+36307821583',
    icon: phoneIcon,
  },
  email: {
    title: 'email',
    address: 'dev.lukacs@gmail.com',
    icon: emailIcon,
  },
};

export const aboutData = [
  {
    title: 'personal-info',
    icon: '/',
    content: [
      {
        title: 'bio',
        icon: folderRose,
        paragraph:
          'bio... ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat officia deserunt mollit anim id est laborum.',
      },
      {
        title: 'interests',
        icon: folderGreen,
        paragraph:
          'interests... ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat officia deserunt mollit anim id est laborum.',
      },
      {
        title: 'education',
        icon: folderBlue,
        paragraph:
          'education... ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat officia deserunt mollit anim id est laborum.',
      },
    ],
  },
  {
    title: 'professional-info',
    icon: '/',
    content: [
      {
        title: 'experience',
        icon: folderRose,
        paragraph:
          'experience... ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat officia deserunt mollit anim id est laborum.',
      },
      {
        title: 'hard-skills',
        icon: folderGreen,
        paragraph:
          'hard-skills... ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat officia deserunt mollit anim id est laborum.',
      },
      {
        title: 'soft-skills',
        icon: folderBlue,
        paragraph:
          'soft-skills... ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat officia deserunt mollit anim id est laborum.',
      },
    ],
  },
  {
    title: 'hobbies',
    icon: '/',
    content: [
      {
        title: 'sports',
        icon: folderRose,
        paragraph:
          'sports... ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat officia deserunt mollit anim id est laborum.',
      },
      {
        title: 'gaming',
        icon: folderGreen,
        paragraph:
          'gaming... ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat officia deserunt mollit anim id est laborum.',
      },
      {
        title: 'music',
        icon: folderBlue,
        paragraph:
          'music... ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat officia deserunt mollit anim id est laborum.',
      },
    ],
  },
];
