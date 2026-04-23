/*
 * DESIGN: Apple-Inspired Cinematic Minimalism
 * About: Large statement text, feature cards with icons, statistics
 */
import { useElementReveal } from "@/hooks/useScrollReveal";

const VIBE_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663589554565/amhVrRo3SNWxSVcs8Xj6yi/vibe-coding-visual-FgSw7AysDZb6KaFuieWKKu.webp";

const features = [
  {
    number: "01",
    title: "바이브코딩이란?",
    desc: "AI에게 원하는 것을 말하면, AI가 코드를 작성합니다. 코딩 지식 없이도 아이디어를 현실로 만드는 새로운 방식입니다.",
  },
  {
    number: "02",
    title: "왜 지금인가?",
    desc: "AI 도구의 급격한 발전으로 비개발자도 제품을 직접 만들 수 있는 시대가 열렸습니다. 이 기회를 먼저 잡는 사람이 앞서갑니다.",
  },
  {
    number: "03",
    title: "무엇을 만드나요?",
    desc: "5주 동안 실제로 동작하는 웹 서비스, 자동화 도구, AI 기반 앱을 직접 기획하고 완성합니다.",
  },
];

const stats = [
  { value: "500+", label: "수강생" },
  { value: "16K+", label: "팔로워" },
  { value: "4년", label: "개발 경력" },
];

export default function AboutSection() {
  const ref1 = useElementReveal(0.15);
  const ref2 = useElementReveal(0.1);
  const ref3 = useElementReveal(0.1);
  const ref4 = useElementReveal(0.1);

  return (
    <section id="about" className="relative py-32 md:py-48" style={{ background: "#000" }}>
      <div className="container">
        {/* Statement */}
        <div ref={ref1} className="max-w-4xl mb-24 md:mb-36">
          <p className="section-label mb-6 text-reveal">바이브코딩 마스터클래스</p>
          <h2
            className="font-display text-reveal delay-100"
            style={{
              fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              color: "#fff",
            }}
          >
            코드를 몰라도
            <br />
            <span style={{ color: "rgba(255,255,255,0.45)" }}>제품을 만들 수 있습니다.</span>
          </h2>
          <p
            className="mt-8 text-lg text-reveal delay-200"
            style={{
              color: "rgba(255,255,255,0.45)",
              fontWeight: 300,
              lineHeight: 1.8,
              maxWidth: "560px",
            }}
          >
            AI Product Sprint Master Class는 비개발자를 위한 실전 바이브코딩 프로그램입니다.
            아이디어를 가진 누구나, 5주 만에 자신만의 AI 제품을 완성할 수 있습니다.
          </p>
        </div>

        {/* Visual + Features */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center mb-24">
          {/* Image */}
          <div
            ref={ref2}
            className="text-reveal relative rounded-2xl overflow-hidden"
            style={{
              aspectRatio: "3/4",
              maxHeight: "600px",
            }}
          >
            <img
              src={VIBE_IMG}
              alt="바이브코딩 비주얼"
              className="w-full h-full object-cover"
            />
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(135deg, rgba(0,0,0,0.3) 0%, transparent 60%)",
              }}
            />
          </div>

          {/* Feature list */}
          <div ref={ref3} className="flex flex-col gap-8">
            {features.map((f, i) => (
              <div
                key={f.number}
                className="text-reveal card-hover p-6 rounded-xl"
                style={{ transitionDelay: `${i * 0.12}s` }}
              >
                <div className="flex items-start gap-4">
                  <span
                    className="font-mono-custom text-xs shrink-0 mt-1"
                    style={{ color: "rgba(255,255,255,0.25)" }}
                  >
                    {f.number}
                  </span>
                  <div>
                    <h3
                      className="font-display text-xl mb-3"
                      style={{ color: "#fff", fontWeight: 700 }}
                    >
                      {f.title}
                    </h3>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "rgba(255,255,255,0.45)", fontWeight: 300 }}
                    >
                      {f.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Statistics */}
        <div
          ref={ref4}
          className="grid grid-cols-3 gap-4 md:gap-8 py-12 border-t border-b"
          style={{ borderColor: "rgba(255,255,255,0.08)" }}
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="text-reveal text-center"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div
                className="font-display text-3xl md:text-4xl mb-2"
                style={{ color: "#fff", fontWeight: 700 }}
              >
                {stat.value}
              </div>
              <div
                className="text-xs md:text-sm"
                style={{ color: "rgba(255,255,255,0.35)", fontWeight: 300 }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="section-divider" />
      </div>
    </section>
  );
}
