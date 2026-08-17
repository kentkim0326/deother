# 태국 게임쇼 사진 추가 (2차) — 로컬 세션 인수인계

> **왜 이 문서가 있나**: 원본 사진이 대표님 윈도우 PC의 `D:\2025 Gamescom Asia` 에 있다.
> 클라우드 세션은 그 드라이브를 못 본다 — **윈도우 로컬 세션에서만 할 수 있는 작업**이다.
> 작성 2026-08-17 · 브랜치 `claude/thailand-game-show-photos-pmq0ie` · 기준 커밋 `ecd53a4`

## 시작하기

세션 폴더는 **저장소**여야 한다(사진 폴더가 아니다). 사진은 절대경로로 읽어오면 된다.
사진과 같은 드라이브에 두면 편하다:

```powershell
cd D:\
git clone https://github.com/kentkim0326/deother.git
cd deother
git checkout claude/thailand-game-show-photos-pmq0ie
```

**먼저 `CLAUDE.md` 를 읽을 것.** 특히 「⚠️ 연표에 「참석」 줄은 더 넣지 않는다」 위아래와
「남은 것」의 태국 게임쇼 사진 항목.

## 지금 들어가 있는 것 (겹치면 안 된다)

**부스 사진 아홉 장** `assets/tgs-01.jpg` ~ `tgs-09.jpg`.
`SHOW_PHOTOS`(i18n.js 89행)의 **순서가 곧 이야기**다 — 넓은 곳에서 우리 부스로, 다시 사람으로:

| # | 파일 | 내용 |
|---|---|---|
| 0 | tgs-06 | 행사장 메인 스테이지 |
| 1 | tgs-01 | 한국관(K-GAME PLAYGROUND) 전경, 16개사 |
| 2 | tgs-08 | 한국관 라인업 보드의 Fighting Nations |
| 3 | tgs-02 | 우리 부스 (포스터 + 시연) |
| 4 | tgs-09 | 부스 모니터의 실제 플레이 화면 |
| 5 | tgs-07 | 관람객이 직접 플레이 |
| 6 | tgs-03 | 부스를 찾아온 관계자 |
| 7 | tgs-04 | 인도 개발자들과 |
| 8 | tgs-05 | 인도 배급사 미팅 |

캡션은 `journey.photos`, **10개 언어 × 9개**로 이미 맞춰져 있다.

## 고르는 기준

**넣을 만한 것**
- 대표님이 발표·상담·시연하는 장면
- 부스에 사람이 몰린 컷
- **MOU 서명 현장**(사람이 서명하는 장면) — 문서 자체가 아니라
- 한국관 공식 행사·시상 장면
- 우리 배너·포스터가 크게 나온 컷

**빼는 것** (전부 이미 한 번씩 걸러낸 것들이다)
- **타사 부스** — 어제 TOMATOK 컷을 이 기준으로 뺐다
- 위 아홉 장과 **같은 각도·같은 장면**
- **대표님 외 인물의 얼굴 클로즈업** — 동의를 받은 바 없다
- **MOU 문서 원본** — 서명 필체와 상대측 담당자 실명이 보인다.
  그래서 이미지 대신 연표에 상호(Debuz)만 글로 적었다. **이 결정을 뒤집지 말 것.**
- 명찰·바코드·이메일·전화번호가 읽히는 컷

## 최적화

프로젝트 표준은 `add-slides.ps1` 과 같다 — **가로 1600px · JPEG 82%**.

```powershell
# ImageMagick 이 있으면
magick "D:\2025 Gamescom Asia\원본.jpg" -resize 1600x -quality 82 assets\tgs-10.jpg
```

- 파일명은 **`tgs-10` 부터 이어서** 붙인다.
- **세로 사진은 4:3 으로 직접 자른다.** 중앙 크롭에 맡기면 간판(DEOTHER)과 보드 로고가 날아간다 —
  어제 `tgs-06·08·09` 에서 실제로 그랬다. 위쪽 기준으로 자른다.

## 붙이는 곳

1. `i18n.js` 의 `SHOW_PHOTOS` 에 파일 추가 — **넣는 위치가 이야기 순서**다(위 표 참고)
2. `i18n.js` 의 `journey.photos` 에 캡션 추가 — **10개 언어 전부, 같은 인덱스에**
   ※ 한 언어만 개수가 어긋나면 그 언어에서만 조용히 빈다
3. 자막은 **사진에 실제로 보이는 것만** 쓴다. 없는 맥락을 지어내지 않는다(CLAUDE.md 함정 2)

### 슬라이드쇼로 바꿀지

대표님이 슬라이드쇼도 좋다고 하셨다. 기준:
- **열두 장 이하면 지금처럼 격자**(`.show-photos`)로 둔다 — 한눈에 다 보이는 게 낫다
- **열세 장 이상이면 슬라이드쇼**로 바꾼다. 격자로 두면 여정 섹션이 너무 길어진다
- 슬라이드쇼 로직은 `page.js` 에 이미 있다(`pSlideSet`). 새로 만들 것 없다

## 끝내기 전에

**브라우저 실측**(추측 금지 — 이 저장소의 규칙이다):

```powershell
python -m http.server 5173
```

10개 언어를 돌려가며 확인할 것:
- 사진 개수 = `SHOW_PHOTOS` 길이 = 각 언어 `journey.photos` 길이
- 이미지 404 없음 · 빈 캡션 없음 · JS 오류 없음
- 아랍어 `dir=rtl`
- 한국어 외 언어에 한글 누출 없음
  (단 IP 제목 「훈민정음」·「김형섭」 등 고유명사는 오탐이다 — CLAUDE.md 함정 7)

## 커밋·푸시

- 브랜치 **`claude/thailand-game-show-photos-pmq0ie`** 에 그대로 커밋한다
- `git push -u origin claude/thailand-game-show-photos-pmq0ie`
- **PR 은 대표님이 요청할 때만 만든다**
- 커밋 메시지에 큰따옴표를 넣으면 PowerShell 에서 깨진다 — `git commit -F <파일>` 로 넘기고,
  파일은 `[System.IO.File]::WriteAllText($p, $s, (New-Object Text.UTF8Encoding $false))` 로 쓴다
  (`Out-File -Encoding utf8` 은 PS 5.1 에서 BOM 을 붙인다). CLAUDE.md 함정 6.

## 끝나면

`CLAUDE.md` 의 「남은 것」에 무엇을 골랐고 **무엇을 왜 뺐는지** 적는다.
다음 세션이 같은 사진을 다시 검토하지 않도록.
