/*
 * DESIGN: Apple-Inspired Cinematic Minimalism
 * Instructor: Asymmetric layout, credentials, social proof
 */
import { useElementReveal } from "@/hooks/useScrollReveal";

export default function InstructorSection() {
  const ref1 = useElementReveal(0.15);
  const ref2 = useElementReveal(0.1);

  const credentials = [
    { label: "개발 경력", value: "4년차" },
    { label: "현직", value: "개발 부트캠프 강사" },
    { label: "브랜드", value: "Super Human" },
    { label: "수강생", value: "500명+" },
    { label: "팔로워", value: "16,000+" },
  ];

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
            {/* Profile info */}
            <div className="md:col-span-2">
              <div className="mb-6">
                <h3
                  className="font-display text-3xl md:text-4xl mb-2"
                  style={{ color: "#fff", fontWeight: 700 }}
                >
                  리사권
                </h3>
                <p
                  className="text-lg"
                  style={{ color: "rgba(255,255,255,0.5)", fontWeight: 400 }}
                >
                  만능언니
                </p>
              </div>

              <div className="space-y-3 mb-8">
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "rgba(255,255,255,0.45)", fontWeight: 300 }}
                >
                  기술을 진짜 아는 사람이 비개발자 언어로 가장 쉽게 설명합니다.
                </p>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "rgba(255,255,255,0.35)", fontWeight: 300 }}
                >
                  4년차 개발자 출신으로 현직 개발 부트캠프 강사이며, Super Human이라는 AI 교육 브랜드를 운영하고 있습니다.
                </p>
              </div>

              <a
                href="https://instagram.com/lisakkwon_"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm"
                style={{
                  color: "rgba(255,255,255,0.5)",
                  textDecoration: "none",
                  transition: "color 0.3s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.8)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.5)";
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.322a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z" />
                </svg>
                @lisakkwon_
              </a>
            </div>

            {/* Credentials grid */}
            <div className="md:col-span-3">
              <div className="grid grid-cols-2 gap-4">
                {credentials.map((cred, i) => (
                  <div
                    key={cred.label}
                    className="text-reveal p-4 rounded-lg"
                    style={{
                      background: "rgba(255,255,255,0.02)",
                      border: "1px solid rgba(255,255,255,0.05)",
                      transitionDelay: `${i * 0.08}s`,
                    }}
                  >
                    <div
                      className="text-xs mb-2"
                      style={{ color: "rgba(255,255,255,0.25)", fontWeight: 300 }}
                    >
                      {cred.label}
                    </div>
                    <div
                      className="font-display text-xl"
                      style={{ color: "#fff", fontWeight: 700 }}
                    >
                      {cred.value}
                    </div>
                  </div>
                ))}
              </div>

              <div
                className="mt-6 p-4 rounded-lg"
                style={{
                  background: "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "rgba(255,255,255,0.4)", fontWeight: 300 }}
                >
                  <span style={{ color: "rgba(255,255,255,0.6)", fontWeight: 500 }}>핵심 강점:</span> 기술을 진짜 아는 사람이 비개발자 언어로 가장 쉽게 설명
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="section-divider mt-24" />
      </div>
    </section>
  );
}
