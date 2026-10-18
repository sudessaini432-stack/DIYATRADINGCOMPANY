import { Phone, Mail, MapPin } from 'lucide-react';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Products', href: '#products' },
  { label: 'Customization', href: '#customization' },
  { label: 'Contact', href: '#contact' },
];

const productLinks = [
  { label: 'D-Cut Bags', href: '#products' },
  { label: 'W-Cut Bags', href: '#products' },
  { label: 'Box Bags', href: '#products' },
  { label: 'Loop Bags', href: '#products' },
];

export default function Footer() {
  return (
    <footer className="bg-ink-950 text-ink-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3">
              <img
                src="/diya-logo.jpg"
                alt="Diya Trading Company logo"
                className="w-14 h-14 rounded-full object-cover ring-2 ring-jute-500/70"
              />
              <span className="leading-tight">
                <span className="block font-display font-700 text-ink-50 text-base">
                  Diya Trading Co.
                </span>
                <span className="block text-[11px] uppercase tracking-[0.18em] text-ink-500">
                  Non-Woven Bags
                </span>
              </span>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-ink-400 max-w-xs">
              Premium non-woven bags — manufacturer and supplier of D-Cut, W-Cut,
              Box and Loop bags with customized sizes, colours and printing for
              businesses across India.
            </p>
          </div>

          <div>
            <h4 className="font-display font-700 text-ink-50 text-sm uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-ink-400 hover:text-jute-300 transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-700 text-ink-50 text-sm uppercase tracking-wider">
              Products
            </h4>
            <ul className="mt-4 space-y-2.5">
              {productLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-sm text-ink-400 hover:text-jute-300 transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-700 text-ink-50 text-sm uppercase tracking-wider">
              Contact
            </h4>
            <ul className="mt-4 space-y-3">
              <li className="flex items-center gap-3 text-sm">
                <Phone className="w-4 h-4 text-jute-400 shrink-0" />
                <a href="tel:+919728659049" className="hover:text-jute-300 transition-colors">
                  +91 97286 59049
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Mail className="w-4 h-4 text-jute-400 shrink-0" />
                <a href="mailto:diyatradingcompany@gmail.com" className="hover:text-jute-300 transition-colors">
                  diyatradingcompany@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <MapPin className="w-4 h-4 text-jute-400 shrink-0" />
                AMRAVALI ROAD, PILLU KHARA MANDI, JIND, HARYANA 126112
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-ink-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-ink-500">
            © {new Date().getFullYear()} Diya Trading Company. All rights reserved.
          </p>
          <p className="text-xs text-ink-500">
            Manufacturer · Supplier · Wholesale · Pan-India
          </p>
        </div>
      </div>
    </footer>
  );
}
