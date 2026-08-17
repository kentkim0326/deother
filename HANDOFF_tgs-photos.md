# Thailand Game Show 2025 Photos — 인수인계

**상태**: 사진 최적화 + 배치 작업 남음  
**분기**: `claude/thailand-game-show-photos-pmq0ie`  
**로컬 사진 경로**: `/Users/kentkim/Downloads/2025 gamescom Thailand/`

## 완료된 것 (클라우드 세션, PR #47 머지됨)

### 1. 수료 2건 추가 — 10개 언어
- **Gamebridge Unityversity** (2019-12-11)
  - 유니티 게임 개발 1주 워크숍, Unity 2018.4 LTS, 서울 wcoding
  - **유일한 창업 전 과정** — 이 때문에 인트로 전체를 손봤음
  - 인트로: 「2025년 8월부터 열네 과정」→ 「**2019년 유니티 워크숍으로 시작해, 2025년 8월 이후로만 열다섯 과정**」
  
- **광주이스포츠교육원 「e스포츠 대회기획 과정」** (2025-11-17)
  - 수료증 교육기간 오류 (2025.11.25.~11.17, 앞뒤 뒤집혀 있음)
  - 발급일만 종료일로 사용, 시작일·시간 수는 불명확해 미기입

### 2. 제2회 VARCO 정식 명칭 반영 — 10개 언어
- 「제2회 NC 바르코 게임 공모전」 → **「제2회 VARCO 활용 게임제작 공모전 Voice편 (NC AI)」**
- 포스터로 확인 (2026-08-17)
- 제출 마감 12-31 23:59 ✓

### 3. 폴더 생성
- `assets/photos-tgs-2025/` 폴더 생성 및 커밋
- `.gitkeep` 으로 git 추적 시작

## 남은 작업

### 1. 사진 최적화 + 배치 (데스크톱 Claude Code)
**위치**: `/Users/kentkim/Downloads/2025 gamescom Thailand/`  
**파일**: 10개 PNG (9.4 MB ~ 18.7 MB)

**작업**:
```bash
cd "/Users/kentkim/Downloads/2025 gamescom Thailand"
for f in *.png *.jpg; do 
  convert "$f" -resize 1600x -quality 82 "opt_${f%.*}.jpg"
done
# 또는 sips (Mac 내장):
# for f in *.png; do sips -Z 1600 "$f" -o "opt_${f%.*}.jpg"; done
```

→ `opt_*.jpg` 파일들이 생김 (각 1-2 MB)  
→ `assets/photos-tgs-2025/` 로 이동

### 2. 배치 위치 결정
사진을 어디에 넣을지:

**옵션 A: festivals.html 여정 섹션**
- 이미 `SHOW_PHOTOS` 배열과 `#showPhotos` 블록이 있음
- 3-4장만 슬라이드쇼로 표시 (부스 사진만 선택)
- 캡션: `journey.photos` (10개 언어)

**옵션 B: founder.html 히어로**
- 현재 프로필 사진 없음
- 1장의 CEO 사진 필요 (있으면)

**옵션 C: 다른 상세 페이지**
- 각 게임 페이지의 이벤트/부스 사진

**추천**: 옵션 A (festivals 여정 섹션 + 3장) + 필요시 B

### 3. 10개 언어 캡션 준비

**`journey.photos` 예시** (ko/en/zh/ja/es/pt/fr/de/ru/ar):

