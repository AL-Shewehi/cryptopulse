"use client";
import React, { createContext, useContext, useState } from "react";

interface TradeContextType {
  symbol: string;
  setSymbol: React.Dispatch<React.SetStateAction<string>>;
  price: number;
  setPrice: React.Dispatch<React.SetStateAction<number>>;
  isPriceUp: boolean;
  setIsPriceUp: React.Dispatch<React.SetStateAction<boolean>>;
}

export const TradeContext = createContext<TradeContextType | undefined>(
  undefined,
);

const TradeProvider = ({ children }: { children: React.ReactNode }) => {
  const [symbol, setSymbol] = useState("BTCUSDT");
  const [price, setPrice] = useState(0);
  const [isPriceUp, setIsPriceUp] = useState(true);
  
  return (
    <TradeContext.Provider value={{ symbol, setSymbol, price, setPrice, isPriceUp, setIsPriceUp }}>
      {children}
    </TradeContext.Provider>
  );
};

const useTrade = () => {
  const context = useContext(TradeContext);
  if (context === undefined) {
    throw new Error("useTrade must be used within a TradeProvider");
  }
  return context;
};

export { TradeProvider, useTrade };
