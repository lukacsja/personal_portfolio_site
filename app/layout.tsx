import './globals.css';
import type { Metadata } from 'next';
import { Fira_Code } from 'next/font/google';
import Header from '@/components/layout/header';
import { MobileMenuProvider } from '@/context/mobileMenuContext';
import Footer from '@/components/layout/footer';

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
        className={`${fira_Code.className} flex min-h-screen min-w-[320px] items-center justify-center bg-primary-dark text-text-white selection:bg-secondary-green selection:text-white`}
      >
        <div
          className='flex w-full flex-col bg-primary-light'
          style={{ minHeight: 'calc(100vh - 1px)' }}
        >
          <MobileMenuProvider>
            <Header />
            <main className='flex w-full flex-1'>{children}</main>
            <Footer />
          </MobileMenuProvider>
        </div>
      </body>
    </html>
  );
}
