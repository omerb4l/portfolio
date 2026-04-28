"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen w-full flex items-center justify-center relative px-6 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--primary-glow)_0%,_transparent_70%)] opacity-20 pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03] pointer-events-none" />
      
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-6xl mx-auto text-center z-10"
      >
        <motion.h2 
          initial={{ opacity: 0, letterSpacing: "0.1em" }}
          animate={{ opacity: 1, letterSpacing: "0.4em" }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-primary font-mono mb-12 text-sm md:text-xl uppercase font-bold"
        >
          Yazılım Mühendisi Adayı
        </motion.h2>
        
        <motion.h1 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="text-7xl md:text-[12rem] font-black mb-12 tracking-tighter leading-none"
        >
          Ömer <span className="text-gradient">Bal</span>
        </motion.h1>
        


      </motion.div>
      
      {/* Animated Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-primary opacity-30 flex flex-col items-center gap-4"
      >
        <span className="text-[10px] font-mono tracking-widest uppercase">Kaydır</span>
        <div className="w-8 h-14 border-2 border-primary rounded-full flex justify-center p-2">
          <motion.div 
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-3 bg-primary rounded-full" 
          />
        </div>
      </motion.div>
    </section>
  );
}
