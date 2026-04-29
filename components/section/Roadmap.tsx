"use client";
import React from "react";
import TypewriterText from "../ui/TypewriterText";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Rocket } from "lucide-react";

const roadmapData = [
  {
    year: "2022",
    title: "Project Plan",
    items: ["Website Design", "Website Live", "Smart Contract Deployment"],
  },
  {
    year: "2023",
    title: "Presale",
    items: ["Contract Testing", "Project Prototype", "Metaverse Demo (Alpha)"],
  },
  {
    year: "2024",
    title: "Pre-Listing",
    items: ["Partnerships", "Marketing To Reach", "Metaverse Development"],
  },
  {
    year: "2025",
    title: "Token Launch",
    items: [
      "NFT MarketPlace",
      "NFT Launch",
      "Exchanges Listing",
      "Dex Listing",
    ],
  },
  {
    year: "2026",
    title: "Alpha Test",
    items: ["Website Design", "Website Live", "Smart Contract Deployment"],
  },
];

function Roadmap() {
  return (
    <section
      id="roadmap"
      className="relative w-full py-24 bg-background overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-16 md:mb-20" data-cursor="text">
          <h2 className="text-primary font-bold tracking-wider text-sm md:text-base uppercase mb-2">
            The Journey
          </h2>

          <TypewriterText
            text="Our Roadmap"
            className="text-5xl md:text-6xl text-foreground font-heading drop-shadow-[0_0_15px_rgba(0,240,255,0.2)]"
          />
        </div>

        {/* Timeline */}
        <VerticalTimeline lineColor="rgba(0, 240, 255, 0.2)">
          {roadmapData.map((step, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "rgba(255, 255, 255, 0.03)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(0, 240, 255, 0.2)",
                borderRadius: "16px",
                boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                color: "#fff",
              }}
              // السهم اللي بيطلع من الكارت
              contentArrowStyle={{
                borderRight: "7px solid  rgba(0, 240, 255, 0.2)",
              }}
              // التاريخ اللي بيتكتب بره الكارت
              date={step.year}
              dateClassName="text-primary font-bold text-xl md:text-2xl tracking-widest px-4"
              // ستايل الدائرة اللي على الخط
              iconStyle={{
                background: "#0a0f1c",
                color: "var(--tw-colors-primary)",
                boxShadow: "0 0 15px rgba(0, 240, 255, 0.5), 0 0 0 4px #0a0f1c",
              }}
              icon={<Rocket />}
            >
              <h3 className="text-2xl font-bold font-heading mb-4 text-foreground">
                {step.title}
              </h3>
              <ul className="space-y-2">
                {step.items.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-center text-muted-foreground text-sm md:text-base"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mr-3 shadow-[0_0_5px_var(--tw-colors-primary)]"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
}

export default Roadmap;
