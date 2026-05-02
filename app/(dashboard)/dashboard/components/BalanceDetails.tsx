import { MoveUpRight, MoveDownRight, TrendingUp } from "lucide-react";
import React from "react";
import {
  Legend,
  Pie,
  PieChart,
  PieLabelRenderProps,
  Cell,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "USDT", value: 4000, color: "#26A17B" },
  { name: "BTC", value: 3000, color: "#F7931A" },
  { name: "ETH", value: 2000, color: "#627EEA" },
  { name: "DASH", value: 2780, color: "#008CE7" },
  { name: "LTC", value: 1890, color: "#345D9D" },
];

const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}: PieLabelRenderProps) => {
  if (
    cx == null ||
    cy == null ||
    midAngle == null ||
    innerRadius == null ||
    outerRadius == null
  )
    return null;
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = Number(cx) + radius * Math.cos(-midAngle * RADIAN);
  const y = Number(cy) + radius * Math.sin(-midAngle * RADIAN);

  if ((percent ?? 0) < 0.05) return null;

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor="middle"
      dominantBaseline="central"
      className="text-xs font-bold pointer-events-none"
    >
      {`${((percent ?? 1) * 100).toFixed(0)}%`}
    </text>
  );
};

export default function BalanceDetails() {
  return (
    <div className="bg-card/50 backdrop-blur-md border border-border p-6 rounded-2xl shadow-sm w-full h-full flex flex-col">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-2">
          <h3 className="text-lg font-bold">Balance Details</h3>
        </div>

        <div className="flex items-center gap-2 text-primary">
          <p>+2.4%</p>
          <TrendingUp
            size={20}
            className=" w-7 h-7 p-1 bg-primary rounded-full text-background"
          />
        </div>
      </div>
      <p className="text-3xl font-bold ">$18,000.00</p>

      <div className="mt-4 flex items-center justify-between gap-4">
        <div className="space-y-2">
          <p className="flex items-center gap-2 text-lg text-muted-foreground">
            <span className="text-primary">Income</span>
            <MoveDownRight
              size={20}
              className=" w-7 h-7 p-1 bg-primary rounded-full text-background"
            />
          </p>
          <p className=" text-2xl font-semibold text-foreground">$22,250.00</p>
        </div>
        <div className="w-px h-12 bg-white/30" />
        <div className="space-y-2">
          <p className="flex items-center gap-2 text-lg text-muted-foreground">
            <span className="text-red-600">Expenses</span>
            <MoveUpRight
              size={20}
              className=" w-7 h-7 p-1 bg-red-600 rounded-full text-background"
            />
          </p>
          <p className=" text-2xl font-semibold text-foreground">$3,250.00</p>
        </div>
      </div>

      {/* الشارت المحدث */}
      <div className="mt-8 flex-1 min-h-62.5">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              innerRadius={60}
              outerRadius={90}
              paddingAngle={2}
              dataKey="value"
              stroke="none"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Legend
              iconType="circle"
              wrapperStyle={{ fontSize: "14px", paddingTop: "10px" }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
