/*
 * DESIGN: Apple-Inspired Cinematic Minimalism
 * FAQ: Expandable Q&A, minimal styling
 */
import { useState } from "react";
import { useElementReveal } from "@/hooks/useScrollReveal";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    id: 1,
    question: "코딩을 전혀 몰라도 되나요?",
    answer:
      "네, 코딩 경험 0에서 시작하도록 설계된 프로그램입니다. 온보딩 강의에서 기초 개념부터 쌓고 들어가며, 강의 내내 비개발자 언어로 설명합니다. 실제로 뼈문과생 수강생 분께서 가장 만족도가 높았던 게 온보딩 강의였습니다!",
  },
  {
    id: 2,
    question: "해킹노트와 Master Class 중 어떤 걸 선택해야 하나요?",
    answer:
      "강의를 사놓고 안 본 경험이 있다면 Master Class을 추천해요. 자기 페이스로 확실히 완주할 자신 있다면 해킹노트도 충분합니다.",
  },
  {
    id: 3,
    question: "5주 안에 진짜로 서비스를 만들 수 있나요?",
    answer:
      "네. 본강의에서 결제까지 되는 예약 시스템을 만들고, 5주 후에는 실제 URL이 생기고 결제도 됩니다. 1기 수강생들이 이미 증명했어요.",
  },
  {
    id: 4,
    question: "강의는 어디서 수강하나요?",
    answer:
      "노션 링크로 수강합니다. 수강 시작일에 전체 강의가 일괄 공개되며, 해킹노트는 평생 소장이고, Master Class 전용 노션은 수강기간 3개월(90일)입니다.",
  },
  {
    id: 5,
    question: "모각코와 오프라인 파티는 필수인가요?",
    answer:
      "필수 아닙니다. 참여하면 완주에 도움이 되지만, 개인 사정으로 불참해도 됩니다.",
  },
];

export default function FaqSection() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const ref1 = useElementReveal(0.15);
  const ref2 = useElementReveal(0.1);

  const toggleFaq = (id: number) => {
    setExpandedFaq(expandedFaq === id ? null : id);
  };

  return (
    <section id="faq" className="relative py-32 md:py-48" style={{ background: "#000" }}>
      <div className="container">
        {/* Header */}
        <div ref={ref1} className="max-w-3xl mb-20">
          <p className="section-label mb-6 text-reveal">자주 묻는 질문</p>
          <h2
            className="font-display text-reveal delay-100"
            style={{
              fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              color: "#fff",
            }}
          >
            궁금한 점을
            <br />
            <span style={{ color: "rgba(255,255,255,0.4)" }}>해결해드립니다.</span>
          </h2>
        </div>

        {/* FAQ items */}
        <div ref={ref2} className="max-w-3xl space-y-3">
          {faqs.map((faq, idx) => (
            <div
              key={faq.id}
              className="text-reveal rounded-xl overflow-hidden"
              style={{ transitionDelay: `${idx * 0.08}s` }}
            >
              <button
                onClick={() => toggleFaq(faq.id)}
                className="w-full p-6 flex items-center justify-between hover:bg-opacity-75 transition-all"
                style={{
                  background: expandedFaq === faq.id
                    ? "rgba(255,255,255,0.08)"
                    : "rgba(255,255,255,0.02)",
                }}
              >
                <h3
                  className="font-display text-lg text-left"
                  style={{ color: "#fff", fontWeight: 700 }}
                >
                  {faq.question}
                </h3>
                <ChevronDown
                  size={20}
                  style={{
                    color: "rgba(255,255,255,0.35)",
                    transform: expandedFaq === faq.id ? "rotate(180deg)" : "rotate(0)",
                    transition: "transform 0.3s ease",
                    marginLeft: "1rem",
                    flexShrink: 0,
                  }}
                />
              </button>

              {/* Expanded answer */}
              {expandedFaq === faq.id && (
                <div
                  className="px-6 pb-6 border-t"
                  style={{ borderColor: "rgba(255,255,255,0.08)" }}
                >
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "rgba(255,255,255,0.45)", fontWeight: 300 }}
                  >
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="section-divider mt-24" />
      </div>
    </section>
  );
}
