"use client";
import React from "react";
import { RefreshCw, ArrowRight } from "lucide-react";

export default function ExchangeWidget() {
  return (
    <div className="bg-card/50 backdrop-blur-md border border-border p-6 rounded-2xl shadow-sm w-full h-auto flex flex-col justify-between">
      <div>
        {/* الهيدر */}
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-bold">Exchange</h3>
          <button className="text-muted-foreground hover:text-foreground transition-all hover:rotate-180 duration-500">
            <RefreshCw size={20} />
          </button>
        </div>

        <div className="flex items-center gap-3 mb-8 text-lg justify-around">
          <span className="font-semibold text-foreground">
            1 <span className="text-orange-500">BTC</span>
          </span>
          <ArrowRight size={16} className="text-muted-foreground" />
          <span className="font-semibold text-foreground">$70,523.00</span>
        </div>

        <div className="space-y-4">
          {/* حقل الدفع (Pay) */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs text-muted-foreground ml-1">Pay</label>
            <div className="flex items-center bg-secondary/30 border border-border rounded-xl p-2 focus-within:border-primary transition-colors">
              <input
                type="text"
                defaultValue="0.0709"
                className="bg-transparent border-none outline-none w-full px-2 font-medium text-foreground"
              />
              <div className="w-px h-6 bg-border mx-2"></div>
              <button className="flex items-center gap-2 bg-background/50 rounded-lg px-3 py-1.5 hover:bg-secondary transition-colors">
                <div className="w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center text-[10px] font-bold text-white">
                  ₿
                </div>
                <span className="text-sm font-medium">BTC</span>
              </button>
            </div>
          </div>

          {/* حقل الاستلام (Get) */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs text-muted-foreground ml-1">Get</label>
            <div className="flex items-center bg-secondary/30 border border-border rounded-xl p-2 focus-within:border-primary transition-colors">
              <input
                type="text"
                defaultValue="5000"
                className="bg-transparent border-none outline-none w-full px-2 font-medium text-foreground"
              />
              <div className="w-px h-6 bg-border mx-2"></div>
              <button className="flex items-center gap-2 bg-background/50 rounded-lg px-3 py-1.5 hover:bg-secondary transition-colors">
                <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-[10px] font-bold text-white">
                  $
                </div>
                <span className="text-sm font-medium">USD</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <button className="w-full bg-primary/70 hover:bg-primary/90 text-background font-bold py-3.5 rounded-xl mt-8 transition-colors">
        Exchange
      </button>
    </div>
  );
}
