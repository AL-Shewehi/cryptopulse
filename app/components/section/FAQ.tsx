"use client";
import React, { useState } from "react";
import TypewriterText from "../ui/TypewriterText";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "What is CryptPulse ($PULSE)?",
    answer:
      "CryptPulse is a next-generation decentralized ecosystem designed to bridge the gap between traditional finance and Web3, offering lightning-fast transactions and secure asset management.",
  },
  {
    question: "How can I participate in the Presale?",
    answer:
      "Simply connect your Web3 wallet (MetaMask or Trust Wallet) at the top of the page, ensure you have enough ETH or USDT, and click 'Buy $PULSE' to secure your allocation.",
  },
  {
    question: "Is the smart contract audited?",
    answer:
      "Yes! Our smart contracts have been rigorously audited by top-tier blockchain security firms. The full audit reports are publicly available in our documentation.",
  },
  {
    question: "When is the official token launch?",
    answer:
      "The official public launch on major Decentralized Exchanges (DEXs) is scheduled for Q3 2026, immediately following the conclusion of the final presale stage.",
  },
  {
    question: "What are the benefits of holding $PULSE?",
    answer:
      "Holders gain exclusive access to our premium features, reduced trading fees on our upcoming platform, and voting rights in the CryptPulse DAO.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <section
      id="faq"
      className="relative w-full py-24 bg-background overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        {/* 1. العنوان */}
        <div className="text-center mb-16 md:mb-20" data-cursor="text">
          <h2 className="text-primary font-bold tracking-wider text-sm md:text-base uppercase mb-2">
            Frequently asked questions
          </h2>

          <TypewriterText
            text="Freequently asked questions"
            className="text-5xl md:text-6xl text-foreground font-heading drop-shadow-[0_0_15px_rgba(0,240,255,0.2)]"
          />
        </div>

        <div className=" mx-auto px-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={index} className="mb-4">
                <div
                  className={`cursor-pointer font-bold border border-primary/40 rounded-lg p-5 flex items-center justify-between transition-all duration-300 ${
                    isOpen
                      ? "bg-primary/10 rounded-b-none border-b-0"
                      : "bg-card/40 hover:border-primary/80"
                  }`}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span className={isOpen ? "text-primary" : "text-foreground"}>
                    {faq.question}
                  </span>
                  <ChevronRight
                    className={`transition-transform duration-300 ${
                      isOpen
                        ? "rotate-90 text-primary"
                        : "text-muted-foreground"
                    }`}
                  />
                </div>

                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: isOpen ? "auto" : 0,
                    opacity: isOpen ? 1 : 0,
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden bg-card/20 border border-primary/40 border-t-0 rounded-b-lg backdrop-blur-sm"
                >
                  <p className="p-5 text-muted-foreground text-sm md:text-base leading-relaxed">
                    {faq.answer}
                  </p>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
