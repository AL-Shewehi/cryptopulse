"use client";
import React from "react";
import { LucideIcon } from "lucide-react";
// 1. استيراد Tooltip من المكتبة
import { AreaChart, Area, ResponsiveContainer, Tooltip } from "recharts";

interface StatCardProps {
  title: string;
  value: string;
  icon: LucideIcon;
  trend?: number;
  trendText?: string;
  chartData?: { price: number }[];
}

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-background/90 backdrop-blur-sm border border-border px-3 py-1.5 rounded-lg shadow-xl">
        <p className="text-sm font-bold text-foreground">
          ${payload[0].value.toLocaleString()}
        </p>
      </div>
    );
  }
  return null;
};

export default function StatCard({
  title,
  value,
  icon: Icon,
  trend,
  trendText,
  chartData,
}: StatCardProps) {
  const isPositive = trend !== undefined && trend >= 0;
  const chartColor = trend === undefined ? "#f59e0b" : isPositive ? "#22c55e" : "#ef4444";
  const gradientId = `gradient-${title.replace(/\s+/g, "-").toLowerCase()}`;

  return (
    <div className="bg-card/50 backdrop-blur-md border border-border p-6 rounded-2xl shadow-sm hover:shadow-md transition-all overflow-hidden flex flex-col justify-between group">
      
      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-medium text-muted-foreground">{title}</h3>
          <div className="p-2 bg-primary/10 rounded-lg text-primary">
            <Icon size={20} />
          </div>
        </div>
        
        <div className="flex flex-col gap-1">
          <span className="text-3xl font-bold tracking-tight">{value}</span>

          {trend !== undefined && (
            <div className="flex items-center gap-2 text-sm mt-1">
              <span className={isPositive ? "text-green-500" : "text-red-500"}>
                {isPositive ? "+" : ""}
                {trend}%
              </span>
              <span className="text-muted-foreground">{trendText}</span>
            </div>
          )}
        </div>
      </div>

      {chartData && chartData.length > 0 && (
        <div className="h-20 w-full mt-4 -mb-2">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chartData}>
              <defs>
                <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={chartColor} stopOpacity={0.3} />
                  <stop offset="95%" stopColor={chartColor} stopOpacity={0} />
                </linearGradient>
              </defs>

              <Tooltip 
                content={<CustomTooltip />} 
                cursor={{ 
                  stroke: chartColor, 
                  strokeWidth: 1, 
                  strokeDasharray: '4 4',
                  fill: 'transparent' 
                }} 
              />

              <Area
                type="monotone"
                dataKey="price"
                stroke={chartColor}
                strokeWidth={2}
                fillOpacity={1}
                fill={`url(#${gradientId})`}
                activeDot={{ r: 4, fill: chartColor, stroke: "#000", strokeWidth: 2 }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
}