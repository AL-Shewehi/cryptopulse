"use client";
import React, { useState } from "react";
import { FileClock, TrendingUp, CircleQuestionMark } from "lucide-react";
import SwapChart from "./components/SwapChart";
import SwapForm from "./components/SwapForm";
import SwapHistoryTable from "./components/SwapHistoryTable";
import { InstantHistory, LimitOrder } from "./components/types";

const mockLimitOrders: LimitOrder[] = [
  {
    id: "#L-987654",
    quantity: "0.5",
    from: "BTC",
    to: "USDT",
    convertedTo: "35,450",
    account: "Spot",
    rate: "70,900",
    expiredIn: "30D",
    maturityTime: "2026-06-01",
    time: "2026-05-02 10:30",
  },
  {
    id: "#L-123456",
    quantity: "500",
    from: "USDT",
    to: "ETH",
    convertedTo: "0.28",
    account: "Spot",
    rate: "70,900",
    expiredIn: "30D",
    maturityTime: "2026-06-01",
    time: "2026-05-02 10:30",
  },
  {
    id: "#L-789012",
    quantity: "200",
    from: "USDT",
    to: "BTC",
    convertedTo: "0.28",
    account: "Spot",
    rate: "70,900",
    expiredIn: "30D",
    maturityTime: "2026-06-01",
    time: "2026-05-02 10:30",
  },
];

const mockInstantHistory: InstantHistory[] = [
  {
    id: "#T-123456",
    amount: "1.2",
    currentPrice: "3,100",
    openingPrice: "3,050",
    tpSlPrice: "3,500 / 2,900",
    tradingTime: "2026-05-01 14:20",
    pnl: "+$60.00",
  },
  {
    id: "#T-789012",
    amount: "0.5",
    currentPrice: "3,100",
    openingPrice: "3,050",
    tpSlPrice: "3,500 / 2,900",
    tradingTime: "2026-05-01 14:20",
    pnl: "+$60.00",
  },
  {
    id: "#T-345678",
    amount: "2.5",
    currentPrice: "3,100",
    openingPrice: "3,050",
    tpSlPrice: "3,500 / 2,900",
    tradingTime: "2026-05-01 14:20",
    pnl: "+$60.00",
  },
];

export default function Page() {
  const [transactionType, setTransactionType] = useState<"instant" | "limit">(
    "instant",
  );

  return (
    <div>
      {/* Header Section */}
      <div className="flex items-center flex-col lg:flex-row gap-4 justify-between flex-wrap border-b border-border pb-4 mb-4">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold">Swap</h1>
          <p className="text-muted-foreground text-xl font-medium">
            Zero fees | Real-time swap | Multi-asset support
          </p>
        </div>
        <div className="flex items-center gap-4">
          {[
            { title: "Conversion History", Icon: FileClock },
            { title: "Trade Spot", Icon: TrendingUp },
            { title: "FAQ", Icon: CircleQuestionMark },
          ].map((item, index) => (
            <button
              key={index}
              className="flex items-center gap-2 text-sm font-medium text-muted-foreground border border-border px-4 py-2 rounded-full"
            >
              <item.Icon className="w-4 h-4" />
              {item.title}
            </button>
          ))}
        </div>
      </div>

      {/* Chart Section */}
      <div className="mt-4 flex flex-col lg:flex-row gap-6">
        <div className="w-full lg:w-1/2 flex-1">
          <SwapChart />
        </div>
        <div className="w-full lg:w-1/2 md:max-w-lg">
          <SwapForm
            type={transactionType}
            setTransactionType={setTransactionType}
          />
        </div>
      </div>

      {/* History Section */}
      <div className="mt-8">
        <SwapHistoryTable type={transactionType} data={transactionType === "limit" ? mockLimitOrders : mockInstantHistory} />
      </div>
    </div>
  );
}
