"use client";
import Image from "next/image";
import React from "react";
import {
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  AreaChart,
  ReferenceDot,
  ResponsiveContainer,
} from "recharts";

const data = [
  { time: "10:00", price: 29500 },
  { time: "10:30", price: 30500 },
  { time: "11:00", price: 39800 },
  { time: "11:30", price: 40000 },
  { time: "12:00", price: 39200 },
  { time: "12:30", price: 40000 },
  { time: "13:00", price: 38500 },
  { time: "13:30", price: 40000 },
  { time: "14:00", price: 41000 },
  { time: "14:30", price: 42000 },
  { time: "15:00", price: 42500 },
  { time: "15:30", price: 43000 },
  { time: "16:00", price: 48000 },
  { time: "16:30", price: 47000 },
  { time: "17:00", price: 47000 },
  { time: "17:30", price: 27000 },
  { time: "18:00", price: 28000 },
  { time: "18:30", price: 24000 },
  { time: "19:00", price: 23000 },
  { time: "19:30", price: 22000 },
  { time: "20:00", price: 30000 },
  { time: "20:30", price: 31000 },
  { time: "21:00", price: 28000 },
  { time: "21:30", price: 33000 },
  { time: "22:00", price: 34000 },
  { time: "22:30", price: 29000 },
  { time: "23:00", price: 36000 },
  { time: "23:30", price: 47000 },
];

export default function SwapChart() {
  // حساب أعلى وأقل سعر برمجياً
  const maxPrice = Math.max(...data.map((d) => d.price));
  const timeOfMaxPrice = data.find((d) => d.price === maxPrice)?.time || "";

  const minPrice = Math.min(...data.map((d) => d.price));
  const timeOfMinPrice = data.find((d) => d.price === minPrice)?.time || "";

  return (
    <div className="w-full h-100 bg-card/50 backdrop-blur-md border border-border p-6 rounded-2xl shadow-sm">
      <div className="flex flex-col lg:flex-row items-center gap-2 justify-between mb-4">
        <div className="flex items-center gap-4">
          <div className="flex items-center">
            <Image
              src="/btc.svg"
              alt="BTC"
              width={40}
              height={40}
              className="rounded-full"
            />
            <Image
              src="/usdt.svg"
              alt="USDT"
              width={40}
              height={40}
              className="rounded-full"
            />
          </div>
          <h1 className="text-3xl font-semibold">BTC / USDT</h1>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
            5.23% (24h)
          </div>
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <div className="w-2 h-2 rounded-full bg-red-500"></div>
            -3.45% (7d)
          </div>
        </div>
      </div>

      <div className="w-full h-75">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 20, right: 10, left: -20, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#00f0ff" stopOpacity={0.4} />
                <stop offset="95%" stopColor="#00f0ff" stopOpacity={0} />
              </linearGradient>
            </defs>

            {/* 2. الشبكة (إخفاء الخطوط الطولية بـ vertical={false}) */}
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#333"
              vertical={false}
            />

            <XAxis
              dataKey="time"
              stroke="#888"
              tickLine={false}
              axisLine={false}
              dy={10}
            />

            {/* 3. إظهار محور الصادات بدون خط أسود لتنظيف الشكل */}
            <YAxis
              domain={["dataMin - 5000", "dataMax + 5000"]}
              stroke="#888"
              tickLine={false}
              axisLine={false}
              fontSize={12}
            />

            <Tooltip
              cursor={{ stroke: "rgba(0, 240, 255, 0.2)", strokeWidth: 2 }}
              contentStyle={{
                backgroundColor: "#0f172a",
                borderColor: "#1e293b",
                borderRadius: "8px",
              }}
              itemStyle={{ color: "#00f0ff", fontWeight: "bold" }}
            />

            <Area
              type="linear"
              dataKey="price"
              stroke="#00f0ff"
              strokeWidth={2}
              fill="url(#colorPrice)"
              dot={false}
              activeDot={{
                r: 6,
                stroke: "#111",
                strokeWidth: 2,
                fill: "#00f0ff",
              }}
            />

            {/* 4. نقطة أعلى سعر مع الـ Label */}
            <ReferenceDot
              x={timeOfMaxPrice}
              y={maxPrice}
              r={4}
              fill="#00f0ff"
              stroke="none"
              label={{
                position: "top",
                value: maxPrice,
                fill: "#00f0ff",
                fontSize: 12,
                fontWeight: "bold",
              }}
            />

            {/* 5. نقطة أقل سعر مع الـ Label */}
            <ReferenceDot
              x={timeOfMinPrice}
              y={minPrice}
              r={4}
              fill="#ff4d4d"
              stroke="none"
              label={{
                position: "bottom",
                value: minPrice,
                fill: "#ff4d4d",
                fontSize: 12,
                fontWeight: "bold",
              }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
