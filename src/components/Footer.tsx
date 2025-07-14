
import Link from 'next/link';
import { Facebook, Twitter, Youtube, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto py-12 px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">About Lukenya</h3>
            <p className="text-sm text-gray-400">
              Lukenya University is a premier institution of higher learning, committed to providing quality education, research, and community service.
            </p>
            <div className="flex space-x-4 mt-4">
              <Link href="#" className="text-gray-400 hover:text-white"><Facebook /></Link>
              <Link href="#" className="text-gray-400 hover:text-white"><Twitter /></Link>
              <Link href="#" className="text-gray-400 hover:text-white"><Youtube /></Link>
              <Link href="#" className="text-gray-400 hover:text-white"><Instagram /></Link>
              <Link href="#" className="text-gray-400 hover:text-white"><Linkedin /></Link>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="text-gray-400 hover:text-white">Student Portal</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white">E-Learning</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white">Downloads</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white">Vacancies</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white">Tenders</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Academics</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="text-gray-400 hover:text-white">School of Business</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white">School of Education</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white">School of Agriculture</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white">School of Health Sciences</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 mt-1 shrink-0" />
                <span className="text-gray-400">Main Campus, Mtito Andei. P.O Box 619-90138, Mtito Andei.</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 shrink-0" />
                <span className="text-gray-400">+254 792 262 103 / +254 722 262 103</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 shrink-0" />
                <span className="text-gray-400">info@lukenyauniversity.ac.ke</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-black py-4">
        <div className="container mx-auto text-center text-sm text-gray-500">
          <p>&copy; 2024 Lukenya University. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
