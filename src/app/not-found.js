'use client';

import Link from 'next/link';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function NotFound() {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const activeTheme = theme === 'system' ? resolvedTheme : theme;

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || !activeTheme) return null;

  return (
    <main className="relative min-h-screen bg-background text-foreground font-sans transition-colors duration-500 overflow-hidden flex items-center justify-center px-6">
      {/* Ambient Glow Background */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute w-[900px] h-[900px] rounded-full blur-[160px] -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          background: activeTheme === 'dark'
            ? 'radial-gradient(circle at 30% 30%, #6366f1, #a855f7, #ec4899)'
            : 'radial-gradient(circle at 30% 30%, #facc15, #fb7185, #f97316)',
        }}
      />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="text-center space-y-8 max-w-xl"
      >
        {/* Illustration */}
        <motion.img
          src="astronaut.svg"
          alt="Lost in space"
          className="mx-auto w-48 h-48 md:w-56 md:h-56"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6, ease: 'easeOut' }}
        />

        <motion.h1
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
          className="text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-400 animate-[gradientMove_8s_infinite]"
        >
          404
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-lg text-zinc-400 dark:text-zinc-300"
        >
          You’ve wandered into the void.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="text-base text-muted-foreground mb-10"
        >
          This page doesn’t exist or has been moved elsewhere in the universe.
        </motion.p>

        <div className="mt-20 flex justify-center">
          <Link href="/">
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.96 }}
              className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm sm:text-base font-semibold transition-all shadow-xl ring-2 ring-white/10 hover:ring-white/30 backdrop-blur-lg
                ${activeTheme === 'dark'
                  ? 'bg-white/10 text-white hover:bg-white/20'
                  : 'bg-black/10 text-black hover:bg-black/20'}`}
            >
           <img
                src="/earth.svg"
                alt="spacecraft icon"
                className="w-5 h-5 text-foreground"
                />

              <span>Back to earth</span>
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </main>
  );
}
