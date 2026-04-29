import { MoveUpRight, TrendingUp } from "lucide-react";
import React from "react";

export default function BalanceDetails() {
  return (
    <div className="bg-card/50 backdrop-blur-md border border-border p-6 rounded-2xl shadow-sm w-full">
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
      <p className="text-3xl font-bold ">$22,250.11</p>

      <div className="mt-4 flex items-center justify-between gap-4">
        <div className="space-y-2">
          <p className="flex items-center gap-2 text-lg text-muted-foreground">
            <span className="text-primary">Income</span>
            <MoveUpRight
              size={20}
              className=" w-7 h-7 p-1 bg-primary rounded-full text-background"
            />
          </p>
          <p className=" text-2xl font-semibold text-foreground">$22,250.11</p>
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
          <p className=" text-2xl font-semibold text-foreground">$22,250.11</p>
        </div>
      </div>
    </div>
  );
}
