"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <a
      href="https://wa.me/919866180977"
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 right-6 z-50 w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:shadow-2xl hover:shadow-green-500/30 transition-all duration-300 hover:scale-110 group ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      aria-label="Chat on WhatsApp"
    >
      <Image
        src="/images/whatsapp_icon_green.avif"
        alt="WhatsApp Chat"
        width={36}
        height={36}
        className="brightness-0 invert"
      />
      
      {/* Tooltip */}
      <span className="absolute right-full mr-3 bg-white text-gray-800 px-4 py-2 rounded-lg shadow-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        WhatsApp Chat
      </span>
      
      {/* Pulse Animation */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
    </a>
  );
}
