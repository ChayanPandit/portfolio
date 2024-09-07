import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/components/Header";
import ActiveSectionContextProvider from "@/context/ActiveSectionContext";
import ThemeContextProvider from "@/context/ThemeContext";
import Footer from "@/components/Footer";
import ThemeSwitch from "@/components/ThemeSwitch";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Chayan's Portfolio",
  description: "Chayan is a full stack developer with 2 years of experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-50 text-slate-950 relative pt-28 sm:pt-36 dark:bg-slate-900 dark:text-slate-50 dark:text-opacity-90`}
      >
        <div className="-z-10 bg-cyan-200 dark:bg-cyan-800 opacity-70 absolute h-[100vh] w-2/3 rounded-full -translate-y-1/2 right-8 sm:right-16 md:right-16 blur-3xl" />
        <div className="-z-10 bg-purple-500 dark:bg-purple-800 opacity-30 absolute h-[100vh] w-2/3 rounded-full -translate-y-1/2 left-8 sm:left-16 md:left-16 blur-3xl" />
        
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header/>
            {children}
            <Footer/>

            <ThemeSwitch/>

          </ActiveSectionContextProvider>        
        </ThemeContextProvider>
      </body>
    </html>
  );
}
