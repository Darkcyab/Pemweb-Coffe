import SectionTitle from "@/components/SectionTitle";
import ServiceCard from "@/components/ServiceCard";
import Button from "@/components/Button";
import { SERVICES_DATA } from "@/data/services";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata = {
  title: "Services — EMBER Coffee House",
  description: "How We Serve You. Designed for coffee, conversations, and memorable moments.",
};

export default function ServicesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col gap-16">
      <SectionTitle
        subtitle="Our Offerings"
        title="How We Serve You"
        description="Designed for coffee, conversations, and memorable moments. Kami siap memenuhi kebutuhan momen ngopi Anda."
        align="center"
      />

      {/* Services Grid (PRD 19 & 20) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {SERVICES_DATA.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>

      {/* Inquiries CTA */}
      <div className="text-center p-10 rounded-sm bg-[#22160E] border border-[#D4AF37]/30 max-w-3xl mx-auto">
        <h3 className="font-serif text-2xl font-bold text-[#F5F0E8] mb-3">
          Need a Custom Coffee Service?
        </h3>
        <p className="text-sm text-[#F5F0E8]/70 mb-6 font-light">
          Hubungi kami untuk informasi catering, paket private event, atau kolaborasi khusus.
        </p>
        <Button
          href={SITE_CONFIG.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          variant="primary"
          size="md"
        >
          Discuss with Us via WhatsApp
        </Button>
      </div>
    </div>
  );
}
