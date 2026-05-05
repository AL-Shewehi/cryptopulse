import React from "react";
import { Bell, Search } from "lucide-react";

interface MarketHeaderProps {
  selectedTab: string;
  setSelectedTab: (tab: string) => void;
  searchTerm: string;
  handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function MarketHeader({
  selectedTab,
  setSelectedTab,
  searchTerm,
  handleSearch,
}: MarketHeaderProps) {
  const tabs = ["Favorites", "Cryptos", "Spot", "Futures", "Alpha"];

  return (
    <div className="flex items-center justify-between flex-wrap gap-4 mb-4">
      <div className="flex items-center gap-4">
        {tabs.map((item, index) => (
          <button
            key={index}
            onClick={() => setSelectedTab(item)}
            className={`pb-1 text-sm md:text-lg font-semibold transition-all hover:text-foreground hover:bg-secondary/50 ${
              selectedTab === item
                ? "text-foreground border-b border-primary"
                : "text-muted-foreground/70"
            }`}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="flex items-center gap-4 w-full md:w-auto justify-center">
        <div className="relative group flex items-center justify-end">
          <input
            type="text"
            placeholder="Search..."
            onChange={handleSearch}
            value={searchTerm}
            className="w-64 md:w-10 h-10 pl-4 pr-10 rounded-full bg-card/50 backdrop-blur-md border border-border md:border-transparent outline-none transition-all duration-300 
            ease-out cursor-pointer placeholder:text-muted-foreground md:placeholder:text-transparent focus:w-64 focus:border-primary focus:cursor-text 
            focus:placeholder:text-muted-foreground group-hover:w-64 group-hover:border-border group-hover:placeholder:text-muted-foreground"
          />
          <div className="absolute right-0 w-10 h-10 flex items-center justify-center text-muted-foreground pointer-events-none">
            <Search size={18} />
          </div>
        </div>
        <button className="text-muted-foreground hover:text-foreground transition-colors">
          <Bell size={20} />
        </button>
      </div>
    </div>
  );
}
