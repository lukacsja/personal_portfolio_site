import React from "react";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { IconContext } from "react-icons/lib/esm/iconContext";

const Footer = () => {
  return (
    <footer className="flex items-center justify-between h-12 pl-[18px]">
      <span className="text-secondary-gray">find me in:</span>
      <IconContext.Provider
        value={{ color: "var(--color-secondary-gray)", size: "24px" }}
      >
        <div className="flex">
          <a
            href="https://github.com/lukacsja"
            target="_blank"
            className="flex justify-center items-center w-12 h-12 border-l-[1px] border-lines"
          >
            <BsGithub />
          </a>
          <a
            href="https://linkedin.com/in/janos-lukacs-25786025a/"
            target="_blank"
            className="flex justify-center items-center w-12 h-12 border-l-[1px] border-lines"
          >
            <BsLinkedin />
          </a>
        </div>
      </IconContext.Provider>
    </footer>
  );
};

export default Footer;
