import { useEffect, useRef } from "react";

export function useScrollReveal(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const targets = entry.target.querySelectorAll(".text-reveal");
            targets.forEach((t) => t.classList.add("visible"));
            // Also add visible to the element itself if it has text-reveal
            if (entry.target.classList.contains("text-reveal")) {
              entry.target.classList.add("visible");
            }
          }
        });
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}

export function useElementReveal(threshold = 0.2) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold }
    );

    // Observe all text-reveal children
    const children = el.querySelectorAll(".text-reveal");
    children.forEach((child) => observer.observe(child));
    if (el.classList.contains("text-reveal")) observer.observe(el);

    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}
