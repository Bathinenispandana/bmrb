'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    quote: 'Conducted a comprehensive study on dealer and customer satisfaction to measure and manage key performance metrics in the automotive sector.',
    author: 'Hyundai Motors',
    role: 'Global Automotive Leader',
    company: 'Automotive Industry',
    rating: 5,
    image: '/images/testimonial-1.avif',
  },
  {
    id: 2,
    quote: 'Performed multiple assessment studies, including analyses of the Traffic E-challan system, She Team functioning, and the Hawkeye safety application.',
    author: 'Telangana Police Department',
    role: 'State Government Institution',
    company: 'Public Sector',
    rating: 5,
    image: '/images/testimonial-2.avif',
  },
  {
    id: 3,
    quote: 'Executed a listener satisfaction study for our radio channel, gathering valuable feedback to enhance the broadcasting experience and content strategy.',
    author: 'Reliance Broadcasting (92.7 FM)',
    role: 'Media & Entertainment',
    company: 'Broadcasting Network',
    rating: 5,
    image: '/images/testimonial-3.avif',
  },
  {
    id: 4,
    quote: 'Provided crucial market research for our startup and 450+ other startups including industry leaders, supporting new business launches and growth strategies.',
    author: 'Swiggy & Startup Ecosystem',
    role: 'E-commerce & Startup Leaders',
    company: 'Technology & Startup Sector',
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
            Our Clients & Projects
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Showcasing Our Work With Government & Industry Leaders
          </h2>
          <p className="text-lg text-foreground-secondary leading-relaxed">
            Trusted by leading organizations across government, automotive, media, startups, and public sectors for delivering comprehensive research solutions.
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
            Partnering With Industry Leaders
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-12 items-center justify-items-center">
            {[
              'Hyundai Motors',
              'Telangana Police Dept.',
              'Reliance Broadcasting',
              'Metro Rail Authority',
              '450+ Startups & Founders'
            ].map((company, idx) => (
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
