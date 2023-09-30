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

export enum FormFields {
  SenderName = 'senderName',
  SenderEmail = 'senderEmail',
  FormMessage = 'formMessage',
}

export enum FieldErrors {
  nameEmpty = 'Your name is required.',
  emailEmpty = 'Your email is required.',
  messageEmpty = "Don't forget to type your message!",
  nameInvalid = 'Invalid sender name.',
  emailInvalid = 'Invalid sender email.',
  messageInvalid = 'Invalid message',
  noError = '',
}

export type MoveDirections = 'up' | 'down' | 'left' | 'right';

export enum TechItem {
  html = 'HTML',
  css = 'CSS',
  js = 'Javascript',
  react = 'React',
  next = 'Next.js',
  tw = 'Tailwind',
  sass = 'SASS',
  ts = 'Typescript',
}

export type Technology = {
  title: TechItem;
  icon: string;
};

export type Project = {
  id: number;
  title: string;
  url: string;
  image: StaticImageData;
  desc: string;
  tags: TechItem[];
};
