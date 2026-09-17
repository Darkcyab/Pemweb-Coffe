export default function Button({ href = "#", children, variant = "gold", className = "" }) {
  const styles = variant === "gold"
    ? "bg-gold text-ink hover:bg-cream"
    : "border border-cream/60 text-cream hover:border-gold hover:text-gold";
  return <a href={href} className={`inline-flex min-h-12 items-center justify-center px-6 text-xs font-bold tracking-[.14em] uppercase transition duration-300 hover:-translate-y-0.5 ${styles} ${className}`}>{children}</a>;
}
