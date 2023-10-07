"use client"
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar/page";
import Pointer from "@/components/Pointer/Pointer";
import Footer from "@/components/Footer/Footer";
import Loading from "@/components/Loading/Loading";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {

  const [test, setTest] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  useEffect(()=> {
    setTimeout(()=>{
      setIsLoading(false)
    }, 1300)
  },[])

  return (
    <html lang="en">
      <head>
      <title>Twisha Patel</title>
        <meta name='description' content='Welcome to my portfolio !' />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={inter.className}>
        <AnimatePresence >
          {isLoading ? (
            <Loading />
          ) : (
            <>
              <Navbar />
              {children}
              <Footer />
            </>
          )}
        </AnimatePresence>
      </body>
    </html>
  );
}
