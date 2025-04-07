import './globals.css';
import { Inter } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import CustomCursor from "./components/CustomCursor";
import { Toaster } from 'react-hot-toast';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} cursor-none`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="bg-background text-foreground transition-colors duration-500 min-h-screen">
            <CustomCursor />
            {children}
            <Toaster
          position="top-center"
          toastOptions={{
            duration: 4000,
            style: {
              background: '#1f1f1f',
              color: '#fff',
              border: '1px solid #6b21a8',
              boxShadow: '0 0 20px rgba(236, 72, 153, 0.4)',
              fontWeight: 500,
              fontSize: '0.95rem',
            },
          }}
        />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
