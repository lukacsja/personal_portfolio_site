import React from "react";
import { navLinks } from "@/lib/data";
import Link from "next/link";
import SectionDivider from "./sectionDivider";
import { useMobileMenu } from "@/context/mobileMenuContext";
import Footer from "./footer";

const MobileMenu = () => {
  const { isMobileMenuOpen } = useMobileMenu();
  return (
    <div
      className={`fixed top-[56px] bottom-0 w-full flex justify-between flex-col bg-primary-light z-999 transition-all duration-300 ${
        isMobileMenuOpen ? "right-0" : "right-[-100%]"
      }`}
    >
      <div className="flex flex-col text-text-white">
        {navLinks.map((link) => (
          <React.Fragment key={link.href}>
            <Link href={link.href} className="p-[18px]">
              {link.name}
            </Link>
            <SectionDivider />
          </React.Fragment>
        ))}
      </div>
      <div>
        <SectionDivider />
        <Footer />
      </div>
    </div>
  );
};

export default MobileMenu;
