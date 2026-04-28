"use client";

import { motion } from "framer-motion";
import { ExternalLink, Code, ShieldCheck, Image as ImageIcon } from "lucide-react";

const projects = [
  {
    title: "Anomali Senaryosu Analizi",
    description: "Bilgi Sistemleri Güvenliği kapsamında geliştirilen, ağ trafiği ve sistem davranışlarındaki anomali durumlarını tespit eden kapsamlı analiz projesi.",
    tech: ["Siber Güvenlik", "Network Analysis", "Python"],
    link: "https://github.com/omerb4l",
    github: "https://github.com/omerb4l",
  },
  {
    title: "Image Processing Suite",
    description: "Python ile histogram eşitleme, gürültü azaltma ve filtreleme operasyonlarını içeren kapsamlı bir görsel işleme araç seti.",
    tech: ["Python", "OpenCV", "NumPy"],
    link: "https://github.com/omerb4l/image_operations",
    github: "https://github.com/omerb4l/image_operations",
  },
  {
    title: "Fitness Center Otomasyonu",
    description: "C# ve SQL kullanılarak geliştirilmiş, profesyonel spor salonu yönetim sistemi.",
    tech: ["C#", "SQL", ".NET"],
    link: "https://github.com/omerb4l/FitnessCenterOtomasyonu",
    github: "https://github.com/omerb4l/FitnessCenterOtomasyonu",
  },
  {
    title: "Unity Game Collection",
    description: "Unity oyun motoru ile geliştirilen çeşitli 2D ve 3D oyun projelerinin birleşimi.",
    tech: ["Unity", "C#", "Game Design"],
    link: "https://github.com/omerb4l/CSharp-Game-Collection",
    github: "https://github.com/omerb4l/CSharp-Game-Collection",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen flex flex-col items-center justify-center py-64 relative w-full border-y border-white/5 bg-zinc-950/20">
      <div className="container mx-auto px-6 max-w-7xl flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-150px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-40 w-full"
        >
          <h2 className="text-6xl md:text-[10rem] font-black mb-12 tracking-tighter leading-none text-center w-full">Seçkin <span className="text-gradient">Projeler</span></h2>
          <div className="w-full flex justify-center">
            <p className="text-gray-400 text-2xl md:text-4xl font-extralight leading-relaxed italic text-center max-w-[80%]">
              Kendimi geliştirmek adına üzerinde çalıştığım bazı projelerim ve akademik çalışmalarım.
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 w-full justify-items-center">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 150 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="group bg-zinc-900/30 backdrop-blur-2xl border border-white/5 rounded-[3rem] p-12 hover:border-primary/40 transition-all hover:-translate-y-4 w-full max-w-2xl flex flex-col shadow-2xl"
            >
              <div className="flex justify-between items-start mb-12">
                <div className="p-6 bg-primary/10 rounded-[1.5rem] text-primary">
                  {project.title.includes("Anomali") ? <ShieldCheck size={36} /> : 
                   project.title.includes("Image") ? <ImageIcon size={36} /> :
                   <Code size={36} />}
                </div>
                <div className="flex gap-5">
                  <a href={project.github} target="_blank" className="hover:text-primary transition-colors p-4 bg-white/5 rounded-full hover:bg-primary/20">
                    <Code size={28} />
                  </a>
                  <a href={project.link} target="_blank" className="hover:text-primary transition-colors p-4 bg-white/5 rounded-full hover:bg-primary/20">
                    <ExternalLink size={28} />
                  </a>
                </div>
              </div>
              
              <h3 className="text-3xl md:text-5xl font-bold mb-6 group-hover:text-primary transition-colors leading-tight text-center">{project.title}</h3>
              <p className="text-gray-400 text-lg md:text-2xl mb-12 leading-relaxed flex-grow font-light text-center">{project.description}</p>
              
              <div className="flex flex-wrap gap-4 mt-auto justify-center">
                {project.tech.map((t) => (
                  <span key={t} className="text-xs font-mono tracking-[0.2em] uppercase text-primary/70 bg-primary/5 px-5 py-2.5 rounded-full border border-primary/20 font-bold">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
