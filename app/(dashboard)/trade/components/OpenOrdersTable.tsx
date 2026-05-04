"use client";
import React, { useState } from "react";
import { Calculator, FileText } from "lucide-react";

const mainTabs = [
  "Open Orders (0)",
  "Positions (0)",
  "Order History",
  "Trade History",
  "Assets",
  "Borrowings (0)",
  "Tools (0)",
  "P&L"
];

const subTabs = [
  "Limit & Market Orders",
  "Conditional",
  "TP/SL",
  "Trailing Stop",
  "OCO",
  "MMR Close",
  "Spread Trading"
];

const tableHeaders = [
  "Market", "Instrument", "Order Type", "Direction", "Order Price",
  "Filled/Order Quantity", "Order Value", "TP/SL", "Trade Type",
  "Order Time", "Order ID", "Reduce-Only", "Action"
];

export default function OpenOrdersTable() {
  const [activeTab, setActiveTab] = useState(mainTabs[0]);
  const [activeSubTab, setActiveSubTab] = useState(subTabs[0]);

  return (
    <div className="w-full h-full flex flex-col bg-background min-h-0">
      
      {/* 1. التابات الأساسية والأدوات اللي على اليمين */}
      <div className="flex justify-between items-end border-b border-border/50 px-4 pt-2">
        <div className="flex gap-6 overflow-x-auto no-scrollbar">
          {mainTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-2 whitespace-nowrap text-sm font-medium transition-colors ${
                activeTab === tab
                  ? "text-[#f7a600] border-b-2 border-[#f7a600]" // لون البرتقالي بتاع Bybit
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* زراير الفلترة والحاسبة اللي على اليمين */}
        <div className="hidden md:flex items-center gap-4 pb-2 text-xs text-muted-foreground">
          <label className="flex items-center gap-1 cursor-pointer hover:text-foreground">
            <input type="checkbox" defaultChecked className="rounded border-border accent-[#f7a600]" />
            All Markets
          </label>
          <label className="flex items-center gap-1 cursor-pointer hover:text-foreground">
            All Instruments
          </label>
          <button className="flex items-center gap-1 hover:text-foreground">
            <Calculator size={14} /> Calculator
          </button>
        </div>
      </div>

      {/* 2. التابات الفرعية (الرمادي) */}
      <div className="flex gap-2 px-4 py-3 overflow-x-auto no-scrollbar">
        {subTabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveSubTab(tab)}
            className={`px-3 py-1.5 text-xs font-medium rounded transition-colors whitespace-nowrap ${
              activeSubTab === tab
                ? "bg-card/80 text-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* 3. منطقة الجدول بالداتا الفاضية */}
      <div className="flex-1 overflow-auto flex flex-col">
        <div className="min-w-[1200px] w-full flex flex-col h-full">
          
          {/* الهيدر بتاع الجدول */}
          <div 
            className="px-4 py-2 text-xs text-muted-foreground font-medium"
            style={{ display: 'grid', gridTemplateColumns: 'repeat(13, minmax(90px, 1fr))', gap: '16px' }}
          >
            {tableHeaders.map((header) => (
              <div key={header} className="whitespace-nowrap">{header}</div>
            ))}
          </div>

          {/* حالة الـ No Data */}
          <div className="flex-1 flex flex-col items-center justify-center text-muted-foreground opacity-60 min-h-[150px]">
            <div className="relative mb-3">
              <FileText size={48} className="text-muted-foreground/30" />
              <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-background flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-[#f7a600]"></div>
              </div>
            </div>
            <span className="text-sm">No Available Data</span>
          </div>

        </div>
      </div>

    </div>
  );
}