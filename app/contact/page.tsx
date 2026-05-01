"use client";

import { Navbar, Footer } from "@/components/Shared";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="fixed inset-0 noise-overlay" />

      <main className="pt-60 pb-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-32">
          <div className="space-y-12">
            <h1 className="text-7xl md:text-9xl font-serif leading-none uppercase tracking-tighter">Get in <br /> <span className="italic font-light text-outline text-[#2c2c2c]">Touch.</span></h1>
            <p className="text-xl text-[#2c2c2c]/60 leading-relaxed font-light">
              Whether you have an enquiry about a specific product or simply want to learn more about our philosophy, we'd love to hear from you.
            </p>
            <div className="space-y-4 pt-12">
              <p className="text-[10px] uppercase tracking-widest font-bold opacity-30">Press & Enquiries</p>
              <a href="mailto:studio@aura-audio.com" className="text-3xl font-serif italic hover:opacity-50 transition-opacity underline decoration-[#2c2c2c]/10 underline-offset-8">studio@aura-audio.com</a>
            </div>
          </div>

          <motion.form 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-12"
          >
            <div className="space-y-12">
              <div className="space-y-2">
                <label htmlFor="name" className="text-[10px] uppercase tracking-widest font-bold opacity-40">Your Name</label>
                <input 
                  type="text" 
                  id="name"
                  placeholder="e.g. Julian Vane…"
                  className="w-full bg-transparent border-b border-[#2c2c2c]/10 py-4 focus:outline-none focus:border-[#2c2c2c] transition-colors font-serif italic text-xl"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-[10px] uppercase tracking-widest font-bold opacity-40">Email Address</label>
                <input 
                  type="email" 
                  id="email"
                  placeholder="e.g. julian@vane.com…"
                  className="w-full bg-transparent border-b border-[#2c2c2c]/10 py-4 focus:outline-none focus:border-[#2c2c2c] transition-colors font-serif italic text-xl"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-[10px] uppercase tracking-widest font-bold opacity-40">Message</label>
                <textarea 
                  id="message"
                  rows={4}
                  placeholder="How can we assist you?…"
                  className="w-full bg-transparent border-b border-[#2c2c2c]/10 py-4 focus:outline-none focus:border-[#2c2c2c] transition-colors font-serif italic text-xl resize-none"
                ></textarea>
              </div>
            </div>
            
            <button type="submit" className="aura-button w-full uppercase text-[10px] font-bold tracking-[0.3em]">
              Send Message
            </button>
          </motion.form>
        </div>
      </main>

      <Footer />
    </div>
  );
}
