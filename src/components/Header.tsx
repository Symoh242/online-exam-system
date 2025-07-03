
import Link from 'next/link';
import { GraduationCap, Bell } from 'lucide-react';
import { Button } from './ui/button';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

export function Header() {
  return (
    <header className="py-3 px-4 sm:px-6 md:px-8 border-b border-border/40 sticky top-0 bg-background/95 backdrop-blur-sm z-10">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors">
          <div className="p-2 bg-primary/20 rounded-lg">
            <GraduationCap className="w-6 h-6 text-primary" />
          </div>
          <h1 className="text-2xl font-bold tracking-tight">SavannahTech Admin</h1>
        </Link>
        <nav className="hidden md:flex items-center gap-2">
          <Button variant="ghost" asChild>
            <Link href="/">Dashboard</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/courses">Departments</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/staff">Staff</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/admissions">Admissions</Link>
          </Button>
        </nav>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon">
            <Bell className="w-5 h-5" />
            <span className="sr-only">Notifications</span>
          </Button>
          <Avatar>
            <AvatarImage src="https://placehold.co/40x40" alt="Mathew Ndeto" data-ai-hint="profile picture" />
            <AvatarFallback>MN</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
}
