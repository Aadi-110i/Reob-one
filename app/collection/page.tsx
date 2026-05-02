"use client";

import { Navbar, Footer } from "@/components/Shared";
import { motion } from "framer-motion";
import Link from "next/link";

const categories = [
  {
    name: "Headphones",
    products: [
      { 
        id: "reob-one", 
        name: "Reob One", 
        category: "Over-Ear Headphones", 
        price: "$450.00",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=1000"
      },
      { 
        id: "reob-one-pro", 
        name: "Reob One Pro", 
        category: "Reference Monitors", 
        price: "$750.00",
        image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&q=80&w=1000"
      },
      { 
        id: "reob-mini", 
        name: "Reob Mini", 
        category: "In-Ear Monitors", 
        price: "$280.00",
        image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&q=80&w=1000"
      }
    ]
  },
  {
    name: "Speakers",
    products: [
      { 
        id: "reob-studio-max", 
        name: "Reob Studio Max", 
        category: "Floor Standing", 
        price: "$3,500.00",
        image: "https://images.unsplash.com/photo-1558002038-1037906d895b?auto=format&fit=crop&q=80&w=1000"
      },
      { 
        id: "reob-studio", 
        name: "Reob Studio", 
        category: "Active Speakers", 
        price: "$1,200.00",
        image: "https://images.unsplash.com/photo-1594106190274-b4f75c7b246c?auto=format&fit=crop&q=80&w=1000"
      },
      { 
        id: "reob-studio-mini", 
        name: "Reob Studio Mini", 
        category: "Desktop Monitors", 
        price: "$650.00",
        image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&q=80&w=1000"
      }
    ]
  },
  {
    name: "Electronics",
    products: [
      { 
        id: "reob-vinyl", 
        name: "Reob Vinyl", 
        category: "Artisan Turntable", 
        price: "$2,200.00",
        image: "https://images.unsplash.com/photo-1603048588665-791ca8aea617?auto=format&fit=crop&q=80&w=1000"
      },
      { 
        id: "reob-amp", 
        name: "Reob Amp", 
        category: "Tube Amplifier", 
        price: "$850.00",
        image: "https://images.unsplash.com/photo-1558537348-c0f8e733989b?auto=format&fit=crop&q=80&w=1000"
      },
      { 
        id: "reob-stream", 
        name: "Reob Stream", 
        category: "Network Player", 
        price: "$550.00",
        image: "https://images.unsplash.com/photo-1524368535928-5e560c06d30e?auto=format&fit=crop&q=80&w=1000"
      }
    ]
  },
  {
    name: "Accessories",
    products: [
      { 
        id: "reob-stand", 
        name: "Reob Stand", 
        category: "Walnut Stand", 
        price: "$120.00",
        image: "https://images.unsplash.com/photo-1585298723682-7115561c51b7?auto=format&fit=crop&q=80&w=1000"
      },
      { 
        id: "reob-carry", 
        name: "Reob Carry", 
        category: "Travel Case", 
        price: "$85.00",
        image: "https://images.unsplash.com/photo-1544652478-6653e09f18a2?auto=format&fit=crop&q=80&w=1000"
      },
      { 
        id: "reob-cable", 
        name: "Reob Cable", 
        category: "Silver Litz", 
        price: "$150.00",
        image: "https://images.unsplash.com/photo-1563330232-57114bb0823c?auto=format&fit=crop&q=80&w=1000"
      }
    ]
  }
];

