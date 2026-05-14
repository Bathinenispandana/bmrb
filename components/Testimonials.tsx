'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    quote: 'BMRB\'s comprehensive market research was crucial for our market entry strategy. Their insights directly contributed to a 40% increase in market share.',
    author: 'Rajesh Kumar',
    role: 'CEO, Consumer Goods Company',
    company: 'Leading FMCG Brand',
    rating: 5,
    image: '/images/testimonial-1.avif',
  },
  {
    id: 2,
    quote: 'The customer satisfaction studies conducted by BMRB revealed key pain points we had overlooked. Implementation of their recommendations improved our NPS by 25 points.',
    author: 'Priya Sharma',
    role: 'VP Operations',
    company: 'Retail Chain',
    rating: 5,
    image: '/images/testimonial-2.avif',
  },
  {
    id: 3,
    quote: 'BMRB\'s B2B research methodology is unparalleled. Their competitive intelligence helped us position our product effectively in a crowded marketplace.',
    author: 'Amit Patel',
    role: 'Managing Director',
    company: 'Technology Solutions',
    rating: 5,
    image: '/images/testimonial-3.avif',
  },
  {
    id: 4,
    quote: 'Working with BMRB for our product launch was transformational. Their consumer insights and positioning recommendations were spot-on.',
    author: 'Neha Gupta',
    role: 'Product Lead',
    company: 'Health & Wellness Brand',
    rating: 5,
    image: '/images/testimonial-4.avif',
  },
];

export default function Testimonials() {
  const [visibleTestimonials, setVisibleTestimonials] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          testimonials.forEach((_, idx) => {
            setTimeout(() => {
              setVisibleTestimonials(prev => [...new Set([...prev, idx])]);
            }, idx * 150);
          });
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
    <section ref={sectionRef} className="section-padding bg-background">
      <div className="section-container">
        {/* Section Header */}
        <div className="max-w-2xl mb-16 md:mb-24">
          <p className="text-sm tracking-widest text-foreground-secondary uppercase mb-4">
            Client Success
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            What Our Clients Say
          </h2>
          <p className="text-lg text-foreground-secondary leading-relaxed">
            Trusted by leading brands and organizations across industries for delivering actionable insights.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {testimonials.map((testimonial, idx) => (
            <div
              key={testimonial.id}
              className={`group transition-all duration-500 ${
                visibleTestimonials.includes(idx)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="bg-white border border-neutral-200 p-8 md:p-10 hover:shadow-lg hover:border-accent transition-all duration-300 h-full flex flex-col">
                {/* Rating */}
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="fill-accent text-accent"
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-foreground leading-relaxed mb-8 flex-1 text-lg">
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-6 border-t border-neutral-200">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden bg-neutral-200 flex-shrink-0">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground text-sm">
                      {testimonial.author}
                    </h4>
                    <p className="text-xs text-foreground-secondary">
                      {testimonial.role} • {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Client Logos Section */}
        <div className="mt-20 md:mt-28 pt-16 border-t border-neutral-200">
          <p className="text-sm tracking-widest text-foreground-secondary uppercase mb-10 text-center">
            Trusted by Leading Organizations
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-12 items-center justify-items-center">
            {['Fortune 500 Company', 'Leading Retail Brand', 'Tech Innovator', 'FMCG Leader', 'Digital Pioneer'].map((company, idx) => (
              <div
                key={idx}
                className="text-center w-full py-4 px-6 border border-neutral-200 rounded hover:border-accent transition-colors cursor-pointer"
              >
                <p className="text-sm font-semibold text-foreground-secondary">
                  {company}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
