'use client';

import { motion, useCycle } from "framer-motion";
import { useTheme } from "next-themes";
import Header from "./components/header";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [colors, setColors] = useCycle(
    "bg-orange-400",
    "bg-amber-400",
    "bg-rose-400",
    "bg-yellow-400"
  );
  const [darkColors, setDarkColors] = useCycle(
    "bg-indigo-500",
    "bg-purple-600",
    "bg-blue-500",
    "bg-fuchsia-600"
  );

  useEffect(() => {
    const interval = setInterval(() => {
      theme === "dark" ? setDarkColors() : setColors();
    }, 4000);

    setMounted(true);
    return () => clearInterval(interval);
  }, [theme, setColors, setDarkColors]);

  if (!mounted) return null;

  return (
    <main className="relative min-h-screen bg-background text-foreground transition-colors font-sans overflow-hidden">
      <Header />

      {/* Animated Blob (background effect) */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none transition-colors duration-1000"
      >
        <div
          className={`w-[600px] h-[600px] rounded-full
            blur-[70px] dark:blur-[110px]
            opacity-80 dark:opacity-60
            mix-blend-multiply dark:mix-blend-screen
            transition-all duration-1000
            ${theme === "dark" ? darkColors : colors}`}
        />
      </motion.div>

      {/* Hero Section */}
      <section className="relative z-10 flex flex-col items-center justify-center text-center gap-8 sm:gap-12 px-4 sm:px-6 md:px-20 pt-24 sm:pt-32 pb-20 sm:pb-24 min-h-[calc(100vh-6rem)]">
        <div className="space-y-8 max-w-3xl">
          {/* Animated Gradient Headline */}
          <div className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-indigo-500 via-purple-500 to-fuchsia-500 animate-gradient">
            {["Engineer", "Builder", "Creator"].map((word, index) => (
              <motion.div
                key={word}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.3,
                  duration: 0.8,
                  ease: "easeOut",
                }}
                className="my-1"
              >
                {word}
              </motion.div>
            ))}
          </div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="text-sm sm:text-base md:text-lg text-zinc-400 dark:text-zinc-400 max-w-xl mx-auto leading-relaxed tracking-wide"
          >
            Building the brains behind the interface.
          </motion.p>

          {/* CTA */}
          <Link href="/projects">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
              className="mt-6 px-6 py-3 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:opacity-90 transition"
            >
              View Projects
            </motion.button>
          </Link>
        </div>
      </section>
    </main>
  );
}
