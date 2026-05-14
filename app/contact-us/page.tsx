'use client';

import PageHero from "@/components/PageHero";
import Section from "@/components/ui/Section";
import Input from "@/components/ui/Input";
import TextArea from "@/components/ui/TextArea";
import Button from "@/components/ui/Button";
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from "lucide-react";
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
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setSubmitted(true);
      setLoading(false);
      setTimeout(() => {
        setFormData({ name: '', email: '', phone: '', company: '', subject: '', message: '' });
        setSubmitted(false);
      }, 3000);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: "+91-98667 39499",
      description: "Call us during business hours"
    },
    {
      icon: Mail,
      title: "Email",
      details: "director@bmrb.in",
      description: "We'll respond within 24 hours"
    },
    {
      icon: MapPin,
      title: "Office",
      details: "Hyderabad, Telangana",
      description: "Corporate headquarters in India"
    },
    {
      icon: Clock,
      title: "Hours",
      details: "Mon - Fri: 9 AM - 6 PM",
      description: "24/7 WhatsApp support"
    }
  ];

  const offices = [
    {
      city: "Hyderabad",
      address: "BMRB Research Pvt Ltd, Hyderabad, Telangana",
      phone: "+91-98667 39499",
      whatsapp: "+91-98661 80977"
    },
    {
      city: "Pan India",
      address: "Available across all major cities",
      phone: "+91-98667 39499",
      whatsapp: "+91-98661 80977"
    }
  ];

  const faqs = [
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
      a: "We employ both quantitative (surveys, polling) and qualitative (focus groups, interviews) methodologies."
    }
  ];

  return (
    <main className="min-h-screen overflow-x-hidden">
      <PageHero 
        title="Contact Us" 
        description="Let's discuss your market research needs. We're here to help."
        backgroundImage="/images/home-bg.avif"
      />

      {/* Quick Contact Cards */}
      <Section lightBg className="relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((info, idx) => {
            const Icon = info.icon;
            return (
              <div 
                key={idx}
                className="p-6 rounded-xl border border-neutral-200 bg-white card-hover text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-1">
                  {info.title}
                </h3>
                <p className="font-semibold text-accent text-sm mb-1">{info.details}</p>
                <p className="text-xs text-foreground-secondary">{info.description}</p>
              </div>
            );
          })}
        </div>
      </Section>

      {/* Contact Form & Info */}
      <Section className="relative">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="animate-slide-in-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
              Send us a Message
            </h2>

            {submitted ? (
              <div className="bg-green-50 border-2 border-green-200 p-8 md:p-12 rounded-xl text-center animate-scale-in">
                <div className="w-16 h-16 bg-green-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">✓</span>
                </div>
                <h3 className="text-2xl font-bold text-green-700 mb-2">Thank You!</h3>
                <p className="text-green-700">We've received your message and will get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <Input
                  label="Full Name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  required
                />

                <Input
                  label="Email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                />

                <Input
                  label="Phone Number"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91-XXXXXXXXXX"
                />

                <Input
                  label="Company"
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your company name"
                />

                <Input
                  label="Subject"
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Research project inquiry"
                  required
                />

                <TextArea
                  label="Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your research needs..."
                  required
                />

                <Button 
                  type="submit"
                  variant="primary"
                  size="lg"
                  loading={loading}
                  className="w-full justify-center group"
                >
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  Send Message
                </Button>
              </form>
            )}
          </div>

          {/* Contact Information */}
          <div className="animate-slide-in-right">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
              Get in Touch
            </h2>

            <div className="space-y-6 mb-8">
              {offices.map((office, idx) => (
                <div key={idx} className="bg-white border border-neutral-200 p-6 rounded-xl card-hover">
                  <h3 className="text-xl font-bold mb-4 text-accent">
                    {office.city}
                  </h3>
                  <div className="space-y-3 text-foreground-secondary">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                      <p className="text-sm">{office.address}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                      <a href={`tel:${office.phone}`} className="text-sm hover:text-accent transition-colors underline-accent">
                        {office.phone}
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <MessageCircle className="w-5 h-5 text-accent flex-shrink-0" />
                      <a href={`https://wa.me/${office.whatsapp.replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer" className="text-sm hover:text-accent transition-colors underline-accent">
                        WhatsApp: {office.whatsapp}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Support Box */}
            <div className="p-6 md:p-8 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 border border-accent/20">
              <div className="flex items-start gap-4">
                <MessageCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-foreground mb-2">Need Quick Support?</h3>
                  <p className="text-foreground-secondary text-sm mb-4">
                    Click the WhatsApp button in the corner to chat with us directly. We're available 24/7!
                  </p>
                  <a
                    href="https://wa.me/919866180977"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-accent font-semibold hover:underline"
                  >
                    Chat on WhatsApp
                    <MessageCircle className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section
        title="Frequently Asked Questions"
        subtitle="FAQ"
        description="Quick answers to common questions about our services"
        lightBg
      >
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((item, idx) => (
              <details 
                key={idx} 
                className="group border border-neutral-200 rounded-xl overflow-hidden bg-white hover:border-accent/30 transition-colors"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-neutral-50 transition-colors">
                  <h3 className="text-lg font-semibold text-foreground pr-4">
                    {item.q}
                  </h3>
                  <span className="text-accent group-open:rotate-180 transition-transform flex-shrink-0">
                    ▼
                  </span>
                </summary>
                <div className="px-6 pb-6 pt-2 text-foreground-secondary border-t border-neutral-100">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </Section>

      {/* Final CTA */}
      <Section className="bg-gradient-to-br from-primary to-primary-light">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white text-balance">
            Ready to Start Your Research Project?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Contact us today and let's discuss how we can help your business grow and thrive in today's market.
          </p>
          <Button
            variant="primary"
            size="lg"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="bg-white text-primary hover:bg-neutral-100 border-white"
          >
            Back to Top
          </Button>
        </div>
      </Section>
    </main>
  );
}
