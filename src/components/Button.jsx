export default function Button({ href = "#", children, variant = "gold", className = "" }) {
  const styles = variant === "gold"
    ? "bg-gold text-ink hover:bg-cream"
    : "border border-cream/60 text-cream hover:border-gold hover:text-gold";
  return <a href={href} className={`button-lift inline-flex min-h-12 items-center justify-center px-6 text-xs font-bold tracking-[.14em] uppercase ${styles} ${className}`}>{children}</a>;
}
