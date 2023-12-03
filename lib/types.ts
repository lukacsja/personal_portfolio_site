import { StaticImageData } from 'next/image';

export type ContactsData = {
  github: {
    title: string;
    url: string;
    icon: string;
  };
  linkedin: {
    title: string;
    url: string;
    icon: string;
  };
  phone: {
    title: string;
    number: string;
    icon: string;
  };
  email: {
    title: string;
    address: string;
    icon: string;
  };
};

export type FormData = {
  senderName: string;
  senderEmail: string;
  formMessage: string;
};

export enum FieldErrorMessages {
  EmptyName = 'Please enter your name',
  EmptyEmail = 'Please enter your email',
  EmptyMessage = 'Please enter your message',
  InvalidName = 'Invalid sender name.',
  InvalidEmail = 'Invalid sender email.',
  InvalidMessage = 'Invalid message',
  NoError = '',
}

export type MoveDirection = 'up' | 'down' | 'left' | 'right';

export enum TechItems {
  react = 'React',
  next = 'Next.js',
  tw = 'Tailwind',
  sass = 'SASS',
  ts = 'Typescript',
  js = 'Javascript',
  html = 'HTML5',
  css = 'CSS3',
}

export type Technology = {
  title: TechItems;
  icon: string;
};

export type Project = {
  id: number;
  title: string;
  url: string;
  image: StaticImageData;
  desc: string;
  tags: TechItems[];
};
