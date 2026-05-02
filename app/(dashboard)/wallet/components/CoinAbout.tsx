"use client";
import React from "react";
import Image from "next/image";

const coinAboutData: Record<
  string,
  { fullName: string; description: string; logoUrl: string }
> = {
  USDT: {
    fullName: "Tether",
    logoUrl: "/coins/usdt-logo.svg",
    description:
      "Tether (USDT) is a stablecoin, a type of cryptocurrency which aims to keep cryptocurrency valuations stable. It is pegged to the US dollar, meaning 1 USDT is intended to always be equal to 1 USD. Tether is often used by investors who want to avoid the extreme volatility of other cryptocurrencies.",
  },
  BTC: {
    fullName: "Bitcoin",
    logoUrl: "/coins/btc-logo.svg",
    description:
      "Bitcoin is a decentralized digital currency, without a central bank or single administrator, that can be sent from user to user on the peer-to-peer bitcoin network without the need for intermediaries. It was created in 2009 by an unknown person or group of people using the name Satoshi Nakamoto.",
  },
  ETH: {
    fullName: "Ethereum",
    logoUrl: "/coins/eth-logo.svg",
    description:
      "Ethereum is a decentralized, open-source blockchain with smart contract functionality. Ether (ETH) is the native cryptocurrency of the platform. It is the second-largest cryptocurrency by market capitalization, after Bitcoin. Ethereum is the most actively used blockchain.",
  },
  DASH: {
    fullName: "Dash",
    logoUrl: "/coins/dash-logo.svg",
    description:
      "Dash is an open-source cryptocurrency. It is an altcoin that was forked from the Bitcoin protocol. It is also a decentralized autonomous organization (DAO) run by a subset of its users, which are called 'masternodes'. The currency was launched in 2014 by Evan Duffield.",
  },
  LTC: {
    fullName: "Litecoin",
    logoUrl: "/coins/ltc-logo.svg",
    description:
      "Litecoin is a peer-to-peer cryptocurrency and open-source software project released under the MIT/X11 license. Litecoin was an early bitcoin spinoff or altcoin, starting in October 2011. In technical details, Litecoin is nearly identical to Bitcoin.",
  },
};

const currentPrices: Record<string, number> = {
  USDT: 1.0,
  BTC: 75905.7,
  ETH: 3100.5,
  DASH: 28.4,
  LTC: 82.15,
};

export default function CoinAbout({ activeCoin }: { activeCoin: string }) {
  const data = coinAboutData[activeCoin] || coinAboutData["USDT"];
  const price = currentPrices[activeCoin] || currentPrices["USDT"];

  const formattedPrice = price.toLocaleString("en-US", {
    minimumFractionDigits: price < 10 ? 4 : 2,
    maximumFractionDigits: price < 10 ? 4 : 2,
  });

  return (
    <div className="bg-card/50 backdrop-blur-md border border-border rounded-2xl p-6 h-full flex flex-col shadow-sm">
      <h2 className="text-lg font-bold mb-6">About</h2>

      <div className="flex items-center gap-4 mb-6">
        <div className="w-14 h-14 bg-background border border-border rounded-full flex items-center justify-center p-2 shrink-0">
          <Image
            src={data.logoUrl}
            alt={data.fullName}
            width={32}
            height={32}
            className="w-full h-full object-contain"
          />
        </div>

        <div>
          <h3 className="text-xl font-bold text-foreground">{data.fullName}</h3>
          <p className="text-sm font-medium text-muted-foreground mt-1">
            1 {activeCoin} = {formattedPrice} USD
          </p>
        </div>
      </div>

      <div className="flex-1">
        <p className="text-sm text-muted-foreground leading-relaxed">
          {data.description}
        </p>
        <button className="text-primary text-sm font-medium mt-3 hover:underline">
          read more
        </button>
      </div>
    </div>
  );
}
