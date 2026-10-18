import { ArrowRight, BadgeCheck, Leaf, Phone, Sparkles, Truck } from 'lucide-react';

const heroImg =
  'https://images.pexels.com/photos/7987864/pexels-photo-7987864.jpeg?auto=compress&cs=tinysrgb&h=1100&w=1400';

const stats = [
  { value: '4+', label: 'Bag Styles' },
  { value: 'Pan-India', label: 'Dispatch' },
  { value: '100%', label: 'Custom Built' },
];

function BrandMark() {
  return (
    <span className="relative grid place-items-center w-16 h-16 shadow-lift rotate-[-6deg]">
      <img
        src="/diya-logo.jpg"
        alt="Diya Trading Company logo"
        className="w-16 h-16 rounded-[22px] object-cover"
      />
    </span>
  );
}

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-ink-950 text-white pt-32 pb-24 sm:pt-40 sm:pb-32">
      <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_78%_15%,rgba(238,181,45,0.28),transparent_25%),radial-gradient(circle_at_15%_90%,rgba(32,141,84,0.25),transparent_32%)]" />
      <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.5)_1px,transparent_1px)] [background-size:48px_48px]" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        <div className="animate-fade-up">
          <div className="flex items-center gap-4 mb-8">
            <BrandMark />
            <div>
              <div className="font-display text-xl sm:text-2xl tracking-[0.22em] text-jute-300">DIYA</div>
              <div className="text-[10px] uppercase tracking-[0.34em] text-ink-300">Trading Company</div>
            </div>
          </div>

          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-600 uppercase tracking-[0.16em] text-ink-100">
            <Leaf className="w-3.5 h-3.5 text-leaf-300" />
            Manufacturer · Jind, Haryana
          </span>

          <h1 className="mt-6 font-display font-700 text-4xl sm:text-5xl lg:text-[4.25rem] leading-[1.04] tracking-tight text-balance">
            Premium Quality{' '}
            <span className="text-jute-300">Non-Woven Bags</span>
          </h1>

          <p className="mt-6 text-lg text-ink-200 max-w-xl leading-relaxed">
            Custom sizes, colours and printing for retailers, wholesalers, shops
            and brands across India. Built for strength, reuse and a finish your
            customers remember.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-jute-400 text-ink-950 font-700 hover:bg-jute-300 transition-all hover:shadow-lift group">
              Order Now
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a href="tel:+919728659049" className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full bg-white/10 border border-white/20 text-white font-600 hover:bg-white/15 transition-colors">
              <Phone className="w-4 h-4 text-jute-300" />
              97286 59049
            </a>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-4 max-w-md">
            {stats.map((s) => (
              <div key={s.label} className="border-l-2 border-jute-400 pl-4">
                <div className="font-display font-700 text-xl text-white">{s.value}</div>
                <div className="text-xs uppercase tracking-wider text-ink-300 mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative animate-fade-up [animation-delay:200ms]">
          <div className="absolute -inset-5 rounded-[40px] border border-jute-300/20 rotate-3" />
          <div className="absolute -inset-5 rounded-[40px] border border-leaf-400/20 -rotate-3" />
          <div className="relative rounded-[30px] overflow-hidden shadow-lift ring-1 ring-white/15 bg-white/10">
            <img src={heroImg} alt="Colourful reusable shopping bags" className="w-full h-[430px] sm:h-[560px] object-cover" loading="eager" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-transparent to-ink-950/10" />
            <div className="absolute left-5 right-5 bottom-5 rounded-2xl bg-ink-950/75 backdrop-blur-md border border-white/15 px-5 py-4 flex items-center justify-between gap-4">
              <div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-jute-300">Designed for your brand</div>
                <div className="mt-1 font-display text-lg">Strong. Reusable. Memorable.</div>
              </div>
              <Sparkles className="w-6 h-6 text-jute-300 shrink-0" />
            </div>
          </div>

          <div className="absolute -bottom-6 -left-4 sm:-left-8 bg-white text-ink-950 rounded-2xl shadow-card px-4 py-3 flex items-center gap-3 animate-float-y">
            <span className="grid place-items-center w-10 h-10 rounded-xl bg-leaf-100 text-leaf-600"><BadgeCheck className="w-5 h-5" /></span>
            <div><div className="text-sm font-700">Quality Checked</div><div className="text-xs text-ink-500">Every batch</div></div>
          </div>
          <div className="absolute -top-5 -right-3 sm:-right-7 bg-white text-ink-950 rounded-2xl shadow-card px-4 py-3 flex items-center gap-2.5">
            <Truck className="w-5 h-5 text-jute-600" /><div className="text-xs font-700">Bulk supply · Pan-India</div>
          </div>
        </div>
      </div>
    </section>
  );
}
