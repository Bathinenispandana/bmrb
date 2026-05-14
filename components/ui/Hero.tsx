import React from "react";

interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  backgroundImage?: string;
  children?: React.ReactNode;
  className?: string;
}

export default function Hero({
  title,
  subtitle,
  description,
  backgroundImage,
  children,
  className = "",
}: HeroProps) {
  return (
    <section className={`relative min-h-[60vh] md:min-h-[70vh] lg:min-h-[80vh] flex items-center justify-center overflow-hidden pt-20 ${className}`}>
      {/* Background */}
      {backgroundImage && (
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary-light/80" />
        </div>
      )}

      {!backgroundImage && (
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-primary via-primary-light to-primary-dark" />
      )}

      {/* Content */}
      <div className="section-container relative z-10">
        <div className="max-w-4xl">
          {subtitle && (
            <div className="mb-4 inline-block">
              <span className="text-accent font-semibold text-sm md:text-base uppercase tracking-widest">
                {subtitle}
              </span>
            </div>
          )}

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight text-balance">
            {title}
          </h1>

          {description && (
            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed text-pretty">
              {description}
            </p>
          )}

          {children}
        </div>
      </div>

      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white/5 to-transparent" />
    </section>
  );
}
