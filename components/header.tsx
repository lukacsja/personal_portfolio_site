"use client";

import React from "react";
import Image from "next/image";
import { navLinks } from "@/lib/data";
import Link from "next/link";
import { useMobileMenu } from "@/context/mobileMenuContext";
import MobileMenu from "./mobileMenu";

const Header = () => {
  const { isMobileMenuOpen, toggleMobileMenu } = useMobileMenu();

  console.log(isMobileMenuOpen);

  return (
    <>
      <header className="fixed w-full h-[56px] px-[18px] border-b border-lines flex justify-between items-center">
        <span className="text-[16px] text-secondary-gray">janos-lukacs</span>
        <div className="hidden lg:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.name}
            </Link>
          ))}
        </div>
        {isMobileMenuOpen ? (
          <button onClick={toggleMobileMenu}>
            <Image
              src="/icons/x.svg"
              alt="open the menu"
              width={18}
              height={18}
              quality={95}
              priority={true}
              className="transform active:rotate-90 transition-transform duration-300 ease-in-out"
            />
          </button>
        ) : (
          <button onClick={toggleMobileMenu}>
            <Image
              src="/icons/hamburger.svg"
              alt="close the menu"
              width={18}
              height={18}
              quality={95}
              priority={true}
              className="transform active:rotate-90 transition-transform duration-300 ease-in-out"
            />
          </button>
        )}
      </header>
      <MobileMenu />
    </>
  );
};

export default Header;
