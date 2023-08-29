import "./globals.css";

import "tailwindcss/tailwind.css";

import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import Header from "@/components/header";
import { MobileMenuProvider } from "@/context/mobileMenuContext";
import SectionDivider from "@/components/sectionDivider";
import Footer from "@/components/footer";

const fira_Code = Fira_Code({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Janos Lukacs | Front-End Dev",
  description: "Personal Portfolio Site",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${fira_Code.className} flex flex-col h-screen bg-primary-light`}
      >
        <MobileMenuProvider>
          <Header />
          <SectionDivider />
          {children}
          <div className="hidden lg:block">
            <Footer />
          </div>
        </MobileMenuProvider>
      </body>
    </html>
  );
}
