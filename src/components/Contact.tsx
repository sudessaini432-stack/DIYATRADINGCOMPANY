import { useState } from 'react';
import { Loader2, CheckCircle2, AlertCircle, Send } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import type { EnquiryPayload } from '@/lib/types';
import { useReveal } from '@/lib/useReveal';

const bagTypes = ['D-Cut', 'W-Cut', 'Box', 'Loop', 'Other'];

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function Contact() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [form, setForm] = useState<EnquiryPayload>({
    name: '',
    phone: '',
    email: '',
    bag_type: '',
    quantity: '',
    size: '',
    colour: '',
    printing: '',
    message: '',
  });

  const update =
    (key: keyof EnquiryPayload) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) {
      setStatus('error');
      setErrorMsg('Please enter your name and phone number.');
      return;
    }
    setStatus('loading');
    setErrorMsg('');
    const { error } = await supabase.from('enquiries').insert({
      name: form.name.trim(),
      phone: form.phone.trim(),
      email: form.email?.trim() || null,
      bag_type: form.bag_type || null,
      quantity: form.quantity?.trim() || null,
      size: form.size?.trim() || null,
      colour: form.colour?.trim() || null,
      printing: form.printing?.trim() || null,
      message: form.message?.trim() || null,
    });
    if (error) {
      setStatus('error');
      setErrorMsg('Something went wrong. Please try again or call us directly.');
      return;
    }
    setStatus('success');
    setForm({
      name: '',
      phone: '',
      email: '',
      bag_type: '',
      quantity: '',
      size: '',
      colour: '',
      printing: '',
      message: '',
    });
  };

  const inputClass =
    'w-full rounded-xl bg-ink-50 border border-ink-200 px-4 py-3 text-ink-900 placeholder-ink-400 focus:outline-none focus:ring-2 focus:ring-jute-400 focus:border-jute-400 transition-all';
  const labelClass =
    'block text-xs font-600 uppercase tracking-wider text-ink-600 mb-1.5';

  return (
    <section id="contact" className="py-20 sm:py-28 bg-ink-50">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto px-5 sm:px-8 reveal ${
          visible ? 'is-visible' : ''
        }`}
      >
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          <div className="lg:col-span-2">
            <span className="text-xs font-600 uppercase tracking-[0.18em] text-jute-600">
              Get in touch
            </span>
            <h2 className="mt-3 font-display font-700 text-3xl sm:text-4xl text-ink-950 tracking-tight text-balance">
              Ready to order your customized non-woven bags?
            </h2>
            <p className="mt-4 text-ink-600 text-lg leading-relaxed">
              Share your size, colour, printing and quantity — you will get a
              clear rate for your bulk requirement.
            </p>

            <div className="mt-8 space-y-3">
              <a
                href="tel:+919728659049"
                className="flex items-center gap-3 p-4 rounded-2xl bg-white ring-1 ring-ink-200 hover:ring-ink-400 transition-colors"
              >
                <span className="grid place-items-center w-10 h-10 rounded-xl bg-ink-900 text-jute-300">
                  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.33 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
                  </svg>
                </span>
                <div>
                  <div className="text-xs text-ink-500 uppercase tracking-wider">Call us</div>
                  <div className="font-600 text-ink-900">+91 97286 59049</div>
                </div>
              </a>
              <a
                href="mailto:diyatradingcompany@gmail.com"
                className="flex items-center gap-3 p-4 rounded-2xl bg-white ring-1 ring-ink-200 hover:ring-ink-400 transition-colors"
              >
                <span className="grid place-items-center w-10 h-10 rounded-xl bg-ink-900 text-jute-300">
                  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 6-10 7L2 6" />
                  </svg>
                </span>
                <div>
                  <div className="text-xs text-ink-500 uppercase tracking-wider">Email</div>
                  <div className="font-600 text-ink-900">diyatradingcompany@gmail.com</div>
                </div>
              </a>
              <div className="flex items-start gap-3 p-4 rounded-2xl bg-white ring-1 ring-ink-200">
                <span className="grid place-items-center w-10 h-10 rounded-xl bg-ink-900 text-jute-300">
                  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </span>
                <div>
                  <div className="text-xs text-ink-500 uppercase tracking-wider">Location</div>
                  <div className="font-600 text-ink-900">AMRAVALI ROAD, PILLU KHARA MANDI, JIND, HARYANA 126112</div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl bg-white p-6 sm:p-8 ring-1 ring-ink-200 shadow-card"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className={labelClass} htmlFor="name">Name *</label>
                  <input
                    id="name"
                    className={inputClass}
                    value={form.name}
                    onChange={update('name')}
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label className={labelClass} htmlFor="phone">Phone *</label>
                  <input
                    id="phone"
                    className={inputClass}
                    value={form.phone}
                    onChange={update('phone')}
                    placeholder="10-digit mobile"
                    required
                  />
                </div>
                <div>
                  <label className={labelClass} htmlFor="email">Email</label>
                  <input
                    id="email"
                    type="email"
                    className={inputClass}
                    value={form.email}
                    onChange={update('email')}
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label className={labelClass} htmlFor="bag_type">Bag Type</label>
                  <select
                    id="bag_type"
                    className={inputClass}
                    value={form.bag_type}
                    onChange={update('bag_type')}
                  >
                    <option value="">Select a style</option>
                    {bagTypes.map((b) => (
                      <option key={b} value={b}>{b}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className={labelClass} htmlFor="quantity">Quantity</label>
                  <input
                    id="quantity"
                    className={inputClass}
                    value={form.quantity}
                    onChange={update('quantity')}
                    placeholder="e.g. 5,000 pieces"
                  />
                </div>
                <div>
                  <label className={labelClass} htmlFor="size">Size</label>
                  <input
                    id="size"
                    className={inputClass}
                    value={form.size}
                    onChange={update('size')}
                    placeholder="e.g. 12x16 inch"
                  />
                </div>
                <div>
                  <label className={labelClass} htmlFor="colour">Colour</label>
                  <input
                    id="colour"
                    className={inputClass}
                    value={form.colour}
                    onChange={update('colour')}
                    placeholder="e.g. Navy blue"
                  />
                </div>
                <div>
                  <label className={labelClass} htmlFor="printing">Printing</label>
                  <input
                    id="printing"
                    className={inputClass}
                    value={form.printing}
                    onChange={update('printing')}
                    placeholder="e.g. 1-colour logo"
                  />
                </div>
              </div>

              <div className="mt-4">
                <label className={labelClass} htmlFor="message">Message</label>
                <textarea
                  id="message"
                  rows={3}
                  className={inputClass}
                  value={form.message}
                  onChange={update('message')}
                  placeholder="Any other details about your requirement"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="mt-6 w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-ink-900 text-ink-50 font-600 hover:bg-ink-800 disabled:opacity-60 disabled:cursor-not-allowed transition-all hover:shadow-lift"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Sending…
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Submit Enquiry
                  </>
                )}
              </button>

              {status === 'success' && (
                <div className="mt-4 flex items-start gap-2.5 p-4 rounded-xl bg-leaf-50 border border-leaf-200 text-leaf-800">
                  <CheckCircle2 className="w-5 h-5 mt-0.5 shrink-0" />
                  <p className="text-sm">
                    Thank you! Your enquiry has been received. Our team will get
                    back to you with a quote shortly.
                  </p>
                </div>
              )}
              {status === 'error' && (
                <div className="mt-4 flex items-start gap-2.5 p-4 rounded-xl bg-red-50 border border-red-200 text-red-800">
                  <AlertCircle className="w-5 h-5 mt-0.5 shrink-0" />
                  <p className="text-sm">{errorMsg}</p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
