/*
 * DESIGN: Apple-Inspired Cinematic Minimalism
 * Apply: Pricing cards, CTA, social proof
 */
import { useElementReveal } from "@/hooks/useScrollReveal";

const pricingOptions = [
  {
    id: 1,
    title: "Master Class 2기",
    subtitle: "(리뷰 이벤트+20% 할인)",
    price: "442,000",
    originalPrice: "590,000",
    discount: "25% 할인",
    features: [
      "8개 파트 + 보너스 강의",
      "실전 프로젝트 2개",
      "결제 시스템 구축",
      "3개월 노션 접근",
      "무한 피드백",
      "모각코 참여 가능",
    ],
    highlighted: true,
    cta: "지금 신청하기",
  },
  {
    id: 2,
    title: "Master Class 2기",
    subtitle: "(20% 할인만)",
    price: "472,000",
    originalPrice: "590,000",
    discount: "20% 할인",
    features: [
      "8개 파트 + 보너스 강의",
      "실전 프로젝트 2개",
      "결제 시스템 구축",
      "3개월 노션 접근",
      "무한 피드백",
      "모각코 참여 가능",
    ],
    highlighted: false,
    cta: "신청하기",
  },
  {
    id: 3,
    title: "Master Class 3기",
    subtitle: "(10% 할인+미리 자리)",
    price: "531,000",
    originalPrice: "590,000",
    discount: "10% 할인",
    features: [
      "8개 파트 + 보너스 강의",
      "실전 프로젝트 2개",
      "결제 시스템 구축",
      "3개월 노션 접근",
      "무한 피드백",
      "모각코 참여 가능",
    ],
    highlighted: false,
    cta: "자리 예약하기",
  },
];

const results = [
  {
    icon: "🚀",
    title: "실제 배포된 서비스 URL",
    desc: "로컬이 아닌 실제 인터넷에 올라간 예약 시스템",
  },
  {
    icon: "💳",
    title: "결제까지 되는 진짜 서비스",
    desc: "토스페이먼츠 결제 기능 연동 완료",
  },
  {
    icon: "🎯",
    title: "혼자 계속 만드는 능력",
    desc: "에러 해결, v2 기획, 새 기능 추가를 혼자 할 수 있는 워크플로우",
  },
];

