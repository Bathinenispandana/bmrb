"use client";

import Link from "next/link";
import { MapPin, Phone, Mail, Linkedin, Twitter, Facebook, ArrowRight } from "lucide-react";

const footerLinks = [
  { name: "Work", href: "/#portfolio" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about-us" },
  { name: "Contact", href: "/contact-us" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
      {/* CTA Section */}
      <div className="border-b border-white/10">
        <div className="section-container py-16 md:py-24">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Let&apos;s Discuss Your Research Needs
            </h2>
            <p className="text-lg text-background/80 mb-10">
              Contact us to explore how our market research solutions can drive your business forward.
            </p>
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white font-semibold hover:bg-accent-dark transition-all duration-300 hover:-translate-y-1"
            >
              Get in Touch
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="section-container py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="text-xl md:text-2xl font-bold tracking-widest mb-6">
              BMRB
            </div>
            <p className="text-background/70 mb-8 leading-relaxed">
              Brand Market Research Bureau is a leading market research organization providing comprehensive research solutions, strategic intelligence, and business consulting across India for over 25 years.
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              {[
                { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
                { icon: Twitter, label: "Twitter", href: "https://twitter.com" },
                { icon: Facebook, label: "Facebook", href: "https://facebook.com" },
              ].map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-accent hover:border-accent transition-all duration-300 hover:scale-110"
                    aria-label={social.label}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest mb-8">Quick Links</h3>
            <ul className="space-y-4">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-background/70 hover:text-background transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest mb-8">Contact</h3>
            <ul className="space-y-4 text-sm text-background/70">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="flex-shrink-0 mt-1 text-accent" />
                <span>Hyderabad, Telangana, India</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={16} className="flex-shrink-0 mt-1 text-accent" />
                <a href="tel:+919866739499" className="hover:text-background transition-colors">
                  +91 98667 39499
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={16} className="flex-shrink-0 mt-1 text-accent" />
                <a href="mailto:director@bmrb.in" className="hover:text-background transition-colors">
                  director@bmrb.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <p className="text-background/60 text-sm text-center">
            © {currentYear} Brand Market Research Bureau | All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
