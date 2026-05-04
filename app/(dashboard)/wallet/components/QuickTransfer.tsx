"use client";
import React, { useState } from "react";
import { Landmark } from "lucide-react";

export default function QuickTransfer({ activeCoin }: { activeCoin: string }) {
  const [amount, setAmount] = useState("");

  const spotBalances: Record<string, string> = {
    USDT: "0.009",
    BTC: "1.2",
    ETH: "8.0",
    DASH: "40",
    LTC: "20",
  };

  const balance = spotBalances[activeCoin] || "0.00";

  return (
    <div className="bg-card/50 backdrop-blur-md border border-border rounded-2xl p-6 h-full flex flex-col shadow-sm">
      <h2 className="text-lg font-bold mb-6">Quick Transfer</h2>

      <div className="mb-4 relative">
        <select defaultValue={"default"} className="w-full flex items-center justify-between border border-border bg-background p-3 pl-12 pr-4 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-primary">
          <option value="default" disabled>
            Select Payment Method
          </option>
          <option value="card">Credit / Debit Card</option>
          <option value="bank">Bank Transfer</option>
          <option value="paypal">Paypal</option>
          <option value="payoneer">Payoneer</option>
          <option value="stripe">Stripe</option>
        </select>
        <Landmark className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
      </div>

      {/* Amount Input */}
      <div className="mb-6">
        <label className="block text-sm font-medium mb-2">
          Amount {activeCoin}
        </label>
        <div className="relative">
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder={`0.00`}
            className="w-full bg-background border border-border p-3 rounded-lg pl-12 pr-4 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
          />
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground font-bold">
            {activeCoin.charAt(0)}
          </div>
          <button
            onClick={() => setAmount(balance)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-primary font-bold hover:underline"
          >
            MAX
          </button>
        </div>
      </div>

      {/* Info Rows */}
      <div className="space-y-3 mb-6 flex-1">
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">
            {activeCoin} spot balance
          </span>
          <span className="font-medium">
            {balance} {activeCoin}
          </span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Minimum withdrawal</span>
          <span className="font-medium">10 {activeCoin}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Network fee</span>
          <span className="font-medium text-red-500 text-opacity-80">
            1 {activeCoin}
          </span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-0 rounded-lg overflow-hidden font-bold text-sm">
        <button className="flex-1 bg-green-700 hover:bg-green-800 text-white py-4 transition-colors">
          Deposit
        </button>
        <button className="flex-1 bg-red-700 hover:bg-red-800 text-white py-4 transition-colors">
          Withdraw
        </button>
      </div>
    </div>
  );
}
