# TURF KING — 수노 스타일 팩 (9종)

> 작성 2026-08-16. 원본 음악 문서는 turf-king 레포의 [`Docs/TK_MUSIC.md`](https://github.com/kentkim0326/turf-king/blob/main/Docs/TK_MUSIC.md).
> 세계관은 `Docs/TK_WORLD.md`, 로스터는 `Docs/TK_ROSTER.md`.
>
> **이 문서의 정식 위치는 `TurfKing/Docs/TK_SUNO_STYLES.md` 다.**
> 여기(deother)에는 작업본으로 올려둔 것이니 사무실 PC 에서 `D:\TurfKing\Docs\` 로 복사할 것.
>
> ## 이게 뭐냐
> `TK_MUSIC.md` 는 **한 방향(붐뱁 느와르)을 깊게** 판 문서다. 곡은 있는데 **장르 선택지가 없다.**
> 이 문서는 그 반대다 — **같은 세계관·같은 조성(F 프리지안)으로 9가지 장르를 뽑아
> 들어보고 고르기 위한 것**이다. 가사는 대부분 기존 것을 재활용한다(아래 A/B 방법 참조).

---

## 0. 먼저 — 수노에 넣는 법

1. **Custom Mode** 켜기
2. **Style of Music** → 아래 `[STYLE]` 블록 통째로 붙여넣기
3. **Exclude Styles** → 아래 `[EXCLUDE]` 블록 붙여넣기 ← **이게 절반이다.** 안 넣으면 십중팔구
   소리지르는 래퍼나 밝은 후렴이 딸려 나온다
4. **Lyrics** → 각 스타일의 "가사" 항목이 가리키는 것. `[Instrumental]` 이라고 적힌 건 가사 칸을 비운다
5. Title 칸에 곡 제목
6. (v4.5+ 에 **Weirdness / Style Influence** 슬라이더가 보이면) Style Influence 를 높게,
   Weirdness 는 낮게 — 이 프로젝트는 실험이 아니라 **장르 재현**이 목적이다

### ⚠ 기존 문서에서 고쳐야 할 것 하나
`TK_MUSIC.md` 0-4 절은 `aggressive` 를 쓰지 말라고 못박아 놓고,
정작 2-1(도쿄)·2-2(서울)·2-5(런던) `[STYLE]` 이 `aggressive` 로 시작한다.
**그래서 그 세 곡은 소리지르는 래퍼가 나올 확률이 높다.** 아래 S1·S2 로 대체하거나,
그 세 블록의 `aggressive` 를 `cold and restrained, low register` 로 바꿔서 다시 돌릴 것.

---

## 1. 스타일 9종 한눈에

| # | 스타일 | BPM | 어디에 쓰나 | 가사 |
|---|---|---|---|---|
| **S1** | Dark Cinematic Boom Bap | 88 | 타이틀 · 트레일러 (**기준점**) | 있음 |
| **S2** | Industrial Drill (하프타임) | 142 / 체감 71 | 전투 루프 · 챕터 보스 | 없음 |
| **S3** | Neo-Noir Hybrid Trailer | 84 | 트레일러 · 공모전 피칭 영상 | 없음(내레이션만) |
| **S4** | Noir Enka Ballad | 72 | 챕터 엔딩 · 크레딧 | 있음(**노래**, 랩 아님) |
| **S5** | Neon Synthwave Noir | 100 | 캐릭터 셀렉 · 메뉴 · 로비 | 없음 |
| **S6** | Arcade FM Rock (벨트스크롤 정통) | 140 | 스테이지 인트로 · 웨이브 | 없음 |
| **S7** | Industrial Doom Sludge | 60 ↔ 120 | 20번 티라나(미니보스) · 최종전 | 없음 |
| **S8** | Ambient Noir Score | 60 | 게임오버 · 정적인 컷신 | 없음 |
| **S9** | **THE LEDGER** (특수) | 52 | 최종 보스 — 장부의 방 | 없음 |

**전부 F 마이너 프리지안으로 통일했다.** `TK_MUSIC.md` 0-2 의 결정 그대로다 —
샤미센(도쿄)·얼후(홍콩)·가야금(서울)이 한 앨범에 들어가도 안 어색해지는 유일한 방법이다.

---

## 2. A/B 비교하는 법 — 이게 핵심이다

스타일 9개를 각각 다른 가사로 뽑으면 **뭐가 좋은지 비교가 안 된다.**
곡이 좋은 건지 가사가 좋은 건지 구분이 안 되기 때문이다.

```
1단계  가사는 딱 하나로 고정한다 — TK_MUSIC.md 1-A "TURF KING" 영어 가사
2단계  S1 · S4 두 개만 그 가사로 돌린다 (보컬 있는 스타일이 이 둘뿐이다)
3단계  나머지 S2·S3·S5~S9 는 가사 칸을 비우고 인스트루멘탈로 돌린다
4단계  각 스타일당 2곡씩 = 18곡. 여기서 "게임 켰을 때 이 소리가 나면 좋겠다" 를 고른다
5단계  고른 스타일로만 4개국어(EN/KO/ZH/JA) 확장한다
```

⚠ **처음부터 4개국어를 다 뽑지 말 것.** 스타일이 안 정해진 상태에서 언어를 늘리면
버릴 곡을 4배로 만드는 것뿐이다.

---

# S1. Dark Cinematic Boom Bap — **기준점**

타이틀 화면 · 트레일러 · 챕터 인트로. 이 프로젝트의 정체성이다. 나머지는 전부 이것의 변주다.

### [STYLE]
```
dark cinematic boom bap, gravelly male rap vocal in low register, restrained and almost spoken, 88 BPM, dusty MPC drums with heavy room reverb, snare dragging slightly behind the beat, distorted 808 sub layered with upright bass, single low octave piano note repeating, muted brass stabs far back in the mix, F minor phrygian that never resolves, high passed rain texture thin and distant, faint electrical hum under everything, tape saturation and vinyl crackle, sparse arrangement with long gaps, wide cinematic reverb
```

### [EXCLUDE]
```
shouting, screaming, aggressive rap, party trap, autotune, bright major key, uplifting, EDM drop, orchestral swell, choir, female vocal, fast hi hats
```

### 가사
`TK_MUSIC.md` **1-A (English)** 그대로. 한국어는 1-B, 중국어 1-C, 일본어 1-D.

---

# S2. Industrial Drill (하프타임) — 전투 루프 · 보스

142 로 표기하지만 스네어가 3박에만 떨어져 **체감은 71**이다. "빠른데 무겁다" 가 여기서 나온다.
**중역을 비워야 한다** — 안 그러면 타격음이 묻히고 이 게임의 생명이 죽는다.

### [STYLE]
```
industrial drill instrumental, 142 BPM notated with half time feel at 71, sliding distorted 808 glides, two note menacing piano motif, metallic percussion built from rolling shutters chains and steel pipes, sparse hi hat triplet rolls, F minor phrygian, cold warehouse reverb, leave the midrange open so impacts and dialogue cut through, seamless loop, tape hiss
```

### [EXCLUDE]
```
vocals, rap verse, singing, melodic hook, lead guitar, brass, strings, cheerful, major key, build up drop, orchestral
```

### 가사
**비운다.** `TK_MUSIC.md` 0-5 의 3번 — 가사 있는 곡을 전투에 깔면 30분이면 질린다.

### 보스 변형
같은 블록에서 `142 BPM` → `100 BPM`, `F minor phrygian` → `F sharp minor phrygian`,
끝에 `sustained string tension rising` 추가. 반음 올라가면 불안해진다.

---

# S3. Neo-Noir Hybrid Trailer — 트레일러 · 피칭 영상

공모전 제출 영상이나 스팀 트레일러용. **비트가 아니라 타격과 여백으로 끌고 간다.**

### [STYLE]
```
neo-noir hybrid trailer score, 84 BPM, low string ostinato in F minor phrygian, taiko and anvil hits on the downbeat only, single detuned piano note repeating, muted trumpet far back in the mix, sub bass drone, first half almost empty then heavy percussion enters, no melodic resolution, wide cinematic reverb, film grain and tape texture, cold and patient
```

### [EXCLUDE]
```
heroic fanfare, uplifting, major key resolution, choir, vocals, rap, EDM, guitar solo, happy ending swell
```

### 가사
비운다. 내레이션은 영상 편집에서 얹는 게 낫다. 넣고 싶으면 `TK_MUSIC.md` 1-A 의
`[Intro - spoken, low]` 와 `[Outro - spoken]` 두 줄만:

```
[Intro - spoken, low]
You gave them everything.
They gave you up.

[Outro - spoken]
Five cities.
One list.
```

---

# S4. Noir Enka Ballad — 챕터 엔딩 · 크레딧

**랩이 아니라 노래다.** 「용과 같이」 톤(TK_WORLD 7절)을 가장 직접적으로 잡는 스타일.
20년을 잃은 사람이 소리지르지 않고 **부르는** 그림이다.

### [STYLE]
```
noir enka ballad, 72 BPM, weathered male baritone with heavy vibrato, singing not rapping, shamisen and shakuhachi, brushed drums, upright bass, tremolo electric guitar with spring reverb, F minor phrygian, smoky late night lounge, single spotlight, weary and restrained, tape saturation, long instrumental outro
```

### [EXCLUDE]
```
rap, trap drums, 808, bright pop, upbeat, EDM, choir, orchestral swell, female vocal, fast tempo
```

### 가사 — 신곡 「THE ENVELOPE / 封筒」

랩 가사를 그대로 부르면 음절이 안 맞는다. 발라드용으로 따로 썼다.
소재는 세계관에서 **가장 좋은 장면**이다 — 다섯 도시 스무 명이 같은 봉투를 받고,
자기 이름 위아래로 모르는 이름 열아홉 개가 **같은 손글씨**로 그어져 있는 것(TK_WORLD 4절).

```
[Verse 1]
A paper envelope, no stamp, no name
Sitting on the table where the rain came in
Nineteen strangers written over mine
All of us crossed out in the same steady hand

[Chorus]
So it wasn't you
It was never you at all
Twenty years I hated the wrong man
And the right one never raised his voice

[Verse 2]
Tokyo, Seoul, Kowloon, the docks, the pier
Different rain, the same ink drying
I kept the paper folded in my coat
It's warmer than the house I built for them

[Bridge - almost spoken]
Nobody's coming.
That's not the sad part.
The sad part is I waited.

[Chorus]
So it wasn't you
It was never you at all
Twenty years I hated the wrong man
And the right one never raised his voice

[Outro]
Fold it once.
Put it away.
Walk.
```

### 일본어판 (도쿄 챕터 엔딩용)
STYLE 은 위와 같고 `weathered male baritone` 앞에 `Japanese` 를 붙인다.

```
[Verse 1]
切手もない 名前もない封筒
雨の入った机の上に置かれてた
知らない名前が十九
俺の名前と同じ手で 同じように消されてる

[Chorus]
お前じゃなかった
最初からお前じゃなかった
二十年 恨む相手を間違えてた
本物は 一度も声を荒げなかった

[Verse 2]
東京 ソウル 九龍 埠頭 桟橋
違う雨に 同じインクが乾いていく
折りたたんだ紙を 上着に入れてる
俺が建ててやった家より あたたかい

[Bridge - 呟くように]
誰も来ない。
それは悲しくない。
待っていた自分が 悲しい。

[Outro]
一度折って
しまって
歩く
```

---

# S5. Neon Synthwave Noir — 캐릭터 셀렉 · 메뉴

로스터 20명 고르는 화면. **텐션이 낮아야 한다** — 여기서 흥분시키면 전투곡이 안 올라간다.

### [STYLE]
```
neon noir synthwave instrumental, 100 BPM, analog saw bass arpeggio, gated reverb snare, dark FM electric piano, one sustained pad, F minor phrygian, rain on glass, faint electrical hum, restrained and patient, VHS tape wobble, 1980s crime film score, seamless loop
```

### [EXCLUDE]
```
vocals, uplifting, major key, guitar solo, orchestral, pop chorus, drop, energetic, cheerful
```

### 가사
비운다.

---

# S6. Arcade FM Rock — 벨트스크롤 정통

**장르의 뿌리다.** 베어너클(Streets of Rage)·파이널파이트 계보.
S1~S5 가 전부 "무거운 느와르" 쪽인데, 이건 **게임이 재미있어 보이게** 만드는 방향이다.
TK_WORLD 7절이 "배신은 무겁게, 게임은 가볍게" 라고 정해놨으니 이 축도 하나 필요하다.

### [STYLE]
```
16 bit arcade beat em up soundtrack, 140 BPM, FM synth slap bass, gritty sawtooth lead riff, breakbeat drums, hardcore rave stabs, F minor phrygian, 1990s Sega Genesis sound chip character, driving loop, no vocals, punchy and dry
```

### [EXCLUDE]
```
vocals, orchestral, ballad, acoustic, lo-fi, ambient, slow, cinematic strings, choir
```

### 가사
비운다.

### ⚠ 이 스타일만 규칙 하나와 충돌한다
`TK_MUSIC.md` 0-1 ③ 은 **전투곡의 중역을 비우라**고 한다. 그런데 이 장르는
**리드 사각파가 곧 중역**이다. 그게 이 장르의 소리다. 둘 다 가질 수 없다.

→ **스테이지 인트로·데모 영상용으로 쓰고, 실제 웨이브 루프는 S2 를 쓴다.**
   굳이 웨이브에 깔겠다면 게임 안에서 이 트랙만 **-4dB, 800Hz~3kHz 에 3dB 딥**을 걸 것.

---

# S7. Industrial Doom Sludge — 20번 티라나 · 최종전

**20번은 무술이 없다.** 자세도 없고 액센트 컬러도 없다 — 싸운 적이 없고 죽여왔을 뿐이라서다
(TK_WORLD 3절 ⭐). 그 캐릭터에 붙는 음악은 **기교가 없어야 한다.**
빠른 게 아니라 **느리고 무거워야** 한다.

### [STYLE]
```
industrial doom sludge instrumental, 60 BPM half time with sudden double time sections at 120, detuned downtuned guitar drone, distorted sub bass, slow tribal floor toms, sheet metal percussion, feedback swells, no melody, no vocals, F minor phrygian, crushing and patient rather than fast, room mic bleed, analog distortion
```

### [EXCLUDE]
```
vocals, screaming, melodic guitar solo, blast beats, thrash, uplifting, orchestral, synth lead, catchy riff
```

### 가사
비운다.

---

# S8. Ambient Noir Score — 게임오버 · 컷신

악기 하나. 비트 없음. **10초 안에 "졌다"가 전달되어야 한다.**

### [STYLE]
```
neo-noir ambient score, 60 BPM, one felt piano note repeating with long decay, single upright bass swell, no drums, room tone, high passed rain thin and distant, faint electrical hum, far away siren, wet footsteps on asphalt, F minor phrygian never resolving to the tonic, tape hiss, extremely sparse with long silence
```

### [EXCLUDE]
```
drums, beat, percussion, vocals, string swell, melody, uplifting, resolution, orchestral, choir
```

### 가사
비운다.

---

# S9. THE LEDGER — 최종 보스 (특수)

⭐ **이 트랙이 이 문서에서 가장 값어치 있는 것이다.**

장부는 조직이 아니라 **회계 시스템**이다(TK_WORLD 1절). 두목도 본부도 문신도 없다.
최종 무대 제안은 **아무것도 없는 방** — 책상 하나, 종이 한 장, 사람 한 명.
스무 명이 들이닥쳤는데 그가 **펜을 들고 있을 뿐인 그림**이다(TK_WORLD 8절).

그런 장면에 오케스트라가 깔리면 **전부 망한다.** 그러니까 음악을 쓰지 말고,
**사무실 소리로 음악을 만든다.** 계산기 소리를 퍼커션으로 쓰는 것이다.

### [STYLE]
```
minimal industrial score built from office sounds, 52 BPM, mechanical adding machine clicks used as percussion, fountain pen scratching on paper, paper sliding across a desk, fluorescent tube hum, one detuned piano note every four bars, sub bass drone rising very slowly across the whole track, no drums, no melody, no vocals, clinical empty room reverb, unbearably patient, tape hiss
```

### [EXCLUDE]
```
drums, 808, guitar, bass guitar, orchestral, strings, vocals, melody, choir, cinematic swell, boss battle music, heroic
```

### 가사
비운다.

### 2페이즈 (싸움이 시작되면)
같은 블록에 이어 붙인다:
```
second half, the adding machine clicks speed up into a 104 BPM pulse, distorted sub bass enters, metal sheet percussion, still no melody, still no vocals
```
→ **계산기 소리가 그대로 킥이 된다.** 장부가 화내는 게 아니라 **계산이 빨라지는 것**이다.

---

# 3. 도시 색을 얹는 법 (선택)

위 9종은 **전부 색이 없는 뼈대**다. 도시 챕터에 쓸 때는 `[STYLE]` 블록의
`F minor phrygian` **바로 뒤에** 아래 한 줄만 끼워넣는다. 조성은 절대 바꾸지 않는다.

| 도시 | 끼워넣을 문구 |
|---|---|
| 도쿄 | `shamisen riff and shakuhachi breath, taiko accents` |
| 서울 | `gayageum plucks and daegeum flute` |
| 홍콩 | `erhu long bow and pipa plucks` |
| 뉴욕 | `dusty jazz brass sample and upright bass, vinyl crackle` |
| 런던 | `terrace chant sample far away, sparse cold piano` |

⚠ **조성을 도시별로 바꾸지 말 것** (`TK_MUSIC.md` 0-5 의 6번).
프리지안으로 묶어야 다섯 도시가 한 앨범이 된다. 바꾸는 건 **악기뿐**이다.

---

# 4. ⚠ 수노에 넣기 전 체크

`TK_MUSIC.md` 「수노 사용법」의 규칙 그대로다:

1. **실존 조직명 금지** — 야마구치구미 · 14K 등. 가사의 조직은 전부 가상이다
   (쿠로나와카이 · 신흥파 · 구환 · Corvino Outfit · Ashgrove Firm)
2. **실존 인물 · 실제 사건 금지**
3. 등급은 성인용(M) — 거친 표현은 되지만 **특정 민족·국가를 범죄와 등치시키지 않는다.**
   캐릭터는 국가 출신이 아니라 **도시 출신**이다
4. **곡 제목에 기존 아티스트 이름을 쓰지 않는다.** 스타일 칸에도 마찬가지 —
   위 블록들이 전부 "장르 + 악기 + 물리 묘사"로만 되어 있는 이유다
5. 언어별 곡은 **번역이 아니다.** 각 도시 캐릭터 시점에서 따로 쓴다

---

# 5. 뽑고 나서 할 일

```
Audio/Title/      메인 테마 · 캐릭터 셀렉      (S1 · S5)
Audio/Stages/     도시별 전투 루프 · 보스       (S2 · S6 · S7)
Audio/UI/         클리어 스팅어 · 게임오버      (S8)
Audio/_Inbox/     수노에서 막 받은 원본 (미정리)
```

폴더는 이미 turf-king 레포에 있다(`Audio/README.md` 참조). 지금은 전부 비어 있다.

- **루프곡(S2·S5·S6)은 수노 결과를 그대로 못 쓴다.** 페이드인/아웃이 붙어 나온다 —
  DAW 에서 마디 단위로 자르고 크로스페이드해서 90초 심리스 루프로 만들어야 한다
- **게임에 넣는 파일은 mp3 160kbps 로 줄인다.** deother 사이트의 `turfking-theme.mp3` ·
  `timewars-theme.mp3` 가 그 기준으로 각 5MB 다 (원본 WAV → ffmpeg)
- 웹사이트(`turfking.html`)에 새 배경음을 쓰려면 `assets/turfking-theme.mp3` 를 교체하면 된다.
  로직은 `page.js` 의 `pSetupAudio()` 공용이라 손댈 게 없다
