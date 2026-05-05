import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import React from "react";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1">{children}</main>

      <div className="max-w-7xl mx-auto">

      <Footer />
      </div>
    </div>
  );
}
