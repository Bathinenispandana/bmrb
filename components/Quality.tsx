"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Shield, Clock, Lock, Target } from "lucide-react";

const qualities = [
  {
    icon: Shield,
    title: "Quality Assurance",
    description: "Rigorous quality control at every stage",
  },
  {
    icon: Clock,
    title: "Timely Delivery",
    description: "Committed to meeting all deadlines",
  },
  {
    icon: Lock,
    title: "100% Confidential",
    description: "Your data is always secure with us",
  },
  {
    icon: Target,
    title: "Accurate Results",
    description: "Precision in every data point",
  },
];

export default function Quality() {
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
      ref={sectionRef}
      className="py-20 lg:py-32 bg-gradient-to-br from-[#0367a6] via-[#0367a6] to-[#0378a6] relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <Image
          src="/images/world-map.avif"
          alt="World Map"
          fill
          className="object-cover"
        />
      </div>

      {/* Decorative Circles */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#d9415d]/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content Side */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="section-label text-[#d9415d] mb-4">
              <span className="w-8 h-[2px] bg-[#d9415d]"></span>
              OUR COMMITMENT TO QUALITY
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Delivering Accurate Insights with{" "}
              <span className="text-[#d9415d]">Guaranteed Confidentiality</span>
            </h2>
            <p className="text-white/80 text-lg mb-10 leading-relaxed">
              Our team includes over 100 trained freelancers and 15 experienced supervisors.
              With dedicated Data Analysts, Researchers, and a professional Quality Control
              team, we ensure every project meets the highest standards.
            </p>

            {/* Quality Cards */}
            <div className="grid grid-cols-2 gap-4 mb-10">
              {qualities.map((quality, index) => (
                <div
                  key={quality.title}
                  className={`bg-white/10 backdrop-blur-sm rounded-xl p-5 hover:bg-white/20 transition-all duration-300 border border-white/10 hover:border-white/30 group cursor-pointer ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
                  style={{ transitionDelay: `${index * 100 + 300}ms` }}
                >
                  <quality.icon className="w-8 h-8 text-[#d9415d] mb-3 group-hover:scale-110 transition-transform" />
                  <h4 className="text-white font-semibold mb-1">{quality.title}</h4>
                  <p className="text-white/60 text-sm">{quality.description}</p>
                </div>
              ))}
            </div>

            <Link
              href="#contact"
              className="group inline-flex items-center gap-3 bg-[#d9415d] hover:bg-[#d92938] text-white font-semibold px-8 py-4 rounded-full text-sm tracking-wide transition-all duration-300 hover:shadow-xl hover:shadow-[#d9415d]/40 hover:-translate-y-1"
            >
              KNOW MORE
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Image Side */}
          <div className={`relative hidden lg:block transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative">
              <Image
                src="/images/target.avif"
                alt="Target Excellence"
                width={500}
                height={500}
                className="rounded-2xl shadow-2xl"
              />
              {/* Floating Card */}
              <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl shadow-2xl p-6 animate-float">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#d9415d] to-[#d92938] rounded-full flex items-center justify-center shadow-lg shadow-[#d9415d]/30">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <p className="text-4xl font-bold text-[#0367a6]">100%</p>
                    <p className="text-sm text-gray-600 font-medium">Client Satisfaction</p>
                  </div>
                </div>
              </div>

              {/* Decorative Element */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#d9415d]/20 rounded-2xl -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
