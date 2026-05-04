"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  createChart,
  ColorType,
  CandlestickSeries,
  Time,
} from "lightweight-charts";
import { useTrade } from "../TradeContext";

const timeframes = [
  "1s",
  "1m",
  "5m",
  "15m",
  "30m",
  "1h",
  "4h",
  "1d",
  "1w",
  "1M",
];

export default function CandlestickChart() {
  const chartContainerRef = useRef<HTMLDivElement>(null);
  const [type, setType] = useState<"chart" | "overview" | "data">("chart");
  const [activeTimeframe, setActiveTimeframe] = useState("30m");

  const { symbol } = useTrade();

  useEffect(() => {
    if (!chartContainerRef.current) return;

    let isMounted = true; // To prevent memory leaks

    const chart = createChart(chartContainerRef.current, {
      layout: {
        background: { type: ColorType.Solid, color: "transparent" },
        textColor: "#9ca3af",
      },
      grid: {
        vertLines: { color: "rgba(43, 43, 54, 0.5)" },
        horzLines: { color: "rgba(43, 43, 54, 0.5)" },
      },
      timeScale: {
        timeVisible: true,
        secondsVisible: false,
      },
      width: chartContainerRef.current.clientWidth,
      height: chartContainerRef.current.clientHeight,
    });

    const candlestickSeries = chart.addSeries(CandlestickSeries, {
      upColor: "#26a69a",
      downColor: "#ef5350",
      borderVisible: false,
      wickUpColor: "#26a69a",
      wickDownColor: "#ef5350",
    });

    let ws: WebSocket | null = null;

    const fetchHistoricalData = async () => {
      try {
        const res = await fetch(
          `https://api.binance.com/api/v3/klines?symbol=${symbol.toUpperCase()}&interval=${activeTimeframe}&limit=200`,
        );
        const data = await res.json();

        if (!isMounted) return; // لو الكومبوننت اتقفل قبل ما الداتا تيجي، وقف

        const formattedData = data.map((d: string[]) => ({
          time: Math.floor(Number(d[0]) / 1000),
          open: parseFloat(d[1]),
          high: parseFloat(d[2]),
          low: parseFloat(d[3]),
          close: parseFloat(d[4]),
        }));

        candlestickSeries.setData(formattedData);
        chart.timeScale().fitContent();

        console.log("✅ Historical Data Loaded");
      } catch (error) {
        console.error("❌ Error fetching historical data:", error);
      }
    };

    const startLiveUpdates = () => {
      ws = new WebSocket(
        `wss://stream.binance.com:9443/ws/${symbol.toLowerCase()}@kline_${activeTimeframe}`,
      );

      ws.onopen = () => {
        console.log(`✅ WebSocket Connected for: ${activeTimeframe}`);
      };

      ws.onmessage = (event) => {
        if (!isMounted) return;

        const message = JSON.parse(event.data);
        const kline = message.k;

        //         {
        //   "e": "kline",     // نوع الحدث
        //   "E": 123456789,   // وقت الحدث
        //   "s": "BTCUSDT",   // اسم العملة
        //   "k": {            //  ده الـ Object اللي جواه تفاصيل الشمعة (اللي إحنا سميناه kline)
        //     "t": 123400000, // وقت فتح الشمعة (time)
        //     "T": 123460000, // وقت إغلاق الشمعة
        //     "o": "78200.5", // سعر الفتح (open)
        //     "c": "78229.7", // سعر الإغلاق (close)
        //     "h": "78250.0", // أعلى سعر (high)
        //     "l": "78190.0", // أقل سعر (low)
        //     "v": "100.5",   // حجم التداول
        //     "x": false      // هل الشمعة دي قفلت ولا لسه شغالة؟
        //   }
        // }

        try {
          candlestickSeries.update({
            time: Math.floor(kline.t / 1000) as Time,
            open: parseFloat(kline.o),
            high: parseFloat(kline.h),
            low: parseFloat(kline.l),
            close: parseFloat(kline.c),
          });
        } catch (e) {
          console.error("❌ Chart Update Error:", e);
        }
      };

      ws.onerror = (error) => {
        console.error("❌ WebSocket Error:", error);
      };
    };

    fetchHistoricalData().then(() => {
      if (isMounted) startLiveUpdates();
    });

    const handleResize = () => {
      if (chartContainerRef.current) {
        chart.applyOptions({
          width: chartContainerRef.current.clientWidth,
          height: chartContainerRef.current.clientHeight,
        });
      }
    };
    window.addEventListener("resize", handleResize);

    return () => {
      isMounted = false;
      window.removeEventListener("resize", handleResize);
      if (ws) ws.close();
      chart.remove();
    };
  }, [activeTimeframe, symbol]);

  return (
    <div className="w-full h-full flex flex-col pt-2 px-2 min-h-0 overflow-hidden">
      <div className="flex justify-between items-center gap-2 flex-wrap pb-2 mb-2">
        <div className="flex gap-4 items-center text-muted-foreground text-sm font-medium">
          {(["chart", "overview", "data"] as const).map((item, index) => (
            <button
              key={index}
              className={`capitalize transition-colors pb-1 ${
                type === item
                  ? "text-foreground border-b border-primary"
                  : "hover:text-foreground"
              }`}
              onClick={() => setType(item)}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3 text-xs font-medium text-muted-foreground">
          {timeframes.map((tf) => (
            <button
              key={tf}
              onClick={() => setActiveTimeframe(tf)}
              className={`transition-colors ${
                activeTimeframe === tf
                  ? "text-[#f7a600]"
                  : "hover:text-foreground"
              }`}
            >
              {tf}
            </button>
          ))}
        </div>
      </div>

      <div className="w-full flex-1 relative min-h-0">
        <div ref={chartContainerRef} className="absolute inset-0" />
      </div>
    </div>
  );
}
