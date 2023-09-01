import emailIcon from '@/public/icons/email.svg';
import githubIcon from '@/public/icons/contacts/github.svg';
import linkedinIcon from '@/public/icons/contacts/linkedin.svg';
import phoneIcon from '@/public/icons/phone.svg';
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

// export const contactsData: ContactsData = {
//   personal: [
//     {
//       title: "email",
//       value: "dev.lukacs@gmail.com",
//       logo: emailLogo,
//     },
//     { title: "phone", value: "+36307821583", logo: phoneLogo },
//   ],
//   web: [
//     { title: "github", value: "https://github.com/lukacsja", logo: githubLogo },
//     {
//       title: "linkedin",
//       value: "https://linkedin.com/in/janos-lukacs-25786025a",
//       logo: linkedinLogo,
//     },
//   ],
// };
