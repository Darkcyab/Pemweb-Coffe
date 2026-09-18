import Link from "next/link";

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
  type = "button",
  target,
  rel,
  disabled = false,
  ...props
}) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium tracking-wider uppercase transition-[transform,background-color,border-color,color,box-shadow] duration-300 ease-out rounded-sm cursor-pointer select-none hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4AF37] disabled:opacity-50 disabled:pointer-events-none";

  const sizeStyles = {
    sm: "text-xs px-4 py-2 gap-1.5",
    md: "text-xs sm:text-sm px-6 py-3 gap-2",
    lg: "text-sm sm:text-base px-8 py-4 gap-2.5 tracking-widest",
  };

  const variantStyles = {
    primary:
      "bg-[#D4AF37] hover:bg-[#E5C358] text-[#1A1A1A] font-semibold hover:shadow-[0_8px_20px_rgba(212,175,55,0.25)]",
    secondary:
      "bg-[#4A2E1B] hover:bg-[#5C3922] text-[#F5F0E8] border border-[#D4AF37]/50 hover:border-[#D4AF37] hover:text-[#D4AF37] hover:shadow-[0_0_15px_rgba(212,175,55,0.2)]",
    outline:
      "bg-transparent hover:bg-[#D4AF37]/10 text-[#F5F0E8] border border-[#D4AF37]/60 hover:border-[#D4AF37] hover:text-[#D4AF37]",
    ghost:
      "bg-transparent hover:bg-[#F5F0E8]/10 text-[#F5F0E8] hover:text-[#D4AF37]",
    goldOutline:
      "bg-transparent hover:bg-[#D4AF37] text-[#D4AF37] hover:text-[#1A1A1A] border border-[#D4AF37] hover:shadow-[0_0_20px_rgba(212,175,55,0.3)]",
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size] || sizeStyles.md} ${
    variantStyles[variant] || variantStyles.primary
  } ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClasses} target={target} rel={rel} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClasses}
      {...props}
    >
      {children}
    </button>
  );
}
