# UserProfile 컴포넌트 디렉토리

유저 프로필 페이지(`UserProfile.jsx`) 사이드바 영역(3컬럼)에 배치되는 카드 컴포넌트들이다.

---

## 컴포넌트 목록

### UserActivity.jsx — 활동 통계 카드

유저의 커뮤니티 활동 수치를 2×2 그리드로 보여 주는 카드다.

**Props**

| prop    | type                                      | 기본값         | 설명                              |
| ------- | ----------------------------------------- | -------------- | --------------------------------- |
| `stats` | `Array<{ value: number, label: string }>` | 아래 목업 참조 | 순서대로 좌상→우상→좌하→우하 배치 |

기본 목업 순서: `게시글 → 댓글 → 받은 좋아요 → 좋아요한 글`

**사용 예**

```jsx
import UserActivity from "./UserActivity";

// 기본 목업 데이터 사용
<UserActivity />

// 실제 데이터 주입
<UserActivity
  stats={[
    { value: user.postCount,    label: "게시글" },
    { value: user.commentCount, label: "댓글" },
    { value: user.likeReceived, label: "받은 좋아요" },
    { value: user.likeGiven,    label: "좋아요한 글" },
  ]}
/>
```

**레이아웃 구조**

```
Card (312px, border-radius: 20px)
├── Title "📊 활동 통계"
├── Divider (1px 구분선)
└── StatsGrid (2×2, gap: 12px)
    ├── StatItem: value + label
    ├── StatItem: value + label
    ├── StatItem: value + label
    └── StatItem: value + label
```

---

### UserChatRequest.jsx — 1:1 채팅 요청 카드

열람 중인 유저와 1:1 채팅을 시작할 수 있는 버튼 카드다.

**Props**

| prop          | type         | 기본값      | 설명                           |
| ------------- | ------------ | ----------- | ------------------------------ |
| `onChatStart` | `() => void` | `undefined` | 버튼 클릭 시 실행할 콜백 함수 |

**사용 예**

```jsx
import UserChatRequest from "./UserChatRequest";

<UserChatRequest onChatStart={() => navigate(`/chat/${userId}`)} />
```

**레이아웃 구조**

```
Card (312px, border-radius: 20px)
├── SectionLabel "해당 유저와 이야기 하기"
├── Divider (1px 구분선)
└── ChatButton "1:1 채팅 시작하기"  ← onClick → onChatStart
```

**동작 참고**

- 버튼은 아웃라인(border 2px, primary 컬러) 스타일이다.
- 실제 채팅 기능 연결 시 `onChatStart` 콜백에서 채팅방 생성 API 호출 후 채팅 페이지로 이동한다.
- 자기 자신의 프로필에서는 이 컴포넌트를 렌더링하지 않도록 상위에서 분기한다.

---

### UserReportBlock.jsx — 신고 및 차단 카드

부적절한 유저를 신고하거나 차단할 수 있는 버튼 카드다.

**Props**

| prop       | type         | 기본값      | 설명                               |
| ---------- | ------------ | ----------- | ---------------------------------- |
| `onReport` | `() => void` | `undefined` | "이 유저 신고하기" 버튼 클릭 콜백 |
| `onBlock`  | `() => void` | `undefined` | "이 유저 차단하기" 버튼 클릭 콜백 |

**사용 예**

```jsx
import UserReportBlock from "./UserReportBlock";

<UserReportBlock
  onReport={() => openReportModal(userId)}
  onBlock={() => handleBlock(userId)}
/>
```

**레이아웃 구조**

```
Card (312px, border-radius: 20px)
├── NoticeBox (안내 배너, amber 계열)
│   ├── NoticeBar    — 3px 오렌지 좌측 바
│   └── NoticeContent
│       ├── NoticeTitle "⚠️ 신고 및 차단"
│       └── NoticeBody  (2줄 안내 텍스트)
├── ReportButton "이 유저 신고하기"  ← onClick → onReport
└── BlockButton  "이 유저 차단하기"  ← onClick → onBlock
```

**스타일 참고**

- `NoticeBox` 배경(`#fff7ed`)과 안내 텍스트(`#92400e`)는 `theme`에 없는 amber 계열이므로 파일 내 로컬 상수(`NOTICE_BG`, `NOTICE_TEXT_DARK`)로 관리한다.
- `ReportButton`은 `theme.PALETTE.warning.main` (#FF8004) 아웃라인 스타일이다.
- `BlockButton`은 `theme.GRAYSCALE[8]` 아웃라인, `theme.GRAYSCALE[9]` 텍스트로 비활성 느낌을 준다.
- 자기 자신의 프로필에서는 이 컴포넌트를 렌더링하지 않도록 상위에서 분기한다.

---

## 공통 사항

- 세 컴포넌트 모두 `width: 312px` 고정 — `layout.sidebarWidth`에 대응한다.
- 스타일은 `src/styles/theme.js`의 `theme.PALETTE`, `theme.GRAYSCALE`, `theme.FONT_SIZE`, `theme.FONT_WEIGHT` 토큰만 참조한다.
- Divider는 Figma 이미지 에셋 대신 `height: 1px`, `background: theme.GRAYSCALE[8]` div로 대체했다 (이미지 URL은 7일 후 만료되기 때문).
- 모든 컴포넌트는 화살표 함수형으로 작성한다.
