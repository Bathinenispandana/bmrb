'use client';

import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Dr. Rajesh Kumar",
      position: "Founder & Chairman",
      image: "/images/home-1.avif",
      expertise: "Market Research & Strategy"
    },
    {
      name: "Priya Sharma",
      position: "Managing Director",
      image: "/images/home-2.avif",
      expertise: "Client Relations & Operations"
    },
    {
      name: "Vikram Singh",
      position: "Director - Research",
      image: "/images/services-1.avif",
      expertise: "Quantitative & Qualitative Research"
    }
  ];

  const milestones = [
    { year: "2010", text: "Company Founded" },
    { year: "2013", text: "Expanded to 5 cities" },
    { year: "2016", text: "Achieved ISO 20252 Certification" },
    { year: "2019", text: "Crossed 500+ Projects" },
    { year: "2022", text: "International Expansion" },
    { year: "2024", text: "Leading Market Research Firm" }
  ];

  const values = [
    {
      title: "Integrity",
      description: "We believe in transparent, honest communication with our clients and honest insights into market dynamics.",
      icon: "🎯"
    },
    {
      title: "Innovation",
      description: "Constantly evolving our research methodologies to leverage cutting-edge technologies and insights.",
      icon: "💡"
    },
    {
      title: "Excellence",
      description: "Committed to delivering high-quality research that drives tangible business results and growth.",
      icon: "⭐"
    },
    {
      title: "Collaboration",
      description: "Working closely with clients to understand their unique needs and deliver customized solutions.",
      icon: "🤝"
    }
  ];

  return (
    <main className="min-h-screen overflow-x-hidden">
      <PageHero 
        title="About Us" 
        description="Discover our journey, vision, and commitment to excellence in market research"
        backgroundImage="/images/home-bg.avif"
      />

      {/* Company Story Section */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "#0367a6" }}>
                Our Story
              </h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Founded in 2010, BMRB Research has been at the forefront of market research and consumer insights for over a decade. Our journey began with a simple vision: to provide businesses with accurate, actionable market intelligence.
              </p>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Today, we are one of India's leading market research firms, serving over 500+ clients across diverse industries including FMCG, Automotive, Finance, Healthcare, and Technology.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our commitment to quality, innovation, and client satisfaction has made us the trusted partner for businesses seeking to understand their markets and consumers.
              </p>
            </div>
            <div>
              <img 
                src="/images/about.avif" 
                alt="About BMRB" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="p-8 bg-white rounded-lg shadow-lg border-l-4" style={{ borderColor: "#0367a6" }}>
              <h3 className="text-2xl font-bold mb-4" style={{ color: "#0367a6" }}>Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                To be India's most trusted and innovative market research partner, empowering businesses with insights that drive growth, innovation, and sustainable competitive advantage in an increasingly complex global marketplace.
              </p>
            </div>
            <div className="p-8 bg-white rounded-lg shadow-lg border-l-4" style={{ borderColor: "#d9415d" }}>
              <h3 className="text-2xl font-bold mb-4" style={{ color: "#d9415d" }}>Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To deliver world-class market research and consumer insights through innovative methodologies, exceptional client service, and talented research professionals, enabling our clients to make informed strategic decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4" style={{ color: "#0367a6" }}>Our Core Values</h2>
          <p className="text-center text-gray-600 mb-12 text-lg max-w-3xl mx-auto">
            These values guide every decision we make and shape our company culture
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="p-6 rounded-lg border-2 border-gray-100 hover:shadow-lg transition-shadow">
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-2xl font-bold mb-3" style={{ color: "#0367a6" }}>{value.title}</h3>
                <p className="text-gray-700">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline/Milestones */}
      <section className="py-16 md:py-24 px-4 md:px-8" style={{ background: "linear-gradient(135deg, #0367a6 0%, #0378a6 100%)" }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-white">Our Journey</h2>
          <p className="text-center text-white mb-12 text-lg">
            Key milestones that define our growth and success
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            {milestones.map((milestone, index) => (
              <div key={index} className="bg-white bg-opacity-95 p-8 rounded-lg text-center">
                <div className="text-4xl font-bold mb-2" style={{ color: "#d9415d" }}>
                  {milestone.year}
                </div>
                <p className="text-gray-700 font-semibold">{milestone.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4" style={{ color: "#0367a6" }}>Leadership Team</h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Meet the experienced professionals leading our organization
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6 bg-white">
                  <h3 className="text-xl font-bold mb-1" style={{ color: "#0367a6" }}>{member.name}</h3>
                  <p className="text-red-600 font-semibold mb-3">{member.position}</p>
                  <p className="text-gray-600 text-sm">{member.expertise}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center p-6">
              <div className="text-5xl font-bold mb-2" style={{ color: "#0367a6" }}>500+</div>
              <p className="text-gray-700 font-semibold">Projects Completed</p>
            </div>
            <div className="text-center p-6">
              <div className="text-5xl font-bold mb-2" style={{ color: "#d9415d" }}>200+</div>
              <p className="text-gray-700 font-semibold">Happy Clients</p>
            </div>
            <div className="text-center p-6">
              <div className="text-5xl font-bold mb-2" style={{ color: "#0367a6" }}>50+</div>
              <p className="text-gray-700 font-semibold">Research Professionals</p>
            </div>
            <div className="text-center p-6">
              <div className="text-5xl font-bold mb-2" style={{ color: "#d9415d" }}>15+</div>
              <p className="text-gray-700 font-semibold">Years of Excellence</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4" style={{ color: "#0367a6" }}>Why Choose BMRB Research?</h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            We differentiate ourselves through expertise, innovation, and client-centric approach
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="text-2xl font-bold" style={{ color: "#0367a6" }}>✓</div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Industry Expertise</h3>
                <p className="text-gray-700">Deep understanding of diverse industry sectors and market dynamics</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="text-2xl font-bold" style={{ color: "#0367a6" }}>✓</div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Advanced Methodologies</h3>
                <p className="text-gray-700">Cutting-edge research techniques combining quantitative and qualitative methods</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="text-2xl font-bold" style={{ color: "#0367a6" }}>✓</div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Dedicated Team</h3>
                <p className="text-gray-700">Experienced researchers and analysts committed to your success</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="text-2xl font-bold" style={{ color: "#0367a6" }}>✓</div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Quick Turnaround</h3>
                <p className="text-gray-700">Efficient project execution without compromising on quality</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="text-2xl font-bold" style={{ color: "#0367a6" }}>✓</div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Affordable Pricing</h3>
                <p className="text-gray-700">Flexible pricing models tailored to your budget and requirements</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="text-2xl font-bold" style={{ color: "#0367a6" }}>✓</div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">24/7 Support</h3>
                <p className="text-gray-700">Continuous client support and project oversight</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
