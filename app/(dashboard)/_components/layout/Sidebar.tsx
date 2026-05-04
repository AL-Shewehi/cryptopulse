"use client";
import {
  ArrowLeftRight,
  ChartCandlestick,
  History,
  LayoutDashboard,
  LogOut,
  Settings,
  Wallet,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

const sidebarItems = [
  {
    name: "Dashboard",
    icon: <LayoutDashboard size={20} />,
    href: "/dashboard",
  },
  { name: "Swap", icon: <ArrowLeftRight size={20} />, href: "/swap" },
  { name: "Wallet", icon: <Wallet size={20} />, href: "/wallet" },
  { name: "Trade", icon: <ChartCandlestick size={20} />, href: "/trade" },
  { name: "Transactions", icon: <History size={20} />, href: "#" },
  { name: "Settings", icon: <Settings size={20} />, href: "#" },
];

function DashboardSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 border-r border-border bg-card/30 backdrop-blur-xl hidden md:flex flex-col">
      <div className="h-16 flex items-center px-6 border-b border-border">
        <Link href="/" className="flex items-center gap-2" data-cursor="hover">
          <Image src="/logo.png" alt="Logo" width={100} height={100} className="w-100 h-100 object-contain" priority  />
        </Link>
      </div>

      <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
        {sidebarItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={`flex items-center gap-3 px-3 py-2.5 text-muted-foreground hover:text-foreground hover:bg-secondary/50 rounded-lg transition-all
                 ${pathname === item.href ? "text-primary bg-primary/10" : ""}`}
            data-cursor="hover"
          >
            {item.icon}
            <span className="font-medium">{item.name}</span>
          </Link>
        ))}
      </nav>

      <div className="p-4 border-t border-border">
        <Link
          href="#"
          className="flex items-center gap-3 px-3 py-2.5 text-muted-foreground hover:text-foreground hover:bg-secondary/50 rounded-lg transition-all"
          data-cursor="hover"
        >
          <LogOut size={20} />
          <span className="font-medium">Logout</span>
        </Link>
      </div>
    </aside>
  );
}

export default DashboardSidebar;
