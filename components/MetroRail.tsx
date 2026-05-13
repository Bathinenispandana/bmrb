"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function MetroRail() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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

  return (
    <section ref={sectionRef} className="relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/home-bg-3.avif"
          alt="Metro Rail Background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/95 to-[#0a1628]/70" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className={`max-w-2xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex items-center gap-3 mb-4">
            <span className="w-10 h-[2px] bg-[#d9415d]"></span>
            <span className="text-[#d9415d] font-semibold text-sm tracking-wider uppercase">
              MARKET RESEARCH & CONSULTATION
            </span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight">
            Helping Clients Like Hyderabad Metro Rail with{" "}
            <span className="text-[#0378a6]">In-depth Passenger Studies</span>
          </h2>

          <Link
            href="#contact"
            className="group inline-flex items-center gap-3 bg-[#d9415d] hover:bg-[#d92938] text-white font-semibold px-8 py-4 rounded-full text-sm tracking-wide transition-all duration-300 hover:shadow-xl hover:shadow-[#d9415d]/40 hover:-translate-y-1"
          >
            DISCUSS YOUR PROJECT
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
