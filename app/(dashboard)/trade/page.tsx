"use client";
import React from "react";
import TickerHeader from "./components/TickerHeader";
import CandlestickChart from "./components/CandlestickChart";
import OrderBook from "./components/OrderBook";
import TradeForm from "./components/TradeForm";
import OpenOrdersTable from "./components/OpenOrdersTable";
import { TradeProvider } from "./TradeContext";

export default function TradePage() {
  return (
    <TradeProvider>
      <div className="h-[calc(100vh-80px)] bg-background flex flex-col xl:grid xl:grid-cols-[1fr_280px_320px] xl:grid-rows-[auto_2fr_1fr]">
        
        <div className="xl:col-span-3 border-b border-border shrink-0">
          <TickerHeader />
        </div>

        <div className="border-b xl:border-b-0 xl:border-r border-border min-h-100 overflow-hidden">
          <CandlestickChart />
        </div>

        <div className="border-b xl:border-b-0 xl:border-r border-border min-h-100 overflow-hidden">
          <OrderBook />
        </div>

        <div className="border-b xl:border-b-0 border-border ">
          <TradeForm />
        </div>

        <div className="xl:col-span-3 border-t border-border min-h-75 overflow-hidden bg-background z-10">
          <OpenOrdersTable />
        </div>
        
      </div>
    </TradeProvider>
  );
}