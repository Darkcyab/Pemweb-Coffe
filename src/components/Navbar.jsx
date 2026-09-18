"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS, SITE_CONFIG } from "@/lib/constants";
import Button from "./Button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#1A1A1A]/95 backdrop-blur-md py-3.5 border-b border-[#D4AF37]/20 shadow-lg shadow-black/40"
          : "bg-gradient-to-b from-[#1A1A1A]/90 via-[#1A1A1A]/60 to-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo / Brand */}
        <Link href="/" className="flex items-center gap-3 group">
          {/* Brand Icon */}
          <div className="w-10 h-10 rounded-sm bg-[#4A2E1B] border border-[#D4AF37]/40 flex items-center justify-center group-hover:border-[#D4AF37] transition-colors shadow-sm">
            <svg
              className="w-5 h-5 text-[#D4AF37]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
              <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" />
              <line x1="6" y1="2" x2="6" y2="4" />
              <line x1="10" y1="2" x2="10" y2="4" />
              <line x1="14" y1="2" x2="14" y2="4" />
            </svg>
          </div>

          {/* Brand Text */}
          <div className="flex flex-col">
            <span className="font-serif text-xl sm:text-2xl font-bold tracking-wider text-[#F5F0E8] group-hover:text-[#D4AF37] transition-colors">
              {SITE_CONFIG.shortName}
            </span>
            <span className="text-[9px] tracking-[0.25em] text-[#D4AF37] uppercase font-light -mt-1">
              Coffee &amp; Roastery
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm tracking-widest uppercase transition-all duration-200 relative py-1 font-medium ${
                  isActive
                    ? "text-[#D4AF37] font-semibold"
                    : "text-[#F5F0E8]/80 hover:text-[#D4AF37]"
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#D4AF37] rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Action CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Button
            href={SITE_CONFIG.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
            size="sm"
          >
            Order Now
          </Button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
          className="md:hidden p-2 rounded-sm text-[#F5F0E8] hover:text-[#D4AF37] hover:bg-[#4A2E1B]/30 border border-[#D4AF37]/20 transition-colors"
        >
          {isOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#1A1A1A] border-b border-[#D4AF37]/20 px-6 py-6 transition-all duration-300 shadow-2xl">
          <nav className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-base tracking-wider uppercase py-2 border-b border-[#D4AF37]/10 transition-colors ${
                    isActive
                      ? "text-[#D4AF37] font-semibold"
                      : "text-[#F5F0E8]/85 hover:text-[#D4AF37]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="pt-2">
              <Button
                href={SITE_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                size="md"
                className="w-full justify-center"
              >
                Order Now via WhatsApp
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
