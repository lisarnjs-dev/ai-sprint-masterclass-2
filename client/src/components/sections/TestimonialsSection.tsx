/*
 * DESIGN: Apple-Inspired Cinematic Minimalism
 * Testimonials: Large quote cards, staggered grid
 */
import { useElementReveal } from "@/hooks/useScrollReveal";

const testimonials = [
  {
    quote: "코딩을 전혀 몰랐는데, 5주 만에 실제로 동작하는 서비스를 만들었습니다. 믿기지 않을 정도예요.",
    name: "김○○",
    role: "마케터",
    initial: "K",
  },
  {
    quote: "AI 도구를 어떻게 써야 할지 막막했는데, 체계적으로 배우니 이제는 혼자서도 뭔가를 만들 수 있다는 자신감이 생겼습니다.",
    name: "이○○",
    role: "기획자",
    initial: "L",
  },
  {
    quote: "개발자에게 의존하지 않아도 된다는 게 이렇게 해방감을 줄 줄 몰랐어요. 아이디어가 있는 분들께 강력 추천합니다.",
    name: "박○○",
    role: "스타트업 창업자",
    initial: "P",
  },
  {
    quote: "5주 과정이 끝나고 나서도 계속 뭔가를 만들고 있어요. 배운 것들이 실제 업무에 바로 적용됩니다.",
    name: "최○○",
    role: "PM",
    initial: "C",
  },
];

export default function TestimonialsSection() {
  const headerRef = useElementReveal(0.15);
  const gridRef = useElementReveal(0.05);

  return (
    <section id="testimonials" className="relative py-32 md:py-48" style={{ background: "#000" }}>
      <div className="container">
        {/* Header */}
        <div ref={headerRef} className="mb-20">
          <p className="section-label mb-6 text-reveal">수강생 후기</p>
          <h2
            className="font-display text-reveal delay-100"
            style={{
              fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              color: "#fff",
            }}
          >
            수강생들의
            <br />
            <span style={{ color: "rgba(255,255,255,0.4)" }}>실제 이야기.</span>
          </h2>
        </div>

        {/* Testimonials grid */}
        <div ref={gridRef} className="grid md:grid-cols-2 gap-4">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="text-reveal card-hover p-8 rounded-2xl flex flex-col justify-between"
              style={{
                background: "rgba(255,255,255,0.03)",
                transitionDelay: `${i * 0.1}s`,
                minHeight: "220px",
              }}
            >
              {/* Quote mark */}
              <div>
                <div
                  className="font-display text-5xl mb-4 leading-none"
                  style={{ color: "rgba(255,255,255,0.12)" }}
                >
                  "
                </div>
                <p
                  className="text-base md:text-lg leading-relaxed"
                  style={{
                    color: "rgba(255,255,255,0.7)",
                    fontWeight: 300,
                    fontStyle: "italic",
                  }}
                >
                  {t.quote}
                </p>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 mt-8">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
                  style={{
                    background: "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(255,255,255,0.1)",
                  }}
                >
                  <span
                    className="font-display text-sm"
                    style={{ color: "rgba(255,255,255,0.5)", fontWeight: 700 }}
                  >
                    {t.initial}
                  </span>
                </div>
                <div>
                  <div className="text-sm font-medium text-white">{t.name}</div>
                  <div
                    className="text-xs"
                    style={{ color: "rgba(255,255,255,0.35)", fontWeight: 300 }}
                  >
                    {t.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <p
          className="text-center mt-8 text-xs"
          style={{ color: "rgba(255,255,255,0.2)", fontWeight: 300 }}
        >
          * 위 후기는 플레이스홀더입니다. 실제 수강생 후기로 교체해 주세요.
        </p>

        <div className="section-divider mt-24" />
      </div>
    </section>
  );
}
