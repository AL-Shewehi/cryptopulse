"use client";
import React from "react";
import TypewriterText from "../ui/TypewriterText";
import TeamCard from "../ui/TeamCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ArrowLeft, ArrowRight } from "lucide-react";

const teamMembers = [
  {
    name: "Alex Mercer",
    role: "Founder & CEO",
    image: "https://i.pravatar.cc/300?img=11",
    socials: { twitter: "#", linkedin: "#", facebook: "#" },
  },
  {
    name: "Sarah Jenkins",
    role: "Lead Blockchain Dev",
    image: "https://i.pravatar.cc/300?img=5",
    socials: { twitter: "#", linkedin: "#", facebook: "#" },
  },
  {
    name: "David Chen",
    role: "Head of Marketing",
    image: "https://i.pravatar.cc/300?img=13",
    socials: { twitter: "#", linkedin: "#", facebook: "#" },
  },
  {
    name: "Elena Rodriguez",
    role: "Smart Contract Auditor",
    image: "https://i.pravatar.cc/300?img=9",
    socials: { twitter: "#", linkedin: "#", facebook: "#" },
  },
  {
    name: "Marcus Thorne",
    role: "Community Manager",
    image: "https://i.pravatar.cc/300?img=12",
    socials: { twitter: "#", linkedin: "#", facebook: "#" },
  },
  {
    name: "Yuki Tanaka",
    role: "Lead UI/UX Designer",
    image: "https://i.pravatar.cc/300?img=20",
    socials: { twitter: "#", linkedin: "#", facebook: "#" },
  },
  {
    name: "Omar Tariq",
    role: "Web3 Integration Engineer",
    image: "https://i.pravatar.cc/300?img=14",
    socials: { twitter: "#", linkedin: "#", facebook: "#" },
  },
];

const Team = () => {
  return (
    <section
      id="team"
      className="relative w-full py-24 bg-background overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-16 md:mb-20" data-cursor="text">
          <h2 className="text-primary font-bold tracking-wider text-sm md:text-base uppercase mb-2">
            The Minds Behind
          </h2>

          <TypewriterText
            text="Our Team"
            className="text-5xl md:text-6xl text-foreground font-heading drop-shadow-[0_0_15px_rgba(0,240,255,0.2)]"
          />
        </div>

        <div className="w-full mx-auto px-4 md:px-8">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={30}
            loop={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            breakpoints={{
              320: {
                slidesPerView: 1, // الموبايل
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2, // التابلت
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3, // اللابتوب الصغير
                spaceBetween: 40,
              },
              1280: {
                slidesPerView: 4, // الشاشات الكبيرة
                spaceBetween: 40,
              },
            }}
            className="pb-16 pt-4 px-2 relative"
          >
            <button
              className=" bg-primary p-2 rounded-full text-black text-2xl swiper-button-prev"
              aria-label="Previous Slide"
            >
              <ArrowLeft />
            </button>
            <button
              className=" bg-primary p-2 rounded-full text-black text-2xl swiper-button-next"
              aria-label="Next Slide"
            >
              <ArrowRight />
            </button>
            {teamMembers.map((member, index) => (
              <SwiperSlide key={index} className="h-auto">
                <TeamCard data={member} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Team;
