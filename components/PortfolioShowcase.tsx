'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Retail Brand Market Penetration',
    category: 'Brand Research',
    description: 'Comprehensive market study for nationwide retail expansion strategy',
    tags: ['Consumer Research', 'Market Analysis', 'Strategy'],
    image: '/images/project-1.avif',
  },
  {
    id: 2,
    title: 'FMCG Product Launch Study',
    category: 'Product Research',
    description: 'Pre-launch consumer acceptance testing and positioning analysis',
    tags: ['Product Testing', 'Consumer Insights', 'Positioning'],
    image: '/images/project-2.avif',
  },
  {
    id: 3,
    title: 'Corporate Customer Satisfaction',
    category: 'B2B Research',
    description: 'In-depth B2B satisfaction study and competitive benchmarking',
    tags: ['B2B Research', 'Customer Experience', 'Benchmarking'],
    image: '/images/project-3.avif',
  },
  {
    id: 4,
    title: 'Election Opinion Poll',
    category: 'Political Research',
    description: 'Large-scale political opinion tracking and demographic analysis',
    tags: ['Political Research', 'Polling', 'Data Analytics'],
    image: '/images/project-4.avif',
  },
  {
    id: 5,
    title: 'Packaging Design Optimization',
    category: 'Product Design',
    description: 'Consumer preference testing for packaging redesign',
    tags: ['Design Testing', 'Consumer Insights', 'Optimization'],
    image: '/images/project-5.avif',
  },
  {
    id: 6,
    title: 'Digital Transformation Assessment',
    category: 'Strategic Research',
    description: 'Market readiness analysis for digital innovation strategy',
    tags: ['Digital Research', 'Innovation', 'Strategy'],
    image: '/images/project-6.avif',
  },
];

export default function PortfolioShowcase() {
  const [visibleProjects, setVisibleProjects] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          projects.forEach((_, idx) => {
            setTimeout(() => {
              setVisibleProjects(prev => [...new Set([...prev, idx])]);
            }, idx * 100);
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
    <section id="portfolio" ref={sectionRef} className="section-padding bg-background">
      <div className="section-container">
        {/* Section Header */}
        <div className="max-w-2xl mb-16 md:mb-24">
          <p className="text-sm tracking-widest text-foreground-secondary uppercase mb-4">
            Our Work
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Featured Projects
          </h2>
          <p className="text-lg text-foreground-secondary leading-relaxed">
            Explore our latest market research studies and strategic insights for leading brands and organizations.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div
              key={project.id}
              className={`group cursor-pointer transition-all duration-500 ${
                visibleProjects.includes(idx)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="bg-white border border-neutral-200 overflow-hidden hover:border-accent hover:shadow-xl transition-all duration-300">
                {/* Image */}
                <div className="relative h-56 md:h-64 bg-neutral-100 overflow-hidden group-hover:opacity-90 transition-opacity">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-accent text-white text-xs font-semibold tracking-wide">
                    {project.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8">
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-foreground-secondary mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-1 bg-neutral-100 text-foreground-secondary rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <a
                    href="#"
                    className="inline-flex items-center text-accent font-semibold text-sm group-hover:gap-2 gap-1 transition-all"
                  >
                    View Study
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 md:mt-24 text-center">
          <p className="text-foreground-secondary mb-6">
            Interested in learning more about our research capabilities?
          </p>
          <Link
            href="/contact-us"
            className="inline-flex items-center gap-2 px-8 py-4 bg-foreground text-white font-semibold hover:bg-foreground-secondary transition-all duration-300 hover:-translate-y-1"
          >
            Schedule a Consultation
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
