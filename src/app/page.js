import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import CoffeeCard from "@/components/CoffeeCard";
import Reveal from "@/components/Reveal";

const coffees = [
  { name: "Cappuccino", description: "Rich espresso with a silky cloud of milk foam.", price: "Rp 28.000", image: "https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=900&q=85" },
  { name: "Cafe Latte", description: "A comforting balance of espresso and steamed milk.", price: "Rp 30.000", image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=85" },
  { name: "Americano", description: "Clean, bold espresso with a lingering roasted finish.", price: "Rp 25.000", image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=900&q=85" },
];

const delay = (milliseconds) => ({ "--reveal-delay": `${milliseconds}ms` });

export default function Home() {
  return <div className="page-shell">
    <section id="home" className="relative min-h-[720px] bg-ink text-cream sm:min-h-[760px] lg:min-h-screen">
      <Navbar />
      <div className="mx-auto grid min-h-[720px] max-w-[1440px] items-center gap-10 px-4 pb-12 pt-28 sm:min-h-[760px] sm:px-6 sm:pt-30 lg:min-h-screen lg:grid-cols-[.92fr_1.08fr] lg:gap-20 lg:px-12 lg:pt-24">
        <div className="relative z-10 pt-8 lg:pt-0">
          <p className="hero-eyebrow eyebrow mb-6">Coffee & Roastery - Est. 2020</p>
          <h1 className="font-display text-[clamp(2.8rem,11vw,7.5rem)] leading-[1.03]">
            <span className="text-clip block"><span className="hero-line block" style={{ "--hero-delay": "150ms" }}>Crafted Coffee,</span></span>
            <span className="text-clip block"><em className="hero-line block font-normal text-gold" style={{ "--hero-delay": "270ms" }}>Warm Moments.</em></span>
          </h1>
          <p className="hero-copy mt-6 max-w-md text-[.95rem] leading-7 text-cream/65 sm:mt-7 sm:text-base">Carefully crafted coffee for every moment of your day. A slow, thoughtful pause in the heart of the city.</p>
          <div className="hero-actions mt-8 flex flex-wrap gap-3 sm:mt-9"><Button href="#menu">Explore Menu</Button><Button href="#visit" variant="outline">Visit Us</Button></div>
        </div>
        <div className="relative mx-auto w-full max-w-2xl lg:ml-auto"><div className="hero-corner absolute -left-2 -top-2 h-16 w-16 border-l border-t border-gold sm:-left-4 sm:-top-4 sm:h-20 sm:w-20 lg:-left-8 lg:-top-8" /><div className="hero-media photo-wash h-[350px] sm:h-[520px] lg:h-[min(70vh,680px)]"><img src="https://images.unsplash.com/photo-1512568400610-62da28bc8a13?auto=format&fit=crop&w=1400&q=90" alt="Fresh coffee with latte art" className="h-full w-full object-cover" /></div><p className="hero-caption mt-4 text-right text-[10px] font-bold tracking-[.16em] text-cream/50 uppercase">Slow mornings / Good coffee</p></div>
      </div>
    </section>

    <Reveal as="section" className="mx-auto grid max-w-[1440px] gap-14 px-4 py-20 sm:px-6 sm:py-24 lg:grid-cols-2 lg:items-center lg:gap-28 lg:px-12 lg:py-32">
      <div className="relative"><div className="scroll-image aspect-[4/5] overflow-hidden"><img src="https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=1200&q=85" alt="Warm coffee shop interior" className="h-full w-full object-cover" /></div><div className="scroll-badge absolute -bottom-6 right-0 bg-coffee px-6 py-5 text-cream sm:-right-5 sm:px-7 sm:py-6" style={delay(250)}><p className="font-display text-3xl text-gold">06+</p><p className="mt-1 text-[10px] tracking-widest uppercase sm:text-xs">Years brewing</p></div></div>
      <div className="lg:pt-4"><p className="scroll-fade eyebrow mb-6 text-coffee" style={delay(0)}>Our story</p><h2 className="font-display text-[clamp(2.35rem,8vw,3.75rem)] leading-tight text-ink"><span className="text-clip block"><span className="scroll-text block" style={delay(100)}>More Than</span></span><span className="text-clip block"><em className="scroll-text block font-normal text-coffee" style={delay(190)}>Just Coffee</em></span></h2><p className="scroll-fade mt-6 max-w-lg leading-7 text-ink/65 sm:mt-7" style={delay(250)}>We bring together quality beans, thoughtful craft, and a space that feels like yours. Every cup is made with care for its taste, aroma, and the moment it creates.</p><a href="/services" style={delay(400)} className="scroll-fade mt-8 inline-flex border-b border-gold pb-2 text-xs font-bold tracking-[.14em] uppercase transition hover:text-coffee">Discover our story <span className="ml-4 text-gold">&rarr;</span></a></div>
    </Reveal>

    <Reveal as="section" id="menu" className="bg-ink px-4 py-20 text-cream sm:px-6 sm:py-24 lg:px-12 lg:py-30"><div className="mx-auto max-w-[1440px]"><div className="mb-10 flex flex-col justify-between gap-6 sm:mb-12 sm:flex-row sm:items-end"><div><p className="scroll-fade eyebrow mb-5" style={delay(0)}>A little something</p><h2 className="font-display text-[clamp(2.35rem,8vw,3.75rem)] leading-tight"><span className="text-clip block"><span className="scroll-text block" style={delay(100)}>Made for your</span></span><span className="text-clip block"><em className="scroll-text block font-normal text-gold" style={delay(190)}>everyday ritual.</em></span></h2></div><p className="scroll-fade max-w-xs text-sm leading-6 text-cream/55" style={delay(280)}>Simple ingredients, carefully crafted and served exactly how you like it.</p></div><div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">{coffees.map((coffee, index) => <div key={coffee.name} className="scroll-card" style={delay(index * 120 + 180)}><CoffeeCard coffee={coffee} featured={index === 0} /></div>)}</div><div className="scroll-fade mt-9 text-center sm:mt-10" style={delay(550)}><Button href="/menu" variant="outline">View Full Menu</Button></div></div></Reveal>

    <Reveal as="section" id="visit" className="bg-coffee px-4 py-20 text-center text-cream sm:px-6 sm:py-24 lg:py-30"><div className="mx-auto max-w-2xl"><p className="scroll-fade eyebrow mb-6 justify-center" style={delay(0)}>Your table awaits</p><h2 className="font-display text-[clamp(2.2rem,9vw,4.5rem)] leading-tight"><span className="text-clip block"><span className="scroll-text block" style={delay(100)}>Your Next Favorite Cup</span></span><span className="text-clip block"><em className="scroll-text block font-normal text-gold" style={delay(280)}>Is Waiting.</em></span></h2><p className="scroll-fade mx-auto mt-6 max-w-xl leading-7 text-cream/65" style={delay(420)}>Visit our coffee shop and enjoy your favorite brew in a warm, comfortable space made for unhurried moments.</p><div className="scroll-fade" style={delay(560)}><Button href="/contact" className="mt-8 sm:mt-9">Visit Us</Button></div></div></Reveal>
    <Footer />
  </div>;
}
