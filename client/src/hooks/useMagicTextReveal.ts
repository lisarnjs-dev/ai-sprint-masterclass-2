/*
 * DESIGN: Apple-Inspired Cinematic Minimalism
 * Magic Text Reveal: Performance-optimized character-by-character animation
 * Mobile optimization: Reduced animation on low-end devices, prefers-reduced-motion support
 */
import { useEffect, useRef, useState } from "react";

interface UseMagicTextRevealOptions {
  duration?: number; // Total animation duration in ms
  delay?: number; // Delay before animation starts
  staggerDelay?: number; // Delay between each character
  reduceMotion?: boolean; // Respect prefers-reduced-motion
}

export function useMagicTextReveal(options: UseMagicTextRevealOptions = {}) {
  const {
    duration = 1200,
    delay = 0,
    staggerDelay = 30,
    reduceMotion = false,
  } = options;

  const ref = useRef<HTMLElement>(null);
  const [displayedText, setDisplayedText] = useState("");
  const [isAnimating, setIsAnimating] = useState(false);
  const animationRef = useRef<NodeJS.Timeout | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Check for prefers-reduced-motion
  const prefersReducedMotion =
    reduceMotion ||
    (typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches);

  useEffect(() => {
    if (!ref.current) return;

    const fullText = ref.current.textContent || "";

    // Intersection Observer to trigger animation when element is visible
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !isAnimating) {
          setIsAnimating(true);

          if (prefersReducedMotion) {
            // Skip animation on reduced motion preference
            setDisplayedText(fullText);
            return;
          }

          // Calculate delay per character
          const charDelay = staggerDelay;
          let currentIndex = 0;

          // Clear previous animation
          if (animationRef.current) {
            clearTimeout(animationRef.current);
          }

          const animate = () => {
            if (currentIndex <= fullText.length) {
              setDisplayedText(fullText.slice(0, currentIndex));
              currentIndex++;

              animationRef.current = setTimeout(
                animate,
                currentIndex === 1 ? delay : charDelay
              );
            }
          };

          animate();
        }
      });
    };

    // Create Intersection Observer with optimized options
    observerRef.current = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
      rootMargin: "50px",
    });

    observerRef.current.observe(ref.current);

    return () => {
      if (animationRef.current) {
        clearTimeout(animationRef.current);
      }
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [delay, staggerDelay, prefersReducedMotion, isAnimating]);

  return { ref, displayedText };
}
