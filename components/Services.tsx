"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { BarChart3, Users2, Building2, VoteIcon, Package } from "lucide-react";
import FeatureCard from "@/components/ui/FeatureCard";
import Section from "@/components/ui/Section";

const services = [
  {
    icon: BarChart3,
    title: "Brand & Equity Research",
    description:
      "In-depth studies on brand positioning, image correlation, equity, and consumer attitude.",
  },
  {
    icon: Users2,
    title: "Customer Satisfaction",
    description:
      "Measuring and managing customer satisfaction through real-time tracking and feedback analysis.",
  },
  {
    icon: Building2,
    title: "B2B & Industrial Research",
    description:
      "Providing market assessment, feasibility studies, and competitive intelligence for B2B sectors.",
  },
  {
    icon: VoteIcon,
    title: "Election & Opinion Polls",
    description:
      "Conducting political and social research, including opinion polling and readership surveys.",
  },
  {
    icon: Package,
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
    <Section
      id="services"
      ref={sectionRef}
      title="Our Spectrum of Services"
      subtitle="COMPREHENSIVE SOLUTIONS"
      description="Extensive research and advisory services tailored to your business needs"
      lightBg
      containerClassName="overflow-hidden"
    >
      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {services.map((service, index) => (
          <div
            key={service.title}
            className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <FeatureCard {...service} />
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className={`mt-16 md:mt-20 p-8 md:p-12 rounded-2xl bg-gradient-to-r from-primary via-primary-light to-primary text-white transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '500ms' }}>
        <div className="max-w-3xl">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Need Custom Research Solutions?</h3>
          <p className="text-white/90 mb-6">
            Our expert team can design tailored research programs specifically for your industry and business challenges.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-primary font-semibold px-8 py-3.5 rounded-lg hover:shadow-lg hover:shadow-white/20 transition-all duration-300 hover:-translate-y-1"
          >
            Request Custom Solution
            <span>→</span>
          </a>
        </div>
      </div>
    </Section>
  );
}
