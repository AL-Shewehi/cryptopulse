"use client";
import React, { useState } from "react";
import MarketOverviewCards from "./components/MarketOverviewCards";
import MarketTable from "./components/MarketTable";

function MarketsPage() {
  const [selectedTab, setSelectedTab] = useState("Overview");
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-4 flex-wrap">
        {["Overview", "Trading Date", "AI Select", "Token Unlock"].map(
          (item, index) => (
            <button
              key={index}
              onClick={() => setSelectedTab(item)}
              className={`px-2 py-4  text-lg md:text-2xl ${selectedTab === item ? "text-foreground" : "text-muted-foreground/70"}
               font-semibold transition-all hover:text-foreground hover:bg-secondary/50`}
            >
              {item}
            </button>
          ),
        )}
      </div>

        <MarketOverviewCards />

        <MarketTable />

    </div>
  );
}

export default MarketsPage;
