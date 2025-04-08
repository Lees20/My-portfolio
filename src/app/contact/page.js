'use client';

import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import Header from '../components/header';
import { useState } from 'react';

export default function Contact() {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  const blobColor = isLight ? 'bg-orange-300/40' : 'bg-purple-500/30';
  const blur = isLight ? 'blur-[140px]' : 'blur-[120px]';

  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify(form),
        headers: { 'Content-Type': 'application/json' },
      });

      res.ok
        ? (setStatus('success'), setForm({ name: '', email: '', message: '' }))
        : setStatus('error');
    } catch {
      setStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="relative min-h-screen flex flex-col bg-background text-foreground transition-colors duration-500 overflow-hidden cursor-none">
      <Header />

      {/* 🔮 Animated Blob */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 100, -80, 0],
          y: [0, -100, 50, 0],
          opacity: [0.4, 0.8, 0.4],
        }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
        className={`absolute -top-96 -left-80 w-[1200px] h-[1200px] rounded-full z-0 ${blobColor} ${blur}`}
      />

      {/* 📨 Contact Section */}
      <section className="relative z-10 flex-grow px-6 md:px-20 pt-32 pb-16 sm:pb-32 max-w-2xl mx-auto text-center space-y-12">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-400 to-indigo-500 animate-gradient"
        >
          Get In Touch
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto"
        >
          Whether you have a question, a collaboration idea, or just want to say hi — feel free to drop me a message below.
        </motion.p>

        {/* 📬 Contact Form */}
        <form className="space-y-6 text-left" onSubmit={handleSubmit}>
          {['name', 'email', 'message'].map((field) => (
            <div key={field}>
              <label className="block text-sm font-medium mb-1 text-foreground capitalize">
                {field}
              </label>
              {field === 'message' ? (
                <textarea
                  required
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  rows="5"
                  placeholder="Your message..."
                  className="w-full px-4 py-3 rounded-lg bg-zinc-100 dark:bg-white/10 border border-zinc-300 dark:border-white/20 text-zinc-800 dark:text-white placeholder:text-zinc-500 dark:placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition"
                />
              ) : (
                <input
                  type={field === 'email' ? 'email' : 'text'}
                  required
                  value={form[field]}
                  onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                  placeholder={`Your ${field.charAt(0).toUpperCase() + field.slice(1)}`}
                  className="w-full px-4 py-3 rounded-lg bg-zinc-100 dark:bg-white/10 border border-zinc-300 dark:border-white/20 text-zinc-800 dark:text-white placeholder:text-zinc-500 dark:placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition"
                />
              )}
            </div>
          ))}

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={isSubmitting}
            className="w-full sm:w-auto px-6 py-3 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold shadow hover:opacity-90 transition text-center"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </motion.button>

          {/* ✅ Feedback */}
          {status && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`mt-8 p-4 rounded-xl border shadow-xl backdrop-blur-md ${
                status === 'success'
                  ? 'bg-green-100 text-green-800 border-green-300 dark:bg-green-500/10 dark:text-green-200 dark:border-green-400/30'
                  : 'bg-red-100 text-red-800 border-red-300 dark:bg-red-500/10 dark:text-red-200 dark:border-red-400/30'
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="text-xl animate-pulse">{status === 'success' ? '✅' : '❌'}</span>
                <span className="text-sm md:text-base">
                  {status === 'success'
                    ? 'Message sent successfully!'
                    : 'Something went wrong. Please try again.'}
                </span>
              </div>
            </motion.div>
          )}
        </form>

        {/* ✉️ Email Section */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-3 text-sm sm:text-base text-muted-foreground"
        >
          <span className="text-zinc-500 dark:text-zinc-400">Or email me directly:</span>
          <a
            href="mailto:contact@pkarabetsos.com"
            className="relative inline-flex items-center gap-2 font-medium text-indigo-500 hover:text-pink-500 transition group"
          >
            <span className="relative z-10 break-all sm:break-normal">contact@pkarabetsos.com</span>
            <span className="absolute -inset-1 rounded-lg bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-20 blur-xl transition duration-300" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-4 h-4 text-indigo-400 group-hover:text-pink-400 transition"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0l-9.75 6.75L2.25 6.75"
              />
            </svg>
          </a>
        </motion.div>
      </section>
    </main>
  );
}
