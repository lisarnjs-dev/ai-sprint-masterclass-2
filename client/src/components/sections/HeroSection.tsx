/*
 * DESIGN: Apple-Inspired Cinematic Minimalism
 * Hero: Full-screen, cinematic text reveal, scroll-down indicator
 * Background: Generated dark abstract image with subtle grain
 */
import { useEffect, useState } from "react";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663589554565/amhVrRo3SNWxSVcs8Xj6yi/hero-bg-dAqfd7cJLfydZQGbCsoYop.webp";

export default function HeroSection() {
  const [visible, setVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const parallaxOffset = scrollY * 0.4;
  const heroOpacity = Math.max(0, 1 - scrollY / 600);

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: "#000" }}
    >
      {/* Background image with parallax */}
      <div
        className="absolute inset-0"
        style={{
          transform: `translateY(${parallaxOffset}px)`,
          opacity: 0.45,
        }}
      >
        <img
          src={HERO_BG}
          alt=""
          className="w-full h-full object-cover"
          style={{ objectPosition: "center top" }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.1) 40%, rgba(0,0,0,0.7) 80%, rgba(0,0,0,1) 100%)",
          }}
        />
      </div>

      {/* Content */}
      <div
        className="relative z-10 text-center px-6 max-w-5xl mx-auto"
        style={{ opacity: heroOpacity }}
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
            2기 모집 중 · 선착순 20명
          </span>
        </div>

        {/* Main headline */}
        <h1
          className="font-display glow-white"
          style={{
            fontSize: "clamp(3rem, 8vw, 7rem)",
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
            color: "#FFFFFF",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(40px)",
            filter: visible ? "blur(0)" : "blur(8px)",
            transition: "all 1.1s cubic-bezier(0.16, 1, 0.3, 1) 0.25s",
          }}
        >
          AI Product
          <br />
          <span style={{ color: "rgba(255,255,255,0.85)", fontStyle: "italic" }}>
            Sprint
          </span>
        </h1>

        {/* Sub headline */}
        <h2
          className="font-display mt-2"
          style={{
            fontSize: "clamp(2rem, 5vw, 4.5rem)",
            lineHeight: 1.1,
            letterSpacing: "-0.01em",
            color: "rgba(255,255,255,0.5)",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(40px)",
            filter: visible ? "blur(0)" : "blur(8px)",
            transition: "all 1.1s cubic-bezier(0.16, 1, 0.3, 1) 0.4s",
          }}
        >
          Master Class 2기
        </h2>

        {/* Description */}
        <p
          className="mt-8 text-lg md:text-xl max-w-2xl mx-auto"
          style={{
            color: "rgba(255,255,255,0.45)",
            fontWeight: 300,
            lineHeight: 1.7,
            letterSpacing: "0.01em",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(30px)",
            transition: "all 1s cubic-bezier(0.16, 1, 0.3, 1) 0.6s",
          }}
        >
          코딩을 몰라도 괜찮습니다.
          <br />
          AI와 함께 5주 만에 나만의 제품을 만드는 법을 배웁니다.
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center mt-12"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "all 1s cubic-bezier(0.16, 1, 0.3, 1) 0.8s",
          }}
        >
          <button
            className="btn-apple-primary"
            onClick={() => {
              const el = document.getElementById("apply");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
          >
            지금 신청하기
          </button>
          <button
            className="btn-apple"
            onClick={() => {
              const el = document.getElementById("about");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <span>프로그램 알아보기</span>
          </button>
        </div>

        {/* Stats row */}
        <div
          className="flex justify-center gap-12 mt-16"
          style={{
            opacity: visible ? 1 : 0,
            transition: "all 1s cubic-bezier(0.16, 1, 0.3, 1) 1s",
          }}
        >
          {[
            { value: "5주", label: "집중 과정" },
            { value: "20명", label: "선착순 모집" },
            { value: "100%", label: "비개발자 대상" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div
                className="font-display text-2xl md:text-3xl text-white"
                style={{ fontWeight: 700 }}
              >
                {stat.value}
              </div>
              <div className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.35)", letterSpacing: "0.08em" }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{
          opacity: visible ? (scrollY > 50 ? 0 : 0.5) : 0,
          transition: "opacity 0.5s ease",
        }}
      >
        <span className="section-label text-[10px]">스크롤</span>
        <div className="w-px h-12 overflow-hidden" style={{ background: "rgba(255,255,255,0.1)" }}>
          <div
            className="w-full bg-white"
            style={{
              height: "50%",
              animation: "scrollLine 1.8s ease-in-out infinite",
            }}
          />
        </div>
      </div>

      <style>{`
        @keyframes scrollLine {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(200%); }
        }
      `}</style>
    </section>
  );
}
