"use client";
import Image from "next/image";
import React from "react";
import { NeoButton } from "../ui/NeoButton";
import NeonNetwork from "../ui/NeonNetwork";
import TypewriterText from "../ui/TypewriterText";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="w-full flex justify-between items-center min-h-screen overflow-hidden max-w-7xl mx-auto px-4 md:px-8 ">
      <NeonNetwork />

      <div className="flex flex-col gap-6 max-w-2xl">
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-primary font-bold text-lg uppercase tracking-wider"
        >
          CRYPTO REDEFINITION
        </motion.p>
        <TypewriterText
          text="The Beat of Meme Crypto - Join the Pulse."
          className="text-5xl sm:text-6xl font-bold font-heading drop-shadow-[0_0_15px_rgba(0,240,255,0.2)]"
          speed={0.05}
        />
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-muted-foreground  text-lg "
        >
          Discover CryptPulse, the community-driven token redefining meme
          economics. Ride the wave of the next crypto revolution with speed and
          transparency.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 mt-4"
        >
          <NeoButton>EXPLORE PULSE</NeoButton>
          <NeoButton>COMMUNITY HUB</NeoButton>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="hidden lg:block"
      >
        <Image
          src="/btc.png"
          alt="CryptoPulse Token"
          width={600}
          height={600}
          priority
          className="w-64 md:w-96 lg:w-125 h-auto object-contain"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
