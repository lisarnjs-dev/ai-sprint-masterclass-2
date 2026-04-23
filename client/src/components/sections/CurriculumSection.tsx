/*
 * DESIGN: Apple-Inspired Cinematic Minimalism
 * Curriculum: 5-week timeline with large week numbers, staggered reveal
 */
import { useElementReveal } from "@/hooks/useScrollReveal";

const CURRICULUM_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663589554565/amhVrRo3SNWxSVcs8Xj6yi/curriculum-visual-NcmmEerGStN8a6jEmHundP.webp";

const weeks = [
  {
    week: "01",
    title: "AI 도구 완전 정복",
    subtitle: "환경 세팅 & 첫 번째 프로젝트",
    topics: ["바이브코딩 개념 이해", "Cursor, Claude, ChatGPT 활용법", "첫 번째 웹페이지 완성"],
    color: "rgba(255,255,255,0.9)",
  },
  {
    week: "02",
    title: "아이디어를 제품으로",
    subtitle: "기획 & 프로토타입",
    topics: ["제품 아이디어 구체화", "와이어프레임 → 실제 UI", "AI와 함께 기획서 작성"],
    color: "rgba(255,255,255,0.75)",
  },
  {
    week: "03",
    title: "기능 구현",
    subtitle: "핵심 기능 개발",
    topics: ["데이터베이스 연동", "사용자 인증 구현", "API 연동 실습"],
    color: "rgba(255,255,255,0.6)",
  },
  {
    week: "04",
    title: "AI 기능 통합",
    subtitle: "AI 파워 더하기",
    topics: ["LLM API 연동", "AI 자동화 기능 구현", "사용자 경험 개선"],
    color: "rgba(255,255,255,0.45)",
  },
  {
    week: "05",
    title: "런칭 & 발표",
    subtitle: "완성 & 배포",
    topics: ["제품 최종 완성", "실제 서비스 배포", "데모데이 발표"],
    color: "rgba(255,255,255,0.35)",
  },
];

export default function CurriculumSection() {
  const headerRef = useElementReveal(0.15);
  const listRef = useElementReveal(0.05);
  const visualRef = useElementReveal(0.1);

  return (
    <section id="curriculum" className="relative py-32 md:py-48" style={{ background: "#000" }}>
      <div className="container">
        {/* Header */}
        <div ref={headerRef} className="mb-20 md:mb-28">
          <p className="section-label mb-6 text-reveal">5주 커리큘럼</p>
          <h2
            className="font-display text-reveal delay-100"
            style={{
              fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              color: "#fff",
            }}
          >
            5주 안에
            <br />
            <span style={{ color: "rgba(255,255,255,0.4)" }}>제품을 완성합니다.</span>
          </h2>
        </div>

        {/* Two column layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Timeline */}
          <div ref={listRef} className="relative">
            {/* Vertical line */}
            <div
              className="absolute left-8 top-0 bottom-0 w-px"
              style={{ background: "linear-gradient(to bottom, rgba(255,255,255,0.15), rgba(255,255,255,0.02))" }}
            />

            <div className="flex flex-col gap-0">
              {weeks.map((w, i) => (
                <div
                  key={w.week}
                  className="text-reveal relative pl-20 pb-12"
                  style={{ transitionDelay: `${i * 0.1}s` }}
                >
                  {/* Week dot */}
                  <div
                    className="absolute left-6 top-1 w-4 h-4 rounded-full border flex items-center justify-center"
                    style={{
                      borderColor: "rgba(255,255,255,0.25)",
                      background: "#000",
                    }}
                  >
                    <div
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ background: w.color }}
                    />
                  </div>

                  {/* Content */}
                  <div>
                    <div className="flex items-baseline gap-3 mb-2">
                      <span
                        className="font-mono-custom text-xs"
                        style={{ color: "rgba(255,255,255,0.25)" }}
                      >
                        WEEK {w.week}
                      </span>
                    </div>
                    <h3
                      className="font-display text-xl mb-1"
                      style={{ color: w.color, fontWeight: 700 }}
                    >
                      {w.title}
                    </h3>
                    <p
                      className="text-sm mb-4"
                      style={{ color: "rgba(255,255,255,0.35)", fontWeight: 300 }}
                    >
                      {w.subtitle}
                    </p>
                    <ul className="flex flex-col gap-1.5">
                      {w.topics.map((topic) => (
                        <li
                          key={topic}
                          className="flex items-center gap-2 text-sm"
                          style={{ color: "rgba(255,255,255,0.4)", fontWeight: 300 }}
                        >
                          <span
                            className="w-1 h-1 rounded-full shrink-0"
                            style={{ background: "rgba(255,255,255,0.25)" }}
                          />
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div ref={visualRef} className="lg:sticky lg:top-24">
            <div
              className="text-reveal relative rounded-2xl overflow-hidden"
              style={{ aspectRatio: "4/3" }}
            >
              <img
                src={CURRICULUM_IMG}
                alt="커리큘럼 비주얼"
                className="w-full h-full object-cover"
              />
              <div
                className="absolute inset-0 rounded-2xl"
                style={{
                  background: "linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.8) 100%)",
                }}
              />
            </div>

            {/* Summary card */}
            <div
              className="mt-6 p-6 rounded-xl"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <p
                className="text-sm leading-relaxed"
                style={{ color: "rgba(255,255,255,0.5)", fontWeight: 300 }}
              >
                매주 실습 중심으로 진행되며, 수업 후에도 커뮤니티를 통해
                질문하고 피드백을 받을 수 있습니다. 5주 후에는 실제로 동작하는
                나만의 AI 제품을 손에 쥐게 됩니다.
              </p>
              <div
                className="mt-4 pt-4 flex gap-6"
                style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
              >
                <div>
                  <div className="font-display text-2xl text-white" style={{ fontWeight: 700 }}>5주</div>
                  <div className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.3)" }}>집중 과정</div>
                </div>
                <div>
                  <div className="font-display text-2xl text-white" style={{ fontWeight: 700 }}>매주</div>
                  <div className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.3)" }}>라이브 세션</div>
                </div>
                <div>
                  <div className="font-display text-2xl text-white" style={{ fontWeight: 700 }}>1:1</div>
                  <div className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.3)" }}>피드백</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="section-divider mt-24" />
      </div>
    </section>
  );
}
