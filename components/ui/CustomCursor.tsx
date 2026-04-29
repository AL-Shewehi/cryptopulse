"use client";
import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  // 1. التقاط إحداثيات الماوس المباشرة بدون أي Re-render
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // 2. ضبط إعدادات الفيزياء للـ Spring (تقدر تعدلها حسب ما تحب)
  const springConfig = { damping: 25, stiffness: 250, mass: 0.5 };

  // الدائرة هتتبع الماوس بس بفيزياء مرنة
  const ringX = useSpring(mouseX, springConfig);
  const ringY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      // بنحدث مكان الماوس المباشر
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // لو العنصر اللي فوقه الماوس هو رابط أو زرار أو أي عنصر محدد بـ data-cursor="hover"، نخلي الدائرة تكبر وتغير لونها
      const isHoverable = target.closest("a, button, [data-cursor='hover']");
      setIsDisabled(!!target.closest("[data-cursor='disabled']"));
      setIsHovering(!!isHoverable);
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [mouseX, mouseY]);

  return (
    <>
      {/* الحلقة الخارجية (بتتحرك بفيزياء مرنة) */}
      <motion.div
        className={`fixed top-0 left-0 w-10 h-10 border-[1.5px] border-primary ${isDisabled ? "border-red-500" : ""} rounded-full pointer-events-none z-9999 
        pointer-coarse:hidden `}// نخفيها على الأجهزة اللمسية
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%", // عشان يتسنتر على الماوس بالظبط
          translateY: "-50%",
        }}
        animate={{
          scale: isHovering ? 1.5 : 1,
          backgroundColor: 
          isDisabled ? "rgba(255, 0, 0, 0.5)" :
          isHovering
            ? "rgba(57, 255, 20, 0.2)"
            : "rgba(0,0,0,0)",
        }}
        transition={{ duration: 0.15 }}
      />

      {/* النقطة الداخلية (بتتحرك فوراً مع الماوس) */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-primary rounded-full pointer-events-none z-10000 pointer-coarse:hidden"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          opacity: isHovering || isDisabled ? 0 : 1,
          scale: isHovering || isDisabled ? 0 : 1,
        }}
        transition={{ duration: 0.15 }}
      />
    </>
  );
};

export default CustomCursor;
