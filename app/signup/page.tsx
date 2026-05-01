"use client";

import { Navbar, Footer } from "@/components/Shared";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Mail, Lock, User, ShieldCheck } from "lucide-react";

export default function SignUp() {
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
              <h1 className="text-4xl font-serif italic text-[#2c2c2c]">Join Reob.</h1>
              <p className="text-xs uppercase tracking-widest opacity-40 text-[#2c2c2c]">Experience the pinnacle of sustainable sound.</p>
            </header>

            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-4">
                <div className="relative">
                  <User className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 opacity-20" />
                  <input 
                    type="text" 
                    placeholder="FULL NAME" 
                    className="w-full bg-[#faf9f6] border-none rounded-full py-5 pl-14 pr-6 text-[10px] font-bold tracking-widest placeholder:text-[#2c2c2c]/20 focus:ring-1 focus:ring-[#2c2c2c]/10 transition-all outline-none"
                  />
                </div>
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

              <div className="space-y-6">
                <label className="flex items-start gap-4 cursor-pointer group px-2">
                  <input type="checkbox" className="mt-1 w-4 h-4 rounded border-[#2c2c2c]/10 text-[#2c2c2c] focus:ring-0" />
                  <span className="text-[10px] font-bold tracking-widest opacity-30 group-hover:opacity-60 transition-opacity uppercase leading-relaxed">
                    I agree to the Terms of Service and Privacy Policy, including our commitment to ethical data use.
                  </span>
                </label>

                <button type="submit" className="w-full reob-button bg-[#2c2c2c] text-[#faf9f6] py-5 rounded-full font-bold uppercase tracking-widest hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl">
                  Create Account
                </button>
              </div>
            </form>

            <footer className="pt-8 border-t border-[#2c2c2c]/5 text-center space-y-6">
              <div className="flex items-center justify-center gap-2 text-[#2c2c2c]/20">
                <ShieldCheck className="w-4 h-4" />
                <span className="text-[8px] uppercase tracking-widest font-bold">Secure Registration</span>
              </div>
              <p className="text-[10px] font-bold tracking-widest opacity-30 uppercase">Already have an account?</p>
              <Link href="/login" className="inline-flex items-center gap-2 text-[10px] font-bold tracking-widest hover:opacity-50 transition-opacity uppercase">
                Sign In Instead <ArrowRight className="w-3 h-3" />
              </Link>
            </footer>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
