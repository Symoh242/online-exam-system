'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { GraduationCap, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from '@/lib/utils';

export function Header() {
  const pathname = usePathname();

  return (
    <header className="py-4 px-4 sm:px-6 md:px-8 border-b bg-white sticky top-0 z-10">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-xl font-bold text-foreground">
          <GraduationCap className="w-7 h-7 text-primary" />
          XYZ University
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 hover:text-primary transition-colors outline-none">
              Categories <ChevronDown className="w-4 h-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem asChild>
                <Link href="/exam">Exams</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/admissions">Admissions</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/courses">Student Portal</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Link href="/" className={cn(
            "transition-colors hover:text-primary pb-1",
            pathname === "/" ? "text-primary border-b-2 border-primary" : "text-foreground"
          )}>
            Home
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Button variant="outline" asChild>
             <Link href="/courses">Log In</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
