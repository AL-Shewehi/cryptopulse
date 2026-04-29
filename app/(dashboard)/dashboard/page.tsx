"use client";
import React from "react";
import StatCard from "../_components/ui/StatCard";
import { Wallet, TrendingUp, Bitcoin, Activity } from "lucide-react";
import { motion } from "framer-motion";
import MainChart from "./components/MainChart";
import ExchangeWidget from "./components/ExchangeWidget";
import BalanceDetails from "./components/BalanceDetails";
import TransactionsTable from "./components/TransactionsTable";

const balanceData = [
  { price: 12000 },
  { price: 15000 },
  { price: 14000 },
  { price: 18235 },
];
const btcData = [
  { price: 40000 },
  { price: 41000 },
  { price: 39000 },
  { price: 38718.24 },
];
const ethData = [
  { price: 1100 },
  { price: 1150 },
  { price: 1050 },
  { price: 1218 },
];
const profitData = [
  { price: 10 },
  { price: 15 },
  { price: 8 },
  { price: 13.2 },
];

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        <StatCard
          title="Total Balance"
          value="$18,235.00"
          icon={Wallet}
          trend={6.5}
          trendText="vs last week"
          chartData={balanceData}
        />

        <StatCard
          title="Profit Ratio"
          value="13.20%"
          icon={TrendingUp}
          trend={2.1}
          trendText="vs last month"
          chartData={profitData}
        />

        <StatCard
          title="Bitcoin (BTC)"
          value="$38,718.24"
          icon={Bitcoin}
          trend={-1.8}
          trendText="24h change"
          chartData={btcData}
        />

        <StatCard
          title="Ethereum (ETH)"
          value="$1,218.21"
          icon={Activity}
          trend={4.75}
          trendText="24h change"
          chartData={ethData}
        />
      </motion.div>

      <div className="flex flex-col lg:flex-row gap-6 mt-8 w-full">
        <div className="w-full lg:w-2/3 flex flex-col gap-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full"
          >
            <MainChart />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="w-full"
          >
            <TransactionsTable />
          </motion.div>
        </div>

        <div className="w-full lg:w-1/3 flex flex-col gap-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <BalanceDetails />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full flex flex-col gap-6"
          >
            <ExchangeWidget />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
