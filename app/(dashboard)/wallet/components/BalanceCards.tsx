"use client";
import React from "react";

interface CoinData {
  holding: number;
  available: number;
  pending: number;
  locked: number;
  price: number;
}

interface CardConfig {
  key: keyof Omit<CoinData, "price">; // "holding" | "available" | "pending" | "locked"
  title: string;
  colorClass: string;
}

const mockApiData: Record<string, CoinData> = {
  USDT: { holding: 0.0004, available: 0.009, pending: 0.0002, locked: 0, price: 1 },
  BTC:  { holding: 1.5, available: 1.2, pending: 0.3, locked: 0, price: 75905.70 },
  ETH:  { holding: 10, available: 8, pending: 1.5, locked: 0.5, price: 3100.50 },
  DASH: { holding: 50, available: 40, pending: 10, locked: 0, price: 28.40 },
  LTC:  { holding: 25, available: 20, pending: 5, locked: 0, price: 82.15 },
};

const cardsConfig: CardConfig[] = [
  { key: "holding", title: "Holding Balance", colorClass: "text-foreground" },
  { key: "available", title: "Available Balance", colorClass: "text-green-500" },
  { key: "pending", title: "Pending Balance", colorClass: "text-yellow-500" },
  { key: "locked", title: "Locked Balance", colorClass: "text-red-500" },
];

function BalanceCards({ activeCoin }: { activeCoin: string }) {
  const coinData = mockApiData[activeCoin] || mockApiData["USDT"];
  const coinPrice = coinData.price;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-6">
      {cardsConfig.map((card, index) => {
        const amount = coinData[card.key]; 
        
        const usdValue = (amount * coinPrice).toLocaleString("en-US", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        });

        return (
          <div
            key={index}
            className="bg-card/50 backdrop-blur-md border border-border rounded-2xl p-6 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow"
          >
            <h3 className="text-sm font-medium text-muted-foreground mb-2">
              {card.title}
            </h3>
            
            <p className={`text-3xl font-bold mb-1 ${card.colorClass}`}>
              {amount}{" "}
              <span className="text-sm font-medium text-foreground ml-1">
                {activeCoin}
              </span>
            </p>
            
            <p className="text-xs text-muted-foreground font-medium">
              ≈ {usdValue} USD
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default React.memo(BalanceCards);