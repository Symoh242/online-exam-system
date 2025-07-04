
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-yellow-400 text-black py-8 px-4 sm:px-6 md:px-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
        <div>
          <h3 className="font-bold mb-4">XYZ University</h3>
          <p>Online Examinations System</p>
        </div>
        <div>
          <h3 className="font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link href="/courses" className="hover:underline">How to Log In</Link></li>
            <li><Link href="/tutorials" className="hover:underline">Tutorials</Link></li>
            <li><Link href="/help" className="hover:underline">Online Helpdesk</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-4">Legal</h3>
          <ul className="space-y-2">
            <li><Link href="#" className="hover:underline">Privacy Policy</Link></li>
            <li><Link href="#" className="hover:underline">Terms & Conditions</Link></li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto mt-8 pt-4 border-t border-black/20 text-center text-sm">
        <p>&copy; 2025 XYZ University. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
