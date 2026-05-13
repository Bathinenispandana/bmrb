"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const clients = [
  {
    logo: "/images/home-clients1.avif",
    name: "Hyundai Motors",
    type: "Global Automotive Leader",
    testimonial:
      "Conducted a comprehensive study on dealer and customer satisfaction to measure and manage key performance metrics in the automotive sector.",
  },
  {
    logo: "/images/home-clients-2.avif",
    name: "Telangana Police Department",
    type: "State Government Institution",
    testimonial:
      "Performed multiple assessment studies, including analyses of the Traffic E-challan system, 'She Team' functioning, and the Hawkeye safety application.",
  },
  {
    logo: "/images/home-clients3.avif",
    name: "Reliance Broadcasting",
    type: "Media & Entertainment",
    testimonial:
      "Executed a listener satisfaction study for the 92.7 radio channel, gathering valuable feedback to enhance the broadcasting experience.",
  },
  {
    logo: "/images/home-clients-4.avif",
    name: "Start-up Ecosystem",
    type: "Featuring Swiggy.com & Others",
    testimonial:
      "Provided crucial market research for over 300+ startups, including industry leaders like Swiggy, to support new business launches and growth strategies.",
  },
];

export default function Clients() {
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
      setCurrentIndex((prev) => (prev + 1) % clients.length);
    }, 5000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % clients.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + clients.length) % clients.length);
  };

  return (
    <section
      id="clients"
      ref={sectionRef}
      className="py-20 lg:py-32 bg-gradient-to-br from-[#0a1628] via-[#0d1d33] to-[#0a1628] relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <Image
          src="/images/world-map.avif"
          alt="Background"
          fill
          className="object-cover"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="section-label justify-center text-[#d9415d] mb-4">
            <span className="w-8 h-[2px] bg-[#d9415d]"></span>
            OUR CLIENTS & PROJECTS
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 max-w-3xl mx-auto leading-tight">
            Showcasing Our Work With{" "}
            <br className="hidden md:block" />
            <span className="text-[#0378a6]">Government & Industry Leaders</span>
          </h2>
        </div>

        {/* Testimonial Carousel */}
        <div className={`relative max-w-4xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-white/10">
            {/* Quote Icon */}
            <div className="w-16 h-16 bg-[#d9415d]/20 rounded-2xl flex items-center justify-center mb-8">
              <Quote className="w-8 h-8 text-[#d9415d]" />
            </div>

            {/* Testimonial Text */}
            <p className="text-white/90 text-xl lg:text-2xl leading-relaxed mb-10 font-light">
              {clients[currentIndex].testimonial}
            </p>

            {/* Client Info */}
            <div className="flex items-center gap-5">
              <div className="w-20 h-20 bg-white rounded-xl p-3 flex items-center justify-center shadow-lg">
                <Image
                  src={clients[currentIndex].logo}
                  alt={clients[currentIndex].name}
                  width={60}
                  height={60}
                  className="object-contain"
                />
              </div>
              <div>
                <h4 className="text-white font-bold text-xl mb-1">
                  {clients[currentIndex].name}
                </h4>
                <p className="text-white/60">{clients[currentIndex].type}</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-6 mt-10">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <div className="flex items-center gap-3">
              {clients.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? "bg-[#d9415d] w-8" 
                      : "bg-white/30 hover:bg-white/50 w-2.5"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
