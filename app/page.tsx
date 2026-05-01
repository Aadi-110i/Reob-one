"use client";

import { motion } from "framer-motion";
import { Navbar, Footer } from "@/components/Shared";
import { ArrowRight, Star, Play, Mic2, Cpu, Globe } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Brand",
    "name": "Reob Sustainable Audio",
    "description": "Premium, handcrafted sustainable audio products.",
    "url": "https://reob-audio.com",
    "logo": "https://reob-audio.com/logo.png"
  };

  return (
    <div className="relative min-h-screen bg-[#faf9f6]">
      <Navbar />
      <div className="fixed inset-0 noise-overlay pointer-events-none" />
      
      {/* SEO Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <main>
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center px-6 overflow-hidden">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-center space-y-12 z-10"
          >
            <span className="text-[10px] uppercase tracking-[0.5em] font-bold opacity-30">
              The Art of Sustainable Sound
            </span>
            <h1 className="text-[12vw] font-serif leading-none tracking-tighter uppercase text-[#2c2c2c]">
              Reob One
            </h1>
            <p className="text-sm md:text-base font-medium uppercase tracking-widest opacity-50 max-w-md mx-auto leading-loose text-[#2c2c2c]">
              Handcrafted in limited editions using reclaimed walnut and high-fidelity Japanese drivers.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-10 pt-10">
              <Link href="/collection" className="reob-button uppercase text-[10px] font-bold tracking-widest">
                Discover Collection
              </Link>
              <button className="text-[10px] uppercase tracking-widest font-bold reob-link group flex items-center gap-2">
                <Play className="w-3 h-3 fill-current" /> Watch the Film
              </button>
            </div>
          </motion.div>

          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5">
            <div className="w-[70vw] h-[70vw] border border-[#2c2c2c] rounded-full" />
            <div className="absolute w-[50vw] h-[50vw] border border-[#2c2c2c] rounded-full" />
          </div>
        </section>

        {/* Feature Highlights - The "Uncompromised Fidelity" Box */}
        <section className="py-40 px-6 md:px-12">
          <div className="max-w-7xl mx-auto bg-white border border-[#2c2c2c]/5 rounded-[4rem] p-12 md:p-32 shadow-xl space-y-32">
            <div className="max-w-4xl space-y-8">
               <span className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-30">Technical Integrity</span>
               <h2 className="text-5xl md:text-8xl font-serif leading-tight text-[#2c2c2c]">Engineered for <br /> <span className="italic font-light">Uncompromised Fidelity.</span></h2>
               <p className="text-xl opacity-60 leading-relaxed font-light max-w-2xl">
                 We believe that sound is a physical experience. By combining salvaged walnut with laboratory-grade beryllium drivers, we've created an instrument that respects both the artist and the environment.
               </p>
            </div>

            <div className="grid md:grid-cols-3 gap-20">
              <FeatureItem 
                icon={<Mic2 className="w-5 h-5" />}
                title="Acoustic Purity"
                desc="Neutral frequency response tuned for emotional resonance."
              />
              <FeatureItem 
                icon={<Cpu className="w-5 h-5" />}
                title="Analog Depth"
                desc="Custom silver-plated circuitry for uncompromised signal flow."
              />
              <FeatureItem 
                icon={<Globe className="w-5 h-5" />}
                title="Ethical Origin"
                desc="100% traceable materials from sustainable groves."
              />
            </div>
          </div>
        </section>

        {/* Product Focus Section */}
        <section className="py-40 px-6 md:px-12 bg-[#faf9f6]">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-32 items-center">
            <div className="space-y-12">
              <div className="space-y-4">
                <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#8e8d8a]">Materials</span>
                <h2 className="text-6xl md:text-8xl font-serif italic text-[#2c2c2c]">Purified by Design.</h2>
              </div>
              <p className="text-xl text-[#2c2c2c]/70 leading-relaxed font-light">
                Every component of the Reob One is selected for its acoustic properties and environmental impact. From reclaimed walnut to biodegradable leather, we prove that luxury can be conscious.
              </p>
              <div className="grid grid-cols-2 gap-12 pt-8">
                <StatItem label="Sustainable" value="100%" />
                <StatItem label="Handcrafted" value="48 hrs" />
              </div>
              <Link href="/about" className="reob-button w-fit uppercase text-[10px] font-bold tracking-widest mt-10">
                Explore the Narrative
              </Link>
            </div>
            <div className="aspect-[4/5] bg-white rounded-[3rem] overflow-hidden shadow-2xl relative group">
              <img 
                src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=1500" 
                alt="Reob One Masterpiece"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-[#2c2c2c]/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                <Link href="/collection/reob-one" className="reob-button text-white border-white">View Product</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof */}
        <section className="py-40 px-6">
          <div className="max-w-7xl mx-auto text-center space-y-24">
            <h2 className="text-6xl md:text-8xl font-serif text-[#2c2c2c]">Acoustic Excellence <br /> <span className="italic font-light opacity-50">Endorsed.</span></h2>
            
            <div className="grid md:grid-cols-3 gap-20">
              <Testimonial 
                quote="The clarity is unparalleled. It's like hearing the music as the artist intended, but with a soul that plastic headphones lack."
                author="Sarah Jenkins"
                role="Grammy Winning Engineer"
              />
              <Testimonial 
                quote="Sustainable audio has finally found its luxury benchmark. The Reob One is a masterpiece of both form and function."
                author="David Chen"
                role="Design Editor, Minimalist"
              />
              <Testimonial 
                quote="I've never worn a more comfortable pair of headphones. The walnut feels alive against your ears."
                author="Elena Rossi"
                role="Concert Violinist"
              />
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-60 px-6 text-center bg-[#2c2c2c] text-[#faf9f6]">
          <div className="max-w-3xl mx-auto space-y-12">
            <h2 className="text-7xl md:text-9xl font-serif italic leading-tight">Secure your <br /> pair.</h2>
            <p className="text-sm uppercase tracking-[0.3em] opacity-40 leading-loose">
              Limited run of 500 units worldwide. Currently shipping to North America, Europe, and Asia.
            </p>
            <Link href="/collection" className="inline-flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest border border-[#faf9f6]/20 px-12 py-5 hover:bg-[#faf9f6] hover:text-[#2c2c2c] transition-all rounded-full">
              Pre-Order Reob One <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

function FeatureItem({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="space-y-6 text-left group">
      <div className="w-12 h-12 rounded-full border border-[#2c2c2c]/10 flex items-center justify-center group-hover:bg-[#2c2c2c] group-hover:text-white transition-all duration-500">
        {icon}
      </div>
      <h3 className="text-2xl font-serif italic text-[#2c2c2c]">{title}</h3>
      <p className="text-sm opacity-50 leading-relaxed text-[#2c2c2c]">{desc}</p>
    </div>
  );
}

function StatItem({ label, value }: { label: string, value: string }) {
  return (
    <div className="space-y-2 text-[#2c2c2c]">
      <span className="text-[10px] uppercase tracking-widest font-bold opacity-30">{label}</span>
      <p className="text-4xl font-serif italic">{value}</p>
    </div>
  );
}

function Testimonial({ quote, author, role }: { quote: string, author: string, role: string }) {
  return (
    <div className="space-y-8 text-left p-12 bg-white rounded-3xl border border-[#2c2c2c]/5 shadow-sm hover:shadow-xl transition-all duration-700">
      <div className="flex gap-1 text-[#2c2c2c]/10">
        {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
      </div>
      <p className="text-xl font-serif italic leading-relaxed text-[#2c2c2c]">"{quote}"</p>
      <div>
        <p className="text-[10px] uppercase tracking-widest font-bold text-[#2c2c2c]">{author}</p>
        <p className="text-[10px] uppercase tracking-widest font-bold opacity-30 text-[#2c2c2c]">{role}</p>
      </div>
    </div>
  );
}
