"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[#0a1628]/95 backdrop-blur-md shadow-2xl py-3"
          : "bg-gradient-to-b from-[#0a1628]/80 to-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <Image
              src="/images/logo.avif"
              alt="Brand Market Research Bureau"
              width={180}
              height={50}
              className="h-10 md:h-12 w-auto transition-transform duration-300 group-hover:scale-105"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={`flex items-center gap-1 px-4 py-2 font-medium text-sm tracking-wide transition-all duration-300 rounded-lg hover:bg-white/10 ${
                    isActive(item.href)
                      ? "text-white bg-white/10"
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
                  <div className="absolute top-full left-0 pt-2 min-w-[260px]">
                    <div className="bg-white rounded-xl shadow-2xl py-3 border border-gray-100 overflow-hidden">
                      <div className="absolute top-0 left-6 w-3 h-3 bg-white transform rotate-45 -translate-y-1.5 border-l border-t border-gray-100"></div>
                      {item.submenu.map((subitem) => (
                        <Link
                          key={subitem.name}
                          href={subitem.href}
                          className="flex items-center px-5 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-[#0367a6]/10 hover:to-transparent hover:text-[#0367a6] text-sm transition-all duration-200 border-l-2 border-transparent hover:border-[#0367a6]"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#d9415d] mr-3"></span>
                          {subitem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* CTA Button */}
            <Link
              href="/contact"
              className="ml-4 bg-[#d9415d] hover:bg-[#d92938] text-white font-semibold px-6 py-2.5 rounded-full text-sm transition-all duration-300 hover:shadow-lg hover:shadow-[#d9415d]/40 hover:-translate-y-0.5"
            >
              Get Quote
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden flex items-center gap-2 text-white p-2"
            aria-label="Toggle menu"
          >
            <span className="text-sm font-semibold tracking-wide">MENU</span>
            <div className="relative w-6 h-6">
              <Menu className={`w-6 h-6 absolute transition-all duration-300 ${isOpen ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'}`} />
              <X className={`w-6 h-6 absolute transition-all duration-300 ${isOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`lg:hidden overflow-hidden transition-all duration-500 ${isOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <nav className="bg-[#0a1628] border-t border-white/10 mt-4">
          <div className="max-w-7xl mx-auto px-4 py-4">
            {navItems.map((item) => (
              <div key={item.name} className="border-b border-white/10 last:border-0">
                <Link
                  href={item.href}
                  className={`flex items-center justify-between py-4 font-medium ${
                    isActive(item.href) ? "text-white" : "text-white/80"
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
                        className="block py-2 text-white/60 text-sm hover:text-white transition-colors"
                      >
                        {subitem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              href="/contact"
              className="block mt-4 bg-[#d9415d] text-white font-semibold px-6 py-3.5 rounded-full text-center text-sm tracking-wide"
            >
              Get Quote
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
