"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingBag, Moon, Sun, Wind } from "lucide-react";
import { useState, useEffect } from "react";

const links = [
  { name: "Collection", href: "/collection" },
  { name: "Journal", href: "/journal" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [atmosphere, setAtmosphere] = useState<"studio" | "nature" | "home">("home");

  useEffect(() => {
    document.body.setAttribute("data-atmosphere", atmosphere);
  }, [atmosphere]);

  return (
    <nav className="fixed w-full z-50 py-10 px-6 md:px-12 pointer-events-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between pointer-events-auto">
        <div className="flex-1 hidden md:flex gap-10">
          {links.slice(0, 2).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-[10px] uppercase tracking-[0.3em] font-bold hover:opacity-50 transition-opacity ${
                pathname === link.href ? "opacity-100" : "opacity-40"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <Link href="/" className="group text-center">
          <span className="text-4xl font-serif tracking-[0.2em] uppercase group-hover:italic transition-all duration-700">
            Reob
          </span>
        </Link>

        <div className="flex-1 flex justify-end items-center gap-10">
          <div className="hidden md:flex gap-10">
            {links.slice(2).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[10px] uppercase tracking-[0.3em] font-bold hover:opacity-50 transition-opacity ${
                  pathname === link.href ? "opacity-100" : "opacity-40"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
          
          <div className="flex items-center gap-6 pl-10 border-l border-current opacity-20">
            <button 
              onClick={() => setAtmosphere(atmosphere === "home" ? "studio" : atmosphere === "studio" ? "nature" : "home")}
              className="opacity-40 hover:opacity-100 transition-opacity flex items-center gap-2 text-[8px] uppercase tracking-widest font-bold pointer-events-auto"
              aria-label="Toggle Atmosphere"
            >
              {atmosphere === "home" && <Sun className="w-4 h-4" />}
              {atmosphere === "studio" && <Moon className="w-4 h-4" />}
              {atmosphere === "nature" && <Wind className="w-4 h-4" />}
              <span className="hidden lg:inline">{atmosphere}</span>
            </button>
            <button aria-label="Open Shopping Bag" className="opacity-40 hover:opacity-100 transition-opacity pointer-events-auto">
              <ShoppingBag className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="py-24 px-6 md:px-12 relative overflow-hidden border-t border-current opacity-90">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-20">
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
            <li><Link href="/about" className="hover:opacity-50 transition-opacity">The Reob Story</Link></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto pt-20 flex flex-col md:flex-row justify-between gap-8 text-[8px] uppercase tracking-[0.4em] opacity-20">
        <p>© 2026 Reob Audio. Handcrafted Integrity.</p>
        <div className="flex gap-10">
          <p>Technical SEO Excellence</p>
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
        </div>
      </div>
    </footer>
  );
}
