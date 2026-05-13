"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const services = [
  {
    icon: "/images/icon01.avif",
    title: "Brand & Equity Research",
    description:
      "In-depth studies on brand positioning, image correlation, equity, and consumer attitude.",
  },
  {
    icon: "/images/icon02.avif",
    title: "Customer Satisfaction",
    description:
      "Measuring and managing customer satisfaction through real-time tracking and feedback analysis.",
  },
  {
    icon: "/images/icon03.avif",
    title: "B2B & Industrial Research",
    description:
      "Providing market assessment, feasibility studies, and competitive intelligence for B2B sectors.",
  },
  {
    icon: "/images/icon04.avif",
    title: "Election & Opinion Polls",
    description:
      "Conducting political and social research, including opinion polling and readership surveys.",
  },
  {
    icon: "/images/icon05.avif",
    title: "Product & Packaging Tests",
    description:
      "Evaluating new products and packaging through concept testing, usage, and attitude studies.",
  },
];

export default function Services() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-20 lg:py-32 bg-white relative overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#0367a6]/5 to-transparent" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#d9415d]/5 rounded-full -translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="section-label justify-center mb-4">OUR SPECTRUM OF SERVICES</div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 max-w-4xl mx-auto leading-tight">
            Extensive Research and Advisory Services{" "}
            <br className="hidden md:block" />
            <span className="text-[#0367a6]">for Your Business</span>
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-[#0367a6]/30 hover:-translate-y-2 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="w-20 h-20 bg-gradient-to-br from-[#0367a6]/10 to-[#0378a6]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-gradient-to-br group-hover:from-[#0367a6] group-hover:to-[#0378a6] transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={48}
                  height={48}
                  className="group-hover:brightness-0 group-hover:invert transition-all duration-500"
                />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#0367a6] transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>

              {/* Hover Line */}
              <div className="mt-6 h-1 w-0 bg-gradient-to-r from-[#0367a6] to-[#d9415d] rounded-full group-hover:w-full transition-all duration-500" />
            </div>
          ))}
        </div>

        {/* Service Icons Display */}
        <div className={`mt-20 flex justify-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex items-center gap-8">
            <Image
              src="/images/iconset01.avif"
              alt="Research Services"
              width={200}
              height={80}
              className="opacity-60 hover:opacity-100 transition-opacity duration-300"
            />
            <Image
              src="/images/iconset02.avif"
              alt="Research Services"
              width={200}
              height={80}
              className="opacity-60 hover:opacity-100 transition-opacity duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
