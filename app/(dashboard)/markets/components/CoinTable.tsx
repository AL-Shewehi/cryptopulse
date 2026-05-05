import React from "react";
import Image from "next/image";
import { ChevronUp, ChevronDown } from "lucide-react";
import { Coin, formatPrice, formatCompact } from "./market.types";

const SortIcon = ({
  active,
  direction,
}: {
  active: boolean;
  direction: "asc" | "desc" | null;
}) => (
  <div className="flex flex-col items-center ml-1">
    <ChevronUp
      className={`${active && direction === "asc" ? "text-primary" : "text-muted-foreground"}`}
      size={12}
    />
    <ChevronDown
      className={`${active && direction === "desc" ? "text-primary" : "text-muted-foreground"}`}
      size={12}
    />
  </div>
);

interface CoinTableProps {
  data: Coin[];
  sortConfig: { key: string; direction: "asc" | "desc" | null };
  handleSort: (key: keyof Coin) => void;
  loading: boolean;
}

export default function CoinTable({
  data,
  sortConfig,
  handleSort,
  loading,
}: CoinTableProps) {
  return (
    <div className="w-full bg-card/50 backdrop-blur-md border border-border rounded-xl overflow-x-auto">
      <table className="w-full text-left border-collapse min-w-200">
        <thead>
          <tr className="border-b border-border/50 text-xs font-medium text-muted-foreground">
            <th
              className="py-3 px-4 cursor-pointer hover:text-foreground font-medium"
              onClick={() => handleSort("name")}
            >
              <div className="flex items-center">
                Name{" "}
                <SortIcon
                  active={sortConfig.key === "name"}
                  direction={sortConfig.direction}
                />
              </div>
            </th>
            <th
              className="py-3 px-4 cursor-pointer hover:text-foreground font-medium"
              onClick={() => handleSort("price")}
            >
              <div className="flex items-center justify-end">
                Price{" "}
                <SortIcon
                  active={sortConfig.key === "price"}
                  direction={sortConfig.direction}
                />
              </div>
            </th>
            <th
              className="py-3 px-4 cursor-pointer hover:text-foreground font-medium"
              onClick={() => handleSort("change")}
            >
              <div className="flex items-center justify-end">
                24h Change{" "}
                <SortIcon
                  active={sortConfig.key === "change"}
                  direction={sortConfig.direction}
                />
              </div>
            </th>
            <th
              className="py-3 px-4 cursor-pointer hover:text-foreground font-medium"
              onClick={() => handleSort("volume")}
            >
              <div className="flex items-center justify-end">
                24h Volume{" "}
                <SortIcon
                  active={sortConfig.key === "volume"}
                  direction={sortConfig.direction}
                />
              </div>
            </th>
            <th
              className="py-3 px-4 cursor-pointer hover:text-foreground font-medium"
              onClick={() => handleSort("marketCap")}
            >
              <div className="flex items-center justify-end">
                Market Cap{" "}
                <SortIcon
                  active={sortConfig.key === "marketCap"}
                  direction={sortConfig.direction}
                />
              </div>
            </th>
            <th className="py-3 px-4 font-medium text-right">Actions</th>
          </tr>
        </thead>
        <tbody>
          {loading
            ? Array.from({ length: 10 }).map((_, index) => (
                <tr
                  key={`skeleton-${index}`}
                  className="border-b border-border/30 animate-pulse"
                >
                  {/* Name Skeleton */}
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-card shrink-0"></div>
                      <div className="flex flex-col gap-1.5">
                        <div className="w-12 h-3.5 bg-card rounded"></div>
                        <div className="w-20 h-2.5 bg-card rounded"></div>
                      </div>
                    </div>
                  </td>

                  {/* Price Skeleton */}
                  <td className="py-3 px-4">
                    <div className="flex flex-col items-end gap-1.5">
                      <div className="w-16 h-3.5 bg-card rounded"></div>
                      <div className="w-12 h-2.5 bg-card rounded"></div>
                    </div>
                  </td>

                  {/* Change Skeleton */}
                  <td className="py-3 px-4">
                    <div className="w-10 h-3.5 bg-card rounded ml-auto"></div>
                  </td>

                  {/* Volume Skeleton */}
                  <td className="py-3 px-4">
                    <div className="w-16 h-3.5 bg-card rounded ml-auto"></div>
                  </td>

                  {/* Market Cap Skeleton */}
                  <td className="py-3 px-4">
                    <div className="w-20 h-3.5 bg-card rounded ml-auto"></div>
                  </td>

                  {/* Actions Skeleton */}
                  <td className="py-3 px-4">
                    <div className="w-12 h-6 bg-card rounded ml-auto"></div>
                  </td>
                </tr>
              ))
            : data.map((coin: Coin) => (
                <tr
                  key={coin.id}
                  className="border-b border-border/30 hover:bg-card/50 transition-colors group"
                >
                  {/* Name */}
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-3 whitespace-nowrap">
                      <Image
                        src={coin.image}
                        alt={coin.name}
                        width={24}
                        height={24}
                        className="rounded-full shrink-0"
                        unoptimized
                        onError={(e) => {
                          e.currentTarget.src =
                            "https://cryptologos.cc/logos/bitcoin-btc-logo.svg?v=025";
                        }}
                      />
                      <div className="flex flex-col">
                        <span className="font-bold text-sm text-foreground flex items-center gap-2">
                          {coin.symbol}{" "}
                          <span className="text-xs text-muted-foreground font-normal">
                            {coin.name}
                          </span>
                        </span>
                      </div>
                    </div>
                  </td>
                  {/* Price */}
                  <td className="py-3 px-4">
                    <div className="flex flex-col items-end whitespace-nowrap">
                      <span className="text-sm font-medium text-foreground">
                        {formatPrice(coin.price).replace("$", "")}
                      </span>
                      <span className="text-xs text-muted-foreground mt-0.5">
                        {formatPrice(coin.price)}
                      </span>
                    </div>
                  </td>
                  {/* Change */}
                  <td className="py-3 px-4 text-right whitespace-nowrap">
                    <span
                      className={`text-sm font-medium ${coin.change >= 0 ? "text-green-500" : "text-red-500"}`}
                    >
                      {coin.change > 0 ? "+" : ""}
                      {coin.change.toFixed(2)}%
                    </span>
                  </td>
                  {/* Volume */}
                  <td className="py-3 px-4 text-right text-sm text-foreground whitespace-nowrap">
                    {formatCompact(coin.volume)}
                  </td>
                  {/* Market Cap */}
                  <td className="py-3 px-4 text-right text-sm text-foreground whitespace-nowrap">
                    {formatCompact(coin.marketCap)}
                  </td>
                  {/* Actions */}
                  <td className="py-3 px-4 text-right">
                    <div className="flex items-center justify-end text-muted-foreground">
                      <button className="hover:text-primary hover:bg-primary/10 px-3 py-1 rounded text-xs font-medium transition-colors">
                        Trade
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
        </tbody>
      </table>
    </div>
  );
}
