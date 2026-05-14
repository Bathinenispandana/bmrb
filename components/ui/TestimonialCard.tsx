import React from "react";
import { Star, Quote } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  rating?: number;
  className?: string;
}

export default function TestimonialCard({
  quote,
  author,
  role,
  company,
  rating = 5,
  className = "",
}: TestimonialCardProps) {
  return (
    <div className={`p-6 md:p-8 rounded-xl border border-neutral-200 bg-white card-hover ${className}`}>
      <div className="flex gap-1 mb-4">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-accent text-accent" />
        ))}
      </div>

      <Quote className="w-8 h-8 text-accent/20 mb-3" />

      <p className="text-foreground leading-relaxed mb-6 text-pretty">{quote}</p>

      <div className="pt-4 border-t border-neutral-200">
        <p className="font-semibold text-foreground">{author}</p>
        <p className="text-sm text-foreground-secondary">
          {role} at {company}
        </p>
      </div>
    </div>
  );
}
