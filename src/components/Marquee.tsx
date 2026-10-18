const items = [
  'D-Cut Bags',
  'W-Cut Bags',
  'Box Bags',
  'Loop Bags',
  'Custom Printing',
  'Wholesale Supply',
  'Pan-India Dispatch',
  'Eco-Friendly Fabric',
];

export default function Marquee() {
  const row = [...items, ...items];
  return (
    <div className="bg-ink-900 text-ink-50 py-4 overflow-hidden border-y border-ink-800">
      <div className="marquee-track gap-10">
        {row.map((t, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-3 text-sm font-600 uppercase tracking-[0.14em] text-ink-200"
          >
            {t}
            <span className="text-jute-400">/</span>
          </span>
        ))}
      </div>
    </div>
  );
}
