// layout.js
import { Inter } from "next/font/google";
import Navbar from "../component/Navbar/NavbarComponent";
import "./globals.css";
import Footer from "@/component/Footer/FooterComponent";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ISTAD",
  description: "Generated by create next app",
};

const Layout = ({ children }) => {
  return (
    <html lang="en">
      <head>
        {/* Include any metadata */}
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        {/* Include Inter font */}
        <style>{inter.styles}</style>
      </head>
      <body className={inter.className}>
        {/* Include Navbar */}
        <Navbar />
        {/* Render children */}
        {children}
        <Footer />
        
      </body>
    </html>
  );
};

export default Layout;