export default function ApplySection() {
  const ref1 = useElementReveal(0.15);
  const ref2 = useElementReveal(0.1);
  const ref3 = useElementReveal(0.1);

  return (
    <section id="apply" className="relative py-32 md:py-48" style={{ background: "#000" }}>
      <div className="container">
        {/* Header */}
        <div ref={ref1} className="max-w-3xl mb-20">
          <p className="section-label mb-6 text-reveal">가격 및 신청</p>
          <h2
            className="font-display text-reveal delay-100"
            style={{
              fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              color: "#fff",
            }}
          >
            당신의 선택
            <br />
            <span style={{ color: "rgba(255,255,255,0.4)" }}>지금 시작하세요.</span>
          </h2>
        </div>

        {/* Pricing cards */}
        <div ref={ref2} className="grid md:grid-cols-3 gap-6 mb-20">
          {pricingOptions.map((option, idx) => (
            <div
              key={option.id}
              className="text-reveal rounded-2xl p-8 flex flex-col"
              style={{
                transitionDelay: `${idx * 0.08}s`,
                background: option.highlighted
                  ? "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 100%)"
                  : "rgba(255,255,255,0.02)",
                border: option.highlighted
                  ? "1.5px solid rgba(255,255,255,0.15)"
                  : "1px solid rgba(255,255,255,0.05)",
                transform: option.highlighted ? "scale(1.02)" : "scale(1)",
              }}
            >
              {/* Badge */}
              {option.highlighted && (
                <div
                  className="inline-flex w-fit px-3 py-1 rounded-full mb-4 text-xs"
                  style={{
                    background: "rgba(255,255,255,0.1)",
                    color: "rgba(255,255,255,0.8)",
                    fontWeight: 600,
                  }}
                >
                  ⭐ 추천
                </div>
              )}

              {/* Title */}
              <h3
                className="font-display text-lg mb-1"
                style={{ color: "#fff", fontWeight: 700 }}
              >
                {option.title}
              </h3>
              <p
                className="text-xs mb-4"
                style={{ color: "rgba(255,255,255,0.35)", fontWeight: 300 }}
              >
                {option.subtitle}
              </p>

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-baseline gap-2 mb-1">
                  <span
                    className="font-display text-3xl"
                    style={{ color: "#fff", fontWeight: 700 }}
                  >
                    {option.price}
                  </span>
                  <span
                    className="text-xs"
                    style={{ color: "rgba(255,255,255,0.25)" }}
                  >
                    원
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span
                    className="text-xs line-through"
                    style={{ color: "rgba(255,255,255,0.25)" }}
                  >
                    {option.originalPrice}원
                  </span>
                  <span
                    className="text-xs px-2 py-1 rounded"
                    style={{
                      background: "rgba(255,255,255,0.08)",
                      color: "rgba(255,255,255,0.6)",
                      fontWeight: 600,
                    }}
                  >
                    {option.discount}
                  </span>
                </div>
              </div>

              {/* Features */}
              <ul className="flex-1 space-y-3 mb-6">
                {option.features.map((feature, i) => (
                  <li
                    key={i}
                    className="text-sm flex items-start gap-2"
                    style={{ color: "rgba(255,255,255,0.45)", fontWeight: 300 }}
                  >
                    <span style={{ color: "rgba(255,255,255,0.15)", flexShrink: 0 }}>✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <a
                href="https://www.latpeed.com/products/Xs7gH"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3 rounded-lg font-display font-600 transition-all text-center"
                style={{
                  background: option.highlighted ? "#fff" : "rgba(255,255,255,0.08)",
                  color: option.highlighted ? "#000" : "#fff",
                  border: option.highlighted ? "none" : "1px solid rgba(255,255,255,0.15)",
                  cursor: "pointer",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.transform = "scale(1.02)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.transform = "scale(1)";
                }}
              >
                {option.cta}
              </a>
            </div>
          ))}
        </div>

        {/* Results */}
        <div ref={ref3} className="mb-20">
          <h3
            className="font-display text-2xl mb-8"
            style={{ color: "#fff", fontWeight: 700 }}
          >
            수강 후 결과물 3가지
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {results.map((result, i) => (
              <div
                key={i}
                className="text-reveal p-6 rounded-xl"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.05)",
                  transitionDelay: `${i * 0.1}s`,
                }}
              >
                <div
                  className="text-4xl mb-4"
                  style={{ fontWeight: 700 }}
                >
                  {result.icon}
                </div>
                <h4
                  className="font-display text-lg mb-2"
                  style={{ color: "#fff", fontWeight: 700 }}
                >
                  {result.title}
                </h4>
                <p
                  className="text-sm"
                  style={{ color: "rgba(255,255,255,0.45)", fontWeight: 300 }}
                >
                  {result.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Enrollment info */}
        <div
          className="text-reveal text-center p-8 rounded-xl"
          style={{
            background: "rgba(255,255,255,0.02)",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <p
            className="text-sm mb-2"
            style={{ color: "rgba(255,255,255,0.35)", fontWeight: 300 }}
          >
            모집 기간
          </p>
          <p
            className="font-display text-xl mb-4"
            style={{ color: "#fff", fontWeight: 700 }}
          >
            4월 23일(목) 18시 ~ 4월 30일(목) 자정
          </p>
          <p
            className="text-sm"
            style={{ color: "rgba(255,255,255,0.35)", fontWeight: 300 }}
          >
            선착순 20명 | 진행 기간: 5월 11일 ~ 6월 14일 (총 5주)
          </p>
        </div>

        {/* Divider */}
        <div className="section-divider mt-24" />
      </div>
    </section>
  );
}
