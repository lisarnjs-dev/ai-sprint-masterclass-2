/*
 * DESIGN: Apple-Inspired Cinematic Minimalism
 * Apply: Full-width CTA with community visual, urgency indicators
 */
import { useElementReveal } from "@/hooks/useScrollReveal";

const COMMUNITY_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663589554565/amhVrRo3SNWxSVcs8Xj6yi/community-visual-gWURqE2kB4GNCnjxpWReCU.webp";

export default function ApplySection() {
  const ref1 = useElementReveal(0.15);
  const ref2 = useElementReveal(0.1);

  const handleApply = () => {
    // 신청 링크 연결 예정
    alert("신청 링크를 연결해 주세요. (예: 구글 폼, 카카오채널 등)");
  };

  return (
    <section id="apply" className="relative py-32 md:py-48 overflow-hidden" style={{ background: "#000" }}>
      {/* Background image */}
      <div
        className="absolute inset-0"
        style={{ opacity: 0.08 }}
      >
        <img
          src={COMMUNITY_IMG}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(255,255,255,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="container relative z-10">
        {/* Header */}
        <div ref={ref1} className="text-center mb-16">
          <p className="section-label mb-6 text-reveal">지금 신청하세요</p>
          <h2
            className="font-display text-reveal delay-100 glow-white"
            style={{
              fontSize: "clamp(3rem, 7vw, 6rem)",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              color: "#fff",
            }}
          >
            당신의 아이디어를
            <br />
            <span style={{ color: "rgba(255,255,255,0.5)", fontStyle: "italic" }}>
              현실로 만드세요.
            </span>
          </h2>
          <p
            className="mt-8 text-lg text-reveal delay-200 max-w-xl mx-auto"
            style={{
              color: "rgba(255,255,255,0.4)",
              fontWeight: 300,
              lineHeight: 1.7,
            }}
          >
            선착순 20명 한정. 코딩 경험이 없어도 됩니다.
            아이디어와 의지만 있으면 충분합니다.
          </p>
        </div>

        {/* Info cards */}
        <div ref={ref2} className="grid md:grid-cols-3 gap-4 mb-12 max-w-3xl mx-auto">
          {[
            { label: "모집 인원", value: "선착순 20명", icon: "👥" },
            { label: "수강 기간", value: "5주 집중 과정", icon: "📅" },
            { label: "수강 대상", value: "비개발자 누구나", icon: "✨" },
          ].map((item, i) => (
            <div
              key={item.label}
              className="text-reveal text-center p-6 rounded-xl"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                transitionDelay: `${i * 0.1}s`,
              }}
            >
              <div className="text-2xl mb-3">{item.icon}</div>
              <div
                className="font-display text-xl text-white mb-1"
                style={{ fontWeight: 700 }}
              >
                {item.value}
              </div>
              <div
                className="text-xs"
                style={{ color: "rgba(255,255,255,0.35)", fontWeight: 300 }}
              >
                {item.label}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className="text-reveal flex flex-col items-center gap-4"
          style={{ transitionDelay: "0.3s" }}
        >
          <button
            onClick={handleApply}
            className="btn-apple-primary text-lg px-12 py-4"
            style={{ fontSize: "1.0625rem" }}
          >
            수강 신청하기
          </button>
          <p
            className="text-xs text-center"
            style={{ color: "rgba(255,255,255,0.25)", fontWeight: 300 }}
          >
            수강료는 추후 공지됩니다 · 선착순 마감
          </p>
        </div>

        {/* Urgency bar */}
        <div
          className="mt-16 max-w-sm mx-auto"
        >
          <div className="flex justify-between items-center mb-2">
            <span className="section-label text-[10px]">모집 현황</span>
            <span
              className="font-mono-custom text-xs"
              style={{ color: "rgba(255,255,255,0.4)" }}
            >
              ? / 20명
            </span>
          </div>
          <div
            className="h-px w-full rounded-full overflow-hidden"
            style={{ background: "rgba(255,255,255,0.1)" }}
          >
            <div
              className="h-full rounded-full"
              style={{
                width: "35%",
                background: "rgba(255,255,255,0.6)",
                transition: "width 1.5s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            />
          </div>
          <p
            className="text-xs mt-2 text-center"
            style={{ color: "rgba(255,255,255,0.2)", fontWeight: 300 }}
          >
            * 실제 모집 현황으로 업데이트해 주세요
          </p>
        </div>
      </div>
    </section>
  );
}
