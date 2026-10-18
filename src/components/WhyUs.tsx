import { useReveal } from '@/lib/useReveal';

const features = [
  {
    title: 'Premium Quality',
    body: 'Consistent GSM, strong stitching and clean finish on every batch.',
    accent: 'bg-ink-900 text-jute-300',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2 4 6v6c0 5 3.5 8 8 10 4.5-2 8-5 8-10V6l-8-4Z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: 'Sustainable',
    body: 'Eco-conscious non-woven fabric suited to modern retail packaging.',
    accent: 'bg-leaf-600 text-white',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 20A7 7 0 0 1 4 13c0-4 3-9 7-11 4 2 7 7 7 11a7 7 0 0 1-7 7Z" />
        <path d="M11 20v-9" />
      </svg>
    ),
  },
  {
    title: 'Durable',
    body: 'High load strength that protects goods through daily handling.',
    accent: 'bg-jute-600 text-white',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 4h12l2 6-2 10H6L4 10l2-6Z" />
        <path d="M4 10h16" />
      </svg>
    ),
  },
  {
    title: 'Reusable',
    body: 'Long-life bags customers keep using, carrying your brand further.',
    accent: 'bg-ink-700 text-jute-200',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 12a9 9 0 0 1 15-6.7L21 8" />
        <path d="M21 3v5h-5" />
        <path d="M21 12a9 9 0 0 1-15 6.7L3 16" />
        <path d="M3 21v-5h5" />
      </svg>
    ),
  },
  {
    title: 'Eco-Friendly',
    body: 'A responsible alternative to single-use plastic carry bags.',
    accent: 'bg-leaf-700 text-white',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1Z" />
        <path d="m7 12 3 3 7-7" />
      </svg>
    ),
  },
  {
    title: 'Bulk Supply',
    body: 'Reliable volume production and dispatch for wholesale requirements.',
    accent: 'bg-ink-900 text-jute-300',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 7h13v10H3z" />
        <path d="M16 10h3l2 2v5h-5" />
        <circle cx="7" cy="18" r="1.5" />
        <circle cx="18" cy="18" r="1.5" />
      </svg>
    ),
  },
];

export default function WhyUs() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <section id="why-us" className="py-20 sm:py-28 bg-ink-50">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-5 sm:px-8 reveal ${
          visible ? 'is-visible' : ''
        }`}
      >
        <div className="max-w-2xl">
          <span className="text-xs font-600 uppercase tracking-[0.18em] text-jute-600">
            Why choose us
          </span>
          <h2 className="mt-3 font-display font-700 text-3xl sm:text-4xl text-ink-950 tracking-tight text-balance">
            Bags your customers trust, batch after batch
          </h2>
          <p className="mt-4 text-ink-600 text-lg leading-relaxed">
            Every order is produced to your specification and checked before
            dispatch.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <article
              key={f.title}
              className="group relative rounded-2xl bg-white p-6 ring-1 ring-ink-900/5 shadow-soft hover:shadow-card hover:-translate-y-1 transition-all duration-300"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              <span
                className={`grid place-items-center w-12 h-12 rounded-xl ${f.accent} shadow-soft`}
              >
                {f.icon}
              </span>
              <h3 className="mt-5 font-display font-700 text-lg text-ink-900">
                {f.title}
              </h3>
              <p className="mt-2 text-ink-600 leading-relaxed text-[15px]">
                {f.body}
              </p>
              <span className="absolute inset-x-6 bottom-0 h-px bg-gradient-to-r from-transparent via-jute-300 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
