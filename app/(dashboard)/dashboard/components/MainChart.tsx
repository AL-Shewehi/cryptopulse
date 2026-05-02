"use client";
import React from "react";
import { TrendingUp } from "lucide-react";
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer, Legend } from "recharts";

const data = [
  { name: "Jan", btc: 4000, eth: 2400, usdt: 2400 },
  { name: "Feb", btc: 3000, eth: 1398, usdt: 2210 },
  { name: "Mar", btc: 2000, eth: 9800, usdt: 2290 },
  { name: "Apr", btc: 2780, eth: 3908, usdt: 2000 },
  { name: "May", btc: 1890, eth: 4800, usdt: 2181 },
  { name: "Jun", btc: 2390, eth: 3800, usdt: 2500 },
  { name: "Jul", btc: 3490, eth: 4300, usdt: 2100 },
  { name: "Aug", btc: 2000, eth: 2400, usdt: 2400 },
  { name: "Sep", btc: 3000, eth: 1398, usdt: 2210 },
  { name: "Oct", btc: 2000, eth: 9800, usdt: 2290 },
  { name: "Nov", btc: 2780, eth: 3908, usdt: 2000 },
  { name: "Dec", btc: 1890, eth: 4800, usdt: 2181 },
];

export default function MainChart() {
  return (
    // 1. ضفنا flex flex-col هنا
    <div className="bg-card/50 backdrop-blur-md border border-border p-6 rounded-2xl shadow-sm w-full h-full flex flex-col">
      {/* الهيدر */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-2">
          <TrendingUp className="text-primary" size={24} />
          <h3 className="text-lg font-bold">Top 3 Coin</h3>
        </div>

        <div className="flex gap-4 text-sm text-muted-foreground">
          <button className="hover:text-foreground">1d</button>
          <button className="hover:text-foreground">1w</button>
          <button className="text-primary bg-primary/10 px-2 py-0.5 rounded">
            1m
          </button>
          <button className="hover:text-foreground">3m</button>
        </div>
      </div>

      <div className="w-full flex-1 min-h-62.5 mt-4">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
          >
            <XAxis
              dataKey="name"
              stroke="#888888"
              fontSize={14}
              tickLine={false}
              axisLine={false}
            />
            <Legend iconType="square" wrapperStyle={{ paddingTop: "10px" }} />
            <Tooltip
              contentStyle={{
                backgroundColor: "#0f172a",
                borderColor: "#1e293b",
                borderRadius: "8px",
              }}
              itemStyle={{ color: "#f3f4f6" }}
            />
            <Line
              type="monotone"
              dataKey="btc"
              stroke="#f59e0b"
              strokeWidth={3}
              dot={false}
            />
            <Line
              type="monotone"
              dataKey="eth"
              stroke="#3b82f6"
              strokeWidth={3}
              dot={false}
            />
            <Line
              type="monotone"
              dataKey="usdt"
              stroke="#14b8a6"
              strokeWidth={3}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}