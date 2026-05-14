"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  {
    name: "Services",
    href: "/services",
    submenu: [
      { name: "Brand & Equity Research", href: "/services#brand-equity" },
      { name: "Customer Satisfaction", href: "/services#customer-satisfaction" },
      { name: "B2B & Industrial Research", href: "/services#b2b-research" },
      { name: "Election & Opinion Polls", href: "/services#election-polls" },
      { name: "Product & Packaging Tests", href: "/services#product-tests" },
    ],
  },
  { name: "Clients", href: "/clients" },
  { name: "Contact Us", href: "/contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-primary/95 backdrop-blur-md shadow-2xl py-3 border-b border-white/10"
          : "bg-gradient-to-b from-primary/80 to-transparent py-4 md:py-5"
      }`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center group flex-shrink-0">
            <Image
              src="/images/logo.avif"
              alt="Brand Market Research Bureau"
              width={180}
              height={50}
              className="h-8 md:h-10 w-auto transition-transform duration-300 group-hover:scale-105"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={`flex items-center gap-1.5 px-3.5 py-2 font-medium text-sm tracking-wide transition-all duration-300 rounded-lg underline-accent ${
                    isActive(item.href)
                      ? "text-white"
                      : "text-white/90 hover:text-white"
                  }`}
                >
                  {item.name}
                  {item.submenu && (
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                  )}
                </Link>

                {/* Dropdown */}
                {item.submenu && activeDropdown === item.name && (
                  <div className="absolute top-full left-0 pt-2 min-w-[280px] animate-slide-down">
                    <div className="bg-white rounded-xl shadow-2xl py-2 border border-neutral-200 overflow-hidden">
                      {item.submenu.map((subitem, idx) => (
                        <Link
                          key={subitem.name}
                          href={subitem.href}
                          className={`flex items-center px-5 py-3 text-foreground hover:bg-neutral-50 hover:text-primary-light text-sm transition-all duration-200 border-l-4 ${idx === 0 ? 'border-l-accent' : 'border-l-transparent hover:border-l-accent'}`}
                        >
                          <span className="w-2 h-2 rounded-full bg-accent mr-3" />
                          {subitem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* CTA Button */}
            <Link href="/contact" className="ml-6">
              <Button variant="primary" size="md" className="group">
                Get Quote
                <ArrowRight className="w-4 h-4 inline-block ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden flex items-center gap-2 text-white p-2 -mr-2"
            aria-label="Toggle menu"
          >
            <span className="text-xs font-bold tracking-widest uppercase">Menu</span>
            <div className="relative w-6 h-6">
              <Menu className={`w-6 h-6 absolute transition-all duration-300 ${isOpen ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'}`} />
              <X className={`w-6 h-6 absolute transition-all duration-300 ${isOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`lg:hidden overflow-hidden transition-all duration-500 ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
        <nav className="bg-primary border-t border-white/10 mt-3">
          <div className="section-container py-4">
            {navItems.map((item, idx) => (
              <div key={item.name} className={`${idx !== navItems.length - 1 ? 'border-b border-white/10' : ''}`}>
                <Link
                  href={item.href}
                  className={`flex items-center justify-between py-3.5 font-medium transition-colors ${
                    isActive(item.href) ? "text-white" : "text-white/80 hover:text-white"
                  }`}
                >
                  {item.name}
                  {item.submenu && <ChevronDown className="w-4 h-4 text-white/50" />}
                </Link>
                {item.submenu && (
                  <div className="pl-4 pb-3 space-y-2">
                    {item.submenu.map((subitem) => (
                      <Link
                        key={subitem.name}
                        href={subitem.href}
                        className="block py-2.5 text-white/70 text-sm hover:text-white transition-colors"
                      >
                        • {subitem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link href="/contact" className="block mt-5">
              <Button variant="primary" size="md" className="w-full justify-center">
                Get Quote
              </Button>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
