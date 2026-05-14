import React from "react";
import Image from "next/image";

interface ClientCardProps {
  logo: string;
  name: string;
  industry: string;
  className?: string;
}

export default function ClientCard({
  logo,
  name,
  industry,
  className = "",
}: ClientCardProps) {
  return (
    <div className={`p-6 md:p-8 rounded-xl border border-neutral-200 bg-white flex flex-col items-center justify-center text-center card-hover ${className}`}>
      <div className="mb-4 relative w-24 h-24 md:w-32 md:h-32">
        <Image
          src={logo}
          alt={name}
          fill
          className="object-contain"
        />
      </div>
      <h3 className="text-lg font-bold text-foreground">{name}</h3>
      <p className="text-sm text-foreground-secondary mt-2">{industry}</p>
    </div>
  );
}
