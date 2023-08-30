"use client";

import { ContactsCategory } from "@/lib/types";
import Image from "next/image";
import React, { useState } from "react";

type Props = {
  title: string;
  list: ContactsCategory;
};

const DropdownItem: React.FC<Props> = ({ title, list }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  const toggleDropdownIcons = () => {
    setIsDropdownOpen((prevstate) => !prevstate);
  };

  return (
    <>
      <div className="bg-lines w-full text-[16px] flex gap-3 items-center px-[27px] py-[5px]">
        <button onClick={toggleDropdownIcons}>
          <Image
            src="/icons/arrow-right-fill.svg"
            alt="open menu"
            width="8"
            height="8"
            priority
            className={`${isDropdownOpen ? "rotate-90" : ""} transition-all`}
          />
        </button>
        {title}
      </div>
      {isDropdownOpen && (
        <div className="flex flex-col gap-[10px] py-[16px] text-secondary-gray">
          {list?.map((item) => (
            <div
              key={item.value}
              className="flex gap-[10px] hover:text-text-white transition-all duration-300"
            >
              <Image src={item.logo} alt={item.title} priority />
              <span className="cursor-pointer">{item.value}</span>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default DropdownItem;
