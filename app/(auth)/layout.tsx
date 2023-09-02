import { ReactNode } from 'react';
import { Inter } from 'next/font/google';
import { ClerkProvider } from '@clerk/nextjs';

import '../globals.css';

export const metadata = {
  title: 'Threads',
  description: 'A NextJS 13 Meta Threads Application',
};

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className} bg-dark-1`}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
