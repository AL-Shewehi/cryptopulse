"use client";
import React from "react";
import { motion } from "framer-motion";

interface TypewriterTextProps {
  text: string;  
  className?: string;  
  speed?: number;       
}

const TypewriterText = ({ text, className = "", speed = 0.08 }: TypewriterTextProps) => {
  return (
    <motion.span
      className={`inline-block ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={{
        hidden: { opacity: 1 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: speed,
          },
        },
      }}
    >
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          className="inline-block" // Add this line to make sure each character is treated as a block for animation
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.2 },
            },
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.span>
  );
};

export default TypewriterText;