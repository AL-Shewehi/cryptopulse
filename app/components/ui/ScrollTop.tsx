"use client";
import { ArrowBigUp } from "lucide-react";
import React, { useEffect, useState } from "react";

const ScrollTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`fixed bottom-10 right-5 border-4 border-primary rounded-full p-2 z-50 transition-all duration-300 ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <button
        className="flex items-center justify-center text-primary hover:text-white transition-colors"
        onClick={scrollToTop}
        aria-label="Scroll to Top"
      >
        <ArrowBigUp />
      </button>
    </div>
  );
};

export default ScrollTop;
