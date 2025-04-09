'use client';

import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import Header from '../components/header';

export default function About() {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  const blurMain = isLight ? 'blur-[130px]' : 'blur-[110px]';
  const blurSub = isLight ? 'blur-[150px]' : 'blur-[130px]';

  // Color arrays for smooth cycling
  const lightMainColors = ['#fb923c80', '#facc1580', '#f9731680']; // orange, amber, red-ish
  const lightSubColors = ['#fcd34d50', '#fde04750', '#fbbf2450'];   // yellow tones

  const darkMainColors = ['#8b5cf680', '#6366f180', '#0ea5e980']; // purple, indigo, cyan
  const darkSubColors = ['#ec489950', '#a855f750', '#38bdf850'];  // fuchsia, violet, blue

  const mainColors = isLight ? lightMainColors : darkMainColors;
  const subColors = isLight ? lightSubColors : darkSubColors;

  return (
    <main className="relative min-h-screen bg-background text-foreground transition-colors duration-500 overflow-hidden cursor-none">
      <Header />

      {/* 🔮 Main Blob */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 80, -80, 0],
          y: [0, -60, 40, 0],
          rotate: [0, 20, -20, 0],
          backgroundColor: mainColors,
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: 'easeInOut',
          repeatType: 'mirror',
        }}
        className={`absolute z-0
          -top-[300px] -left-[200px]
          sm:-top-[500px] sm:-left-[400px]
          md:-top-[700px] md:-left-[500px]
          w-[600px] h-[600px]
          sm:w-[900px] sm:h-[900px]
          md:w-[1400px] md:h-[1400px]
          opacity-70 sm:opacity-80 md:opacity-90
          mix-blend-multiply dark:mix-blend-screen
          brightness-125
          rounded-full ${blurMain}`}
      />

      {/* 🔮 Sub Blob */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          x: [0, -60, 80, 0],
          y: [0, 80, -60, 0],
          rotate: [0, -15, 15, 0],
          backgroundColor: subColors,
        }}
        transition={{
          duration: 32,
          repeat: Infinity,
          ease: 'easeInOut',
          repeatType: 'mirror',
        }}
        className={`absolute z-0
          -bottom-[120px] -right-[150px]
          sm:-bottom-[250px] sm:-right-[300px]
          md:-bottom-[350px] md:-right-[400px]
          w-[500px] h-[500px]
          sm:w-[800px] sm:h-[800px]
          md:w-[1000px] md:h-[1000px]
          opacity-60 sm:opacity-70 md:opacity-80
          mix-blend-multiply dark:mix-blend-screen
          brightness-110
          rounded-full ${blurSub}`}
      />


      {/* 💬 Content */}
      <section className="relative z-10 px-4 sm:px-6 md:px-10 lg:px-20 pt-28 pb-20 max-w-3xl mx-auto space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-6"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 animate-gradient">
            About Me
          </h1>
          <p className="text-base sm:text-lg md:text-xl leading-relaxed text-muted-foreground">
            I’m Pantelis Karabetsos — a software engineer passionate about crafting interactive and elegant digital experiences. I love blending code and design to create ambient, minimal and user-centric solutions.
          </p>
        </motion.div>

        {/* What I Do */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white/70 dark:bg-white/5 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-2xl px-5 sm:px-6 py-6 shadow-xl space-y-6"
        >
          <h2 className="text-xl sm:text-2xl font-bold text-zinc-800 dark:text-white/90">
            What I Do
          </h2>
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

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <a
            href="/projects"
            className="inline-block px-5 py-3 sm:px-6 sm:py-3 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-sm sm:text-base font-semibold hover:opacity-90 transition shadow-md"
          >
            View My Work →
          </a>
        </motion.div>
      </section>
    </main>
  );
}
