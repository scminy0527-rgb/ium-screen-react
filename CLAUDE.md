# CLAUDE.md — project_screen

## 프로젝트 목적

이 저장소는 **화면 시안(스크린 샘플)** 프로젝트다.  
추후 팀장이 제공하는 **기본 리액트 프로젝트(라우터 + 글로벌 스타일 적용 완료본)** 에 각 컴포넌트를 이전하는 것을 전제로 작업한다.  
이전 시 하드코딩된 스타일을 해당 프로젝트의 디자인 토큰(CSS 변수 or styled-components 테마)으로 교체한다.

---

## 기술 스택

| 항목 | 버전 |
|------|------|
| React | 19.x |
| react-router-dom | 7.x |
| styled-components | 6.x |
| zustand | 5.x |
| react-hook-form | 7.x |
| @fortawesome/react-fontawesome | 3.x |

---

## 디렉토리 구조

```
src/
├── index.css              # 전역 스타일 (body, reset)
├── App.js                 # BrowserRouter 진입점
├── router/
│   └── router.js          # 라우트 정의
├── page/
│   ├── PostDetailPage.jsx  # 게시글 상세 페이지
│   ├── ChatSample.jsx      # 채팅 샘플 페이지
│   └── UserProfile.jsx     # 유저 프로필 페이지 (9+3컬럼 그리드)
└── component/
    ├── PostListCard.jsx         # 게시글 목록 카드
    ├── LiveChatCard.jsx         # 라이브 채팅 카드
    ├── chatComponent/
    │   └── ChatMessage.jsx      # 채팅 메시지
    ├── common/
    │   └── FloatingChatButton.jsx
    ├── post/
    │   ├── PostContent.jsx      # 게시글 본문
    │   ├── CommentSection.jsx   # 댓글 입력
    │   └── CommentItem.jsx      # 댓글 항목
    └── sidebar/
        ├── PostSidebar.jsx
        ├── RelatedPostCard.jsx
        └── NoticeItem.jsx
```

---

## 라우트

| 경로 | 컴포넌트 |
|------|---------|
| `/` | PostListCard |
| `/chat-card` | LiveChatCard |
| `/chat-page` | ChatSample |
| `/community/post/:id` | PostDetailPage |
| `/community/user/:id` | UserProfile |

---

## 레이아웃 가이드 (1320px 그리드 시스템)

모든 페이지 레이아웃은 아래 기준을 따른다.

### 기본 규칙

- **컨텐츠 최대 너비**: `1320px` (`layout.contentWidth`) — 화면 중앙 정렬
- **컬럼 수**: 12컬럼
- **컬럼 간격(Gap)**: `24px` (`layout.gridGap`) — 모든 컬럼 사이 동일
- **레이아웃 구현**: CSS Grid (`display: grid`)

### 대표 분할 패턴

| 패턴 | 왼쪽 | 오른쪽 | 용도 |
|------|------|--------|------|
| 9 + 3 | `984px` (`layout.cardMaxWidth`) | `312px` (`layout.sidebarWidth`) | 본문 + 사이드바 |

> 984 + 24(gap) + 312 = **1320px** ✓

### styled-components 적용 예시

```jsx
const MainGrid = styled.div`
  display: grid;
  grid-template-columns: ${layout.cardMaxWidth} ${layout.sidebarWidth};
  gap: ${layout.gridGap};
  align-items: start;
`;

const ContentWrapper = styled.main`
  width: ${layout.contentWidth};
  margin: 0 auto;
`;
```

### 적용된 페이지

- `UserProfile.jsx` — 9컬럼(프로필 + 게시글 목록) + 3컬럼(활동 통계 + 신고/차단 사이드바)

---

## 스타일 방향성 (핵심 규칙)

### 원칙

> **컴포넌트 내부에 색상·폰트 값을 직접 하드코딩하지 않는다.**  
> 모든 디자인 토큰은 중앙 파일에 정의하고, 컴포넌트는 해당 변수를 참조한다.

이 프로젝트에서는 `src/styles/theme.js` 파일에 토큰을 정의한다.  
팀장 프로젝트로 이전 시, 해당 프로젝트의 테마/변수 파일로 교체하면 되도록 구조화한다.

---

### 디자인 토큰 파일: `src/styles/theme.js`

새 스타일 추가 또는 수정 시 이 파일을 먼저 업데이트하고, 컴포넌트는 이 값을 참조한다.

