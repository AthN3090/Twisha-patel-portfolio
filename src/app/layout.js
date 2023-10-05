import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar/page";
import Pointer from "@/components/Pointer/Pointer";
import Footer from "@/components/Footer/Footer";
import Loading from "@/components/Loading/Loading";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Twisha Patel",
  description: "Welcome to my portoflio!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  );
}
