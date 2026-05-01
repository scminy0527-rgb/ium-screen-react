# chatComponent 디렉토리

이 디렉토리에는 **팝업 형태의 사이드 채팅 패널** 컴포넌트들이 있다.  
URL 변경 없이 동작하는 플로팅 UI로, 부모 컴포넌트의 상태(state)로 뷰를 전환하는 구조다.

---

## 파일 목록

| 파일 | 역할 |
|---|---|
| `ChatMessage.jsx` | 단일 채팅 메시지 말풍선 (공통 하위 컴포넌트) |
| `SideChatComponent.jsx` | 1:1 미니 채팅 패널 |
| `SideChatListComponent.jsx` | 채팅방 목록 패널 |
| `SideChatRequestComponent.jsx` | 1:1 채팅 요청 유저 리스트 패널 |

> 테스트 페이지: `src/page/SideChatSample.jsx` (라우트: `/side-chat`)

---

## 공통 사항

### 스타일 의존성

모든 컴포넌트는 아래 파일에서 디자인 토큰을 import한다.

```js
import { colors, fonts, radius, shadows } from "../../styles/themeOriginal";
// 팀 프로젝트로 이전 시 → 해당 프로젝트의 테마 파일 경로로 교체
```

### 아이콘 의존성

```js
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faExpand, faXmark, faHandshake } from "@fortawesome/free-solid-svg-icons";
// 패키지: @fortawesome/react-fontawesome, @fortawesome/free-solid-svg-icons
```

### 공통 헤더 디자인

세 패널 모두 동일한 헤더 구조를 가진다.

- 배경: `colors.gradientMain` (진파랑 → 파랑 선형 그라디언트)
- 너비: 312px 고정
- 버튼: 최소화(`faMinus`) / 확대(`faExpand`) / 닫기(`faXmark`, 빨간 반투명)
- 전체 패널: `border-radius: radius.card(20px)`, `box-shadow: shadows.float`

---

## ChatMessage.jsx

### 역할

`SideChatComponent` 내부에서 메시지 목록을 렌더링할 때 사용하는 **개별 말풍선** 컴포넌트.  
내 메시지(오른쪽 파란 말풍선)와 상대 메시지(왼쪽 흰색 말풍선) 두 가지를 `isMine` prop으로 분기한다.

### Props

| prop | 타입 | 기본값 | 설명 |
|---|---|---|---|
| `isMine` | `boolean` | `false` | true이면 내 메시지(오른쪽 정렬, 파란 배경) |
| `message` | `string` | `"메세지 메세지"` | 메시지 본문 |
| `time` | `string` | `"14:02"` | 전송 시각 표시 문자열 |
| `username` | `string` | `"ㅇㅇ"` | 상대방 이름 (`isMine: false`일 때만 표시) |
| `profileImage` | `string \| null` | `null` | 상대방 프로필 이미지 URL (`null`이면 회색 placeholder) |

### 사용 예시

```jsx
<ChatMessage isMine={false} username="홍길동" message="안녕하세요" time="14:02" />
<ChatMessage isMine={true} message="반갑습니다!" time="14:03" />
```

---

## SideChatComponent.jsx

### 역할

1:1 미니 채팅 패널. 메시지 목록 + 입력창 + "채팅방 전체 보기" 링크로 구성된다.  
`messages` 배열을 받아 `ChatMessage` 컴포넌트로 목록을 렌더링한다(리스트 뷰 빌더 패턴).

### Props

| prop | 타입 | 기본값 | 설명 |
|---|---|---|---|
| `chatPartnerName` | `string` | `"ㅇㅇ"` | 헤더에 표시할 상대방 이름 (`{name}님과 채팅`) |
| `messages` | `Message[]` | 샘플 7개 | 렌더링할 메시지 배열 (아래 타입 참고) |
| `onClose` | `() => void` | - | 닫기 버튼 클릭 |
| `onMinimize` | `() => void` | - | 최소화 버튼 클릭 (목록으로 복귀 등) |
| `onExpand` | `() => void` | - | 확대 버튼 클릭 (전체 채팅방 페이지 이동 등) |
| `onViewAll` | `() => void` | - | 하단 "채팅방 전체 보기 ↗" 클릭 |

#### Message 타입

```ts
{
  id: number;
  isMine: boolean;
  message: string;
  time: string;          // "HH:MM" 형식
  username?: string;     // isMine: false일 때 사용
  profileImage?: string; // null이면 기본 placeholder
}
```

