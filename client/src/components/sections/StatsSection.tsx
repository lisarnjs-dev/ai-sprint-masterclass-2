/*
 * DESIGN: Apple-Inspired Cinematic Minimalism
 * Stats: Large animated numbers, Apple-style data presentation
 */
import { useEffect, useRef, useState } from "react";

function useCountUp(target: number, duration = 1800, start = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);

  return count;
}

function StatItem({
  value,
  suffix,
  label,
  delay,
}: {
  value: number;
  suffix: string;
  label: string;
  delay: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);
  const count = useCountUp(value, 1800, started);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setStarted(true), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className="text-center">
      <div
        className="font-display"
        style={{
          fontSize: "clamp(3.5rem, 7vw, 6rem)",
          lineHeight: 1,
          color: "#fff",
          fontWeight: 900,
          letterSpacing: "-0.03em",
        }}
      >
        {count}
        <span style={{ color: "rgba(255,255,255,0.4)" }}>{suffix}</span>
      </div>
      <p
        className="mt-3 text-sm"
        style={{ color: "rgba(255,255,255,0.35)", fontWeight: 300, letterSpacing: "0.05em" }}
      >
        {label}
      </p>
    </div>
  );
}

export default function StatsSection() {
  return (
    <section
      className="py-24 md:py-32"
      style={{
        background: "#000",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div className="container">
        <div className="grid grid-cols-3 gap-4 md:gap-8 overflow-x-auto pb-4">
          <StatItem value={5} suffix="주" label="집중 커리큘럼" delay={0} />
          <StatItem value={20} suffix="명" label="선착순 모집" delay={150} />
          <StatItem value={100} suffix="%" label="비개발자 대상" delay={300} />
        </div>
      </div>
    </section>
  );
}
