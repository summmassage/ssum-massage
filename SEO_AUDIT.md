# SEO 감사 리포트 — 썸출장마사지

- 점검 일시: 2026-05-20
- 프로젝트: 썸출장마사지 (ssum-massage)
- 프레임워크: Next.js 15.4.6 (App Router) / 단일 LP 구조
- 총 이슈: **15건** (P0: 3, P1: 5, P2: 5, P3: 2)
- 순위 하락의 가장 유력한 원인: **구조화 데이터(LocalBusiness) 부재 + sitemap 깨짐 + 한국 검색엔진 최적화 누락**

---

## P0 Critical — 즉시 수정

### 1. Sitemap에 존재하지 않는 URL 포함 (`/course`)
- **현재 상태**: `src/app/sitemap.ts:11-16`에서 `https://ssum-massage.com/course` 을 priority 0.8로 노출하고 있으나, **해당 라우트가 존재하지 않음** (`src/app/`에 `course` 폴더 없음).
- **영향**: Googlebot/Naverbot이 sitemap을 신뢰하지 않게 되고, soft-404로 인덱싱 품질 신호가 깎임. 순위 하락의 직접적 원인일 가능성이 있음.
- **수정 방법**: sitemap에서 `/course` 항목을 즉시 삭제하거나, `/course` 페이지를 실제로 생성. (코스 상세 페이지는 SEO 측면에서 매우 가치 있음 — P1 #9 참고)
- **참조 파일**: `src/app/sitemap.ts`

### 2. JSON-LD 구조화 데이터 완전 부재 (LocalBusiness/MassageBusiness)
- **현재 상태**: 전체 코드에 `application/ld+json` 단 한 줄도 없음.
- **영향**: 출장마사지는 **로컬 비즈니스 카테고리**이므로 `LocalBusiness` / `HealthAndBeautyBusiness` 스키마가 Rich Results(별점, 가격대, 운영시간, 전화 클릭) 노출의 사실상 필수 조건. 경쟁업체가 넣고 있다면 검색 노출에서 큰 격차가 발생함.
- **수정 방법** (`src/app/layout.tsx` 또는 `src/app/page.tsx`에 추가):
```tsx
<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
  "@context": "https://schema.org",
  "@type": "HealthAndBeautyBusiness",
  "name": "썸출장마사지",
  "alternateName": ["썸출장안마", "SSUM"],
  "image": "https://ssum-massage.com/image/og.png",
  "url": "https://ssum-massage.com/",
  "telephone": "전화번호",
  "priceRange": "₩70,000-₩180,000",
  "areaServed": [
    {"@type":"City","name":"서울"},
    {"@type":"City","name":"경기"},
    {"@type":"City","name":"인천"}
  ],
  "openingHoursSpecification": {
    "@type":"OpeningHoursSpecification",
    "dayOfWeek":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
    "opens":"00:00","closes":"23:59"
  },
  "paymentAccepted": "현금, 계좌이체, 카드결제",
  "makesOffer": courses.flatMap(c => c.rows.map(r => ({
    "@type":"Offer",
    "name": `${c.name} ${r.duration}`,
    "price": r.price.replace(/[^\d]/g,""),
    "priceCurrency":"KRW"
  })))
})}} />
```
- **참조 파일**: `src/app/layout.tsx`, `src/app/page.tsx`, `src/data/data.ts`

### 3. `metadataBase` 미설정
- **현재 상태**: `src/app/layout.tsx:15` metadata 객체에 `metadataBase`가 없음.
- **영향**: Next.js가 OG 이미지의 절대 URL을 만들 때 fallback URL을 사용해서 SNS·검색엔진에서 OG 이미지가 깨질 수 있음. 빌드 시 경고도 발생.
- **수정 방법**: `metadata` 객체에 `metadataBase: new URL("https://ssum-massage.com")` 추가.
- **참조 파일**: `src/app/layout.tsx`

---

## P1 High — 빠른 수정 권장

### 4. Canonical URL 미설정
- **현재 상태**: `alternates.canonical` 미정의.
- **영향**: 광고/UTM 파라미터로 인한 중복 인덱싱 위험. 권한이 분산되어 순위에 부정적.
- **수정 방법**: `metadata`에 `alternates: { canonical: "https://ssum-massage.com/" }` 추가.
- **참조 파일**: `src/app/layout.tsx`

### 5. Naver/Daum 검색엔진 최적화 부재 (한국 마사지 시장 핵심)
- **현재 상태**:
  - `<meta name="naver-site-verification">` 없음 → 네이버 서치어드바이저에 등록 안 됨
  - 네이버는 sitemap.xml 자동 발견을 잘 하지 못함 → 직접 제출 필요
- **영향**: **출장마사지는 네이버 검색 비중이 구글보다 훨씬 큼.** 네이버에서 색인이 안 되면 트래픽 대부분을 놓침. 순위 하락의 핵심 원인일 수 있음.
- **수정 방법**:
  1. 네이버 서치어드바이저(searchadvisor.naver.com)에 사이트 등록
  2. 받은 verification 코드를 `metadata.verification.other` 에 추가
  3. sitemap.xml 수동 제출
- **참조 파일**: `src/app/layout.tsx`

### 6. FAQPage 스키마 부재
- **현재 상태**: 페이지에 이미 "주의사항", "DB 보호", "예약금 사기 경고" 등 FAQ 형식의 콘텐츠가 있는데 `FAQPage` 스키마로 마크업되어 있지 않음.
- **영향**: Rich Results에서 검색 결과에 펼쳐지는 FAQ 카드 → CTR 큰 폭 향상 기회를 놓침.
- **수정 방법**: 기존 Q&A형 콘텐츠를 `{"@type":"FAQPage","mainEntity":[{"@type":"Question","name":"...","acceptedAnswer":{"@type":"Answer","text":"..."}}]}` 형식으로 JSON-LD 추가.
- **참조 파일**: `src/app/page.tsx` (안심 DB / 주의사항 섹션)

### 7. H1·title의 핵심 키워드 부족
- **현재 상태**:
  - H1: `썸출장마사지 SSUM` (브랜드명만)
  - title: `썸출장마사지 | 전원 20대 관리사 | 100% 후불제 | 서울 경기 인천`
- **영향**: "**출장안मा**" 키워드가 title/H1에 없음 (본문에는 "썸출장안마" 표기 있음). 검색량 큰 동의어를 H1·title에 모두 노출해야 함.
- **수정 방법**:
  - H1 예시: `<h1>서울·경기·인천 출장마사지·출장안마 — 썸출장마사지 SSUM</h1>` (시각 디자인은 기존 유지, 의미만 풍부하게)
  - title에도 "출장안마" 동의어 포함
- **참조 파일**: `src/app/layout.tsx:16`, `src/app/page.tsx:25-27`

### 8. Twitter Card 메타 누락
- **현재 상태**: `openGraph`는 있지만 `twitter:card`, `twitter:title`, `twitter:image` 등 Twitter Card 메타 없음.
- **영향**: OG와 별개로 X(Twitter), 카카오톡 일부 환경의 미리보기 품질이 떨어짐.
- **수정 방법**: `metadata`에 `twitter: { card: "summary_large_image", title, description, images: ["/image/og.png"] }` 추가.
- **참조 파일**: `src/app/layout.tsx`

### 9. 콘텐츠 깊이 (thin content) — 순위 하락의 구조적 원인
- **현재 상태**: 단일 페이지 + 본문 콘텐츠 양이 매우 적음.
- **영향**: 경쟁사들은 **지역 페이지(강남/송파/분당 출장마사지), 코스 상세, 후기, 블로그** 등으로 수십~수백 페이지를 보유. 검색엔진은 콘텐츠 폭과 깊이를 평가하므로 단일 LP는 구조적으로 불리.
- **수정 방법** (최소):
  - `/course/[slug]` 4개 코스 상세 페이지 (`data.ts`의 courses를 기반으로 generateStaticParams)
  - `/area/[region]` 주요 5~10개 지역 페이지 (강남, 송파, 강서, 분당, 인천 등) — pSEO
  - sitemap에 자동 포함되도록 `sitemap.ts` 동적 생성
- **참조 파일**: `src/app/` (신규 라우트), `src/app/sitemap.ts`

---

## P2 Medium

### 10. OG 이미지 규격 비표준
- **현재 상태**: `src/app/layout.tsx:30` — 700x800 사이즈.
- **영향**: 권장은 **1200x630** (Facebook/카카오톡/X 표준). 현 규격은 잘리거나 작게 표시될 수 있음.
- **수정 방법**: og.png를 1200x630으로 재제작 후 `width: 1200, height: 630` 으로 변경.
- **참조 파일**: `public/image/og.png`, `src/app/layout.tsx:29-31`

### 11. `next.config.ts` 비어있음
- **현재 상태**: 이미지 최적화/압축 옵션 미설정.
- **영향**: LCP/CLS 등 Core Web Vitals 점수에 직결. Google은 CWV를 랭킹 요소로 사용.
- **수정 방법**: 최소 `images: { formats: ['image/avif', 'image/webp'] }` 적용.
- **참조 파일**: `next.config.ts`

### 12. 한국어 파일명 이미지의 URL 인코딩 이슈
- **현재 상태**: `/image/썸출장마사지_안내.png` 등 한글 파일명.
- **영향**: 일부 봇/SNS 미리보기에서 인코딩 문제 발생 가능. 현재 OG 이미지(`og.png`)는 영문이라 OK.
- **수정 방법**: 향후 추가 이미지는 영문 슬러그(`ssum-intro.png`) 사용 권장.
- **참조 파일**: `public/image/`

### 13. NAP (Name/Address/Phone) 일관성
- **현재 상태**: footer에 전화번호·운영시간·서비스 지역이 텍스트로 명확히 표기되어 있지 않음 (모달 안에 숨어 있음).
- **영향**: LocalBusiness 신호 약화. 검색엔진이 NAP을 일관되게 크롤링해야 로컬 신뢰도 상승.
- **수정 방법**: footer에 일관된 NAP 텍스트 노출 (전화번호, 운영시간 24시간, 서비스 지역 서울·경기·인천).
- **참조 파일**: `src/app/page.tsx:341-343`

### 14. `loading.tsx` 부재
- **현재 상태**: 라우트 전환 시 로딩 UI 없음.
- **영향**: 단일 페이지 구조라 우선순위 낮으나, 페이지 확장 시 LCP에 영향.
- **수정 방법**: 페이지 추가 시 함께 도입.
- **참조 파일**: `src/app/`

### 15. `robots.ts` 점검
- **현재 상태**: `src/app/robots.ts` 설정 양호 (admin/login disallow, sitemap 참조 OK).
- **영향**: 없음 — 현 상태 유지.
- **참조 파일**: `src/app/robots.ts`

---

## P3 Low

### 16. ESLint Next.js SEO 규칙 활성화 점검
- **현재 상태**: `next lint` 기본 설정만 사용.
- **수정 방법**: `@next/next/no-img-element` 등 SEO 관련 규칙 활성화 점검.
- **참조 파일**: `eslint.config.mjs`

### 17. `<html lang="ko">` ✓ 이미 적용
- 추가 조치 불필요. `dir="ltr"` 추가는 선택사항.

---

## 권장 조치 순서 (효과 큰 순)

1. **sitemap.ts에서 `/course` 항목 제거** (5초 작업)
2. **LocalBusiness JSON-LD 추가 + FAQPage JSON-LD 추가** — 가장 큰 순위 회복 효과 기대
3. **네이버 서치어드바이저 등록 + verification 메타 추가 + sitemap 제출** — 한국 검색 트래픽의 핵심
4. **metadataBase / canonical / twitter card 메타 보강**
5. **H1·title에 "출장안마" 동의어 추가**
6. **콘텐츠 확장**: `/course/[slug]` 4개 + 지역 페이지 5~10개 (장기 순위 회복의 본질)
7. **next.config.ts에 이미지 최적화 옵션 추가 + OG 이미지 1200x630 재제작**

**1·2·3번만 빨리 적용해도 2~4주 내 순위 회복**이 측정 가능할 가능성이 높음. 6번은 한 달 이상 걸리는 본질적 개선이지만 경쟁사를 따라잡기 위해 필수.