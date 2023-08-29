"use client";

import React from "react";
import { contacts } from "@/lib/data";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="flex items-center justify-between h-12 pl-[18px]">
      <span className="text-secondary-gray">find me in:</span>
      <div className="flex">
        <a
          href={contacts.github}
          target="_blank"
          className="flex justify-center items-center w-12 h-12 border-l-[1px] border-lines"
        >
          <Image
            src="/icons/contacts/github.svg"
            alt="github logo"
            width="24"
            height="24"
          />
        </a>
        <a
          href={contacts.linkedin}
          target="_blank"
          className="flex justify-center items-center w-12 h-12 border-l-[1px] border-lines"
        >
          <Image
            src="/icons/contacts/linkedin.svg"
            alt="linkedin logo"
            width="24"
            height="24"
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
