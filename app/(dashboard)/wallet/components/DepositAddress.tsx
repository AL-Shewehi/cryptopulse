"use client";
import React, { useState } from "react";
import { QrCode, Copy, Check } from "lucide-react";
import {QRCodeSVG} from 'qrcode.react';

const mockAddresses: Record<string, string> = {
  USDT: "T9zQeVjHqL1Z2X5n8s7w6y4r3p2o1k0l",
  BTC: "bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh",
  ETH: "0x71C7656EC7ab88b098defB751B7401B5f6d8976F",
  DASH: "Xw4Zp3g1s2v5n8m7y6r4q3p2o1k0l9j8h",
  LTC: "LZy2g1s2v5n8m7y6r4q3p2o1k0l9j8h7w6e",
};

function DepositAddress({
  activeCoin,
  coinColor,
}: {
  activeCoin: string;
  coinColor: string;
}) {
  const [copied, setCopied] = useState(false);

  const address = mockAddresses[activeCoin] || mockAddresses["USDT"];
  const themeColor = coinColor || "bg-primary";

  const handleCopy = () => {
    navigator.clipboard.writeText(address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="bg-card/50 backdrop-blur-md border border-border rounded-2xl p-6 flex flex-col h-full">
      <h2 className="text-lg font-bold mb-2">Wallet Deposit Address</h2>
      <p className="text-sm text-muted-foreground mb-6">
        Submit a deposit using the following address or QR code. Your deposit will be reflected in your account after 6 confirmations.
      </p>
      <div className="flex-1 flex items-center justify-center mb-6">
        <div className="p-4 bg-background rounded-lg">
          <QRCodeSVG value={address} size={160} level="H" includeMargin={true} bgColor="#fff" fgColor={themeColor} />
        </div>
      </div>

      <div className="flex items-center gap-2 bg-background border border-border p-1 rounded-lg">
        <span className="flex-1 text-sm text-muted-foreground px-3 truncate">
          {address}
        </span>
        <button
          onClick={handleCopy}
          className={`px-4 py-2 rounded-md text-white text-sm font-medium transition-all flex items-center gap-2
            ${copied ? "bg-green-600" : themeColor} 
            hover:opacity-90`}
        >
          {copied ? (
            <Check className="w-4 h-4" />
          ) : (
            <Copy className="w-4 h-4" />
          )}
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
    </div>
  );
}

export default DepositAddress;
