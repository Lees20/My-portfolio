'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useTheme } from 'next-themes';

export default function CustomCursor() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Motion values for cursor position
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  // Spring animation for glow effect
  const glowX = useSpring(cursorX, { damping: 30, stiffness: 200 });
  const glowY = useSpring(cursorY, { damping: 30, stiffness: 200 });

  useEffect(() => {
    setMounted(true);
    setIsTouchDevice(window.matchMedia('(hover: none) and (pointer: coarse)').matches);

    const handleMouseMove = (e) => {
      cursorX.set(e.clientX - 12);
      cursorY.set(e.clientY - 12);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [cursorX, cursorY]);

  useEffect(() => {
    if (!mounted || isTouchDevice) return;

    const handleMouseEnter = () => setHovering(true);
    const handleMouseLeave = () => setHovering(false);

    const addHoverListeners = () => {
      const interactiveEls = document.querySelectorAll(
        'a:not(.no-cursor-label), button:not(.no-cursor-label)'
      );

      interactiveEls.forEach((el) => {
        el.addEventListener('mouseenter', handleMouseEnter);
        el.addEventListener('mouseleave', handleMouseLeave);
      });

      return () => {
        interactiveEls.forEach((el) => {
          el.removeEventListener('mouseenter', handleMouseEnter);
          el.removeEventListener('mouseleave', handleMouseLeave);
        });
      };
    };

    const removeListeners = addHoverListeners();

    // Observe DOM for changes (due to routing/navigation)
    const observer = new MutationObserver(() => {
      removeListeners();
      addHoverListeners();
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      removeListeners();
    };
  }, [mounted, isTouchDevice]);

  if (!mounted || isTouchDevice) return null;

  return (
    <>
      {/* Glow effect */}
      <motion.div
        className="fixed top-0 left-0 w-40 h-40 rounded-full pointer-events-none z-[9998]
                   bg-white opacity-5 blur-3xl mix-blend-screen will-change-transform"
        style={{ x: glowX, y: glowY }}
      />

      {/* Cursor */}
      <motion.div
        className={`fixed top-0 left-0 pointer-events-none z-[9999] flex items-center justify-center transition-all duration-150 ease-out ${
          hovering
            ? 'bg-white text-black py-1 px-3 rounded-full'
            : 'w-6 h-6 rounded-full bg-white shadow-[0_0_12px_4px_rgba(255,255,255,0.5)] mix-blend-difference'
        }`}
        style={{ x: cursorX, y: cursorY }}
      >
        <motion.span
          initial={{ opacity: 0, scale: 0.8 }}
          animate={hovering ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2 }}
          className="text-base font-extrabold leading-none"
        >
          Visit
        </motion.span>
      </motion.div>
    </>
  );
}
