import type { Metadata } from "next";
import "./globals.css";
import CursorProvider from "./components/CursorProvider";

export const metadata: Metadata = {
  title: 'Cassie | Frontend Developer & Designer',
  description: 'Creative frontend developer and designer building interactive experiences for the web.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
      </head>
      <body className="bg-background-light dark:bg-background-dark font-body text-gray-800 dark:text-gray-100 transition-colors duration-300 overflow-x-hidden min-h-screen flex flex-col">
        <CursorProvider />
        {children}
      </body>
    </html>
  );
}
