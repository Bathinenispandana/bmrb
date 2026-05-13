"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Linkedin, Twitter, Facebook } from "lucide-react";

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/home-bg.avif"
          alt="Market Research Background"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/95 via-[#0a1628]/85 to-[#0a1628]/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <p className="text-white/80 font-medium text-sm md:text-base tracking-wide mb-6 flex items-center gap-3">
              <span className="w-10 h-[2px] bg-[#d9415d]"></span>
              A full-service market research organization providing insights across India.
            </p>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-8">
              Qualitative Data &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0378a6] to-[#0367a6]">
                In-depth Market Research
              </span>
            </h1>

            <div className="flex flex-wrap gap-4 mb-12">
              <Link
                href="#services"
                className="group inline-flex items-center gap-3 bg-[#d9415d] hover:bg-[#d92938] text-white font-semibold px-8 py-4 rounded-full text-sm tracking-wide transition-all duration-300 hover:shadow-2xl hover:shadow-[#d9415d]/40 hover:-translate-y-1"
              >
                EXPLORE OUR SERVICES
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-6">
              <div className="flex gap-2">
                {[
                  { icon: Linkedin, label: "LINKEDIN", href: "https://linkedin.com" },
                  { icon: Twitter, label: "TWITTER", href: "https://twitter.com" },
                  { icon: Facebook, label: "FACEBOOK", href: "https://facebook.com" },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 px-4 py-2 text-white/60 hover:text-white text-xs font-medium tracking-wider transition-all duration-300"
                  >
                    <social.icon className="w-4 h-4" />
                    <span className="hidden sm:inline">{social.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - Stats Cards */}
          <div className={`hidden lg:block transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative h-[500px]">
              {/* Main Image */}
              <div className="absolute right-0 top-10 w-[350px] h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/home-1.avif"
                  alt="Market Research Team"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Floating Stats Cards */}
              <div className="absolute top-0 left-0 bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 shadow-xl animate-float">
                <div className="text-4xl font-bold text-white mb-1">25+</div>
                <div className="text-white/70 text-sm">Years Experience</div>
              </div>
              
              <div className="absolute top-36 left-16 bg-[#d9415d] rounded-2xl p-6 shadow-2xl shadow-[#d9415d]/30 animate-float" style={{ animationDelay: '0.5s' }}>
                <div className="text-4xl font-bold text-white mb-1">500+</div>
                <div className="text-white/90 text-sm">Projects Completed</div>
              </div>
              
              <div className="absolute bottom-20 left-0 bg-white rounded-2xl p-6 shadow-2xl animate-float" style={{ animationDelay: '1s' }}>
                <div className="text-4xl font-bold text-[#0367a6] mb-1">100+</div>
                <div className="text-gray-600 text-sm">Research Experts</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
        <div className="w-7 h-12 border-2 border-white/30 rounded-full flex justify-center p-2">
          <div className="w-1.5 h-3 bg-white/60 rounded-full animate-bounce"></div>
        </div>
      </div>

      {/* Decorative Wave */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
}
