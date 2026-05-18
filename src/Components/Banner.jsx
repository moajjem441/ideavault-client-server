'use client'


import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Button } from "@heroui/react"; // HeroUI Component
import Link from "next/link";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Banner() {
  const slidesData = [
    {
      id: 1,
      title: "Bring Your Billion Dollar Idea to Life",
      subtitle: "The ultimate vault for innovators and startups to share, validate, and grow concepts collectively.",
      bg: "bg-gradient-to-r from-blue-950 via-indigo-900 to-blue-900"
    },
    {
      id: 2,
      title: "Get Real Feedback From The Community",
      subtitle: "Stop guessing if your idea works. Let expert developers and entrepreneurs critique your startup concepts.",
      bg: "bg-gradient-to-r from-purple-950 via-indigo-900 to-purple-900"
    },
    {
      id: 3,
      title: "Discover Next-Gen Innovations Today",
      subtitle: "Explore fresh, trending tech, AI, and healthcare project models posted by visionary creators.",
      bg: "bg-gradient-to-r from-slate-950 via-blue-900 to-slate-900"
    }
  ];

  return (
    <div className="w-full h-[60vh] min-h-[450px]">
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper h-full"
      >
        {
        slidesData.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className={`w-full h-full flex flex-col justify-center items-center text-center px-4 ${slide.bg} text-white`}>
              
              <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight max-w-3xl mb-4 leading-tight">
                {slide.title}
              </h1>
              
              <p className="text-base md:text-lg text-default-300 max-w-xl mb-8 font-medium">
                {slide.subtitle}
              </p>
              
            
              <Button
                as={Link}
                href="/ideas"
                size="lg"
                color="primary"
                variant="shadow"
                className="font-bold px-8 py-6 rounded-xl text-white bg-gradient-to-r from-blue-500 to-indigo-500 hover:scale-105 transition-transform duration-200"
              >
                Explore Ideas
              </Button>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}