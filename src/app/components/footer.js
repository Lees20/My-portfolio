'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="relative z-10 w-full border-t border-white/10 bg-background/30 backdrop-blur-sm text-muted-foreground text-xs">
      <div className="max-w-5xl mx-auto px-4 py-4 flex flex-col items-center justify-center gap-2 text-center">
        <p className="text-[12px]">
          © {new Date().getFullYear()} Pantelis Karabetsos. All rights reserved.
        </p>

        <div className="text-[12px]">
          <Link
            href="/privacy-policy"
            className="text-muted-foreground hover:text-primary transition"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
