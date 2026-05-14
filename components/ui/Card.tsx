import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = "", hover = true }: CardProps) {
  return (
    <div
      className={`
        bg-white border border-neutral-200 rounded-xl p-6
        ${hover ? "card-hover" : "transition-all duration-300"}
        shadow-sm hover:shadow-md
        ${className}
      `}
    >
      {children}
    </div>
  );
}
