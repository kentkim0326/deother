# 디아더 사이트 — 온라인 클로드에서 이어서 작업하기 (2026-08-14)

> 노트북 없이 **claude.ai(온라인 클로드)** 에서 이어갈 때 쓰는 문서.
> 레포가 공개라 온라인 클로드가 아래 링크를 **직접 읽을 수 있다.**

---

## 1. 시작할 때 이것부터 붙여넣기

```
디아더 회사 소개 사이트를 이어서 작업할 거야.
https://raw.githubusercontent.com/kentkim0326/deother/main/CLAUDE.md
이 문서를 먼저 읽어. 프로젝트 전체 맥락과 지켜야 할 규칙이 다 거기 있어.
소스는 같은 레포의 main 브랜치고, 라이브는 https://deother.vercel.app 이다.
```

그 다음 하고 싶은 작업을 말하면 된다.

---

## 2. 링크

| 무엇 | 주소 |
|---|---|
| 라이브 사이트 | https://deother.vercel.app |
| 대표 소개 | https://deother.vercel.app/founder.html |
| 깃허브 (공개) | https://github.com/kentkim0326/deother |

**소스 파일 직접 읽기** (온라인 클로드에 이 주소를 주면 읽는다):

- 프로젝트 가이드 — https://raw.githubusercontent.com/kentkim0326/deother/main/CLAUDE.md
- 메인 번역·데이터 — https://raw.githubusercontent.com/kentkim0326/deother/main/i18n.js
- 상세 페이지 번역 — https://raw.githubusercontent.com/kentkim0326/deother/main/pages-i18n.js
- 메인 렌더 — https://raw.githubusercontent.com/kentkim0326/deother/main/app.js
- 상세 렌더 — https://raw.githubusercontent.com/kentkim0326/deother/main/page.js
- 메인 HTML — https://raw.githubusercontent.com/kentkim0326/deother/main/index.html
- 대표 소개 HTML — https://raw.githubusercontent.com/kentkim0326/deother/main/founder.html
- 스타일 — https://raw.githubusercontent.com/kentkim0326/deother/main/styles.css

※ `i18n.js`(152KB)와 `pages-i18n.js`(322KB)는 크다. **통째로 달라고 하지 말고**
"`soomba` 블록만" 처럼 **범위를 좁혀서** 요청하는 편이 낫다.

---

## 3. 온라인 클로드로 작업할 때의 한계 — 이것만 알면 된다

온라인 클로드는 **F 드라이브 파일을 직접 못 고친다.** 그래서 흐름이 이렇다:

1. 온라인 클로드에게 "이 블록을 이렇게 고쳐줘" 하고 **고친 코드 조각을 받는다**
2. 사무실 PC `F:\deother` 에서 해당 파일에 **붙여넣는다**
3. `git add -A` → `git commit` → `git push`
4. Vercel 이 1~2분 안에 자동 배포한다 (빌드 설정 없음)

**받을 때 꼭 요구할 것**: "어느 파일 몇 번째 블록인지, 앞뒤 몇 줄까지 같이" —
그래야 붙여넣을 위치를 못 찾는 일이 없다.

---

## 4. 절대 지킬 것 (자세한 건 CLAUDE.md)

1. **새 문구는 세 곳을 같이 고친다** — `index.html`(빈 요소) + `i18n.js`(10개 언어) + `app.js`(`set(...)`).
   하나라도 빠지면 **그 부분만 조용히 빈다.**
2. **확인 안 된 주장은 쓰지 않는다.** 이 사이트에서 이미 네 번 걸렀다.
   과장 한 줄이 나머지 주장까지 의심받게 만든다.
3. **10개 언어는 구조가 같아야 한다** (섹션·문단·항목 수). 어긋나면 그 언어만 렌더가 빈다.
   `en` 을 먼저 고치고 나머지를 맞춘다. **아랍어는 RTL** — `left`/`right` 대신 논리 속성.
4. **번역본에 원시 한글이 남았는지 검사한다** (`/[가-힣]/`). 고유명사에서 잘 생긴다.
5. **커밋 메시지에 큰따옴표를 넣지 않는다** (PowerShell 에서 깨진다). `git commit -F 파일` 을 쓴다.
6. 유튜브는 `youtube-nocookie.com` 으로 임베드한다.
7. **숫자는 사이트 전체가 같아야 한다.** 예: 책 23권은 `founder` 본문과
   `i18n.js` 의 team bullet **10개 언어**에 동시에 들어가 있다. 한쪽만 고치면 어긋난다.

---

## 5. 오늘(2026-08-14) 한 것

**대표 소개 페이지(`founder.html`) 신설** — 게임이 아니라 사람에 대한 첫 페이지.
대표님 Gamma 문서 「김형섭 (Kent Kim)」 18장을 옮겼다. ko/en, 9섹션:

1만 통의 편지 · 만화가에서 강연가로 · 미술가 · 23권의 책 · TAFA 500곡 ·
연극과 영화 · 소설가 · 게임 개발자 · AI와 공공데이터

- 영상 3편(전부 oEmbed 로 제목·채널 확인): 세바시 154회 · ELEGERE(2017 헐리우드 AOF 수상작) ·
  Fighting Nations 「225 Attack Moves」
- 이미지 4장: 만화시집·타임블럭 표지, 신동아 기사, 호러 표지 (+ 기존 SERAPHIM 표지)
- `.cover-row` 신설 — 책 표지는 로스터 규칙으로 깔면 **제목이 잘린다**
- 메인 팀 섹션 이름·직함 바로 밑에 링크 (`team.more`, 10개 언어)
- 책 권수 **23권**으로 사이트 전체 통일, "이민 3년 반 만에 합격" 반영

**사이트 현재 상태**: 게임 10종 · 상세 9종 + 대표 소개 1 · 10개 언어.

---

## 6. 다음에 할 것 (우선순위)

1. **상세 6종 10개 언어 확장** — 숨바·저승사자·타임워즈·터프킹·월스트리트·대표 소개가
   지금 ko/en 뿐이다(카드는 이미 10개 언어). `pages-i18n.js`.
   ※ 분량이 크니 **게임 하나씩** 시키는 게 안전하다.
2. **대표 소개에 인물 사진** — 지금 히어로에 사진이 없다. Gamma 문서 이미지는 수료증·동의서라
   생년월일과 서명이 있어 안 썼다. **라이브 페인팅 현장 사진이 있으면 가장 좋다.**
3. **밀리버스 실게임 캡처** — 구글 로그인이 필요해 대표님만 가능.
4. **월스트리트 게임 화면** — 지금 상세가 앱 아이콘뿐이다.
5. **KWO 전용 로고** — 지금은 킹덤워즈 로고를 임시로 돌려쓰는 중.
6. **터프 킹 상태 전환** — 플레이 빌드가 나오면 카드에 다운로드 추가, CTA 를 '팔로우'에서 바꾼다.

---

## 7. 닫힌 항목 — 다시 꺼내지 말 것

- **데니스 리치 / CS50** — 사이트에 넣지 않기로 대표님이 정했다(2026-08-14).
- 안소니 퀸 전시 관련 "청와대 대통령·추기경 미팅 추진" — 뺐다.
