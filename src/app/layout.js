import './globals.css';
import { Inter } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import CustomCursor from "./components/CustomCursor";
import Header from './components/header';
import Footer from './components/footer';
import Script from 'next/script';
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Pantelis Karabetsos | Computer Engineer',
  description: 'Pantelis Karabetsos — software engineer crafting modern, functional and user-centric web experiences.',
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
      { url: '/maskable-icon.png', sizes: '192x192', type: 'image/png', purpose: 'maskable' }, // optional
    ],
  },
};



export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* ✅ Plausible Analytics */}
        <Script
          async
          defer
          data-domain="panteliskarabetsos.com"
          src="https://plausible.io/js/script.js"
        />
      </head>

      <body className={`${inter.className} cursor-none`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="bg-background text-foreground transition-colors duration-500 min-h-screen">
            <Header />
            <CustomCursor />
            {children}
            <Footer />
            <SpeedInsights />
        
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
