/*
 * DESIGN: Apple-Inspired Cinematic Minimalism
 * Testimonials: Quote cards with Magic Text Reveal animation
 * Performance: Mobile-optimized with reduced motion support
 */
import { useElementReveal } from "@/hooks/useScrollReveal";
import { useMagicTextReveal } from "@/hooks/useMagicTextReveal";

const testimonials = [
  {
    id: 1,
    quote: "혼자서 바이브코딩 조작조작 해봤는데 독학으론 한계가 있었어요. 강의가 파트별로 짧게 나뉘어져 있어서 제 일정에 맞춰 듣기 편했고, 피로도가 훨씬 줄었어요. 부담없이 자주자주 들어가게 되는 것 같아요.",
    author: "1기 수강생, A타입",
    topic: "독학의 한계 → 완주",
  },
  {
    id: 2,
    quote: "항상 아이디어를 구현하고 싶다는 생각이 있었는데, 어디서부터 시작해야 할지 막막했어요. 주차별 진도표가 있어서 목표를 명확히 가져갈 수 있고, AI 초심자 입장에서 강의 대로 집중할 수 있어서 좋습니다.",
    author: "1기 수강생, B타입 (직장인)",
    topic: "아이디어 → 실제 배포",
  },
  {
    id: 3,
    quote: "처음엔 바이브코딩 해야 되는데... 하는 무거운 마음이 컸는데, 지금은 일단 시작해보자는 마인드로 많이 바뀌었어요. 모각코 시간이랑 쌤께 언제든 질문드릴 수 있다는 든든함 덕분인 것 같아요. 모각코도 너무 귀여워요, 빠지기 싫어요.",
    author: "1기 수강생, B타입",
    topic: "모각코가 완주의 핵심",
  },
  {
    id: 4,
    quote: "주차별 강의가 짧게 나뉘어 있어서 부담없이 들을 수 있어요. 주차별 미션이 있어서 학습 동기부여가 됐고, 오프라인 네트워킹 파티도 기대됩니다.",
    author: "1기 수강생, B타입",
    topic: "주차별 미션 + 동기부여",
  },
  {
    id: 5,
    quote: "이 클래스의 최대 장점은 쌤의 무한한 피드백을 들을 수 있다는 점인 것 같아요. 리사쌤이 내 뒤에 있다!",
    author: "1기 수강생, B타입 (프리랜서)",
    topic: "리사쌤이 내 뒤에 있다",
  },
];

function TestimonialCard({ testimonial, index }: { testimonial: typeof testimonials[0]; index: number }) {
  const { ref, displayedText } = useMagicTextReveal({
    duration: 1200,
    delay: index * 100, // Stagger animation start between cards
    staggerDelay: 20, // Character animation speed (20ms per character)
    reduceMotion: false,
  });

  return (
    <div
      className="text-reveal card-hover p-6 rounded-xl flex flex-col"
      style={{
        transitionDelay: `${index * 0.08}s`,
        background: "rgba(255,255,255,0.02)",
        border: "1px solid rgba(255,255,255,0.05)",
        transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.background = "rgba(255,255,255,0.04)";
        (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.1)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.background = "rgba(255,255,255,0.02)";
        (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.05)";
      }}
    >
      {/* Quote with Magic Text Reveal */}
      <blockquote
        ref={ref as React.RefObject<HTMLQuoteElement>}
        className="mb-6 flex-1 min-h-[120px]"
        style={{
          fontSize: "0.9375rem",
          lineHeight: 1.7,
          color: "rgba(255,255,255,0.55)",
          fontWeight: 300,
          fontStyle: "italic",
          fontFamily: "'Pretendard', sans-serif",
        }}
      >
        "{testimonial.quote}"
      </blockquote>

      {/* Author info */}
      <div className="border-t" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
        <div className="pt-4">
          <div
            className="text-xs mb-1"
            style={{ color: "rgba(255,255,255,0.25)", fontWeight: 300 }}
          >
            {testimonial.topic}
          </div>
          <div
            className="text-sm font-display"
            style={{ color: "rgba(255,255,255,0.7)", fontWeight: 600 }}
          >
            {testimonial.author}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  const ref1 = useElementReveal(0.15);
  const ref2 = useElementReveal(0.1);

  return (
    <section id="testimonials" className="relative py-32 md:py-48" style={{ background: "#000" }}>
      <div className="container">
        {/* Header */}
        <div ref={ref1} className="max-w-3xl mb-20">
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
            1기 수강생들의
            <br />
            <span style={{ color: "rgba(255,255,255,0.4)" }}>실제 경험담</span>
          </h2>
        </div>

        {/* Testimonials grid with Magic Text Reveal */}
        <div ref={ref2} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, idx) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} index={idx} />
          ))}
        </div>

        {/* CTA */}
        <div
          className="text-reveal mt-20 text-center"
          style={{
            padding: "3rem 2rem",
            background: "rgba(255,255,255,0.02)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "1.5rem",
          }}
        >
          <p
            className="text-lg mb-4"
            style={{ color: "rgba(255,255,255,0.5)", fontWeight: 300 }}
          >
            500명 이상의 수강생이 이미 시작했습니다.
          </p>
          <p
            className="font-display text-2xl"
            style={{ color: "#fff", fontWeight: 700 }}
          >
            당신도 다음 성공 사례가 될 수 있습니다.
          </p>
        </div>

        {/* Divider */}
        <div className="section-divider mt-24" />
      </div>
    </section>
  );
}
