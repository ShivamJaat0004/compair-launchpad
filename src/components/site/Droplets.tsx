const DROPS = [
  { left: "8%", size: 10, delay: 0, dur: 8 },
  { left: "18%", size: 6, delay: 1.8, dur: 6.5 },
  { left: "32%", size: 14, delay: 3.2, dur: 9.5 },
  { left: "47%", size: 8, delay: 0.9, dur: 7.2 },
  { left: "61%", size: 12, delay: 2.4, dur: 8.8 },
  { left: "74%", size: 7, delay: 4.1, dur: 6.9 },
  { left: "88%", size: 11, delay: 1.2, dur: 9.1 },
];

export function Droplets({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      {DROPS.map((d, i) => (
        <span
          key={i}
          className="animate-droplet absolute bottom-0 rounded-full bg-primary/25"
          style={{
            left: d.left,
            width: d.size,
            height: d.size * 1.25,
            animationDelay: `${d.delay}s`,
            animationDuration: `${d.dur}s`,
          }}
        />
      ))}
    </div>
  );
}
