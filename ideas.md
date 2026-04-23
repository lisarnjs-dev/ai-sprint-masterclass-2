# AI Product Sprint Master Class 2기 - 디자인 아이디어

## 브레인스토밍

<response>
<idea>
**Design Movement**: 애플 인스파이어드 미니멀리즘 (Apple-Inspired Cinematic Minimalism)

**Core Principles**:
1. 절대적인 여백 — 콘텐츠가 숨 쉴 공간을 최대화하여 각 요소가 무대 위의 배우처럼 존재
2. 타이포그래피 중심 — 텍스트 자체가 시각적 요소, 크기 대비로 위계 형성
3. 스크롤 시네마틱 — 스크롤에 반응하는 텍스트/이미지 페이드인, 핀 고정 섹션
4. 모노크롬 순수성 — 블랙과 화이트만으로 깊이와 감정을 표현

**Color Philosophy**:
- 배경: 순수 블랙 (#000000) → 딥 차콜 (#1a1a1a) 그라디언트
- 텍스트: 순수 화이트 (#FFFFFF), 서브텍스트 회색 (#6e6e73)
- 액센트: 미묘한 화이트 글로우, 얇은 회색 선 (#2d2d2d)
- 감정: 프리미엄, 신뢰, 미래지향적

**Layout Paradigm**:
- 풀스크린 섹션 스냅 스크롤
- 텍스트가 화면 중앙에서 확대되며 등장
- 수평 스크롤 커리큘럼 타임라인
- 비대칭 그리드로 강사 소개

**Signature Elements**:
1. 얇은 수평선 구분자 (1px, opacity 0.2)
2. 대형 숫자 카운터 (01, 02, 03) — 섹션 번호
3. 글자가 흐릿하게 블러되다가 선명해지는 등장 효과

**Interaction Philosophy**:
- 스크롤 진행도에 따른 텍스트 opacity 변화
- 커서 호버 시 미묘한 스케일 업 (1.02x)
- 버튼: 배경 없음 → 호버 시 화이트 배경 + 블랙 텍스트 전환

**Animation**:
- Hero: 텍스트 글자별 순차 페이드인 (stagger 0.05s)
- 섹션 진입: translateY(40px) → 0, opacity 0 → 1 (0.8s ease-out)
- 숫자 카운터: 스크롤 시 롤업 애니메이션
- 배경: 미묘한 그레인 노이즈 텍스처 오버레이

**Typography System**:
- Display: SF Pro Display 대체 → "Playfair Display" (Bold 700) — 감성적 무게감
- Body: "DM Sans" (300, 400) — 현대적 가독성
- Mono: "JetBrains Mono" — 코드/기술 강조
- 크기 스케일: 96px / 64px / 48px / 32px / 18px / 14px
</idea>
<probability>0.08</probability>
</response>

<response>
<idea>
**Design Movement**: 네오 브루탈리즘 × 미니멀 (Neo-Brutalist Minimal)

**Core Principles**:
1. 날 것의 대비 — 두꺼운 테두리, 강한 그림자로 요소 분리
2. 그리드 파괴 — 의도적으로 비틀린 레이아웃
3. 타이포그래피 폭력 — 극단적 크기 대비
4. 흑백의 긴장감 — 순수 블랙/화이트, 중간 없음

**Color Philosophy**:
- 배경: 오프화이트 (#F5F5F0)
- 강조: 순수 블랙 (#000000)
- 액센트: 없음 — 오직 흑백

**Layout Paradigm**:
- 불규칙 카드 배치
- 텍스트 오버플로우 의도적 사용
- 두꺼운 보더 박스

**Signature Elements**:
1. 4px 솔리드 블랙 테두리
2. 오프셋 박스 그림자 (8px 8px 0 black)
3. 대문자 강제 헤딩

**Interaction Philosophy**:
- 호버 시 오프셋 그림자 이동
- 클릭 시 눌리는 효과

**Animation**:
- 빠르고 강한 트랜지션 (0.15s)
- 슬라이드인 효과

**Typography System**:
- Display: "Space Grotesk" Bold
- Body: "Space Grotesk" Regular
</idea>
<probability>0.05</probability>
</response>

<response>
<idea>
**Design Movement**: 다크 럭셔리 테크 (Dark Luxury Tech)

**Core Principles**:
1. 심연의 깊이 — 다층적 다크 배경으로 공간감 창출
2. 빛의 연출 — 글로우, 그라디언트로 포인트 강조
3. 정밀한 디테일 — 미세한 텍스처, 정교한 선
4. 시네마틱 스크롤 — 영화적 전환 효과

**Color Philosophy**:
- 배경: #000000 → #0a0a0a
- 텍스트: #FFFFFF, #A0A0A0
- 액센트: 미묘한 화이트 글로우 (#FFFFFF at 5% opacity)
- 구분선: rgba(255,255,255,0.08)

**Layout Paradigm**:
- 풀스크린 섹션
- 중앙 정렬 히어로
- 비대칭 피처 그리드

**Signature Elements**:
1. 미세 그레인 텍스처 오버레이
2. 얇은 글로우 라인
3. 숫자 카운터 (대형)

**Interaction Philosophy**:
- 부드러운 패럴랙스
- 마우스 트래킹 글로우

**Animation**:
- 스크롤 트리거 페이드인
- 텍스트 마스크 리빌

**Typography System**:
- Display: "Cormorant Garamond" — 럭셔리 세리프
- Body: "Outfit" — 현대적 산세리프
</idea>
<probability>0.07</probability>
</response>

## 선택: 애플 인스파이어드 미니멀리즘 (첫 번째 안)

순수한 블랙 배경, 강렬한 타이포그래피 대비, 스크롤 시네마틱 애니메이션으로
애플 아이폰 상세페이지의 감성을 구현한다.
