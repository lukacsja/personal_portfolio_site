import './globals.css';
import type { Metadata } from 'next';
import { Fira_Code } from 'next/font/google';
import Header from '@/components/header';
import { MobileMenuProvider } from '@/context/mobileMenuContext';
import Footer from '@/components/footer';

const fira_Code = Fira_Code({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Janos Lukacs | Front-End Dev',
  description: 'Personal Portfolio Site',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body
        className={`${fira_Code.className} body-height flex flex-col bg-primary-light selection:bg-secondary-green selection:text-white`}
      >
        <MobileMenuProvider>
          <Header />
          {children}
          <Footer />
        </MobileMenuProvider>
      </body>
    </html>
  );
}
