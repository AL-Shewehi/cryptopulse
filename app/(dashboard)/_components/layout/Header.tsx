"use client";
import { Bell, User, Settings, LogOut } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

function DashboardHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="h-16 border-b border-border flex items-center justify-between px-8 bg-background/50 sticky top-0 z-20">
      <h2 className="text-xl font-semibold hidden sm:block">Dashboard</h2>

      <div className="flex items-center gap-4 ml-auto">
        <button
          className="p-2 text-muted-foreground hover:text-foreground transition-colors relative"
          data-cursor="hover"
        >
          <Bell size={20} />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
        </button>

        <button className="bg-primary text-black px-5 py-2 rounded-full font-semibold hover:scale-105 transition-transform shadow-[0_0_15px_rgba(57,255,20,0.3)] hidden sm:block">
          Connect Wallet
        </button>

        <div className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-full w-10 h-10 border-2 border-transparent hover:border-primary transition-all overflow-hidden focus:outline-none"
            data-cursor="hover"
          >
            <Image
              src="/avatar.jpg"
              alt="User Avatar"
              width={40}
              height={40}
              className="object-cover w-full h-full"
              priority
            />
          </button>

          {isOpen && (
            <>
              <div
                className="fixed top-0 left-0 w-full h-full z-40 bg-black/20 "
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
                    priority
                  />
                  <div className="flex flex-col overflow-hidden">
                    <span className="text-sm font-bold truncate">Mahmoud</span>
                    <span className="text-xs text-muted-foreground truncate">
                      mahmoud@example.com
                    </span>
                  </div>
                </div>

                {/* اللينكات */}
                <div className="p-2 flex flex-col gap-1">
                  <a
                    href="#"
                    className="flex items-center gap-2 px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary rounded-md transition-colors"
                  >
                    <User size={16} /> Profile
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-2 px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary rounded-md transition-colors"
                  >
                    <Settings size={16} /> Settings
                  </a>
                </div>

                {/* زرار الخروج مفصول بخط */}
                <div className="p-2 border-t border-border">
                  <a
                    href="#"
                    className="flex items-center gap-2 px-3 py-2 text-sm text-red-500 hover:bg-red-500/10 hover:text-red-600 rounded-md transition-colors"
                  >
                    <LogOut size={16} /> Logout
                  </a>
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
