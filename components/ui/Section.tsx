import React from "react";

interface SectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  lightBg?: boolean;
}

export default function Section({
  title,
  subtitle,
  description,
  children,
  className = "",
  containerClassName = "",
  lightBg = false,
}: SectionProps) {
  return (
    <section className={`${lightBg ? "bg-neutral-50" : "bg-white"} ${className}`}>
      <div className={`section-container section-padding ${containerClassName}`}>
        {(title || subtitle || description) && (
          <div className="mb-12 md:mb-16 lg:mb-20 max-w-3xl">
            {subtitle && (
              <span className="text-accent font-semibold text-sm md:text-base uppercase tracking-widest">
                {subtitle}
              </span>
            )}
            {title && (
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4 text-balance">
                {title}
              </h2>
            )}
            {description && (
              <p className="text-lg text-foreground-secondary leading-relaxed text-pretty">
                {description}
              </p>
            )}
          </div>
        )}

        {children}
      </div>
    </section>
  );
}
