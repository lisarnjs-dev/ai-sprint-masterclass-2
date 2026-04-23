/*
 * DESIGN: Apple-Inspired Cinematic Minimalism
 * FAQ: Accordion style, minimal borders
 */
import { useElementReveal } from "@/hooks/useScrollReveal";
import { useState } from "react";

const faqs = [
  {
    q: "코딩을 전혀 몰라도 수강할 수 있나요?",
    a: "네, 이 프로그램은 코딩 경험이 전혀 없는 분들을 위해 설계되었습니다. AI 도구를 활용하여 코드 없이도 제품을 만드는 방법을 처음부터 차근차근 배웁니다.",
  },
  {
    q: "수업은 어떤 방식으로 진행되나요?",
    a: "매주 라이브 세션과 실습 과제로 구성됩니다. 라이브 세션에서는 개념 설명과 데모를 진행하고, 실습을 통해 직접 만들어보는 방식입니다. 커뮤니티를 통해 언제든지 질문할 수 있습니다.",
  },
  {
    q: "수강 후 어떤 것을 만들 수 있게 되나요?",
    a: "웹 서비스, 자동화 도구, AI 챗봇, 랜딩페이지 등 다양한 디지털 제품을 만들 수 있게 됩니다. 5주 과정이 끝나면 실제로 배포된 나만의 제품을 갖게 됩니다.",
  },
  {
    q: "수강료는 얼마인가요?",
    a: "수강료는 추후 공지될 예정입니다. 선착순 신청자에게는 얼리버드 혜택이 제공될 수 있습니다. 신청 시 이메일을 남겨주시면 공지 시 안내드리겠습니다.",
  },
  {
    q: "수업을 놓쳤을 경우 어떻게 되나요?",
    a: "모든 라이브 세션은 녹화되어 제공됩니다. 바쁜 일정으로 참석이 어려운 경우에도 녹화본을 통해 학습할 수 있습니다.",
  },
];

function FaqItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="text-reveal"
      style={{
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        transitionDelay: `${index * 0.07}s`,
      }}
    >
      <button
        className="w-full flex items-center justify-between py-6 text-left"
        onClick={() => setOpen(!open)}
      >
        <span
          className="text-base md:text-lg pr-8"
          style={{
            color: open ? "#fff" : "rgba(255,255,255,0.7)",
            fontWeight: 300,
            transition: "color 0.3s ease",
          }}
        >
          {q}
        </span>
        <span
          className="shrink-0 w-6 h-6 flex items-center justify-center"
          style={{
            color: "rgba(255,255,255,0.3)",
            transform: open ? "rotate(45deg)" : "rotate(0deg)",
            transition: "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M8 2v12M2 8h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </span>
      </button>
      <div
        style={{
          maxHeight: open ? "300px" : "0",
          overflow: "hidden",
          transition: "max-height 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        <p
          className="pb-6 text-sm md:text-base leading-relaxed"
          style={{ color: "rgba(255,255,255,0.4)", fontWeight: 300 }}
        >
          {a}
        </p>
      </div>
    </div>
  );
}

export default function FaqSection() {
  const headerRef = useElementReveal(0.15);
  const listRef = useElementReveal(0.05);

  return (
    <section className="relative py-32 md:py-48" style={{ background: "#000" }}>
      <div className="container">
        <div className="grid md:grid-cols-5 gap-16">
          {/* Header */}
          <div ref={headerRef} className="md:col-span-2">
            <p className="section-label mb-6 text-reveal">자주 묻는 질문</p>
            <h2
              className="font-display text-reveal delay-100"
              style={{
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
                lineHeight: 1.15,
                letterSpacing: "-0.02em",
                color: "#fff",
              }}
            >
              궁금한 점이
              <br />
              <span style={{ color: "rgba(255,255,255,0.4)" }}>있으신가요?</span>
            </h2>
          </div>

          {/* FAQ list */}
          <div ref={listRef} className="md:col-span-3">
            {faqs.map((faq, i) => (
              <FaqItem key={i} q={faq.q} a={faq.a} index={i} />
            ))}
          </div>
        </div>

        <div className="section-divider mt-24" />
      </div>
    </section>
  );
}
