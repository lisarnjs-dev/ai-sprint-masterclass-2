/*
 * DESIGN: Apple-Inspired Cinematic Minimalism
 * Instructor: Asymmetric layout, large quote, placeholder profile
 */
import { useElementReveal } from "@/hooks/useScrollReveal";

export default function InstructorSection() {
  const ref1 = useElementReveal(0.15);
  const ref2 = useElementReveal(0.1);

  return (
    <section id="instructor" className="relative py-32 md:py-48" style={{ background: "#000" }}>
      <div className="container">
        {/* Header */}
        <div ref={ref1} className="mb-20">
          <p className="section-label mb-6 text-reveal">강사 소개</p>
          <h2
            className="font-display text-reveal delay-100"
            style={{
              fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              color: "#fff",
            }}
          >
            함께 배울
            <br />
            <span style={{ color: "rgba(255,255,255,0.4)" }}>전문가를 소개합니다.</span>
          </h2>
        </div>

        {/* Instructor card */}
        <div ref={ref2}>
          <div
            className="text-reveal grid md:grid-cols-5 gap-8 lg:gap-16 items-start p-8 md:p-12 rounded-2xl"
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.07)",
            }}
          >
            {/* Profile image placeholder */}
            <div className="md:col-span-2">
              <div
                className="rounded-xl overflow-hidden"
                style={{
                  aspectRatio: "3/4",
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  maxHeight: "400px",
                }}
              >
                <div className="text-center px-8">
                  <div
                    className="w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center"
                    style={{ background: "rgba(255,255,255,0.08)" }}
                  >
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                      <circle cx="12" cy="7" r="4"/>
                    </svg>
                  </div>
                  <p className="section-label text-[10px]">강사 프로필 사진</p>
                </div>
              </div>
            </div>

            {/* Info */}
            <div className="md:col-span-3 flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h3
                    className="font-display text-3xl text-white"
                    style={{ fontWeight: 700 }}
                  >
                    강사명
                  </h3>
                  <span
                    className="section-label text-[10px] px-2 py-1 rounded-full"
                    style={{
                      border: "1px solid rgba(255,255,255,0.15)",
                      background: "rgba(255,255,255,0.04)",
                    }}
                  >
                    플레이스홀더
                  </span>
                </div>
                <p
                  className="text-sm mb-8"
                  style={{ color: "rgba(255,255,255,0.35)", fontWeight: 300 }}
                >
                  직함 / 소속 기관
                </p>

                {/* Quote */}
                <blockquote
                  className="font-display text-xl md:text-2xl mb-8"
                  style={{
                    color: "rgba(255,255,255,0.75)",
                    lineHeight: 1.5,
                    fontStyle: "italic",
                    borderLeft: "2px solid rgba(255,255,255,0.15)",
                    paddingLeft: "1.5rem",
                  }}
                >
                  "코딩을 배우는 시대는 끝났습니다. 이제는 AI와 함께 만드는 법을 배울 시간입니다."
                </blockquote>

                <p
                  className="text-sm leading-relaxed mb-8"
                  style={{ color: "rgba(255,255,255,0.4)", fontWeight: 300 }}
                >
                  강사 소개 텍스트가 들어갈 자리입니다. 강사의 경력, 전문 분야,
                  그리고 이 프로그램을 만들게 된 배경을 이곳에 작성해 주세요.
                  수강생들이 신뢰를 가질 수 있도록 구체적인 경험과 성과를 포함하면 좋습니다.
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {["바이브코딩", "AI 제품 개발", "스타트업", "비개발자 교육"].map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1.5 rounded-full"
                      style={{
                        background: "rgba(255,255,255,0.06)",
                        border: "1px solid rgba(255,255,255,0.1)",
                        color: "rgba(255,255,255,0.5)",
                        fontWeight: 300,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
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
