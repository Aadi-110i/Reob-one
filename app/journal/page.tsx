"use client";

import { Navbar, Footer } from "@/components/Shared";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Clock, Tag } from "lucide-react";

const articles = [
  {
    slug: "history-of-sustainable-audio",
    title: "The History of Sustainable Audio Design",
    excerpt: "How the industry is shifting from disposable plastic to enduring natural materials.",
    date: "April 12, 2026",
    category: "Design",
    image: "https://images.unsplash.com/photo-1445966275305-9806327e2b10?auto=format&fit=crop&q=80&w=1000"
  },
  {
    slug: "why-reclaimed-walnut-sounds-better",
    title: "Why Reclaimed Walnut Sounds Better",
    excerpt: "Exploring the acoustic properties of aged wood and its impact on sound staging.",
    date: "March 28, 2026",
    category: "Engineering",
    image: "https://images.unsplash.com/photo-1544450181-29597f2ff53e?auto=format&fit=crop&q=80&w=1000"
  },
  {
    slug: "connoisseurs-guide-to-analog-fidelity",
    title: "A Connoisseur's Guide to Analog Fidelity",
    excerpt: "Understanding why high-fidelity audio requires a holistic approach to design.",
    date: "March 15, 2026",
    category: "Lifestyle",
    image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&q=80&w=1000"
  }
];

export default function Journal() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Reob Journal",
    "description": "Reflections on sound, design, and our commitment to a sustainable future.",
    "blogPost": articles.map(a => ({
      "@type": "BlogPosting",
      "headline": a.title,
      "datePublished": a.date,
      "articleSection": a.category
    }))
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="fixed inset-0 noise-overlay pointer-events-none" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <main className="pt-60 pb-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto space-y-32">
          <header className="max-w-3xl space-y-12">
            <h1 className="text-7xl md:text-9xl font-serif leading-none uppercase tracking-tighter">The <br /> <span className="italic font-light">Journal.</span></h1>
            <p className="text-xl md:text-2xl opacity-60 leading-relaxed font-light">
              Deep dives into acoustics, sustainability, and the intersection of technology and art.
            </p>
          </header>

          <div className="grid gap-px bg-current/10 border border-current/10 rounded-3xl overflow-hidden shadow-2xl">
            {articles.map((article, i) => (
              <motion.article 
                key={article.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-current text-current invert p-12 md:p-24 flex flex-col lg:flex-row gap-20 group cursor-pointer hover:bg-current hover:text-current hover:invert-0 transition-all duration-700"
              >
                <div className="lg:w-1/2 aspect-video rounded-2xl overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700 shadow-lg">
                  <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                </div>
                <div className="lg:w-1/2 space-y-12 flex flex-col justify-center">
                  <div className="space-y-6">
                    <div className="flex items-center gap-6 text-[10px] uppercase tracking-[0.3em] font-bold opacity-40">
                      <span className="flex items-center gap-2"><Clock className="w-3 h-3" /> {article.date}</span>
                      <span className="flex items-center gap-2"><Tag className="w-3 h-3" /> {article.category}</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-serif italic leading-tight group-hover:translate-x-4 transition-transform duration-700">{article.title}</h2>
                  </div>
                  <p className="text-lg opacity-60 leading-relaxed font-light line-clamp-2">
                    {article.excerpt}
                  </p>
                  <button className="flex items-center gap-4 text-[10px] uppercase tracking-widest font-bold border-b border-current pb-2 w-fit">
                    Read Narrative <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
