'use client';

import { useEffect, useRef, useState } from 'react';
import { BarChart3, Users2, Building2, VoteIcon, Package, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const services = [
  {
    id: 1,
    icon: BarChart3,
    title: 'Brand & Equity Research',
    description: 'In-depth studies on brand positioning, image correlation, equity metrics, and consumer attitude tracking.',
    details: [
      'Brand perception & positioning',
      'Brand equity measurement',
      'Competitive benchmarking',
      'Image & reputation analysis',
      'Consumer attitude studies',
    ],
  },
  {
    id: 2,
    icon: Users2,
    title: 'Customer Satisfaction Studies',
    description: 'Comprehensive measurement and management of customer satisfaction with real-time tracking capabilities.',
    details: [
      'CSI & CSAT research',
      'Loyalty & retention analysis',
      'Net Promoter Score (NPS)',
      'Complaint & feedback analysis',
      'Service quality assessment',
    ],
  },
  {
    id: 3,
    icon: Building2,
    title: 'B2B & Industrial Research',
    description: 'Strategic market assessment and competitive intelligence for business-to-business sectors.',
    details: [
      'Market sizing & assessment',
      'Feasibility studies',
      'Competitive intelligence',
      'Buyer journey mapping',
      'Decision-maker insights',
    ],
  },
  {
    id: 4,
    icon: VoteIcon,
    title: 'Election & Opinion Polls',
    description: 'Political and social research including opinion polling, voter sentiment, and demographic analysis.',
    details: [
      'Election surveys',
      'Opinion polling',
      'Voter sentiment analysis',
      'Readership & listenership studies',
      'Social issue research',
    ],
  },
  {
    id: 5,
    icon: Package,
    title: 'Product & Packaging Tests',
    description: 'Consumer preference evaluation through concept testing, usage studies, and packaging optimization.',
    details: [
      'Concept testing',
      'Product usage studies',
      'Packaging design testing',
      'Formulation evaluation',
      'Product acceptance studies',
    ],
  },
  {
    id: 6,
    icon: TrendingUp,
    title: 'Strategic Market Intelligence',
    description: 'Data-driven insights for market entry, expansion, and strategic business planning.',
    details: [
      'Market trend analysis',
      'Consumer behavior insights',
      'Market opportunity assessment',
      'Competitive positioning',
      'Strategic recommendations',
    ],
  },
];

export default function DetailedServices() {
  const [expandedService, setExpandedService] = useState<number | null>(null);
  const [visibleServices, setVisibleServices] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          services.forEach((_, idx) => {
            setTimeout(() => {
              setVisibleServices(prev => [...new Set([...prev, idx])]);
            }, idx * 80);
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
    <section ref={sectionRef} className="section-padding bg-background-secondary">
      <div className="section-container">
        {/* Section Header */}
        <div className="max-w-2xl mb-16 md:mb-24">
          <p className="text-sm tracking-widest text-foreground-secondary uppercase mb-4">
            Our Services
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Comprehensive Research Solutions
          </h2>
          <p className="text-lg text-foreground-secondary leading-relaxed">
            We offer a full spectrum of market research services designed to address your specific business challenges.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => {
            const Icon = service.icon;
            const isExpanded = expandedService === service.id;
            const isVisible = visibleServices.includes(idx);

            return (
              <div
                key={service.id}
                className={`group bg-white border border-neutral-200 p-8 cursor-pointer transition-all duration-500 hover:border-accent hover:shadow-lg ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
                onClick={() => setExpandedService(isExpanded ? null : service.id)}
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-white transition-all">
                  <Icon className="w-7 h-7 text-accent group-hover:text-white transition-colors" />
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-foreground-secondary text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Details (Expandable) */}
                {isExpanded && (
                  <div className="border-t border-neutral-200 pt-6 space-y-3">
                    <p className="text-xs font-semibold text-foreground-secondary uppercase tracking-widest">
                      What We Cover
                    </p>
                    <ul className="space-y-2">
                      {service.details.map((detail, idx) => (
                        <li
                          key={idx}
                          className="text-sm text-foreground-secondary flex items-start gap-2"
                        >
                          <span className="text-accent font-bold mt-0.5">•</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* CTA */}
                <div className="mt-6 inline-flex items-center gap-2 text-accent font-semibold text-sm group-hover:gap-3 gap-1 transition-all">
                  {isExpanded ? 'Collapse' : 'Learn More'}
                  <ArrowRight size={16} className={isExpanded ? 'rotate-90' : 'group-hover:translate-x-1'} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 md:mt-28 pt-16 border-t border-neutral-200">
          <div className="max-w-3xl">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Need a Custom Research Solution?
            </h3>
            <p className="text-lg text-foreground-secondary mb-8 leading-relaxed">
              Our expert team can design tailored research programs specifically for your industry and business challenges.
            </p>
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white font-semibold hover:bg-accent-dark transition-all duration-300 hover:-translate-y-1"
            >
              Request Custom Solution
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
