"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChartBar, Globe, User } from "lucide-react";
import TypewriterText from "../ui/TypewriterText";

const PresaleBanner = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 12,
    hours: 10,
    minutes: 45,
    seconds: 30,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0)
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0)
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        if (prev.days > 0)
          return {
            ...prev,
            days: prev.days - 1,
            hours: 23,
            minutes: 59,
            seconds: 59,
          };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (time: number) => time.toString().padStart(2, "0");

  return (
    <section className="relative w-full z-20 mb-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-16 md:mb-20" data-cursor="text">
          <h2 className="text-primary font-bold tracking-wider text-sm md:text-base uppercase mb-2">
            The Minds Behind
          </h2>

          <TypewriterText
            text="Presale"
            className="text-5xl md:text-6xl text-foreground font-heading drop-shadow-[0_0_15px_rgba(0,240,255,0.2)]"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-card border border-border rounded-3xl p-8 md:p-16 shadow-[0_0_40px_rgba(0,240,255,0.05)] 
         flex flex-col lg:flex-row items-center justify-between gap-12 backdrop-blur-2xl"
        >
          <div className="absolute top-[70%] right-1/2 translate-x-1/2 w-80 sm:w-150 h-50 bg-primary/10  blur-3xl -z-10 pointer-events-none"></div>

          {/* الجزء الشمال: العداد التنازلي */}
          <div
            className="flex-1 w-full text-center lg:text-left"
            data-cursor="text"
          >
            <h3 className="text-primary font-bold tracking-wider text-sm uppercase mb-6 flex items-center justify-center lg:justify-start gap-2">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              Phase 1 Ends In
            </h3>
            <div className="flex items-center justify-center lg:justify-start gap-4 md:gap-8">
              {[
                { label: "Days", value: timeLeft.days },
                { label: "Hours", value: timeLeft.hours },
                { label: "Mins", value: timeLeft.minutes },
                { label: "Secs", value: timeLeft.seconds },
              ].map((item, index) => (
                <div key={index} className="flex flex-col items-center">
                  <span className="text-4xl md:text-6xl font-heading text-foreground mb-1 drop-shadow-[0_0_15px_rgba(0,240,255,0.3)]">
                    {formatTime(item.value)}
                  </span>
                  <span className="text-muted-foreground text-xs uppercase tracking-widest font-semibold">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden lg:block w-px h-32 bg-border"></div>

          <div className="flex-1 w-full flex flex-col justify-center">
            <div className="mb-8 text-center lg:text-left" data-cursor="text">
              <h3 className="text-3xl font-heading text-foreground mb-3">
                Secure Your <span className="text-primary">Pulse</span>
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Be part of the foundational phase. Grab your $PULSE tokens now
                before the price increases in Phase 2. The revolution starts
                with our early adopters.
              </p>
            </div>

            <div className="w-full">
              <div className="flex justify-between items-end mb-3">
                <span className="text-sm text-foreground font-medium uppercase tracking-wide">
                  Tokens Sold
                </span>
                <span className="text-lg text-primary font-heading tracking-wider">
                  65%
                </span>
              </div>

              <div className="w-full h-3 bg-background rounded-full overflow-hidden border border-border">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "65%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
                  className="h-full bg-primary relative"
                  style={{ boxShadow: "0 0 15px var(--primary)" }}
                >
                  <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.2)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.2)_50%,rgba(255,255,255,0.2)_75%,transparent_75%,transparent)] bg-[length:1rem_1rem]"></div>
                </motion.div>
              </div>

              <div className="flex justify-between items-center mt-3 text-xs text-muted-foreground font-medium">
                <span>Soft Cap: $1M</span>
                <span>Hard Cap: $5M</span>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
          {[
            {
              Icon: ChartBar,
              value: "$40 B",
              label: " Digital Currency Exchanged",
            },
            { Icon: User, value: "20M", label: "Trusted Wallets Investor" },
            { Icon: Globe, value: "200", label: "Countries Supported" },
          ].map((item, index) => (
            <div key={index} className="flex items-center gap-4">
              <div className="w-20 h-20 bg-card/50 rounded-full flex items-center justify-center">
                <item.Icon className="w-10 h-10 text-primary" />
              </div>
              <div>
                <h3 className="text-3xl font-heading text-foreground mb-1 tracking-wider">
                  {item.value}
                </h3>
                <p className="text-muted-foreground tracking-tight">
                  {item.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PresaleBanner;