```js
// src/styles/theme.js

export const colors = {
  // 키 컬러 (브랜드)
  primary: '#4359fc',
  primaryDark: '#0014a9',
  primaryLight: '#eef1ff',
  primaryMid: '#7b8fff',
  primaryFooter: '#4157ff',

  // 그래디언트
  gradientMain: 'linear-gradient(162.3deg, #0014a9 0%, #4359fc 100%)',
  gradientCard: 'linear-gradient(160.58deg, #4359fc 0%, #7b8fff 100%)',
  gradientAccessibility: 'linear-gradient(90deg, #eef1ff 34%, #e8f9e9 100%)',

  // 텍스트
  textMain: '#333333',
  textSub: '#9ca3af',
  textWhite: '#ffffff',

  // 배경
  bgPage: '#f0f2f5',
  bgCard: '#ffffff',
  bgSection: '#f9fafb',

  // 보더
  border: '#e5e7eb',

  // 상태 색상
  live: '#129d1b',
  liveBg: '#e8f9e9',
  danger: '#f14141',
  accessibilitySign: '#4359fc',      // 수어로 보기
  accessibilityRead: '#4dc953',      // 글 읽어주기
};

export const fonts = {
  family: "'Pretendard', sans-serif",
  weight: {
    regular: 400,
    medium: 500,
    bold: 700,
  },
  size: {
    xs: '10px',
    sm: '12px',
    smMd: '13px',
    md: '14px',
    mdLg: '15px',
    base: '16px',
    lg: '18px',
    xl: '20px',
    xxl: '24px',
    xxxl: '28px',
  },
};

export const radius = {
  pill: '100px',   // 배지, 태그
  card: '20px',    // 카드
  button: '12px',  // 버튼, 아바타
  input: '8px',    // 입력 필드
  sm: '10px',      // 소형 버튼
};

export const shadows = {
  card: '0 8px 24px rgba(67, 89, 252, 0.12)',
  cardHover: '0 8px 24px rgba(67, 89, 252, 0.18)',
  float: '0 8px 24px rgba(67, 89, 252, 0.35)',
};

export const layout = {
  headerHeight: '79px',
  breadcrumbHeight: '40px',
  sidebarWidth: '312px',
  cardMaxWidth: '984px',
};

const theme = { colors, fonts, radius, shadows, layout };
export default theme;
```

---

### 컴포넌트에서 토큰 참조 방법

styled-components에서 직접 import해서 사용한다.

```jsx
// 올바른 방법 (변수 참조)
import { colors, fonts, radius } from '../../styles/theme';

const Button = styled.button`
  background: ${colors.primary};
  font-family: ${fonts.family};
  border-radius: ${radius.pill};
  color: ${colors.textWhite};
`;

// 금지 (하드코딩)
const Button = styled.button`
  background: #4359fc;       /* 하드코딩 금지 */
  font-family: 'Pretendard'; /* 하드코딩 금지 */
`;
```

---

## 컴포넌트별 주요 토큰 사용 현황

| 컴포넌트 | 주요 사용 토큰 |
|---------|-------------|
| PostListCard | `colors.primary`, `colors.bgCard`, `colors.border`, `shadows.cardHover`, `radius.card` |
| LiveChatCard | `colors.gradientCard`, `colors.live`, `colors.liveBg`, `radius.card` |
| FloatingChatButton | `colors.gradientMain`, `shadows.float`, `radius.button` |
| PostContent | `colors.primary`, `colors.primaryLight`, `colors.gradientAccessibility` |
| CommentSection / CommentItem | `colors.primary`, `colors.textMain`, `colors.textSub`, `colors.border` |
| PostSidebar / NoticeItem | `colors.primaryDark`, `colors.primaryLight`, `colors.border` |
| PostDetailPage (Footer) | `colors.primaryFooter`, `colors.textWhite` |

---

## 전역 스타일 (`src/index.css`)

```css
/* 폰트 패밀리는 index.css 에서 body에 한 번만 선언 */
body {
  font-family: 'Pretendard', sans-serif;
  background-color: #f0f2f5; /* → 팀장 프로젝트 이전 시 bgPage 토큰으로 대체 */
  margin: 0;
}
```

styled-components 컴포넌트 내에서 `font-family`를 별도 지정할 필요는 없으나,  
특정 컴포넌트가 다른 폰트를 써야 할 경우 `fonts.family` 토큰을 명시한다.

---

## 팀장 프로젝트 이전 시 체크리스트

1. `src/styles/theme.js` → 팀장 프로젝트의 테마/변수 파일 경로로 import 경로 교체
2. 컴포넌트 내 직접 import 구문 일괄 수정
3. `src/index.css` 전역 스타일 → 팀장 프로젝트의 글로벌 CSS로 통합
4. Figma 이미지 에셋 URL → 팀장 프로젝트의 에셋 경로로 교체
5. 라우트 → 팀장 프로젝트 라우터에 병합

---

## 코드 작성 규칙

- 컴포넌트 파일 내 색상·폰트·크기 하드코딩 금지
- `src/styles/theme.js`에 없는 값이 필요하면 먼저 해당 파일에 토큰 추가 후 사용
- styled-components 사용 (inline style, CSS Module 혼용 금지)
- 주석은 WHY가 명확할 때만 작성 (무의미한 설명 주석 금지)
- 이미지는 외부 URL 또는 `src/assets/` 에서 관리
