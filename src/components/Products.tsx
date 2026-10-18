import { useState } from 'react';
import { ArrowUpRight, Check } from 'lucide-react';
import { useReveal } from '@/lib/useReveal';

const products = [
  {
    name: 'D-Cut Non-Woven Bags',
    tag: 'Most popular',
    img: 'https://images.pexels.com/photos/5650023/pexels-photo-5650023.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
    desc: 'The most popular everyday carry bag. Die-cut handles, neat gusset and a smooth printable surface — ideal for shops, garments and grocery counters.',
    points: ['Die-cut handle', 'Neat gusset', 'Printable surface'],
  },
  {
    name: 'W-Cut Non-Woven Bags',
    tag: 'Economical',
    img: 'https://images.pexels.com/photos/5926461/pexels-photo-5926461.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
    desc: 'Lightweight U-cut / W-cut bags that carry good weight at an economical rate. A strong choice for daily retail billing and fast-moving counters.',
    points: ['U / W cut', 'High load', 'Fast counters'],
  },
  {
    name: 'Box Bags',
    tag: 'Premium',
    img: 'https://images.pexels.com/photos/7318915/pexels-photo-7318915.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
    desc: 'Flat-bottom box bags with wide gusset that stand upright and hold shape — perfect for boutiques, sweets, gifting and premium brand packaging.',
    points: ['Flat bottom', 'Stands upright', 'Wide gusset'],
  },
  {
    name: 'Loop Bags',
    tag: 'Premium grip',
    img: 'https://images.pexels.com/photos/5868735/pexels-photo-5868735.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
    desc: 'Stitched loop-handle bags with a premium hand-feel and comfortable grip. Best suited to showrooms, apparel brands and heavier loads.',
    points: ['Loop handle', 'Comfortable grip', 'Heavier loads'],
  },
];

export default function Products() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const [active, setActive] = useState(0);

  return (
    <section id="products" className="py-20 sm:py-28 bg-white border-y border-ink-100">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-5 sm:px-8 reveal ${
          visible ? 'is-visible' : ''
        }`}
      >
        <div className="max-w-2xl">
          <span className="text-xs font-600 uppercase tracking-[0.18em] text-jute-600">
            Our Products
          </span>
          <h2 className="mt-3 font-display font-700 text-3xl sm:text-4xl text-ink-950 tracking-tight text-balance">
            D-Cut, W-Cut, Box &amp; Loop Non-Woven Bags
          </h2>
          <p className="mt-4 text-ink-600 text-lg leading-relaxed">
            Pick a style, tell us your size, colour and printing — we handle the
            rest.
          </p>
        </div>

        <div className="mt-12 grid lg:grid-cols-12 gap-6">
          <div className="lg:col-span-4 flex flex-col gap-3">
            {products.map((p, i) => (
              <button
                key={p.name}
                onClick={() => setActive(i)}
                className={`text-left p-4 rounded-2xl border transition-all ${
                  active === i
                    ? 'bg-ink-900 border-ink-900 text-ink-50 shadow-card'
                    : 'bg-ink-50 border-ink-200 text-ink-800 hover:border-ink-400'
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <div
                      className={`text-[11px] uppercase tracking-wider font-600 ${
                        active === i ? 'text-jute-300' : 'text-jute-600'
                      }`}
                    >
                      {p.tag}
                    </div>
                    <div className="mt-1 font-display font-700 text-base">
                      {p.name}
                    </div>
                  </div>
                  <ArrowUpRight
                    className={`w-5 h-5 shrink-0 transition-transform ${
                      active === i ? 'rotate-0' : '-rotate-45 opacity-50'
                    }`}
                  />
                </div>
              </button>
            ))}
          </div>

          <div className="lg:col-span-8 relative rounded-3xl overflow-hidden ring-1 ring-ink-900/10 shadow-card min-h-[440px] bg-ink-100">
            {products.map((p, i) => (
              <div
                key={p.name}
                className={`absolute inset-0 transition-opacity duration-500 ${
                  active === i ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
              >
                <img
                  src={p.img}
                  alt={p.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/85 via-ink-950/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 text-ink-50">
                  <div className="text-[11px] uppercase tracking-wider font-600 text-jute-300">
                    {p.tag}
                  </div>
                  <h3 className="mt-1 font-display font-700 text-2xl sm:text-3xl">
                    {p.name}
                  </h3>
                  <p className="mt-2 text-ink-100/90 max-w-2xl text-[15px] leading-relaxed">
                    {p.desc}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {p.points.map((pt) => (
                      <li
                        key={pt}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur border border-white/15 text-xs font-600"
                      >
                        <Check className="w-3.5 h-3.5 text-jute-300" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
