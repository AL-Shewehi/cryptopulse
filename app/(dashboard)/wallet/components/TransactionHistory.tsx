"use client";
import React from "react";
import { ArrowDownLeft, ArrowUpRight } from "lucide-react";

export default function LatestTransactions({ activeCoin }: { activeCoin: string }) {
  const transactions = [
    { id: "#8089089", date: "03/05/2026", amount: "573", type: "deposit", status: "completed" },
    { id: "#8786876", date: "01/05/2026", amount: "273", type: "deposit", status: "completed" },
    { id: "#8786877", date: "20/04/2026", amount: "305", type: "withdraw", status: "pending" },
    { id: "#8786878", date: "10/04/2026", amount: "120", type: "deposit", status: "canceled" },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed": return "text-green-500";
      case "pending": return "text-yellow-500";
      case "canceled": return "text-red-500";
      default: return "text-muted-foreground";
    }
  };

  return (
    <div className="bg-card/50 backdrop-blur-md border border-border rounded-2xl p-6 h-full flex flex-col shadow-sm">
      <h2 className="text-lg font-bold mb-6">Latest Transactions</h2>

      <div className="flex-1 overflow-x-auto">
        <table className="w-full text-center border-collapse min-w-100">
          <thead className="text-sm text-muted-foreground border-b border-border">
            <tr>
              <th className="pb-3 font-medium">Type</th>
              <th className="pb-3 font-medium">ID</th>
              <th className="pb-3 font-medium">Date</th>
              <th className="pb-3 font-medium">Amount</th>
              <th className="pb-3 font-medium text-right">Status</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {transactions.map((tx, idx) => (
              <tr key={idx} className="border-b border-border/50 last:border-0 hover:bg-muted/50 transition-colors">
                <td className="py-4">
                  {tx.type === "deposit" ? (
                    <div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center text-green-500">
                      <ArrowDownLeft className="w-4 h-4" />
                    </div>
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center text-red-500">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  )}
                </td>
                <td className="py-4 text-muted-foreground">{tx.id}</td>
                <td className="py-4 text-muted-foreground">{tx.date}</td>
                <td className="py-4 font-bold">
                  {tx.amount} <span className="text-xs text-muted-foreground font-normal">{activeCoin}</span>
                </td>
                <td className={`py-4 text-right capitalize font-medium ${getStatusColor(tx.status)}`}>
                  {tx.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}