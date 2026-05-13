"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const projects = [
  { id: 1, image: "/images/home-work-1.webp", alt: "Government Project" },
  { id: 2, image: "/images/home-work-2.avif", alt: "Corporate Research" },
  { id: 3, image: "/images/home-work-3.avif", alt: "Market Analysis" },
  { id: 4, image: "/images/home-pg-1.avif", alt: "Survey Project" },
  { id: 5, image: "/images/home-meet-1.avif", alt: "Client Meeting" },
];

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length);
    }, 4000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section ref={sectionRef} className="py-12 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Carousel Container */}
          <div className="relative">
            {/* Images Row */}
            <div className="overflow-hidden rounded-2xl">
              <div 
                className="flex transition-transform duration-700 ease-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {projects.map((project) => (
                  <div
                    key={project.id}
                    className="flex-shrink-0 w-full"
                  >
                    <div className="flex gap-4 px-2">
                      {projects.map((p, idx) => (
                        <div
                          key={`${p.id}-${idx}`}
                          className="flex-shrink-0 w-1/2 md:w-1/3 lg:w-1/5"
                        >
                          <div className="relative h-48 md:h-64 rounded-xl overflow-hidden group cursor-pointer shadow-lg">
                            <Image
                              src={p.image}
                              alt={p.alt}
                              fill
                              className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={prevSlide}
                className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-600 hover:text-[#0367a6] hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextSlide}
                className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-600 hover:text-[#0367a6] hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                aria-label="Next slide"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
