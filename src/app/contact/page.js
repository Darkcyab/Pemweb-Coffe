"use client";

import { useState } from "react";
import SectionTitle from "@/components/SectionTitle";
import Button from "@/components/Button";
import { SITE_CONFIG } from "@/lib/constants";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    // Client-side MVP interaction
    setIsSubmitted(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col gap-16">
      {/* Header (PRD 21) */}
      <SectionTitle
        subtitle="Get in Touch"
        title="Come Say Hello."
        description="We'd love to serve you a good cup of coffee. Kunjungi gerai kami atau kirimkan pesan untuk pertanyaan dan reservasi."
        align="center"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Contact Info (PRD 22) */}
        <div className="lg:col-span-5 flex flex-col gap-8">
          <div className="p-8 rounded-sm bg-[#22160E] border border-[#D4AF37]/20 flex flex-col gap-6">
            <h3 className="font-serif text-2xl font-bold text-[#D4AF37]">
              Coffeehouse Details
            </h3>

            {/* Address */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-sm bg-[#4A2E1B] border border-[#D4AF37]/30 flex items-center justify-center shrink-0 text-[#D4AF37]">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <span className="block text-xs uppercase tracking-wider text-[#D4AF37]">Location</span>
                <p className="text-sm text-[#F5F0E8] font-light mt-0.5">{SITE_CONFIG.address}</p>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-sm bg-[#4A2E1B] border border-[#D4AF37]/30 flex items-center justify-center shrink-0 text-[#D4AF37]">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <span className="block text-xs uppercase tracking-wider text-[#D4AF37]">Opening Hours</span>
                <p className="text-sm text-[#F5F0E8] font-light mt-0.5">Mon - Fri: {SITE_CONFIG.hours.weekday}</p>
                <p className="text-sm text-[#F5F0E8] font-light">Sat - Sun: {SITE_CONFIG.hours.weekend}</p>
              </div>
            </div>

            {/* Direct Contact */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-sm bg-[#4A2E1B] border border-[#D4AF37]/30 flex items-center justify-center shrink-0 text-[#D4AF37]">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <span className="block text-xs uppercase tracking-wider text-[#D4AF37]">Phone &amp; WhatsApp</span>
                <p className="text-sm text-[#F5F0E8] font-light mt-0.5">{SITE_CONFIG.phone}</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-sm bg-[#4A2E1B] border border-[#D4AF37]/30 flex items-center justify-center shrink-0 text-[#D4AF37]">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <span className="block text-xs uppercase tracking-wider text-[#D4AF37]">Email</span>
                <p className="text-sm text-[#F5F0E8] font-light mt-0.5">{SITE_CONFIG.email}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form (PRD 23) */}
        <div className="lg:col-span-7">
          <div className="p-8 sm:p-10 rounded-sm bg-gradient-to-b from-[#25170E] to-[#1A1009] border border-[#D4AF37]/30 shadow-xl">
            <h3 className="font-serif text-2xl font-bold text-[#F5F0E8] mb-2">
              Send Us a Message
            </h3>
            <p className="text-xs sm:text-sm text-[#F5F0E8]/70 font-light mb-8">
              Punya saran, pertanyaan seputar menu, atau ingin berkolaborasi?
            </p>

            {isSubmitted ? (
              <div className="p-6 rounded-sm bg-[#4A2E1B]/50 border border-[#D4AF37] text-center">
                <span className="text-2xl mb-2 block">☕</span>
                <h4 className="font-serif text-xl font-bold text-[#D4AF37] mb-2">
                  Thank You for Reaching Out!
                </h4>
                <p className="text-sm text-[#F5F0E8]/80 font-light">
                  Pesan Anda telah kami terima. Barista kami akan segera merespons dalam 1x24 jam.
                </p>
                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="mt-6 text-xs uppercase tracking-widest text-[#D4AF37] underline underline-offset-4"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#D4AF37] mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Nama lengkap Anda"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#1A1A1A] border border-[#D4AF37]/30 focus:border-[#D4AF37] rounded-sm px-4 py-3 text-sm text-[#F5F0E8] placeholder-[#F5F0E8]/30 outline-none transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#D4AF37] mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="email@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#1A1A1A] border border-[#D4AF37]/30 focus:border-[#D4AF37] rounded-sm px-4 py-3 text-sm text-[#F5F0E8] placeholder-[#F5F0E8]/30 outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#D4AF37] mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      placeholder="Topik pesan"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full bg-[#1A1A1A] border border-[#D4AF37]/30 focus:border-[#D4AF37] rounded-sm px-4 py-3 text-sm text-[#F5F0E8] placeholder-[#F5F0E8]/30 outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#D4AF37] mb-2">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Tuliskan pesan atau pertanyaan Anda di sini..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#1A1A1A] border border-[#D4AF37]/30 focus:border-[#D4AF37] rounded-sm px-4 py-3 text-sm text-[#F5F0E8] placeholder-[#F5F0E8]/30 outline-none transition-colors resize-none"
                  />
                </div>

                <Button type="submit" variant="primary" size="lg" className="mt-2 w-full sm:w-auto">
                  Send Message
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Location / Map Area (PRD 24) */}
      <div className="rounded-sm overflow-hidden border border-[#D4AF37]/30 bg-[#22160E] p-8 text-center flex flex-col items-center justify-center min-h-[260px] relative">
        <div className="w-12 h-12 rounded-full bg-[#4A2E1B] border border-[#D4AF37] flex items-center justify-center text-[#D4AF37] mb-4">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
          </svg>
        </div>
        <h4 className="font-serif text-xl font-bold text-[#F5F0E8] mb-1">
          EMBER Coffeehouse &amp; Roastery Map
        </h4>
        <p className="text-xs sm:text-sm text-[#F5F0E8]/70 font-light max-w-md mb-4">
          {SITE_CONFIG.address} — Strategically situated near city center with dedicated parking space.
        </p>
        <Button
          href="https://maps.google.com"
          target="_blank"
          rel="noopener noreferrer"
          variant="goldOutline"
          size="sm"
        >
          Open in Google Maps
        </Button>
      </div>
    </div>
  );
}
