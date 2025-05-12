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

      {/*  Animated Blob */}
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

      {/* Contact Section */}
      <section className="relative z-10 flex-grow px-6 md:px-20 pt-44 pb-16 sm:pb-32 max-w-2xl mx-auto text-center space-y-12">

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

        {/* Contact Form */}
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
            className="no-cursor-label w-full sm:w-auto px-6 py-3 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold shadow hover:opacity-90 transition text-center"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </motion.button>

          {/* Feedback */}
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

        {/* Email Section */}
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
                d="M3 6.75L12 13.5L21 6.75M4.5 6h15a1.5 1.5 0 0 1 1.5 1.5v9a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 16.5v-9A1.5 1.5 0 0 1 4.5 6Z"
              />
            </svg>


          </a>
        </motion.div>
  
  
    {/* Socials */}

    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="mt-10 flex justify-center gap-6 sm:gap-8 text-zinc-500 dark:text-zinc-400"
    >
      {[
        {
          href: 'https://github.com/panteliskarabetsos',
          label: 'GitHub',
          svg: (
            <path d="M12 .5C5.6.5.5 5.6.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2.1c-3.2.7-3.9-1.4-3.9-1.4-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.6 2.3 1.1 2.9.9.1-.7.4-1.1.7-1.4-2.6-.3-5.4-1.3-5.4-5.9 0-1.3.5-2.4 1.2-3.3 0-.3-.5-1.3.1-2.8 0 0 1-.3 3.3 1.2a11.2 11.2 0 0 1 6 0C17 4.9 18 5.2 18 5.2c.6 1.5.1 2.5.1 2.8.8.9 1.2 2 1.2 3.3 0 4.6-2.8 5.6-5.4 5.9.4.3.8 1 .8 2v3c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.6 18.4.5 12 .5Z" />
          ),
        },
        {
          href: 'https://linkedin.com/in/panteliskarabetsos',
          label: 'LinkedIn',
          svg: (
            <path d="M19 0h-14c-2.8 0-5 2.2-5 5v14c0 2.8 2.2 5 5 5h14c2.8 0 5-2.2 5-5v-14c0-2.8-2.2-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.3c-1 0-1.7-.7-1.7-1.6s.7-1.6 1.7-1.6c1 0 1.7.7 1.7 1.6s-.8 1.6-1.7 1.6zm13.5 10.3h-3v-4.8c0-1.1-.4-1.8-1.3-1.8s-1.5.6-1.7 1.3c-.1.2-.1.5-.1.7v4.6h-3v-9h3v1.2c.4-.6 1.2-1.4 2.8-1.4 2.1 0 3.5 1.4 3.5 4.3v4.9z" />
          ),
        },
        {
          href: 'https://instagram.com/pantelis.kb',
          label: 'Instagram',
          svg: (
            <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm0 2h10c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3zm5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm5.5-2a1.5 1.5 0 110 3 1.5 1.5 0 010-3z" />
          ),
        },
      ].map(({ href, label, svg }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative"
          aria-label={label}
        >
          <span className="absolute -inset-2 rounded-xl bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-20 blur-2xl transition-all duration-300 pointer-events-none" />
          <svg
            className="w-6 h-6 z-10 relative transition-colors duration-300 text-zinc-500 group-hover:text-indigo-500 dark:group-hover:text-pink-400"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            {svg}
          </svg>
        </a>
      ))}
    </motion.div>



  </section>
</main>
      );
}
