import Reveal from "./Reveal";

export default function SectionTitle({
  subtitle,
  title,
  description,
  align = "center",
  className = "",
  light = false,
}) {
  const alignments = {
    center: "text-center items-center mx-auto",
    left: "text-left items-start",
    right: "text-right items-end ml-auto",
  };

  const lineAlignments = {
    center: "mx-auto",
    left: "mr-auto",
    right: "ml-auto",
  };

  return (
    <Reveal className={`flex flex-col max-w-3xl ${alignments[align] || alignments.center} ${className}`}>
      {/* Subtitle / Eyebrow */}
      {subtitle && (
        <span className="scroll-fade text-[#D4AF37] text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase mb-2.5 flex items-center gap-2">
          {align === "center" && <span className="inline-block w-6 h-[1px] bg-[#D4AF37]/60"></span>}
          {subtitle}
          <span className="inline-block w-6 h-[1px] bg-[#D4AF37]/60"></span>
        </span>
      )}

      {/* Main Title */}
      <div className="text-reveal-clip">
      <h2
        className={`scroll-text font-serif text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight ${
          light ? "text-[#1A1A1A]" : "text-[#F5F0E8]"
        }`}
      >
        {title}
      </h2>
      </div>

      {/* Decorative Accent Line */}
      <div className={`scroll-fade w-16 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent my-4 ${lineAlignments[align] || lineAlignments.center}`} style={{ "--reveal-delay": "110ms" }} />

      {/* Description */}
      {description && (
        <p
          className={`scroll-fade text-sm sm:text-base leading-relaxed ${
            light ? "text-[#4A2E1B]/80" : "text-[#F5F0E8]/75"
          } max-w-2xl font-light`}
          style={{ "--reveal-delay": "180ms" }}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
