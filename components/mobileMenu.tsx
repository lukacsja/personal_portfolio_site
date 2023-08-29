import React from "react";
import { navLinks } from "@/lib/data";
import Link from "next/link";
import SectionDivider from "./sectionDivider";
import { useMobileMenu } from "@/context/mobileMenuContext";

const MobileMenu = () => {
  const { isMobileMenuOpen } = useMobileMenu();
  return (
    <div
      className={`fixed top-[56px] h-full w-full flex flex-col z-999 bg-primary-light text-text-white transition-all duration-300 ${
        isMobileMenuOpen ? "right-0" : "right-[-100%]"
      }`}
    >
      {navLinks.map((link) => (
        <React.Fragment key={link.href}>
          <Link href={link.href} className="p-[18px]">
            {link.name}
          </Link>
          <SectionDivider />
        </React.Fragment>
      ))}
    </div>
  );
};

export default MobileMenu;
