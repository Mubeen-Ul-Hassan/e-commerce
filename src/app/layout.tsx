import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/views/Navbar";
import Sale from "@/components/views/Sale";
import Footer from "@/components/views/Footer";
import Letter from "@/components/views/Letter";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Sale />
        <Navbar />
        {children}
        <Letter />
        <Footer />
      </body>
    </html>
  );
}