### 내부 상태

| 상태 | 설명 |
|---|---|
| `inputValue` | 입력창 텍스트 (Enter 또는 전송 버튼으로 초기화) |

> 주의: 현재 `handleSend`는 `inputValue`를 초기화만 하며, 실제 메시지 전송 로직은 상위에서 구현해야 한다.  
> 메시지를 추가하려면 부모가 `messages` 배열을 업데이트해서 내려주는 방식으로 연동한다.

### 레이아웃 구조

```
┌─────────────────────────┐  ← Header (gradientMain)
│  ● {name}님과 채팅   − ⤢ ✕ │
├─────────────────────────┤  ← MessageList (bgSection, max-height: 380px, 스크롤)
│  [ChatMessage...]       │     messages 변경 시 자동 최하단 스크롤
├─────────────────────────┤  ← InputArea (bgCard)
│  [입력창]         [➤]   │
├─────────────────────────┤  ← Footer (primaryLight)
│   채팅방 전체 보기 ↗    │
└─────────────────────────┘
```

---

## SideChatListComponent.jsx

### 역할

채팅방 목록을 보여주는 패널. 방 항목 클릭 → 1:1 채팅으로 전환, 하단 탭 클릭 → 뷰 전환 네비게이션.

### Props

| prop | 타입 | 기본값 | 설명 |
|---|---|---|---|
| `title` | `string` | `"전체 채팅 리스트"` | 헤더 제목 |
| `rooms` | `Room[]` | 샘플 5개 | 채팅방 목록 배열 (아래 타입 참고) |
| `onClose` | `() => void` | - | 닫기 버튼 클릭 |
| `onMinimize` | `() => void` | - | 최소화 버튼 클릭 |
| `onExpand` | `() => void` | - | 확대 버튼 클릭 |
| `onRoomClick` | `(room: Room) => void` | - | 방 항목 클릭 → 1:1 채팅 전환에 사용 |
| `onTabChange` | `(tab: string) => void` | - | 하단 탭 클릭 시 부모에 탭 key 전달 |

#### Room 타입

```ts
{
  id: number;
  name: string;
  count: number;       // 참여자 수
  isLive: boolean;     // 라이브 뱃지 표시 여부
  thumbnail?: string;  // 채팅방 썸네일 이미지 URL (없으면 primaryLight 배경 + 아이콘)
}
```

### 내부 상태

| 상태 | 초기값 | 설명 |
|---|---|---|
| `activeTab` | `"all"` | 하단 탭 선택 상태 (내부 관리). 탭 클릭 시 `onTabChange`도 함께 호출 |
| `selectedRoomId` | `rooms[0].id` | 선택(활성화)된 방 ID — primary 테두리 + bgSection 배경으로 강조 |

> `activeTab`은 컴포넌트 재마운트 시 `"all"`로 초기화된다.  
> 뷰 전환 후 돌아올 때 탭 상태를 유지하려면 부모에서 상태를 관리하고 `initialTab` 같은 prop으로 내리는 방식으로 확장해야 한다.

### 레이아웃 구조

```
┌─────────────────────────┐  ← Header (gradientMain)
│  전체 채팅 리스트  − ⤢ ✕ │
├─────────────────────────┤  ← ListBody (bgCard)
│  [RoomItem] active      │     height: 280px, overflow-y: auto
│  [RoomItem]             │     활성 항목: primary 테두리 2px + bgSection 배경
│  [RoomItem]             │
│  ...                    │
├─────────────────────────┤
│ [모든 채팅방] [채팅중인 방] [요청] │  ← TabGroup
└─────────────────────────┘
```

---

## SideChatRequestComponent.jsx

### 역할

현재 사용자에게 1:1 채팅을 요청한 유저 리스트 패널.  
하단 탭은 `onTabChange` 콜백으로 부모에게 전환 신호를 보낸다 (내부 탭 상태 없음).

### Props

| prop | 타입 | 기본값 | 설명 |
|---|---|---|---|
| `requests` | `Request[]` | 샘플 2개 | 채팅 요청 유저 목록 (아래 타입 참고) |
| `activeTab` | `"all" \| "chatting" \| "request"` | `"request"` | 하단 탭 중 어떤 탭을 active로 표시할지 |
| `onClose` | `() => void` | - | 닫기 버튼 클릭 |
| `onMinimize` | `() => void` | - | 최소화 버튼 클릭 |
| `onExpand` | `() => void` | - | 확대 버튼 클릭 |
| `onTabChange` | `(tab: string) => void` | - | 하단 탭 클릭 시 부모에 탭 key 전달 |
| `onRequestClick` | `(req: Request) => void` | - | 요청 유저 항목 클릭 |

