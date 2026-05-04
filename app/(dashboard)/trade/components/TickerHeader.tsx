"use client";
import React, { useEffect, useState } from "react";
import { Star } from "lucide-react";
import { useTrade } from "../TradeContext";

type TickerData = {
  isPositive: boolean;
  price: number;
  change24h: number;
  high24h: number;
  low24h: number;
  volume24h: number;
};

export default function TickerHeader() {
  const { symbol, setSymbol, setPrice, setIsPriceUp } = useTrade();
  const [tickerData, setTickerData] = useState<TickerData>({
    isPositive: true,
    price: 0,
    change24h: 0,
    high24h: 0,
    low24h: 0,
    volume24h: 0,
  });

  useEffect(() => {
    let ws: WebSocket | null = null;
    let isMounted = true; // To prevent memory leaks

    const fetchTickerData = async () => {
      try {
        const response = await fetch(
          `https://api.binance.com/api/v3/ticker/24hr?symbol=${symbol.toUpperCase()}`,
        );
        const data = await response.json();

        if (isMounted) {
          setTickerData({
            isPositive: parseFloat(data.priceChangePercent) >= 0,
            price: Number(parseFloat(data.lastPrice).toFixed(2)), // السعر الحالي
            change24h: Number(parseFloat(data.priceChangePercent).toFixed(2)), // التغيير المئوي
            high24h: Number(parseFloat(data.highPrice).toFixed(2)),
            low24h: Number(parseFloat(data.lowPrice).toFixed(2)),
            volume24h: Number(parseFloat(data.volume).toFixed(2)),
          });
          setPrice(Number(parseFloat(data.lastPrice).toFixed(2)));
          setIsPriceUp(parseFloat(data.priceChangePercent) >= 0);
        }
      } catch (error) {
        console.error("Error fetching ticker data:", error);
      }
    };

    const startWebSocket = () => {
      ws = new WebSocket(
        `wss://stream.binance.com:9443/ws/${symbol.toLowerCase()}@ticker`,
      );

      ws.onmessage = (event) => {
        if (!isMounted) return;
        const data = JSON.parse(event.data);

        setTickerData({
          isPositive: parseFloat(data.P) >= 0,
          price: Number(parseFloat(data.c).toFixed(2)),
          change24h: Number(parseFloat(data.P).toFixed(2)), // P كابيتال هي التغيير المئوي
          high24h: Number(parseFloat(data.h).toFixed(2)),
          low24h: Number(parseFloat(data.l).toFixed(2)),
          volume24h: Number(parseFloat(data.v).toFixed(2)),
        });
        setPrice(Number(parseFloat(data.c).toFixed(2)));
        setIsPriceUp(parseFloat(data.P) >= 0);
      };
    };

    fetchTickerData().then(startWebSocket);

    return () => {
      isMounted = false;
      if (ws) ws.close();
    };
  }, [symbol]);

  return (
    <div className="bg-card/50 px-4 py-3 flex items-center gap-6 overflow-x-auto whitespace-nowrap">
      <div className="flex items-center gap-3">
        <Star className="w-5 h-5 text-muted-foreground hover:text-yellow-500 cursor-pointer transition-colors" />
        <select
          value={symbol}
          onChange={(e) => setSymbol(e.target.value)}
          className="text-xl font-bold text-foreground bg-card/50 px-2 py-1 rounded-lg outline-none"
          data-cursor="hover"
        >
          <option value="BTCUSDT" className="bg-card ">
            BTC/USDT
          </option>
          <option value="ETHUSDT" className="bg-card ">
            ETH/USDT
          </option>
          <option value="LTCUSDT" className="bg-card ">
            LTC/USDT
          </option>
          <option value="BNBUSDT" className="bg-card ">
            BNB/USDT
          </option>
          <option value="SOLUSDT" className="bg-card ">
            SOL/USDT
          </option>
          <option value="XRPUSDT" className="bg-card ">
            XRP/USDT
          </option>
        </select>
      </div>

      {/* السعر الحالي */}
      <div className="ml-4">
        <p
          className={`text-2xl font-bold ${tickerData.isPositive ? "text-green-500" : "text-red-500"}`}
        >
          {tickerData.price}
        </p>
        <p className="text-xs text-muted-foreground">≈ ${tickerData.price}</p>
      </div>

      {/* التغيير في 24 ساعة */}
      <div className="ml-6 flex flex-col justify-center">
        <p className="text-xs text-muted-foreground font-medium mb-1">
          24h Change
        </p>
        <p
          className={`text-sm font-bold ${tickerData.isPositive ? "text-green-500" : "text-red-500"}`}
        >
          {tickerData.change24h}%
        </p>
      </div>

      {/* أعلى سعر في 24 ساعة */}
      <div className="ml-6 flex flex-col justify-center">
        <p className="text-xs text-muted-foreground font-medium mb-1">
          24h High
        </p>
        <p className="text-sm font-medium text-foreground">
          {tickerData.high24h}
        </p>
      </div>

      {/* أقل سعر في 24 ساعة */}
      <div className="ml-6 flex flex-col justify-center">
        <p className="text-xs text-muted-foreground font-medium mb-1">
          24h Low
        </p>
        <p className="text-sm font-medium text-foreground">
          {tickerData.low24h}
        </p>
      </div>

      {/* حجم التداول */}
      <div className="ml-6 flex flex-col justify-center">
        <p className="text-xs text-muted-foreground font-medium mb-1">
          24h Vol(USDT)
        </p>
        <p className="text-sm font-medium text-foreground">
          {tickerData.volume24h}
        </p>
      </div>
    </div>
  );
}
