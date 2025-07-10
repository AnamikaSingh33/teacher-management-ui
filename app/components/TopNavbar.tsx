// File: components/TopNavbar.tsx
'use client';

import Image from 'next/image';

export default function TopNavbar() {
  return (
    <header className="h-12 bg-red-600 text-white flex items-center justify-between px-6 shadow">
      <div className="text-sm sm:text-base font-medium">
        Teachers / <span className="font-semibold">Alynia Allan</span>
      </div>
      <div className="flex items-center gap-2">
        <Image
          src="/avatar.jpg"
          alt="User Avatar"
          width={28}
          height={28}
          className="rounded-full object-cover"
        />
        <span className="text-sm font-light">Admin</span>
      </div>
    </header>
  );
}
