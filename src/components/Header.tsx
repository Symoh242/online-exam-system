
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Facebook, Twitter, Youtube, Instagram, Search, ShieldCheck } from 'lucide-react';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';
import Image from 'next/image';

export function Header() {
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/academics", label: "Academics" },
    { href: "/student-portal", label: "Student" },
    { href: "/kuccps", label: "KUCCPS" },
    { href: "/graduations", label: "Our Graduations" },
    { href: "/contact", label: "Contact Us" },
    { href: "/application", label: "LU Application Form" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="bg-primary text-primary-foreground py-2">
        <div className="container mx-auto flex items-center justify-between text-xs font-medium">
          <div className="flex items-center gap-4">
            <Link href="#" className="hover:underline">Library</Link>
            <Link href="/student/dashboard" className="hover:underline">Student Portal</Link>
            <Link href="#" className="hover:underline">LU Marathon</Link>
            <Link href="#" className="hover:underline">Virtual Campus</Link>
            <Link href="#" className="hover:underline">E-Learning Platform</Link>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Link href="#" aria-label="Facebook"><Facebook className="w-4 h-4" /></Link>
              <Link href="#" aria-label="Twitter"><Twitter className="w-4 h-4" /></Link>
              <Link href="#" aria-label="YouTube"><Youtube className="w-4 h-4" /></Link>
              <Link href="#" aria-label="Instagram"><Instagram className="w-4 h-4" /></Link>
            </div>
            <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white h-7">
              Research
            </Button>
          </div>
        </div>
      </div>
      <div className="container mx-auto flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-2 text-xl font-bold text-gray-800">
           <Image src="https://www.lukenyauniversity.ac.ke/wp-content/uploads/2021/11/logo-scaled.jpg" alt="Lukenya University Logo" width={50} height={50} />
          <span className="text-xl font-bold" style={{color: '#004400'}}>LUKENYA</span> <span className="text-xl font-bold" style={{color: '#888888'}}>UNIVERSITY</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "transition-colors hover:text-green-600 pb-1 relative",
                pathname === link.href ? "text-green-600" : "text-gray-600"
              )}
            >
              {link.label}
              {pathname === link.href && (
                <span className="absolute bottom-[-18px] left-0 w-full h-1 bg-green-600"></span>
              )}
            </Link>
          ))}
           <button className="text-gray-600 hover:text-green-600">
            <Search className="w-5 h-5" />
          </button>
        </nav>
      </div>
    </header>
  );
}
