'use client';

import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { ChevronRight } from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      id: 1,
      title: "Brand & Equity Research",
      description: "Understand brand perception, positioning, and equity in the market. Our research helps you build and strengthen brand value.",
      icon: "/images/icon01.avif",
      features: [
        "Brand Awareness & Recall",
        "Brand Positioning Studies",
        "Brand Equity Measurement",
        "Competitor Analysis",
        "Brand Health Tracking"
      ]
    },
    {
      id: 2,
      title: "Customer Satisfaction",
      description: "Measure and improve customer satisfaction across all touchpoints. Drive loyalty through actionable insights.",
      icon: "/images/icon02.avif",
      features: [
        "Net Promoter Score (NPS)",
        "Customer Satisfaction Index",
        "Customer Experience Audits",
        "Loyalty Program Analysis",
        "Churn Analysis & Prevention"
      ]
    },
    {
      id: 3,
      title: "B2B & Industrial Research",
      description: "Specialized research for B2B markets. Understand complex decision-making processes in industrial sectors.",
      icon: "/images/icon03.avif",
      features: [
        "Market Sizing Studies",
        "Purchase Decision Process",
        "Competitor Benchmarking",
        "Lead Generation Research",
        "Sales Effectiveness Studies"
      ]
    },
    {
      id: 4,
      title: "Election & Opinion Polls",
      description: "Comprehensive polling services for political campaigns, referendums, and public opinion research.",
      icon: "/images/icon04.avif",
      features: [
        "Pre-election Surveys",
        "Exit Polls",
        "Opinion Tracking",
        "Voter Behavior Analysis",
        "Campaign Effectiveness"
      ]
    },
    {
      id: 5,
      title: "Product & Packaging Tests",
      description: "Evaluate product concepts, prototypes, and packaging designs before market launch.",
      icon: "/images/icon05.avif",
      features: [
        "Concept Testing",
        "Product Prototyping",
        "Packaging Design Research",
        "Usage Testing",
        "Optimization Studies"
      ]
    },
    {
      id: 6,
      title: "Market Research & Analytics",
      description: "Comprehensive market analysis and data-driven insights for strategic decision-making.",
      icon: "/images/icon06.avif",
      features: [
        "Market Sizing & Forecasting",
        "Trend Analysis",
        "Competitive Landscape",
        "Market Segmentation",
        "Growth Opportunities"
      ]
    }
  ];

  const methodologies = [
    {
      name: "Quantitative Research",
      description: "Large-scale surveys and statistical analysis to quantify market trends, consumer behavior, and preferences.",
      techniques: ["Online Surveys", "Telephone Surveys", "CATI", "CAWI", "Panel Studies"]
    },
    {
      name: "Qualitative Research",
      description: "In-depth exploration of consumer insights, motivations, and attitudes through exploratory methods.",
      techniques: ["Focus Groups", "In-depth Interviews", "Ethnography", "Observation", "Projective Techniques"]
    },
    {
      name: "Mixed Methods",
      description: "Combination of quantitative and qualitative approaches for comprehensive market understanding.",
      techniques: ["Sequential Design", "Concurrent Design", "Triangulation", "Integration Strategies"]
    },
    {
      name: "Advanced Analytics",
      description: "Data mining, predictive modeling, and advanced statistical techniques for strategic insights.",
      techniques: ["Data Mining", "Predictive Modeling", "Machine Learning", "Text Analytics", "Sentiment Analysis"]
    }
  ];

  const industries = [
    { name: "FMCG & Retail", logo: "🛍️" },
    { name: "Automotive", logo: "🚗" },
    { name: "Healthcare & Pharma", logo: "⚕️" },
    { name: "Banking & Finance", logo: "🏦" },
    { name: "Technology", logo: "💻" },
    { name: "Telecom", logo: "📱" },
    { name: "Media & Entertainment", logo: "🎬" },
    { name: "Real Estate", logo: "🏠" }
  ];

  return (
    <main className="min-h-screen overflow-x-hidden">
      <PageHero 
        title="Our Services" 
        description="Comprehensive market research and consumer insights solutions tailored to your business needs"
        backgroundImage="/images/home-bg.avif"
      />

      {/* Services Grid */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4" style={{ color: "#0367a6" }}>
            Our Service Offerings
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Comprehensive research solutions across all market sectors
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div 
                key={service.id}
                className="group p-8 rounded-lg border-2 border-gray-100 hover:shadow-xl transition-all duration-300"
                style={{ borderTopColor: "#0367a6", borderTopWidth: "4px" }}
              >
                <div className="mb-6">
                  <img 
                    src={service.icon} 
                    alt={service.title}
                    className="w-16 h-16 object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: "#0367a6" }}>
                  {service.title}
                </h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="font-semibold mb-3 text-gray-800">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                        <ChevronRight size={16} style={{ color: "#d9415d" }} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <button 
                  className="w-full py-2 rounded-lg font-semibold transition-colors"
                  style={{ 
                    backgroundColor: "#0367a6", 
                    color: "white" 
                  }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = "#d9415d"}
                  onMouseLeave={(e) => e.target.style.backgroundColor = "#0367a6"}
                >
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodologies Section */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4" style={{ color: "#0367a6" }}>
            Research Methodologies
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            We combine the best methodologies to deliver comprehensive insights
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {methodologies.map((method, idx) => (
              <div key={idx} className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-3" style={{ color: "#0367a6" }}>
                  {method.name}
                </h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {method.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {method.techniques.map((tech, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 rounded-full text-sm font-semibold text-white"
                      style={{ backgroundColor: "#d9415d" }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4" style={{ color: "#0367a6" }}>
            Industries We Serve
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Specialized expertise across diverse sectors
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {industries.map((industry, idx) => (
              <div 
                key={idx}
                className="text-center p-6 rounded-lg border-2 border-gray-200 hover:shadow-lg transition-shadow"
              >
                <div className="text-5xl mb-3">{industry.logo}</div>
                <p className="font-semibold text-gray-700">{industry.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section 
        className="py-16 md:py-24 px-4 md:px-8"
        style={{ background: "linear-gradient(135deg, #0367a6 0%, #0378a6 100%)" }}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-white">
            Our Service Process
          </h2>
          <p className="text-center text-white mb-12 text-lg">
            A systematic approach to delivering quality research
          </p>

          <div className="grid md:grid-cols-5 gap-4">
            {[
              { step: "1", title: "Discovery", desc: "Understanding your research needs" },
              { step: "2", title: "Planning", desc: "Designing the research approach" },
              { step: "3", title: "Execution", desc: "Conducting fieldwork & data collection" },
              { step: "4", title: "Analysis", desc: "Data analysis & insights generation" },
              { step: "5", title: "Delivery", desc: "Reporting & recommendations" }
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-white mx-auto mb-3 text-lg"
                  style={{ backgroundColor: "#d9415d" }}
                >
                  {item.step}
                </div>
                <h4 className="font-bold text-white mb-2">{item.title}</h4>
                <p className="text-white text-sm opacity-90">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4" style={{ color: "#0367a6" }}>
            Ready to Start Your Research Project?
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Contact us today for a consultation and learn how BMRB Research can help your business grow
          </p>
          <button 
            className="px-8 py-4 rounded-lg font-bold text-white text-lg transition-transform hover:scale-105"
            style={{ backgroundColor: "#0367a6" }}
            onClick={() => window.location.href = '/contact-us'}
          >
            Get in Touch
          </button>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
