import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from '@/components/ui/Header';
import Footer from '@/components/ui/FooterComponent';


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nutribert",
  description: "Consulta Asesoramiento Nutricional",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        
          <Header />
          {children}
          <Footer />
        
      </body>
    </html>
  );
}
