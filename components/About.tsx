"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const features = [
  "Certified research professionals",
  "100% data confidentiality guaranteed",
  "Timely project deliverables",
  "Pan-India research coverage",
  "Advanced analytical methods",
  "Dedicated client support",
];

export default function About() {
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
    <section
      id="about"
      ref={sectionRef}
      className="py-20 lg:py-32 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Images */}
          <div className={`relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="relative">
              {/* Main Image */}
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/about.avif"
                  alt="About BMRB"
                  width={500}
                  height={600}
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Floating Image */}
              <div className="absolute -bottom-10 -right-10 w-48 h-48 md:w-64 md:h-64 rounded-2xl overflow-hidden shadow-2xl border-4 border-white z-20">
                <Image
                  src="/images/home-2.avif"
                  alt="Research Team"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Decorative Element */}
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#0367a6]/10 rounded-2xl -z-10" />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#d9415d]/10 rounded-2xl -z-10" />
            </div>
          </div>

          {/* Right - Content */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="section-label mb-4">OUR EXPERTISE</div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Market Research Driven by{" "}
              <span className="text-[#0367a6]">Experienced Professionals</span>
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              We provide high-quality data reports collected and analyzed by our certified professionals. Our commitment is to accuracy, timely deliverables, and dedicated service, ensuring 100% confidentiality and value for every client.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-3 group"
                >
                  <div className="w-6 h-6 rounded-full bg-[#0367a6]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#0367a6] transition-colors">
                    <CheckCircle2 className="w-4 h-4 text-[#0367a6] group-hover:text-white transition-colors" />
                  </div>
                  <span className="text-gray-700 text-sm font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <Link
              href="#services"
              className="group inline-flex items-center gap-3 bg-[#0367a6] hover:bg-[#0378a6] text-white font-semibold px-8 py-4 rounded-full text-sm tracking-wide transition-all duration-300 hover:shadow-xl hover:shadow-[#0367a6]/30 hover:-translate-y-1"
            >
              LEARN MORE ABOUT US
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
