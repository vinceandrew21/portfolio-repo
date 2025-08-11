'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { name: 'About', href: '/' },
    { name: 'Career', href: '/posts' },
    { name: 'Projects', href: '/projects' },
    { name: 'Resources', href: '/resources' },
    { name: 'Learn', href: '/learn' },
  ];

  return (
    <div className="flex justify-between items-center p-4">
      <div className="flex items-center justify-between w-full md:max-w-3xl mx-4">
        <nav className="flex justify-center items-center">
          {navLinks.map((link) => (
            <ul key={link.name} className='inline-flex items-center justify-center whitespace-nowrap rounded-md text-base font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground relative block me-2 py-2 md:px-4 px-2 font-semibold hover:bg-neutral-100 dark:hover:bg-neutral-800'>
              <Link href={link.href}
                className={pathname === link.href ? 'underline underline-offset-8' : ''}
              >
                {link.name}
              </Link>
            </ul>
          ))}
        </nav>
      </div>
    </div>
  );
}