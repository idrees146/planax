
import { Geist, Geist_Mono, Inter, Orbitron, Audiowide } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
 


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
  weight: ["400", "500", "600", "700"], 
});


export const audioWide = Audiowide({
  variable: "--font-audio-wide",
  subsets: ["latin"],
  weight: ["400"] ,
});

export const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], 
});

export const metadata = {
  title: "Planax - Be Productive",
  description: "Planax is your go to use productivity app, helping you manage your daily tasks, projects, clients and even habits in the most effective and organized way",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.className}>

     
      <body
        className={`${geistSans.variable} ${audioWide.variable} ${geistMono.variable} ${poppins.variable} ${orbitron.variable} antialiased bg-gradient-to-r from-[#0B0E1E] via-[#131838]  to-[#132251]` }
      >

    <Navbar/>  
  
 
  
        {children}


        <Footer/>
      </body>
    </html>
  );
}
