import "./globals.css";

import "tailwindcss/tailwind.css";

import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import Header from "@/components/header";
import { MobileMenuProvider } from "@/context/mobileMenuContext";
import SectionDivider from "@/components/sectionDivider";

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
      <body className={fira_Code.className}>
        <MobileMenuProvider>
          <Header />
          <SectionDivider />
          {children}
        </MobileMenuProvider>
      </body>
    </html>
  );
}
