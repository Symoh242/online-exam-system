
import Link from 'next/link';
import { BookCheck } from 'lucide-react';
import { Button } from './ui/button';

export function Header() {
  return (
    <header className="py-4 px-4 sm:px-6 md:px-8 border-b sticky top-0 bg-background/80 backdrop-blur-sm z-10">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors">
          <div className="p-2 bg-primary/20 rounded-lg">
            <BookCheck className="w-6 h-6 text-primary" />
          </div>
          <h1 className="text-2xl font-bold tracking-tight">Examplify</h1>
        </Link>
      </div>
    </header>
  );
}
