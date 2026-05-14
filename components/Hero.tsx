"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Linkedin, Twitter, Facebook, TrendingUp, Users, Award } from "lucide-react";
import Button from "@/components/ui/Button";

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const stats = [
    { icon: Award, value: "25+", label: "Years Experience" },
    { icon: Users, value: "500+", label: "Projects Completed" },
    { icon: TrendingUp, value: "100+", label: "Expert Researchers" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-primary-dark to-primary pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/images/home-bg.avif"
          alt="Market Research Background"
          fill
          className="object-cover opacity-20"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary-light/20 to-primary/95" />
      </div>

      {/* Content */}
      <div className="relative z-10 section-container py-20 md:py-32 lg:py-40">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full mb-8">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span className="text-white/90 text-sm font-medium">Market Research Excellence</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 text-balance">
              Unlock Market{" "}
              <span className="gradient-text">Insights</span>
            </h1>

            <p className="text-xl text-white/80 mb-8 leading-relaxed text-pretty max-w-lg">
              Comprehensive market research and business intelligence solutions delivered by India&apos;s most trusted research organization.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link href="/services">
                <Button variant="primary" size="lg" className="group w-full sm:w-auto justify-center sm:justify-start">
                  Explore Services
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="w-full sm:w-auto justify-center sm:justify-start border-white text-white hover:bg-white/10">
                  Get in Touch
                </Button>
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-6">
              <span className="text-white/60 text-sm font-medium">Follow us:</span>
              <div className="flex gap-3">
                {[
                  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
                  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
                  { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-accent flex items-center justify-center transition-all duration-300 hover:scale-110"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 text-white" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - Image with Stats */}
          <div className={`hidden lg:block transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative h-[500px]">
              {/* Main Image */}
              <div className="absolute right-0 top-10 w-full max-w-[350px] h-[400px] rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                <Image
                  src="/images/home-1.avif"
                  alt="Market Research Team"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
              </div>

              {/* Stat Cards */}
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className={`absolute p-6 rounded-xl shadow-lg backdrop-blur border border-white/20 animate-slide-up ${
                    idx === 0
                      ? "top-0 left-0 bg-white/10 w-48"
                      : idx === 1
                      ? "top-40 left-12 bg-accent w-48 text-white"
                      : "bottom-20 left-0 bg-white w-48 text-foreground"
                  }`}
                  style={{ animationDelay: `${idx * 200}ms` }}
                >
                  <stat.icon className="w-6 h-6 mb-3" />
                  <div className="text-3xl font-bold mb-1">{stat.value}</div>
                  <div className={`text-sm ${idx === 1 ? 'text-white/90' : 'text-white/70'}`}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Stats - Visible on small screens */}
        <div className="lg:hidden grid grid-cols-3 gap-4 mt-16">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-4 rounded-lg bg-white/10 backdrop-blur border border-white/20 text-center"
            >
              <stat.icon className="w-6 h-6 text-accent mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">{stat.value}</div>
              <div className="text-xs text-white/70 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:block">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center p-2">
          <div className="w-1 h-2 bg-white/60 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