#### Request 타입

```ts
{
  id: number;
  username: string;
  timeAgo: string;    // "50분 전", "1시간 전" 등 표시 문자열
  avatar?: string;    // null이면 primaryLight 배경 placeholder
}
```

### 레이아웃 구조

```
┌─────────────────────────┐  ← Header (gradientMain)
│  채팅 요청 리스트   − ⤢ ✕ │
├─────────────────────────┤  ← Body (bgCard, height: 346px, justify: space-between)
│  [Avatar] 수어러버박하늘  50분 전 │  ← RequestList (flex:1, overflow-y: auto)
│  [Avatar] 헬스하는칼국수  1시간 전 │
│                         │
│ [모든 채팅방] [채팅중인 방] [요청] │  ← TabGroup (하단 고정)
└─────────────────────────┘
```

---

## 세 패널의 탭 네비게이션 구조

하단에 공통으로 있는 3개 탭(`모든 채팅방` / `채팅중인 방` / `요청`)은  
**패널 간 전환 네비게이션** 역할을 한다. URL은 변경되지 않으며, 부모 state로 제어한다.

```
탭 key "all"      → SideChatListComponent 렌더링
탭 key "chatting" → SideChatListComponent 렌더링 (필터 로직은 추후 구현)
탭 key "request"  → SideChatRequestComponent 렌더링
```

---

## 팀 프로젝트 연동 가이드

### 1. 부모 컴포넌트에서 뷰 상태 관리

```jsx
const [view, setView] = useState(null); // null | "list" | "request" | "room"
const [selectedRoom, setSelectedRoom] = useState(null);

const handleTabChange = (tab) => {
  setView(tab === "request" ? "room_request" : "list");
};

const handleRoomClick = (room) => {
  setSelectedRoom(room);
  setView("room");
};
```

### 2. 렌더링

```jsx
// 패널을 우측 하단에 고정하려면 position: fixed 래퍼 사용
<div style={{ position: "fixed", bottom: 24, right: 24, zIndex: 100 }}>
  {view === "list" && (
    <SideChatListComponent
      onClose={() => setView(null)}
      onMinimize={() => setView(null)}
      onExpand={() => {}}
      onRoomClick={handleRoomClick}
      onTabChange={handleTabChange}
    />
  )}
  {view === "room_request" && (
    <SideChatRequestComponent
      activeTab="request"
      onClose={() => setView(null)}
      onMinimize={() => setView(null)}
      onExpand={() => {}}
      onTabChange={handleTabChange}
      onRequestClick={(req) => { /* 요청 수락/거절 로직 */ }}
    />
  )}
  {view === "room" && (
    <SideChatComponent
      chatPartnerName={selectedRoom?.name}
      messages={/* 실제 메시지 배열 */}
      onClose={() => setView(null)}
      onMinimize={() => setView("list")}
      onExpand={() => { /* 전체 채팅 페이지로 이동 */ }}
      onViewAll={() => setView("list")}
    />
  )}
</div>
```

### 3. 이전 시 import 경로 수정

```js
// 이 프로젝트 (project_screen)
import { colors, fonts, radius, shadows } from "../../styles/themeOriginal";

// 팀 프로젝트로 이전 시 → 해당 프로젝트의 테마 파일 경로로 교체
import { colors, fonts, radius, shadows } from "../../styles/theme"; // 예시
```

### 4. 실제 메시지 전송 연동 포인트

`SideChatComponent` 내부의 `handleSend`는 현재 입력창을 비우는 것만 처리한다.  
실제 전송 로직 연동이 필요하면 `onSend` prop을 추가하고 `handleSend` 내에서 호출하도록 확장한다.

```jsx
// SideChatComponent.jsx 수정 예시
const handleSend = () => {
  if (!inputValue.trim()) return;
  onSend?.(inputValue);   // ← 추가
  setInputValue("");
};
```

---

## 테스트 페이지 (SideChatSample.jsx)

- **위치**: `src/page/SideChatSample.jsx`
- **라우트**: `/side-chat`
- **역할**: 세 패널의 뷰 전환을 실제로 확인하는 시안 테스트 페이지

위 파일은 팀 프로젝트로 이전 시 필요 없으며, 연동 패턴 참고용으로만 사용한다.
