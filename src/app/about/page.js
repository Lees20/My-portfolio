'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { useTheme } from 'next-themes';
import Header from '../components/header';

export default function About() {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  const blobColorMain = isLight ? 'bg-orange-400/60' : 'bg-purple-600/30';
  const blobColorSub = isLight ? 'bg-yellow-300/40' : 'bg-pink-500/25';
  const blurMain = isLight ? 'blur-[140px]' : 'blur-[120px]';
  const blurSub = isLight ? 'blur-[160px]' : 'blur-[140px]';

  const timelineRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start end', 'end center'],
  });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <main className="relative min-h-screen bg-background text-foreground font-sans transition-colors duration-500 overflow-hidden cursor-none">
      <Header />

      {/* 🔮 Ambient Blobs */}
      <motion.div
        animate={{
          scale: [1, 1.35, 1],
          x: [0, 120, -100, 0],
          y: [0, -100, 80, 0],
          rotate: [0, 25, -25, 0],
          opacity: isLight ? [0.4, 0.9, 0.4] : [0.3, 0.6, 0.3],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        className={`absolute -top-96 -left-80 w-[1400px] h-[1400px] rounded-full z-0 ${blobColorMain} ${blurMain}`}
      />
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          x: [0, -80, 60, 0],
          y: [0, 60, -60, 0],
          opacity: isLight ? [0.3, 0.6, 0.3] : [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        className={`absolute bottom-[-300px] right-[-300px] w-[900px] h-[900px] rounded-full z-0 ${blobColorSub} ${blurSub}`}
      />

      {/* ✨ Intro Section */}
      <section className="relative z-10 px-6 md:px-20 pt-32 pb-24 max-w-4xl mx-auto text-center space-y-14">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 animate-gradient"
        >
          About Me
        </motion.h1>

        <motion.p
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, delay: 0.2 }}
  className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto text-neutral-800 dark:text-muted-foreground"
>
  I’m Pantelis Karabetsos — a software engineer with a passion for crafting interactive, ambient and minimal experiences. I care deeply about design systems, smooth interactions, and writing expressive code that brings ideas to life. Whether it’s building dynamic interfaces or experimenting with new technologies, I thrive at the intersection of creativity and logic.
</motion.p>

<motion.div
  initial={{ opacity: 0, scale: 0.95 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.6, delay: 0.4 }}
  className="rounded-3xl bg-white/70 dark:bg-white/5 backdrop-blur-xl border border-white/20 dark:border-white/10 px-5 py-6 sm:px-6 md:px-8 shadow-xl text-left max-w-3xl mx-auto space-y-6"
>
  <h2 className="text-xl sm:text-2xl font-bold text-zinc-800 dark:text-white/90">
    What I Do
  </h2>
  <ul className="space-y-4">
    {[
      {
        icon: '🧩',
        text: 'Designing systems that feel intuitive, polished, and cohesive',
      },
      {
        icon: '⚡',
        text: 'Creating animated interfaces with Framer Motion & React',
      },
      {
        icon: '🛠',
        text: 'Building full-stack apps with Next.js, Node.js, MongoDB',
      },
      {
        icon: '🧠',
        text: 'Exploring ideas in AI, ambient design and generative UI',
      },
    ].map((item, index) => (
      <li key={index} className="flex items-start gap-3 text-zinc-700 dark:text-muted-foreground text-sm sm:text-base">
        <span className="text-lg">{item.icon}</span>
        <span>{item.text}</span>
      </li>
    ))}
  </ul>
</motion.div>



        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <a
            href="/projects"
            className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold hover:opacity-90 transition"
          >
            View My Work →
          </a>
        </motion.div>
      </section>

      
    </main>
  );
}
