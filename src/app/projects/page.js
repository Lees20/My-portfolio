'use client';
import { useTheme } from 'next-themes';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const { theme } = useTheme();

  const projects = [
    {
      id: 1,
      title: 'Oasis - Agrotourism and Wellness Booking Platform',
      description: `This project is a modern, ambient booking platform for wellness and agritourism experiences across Crete.
      Users can explore experiences, check real-time availability, and book their spot in a seamless and mobile-friendly environment.
      The platform focuses on simplicity, luxurious design and exceptional user experience. The admin can manage clients, the experiences and the schedule making it easy to keep track of everything.`,
      tech: ['Next.js 14', 'TailwindCSS', 'Framer Motion',' Node.js', 'Prisma ORM', 'PostgreSQL','REST API','NextAuth.js', 'Stripe','Recaptcha',],
      image: '/images/oasis.png',
      github: 'https://github.com/Lees20/pnoe',
      demo: 'https://youroasis.vercel.app/',
    },   
    {
      id: 2,
      title: 'Apartment Booking App',
      description: `
        A complete apartment rental platform designed and built with a full-stack architecture. Users can search, view, and book vacation rentals through a clean and intuitive interface.

        • Interactive Search Bar – Filter properties by city, date range, and guests.

        • Real-Time Availability – Built with React, MUI, date-fns, and custom Node.js/Express backend.

        • Smooth UX – Dynamic pages powered by React Router with form validation and error handling.

        • Scalable – Modular structure enables feature expansion like auth, dashboard, and payment systems.`,
      tech: ['React', 'TailwindCSS', 'Framer Motion',' Node.js', 'Express', 'MongoDB','REST API'],
      image: '/images/booknow.png',
      github: 'https://github.com/panteliskarabetsos/BookNow',
      demo: 'https://book-now-amber.vercel.app/',
    },
    {
      id: 3,
      title: 'Cardiologist Website',
      description: 'A professional, modern, and responsive portfolio site built for Dr. Marios Zisis, a recent medical graduate with a passion for cardiology and research. Designed to highlight his academic achievements, clinical interests, and recommendations, the website serves as a digital CV and a platform for professional outreach.',
      tech: ['React', 'Tailwind CSS', 'Vercel', 'Framer Motion', 'Next.js'],
      image: '/images/drzisis.png',
      github: 'https://github.com/panteliskarabetsos/drzisis-portfolio',
      demo: 'https://www.drzisis.com/',
    },
    {
      id: 4,
      title: 'Web Crawler & Search Engine',
      description: 'A Python-based mini search engine that crawls Wikipedia articles, builds an inverted index, and supports Boolean queries with ranking options (TF-IDF, BM25, VSM). Includes full text preprocessing with NLTK and an interactive CLI for querying and evaluation.',
      tech: ['Python', 'NLTK', 'BeautifulSoup', 'NumPy', 'Regex','Custom IR logic'],
     
      github: 'https://github.com/panteliskarabetsos/IR-Lab-Project',
      demo: '',
    },
    {
      id: 5,
      title: 'Unit Testing App in C#',
      description: 'A C# application designed to demonstrate and validate core functionalities using unit tests with NUnit. Focused on writing clean, testable logic and achieving high code coverage through test-driven development (TDD) practices.',
      tech: ['C#', '.NET', 'NUnit', 'Testing'],
     
      github: 'https://github.com/panteliskarabetsos/PayrollApp',
      demo: '',
    },
    {
      id: 6,
      title: 'Personal Portfolio Website',
      description: `
        A fully custom, animated portfolio built with Next.js and TailwindCSS.
        Includes scroll-animated sections, ambient blobs and a live contact form with email API.
        Fully responsive, with light/dark theme support and modern UI interactions.
      `,
      tech: [
        'Next.js',
        'TailwindCSS',
        'Framer Motion',
        'Nodemailer',
        'Next-Themes',
        'Lucide Icons',
      ],
      github: 'https://github.com/panteliskarabetsos/My-portfolio',
    }
    
  ];

  return (
    <main className="relative min-h-screen bg-background text-foreground font-sans transition-colors duration-500 overflow-hidden cursor-none">
 
      <section className="relative z-10 flex flex-col items-center text-center gap-16 px-6 md:px-20 pt-40 pb-28">
  <div className="space-y-8 max-w-4xl">
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="text-5xl md:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 animate-gradient drop-shadow-md"
    >
      My Projects
    </motion.h1>

    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.2 }}
      className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
    >
      A journey through functional ideas and creative expression — one build at a time.
    </motion.p>
  </div>

  {/* Grid */}
  <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl pt-10">
    {projects.map((project, index) => (
      <motion.div
        key={project.id}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className="group relative rounded-3xl p-6 transition-all duration-500
          border border-zinc-200 dark:border-white/10
          bg-white/90 dark:bg-white/5
          backdrop-blur-md overflow-hidden
          hover:shadow-[0_8px_30px_rgba(147,51,234,0.3)]
          hover:border-transparent">
    
        <h3 className="text-xl font-semibold mb-2 text-zinc-800 dark:text-white group-hover:text-indigo-500 transition-colors">
          {project.title}
        </h3>

        <p className="text-sm text-zinc-600 dark:text-zinc-400 line-clamp-2">
          {project.description}
        </p>

        <button
          onClick={() => setSelectedProject(project)}
          className="no-cursor-label mt-4 inline-block text-indigo-500 dark:text-indigo-400 hover:underline text-sm font-medium"
        >
          View Details →
        </button>
      </motion.div>
    ))}
  </div>
