import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";
import SectionTitle from "@/components/SectionTitle";
import CoffeeCard from "@/components/CoffeeCard";
import { FEATURED_COFFEES } from "@/data/menu";
import { SITE_CONFIG } from "@/lib/constants";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-24 sm:gap-32 pb-16 overflow-hidden">
      {/* ========================================================================= */}
      {/* 11. HERO SECTION */}
      {/* ========================================================================= */}
      <section className="relative min-h-[calc(100vh-5rem)] flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-4 pb-12">
        {/* Ambient Warm Lighting & Gradient */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#D4AF37]/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-10 left-10 w-72 h-72 bg-[#4A2E1B]/30 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center z-10">
          {/* Left Column: Headline & Description */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#4A2E1B]/60 border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-semibold tracking-widest uppercase mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse"></span>
              Specialty Coffee &amp; Roastery
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-bold text-[#F5F0E8] leading-[1.1] tracking-tight mb-6">
              Crafted Coffee, <br />
              <span className="text-[#D4AF37] italic font-normal">
                Warm Moments.
              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-[#F5F0E8]/80 font-light leading-relaxed mb-8 max-w-lg">
              Carefully crafted coffee for every moment of your day. Specialty
              single-origin beans roasted to perfection, served in a warm and
              serene sanctuary.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <Button href="/menu" variant="primary" size="lg" className="w-full sm:w-auto">
                Explore Menu
              </Button>
              <Button href="/contact" variant="secondary" size="lg" className="w-full sm:w-auto">
                Visit Us
              </Button>
            </div>

            {/* Trust / Stats Highlights */}
            <div className="mt-12 pt-8 border-t border-[#D4AF37]/15 grid grid-cols-3 gap-6 w-full max-w-md">
              <div>
                <span className="block font-serif text-2xl sm:text-3xl font-bold text-[#D4AF37]">
                  100%
                </span>
                <span className="text-[11px] sm:text-xs text-[#F5F0E8]/60 uppercase tracking-wider">
                  Arabica Beans
                </span>
              </div>
              <div>
                <span className="block font-serif text-2xl sm:text-3xl font-bold text-[#D4AF37]">
                  15+
                </span>
                <span className="text-[11px] sm:text-xs text-[#F5F0E8]/60 uppercase tracking-wider">
                  Signature Brews
                </span>
              </div>
              <div>
                <span className="block font-serif text-2xl sm:text-3xl font-bold text-[#D4AF37]">
                  4.9 ★
                </span>
                <span className="text-[11px] sm:text-xs text-[#F5F0E8]/60 uppercase tracking-wider">
                  Customer Rating
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Large High-Resolution Hero Coffee Image */}
          <div className="lg:col-span-6 relative flex justify-center items-center">
            {/* Gold Accent Ring Decorative */}
            <div className="absolute -inset-4 sm:-inset-6 rounded-2xl border border-[#D4AF37]/20 -rotate-2 pointer-events-none hidden sm:block" />

            {/* Main Hero Visual Card */}
            <div className="relative w-full max-w-lg lg:max-w-none h-[420px] sm:h-[500px] lg:h-[540px] rounded-xl overflow-hidden shadow-2xl border border-[#D4AF37]/30 bg-[#25170E] group">
              <Image
                src="/images/hero-coffee.jpg"
                alt="Artisan Specialty Coffee Cup with Latte Art"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out brightness-[0.95]"
              />

              {/* Subtle Gradient Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/80 via-transparent to-transparent" />
              <div className="absolute inset-0 bg-radial-gradient from-transparent to-[#1A1A1A]/30" />

              {/* Floating Specialty Coffee Badge (Bottom Left) */}
              <div className="absolute bottom-6 left-6 right-6 sm:right-auto bg-[#1A1A1A]/85 backdrop-blur-md border border-[#D4AF37]/40 p-4 rounded-lg shadow-xl flex items-center gap-4">
                <div className="w-12 h-12 rounded-md bg-[#4A2E1B] border border-[#D4AF37]/40 flex items-center justify-center shrink-0">
                  <svg
                    className="w-6 h-6 text-[#D4AF37]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-serif text-base font-bold text-[#F5F0E8]">
                    Master Artisan Roast
                  </h4>
                  <p className="text-xs text-[#D4AF37]">
                    Freshly roasted single origin every week
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 12. ABOUT SECTION */}
      {/* ========================================================================= */}
      <section id="about" className="relative px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Large Cafe Interior Image */}
          <div className="lg:col-span-6 order-2 lg:order-1 relative">
            <div className="relative h-[380px] sm:h-[460px] rounded-lg overflow-hidden border border-[#D4AF37]/30 shadow-2xl bg-[#25170E] group">
              <Image
                src="/images/cafe-interior.jpg"
                alt="Cozy EMBER Coffee House Interior"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out brightness-[0.9]"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#1A1A1A]/70 via-transparent to-transparent" />
            </div>

            {/* Decorative Offset Frame */}
            <div className="absolute -bottom-4 -left-4 w-32 h-32 border-b-2 border-l-2 border-[#D4AF37]/40 rounded-bl-xl pointer-events-none hidden sm:block" />
          </div>

          {/* Right Column: Story & Vision */}
          <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col items-start">
            <SectionTitle
              subtitle="Our Philosophy"
              title="More Than Just Coffee"
              align="left"
              className="mb-6"
            />

            <p className="text-base sm:text-lg text-[#F5F0E8]/85 font-light leading-relaxed mb-6">
              Coffee shop yang menghadirkan kopi berkualitas dalam suasana hangat
              dan nyaman. Setiap cangkir kami racik dengan perhatian mendalam
              terhadap rasa, aroma, dan pengalaman tak terlupakan bagi setiap
              pengunjung.
            </p>

            <p className="text-sm sm:text-base text-[#F5F0E8]/70 font-light leading-relaxed mb-8">
              Kami percaya bahwa secangkir kopi terbaik bermula dari biji pilihan
              yang dipetik dengan teliti, disangrai dengan presisi, dan diseduh
              oleh tangan-tangan barista yang berdedikasi penuh pada seni perkopian.
            </p>

            {/* Feature Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-8">
              <div className="flex items-start gap-3 p-3.5 rounded-sm bg-[#4A2E1B]/30 border border-[#D4AF37]/20">
                <div className="w-7 h-7 rounded-full bg-[#D4AF37]/20 flex items-center justify-center shrink-0 text-[#D4AF37]">
                  ✓
                </div>
                <div>
                  <h4 className="font-serif text-sm font-semibold text-[#F5F0E8]">
                    Ethically Sourced
                  </h4>
                  <p className="text-xs text-[#F5F0E8]/60 mt-0.5">
                    Petani kopi lokal &amp; nusantara
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-sm bg-[#4A2E1B]/30 border border-[#D4AF37]/20">
                <div className="w-7 h-7 rounded-full bg-[#D4AF37]/20 flex items-center justify-center shrink-0 text-[#D4AF37]">
                  ✓
                </div>
                <div>
                  <h4 className="font-serif text-sm font-semibold text-[#F5F0E8]">
                    Warm Ambiance
                  </h4>
                  <p className="text-xs text-[#F5F0E8]/60 mt-0.5">
                    Suasana tenang untuk bersantai &amp; fokus
                  </p>
                </div>
              </div>
            </div>

            <Button href="/services" variant="secondary" size="md">
              Discover Our Services
            </Button>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 13. FEATURED COFFEE SECTION */}
      {/* ========================================================================= */}
      <section id="featured" className="relative px-4 sm:px-6 lg:px-8 py-12 bg-gradient-to-b from-transparent via-[#25170E]/40 to-transparent">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            subtitle="Curated Favorites"
            title="Signature Brews"
            description="Pilihan menu kopi unggulan racikan barista kami yang paling dicintai penikmat kopi."
            align="center"
            className="mb-14"
          />

          {/* 3 Coffee Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-14">
            {FEATURED_COFFEES.map((item) => (
              <CoffeeCard key={item.id} item={item} />
            ))}
          </div>

          {/* View Full Menu CTA */}
          <div className="flex justify-center">
            <Button href="/menu" variant="primary" size="lg">
              View Full Menu
            </Button>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* VALUE PILLARS / EXPERIENCE HIGHLIGHTS */}
      {/* ========================================================================= */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            subtitle="The EMBER Standard"
            title="Why Choose Our House"
            description="Pengalaman menikmati kopi premium yang dirancang untuk kenyamanan dan kenikmatan Anda."
            align="center"
            className="mb-14"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Pillar 1 */}
            <div className="p-6 rounded-sm bg-[#22160E] border border-[#D4AF37]/20 hover:border-[#D4AF37]/60 transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-sm bg-[#4A2E1B] border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] mb-5">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
              <h3 className="font-serif text-lg font-bold text-[#F5F0E8] mb-2">
                Specialty Beans
              </h3>
              <p className="text-xs sm:text-sm text-[#F5F0E8]/70 font-light leading-relaxed">
                100% biji Arabika pilihan dari perkebunan terbaik dengan proses roasting higienis dan terstandarisasi.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="p-6 rounded-sm bg-[#22160E] border border-[#D4AF37]/20 hover:border-[#D4AF37]/60 transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-sm bg-[#4A2E1B] border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] mb-5">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-serif text-lg font-bold text-[#F5F0E8] mb-2">
                Artisan Brewing
              </h3>
              <p className="text-xs sm:text-sm text-[#F5F0E8]/70 font-light leading-relaxed">
                Kombinasi mesin espresso presisi tinggi dan metode pour-over manual untuk ekstraksi aroma optimal.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="p-6 rounded-sm bg-[#22160E] border border-[#D4AF37]/20 hover:border-[#D4AF37]/60 transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-sm bg-[#4A2E1B] border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] mb-5">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="font-serif text-lg font-bold text-[#F5F0E8] mb-2">
                Cozy Atmosphere
              </h3>
              <p className="text-xs sm:text-sm text-[#F5F0E8]/70 font-light leading-relaxed">
                Desain interior bernuansa hangat, penerangan temaram, dan tempat duduk yang nyaman untuk berdiskusi.
              </p>
            </div>

            {/* Pillar 4 */}
            <div className="p-6 rounded-sm bg-[#22160E] border border-[#D4AF37]/20 hover:border-[#D4AF37]/60 transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-sm bg-[#4A2E1B] border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] mb-5">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-serif text-lg font-bold text-[#F5F0E8] mb-2">
                Fresh Daily Pastry
              </h3>
              <p className="text-xs sm:text-sm text-[#F5F0E8]/70 font-light leading-relaxed">
                Croissant dan roti artisanal yang dipanggang segar setiap pagi untuk mendampingi kopi Anda.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 14. CTA SECTION */}
      {/* ========================================================================= */}
      <section className="relative px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto rounded-xl overflow-hidden bg-gradient-to-r from-[#4A2E1B] via-[#3B2415] to-[#2B1A0F] border border-[#D4AF37]/40 shadow-2xl p-8 sm:p-12 lg:p-16 relative">
          {/* Subtle Background Glow */}
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-[#D4AF37]/20 rounded-full blur-[90px] pointer-events-none" />

          <div className="relative z-10 max-w-2xl">
            <span className="text-[#D4AF37] text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase mb-3 block">
              Warm Welcome Awaits
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#F5F0E8] leading-tight mb-6">
              Your Next Favorite Cup Is Waiting.
            </h2>

            <p className="text-sm sm:text-base text-[#F5F0E8]/85 font-light leading-relaxed mb-8 max-w-xl">
              Visit our coffee shop and enjoy your favorite brew in a warm,
              comfortable space. Kami siap menyajikan cangkir kopi terbaik untuk
              hari Anda.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Button href="/contact" variant="primary" size="lg">
                Visit Us
              </Button>
              <Button
                href={SITE_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
                size="lg"
              >
                Contact via WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
