
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Eye, EyeOff, Pencil } from 'lucide-react';
import Link from 'next/link';

export default function StudentLoginPage() {
  const router = useRouter();
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // For now, just redirecting to the student dashboard.
    // In a real app, you'd handle authentication here.
    router.push('/student/dashboard');
  };

  return (
    <div className="min-h-screen w-full bg-login-gradient text-white font-sans">
      {/* Top Bar */}
      <header className="flex justify-between items-center p-4">
        <h1 className="text-lg font-semibold">WELCOME, PLEASE LOGIN.</h1>
        <p className="text-sm">♦ Powered by simon styles technologies</p>
      </header>

      <main className="flex items-center justify-center py-10">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Side: Logo */}
          <div className="flex justify-center items-center">
            <div className="text-center">
              <span className="text-6xl font-bold" style={{color: '#004400'}}>UNNAMED</span>
              <span className="text-6xl font-bold" style={{color: '#FFFF00'}}> UNIVERSITY</span>
            </div>
          </div>

          {/* Right Side: Login Form */}
          <div className="flex justify-center items-center">
            <div className="w-full max-w-md bg-black bg-opacity-20 p-8 rounded-2xl shadow-lg border border-white/20">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">System Login</h2>
                <Pencil className="w-5 h-5 text-white" />
              </div>
              <hr className="border-white/30 mb-6"/>

              <form onSubmit={handleLogin} className="space-y-6">
                <div>
                  <Label htmlFor="username" className="text-sm font-light">Username</Label>
                  <Input 
                    id="username" 
                    type="text" 
                    className="bg-white/10 border-white/20 rounded-full mt-2 text-white placeholder-white/50 focus:ring-yellow-400"
                  />
                </div>
                
                <div className="relative">
                  <Label htmlFor="password">Password</Label>
                  <Input 
                    id="password" 
                    type={passwordVisible ? "text" : "password"}
                    className="bg-white/10 border-white/20 rounded-full mt-2 text-white placeholder-white/50 focus:ring-yellow-400"
                  />
                  <button 
                    type="button" 
                    onClick={() => setPasswordVisible(!passwordVisible)}
                    className="absolute right-4 top-10"
                  >
                    {passwordVisible ? <EyeOff className="w-5 h-5 text-white/50" /> : <Eye className="w-5 h-5 text-white/50" />}
                  </button>
                </div>
                
                <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 rounded-full text-white font-bold py-3">
                  LOGIN
                </Button>
              </form>

              <div className="flex items-center my-6">
                <hr className="flex-grow border-t border-white/30" />
                <span className="mx-4 text-sm">Or Continue With</span>
                <hr className="flex-grow border-t border-white/30" />
              </div>

              <div className="space-y-4">
                 <Button variant="outline" className="w-full bg-white text-black hover:bg-gray-200 rounded-full font-semibold py-3 flex items-center justify-center gap-2">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#4CAF50"/><path d="M16.2426 9.4998L11.2929 14.4495L7.75732 10.9139" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  SIGN IN WITH SNAPPLIFY
                </Button>
                <Button className="w-full bg-cyan-500 hover:bg-cyan-600 rounded-full text-white font-bold py-3">
                  LOGIN WITH OTP
                </Button>
              </div>

            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
