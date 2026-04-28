"use client";

import { motion } from "framer-motion";
import { Mail, ArrowRight } from "lucide-react";

const socialLinks = [
  { 
    name: "LinkedIn", 
    href: "https://www.linkedin.com/in/omerb4l/", 
    icon: (props: any) => (
      <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
      </svg>
    )
  },
  { 
    name: "GitHub", 
    href: "https://github.com/omerb4l", 
    icon: (props: any) => (
      <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
      </svg>
    )
  },
  { 
    name: "Instagram", 
    href: "https://www.instagram.com/omerb4l/", 
    icon: (props: any) => (
      <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
      </svg>
    )
  },
];

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen flex items-center justify-center py-48 bg-black relative w-full overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full flex flex-col items-center gap-24"
        >
          <div className="space-y-10 w-full flex flex-col items-center">
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-none text-center w-full">
              Benimle <span className="text-gradient">İletişime Geç</span>
            </h2>
            <div className="w-full flex justify-center">
              <p className="text-gray-400 text-xl md:text-2xl font-light max-w-2xl text-center">
                Yeni projeler, fırsatlar veya sadece tanışmak için bana ulaşın.
              </p>
            </div>
          </div>

          <motion.a
            href="mailto:omeerb4l@gmail.com"
            whileHover={{ scale: 1.05 }}
            className="group flex flex-col md:flex-row items-center gap-6 text-2xl md:text-5xl font-bold text-primary transition-all focus:outline-none"
          >
            <span className="border-b-8 border-primary/20 group-hover:border-primary transition-all pb-2">
              omeerb4l@gmail.com
            </span>
            <ArrowRight size={64} className="hidden md:block group-hover:translate-x-6 transition-transform opacity-50 group-hover:opacity-100" />
          </motion.a>

          <div className="flex flex-wrap justify-center gap-12 pt-10">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -15, scale: 1.1 }}
                  className="flex flex-col items-center gap-6 group"
                  aria-label={social.name}
                >
                  <div className="p-10 bg-zinc-900/50 border border-white/5 rounded-[2.5rem] text-white group-hover:text-primary group-hover:border-primary/50 transition-all shadow-2xl backdrop-blur-sm">
                    <Icon className="w-12 h-12" />
                  </div>
                  <span className="text-sm font-mono tracking-[0.3em] text-gray-500 group-hover:text-white transition-colors uppercase font-bold">
                    {social.name}
                  </span>
                </motion.a>
              );
            })}
          </div>

          <footer className="pt-40 text-gray-600 text-xs font-mono tracking-[0.5em] uppercase text-center w-full">
            <p>© {new Date().getFullYear()} — Ömer Bal Portfolyo. Tüm hakları saklıdır.</p>
          </footer>
        </motion.div>
      </div>
    </section>
  );
}
