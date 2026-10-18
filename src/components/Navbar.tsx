import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Products', href: '#products' },
  { label: 'Customization', href: '#customization' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-ink-950/90 backdrop-blur-md border-b border-white/10 shadow-soft'
          : 'bg-ink-950/70 backdrop-blur-sm'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-5 sm:px-8 h-18 py-4 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2.5 group">
          <img
            src="/diya-logo.jpg"
            alt="Diya Trading Company logo"
            className="w-12 h-12 rounded-full object-cover ring-2 ring-jute-400/70 shadow-soft transition-transform group-hover:scale-105"
          />
          <span className="leading-tight">
            <span className="block font-display font-700 text-white text-base tracking-tight">
              Diya Trading Co.
            </span>
            <span className="block text-[11px] uppercase tracking-[0.18em] text-ink-300">
              Non-Woven Bags
            </span>
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="px-3.5 py-2 text-sm font-500 text-ink-100 rounded-full hover:bg-white/10 hover:text-white transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-jute-400 text-ink-950 text-sm font-700 hover:bg-jute-300 transition-colors shadow-soft"
          >
            Get a Quote
          </a>
        </div>

        <button
          className="md:hidden grid place-items-center w-10 h-10 rounded-lg text-white hover:bg-white/10 transition-colors"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      <div
        className={`md:hidden overflow-hidden transition-[max-height] duration-300 ease-out ${
          open ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <div className="px-5 pb-5 pt-1 bg-ink-950/95 backdrop-blur-md border-b border-white/10">
          <ul className="flex flex-col gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block px-3 py-2.5 rounded-lg text-ink-100 hover:bg-white/10 font-500"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="block text-center px-4 py-2.5 rounded-full bg-jute-400 text-ink-950 font-700"
              >
                Get a Quote
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
