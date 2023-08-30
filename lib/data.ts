import emailLogo from "@/public/icons/email.svg";
import githubLogo from "@/public/icons/contacts/github.svg";
import linkedinLogo from "@/public/icons/contacts/linkedin.svg";
import phoneLogo from "@/public/icons/phone.svg";
import { ContactsData } from "./types";

export const navLinks = [
  {
    name: "_hello",
    href: "/",
  },
  {
    name: "_about-me",
    href: "/about",
  },
  {
    name: "_projects",
    href: "/projects",
  },
  {
    name: "_contact-me",
    href: "/contact",
  },
];

export const contacts = {
  github: {
    url: "https://github.com/lukacsja",
    logo: githubLogo,
  },
  linkedin: {
    url: "https://linkedin.com/in/janos-lukacs-25786025a",
    logo: linkedinLogo,
  },
  phone: {
    number: "+36307821583",
    logo: phoneLogo,
  } ,
  email: {
    address: "dev.lukacs@gmail.com",
    logo: emailLogo,
  }
};

export const contactIcons = {
  github: githubLogo,
  linkedin: linkedinLogo,
  phone: phoneLogo,
  email: emailLogo,
};

export const icons = {
  github: githubLogo,
  linkedin: linkedinLogo,
  phone: phoneLogo,
  email: emailLogo,
}

export const contactsData: ContactsData = {
  personal: [
    {
      title: "email",
      value: "dev.lukacs@gmail.com",
      logo: emailLogo,
    },
    { title: "phone", value: "+36307821583", logo: phoneLogo },
  ],
  web: [
    { title: "github", value: "https://github.com/lukacsja", logo: githubLogo },
    {
      title: "linkedin",
      value: "https://linkedin.com/in/janos-lukacs-25786025a",
      logo: linkedinLogo,
    },
  ],
};
