import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { day: "01", amount: 4000 },
  { day: "02", amount: 3000 },
  { day: "03", amount: 2000 },
  { day: "04", amount: 2780 },
  { day: "05", amount: 1890 },
  { day: "06", amount: 2390 },
  { day: "07", amount: 3490 },
  { day: "08", amount: 2000 },
  { day: "09", amount: 3000 },
  { day: "10", amount: 4000 },
  { day: "11", amount: 3000 },
  { day: "12", amount: 2000 },
  { day: "13", amount: 2780 },
  { day: "14", amount: 1890 },
];

export default function CoinOverviewChart({ coinColor }: { coinColor: string }) {
  return (
    <div className="bg-card/50 backdrop-blur-md border border-border rounded-2xl p-6 flex flex-col h-full min-h-87.5">
      <h2 className="text-lg font-bold mb-6 text-foreground">Coin Overview</h2>

      <div className="flex-1 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 0, right: 0, left: -20, bottom: 0 }}
          >
            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#f3f4f6", fontSize: 12 }}
              dy={10}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#f3f4f6", fontSize: 12 }}
              tickFormatter={(value) => `${value / 1000}k`}
            />

            <Tooltip
              cursor={{ fill: "#000", opacity: 0.4 }}
              contentStyle={{
                backgroundColor: "#1f2937",
                borderColor: "#374151",
                borderRadius: "8px",
                color: "#f3f4f6",
              }}
              itemStyle={{ color: "#f3f4f6", fontWeight: "bold" }}
            />

            <Bar
              dataKey="amount"
              fill={coinColor}
              radius={[4, 4, 0, 0]}
              barSize={16}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
