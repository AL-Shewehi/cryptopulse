"use client";
import React from "react";
import DashboardHeader from "./_components/layout/Header";
import BottomNav from "./_components/layout/BottomNav";
import Footer from "@/components/layout/Footer";
import { usePathname } from "next/navigation";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isTradePage = pathname.includes("/trade");
  return (
    <div className="flex h-screen overflow-hidden bg-background text-foreground">
      <main className="flex-1 flex flex-col overflow-hidden relative mb-16 md:mb-0">
        <DashboardHeader />

        <div className="flex-1 overflow-y-auto p-6 md:p-8 z-10 relative">
          {children}
          <div className="mt-6">
            {!isTradePage && <Footer />}
          </div>
        </div>
      </main>

      <BottomNav />
    </div>
  );
}
