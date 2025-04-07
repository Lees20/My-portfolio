"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Urbanist } from "next/font/google";

const urbanist = Urbanist({
  weight: "700",
  subsets: ["latin"],
});

export default function Header() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <>
      {/* 🔹 Pantelis at top-left (same top offset as the nav pill) */}
      <div className="fixed top-[48px] left-6 z-50">
        <Link
          href="/"
          className={`
            text-2xl sm:text-3xl font-extrabold tracking-tight
            bg-clip-text text-transparent
            bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500
            hover:opacity-90 transition-colors duration-300
            animate-gradient
            ${urbanist.className}
          `}
        >
          Pantelis
        </Link>
      </div>

      {/* 🔸 Centered nav pill at the same vertical level (top-8) */}
      <div className="fixed top-8 left-1/2 -translate-x-1/2 transform z-50">
        <header
          className="relative px-10 py-4 rounded-full border border-white/10
          shadow-[0_8px_30px_rgba(0,0,0,0.2)] overflow-hidden
          backdrop-blur-2xl bg-background/50 transition-colors duration-300"
        >
          {/* Glow ring */}
          <div className="absolute inset-0 rounded-full border border-primary/20 blur-[8px] pointer-events-none z-0 transition-colors duration-100" />

          {/* Header content */}
          <div className="relative z-10 flex items-center gap-8 text-base text-foreground font-medium tracking-tight transition-colors duration-100">
            {[
              { name: "Home", href: "/" },
              { name: "Projects", href: "/projects" },
              { name: "About", href: "/about" },
              { name: "Contact", href: "/contact" },
            ].map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="hover:text-primary transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}

            {/* Theme toggle */}
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="ml-4 p-2 rounded-full hover:bg-muted-foreground/10 transition-colors duration-100 relative"
              aria-label="Toggle theme"
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={theme}
                  initial={{ opacity: 0, rotate: -45, scale: 0.9 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 45, scale: 0.9 }}
                  transition={{ duration: 0.25 }}
                  className="block"
                >
                  {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
                </motion.span>
              </AnimatePresence>
            </button>
          </div>
        </header>
      </div>
    </>
  );
}
