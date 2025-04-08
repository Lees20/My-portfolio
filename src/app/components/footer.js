'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="relative z-10 w-full border-t border-white/10 bg-background/30 backdrop-blur-sm text-muted-foreground text-xs">
      <div className="max-w-5xl mx-auto px-4 py-4 flex flex-col items-center justify-center gap-2 text-center">
        <p className="text-[12px]">
          © {new Date().getFullYear()} Pantelis Karabetsos. All rights reserved.
        </p>

        {/* Optional socials */}
        {/* <div className="flex gap-4">
          <Link
            href="https://github.com/Lees20"
            target="_blank"
            className="hover:text-primary transition text-[12px]"
          >
            GitHub
          </Link>
          <Link
            href="mailto:contact@pkarabetsos.com"
            className="hover:text-primary transition text-[12px]"
          >
            Email
          </Link>
          <Link
            href="https://linkedin.com/in/your-link"
            target="_blank"
            className="hover:text-primary transition text-[12px]"
          >
            LinkedIn
          </Link>
        </div> */}
      </div>
    </footer>
  );
}
