// File: app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Sidebar from './components/Sidebar';
import TopNavbar from './components/TopNavbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Teacher Management Interface',
  description: 'Modern responsive UI for managing teachers',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`flex h-screen ${inter.className}`}>
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <TopNavbar />
          <main className="flex-1 overflow-y-auto bg-gray-100 p-6">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
