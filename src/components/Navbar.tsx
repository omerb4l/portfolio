"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";

const navLinks = [
  { name: "GIRIS", href: "#hero" },
  { name: "HAKKIMDA", href: "#about" },
  { name: "PROJELER", href: "#projects" },
  { name: "ILETISIM", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-black/90 backdrop-blur-2xl py-6 border-b border-white/5" : "bg-transparent py-10"
      }`}
    >
      <div className="w-full px-8 md:px-16 lg:px-24 flex justify-between items-center">
        <Link href="/" className="text-3xl md:text-4xl font-black text-primary tracking-tighter hover:scale-105 transition-transform group">
          ÖMER<span className="text-white group-hover:text-primary transition-colors">BAL</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-16">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-lg font-bold tracking-widest uppercase hover:text-primary transition-all relative group py-2"
            >
              <span>{link.name}</span>
              <span className="absolute bottom-0 left-0 w-0 h-1 bg-primary transition-all group-hover:w-full" />
            </Link>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}
