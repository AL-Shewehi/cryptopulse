import type { Metadata } from "next";
import { Inter, Chewy } from "next/font/google";
import "./globals.css";
import Navbar from "./components/layout/Navbar";
import CustomCursor from "./components/ui/CustomCursor";
import Footer from "./components/layout/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const chewy = Chewy({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-chewy",
});

export const metadata: Metadata = {
  title: "CryptoPulse | Be Limitless",
  description: "Next Generation Crypto Trading",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* دمج المتغيرات بتاعت الخطوط في الـ body */}
      <body
        className={`${inter.variable} ${chewy.variable} font-sans antialiased bg-background text-foreground`}
      >
        <CustomCursor />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
