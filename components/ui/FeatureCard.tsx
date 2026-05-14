import React from "react";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href?: string;
  className?: string;
}

export default function FeatureCard({
  icon: Icon,
  title,
  description,
  href,
  className = "",
}: FeatureCardProps) {
  const content = (
    <div className={`p-6 md:p-8 rounded-xl border border-neutral-200 bg-white transition-all duration-300 card-hover ${className}`}>
      <div className="mb-4 inline-flex p-3 bg-accent/10 rounded-lg">
        <Icon className="w-6 h-6 md:w-7 md:h-7 text-accent" />
      </div>
      <h3 className="text-lg md:text-xl font-bold text-foreground mb-2">
        {title}
      </h3>
      <p className="text-foreground-secondary leading-relaxed text-pretty">
        {description}
      </p>
    </div>
  );

  if (href) {
    return <a href={href} className="block">{content}</a>;
  }

  return content;
}
