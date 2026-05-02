"use client";

import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[1000] bg-[#faf9f6] flex flex-col items-center justify-center">
      <div className="relative">
        {/* Abstract 3D-like Loader */}
        <div className="flex gap-1 items-end h-12 mb-8">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ height: 4 }}
              animate={{ height: [4, 48, 4] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.1,
                ease: "easeInOut"
              }}
              className="w-1 bg-[#2c2c2c] rounded-full opacity-20"
            />
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-center space-y-2"
        >
          <span className="text-xl font-serif tracking-[0.3em] uppercase text-[#2c2c2c]">Reob</span>
          <p className="text-[8px] uppercase tracking-[0.4em] font-bold opacity-30 text-[#2c2c2c]">Acoustic Integrity</p>
        </motion.div>
      </div>

      {/* Luxury Progress Bar */}
      <div className="absolute bottom-24 w-48 h-px bg-[#2c2c2c]/5 overflow-hidden">
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          className="w-full h-full bg-[#2c2c2c]/40"
        />
      </div>
    </div>
  );
}
