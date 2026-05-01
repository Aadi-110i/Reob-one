"use client";

import { Navbar, Footer } from "@/components/Shared";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="fixed inset-0 noise-overlay" />

      <main className="pt-60 pb-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto space-y-40">
          <header className="max-w-4xl space-y-12 text-center mx-auto">
            <h1 className="text-7xl md:text-9xl font-serif leading-none uppercase tracking-tighter">Beyond the <br /> <span className="italic font-light">Audible.</span></h1>
            <p className="text-xl md:text-2xl text-[#2c2c2c]/60 leading-relaxed font-light">
              Reob was founded on a singular obsession: the pursuit of pure sound through absolute integrity.
            </p>
          </header>

          <div className="grid md:grid-cols-2 gap-20">
            <div className="space-y-12 p-12 bg-white rounded-3xl border border-[#2c2c2c]/5">
              <h2 className="text-4xl font-serif italic">Our Origin</h2>
              <p className="text-[#2c2c2c]/70 leading-relaxed font-light">
                What began as a small workshop in a reclaimed walnut grove has evolved into a global beacon for sustainable audio. We didn't set out to build another headphone company; we set out to prove that the finest things in life can be built in harmony with nature.
              </p>
            </div>
            <div className="space-y-12 p-12 bg-[#2c2c2c] text-[#faf9f6] rounded-3xl shadow-2xl">
              <h2 className="text-4xl font-serif italic">Our Purpose</h2>
              <p className="opacity-70 leading-relaxed font-light">
                In an era of disposable technology, we build for longevity. Every Reob product is designed to be serviceable, modular, and timeless. We don't follow trends; we follow the fundamental laws of acoustics and the enduring beauty of natural materials.
              </p>
            </div>
          </div>

          <section className="py-40 text-center space-y-24">
            <h2 className="text-6xl md:text-8xl font-serif leading-tight">The Team Behind <br /> <span className="italic font-light">The Sound.</span></h2>
            <div className="grid md:grid-cols-3 gap-12">
              <TeamMember name="Kenji Sato" role="Master Luthier" bio="30 years of experience in acoustic guitar construction." />
              <TeamMember name="Dr. Elena Volkova" role="Acoustic Scientist" bio="PhD in Psychoacoustics, lead developer of our driver tech." />
              <TeamMember name="Marcus Thorne" role="Creative Director" bio="Visionary behind the Reob aesthetic and material philosophy." />
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}

function TeamMember({ name, role, bio }: { name: string, role: string, bio: string }) {
  return (
    <div className="space-y-6 group">
      <div className="aspect-square bg-[#2c2c2c]/5 rounded-full overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
        <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${name}`} alt={name} className="w-full h-full object-cover" />
      </div>
      <div>
        <h3 className="text-2xl font-serif italic">{name}</h3>
        <p className="text-[10px] uppercase tracking-widest font-bold opacity-30">{role}</p>
      </div>
      <p className="text-sm opacity-50 leading-relaxed max-w-[200px] mx-auto">{bio}</p>
    </div>
  );
}
