import React, { useCallback, useEffect, useMemo, useState } from "react";
import useDebounce from "@/hooks/useDebounce";
import { Coin, BinanceTicker } from "./market.types";
import MarketHeader from "./MarketHeader";
import CoinTable from "./CoinTable";
import Pagination from "./Pagination";

export default function MarketTable() {
  const [selectedTab, setSelectedTab] = useState("Cryptos");
  const [sortConfig, setSortConfig] = useState<{
    key: string;
    direction: "asc" | "desc" | null;
  }>({ key: "", direction: null });
  const [originalCoins, setOriginalCoins] = useState<Coin[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  // تحميل البيانات
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch("https://api.binance.com/api/v3/ticker/24hr");
        const data = await res.json();
        const formattedData = data
          .filter((coin: Coin) => coin.symbol.endsWith("USDT"))
          .sort(
            (a: BinanceTicker, b: BinanceTicker) =>
              parseFloat(b.quoteVolume) - parseFloat(a.quoteVolume),
          )
          .map((coin: BinanceTicker, index: number) => {
            const baseSymbol = coin.symbol.replace("USDT", "");
            return {
              id: index + 1,
              name: baseSymbol,
              symbol: baseSymbol,
              price: parseFloat(coin.lastPrice),
              change: parseFloat(coin.priceChangePercent),
              volume: parseFloat(coin.quoteVolume),
              marketCap: parseFloat(coin.quoteVolume) * 45,
              image: `https://assets.coincap.io/assets/icons/${baseSymbol.toLowerCase()}@2x.png`,
            };
          });
        setOriginalCoins(formattedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // دمج البحث والترتيب
  const processedCoins = useMemo(() => {
    let data = originalCoins;
    if (debouncedSearchTerm) {
      const term = debouncedSearchTerm.toLowerCase();
      data = data.filter(
        (coin) =>
          coin.name.toLowerCase().includes(term) ||
          coin.symbol.toLowerCase().includes(term),
      );
    }
    if (sortConfig.direction !== null && sortConfig.key) {
      data = [...data].sort((a, b) => {
        const key = sortConfig.key as keyof Coin;
        if (a[key] > b[key]) return sortConfig.direction === "asc" ? -1 : 1;
        if (a[key] < b[key]) return sortConfig.direction === "asc" ? 1 : -1;
        return 0;
      });
    }
    return data;
  }, [originalCoins, debouncedSearchTerm, sortConfig]);

  // الدوال
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const handleSort = useCallback((key: keyof Coin) => {
    setSortConfig((prev) => {
      if (prev.key === key) {
        if (prev.direction === "asc") return { key, direction: "desc" };
        if (prev.direction === "desc") return { key, direction: null };
      }
      return { key, direction: "asc" };
    });
    setCurrentPage(1);
  }, []);

  const handlePageChange = useCallback(
    (page: number) => setCurrentPage(page),
    [],
  );

  // حسابات الباجينيشن
  const currentTableData = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return processedCoins.slice(startIndex, startIndex + itemsPerPage);
  }, [currentPage, processedCoins]);

  const totalPages = useMemo(
    () => Math.ceil(processedCoins.length / itemsPerPage),
    [processedCoins.length],
  );

  const visiblePages = useMemo(() => {
    if (totalPages <= 7)
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    if (currentPage <= 4) return [1, 2, 3, 4, 5, "...", totalPages];
    if (currentPage >= totalPages - 3)
      return [
        1,
        "...",
        totalPages - 4,
        totalPages - 3,
        totalPages - 2,
        totalPages - 1,
        totalPages,
      ];
    return [
      1,
      "...",
      currentPage - 1,
      currentPage,
      currentPage + 1,
      "...",
      totalPages,
    ];
  }, [currentPage, totalPages]);

  return (
    <div className="flex flex-col gap-4">
      <MarketHeader
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
        searchTerm={searchTerm}
        handleSearch={handleSearch}
      />

      <div>
        <h3 className="text-lg font-bold">
          Top Tokens by Market Capitalization
        </h3>
        <p className="text-muted-foreground/70 text-xs mt-1">
          Get a comprehensive snapshot of all cryptocurrencies available on
          Binance. This page displays the latest prices, 24-hour trading volume,
          price changes, and market capitalizations for all cryptocurrencies on
          Binance. Users can quickly access key information about these digital
          assets and access the trade page from here.
        </p>
      </div>

      <CoinTable
        data={currentTableData}
        sortConfig={sortConfig}
        handleSort={handleSort}
        loading={loading}
      />

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        visiblePages={visiblePages}
        handlePageChange={handlePageChange}
      />
    </div>
  );
}
