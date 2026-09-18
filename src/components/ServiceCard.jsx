export default function ServiceCard({
  service,
  className = "",
}) {
  const { title, description, highlight, icon } = service;

  // Render SVG icons directly for fast rendering & reliability
  const renderIcon = (type) => {
    switch (type) {
      case "Coffee":
        return (
          <svg className="w-6 h-6 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M18 8h1a4 4 0 010 8h-1M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8zM6 1v3M10 1v3M14 1v3" />
          </svg>
        );
      case "CupSoda":
        return (
          <svg className="w-6 h-6 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 8l1.5 12.5a2 2 0 002 1.5h5a2 2 0 002-1.5L18 8M4 8h16M10 2l-2 6" />
          </svg>
        );
      case "UtensilsCrossed":
        return (
          <svg className="w-6 h-6 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 4v16m0 0l-4-4m4 4l4-4M3 6l6 6M9 6l-6 6" />
          </svg>
        );
      case "CalendarCheck":
      default:
        return (
          <svg className="w-6 h-6 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        );
    }
  };

  return (
    <div
      className={`group p-8 rounded-sm bg-gradient-to-b from-[#25170E] to-[#1A1009] border border-[#D4AF37]/15 hover:border-[#D4AF37]/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(0,0,0,0.5),0_0_15px_rgba(212,175,55,0.1)] flex flex-col justify-between ${className}`}
    >
      <div>
        <div className="w-12 h-12 rounded-sm bg-[#4A2E1B]/50 border border-[#D4AF37]/30 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-[#D4AF37] transition-all duration-300">
          {renderIcon(icon)}
        </div>

        <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#F5F0E8] group-hover:text-[#D4AF37] transition-colors mb-3">
          {title}
        </h3>

        <p className="text-sm text-[#F5F0E8]/70 font-light leading-relaxed mb-6">
          {description}
        </p>
      </div>

      {highlight && (
        <div className="pt-4 border-t border-[#D4AF37]/10 flex items-center gap-2 text-xs text-[#D4AF37]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"></span>
          <span>{highlight}</span>
        </div>
      )}
    </div>
  );
}
