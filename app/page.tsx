import { contacts } from "@/lib/data";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex-1 px-[27px] pt-[96px] pb-[84px] lg:flex lg:justify-center lg:items-center lg:py-0 lg:px-12 lg:gap-20">
      <div className="gradient-circle top-left"></div>
      <div className="gradient-circle bottom-right"></div>
      <div className="flex flex-col justify-between h-full lg:justify-evenly">
        <section className="flex flex-col leading-none">
          <p className="text-[18px] text-text-white mb-[10px]">Hi all. I am</p>
          <h1 className="text-[62px] text-text-white mb-[5px]">Janos Lukacs</h1>
          <h2 className="text-[20px] text-accent-green lg:text-secondary-blue lg:text-[32px]">{`> Front-end developer`}</h2>
        </section>

        <section className="flex flex-col gap-4 text-[14px] lg:text-[16px]">
          <p className="text-secondary-gray lg:hidden">{`// find my profile on Github:`}</p>
          <p className="hidden text-secondary-gray lg:block">{`// complete or skip the game to continue`}</p>
          <p className="hidden text-secondary-gray lg:block">{`// you can also see it on my Github page:`}</p>
          <div>
            <span className="text-secondary-blue">const </span>
            <span className="text-accent-green">githubLink </span>
            <span className="text-white">= </span>
            <Link
              className="text-accent-rose underline"
              href={contacts.github}
              target="_blank"
            >
              {contacts.github}
            </Link>
          </div>
        </section>
      </div>
      <div className="hidden bg-gradient-to-br via-[#1D745A] from-[#175553] to-[#175553] w-[510px] h-[475px] lg:block bg-primary-dark"></div>
    </main>
  );
}
