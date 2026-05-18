'use client'
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Button } from "@heroui/react"; // HeroUI Button

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Link from "next/link";


export default function Banner() {
  const slidesData = [
    {
      id: 1,
      title: "Bring Your Billion Dollar Idea to Life",
      subtitle: "The ultimate vault for innovators and startups to share, validate, and grow concepts collectively.",
      bg: "bg-gradient-to-r from-blue-900 to-indigo-900"
    },
    {
      id: 2,
      title: "Get Real Feedback From The Community",
      subtitle: "Stop guessing if your idea works. Let expert developers and entrepreneurs critique your startup concepts.",
      bg: "bg-gradient-to-r from-purple-900 to-indigo-900"
    },
    {
      id: 3,
      title: "Discover Next-Gen Innovations Today",
      subtitle: "Explore fresh, trending tech, AI, and healthcare project models posted by visionary creators.",
      bg: "bg-gradient-to-r from-slate-900 to-blue-900"
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
              
              <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight max-w-3xl mb-4">
                {slide.title}
              </h1>
              <p className="text-base md:text-lg text-slate-300 max-w-xl mb-8">
                {slide.subtitle}
              </p>
              
             
             <Link href="/ideas" >
              <Button
                size="lg"
                className="font-semibold text-white px-8 "
              >
                Explore Ideas
              </Button>
             </Link>
            </div>
          </SwiperSlide>

        ))
        
        }


      </Swiper>

      
    </div>
  );
}