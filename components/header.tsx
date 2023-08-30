"use client";

import React from "react";
import { navLinks } from "@/lib/data";
import Link from "next/link";
import { useMobileMenu } from "@/context/mobileMenuContext";
import MobileMenu from "./mobileMenu";
import Image from "next/image";

const Header = () => {
  const { isMobileMenuOpen, toggleMobileMenu } = useMobileMenu();

  return (
    <>
      <header className="w-full h-[56px] px-[18px] border-b border-lines flex justify-between items-center text-secondary-gray text-[16px]">
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
        <div className="flex">
          <button onClick={toggleMobileMenu}>
            <Image
              src={isMobileMenuOpen ? "/icons/x.svg" : "/icons/hamburger.svg"}
              alt="linkedin logo"
              width="24"
              height="24"
              quality={95}
              priority
              className="transform active:rotate-90 transition-transform duration-300 ease-in-out lg:hidden"
            />
          </button>
        </div>
      </header>
      <MobileMenu />
    </>
  );
};

export default Header;
