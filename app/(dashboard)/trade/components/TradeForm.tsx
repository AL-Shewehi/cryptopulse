"use client";
import React, { useState } from "react";
import { Settings2 } from "lucide-react";
import { useTrade } from "../TradeContext";

export default function TradeForm() {
  // States للتحكم في الفورمة
  const [side, setSide] = useState<"buy" | "sell">("buy");
  const [orderType, setOrderType] = useState<"limit" | "market" | "tp/sl">("limit");
  const [tradeMode, setTradeMode] = useState<"spot" | "convert" | "margin">("spot");
  const { symbol} = useTrade();


  const baseAsset = symbol.replace("USDT", ""); 

  // ألوان ديناميكية بناءً على حالة البيع والشراء
  const activeColor = side === "buy" ? "bg-[#26a69a]" : "bg-[#ef5350]";

  return (
    <div className="w-full h-full flex flex-col pt-2 px-2 text-sm min-h-0">
      
      {/* 1. الهيدر (Spot, Convert, Margin) */}
      <div className="flex justify-between items-center mb-4 text-muted-foreground font-medium px-2">
        <div className="flex gap-4">
          {(["spot", "convert"] as const).map((mode) => (
            <button
              key={mode}
              className={`capitalize transition-colors pb-1 ${
                tradeMode === mode ? "text-foreground border-b border-primary" : "hover:text-foreground"
              }`}
              onClick={() => setTradeMode(mode)}
            >
              {mode}
            </button>
          ))}
        </div>
        <button className="flex items-center gap-1 text-xs hover:text-foreground transition-colors">
          <Settings2 size={14} /> Margin
        </button>
      </div>

      {/* 2. زراير البيع والشراء (Toggle) */}
      <div className="flex bg-card/50 rounded-lg p-1 mb-4 border border-border/50">
        <button
          className={`flex-1 py-1.5 rounded-md font-bold transition-all ${
            side === "buy" ? "bg-[#26a69a] text-white shadow-sm" : "text-muted-foreground hover:text-foreground"
          }`}
          onClick={() => setSide("buy")}
        >
          Buy
        </button>
        <button
          className={`flex-1 py-1.5 rounded-md font-bold transition-all ${
            side === "sell" ? "bg-[#ef5350] text-white shadow-sm" : "text-muted-foreground hover:text-foreground"
          }`}
          onClick={() => setSide("sell")}
        >
          Sell
        </button>
      </div>

      {/* 3. نوع الأوردر (Limit, Market, TP/SL) */}
      <div className="flex gap-4 text-xs font-medium mb-4 px-2 text-muted-foreground">
        {(["limit", "market", "tp/sl"] as const).map((type) => (
          <button
            key={type}
            className={`capitalize transition-colors ${
              orderType === type ? "text-[#f7a600]" : "hover:text-foreground"
            }`}
            onClick={() => setOrderType(type)}
          >
            {type}
          </button>
        ))}
      </div>

      {/* 4. الرصيد المتاح */}
      <div className="flex justify-between text-xs mb-3 px-2">
        <span className="text-muted-foreground">Available Balance</span>
        <span className="text-foreground font-medium">18,235.00 USDT</span>
      </div>

      {/* 5. حقول الإدخال (Price & Quantity) */}
      <div className="flex flex-col gap-3 mb-6">
        {/* حقل السعر */}
        <div className="flex justify-between items-center bg-card/30 border border-border/50 rounded-lg p-2.5 text-xs focus-within:border-primary/50 transition-colors">
          <span className="text-muted-foreground">Price</span>
          <div className="flex items-center gap-2 w-1/2">
            <input
              type="number"
              defaultValue="78229.7"
              className="bg-transparent text-right outline-none text-foreground w-full font-medium"
            />
            <span className="text-muted-foreground">USDT</span>
          </div>
        </div>

        {/* حقل الكمية */}
        <div className="flex justify-between items-center bg-card/30 border border-border/50 rounded-lg p-2.5 text-xs focus-within:border-primary/50 transition-colors">
          <span className="text-muted-foreground">Quantity</span>
          <div className="flex items-center gap-2 w-1/2">
            <input
              type="number"
              placeholder="0.00"
              className="bg-transparent text-right outline-none text-foreground w-full font-medium"
            />
            <span className="text-muted-foreground">BTC</span>
          </div>
        </div>
      </div>

      {/* 6. شريط النسبة المئوية (Range Slider) */}
      <div className="px-2 mb-6">
        <input
          type="range"
          min="0"
          max="100"
          defaultValue="0"
          className="w-full h-1 bg-border rounded-lg appearance-none cursor-pointer accent-[#f7a600]"
          step="25"
        />
        <div className="flex justify-between text-[10px] text-muted-foreground mt-2">
          <span>0%</span>
          <span>25%</span>
          <span>50%</span>
          <span>75%</span>
          <span>100%</span>
        </div>
      </div>

      {/* 7. قيمة الأوردر الإجمالية وتفاصيل إضافية */}
      <div className="flex flex-col gap-2 px-2 text-xs mb-6">
        <div className="flex justify-between">
          <span className="text-muted-foreground">Order Value</span>
          <span className="text-foreground">0.00 USDT</span>
        </div>
        <div className="flex items-center gap-4 mt-2 text-muted-foreground">
          <label className="flex items-center gap-1 cursor-pointer hover:text-foreground">
            <input type="checkbox" className="rounded bg-background border-border accent-[#f7a600]" />
            TP/SL
          </label>
          <label className="flex items-center gap-1 cursor-pointer hover:text-foreground">
            <input type="checkbox" className="rounded bg-background border-border accent-[#f7a600]" />
            Post-Only
          </label>
        </div>
      </div>

      {/* 8. زرار التنفيذ الكبير (اللون بيتغير حسب الـ Side) */}
      <div className="mt-6 pb-4 px-2">
        <button
          className={`w-full py-3 rounded-lg font-bold text-white text-sm transition-all hover:opacity-90 ${activeColor}`}
        >
          {side === "buy" ? `Buy ${baseAsset}` : `Sell ${baseAsset}`}
        </button>
      </div>

    </div>
  );
}