"use client";
import React from "react";
import { motion } from "framer-motion";
import { Wallet, TrendingUp, Bitcoin, Activity } from "lucide-react";

import StatCard from "../_components/ui/StatCard";
import MainChart from "./components/MainChart";
import ExchangeWidget from "./components/ExchangeWidget";
import BalanceDetails from "./components/BalanceDetails";
import TransactionsTable from "./components/TransactionsTable";

const STATS_CONFIG = [
  {
    title: "Total Balance",
    value: "$18,235.00",
    icon: Wallet,
    trend: 6.5,
    data: [12000, 15000, 14000, 18235],
  },
  {
    title: "Profit Ratio",
    value: "13.20%",
    icon: TrendingUp,
    trend: 2.1,
    data: [10, 15, 8, 13.2],
  },
  {
    title: "Bitcoin (BTC)",
    value: "$38,718.24",
    icon: Bitcoin,
    trend: -1.8,
    data: [40000, 41000, 39000, 38718.24],
  },
  {
    title: "Ethereum (ETH)",
    value: "$1,218.21",
    icon: Activity,
    trend: 4.75,
    data: [1100, 1150, 1050, 1218],
  },
];

const containerVariants = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay },
});

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <motion.div
        {...containerVariants()}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {STATS_CONFIG.map((stat, index) => (
          <StatCard
            key={stat.title}
            title={stat.title}
            value={stat.value}
            icon={stat.icon}
            trend={stat.trend}
            chartData={stat.data.map((p) => ({ price: p }))}
            trendText="vs last week"
          />
        ))}
      </motion.div>

      {/* السطر الأوسط */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <motion.div
          {...containerVariants(0.2)}
          className="lg:col-span-2 flex flex-col"
        >
          <MainChart />
        </motion.div>
        <motion.div
          {...containerVariants(0.3)}
          className="lg:col-span-1 flex flex-col"
        >
          <BalanceDetails />
        </motion.div>
      </div>

      {/* السطر السفلي */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <motion.div
          {...containerVariants(0.4)}
          className="lg:col-span-2 flex flex-col"
        >
          <TransactionsTable />
        </motion.div>
        <motion.div
          {...containerVariants(0.5)}
          className="lg:col-span-1 flex flex-col"
        >
          <ExchangeWidget />
        </motion.div>
      </div>
    </div>
  );
}
