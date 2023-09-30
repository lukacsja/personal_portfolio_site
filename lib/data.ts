import emailIcon from '@/public/icons/email.svg';
import githubIcon from '@/public/icons/contacts/github.svg';
import linkedinIcon from '@/public/icons/contacts/linkedin.svg';
import phoneIcon from '@/public/icons/phone.svg';
import folderRose from '@/public/icons/folder-rose.svg';
import folderBlue from '@/public/icons/folder-blue.svg';
import folderGreen from '@/public/icons/folder-green.svg';
import reactLogo from '@/public/icons/technologies/react.svg';
import htmlLogo from '@/public/icons/technologies/html.svg';
import cssLogo from '@/public/icons/technologies/css.svg';
import phoneWebshopImage from '@/public/images/phone-webshop.png';
import portrolioSiteImage from '@/public/images/portfolio-site.png';
import { ContactsData, TechItem } from './types';

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

export const technologies = [
  {
    title: TechItem.html,
    icon: htmlLogo,
  },
  {
    title: TechItem.css,
    icon: cssLogo,
  },
  {
    title: TechItem.js,
    icon: htmlLogo,
  },
  {
    title: TechItem.sass,
    icon: htmlLogo,
  },
  {
    title: TechItem.tw,
    icon: htmlLogo,
  },
  {
    title: TechItem.ts,
    icon: htmlLogo,
  },
  {
    title: TechItem.react,
    icon: reactLogo,
  },
  {
    title: TechItem.next,
    icon: htmlLogo,
  },
];

export const projectsList = [
  {
    id: 1,
    title: '_portfolio-site',
    url: 'https://github.com',
    image: portrolioSiteImage,
    desc: 'The site you are currently visiting - built with Next.js 13.',
    tags: [
      TechItem.html,
      TechItem.css,
      TechItem.js,
      TechItem.react,
      TechItem.sass,
    ],
  },
  {
    id: 2,
    title: '_calculator-app',
    url: 'https://github.com',
    image: phoneWebshopImage,
    desc: 'A simple calculator app built with Next.js.',
    tags: [
      TechItem.html,
      TechItem.css,
      TechItem.js,
      TechItem.tw,
      TechItem.react,
      TechItem.next,
    ],
  },
  {
    id: 3,
    title: '_react-webshop',
    url: 'https://github.com',
    image: phoneWebshopImage,
    desc: 'A phone webshop built with React & TypeScript.',
    tags: [
      TechItem.html,
      TechItem.css,
      TechItem.js,
      TechItem.react,
      TechItem.next,
      TechItem.tw,
    ],
  },
];
