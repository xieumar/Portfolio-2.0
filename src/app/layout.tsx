import type { Metadata } from "next";
import "./globals.css";
import CursorProvider from "./components/CursorProvider";
import AppThemeProvider from './providers/theme-provider'
export const metadata: Metadata = {
  title: 'Zainab | Frontend Developer ',
  description: 'Creative frontend developer and designer building interactive experiences for the web.',
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    title: 'Zainab | Frontend Developer',
    description: 'Creative frontend developer building interactive experiences for the web.',
    images: [
      {
        url: '/thumbnail.png',
        width: 1200,
        height: 630,
        alt: 'Zainab | Frontend Developer Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zainab | Frontend Developer',
    description: 'Creative frontend developer building interactive experiences for the web.',
    images: ['/thumbnail.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-background-light dark:bg-background-dark font-body text-gray-800 dark:text-gray-100 transition-colors duration-300 overflow-x-hidden min-h-screen flex flex-col">
        <AppThemeProvider>
          <CursorProvider />
          {children}
        </AppThemeProvider>
      </body>
    </html>
  );
}
