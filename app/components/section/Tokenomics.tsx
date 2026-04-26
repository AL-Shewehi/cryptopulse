"use client";
import TypewriterText from "../ui/TypewriterText";
import { ResponsivePie } from "@nivo/pie";
import { motion } from "framer-motion";

const data = [
  { id: "Product Dev", value: 30, color: "#FF3366" },
  { id: "Partner/Investor", value: 18, color: "#5A32FA" },
  { id: "Operational", value: 16, color: "#3232FF" },
  { id: "Legal & Regs", value: 14, color: "#00D287" },
  { id: "Marketing", value: 10, color: "#AEEA00" },
  { id: "Business Dev", value: 10, color: "#FF9100" },
  { id: "Contingency", value: 2, color: "#2979FF" },
];

const Tokenomics = () => {
  const commonTheme = {
    text: {
      fontSize: 14,
      fontFamily: "var(--font-sans)",
      fontWeight: 600,
      letterSpacing: "0.05em",
    },
    tooltip: {
      container: {
        background: "var(--card)",
        color: "var(--foreground)",
        borderRadius: "8px",
      },
    },
  };

  return (
    <section
      id="tokenomics"
      className="relative w-full py-24 bg-background overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-primary/5 rounded-full blur-[150px] -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-16 md:mb-20" data-cursor="text">
          <h2 className="text-primary font-bold tracking-wider text-sm md:text-base uppercase mb-2">
            Pulse Allocation
          </h2>

          <TypewriterText
            text="Tokenomics"
            className="text-5xl md:text-6xl text-foreground font-heading drop-shadow-[0_0_15px_rgba(0,240,255,0.2)]"
          />
        </div>

        {/* =========================================
          1. تصميم الشاشات الكبيرة (الديسك توب)
      ========================================= */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="hidden md:block relative w-full h-125 max-w-4xl mx-auto"
        >
          <ResponsivePie
            data={data}
            margin={{ top: 40, right: 120, bottom: 40, left: 120 }}
            innerRadius={0.65}
            padAngle={4}
            cornerRadius={10}
            activeOuterRadiusOffset={8}
            colors={{ datum: "data.color" }}
            arcLinkLabelsSkipAngle={10}
            arcLinkLabelsTextColor="var(--foreground)"
            arcLinkLabelsThickness={2}
            arcLinkLabelsColor={{ from: "color" }}
            arcLinkLabel={(e) => `${e.id} (${e.value}%)`}
            enableArcLabels={false}
            theme={commonTheme}
          />

          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <span className="text-7xl lg:text-8xl text-foreground font-heading drop-shadow-[0_0_20px_rgba(0,240,255,0.4)]">
              ₿
            </span>
          </div>
        </motion.div>

        {/* =========================================
          2. تصميم الشاشات الصغيرة (الموبايل)
      ========================================= */}
        <div className="block md:hidden relative w-full max-w-sm mx-auto px-4">
          {/* حاوية الرسمة نفسها (صغرنا المارجن وقفلنا الخطوط اللي برة) */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-full h-75"
          >
            <ResponsivePie
              data={data}
              margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
              innerRadius={0.65}
              padAngle={4}
              cornerRadius={8}
              activeOuterRadiusOffset={4}
              colors={{ datum: "data.color" }}
              enableArcLinkLabels={false} // قفلنا الخطوط الخارجية
              enableArcLabels={false}
              theme={commonTheme}
            />
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <span className="text-5xl text-foreground font-heading drop-shadow-[0_0_20px_rgba(0,240,255,0.4)]">
                ₿
              </span>
            </div>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-x-4 gap-y-3 mt-8">
            {data.map((item) => (
              <div key={item.id} className="flex items-center gap-2">
                <span
                  className="w-3 h-3 rounded-full shadow-[0_0_5px_currentColor]"
                  style={{ backgroundColor: item.color, color: item.color }}
                ></span>
                <span className="text-xs font-semibold text-muted-foreground tracking-wide">
                  {item.id} ({item.value}%)
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;
