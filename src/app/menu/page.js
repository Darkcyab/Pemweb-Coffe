import SectionTitle from "@/components/SectionTitle";
import CoffeeCard from "@/components/CoffeeCard";
import { MENU_ITEMS } from "@/data/menu";

export const metadata = {
  title: "Our Menu — EMBER Coffee House",
  description: "Simple ingredients. Carefully crafted. Explore our specialty coffee, non-coffee, and freshly baked pastries.",
};

export default function MenuPage() {
  const coffeeItems = MENU_ITEMS.filter((item) => item.category === "coffee");
  const nonCoffeeItems = MENU_ITEMS.filter((item) => item.category === "non-coffee");
  const foodItems = MENU_ITEMS.filter((item) => item.category === "food");

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col gap-16">
      {/* Menu Header (PRD 15) */}
      <SectionTitle
        subtitle="Artisan Selection"
        title="Our Menu"
        description="Simple ingredients. Carefully crafted. Biji kopi pilihan dan bahan berkualitas tinggi untuk setiap hidangan."
        align="center"
      />

      {/* Coffee Category (PRD 16) */}
      <section>
        <div className="flex items-center gap-3 mb-8">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#D4AF37]">
            Coffee
          </h3>
          <span className="flex-1 h-[1px] bg-[#D4AF37]/20"></span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coffeeItems.map((item) => (
            <CoffeeCard key={item.id} item={item} />
          ))}
        </div>
      </section>

      {/* Non-Coffee Category */}
      <section>
        <div className="flex items-center gap-3 mb-8">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#D4AF37]">
            Non-Coffee
          </h3>
          <span className="flex-1 h-[1px] bg-[#D4AF37]/20"></span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {nonCoffeeItems.map((item) => (
            <CoffeeCard key={item.id} item={item} />
          ))}
        </div>
      </section>

      {/* Food & Pastry Category */}
      <section>
        <div className="flex items-center gap-3 mb-8">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#D4AF37]">
            Fresh Pastry &amp; Food
          </h3>
          <span className="flex-1 h-[1px] bg-[#D4AF37]/20"></span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {foodItems.map((item) => (
            <CoffeeCard key={item.id} item={item} />
          ))}
        </div>
      </section>
    </div>
  );
}
