"use client";

import { Navbar, Footer } from "@/components/Shared";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Mail, Lock } from "lucide-react";

export default function Login() {
  return (
    <div className="min-h-screen bg-[#faf9f6]">
      <Navbar />
      <div className="fixed inset-0 noise-overlay pointer-events-none" />

      <main className="pt-60 pb-32 px-6">
        <div className="max-w-md mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white border border-[#2c2c2c]/5 rounded-[3rem] p-12 md:p-16 shadow-2xl space-y-12 relative z-10"
          >
            <header className="space-y-4 text-center">
              <h1 className="text-4xl font-serif italic text-[#2c2c2c]">Welcome Back.</h1>
              <p className="text-xs uppercase tracking-widest opacity-40 text-[#2c2c2c]">Enter your credentials to access your Reob account.</p>
            </header>

            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-4">
                <div className="relative">
                  <Mail className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 opacity-20" />
                  <input 
                    type="email" 
                    placeholder="EMAIL ADDRESS" 
                    className="w-full bg-[#faf9f6] border-none rounded-full py-5 pl-14 pr-6 text-[10px] font-bold tracking-widest placeholder:text-[#2c2c2c]/20 focus:ring-1 focus:ring-[#2c2c2c]/10 transition-all outline-none"
                  />
                </div>
                <div className="relative">
                  <Lock className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 opacity-20" />
                  <input 
                    type="password" 
                    placeholder="PASSWORD" 
                    className="w-full bg-[#faf9f6] border-none rounded-full py-5 pl-14 pr-6 text-[10px] font-bold tracking-widest placeholder:text-[#2c2c2c]/20 focus:ring-1 focus:ring-[#2c2c2c]/10 transition-all outline-none"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between px-2">
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input type="checkbox" className="w-4 h-4 rounded border-[#2c2c2c]/10 text-[#2c2c2c] focus:ring-0" />
                  <span className="text-[10px] font-bold tracking-widest opacity-30 group-hover:opacity-60 transition-opacity uppercase">Remember Me</span>
                </label>
                <button className="text-[10px] font-bold tracking-widest opacity-30 hover:opacity-100 transition-opacity uppercase">Forgot Password?</button>
              </div>

              <button type="submit" className="w-full reob-button bg-[#2c2c2c] text-[#faf9f6] py-5 rounded-full font-bold uppercase tracking-widest hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl">
                Sign In
              </button>
            </form>

            <footer className="pt-8 border-t border-[#2c2c2c]/5 text-center space-y-4">
              <p className="text-[10px] font-bold tracking-widest opacity-30 uppercase">New to Reob?</p>
              <Link href="/signup" className="inline-flex items-center gap-2 text-[10px] font-bold tracking-widest hover:opacity-50 transition-opacity uppercase">
                Create Account <ArrowRight className="w-3 h-3" />
              </Link>
            </footer>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
