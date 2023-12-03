import emailIcon from '@/public/icons/email.svg';
import githubIcon from '@/public/icons/contacts/github.svg';
import linkedinIcon from '@/public/icons/contacts/linkedin.svg';
import phoneIcon from '@/public/icons/phone.svg';
import folderRose from '@/public/icons/folder-rose.svg';
import folderBlue from '@/public/icons/folder-blue.svg';
import folderGreen from '@/public/icons/folder-green.svg';
import reactLogo from '@/public/icons/technologies/react.svg';
import sassLogo from '@/public/icons/technologies/sass.svg';
import twLogo from '@/public/icons/technologies/tw.svg';
import tsLogo from '@/public/icons/technologies/ts.svg';
import nextLogo from '@/public/icons/technologies/next.svg';
import cssLogo from '@/public/icons/technologies/css.svg';
import htmlLogo from '@/public/icons/technologies/html.svg';
import jsLogo from '@/public/icons/technologies/js.svg';
import phoneWebshopImage from '@/public/images/phone-webshop.png';
import portFolioSiteImage from '@/public/images/portfolio-site.png';
import passwordGeneratorAppImage from '@/public/images/password-generator-app.png';
import dictionaryWebAppImage from '@/public/images/dictionary-web-app.png';
import { ContactsData, TechItems } from './types';

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
        paragraph: `Having spent over a decade as a sponsored pro honing my skills at the online poker tables, I discovered the thrilling world of programming and haven't looked back since. \n
        I consider myself a lifelong learner and continuously expanding my skillset, with Node.js backend development as my next target.
        Currently I'm looking for a job opportunity, so I'm actively crafting my portfolio on this webpage.\n
        With a solid understanding of technologies like HTML, CSS (including preprocessors), JavaScript, React, TypeScript, Tailwind, and Next.js I feel ready to bring my passion for coding to a professional setting and to continue learning faster than ever before.`,
      },
      {
        title: 'interests',
        icon: folderGreen,
        paragraph: `I'm truly passionate about coding and I'm determined to turn this passion into a full-time career, constantly seeking ways to improve my skills and knowledge.\n
        My immediate goal is to expand my expertise in backend development, with Node.js being my preferred starting point.\n
        Furthermore, I'm excited about broadening my horizons by diving into mobile application development, not just limited to websites. The prospect of creating apps that can be used by people worldwide is an exciting challenge that I'm eager to take on.\n
        Moreover, I'm actively working on enhancing my English skills, recognizing their significance in the tech industry. I also have plans to revive my German language proficiency.`,
      },
      {
        title: 'education',
        icon: folderBlue,
        paragraph: `Last year, I enrolled in an international bootcamp program at Mate Academy. This immersive experience exposed me to full-time development, collaborative code reviews with fellow students, and constructive feedback from mid and senior-level developers. Throughout the program, I successfully tackled over 300 tasks, consistently meeting strict deadlines, which honed my ability to manage time effectively while delivering high-quality work. This experience provided me with a solid foundation in coding and real-world problem-solving.\n
        Since completing the bootcamp, my commitment to continuous learning has remained unwavering, and I've been actively seeking opportunities to further improve and expand my skill set.`,
      },
    ],
  },
  {
    title: 'professional-info',
    icon: '/',
    content: [
      {
        title: 'hard-skills',
        icon: folderGreen,
        paragraph: `My expertise includes proficiency in HTML, CSS (incl preprocessors and frameworks such as Tailwind or Bulma) TypeScript, JavaScript, React (Next.js). For prototyping and design collaboration, I am proficient in Figma. I have a solid foundation in algorithms with over 300 solved tasks further complement my technical skills. My level of English allows me to communicate and collaborate effectively in an international team setting.`,
      },
      {
        title: 'soft-skills',
        icon: folderBlue,
        paragraph: `Before transitioning into the world of web development, I spent 12 years as a sponsored online poker player. This experience provided me with a unique set of skills that are directly applicable to a career in web development. As a poker player, I honed my analytical thinking, attention to detail, problem-solving abilities, and the discipline to thrive in a competitive environment. These skills, combined with my new passion for programming, allow me to approach challenges from multiple angles and find creative solutions.\n
        I pride myself on being an exceptional team player. Throughout my life, I have participated in various team-oriented activities, such as playing basketball for 12 years or collaborating with an international group of professional poker players and investors. These experiences have taught me the value of effective communication, cooperation, and collective problem-solving.`,
      },
    ],
  },
];

export const technologies = [
  { title: TechItems.html, icon: htmlLogo },
  { title: TechItems.css, icon: cssLogo },
  { title: TechItems.js, icon: jsLogo },
  { title: TechItems.sass, icon: sassLogo },
  { title: TechItems.tw, icon: twLogo },
  { title: TechItems.ts, icon: tsLogo },
  { title: TechItems.react, icon: reactLogo },
  { title: TechItems.next, icon: nextLogo },
];

export const projectsList = [
  {
    id: 1,
    title: '_portfolio-site',
    url: 'https://github.com/lukacsja/personal_portfolio_site',
    image: portFolioSiteImage,
    desc: 'The site you are currently visiting - Check out the source code on GitHub!',
    tags: [
      TechItems.html,
      TechItems.css,
      TechItems.js,
      TechItems.react,
      TechItems.tw,
      TechItems.ts,
      TechItems.next,
    ],
  },
  {
    id: 2,
    title: '_dictionary-web-app',
    url: 'https://github.com/lukacsja/dictionary-web-app',
    image: dictionaryWebAppImage,
    desc: 'A mobile-first dictionary web app - built with Next.js, Typescript and TailwindCSS.',
    tags: [
      TechItems.html,
      TechItems.css,
      TechItems.js,
      TechItems.react,
      TechItems.sass,
      TechItems.ts,
      TechItems.tw,
      TechItems.next,
    ],
  },
  {
    id: 3,
    title: '_react-webshop',
    url: 'https://github.com/lukacsja/product_catalog',
    image: phoneWebshopImage,
    desc: 'A phone webshop built with React and SASS.',
    tags: [
      TechItems.html,
      TechItems.css,
      TechItems.js,
      TechItems.react,
      TechItems.sass,
      TechItems.ts,
    ],
  },
  {
    id: 4,
    title: '_password-generator-app',
    url: 'https://github.com/lukacsja/password-generator-app',
    image: passwordGeneratorAppImage,
    desc: 'A password generator app built with Next.js.',
    tags: [
      TechItems.html,
      TechItems.css,
      TechItems.js,
      TechItems.tw,
      TechItems.react,
      TechItems.next,
      TechItems.ts,
    ],
  },
];
