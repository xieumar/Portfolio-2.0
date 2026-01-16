import type { Metadata } from "next";
import "./globals.css";
import CursorProvider from "./components/CursorProvider";
import AppThemeProvider from './providers/theme-provider'
export const metadata: Metadata = {
  title: 'Zainab | Frontend Developer ',
  description: 'Creative frontend developer and designer building interactive experiences for the web.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   

    <AppThemeProvider>
      <html lang="en">
        <body className="bg-background-light dark:bg-background-dark font-body text-gray-800 dark:text-gray-100 transition-colors duration-300 overflow-x-hidden min-h-screen flex flex-col">
          <CursorProvider />
          {children}
        </body>
      </html>
    </AppThemeProvider>
  );
}
