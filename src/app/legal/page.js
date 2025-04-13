'use client';

import Link from 'next/link';

export default function LegalPage() {
  return (
    <main className="min-h-screen px-4 py-32 text-center bg-background text-foreground transition-colors">
      <div className="max-w-2xl mx-auto space-y-10">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
          Legal Information
        </h1>

        <p className="text-muted-foreground text-sm sm:text-base">
          Here you can find the legal terms that govern your use of this site and how your data is handled.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/terms"
            className="px-6 py-3 text-sm font-medium rounded-full bg-zinc-900 text-white hover:bg-zinc-800 transition"
          >
            Terms of Use
          </Link>

          <Link
            href="/privacy-policy"
            className="px-6 py-3 text-sm font-medium rounded-full bg-zinc-900 text-white hover:bg-zinc-800 transition"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </main>
  );
}
