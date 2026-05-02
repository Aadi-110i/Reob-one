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

            <form className="space-y-8" onSubmit={(e) => e.preventDefault()} noValidate>
              <div className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="fullname" className="text-[10px] font-bold tracking-[0.2em] opacity-30 uppercase px-6">Full Name</label>
                  <div className="relative group">
                    <User className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 opacity-20 group-focus-within:opacity-100 transition-opacity" aria-hidden="true" />
                    <input 
                      id="fullname"
                      type="text" 
                      name="name"
                      autoComplete="name"
                      placeholder="e.g. David Reob" 
                      className="w-full bg-[#faf9f6] border border-[#2c2c2c]/5 rounded-full py-5 pl-14 pr-6 text-[10px] font-bold tracking-widest placeholder:text-[#2c2c2c]/10 focus:ring-1 focus:ring-[#2c2c2c]/10 transition-all outline-none"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-[10px] font-bold tracking-[0.2em] opacity-30 uppercase px-6">Email Address</label>
                  <div className="relative group">
                    <Mail className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 opacity-20 group-focus-within:opacity-100 transition-opacity" aria-hidden="true" />
                    <input 
                      id="email"
                      type="email" 
                      name="email"
                      autoComplete="email"
                      spellCheck="false"
                      placeholder="e.g. david@reob-audio.com" 
                      className="w-full bg-[#faf9f6] border border-[#2c2c2c]/5 rounded-full py-5 pl-14 pr-6 text-[10px] font-bold tracking-widest placeholder:text-[#2c2c2c]/10 focus:ring-1 focus:ring-[#2c2c2c]/10 transition-all outline-none"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="space-y-2">
                    <label htmlFor="password" className="text-[10px] font-bold tracking-[0.2em] opacity-30 uppercase px-6">Create Password</label>
                    <div className="relative group">
                      <Lock className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 opacity-20 group-focus-within:opacity-100 transition-opacity" aria-hidden="true" />
                      <input 
                        id="password"
                        type="password" 
                        name="password"
                        autoComplete="new-password"
                        spellCheck="false"
                        placeholder="Min. 8 characters" 
                        className="w-full bg-[#faf9f6] border border-[#2c2c2c]/5 rounded-full py-5 pl-14 pr-6 text-[10px] font-bold tracking-widest placeholder:text-[#2c2c2c]/10 focus:ring-1 focus:ring-[#2c2c2c]/10 transition-all outline-none"
                      />
                    </div>
                  </div>
                  <div className="flex gap-1 px-4" aria-label="Password strength indicator">
                    <div className="h-1 flex-1 bg-[#2c2c2c] rounded-full" />
                    <div className="h-1 flex-1 bg-[#2c2c2c] rounded-full" />
                    <div className="h-1 flex-1 bg-[#2c2c2c]/10 rounded-full" />
                    <div className="h-1 flex-1 bg-[#2c2c2c]/10 rounded-full" />
                  </div>
                  <p className="text-[7px] uppercase tracking-widest font-bold opacity-30 text-right px-4">Strength: Medium</p>
                </div>
              </div>

              <div className="space-y-6">
                <label className="flex items-start gap-4 cursor-pointer group px-2">
                  <input type="checkbox" name="terms" required className="mt-1 w-4 h-4 rounded border-[#2c2c2c]/10 text-[#2c2c2c] focus:ring-0 bg-[#faf9f6]" />
                  <span className="text-[10px] font-bold tracking-widest opacity-30 group-hover:opacity-60 transition-opacity uppercase leading-relaxed">
                    I agree to the Terms of Service and Privacy Policy, including our commitment to ethical data use.
                  </span>
                </label>

                <div className="space-y-4">
                  <button type="submit" className="w-full reob-button bg-[#2c2c2c] text-[#faf9f6] py-5 rounded-full font-bold uppercase tracking-widest hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl">
                    Create Reob Account
                  </button>
                  
                  <div className="relative py-4">
                    <div className="absolute inset-0 flex items-center" aria-hidden="true"><div className="w-full border-t border-[#2c2c2c]/5"></div></div>
                    <div className="relative flex justify-center text-[8px] font-bold uppercase tracking-widest"><span className="bg-white px-4 opacity-20">Or sign up with</span></div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <button type="button" className="flex items-center justify-center gap-3 py-4 border border-[#2c2c2c]/5 rounded-full hover:bg-[#faf9f6] transition-all group" aria-label="Sign up with Google">
                      <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="w-4 h-4 opacity-40 group-hover:opacity-100 transition-opacity" alt="" />
                      <span className="text-[8px] font-bold tracking-widest uppercase">Google</span>
                    </button>
                    <button type="button" className="flex items-center justify-center gap-3 py-4 border border-[#2c2c2c]/5 rounded-full hover:bg-[#faf9f6] transition-all group" aria-label="Sign up with Apple">
                      <img src="https://www.svgrepo.com/show/303108/apple-black-logo.svg" className="w-4 h-4 opacity-40 group-hover:opacity-100 transition-opacity" alt="" />
                      <span className="text-[8px] font-bold tracking-widest uppercase">Apple</span>
                    </button>
                  </div>
                </div>
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
