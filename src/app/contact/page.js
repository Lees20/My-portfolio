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
  const [status, setStatus] = useState(null); // success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);
  
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify(form),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };
   

  return (
    <main className="relative min-h-screen bg-background text-foreground transition-colors duration-500 overflow-hidden cursor-none">
      <Header />

      {/* Ambient blob */}
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
      <section className="relative z-10 px-6 md:px-20 pt-32 pb-24 max-w-2xl mx-auto text-center space-y-12">
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
          <div>
            <label className="block text-sm font-medium mb-1 text-foreground">Name</label>
            <input
              type="text"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-lg bg-zinc-100 dark:bg-white/10 border border-zinc-300 dark:border-white/20 text-zinc-800 dark:text-white placeholder:text-zinc-500 dark:placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1 text-foreground">Email</label>
            <input
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="your@email.com"
              className="w-full px-4 py-3 rounded-lg bg-zinc-100 dark:bg-white/10 border border-zinc-300 dark:border-white/20 text-zinc-800 dark:text-white placeholder:text-zinc-500 dark:placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1 text-foreground">Message</label>
            <textarea
              required
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              rows="5"
              placeholder="Your message..."
              className="w-full px-4 py-3 rounded-lg bg-zinc-100 dark:bg-white/10 border border-zinc-300 dark:border-white/20 text-zinc-800 dark:text-white placeholder:text-zinc-500 dark:placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition"
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={isSubmitting}
            className="px-6 py-3 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold shadow hover:opacity-90 transition"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </motion.button>

          {/* Feedback */}
          {status === 'success' && (
             <motion.div
                 initial={{ opacity: 0, y: 10 }}
                 animate={{ opacity: 1, y: 0 }}
                 className="mt-10 p-4 rounded-xl border shadow-xl backdrop-blur-md
                   bg-green-100 text-green-800 border-green-300
                dark:bg-green-500/10 dark:text-green-200 dark:border-green-400/30"
             >
         <div className="flex items-center gap-3">
           <span className="text-xl animate-pulse">✅</span>
           <span className="text-sm md:text-base">Message sent successfully!</span>
         </div>
         </motion.div>
)}



        {status === 'error' && (
         <motion.div
          initial={{ opacity: 0, y: 10 }}
             animate={{ opacity: 1, y: 0 }}
             className="mt-10 p-4 rounded-xl border shadow-xl backdrop-blur-md
              bg-red-100 text-red-800 border-red-300
           dark:bg-red-500/10 dark:text-red-200 dark:border-red-400/30"
         >
             <div className="flex items-center gap-3">
           <span className="text-xl animate-pulse">❌</span>
            <span className="text-sm md:text-base">Something went wrong. Please try again.</span>
          </div>
         </motion.div>
        )}



        </form>
      </section>
    </main>
  );
}
