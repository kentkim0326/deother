# Thailand Game Show 2025 Photos — 인수인계

**상태**: 사진 최적화 + 배치 작업 남음  
**분기**: `claude/thailand-game-show-photos-pmq0ie`  
**로컬 사진 경로**: `/Users/kentkim/Downloads/2025 gamescom Thailand/`

## 세션 진행 과정 (2026-08-17 09:25 ~ 현재)

### 1단계: 수료증 사진 3장 받음
- **Gamebridge Unityversity 수료증** (2019-12-11)
  - 유니티 게임 개발 1주 워크숍 (Unity 2018.4 LTS, 서울 wcoding)
  - 수료증에 영문 명시: Certificate of Completion / Kent Kim / wcoding, Seoul 2019/12/11
  - ※ 강사 국적은 수료증에 없다 — 적지 않는다(대표님 지시)
  
- **광주이스포츠교육원 수료증** (2025-11-17)
  - e스포츠 대회기획 과정
  - 교육기간이 오류(2025.11.25.~11.17)로 기록되어 있음 → 발급일만 사용
  
- **VARCO Voice 공모전 포스터** (2026-08-17)
  - 정식 명칭 확인: 「제2회 VARCO 활용 게임제작 공모전 Voice편」
  - 주최: NC AI
  - 제출 마감: 2025-12-31 23:59

### 2단계: pages-i18n.js 수정 (10개 언어)
**파일**: `pages-i18n.js` > `PAGES.festivals[LANG].sections[1].list.items`

변경 사항:
```js
// 인트로 문단 변경
// ko: 「2025년 8월부터 열네 과정」→ 「2019년 유니티 워크숍으로 시작해, 2025년 8월 이후로만 열다섯 과정」
// en/zh/ja/es/pt/fr/de/ru/ar: 동일 의미로 모두 변경

// 목록 맨 앞에 Gamebridge 추가
// 목록 0: 2019-12-11 · Gamebridge Unityversity · ✅ 수료

// 경기게임아카데미 뒤에 광주 e스포츠 추가
// Gamebridge 다음 → GBSA (8-20) → KMA (10-31) → 경기게임 (11-4) → 광주 (11-17) 순서

// 제2회 VARCO 명칭 변경
// 「제2회 NC 바르코 게임 공모전」→ 「제2회 VARCO 활용 게임제작 공모전 Voice편 (NC AI)」
```

도구: Node.js vm 모듈로 JSON 일괄 치환 (40건)

### 3단계: CLAUDE.md 문서화
**섹션**: 1-6. 두 번째 섹션 관련 주석

추가 내용:
- 열세 과정 → **열여섯 과정 + 수상 1건** (2019-12-11 · 2025-08-20 ~ 2026-08-06)
- Gamebridge Unityversity 섹션 추가 (창업 전 유일 과정)
- 광주이스포츠교육원 섹션 추가 (교육기간 오류 및 판단 근거)
- NC VARCO 제2회 섹션 추가 (포스터로 정식 명칭 확인)

### 4단계: 검증
**브라우저 실측** (Playwright, Chromium 1194):
```
ko: 11 섹션, 141 항목, 한글 3949자
en/zh/ja/es/pt/fr/de/ru/ar: 11 섹션, 141 항목, 한글 0
→ 모든 언어 동일 구조 ✓

링크: 61개 정상 동작
국기: 65개 정상 표시
→ 인덱스 미밀림 ✓
```

### 5단계: PR #47 생성 및 머지
- **제목**: 수료 2건 추가 + 제2회 VARCO 공모전 정식 명칭 반영
- **본문**: 각 변경사항 상세 설명 + 검증 결과
- **머지 방법**: squash (단일 커밋)
- **커밋 SHA**: b7c031db9d9feed58c12e4a57c9eac76b70df06d

### 6단계: 태국 게임쇼 2025 사진 확인
**출처**: Google Drive 공유 폴더
- `search_files` 로 폴더 내용 확인
- 10개 PNG 파일 발견 (9.4 MB ~ 18.7 MB)
- 부스 사진 · MOU 문서 · 포스터 · 전시회 스크린 혼합

**파일 목록**:
| 파일 | 크기 | 용도 |
|---|---|---|
| IMG_9942.png | 9.4 MB | MOU 문서 |
| IMG_9682.png | 15.6 MB | 부스 사진 |
| IMG_9630.png | 16.2 MB | 부스 사진 |
| IMG_1429.png | 2.7 MB | ? |
| IMG_9786.png | 6.8 MB | ? |
| IMG_9788.png | 10.0 MB | ? |
| IMG_0056.png | 14.6 MB | 부스 포스터 |
| IMG_0045.png | 18.7 MB | 부스 사진 (큼) |
| IMG_0050.png | 11.0 MB | 부스 사진 |
| IMG_9617.png | 10.5 MB | 전시회 스크린 |

### 7단계: assets 폴더 생성
```bash
mkdir -p assets/photos-tgs-2025
touch assets/photos-tgs-2025/.gitkeep
git add assets/photos-tgs-2025/.gitkeep
git commit -m "assets: create photos-tgs-2025 folder for Thailand Game Show 2025 images"
git push origin claude/thailand-game-show-photos-pmq0ie
```

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
