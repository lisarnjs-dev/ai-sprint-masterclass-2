/*
 * DESIGN: Apple-Inspired Cinematic Minimalism
 * Curriculum: Complete curriculum with onboarding, Part 0-8, expandable parts
 */
import { useState } from "react";
import { useElementReveal } from "@/hooks/useScrollReveal";
import { ChevronDown } from "lucide-react";

const onboardingCurriculum = {
  title: "온보딩 베이스캠프",
  parts: [
    {
      id: "onboarding-1",
      title: "Part 1 - 마인드셋",
      topics: [
        "이 강의를 100% 활용하는 법",
        "바이브코딩이란 무엇인가?",
        "비개발자가 AI앞에서 막히는 진짜 이유",
      ],
    },
    {
      id: "onboarding-2",
      title: "Part 2 - 왕초보 필수 개념",
      topics: [
        "웹사이트는 어떻게 작동하는가",
        "파일과 폴더 구조 이해하기",
        "로컬 vs 배포",
        "도메인과 URL 이해하기",
      ],
    },
  ],
};

const curriculumParts = [
  {
    id: 0,
    title: "Part 0 - 시작 전 준비 (4강)",
    description: "5주 로드맵 및 서비스 기획",
    topics: [
      "AI Product Sprint 5주 로드맵 + 진도표 활용하는 법",
      "내 서비스 아이디어 찾기",
      "좋은 아이디어 vs 나쁜 아이디어",
      "완성의 기준 설정하기 - MVP란? 완벽주의 버리는 법",
    ],
  },
  {
    id: 1,
    title: "Part 1 - 프롬프트 기초 A to Z (10강)",
    description: "AI와 효과적으로 대화하는 법",
    topics: [
      "프롬프트가 중요한 이유",
      "할루시네이션이란? 왜 생길까?",
      "프롬프트 꿀팁1 (Few Shot)",
      "프롬프트 꿀팁2 (COT 기법)",
      "AI 정답률 올리는 프롬프트 전략 3가지",
      "나쁜 질문 vs 좋은 질문",
      "구글이 알려주는 실패없는 프롬프트 공식",
      "아무도 모르는 실전 비밀 기법 2가지",
      "바이브코딩을 위한 프롬프트 기법",
      "초보자를 위한 주의사항 3가지",
    ],
  },
  {
    id: 2,
    title: "Part 2 - 툴 Mastery (17강)",
    description: "Git, GitHub, v0, Cursor, Claude 마스터",
    topics: [
      "git / github 소개",
      "git 설치하기",
      "github 가입 및 새로운 레포지토리 만들기",
      "v0 소개 및 사용법",
      "Cursor 소개 및 사용법",
      "Cursor UI(유저 인터페이스) 이해하기",
      "Cursor 필수 기능 4가지",
      "Cursor Rules 이해하기",
      "Claude 소개",
      "Claude Desktop App 설치하기",
      "Claude Chat vs Cowork vs Code",
      "Cursor/Antigravity에서 Claude Code 예쁜 인터페이스 쓰는 법",
      "Replit 소개 및 사용법",
      "Lovable 소개 및 사용법",
      "Antigravity 소개 및 설치하기",
      "Antigravity 사용법",
      "Antigravity vs Cursor",
    ],
  },
  {
    id: 3,
    title: "Part 3 - 바이브코딩 핵심 스킬 배우기 with Cursor (10강)",
    description: "실전 바이브코딩 기술 마스터",
    topics: [
      "기능 단위로 요청하기 - 큰 걸 작게 쪼개는 습관",
      "API 연결하기",
      "Supabase 연결하기",
      "환경변수 이해하기 - API 키를 코드에 직접 넣으면 안되는 이유",
      "Git 기초 - 저장, 되돌리기, 버전 관리 딱 이것만!",
      "Github 올리고 Vercel 배포하기 - 내 코드 백업하는 법",
      "리팩토링 요청하기",
      "컴포넌트 단위로 만들기 - 재사용 가능한 구조 잡는법",
      "외부 라이브러리 가져다 쓰기 - npm 뭔지, 어떻게 요청하나",
      "실전 실습 미션 도전하기!",
    ],
  },
  {
    id: 4,
    title: "Part 4 - 에러 해결 꿀팁 & 교정법 (9강)",
    description: "AI 시대의 에러 해결 전략",
    topics: [
      "할루시네이션이 뭔지 - AI가 거짓말하는 상황 알아채는 법",
      "에러 메시지 읽는 법 - 무서워하지 않아도 되는 이유",
      "고수만 아는 에러 해결 3단계 프로세스",
      "막히는 상황 1 - 화면이 하얗게 뜰 때",
      "막히는 상황 2 - AI가 같은 에러를 반복할 때",
      "막히는 상황 3 - 배포 후 다르게 작동할 때",
      "막히는 상황 4 - 어디서부터 잘못된 건지 모를때",
      "Antigravity에서 미니 프로젝트 시작하기",
      "Claude Code로 코드 이해하기",
    ],
  },
  {
    id: 5,
    title: "Part 5 - 공식문서 활용법 (feat. Notebook LM) (10강)",
    description: "공식 문서를 효과적으로 읽고 활용하기",
    topics: [
      "왜 공식 문서를 알아야 하나 - AI만 믿으면 생기는 문제",
      "공식 문서 구조 이해하기 및 읽는 법",
      "Supabase 공식 문서 같이 읽기",
      "토스페이먼츠 공식 문서 같이 읽기",
      "실전 연습 - 토스페이먼츠 문서 읽고 결제 흐름 직접 설계하기",
      "Vercel 공식 문서 같이 읽기",
      "영어 문서 두려움 없애기",
      "문서에서 내가 필요한 부분만 찾는 법",
      "문서를 AI 컨텍스트로 활용하는 법",
      "버전 차이 주의하기 - AI가 오래된 코드 알려줄 때",
    ],
  },
  {
    id: 6,
    title: "Part 6 - Antigravity X Claude Code 실제 결제부터 배포까지 (11강)",
    description: "실전 프로젝트 1: 토스페이먼츠 결제 예약 서비스",
    topics: [
      "프로젝트 설명 및 Notebook LM으로 리서치하기",
      "바이브코딩 전체 워크플로우 설계하기 (중요⭐️)",
      "PRD 작성하여 서비스 설계하기",
      "디자인 시스템 설계 및 전문가 컨텍스트 만들기",
      "개발 계획 재검증 및 태스크 쪼개기",
      "Supabase MCP 연동하기",
      "개발하기 (feat. 바이브코딩 잘하는 근본적인 핵심)",
      "TossPayments/Resend API key 발급 및 세팅 (feat. npm run dev)",
      "Vercel 배포 및 테스트",
      "예상치 못한 에러 해결하기",
      "21st.dev로 디자인 업그레이드하기",
    ],
  },
  {
    id: 7,
    title: "Part 7 - v0 X Claude Code CLI 로그인 기능부터 배포까지 (10강)",
    description: "실전 프로젝트 2: 블로그 만들기",
    topics: [
      "실습 프로젝트 미리보기",
      "바이브코딩 워크플로우 설계하기",
      "v0로 UI 디자인하기",
      "v0 코드 github 올리고 clone하기 (claude로 넘어갈 준비)",
      "Claude Code CLI 설치하기",
      "Claude Code를 위해 문서 정리하기 (feat. CLAUDE.md)",
      "Supabase MCP 연동 (feat. 연동 중 리얼 에러상황 해결하기)",
      "Claude Code로 구글 로그인 OAuth 및 기능 개발하기",
      "Github 올리고 Vercel 배포하기",
      "실제 서비스 테스트 및 오류 수정",
    ],
  },
  {
    id: 8,
    title: "Part 8 - 상황별 실전 트랙 (12강)",
    description: "직장인, 프리랜서, 1인 창업가 트랙",
    topics: [
      "[직장인 트랙] 회의록 자동화 서비스 데모 미리보기",
      "[직장인 트랙] Claude, Notion API Key 발급받기",
      "[직장인 트랙] 회의록 자동 변환 및 노션 연동 웹앱 개발하기",
      "[직장인 트랙] 회사 사내 챗봇 개발하기 (feat. 529 에러)",
      "[프리랜서 트랙] 준비중",
      "[1인 창업가 트랙] 준비중",
    ],
  },
];

