import type { Metadata } from "next";
import { Inter, Chewy } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/ui/CustomCursor";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const chewy = Chewy({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-chewy",
  preload: false,
});

export const metadata: Metadata = {
  title: "CryptoPulse",
  description: "CryptoPulse - Your Ultimate Crypto Trading Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body
        className={`${inter.variable} ${chewy.variable} font-sans antialiased bg-background text-foreground`}
      >
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}