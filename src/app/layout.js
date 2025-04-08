import './globals.css';
import { Inter } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import CustomCursor from "./components/CustomCursor";
import Header from './components/header';
import Footer from './components/footer';

const inter = Inter({ subsets: ['latin'] });


export const metadata = {
  title: 'Pantelis Karabetsos | Computer Engineer',
  description: 'Pantelis Karabetsos — software engineer crafting modern, functional, and user-centric web experiences.',
  icons: {
    icon: "/favicon.ico", 
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} cursor-none`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="bg-background text-foreground transition-colors duration-500 min-h-screen">
            <Header />
            <CustomCursor />
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
