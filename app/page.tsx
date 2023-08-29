import Link from "next/link";
import { useState } from "react";

export default function Home() {
  return (
    <main className="flex flex-col justify-between h-screen px-[27px] pt-[96px] pb-[85px] bg-primary-light">
      <div className="gradient-circle top-left"></div>
      <div className="gradient-circle bottom-right"></div>

      <section className="flex flex-col gap-2.5 leading-none">
        <p className="text-[18px] text-text-white">Hi all. I am</p>
        <h1 className="text-[62px] text-text-white">Janos Lukacs</h1>
        <h2 className="text-[20px] text-accent-green">{`> Front-end developer`}</h2>
      </section>

      <section className="flex flex-col gap-4 text-[14px]">
        <p className="text-secondary-gray">{`// find my profile on Github:`}</p>
        <div>
          <span className="text-secondary-blue">const </span>
          <span className="text-accent-green">githubLink </span>
          <span className="text-white">= </span>
          <Link
            className="text-accent-rose"
            href="https://github.com/lukacsja"
            target="_blank"
          >
            {`"https://github.com/lukacsja"`}
          </Link>
        </div>
      </section>
    </main>
  );
}