</section>


<AnimatePresence>
{theme && (
  <motion.div
    initial={{ scale: 1, x: 0, y: 0 }}
    animate={{
      scale: [1, 1.05, 1],
      x: [0, 10, -10, 0],
      y: [0, -10, 10, 0],
    }}
    transition={{
      duration: 12,
      repeat: Infinity,
      ease: 'easeInOut',
    }}
    className={`absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full blur-[160px] opacity-40 pointer-events-none z-0
      ${
        theme === 'light'
          ? 'bg-gradient-to-br from-yellow-300 via-orange-300 to-pink-300'
          : 'bg-gradient-to-br from-pink-500 via-purple-600 to-indigo-500'
      }
    `}
  />
)}


{selectedProject && (
  <>
    {/* Hide scrollbars globally */}
    <style jsx global>{`
      ::-webkit-scrollbar {
        display: none;
      }
    `}</style>

    <motion.div
      style={{
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
      }}
      className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center px-2 sm:px-4 py-4 sm:py-8 overflow-y-auto overscroll-contain scroll-smooth"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setSelectedProject(null)}
    >
      <motion.div
        onClick={(e) => e.stopPropagation()}
        initial={{ y: 40, opacity: 0, scale: 0.96 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: 40, opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
        className="relative w-full max-w-2xl max-h-[calc(100dvh-2rem)] overflow-y-auto overscroll-y-contain touch-pan-y
                   rounded-xl sm:rounded-[2rem] bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl p-4 sm:p-6 mx-auto"
      >
        {/* Ambient Glow */}
        <motion.div
          animate={{ scale: [1, 1.04, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -inset-4 sm:-inset-2 blur-[80px] sm:blur-[100px] rounded-[2rem] bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 opacity-20 pointer-events-none"
        />

        {/*  Close Button */}
        <button
          onClick={() => setSelectedProject(null)}
          className="no-cursor-label absolute top-3 right-3 z-40 w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-black/50 hover:bg-black/70 text-white text-lg sm:text-xl transition"
          aria-label="Close modal"
        >
          ✕
        </button>

        {/*  Modal Content */}
        <div className="relative z-10 space-y-6 sm:space-y-8 text-sm sm:text-base">
          {/* Title */}
          <h2 className="text-xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-500 animate-gradient">
            {selectedProject.title}
          </h2>

          {/* Image */}
          {selectedProject.image && (
            <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-white/10 shadow-lg">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.02]"
              />
            </div>
          )}

          {/* Description */}
          <div className="text-zinc-300 space-y-3 leading-relaxed whitespace-pre-wrap">
            {selectedProject.description
              .split('\n')
              .filter((line) => line.trim() !== '')
              .map((line, index) => (
                <p key={index}>{line.trim()}</p>
              ))}
          </div>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-2 pt-2">
            {selectedProject.tech.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs font-medium bg-white/10 text-white rounded-full border border-white/10"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            {selectedProject.github && (
              <a
                href={selectedProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-4 py-2 text-center rounded-full bg-white text-black text-sm font-semibold hover:opacity-90 transition shadow-md"
              >
                GitHub
              </a>
            )}
            {selectedProject.demo && (
              <a
                href={selectedProject.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-4 py-2 text-center rounded-full bg-indigo-500 text-white text-sm font-semibold hover:bg-indigo-600 transition shadow-lg"
              >
                Live Demo
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  </>
)}
</AnimatePresence>
    </main>
  );
}
