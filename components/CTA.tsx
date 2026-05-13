"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTA() {
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
    <section ref={sectionRef} className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#0367a6]/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#d9415d]/5 rounded-full translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Content */}
          <div>
            <div className="section-label mb-4">HAVE A PROJECT IN MIND?</div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {"Let's Discuss Your Market "}
              <span className="text-[#0367a6]">Research Needs</span>
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Whether you&apos;re a government institution, a private organization, or a startup, 
              we have the experience to deliver the insights you need. Reach out to our team 
              to get started.
            </p>
            <Link
              href="#contact"
              className="group inline-flex items-center gap-3 bg-[#d9415d] hover:bg-[#d92938] text-white font-semibold px-8 py-4 rounded-full text-sm tracking-wide transition-all duration-300 hover:shadow-xl hover:shadow-[#d9415d]/30 hover:-translate-y-1"
            >
              CONTACT US NOW
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Image */}
          <div className="relative hidden lg:block">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/plane-image.avif"
                alt="Contact Us"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0367a6]/20 to-transparent" />
            </div>
            {/* Decorative */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#0367a6]/10 rounded-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