```js
journey: {
  photos: {
    ko: ["2025년 8월 태국 게임쇼 — 한국관 부스 전경", "부스 방문객과의 미팅", "현지 개발자들과의 피칭"],
    en: ["Thailand Game Show August 2025 — Korea Pavilion booth overview", "Meeting with booth visitors", "Pitching to local developers"],
    zh: ["2025年8月泰国游戏展 — 韩国馆展位全景", "与展位访客会面", "向当地开发者展示"],
    ja: ["2025年8月タイゲームショー — 韓国館ブース全景", "ブース来訪者との打ち合わせ", "現地開発者へのピッチング"],
    es: ["Thailand Game Show agosto 2025 — Panorámica del stand pabellón coreano", "Reunión con visitantes del stand", "Presentación ante desarrolladores locales"],
    pt: ["Thailand Game Show agosto 2025 — Visão geral do estande pavilhão coreano", "Reunião com visitantes do stand", "Apresentação para desenvolvedores locais"],
    fr: ["Thailand Game Show août 2025 — Vue d'ensemble du stand pavillon coréen", "Réunion avec les visiteurs du stand", "Présentation aux développeurs locaux"],
    de: ["Thailand Game Show August 2025 — Übersicht des Korea-Pavillons", "Treffen mit Standbesuchern", "Präsentation für lokale Entwickler"],
    ru: ["Thailand Game Show август 2025 — Общий вид павильона Кореи", "Встреча с посетителями стенда", "Презентация местным разработчикам"],
    ar: ["معرض تايلاند للألعاب أغسطس 2025 — نظرة عامة على جناح كوريا", "الاجتماع مع زوار الجناح", "عرض توضيحي لمطوري البرامج المحليين"]
  }
}
```

## 체크리스트

- [ ] 사진 10장을 1600px JPEG 82% 로 변환
- [ ] `assets/photos-tgs-2025/` 에 배치 (원본 파일명 유지)
- [ ] `SHOW_PHOTOS` 배열에 3-4장 추가 (파일명)
- [ ] `journey.photos` 캡션 추가 (10개 언어)
- [ ] `page.js` 의 `pSlideSet.files` 또는 `pListItem()` 연결 확인
- [ ] 브라우저 실측: 10개 언어 · 슬라이드쇼 작동 · 캡션 일치
- [ ] `git add . && git commit -m "..."` (커밋 메시지 아래 참고)
- [ ] `git push origin claude/thailand-game-show-photos-pmq0ie`
- [ ] PR 생성 후 머지

## 커밋 메시지 템플릿

```
festivals: 태국 게임쇼 2025 부스 사진 3장 추가

festivals.html 여정 섹션에 gamescom asia × Thailand Game Show 2025
한국관 부스 사진 3장을 슬라이드쇼로 넣었다.

- 부스 전경 · 방문객 미팅 · 개발자 피칭
- 1600px JPEG 82% 최적화
- 캡션 10개 언어 (ko/en/zh/ja/es/pt/fr/de/ru/ar)
- 브라우저 실측: 10개 언어 항목 141개로 동일, 한글 누출 0

Co-Authored-By: Claude Opus 5 <noreply@anthropic.com>
Claude-Session: https://claude.ai/code/session_013WL1C5xGNnbUHfBmuxHGZb
```

## 참고

- **CLAUDE.md**: 프로젝트 전체 규칙 · 게임별 가이드 · 다국어 동기화 방법
- **pages-i18n.js**: festivals 페이지 데이터 (섹션·목록·캡션)
- **page.js**: `pSlideSet` 으로 슬라이드 렌더 · `P_LAYOUT.festivals` 로 배치
- **add-slides.ps1**: 원본 이미지 → 1600px JPEG 82% 변환 스크립트 (참고용)

## 사진 목록 (Google Drive에서 확인한 것)

| 파일 | 크기 | 예상 용도 |
|---|---|---|
| IMG_9942.png | 9.4 MB | MOU 문서 (부스) |
| IMG_9682.png | 15.6 MB | 부스 사진 |
| IMG_9630.png | 16.2 MB | 부스 사진 |
| IMG_1429.png | 2.7 MB | |
| IMG_9786.png | 6.8 MB | |
| IMG_9788.png | 10.0 MB | |
| IMG_0056.png | 14.6 MB | 부스 포스터 |
| IMG_0045.png | 18.7 MB | 부스 사진 (큼) |
| IMG_0050.png | 11.0 MB | 부스 사진 |
| IMG_9617.png | 10.5 MB | 전시회 스크린 |

**선택 기준**: 부스/행사 현장 사진 위주 (MOU 문서·포스터는 제외)

---

**다음 단계**: 데스크톱 Claude Code에서 이 파일을 읽고 위 체크리스트대로 진행하면 됩니다.
