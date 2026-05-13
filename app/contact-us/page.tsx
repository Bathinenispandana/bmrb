'use client';

import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', company: '', subject: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: "+91-40-4017 5555",
      description: "Call us during business hours"
    },
    {
      icon: Mail,
      title: "Email",
      details: "info@bmrb.in",
      description: "We'll respond within 24 hours"
    },
    {
      icon: MapPin,
      title: "Office Address",
      details: "Hyderabad, Telangana",
      description: "Corporate headquarters in India"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Mon - Fri: 9:00 AM - 6:00 PM",
      description: "24/7 emergency support available"
    }
  ];

  const offices = [
    {
      city: "Hyderabad",
      address: "BMRB Research Pvt Ltd, Hyderabad, Telangana",
      phone: "+91-40-4017 5555",
      email: "hyderabad@bmrb.in"
    },
    {
      city: "Delhi",
      address: "BMRB Research, New Delhi, India",
      phone: "+91-11-XXXX XXXX",
      email: "delhi@bmrb.in"
    },
    {
      city: "Mumbai",
      address: "BMRB Research, Mumbai, Maharashtra",
      phone: "+91-22-XXXX XXXX",
      email: "mumbai@bmrb.in"
    },
    {
      city: "Bangalore",
      address: "BMRB Research, Bangalore, Karnataka",
      phone: "+91-80-XXXX XXXX",
      email: "bangalore@bmrb.in"
    }
  ];

  return (
    <main className="min-h-screen overflow-x-hidden">
      <PageHero 
        title="Contact Us" 
        description="Get in touch with our team. We're here to help with your research needs."
        backgroundImage="/images/home-bg.avif"
      />

      {/* Contact Information Cards */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {contactInfo.map((info, idx) => {
              const Icon = info.icon;
              return (
                <div 
                  key={idx}
                  className="p-6 rounded-lg border-2 border-gray-100 hover:shadow-lg transition-shadow text-center"
                >
                  <div className="flex justify-center mb-4">
                    <Icon size={32} style={{ color: "#0367a6" }} />
                  </div>
                  <h3 className="text-lg font-bold mb-2" style={{ color: "#0367a6" }}>
                    {info.title}
                  </h3>
                  <p className="font-semibold text-gray-800 mb-1">{info.details}</p>
                  <p className="text-sm text-gray-600">{info.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6" style={{ color: "#0367a6" }}>
                Send us a Message
              </h2>

              {submitted ? (
                <div className="bg-green-50 border-2 border-green-200 p-8 rounded-lg text-center">
                  <div className="text-5xl mb-4">✓</div>
                  <h3 className="text-2xl font-bold text-green-700 mb-2">Thank You!</h3>
                  <p className="text-green-700">We've received your message and will get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-gray-700">Full Name</label>
                    <input 
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your full name"
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2 text-gray-700">Email</label>
                    <input 
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2 text-gray-700">Phone Number</label>
                    <input 
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91-XXXXXXXXXX"
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2 text-gray-700">Company</label>
                    <input 
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your company name"
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2 text-gray-700">Subject</label>
                    <input 
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="Research project inquiry"
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2 text-gray-700">Message</label>
                    <textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Tell us about your research needs..."
                      rows="6"
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 resize-none"
                    ></textarea>
                  </div>

                  <button 
                    type="submit"
                    className="w-full py-3 rounded-lg font-bold text-white text-lg transition-colors flex items-center justify-center gap-2"
                    style={{ backgroundColor: "#0367a6" }}
                    onMouseEnter={(e) => e.target.style.backgroundColor = "#d9415d"}
                    onMouseLeave={(e) => e.target.style.backgroundColor = "#0367a6"}
                  >
                    <Send size={20} />
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-6" style={{ color: "#0367a6" }}>
                Our Offices
              </h2>

              <div className="space-y-6">
                {offices.map((office, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-lg shadow-lg">
                    <h3 className="text-xl font-bold mb-3" style={{ color: "#d9415d" }}>
                      {office.city}
                    </h3>
                    <div className="space-y-2 text-gray-700">
                      <div className="flex items-start gap-2">
                        <MapPin size={20} style={{ color: "#0367a6" }} className="flex-shrink-0 mt-1" />
                        <p>{office.address}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone size={20} style={{ color: "#0367a6" }} className="flex-shrink-0" />
                        <a href={`tel:${office.phone}`} className="hover:underline">{office.phone}</a>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mail size={20} style={{ color: "#0367a6" }} className="flex-shrink-0" />
                        <a href={`mailto:${office.email}`} className="hover:underline">{office.email}</a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 rounded-lg" style={{ backgroundColor: "#f0f8ff" }}>
                <h3 className="font-bold mb-3" style={{ color: "#0367a6" }}>Need Quick Support?</h3>
                <p className="text-gray-700 mb-4">
                  Click the WhatsApp button in the corner to chat with us directly. We're available 24/7!
                </p>
                <button 
                  className="px-6 py-2 rounded-lg font-semibold text-white transition-colors"
                  style={{ backgroundColor: "#25D366" }}
                >
                  Chat on WhatsApp
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4" style={{ color: "#0367a6" }}>
            Frequently Asked Questions
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Quick answers to common questions about our services
          </p>

          <div className="space-y-4">
            {[
              {
                q: "What's the typical turnaround time for a research project?",
                a: "Most projects are completed within 2-4 weeks depending on scope. Expedited timelines are available upon request."
              },
              {
                q: "Do you work with international clients?",
                a: "Yes, we have experience working with multinational companies and offer services in multiple countries."
              },
              {
                q: "How much does a typical research project cost?",
                a: "Pricing varies based on project scope, sample size, and complexity. Contact us for a customized quote."
              },
              {
                q: "What research methodologies do you use?",
                a: "We employ both quantitative (surveys, polling) and qualitative (focus groups, interviews) methodologies based on your needs."
              }
            ].map((item, idx) => (
              <div key={idx} className="border-2 border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-bold mb-2" style={{ color: "#0367a6" }}>
                  {item.q}
                </h3>
                <p className="text-gray-700">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section 
        className="py-16 md:py-24 px-4 md:px-8"
        style={{ background: "linear-gradient(135deg, #0367a6 0%, #0378a6 100%)" }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 text-white">
            Ready to Start Your Research Project?
          </h2>
          <p className="text-lg text-white mb-8">
            Contact us today and let's discuss how we can help your business grow
          </p>
          <button 
            className="px-8 py-4 rounded-lg font-bold text-lg transition-transform hover:scale-105"
            style={{ backgroundColor: "#d9415d", color: "white" }}
            onClick={() => window.scrollTo(0, 0)}
          >
            Back to Top
          </button>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
