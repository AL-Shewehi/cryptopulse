export interface LimitOrder {
  id: string;
  quantity: string;
  from: string;
  to: string;
  convertedTo: string;
  account: string;
  rate: string;
  expiredIn: string;
  maturityTime: string;
  time: string;
}

export interface InstantHistory {
  id: string;
  amount: string;
  currentPrice: string;
  openingPrice: string;
  tpSlPrice: string;
  tradingTime: string;
  pnl: string; // Profits and losses
}