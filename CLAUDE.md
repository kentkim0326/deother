# Deother 회사 소개 사이트 — 프로젝트 가이드

> 주식회사 디아더와 게임 3종을 소개하는 정적 사이트. 빌드 도구 없이 HTML/CSS/JS 파일만으로 동작한다.
> Live: https://deother.vercel.app · Repo: `kentkim0326/deother` (main 브랜치 → Vercel 자동 배포)
>
> **다른 컴퓨터에서 이어서 작업할 때는 이 문서만 읽으면 된다.** 아래 "이어받기"부터 보라.

## 이어받기 (새 노트북 / 새 세션)

```bash
git clone https://github.com/kentkim0326/deother.git
cd deother
```

빌드도 설치도 필요 없다. 확인만 하려면:

```bash
python -m http.server 5173     # 또는  npx serve . -l 5173
```

`file://` 로 직접 열면 브라우저가 스크립트를 막아 **빈 화면**이 나온다. 반드시 서버로 띄운다.
(`.claude/launch.json` 에 `deother-web` 설정이 들어 있어 Claude Code 의 preview 도구로도 바로 뜬다.)

배포는 `git push` 만 하면 Vercel 이 1~2분 안에 반영한다. 빌드 설정 없음.

## 파일 구조

```
index.html          메인. 구조만 있고 텍스트는 비어 있다 (app.js 가 채운다)
miliverse.html      상세 페이지 — 밀리버스
kingdom-wars.html   상세 페이지 — 킹덤워즈
styles.css          어두운 화면 + 붉은 강조색 하나. 세 페이지가 공유한다

i18n.js         ★ 메인 페이지 번역 + 링크 + 영상 + 슬라이드 목록. 내용 수정은 대부분 여기다
pages-i18n.js   ★ 상세 페이지 번역 (PAGES.miliverse / PAGES.kingdom)
app.js          메인 페이지 렌더 + 언어 전환
page.js         상세 페이지 렌더 (목차 자동 생성 포함)

manifest.webmanifest  PWA
add-slides.ps1        슬라이드 이미지 최적화 + i18n.js 자동 갱신 (아래 참고)
assets/               로고 3종, FN 커버, 소설 표지, PWA 아이콘, 슬라이드 3세트
```

`_pdf.js` / `_pdf2.js` / `package.json` / `node_modules` 는 **발표자료 PDF 에서 텍스트를 뽑을 때 쓴 일회성 도구**다.
`.gitignore` 로 제외돼 있고 사이트 동작과 무관하다. 없어도 된다.

## 렌더 구조 — 새 섹션을 넣을 때

`index.html` 의 요소들은 **id 로만 존재**하고 `app.js` 의 `render(code)` 가 언어별 텍스트를 채운다.
따라서 **새 섹션은 세 곳을 같이 고쳐야 한다**:

1. `index.html` — 빈 요소 (`<p id="wkNote"></p>`)
2. `i18n.js` — **10개 언어 전부** 문구
3. `app.js` — `set("wkNote", t.works.note)`

하나라도 빠지면 그 부분만 조용히 비어 나온다. 상세 페이지는 `pages-i18n.js` + `page.js` 로 같은 구조다.

## i18n 구조

- 언어 10종: `en ko zh ja es pt fr de ru ar`
- **`en` 을 먼저 고치고 나머지를 맞춘다.** 구조가 어긋나면 그 언어만 렌더가 깨진다.
- **아랍어(`ar`)는 RTL.** `app.js` 가 `<html dir>` 을 바꾸고 CSS 는 `margin-inline-start` 같은
  논리 속성을 쓴다. **좌우 스타일에 `left`/`right` 를 쓰면 아랍어가 깨진다.**
- 선택은 `localStorage("deother.lang")` 에 저장되고, 없으면 브라우저 언어를 감지한다.

`i18n.js` 상단 데이터:

