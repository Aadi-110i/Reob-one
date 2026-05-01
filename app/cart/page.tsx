"use client";

import { Navbar, Footer } from "@/components/Shared";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Trash2, Minus, Plus, ShoppingBag, ShieldCheck, ArrowLeft } from "lucide-react";
import { useState } from "react";

// Mock cart state - in a real app this would use a context provider
const initialCart = [
  { 
    id: "reob-one", 
    name: "Reob One", 
    category: "Over-Ear Headphones", 
    price: 450, 
    quantity: 1,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=400"
  },
  { 
    id: "reob-mini", 
    name: "Reob Mini", 
    category: "In-Ear Monitors", 
    price: 280, 
    quantity: 2,
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&q=80&w=400"
  }
];

export default function Cart() {
  const [cartItems, setCartItems] = useState(initialCart);

  const updateQuantity = (id: string, delta: number) => {
    setCartItems(items => items.map(item => 
      item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
    ));
  };

  const removeItem = (id: string) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const shipping = subtotal > 1000 ? 0 : 25;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen bg-[#faf9f6]">
      <Navbar />
      <div className="fixed inset-0 noise-overlay pointer-events-none" />

      <main className="pt-60 pb-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto space-y-16">
          <header className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-[#2c2c2c]/5 pb-12">
            <div className="space-y-4">
              <Link href="/collection" className="flex items-center gap-2 text-[10px] font-bold tracking-widest opacity-30 hover:opacity-100 transition-opacity uppercase">
                <ArrowLeft className="w-3 h-3" /> Back to Collection
              </Link>
              <h1 className="text-6xl md:text-8xl font-serif italic text-[#2c2c2c]">Shopping Bag.</h1>
            </div>
            <p className="text-[10px] uppercase tracking-[0.5em] font-bold opacity-30">
              {cartItems.length} Models Selected
            </p>
          </header>

          {cartItems.length > 0 ? (
            <div className="grid lg:grid-cols-3 gap-20 items-start">
              {/* Cart List */}
              <div className="lg:col-span-2 space-y-12">
                <AnimatePresence mode="popLayout">
                  {cartItems.map((item) => (
                    <motion.div 
                      key={item.id}
                      layout
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      className="flex flex-col md:flex-row gap-12 p-8 bg-white border border-[#2c2c2c]/5 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-700"
                    >
                      <div className="w-full md:w-48 aspect-square rounded-2xl overflow-hidden bg-[#faf9f6]">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      </div>
                      
                      <div className="flex-1 flex flex-col justify-between py-2">
                        <div className="flex justify-between items-start">
                          <div className="space-y-2">
                            <h3 className="text-3xl font-serif italic text-[#2c2c2c]">{item.name}</h3>
                            <p className="text-[10px] uppercase tracking-widest font-bold opacity-30">{item.category}</p>
                          </div>
                          <p className="text-2xl font-serif text-[#2c2c2c]">${item.price.toFixed(2)}</p>
                        </div>

                        <div className="flex items-center justify-between pt-8">
                          <div className="flex items-center gap-6 bg-[#faf9f6] rounded-full px-6 py-2 border border-[#2c2c2c]/5">
                            <button onClick={() => updateQuantity(item.id, -1)} className="hover:opacity-40 transition-opacity"><Minus className="w-3 h-3" /></button>
                            <span className="text-xs font-bold w-4 text-center">{item.quantity}</span>
                            <button onClick={() => updateQuantity(item.id, 1)} className="hover:opacity-40 transition-opacity"><Plus className="w-3 h-3" /></button>
                          </div>
                          <button onClick={() => removeItem(item.id)} className="flex items-center gap-2 text-[8px] uppercase tracking-widest font-bold opacity-20 hover:opacity-100 hover:text-red-500 transition-all">
                            <Trash2 className="w-4 h-4" /> Remove Item
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              {/* Order Summary */}
              <aside className="sticky top-40 bg-[#2c2c2c] text-[#faf9f6] rounded-[3rem] p-12 space-y-12 shadow-2xl">
                <h2 className="text-4xl font-serif italic">Order Summary</h2>
                
                <div className="space-y-6">
                  <div className="flex justify-between text-[10px] uppercase tracking-widest font-bold">
                    <span className="opacity-40">Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-[10px] uppercase tracking-widest font-bold">
                    <span className="opacity-40">Insured Shipping</span>
                    <span>${shipping.toFixed(2)}</span>
                  </div>
                  <div className="h-px bg-[#faf9f6]/10" />
                  <div className="flex justify-between items-end">
                    <span className="text-[10px] uppercase tracking-widest font-bold opacity-40">Total</span>
                    <span className="text-4xl font-serif italic">${total.toFixed(2)}</span>
                  </div>
                </div>

                <div className="space-y-6 pt-4">
                  <button className="w-full reob-button bg-[#faf9f6] text-[#2c2c2c] py-6 rounded-full font-bold uppercase tracking-widest hover:scale-[1.03] transition-transform">
                    Checkout Now
                  </button>
                  <div className="flex items-center justify-center gap-2 text-[#faf9f6]/20">
                    <ShieldCheck className="w-4 h-4" />
                    <span className="text-[8px] uppercase tracking-widest font-bold">Encrypted Checkout</span>
                  </div>
                </div>
              </aside>
            </div>
          ) : (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="py-40 text-center space-y-12"
            >
              <div className="w-24 h-24 rounded-full bg-[#2c2c2c]/5 flex items-center justify-center mx-auto">
                <ShoppingBag className="w-10 h-10 opacity-10" />
              </div>
              <div className="space-y-4">
                <h2 className="text-4xl font-serif italic text-[#2c2c2c]">Your bag is empty.</h2>
                <p className="text-sm uppercase tracking-widest opacity-40 max-w-sm mx-auto leading-loose">
                  Select your first piece of high-fidelity engineering from our curated series.
                </p>
              </div>
              <Link href="/collection" className="inline-flex reob-button bg-[#2c2c2c] text-[#faf9f6] px-12 py-5 rounded-full font-bold uppercase tracking-widest hover:scale-105 transition-transform">
                Explore Collection
              </Link>
            </motion.div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
