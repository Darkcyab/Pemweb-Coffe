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

  useEffect(() => {
    if (!isOpen) return undefined;
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [isOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,backdrop-filter,border-color,box-shadow,padding] duration-500 ease-out ${
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
                className={`text-sm tracking-widest uppercase transition-colors duration-300 relative py-1 font-medium after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-left after:bg-[#D4AF37] after:transition-transform after:duration-300 after:ease-out ${
                  isActive
                    ? "text-[#D4AF37] font-semibold after:scale-x-100"
                    : "text-[#F5F0E8]/80 after:scale-x-0 hover:text-[#D4AF37] hover:after:scale-x-100"
                }`}
              >
                {link.label}
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
          aria-expanded={isOpen}
          className="md:hidden flex h-10 w-10 items-center justify-center rounded-sm border border-[#D4AF37]/20 text-[#F5F0E8] transition-[color,background-color,border-color] duration-300 hover:border-[#D4AF37]/50 hover:bg-[#4A2E1B]/30 hover:text-[#D4AF37] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4AF37]"
        >
          <span className="flex w-5 flex-col gap-1.5" aria-hidden="true">
            <span className={`h-px w-full bg-current transition-transform duration-300 ease-out ${isOpen ? "translate-y-[3.5px] rotate-45" : ""}`} />
            <span className={`h-px w-full bg-current transition-transform duration-300 ease-out ${isOpen ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
          </span>
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <div className={`grid md:hidden transition-[grid-template-rows,opacity] duration-500 ease-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] pointer-events-none opacity-0"}`} aria-hidden={!isOpen}>
        <div className="overflow-hidden">
          <div className="border-b border-[#D4AF37]/20 bg-[#1A1A1A] px-6 py-6 shadow-2xl">
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
        </div>
      </div>
    </header>
  );
}