```js
LINKS        itch.io · 소설 · 발표자료(영/한) · 페이스북 · 유튜브 · 메일
FN_SLIDES    Fighting Nations 슬라이드 (히어로 커버를 대신한다)
KW_SLIDES    Kingdom Wars 슬라이드
MV_SLIDES    밀리버스 슬라이드 (상세 페이지)
WORKS        만든 것 3종. key 로 i18n 의 works.items 와 연결.
             필드: key · tag · url · logo · detail(상세 페이지) · sns{label,url}
VIDEOS       개발 연표 영상 (오래된 것부터). 제목은 영어 그대로 둔다
LANG_VIDEOS  언어별 주제가. 라벨이 그 언어의 자기 이름이라 번역하지 않는다
```

## 슬라이드 이미지 넣기

원본을 그냥 올리면 안 된다 (13장에 92MB 였다). 스크립트를 쓴다:

```powershell
# Downloads\fn-slides\ 또는 kingdom-slides\ 또는 miliverse-slides\ 에 원본을 넣고
.\add-slides.ps1 fn          # → assets\slides-fn\  + i18n.js 의 FN_SLIDES 자동 갱신
.\add-slides.ps1 kingdom
.\add-slides.ps1 miliverse
```

MD5 로 중복을 걸러내고, 가로 1600px · JPEG 82% 로 저장한다.
**i18n.js 의 배열까지 스크립트가 고친다** — 손으로 고치면 빠뜨린다.
장수가 많으면 좋은 것만 골라 배열을 직접 줄여도 된다 (FN·KW 는 그렇게 8장으로 추렸다).

## ⚠️ 함정 / 규칙

1. **없는 요소를 `getElementById(...).textContent` 로 만지면 렌더 전체가 죽는다.**
   실제로 `ftStudio` 라는 없는 id 하나 때문에 푸터가 통째로 비었던 적이 있다.
   `app.js` 의 `set(id, text)` 헬퍼를 쓰면 요소가 없어도 안전하다.

2. **사실이 아닌 주장을 쓰지 않는다.** 이 사이트에서 세 번 걸렀다:
   - "세계 최초 맨손 배틀로얄" → Rumbleverse(에픽 배급, 40인 근접전, 2023-02 종료)라는 선례가 있다
   - 밀리버스를 "AI 팩트체크 서비스"라고 씀 → **실제로는 실세계 지도 위 Web3 영토 전략 게임**
   - "Kingdom Wars: 달 → 화성 → 심우주" → 화성·심우주는 **미구현**, 인트로 예고만 있음
   셋 다 확인 없이 쓴 결과다. 심사위원·배급사가 확인할 수 있는 문서라
   **과장 한 줄이 나머지 주장까지 의심받게 만든다.** 각 프로젝트 문서를 먼저 읽을 것.

3. **국가를 다루는 문구는 표현을 조심한다.** 세 게임 모두 국가를 앞세우지만,
   "애국심을 자극한다"는 만드는 사람의 언어다. 밖에서는 국가주의를 이용한다고 읽힌다 —
   특히 **텐센트가 운영하는 국제 대회**에서 위험하다.
   현재 문구(`works.note`)는 "어느 나라를 강하게 만들기 위해서가 아니라,
   어느 나라 사람이든 자기 자리를 찾을 수 있게" 로 끝난다. **뒷절을 빼면 안 된다.**

4. **itch.io 링크는 페이지가 Public 이어야 열린다.** Draft/Restricted 면 방문자에게 404 다.
   현재 설정: Public + "Unlisted in search & browse" (링크로는 열리고 검색엔 안 뜸).

5. **유튜브는 `youtube-nocookie.com` 으로 임베드한다.** 재생 전 추적 쿠키를 심지 않는다.

6. **커밋 메시지에 큰따옴표를 넣으면 PowerShell 에서 명령이 깨진다.** 파일로 넘긴다:
   `git commit -F <파일>`

## 사이트 구성 (섹션 순서)

