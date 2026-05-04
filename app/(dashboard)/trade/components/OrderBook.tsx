"use client";
import React, { useEffect, useState } from "react";
import { ArrowDown, ArrowUp, MoreVertical } from "lucide-react";
import { useTrade } from "../TradeContext";

type OrderBookEntry = {
  price: string;
  amount: string;
  total: string;
  depth: string;
};

const formatOrders = (orders: string[][]): OrderBookEntry[] => {
  let cumulativeTotal = 0;

  const processed = orders.map((order) => {
    const price = parseFloat(order[0]);
    const amount = parseFloat(order[1]);
    cumulativeTotal += amount;
    return { price, amount, total: cumulativeTotal };
  });

  const maxTotal = cumulativeTotal > 0 ? cumulativeTotal : 1;

  return processed.map((item) => ({
    price: item.price.toLocaleString(undefined, { minimumFractionDigits: 2 }),
    amount: item.amount.toFixed(3),
    total: item.total.toFixed(3),
    depth: `${(item.total / maxTotal) * 100}%`,
  }));
};

export default function OrderBook() {
  const { symbol, price, isPriceUp } = useTrade();
  const [asks, setAsks] = useState<OrderBookEntry[]>([]);
  const [bids, setBids] = useState<OrderBookEntry[]>([]);

  const baseAsset = symbol.replace("USDT", ""); 
  const quoteAsset = "USDT";


  useEffect(() => {
    let ws: WebSocket | null = null;
    let isMounted = true;

    // 1. الدالة الأولى لجلب أول لقطة
    const fetchOrderBook = async () => {
      try {
        const response = await fetch(
          `https://api.binance.com/api/v3/depth?symbol=${symbol.toUpperCase()}&limit=20`, // قللنا الليمت لـ 20
        );
        const data = await response.json();

        if (isMounted) {
          // البائعين بنعكسهم بـ reverse عشان أقل سعر يظهر تحت (قريب من السعر الحالي)
          setAsks(formatOrders(data.asks).reverse());
          setBids(formatOrders(data.bids));
        }
      } catch (error) {
        console.error("Error fetching order book:", error);
      }
    };

    // 2. الدالة التانية للتحديث اللحظي (كل 100 ملي ثانية)
    const startWebSocket = () => {
      ws = new WebSocket(
        `wss://stream.binance.com:9443/ws/${symbol.toLowerCase()}@depth20@1000ms`,
      );

      ws.onmessage = (event) => {
        if (!isMounted) return;
        const data = JSON.parse(event.data);

        // بينانس بتبعت الـ bids والـ asks جاهزين في الاستريم ده
        if (data.bids && data.asks) {
          setAsks(formatOrders(data.asks).reverse());
          setBids(formatOrders(data.bids));
        }
      };
    };

    // بنشغل الماضي وبعده نفتح اللايف
    fetchOrderBook().then(startWebSocket);

    return () => {
      isMounted = false;
      if (ws) ws.close();
    };
  }, [symbol]);
  return (
    <div className="w-full h-full flex flex-col pt-2 min-h-0 text-xs tabular-nums">
      <div className="flex justify-between items-center px-4 mb-2">
        <div className="flex gap-4 text-muted-foreground font-medium">
          <button className="text-foreground border-b border-primary pb-1">
            Order Book
          </button>
          <button className="hover:text-foreground pb-1">Recent Trades</button>
        </div>
        <MoreVertical
          size={16}
          className="text-muted-foreground cursor-pointer"
        />
      </div>

      <div className="grid grid-cols-3 text-muted-foreground px-4 py-2 font-medium">
        <div className="text-left">Price({quoteAsset})</div>
        <div className="text-right">Qty({baseAsset})</div>
        <div className="text-right">Total({baseAsset})</div>
      </div>

      <div className="flex flex-col flex-1 overflow-hidden justify-end">
        {asks.map((ask, i) => (
          <div
            key={`ask-${i}`}
            className="grid grid-cols-3 px-4 py-0.5 relative cursor-pointer hover:bg-card/50"
          >
            <div
              className="absolute right-0 top-0 h-full bg-red-500/10 z-0"
              style={{ width: ask.depth }}
            />
            <div className="text-red-500 z-10 text-left">{ask.price}</div>
            <div className="text-foreground z-10 text-right">{ask.amount}</div>
            <div className="text-muted-foreground z-10 text-right">
              {ask.total}
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-2 px-4 py-3 border-y border-border/30 my-1 shrink-0">
        <span 
          className={`text-lg font-bold flex items-center ${isPriceUp ? 'text-green-500' : 'text-red-500'}`}
        >
          {isPriceUp ? <ArrowUp size={18} className="mr-1" /> : <ArrowDown size={18} className="mr-1" />}
          {price.toLocaleString(undefined, { minimumFractionDigits: 2 })}
        </span>
        <span className="text-muted-foreground text-sm">
          ≈ ${price.toLocaleString(undefined, { minimumFractionDigits: 2 })}
        </span>
      </div>

      <div className="flex flex-col flex-1 overflow-hidden">
        {bids.map((bid, i) => (
          <div
            key={`bid-${i}`}
            className="grid grid-cols-3 px-4 py-0.5 relative cursor-pointer hover:bg-card/50"
          >
            <div
              className="absolute right-0 top-0 h-full bg-green-500/10 z-0"
              style={{ width: bid.depth }}
            />
            <div className="text-green-500 z-10 text-left">{bid.price}</div>
            <div className="text-foreground z-10 text-right">{bid.amount}</div>
            <div className="text-muted-foreground z-10 text-right">
              {bid.total}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
