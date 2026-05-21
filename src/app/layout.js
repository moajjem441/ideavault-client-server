import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "@/Components/Navbar";
import NextThemeProvider from "@/provider/NextThemeProvider";
import Footer from "@/Components/Footer";
import { Toaster } from "react-hot-toast";




const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: 'IdeaVault', 
  description: 'A premium platform to share and explore innovative startup ideas.', 
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased `} 
      suppressHydrationWarning
      >
      <body className="min-h-full flex flex-col bg-background text-foreground"
      
      suppressHydrationWarning
      >
       
       <NextThemeProvider>

         <Navbar></Navbar>
         <main>
          {children}
         
         </main>
         <Footer></Footer>
       </NextThemeProvider>
          <Toaster />
        </body>
    </html>
  );
}
