
import Link from 'next/link';
import { Button } from './ui/button';
import { HelpCircle, GraduationCap } from 'lucide-react';

export function Footer() {
  return (
    <>
      <footer className="bg-yellow-400 text-black py-8 px-4 sm:px-6 md:px-8">
        <div className="container mx-auto">
          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul>
              <li>
                <Link href="#" className="hover:underline text-sm">
                  Online Help & Ticketing System
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto mt-8 pt-4 border-t border-black/20 flex flex-col sm:flex-row justify-between items-center text-sm">
          <div className="flex items-center gap-2">
             <GraduationCap className="w-5 h-5" />
            <span>XYZ University</span>
          </div>
          <div className="flex gap-4 mt-4 sm:mt-0">
            <Link href="#" className="hover:underline">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:underline">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </footer>
      <Button
        variant="default"
        size="icon"
        className="fixed bottom-4 right-4 h-12 w-12 rounded-full shadow-lg"
      >
        <HelpCircle className="w-6 h-6" />
        <span className="sr-only">Help</span>
      </Button>
    </>
  );
}
