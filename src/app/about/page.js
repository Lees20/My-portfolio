'use client';

import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import Header from '../components/header';

export default function About() {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  const blobColorMain = isLight ? 'bg-orange-400/50' : 'bg-purple-600/30';
  const blobColorSub = isLight ? 'bg-yellow-300/30' : 'bg-pink-500/25';
  const blurMain = isLight ? 'blur-[130px]' : 'blur-[110px]';
  const blurSub = isLight ? 'blur-[150px]' : 'blur-[130px]';

  return (
    <main className="relative min-h-screen bg-background text-foreground transition-colors duration-500 overflow-hidden cursor-none">
      <Header />

      {/* Ambient Blobs */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], x: [0, 100, -100, 0], y: [0, -80, 60, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        className={`absolute -top-[800px] -left-[600px] w-[1400px] h-[1400px] rounded-full z-0 ${blobColorMain} ${blurMain}`}
      />
      <motion.div
        animate={{ scale: [1, 1.1, 1], x: [0, -80, 100, 0], y: [0, 100, -80, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        className={`absolute bottom-[-400px] right-[-400px] w-[1000px] h-[1000px] rounded-full z-0 ${blobColorSub} ${blurSub}`}
      />

      <section className="relative z-10 px-6 md:px-20 pt-32 pb-20 max-w-4xl mx-auto space-y-20">

        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-6"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 animate-gradient">
            About Me
          </h1>
          <p className="text-lg md:text-xl leading-relaxed text-muted-foreground max-w-3xl mx-auto">
            I’m Pantelis Karabetsos — a software engineer passionate about crafting interactive and elegant digital experiences. I combine technical precision with aesthetic intuition, building full-stack systems and expressive UIs that feel intuitive and ambient.
          </p>
        </motion.div>

        {/* What I Do */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white/70 dark:bg-white/5 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-3xl px-6 py-8 shadow-xl"
        >
          <h2 className="text-2xl font-bold mb-6 text-zinc-800 dark:text-white/90">What I Do</h2>
          <ul className="space-y-4 text-sm sm:text-base text-zinc-700 dark:text-muted-foreground">
            {[
              ['🧩', 'Designing intuitive and cohesive digital systems'],
              ['⚡', 'Animating interfaces with Framer Motion & React'],
              ['🛠', 'Developing full-stack apps with Next.js, Node.js, MongoDB'],
              ['🧠', 'Exploring ambient design, generative UI, and AI tooling'],
            ].map(([icon, text], i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-lg">{icon}</span>
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <a
            href="/projects"
            className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold hover:opacity-90 transition shadow-lg"
          >
            View My Work →
          </a>
        </motion.div>

      </section>
    </main>
  );
}
