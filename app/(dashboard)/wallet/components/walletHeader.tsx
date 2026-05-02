import React from "react";
import BtcLogo from "@/public/coins/btc-logo.svg";
import EthLogo from "@/public/coins/eth-logo.svg";
import DashLogo from "@/public/coins/dash-logo.svg";
import LtcLogo from "@/public/coins/ltc-logo.svg";
import UsdtLogo from "@/public/coins/usdt-logo.svg";
import Image from "next/image";

const coins = [
  {
    name: "USDT",
    logo: UsdtLogo,
  },
  {
    name: "BTC",
    logo: BtcLogo,
  },
  {
    name: "ETH",
    logo: EthLogo,
  },
  {
    name: "DASH",
    logo: DashLogo,
  },
  {
    name: "LTC",
    logo: LtcLogo,
  },
];

export default function walletHeader({
  activeCoin,
  setActiveCoin,
  coinColor,
}: {
  activeCoin: string;
  setActiveCoin: React.Dispatch<React.SetStateAction<string>>;
  coinColor: string;
}) {
  return (
    <div className="flex gap-4 mb-6 overflow-x-auto">
      {coins.map((coin) => (
        <button
          key={coin.name}
          onClick={() => setActiveCoin(coin.name)}
          className={`px-4 py-2 rounded-lg flex items-center gap-2 ${
            activeCoin === coin.name
              ? `bg-[${coinColor}] text-white`
              : "bg-secondary text-muted-foreground"
          }`}
        >
          <Image
            src={coin.logo.src}
            alt={coin.name}
            width={20}
            height={20}
            className="w-6 h-6 object-contain bg-white rounded-full p-0.5"
            priority
          />
          {coin.name}
        </button>
      ))}
    </div>
  );
}
