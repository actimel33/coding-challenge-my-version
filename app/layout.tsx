import './globals.css';

import clsx from 'clsx';
import type { Metadata } from 'next';

import { Inter } from 'next/font/google';
import Head from 'next/head';

import Layout from '@components/organisms/root-layout';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'My Assets',
  description: 'Manage Your Assets In One Place',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className="h-full" lang="en">
      <Head>
        <meta content="initial-scale=1, width=device-width" name="viewport" />
      </Head>
      <body className={clsx(inter.className, 'h-full')}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
