import Image from "next/image";
import React from "react";
import { FaAngleRight } from "react-icons/fa";

interface CoinData {
  name: string;
  symbol: string;
  price: string;
  change: number;
  image: string;
}

const hotCoinsData: CoinData[] = [
  {
    name: "Bitcoin",
    symbol: "BTC",
    price: "79,850.6",
    change: 1.85,
    image: "https://cryptologos.cc/logos/bitcoin-btc-logo.svg?v=025",
  },
  {
    name: "Ethereum",
    symbol: "ETH",
    price: "2,369.2",
    change: 2.5,
    image: "https://cryptologos.cc/logos/ethereum-eth-logo.svg?v=025",
  },
  {
    name: "Solana",
    symbol: "SOL",
    price: "84.89",
    change: 1.14,
    image: "https://cryptologos.cc/logos/solana-sol-logo.svg?v=025",
  },
];

const newCoinsData: CoinData[] = [
  {
    name: "Mega Coin",
    symbol: "MEGA",
    price: "0.1292",
    change: -1.52,
    image: "https://cryptologos.cc/logos/pancakeswap-cake-logo.svg?v=025",
  },
  {
    name: "Chip Network",
    symbol: "CHIP",
    price: "0.0600",
    change: -0.32,
    image: "https://cryptologos.cc/logos/chainlink-link-logo.svg?v=025",
  },
  {
    name: "Tether Gold",
    symbol: "XAUT",
    price: "2,458.1",
    change: 0.49,
    image: "https://cryptologos.cc/logos/tether-usdt-logo.svg?v=025",
  },
];

const topGainersData: CoinData[] = [
  {
    name: "TestNet",
    symbol: "TST",
    price: "0.0193",
    change: 77.08,
    image: "https://cryptologos.cc/logos/tron-trx-logo.svg?v=025",
  },
  {
    name: "Dash",
    symbol: "DASH",
    price: "48.15",
    change: 29.26,
    image: "https://cryptologos.cc/logos/dash-dash-logo.svg?v=025",
  },
  {
    name: "Horizen",
    symbol: "ZEN",
    price: "7.17",
    change: 16.16,
    image: "https://cryptologos.cc/logos/horizen-zen-logo.svg?v=025",
  },
];

const topVolumeData: CoinData[] = [
  {
    name: "Bitcoin",
    symbol: "BTC",
    price: "79,850.6",
    change: 1.85,
    image: "https://cryptologos.cc/logos/bitcoin-btc-logo.svg?v=025",
  },
  {
    name: "Ethereum",
    symbol: "ETH",
    price: "2,369.2",
    change: 2.5,
    image: "https://cryptologos.cc/logos/ethereum-eth-logo.svg?v=025",
  },
  {
    name: "Tether",
    symbol: "USDT",
    price: "1.000",
    change: 0.01,
    image: "https://cryptologos.cc/logos/tether-usdt-logo.svg?v=025",
  },
];

export default function MarketOverviewCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mb-8">
      <Card title="Hot" items={hotCoinsData} />
      <Card title="New" items={newCoinsData} />
      <Card title="Top Gainer" items={topGainersData} />
      <Card title="Top Volume" items={topVolumeData} />
    </div>
  );
}

const Card = ({ title, items }: { title: string; items: CoinData[] }) => {
  return (
    <div className="bg-card/50 backdrop-blur-md border border-border rounded-xl p-5 h-full flex flex-col shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h4 className="text-sm font-bold text-foreground">{title}</h4>
        <button className="text-xs text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1">
          More
          <FaAngleRight size={12} />
        </button>
      </div>

      <div className="flex flex-col gap-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between cursor-pointer hover:bg-secondary/30 p-1 -mx-1 rounded-lg transition-colors"
          >
            <div className="flex items-center gap-3 w-1/3">
              <Image
                src={item.image}
                alt={item.name}
                width={24}
                height={24}
                className="w-6 h-6 min-w-6 object-contain rounded-full"
                unoptimized
              />
              <span className="text-sm font-bold text-foreground">
                {item.symbol}
              </span>
            </div>

            <div className="w-1/3 text-right">
              <span className="text-sm font-medium text-foreground">
                ${item.price}
              </span>
            </div>

            <div className="w-1/3 text-right">
              <span
                className={`text-sm font-medium ${item.change >= 0 ? "text-green-500" : "text-red-500"}`}
              >
                {item.change > 0 ? "+" : ""}
                {item.change}%
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
