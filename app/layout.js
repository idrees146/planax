import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import Footer from "./Components/Footer";
 
 import Navbar from "./Components/Navbar";

 

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

 
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // you can include weights you need
});

export const metadata = {
  title: "Planax",
  description: "Planax is your go to use productivity app, helping you manage your daily tasks, projects, clients and even habits in the most effective and organized way",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.className}>

     
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} antialiased bg-gradient-to-r from-[#0B0E1E] via-[#131838]  to-[#132251]` }
      >

    <Navbar/>  
  
        {children}


        <Footer/>
      </body>
    </html>
  );
}
