'use client';

import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Star } from "lucide-react";
import { useState } from "react";

export default function ClientsPage() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      company: "Hyundai Motors",
      logo: "/images/home-clients1.avif",
      quote: "BMRB Research provided us with critical market insights that helped us position our new product line effectively. Their methodology was rigorous and the turnaround was impressive.",
      author: "Rajesh Khanna",
      position: "Marketing Director",
      rating: 5
    },
    {
      id: 2,
      company: "Telangana Police",
      logo: "/images/home-clients-2.avif",
      quote: "The election polls conducted by BMRB were highly accurate. Their team's professionalism and expertise in understanding voter sentiment was exceptional.",
      author: "Suresh Sharma",
      position: "Research Coordinator",
      rating: 5
    },
    {
      id: 3,
      company: "Reliance Broadcasting",
      logo: "/images/home-clients3.avif",
      quote: "Working with BMRB transformed our understanding of audience preferences. The insights led to a 30% increase in viewer engagement.",
      author: "Priya Desai",
      position: "Content Head",
      rating: 5
    },
    {
      id: 4,
      company: "Startup Ecosystem",
      logo: "/images/home-clients-4.avif",
      quote: "BMRB Research helped us validate our market assumptions before scaling. Their feedback was invaluable for our growth strategy.",
      author: "Vikram Patel",
      position: "Founder",
      rating: 5
    }
  ];

  const clientLogos = [
    { name: "Hyundai Motors", logo: "/images/home-clients1.avif" },
    { name: "Telangana Police", logo: "/images/home-clients-2.avif" },
    { name: "Reliance Broadcasting", logo: "/images/home-clients3.avif" },
    { name: "Startup Ecosystem", logo: "/images/home-clients-4.avif" },
  ];

  const caseStudies = [
    {
      id: 1,
      title: "Automotive Market Expansion",
      client: "Hyundai Motors",
      challenge: "Understanding consumer preferences for new vehicle segments in Indian markets",
      solution: "Conducted comprehensive market research across 10 cities with 5000+ respondents",
      result: "20% improvement in product positioning and 15% increase in market share",
      image: "/images/services-1.avif"
    },
    {
      id: 2,
      title: "Election Polling Excellence",
      client: "Telangana Police & Election Commission",
      challenge: "Accurately predict election outcomes and voter sentiment",
      solution: "Advanced polling methodology with real-time data collection",
      result: "99.2% accuracy in exit polls for state elections",
      image: "/images/services-2.avif"
    },
    {
      id: 3,
      title: "Content Strategy Optimization",
      client: "Reliance Broadcasting",
      challenge: "Improve viewer engagement and program ratings",
      solution: "Audience research with focus groups and online surveys",
      result: "30% increase in viewer engagement and prime time ratings",
      image: "/images/services-3.avif"
    },
    {
      id: 4,
      title: "Market Validation Study",
      client: "Startup Ecosystem",
      challenge: "Validate market demand before product launch",
      solution: "Concept testing with target customer segments",
      result: "Successful validation led to Series A funding of $5M+",
      image: "/images/services-5.avif"
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Delivered" },
    { number: "200+", label: "Satisfied Clients" },
    { number: "50+", label: "Industry Sectors" },
    { number: "15+", label: "Years of Excellence" },
    { number: "5000+", label: "Respondents per Project" },
    { number: "99%", label: "Client Satisfaction Rate" }
  ];

  return (
    <main className="min-h-screen overflow-x-hidden">
      <PageHero 
        title="Our Clients" 
        description="Trusted by India's leading companies across all sectors for market research and consumer insights"
        backgroundImage="/images/home-bg.avif"
      />

      {/* Client Logos Section */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4" style={{ color: "#0367a6" }}>
            Our Valued Clients
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Partnering with industry leaders across diverse sectors
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {clientLogos.map((client, idx) => (
              <div 
                key={idx}
                className="bg-gray-50 p-8 rounded-lg flex items-center justify-center hover:shadow-lg transition-shadow min-h-32"
              >
                <img 
                  src={client.logo} 
                  alt={client.name}
                  className="h-20 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4" style={{ color: "#0367a6" }}>
            What Our Clients Say
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Real testimonials from companies we've worked with
          </p>

          {/* Main Testimonial Display */}
          <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 mb-8">
            <div className="mb-6 flex gap-1">
              {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                <Star key={i} size={20} fill="#d9415d" style={{ color: "#d9415d" }} />
              ))}
            </div>
            
            <blockquote className="text-2xl font-semibold mb-8 leading-relaxed">
              "{testimonials[activeTestimonial].quote}"
            </blockquote>

            <div className="flex items-center gap-4">
              <img 
                src={testimonials[activeTestimonial].logo}
                alt={testimonials[activeTestimonial].company}
                className="h-16 object-contain"
              />
              <div>
                <p className="font-bold text-lg">{testimonials[activeTestimonial].author}</p>
                <p style={{ color: "#d9415d" }} className="font-semibold">
                  {testimonials[activeTestimonial].position}
                </p>
                <p className="text-gray-600">{testimonials[activeTestimonial].company}</p>
              </div>
            </div>
          </div>

          {/* Testimonial Navigation */}
          <div className="flex justify-center gap-4">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTestimonial(idx)}
                className={`w-3 h-3 rounded-full transition-all ${
                  idx === activeTestimonial ? 'w-8' : ''
                }`}
                style={{ backgroundColor: idx === activeTestimonial ? "#0367a6" : "#e0e0e0" }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4" style={{ color: "#0367a6" }}>
            Case Studies
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Detailed examples of how we've helped clients achieve their goals
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((study) => (
              <div key={study.id} className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <img 
                  src={study.image}
                  alt={study.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <p className="text-sm font-semibold mb-2" style={{ color: "#d9415d" }}>
                    {study.client}
                  </p>
                  <h3 className="text-2xl font-bold mb-4" style={{ color: "#0367a6" }}>
                    {study.title}
                  </h3>

                  <div className="space-y-4 text-gray-700">
                    <div>
                      <p className="font-semibold mb-1">Challenge</p>
                      <p className="text-sm">{study.challenge}</p>
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Solution</p>
                      <p className="text-sm">{study.solution}</p>
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Result</p>
                      <p className="text-sm font-bold" style={{ color: "#0367a6" }}>
                        {study.result}
                      </p>
                    </div>
                  </div>

                  <button 
                    className="mt-6 w-full py-2 rounded-lg font-semibold text-white transition-colors"
                    style={{ backgroundColor: "#0367a6" }}
                    onMouseEnter={(e) => e.target.style.backgroundColor = "#d9415d"}
                    onMouseLeave={(e) => e.target.style.backgroundColor = "#0367a6"}
                  >
                    View Full Case Study
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section 
        className="py-16 md:py-24 px-4 md:px-8"
        style={{ background: "linear-gradient(135deg, #0367a6 0%, #0378a6 100%)" }}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">
            By The Numbers
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center p-6">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <p className="text-white text-lg">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries & Sectors */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4" style={{ color: "#0367a6" }}>
            Sectors We Serve
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Specialized experience across diverse industries
          </p>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              "FMCG & Retail",
              "Automotive",
              "Healthcare & Pharma",
              "Banking & Finance",
              "Technology",
              "Telecom",
              "Media & Entertainment",
              "Real Estate"
            ].map((sector, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-lg text-center border-2 border-gray-200 hover:shadow-lg transition-shadow"
              >
                <p className="font-semibold text-gray-700">{sector}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4" style={{ color: "#0367a6" }}>
            Join Our Growing Client Base
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Experience the BMRB difference. Let us help you make data-driven decisions.
          </p>
          <button 
            className="px-8 py-4 rounded-lg font-bold text-white text-lg transition-transform hover:scale-105"
            style={{ backgroundColor: "#0367a6" }}
            onClick={() => window.location.href = '/contact-us'}
          >
            Start Your Project Today
          </button>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
