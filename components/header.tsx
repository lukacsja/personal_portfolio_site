"use client";

import React from "react";
import { navLinks } from "@/lib/data";
import Link from "next/link";
import { useMobileMenu } from "@/context/mobileMenuContext";
import MobileMenu from "./mobileMenu";
import { IconContext } from "react-icons";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";

const Header = () => {
  const { isMobileMenuOpen, toggleMobileMenu } = useMobileMenu();

  console.log(isMobileMenuOpen);

  return (
    <>
      <header className="w-full h-[56px] px-[18px] border-b border-lines flex justify-between items-center bg-primary-light text-secondary-gray text-[16px]">
        <span>janos-lukacs</span>
        <div className="hidden lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-8 py-4 last:ml-auto"
            >
              {link.name}
            </Link>
          ))}
        </div>
        <IconContext.Provider
          value={{ color: "var(--color-secondary-gray)", size: "30px" }}
        >
          <div className="flex">
            <button
              onClick={toggleMobileMenu}
              className="transform active:rotate-90 transition-transform duration-300 ease-in-out lg:hidden"
            >
              {isMobileMenuOpen ? <RxCross1 /> : <RxHamburgerMenu />}
            </button>
          </div>
        </IconContext.Provider>
      </header>
      <MobileMenu />
    </>
  );
};

export default Header;
