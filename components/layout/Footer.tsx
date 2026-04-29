"use client";
import React from "react";
import { FaTwitter, FaTelegramPlane, FaDiscord } from "react-icons/fa";
import TypewriterText from "../ui/TypewriterText";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="relative w-full bg-[#050810] border-t border-white/5 pt-16 pb-8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* العمود الأول: البراند والسوشيال */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-4"
          >
            <h2 className="text-3xl font-bold font-heading text-white tracking-wider">
              Crypt<span className="text-primary">Pulse</span>
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed mt-2">
              The next-generation decentralized ecosystem bridging traditional
              finance and Web3 with lightning-fast, secure transactions.
            </p>
            <div className="flex items-center gap-3 mt-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-muted-foreground hover:bg-primary/20 hover:text-primary hover:-translate-y-1 transition-all duration-300"
                aria-label="Twitter"
              >
                <FaTwitter size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-muted-foreground hover:bg-primary/20 hover:text-primary hover:-translate-y-1 transition-all duration-300"
                aria-label="Telegram"
              >
                <FaTelegramPlane size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-muted-foreground hover:bg-primary/20 hover:text-primary hover:-translate-y-1 transition-all duration-300"
                aria-label="Discord"
              >
                <FaDiscord size={18} />
              </a>
            </div>
          </motion.div>

          {/* العمود الثاني: الروابط السريعة */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            <TypewriterText
              text="Quick Links"
              className="text-lg font-heading text-white"
            />
            <ul className="space-y-3">
              {["Home", "Presale", "Tokenomics", "Roadmap", "Team"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase().replace(/ /g, "-")}`}
                      className="text-sm text-muted-foreground hover:text-primary hover:pl-2 transition-all duration-300 inline-block"
                      aria-label={`Go to ${item}`}
                    >
                      {item}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </motion.div>

          {/* العمود الثالث: الموارد (Resources) */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            <TypewriterText
              text="Resources"
              className="text-lg font-heading text-white"
            />
            <ul className="space-y-3">
              {[
                "Whitepaper v1.2",
                "Smart Contract Audit",
                "Privacy Policy",
                "Terms of Service",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-primary hover:pl-2 transition-all duration-300 inline-block"
                    aria-label={`Download ${item}`}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* العمود الرابع: النشرة البريدية */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            <TypewriterText
              text="Stay Updated"
              className="text-lg font-heading text-white"
            />
            <p className="text-sm text-muted-foreground">
              Don&apos;t miss out on our latest announcements and presale
              stages.
            </p>
            <div className="flex mt-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-white/5 border border-white/10 rounded-l-md px-4 py-2.5 text-sm text-white focus:outline-none focus:border-primary/50 w-full transition-colors"
              />
              <button
                className="bg-primary text-black font-bold px-5 py-2.5 rounded-r-md hover:brightness-110 transition-all"
                aria-label="Subscribe to newsletter"
              >
                Join
              </button>
            </div>
          </motion.div>
        </div>

        {/* الخط الفاصل */}
        <div className="w-full h-px bg-white/10 mb-8"></div>

        {/* حقوق الملكية */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6 text-center lg:text-left">
          <p
            className="text-[11px] text-muted-foreground/60 leading-relaxed max-w-3xl"
            aria-label="Risk disclaimer"
          >
            <span className="font-bold text-muted-foreground">
              Risk Disclaimer:
            </span>{" "}
            Cryptocurrency investments carry a high level of risk and may not be
            suitable for all investors. The value of $PULSE can fluctuate
            widely. Please do your own research (DYOR) and do not invest money
            you cannot afford to lose. This website does not constitute
            financial advice.
          </p>
          <p
            className="text-xs text-muted-foreground font-medium whitespace-nowrap"
            aria-label="Copyright information"
          >
            © {new Date().getFullYear()} CryptPulse. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
