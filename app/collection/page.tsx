"use client";

import { Navbar, Footer } from "@/components/Shared";
import { motion } from "framer-motion";
import Link from "next/link";

const products = [
  { 
    id: "reob-one", 
    name: "Reob One", 
    category: "Over-Ear Headphones", 
    price: "$450",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=1000"
  },
  { 
    id: "reob-one-pro", 
    name: "Reob One Pro", 
    category: "Reference Monitors", 
    price: "$750",
    image: "https://images.unsplash.com/photo-1583394838336-acd977730f8a?auto=format&fit=crop&q=80&w=1000"
  },
  { 
    id: "reob-mini", 
    name: "Reob Mini", 
    category: "In-Ear Monitors", 
    price: "$280",
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&q=80&w=1000"
  },
  { 
    id: "reob-studio", 
    name: "Reob Studio", 
    category: "Active Speakers", 
    price: "$1,200",
    image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&q=80&w=1000"
  },
  { 
    id: "reob-studio-max", 
    name: "Reob Studio Max", 
    category: "Floor Standing", 
    price: "$3,500",
    image: "https://images.unsplash.com/photo-1594106190274-b4f75c7b246c?auto=format&fit=crop&q=80&w=1000"
  },
  { 
    id: "reob-amp", 
    name: "Reob Amp", 
    category: "Tube Amplifier", 
    price: "$850",
    image: "https://images.unsplash.com/photo-1616423641454-da976191c944?auto=format&fit=crop&q=80&w=1000"
  },
  { 
    id: "reob-carry", 
    name: "Reob Carry", 
    category: "Travel Case", 
    price: "$85",
    image: "https://images.unsplash.com/photo-1544652478-6653e09f18a2?auto=format&fit=crop&q=80&w=1000"
  },
  { 
    id: "reob-stand", 
    name: "Reob Stand", 
    category: "Walnut Stand", 
    price: "$120",
    image: "https://images.unsplash.com/photo-1585298723682-7115561c51b7?auto=format&fit=crop&q=80&w=1000"
  }
];

export default function Collection() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="fixed inset-0 noise-overlay" />

      <main className="pt-60 pb-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto space-y-32">
          <header className="space-y-12">
            <div className="flex items-center gap-4 text-[10px] uppercase tracking-widest font-bold opacity-30 text-[#2c2c2c]">
              <Link href="/" className="hover:opacity-100 transition-opacity">Home</Link>
              <span>/</span>
              <span>Collection</span>
            </div>
            <h1 className="text-7xl md:text-9xl font-serif text-[#2c2c2c]">The <br /> <span className="italic font-light text-outline">Collection.</span></h1>
            <p className="text-xl md:text-2xl opacity-60 leading-relaxed font-light max-w-2xl text-[#2c2c2c]">
              From laboratory-grade headphones to artisanal home audio systems. Every piece is a testament to our pursuit of sonic perfection.
            </p>
          </header>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#2c2c2c]/10 border border-[#2c2c2c]/10 overflow-hidden rounded-3xl shadow-2xl">
            {products.map((p, i) => (
              <Link 
                href={`/collection/${p.id}`} 
                key={p.id}
                className="bg-[#faf9f6] p-12 space-y-8 group cursor-pointer hover:bg-white transition-all duration-700 relative"
              >
                <div className="aspect-[3/4] bg-[#2c2c2c]/5 rounded-2xl overflow-hidden group-hover:scale-105 transition-transform duration-700 border border-[#2c2c2c]/5 relative">
                  <img src={p.image} alt={p.name} className="w-full h-full object-cover transition-opacity duration-700" />
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-2xl font-serif italic text-[#2c2c2c]">{p.name}</h3>
                      <p className="text-[10px] uppercase tracking-widest font-bold opacity-30 text-[#2c2c2c]">{p.category}</p>
                    </div>
                    <span className="text-sm font-bold opacity-60 text-[#2c2c2c]">{p.price}</span>
                  </div>
                  <button className="w-full text-[10px] uppercase tracking-widest font-bold border border-[#2c2c2c]/10 py-4 group-hover:bg-[#2c2c2c] group-hover:text-white transition-all text-[#2c2c2c]">
                    View Technical Specs
                  </button>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
