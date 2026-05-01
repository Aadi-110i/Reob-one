"use client";

import { Navbar, Footer } from "@/components/Shared";
import { motion } from "framer-motion";

export default function Craftsmanship() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="fixed inset-0 noise-overlay" />

      <main className="pt-60 pb-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto space-y-40">
          <header className="max-w-4xl space-y-12">
            <h1 className="text-7xl md:text-9xl font-serif leading-none">The Art of <br /> <span className="italic font-light">Substance.</span></h1>
            <p className="text-xl md:text-3xl text-[#2c2c2c]/60 leading-relaxed font-light">
              We believe that sound should be felt, not just heard. This begins with the physical integrity of our materials and ends with the precision of our engineering.
            </p>
          </header>

          <section className="grid lg:grid-cols-2 gap-32 items-center">
            <div className="space-y-12 order-2 lg:order-1">
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-30">01 / Materiality</span>
              <h2 className="text-5xl md:text-7xl font-serif italic">Reclaimed Walnut.</h2>
              <p className="text-lg text-[#2c2c2c]/70 leading-relaxed font-light">
                Our wood is sourced from salvaged walnut groves, aged for three years to stabilize its acoustic density. Each earcup is hand-turned by master woodworkers in our Tokyo studio, ensuring that no two pairs are identical.
              </p>
            </div>
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl order-1 lg:order-2">
              <img 
                src="https://images.unsplash.com/photo-1544450181-29597f2ff53e?auto=format&fit=crop&q=80&w=1000" 
                alt="Walnut Crafting"
                className="w-full h-full object-cover"
              />
            </div>
          </section>

          <section className="grid lg:grid-cols-2 gap-32 items-center">
             <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1583394838336-acd977730f8a?auto=format&fit=crop&q=80&w=1000" 
                alt="Internal Drivers"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-12">
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-30">02 / Engineering</span>
              <h2 className="text-5xl md:text-7xl font-serif italic">Beryllium Drivers.</h2>
              <p className="text-lg text-[#2c2c2c]/70 leading-relaxed font-light">
                At the heart of Reob One lies our 50mm Beryllium-coated drivers. Lighter than aluminum but more rigid than steel, they deliver a frequency response that reaches far beyond the human ear, capturing the subtle harmonics that define true fidelity.
              </p>
            </div>
          </section>

          <section className="py-40 text-center space-y-20 border-t border-[#2c2c2c]/5">
            <h2 className="text-6xl md:text-8xl font-serif">Laboratory Grade. <br /> <span className="italic font-light">Artisan Soul.</span></h2>
            <div className="grid md:grid-cols-4 gap-12">
              <TechnicalStat label="Sensitivity" value="102 dB" />
              <TechnicalStat label="Impedance" value="32 Ohm" />
              <TechnicalStat label="Frequency" value="5Hz - 45kHz" />
              <TechnicalStat label="Weight" value="380g" />
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}

function TechnicalStat({ label, value }: { label: string, value: string }) {
  return (
    <div className="space-y-4">
      <p className="text-[10px] uppercase tracking-widest font-bold opacity-30">{label}</p>
      <p className="text-3xl font-serif italic">{value}</p>
    </div>
  );
}
