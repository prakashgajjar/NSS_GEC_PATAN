"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

const slides = [
  { image: "/hero/slide1.png" },
  { image: "/hero/slide2.png" },
  { image: "/hero/slide3.png" },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="
      relative 
      min-h-[18vh] sm:min-h-[48vh] md:h-[62vh]
      overflow-hidden
    ">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-[1200ms] ease-in-out ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <Image
            src={slide.image}
            alt={`Hero slide ${index + 1}`}
            fill
            priority={index === 0}
            className="
              w-full h-full
              object-contain md:object-cover
            "
          />

          {/* subtle overlay */}
          <div className="absolute inset-0 bg-black/10" />
        </div>
      ))}

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2 rounded-full transition-all ${
              i === current
                ? "w-8 bg-orange-400"
                : "w-2 bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
