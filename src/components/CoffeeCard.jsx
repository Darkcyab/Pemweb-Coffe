export default function CoffeeCard({ coffee, featured }) {
  return <article className="group overflow-hidden bg-coffee text-cream transition duration-300 hover:-translate-y-2">
    <div className="relative h-72 overflow-hidden">
      <img src={coffee.image} alt={coffee.name} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
      {featured && <span className="absolute left-4 top-4 bg-gold px-3 py-1.5 text-[10px] font-bold tracking-[.12em] text-ink uppercase">Best seller</span>}
    </div>
    <div className="p-6"><div className="mb-3 flex items-start justify-between gap-4"><h3 className="font-display text-2xl">{coffee.name}</h3><span className="shrink-0 text-sm font-semibold text-gold">{coffee.price}</span></div><p className="text-sm leading-6 text-cream/65">{coffee.description}</p></div>
  </article>;
}
