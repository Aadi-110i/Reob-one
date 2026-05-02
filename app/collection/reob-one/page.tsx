"use client";

import { Navbar, Footer } from "@/components/Shared";
import { motion } from "framer-motion";
import { Star, Shield, Truck, RotateCcw, ArrowRight, Check } from "lucide-react";
import Link from "next/link";
import dynamic from "next/dynamic";

const HeroScene = dynamic(() => import("@/components/Scene"), { ssr: false });

export default function ProductDetail() {
  const product = {
    name: "Reob One",
    price: "$450.00",
    description: "Our flagship over-ear headphones, featuring hand-turned walnut earcups and 50mm beryllium-coated drivers. Experience sound in its purest form.",
    specs: [
      { label: "Driver Type", value: "50mm Beryllium-Coated" },
      { label: "Frequency Response", value: "5Hz - 45kHz" },
      { label: "Impedance", value: "32 Ohms" },
      { label: "Weight", value: "380g" },
      { label: "Materials", value: "Reclaimed Walnut, Italian Leather" }
    ],
    features: [
      "Custom-tuned acoustic chambers",
      "Detachable silver-plated copper cable",
      "Memory foam ear cushions",
      "Sustainable walnut housing"
    ]
  };

  const schemaData = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": product.name,
    "image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    "description": product.description,
    "brand": {
      "@type": "Brand",
      "name": "Reob"
    },
    "offers": {
      "@type": "Offer",
      "url": "https://reob-audio.com/product/reob-one",
      "priceCurrency": "USD",
      "price": "450.00",
      "availability": "https://schema.org/InStock"
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="fixed inset-0 noise-overlay pointer-events-none" />
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <main className="pt-40 pb-32 px-6 md:px-12 perspective-1000">
        <div className="max-w-7xl mx-auto transform-3d">
          {/* Product Header Grid */}
          <div className="grid lg:grid-cols-2 gap-20 items-start transform-3d">
            {/* Left: Static Image */}
            <motion.div 
              initial={{ opacity: 0, rotateY: -20, x: -50 }}
              animate={{ opacity: 1, rotateY: 0, x: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="sticky top-40 aspect-square bg-current opacity-5 rounded-3xl overflow-hidden border border-current/10 shadow-2xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=1500" 
                alt="Reob One Detail"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Right: Info */}
            <motion.div 
              initial={{ opacity: 0, rotateY: 20, x: 50 }}
              animate={{ opacity: 1, rotateY: 0, x: 0 }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
              className="space-y-12 py-10 transform-3d"
            >
              <header className="space-y-4">
                <div className="flex items-center gap-4 text-[10px] uppercase tracking-widest font-bold opacity-30">
                  <Link href="/collection">Collection</Link>
                  <span>/</span>
                  <span className="opacity-100">Reob One</span>
                </div>
                <h1 className="text-6xl md:text-8xl font-serif leading-none">{product.name}</h1>
                <p className="text-3xl font-serif italic opacity-60">{product.price}</p>
              </header>

              <p className="text-xl opacity-70 leading-relaxed font-light">
                {product.description}
              </p>

              <div className="space-y-6">
                <h3 className="text-[10px] uppercase tracking-widest font-bold opacity-30">Core Features</h3>
                <ul className="grid md:grid-cols-2 gap-4">
                  {product.features.map(f => (
                    <li key={f} className="flex items-center gap-3 text-sm">
                      <div className="w-5 h-5 rounded-full bg-current/5 flex items-center justify-center">
                        <Check className="w-3 h-3" />
                      </div>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-6">
                <button className="flex-1 reob-button bg-current text-current invert py-6 rounded-full font-bold uppercase tracking-widest hover:scale-105 transition-transform">
                  Add to Cart
                </button>
                <button className="flex-1 reob-button border-current py-6 rounded-full font-bold uppercase tracking-widest hover:bg-current hover:text-current hover:invert transition-all">
                  Pre-Order Now
                </button>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-current/10">
                <TrustBadge icon={<Shield className="w-4 h-4" />} label="2 Year Warranty" />
                <TrustBadge icon={<Truck className="w-4 h-4" />} label="Free Shipping" />
                <TrustBadge icon={<RotateCcw className="w-4 h-4" />} label="30 Day Returns" />
              </div>
            </motion.div>
          </div>

          {/* Technical Specs Section */}
          <section className="mt-40 py-32 border-y border-current/10 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 pointer-events-none">
               <HeroScene />
            </div>
            <div className="grid lg:grid-cols-3 gap-20 relative z-10">
              <div className="space-y-6">
                <h2 className="text-4xl font-serif italic">Technical <br /> Specifications.</h2>
                <p className="text-sm opacity-50 leading-relaxed">
                  Every Reob product is benchmarked against laboratory standards to ensure consistent high-fidelity performance.
                </p>
              </div>
              <div className="lg:col-span-2 grid sm:grid-cols-2 gap-x-20 gap-y-12">
                {product.specs.map(spec => (
                  <div key={spec.label} className="space-y-2 pb-6 border-b border-current/5">
                    <p className="text-[10px] uppercase tracking-widest font-bold opacity-30">{spec.label}</p>
                    <p className="text-xl font-serif italic">{spec.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Narrative Section */}
          <section className="mt-40 grid lg:grid-cols-2 gap-32 items-center pb-40 border-b border-current/10">
            <div className="order-2 lg:order-1 space-y-12">
              <h2 className="text-5xl md:text-7xl font-serif leading-tight">Handcrafted <br /> <span className="italic font-light">Japanese Precision.</span></h2>
              <p className="text-lg opacity-70 leading-relaxed font-light">
                The Reob One isn't just a product; it's a testament to patience. From the initial wood turning in our Tokyo studio to the final acoustic calibration, each pair takes over 72 hours of focused labor.
              </p>
              <Link href="/craftsmanship" className="inline-flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest border-b border-current pb-2 hover:opacity-50 transition-opacity">
                Discover the Craft <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="order-1 lg:order-2 aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1544450181-29597f2ff53e?auto=format&fit=crop&q=80&w=1000" 
                alt="Craftsmanship" 
                className="w-full h-full object-cover"
              />
            </div>
          </section>

          {/* Related Products */}
          <section className="mt-40 space-y-24">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
              <div className="space-y-4">
                <span className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-30">Recommended</span>
                <h2 className="text-5xl md:text-7xl font-serif italic">Complete the <br /> System.</h2>
              </div>
              <Link href="/collection" className="text-[10px] uppercase tracking-widest font-bold border-b border-current pb-2">View Entire Collection</Link>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
              <RelatedProduct 
                name="Reob Amp" 
                price="$850.00" 
                image="https://images.unsplash.com/photo-1558537348-c0f8e733989b?auto=format&fit=crop&q=80&w=800"
              />
              <RelatedProduct 
                name="Reob Stand" 
                price="$120.00" 
                image="https://images.unsplash.com/photo-1585298723682-7115561c51b7?auto=format&fit=crop&q=80&w=800"
              />
              <RelatedProduct 
                name="Reob Cable" 
                price="$150.00" 
                image="https://images.unsplash.com/photo-1563330232-57114bb0823c?auto=format&fit=crop&q=80&w=800"
              />
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}

function TrustBadge({ icon, label }: { icon: React.ReactNode, label: string }) {
  return (
    <div className="flex flex-col items-center gap-3 text-center">
      <div className="opacity-40">{icon}</div>
      <span className="text-[10px] uppercase tracking-widest font-bold opacity-40">{label}</span>
    </div>
  );
}

function RelatedProduct({ name, price, image }: { name: string, price: string, image: string }) {
  return (
    <Link href="/collection/reob-one" className="group space-y-6 block">
      <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-current/5 relative">
        <img src={image} alt={name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
        <div className="absolute inset-0 bg-current/10 opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
      <div className="flex justify-between items-start px-2">
        <div className="space-y-1">
          <h3 className="text-2xl font-serif italic">{name}</h3>
          <p className="text-[10px] uppercase tracking-widest font-bold opacity-30">Essential Accessory</p>
        </div>
        <p className="text-sm font-bold opacity-60">{price}</p>
      </div>
    </Link>
  );
}

