'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Home, Users, Settings, Clock } from 'lucide-react';

const navItems = [
  { href: '/', label: 'Dashboard', icon: <Home size={16} /> },
{ href: '/teachers/1', label: 'Teachers', icon: <Users size={16} /> },
  { href: '/setup', label: 'Setup', icon: <Settings size={16} /> },
  { href: '/timeline', label: 'Timeline', icon: <Clock size={16} /> },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [activePath, setActivePath] = useState<string | null>(null);

  useEffect(() => {
    setActivePath(pathname);
  }, [pathname]);

  return (
    <aside className="w-60 bg-[#1f2937] text-white h-screen flex flex-col">
      <div className="p-4 text-xl font-semibold border-b border-gray-700">
        Admin Panel
      </div>
      <nav className="flex-1 p-4 space-y-1 text-sm">
        {navItems.map(({ href, label, icon }) => (
          <Link
            key={href}
            href={href}
            className={`flex items-center gap-2 p-2 rounded-md transition hover:bg-red-600 ${
              activePath === href ? 'bg-red-700' : ''
            }`}
          >
            {icon}
            <span>{label}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
}
