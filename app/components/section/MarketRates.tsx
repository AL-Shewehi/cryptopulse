"use client";
import React, { useState, useEffect } from "react";
import TypewriterText from "../ui/TypewriterText";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

// 1. فصلنا السعر كرقم (Number) عشان نقدر نعمل عليه عمليات حسابية
const initialRates = [
  {
    pair: "BTC → USDT",
    baseCoin: "1 BTC",
    price: 64230.5,
    currency: "USDT",
    icon: "₮",
    bgColor: "bg-teal-500",
  },
  {
    pair: "BTC → EUR",
    baseCoin: "1 BTC",
    price: 59100.2,
    currency: "EUR",
    icon: "€",
    bgColor: "bg-blue-600",
  },
  {
    pair: "BTC → GBP",
    baseCoin: "1 BTC",
    price: 50400.8,
    currency: "GBP",
    icon: "£",
    bgColor: "bg-purple-500",
  },
  {
    pair: "BTC → AED",
    baseCoin: "1 BTC",
    price: 235800.0,
    currency: "AED",
    icon: "د.إ",
    bgColor: "bg-green-600",
  },
  {
    pair: "ETH → USDT",
    baseCoin: "1 ETH",
    price: 3450.75,
    currency: "USDT",
    icon: "₮",
    bgColor: "bg-teal-500",
  },
  {
    pair: "BNB → USDT",
    baseCoin: "1 BNB",
    price: 590.2,
    currency: "USDT",
    icon: "₮",
    bgColor: "bg-teal-500",
  },
  {
    pair: "SOL → USDT",
    baseCoin: "1 SOL",
    price: 145.3,
    currency: "USDT",
    icon: "₮",
    bgColor: "bg-teal-500",
  },
  {
    pair: "PULSE → USDT",
    baseCoin: "1 PULSE",
    price: 0.05,
    currency: "USDT",
    icon: "⚡",
    bgColor: "bg-primary",
  },
];

function MarketRates() {
  const [rates, setRates] = useState(initialRates);

  useEffect(() => {
    const interval = setInterval(() => {
      setRates((prevRates) =>
        prevRates.map((rate) => {
          const fluctuation = 1 + (Math.random() - 0.5) * 0.001;
          return {
            ...rate,
            price: rate.price * fluctuation,
          };
        }),
      );
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="market-rates"
      className="relative w-full py-24 bg-background overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-16 md:mb-20" data-cursor="text">
          <h2 className="text-primary font-bold tracking-wider text-sm md:text-base uppercase mb-2">
            The Market Rates
          </h2>

          <TypewriterText
            text="Live Conversions"
            className="text-5xl md:text-6xl text-foreground font-heading drop-shadow-[0_0_15px_rgba(0,240,255,0.2)]"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {rates.map((rate, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Tilt
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                glareEnable={true}
                glareMaxOpacity={0.1}
                className="p-6 lg:p-8 rounded-2xl bg-card/40 border border-white/5 hover:border-primary/30 transition-colors flex flex-col 
                justify-between h-full cursor-pointer"
              >
                <div className="flex items-center justify-between">
                  <div className="flex flex-col gap-1">
                    <h3 className="text-lg font-bold text-foreground font-heading tracking-wider">
                      {rate.pair}
                    </h3>
                    <p className="text-sm font-medium text-muted-foreground font-mono">
                      {rate.baseCoin} ={" "}
                      <span className="text-foreground transition-all duration-300">
                        {rate.price.toLocaleString("en-US", {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })}
                      </span>{" "}
                      {rate.currency}
                    </p>
                  </div>

                  <span
                    className={`text-2xl font-bold ${rate.bgColor} text-foreground flex items-center justify-center w-12 h-12 rounded-full`}
                  >
                    {rate.icon}
                  </span>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MarketRates;
