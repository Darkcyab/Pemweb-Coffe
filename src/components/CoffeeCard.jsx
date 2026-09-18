import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

export default function CoffeeCard({
  item,
  className = "",
  showOrderBtn = true,
  style,
}) {
  const {
    name,
    description,
    formattedPrice,
    image,
    isBestSeller,
    tags = [],
  } = item;

  return (
    <div
      className={`group relative flex flex-col bg-gradient-to-b from-[#2E1B10] to-[#1E120A] rounded-md overflow-hidden border border-[#D4AF37]/20 hover:border-[#D4AF37]/60 transition-[transform,border-color,box-shadow] duration-500 ease-out hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(0,0,0,0.48),0_0_16px_rgba(212,175,55,0.12)] ${className}`}
      style={style}
    >
      {/* Best Seller Badge */}
      {isBestSeller && (
        <div className="absolute top-3 right-3 z-20 bg-[#D4AF37] text-[#1A1A1A] text-[10px] sm:text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-sm shadow-md flex items-center gap-1">
          <svg
            className="w-3 h-3 fill-current"
            viewBox="0 0 24 24"
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
          Best Seller
        </div>
      )}

      {/* Image Container */}
      <div className="relative w-full h-56 sm:h-64 overflow-hidden bg-[#1A1A1A]">
        <Image
          src={image || "/images/hero-coffee.jpg"}
          alt={name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-center transition-[transform,filter] duration-700 ease-out brightness-[0.92] group-hover:scale-[1.03] group-hover:brightness-100"
        />
        {/* Subtle Dark Gradient Overlay at the bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1E120A] via-transparent to-transparent opacity-80" />
      </div>

      {/* Content Container */}
      <div className="flex flex-col flex-1 p-5 sm:p-6 justify-between">
        <div>
          {/* Tags */}
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-2.5">
              {tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="text-[10px] tracking-wider uppercase text-[#D4AF37]/90 bg-[#D4AF37]/10 px-2 py-0.5 rounded-xs"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Coffee Title */}
          <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#F5F0E8] group-hover:text-[#D4AF37] transition-colors duration-300">
            {name}
          </h3>

          {/* Description */}
          <p className="mt-2 text-xs sm:text-sm text-[#F5F0E8]/70 line-clamp-2 leading-relaxed font-light">
            {description}
          </p>
        </div>

        {/* Footer Area: Price & Action */}
        <div className="mt-5 pt-4 border-t border-[#D4AF37]/15 flex items-center justify-between">
          <div>
            <span className="block text-[10px] text-[#F5F0E8]/50 uppercase tracking-wider">
              Price
            </span>
            <span className="font-serif text-lg sm:text-xl font-bold text-[#D4AF37]">
              {formattedPrice}
            </span>
          </div>

          {showOrderBtn && (
            <Link
              href="/menu"
              className="text-xs uppercase tracking-wider text-[#F5F0E8]/80 hover:text-[#D4AF37] transition-colors flex items-center gap-1 font-medium group/link"
            >
              Details
              <svg
                className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