export default function Collection() {
  return (
    <div className="min-h-screen bg-[#faf9f6]">
      <Navbar />
      <div className="fixed inset-0 noise-overlay pointer-events-none" />

      <main className="pt-60 pb-32 px-6 md:px-12 perspective-1000">
        <div className="max-w-7xl mx-auto space-y-40 transform-3d">
          <header className="space-y-12">
            <div className="flex items-center gap-4 text-[10px] uppercase tracking-widest font-bold opacity-30 text-[#2c2c2c]">
              <Link href="/" className="hover:opacity-100 transition-opacity">Home</Link>
              <span>/</span>
              <span>Collection</span>
            </div>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
              <div className="space-y-12 max-w-2xl">
                <motion.h1 
                  initial={{ opacity: 0, rotateX: -20, y: 30 }}
                  whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
                  viewport={{ once: true }}
                  className="text-7xl md:text-9xl font-serif text-[#2c2c2c]"
                >
                  The <br /> 
                  <span className="italic font-light">Collection.</span>
                </motion.h1>
                <p className="text-xl md:text-2xl opacity-60 leading-relaxed font-light text-[#2c2c2c]">
                  A curated ecosystem of high-fidelity audio, from laboratory-grade drivers to artisanal home systems.
                </p>
              </div>

              {/* Filter & Sort Bar */}
              <div className="flex items-center gap-6 pb-4">
                <div className="flex items-center gap-2 border-b border-[#2c2c2c]/10 pb-2 cursor-pointer group hover:border-[#2c2c2c] transition-colors">
                  <span className="text-[10px] font-bold uppercase tracking-widest opacity-30 group-hover:opacity-100 transition-opacity">Filter</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest opacity-30 group-hover:opacity-100">(All)</span>
                </div>
                <div className="flex items-center gap-2 border-b border-[#2c2c2c]/10 pb-2 cursor-pointer group hover:border-[#2c2c2c] transition-colors">
                  <span className="text-[10px] font-bold uppercase tracking-widest opacity-30 group-hover:opacity-100 transition-opacity">Sort</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest opacity-30 group-hover:opacity-100">(Featured)</span>
                </div>
              </div>
            </div>
          </header>

          <div className="space-y-60">
            {categories.map((cat) => (
              <section key={cat.name} className="space-y-20 transform-3d">
                <div className="flex items-end justify-between border-b border-[#2c2c2c]/10 pb-8">
                  <h2 className="text-5xl md:text-7xl font-serif italic text-[#2c2c2c]">{cat.name}</h2>
                  <span className="text-[10px] uppercase tracking-[0.5em] font-bold opacity-20 text-[#2c2c2c] mb-4">
                    {cat.products.length} Models
                  </span>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">
                  {cat.products.map((p, i) => (
                    <Link 
                      href={`/collection/${p.id}`} 
                      key={p.id}
                      className="group space-y-8 cursor-pointer transform-3d"
                    >
                      <motion.div 
                        initial={{ opacity: 0, rotateY: 15, z: -50 }}
                        whileInView={{ opacity: 1, rotateY: 0, z: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ delay: i * 0.1, duration: 0.8, ease: "easeOut" }}
                        className="aspect-[4/5] bg-[#2c2c2c]/5 rounded-3xl overflow-hidden relative shadow-sm group-hover:shadow-2xl transition-all duration-700"
                      >
                        <img 
                          src={p.image} 
                          alt={p.name} 
                          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                          loading="eager"
                        />
                        <div className="absolute inset-0 bg-[#2c2c2c]/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                          <span className="text-[10px] uppercase tracking-widest font-bold text-white border border-white px-8 py-3 rounded-full">
                            Explore Engineering
                          </span>
                        </div>
                      </motion.div>
                      <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 + 0.2 }}
                        className="space-y-4 px-2"
                      >
                        <div className="flex justify-between items-start">
                          <div className="space-y-1">
                            <h3 className="text-3xl font-serif italic text-[#2c2c2c]">{p.name}</h3>
                            <p className="text-[10px] uppercase tracking-widest font-bold opacity-30 text-[#2c2c2c]">{p.category}</p>
                          </div>
                          <span className="text-sm font-bold opacity-60 text-[#2c2c2c]">{p.price}</span>
                        </div>
                        <div className="w-full h-px bg-[#2c2c2c]/10 group-hover:bg-[#2c2c2c] transition-colors duration-700" />
                      </motion.div>
                    </Link>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
