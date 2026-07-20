# Deother 회사 소개 사이트 — 프로젝트 가이드

> 주식회사 디아더와 게임들을 소개하는 정적 사이트. 빌드 도구 없이 HTML/CSS/JS 파일만으로 동작한다.
> Live: https://deother.vercel.app · Repo: `kentkim0326/deother` (main 브랜치 → Vercel 자동 배포)

## 핵심 정보

| 항목 | 값 |
|---|---|
| 라이브 | https://deother.vercel.app |
| 저장소 | kentkim0326/deother (main) |
| 배포 | Vercel — main 에 push 하면 1~2분 내 자동 반영. **빌드 설정 없음(정적)** |
| 확인 | `npx serve . -l 4321` (file:// 로 열면 브라우저가 스크립트를 막을 수 있다) |

## 파일 구조

```
index.html    구조만. 텍스트는 비어 있고 app.js 가 채운다
styles.css    어두운 화면 + 붉은 강조색 하나
i18n.js       ★ 번역 · 링크 · 영상 목록. 내용 수정은 대부분 여기만 고치면 된다
app.js        언어 전환과 DOM 렌더
assets/       로고, FN 커버, 소설 표지
```

`index.html` 의 요소들은 **id 로만 존재**하고 `app.js` 의 `render(code)` 가 언어별 텍스트를 넣는다.
따라서 **새 섹션을 만들 때는 세 곳을 같이 고쳐야 한다** — index.html(빈 요소) · i18n.js(10개 언어 문구) · app.js(렌더).

## i18n 구조

- 언어 10종: `en ko zh ja es pt fr de ru ar`
- **`en` 을 먼저 고치고 나머지를 맞춘다.** 구조가 어긋나면 그 언어만 렌더가 깨진다.
- **아랍어(`ar`)는 RTL.** `app.js` 가 `<html dir>` 을 바꾸고, CSS 는 `margin-inline-start` 같은
  논리 속성을 쓴다. **좌우 스타일을 새로 넣을 때 `left/right` 를 쓰면 아랍어가 깨진다.**
- 브라우저 언어를 감지하고 선택은 `localStorage("deother.lang")` 에 저장한다.

`i18n.js` 상단에 데이터가 모여 있다:

```js
LINKS       itch.io · 소설 · 발표자료(영/한) · 페이스북 · 메일
VIDEOS      개발 연표 영상 (오래된 것부터). 제목은 영어 그대로 둔다
LANG_VIDEOS 언어별 주제가. 라벨이 그 언어의 자기 이름이라 번역 불필요
WORKS       만든 것 3종 (key 로 i18n 의 works.items 와 연결)
```

## ⚠️ 함정 / 규칙

1. **없는 요소를 `getElementById(...).textContent` 로 만지면 렌더 전체가 죽는다.**
   실제로 `ftStudio` 라는 없는 id 때문에 푸터가 통째로 비었던 적이 있다.
   `app.js` 의 `set(id, text)` 헬퍼를 쓰면 요소가 없어도 안전하다.
2. **사실이 아닌 주장을 쓰지 않는다.** 이 사이트에서 두 번 걸렀다:
   - "세계 최초 맨손 배틀로얄" → Rumbleverse(에픽 배급, 2022~2023 서비스 종료)라는 선례가 있다
   - "Kingdom Wars: 달 → 화성 → 심우주" → 화성·심우주는 **미구현**, 인트로 예고만 있음
   심사위원·배급사가 확인할 수 있는 문서라 과장 한 줄이 나머지 주장까지 의심받게 만든다.
3. **itch.io 링크는 페이지가 Public 이어야 열린다.** Draft/Restricted 면 방문자에게 404 다.
   현재 설정: Public + "Unlisted in search & browse" (링크로는 받아지고 검색엔 안 뜸).
4. **유튜브는 `youtube-nocookie.com` 으로 임베드한다.** 재생 전 추적 쿠키를 심지 않는다.
5. **이미지는 용량을 줄여서 넣는다.** 소설 표지는 4MB 전체 표지에서 앞표지만 잘라 139KB 로 줄였다.
   원본(`assets/seraphim.png`)은 `.gitignore` 로 제외돼 있다.
6. **커밋 메시지에 큰따옴표를 넣으면 PowerShell 에서 명령이 깨진다.** 파일로 넘긴다:
   `git commit -F <파일>`

## 사이트 구성 (섹션 순서)

```
히어로            태그라인 + FN 커버 아트 + itch.io 버튼
기획의도(why)     격투게임은 1:1에 갇혔고 배틀로얄은 총으로 포화
왜 시작했나(origin) ★ 창업자 1인칭 — 23년 무술, 연골 파손, 철권 밸런스 붕괴
세계관(world)     원작 소설 Seraphim + 아마존 링크 + 표지
게임 특징(features) 무기 없음 / 팀전 / 기술을 삼 / 국가별 무술
여정(journey)     개발 연표 영상 10편 + 사건 연표
언어별 주제가(songs) 9개 언어 힙합 + 게임플레이
우리가 만든 것(works) Fighting Nations · Kingdom Wars · 밀리버스
로드맵(roadmap)   GWB(8/15) → 스팀(9월) → 에픽(10월) → 멀티 → Xbox → 64인 배틀로얄
팀(team)          창업자 약력
자료(decks)       감마 발표자료 영/한
```

**"왜 시작했나"가 이 사이트에서 가장 힘 있는 부분이다.** 스펙이 아니라 이유라서 기억에 남는다.
문구를 줄일 일이 있어도 여기는 건드리지 않는 편이 낫다.

## 관련 프로젝트

| 이름 | 정체 | 링크 |
|---|---|---|
| Fighting Nations | 3D 맨손 무술 격투게임 (UE 5.8) | https://deother.itch.io/fighting-nations |
| Kingdom Wars | 브라우저 턴제 정복, 달 49섹터 | https://kingdom-wars-puce.vercel.app |
| 밀리버스 | 실제 세계 지도 위 Web3 영토 전략 | https://miliverse-ten.vercel.app |

각 프로젝트 저장소에도 `CLAUDE.md` 가 있다. **그 게임의 내용을 사이트에 쓸 때는 추측하지 말고
해당 문서를 먼저 읽을 것** — 위 2번 함정이 그래서 생겼다.

## 진행 상황 (2026-07-20 기준)

- GWB Game Awards 마감 **2026-08-15**, 재제출 허용
- 필수 자료 중 소개글·영상·플레이 가능한 빌드는 준비됨. **스크린샷 3~5장이 남았다**
- 스크린샷 전에 캐릭터 복장 확인이 필요함 (일부 캐릭터가 노출이 심하거나 머티리얼이 깨져 보임)