```
히어로              태그라인 + FN 슬라이드쇼 + itch.io 버튼
기획의도(why)        격투게임은 1:1에 갇혔고 배틀로얄은 총으로 포화
왜 시작했나(origin)  ★ 창업자 1인칭 — 23년 무술, 연골 파손, 철권 밸런스 붕괴
세계관(world)        원작 소설 Seraphim + 아마존 링크 + 표지
게임 특징(features)  무기 없음 / 팀전 / 기술을 삼 / 국가별 무술
여정(journey)        개발 연표 영상 + 사건 연표 (동경게임쇼·Evo Japan·소프트뱅크·수상·공모전)
언어별 주제가(songs) 9개 언어 힙합 + 게임플레이
우리가 만든 것(works) FN · Kingdom Wars · 밀리버스 + KW 슬라이드쇼
                    └ 카드 아래 works.note — 세 게임을 관통하는 관점 (함정 3번)
로드맵(roadmap)      GWB(8/15) → 스팀(9월) → 에픽(10월) → 멀티 → Xbox → 64인 배틀로얄
팀(team)             창업자 약력
자료(decks)          감마 발표자료 영/한
```

**"왜 시작했나"가 이 사이트에서 가장 힘 있는 부분이다.** 스펙이 아니라 이유라서 기억에 남는다.
문구를 줄일 일이 있어도 여기는 건드리지 않는 편이 낫다.

상세 페이지 두 곳(`miliverse.html`, `kingdom-wars.html`)은 **공모전 제출용**이다.
철학 → 전쟁이 벌어지는 방식 → 실시간 데이터 → 무기·군사배치 → 플레이 방법 →
**AI·공공데이터 활용** 순서. 마지막 항목이 공모전에서 가장 많이 보는 부분이라 구체적으로 쓴다.

## 관련 프로젝트

| 이름 | 정체 | 링크 |
|---|---|---|
| Fighting Nations | 3D 맨손 무술 격투게임 (UE 5.8) | https://deother.itch.io/fighting-nations |
| Kingdom Wars | 브라우저 턴제 정복, 달 49섹터. 미래 우주전쟁이지만 국기를 쓴다 | https://kingdom-wars-puce.vercel.app |
| 밀리버스 | 실제 세계 지도 위 Web3 영토 전략. 실제 날씨·낮밤이 전투에 반영 | https://miliverse-ten.vercel.app |

각 프로젝트 저장소에도 `CLAUDE.md` 가 있다. **그 게임의 내용을 사이트에 쓸 때는 추측하지 말고
해당 문서를 먼저 읽을 것** — 함정 2번이 그래서 생겼다.

FN 본체 프로젝트: `F:\Projects\FightingNations\` (UE 5.8, C++)

## 진행 상황 (2026-07-20 기준)

**끝난 것**
- 10개 언어 · PWA · 모바일 최적화 · 언어 토글
- 게임 3종 카드 + 로고 + SNS 링크, 상세 페이지 2종
- 슬라이드쇼 3세트 (FN 8 · KW 8 · MV 13), 영상 19편
- 세 게임을 관통하는 관점 문구 (`works.note`) — 10개 언어

**남은 것**
- [ ] **밀리버스 실제 게임 화면 캡처** — 지도·타일 상세·전투 코크핏·**날씨/풍향/태양 궤적**.
      지금 상세 페이지는 "공공데이터를 게임에 넣었다"를 글로만 주장한다. 화면이 증거다.
      사이트가 Google 로그인을 요구해서 **대표님이 로그인한 뒤에** 캡처해야 한다.
- [ ] 상세 페이지 2종을 나머지 8개 언어로 번역 (내용이 굳은 뒤에)
- [ ] GWB Game Awards 마감 **2026-08-15**, 재제출 허용.
      소개글·영상·플레이 가능한 빌드는 준비됨. **스크린샷 3~5장이 남았다.**
      그 전에 7번 캐릭터 복장 확인 필요 (일부 캐릭터 복장/머티리얼 문제)
