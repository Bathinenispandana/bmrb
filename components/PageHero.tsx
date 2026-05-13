"use client";

import Image from "next/image";
import Link from "next/link";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  breadcrumb: string;
  backgroundImage?: string;
}

export default function PageHero({
  title,
  subtitle,
  breadcrumb,
  backgroundImage = "/images/home-bg-3.avif",
}: PageHeroProps) {
  return (
    <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/95 via-[#0a1628]/90 to-[#0a1628]/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        {/* Breadcrumb */}
        <nav className="flex items-center justify-center gap-2 text-white/60 text-sm mb-6">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-white">{breadcrumb}</span>
        </nav>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
          {title}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}

        {/* Decorative Line */}
        <div className="mt-8 flex justify-center">
          <div className="w-20 h-1 bg-gradient-to-r from-[#0367a6] via-[#d9415d] to-[#0378a6] rounded-full" />
        </div>
      </div>

      {/* Wave */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
}
