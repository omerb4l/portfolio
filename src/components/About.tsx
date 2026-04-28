"use client";

import { motion } from "framer-motion";

const skills = [
  "C#", ".NET", "Unity", "Python", 
  "Görüntü İşleme", "Java", "NoSQL",
  "Veri Çekme", "TypeScript", "React", "Next.js", "SQL"
];

export default function About() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-48 bg-black/50 relative w-full overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-32"
        >
          <h2 className="text-5xl md:text-9xl font-black tracking-tighter uppercase">
            HAKKIMDA <span className="text-primary">.</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-32 items-center">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="space-y-10"
          >
            <p className="text-gray-400 text-2xl md:text-4xl leading-relaxed font-light">
              21 yaşındayım ve <span className="text-white font-medium">Fırat Üniversitesi Yazılım Mühendisliği</span> 3. sınıf öğrencisiyim. Küçük yaşlardan beri bilgisayarlara olan büyük merakım, bugün beni hayalini kurduğum bu bölümü okumaya ulaştırdı.
            </p>
            <p className="text-gray-300 text-xl md:text-2xl leading-relaxed font-extralight">
              Bu süreçte <span className="text-primary font-medium">C#, Java, Python</span> gibi dillerde kendimi geliştirirken; oyun motorlarından görüntü işlemeye, veri çekme süreçlerinden modern web teknolojilerine kadar geniş bir yelpazede projeler ürettim. Siber güvenlik alanı ise en büyük tutkum ve uzmanlık hedefim.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex flex-wrap justify-center lg:justify-end gap-6"
          >
            {skills.map((tech, i) => (
              <motion.div
                key={tech}
                whileHover={{ scale: 1.1, backgroundColor: "rgba(34, 197, 94, 0.1)" }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="px-10 py-5 bg-white/5 border border-white/10 rounded-3xl font-mono text-primary text-xl md:text-2xl transition-all cursor-default backdrop-blur-md uppercase"
              >
                {tech}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
