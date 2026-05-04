"use client";
import { 
  Bell, 
  User, 
  Settings, 
  LogOut, 
  LayoutDashboard, 
  ArrowLeftRight, 
  Wallet, 
  ChartCandlestick, 
  History 
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

// نقلنا اللينكات هنا (ممكن تشيل الأيقونات لو حابب شكل Binance بالظبط، بس أنا سيبتهالك تصغرها لو حبيت)
const navItems = [
  { name: "Dashboard", href: "/dashboard", icon: <LayoutDashboard size={16} /> },
  { name: "Trade", href: "/trade", icon: <ChartCandlestick size={16} /> },
  { name: "Swap", href: "/swap", icon: <ArrowLeftRight size={16} /> },
  { name: "Wallet", href: "/wallet", icon: <Wallet size={16} /> },
  { name: "Transactions", href: "#", icon: <History size={16} /> },
];

function DashboardHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="h-16 border-b border-border flex items-center justify-between px-6 bg-background/50 sticky top-0 z-20 backdrop-blur-md">
      
      {/* 1. الجزء اللي على الشمال: اللوجو + اللينكات */}
      <div className="flex items-center gap-8">
        {/* اللوجو */}
        <Link href="/" className="flex items-center gap-2 shrink-0" data-cursor="hover">
          <Image 
            src="/logo.png" 
            alt="Logo" 
            width={120} 
            height={40} 
            className="object-contain" 
            priority  
          />
        </Link>

        {/* اللينكات بالعرض (بتختفي في الموبايل) */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all
                 ${pathname === item.href 
                    ? "text-primary bg-primary/10" 
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"}`}
              data-cursor="hover"
            >
              {/* {item.icon} // لو عايز تفعل الأيقونات شيل الكومنت من هنا، بس بدون أيقونات أشيك زي بينانس */}
              <span>{item.name}</span>
            </Link>
          ))}
        </nav>
      </div>

      {/* 2. الجزء اللي على اليمين: الإشعارات، المحفظة، البروفايل */}
      <div className="flex items-center gap-4 ml-auto">
        <button
          className="p-2 text-muted-foreground hover:text-foreground transition-colors relative"
          data-cursor="hover"
        >
          <Bell size={20} />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
        </button>

        <button className="bg-primary text-black px-5 py-2 rounded-full text-sm font-semibold hover:scale-105 transition-transform shadow-[0_0_15px_rgba(57,255,20,0.3)] hidden sm:block">
          Connect Wallet
        </button>

        <div className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-full w-9 h-9 border-2 border-transparent hover:border-primary transition-all overflow-hidden focus:outline-none"
            data-cursor="hover"
          >
            <Image
              src="/avatar.jpg"
              alt="User Avatar"
              width={36}
              height={36}
              className="object-cover w-full h-full"
              priority
            />
          </button>

          {/* القائمة المنسدلة للبروفايل */}
          {isOpen && (
            <>
              <div
                className="fixed top-0 left-0 w-full h-full z-40 bg-transparent"
                onClick={() => setIsOpen(false)}
              ></div>
              <div className="absolute top-full right-0 mt-3 w-56 bg-card border border-border rounded-xl shadow-xl z-50 overflow-hidden animate-in fade-in slide-in-from-top-2">
                <div className="p-4 border-b border-border bg-secondary/20 flex items-center gap-3">
                  <Image
                    src="/avatar.jpg"
                    alt="Mahmoud"
                    width={40}
                    height={40}
                    className="rounded-full object-cover border border-border"
                  />
                  <div className="flex flex-col overflow-hidden">
                    <span className="text-sm font-bold truncate">Mahmoud</span>
                    <span className="text-xs text-muted-foreground truncate">
                      mahmoud@example.com
                    </span>
                  </div>
                </div>

                <div className="p-2 flex flex-col gap-1">
                  <Link href="#" className="flex items-center gap-2 px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary rounded-md transition-colors">
                    <User size={16} /> Profile
                  </Link>
                  <Link href="#" className="flex items-center gap-2 px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary rounded-md transition-colors">
                    <Settings size={16} /> Settings
                  </Link>
                </div>

                <div className="p-2 border-t border-border">
                  <Link href="#" className="flex items-center gap-2 px-3 py-2 text-sm text-red-500 hover:bg-red-500/10 hover:text-red-600 rounded-md transition-colors">
                    <LogOut size={16} /> Logout
                  </Link>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
}

export default DashboardHeader;