"use client";
import React from "react";
import { motion } from "framer-motion";
import TypewriterText from "../ui/TypewriterText";
import Image from "next/image";

const HowItWorks = () => {
  const steps = [
    {
      id: "01",
      title: "Sign Up & Register",
      description:
        "Create your account in seconds. A secure and seamless onboarding experience to get you ready for the CryptPulse ecosystem.",
      img: "/stats-1.png",
    },
    {
      id: "02",
      title: "Connect Your Wallet",
      description:
        "Link your Web3 wallet (MetaMask, TrustWallet) safely. We support major networks for lightning-fast transactions.",
      img: "/stats-2.png",
    },
    {
      id: "03",
      title: "Secure Your Pulse",
      description:
        "Swap your crypto for $PULSE tokens during our early stages. Hold tight as we prepare for the ultimate liftoff.",
      img: "/stats-3.png",
    },
  ];

  return (
    <section className="relative w-full py-24 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-16 md:mb-20" data-cursor="text">
          <h2 className="text-primary font-bold tracking-wider text-sm md:text-base uppercase mb-2">
            It&apos;s So Simple
          </h2>

          <TypewriterText
            text="How It Works"
            className="text-5xl md:text-6xl text-foreground font-heading drop-shadow-[0_0_15px_rgba(0,240,255,0.2)]"
          />
        </div>

        <div className="flex flex-col gap-24 lg:gap-32">
          {steps.map((step, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={step.id}
                className={`flex flex-col ${
                  isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                } items-center gap-12 lg:gap-24`}
              >
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className="flex-1 w-full text-center lg:text-left relative"
                  data-cursor="text"
                >
                  <h3 className="mb-4">
                    <TypewriterText
                      text={step.title}
                      className=" text-2xl md:text-4xl text-foreground font-heading"
                      speed={0.1}
                    />
                  </h3>
                  <p className="text-muted-foreground text-md md:text-lg leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5 }}
                  className="flex-1 w-full flex justify-center items-center"
                >
                  <div className="relative rounded-full flex justify-center items-center ">
                    <div className="absolute w-70 md:w-100 h-70 md:h-100 bg-primary/20 rounded-full z-1 blur-3xl" />
                    <Image
                      src={step.img}
                      alt={step.title}
                      width={500}
                      height={500}
                      className="w-full h-full object-contain z-2"
                    />
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
