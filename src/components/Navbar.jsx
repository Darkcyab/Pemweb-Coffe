"use client";
import { useState } from "react";
import Button from "./Button";

const links = [
  { label: "Home", href: "#home" }, { label: "Menu", href: "/menu" },
  { label: "Services", href: "/services" }, { label: "Contact Us", href: "/contact" },
];
export default function Navbar() {
  const [open, setOpen] = useState(false);
  return <header className="absolute inset-x-0 top-0 z-20 text-cream">
    <nav className="mx-auto flex max-w-[1440px] items-center justify-between px-4 py-5 sm:px-6 lg:px-12 lg:py-6">
      <a href="#home" className="font-display text-2xl font-semibold tracking-[.12em]">EMBER<span className="text-gold">.</span></a>
      <div className="hidden items-center gap-9 md:flex">{links.map((link) => <a key={link.label} href={link.href} className="text-xs font-medium tracking-wider transition hover:text-gold">{link.label}</a>)}<Button href="#visit" className="min-h-10 px-5">Order Now</Button></div>
      <button onClick={() => setOpen(!open)} aria-label="Toggle menu" className="grid h-10 w-10 place-items-center border border-cream/30 md:hidden">
        <span className="flex w-4 flex-col gap-1.5"><i className={`h-px w-full bg-cream transition ${open ? "translate-y-[3.5px] rotate-45" : ""}`} /><i className={`h-px w-full bg-cream transition ${open ? "-rotate-45" : ""}`} /></span>
      </button>
    </nav>
    {open && <div className="border-t border-cream/15 bg-ink px-6 py-6 md:hidden"><div className="flex flex-col gap-5">{links.map((link) => <a onClick={() => setOpen(false)} key={link.label} href={link.href} className="text-sm">{link.label}</a>)}<Button href="#visit">Order Now</Button></div></div>}
  </header>;
}
