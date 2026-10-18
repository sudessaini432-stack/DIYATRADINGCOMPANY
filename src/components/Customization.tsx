import { Check, Palette, Ruler, Printer, Package } from 'lucide-react';
import { useReveal } from '@/lib/useReveal';

const options = [
  {
    icon: Ruler,
    title: 'Custom Sizes',
    body: 'From small retail counters to large carry bags — produced to your exact dimensions.',
  },
  {
    icon: Palette,
    title: 'Custom Colours',
    body: 'Match your brand palette across a wide range of non-woven fabric colours.',
  },
  {
    icon: Printer,
    title: 'Custom Printing',
    body: 'Clean, sharp brand printing — single or multi-colour, logo and contact details.',
  },
  {
    icon: Package,
    title: 'Custom Quantity',
    body: 'From a single retail counter to a multi-store brand rollout — produced to order.',
  },
];

const factoryImg =
  'https://images.pexels.com/photos/236748/pexels-photo-236748.jpeg?auto=compress&cs=tinysrgb&h=900&w=1400';

export default function Customization() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <section id="customization" className="py-20 sm:py-28 bg-ink-950 text-ink-50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(circle_at_20%_20%,#c4893a,transparent_40%),radial-gradient(circle_at_80%_60%,#5d832c,transparent_45%)]" />
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-5 sm:px-8 relative reveal ${
          visible ? 'is-visible' : ''
        }`}
      >
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <span className="text-xs font-600 uppercase tracking-[0.18em] text-jute-300">
              Customization
            </span>
            <h2 className="mt-3 font-display font-700 text-3xl sm:text-4xl tracking-tight text-balance">
              Complete customization for your packaging
            </h2>
            <p className="mt-4 text-ink-300 text-lg leading-relaxed max-w-xl">
              From a single retail counter to a multi-store brand rollout, your
              requirement is produced to order — with consistent quality and
              on-time dispatch.
            </p>

            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {options.map((o) => (
                <div
                  key={o.title}
                  className="rounded-2xl bg-ink-900/60 ring-1 ring-ink-700/60 p-5 hover:bg-ink-900 hover:ring-jute-500/40 transition-colors"
                >
                  <span className="grid place-items-center w-10 h-10 rounded-xl bg-jute-500/15 text-jute-300">
                    <o.icon className="w-5 h-5" />
                  </span>
                  <h3 className="mt-4 font-display font-700 text-base text-ink-50">
                    {o.title}
                  </h3>
                  <p className="mt-1.5 text-ink-300 text-sm leading-relaxed">
                    {o.body}
                  </p>
                </div>
              ))}
            </div>

            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
              {['GSM options', 'Bulk pricing', 'Pan-India dispatch'].map((t) => (
                <li key={t} className="inline-flex items-center gap-2 text-sm text-ink-200">
                  <Check className="w-4 h-4 text-leaf-400" />
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="rounded-3xl overflow-hidden ring-1 ring-ink-700 shadow-lift">
              <img
                src={factoryImg}
                alt="Non-woven fabric rolls and finished printed bags ready for bulk supply"
                className="w-full h-[460px] object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-5 left-6 right-6 bg-jute-500 text-ink-950 rounded-2xl px-5 py-4 shadow-card flex items-center justify-between">
              <div>
                <div className="font-display font-700 text-lg">Produced to order</div>
                <div className="text-sm text-ink-900/70">Wholesale &amp; bulk supply</div>
              </div>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-ink-950 text-jute-300 text-sm font-600 hover:bg-ink-800 transition-colors"
              >
                Enquire now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
