import React from "react";
import { InstantHistory, LimitOrder } from "./types";
import { Inbox } from "lucide-react";

export default function SwapHistoryTable({
  type,
  data,
}: {
  type: "instant" | "limit";
  data: LimitOrder[] | InstantHistory[];
}) {
  return (
    <div className="w-full bg-card/50 backdrop-blur-md border border-border p-6 rounded-2xl shadow-sm ">
      <h2 className="text-3xl font-bold mb-4">
        {type === "limit" ? "Active Orders" : "Swap History"}
      </h2>
      <div className="overflow-x-auto">

      
      <table className="w-full text-center border-collapse table-auto">
        <thead className="text-md text-muted-foreground border-b border-border mb-4 pb-2 capitalize font-medium">
          {type === "limit" ? (
            <tr>
              <th className="p-2">Order ID</th>
              <th className="p-2">Quantity</th>
              <th className="p-2">From</th>
              <th className="p-2">To</th>
              <th className="p-2">Converted to</th>
              <th className="p-2">Account</th>
              <th className="p-2">Rate</th>
              <th className="p-2">Expired in</th>
              <th className="p-2">Maturity time</th>
              <th className="p-2">Time</th>
              <th className="p-2">Action</th>
            </tr>
          ) : (
            <tr>
              <th className="p-2">Transaction ID</th>
              <th className="p-2">Amount</th>
              <th className="p-2">Current Price</th>
              <th className="p-2">Opening Price</th>
              <th className="p-2">Take Profit/Stop Loss Price</th>
              <th className="p-2">Trading time</th>
              <th className="p-2">Profits and losses</th>
              <th className="p-2">Action</th>
            </tr>
          )}
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td
                colSpan={type === "limit" ? 11 : 8}
                className="py-16 text-center"
              >
                <div className="flex flex-col items-center justify-center text-muted-foreground">
                  <Inbox className="w-12 h-12 mb-4 opacity-50" />
                  <p className="text-lg font-medium text-foreground">
                    No records found
                  </p>
                  <p className="text-sm mt-1">
                    {type === "limit"
                      ? "You don't have any active limit orders."
                      : "Your swap history is currently empty."}
                  </p>
                </div>
              </td>
            </tr>
          ) : type === "limit" ? (
            (data as LimitOrder[]).map((order) => (
              <tr key={order.id} className="hover:bg-card transition-colors">
                <td className="px-2 py-4">{order.id}</td>
                <td className="px-2 py-4">{order.quantity}</td>
                <td className="px-2 py-4">{order.from}</td>
                <td className="px-2 py-4">{order.to}</td>
                <td className="px-2 py-4">{order.convertedTo}</td>
                <td className="px-2 py-4">{order.account}</td>
                <td className="px-2 py-4">{order.rate}</td>
                <td className="px-2 py-4">{order.expiredIn}</td>
                <td className="px-2 py-4">{order.maturityTime}</td>
                <td className="px-2 py-4">{order.time}</td>
                <td className="px-2 py-4">
                  <button className="text-sm font-medium bg-red-700 hover:bg-red-500 text-white px-4 py-2 rounded transition-colors">
                    Cancel
                  </button>
                </td>
              </tr>
            ))
          ) : (
            (data as InstantHistory[]).map((history) => (
              <tr key={history.id} className="hover:bg-card">
                <td className="px-2 py-4">{history.id}</td>
                <td className="px-2 py-4">{history.amount}</td>
                <td className="px-2 py-4">{history.currentPrice}</td>
                <td className="px-2 py-4">{history.openingPrice}</td>
                <td className="px-2 py-4">{history.tpSlPrice}</td>
                <td className="px-2 py-4">{history.tradingTime}</td>
                <td className="px-2 py-4">{history.pnl}</td>
                <td className="px-2 py-4">
                  <button className="text-sm font-medium bg-primary/70 hover:bg-primary text-black px-4 py-2 rounded transition-colors">
                    Details
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
      </div>
    </div>
  );
}
