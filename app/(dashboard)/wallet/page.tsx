"use client";
import React, { useState } from "react";
import WalletHeader from "./components/walletHeader";
import BalanceCards from "./components/BalanceCards";
import CoinOverviewChart from "./components/CoinOverviewChart";
import DepositAddress from "./components/DepositAddress";
import CoinAbout from "./components/CoinAbout";
import QuickTransfer from "./components/QuickTransfer";
import TransactionHistory from "./components/TransactionHistory";

export const COIN_CONFIG: Record<string, { color: string; bgClass: string }> = {
  BTC:  { color: "#F7931A", bgClass: "bg-[#F7931A]" },
  ETH:  { color: "#627EEA", bgClass: "bg-[#627EEA]" },
  USDT: { color: "#26A17B", bgClass: "bg-[#26A17B]" },
  DASH: { color: "#008CE7", bgClass: "bg-[#008CE7]" },
  LTC:  { color: "#345D9D", bgClass: "bg-[#345D9D]" },
};

export default function Page() {
  const [activeCoin, setActiveCoin] = useState("USDT");
  return (
    <div className="space-y-6">
        <WalletHeader activeCoin={activeCoin} setActiveCoin={setActiveCoin} coinColor={COIN_CONFIG[activeCoin].color} />
        {/* <BalanceCards /> */}
        <BalanceCards activeCoin={activeCoin} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
            <CoinOverviewChart coinColor={COIN_CONFIG[activeCoin].color} />
            {/* <DepositAddress /> */}
            <DepositAddress activeCoin={activeCoin} coinColor={COIN_CONFIG[activeCoin].color} />

            <CoinAbout activeCoin={activeCoin} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <QuickTransfer activeCoin={activeCoin} />
            <TransactionHistory activeCoin={activeCoin} />
         </div>
    </div>
  );
}
