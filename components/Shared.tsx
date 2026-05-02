"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingBag, User, Menu, X, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const links = [
  { name: "Collection", href: "/collection" },
  { name: "Journal", href: "/journal" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className="fixed top-8 w-full z-[100] flex justify-center px-6 pointer-events-none">
        <motion.div 
          initial={false}
          animate={{
            backgroundColor: scrolled ? "rgba(255, 255, 255, 0.4)" : "rgba(255, 255, 255, 0.1)",
            boxShadow: scrolled ? "0 8px 32px 0 rgba(31, 38, 135, 0.07)" : "0 4px 16px 0 rgba(31, 38, 135, 0.02)",
          }}
          className="w-full max-w-5xl backdrop-blur-3xl border border-white/20 rounded-full px-8 py-3 flex items-center justify-between pointer-events-auto transition-all duration-700"
        >
          {/* Logo - Minimal & iOS Style */}
          <Link href="/" className="z-10 group">
             <span className="text-lg font-serif tracking-[0.2em] uppercase text-[#2c2c2c] group-hover:italic transition-all">
              Reob
            </span>
          </Link>

          {/* Navigation Links - Centered Pill Content */}
          <div className="hidden md:flex items-center gap-10">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[9px] uppercase tracking-[0.25em] font-bold hover:text-[#2c2c2c] transition-all relative ${
                  pathname === link.href ? "text-[#2c2c2c]" : "text-[#2c2c2c]/40"
                }`}
              >
                {link.name}
                {pathname === link.href && (
                  <motion.div 
                    layoutId="nav-dot"
                    className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#2c2c2c] rounded-full"
                  />
                )}
              </Link>
            ))}
          </div>

          {/* iOS Style Action Group */}
          <div className="flex items-center gap-5 z-10">
            <button 
              onClick={() => setSearchOpen(true)}
              className="text-[#2c2c2c]/60 hover:text-[#2c2c2c] transition-colors"
            >
              <Search className="w-4 h-4 stroke-[1.5px]" />
            </button>
            <Link href="/login" className="text-[#2c2c2c]/60 hover:text-[#2c2c2c] transition-colors">
              <User className="w-4 h-4 stroke-[1.5px]" />
            </Link>
            <Link href="/cart" className="relative text-[#2c2c2c]/60 hover:text-[#2c2c2c] transition-colors">
              <ShoppingBag className="w-4 h-4 stroke-[1.5px]" />
              <span className="absolute -top-1 -right-1 text-[7px] font-bold">0</span>
            </Link>
            <button 
              onClick={() => setMobileMenuOpen(true)}
              className="md:hidden text-[#2c2c2c]/60 hover:text-[#2c2c2c] transition-colors"
            >
              <Menu className="w-5 h-5 stroke-[1.5px]" />
            </button>
          </div>
        </motion.div>
      </nav>

      {/* Search Overlay */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[300] bg-[#faf9f6]/95 backdrop-blur-xl flex flex-col p-6 md:p-24"
          >
            <div className="max-w-7xl mx-auto w-full space-y-20">
              <div className="flex justify-between items-center">
                <span className="text-[10px] uppercase tracking-[0.5em] font-bold opacity-30 text-[#2c2c2c]">Search The Collection</span>
                <button onClick={() => setSearchOpen(false)} className="text-[#2c2c2c] hover:opacity-50 transition-opacity">
                  <X className="w-8 h-8 stroke-[1px]" />
                </button>
              </div>

              <div className="space-y-12">
                <input 
                  autoFocus
                  type="text" 
                  placeholder="START TYPING..." 
                  className="w-full bg-transparent border-b border-[#2c2c2c]/10 py-8 text-5xl md:text-8xl font-serif italic text-[#2c2c2c] placeholder:text-[#2c2c2c]/5 outline-none focus:border-[#2c2c2c] transition-colors"
                />

                <div className="grid md:grid-cols-2 gap-20">
                  <div className="space-y-8">
                    <h3 className="text-[10px] uppercase tracking-widest font-bold opacity-30 text-[#2c2c2c]">Suggested Searches</h3>
                    <div className="flex flex-wrap gap-4">
                      {["Reob One", "Beryllium Drivers", "Walnut Finish", "Amplifiers", "Limited Drops"].map(s => (
                        <button key={s} className="px-6 py-3 rounded-full border border-[#2c2c2c]/10 text-[10px] font-bold uppercase tracking-widest hover:bg-[#2c2c2c] hover:text-[#faf9f6] transition-all">
                          {s}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-8">
                    <h3 className="text-[10px] uppercase tracking-widest font-bold opacity-30 text-[#2c2c2c]">Quick Links</h3>
                    <ul className="space-y-4 text-2xl font-serif italic text-[#2c2c2c]">
                      <li><Link href="/collection" onClick={() => setSearchOpen(false)}>Shop All Products</Link></li>
                      <li><Link href="/journal" onClick={() => setSearchOpen(false)}>The Journal</Link></li>
                      <li><Link href="/about" onClick={() => setSearchOpen(false)}>Our Narrative</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Narrative Mobile Menu - Full Blur Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(40px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            className="fixed inset-0 z-[200] bg-white/60 flex flex-col p-12"
          >
            <div className="flex justify-between items-center w-full">
              <span className="text-2xl font-serif tracking-[0.2em] uppercase text-[#2c2c2c]">Reob</span>
              <button onClick={() => setMobileMenuOpen(false)} className="text-[#2c2c2c] hover:opacity-50 transition-opacity">
                <X className="w-8 h-8 stroke-[1px]" />
              </button>
            </div>

            <div className="flex-1 flex flex-col justify-center gap-6">
              {links.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link 
                    href={link.href} 
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-6xl font-serif italic text-[#2c2c2c] hover:translate-x-4 transition-transform duration-500 block"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            <footer className="pt-12 border-t border-[#2c2c2c]/10 flex justify-between items-end">
              <div className="space-y-2">
                <p className="text-[8px] uppercase tracking-widest font-bold opacity-30 text-[#2c2c2c]">The Narrative</p>
                <Link href="/login" onClick={() => setMobileMenuOpen(false)} className="text-sm font-serif italic text-[#2c2c2c]">Account Access</Link>
              </div>
              <div className="flex gap-6">
                <a href="#" className="text-[8px] uppercase tracking-widest font-bold opacity-30">IG</a>
                <a href="#" className="text-[8px] uppercase tracking-widest font-bold opacity-30">TW</a>
              </div>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#2c2c2c] text-[#faf9f6] py-24 px-6 md:px-12 perspective-1000 overflow-hidden mt-12">
      <motion.div 
        initial={{ opacity: 0, rotateX: 10, y: 40 }}
        whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="max-w-7xl mx-auto grid md:grid-cols-4 gap-20 transform-3d"
      >
        <div className="md:col-span-2 space-y-8">
          <span className="text-4xl font-serif tracking-[0.2em] uppercase">Reob</span>
          <p className="text-sm opacity-50 max-w-sm leading-relaxed font-light italic">
            "Sound should be felt, not just heard." — The Reob Manifesto
          </p>
          <div className="flex gap-6 pt-4">
             <a href="#" className="text-[10px] uppercase tracking-widest font-bold opacity-30 hover:opacity-100 transition-opacity">Instagram</a>
             <a href="#" className="text-[10px] uppercase tracking-widest font-bold opacity-30 hover:opacity-100 transition-opacity">Journal</a>
             <a href="#" className="text-[10px] uppercase tracking-widest font-bold opacity-30 hover:opacity-100 transition-opacity">Technical Docs</a>
          </div>
        </div>
        <div className="space-y-6">
          <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-30">Shop</h3>
          <ul className="space-y-4 text-sm font-serif italic">
            <li><Link href="/collection" className="hover:opacity-50 transition-opacity">Headphones</Link></li>
            <li><Link href="/collection" className="hover:opacity-50 transition-opacity">Speakers</Link></li>
            <li><Link href="/collection" className="hover:opacity-50 transition-opacity">Amplifiers</Link></li>
            <li><Link href="/collection" className="hover:opacity-50 transition-opacity">Accessories</Link></li>
          </ul>
        </div>
        <div className="space-y-6">
          <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-30">Connect</h3>
          <ul className="space-y-4 text-sm font-serif italic">
            <li><Link href="/contact" className="hover:opacity-50 transition-opacity">Contact Us</Link></li>
            <li><Link href="/journal" className="hover:opacity-50 transition-opacity">Our Journal</Link></li>
            <li><Link href="/craftsmanship" className="hover:opacity-50 transition-opacity">Craftsmanship</Link></li>
            <li><Link href="/about" className="hover:opacity-50 transition-opacity">The Reob Story</Link></li>
          </ul>
        </div>
      </motion.div>
      <div className="max-w-7xl mx-auto pt-20 flex flex-col md:flex-row justify-between gap-8 text-[8px] uppercase tracking-[0.4em] opacity-20">
        <p>© 2026 Reob Audio. Handcrafted Integrity.</p>
        <p>Built with Technical SEO Excellence</p>
      </div>
    </footer>
  );
}
