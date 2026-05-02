"use client";

import { motion } from "framer-motion";
import { Navbar, Footer } from "@/components/Shared";
import { ArrowRight, Star, Play, Mic2, Cpu, Globe } from "lucide-react";
import Link from "next/link";
import dynamic from "next/dynamic";

const HeroScene = dynamic(() => import("@/components/Scene"), { ssr: false });

export default function Home() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Brand",
    "name": "Reob Sustainable Audio",
    "description": "Premium, handcrafted sustainable audio products.",
    "url": "https://reob-audio.com",
    "logo": "https://reob-audio.com/logo.png"
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 60, rotateX: 10 },
    whileInView: { opacity: 1, y: 0, rotateX: 0 },
    viewport: { once: true, margin: "-100px" },
  };

  return (
    <div className="relative min-h-screen bg-[#faf9f6] selection:bg-[#2c2c2c] selection:text-white">
      <Navbar />
      <div className="fixed inset-0 noise-overlay pointer-events-none" />
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <main className="perspective-1000">
        {/* Hero Section - Editorial Split Layout */}
        <section className="relative h-screen flex items-center px-6 md:px-20 overflow-hidden pt-20">
          <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-20 items-center">
            {/* Left Column: Narrative Content */}
            <motion.div 
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="z-10 space-y-12"
            >
              <div className="space-y-4">
                <span className="text-[10px] uppercase tracking-[0.5em] font-bold opacity-30">
                  The Art of Sustainable Sound
                </span>
                <h1 className="text-7xl md:text-[8vw] font-serif leading-none tracking-tighter uppercase text-[#2c2c2c]">
                  Reob <br /> 
                  <span className="italic font-light opacity-50">One.</span>
                </h1>
              </div>
              
              <p className="text-sm md:text-base font-medium uppercase tracking-widest opacity-50 max-w-md leading-loose text-[#2c2c2c]">
                Handcrafted in limited editions using reclaimed walnut and laboratory-grade beryllium drivers.
              </p>

              <div className="flex flex-col sm:flex-row items-start gap-10 pt-4">
                <Link href="/collection" className="reob-button uppercase text-[10px] font-bold tracking-widest">
                  Discover Collection
                </Link>
                <button className="text-[10px] uppercase tracking-widest font-bold reob-link group flex items-center gap-2">
                  <Play className="w-3 h-3 fill-current" /> Watch the Film
                </button>
              </div>

              {/* Quick Stats Overlaying Background */}
              <div className="grid grid-cols-2 gap-12 pt-12 border-t border-[#2c2c2c]/5">
                <StatItem label="Material" value="Walnut" />
                <StatItem label="Precision" value="0.01mm" />
              </div>
            </motion.div>

            {/* Right Column: Interactive 3D Canvas */}
            <div className="absolute inset-0 lg:relative lg:inset-auto h-full w-full lg:h-[80vh] flex items-center justify-center">
              <HeroScene />
            </div>
          </div>

          {/* Background Branding Elements */}
          <div className="absolute bottom-20 left-20 pointer-events-none hidden md:block">
             <span className="text-[15vw] font-serif uppercase opacity-[0.02] select-none">Integrity</span>
          </div>
        </section>

        {/* Feature Highlights - The "Uncompromised Fidelity" Box */}
        <section className="py-40 px-6 md:px-12">
          <motion.div 
            initial={fadeInUp.initial}
            whileInView={fadeInUp.whileInView}
            viewport={fadeInUp.viewport}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="max-w-7xl mx-auto bg-white border border-[#2c2c2c]/5 rounded-[4rem] p-12 md:p-32 shadow-xl space-y-32 transform-3d"
          >
            <div className="max-w-4xl space-y-8">
               <span className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-30">Technical Integrity</span>
               <h2 className="text-5xl md:text-8xl font-serif leading-tight text-[#2c2c2c]">Engineered for <br /> <span className="italic font-light">Uncompromised Fidelity.</span></h2>
               <p className="text-xl opacity-60 leading-relaxed font-light max-w-2xl">
                 We believe that sound is a physical experience. By combining salvaged walnut with laboratory-grade beryllium drivers, we've created an instrument that respects both the artist and the environment.
               </p>
            </div>

            <motion.div 
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              transition={{ staggerChildren: 0.1 }}
              className="grid md:grid-cols-3 gap-20"
            >
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
            </motion.div>
          </motion.div>
        </section>

        {/* Featured Collections */}
        <section className="py-40 px-6 md:px-12">
          <div className="max-w-7xl mx-auto space-y-24">
            <header className="flex flex-col md:flex-row md:items-end justify-between gap-8">
              <div className="space-y-4">
                <span className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-30 text-[#2c2c2c]">Curated Series</span>
                <h2 className="text-5xl md:text-7xl font-serif italic text-[#2c2c2c]">Shop by Category</h2>
              </div>
              <Link href="/collection" className="text-[10px] uppercase tracking-widest font-bold reob-link flex items-center gap-2">
                View All <ArrowRight className="w-3 h-3" />
              </Link>
            </header>

            <div className="grid md:grid-cols-3 gap-8">
              <CategoryCard 
                title="Headphones" 
                image="https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&q=80&w=800"
                href="/collection?cat=headphones"
              />
              <CategoryCard 
                title="Speakers" 
                image="https://images.unsplash.com/photo-1594106190274-b4f75c7b246c?auto=format&fit=crop&q=80&w=800"
                href="/collection?cat=speakers"
              />
              <CategoryCard 
                title="Electronics" 
                image="https://images.unsplash.com/photo-1603048588665-791ca8aea617?auto=format&fit=crop&q=80&w=800"
                href="/collection?cat=electronics"
              />
            </div>
          </div>
        </section>

        {/* Product Focus Section */}
        <section className="py-40 px-6 md:px-12 bg-[#faf9f6]">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-32 items-center">
            <motion.div 
              initial={fadeInUp.initial}
              whileInView={fadeInUp.whileInView}
              viewport={fadeInUp.viewport}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="space-y-12 transform-3d"
            >
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
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              viewport={{ once: true }}
              className="aspect-[4/5] bg-white rounded-[3rem] overflow-hidden shadow-2xl relative group transform-3d"
            >
              <img 
                src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=1500" 
                alt="Reob One Masterpiece"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-[#2c2c2c]/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                <Link href="/collection/reob-one" className="reob-button text-white border-white">View Product</Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* New Arrivals Grid */}
        <section className="py-40 px-6 md:px-12 bg-white rounded-[4rem] mx-6 my-20">
          <div className="max-w-7xl mx-auto space-y-24">
            <div className="text-center space-y-4">
              <span className="text-[10px] uppercase tracking-[0.5em] font-bold opacity-30 text-[#2c2c2c]">The Latest Releases</span>
              <h2 className="text-6xl md:text-8xl font-serif text-[#2c2c2c]">New <span className="italic font-light">Arrivals.</span></h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <ProductCard 
                name="Reob Studio Mini" 
                price="$650.00" 
                image="https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&q=80&w=600"
                category="Desktop Monitors"
              />
              <ProductCard 
                name="Reob One Pro" 
                price="$750.00" 
                image="https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&q=80&w=600"
                category="Reference Monitors"
              />
              <ProductCard 
                name="Reob Amp" 
                price="$850.00" 
                image="https://images.unsplash.com/photo-1558537348-c0f8e733989b?auto=format&fit=crop&q=80&w=600"
                category="Tube Amplifier"
              />
              <ProductCard 
                name="Reob Stand" 
                price="$120.00" 
                image="https://images.unsplash.com/photo-1585298723682-7115561c51b7?auto=format&fit=crop&q=80&w=600"
                category="Walnut Stand"
              />
            </div>
          </div>
        </section>

        {/* Social Proof */}
        <section className="py-40 px-6">
          <motion.div 
            initial={fadeInUp.initial}
            whileInView={fadeInUp.whileInView}
            viewport={fadeInUp.viewport}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="max-w-7xl mx-auto text-center space-y-24"
          >
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
          </motion.div>
        </section>

        {/* Newsletter Section */}
        <section className="py-40 px-6 md:px-12">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-7xl mx-auto bg-[#2c2c2c] rounded-[4rem] p-12 md:p-32 text-[#faf9f6] flex flex-col md:flex-row items-center justify-between gap-20"
          >
            <div className="space-y-8 max-w-xl text-center md:text-left">
              <h2 className="text-5xl md:text-7xl font-serif italic leading-tight">Join the <br /> Narrative.</h2>
              <p className="text-sm opacity-40 uppercase tracking-widest leading-loose">
                Subscribe to receive early access to limited drops, acoustic deep-dives, and technical updates.
              </p>
            </div>
            <form className="w-full max-w-md space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="relative group">
                <input 
                  type="email" 
                  placeholder="EMAIL ADDRESS" 
                  className="w-full bg-white/5 border border-white/10 rounded-full py-6 px-8 text-[10px] font-bold tracking-widest placeholder:text-white/20 focus:bg-white/10 transition-all outline-none"
                />
                <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2 bg-[#faf9f6] text-[#2c2c2c] p-4 rounded-full hover:scale-110 transition-transform">
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
              <p className="text-[8px] uppercase tracking-widest opacity-20 text-center md:text-left">By subscribing, you agree to our Privacy Policy.</p>
            </form>
          </motion.div>
        </section>

        {/* CTA */}
        <section className="py-60 px-6 text-center bg-[#2c2c2c] text-[#faf9f6]">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto space-y-12"
          >
            <h2 className="text-7xl md:text-9xl font-serif italic leading-tight">Secure your <br /> pair.</h2>
            <p className="text-sm uppercase tracking-[0.3em] opacity-40 leading-loose">
              Limited run of 500 units worldwide. Currently shipping to North America, Europe, and Asia.
            </p>
            <Link href="/collection" className="inline-flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest border border-[#faf9f6]/20 px-12 py-5 hover:bg-[#faf9f6] hover:text-[#2c2c2c] transition-all rounded-full">
              Pre-Order Reob One <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

function CategoryCard({ title, image, href }: { title: string, image: string, href: string }) {
  return (
    <Link href={href} className="group relative aspect-square rounded-[3rem] overflow-hidden bg-[#2c2c2c]/5 transform-3d">
      <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-80 group-hover:opacity-100" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#2c2c2c]/60 to-transparent" />
      <div className="absolute bottom-12 left-12 space-y-2">
        <h3 className="text-3xl font-serif italic text-white">{title}</h3>
        <span className="text-[10px] uppercase tracking-widest font-bold text-white/60 group-hover:text-white transition-colors flex items-center gap-2">
          Shop Now <ArrowRight className="w-3 h-3" />
        </span>
      </div>
    </Link>
  );
}

function ProductCard({ name, price, image, category }: { name: string, price: string, image: string, category: string }) {
  return (
    <div className="group space-y-6 cursor-pointer">
      <div className="aspect-[4/5] bg-[#2c2c2c]/5 rounded-3xl overflow-hidden relative shadow-sm group-hover:shadow-2xl transition-all duration-700">
        <img src={image} alt={name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
        <div className="absolute top-6 left-6">
          <span className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-[8px] font-bold uppercase tracking-widest text-[#2c2c2c]">New</span>
        </div>
        <div className="absolute inset-0 bg-[#2c2c2c]/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
          <Link href="/collection/reob-one" className="reob-button text-white border-white scale-90 group-hover:scale-100 transition-transform">View Detail</Link>
        </div>
      </div>
      <div className="space-y-2 px-2">
        <div className="flex justify-between items-start">
          <div className="space-y-1">
            <h3 className="text-xl font-serif italic text-[#2c2c2c]">{name}</h3>
            <p className="text-[8px] uppercase tracking-widest font-bold opacity-30 text-[#2c2c2c]">{category}</p>
          </div>
          <span className="text-xs font-bold opacity-60 text-[#2c2c2c]">{price}</span>
        </div>
      </div>
    </div>
  );
}

function FeatureItem({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <motion.div 
      variants={{
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 }
      }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="space-y-6 text-left group"
    >
      <div className="w-12 h-12 rounded-full border border-[#2c2c2c]/10 flex items-center justify-center group-hover:bg-[#2c2c2c] group-hover:text-white transition-all duration-500">
        {icon}
      </div>
      <h3 className="text-2xl font-serif italic text-[#2c2c2c]">{title}</h3>
      <p className="text-sm opacity-50 leading-relaxed text-[#2c2c2c]">{desc}</p>
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
    <motion.div 
      variants={{
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 }
      }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="space-y-8 text-left p-12 bg-white rounded-3xl border border-[#2c2c2c]/5 shadow-sm hover:shadow-xl transition-all duration-700"
    >
      <div className="flex gap-1 text-[#2c2c2c]/10">
        {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
      </div>
      <p className="text-xl font-serif italic leading-relaxed text-[#2c2c2c]">"{quote}"</p>
      <div>
        <p className="text-[10px] uppercase tracking-widest font-bold text-[#2c2c2c]">{author}</p>
        <p className="text-[10px] uppercase tracking-widest font-bold opacity-30 text-[#2c2c2c]">{role}</p>
      </div>
    </motion.div>
  );
}
