"use client";

import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail, MessageCircle, Linkedin, Twitter, Facebook, ArrowRight } from "lucide-react";

const footerLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Clients", href: "/clients" },
  { name: "Contact Us", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0a1628] text-white">
      {/* CTA Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/home-end.avif"
            alt="Background"
            fill
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0367a6] to-[#0378a6]" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white text-center md:text-left">
              Ready to Start Your Next Research Project?
            </h2>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 bg-white text-[#0367a6] font-semibold px-8 py-4 rounded-full text-sm tracking-wide transition-all duration-300 hover:shadow-xl hover:shadow-white/20 hover:-translate-y-1"
            >
              Get In Touch
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Image
              src="/images/logo.avif"
              alt="Brand Market Research Bureau"
              width={200}
              height={60}
              className="mb-6"
            />
            <p className="text-gray-400 mb-8 max-w-md leading-relaxed">
              Brand Market Research Bureau is a market research organization providing
              qualitative data, business consulting, and research solutions across India.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 bg-white/10 hover:bg-[#0367a6] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 bg-white/10 hover:bg-[#0367a6] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 bg-white/10 hover:bg-[#0367a6] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">EXPLORE</h3>
            <ul className="space-y-4">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors inline-flex items-center group"
                  >
                    <span className="w-0 h-[2px] bg-[#d9415d] mr-0 group-hover:w-4 group-hover:mr-3 transition-all duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">REACH US</h3>
            <ul className="space-y-5">
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-[#d9415d]" />
                </div>
                <div>
                  <p className="text-white font-medium mb-1">Address:</p>
                  <p className="text-gray-400">Hyderabad, Telangana, India</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-[#d9415d]" />
                </div>
                <div>
                  <p className="text-white font-medium mb-1">Phone:</p>
                  <a
                    href="tel:+919866739499"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    +91 98667 39499
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-5 h-5 text-[#d9415d]" />
                </div>
                <div>
                  <p className="text-white font-medium mb-1">WhatsApp:</p>
                  <a
                    href="https://wa.me/919866180977"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    +91 98661 80977
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-[#d9415d]" />
                </div>
                <div>
                  <p className="text-white font-medium mb-1">Email:</p>
                  <a
                    href="mailto:director@bmrb.in"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    director@bmrb.in
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-gray-500 text-sm text-center">
            © {new Date().getFullYear()} Brand Market Research Bureau | www.bmrb.in | All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
