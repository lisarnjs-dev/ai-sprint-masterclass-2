/*
 * DESIGN: Apple-Inspired Cinematic Minimalism
 * Hero: Full-screen, cinematic text reveal, 3D spiral animation
 * Background: 3D spiral animation with stars
 */
import { useEffect, useState } from "react";
import { SpiralAnimation } from "@/components/SpiralAnimation";

export default function HeroSection() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: "#000" }}
    >
      {/* 3D Spiral Animation Background */}
      <div className="absolute inset-0 w-full h-full">
        <SpiralAnimation />
      </div>

      {/* Overlay gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.4) 40%, rgba(0,0,0,0.7) 80%, rgba(0,0,0,0.95) 100%)",
        }}
      />

      {/* Content */}
      <div
        className="relative z-10 text-center px-6 max-w-5xl mx-auto"
      >
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 mb-8 mt-16"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "all 1s cubic-bezier(0.16, 1, 0.3, 1) 0.1s",
          }}
        >
          <span
            className="section-label px-4 py-1.5 rounded-full"
            style={{
              border: "1px solid rgba(255,255,255,0.15)",
              background: "rgba(255,255,255,0.05)",
            }}
          >
            2기 모집 중 · 4/23(목) 18시 ~ 4/30(목) 자정
          </span>
        </div>

        {/* Main headline */}
        <h1
          className="font-display glow-white"
          style={{
            fontSize: "clamp(3rem, 8vw, 7rem)",
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
            color: "#fff",
            fontWeight: 900,
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(40px)",
            filter: visible ? "blur(0)" : "blur(8px)",
            transition: "all 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.2s",
            marginBottom: "1.5rem",
          }}
        >
          AI Product
          <br />
          <span style={{ fontStyle: "italic", color: "rgba(255,255,255,0.85)" }}>
            Sprint
          </span>
          <br />
          Master Class 2기
        </h1>

        {/* Subtitle */}
        <p
          className="text-lg md:text-xl"
          style={{
            color: "rgba(255,255,255,0.5)",
            fontWeight: 300,
            lineHeight: 1.7,
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(40px)",
            filter: visible ? "blur(0)" : "blur(8px)",
            transition: "all 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.3s",
            marginBottom: "2rem",
          }}
        >
          코딩을 몰라도 괜찮습니다.
          <br />
          AI와 함께 5주 만에 나만의 제품을 만드는 법을 배웁니다.
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(40px)",
            filter: visible ? "blur(0)" : "blur(8px)",
            transition: "all 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.4s",
          }}
        >
          <button
            onClick={() => {
              const el = document.getElementById("apply");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="btn-apple-primary"
          >
            지금 신청하기
          </button>
          <button
            className="btn-apple"
            onClick={() => {
              const el = document.getElementById("curriculum");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <span>프로그램 알아보기</span>
          </button>
        </div>

        {/* Schedule info */}
        <div
          className="mt-12 flex flex-col sm:flex-row gap-6 justify-center items-center text-sm"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(40px)",
            filter: visible ? "blur(0)" : "blur(8px)",
            transition: "all 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.5s",
          }}
        >
          <div style={{ textAlign: "center" }}>
            <div style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.5rem" }}>
              모집 기간
            </div>
            <div style={{ color: "rgba(255,255,255,0.7)", fontWeight: 400 }}>
              4월 23일 ~ 4월 30일
            </div>
          </div>
          <div style={{ width: "1px", height: "24px", background: "rgba(255,255,255,0.1)" }} />
          <div style={{ textAlign: "center" }}>
            <div style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.5rem" }}>
              진행 기간
            </div>
            <div style={{ color: "rgba(255,255,255,0.7)", fontWeight: 400 }}>
              5월 11일 ~ 6월 14일 (5주)
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateX(-50%) translateY(0)" : "translateX(-50%) translateY(-20px)",
          transition: "all 1s cubic-bezier(0.16, 1, 0.3, 1) 0.6s",
        }}
      >
        <div
          style={{
            animation: "bounce 2s infinite",
            color: "rgba(255,255,255,0.3)",
            fontSize: "0.75rem",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
          }}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ margin: "0 auto" }}>
            <path d="M10 4v10M6 12l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(8px); }
        }
      `}</style>
    </section>
  );
}
