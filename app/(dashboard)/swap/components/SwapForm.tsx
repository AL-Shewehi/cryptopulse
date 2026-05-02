import { ArrowUpDown } from "lucide-react";
import React, { useMemo, useState } from "react";

export default function SwapForm({
  type: transactionType,
  setTransactionType,
}: {
  type: "instant" | "limit";
  setTransactionType: (transactionType: "instant" | "limit") => void;
}) {
  const [amount, setAmount] = useState("");
  const [fromToken, setFromToken] = useState("BTC");
  const [toToken, setToToken] = useState("USDT");
  const [limitAmount, setLimitAmount] = useState("");

  const transferAmount = useMemo(() => {
    // Mock conversion logic for demonstration
    if (amount && fromToken === "BTC" && toToken === "USDT") {
      return (parseFloat(amount) * 2254).toFixed(2);
    } else if (amount && fromToken === "ETH" && toToken === "USDT") {
      return (parseFloat(amount) * 1800).toFixed(2);
    } else if (amount && fromToken === "USDT" && toToken === "BTC") {
      return (parseFloat(amount) / 2254).toFixed(6);
    } else if (amount && fromToken === "USDT" && toToken === "ETH") {
      return (parseFloat(amount) / 1800).toFixed(6);
    } else {
      return "";
    }
  }, [amount, fromToken, toToken]);

  const handleSwap = () => {
    setFromToken(toToken);
    setToToken(fromToken);
    setAmount(transferAmount);
  };

  return (
    <div className="w-full h-full bg-card/50 backdrop-blur-md border border-border p-6 rounded-2xl shadow-sm">
      <div className="flex items-center gap-4 mb-6">
        <button
          className={`flex-1 text-2xl py-2 ${transactionType === "instant" ? "text-primary bg-primary/10" : "text-muted-foreground"}`}
          onClick={() => setTransactionType("instant")}
        >
          Instant
        </button>
        <button
          className={`flex-1 text-2xl py-2 ${transactionType === "limit" ? "text-primary bg-primary/10" : "text-muted-foreground"}`}
          onClick={() => setTransactionType("limit")}
        >
          Limit
        </button>
      </div>

      <div className="flex flex-col gap-4 relative">
        <div className="flex flex-col gap-4 relative ">
          <div className="px-4 py-6 border border-border rounded-lg ">
            <div className="flex items-center justify-between gap-2 text-sm text-muted-foreground mb-1">
              <p>From</p>
              <p>Available: 1.2345 BTC</p>
            </div>
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center">
                <select
                  value={fromToken}
                  onChange={(e) => setFromToken(e.target.value)}
                  className="bg-transparent border-none outline-none px-2 font-medium text-foreground"
                >
                  <option
                    disabled={toToken === "BTC"}
                    className="bg-card"
                    value="BTC"
                  >
                    BTC
                  </option>
                  <option
                    disabled={toToken === "ETH"}
                    className="bg-card"
                    value="ETH"
                  >
                    ETH
                  </option>
                  <option
                    disabled={toToken === "USDT"}
                    className="bg-card"
                    value="USDT"
                  >
                    USDT
                  </option>
                </select>
                <input
                  type="text"
                  placeholder="0.00 - Max: 1.2345"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="bg-transparent border-none outline-none w-full px-2 font-medium text-foreground"
                />
              </div>
              <button
                className="text-primary hover:text-primary/80"
                onClick={() => setAmount("1.2345")}
              >
                MAX
              </button>
            </div>
          </div>
          <div className="px-4 py-6 border border-border rounded-lg ">
            <div className="flex items-center justify-between gap-2 text-sm text-muted-foreground mb-1">
              <p>To</p>
              <p>Available: 2254 USDT</p>
            </div>
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center">
                <select
                  value={toToken}
                  onChange={(e) => setToToken(e.target.value)}
                  className="bg-transparent border-none outline-none px-2 font-medium text-foreground"
                >
                  <option
                    disabled={fromToken === "BTC"}
                    className="bg-card"
                    value="BTC"
                  >
                    BTC
                  </option>
                  <option
                    disabled={fromToken === "ETH"}
                    className="bg-card"
                    value="ETH"
                  >
                    ETH
                  </option>
                  <option
                    disabled={fromToken === "USDT"}
                    className="bg-card"
                    value="USDT"
                  >
                    USDT
                  </option>
                </select>
                <input
                  type="text"
                  placeholder="0.00 - Max: 2254 USDT"
                  value={transferAmount}
                  readOnly
                  className="bg-transparent border-none outline-none w-full px-2 font-medium text-foreground"
                />
              </div>
            </div>
          </div>
          <button
            onClick={handleSwap}
            className="absolute top-1/2 left-1/2 -translate-1/2 bg-primary text-black rounded-full p-2 shadow-lg hover:bg-primary/90"
          >
            <ArrowUpDown />
          </button>
        </div>

        {transactionType === "limit" && (
          <div className="px-4 py-6 border border-border rounded-lg ">
            <div className="flex items-center justify-between gap-2 text-sm text-muted-foreground mb-1">
              <p>When {fromToken} is worth </p>
              <p>Expired in 30D</p>
            </div>
            <div className="flex items-center justify-between gap-2">
              <p>{toToken}</p>
              <div>
                <input
                  type="text"
                  placeholder="0.00"
                  value={limitAmount}
                  onChange={(e) => setLimitAmount(e.target.value)}
                  className="bg-transparent border-none outline-none w-full px-2 font-medium text-foreground text-right my-2"
                />
                <p className="text-xs text-muted-foreground text-right">
                  Market Price {Number(transferAmount).toFixed(2)}
                </p>
              </div>
            </div>
            <div className="flex items-center justify-end flex-wrap gap-4 mt-4">
              {["Market price", "-10%", "-5%", "-1%"].map((option, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-lg ${index === 0 ? "bg-primary text-black" : "bg-gray-800 text-muted-foreground"}`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
      <button className="w-full mt-6 py-3 bg-primary text-black font-medium rounded-lg hover:bg-primary/90">
        Swap
      </button>
    </div>
  );
}
