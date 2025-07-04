
import Link from 'next/link';
import { GraduationCap, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function Header() {
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
              <DropdownMenuItem>Exams</DropdownMenuItem>
              <DropdownMenuItem>Admissions</DropdownMenuItem>
              <DropdownMenuItem>Student Portal</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Link href="/" className="text-primary border-b-2 border-primary pb-1">
            Home
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Button variant="outline" asChild>
             <Link href="#">Log In</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
