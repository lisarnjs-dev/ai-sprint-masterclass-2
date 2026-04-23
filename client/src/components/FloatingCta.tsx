/*
 * DESIGN: Apple-Inspired Cinematic Minimalism
 * Floating CTA: Appears after scrolling past hero, Apple-style pill button
 */
import { useEffect, useState } from "react";

export default function FloatingCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.8);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 transition-all duration-500"
      style={{
        opacity: visible ? 1 : 0,
        transform: `translateX(-50%) translateY(${visible ? "0" : "20px"})`,
        pointerEvents: visible ? "all" : "none",
      }}
    >
      <button
        onClick={() => {
          const el = document.getElementById("apply");
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }}
        className="flex items-center gap-3 px-6 py-3.5 rounded-full"
        style={{
          background: "rgba(255,255,255,0.95)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          boxShadow: "0 8px 32px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.1)",
          color: "#000",
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "0.875rem",
          fontWeight: 500,
          letterSpacing: "0.01em",
          transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
        onTouchStart={(e) => {
          (e.currentTarget as HTMLButtonElement).style.transform = "scale(0.98)";
        }}
        onTouchEnd={(e) => {
          (e.currentTarget as HTMLButtonElement).style.transform = "scale(1)";
        }}
      >
        <span
          className="w-2 h-2 rounded-full"
          style={{
            background: "#000",
            animation: "pulse 2s infinite",
          }}
        />
        선착순 20명 · 지금 신청하기
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.8); }
        }
      `}</style>
    </div>
  );
}