const roadmap = [
  {
    week: "1주차",
    goal: "환경 세팅 + 서비스 기획",
    result: "개발 환경 완성 + 서비스 기획서 1장",
  },
  {
    week: "2주차",
    goal: "첫 번째 페이지 제작",
    result: "로컬에서 동작하는 메인 페이지",
  },
  {
    week: "3주차",
    goal: "핵심 기능 구현",
    result: "완성도 80% 서비스",
  },
  {
    week: "4주차",
    goal: "결제 연동 + 배포",
    result: "실제 URL + 결제 가능한 서비스",
  },
  {
    week: "5주차",
    goal: "AI 심화 + 워크플로우 완성",
    result: "v2 기능 추가 or 나만의 AI 워크플로우 문서",
  },
];

const bonusLectures = [
  "AI 글쓰기 — 보고서, 기획서, SNS 글 10분 완성",
  "SNS 콘텐츠 기획 — 한 달치 콘텐츠 한 번에 뽑기",
  "영어 장벽 극복 — AI로 영어 문서 두려움 없애기",
  "AI로 공부하는 법 — 어떤 분야든 AI 선생님 만들기",
  "AI 커리어 설계 — AI 시대 포지셔닝 전략",
];

export default function CurriculumSection() {
  const [expandedOnboarding, setExpandedOnboarding] = useState(false);
  const [expandedParts, setExpandedParts] = useState<number[]>([]);
  const ref1 = useElementReveal(0.15);
  const ref2 = useElementReveal(0.1);
  const ref3 = useElementReveal(0.1);

  const toggleOnboarding = () => {
    setExpandedOnboarding(!expandedOnboarding);
  };

  const togglePart = (id: number) => {
    setExpandedParts((prev) =>
      prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id]
    );
  };

  return (
    <section id="curriculum" className="relative py-32 md:py-48" style={{ background: "#000" }}>
      <div className="container">
        {/* Header */}
        <div ref={ref1} className="max-w-3xl mb-16 md:mb-24">
          <p className="section-label mb-6 text-reveal">커리큘럼</p>
          <h2
            className="font-display text-reveal delay-100"
            style={{
              fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              color: "#fff",
            }}
          >
            온보딩 + 8개 파트
            <br />
            <span style={{ color: "rgba(255,255,255,0.45)" }}>
              총 89강의 완전한 학습 경로
            </span>
          </h2>
        </div>

        {/* Curriculum */}
        <div ref={ref2} className="mb-16 md:mb-24">
          <div className="space-y-3">
            {/* Onboarding */}
            <div
              className="text-reveal card-hover rounded-xl overflow-hidden"
              style={{ transitionDelay: "0s" }}
            >
              <button
                onClick={toggleOnboarding}
                className="w-full p-6 flex items-center justify-between hover:bg-opacity-75 transition-all"
                style={{
                  background: expandedOnboarding
                    ? "rgba(255,255,255,0.08)"
                    : "rgba(255,255,255,0.02)",
                }}
              >
                <div className="text-left flex-1">
                  <h3
                    className="font-display text-lg mb-1"
                    style={{ color: "#fff", fontWeight: 700 }}
                  >
                    {onboardingCurriculum.title}
                  </h3>
                  <p
                    className="text-sm"
                    style={{ color: "rgba(255,255,255,0.35)", fontWeight: 300 }}
                  >
                    기초 개념 및 마인드셋 (7강)
                  </p>
                </div>
                <ChevronDown
                  size={20}
                  style={{
                    color: "rgba(255,255,255,0.35)",
                    transform: expandedOnboarding ? "rotate(180deg)" : "rotate(0)",
                    transition: "transform 0.3s ease",
                    marginLeft: "1rem",
                    flexShrink: 0,
                  }}
                />
              </button>

              {expandedOnboarding && (
                <div
                  className="px-6 pb-6 border-t"
                  style={{ borderColor: "rgba(255,255,255,0.08)" }}
                >
                  <div className="space-y-4">
                    {onboardingCurriculum.parts.map((part) => (
                      <div key={part.id}>
                        <h4
                          className="font-display text-sm mb-2"
                          style={{ color: "rgba(255,255,255,0.7)", fontWeight: 600 }}
                        >
                          {part.title}
                        </h4>
                        <ul className="space-y-1">
                          {part.topics.map((topic, i) => (
                            <li
                              key={i}
                              className="text-sm flex items-start gap-3"
                              style={{ color: "rgba(255,255,255,0.45)", fontWeight: 300 }}
                            >
                              <span
                                style={{
                                  color: "rgba(255,255,255,0.15)",
                                  marginTop: "0.25rem",
                                  flexShrink: 0,
                                }}
                              >
                                •
                              </span>
                              <span>{topic}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Main Curriculum Parts */}
            {curriculumParts.map((part, idx) => (
              <div
                key={part.id}
                className="text-reveal card-hover rounded-xl overflow-hidden"
                style={{ transitionDelay: `${(idx + 1) * 0.05}s` }}
              >
                <button
                  onClick={() => togglePart(part.id)}
                  className="w-full p-6 flex items-center justify-between hover:bg-opacity-75 transition-all"
                  style={{
                    background: expandedParts.includes(part.id)
                      ? "rgba(255,255,255,0.08)"
                      : "rgba(255,255,255,0.02)",
                  }}
                >
                  <div className="text-left flex-1">
                    <h3
                      className="font-display text-lg mb-1"
                      style={{ color: "#fff", fontWeight: 700 }}
                    >
                      {part.title}
                    </h3>
                    <p
                      className="text-sm"
                      style={{ color: "rgba(255,255,255,0.35)", fontWeight: 300 }}
                    >
                      {part.description}
                    </p>
                  </div>
                  <ChevronDown
                    size={20}
                    style={{
                      color: "rgba(255,255,255,0.35)",
                      transform: expandedParts.includes(part.id)
                        ? "rotate(180deg)"
                        : "rotate(0)",
                      transition: "transform 0.3s ease",
                      marginLeft: "1rem",
                      flexShrink: 0,
                    }}
                  />
                </button>

                {/* Expanded content */}
                {expandedParts.includes(part.id) && (
                  <div
                    className="px-6 pb-6 border-t"
                    style={{ borderColor: "rgba(255,255,255,0.08)" }}
                  >
                    <ul className="space-y-2">
                      {part.topics.map((topic, i) => (
                        <li
                          key={i}
                          className="text-sm flex items-start gap-3"
                          style={{ color: "rgba(255,255,255,0.45)", fontWeight: 300 }}
                        >
                          <span
                            style={{
                              color: "rgba(255,255,255,0.15)",
                              marginTop: "0.25rem",
                              flexShrink: 0,
                            }}
                          >
                            •
                          </span>
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Bonus */}
          <div
            className="text-reveal card-hover rounded-xl p-6 mt-3"
            style={{
              background: "linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)",
              border: "1px solid rgba(255,255,255,0.12)",
            }}
          >
            <h3
              className="font-display text-lg mb-3"
              style={{ color: "#fff", fontWeight: 700 }}
            >
              Master Class 전용 보너스 강의
            </h3>
            <ul className="space-y-2">
              {bonusLectures.map((bonus, i) => (
                <li
                  key={i}
                  className="text-sm flex items-start gap-3"
                  style={{ color: "rgba(255,255,255,0.45)", fontWeight: 300 }}
                >
                  <span
                    style={{
                      color: "rgba(255,255,255,0.15)",
                      marginTop: "0.25rem",
                      flexShrink: 0,
                    }}
                  >
                    ✨
                  </span>
                  <span>{bonus}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 5-week roadmap */}
        <div ref={ref3} className="text-reveal">
          <h3
            className="font-display text-2xl mb-8"
            style={{ color: "#fff", fontWeight: 700 }}
          >
            5주 커리큘럼 로드맵
          </h3>
          <div className="grid md:grid-cols-5 gap-4">
            {roadmap.map((item, i) => (
              <div
                key={item.week}
                className="text-reveal card-hover p-4 rounded-xl"
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                <div
                  className="font-mono-custom text-xs mb-3"
                  style={{ color: "rgba(255,255,255,0.25)" }}
                >
                  {item.week}
                </div>
                <h4
                  className="font-display text-sm mb-3"
                  style={{ color: "#fff", fontWeight: 700 }}
                >
                  {item.goal}
                </h4>
                <p
                  className="text-xs leading-relaxed"
                  style={{ color: "rgba(255,255,255,0.35)", fontWeight: 300 }}
                >
                  {item.result}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="section-divider mt-24" />
      </div>
    </section>
  );
}
