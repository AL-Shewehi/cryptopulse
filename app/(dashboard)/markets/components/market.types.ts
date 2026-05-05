export type Coin = {
  id: number;
  name: string;
  symbol: string;
  price: number;
  change: number;
  volume: number;
  marketCap: number;
  image: string;
};

export type BinanceTicker = {
  symbol: string;
  lastPrice: string;
  priceChangePercent: string;
  volume: string;
  quoteVolume: string;
};

export const formatPrice = (num: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: num < 1 ? 4 : 2,
    maximumFractionDigits: num < 1 ? 6 : 2,
  }).format(num);
};

export const formatCompact = (num: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    notation: "compact",
    maximumFractionDigits: 2,
  }).format(num);
};