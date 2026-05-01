"use client";

import { motion } from "framer-motion";
import { Navbar, Footer } from "@/components/Shared";
import { ArrowRight, Star, Play, Mic2, Cpu, Globe, ArrowDown } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

export default function Home() {
  const containerRef = useRef(null);

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Brand",
    "name": "Reob Sustainable Audio",
    "description": "Premium, handcrafted sustainable audio products featuring reclaimed materials and high-fidelity Japanese engineering.",
    "url": "https://reob-audio.com",
    "logo": "https://reob-audio.com/logo.png"
  };

  return (
    <div className="relative min-h-screen bg-[#faf9f6]" ref={containerRef}>
      <Navbar />
      <div className="fixed inset-0 noise-overlay pointer-events-none" />

      {/* SEO Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <main className="perspective-1000">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center px-6 overflow-hidden bg-[#faf9f6] transform-3d">
          <motion.div 
            initial={{ opacity: 0, rotateX: -20, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, rotateX: 0, y: 0, scale: 1 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-center space-y-8 z-10"
          >
            <span className="text-[10px] uppercase tracking-[0.5em] font-bold opacity-40 text-[#2c2c2c]">
              Technical Excellence. Sustainable Soul.
            </span>
            <h1 className="text-[12vw] font-serif leading-none tracking-tighter uppercase text-[#2c2c2c]">
              Reob One
            </h1>
            <p className="text-sm md:text-base font-medium uppercase tracking-widest opacity-60 max-w-md mx-auto leading-loose text-[#2c2c2c]">
              The pinnacle of acoustic engineering, handcrafted in limited editions.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-10 pt-10">
              <Link href="/collection" className="reob-button uppercase text-[10px] font-bold tracking-widest bg-[#2c2c2c] text-[#faf9f6] px-12 py-5 rounded-full hover:scale-105 transition-transform shadow-2xl">
                Explore the Series
              </Link>
              <button className="flex items-center gap-3 text-[10px] uppercase tracking-widest font-bold reob-link group text-[#2c2c2c]">
                <div className="w-10 h-10 rounded-full border border-[#2c2c2c]/10 flex items-center justify-center group-hover:bg-[#2c2c2c] group-hover:text-[#faf9f6] transition-all">
                  <Play className="w-3 h-3 fill-current ml-0.5" />
                </div>
                The Narrative
              </button>
            </div>
          </motion.div>

          {/* Minimal Decorative Circles */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5">
            <div className="w-[80vw] h-[80vw] border border-[#2c2c2c] rounded-full" />
            <div className="absolute w-[60vw] h-[60vw] border border-[#2c2c2c] rounded-full" />
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-20 animate-bounce">
            <span className="text-[8px] uppercase tracking-[0.5em] font-bold text-[#2c2c2c]">Scroll</span>
            <ArrowDown className="w-3 h-3 text-[#2c2c2c]" />
          </div>
        </section>

        {/* Feature Highlights */}
        <section className="py-40 px-6 bg-[#2c2c2c] text-[#faf9f6] perspective-2000 overflow-hidden">
          <div className="max-w-7xl mx-auto space-y-32 transform-3d">
            <motion.div 
              initial={{ opacity: 0, rotateX: 15, y: 40 }}
              whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="max-w-3xl space-y-8"
            >
              <h2 className="text-5xl md:text-7xl font-serif italic leading-tight">Engineered for <br /> <span className="font-light">Uncompromised Fidelity.</span></h2>
              <p className="text-xl opacity-60 font-light leading-relaxed">
                We combine traditional Japanese woodworking with cutting-edge psychoacoustic research to create products that feel as good as they sound.
              </p>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-20">
              <Feature 
                delay={0.1}
                icon={<Mic2 className="w-6 h-6" />}
                title="Acoustic Purity"
                desc="Laboratory-grade frequency response curves, tuned for emotional resonance and spatial clarity."
              />
              <Feature 
                delay={0.2}
                icon={<Cpu className="w-6 h-6" />}
                title="Digital Fidelity"
                desc="Next-generation lossless transmission protocols ensuring uncompromised sound across any device."
              />
              <Feature 
                delay={0.3}
                icon={<Globe className="w-6 h-6" />}
                title="Ethical Origin"
                desc="100% traceable supply chain, from the reclaimed walnut groves to our final calibration studio."
              />
            </div>
          </div>
        </section>

        {/* Product Focus Section */}
        <section className="py-40 px-6 md:px-12 overflow-hidden bg-[#faf9f6] perspective-1000">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-32 items-center transform-3d">
            <motion.div 
              initial={{ opacity: 0, rotateY: -20, x: -50 }}
              whileInView={{ opacity: 1, rotateY: 0, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="space-y-12"
            >
              <div className="space-y-4">
                <span className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-30 text-[#2c2c2c]">The Philosophy</span>
                <h2 className="text-6xl md:text-8xl font-serif italic text-[#2c2c2c]">Sonic Integrity.</h2>
              </div>
              <p className="text-xl opacity-70 leading-relaxed font-light text-[#2c2c2c]">
                Every component of the Reob One is selected for its acoustic properties and environmental impact. We prove that high-fidelity performance and luxury can coexist with a conscious footprint.
              </p>
              <div className="grid grid-cols-2 gap-12 pt-8">
                <StatItem label="Sustainable Materials" value="100%" />
                <StatItem label="Precision Assembly" value="72 hrs" />
              </div>
              <Link href="/about" className="reob-button w-full md:w-auto uppercase text-[10px] font-bold tracking-widest mt-10 border-[#2c2c2c] text-[#2c2c2c]">
                Explore the Craft
              </Link>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, rotateY: 20, x: 50 }}
              whileInView={{ opacity: 1, rotateY: 0, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
              className="relative aspect-[4/5] bg-[#2c2c2c]/5 rounded-3xl overflow-hidden group border border-[#2c2c2c]/5 shadow-2xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=1500" 
                alt="Reob One Flagship"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-[#2c2c2c]/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                <Link href="/collection/reob-one" className="reob-button text-[#faf9f6] border-[#faf9f6]">View Product</Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Social Proof */}
        <section className="py-40 px-6 bg-[#faf9f6]">
          <div className="max-w-7xl mx-auto text-center space-y-24">
            <h2 className="text-6xl md:text-8xl font-serif leading-tight text-[#2c2c2c]">Acoustic Excellence <br /> <span className="italic font-light opacity-50">Defined by the Best.</span></h2>
            
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
        <section className="py-60 px-6 text-center bg-[#2c2c2c] text-[#faf9f6] relative overflow-hidden">
          <div className="max-w-3xl mx-auto space-y-12 relative z-10">
            <h2 className="text-7xl md:text-9xl font-serif italic">Elevate your ritual.</h2>
            <p className="text-sm uppercase tracking-[0.3em] opacity-40 leading-loose">
              Limited run of 500 units worldwide. Currently shipping to North America, Europe, and Asia.
            </p>
            <Link href="/collection" className="inline-flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest border border-[#faf9f6]/20 px-12 py-5 hover:bg-[#faf9f6] hover:text-[#2c2c2c] transition-all shadow-xl">
              Pre-Order Reob One <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

function Feature({ icon, title, desc, delay = 0 }: { icon: React.ReactNode, title: string, desc: string, delay?: number }) {
  return (
    <motion.div 
      initial={{ opacity: 0, rotateY: -30, x: -20 }}
      whileInView={{ opacity: 1, rotateY: 0, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay, ease: "easeOut" }}
      className="space-y-6 text-center md:text-left group"
    >
      <div className="w-12 h-12 rounded-full border border-[#faf9f6]/20 flex items-center justify-center group-hover:bg-[#faf9f6] group-hover:text-[#2c2c2c] transition-all duration-500">
        {icon}
      </div>
      <h3 className="text-2xl font-serif italic">{title}</h3>
      <p className="text-sm opacity-50 leading-relaxed">{desc}</p>
    </motion.div>
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
      <div className="flex gap-1 text-[#2c2c2c]/20">
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
