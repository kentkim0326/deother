// pages-i18n.js — 게임 상세 페이지(밀리버스 / 킹덤워즈) 번역
//
// ※ 여기 적힌 수치와 기능은 각 프로젝트의 CLAUDE.md / 인수인계 문서에서 확인한 것만 쓴다.
//   추측으로 적으면 공모전 심사에서 확인당했을 때 나머지 주장까지 의심받는다.
//   확인 안 된 항목은 아예 쓰지 않는다.
//
// 언어: 우선 ko / en 두 가지. 공모전(국내·국제) 제출에 쓰이는 언어가 이 둘이라
//      먼저 정확하게 만들고, 나머지는 내용이 굳은 뒤에 옮긴다.

// 게임별 소개/추가 영상. 배열이 비면 영상 자리가 통째로 숨는다. 자막은 언어를 탄다.
const PAGE_VIDEOS = {
  miliverse: [
    { id: "0ojvADdKOqA", ko: "밀리버스 소개 영상",        en: "Milliverse — introduction" },
    { id: "A4Gcz7P1bPE", ko: "밀리버스 — 2분 소개 (영어)", en: "Milliverse — 2-minute overview" },
    { id: "g10AAzbmNEQ", ko: "밀리버스 v2.4 업데이트",     en: "Milliverse — v2.4 update", vertical: true },
  ],
  kingdom: [],
  // 개발 중이라 '트레일러'가 아니라 '테스트 영상'이다. 라벨을 과장하지 않는다 (함정 2).
  // [1],[2],[3] 은 킹덤워즈 세계관 영어 주제가. P_LAYOUT.kwonline 이 배치를 정한다.
  // O423 은 쇼츠(세로)라 vertical:true — 9:16 프레임으로 나온다. 나머지 둘은 가로.
  timewars: [
    { id: "33ZYQTc1_n8", ko: "타임 워즈 — 게임플레이", en: "Time Wars — gameplay" },
  ],
  kwonline: [
    { id: "oobYlh5wgXg", ko: "킹덤워즈 온라인 — 테스트 영상",     en: "Kingdom Wars Online — test footage" },
    { id: "O423zD04If4", ko: "킹덤워즈 — 주제가 (영어, 쇼츠)",   en: "Kingdom Wars — theme song (English, short)", vertical: true },
    { id: "_OoWRRC9ozI", ko: "킹덤워즈 — 주제가 (영어 록)",       en: "Kingdom Wars — theme song (English rock)" },
    { id: "4A2KKRz7ux8", ko: "킹덤워즈 — 주제가 (영어)",         en: "Kingdom Wars — theme song (English)" },
  ],
  soomba: [
    { id: "vM_dYTpVA3U", ko: "숨바 — 게임 영상", en: "Soomba — gameplay footage" },
  ],
  // 대표 소개(founder). 세 편 다 2026-08-14 에 YouTube oEmbed 로 제목·채널을 확인했다.
  //   WL6M1ZloXMs — 채널 '세바시 강연 Sebasi Talk', 154회
  //   14eDA7WNLy8 — 채널 'Kent Kim', AOF Film Festival 2017 수상작
  //   yy3G9LZrPf8 — 채널 'Fighting Nations', 「225 Attack Moves」 ← 대표님이 직접 지목(2026-08-14).
  //     처음엔 wWYc2a0v0Ys(첫 언리얼 빌드, 화면 녹화)를 넣었는데 창 캡처라 화질이 떨어진다.
  //     대표님이 지목한 영상이 우선이다.
  founder: [
    { id: "WL6M1ZloXMs", ko: "세바시 154회 — 젊을 때 '미치지 않으면' 미친 것이다", en: "Sebasi 154 — a talk on going all in while you're young" },
    { id: "14eDA7WNLy8", ko: "ELEGERE — 2017 헐리우드 AOF 단편영화제 호러 부문 수상작", en: "ELEGERE — winner, horror category, AOF Film Festival 2017 (Hollywood)" },
    { id: "yy3G9LZrPf8", ko: "Fighting Nations — 225가지 공격 기술", en: "Fighting Nations — 225 attack moves" },
  ],
};


// 행사 목록 항목별 공식 사이트. 키는 "섹션index.항목index" 로, 언어와 무관하게 같은 자리를 가리킨다
// (모든 언어가 en 과 같은 구조라 인덱스가 일치한다 — 번역을 손볼 때 이 전제를 깨지 말 것).
// 없는 항목은 링크 없이 텍스트로 나온다. 아래 주소는 2026-08-16 에 검색으로 하나씩 확인했다.
// 확인 못 한 것(BGM Game Expo·스마일게이트 IndieGo·NC VARCO)은 일부러 비워 뒀다 —
// 죽은 링크는 없느니만 못하다.
const GSTAR   = "https://www.gstar.or.kr/";
const TGS_JP  = "https://tgs.cesa.or.jp/";
const TGS_TW  = "https://tgs.tca.org.tw/";
const NEXTFEST= "https://partner.steamgames.com/doc/marketing/upcoming_events/nextfest";
const AMAZE   = "https://a-maze.net/";
const IAB     = "https://indiearenabooth.de/";
const GC_DEV  = "https://dev.gamescom.global/";
const GC_ASIA = "https://gamescom.asia/";
const GC_LATAM= "https://latam.gamescom.global/en/";
const DOTD    = "https://www.dayofthedevs.org/";
const BITSUM  = "https://bitsummit.org/en/";
const BIC     = "https://bicfest.org/";
const DEVGAMM = "https://devgamm.com/";
const INDIECADE = "https://www.indiecade.com/";

const PAGE_LIST_LINKS = {
  festivals: {
    // 1. 2026 하반기 — 지금 접수하는 것
    "3.0": "https://gameinstitute.tencent.com/awards2026",   // GWB Game Awards
    "3.1": "https://expoeva.com/",                            // EVA Play
    "3.2": "https://tgs.tca.org.tw/indie_award_e.php",        // Taipei Indie Game Award
    "3.3": NEXTFEST, "3.4": "https://mobidictum.com/", "3.5": "https://igf.com/",
    "3.6": DEVGAMM, "3.7": GSTAR, "3.8": "https://www.demospree.com/",
    /* 1.9 BGM Game Expo — 공식 주소 확인 못 함 */
    "3.10": DOTD, "3.11": BITSUM, "3.12": TGS_TW, "3.13": "https://pitchyagame.com/", "3.14": AMAZE,

    // 2. 2026 하반기 — 열리는 자리
    "4.0": TGS_JP, "4.1": "https://west.paxsite.com/", "4.2": NEXTFEST,
    "4.3": GC_ASIA, "4.4": GSTAR, "4.5": DEVGAMM,
    /* 2.6 BGM Game Expo */

    // 3. 2027 상반기 접수 — 1~3월
    "5.0": NEXTFEST, "5.1": GC_LATAM, "5.2": "https://neowizquest.com/",
    "5.3": AMAZE, "5.4": TGS_JP, "5.5": IAB, "5.6": GSTAR,

    // 4. 2027 상반기 접수 — 4~6월
    "6.0": DOTD,
    /* 4.1 스마일게이트 IndieGo — 회차마다 페이지가 달라 상시 주소가 없다 */
    "6.2": IAB, "6.3": TGS_JP, "6.4": "https://www.yogscast.games/tinyteams", "6.5": GSTAR,
    "6.6": "https://www.indiecraft.or.kr/",
    /* 4.7 NC VARCO — 회차별 공모라 상시 주소가 없다 */
    "6.8": GC_DEV, "6.9": BIC, "6.10": GSTAR, "6.11": GC_ASIA,
    "6.12": INDIECADE, "6.13": "https://www.gigdc.or.kr/",
    "6.14": "https://www.ludonarracon.com/", "6.15": GSTAR,

    // 5. 2027 개최 일정
    "7.0": TGS_TW, "7.1": INDIECADE, "7.2": NEXTFEST, "7.3": "https://gdconf.com/",
    "7.4": GC_LATAM, "7.5": AMAZE, "7.6": BITSUM,
    "7.7": "https://conference.digitaldragons.pl/", "7.8": NEXTFEST,
    "7.9": "https://www.developconference.com/", "7.10": BIC,
    "7.11": "https://www.gamescom.global/", "7.12": TGS_JP, "7.13": GSTAR,

    // 6. 마감이 없는 상시 트랙
    "8.0": "https://www.bigindiepitch.com/",
    "8.1": "https://www.unrealengine.com/megagrants",
    "8.2": "https://indie.live-expo.games/en/",
    "8.3": "https://west.paxsite.com/en-us/features/pax-rising-showcase.html",
    "8.4": GC_DEV, "8.5": "https://partner.steamgames.com/",
  },
};


// 목록 항목 앞에 붙는 개최국 국기. 키는 링크표와 같은 "섹션.항목" 이다.
// 온라인·상시 트랙은 나라가 없으므로 🌐 를 쓴다.
const PAGE_LIST_FLAGS = {
  festivals: {
    // 1. 2026 하반기 접수
    "3.0": "🇨🇳", "3.1": "🇦🇷", "3.2": "🇹🇼", "3.3": "🌐", "3.4": "🇹🇷", "3.5": "🇺🇸",
    "3.6": "🌐", "3.7": "🇰🇷", "3.8": "🌐", "3.9": "🇨🇳", "3.10": "🌐", "3.11": "🇯🇵",
    "3.12": "🇹🇼", "3.13": "🌐", "3.14": "🇩🇪",
    // 2. 2026 하반기 개최
    "4.0": "🇯🇵", "4.1": "🇺🇸", "4.2": "🌐", "4.3": "🇹🇭", "4.4": "🇰🇷", "4.5": "🌐", "4.6": "🇨🇳",
    // 3. 2027 1~3월 접수
    "5.0": "🌐", "5.1": "🇧🇷", "5.2": "🇰🇷", "5.3": "🇩🇪", "5.4": "🇯🇵", "5.5": "🇩🇪", "5.6": "🇰🇷",
    // 4. 2027 4~6월 접수
    "6.0": "🌐", "6.1": "🇰🇷", "6.2": "🇩🇪", "6.3": "🇯🇵", "6.4": "🌐", "6.5": "🇰🇷",
    "6.6": "🇰🇷", "6.7": "🇰🇷", "6.8": "🇩🇪", "6.9": "🇰🇷", "6.10": "🇰🇷", "6.11": "🇹🇭",
    "6.12": "🇺🇸", "6.13": "🇰🇷", "6.14": "🌐", "6.15": "🇰🇷",
    // 5. 2027 개최 일정
    "7.0": "🇹🇼", "7.1": "🇺🇸", "7.2": "🌐", "7.3": "🇺🇸", "7.4": "🇧🇷", "7.5": "🇩🇪",
    "7.6": "🇯🇵", "7.7": "🇵🇱", "7.8": "🌐", "7.9": "🇬🇧", "7.10": "🇰🇷", "7.11": "🇩🇪",
    "7.12": "🇯🇵", "7.13": "🇰🇷",
    // 6. 상시 트랙 — 전부 온라인이거나 여러 도시를 도는 것
    "8.0": "🌐", "8.1": "🌐", "8.2": "🌐", "8.3": "🇺🇸", "8.4": "🇩🇪", "8.5": "🌐",
  },
};

const PAGES = {

  /* ===================== 밀리버스 ===================== */
  miliverse: {
    ko: {
      title: "밀리버스", tagline: "실제 세계 지도 위에서 벌어지는 Web3 영토 전략",
      intro: "지구의 실제 좌표를 격자로 잘라 타일로 만든다. 타일을 사고, 무기와 병사를 배치하고, 다른 플레이어의 땅을 빼앗는다. 전투의 결과는 그 지역의 실제 날씨와 시각에 영향을 받는다.",
      sections: [
        {
          h: "왜 이렇게 만들었나",
          p: [
            "2022년에 메타버스 플랫폼을 만들었다가 접었다. 그때 배운 것이 하나 있다 — 엔드골이 없으면 사람이 남지 않는다. 아무리 잘 만든 공간이어도 '무엇을 이루러 가는 곳'이 아니면 두 번째 방문이 없었다.",
            "그래서 다음 것은 목표가 분명한 것으로 만들었다. 땅을 갖는다. 빼앗긴다. 되찾는다. 지도 위에 내 색이 늘어나는 것이 눈에 보인다. 로블록스와 마인크래프트가 살아남은 이유가 그것이라고 본다.",
            "그리고 가상의 지도를 새로 그리지 않았다. 서울, 도쿄, 워싱턴, 베이징 — 실제로 존재하는 도시의 실제 좌표를 쓴다. 내가 사는 동네가 게임판이 되면 애착이 달라진다."
          ]
        },
        {
          h: "전쟁은 어떻게 일어나는가",
          p: [
            "타일에는 세 가지 상태가 있다. 주인 없는 빈 땅은 그냥 사면 된다. 주인은 있지만 무장하지 않은 땅은 민병대가 막아선다. 무기와 병사가 배치된 땅은 그 전력만큼 되받아친다.",
            "공격은 내 타일에서 출격한다. 병사가 없으면 전력이 0이고, 맨몸으로 나가면 반드시 진다. 그리고 지면 출격했던 타일을 빼앗긴다 — 공격에는 대가가 따른다.",
            "혼자 커지는 것도 마냥 유리하지 않다. 상대보다 타일이 많을수록 공격에 불이익이 붙는다(2배 보유 시 -6%, 10배면 -25%). 1등이 판을 굳히지 못하게 하는 장치다.",
            "그래서 뭉친다. 동맹끼리 연합 작전을 걸면 1등 플레이어의 여러 타일을 한 번의 공격으로 함께 친다. 빼앗은 땅은 각자의 전투 기여도에 따라 자동으로 나뉜다. 대신 작전이 완전히 실패하면 참가자 전원이 출격 타일을 잃는다 — 같이 이기고 같이 진다."
          ],
          list: {
            h: "전투에 들어가는 값",
            items: [
              "병사와 무기의 등급·수량 — 전력의 기본",
              "민병대 보정 — 무방비 타일 공격은 공격자가 유리(민병 전력은 공격자의 65~95%)",
              "강자 페널티 — 보유 타일 격차가 클수록 공격 불리",
              "날씨·낮밤 — 아래 실시간 데이터 항목 참고. 공격·방어 양쪽에 대칭 적용"
            ]
          }
        },
        {
          h: "실시간 데이터 — 실제 날씨가 전투에 들어온다",
          p: [
            "전장 상태를 계산할 때 그 타일의 실제 좌표로 공개 기상 데이터를 불러온다. 게임 안의 날씨가 지금 그 도시의 날씨다.",
            "가져오는 값은 기온·풍향·풍속·기압·습도·일출일몰 시각이고, 여기에 천문 계산으로 낮과 밤, 달의 위상을 더한다. 이 값들은 화면에 파형과 나침반, 태양 궤적으로 표시된다.",
            "중요한 설계 하나 — 날씨와 낮밤 보정은 공격·방어 양쪽에 똑같이 적용한다. 한쪽만 유리하게 하면 시차가 곧 실력이 되어, 사는 지역에 따라 유불리가 갈린다. 그건 게임이 아니라 지리다."
          ],
          list: {
            h: "쓰는 공개 데이터",
            items: [
              "Open-Meteo — 기온·풍향·풍속·기압·습도·일출일몰. 무료 공개 기상 API",
              "천문 계산 — 낮/밤 판정, 달의 위상",
              "OpenFreeMap — 지도 타일. OpenStreetMap 기반 공개 지도 데이터",
              "실제 도시 좌표 — 서울·도쿄·워싱턴·베이징 등의 위경도를 격자로 분할"
            ]
          }
        },
        {
          h: "무기와 군사 배치",
          p: [
            "무기와 병사는 각각 타일에 배치한다. 어느 타일에 얼마를 두느냐가 곧 방어선이다. 전선은 넓히기 쉽지만 지키기는 어렵다 — 모든 타일을 무장할 자원은 없다.",
            "원클릭 자동무장을 넣은 이유가 이것이다. 5단계 티어 중 하나를 고르면 빈 땅에 무기와 병사를 한꺼번에 배치한다. 새로 온 사람이 '무엇을 얼마나 놓아야 하는지' 몰라 이탈하는 것을 막기 위한 장치다.",
            "자동전투는 적을 공격하는 데만 쓴다. 도시 1·2·3위 지휘관을 찍어 표적으로 고정하면 모든 공격이 그 한 명에게 쏟아진다 — 판을 쥔 왕부터 끌어내리는 집중포화다. 빈 땅 자동 확장은 뺐다 — 넣었더니 경제가 무너졌다."
          ]
        },
        {
          h: "하는 방법",
          list: {
            h: "",
            items: [
              "도시를 고르고 지도에서 빈 타일을 드래그해 산다",
              "산 타일에 무기와 병사를 배치한다 (원클릭 자동무장으로 한 번에 가능)",
              "상대 타일을 골라 공격한다. 출격 타일에는 병사가 있어야 한다",
              "자동전투를 켜고 도시 1·2·3위 지휘관을 표적으로 고정하면 그 영토를 집중해 노린다. 1위를 끌어내리면 5,000, 2위 3,000, 3위 2,000 골드의 현상금이 붙는다",
              "공격받으면 즉시 알림이 온다. 알림을 누르면 공격당한 도시로 바로 이동하고 상대가 표적으로 자동 고정돼, 한 번에 반격한다",
              "리더보드는 30초마다 갱신되며 순위가 오르면 ▲, 내리면 ▼, 새로 들면 🆕로 실시간 표시된다"
            ]
          }
        },
        {
          h: "AI와 공개 데이터 활용",
          p: [
            "이 항목은 확인된 것만 적는다.",
            "개발 전 과정에 AI 코딩 도구를 쓴다. 1인 개발로 Next.js + Supabase 기반의 실시간 멀티플레이 게임을 운영 중인 것이 그 결과다. 전투 계산, 실시간 동기화, 다국어(4개 언어, 270개 이상 항목)를 모두 이 방식으로 만들었다.",
            "게임 안의 이미지 자산은 생성형 AI로 만든다.",
            "공개 데이터는 위 '실시간 데이터' 항목에 적은 그대로다 — Open-Meteo 기상 데이터와 OpenStreetMap 계열 지도 데이터를 실제 게임 로직에 넣는다. 장식이 아니라 전투 결과를 바꾸는 입력값이다."
          ]
        }
      ],
      slides: [
        "서울 도심을 격자로 자른 타일. 국기 색으로 소유가 드러난다",
        "전장 실시간 콕핏 — Open-Meteo 기상값과 천문 계산을 그대로 띄운다",
        "자동 전투. 도시 1·2·3위 지휘관을 표적으로 고정해 집중포화한다",
        "전투 알고리즘 대시보드 — 10개 변수와 계산식을 플레이어에게 공개한다",
        "전장이 되는 실제 도시 50곳. 도시마다 홈 어드밴티지가 다르다",
        "글로벌 리더보드. 30초마다 순위가 ▲▼🆕로 갱신되고, 지휘관마다 국기와 거점 도시가 붙는다",
        "지도 위 액션 — 자동배치·동맹·연합작전·거래소·포로수용소",
        "접속 보상. 연속 접속이 길수록 지급이 커진다"
      ],
      cta: "밀리버스 해보기", back: "디아더로 돌아가기"
    },

    en: {
      title: "Milliverse", tagline: "Web3 territory strategy played on the real world map",
      intro: "The Earth is cut into a grid of tiles by real coordinates. You buy tiles, station weapons and troops on them, and take ground from other players. What happens in a battle depends on the actual weather and time of day at that location.",
      sections: [
        {
          h: "Why it is built this way",
          p: [
            "We built two metaverse platforms in 2022 and had to take them down. One lesson stayed: without an end goal, people don't come back. However well made the space was, if it wasn't somewhere you go to achieve something, there was no second visit.",
            "So the next thing had a goal you could see. You take ground. You lose it. You take it back. Your colour spreads across a map. That, we think, is why Roblox and Minecraft lasted.",
            "And we didn't draw a fictional map. Seoul, Tokyo, Washington, Beijing — real coordinates of real cities. When your own neighbourhood is the board, you play differently."
          ]
        },
        {
          h: "How a war starts",
          p: [
            "A tile is in one of three states. Unowned ground is simply bought. Owned but undefended ground is held by militia. Ground with weapons and troops fights back with everything stationed there.",
            "Attacks launch from your own tile. With no soldiers your power is zero, and going in bare loses every time. Lose, and the tile you launched from goes to the defender — attacking costs something.",
            "Growing alone doesn't win either. The more tiles you hold relative to your opponent, the worse your attacks perform (−6% at twice their holdings, −25% at ten times). It keeps first place from freezing the board.",
            "So players band together. Allies launch a coop raid to take several of the top player's tiles in a single strike, and the captured ground is split automatically by each player's combat contribution. But if the raid fails outright, every participant loses the tile they launched from — win together, lose together."
          ],
          list: {
            h: "What goes into a battle",
            items: [
              "Grade and quantity of troops and weapons — the base of your power",
              "Militia modifier — attacking undefended ground favours the attacker (militia sits at 65–95% of attacker power)",
              "Dominance penalty — the bigger your lead, the weaker your attacks",
              "Weather and day/night — see the live data section. Applied symmetrically to both sides"
            ]
          }
        },
        {
          h: "Live data — real weather enters the fight",
          p: [
            "When battlefield conditions are calculated, open weather data is pulled for that tile's real coordinates. The weather in the game is the weather in that city right now.",
            "Temperature, wind direction and speed, pressure, humidity and sunrise/sunset come in, and astronomical calculation adds day or night and the phase of the moon. These are drawn on screen as waveforms, a wind compass and a sun path.",
            "One design decision matters here: weather and day/night modifiers apply equally to attacker and defender. Favour one side and the time zone you live in becomes your skill level. That isn't a game, that's geography."
          ],
          list: {
            h: "Open data in use",
            items: [
              "Open-Meteo — temperature, wind, pressure, humidity, sunrise and sunset. A free public weather API",
              "Astronomical calculation — day/night state, moon phase",
              "OpenFreeMap — map tiles, built on OpenStreetMap data",
              "Real city coordinates — Seoul, Tokyo, Washington, Beijing and others, divided into a grid"
            ]
          }
        },
        {
          h: "Weapons and deployment",
          p: [
            "Weapons and soldiers are placed tile by tile. Where you put them is your front line. Territory is easy to widen and hard to hold — there is never enough to arm everything.",
            "That is why one-click auto-deploy exists. Pick one of five tiers and weapons and troops are distributed across your empty ground at once. New players used to leave because they didn't know what to place or how much.",
            "Auto-battle only attacks enemies. Lock the city's #1, #2 or #3 commander as your focus target and every attack pours into that one ruler — concentrated fire to bring the king down first. Automatic expansion into empty land was removed — with it in, the economy collapsed."
          ]
        },
        {
          h: "How to play",
          list: {
            h: "",
            items: [
              "Pick a city and drag across empty tiles on the map to buy them",
              "Station weapons and troops on what you bought (auto-deploy does it in one click)",
              "Choose an enemy tile and attack. The tile you launch from must hold soldiers",
              "Turn on auto-battle and lock the city's #1, #2 or #3 commander as your focus target to concentrate on their territory. Toppling #1 pays 5,000 gold, #2 pays 3,000, #3 pays 2,000",
              "You get an instant alert the moment you are attacked — tap it to jump to the attacked city with the attacker auto-locked as your target, so revenge takes one tap",
              "The leaderboard refreshes every 30 seconds, marking each commander ▲ up, ▼ down or 🆕 new in real time"
            ]
          }
        },
        {
          h: "AI and open data",
          p: [
            "Only what we can point to.",
            "AI coding tools are used throughout development. The result is that one person runs a live multiplayer game on Next.js and Supabase — battle resolution, real-time sync and four-language localisation with over 270 entries were all built this way.",
            "Image assets in the game are made with generative AI.",
            "Open data is exactly what the live data section describes — Open-Meteo weather and OpenStreetMap-derived map data feed the actual game logic. Not decoration: inputs that change the outcome of a fight."
          ]
        }
      ],
      slides: [
        "Downtown Seoul cut into a tile grid — ownership shows as national flags",
        "Live battlefield cockpit — Open-Meteo readings and astronomical values, shown raw",
        "Auto-battle with focus-fire — lock the city's top commander and pour every attack into their territory",
        "Combat algorithm dashboard — all ten variables and the formula, open to the player",
        "The fifty real cities you can fight over, each with its own home advantage",
        "Global leaderboard, refreshed every 30s with ▲▼🆕 rank changes — every commander carries a flag and a home city",
        "Map actions — auto-deploy, alliances, joint ops, marketplace, POW camp",
        "Daily check-in. The longer the streak, the larger the payout"
      ],
      cta: "Play Milliverse", back: "Back to Deother"
    },
    "zh": {"title":"Milliverse","tagline":"在真实世界地图上展开的 Web3 领土争夺策略","intro":"以真实坐标将地球切分成网格地块。购买地块，在上面部署武器与士兵，从其他玩家手中夺取领土。战斗的走向，取决于该地点当下的真实天气与昼夜时刻。","sections":[{"h":"为什么这样设计","p":["2022 年我们做过两个元宇宙平台，最后不得不关停。有一条教训留了下来——没有终极目标，人就不会再回来。空间做得再精致，只要它不是一个“为了达成某件事而去”的地方，就没有第二次到访。","所以下一款作品有了看得见的目标。你占领土地，你失去它，你再夺回来。你的颜色在地图上不断蔓延。我们认为，Roblox 和 Minecraft 能长盛不衰，正是这个原因。","而且我们没有画一张虚构的地图。首尔、东京、华盛顿、北京——都是真实城市的真实坐标。当你自己居住的街区变成棋盘，你玩起来的心态就不一样了。"]},{"h":"战争如何打响","p":["地块有三种状态。无主之地直接买下即可。有主但未设防的土地由民兵据守。部署了武器与士兵的土地，会以驻扎的全部战力反击。","进攻从你自己的地块出击。没有士兵，战力就是零，赤手空拳上阵必输无疑。一旦落败，出击的那块地便归防守方所有——进攻是有代价的。","一味独自壮大也赢不了。相对对手而言你持有的地块越多，进攻表现就越差（是对手两倍时 −6%，十倍时 −25%）。这能防止头名把局面彻底锁死。","于是玩家们联手。盟友发起联合突袭，一击拿下头名玩家的多块地块，夺得的土地会按各人的战斗贡献自动分配。但如果突袭彻底失败，每位参与者都会失去各自的出击地块——同赢，同输。"],"list":{"h":"决定战斗的要素","items":["士兵与武器的等级和数量——战力的基础","民兵修正——进攻未设防的土地对攻方有利（民兵战力为攻方的 65–95%）","强者惩罚——领先优势越大，进攻越弱","天气与昼夜——详见下方实时数据一节。对攻守双方对称适用"]}},{"h":"实时数据——真实天气进入战斗","p":["计算战场状态时，会按该地块的真实坐标拉取公开气象数据。游戏里的天气，就是那座城市此刻的天气。","获取的数值包括气温、风向、风速、气压、湿度以及日出日落时刻，再通过天文计算加入昼夜判定与月相。这些数据在画面上以波形、风向罗盘和太阳轨迹呈现。","这里有一个重要的设计决定：天气与昼夜修正对攻守双方一视同仁。若只偏向一方，你所在的时区就成了你的实力，胜负便由居住地决定。那不是游戏，那是地理。"],"list":{"h":"所用的公开数据","items":["Open-Meteo——气温、风、气压、湿度、日出与日落。免费公开的气象 API","天文计算——昼夜状态、月相","OpenFreeMap——地图瓦片，基于 OpenStreetMap 数据构建","真实城市坐标——首尔、东京、华盛顿、北京等城市的经纬度，被切分成网格"]}},{"h":"武器与军事部署","p":["武器与士兵都要逐块部署。你把它们放在哪里，哪里就是你的防线。领土易扩张而难守——你永远没有足够的资源去武装每一块地。","一键自动武装正是为此而设。在五个档位中选一个，武器与士兵便会一次性铺满你的空地。以前新玩家常因为不知道该放什么、放多少而流失。","自动战斗只用于进攻敌人。锁定城市第 1、第 2 或第 3 名指挥官作为集火目标，所有进攻便全数倾泻到这一个统治者身上——集中火力，先把王拉下马。自动扩张占领空地的功能被移除了——一旦加入，经济就会崩溃。"]},{"h":"玩法","list":{"h":"","items":["选择一座城市，在地图上拖选空地块即可买下","在买下的地块上部署武器与士兵（一键自动武装即可一次搞定）","选择敌方地块发起进攻。出击的地块上必须有士兵","开启自动战斗，锁定城市第 1、第 2 或第 3 名指挥官作为集火目标，集中攻打其领土。扳倒第 1 名可获 5,000 金币，第 2 名 3,000，第 3 名 2,000","一旦遭到攻击，你会立即收到提醒——点击提醒即可跳转到被攻击的城市，攻击者会被自动锁定为目标，一键即可反击","排行榜每 30 秒刷新一次，实时为每位指挥官标注 ▲ 上升、▼ 下降或 🆕 新上榜"]}},{"h":"AI 与公开数据的运用","p":["这里只写能拿出证据的内容。","整个开发过程都在使用 AI 编程工具。其结果是：一个人就能在 Next.js 与 Supabase 上运营一款实时多人游戏——战斗结算、实时同步，以及超过 270 条词条的四种语言本地化，全都是用这种方式做出来的。","游戏中的图像素材由生成式 AI 制作。","公开数据正如实时数据一节所述——Open-Meteo 气象数据与源自 OpenStreetMap 的地图数据被输入实际的游戏逻辑。它们不是装饰，而是能改变战斗结果的输入值。"]}],"slides":["首尔市中心被切分成网格地块——所有权以国旗显示","实时战场座舱——Open-Meteo 读数与天文数值，原样呈现","集火自动战斗——锁定城市头名指挥官，把每一次进攻都倾泻到其领土上","战斗算法仪表盘——全部 10 个变量与计算公式，向玩家公开","可供争夺的 50 座真实城市，每座都有各自的主场优势","全球排行榜，每 30 秒刷新，以 ▲▼🆕 标注排名变动——每位指挥官都带有国旗和据点城市","地图上的操作——自动武装、结盟、联合作战、交易所、战俘营","每日签到。连续签到越久，奖励越丰厚"],"cta":"开玩 Milliverse","back":"返回 Deother"},
    "ja": {"title":"Milliverse","tagline":"現実の世界地図の上で繰り広げるWeb3領土ストラテジー","intro":"地球を実際の座標でグリッドに切り分け、タイルにします。タイルを買い、そこに武器と兵士を配置し、他のプレイヤーから領土を奪います。戦闘の結果は、その場所の実際の天候と時刻によって変わります。","sections":[{"h":"なぜこう作ったのか","p":["2022年にメタバースのプラットフォームを2つ作り、閉じることになりました。一つの教訓が残りました——エンドゴールがなければ、人は戻ってきません。どれだけよくできた空間でも、「何かを成し遂げに行く場所」でなければ、二度目の訪問はありませんでした。","だから次に作るものは、目に見える目標のあるものにしました。領土を取る。奪われる。取り返す。自分の色が地図の上に広がっていく。ロブロックスやマインクラフトが生き残ったのは、それが理由だと私たちは考えています。","そして架空の地図は描きませんでした。ソウル、東京、ワシントン、北京——実在する都市の実際の座標を使います。自分の住む街が盤面になると、遊び方が変わります。"]},{"h":"戦争はどう始まるのか","p":["タイルには3つの状態があります。持ち主のいない土地は、ただ買うだけです。持ち主はいても無防備な土地は、民兵が守っています。武器と兵士が配置された土地は、そこにある戦力すべてで反撃してきます。","攻撃は自分のタイルから出撃します。兵士がいなければ戦力はゼロで、丸腰で挑めば必ず負けます。負ければ、出撃したタイルは防御側のものになります——攻撃には代償が伴います。","一人で大きくなるだけでも勝てません。相手より多くのタイルを持つほど、攻撃の成績は悪くなります(相手の2倍の保有で−6%、10倍で−25%)。首位が盤面を固めてしまうのを防ぐ仕組みです。","だからプレイヤーは団結します。同盟同士で連合作戦を仕掛ければ、首位プレイヤーの複数のタイルを一度の攻撃でまとめて叩けます。奪った土地は、各自の戦闘貢献度に応じて自動的に分けられます。ただし作戦が完全に失敗すれば、参加者全員が出撃タイルを失います——ともに勝ち、ともに負けるのです。"],"list":{"h":"戦闘に入る要素","items":["兵士と武器の等級・数量——戦力の基本","民兵補正——無防備な土地への攻撃は攻撃側が有利(民兵の戦力は攻撃側の65–95%)","支配ペナルティ——保有タイルの差が大きいほど攻撃は不利","天候・昼夜——下のリアルタイムデータの項目を参照。攻守の両方に対称的に適用"]}},{"h":"リアルタイムデータ——実際の天候が戦闘に入る","p":["戦場の状態を計算するとき、そのタイルの実際の座標で公開気象データを取得します。ゲーム内の天候は、いまその都市の天候そのものです。","取り込むのは気温・風向・風速・気圧・湿度・日の出日の入りの時刻で、さらに天文計算で昼夜と月の満ち欠けを加えます。これらは画面上に波形、風向コンパス、太陽の軌道として表示されます。","ここで重要な設計が一つあります——天候と昼夜の補正は、攻撃側と防御側に等しく適用されます。片方だけ有利にすれば、住んでいるタイムゾーンがそのまま実力になり、住む地域によって有利不利が分かれてしまいます。それはゲームではなく、地理です。"],"list":{"h":"使っている公開データ","items":["Open-Meteo——気温・風・気圧・湿度・日の出日の入り。無料で公開されている気象API","天文計算——昼夜の判定、月の満ち欠け","OpenFreeMap——地図タイル。OpenStreetMapのデータに基づく","実際の都市の座標——ソウル・東京・ワシントン・北京などの緯度経度をグリッドに分割"]}},{"h":"武器と軍事配置","p":["武器と兵士は、タイルごとに配置します。どこに置くかが、そのまま防衛線になります。領土は広げるのは簡単でも、守るのは難しい——すべてのタイルを武装できるだけの資源はありません。","ワンクリック自動武装があるのはそのためです。5段階のティアから一つを選べば、空いている土地に武器と兵士を一度に配置します。新しく来た人が「何をどれだけ置けばいいのか」分からずに離脱するのを防ぐための仕組みです。","自動戦闘は、敵を攻撃するためだけに使います。都市の1位・2位・3位の指揮官をフォーカスターゲットに固定すれば、すべての攻撃がその一人に注がれます——盤面を握る王からまず引きずり下ろす集中砲火です。空き地への自動拡張は外しました——入れてみたら経済が崩れたからです。"]},{"h":"遊び方","list":{"h":"","items":["都市を選び、地図で空いているタイルをドラッグして買います","買ったタイルに武器と兵士を配置します(ワンクリック自動武装なら一度で完了します)","相手のタイルを選んで攻撃します。出撃するタイルには兵士がいなければなりません","自動戦闘をオンにして、都市の1位・2位・3位の指揮官をフォーカスターゲットに固定すると、その領土を集中して狙います。1位を引きずり下ろせば5,000、2位は3,000、3位は2,000ゴールドの懸賞金が付きます","攻撃されると即座に通知が届きます——通知をタップすれば攻撃された都市へすぐに移動し、相手が自動でターゲットに固定されるので、反撃はワンタップで済みます","リーダーボードは30秒ごとに更新され、順位が上がれば▲、下がれば▼、新しく入れば🆕でリアルタイムに表示されます"]}},{"h":"AIと公開データの活用","p":["ここには、確認できることだけを記します。","開発の全過程でAIコーディングツールを使っています。その結果、一人でNext.jsとSupabaseによるリアルタイムマルチプレイゲームを運営しています——戦闘計算、リアルタイム同期、4言語(270項目以上)のローカライズは、すべてこの方法で作りました。","ゲーム内の画像アセットは、生成AIで作っています。","公開データは、上の「リアルタイムデータ」の項目に書いたそのままです——Open-Meteoの気象データとOpenStreetMap系の地図データを、実際のゲームロジックに入れています。装飾ではなく、戦闘の結果を変える入力値です。"]}],"slides":["ソウル都心をタイルのグリッドに切り分ける——所有は国旗で示されます","リアルタイム戦場コックピット——Open-Meteoの計測値と天文計算の値をそのまま表示します","集中砲火の自動戦闘——都市の首位指揮官を固定し、すべての攻撃をその領土に注ぎます","戦闘アルゴリズムのダッシュボード——10個の変数と計算式をプレイヤーに公開します","戦場となる実在の50都市。都市ごとにホームアドバンテージが異なります","グローバルリーダーボード。30秒ごとに▲▼🆕で順位が更新され、指揮官ごとに国旗と拠点都市が付きます","地図上のアクション——自動配置・同盟・連合作戦・取引所・捕虜収容所","デイリーログイン。連続ログインが長いほど、報酬が大きくなります"],"cta":"Milliverseをプレイする","back":"Deotherに戻る"},
    "es": {"title":"Milliverse","tagline":"Estrategia de territorio Web3 sobre el mapa del mundo real","intro":"La Tierra se divide en una cuadrícula de casillas según coordenadas reales. Compras casillas, despliegas armas y tropas sobre ellas y arrebatas territorio a otros jugadores. El resultado de un combate depende del clima real y de la hora del día en ese lugar.","sections":[{"h":"Por qué está hecho así","p":["En 2022 creamos dos plataformas de metaverso y tuvimos que cerrarlas. Nos quedó una lección: sin una meta final, la gente no vuelve. Por bien hecho que estuviera el espacio, si no era un lugar al que ir a lograr algo, no había una segunda visita.","Así que lo siguiente tuvo una meta que podías ver. Conquistas territorio. Lo pierdes. Lo recuperas. Tu color se extiende por el mapa. Eso, creemos, es por lo que Roblox y Minecraft perduraron.","Y no dibujamos un mapa ficticio. Seúl, Tokio, Washington, Pekín: coordenadas reales de ciudades reales. Cuando tu propio barrio es el tablero, juegas de otra manera."]},{"h":"Cómo empieza una guerra","p":["Una casilla está en uno de tres estados. El territorio sin dueño simplemente se compra. El territorio con dueño pero sin defensa lo protege una milicia. El territorio con armas y tropas responde con todo lo que tiene desplegado.","Los ataques se lanzan desde una casilla propia. Sin soldados tu poder es cero, y entrar desarmado pierde siempre. Si pierdes, la casilla desde la que atacaste pasa al defensor: atacar tiene un precio.","Crecer en solitario tampoco garantiza la victoria. Cuantas más casillas tengas frente a tu rival, peor rinden tus ataques (−6% con el doble de sus casillas, −25% con diez veces). Así se evita que el primer puesto congele la partida.","Por eso los jugadores se unen. Los aliados lanzan un asalto cooperativo para arrebatar varias casillas del jugador líder en un solo golpe, y el territorio capturado se reparte automáticamente según la contribución en combate de cada uno. Pero si el asalto fracasa por completo, todos los participantes pierden la casilla desde la que atacaron: se gana juntos y se pierde juntos."],"list":{"h":"Qué entra en un combate","items":["El grado y la cantidad de tropas y armas: la base de tu poder","Modificador de milicia: atacar territorio sin defensa favorece al atacante (la milicia se sitúa en el 65–95% del poder del atacante)","Penalización por dominio: cuanto mayor sea tu ventaja, más débiles son tus ataques","Clima y ciclo día-noche: consulta la sección de datos en tiempo real. Se aplica de forma simétrica a ambos bandos"]}},{"h":"Datos en tiempo real: el clima real entra en el combate","p":["Al calcular las condiciones del campo de batalla, se obtienen datos meteorológicos públicos para las coordenadas reales de esa casilla. El clima dentro del juego es el clima que hay ahora mismo en esa ciudad.","Se incorporan la temperatura, la dirección y velocidad del viento, la presión, la humedad y las horas de amanecer y atardecer, y un cálculo astronómico añade el día o la noche y la fase de la luna. Estos valores se representan en pantalla como formas de onda, una brújula de viento y una trayectoria solar.","Aquí importa una decisión de diseño: los modificadores de clima y de ciclo día-noche se aplican por igual al atacante y al defensor. Si favoreces a un bando, la zona horaria en la que vives se convierte en tu nivel de habilidad. Eso no es un juego, es geografía."],"list":{"h":"Datos públicos que utilizamos","items":["Open-Meteo: temperatura, viento, presión, humedad, amanecer y atardecer. Una API meteorológica pública y gratuita","Cálculo astronómico: estado de día/noche, fase de la luna","OpenFreeMap: teselas de mapa, basadas en datos de OpenStreetMap","Coordenadas de ciudades reales: Seúl, Tokio, Washington, Pekín y otras, divididas en una cuadrícula"]}},{"h":"Armas y despliegue","p":["Las armas y los soldados se colocan casilla por casilla. Donde los pongas está tu línea de frente. El territorio es fácil de ampliar y difícil de defender: nunca hay suficiente para armarlo todo.","Por eso existe el despliegue automático con un clic. Eliges uno de cinco niveles y las armas y las tropas se reparten de golpe por tu territorio vacío. Antes los jugadores nuevos abandonaban porque no sabían qué colocar ni en qué cantidad.","El combate automático solo ataca a enemigos. Fija como objetivo prioritario al comandante n.º 1, n.º 2 o n.º 3 de la ciudad y todos los ataques se concentran en ese único líder: fuego concentrado para derribar antes al rey. La expansión automática hacia territorio vacío se eliminó: con ella, la economía se venía abajo."]},{"h":"Cómo se juega","list":{"h":"","items":["Elige una ciudad y arrastra sobre las casillas vacías del mapa para comprarlas","Despliega armas y tropas en lo que has comprado (el despliegue automático lo hace con un clic)","Elige una casilla enemiga y ataca. La casilla desde la que lanzas el ataque debe tener soldados","Activa el combate automático y fija como objetivo prioritario al comandante n.º 1, n.º 2 o n.º 3 de la ciudad para concentrarte en su territorio. Derribar al n.º 1 paga 5,000 de oro; el n.º 2, 3,000; el n.º 3, 2,000","Recibes un aviso instantáneo en cuanto te atacan: tócalo para saltar a la ciudad atacada con el atacante ya fijado como tu objetivo, de modo que la venganza está a un solo toque","La clasificación se actualiza cada 30 segundos y marca a cada comandante en tiempo real con ▲ si sube, ▼ si baja o 🆕 si es nuevo"]}},{"h":"IA y datos públicos","p":["Solo lo que podemos demostrar.","Usamos herramientas de programación con IA en todo el desarrollo. El resultado es que una sola persona mantiene en marcha un juego multijugador en tiempo real sobre Next.js y Supabase: la resolución de combates, la sincronización en tiempo real y la localización a cuatro idiomas con más de 270 entradas se construyeron todos así.","Los recursos de imagen del juego se crean con IA generativa.","Los datos públicos son exactamente los que describe la sección de datos en tiempo real: los datos meteorológicos de Open-Meteo y los datos cartográficos derivados de OpenStreetMap alimentan la lógica real del juego. No son decoración: son entradas que cambian el resultado de un combate."]}],"slides":["El centro de Seúl dividido en una cuadrícula de casillas: la propiedad se muestra con banderas nacionales","Cabina del campo de batalla en tiempo real: lecturas de Open-Meteo y valores astronómicos, mostrados sin filtrar","Combate automático con fuego concentrado: fija al comandante más fuerte de la ciudad y vuelca todos los ataques sobre su territorio","Panel del algoritmo de combate: las 10 variables y la fórmula, a la vista del jugador","Las 50 ciudades reales por las que puedes luchar, cada una con su propia ventaja local","Clasificación global, actualizada cada 30 s con cambios de puesto ▲▼🆕: cada comandante lleva una bandera y una ciudad de origen","Acciones en el mapa: despliegue automático, alianzas, operaciones conjuntas, mercado y campo de prisioneros","Recompensa diaria por conexión. Cuanto más larga sea la racha, mayor es el pago"],"cta":"Jugar a Milliverse","back":"Volver a Deother"},
    "pt": {"title":"Milliverse","tagline":"Estratégia de território Web3 jogada sobre o mapa do mundo real","intro":"A Terra é dividida numa grelha de tiles a partir de coordenadas reais. Compras tiles, colocas armas e tropas neles e tomas território a outros jogadores. O que acontece num combate depende do clima real e da hora do dia nesse local.","sections":[{"h":"Porque o fizemos assim","p":["Construímos duas plataformas de metaverso em 2022 e tivemos de as encerrar. Ficou uma lição: sem um objetivo final, as pessoas não voltam. Por muito bem feito que fosse o espaço, se não era um sítio onde se vai para alcançar alguma coisa, não havia segunda visita.","Por isso, a coisa seguinte teve um objetivo que se vê. Conquistas território. Perde-lo. Reconquista-lo. A tua cor espalha-se pelo mapa. É por isso, achamos nós, que o Roblox e o Minecraft duraram.","E não desenhámos um mapa fictício. Seul, Tóquio, Washington, Pequim — coordenadas reais de cidades reais. Quando é o teu próprio bairro que é o tabuleiro, jogas de outra maneira."]},{"h":"Como começa uma guerra","p":["Um tile está num de três estados. O território sem dono compra-se sem mais. O território com dono mas indefeso é guardado por uma milícia. O território com armas e tropas contra-ataca com tudo o que lá está colocado.","Os ataques partem de um tile teu. Sem soldados, o teu poder é zero, e entrar desarmado perde sempre. Se perderes, o tile de onde partiste passa para o defensor — atacar tem um custo.","Crescer sozinho também não ganha. Quantos mais tiles tiveres em relação ao adversário, pior rendem os teus ataques (−6% com o dobro do que ele tem, −25% com dez vezes mais). É o que impede o primeiro lugar de cristalizar o jogo.","Por isso, os jogadores juntam-se. Aliados lançam um ataque conjunto para tomar vários tiles do jogador no topo num só golpe, e o território capturado é dividido automaticamente pela contribuição de cada um no combate. Mas se o ataque falhar por completo, todos os participantes perdem o tile de onde partiram — ganha-se juntos, perde-se juntos."],"list":{"h":"O que entra num combate","items":["Grau e quantidade de tropas e armas — a base do teu poder","Modificador de milícia — atacar território indefeso favorece o atacante (a milícia fica em 65–95% do poder do atacante)","Penalização de domínio — quanto maior a tua vantagem, mais fracos os teus ataques","Clima e ciclo dia-noite — ver a secção de dados em tempo real. Aplicado simetricamente aos dois lados"]}},{"h":"Dados em tempo real — o clima real entra no combate","p":["Quando as condições do campo de batalha são calculadas, buscam-se dados meteorológicos abertos para as coordenadas reais desse tile. O clima no jogo é o clima nessa cidade neste momento.","Entram temperatura, direção e velocidade do vento, pressão, humidade e as horas do nascer e do pôr do sol, e o cálculo astronómico acrescenta o dia ou a noite e a fase da lua. Tudo isto é desenhado no ecrã em forma de ondas, uma bússola de vento e a trajetória do sol.","Há aqui uma decisão de design que importa: os modificadores de clima e de ciclo dia-noite aplicam-se de igual forma a atacante e a defensor. Se favorecêssemos um dos lados, o fuso horário onde vives passaria a ser o teu nível de perícia. Isso não é um jogo, é geografia."],"list":{"h":"Dados abertos em uso","items":["Open-Meteo — temperatura, vento, pressão, humidade, nascer e pôr do sol. Uma API meteorológica pública e gratuita","Cálculo astronómico — estado de dia/noite, fase da lua","OpenFreeMap — tiles de mapa, assentes em dados do OpenStreetMap","Coordenadas de cidades reais — Seul, Tóquio, Washington, Pequim e outras, divididas numa grelha"]}},{"h":"Armas e posicionamento","p":["As armas e os soldados colocam-se tile a tile. Onde os pões é a tua linha da frente. O território é fácil de alargar e difícil de manter — nunca há o suficiente para armar tudo.","É por isso que existe o posicionamento automático com um clique. Escolhes um de cinco níveis e as armas e as tropas distribuem-se pelo teu território vazio de uma só vez. Os novos jogadores costumavam desistir por não saberem o que colocar nem quanto.","O combate automático só ataca inimigos. Fixa o comandante nº 1, nº 2 ou nº 3 da cidade como alvo prioritário e todos os ataques recaem sobre esse único líder — fogo concentrado para derrubar primeiro o rei. A expansão automática para território vazio foi retirada — com ela, a economia ruía."]},{"h":"Como se joga","list":{"h":"","items":["Escolhe uma cidade e arrasta sobre os tiles vazios no mapa para os comprar","Coloca armas e tropas no que compraste (o posicionamento automático faz isto com um clique)","Escolhe um tile inimigo e ataca. O tile de onde partes tem de ter soldados","Liga o combate automático e fixa o comandante nº 1, nº 2 ou nº 3 da cidade como alvo prioritário para te concentrares no território dele. Derrubar o nº 1 rende 5,000 de ouro, o nº 2 rende 3,000, o nº 3 rende 2,000","Recebes um alerta instantâneo no momento em que és atacado — toca nele para saltares para a cidade atacada com o atacante já fixado como teu alvo, para que a vingança seja um só toque","A tabela de classificação atualiza-se a cada 30 segundos, assinalando cada comandante com ▲ a subir, ▼ a descer ou 🆕 novo em tempo real"]}},{"h":"IA e dados abertos","p":["Apenas o que podemos comprovar.","Usamos ferramentas de programação com IA em todo o desenvolvimento. O resultado é uma pessoa só a manter um jogo multijogador ativo em Next.js e Supabase — a resolução dos combates, a sincronização em tempo real e a localização em quatro línguas com mais de 270 entradas foram todas feitas desta forma.","Os recursos de imagem do jogo são criados com IA generativa.","Os dados abertos são exatamente o que a secção de dados em tempo real descreve — os dados meteorológicos da Open-Meteo e os dados de mapa derivados do OpenStreetMap alimentam a própria lógica do jogo. Não são decoração: são entradas que alteram o desfecho de um combate."]}],"slides":["O centro de Seul dividido numa grelha de tiles — a posse mostra-se através de bandeiras nacionais","Cockpit do campo de batalha em tempo real — leituras da Open-Meteo e valores astronómicos, mostrados em bruto","Combate automático com fogo concentrado — fixa o comandante no topo da cidade e despeja todos os ataques no território dele","Painel do algoritmo de combate — as dez variáveis e a fórmula, abertas ao jogador","As cinquenta cidades reais por que podes lutar, cada uma com a sua própria vantagem em casa","Tabela de classificação global, atualizada a cada 30s com mudanças de posição ▲▼🆕 — cada comandante traz uma bandeira e uma cidade de origem","Ações no mapa — posicionamento automático, alianças, operações conjuntas, mercado, campo de prisioneiros","Registo diário. Quanto maior a sequência, maior a recompensa"],"cta":"Jogar Milliverse","back":"Voltar à Deother"},
    "fr": {"title":"Milliverse","tagline":"Stratégie territoriale Web3 sur la carte du monde réel","intro":"La Terre est découpée en une grille de tuiles selon des coordonnées réelles. Vous achetez des tuiles, y déployez armes et troupes, et prenez du terrain aux autres joueurs. L'issue d'un combat dépend de la météo réelle et de l'heure du jour à cet endroit.","sections":[{"h":"Pourquoi c'est conçu ainsi","p":["En 2022, nous avons construit deux plateformes métavers que nous avons dû fermer. Une leçon est restée : sans objectif final, les gens ne reviennent pas. Aussi bien conçu soit l'espace, s'il n'était pas un lieu où l'on va pour accomplir quelque chose, il n'y avait pas de deuxième visite.","Alors le projet suivant a eu un objectif visible. On gagne du terrain. On le perd. On le reprend. Votre couleur s'étend sur une carte. C'est, selon nous, ce qui a fait durer Roblox et Minecraft.","Et nous n'avons pas dessiné une carte fictive. Séoul, Tokyo, Washington, Pékin — les coordonnées réelles de villes réelles. Quand votre propre quartier devient le plateau de jeu, vous jouez autrement."]},{"h":"Comment éclate une guerre","p":["Une tuile se trouve dans l'un de trois états. Un terrain sans propriétaire s'achète tout simplement. Un terrain possédé mais sans défense est tenu par une milice. Un terrain doté d'armes et de troupes riposte avec toute la force qui y est déployée.","Les attaques partent de votre propre tuile. Sans soldats, votre puissance est nulle, et partir à mains nues, c'est perdre à tous les coups. Si vous perdez, la tuile d'où vous êtes parti revient au défenseur — attaquer a un prix.","Grandir seul ne suffit pas non plus. Plus vous détenez de tuiles par rapport à votre adversaire, moins vos attaques sont efficaces (−6% avec le double de ses possessions, −25% à dix fois plus). Cela empêche le premier de figer la partie.","Alors les joueurs s'unissent. Des alliés lancent un raid coopératif pour prendre plusieurs tuiles du meilleur joueur en une seule frappe, et le terrain capturé est réparti automatiquement selon la contribution au combat de chacun. Mais si le raid échoue complètement, chaque participant perd la tuile d'où il est parti — on gagne ensemble, on perd ensemble."],"list":{"h":"Ce qui entre dans un combat","items":["Le grade et le nombre de troupes et d'armes — la base de votre puissance","Modificateur de milice — attaquer un terrain sans défense avantage l'attaquant (la milice se situe à 65–95% de la puissance de l'attaquant)","Pénalité de domination — plus votre avance est grande, plus vos attaques faiblissent","Météo et cycle jour-nuit — voir la section données en temps réel. Appliqué symétriquement aux deux camps"]}},{"h":"Données en temps réel — la vraie météo entre dans le combat","p":["Quand les conditions du champ de bataille sont calculées, des données météo ouvertes sont récupérées pour les coordonnées réelles de la tuile. La météo dans le jeu, c'est la météo de cette ville en ce moment même.","Température, direction et vitesse du vent, pression, humidité et heures de lever et coucher du soleil sont intégrées, et un calcul astronomique y ajoute le jour ou la nuit et la phase de la lune. Ces valeurs sont affichées à l'écran sous forme de courbes, d'une boussole des vents et d'une trajectoire solaire.","Un choix de conception compte ici : les modificateurs de météo et de cycle jour-nuit s'appliquent également à l'attaquant et au défenseur. Avantagez un camp et le fuseau horaire où vous vivez devient votre niveau de jeu. Ce n'est pas un jeu, c'est de la géographie."],"list":{"h":"Données ouvertes utilisées","items":["Open-Meteo — température, vent, pression, humidité, lever et coucher du soleil. Une API météo publique et gratuite","Calcul astronomique — état jour/nuit, phase de la lune","OpenFreeMap — tuiles de carte, fondées sur les données OpenStreetMap","Coordonnées de villes réelles — Séoul, Tokyo, Washington, Pékin et d'autres, découpées en grille"]}},{"h":"Armes et déploiement","p":["Armes et soldats se placent tuile par tuile. Là où vous les postez se dessine votre ligne de front. Un territoire est facile à étendre et difficile à tenir — on n'a jamais de quoi tout armer.","C'est pourquoi le déploiement automatique en un clic existe. Choisissez l'un des cinq paliers et armes et troupes se répartissent d'un coup sur vos terrains vides. Les nouveaux joueurs partaient parce qu'ils ne savaient pas quoi placer ni en quelle quantité.","Le combat automatique ne sert qu'à attaquer les ennemis. Verrouillez le commandant n° 1, n° 2 ou n° 3 de la ville comme cible prioritaire et chaque attaque se déverse sur ce seul dirigeant — un tir concentré pour faire tomber le roi en premier. L'expansion automatique sur les terrains vides a été retirée — avec elle, l'économie s'effondrait."]},{"h":"Comment jouer","list":{"h":"","items":["Choisissez une ville et glissez sur les tuiles vides de la carte pour les acheter","Déployez armes et troupes sur ce que vous avez acheté (le déploiement automatique le fait en un clic)","Choisissez une tuile ennemie et attaquez. La tuile d'où vous partez doit contenir des soldats","Activez le combat automatique et verrouillez le commandant n° 1, n° 2 ou n° 3 de la ville comme cible prioritaire pour vous concentrer sur son territoire. Renverser le n° 1 rapporte 5,000 d'or, le n° 2 rapporte 3,000, le n° 3 rapporte 2,000","Vous recevez une alerte instantanée dès qu'on vous attaque — touchez-la pour aller directement à la ville attaquée, l'attaquant automatiquement verrouillé comme cible, si bien que la vengeance ne prend qu'une touche","Le classement se rafraîchit toutes les 30 secondes, signalant chaque commandant ▲ en hausse, ▼ en baisse ou 🆕 nouveau en temps réel"]}},{"h":"IA et données ouvertes","p":["Uniquement ce que nous pouvons démontrer.","Des outils de codage par IA sont utilisés tout au long du développement. Résultat : une seule personne fait tourner un jeu multijoueur en direct sur Next.js et Supabase — la résolution des combats, la synchronisation en temps réel et la localisation en quatre langues avec plus de 270 entrées ont toutes été réalisées ainsi.","Les ressources graphiques du jeu sont créées par IA générative.","Les données ouvertes sont exactement celles décrites dans la section données en temps réel — la météo Open-Meteo et les données cartographiques issues d'OpenStreetMap alimentent la logique de jeu elle-même. Pas de la décoration : des entrées qui changent l'issue d'un combat."]}],"slides":["Le centre de Séoul découpé en grille de tuiles — la propriété apparaît sous forme de drapeaux nationaux","Cockpit de champ de bataille en direct — relevés Open-Meteo et valeurs astronomiques, affichés bruts","Combat automatique avec tir concentré — verrouillez le meilleur commandant de la ville et déversez chaque attaque sur son territoire","Tableau de bord de l'algorithme de combat — les dix variables et la formule, ouverts au joueur","Les cinquante villes réelles que vous pouvez vous disputer, chacune avec son propre avantage du terrain","Classement mondial, rafraîchi toutes les 30 s avec les changements de rang ▲▼🆕 — chaque commandant porte un drapeau et une ville d'origine","Actions sur la carte — déploiement automatique, alliances, opérations conjointes, marché, camp de prisonniers","Connexion quotidienne. Plus la série est longue, plus la récompense est grande"],"cta":"Jouer à Milliverse","back":"Retour à Deother"},
    "de": {"title":"Milliverse","tagline":"Web3-Gebietsstrategie auf der echten Weltkarte","intro":"Die Erde wird anhand echter Koordinaten in ein Raster aus Kacheln zerlegt. Du kaufst Kacheln, stationierst Waffen und Truppen darauf und nimmst anderen Spielern Gebiete ab. Was in einem Kampf passiert, hängt vom tatsächlichen Wetter und der Tageszeit an diesem Ort ab.","sections":[{"h":"Warum es so gebaut ist","p":["2022 haben wir zwei Metaverse-Plattformen gebaut und mussten sie wieder abschalten. Eine Lehre blieb: Ohne ein Endziel kommen die Leute nicht zurück. Wie gut der Raum auch gemacht war – wenn er kein Ort war, an dem man etwas erreichen will, gab es keinen zweiten Besuch.","Also bekam das Nächste ein sichtbares Ziel. Du eroberst Gebiet. Du verlierst es. Du holst es dir zurück. Deine Farbe breitet sich über eine Karte aus. Das ist, so glauben wir, der Grund, warum Roblox und Minecraft überdauert haben.","Und wir haben keine erfundene Karte gezeichnet. Seoul, Tokio, Washington, Peking – echte Koordinaten echter Städte. Wenn dein eigenes Viertel zum Spielfeld wird, spielst du anders."]},{"h":"Wie ein Krieg beginnt","p":["Eine Kachel befindet sich in einem von drei Zuständen. Herrenloses Land wird einfach gekauft. Land, das jemandem gehört, aber unverteidigt ist, wird von einer Miliz gehalten. Land mit Waffen und Truppen wehrt sich mit allem, was dort stationiert ist.","Angriffe starten von deiner eigenen Kachel aus. Ohne Soldaten ist deine Stärke null, und wer blank losschlägt, verliert jedes Mal. Verlierst du, geht die Kachel, von der aus du angegriffen hast, an den Verteidiger – ein Angriff hat seinen Preis.","Allein zu wachsen führt auch nicht zum Sieg. Je mehr Kacheln du im Vergleich zu deinem Gegner hältst, desto schlechter wirken deine Angriffe (−6% beim Doppelten seines Besitzes, −25% beim Zehnfachen). Das hindert den Ersten daran, das Spielfeld festzuzurren.","Also schließen sich Spieler zusammen. Verbündete starten einen Koop-Raid, um mehrere Kacheln des Spitzenspielers mit einem einzigen Schlag zu nehmen, und das eroberte Land wird automatisch nach dem Kampfbeitrag jedes Spielers aufgeteilt. Scheitert der Raid jedoch vollständig, verliert jeder Teilnehmer die Kachel, von der aus er angegriffen hat – gemeinsam gewinnen, gemeinsam verlieren."],"list":{"h":"Was in einen Kampf einfließt","items":["Rang und Anzahl von Truppen und Waffen – die Grundlage deiner Stärke","Miliz-Modifikator – der Angriff auf unverteidigtes Land begünstigt den Angreifer (die Miliz liegt bei 65–95% der Angreiferstärke)","Dominanz-Malus – je größer dein Vorsprung, desto schwächer deine Angriffe","Wetter und Tag-Nacht – siehe Abschnitt zu den Echtzeitdaten. Wird symmetrisch auf beide Seiten angewendet"]}},{"h":"Echtzeitdaten – echtes Wetter greift in den Kampf ein","p":["Bei der Berechnung der Schlachtfeldbedingungen werden für die echten Koordinaten dieser Kachel öffentliche Wetterdaten abgerufen. Das Wetter im Spiel ist das Wetter, das gerade jetzt in dieser Stadt herrscht.","Temperatur, Windrichtung und -geschwindigkeit, Luftdruck, Luftfeuchtigkeit sowie Sonnenauf- und -untergang fließen ein, und eine astronomische Berechnung ergänzt Tag oder Nacht und die Mondphase. Diese Werte werden auf dem Bildschirm als Wellenformen, ein Windkompass und eine Sonnenbahn dargestellt.","Eine Design-Entscheidung ist hier wichtig: Wetter- und Tag-Nacht-Modifikatoren gelten für Angreifer und Verteidiger gleichermaßen. Bevorzugt man eine Seite, wird die Zeitzone, in der man lebt, zum eigenen Können. Das ist kein Spiel, das ist Geografie."],"list":{"h":"Verwendete öffentliche Daten","items":["Open-Meteo – Temperatur, Wind, Luftdruck, Luftfeuchtigkeit, Sonnenauf- und -untergang. Eine kostenlose, öffentliche Wetter-API","Astronomische Berechnung – Tag-Nacht-Status, Mondphase","OpenFreeMap – Kartenkacheln, basierend auf OpenStreetMap-Daten","Echte Städtekoordinaten – Seoul, Tokio, Washington, Peking und weitere, in ein Raster unterteilt"]}},{"h":"Waffen und Stationierung","p":["Waffen und Soldaten werden Kachel für Kachel platziert. Wo du sie hinsetzt, ist deine Frontlinie. Gebiet lässt sich leicht ausweiten und schwer halten – es reicht nie, um alles zu bewaffnen.","Dafür gibt es die automatische Stationierung per Klick. Wähle eine von fünf Stufen, und Waffen und Truppen werden auf einen Schlag über dein leeres Land verteilt. Früher sind neue Spieler abgesprungen, weil sie nicht wussten, was sie wo und wie viel platzieren sollten.","Der Auto-Kampf greift ausschließlich Feinde an. Legst du den ersten, zweiten oder dritten Kommandanten der Stadt als Fokusziel fest, ergießt sich jeder Angriff auf diesen einen Herrscher – gebündeltes Feuer, um zuerst den König zu stürzen. Die automatische Expansion in leeres Land wurde entfernt – mit ihr brach die Wirtschaft zusammen."]},{"h":"So wird gespielt","list":{"h":"","items":["Wähle eine Stadt und ziehe auf der Karte über leere Kacheln, um sie zu kaufen","Stationiere Waffen und Truppen auf dem, was du gekauft hast (die automatische Stationierung erledigt das mit einem Klick)","Wähle eine gegnerische Kachel und greife an. Die Kachel, von der aus du angreifst, muss Soldaten enthalten","Schalte den Auto-Kampf ein und lege den ersten, zweiten oder dritten Kommandanten der Stadt als Fokusziel fest, um dich auf sein Gebiet zu konzentrieren. Den Ersten zu stürzen bringt 5,000 Gold, den Zweiten 3,000, den Dritten 2,000","Sobald du angegriffen wirst, erhältst du sofort eine Benachrichtigung – tippe sie an, um direkt in die angegriffene Stadt zu springen, wobei der Angreifer automatisch als dein Ziel festgelegt wird, sodass die Rache nur einen Fingertipp braucht","Die Rangliste aktualisiert sich alle 30 Sekunden und kennzeichnet jeden Kommandanten in Echtzeit mit ▲ für Aufstieg, ▼ für Abstieg oder 🆕 für neu"]}},{"h":"KI und öffentliche Daten","p":["Nur, was wir belegen können.","Während der gesamten Entwicklung kommen KI-Programmierwerkzeuge zum Einsatz. Das Ergebnis: Eine einzige Person betreibt ein Live-Multiplayer-Spiel auf Next.js und Supabase – Kampfauflösung, Echtzeit-Synchronisation und die Lokalisierung in vier Sprachen mit über 270 Einträgen sind allesamt auf diese Weise entstanden.","Die Bild-Assets im Spiel werden mit generativer KI erstellt.","Die öffentlichen Daten sind genau das, was der Abschnitt zu den Echtzeitdaten beschreibt – Open-Meteo-Wetterdaten und aus OpenStreetMap abgeleitete Kartendaten fließen in die eigentliche Spiellogik ein. Keine Deko, sondern Eingabewerte, die den Ausgang eines Kampfes verändern."]}],"slides":["Die Innenstadt von Seoul, zerlegt in ein Kachelraster – der Besitz zeigt sich als Nationalflaggen","Echtzeit-Cockpit des Schlachtfelds – Open-Meteo-Messwerte und astronomische Werte, roh angezeigt","Auto-Kampf mit gebündeltem Feuer – lege den Spitzenkommandanten der Stadt fest und richte jeden Angriff auf sein Gebiet","Dashboard des Kampfalgorithmus – alle 10 Variablen und die Formel, offen für den Spieler","Die 50 echten Städte, um die du kämpfen kannst, jede mit ihrem eigenen Heimvorteil","Globale Rangliste, alle 30 s mit ▲▼🆕-Rangänderungen aktualisiert – jeder Kommandant trägt eine Flagge und eine Heimatstadt","Aktionen auf der Karte – automatische Stationierung, Allianzen, gemeinsame Operationen, Marktplatz, Kriegsgefangenenlager","Tägliches Einchecken. Je länger die Serie, desto größer die Auszahlung"],"cta":"Milliverse spielen","back":"Zurück zu Deother"},
    "ru": {"title":"Milliverse","tagline":"Web3-стратегия за территорию на настоящей карте мира","intro":"Земля нарезана на сетку тайлов по реальным координатам. Вы покупаете тайлы, размещаете на них оружие и войска и отбиваете территорию у других игроков. Исход боя зависит от реальной погоды и времени суток в этом месте.","sections":[{"h":"Почему сделано именно так","p":["В 2022 году мы сделали две метавселенные и вынуждены были их закрыть. Один урок остался: без конечной цели люди не возвращаются. Каким бы хорошим ни было пространство, если это не место, куда идут чего-то добиться, второго визита не было.","Поэтому у следующего проекта была видимая цель. Вы захватываете территорию. Теряете её. Отбиваете обратно. Ваш цвет расползается по карте. Именно поэтому, как мы думаем, продержались Roblox и Minecraft.","И мы не рисовали вымышленную карту. Сеул, Токио, Вашингтон, Пекин — реальные координаты реальных городов. Когда игровым полем становится твой собственный район, играешь иначе."]},{"h":"Как начинается война","p":["Тайл бывает в одном из трёх состояний. Ничейную землю просто покупают. Занятую, но незащищённую землю удерживает ополчение. Земля с оружием и войсками отвечает всей размещённой на ней силой.","Атака начинается с вашего собственного тайла. Без солдат сила равна нулю, и выход с голыми руками всегда проигрывает. Проиграете — тайл, с которого вы атаковали, достанется защитнику: у атаки есть цена.","Расти в одиночку тоже не выигрышно. Чем больше тайлов у вас относительно соперника, тем хуже проходят ваши атаки (−6% при двукратном превосходстве, −25% при десятикратном). Это не даёт лидеру закрепить своё положение на поле.","Поэтому игроки объединяются. Союзники проводят совместный рейд, чтобы одним ударом захватить сразу несколько тайлов лидера, а захваченная территория делится автоматически по боевому вкладу каждого. Но если рейд проваливается полностью, каждый участник теряет тайл, с которого атаковал, — вместе побеждаем, вместе проигрываем."],"list":{"h":"Что входит в расчёт боя","items":["Класс и количество войск и оружия — основа вашей силы","Модификатор ополчения — атака по незащищённой земле выгодна атакующему (сила ополчения составляет 65–95% от силы атакующего)","Штраф за доминирование — чем больше отрыв, тем слабее ваши атаки","Погода и смена дня и ночи — см. раздел о данных в реальном времени. Применяется симметрично к обеим сторонам"]}},{"h":"Данные в реальном времени — реальная погода входит в бой","p":["При расчёте условий на поле боя по реальным координатам тайла загружаются открытые метеоданные. Погода в игре — это погода в том городе прямо сейчас.","Подгружаются температура, направление и скорость ветра, давление, влажность и время восхода и заката, а астрономический расчёт добавляет день или ночь и фазу луны. Всё это отображается на экране в виде волновых графиков, компаса ветра и траектории солнца.","Здесь важно одно проектное решение: модификаторы погоды и смены дня и ночи применяются одинаково к атакующему и защищающемуся. Дай преимущество одной стороне — и твой часовой пояс станет твоим уровнем мастерства. Это не игра, это география."],"list":{"h":"Используемые открытые данные","items":["Open-Meteo — температура, ветер, давление, влажность, восход и закат. Бесплатный публичный метео-API","Астрономический расчёт — определение дня и ночи, фаза луны","OpenFreeMap — картографические тайлы на основе данных OpenStreetMap","Реальные координаты городов — Сеул, Токио, Вашингтон, Пекин и другие, разбитые на сетку"]}},{"h":"Оружие и расстановка","p":["Оружие и солдаты размещаются тайл за тайлом. Где вы их поставите — там и ваша линия фронта. Территорию легко расширять и трудно удерживать: вооружить всё сразу ресурсов никогда не хватает.","Именно для этого есть автоматическая расстановка в один клик. Выберите один из пяти уровней — и оружие с войсками разом распределятся по вашей пустой земле. Раньше новички уходили, потому что не знали, что и в каком количестве ставить.","Автобой только атакует врагов. Зафиксируйте 1-го, 2-го или 3-го командира города как приоритетную цель — и все атаки обрушатся на одного правителя: сосредоточенный огонь, чтобы первым свергнуть короля. Автоматический захват пустой земли убрали — с ним экономика рушилась."]},{"h":"Как играть","list":{"h":"","items":["Выберите город и, проведя по пустым тайлам на карте, купите их","Разместите оружие и войска на купленном (автоматическая расстановка сделает это в один клик)","Выберите вражеский тайл и атакуйте. На тайле, с которого вы атакуете, должны быть солдаты","Включите автобой и зафиксируйте 1-го, 2-го или 3-го командира города как приоритетную цель, чтобы сосредоточиться на его территории. За свержение 1-го дают 5,000 золота, за 2-го — 3,000, за 3-го — 2,000","Как только вас атаковали, приходит мгновенное уведомление — нажмите на него, чтобы перейти в атакованный город с автоматически зафиксированным атакующим в качестве цели, и месть занимает одно нажатие","Таблица лидеров обновляется каждые 30 секунд, отмечая каждого командира в реальном времени: ▲ вверх, ▼ вниз или 🆕 новый"]}},{"h":"ИИ и открытые данные","p":["Только то, что можем подтвердить.","ИИ-инструменты для написания кода используются на всех этапах разработки. Результат — один человек ведёт живую многопользовательскую игру на Next.js и Supabase: расчёт боёв, синхронизация в реальном времени и локализация на четыре языка с более чем 270 строками — всё сделано именно так.","Графические ассеты в игре создаются с помощью генеративного ИИ.","Открытые данные — ровно те, что описаны в разделе о данных в реальном времени: метеоданные Open-Meteo и картографические данные на основе OpenStreetMap питают саму игровую логику. Не украшение, а входные данные, меняющие исход боя."]}],"slides":["Центр Сеула, нарезанный на сетку тайлов, — принадлежность показана государственными флагами","Живая кабина поля боя — показания Open-Meteo и астрономические значения в исходном виде","Автобой с сосредоточенным огнём — зафиксируйте главного командира города и обрушьте все атаки на его территорию","Панель боевого алгоритма — все десять переменных и формула, открытые игроку","Пятьдесят реальных городов, за которые можно сражаться, у каждого своё преимущество родного города","Глобальная таблица лидеров, обновляемая каждые 30 с с изменениями рангов ▲▼🆕, — у каждого командира есть флаг и родной город","Действия на карте — автоматическая расстановка, альянсы, совместные операции, торговая площадка, лагерь для военнопленных","Ежедневный вход. Чем длиннее серия, тем крупнее выплата"],"cta":"Играть в Milliverse","back":"Назад к Deother"},
    "ar": {"title":"Milliverse","tagline":"استراتيجية سيطرة على الأراضي بتقنية Web3 تُلعب على خريطة العالم الحقيقية","intro":"تُقسَّم الأرض إلى شبكة من المربّعات وفق إحداثيات حقيقية. تشتري المربّعات وتنشر عليها الأسلحة والجنود وتنتزع الأرض من اللاعبين الآخرين. ونتيجة أي معركة تتوقف على الطقس الحقيقي والوقت من اليوم في ذلك الموقع.","sections":[{"h":"لماذا بُنيت اللعبة على هذا النحو","p":["أنشأنا منصّتَي ميتافيرس في عام 2022 واضطررنا إلى إغلاقهما. بقي درس واحد: من دون هدف نهائي، لا يعود الناس. فمهما أُتقن تصميم الفضاء، إن لم يكن مكانًا تقصده لتحقّق فيه شيئًا، فلا زيارة ثانية.","لذلك جعلنا المشروع التالي بهدف تراه بعينك. تنتزع أرضًا. تخسرها. تستعيدها. ولونك ينتشر على الخريطة. ونرى أنّ هذا هو سبب صمود Roblox و Minecraft.","ولم نرسم خريطة خيالية. سول وطوكيو وواشنطن وبكين — إحداثيات حقيقية لمدن حقيقية. وحين يصبح حيّك أنت رقعة اللعب، تلعب بطريقة مختلفة."]},{"h":"كيف تندلع الحرب","p":["للمربّع ثلاث حالات. الأرض بلا مالك تُشترى ببساطة. والأرض المملوكة لكن غير المحصّنة تتصدّى لها ميليشيا. أما الأرض التي عليها أسلحة وجنود فتردّ بكل ما نُشر فيها.","تنطلق الهجمات من مربّعك أنت. فمن دون جنود تكون قوتك صفرًا، والدخول أعزل يعني الخسارة في كل مرة. وإذا خسرت، آل المربّع الذي انطلقت منه إلى المدافع — فللهجوم ثمن.","والتوسّع منفردًا لا يضمن الفوز أيضًا. فكلّما زادت مربّعاتك مقارنةً بخصمك، ضعف أداء هجماتك (−6% عند ضعف ما يملك، و−25% عند عشرة أضعافه). وهذا يمنع صاحب المركز الأول من تجميد الرقعة.","لذلك يتحالف اللاعبون. يشنّ الحلفاء غارة مشتركة لانتزاع عدّة مربّعات من اللاعب المتصدّر بضربة واحدة، وتُقسَّم الأرض المستولى عليها تلقائيًا بحسب إسهام كل لاعب في القتال. لكن إذا فشلت الغارة تمامًا، خسر كل مشارك المربّع الذي انطلق منه — تنتصرون معًا وتُهزمون معًا."],"list":{"h":"ما الذي يدخل في المعركة","items":["رتبة الجنود والأسلحة وعددها — أساس قوّتك","معامل الميليشيا — مهاجمة الأرض غير المحصّنة تصبّ في مصلحة المهاجم (قوة الميليشيا تراوح بين 65–95% من قوة المهاجم)","عقوبة الهيمنة — كلّما اتّسع تفوّقك، ضعفت هجماتك","الطقس والليل والنهار — راجع قسم البيانات الحيّة. يُطبَّق بالتساوي على الطرفين"]}},{"h":"البيانات الحيّة — الطقس الحقيقي يدخل المعركة","p":["عند حساب أحوال ساحة المعركة، تُجلب بيانات طقس مفتوحة وفق الإحداثيات الحقيقية لذلك المربّع. فالطقس داخل اللعبة هو طقس تلك المدينة الآن.","تُجلب درجة الحرارة واتجاه الرياح وسرعتها والضغط والرطوبة وأوقات الشروق والغروب، ويضيف الحساب الفلكي الليل أو النهار وطور القمر. وتُرسم هذه القيم على الشاشة بموجات وبوصلة رياح ومسار للشمس.","ثمّة قرار تصميمي مهمّ هنا: معاملات الطقس والليل والنهار تُطبَّق بالتساوي على المهاجم والمدافع. فلو رجّحنا طرفًا، لصارت المنطقة الزمنية التي تعيش فيها هي مستوى مهارتك. وذلك ليس لعبةً، بل جغرافيا."],"list":{"h":"البيانات المفتوحة المستخدمة","items":["Open-Meteo — درجة الحرارة والرياح والضغط والرطوبة والشروق والغروب. واجهة برمجة طقس عامّة مجانية","الحساب الفلكي — حالة الليل والنهار، وطور القمر","OpenFreeMap — مربّعات الخريطة، مبنية على بيانات OpenStreetMap","إحداثيات مدن حقيقية — سول وطوكيو وواشنطن وبكين وغيرها، مقسّمة إلى شبكة"]}},{"h":"الأسلحة والانتشار","p":["تُوضَع الأسلحة والجنود مربّعًا مربّعًا. وموضعها هو خط جبهتك. والأرض يسهل توسيعها ويصعب الحفاظ عليها — إذ لا يكفي ما لديك أبدًا لتسليح كل شيء.","لهذا وُجد الانتشار التلقائي بنقرة واحدة. اختر إحدى الفئات الخمس، فتُوزَّع الأسلحة والجنود على أرضك الفارغة دفعةً واحدة. فقد كان اللاعبون الجدد يغادرون لأنهم لم يعرفوا ماذا يضعون ولا كم.","القتال التلقائي يهاجم الأعداء فقط. ثبّت القائد الأول أو الثاني أو الثالث في المدينة هدفًا مركّزًا، فتنصبّ كل الهجمات على ذلك الحاكم وحده — نيران مركّزة لإسقاط الملك أولًا. أما التوسّع التلقائي في الأرض الفارغة فقد أُزيل — إذ انهار الاقتصاد حين كان موجودًا."]},{"h":"كيف تلعب","list":{"h":"","items":["اختر مدينة واسحب فوق المربّعات الفارغة على الخريطة لشرائها","انشر الأسلحة والجنود على ما اشتريته (يفعل ذلك الانتشار التلقائي بنقرة واحدة)","اختر مربّعًا للعدو وهاجم. ويجب أن يضمّ المربّع الذي تنطلق منه جنودًا","شغّل القتال التلقائي وثبّت القائد الأول أو الثاني أو الثالث في المدينة هدفًا مركّزًا للتركيز على أرضه. إسقاط الأول يمنح 5,000 ذهب، والثاني 3,000، والثالث 2,000","يصلك تنبيه فوري لحظة تعرّضك للهجوم — انقره لتنتقل إلى المدينة المُهاجَمة والمهاجم مثبّت تلقائيًا هدفًا لك، فيكون الانتقام بنقرة واحدة","تتحدّث لوحة الصدارة كل 30 ثانية، مؤشّرةً لكل قائد ▲ للصعود و▼ للهبوط و🆕 للجديد في الوقت الفعلي"]}},{"h":"الذكاء الاصطناعي والبيانات المفتوحة","p":["لا نذكر إلا ما يمكننا إثباته.","تُستخدَم أدوات البرمجة بالذكاء الاصطناعي في مراحل التطوير كلّها. والنتيجة أنّ شخصًا واحدًا يُشغّل لعبة جماعية حيّة على Next.js و Supabase — فحساب المعارك والمزامنة الفورية والتوطين بأربع لغات بأكثر من 270 مدخلًا، بُنيت جميعها بهذه الطريقة.","أما الأصول الصورية في اللعبة فتُصنَع بالذكاء الاصطناعي التوليدي.","والبيانات المفتوحة هي تحديدًا ما وصفه قسم البيانات الحيّة — بيانات طقس Open-Meteo وبيانات خرائط مشتقّة من OpenStreetMap تغذّي منطق اللعبة الفعلي. لا زخرفة: بل مدخلات تغيّر نتيجة المعركة."]}],"slides":["وسط سول مقسّمًا إلى شبكة مربّعات — الملكية تظهر بأعلام الدول","قمرة قيادة حيّة لساحة المعركة — قراءات Open-Meteo والقيم الفلكية معروضة كما هي","قتال تلقائي بنيران مركّزة — ثبّت قائد المدينة المتصدّر واصبب كل هجوم على أرضه","لوحة خوارزمية القتال — المتغيّرات العشرة كلها والمعادلة، مكشوفة للاعب","المدن الخمسون الحقيقية التي يمكنك التنازع عليها، ولكلٍّ ميزة أرضٍ خاصة بها","لوحة صدارة عالمية، تتحدّث كل 30 ثانية بتغيّرات المراتب ▲▼🆕 — لكل قائد علم ومدينة موطن","إجراءات على الخريطة — انتشار تلقائي وتحالفات وعمليات مشتركة وسوق ومعسكر أسرى","تسجيل دخول يومي. وكلّما طالت سلسلة المواظبة، كبُرت المكافأة"],"cta":"جرّب Milliverse","back":"العودة إلى Deother"}
  },

  /* ===================== 킹덤워즈 ===================== */
  kingdom: {
    ko: {
      title: "Kingdom Wars", tagline: "국가를 골라 달을 나눠 갖는 턴제 우주 전략",
      intro: "국가와 사령관을 고르고 달의 49개 섹터를 한 칸씩 빼앗는다. 브라우저에서 바로 돌아가고, 설치가 없다. 화면 아래에는 지금 이 시각의 실제 뉴스가 흐른다.",
      sections: [
        {
          h: "왜 이렇게 만들었나",
          p: [
            "전략 게임은 대개 무겁다. 받고, 깔고, 튜토리얼을 듣고 나서야 첫 판이 시작된다. 그사이에 사람이 떠난다.",
            "그래서 설치를 없앴다. 주소를 누르면 바로 국가 선택 화면이고, 몇 번 누르면 첫 전투다. 게임 전체가 HTML 파일 하나로 돌아간다.",
            "가볍게 만들되 얕게 만들지는 않으려 했다. 연승이 쌓이면 배수가 붙고, 전투마다 등급이 매겨지고, 이겼을 때 유닛이 떨어진다. '한 판만 더'가 걸리는 지점을 의도적으로 설계했다."
          ]
        },
        {
          h: "전쟁은 어떻게 일어나는가",
          p: [
            "달은 7×7, 49개 섹터로 나뉜다. 각 섹터마다 지형과 자원이 다르고, 내 땅과 맞닿은 곳만 공격할 수 있다. 그래서 어디부터 먹느냐가 다음에 갈 수 있는 곳을 정한다.",
            "공격에는 세 가지 방식이 있다. 정면으로 가거나, 우회해서 치거나(+20%), 인접한 여러 칸에서 동시에 조여 들어간다(+15%). 같은 병력이어도 어떻게 들어가느냐로 결과가 갈린다.",
            "전투가 끝나면 등급이 나온다. S·A·B·C 네 단계이고 S는 보상이 두 배다. 이기기만 하는 것과 잘 이기는 것을 구분한다."
          ],
          list: {
            h: "전투에 들어가는 값",
            items: [
              "유닛 구성 — 함선 5종, 메카 5종, 에이스. 등급 N / R / SR / UR",
              "공격 방식 — 정면 · 우회(+20%) · 포위(인접 +15%)",
              "사기 — 부대 상태가 전투력에 반영된다",
              "연승 배수 — 연승당 +8%, 최대 +60%",
              "크리티컬 — 15% 확률로 1.6배"
            ]
          }
        },
        {
          h: "실시간 데이터 — 진짜 뉴스가 흐른다",
          p: [
            "화면 아래 띠에는 지금 이 시각의 실제 뉴스가 지나간다. 플레이어가 고른 언어에 맞춰 해당 언어권 뉴스를 가져온다.",
            "우주 전쟁을 하는 화면 아래로 오늘의 실제 사건이 흐르면, 게임 속 2077년과 지금이 한 줄로 이어진다. 껐다 켜도 세상이 계속 돌아가고 있다는 감각이 남는다.",
            "네트워크가 막히거나 응답이 없을 때를 대비해 우주 관련 대체 뉴스를 준비해두었고, 10분간 캐시해서 같은 요청을 반복하지 않는다."
          ],
          list: {
            h: "쓰는 공개 데이터",
            items: [
              "Google News RSS — 언어별 실시간 뉴스 피드",
              "언어 연동 — 한국어·영어·일본어·중국어 각각의 뉴스권",
              "폴백과 캐시 — 응답이 없을 때의 대체 뉴스, 10분 캐시"
            ]
          }
        },
        {
          h: "무기와 군사 배치",
          p: [
            "함선 5종, 메카 5종, 그리고 에이스 유닛이 있다. 등급은 N·R·SR·UR 네 단계이고, 이기면 유닛이 전리품으로 떨어진다(8% 이상).",
            "자원은 헬륨-3, 코인, 물, 레골리스 네 가지다. 섹터마다 나오는 자원이 달라서, 어느 칸을 먹느냐가 곧 무엇을 더 만들 수 있느냐가 된다.",
            "시작 전력은 전투기 5기와 구축함 2기, 헬륨-3 3,500과 코인 1,500이다. 턴이 끝날 때마다 전투기가 한 기씩 보급된다 — 크게 지고도 다음 판을 시작할 수 있게 하는 최소한의 바닥이다."
          ]
        },
        {
          h: "하는 방법",
          list: {
            h: "",
            items: [
              "국가를 고른다 — 한국, 미국 등",
              "사령관을 고른다. 사령관마다 성격이 다르다",
              "지도에서 내 땅과 맞닿은 섹터를 누른다",
              "보낼 유닛과 공격 방식(정면·우회·포위)을 정하고 출격한다",
              "결과 화면에서 등급과 전리품을 확인하고 턴을 넘긴다",
              "모바일에서는 화면 아래 유닛 바로 유닛을 고른다"
            ]
          }
        },
        {
          h: "AI와 공개 데이터 활용",
          p: [
            "이 항목은 확인된 것만 적는다.",
            "개발 전 과정에 AI 코딩 도구를 쓴다. 게임 로직, 4개 언어 현지화(UI 고정 문구와 게임 데이터 270개 이상을 2계층으로 분리), 자동화 테스트까지 이 방식으로 만들었다.",
            "게임 안의 이미지 자산은 생성형 AI로 만든다.",
            "공개 데이터는 Google News RSS다. 플레이어 언어에 맞춰 실시간 뉴스를 가져와 화면에 흘린다."
          ]
        }
      ],
      cta: "Kingdom Wars 해보기", back: "디아더로 돌아가기"
    },

    en: {
      title: "Kingdom Wars", tagline: "Pick a nation and take the Moon, sector by sector",
      intro: "Choose a nation and a commander, then take the Moon's 49 sectors one at a time. It runs in the browser with nothing to install. Along the bottom of the screen, today's real news scrolls past.",
      sections: [
        {
          h: "Why it is built this way",
          p: [
            "Strategy games are usually heavy. Download, install, sit through a tutorial, and only then does the first match begin. People leave somewhere in there.",
            "So we removed the install. Open the link and you are on the nation select screen; a few clicks later you are in a fight. The whole game runs from a single HTML file.",
            "Light, but we tried not to make it shallow. Win streaks build a multiplier, every battle is graded, and winning drops units. The 'one more round' hook is deliberate."
          ]
        },
        {
          h: "How a war starts",
          p: [
            "The Moon is a 7×7 grid, 49 sectors. Each has its own terrain and resources, and you can only attack what borders ground you already hold. So what you take first decides where you can go next.",
            "There are three ways in: straight ahead, a smart flank (+20%), or closing in from several adjacent sectors at once (+15%). The same force gets different results depending on the approach.",
            "Every battle ends with a grade — S, A, B or C, with S paying double. Winning and winning well are not the same thing."
          ],
          list: {
            h: "What goes into a battle",
            items: [
              "Unit composition — 5 ships, 5 mechs, an ace. Rarity N / R / SR / UR",
              "Approach — direct, smart flank (+20%), surround (+15% from adjacent sectors)",
              "Morale — the state of a force feeds into its combat power",
              "Kill streak — +8% per consecutive win, up to +60%",
              "Critical hits — 15% chance at 1.6×"
            ]
          }
        },
        {
          h: "Live data — real news scrolls past",
          p: [
            "A ticker along the bottom carries actual news from right now, pulled in the language the player selected.",
            "With today's real events running beneath a war fought in space, the game's 2077 and the present sit on one line. Close it and come back, and the world has kept moving.",
            "For blocked networks or dead responses there is a space-news fallback, and results are cached for ten minutes so the same request isn't repeated."
          ],
          list: {
            h: "Open data in use",
            items: [
              "Google News RSS — live news feeds per language",
              "Language-aware — Korean, English, Japanese and Chinese news",
              "Fallback and cache — substitute stories when nothing responds, ten-minute cache"
            ]
          }
        },
        {
          h: "Units and deployment",
          p: [
            "Five ship classes, five mech classes and an ace unit, at four rarities: N, R, SR, UR. Winning drops units as loot at better than 8%.",
            "There are four resources — Helium-3, coins, water and regolith. Sectors yield different ones, so what you take determines what you can build.",
            "You start with five fighters and two destroyers, 3,500 Helium-3 and 1,500 coins, and one fighter arrives at the end of every turn — a floor low enough that a bad defeat doesn't end the run."
          ]
        },
        {
          h: "How to play",
          list: {
            h: "",
            items: [
              "Pick a nation — Korea, the United States and others",
              "Pick a commander; each plays differently",
              "Click a sector on the map that borders your territory",
              "Choose the units to send and the approach — direct, flank or surround — then launch",
              "Read your grade and loot on the result screen, then end the turn",
              "On mobile, units are selected from the bar along the bottom of the screen"
            ]
          }
        },
        {
          h: "AI and open data",
          p: [
            "Only what we can point to.",
            "AI coding tools are used throughout development — game logic, four-language localisation (UI strings and 270-plus game data entries kept in two separate layers) and automated testing were all built this way.",
            "Image assets in the game are made with generative AI.",
            "The open data is Google News RSS: live headlines fetched in the player's language and run across the screen."
          ]
        }
      ],
      cta: "Play Kingdom Wars", back: "Back to Deother"
    },
    "zh": {"title":"Kingdom Wars","tagline":"选择国家，一格一格拿下月球","intro":"选择国家与指挥官，一格一格拿下月球的 49 个区块。它在浏览器里运行，无需安装。屏幕底部，今天的真实新闻滚动而过。","sections":[{"h":"我们为什么这样做","p":["策略游戏通常很重。下载、安装、耐着性子看完教程，第一局才终于开始。人们往往在这中间就离开了。","所以我们去掉了安装。点开链接，你就到了国家选择界面；再点几下，就已经在开打了。整个游戏由一个 HTML 文件运行。","轻，但我们尽力不让它变浅。连胜会积累加成，每场战斗都会评级，获胜会掉落单位。「再来一局」的吸引力，是我们刻意设计的。"]},{"h":"战争如何打响","p":["月球是一张 7×7 的网格，共 49 个区块。每个区块有各自的地形与资源，而你只能进攻与自己已占领土地相邻的区块。所以你先拿下哪里，就决定了下一步能往哪走。","进攻有三种方式：正面强攻、巧妙的侧翼包抄（+20%），或从多个相邻区块同时合围（+15%）。同样的兵力，用不同的打法会得出不同的结果。","每场战斗结束都会给出一个评级——S、A、B 或 C，其中 S 的奖励翻倍。赢，和赢得漂亮，不是一回事。"],"list":{"h":"一场战斗由什么决定","items":["单位构成——5 种战舰、5 种机甲、一名王牌。稀有度 N / R / SR / UR","进攻方式——正面、巧妙侧翼（+20%）、合围（来自相邻区块 +15%）","士气——部队的状态会影响其战斗力","连胜——每连胜一场 +8%，最高 +60%","暴击——15% 概率造成 1.6× 伤害"]}},{"h":"实时数据——真实新闻滚动而过","p":["屏幕底部的滚动条播放着此刻的真实新闻，按玩家所选的语言拉取。","当今天的真实事件在一场太空战争的下方流淌，游戏中的 2077 年与当下便连在了一条线上。关掉再回来，世界依旧在运转。","为应对网络受阻或无响应的情况，我们准备了太空相关的备用新闻，并将结果缓存十分钟，以免重复发起相同的请求。"],"list":{"h":"所用的公开数据","items":["Google News RSS——各语言的实时新闻源","语言联动——韩语、英语、日语与中文各自的新闻圈","备用与缓存——无响应时的替代新闻，十分钟缓存"]}},{"h":"单位与军事部署","p":["5 种战舰、5 种机甲，以及一名王牌单位，分为四个稀有度：N、R、SR、UR。获胜时会以高于 8% 的概率掉落单位作为战利品。","共有四种资源——Helium-3、金币、水与月壤。不同区块产出不同的资源，所以你拿下哪里，就决定了你能造什么。","开局你拥有 5 架战斗机与 2 艘驱逐舰、3,500 单位 Helium-3 与 1,500 金币，并且每回合结束时会补给一架战斗机——这是一条足够低的底线，让一次惨败也不至于终结整局。"]},{"h":"怎么玩","list":{"h":"","items":["选择一个国家——韩国、美国等","选择一名指挥官，每位的打法都不同","在地图上点击一个与你领土相邻的区块","选定要派出的单位与进攻方式——正面、侧翼或合围——然后出击","在结算界面查看评级与战利品，然后结束回合","在手机上，从屏幕底部的单位栏中选择单位"]}},{"h":"AI 与公开数据的运用","p":["这里只写我们能指证的内容。","AI 编程工具贯穿整个开发过程——游戏逻辑、四语言本地化（将 UI 固定文案与 270 多条游戏数据分为两个层级）以及自动化测试，都是用这种方式做出来的。","游戏中的图像素材由生成式 AI 制作。","所用的公开数据是 Google News RSS：按玩家的语言拉取实时新闻，并在屏幕上滚动播放。"]}],"cta":"试玩 Kingdom Wars","back":"返回 Deother"},
    "ja": {"title":"Kingdom Wars","tagline":"国を選び、月をセクターごとに奪っていく","intro":"国と司令官を選び、月の49セクターを一つずつ奪っていきます。ブラウザで動き、インストールは不要です。画面の下では、今日の実際のニュースが流れていきます。","sections":[{"h":"なぜこう作ったのか","p":["ストラテジーゲームはたいてい重いものです。ダウンロードして、インストールして、チュートリアルを聞き終えて、ようやく最初の対戦が始まります。その間に人は離れていきます。","そこで私たちはインストールをなくしました。リンクを開けば国の選択画面で、数回クリックすれば戦闘です。ゲーム全体が一つのHTMLファイルで動きます。","軽く、それでいて浅くならないようにしました。連勝すると倍率が積み上がり、戦闘ごとに戦闘評価がつき、勝てば戦利品がドロップします。「もう一戦だけ」と思わせる仕掛けは意図したものです。"]},{"h":"戦争はどう始まるのか","p":["月は7×7、49のセクターに分かれています。それぞれ地形と資源が異なり、すでに保有している土地に隣接する場所しか攻撃できません。だから最初にどこを取るかが、次にどこへ行けるかを決めます。","攻め方は三つあります。正面から進むか、巧みに側面を突くか(+20%)、隣接する複数のセクターから一斉に締め上げるか(+15%)です。同じ戦力でも、どう攻めるかで結果が変わります。","戦闘はすべて戦闘評価で終わります。S・A・B・Cの四段階で、Sは報酬が二倍です。勝つことと、うまく勝つことは同じではありません。"],"list":{"h":"戦闘に関わる要素","items":["ユニット構成 — 艦船5種、メカ5種、エース。レアリティ N / R / SR / UR","攻め方 — 正面・側面(+20%)・包囲(隣接セクターから+15%)","士気 — 部隊の状態が戦闘力に反映されます","連勝 — 連勝ごとに+8%、最大+60%","クリティカル — 15%の確率で1.6倍"]}},{"h":"リアルタイムデータ — 実際のニュースが流れる","p":["画面下のティッカーには、今この時刻の実際のニュースが流れます。プレイヤーが選んだ言語に合わせて取得します。","宇宙で戦う画面の下に今日の実際の出来事が流れると、ゲームの中の2077年と現在が一本の線でつながります。閉じてまた開いても、世界は動き続けています。","ネットワークが遮断されたり応答がなかったりする場合に備えて宇宙関連の代替ニュースを用意しており、結果を10分間キャッシュして同じリクエストを繰り返しません。"],"list":{"h":"利用している公開データ","items":["Google News RSS — 言語ごとのリアルタイムニュースフィード","言語連動 — 韓国語・英語・日本語・中国語のニュース","フォールバックとキャッシュ — 応答がないときの代替ニュース、10分キャッシュ"]}},{"h":"兵器と軍事配置","p":["艦船5種、メカ5種、そしてエースユニットがあり、レアリティはN・R・SR・URの四段階です。勝てばユニットが戦利品として8%以上の確率でドロップします。","資源はHelium-3、コイン、水、レゴリスの四種類です。セクターごとに産出する資源が異なるため、どこを取るかが何を作れるかを決めます。","開始時は戦闘機5機と駆逐艦2機、Helium-3を3,500、コインを1,500持ちます。そしてターンが終わるたびに戦闘機が1機補給されます — 大敗してもプレイを続けられる最低限の底です。"]},{"h":"遊び方","list":{"h":"","items":["国を選びます — 韓国、アメリカなど","司令官を選びます。司令官ごとに戦い方が異なります","地図で自分の領地に隣接するセクターをクリックします","送るユニットと攻め方(正面・側面・包囲)を決めて出撃します","結果画面で戦闘評価と戦利品を確認し、ターンを終えます","モバイルでは画面下のバーからユニットを選びます"]}},{"h":"AIと公開データの活用","p":["ここには、確認できることだけを書きます。","開発の全過程でAIコーディングツールを使っています。ゲームロジック、4言語のローカライズ(UIの固定文言と270以上のゲームデータを2つの層に分けて管理)、自動テストまで、すべてこの方法で作りました。","ゲーム内の画像アセットは生成AIで作っています。","公開データはGoogle News RSSです。プレイヤーの言語に合わせてリアルタイムのニュースを取得し、画面に流します。"]}],"cta":"Kingdom Wars を遊ぶ","back":"Deother に戻る"},
    "es": {"title":"Kingdom Wars","tagline":"Elige una nación y toma la Luna, sector a sector","intro":"Elige una nación y un comandante, y toma los 49 sectores de la Luna de uno en uno. Funciona en el navegador, sin nada que instalar. En la parte inferior de la pantalla se desliza la noticia real de hoy.","sections":[{"h":"Por qué está hecho así","p":["Los juegos de estrategia suelen ser pesados. Descargar, instalar, aguantar un tutorial y solo entonces empieza la primera partida. La gente se va en algún punto del camino.","Por eso eliminamos la instalación. Abres el enlace y ya estás en la pantalla de selección de nación; unos clics después estás en combate. Todo el juego funciona desde un único archivo HTML.","Ligero, pero intentamos que no fuera superficial. Las rachas de victorias generan un multiplicador, cada batalla recibe una calificación y ganar suelta unidades. El gancho de 'una ronda más' es deliberado."]},{"h":"Cómo empieza una guerra","p":["La Luna es una cuadrícula de 7×7, 49 sectores. Cada uno tiene su propio terreno y recursos, y solo puedes atacar lo que linda con terreno que ya controlas. Así que lo que tomas primero decide adónde puedes ir después.","Hay tres maneras de entrar: de frente, un flanqueo inteligente (+20%) o cerrando desde varios sectores adyacentes a la vez (+15%). La misma fuerza obtiene resultados distintos según el enfoque.","Cada batalla termina con una calificación — S, A, B o C, y la S paga el doble. Ganar y ganar bien no son lo mismo."],"list":{"h":"Qué entra en una batalla","items":["Composición de unidades — 5 naves, 5 mecas, un as. Rareza N / R / SR / UR","Enfoque — directo, flanqueo inteligente (+20%), rodear (+15% desde sectores adyacentes)","Moral — el estado de una fuerza influye en su poder de combate","Racha de victorias — +8% por victoria consecutiva, hasta +60%","Golpes críticos — 15% de probabilidad a 1.6×"]}},{"h":"Datos en vivo — noticias reales se deslizan por la pantalla","p":["Una cinta en la parte inferior lleva noticias reales de este mismo momento, obtenidas en el idioma que el jugador eligió.","Con los sucesos reales de hoy corriendo bajo una guerra librada en el espacio, el 2077 del juego y el presente quedan en una misma línea. Ciérralo y vuelve, y el mundo ha seguido en marcha.","Para redes bloqueadas o respuestas sin datos hay noticias de reserva sobre el espacio, y los resultados se guardan en caché durante diez minutos para no repetir la misma solicitud."],"list":{"h":"Datos abiertos en uso","items":["Google News RSS — fuentes de noticias en vivo por idioma","Adaptado al idioma — noticias en coreano, inglés, japonés y chino","Reserva y caché — noticias sustitutas cuando nada responde, caché de diez minutos"]}},{"h":"Unidades y despliegue","p":["Cinco clases de naves, cinco clases de mecas y una unidad as, en cuatro rarezas: N, R, SR, UR. Ganar suelta unidades como botín con una probabilidad superior al 8%.","Hay cuatro recursos — Helium-3, monedas, agua y regolito. Los sectores producen recursos distintos, así que lo que tomas determina lo que puedes construir.","Empiezas con cinco cazas y dos destructores, 3,500 de Helium-3 y 1,500 monedas, y un caza llega al final de cada turno — un mínimo lo bastante bajo para que una derrota dura no acabe con la partida."]},{"h":"Cómo jugar","list":{"h":"","items":["Elige una nación — Corea, Estados Unidos y otras","Elige un comandante; cada uno se juega de forma diferente","Haz clic en un sector del mapa que linde con tu territorio","Elige las unidades que enviar y el enfoque — directo, flanqueo o rodear — y lanza el ataque","Consulta tu calificación y tu botín en la pantalla de resultados y termina el turno","En móvil, las unidades se seleccionan desde la barra en la parte inferior de la pantalla"]}},{"h":"IA y datos abiertos","p":["Solo lo que podemos demostrar.","Usamos herramientas de programación con IA en todo el desarrollo — la lógica del juego, la localización a cuatro idiomas (textos de UI y más de 270 entradas de datos del juego mantenidos en dos capas separadas) y las pruebas automatizadas se construyeron así.","Los recursos de imagen del juego se crean con IA generativa.","Los datos abiertos son Google News RSS: titulares en vivo obtenidos en el idioma del jugador y mostrados a lo largo de la pantalla."]}],"cta":"Juega a Kingdom Wars","back":"Volver a Deother"},
    "pt": {"title":"Kingdom Wars","tagline":"Escolhe uma nação e conquista a Lua, setor a setor","intro":"Escolhe uma nação e um comandante e conquista, um a um, os 49 setores da Lua. Corre no navegador, sem nada para instalar. Ao longo do fundo do ecrã, passam as notícias reais de hoje.","sections":[{"h":"Porque é feito assim","p":["Os jogos de estratégia costumam ser pesados. Descarregar, instalar, aturar um tutorial e só então começa a primeira partida. É a meio de tudo isto que as pessoas desistem.","Por isso eliminámos a instalação. Abres o link e estás no ecrã de seleção de nação; uns cliques depois, estás em combate. O jogo inteiro corre a partir de um único ficheiro HTML.","Leve, mas tentámos não o tornar superficial. As sequências de vitórias criam um multiplicador, cada batalha recebe uma classificação e vencer faz cair unidades. O gancho do \"só mais uma partida\" é deliberado."]},{"h":"Como começa uma guerra","p":["A Lua é uma grelha 7×7, 49 setores. Cada um tem o seu próprio terreno e recursos, e só podes atacar o que faz fronteira com território que já dominas. Por isso, aquilo que conquistas primeiro decide para onde podes ir a seguir.","Há três formas de entrar: de frente, um flanqueamento inteligente (+20%) ou cercar a partir de vários setores adjacentes ao mesmo tempo (+15%). A mesma força obtém resultados diferentes consoante a abordagem.","Cada batalha termina com uma classificação — S, A, B ou C, sendo que S paga a dobrar. Vencer e vencer bem não são a mesma coisa."],"list":{"h":"O que entra numa batalha","items":["Composição de unidades — 5 naves, 5 mechas, um ás. Raridade N / R / SR / UR","Abordagem — direta, flanqueamento inteligente (+20%), cerco (+15% a partir de setores adjacentes)","Moral — o estado de uma força reflete-se no seu poder de combate","Sequência de vitórias — +8% por vitória consecutiva, até +60%","Golpes críticos — 15% de probabilidade a 1.6×"]}},{"h":"Dados em direto — notícias reais a passar","p":["Uma faixa ao longo do fundo transporta notícias reais deste preciso momento, obtidas na língua que o jogador selecionou.","Com os acontecimentos reais de hoje a correr por baixo de uma guerra travada no espaço, o 2077 do jogo e o presente ficam na mesma linha. Fecha e volta, e o mundo continuou a andar.","Para redes bloqueadas ou respostas em falta, existe um recurso alternativo de notícias sobre o espaço, e os resultados ficam em cache durante dez minutos para não repetir o mesmo pedido."],"list":{"h":"Dados públicos utilizados","items":["Google News RSS — feeds de notícias em direto por língua","Sensível à língua — notícias em coreano, inglês, japonês e chinês","Recurso alternativo e cache — notícias substitutas quando nada responde, cache de dez minutos"]}},{"h":"Unidades e destacamento","p":["Cinco classes de naves, cinco classes de mechas e uma unidade ás, em quatro raridades: N, R, SR, UR. Vencer faz cair unidades como loot a mais de 8%.","Há quatro recursos — Helium-3, moedas, água e regolito. Cada setor produz recursos diferentes, por isso aquilo que conquistas determina o que podes construir.","Começas com cinco caças e dois contratorpedeiros, 3,500 de Helium-3 e 1,500 moedas, e um caça chega ao fim de cada turno — um mínimo baixo o suficiente para que uma derrota pesada não acabe com a partida."]},{"h":"Como jogar","list":{"h":"","items":["Escolhe uma nação — Coreia, Estados Unidos e outras","Escolhe um comandante; cada um joga de forma diferente","Clica num setor do mapa que faça fronteira com o teu território","Escolhe as unidades a enviar e a abordagem — direta, flanco ou cerco — e lança o ataque","Vê a tua classificação e o loot no ecrã de resultados e termina o turno","No telemóvel, as unidades selecionam-se na barra ao longo do fundo do ecrã"]}},{"h":"IA e dados públicos","p":["Apenas aquilo que podemos comprovar.","Usamos ferramentas de programação com IA em todo o desenvolvimento — a lógica do jogo, a localização em quatro línguas (frases de UI e mais de 270 entradas de dados do jogo mantidas em duas camadas separadas) e os testes automatizados foram todos feitos assim.","Os recursos de imagem do jogo são criados com IA generativa.","Os dados públicos são o Google News RSS: notícias em direto obtidas na língua do jogador e feitas passar pelo ecrã."]}],"cta":"Jogar Kingdom Wars","back":"Voltar à Deother"},
    "fr": {"title":"Kingdom Wars","tagline":"Choisissez une nation et prenez la Lune, secteur par secteur","intro":"Choisissez une nation et un commandant, puis prenez les 49 secteurs de la Lune un à un. Le jeu tourne dans le navigateur, sans rien à installer. En bas de l'écran défilent les actualités réelles du jour.","sections":[{"h":"Pourquoi il est conçu ainsi","p":["Les jeux de stratégie sont d'ordinaire lourds. Télécharger, installer, subir un tutoriel, et c'est seulement là que commence la première partie. C'est quelque part en chemin que les gens abandonnent.","Nous avons donc supprimé l'installation. Ouvrez le lien et vous êtes sur l'écran de choix de la nation ; quelques clics plus tard, vous voilà au combat. Le jeu entier tourne à partir d'un seul fichier HTML.","Léger, mais nous avons veillé à ne pas le rendre superficiel. Les séries de victoires font monter un multiplicateur, chaque combat reçoit une note, et gagner fait tomber des unités. Le ressort de la « partie de trop » est voulu."]},{"h":"Comment une guerre commence","p":["La Lune est une grille de 7×7, soit 49 secteurs. Chacun a son propre terrain et ses propres ressources, et vous ne pouvez attaquer que ce qui borde un terrain déjà en votre possession. Ce que vous prenez en premier décide donc de là où vous pourrez aller ensuite.","Il y a trois façons d'entrer : de face, par un flanc habile (+20%), ou en resserrant l'étau depuis plusieurs secteurs adjacents à la fois (+15%). Une même force donne des résultats différents selon l'approche.","Chaque combat se termine par une note — S, A, B ou C, le S payant double. Gagner et bien gagner ne sont pas la même chose."],"list":{"h":"Ce qui entre dans un combat","items":["Composition des unités — 5 vaisseaux, 5 mechs, un as. Rareté N / R / SR / UR","Approche — de face, flanc habile (+20%), encerclement (+15% depuis les secteurs adjacents)","Moral — l'état d'une force influe sur sa puissance de combat","Série de victoires — +8% par victoire consécutive, jusqu'à +60%","Coups critiques — 15% de chances à 1.6×"]}},{"h":"Données en direct — les actualités réelles défilent","p":["Un bandeau en bas de l'écran fait passer les actualités réelles de l'instant présent, tirées dans la langue choisie par le joueur.","Avec les événements réels du jour qui défilent sous une guerre menée dans l'espace, le 2077 du jeu et le présent tiennent sur une seule ligne. Fermez, revenez, et le monde a continué d'avancer.","En cas de réseau bloqué ou de réponse absente, une actualité spatiale de secours prend le relais, et les résultats sont mis en cache pendant dix minutes pour ne pas répéter la même requête."],"list":{"h":"Données ouvertes utilisées","items":["Google News RSS — flux d'actualités en direct par langue","Adapté à la langue — actualités coréennes, anglaises, japonaises et chinoises","Secours et cache — des articles de substitution quand rien ne répond, cache de dix minutes"]}},{"h":"Unités et déploiement","p":["Cinq classes de vaisseaux, cinq classes de mechs et une unité as, en quatre raretés : N, R, SR, UR. Gagner fait tomber des unités en butin, à mieux que 8%.","Il y a quatre ressources — Helium-3, pièces, eau et régolithe. Les secteurs en produisent des différentes, si bien que ce que vous prenez détermine ce que vous pouvez construire.","Vous commencez avec cinq chasseurs et deux destroyers, 3,500 Helium-3 et 1,500 pièces, et un chasseur arrive à la fin de chaque tour — un plancher assez bas pour qu'une lourde défaite ne mette pas fin à la partie."]},{"h":"Comment jouer","list":{"h":"","items":["Choisissez une nation — la Corée, les États-Unis et d'autres","Choisissez un commandant ; chacun se joue différemment","Cliquez sur la carte un secteur qui borde votre territoire","Choisissez les unités à envoyer et l'approche — de face, flanc ou encerclement — puis lancez l'assaut","Lisez votre note de combat et votre butin sur l'écran de résultat, puis terminez le tour","Sur mobile, les unités se sélectionnent depuis la barre en bas de l'écran"]}},{"h":"IA et données ouvertes","p":["Seulement ce que nous pouvons montrer.","Des outils de codage assistés par IA sont utilisés tout au long du développement — la logique du jeu, la localisation en quatre langues (les textes d'interface et plus de 270 entrées de données de jeu tenues dans deux couches distinctes) et les tests automatisés ont tous été construits ainsi.","Les ressources graphiques du jeu sont réalisées avec de l'IA générative.","La donnée ouverte, c'est Google News RSS : des titres d'actualité en direct récupérés dans la langue du joueur et déroulés à l'écran."]}],"cta":"Essayer Kingdom Wars","back":"Retour à Deother"},
    "de": {"title":"Kingdom Wars","tagline":"Eine Nation wählen und den Mond Sektor für Sektor nehmen","intro":"Wählen Sie eine Nation und einen Kommandanten und nehmen Sie die 49 Sektoren des Mondes einen nach dem anderen ein. Es läuft im Browser, ohne Installation. Am unteren Bildschirmrand ziehen die echten Nachrichten von heute vorbei.","sections":[{"h":"Warum es so gebaut ist","p":["Strategiespiele sind meist schwerfällig. Herunterladen, installieren, ein Tutorial über sich ergehen lassen — und erst dann beginnt die erste Partie. Irgendwo dazwischen springen die Leute ab.","Also haben wir die Installation weggelassen. Sie öffnen den Link und stehen auf dem Auswahlbildschirm für die Nation; ein paar Klicks später sind Sie im Gefecht. Das ganze Spiel läuft aus einer einzigen HTML-Datei.","Leicht, aber wir wollten es nicht seicht machen. Siegesserien bauen einen Multiplikator auf, jeder Kampf wird bewertet, und Siege lassen Einheiten fallen. Der Reiz von 'nur noch eine Runde' ist Absicht."]},{"h":"Wie ein Krieg beginnt","p":["Der Mond ist ein 7×7-Raster, 49 Sektoren. Jeder hat sein eigenes Gelände und seine eigenen Ressourcen, und Sie können nur angreifen, was an bereits gehaltenes Gebiet grenzt. Was Sie zuerst nehmen, entscheidet also, wohin Sie als Nächstes gelangen.","Es gibt drei Wege hinein: geradeaus, ein geschickter Flankenangriff (+20%) oder das Einkesseln aus mehreren angrenzenden Sektoren zugleich (+15%). Dieselbe Streitmacht erzielt je nach Vorgehen unterschiedliche Ergebnisse.","Jeder Kampf endet mit einer Kampfwertung — S, A, B oder C, wobei S doppelt auszahlt. Gewinnen und gut gewinnen sind nicht dasselbe."],"list":{"h":"Was in einen Kampf einfließt","items":["Einheitenzusammenstellung — 5 Schiffe, 5 Mechs, ein Ass. Seltenheit N / R / SR / UR","Vorgehen — direkt, geschickter Flankenangriff (+20%), Einkesseln (+15% aus angrenzenden Sektoren)","Moral — der Zustand einer Streitmacht fließt in ihre Kampfkraft ein","Siegesserie — +8% pro Sieg in Folge, bis zu +60%","Kritische Treffer — 15% Chance auf 1.6×"]}},{"h":"Echtzeitdaten — echte Nachrichten ziehen vorbei","p":["Ein Laufband am unteren Rand trägt echte Nachrichten von genau jetzt, abgerufen in der vom Spieler gewählten Sprache.","Wenn die echten Ereignisse von heute unter einem im Weltraum ausgetragenen Krieg entlanglaufen, liegen das Jahr 2077 des Spiels und die Gegenwart auf einer Linie. Schließen Sie es und kommen Sie zurück — die Welt hat sich weitergedreht.","Für blockierte Netzwerke oder ausbleibende Antworten gibt es Ersatznachrichten aus dem Weltraum, und Ergebnisse werden zehn Minuten lang zwischengespeichert, damit dieselbe Anfrage nicht wiederholt wird."],"list":{"h":"Verwendete offene Daten","items":["Google News RSS — Echtzeit-Nachrichtenfeeds je Sprache","Sprachbewusst — Nachrichten auf Koreanisch, Englisch, Japanisch und Chinesisch","Fallback und Cache — Ersatzmeldungen, wenn nichts antwortet, zehn Minuten Cache"]}},{"h":"Einheiten und Aufstellung","p":["Fünf Schiffsklassen, fünf Mech-Klassen und eine Ass-Einheit, in vier Seltenheiten: N, R, SR, UR. Siege lassen Einheiten als Beute fallen, mit mehr als 8%.","Es gibt vier Ressourcen — Helium-3, Münzen, Wasser und Regolith. Sektoren liefern jeweils andere, sodass das, was Sie nehmen, bestimmt, was Sie bauen können.","Sie starten mit fünf Jägern und zwei Zerstörern, 3,500 Helium-3 und 1,500 Münzen, und am Ende jeder Runde kommt ein Jäger hinzu — eine Untergrenze, niedrig genug, dass eine schwere Niederlage den Lauf nicht beendet."]},{"h":"So wird gespielt","list":{"h":"","items":["Eine Nation wählen — Korea, die Vereinigten Staaten und andere","Einen Kommandanten wählen; jeder spielt sich anders","Auf der Karte einen Sektor anklicken, der an Ihr Gebiet grenzt","Die zu entsendenden Einheiten und das Vorgehen wählen — direkt, Flanke oder Einkesseln — und dann angreifen","Im Ergebnisbildschirm Kampfwertung und Beute ablesen und dann die Runde beenden","Auf dem Handy werden Einheiten über die Leiste am unteren Bildschirmrand ausgewählt"]}},{"h":"KI und offene Daten","p":["Nur, was wir belegen können.","KI-Programmierwerkzeuge kommen in der gesamten Entwicklung zum Einsatz — Spiellogik, die Lokalisierung in vier Sprachen (UI-Texte und über 270 Spieldaten-Einträge in zwei getrennten Schichten gehalten) und automatisierte Tests entstanden allesamt auf diese Weise.","Die Bild-Assets im Spiel werden mit generativer KI erstellt.","Die offenen Daten sind Google News RSS: Echtzeit-Schlagzeilen, die in der Sprache des Spielers abgerufen und über den Bildschirm laufen."]}],"cta":"Kingdom Wars spielen","back":"Zurück zu Deother"},
    "ru": {"title":"Kingdom Wars","tagline":"Выберите страну и забирайте Луну сектор за сектором","intro":"Выберите страну и командира и забирайте 49 секторов Луны по одному. Игра работает прямо в браузере, ничего устанавливать не нужно. Внизу экрана бегущей строкой идут сегодняшние настоящие новости.","sections":[{"h":"Почему мы сделали именно так","p":["Стратегии обычно тяжёлые. Скачать, установить, отсидеть обучение — и только потом начинается первый бой. Где-то на этом пути люди уходят.","Поэтому мы убрали установку. Открываете ссылку — и вы на экране выбора страны; ещё пара кликов, и вы уже в бою. Вся игра работает из одного HTML-файла.","Лёгкая, но мы старались не сделать её поверхностной. Серии побед наращивают множитель, каждый бой получает оценку боя, а победа приносит юниты. Крючок «ещё один раунд» задуман намеренно."]},{"h":"Как начинается война","p":["Луна — это сетка 7×7, 49 секторов. У каждого свой рельеф и свои ресурсы, а атаковать можно только то, что граничит с уже вашей территорией. Поэтому то, что вы захватите первым, определяет, куда можно пойти дальше.","Есть три способа зайти: в лоб, грамотный фланг (+20%) или охват сразу с нескольких соседних секторов (+15%). Одни и те же силы дают разный результат в зависимости от подхода.","Каждый бой заканчивается оценкой боя — S, A, B или C, причём S даёт двойную награду. Победить и победить красиво — не одно и то же."],"list":{"h":"Что влияет на бой","items":["Состав отряда — 5 кораблей, 5 мехов, ас. Редкость N / R / SR / UR","Подход — в лоб, грамотный фланг (+20%), охват (+15% с соседних секторов)","Боевой дух — состояние отряда влияет на его боевую мощь","Серия побед — +8% за каждую победу подряд, до +60%","Критические удары — 15% шанс на 1.6×"]}},{"h":"Данные в реальном времени — настоящие новости бегущей строкой","p":["Бегущая строка внизу несёт настоящие новости прямо сейчас, подобранные на языке, который выбрал игрок.","Когда под космической войной идут сегодняшние реальные события, игровой 2077 год и настоящее оказываются на одной строке. Закройте игру и вернитесь — мир всё это время продолжал жить.","На случай заблокированной сети или отсутствия ответа есть резервные космические новости, а результаты кешируются на десять минут, чтобы не повторять один и тот же запрос."],"list":{"h":"Используемые открытые данные","items":["Google News RSS — ленты новостей в реальном времени по языкам","Учёт языка — новости на корейском, английском, японском и китайском","Резерв и кеш — замещающие новости, когда ничего не отвечает, кеш на десять минут"]}},{"h":"Юниты и развёртывание","p":["Пять классов кораблей, пять классов мехов и юнит-ас, четыре уровня редкости: N, R, SR, UR. Победа приносит юниты в виде трофеев с шансом выше 8%.","Ресурсов четыре — Helium-3, монеты, вода и реголит. Разные секторы дают разное, поэтому то, что вы захватываете, определяет, что вы сможете построить.","Вы начинаете с пятью истребителями и двумя эсминцами, 3,500 Helium-3 и 1,500 монет, и в конце каждого хода прибывает один истребитель — минимальная подушка, при которой тяжёлое поражение не обрывает партию."]},{"h":"Как играть","list":{"h":"","items":["Выберите страну — Корея, США и другие","Выберите командира; каждый играется по-своему","Нажмите на карте сектор, граничащий с вашей территорией","Выберите юниты для отправки и подход — в лоб, фланг или охват — и запускайте атаку","Посмотрите оценку боя и трофеи на экране результата и завершите ход","На мобильном юниты выбираются на панели внизу экрана"]}},{"h":"ИИ и открытые данные","p":["Только то, что мы можем подтвердить.","Инструменты ИИ для написания кода используются на всём протяжении разработки — игровая логика, локализация на четыре языка (фиксированные строки интерфейса и более 270 записей игровых данных, разнесённые по двум отдельным слоям) и автоматические тесты сделаны именно так.","Графические ассеты в игре создаются с помощью генеративного ИИ.","Открытые данные — это Google News RSS: заголовки в реальном времени, загружаемые на языке игрока и бегущие по экрану."]}],"cta":"Играть в Kingdom Wars","back":"Вернуться в Deother"},
    "ar": {"title":"Kingdom Wars","tagline":"اختر دولة واستولِ على القمر قطاعًا بعد قطاع","intro":"اختر دولة وقائدًا، ثم استولِ على قطاعات القمر الـ49 قطاعًا تلو الآخر. تعمل اللعبة في المتصفح مباشرة دون أي تثبيت. وعلى أسفل الشاشة تمرّ أخبار اليوم الحقيقية.","sections":[{"h":"لماذا صُنعت بهذه الطريقة","p":["ألعاب الاستراتيجية ثقيلة في العادة: تنزيل، ثم تثبيت، ثم درس تعليمي طويل، وعندها فقط تبدأ أول مباراة. وفي مكان ما خلال ذلك يغادر الناس.","لذلك ألغينا التثبيت. تفتح الرابط فتجد نفسك في شاشة اختيار الدولة، وبعد نقرات قليلة تكون في خضمّ معركة. تعمل اللعبة بأكملها من ملف HTML واحد.","خفيفة، لكننا حرصنا ألا تكون سطحية. سلاسل الانتصارات تبني مضاعِفًا، وكل معركة تنال تقييمًا، والفوز يُسقط وحدات. أما جاذبية «جولة أخرى فقط» فمقصودة بالتصميم."]},{"h":"كيف تبدأ الحرب","p":["القمر شبكة من 7×7، أي 49 قطاعًا. لكل قطاع تضاريسه وموارده الخاصة، ولا يمكنك مهاجمة إلا ما يجاور أرضًا تسيطر عليها بالفعل. لذا فإن ما تستولي عليه أولًا يحدّد إلى أين تمضي بعد ذلك.","هناك ثلاث طرق للاقتحام: هجوم مباشر، أو التفاف ذكي (+20%)، أو إطباق من عدة قطاعات متجاورة دفعة واحدة (+15%). القوة نفسها تحقق نتائج مختلفة تبعًا لأسلوب الاقتحام.","تنتهي كل معركة بتقييم — S أو A أو B أو C، وتقييم S يمنح مكافأة مضاعفة. فالفوز شيء والفوز بإتقان شيء آخر."],"list":{"h":"ما الذي يدخل في المعركة","items":["تشكيلة الوحدات — 5 سفن و5 ميكات ووحدة نخبة. ندرة N / R / SR / UR","أسلوب الاقتحام — مباشر، أو التفاف ذكي (+20%)، أو إطباق (+15% من القطاعات المجاورة)","الروح المعنوية — حالة القوة تنعكس على قدرتها القتالية","سلسلة الانتصارات — +8% عن كل فوز متتالٍ، حتى +60%","الضربات الحاسمة — احتمال 15% بمعامل 1.6×"]}},{"h":"بيانات حية — أخبار حقيقية تمرّ على الشاشة","p":["يحمل شريط في أسفل الشاشة أخبارًا حقيقية من هذه اللحظة، مجلوبةً باللغة التي اختارها اللاعب.","ومع مرور أحداث اليوم الحقيقية تحت حرب تدور في الفضاء، يلتقي عام 2077 في اللعبة والحاضر على سطر واحد. أغلق اللعبة ثم عُد، فتجد العالم قد واصل حركته.","وتحسبًا للشبكات المحجوبة أو الاستجابات المتوقفة، هناك أخبار فضائية بديلة، وتُخزَّن النتائج مؤقتًا لمدة عشر دقائق حتى لا يتكرر الطلب نفسه."],"list":{"h":"البيانات المفتوحة المستخدَمة","items":["Google News RSS — تغذية أخبار حية لكل لغة","متوافقة مع اللغة — أخبار بالكورية والإنجليزية واليابانية والصينية","بديل وتخزين مؤقت — أخبار بديلة عند غياب أي استجابة، وتخزين مؤقت لعشر دقائق"]}},{"h":"الوحدات والانتشار العسكري","p":["خمس فئات من السفن، وخمس فئات من الميكات، ووحدة نخبة، بأربع درجات ندرة: N وR وSR وUR. والفوز يُسقط وحدات كغنائم باحتمال يتجاوز 8%.","هناك أربعة موارد — Helium-3 والعملات والماء والثرى القمري. تنتج القطاعات موارد مختلفة، لذا فإن ما تستولي عليه يحدّد ما يمكنك بناؤه.","تبدأ بخمس مقاتلات ومدمّرتين، و3,500 من Helium-3 و1,500 عملة، وتصل مقاتلة واحدة في نهاية كل دور — حدٌّ أدنى منخفض بما يكفي لئلا تنهي هزيمةٌ قاسية مسيرتك."]},{"h":"كيف تلعب","list":{"h":"","items":["اختر دولة — كوريا والولايات المتحدة وغيرها","اختر قائدًا؛ لكل قائد أسلوب لعب مختلف","انقر على قطاع في الخريطة يجاور أرضك","اختر الوحدات التي سترسلها وأسلوب الاقتحام — مباشر أو التفاف أو إطباق — ثم انطلق","اطّلع على تقييمك وغنائمك في شاشة النتائج، ثم أنهِ الدور","على الأجهزة المحمولة، تُختار الوحدات من الشريط الممتد على أسفل الشاشة"]}},{"h":"الذكاء الاصطناعي والبيانات المفتوحة","p":["لا نذكر هنا إلا ما يمكننا إثباته.","نستخدم أدوات البرمجة بالذكاء الاصطناعي في كل مراحل التطوير — فمنطق اللعبة، والتوطين بأربع لغات (نصوص الواجهة وأكثر من 270 مُدخلًا من بيانات اللعبة محفوظة في طبقتين منفصلتين)، والاختبارات الآلية، بُنيت جميعها بهذه الطريقة.","وتُصنع الأصول التصويرية داخل اللعبة بالذكاء الاصطناعي التوليدي.","أما البيانات المفتوحة فهي Google News RSS: عناوين حية تُجلب بلغة اللاعب وتُمرَّر على الشاشة."]}],"cta":"جرّب Kingdom Wars","back":"العودة إلى Deother"}
  },

  /* ===================== 장보고 ===================== */
  jangbogo: {
    ko: {
      title: "북미대륙을 발견한 장보고", tagline: "실제 세계 지도 위에서 벌이는 9세기 해상무역 경영",
      intro: "완도 어부의 아들이 당나라를 거쳐 해상왕이 된다. 실제 좌표의 항구를 오가며 교역으로 부를 쌓고, 거북선으로 해적을 소탕하며, 각지의 인물과 관계를 맺어 세계로 뻗는 교역 가문을 이룬다. 정사 위에 원작 소설의 대체역사를 얹었다 — 콜럼버스보다 650년 먼저 북미에 닿는 길.",
      sections: [
        {
          h: "왜 이렇게 만들었나",
          p: [
            "9세기에 실제로 황해를 주름잡은 해상왕 장보고가 있었다. 그 정사 위에, 장보고가 염장의 암살을 피해 살아남았다면 어디까지 갔을까 하는 원작 소설의 대체역사를 얹었다. 완도에서 당나라로, 다시 쿠로시오 해류를 타고 콜럼버스보다 650년 먼저 북미로.",
            "가상의 지도를 그리지 않았다. 양주·등주·청해진·경주·쓰시마·하카타·나니와, 그리고 시애틀 — 실제로 존재하는 항구의 실제 좌표를 쓴다. 항해 거리도 그 좌표로 계산된다.",
            "전략·경영 게임은 무겁다는 통념을 깼다. 설치 없이 브라우저에서 바로 돌아간다. 완도 출생부터 시작하는 프롤로그로 인물에 정을 붙인 뒤에 교역의 바다를 연다."
          ]
        },
        {
          h: "어떻게 부를 쌓는가 — 해상 교역",
          p: [
            "항구마다 상품 시세가 다르다. 비단·청자·차·인삼·은·서적·모피·삼나무를 싼 곳에서 사서 비싼 곳에 판다. 사면 오르고 팔면 내리는 시장 반응이 있어 한 항구에 몰아 팔 수는 없다.",
            "매입에는 나라별 관세가, 매도에는 저잣거리와 독점 교역권 보너스가 붙는다. 어느 항로를 여느냐가 곧 시세차익이고, 번 돈은 배와 거점을 키우는 데 들어간다."
          ],
          list: {
            h: "교역에 들어가는 값",
            items: [
              "상품 시세 — 기준가 × 항구별 계수 × 동적 변동",
              "관세 — 당·신라·일본 등 나라마다 다른 매입세",
              "저잣거리·독점 교역권 — 매도 보너스",
              "강화 — 배(적재·속도·무장)와 거점(창고·저잣거리·병영)"
            ]
          }
        },
        {
          h: "항해와 거북선 해전",
          p: [
            "항해 일수는 실제 좌표 사이의 거리로 계산된다. 배가 항로를 따라 움직이고, 북미(시애틀)는 하카타에서 쿠로시오 곡선 경로(일본→알류샨→북미)로만 닿는다.",
            "도착할 때마다 사건이 기다린다 — 해적 조우, 폭풍, 뇌물을 요구하는 부패 관리, 난파선, 순풍. 곁에 둔 인재의 행운이 악재 확률을 낮춘다.",
            "해적은 거북선 기함으로 소탕한다. 충파·화공·궁수·철갑 방어의 턴제 해전이고, 무장과 병영이 공격·방어·체력에 반영된다. 소탕은 곧 그 항로를 여는 일이다."
          ]
        },
        {
          h: "세계로 뻗는 교역 가문",
          p: [
            "삼국지식 인물 관계 시스템이 있다. 각지의 인물을 그 거점 항구에서 만나 호감을 세 단계로 쌓는다.",
            "무역상은 영입해 매매를 유리하게 만들고, 각지의 여인과는 혼인해 가문을 이룬다 — 가문은 항해마다 자동 수익을 낳는다. 왕에게 진상하면 그 나라의 독점 교역권이 열린다. 각 지역의 여인이 앵커가 되고 자녀가 그 지역 교역망을 맡는다.",
            "성공할수록 진골 귀족의 경계가 커진다. 반복되는 자객을 정보망으로 막아야 하고, 4막에서 정사(염장의 암살)와 소설(탈출과 대항해)이 갈린다."
          ]
        },
        {
          h: "하는 방법",
          list: {
            h: "",
            items: [
              "완도 출생부터 시작하는 프롤로그로 장보고의 성장을 따라간다",
              "항구를 골라 시장에서 상품을 사고판다",
              "항로를 정해 항해한다 — 도착 시 사건이나 전투가 벌어진다",
              "거북선 해전은 공격 방식(충파·화공·궁수)과 방어를 골라 턴제로 싸운다",
              "배와 거점을 강화하고, 각지 인물과 관계를 맺어 가문을 넓힌다",
              "순자산 마일스톤을 밟는다 — 청해진 → 황해의 지배자 → 해상왕"
            ]
          }
        },
        {
          h: "AI와 공개 지도 데이터",
          p: [
            "이 항목은 확인된 것만 적는다.",
            "개발 전 과정에 AI 코딩 도구를 쓴다. 단일 HTML 파일 하나로 지도·경제·전투·인물 관계·다국어·오디오가 모두 도는 것이 그 결과다. 게임 안의 이미지 자산은 생성형 AI로 만든다.",
            "지도는 MapLibre GL JS 위에 OpenFreeMap(OpenStreetMap 계열 공개 지도 데이터)을 얹는다. 현대의 라벨과 도로를 걷어내 고지도 무드로 칠하고, 실제 좌표 위에 9세기 교역로와 오가는 배들을 그린다. 실좌표는 장식이 아니라 항해 거리 계산의 입력값이다."
          ]
        },
        {
          h: "항해의 과학 — 7~11세기",
          p: [
            "게임 속 교역과 항해는 그 시대에 실제로 쓰인 과학과 기술 위에 세웠다. 아래는 7~11세기 원양 항해를 떠받친 도구·기술·자연 지식이다.",
            "다만 두 가지는 재미를 위해 시대를 앞당긴 창작임을 밝혀둔다 — 철갑 거북선은 실제로는 15~16세기 조선의 배이고, ‘콜럼버스보다 먼저 북미 도달’은 원작 소설의 대체역사다."
          ],
          list: {
            h: "7~11세기에 실제로 쓰인 항해 과학",
            items: [
              "계절풍(몬순) — 인도양의 여름·겨울 바람. 아랍·페르시아 상인이 그 주기에 맞춰 원양을 왕복했다",
              "별자리 항법 — 북극성 등 별의 고도로 위도를 가늠하던 밤바다의 길잡이",
              "카말(kamal) — 나뭇조각과 매듭 끈으로 별 고도를 재는 아랍·인도양 뱃사람의 간이 도구",
              "아스트롤라베 — 이슬람 천문학이 정교화한 관측기구(8~10세기). 별·해의 고도와 방위·시각을 잰다 (바다 전용 간이형은 후대)",
              "측심연(납추 줄) — 수심을 재고 추 밑의 기름으로 바닥 흙을 떠 위치를 짐작하던 연안 항해의 필수 도구",
              "축 방향타·수밀 격벽 — 중국 정크선의 기술. 큰 배의 조종과 침수 대비를 가능케 했다",
              "쿠로시오 해류(흑조) — 일본 동쪽을 북동으로 흐르는 따뜻한 해류. 해류를 읽는 것은 원양 항해의 기본이었고, 게임에선 이 물길을 타고 북미로 간다",
              "자석 나침반 — 자화된 바늘은 심괄 『몽계필담』(1088)에 또렷이 기록됐고, 배 항해에 쓴 기록은 12세기 초다. 장보고 시대(9세기)엔 아직 별과 바람에 의지했다"
            ]
          }
        }
      ],
      cta: "장보고 해보기", back: "디아더로 돌아가기"
    },

    en: {
      title: "Jang Bogo: King of the Seas", tagline: "9th-century maritime trade, played on the real world map",
      intro: "The son of a Wando fisherman rises through Tang China to become the king of the seas. Sailing between ports at their real coordinates, you build wealth through trade, sweep pirates aside with turtle ships, and forge ties with people across the world into a trading house that spans it. Alternate history from the original novel, laid over the historical record — reaching North America 650 years before Columbus.",
      sections: [
        {
          h: "Why it is built this way",
          p: [
            "There really was a sea king, Jang Bogo, who commanded the Yellow Sea in the 9th century. Over that history we laid a question from the original novel — how far might he have gone had he survived the assassination? From Wando to Tang China, then on the Kuroshio current to North America, 650 years before Columbus.",
            "We didn't draw a fictional map. Yangzhou, Dengzhou, Cheonghaejin, Gyeongju, Tsushima, Hakata, Naniwa — and Seattle. Real ports at real coordinates. Even the length of a voyage is computed from them.",
            "Strategy and management games are supposed to be heavy. This one runs in the browser with nothing to install. A prologue that begins at your birth in Wando ties you to the character before the sea of trade opens."
          ]
        },
        {
          h: "How you build wealth — maritime trade",
          p: [
            "Prices differ from port to port. Buy silk, celadon, tea, ginseng, silver, books, fur and cedar where they are cheap, and sell them where they are dear. The market reacts — buying pushes a price up, selling pushes it down — so you can't dump everything in one harbour.",
            "Buying carries each realm's tariff; selling earns marketplace and monopoly-charter bonuses. Which route you open is your margin, and what you earn goes into your ship and your base."
          ],
          list: {
            h: "What goes into trade",
            items: [
              "Prices — base price × per-port factor × dynamic swing",
              "Tariffs — a different purchase tax per realm (Tang, Silla, Japan…)",
              "Marketplace & monopoly charter — selling bonuses",
              "Upgrades — the ship (cargo, speed, arms) and the base (warehouse, market, barracks)"
            ]
          }
        },
        {
          h: "Sailing and turtle-ship battles",
          p: [
            "The length of a voyage is the real distance between coordinates. Your ship moves along its route, and North America (Seattle) is reached only from Hakata, on the curved Kuroshio path — Japan, the Aleutians, then the coast.",
            "Every arrival holds an event — a pirate encounter, a storm, a corrupt official demanding a bribe, a wreck, a fair wind. The luck of a talent at your side lowers the odds of misfortune.",
            "Pirates are cleared with your turtle-ship flagship: a turn-based battle of ramming, fire, archers and iron-clad defence, with your arms and barracks feeding attack, defence and health. Clearing them opens the route."
          ]
        },
        {
          h: "A trading house that spans the world",
          p: [
            "There is a relationship system in the spirit of the old strategy epics. You meet people at their home ports and build regard over three stages.",
            "Recruit a merchant to tip trade in your favour; marry a woman from a distant land and found a house — a house that pays you automatically on every voyage. Present tribute to a king and a monopoly charter for that realm opens. Each region's woman is an anchor; her children run that region's network.",
            "The more you succeed, the warier the true-bone nobility grow. You fend off repeated assassins through your information network, and in the fourth act the historical record (assassination) and the novel (escape and a great voyage) part ways."
          ]
        },
        {
          h: "How to play",
          list: {
            h: "",
            items: [
              "Follow Jang Bogo's rise through a prologue that begins at his birth in Wando",
              "Pick a port and buy and sell goods at its market",
              "Set a route and sail — an event or a battle awaits on arrival",
              "In a turtle-ship battle, choose your attack (ram, fire, archers) and your defence, turn by turn",
              "Upgrade your ship and base, and grow your house through ties across the seas",
              "Hit the net-worth milestones — Cheonghaejin → master of the Yellow Sea → king of the seas"
            ]
          }
        },
        {
          h: "AI and open map data",
          p: [
            "Only what we can point to.",
            "AI coding tools are used throughout development. The result is a single HTML file that runs the map, the economy, battles, relationships, localisation and audio all at once. Image assets in the game are made with generative AI.",
            "The map is MapLibre GL JS over OpenFreeMap — open map data from the OpenStreetMap family. Modern labels and roads are stripped away and repainted into an old-chart mood, and over the real coordinates we draw 9th-century trade routes and the ships that ply them. The real coordinates are not decoration: they are the input to every voyage's distance."
          ]
        },
        {
          h: "The science of seafaring — 7th to 11th century",
          p: [
            "The trade and voyages in the game sit on science and technology that were really in use at the time. Below are the tools, techniques and natural knowledge that carried open-sea trade in the 7th–11th centuries.",
            "Two things, though, are pulled forward in time for the game: the iron-clad turtle ship is really a 15th–16th-century Korean vessel, and “reaching North America before Columbus” is the original novel's alternate history."
          ],
          list: {
            h: "Navigation science actually used, 7th–11th century",
            items: [
              "Monsoon winds — the Indian Ocean's summer and winter winds; Arab and Persian traders crossed the open sea on their rhythm",
              "Star navigation — reading latitude from the altitude of stars such as Polaris, the guide of the night sea",
              "The kamal — a simple board-and-knotted-cord tool that Arab and Indian Ocean sailors used to measure a star's altitude",
              "The astrolabe — an instrument refined by Islamic astronomy (8th–10th c.) to read the altitude of stars and sun, and bearing and time (the simplified sea version came later)",
              "The sounding lead — a weighted line to measure depth and, with tallow on its base, sample the seabed; essential for coastal piloting",
              "Axial rudder and watertight bulkheads — Chinese junk technology that made large ships steerable and kept a breach from sinking them",
              "The Kuroshio Current — the warm current running north-east off eastern Japan; reading currents was basic seamanship, and in the game this is the path to North America",
              "The magnetic compass — a magnetized needle is clearly recorded in Shen Kuo's Dream Pool Essays (1088), and its use for navigation at sea appears in the early 12th century. In Jang Bogo's 9th century, sailors still went by stars and wind"
            ]
          }
        }
      ],
      cta: "Play Jang Bogo", back: "Back to Deother"
    },
    "zh": {"title":"张保皋：海上之王","tagline":"在真实世界地图上展开的9世纪海上贸易经营","intro":"莞岛渔夫之子，途经唐朝，最终成为海上之王。你在真实坐标的港口间往来，通过贸易积累财富，用龟船扫荡海盗，并与世界各地的人物结缘，缔造一个横跨天下的贸易家族。在正史之上叠加原著小说的架空历史——比哥伦布早650年抵达北美。","sections":[{"h":"为何如此打造","p":["9世纪确有一位纵横黄海的海上之王张保皋。在这段正史之上，我们叠加了原著小说提出的一个假设——倘若他躲过暗杀而幸存，又能走到多远？从莞岛到唐朝，再乘黑潮，比哥伦布早650年抵达北美。","我们没有绘制虚构的地图。扬州、登州、清海镇、庆州、对马、博多、难波，还有西雅图——都是真实坐标上真实存在的港口。就连一次航程的距离，也由这些坐标计算得出。","策略与经营类游戏向来被认为沉重。而这一款无需安装，在浏览器中即可直接运行。一段从你在莞岛出生开始的序章，让你先与角色结下情谊，随后贸易之海才向你敞开。"]},{"h":"如何积累财富——海上贸易","p":["各港口的物价各不相同。在价廉之处买入丝绸、青瓷、茶叶、人参、白银、书籍、毛皮和杉木，再到价高之处卖出。市场会作出反应——买入推高价格，卖出压低价格——因此你无法把货物全都倾销在同一个港口。","买入需缴纳各国的关税，卖出则可获得集市与专营贸易权的加成。你开辟哪条航线，就是你的差价利润所在；而赚来的钱，则投入到船只与据点的壮大之中。"],"list":{"h":"贸易中涉及的要素","items":["物价——基准价 × 各港口系数 × 动态浮动","关税——唐、新罗、日本等各国不同的买入税","集市与专营贸易权——卖出加成","强化——船只（载货、速度、武装）与据点（仓库、集市、兵营）"]}},{"h":"航海与龟船海战","p":["一次航程的时长，由真实坐标之间的距离计算得出。船只沿航线移动，而北美（西雅图）只能从博多出发，循黑潮的弧形航路抵达——经日本、阿留申，再到北美海岸。","每次抵达都潜伏着事件——遭遇海盗、风暴、索贿的贪官、沉船、顺风。身边人才的运气，能降低厄运发生的概率。","海盗要以龟船旗舰扫荡：这是一场以冲撞、火攻、弓手与铁甲防御展开的回合制海战，你的武装与兵营会反映在攻击、防御与体力之上。扫荡海盗，也就等于开辟了那条航线。"]},{"h":"横跨天下的贸易家族","p":["游戏中有一套三国志式的人物关系系统。你在各地人物所在的据点港口与之相会，分三个阶段积累好感。","招揽商人可让买卖更为有利；与远方之地的女子成婚，便可缔结家族——而家族会在每次航海时自动带来收益。向国王进贡，则可开启该国的专营贸易权。各地区的女子成为锚点，其子女则执掌该地区的贸易网络。","你越是成功，真骨贵族的戒备就越深。你必须凭借情报网抵御接连而来的刺客，而在第四幕，正史（遭阎长暗杀）与小说（脱身与远航）就此分道扬镳。"]},{"h":"玩法","list":{"h":"","items":["通过一段从张保皋在莞岛出生开始的序章，追随他的成长","选定一个港口，在其集市买卖货物","设定航线并起航——抵达时会触发事件或战斗","龟船海战中，逐回合选择你的攻击方式（冲撞、火攻、弓手）与防御","强化船只与据点，并通过跨越海洋的人脉壮大你的家族","达成净资产里程碑——清海镇 → 黄海霸主 → 海上之王"]}},{"h":"AI与公开地图数据","p":["此项只写有据可查的内容。","开发全程都使用了AI编程工具。其成果便是：单单一个HTML文件，就让地图、经济、战斗、人物关系、多语言与音频全部同时运转。游戏中的图像素材由生成式AI制作。","地图在 MapLibre GL JS 之上叠加 OpenFreeMap（源自 OpenStreetMap 家族的公开地图数据）。剥去现代的标注与道路，重新绘制成古地图的氛围，并在真实坐标之上描绘9世纪的贸易航路与往来的船只。真实坐标并非装饰：它们是每一次航程距离计算的输入值。"]},{"h":"航海的科学——7至11世纪","p":["游戏中的贸易与航海，建立在那个时代真正使用过的科学与技术之上。以下是7至11世纪支撑远洋贸易的工具、技术与自然知识。","不过有两点是为了趣味而将年代提前的创作，在此说明——铁甲龟船实际上是15至16世纪朝鲜的战船，而“比哥伦布更早抵达北美”则是原著小说的架空历史。"],"list":{"h":"7至11世纪真正使用过的航海科学","items":["季风（季候风）——印度洋的夏季与冬季风。阿拉伯与波斯商人顺着其周期往返于远洋","星辰导航——凭借北极星等星辰的高度来判断纬度，是夜海的向导","kamal——用木片与打结的绳子测量星辰高度的工具，阿拉伯与印度洋水手常用的简易器具","星盘——由伊斯兰天文学加以精进的观测仪器（8至10世纪），用来测量星辰与太阳的高度，以及方位与时刻（海上专用的简易型出现于后世）","测深锤（铅坠绳）——用来测量水深，并借锤底的油脂粘取海底泥沙以推测方位，是沿岸航行不可或缺的工具","轴向舵与水密隔舱——中国帆船（junk）的技术，使大型船只得以操纵，并能在船体破损时防止沉没","黑潮（Kuroshio）——沿日本东侧向东北流动的暖流。读懂洋流是远洋航海的基本功，而在游戏中，正是循这条水道前往北美","磁罗盘——磁化的针在沈括《梦溪笔谈》（1088）中已有清晰记载，而将其用于海上航行的记录则出现于12世纪初。在张保皋所处的9世纪，水手们仍要依靠星辰与风。"]}}],"cta":"试玩张保皋","back":"返回Deother"},
    "ja": {"title":"チャン・ボゴ：海の王","tagline":"現実の世界地図の上で繰り広げる9世紀の海上交易","intro":"莞島の漁師の息子が、唐を経て海の王へと昇りつめます。現実の座標に配された港のあいだを航海しながら、交易によって富を築き、亀甲船で海賊を一掃し、世界各地の人々と縁を結んで、世界にまたがる交易の一門を築き上げます。正史の上に原作小説の改変歴史を重ねた——コロンブスより650年早く北米へ到達する物語です。","sections":[{"h":"なぜこのように作ったのか","p":["9世紀に黄海を実際に制した海の王、チャン・ボゴ（張保皋）がいました。その正史の上に、原作小説の問い——もし彼が暗殺を生き延びていたなら、どこまで到達できたのか——を重ねました。莞島から唐へ、そして黒潮に乗って、コロンブスより650年早く北米へ。","架空の地図は描いていません。揚州・登州・清海鎮・慶州・対馬・博多・難波、そしてシアトル——現実に存在する港を、その実際の座標で用います。航海の日数さえ、その座標から計算されます。","戦略・経営ゲームは重いもの、という常識があります。本作はインストール不要で、ブラウザ上ですぐに動きます。莞島での誕生から始まるプロローグが、交易の海が開かれる前に、あなたと主人公を結びつけます。"]},{"h":"どう富を築くのか——海上交易","p":["商品の相場は港ごとに異なります。絹・青磁・茶・高麗人参・銀・書籍・毛皮・杉を、安い場所で買い、高い場所で売ります。買えば上がり、売れば下がる市場の反応があるため、一つの港にまとめて売りさばくことはできません。","買い付けには国ごとの関税がかかり、売却には市場と独占交易権のボーナスが付きます。どの航路を開くかがそのまま利ざやとなり、稼いだお金は船と拠点を育てることに使われます。"],"list":{"h":"交易にかかわる要素","items":["商品相場——基準価格 × 港別係数 × 動的変動","関税——唐・新羅・日本など、国ごとに異なる買い付け税","市場・独占交易権——売却ボーナス","強化——船（積載・速度・武装）と拠点（倉庫・市場・兵舎）"]}},{"h":"航海と亀甲船の海戦","p":["航海の日数は、座標間の実際の距離で計算されます。船は航路に沿って進み、北米（シアトル）へは博多からのみ、黒潮の曲線経路——日本、アリューシャン、そして北米沿岸——を通って到達します。","港に着くたびに事件が待っています——海賊との遭遇、嵐、賄賂を求める腐敗した役人、難破船、順風。傍らに置いた人材の幸運が、悪い出来事の確率を下げます。","海賊は亀甲船の旗艦で掃討します。衝角突撃・火攻め・弓兵・鉄甲防御によるターン制の海戦で、武装と兵舎が攻撃・防御・体力に反映されます。掃討することが、そのまま航路を開くことになります。"]},{"h":"世界へ広がる交易の一門","p":["三国志のような人物関係システムがあります。各地の人物とその拠点となる港で出会い、好感を三段階で高めていきます。","商人を仲間に加えれば売買が有利になり、遠い土地の女性と婚姻すれば一門を築けます——一門は航海のたびに自動で収益を生みます。王に献上すれば、その国の独占交易権が開かれます。各地の女性が拠点（アンカー）となり、その子どもたちがその地域の交易網を担います。","成功するほど、真骨貴族の警戒は強まります。繰り返し送られてくる刺客を情報網で防がねばならず、第四幕では正史（暗殺）と小説（脱出と大航海）が分かれます。"]},{"h":"遊び方","list":{"h":"","items":["莞島での誕生から始まるプロローグで、チャン・ボゴの成長をたどります","港を選び、その市場で商品を売買します","航路を定めて航海します——到着すると事件や戦闘が起こります","亀甲船の海戦では、攻撃方法（衝角突撃・火攻め・弓兵）と防御を選び、ターン制で戦います","船と拠点を強化し、各地の人物と縁を結んで一門を広げます","純資産のマイルストーンを踏破します——清海鎮 → 黄海の支配者 → 海の王"]}},{"h":"AIと公開地図データ","p":["ここには、確認できることだけを記します。","開発の全工程でAIコーディングツールを使用しています。その結果が、地図・経済・戦闘・人物関係・多言語・オーディオのすべてを一つのHTMLファイルだけで動かすことです。ゲーム内の画像アセットは生成AIで制作しています。","地図はMapLibre GL JSの上にOpenFreeMap（OpenStreetMap系の公開地図データ）を重ねています。現代のラベルや道路を取り除いて古地図の趣に塗り替え、実際の座標の上に9世紀の交易路と行き交う船を描きます。実座標は装飾ではなく、あらゆる航海の距離を計算する入力値です。"]},{"h":"航海の科学——7〜11世紀","p":["ゲーム内の交易と航海は、その時代に実際に使われていた科学と技術の上に築いています。以下は、7〜11世紀の遠洋航海を支えた道具・技術・自然の知識です。","ただし、二つのことは面白さのために時代を前倒しした創作であると明記しておきます——鉄甲の亀甲船は実際には15〜16世紀の朝鮮の船であり、「コロンブスより先に北米へ到達」は原作小説の改変歴史です。"],"list":{"h":"7〜11世紀に実際に使われた航海科学","items":["季節風（モンスーン）——インド洋の夏と冬の風。アラブやペルシアの商人は、その周期に合わせて遠洋を往復しました","星による航法——北極星などの星の高度から緯度を読み取る、夜の海の道しるべ","カマル（kamal）——木片と結び目のついた紐で星の高度を測る、アラブやインド洋の船乗りの簡易な道具","アストロラーベ——イスラム天文学が精緻化した観測器具（8〜10世紀）。星や太陽の高度、方位や時刻を測ります（海用の簡易型は後代のものです）","測鉛（おもり付きの縄）——水深を測り、おもりの底に塗った獣脂で海底の土をすくって位置を推し量る、沿岸航海に欠かせない道具","軸方向の舵と水密隔壁——中国のジャンク船の技術。大きな船の操縦を可能にし、浸水しても沈まないようにしました","黒潮——日本の東を北東へ流れる暖流。海流を読むことは遠洋航海の基本であり、ゲームではこの水路に乗って北米へ向かいます","磁石の羅針盤——磁化された針は沈括の『夢渓筆談』（1088）に明確に記録されており、航海に用いた記録は12世紀初頭のものです。チャン・ボゴの時代（9世紀）には、まだ星と風に頼っていました"]}}],"cta":"チャン・ボゴを遊ぶ","back":"Deotherに戻る"},
    "es": {"title":"Jang Bogo: Rey de los Mares","tagline":"Comercio marítimo del siglo IX, jugado sobre el mapa del mundo real","intro":"El hijo de un pescador de Wando asciende a través de la China Tang hasta convertirse en el rey de los mares. Navegando entre puertos en sus coordenadas reales, acumulas riqueza mediante el comercio, barres a los piratas con barcos tortuga y tejes lazos con gente de todo el mundo hasta formar una casa comercial que lo abarca. Historia alternativa de la novela original, superpuesta al registro histórico: llegar a Norteamérica 650 años antes que Colón.","sections":[{"h":"Por qué está hecho así","p":["Realmente existió un rey del mar, Jang Bogo, que dominó el mar Amarillo en el siglo IX. Sobre esa historia superpusimos una pregunta de la novela original: ¿hasta dónde habría llegado si hubiera sobrevivido al asesinato? De Wando a la China Tang, y luego por la corriente de Kuroshio hasta Norteamérica, 650 años antes que Colón.","No dibujamos un mapa ficticio. Yangzhou, Dengzhou, Cheonghaejin, Gyeongju, Tsushima, Hakata, Naniwa — y Seattle. Puertos reales en coordenadas reales. Incluso la duración de una travesía se calcula a partir de ellas.","Se supone que los juegos de estrategia y gestión son pesados. Este corre en el navegador sin nada que instalar. Un prólogo que comienza con tu nacimiento en Wando te une al personaje antes de que se abra el mar del comercio."]},{"h":"Cómo acumulas riqueza — el comercio marítimo","p":["Los precios varían de puerto en puerto. Compra seda, celadón, té, ginseng, plata, libros, pieles y cedro donde son baratos, y véndelos donde son caros. El mercado reacciona — comprar sube un precio, vender lo baja — así que no puedes descargarlo todo en un solo puerto.","Comprar acarrea el arancel de cada reino; vender genera bonificaciones de mercado y de derechos de monopolio. La ruta que abras es tu margen, y lo que ganas se invierte en tu barco y tu base."],"list":{"h":"Qué interviene en el comercio","items":["Precios — precio base × factor por puerto × fluctuación dinámica","Aranceles — un impuesto de compra distinto por reino (Tang, Silla, Japón…)","Mercado y derechos de monopolio — bonificaciones de venta","Mejoras — el barco (carga, velocidad, armamento) y la base (almacén, mercado, cuartel)"]}},{"h":"Navegación y combates de barcos tortuga","p":["La duración de una travesía es la distancia real entre coordenadas. Tu barco avanza a lo largo de su ruta, y a Norteamérica (Seattle) solo se llega desde Hakata, por la ruta curva de Kuroshio — Japón, las Aleutianas y luego la costa.","Cada llegada guarda un suceso — un encuentro con piratas, una tormenta, un funcionario corrupto que exige un soborno, un naufragio, un viento favorable. La suerte de un talento a tu lado reduce la probabilidad de infortunio.","Los piratas se barren con tu buque insignia, el barco tortuga: un combate por turnos de embestidas, fuego, arqueros y defensa acorazada, donde tu armamento y tu cuartel alimentan el ataque, la defensa y la salud. Barrerlos abre la ruta."]},{"h":"Una casa comercial que abarca el mundo","p":["Hay un sistema de relaciones al estilo de las viejas epopeyas de estrategia. Conoces a la gente en sus puertos de origen y cultivas su aprecio en tres etapas.","Recluta a un mercader para inclinar el comercio a tu favor; despósate con una mujer de una tierra lejana y funda una casa — una casa que te paga automáticamente en cada travesía. Ofrece tributo a un rey y se abren los derechos de monopolio de ese reino. La mujer de cada región es un ancla; sus hijos gestionan la red de esa región.","Cuanto más éxito tienes, más recelosa se vuelve la nobleza de hueso verdadero. Rechazas a los asesinos que envían una y otra vez mediante tu red de información, y en el cuarto acto el registro histórico (el asesinato) y la novela (la huida y una gran travesía) se bifurcan."]},{"h":"Cómo se juega","list":{"h":"","items":["Sigue el ascenso de Jang Bogo a través de un prólogo que comienza con su nacimiento en Wando","Elige un puerto y compra y vende mercancías en su mercado","Fija una ruta y navega — un suceso o un combate te espera a la llegada","En un combate de barco tortuga, elige tu ataque (embestida, fuego, arqueros) y tu defensa, turno a turno","Mejora tu barco y tu base, y haz crecer tu casa tejiendo lazos por todos los mares","Alcanza los hitos de patrimonio — Cheonghaejin → señor del mar Amarillo → rey de los mares"]}},{"h":"IA y datos de mapas abiertos","p":["Solo lo que podemos demostrar.","Se usan herramientas de programación con IA a lo largo de todo el desarrollo. El resultado es un único archivo HTML que ejecuta el mapa, la economía, los combates, las relaciones, la localización y el audio a la vez. Los recursos de imagen del juego se crean con IA generativa.","El mapa es MapLibre GL JS sobre OpenFreeMap — datos de mapas abiertos de la familia OpenStreetMap. Se retiran las etiquetas y carreteras modernas y se repinta con el aire de una carta antigua, y sobre las coordenadas reales trazamos las rutas comerciales del siglo IX y los barcos que las surcan. Las coordenadas reales no son decoración: son el dato de entrada para la distancia de cada travesía."]},{"h":"La ciencia de la navegación — siglos VII a XI","p":["El comercio y las travesías del juego se asientan en la ciencia y la tecnología que realmente se usaban en la época. A continuación, las herramientas, técnicas y conocimientos naturales que sostuvieron el comercio de altura en los siglos VII a XI.","Dos cosas, no obstante, se adelantan en el tiempo por el juego: el barco tortuga acorazado es en realidad una nave coreana de los siglos XV y XVI, y «llegar a Norteamérica antes que Colón» es la historia alternativa de la novela original."],"list":{"h":"Ciencia de la navegación realmente usada, siglos VII a XI","items":["Vientos monzónicos — los vientos de verano e invierno del océano Índico; los comerciantes árabes y persas cruzaban el mar abierto siguiendo su ritmo","Navegación por las estrellas — deducir la latitud a partir de la altura de estrellas como la estrella polar, la guía del mar nocturno","El kamal — un sencillo instrumento de tablilla y cordel anudado que los marineros árabes y del océano Índico usaban para medir la altura de una estrella","El astrolabio — un instrumento perfeccionado por la astronomía islámica (siglos VIII a X) para leer la altura de las estrellas y del sol, y el rumbo y la hora (la versión marina simplificada llegó más tarde)","La sonda de plomo — un cordel lastrado para medir la profundidad y, con sebo en su base, tomar muestra del fondo marino; esencial para el pilotaje costero","Timón axial y mamparos estancos — tecnología de los juncos chinos que hacía gobernables los grandes barcos y evitaba que una vía de agua los hundiera","La corriente de Kuroshio — la corriente cálida que fluye hacia el noreste frente al este de Japón; leer las corrientes era destreza marinera básica, y en el juego es el camino hacia Norteamérica","La brújula magnética — una aguja magnetizada aparece claramente registrada en los Dream Pool Essays (1088) de Shen Kuo, y su uso para la navegación en el mar aparece a principios del siglo XII. En el siglo IX de Jang Bogo, los marineros todavía se guiaban por las estrellas y el viento"]}}],"cta":"Jugar a Jang Bogo","back":"Volver a Deother"},
    "pt": {"title":"Jang Bogo: Rei dos Mares","tagline":"Comércio marítimo do século IX, jogado no mapa do mundo real","intro":"O filho de um pescador de Wando ergue-se através da China Tang até se tornar o rei dos mares. Navegando entre portos nas suas coordenadas reais, acumulas riqueza através do comércio, varres os piratas com navios-tartaruga e crias laços com gente de todo o mundo, formando uma casa comercial que o abrange por inteiro. História alternativa do romance original, sobreposta ao registo histórico — chegar à América do Norte 650 anos antes de Colombo.","sections":[{"h":"Porque é feito desta forma","p":["Existiu de facto um rei do mar, Jang Bogo, que dominou o Mar Amarelo no século IX. Sobre essa história colocámos uma pergunta do romance original — até onde teria chegado se tivesse sobrevivido ao assassínio? De Wando à China Tang e, depois, na corrente de Kuroshio até à América do Norte, 650 anos antes de Colombo.","Não desenhámos um mapa fictício. Yangzhou, Dengzhou, Cheonghaejin, Gyeongju, Tsushima, Hakata, Naniwa — e Seattle. Portos reais em coordenadas reais. Até a duração de uma viagem é calculada a partir delas.","Diz-se que os jogos de estratégia e de gestão são pesados. Este corre no navegador sem nada para instalar. Um prólogo que começa no teu nascimento em Wando liga-te à personagem antes de o mar do comércio se abrir."]},{"h":"Como acumulas riqueza — o comércio marítimo","p":["Os preços variam de porto para porto. Compra seda, celadon, chá, ginseng, prata, livros, peles e cedro onde são baratos e vende-os onde são caros. O mercado reage — comprar faz subir o preço, vender fá-lo descer — pelo que não podes escoar tudo num só porto.","A compra acarreta a tarifa de cada reino; a venda rende bónus de mercado e de carta de monopólio. A rota que abres é a tua margem, e o que ganhas é investido no teu navio e na tua base."],"list":{"h":"O que entra no comércio","items":["Preços — preço-base × fator por porto × oscilação dinâmica","Tarifas — um imposto de compra diferente por reino (Tang, Silla, Japão…)","Mercado e carta de monopólio — bónus de venda","Melhorias — o navio (carga, velocidade, armamento) e a base (armazém, mercado, quartel)"]}},{"h":"Navegação e batalhas de navios-tartaruga","p":["A duração de uma viagem é a distância real entre coordenadas. O teu navio desloca-se ao longo da sua rota, e a América do Norte (Seattle) só se alcança a partir de Hakata, pelo percurso curvo de Kuroshio — o Japão, as Aleutas e, depois, a costa.","Cada chegada reserva um acontecimento — um encontro com piratas, uma tempestade, um funcionário corrupto a exigir suborno, um naufrágio, um vento favorável. A sorte de um talento ao teu lado reduz a probabilidade de infortúnio.","Os piratas são varridos com a tua nau-capitânia navio-tartaruga: uma batalha por turnos de esporão, fogo, arqueiros e defesa couraçada, com o teu armamento e o teu quartel a alimentar o ataque, a defesa e a vida. Varrê-los abre a rota."]},{"h":"Uma casa comercial que abrange o mundo","p":["Há um sistema de relações no espírito das velhas epopeias de estratégia. Conheces pessoas nos seus portos de origem e cultivas a estima ao longo de três etapas.","Recruta um mercador para inclinar o comércio a teu favor; casa com uma mulher de uma terra distante e funda uma casa — uma casa que te rende automaticamente a cada viagem. Presta tributo a um rei e abre-se a carta de monopólio desse reino. A mulher de cada região é uma âncora; os filhos dela gerem a rede dessa região.","Quanto mais prosperas, mais desconfiada fica a nobreza de osso verdadeiro. Repeles assassinos sucessivos através da tua rede de informação e, no quarto ato, o registo histórico (o assassínio) e o romance (a fuga e uma grande viagem) separam-se."]},{"h":"Como jogar","list":{"h":"","items":["Acompanha a ascensão de Jang Bogo num prólogo que começa no seu nascimento em Wando","Escolhe um porto e compra e vende mercadorias no seu mercado","Define uma rota e navega — um acontecimento ou uma batalha aguarda à chegada","Numa batalha de navios-tartaruga, escolhe o teu ataque (esporão, fogo, arqueiros) e a tua defesa, turno a turno","Melhora o teu navio e a tua base e faz crescer a tua casa através de laços por todos os mares","Atinge os marcos de património — Cheonghaejin → senhor do Mar Amarelo → rei dos mares"]}},{"h":"IA e dados de mapa abertos","p":["Apenas o que podemos comprovar.","Ferramentas de programação com IA são usadas ao longo de todo o desenvolvimento. O resultado é um único ficheiro HTML que corre o mapa, a economia, as batalhas, as relações, a localização e o áudio tudo ao mesmo tempo. Os recursos de imagem do jogo são criados com IA generativa.","O mapa é MapLibre GL JS sobre OpenFreeMap — dados de mapa abertos da família OpenStreetMap. As etiquetas e estradas modernas são removidas e repintadas num ambiente de carta antiga e, sobre as coordenadas reais, desenhamos as rotas comerciais do século IX e os navios que as percorrem. As coordenadas reais não são decoração: são o dado de entrada para a distância de cada viagem."]},{"h":"A ciência da navegação — séculos VII a XI","p":["O comércio e as viagens do jogo assentam em ciência e tecnologia que estavam realmente em uso na época. Abaixo estão as ferramentas, técnicas e conhecimentos naturais que sustentaram o comércio de alto-mar nos séculos VII a XI.","Duas coisas, porém, foram antecipadas no tempo para o jogo: o navio-tartaruga couraçado é, na realidade, uma embarcação coreana dos séculos XV a XVI, e «chegar à América do Norte antes de Colombo» é a história alternativa do romance original."],"list":{"h":"Ciência da navegação realmente usada, séculos VII a XI","items":["Ventos de monção — os ventos de verão e de inverno do oceano Índico; os mercadores árabes e persas atravessavam o alto-mar ao seu ritmo","Navegação astronómica — ler a latitude pela altura de estrelas como a estrela polar, o guia do mar noturno","O kamal — um instrumento simples de tábua e cordel com nós que os marinheiros árabes e do oceano Índico usavam para medir a altura de uma estrela","O astrolábio — um instrumento aperfeiçoado pela astronomia islâmica (séculos VIII a X) para ler a altura das estrelas e do sol, e o rumo e a hora (a versão marítima simplificada surgiu mais tarde)","A sonda de prumo — um cabo com peso para medir a profundidade e, com sebo na base, colher amostras do fundo; essencial para a pilotagem costeira","Leme axial e anteparas estanques — tecnologia do junco chinês que tornava os grandes navios manobráveis e impedia que uma brecha os afundasse","A corrente de Kuroshio — a corrente quente que corre para nordeste ao largo do leste do Japão; ler as correntes era arte de marinharia básica e, no jogo, este é o caminho para a América do Norte","A bússola magnética — uma agulha magnetizada está claramente registada nos Dream Pool Essays (1088) de Shen Kuo, e o seu uso para a navegação no mar surge no início do século XII. No século IX de Jang Bogo, os marinheiros orientavam-se ainda pelas estrelas e pelo vento"]}}],"cta":"Jogar Jang Bogo","back":"Voltar ao Deother"},
    "fr": {"title":"Jang Bogo : Roi des Mers","tagline":"Le commerce maritime du IXe siècle, joué sur la carte du monde réel","intro":"Le fils d'un pêcheur de Wando s'élève à travers la Chine des Tang jusqu'à devenir le roi des mers. En naviguant entre les ports à leurs coordonnées réelles, vous bâtissez votre fortune par le commerce, balayez les pirates avec des navires-tortues et nouez des liens avec les gens du monde entier pour former une maison de commerce qui l'embrasse tout entier. Une uchronie tirée du roman original, posée sur le récit historique — atteindre l'Amérique du Nord 650 ans avant Colomb.","sections":[{"h":"Pourquoi il est conçu ainsi","p":["Il y eut réellement un roi des mers, Jang Bogo, qui régnait sur la mer Jaune au IXe siècle. Sur cette histoire, nous avons posé une question tirée du roman original — jusqu'où serait-il allé s'il avait survécu à son assassinat ? De Wando à la Chine des Tang, puis sur le courant Kuroshio jusqu'à l'Amérique du Nord, 650 ans avant Colomb.","Nous n'avons pas dessiné de carte imaginaire. Yangzhou, Dengzhou, Cheonghaejin, Gyeongju, Tsushima, Hakata, Naniwa — et Seattle. Des ports réels à leurs coordonnées réelles. La durée même d'un voyage en est calculée.","Les jeux de stratégie et de gestion sont censés être lourds. Celui-ci tourne dans le navigateur, sans rien à installer. Un prologue qui commence à votre naissance à Wando vous attache au personnage avant que ne s'ouvre la mer du commerce."]},{"h":"Comment bâtir sa fortune — le commerce maritime","p":["Les prix varient d'un port à l'autre. Achetez la soie, le céladon, le thé, le ginseng, l'argent, les livres, la fourrure et le cèdre là où ils sont bon marché, et revendez-les là où ils sont chers. Le marché réagit — acheter fait monter un prix, vendre le fait baisser — vous ne pouvez donc pas tout écouler dans un seul port.","L'achat supporte les droits de douane de chaque royaume ; la vente rapporte des primes de marché et de charte de monopole. La route que vous ouvrez est votre marge, et ce que vous gagnez sert à votre navire et à votre base."],"list":{"h":"Ce qui entre dans le commerce","items":["Prix — prix de base × coefficient par port × fluctuation dynamique","Droits de douane — une taxe d'achat différente selon le royaume (Tang, Silla, Japon…)","Marché et charte de monopole — primes à la vente","Améliorations — le navire (cargaison, vitesse, armement) et la base (entrepôt, marché, caserne)"]}},{"h":"Navigation et batailles de navires-tortues","p":["La durée d'un voyage est la distance réelle entre les coordonnées. Votre navire se déplace le long de sa route, et l'Amérique du Nord (Seattle) ne s'atteint que depuis Hakata, par la trajectoire courbe du Kuroshio — le Japon, les Aléoutiennes, puis la côte.","Chaque arrivée réserve un événement — une rencontre avec des pirates, une tempête, un fonctionnaire corrompu réclamant un pot-de-vin, une épave, un vent favorable. La chance d'un talent à vos côtés réduit les risques d'infortune.","Les pirates se balaient avec votre navire-tortue amiral : une bataille au tour par tour faite d'éperonnage, de feu, d'archers et de défense cuirassée, où votre armement et votre caserne alimentent l'attaque, la défense et les points de vie. Les vaincre ouvre la route."]},{"h":"Une maison de commerce qui embrasse le monde","p":["Il existe un système de relations dans l'esprit des vieilles épopées de stratégie. Vous rencontrez les personnages dans leurs ports d'attache et gagnez leur estime en trois étapes.","Recrutez un marchand pour faire pencher le commerce en votre faveur ; épousez une femme d'une terre lointaine et fondez une maison — une maison qui vous rapporte automatiquement à chaque voyage. Offrez un tribut à un roi et la charte de monopole de ce royaume s'ouvre. La femme de chaque région est un point d'ancrage ; ses enfants gèrent le réseau de cette région.","Plus vous réussissez, plus la noblesse au sang véritable se méfie. Vous repoussez des assassins à répétition grâce à votre réseau de renseignement, et au quatrième acte le récit historique (l'assassinat) et le roman (la fuite et le grand voyage) se séparent."]},{"h":"Comment jouer","list":{"h":"","items":["Suivez l'ascension de Jang Bogo à travers un prologue qui commence à sa naissance à Wando","Choisissez un port et achetez et vendez des marchandises à son marché","Fixez une route et prenez la mer — un événement ou une bataille vous attend à l'arrivée","Dans une bataille de navires-tortues, choisissez votre attaque (éperon, feu, archers) et votre défense, tour par tour","Améliorez votre navire et votre base, et étendez votre maison en nouant des liens à travers les mers","Franchissez les jalons de fortune — Cheonghaejin → maître de la mer Jaune → roi des mers"]}},{"h":"L'IA et les données cartographiques ouvertes","p":["Uniquement ce que nous pouvons démontrer.","Des outils de codage par IA sont utilisés tout au long du développement. Le résultat est un unique fichier HTML qui fait tourner à la fois la carte, l'économie, les batailles, les relations, la localisation et l'audio. Les ressources visuelles du jeu sont créées par IA générative.","La carte repose sur MapLibre GL JS par-dessus OpenFreeMap — des données cartographiques ouvertes de la famille OpenStreetMap. Les étiquettes et les routes modernes sont retirées et repeintes dans une ambiance de carte ancienne, et par-dessus les coordonnées réelles nous traçons les routes commerciales du IXe siècle et les navires qui les sillonnent. Les coordonnées réelles ne sont pas un décor : elles sont l'entrée du calcul de distance de chaque voyage."]},{"h":"La science de la navigation — du VIIe au XIe siècle","p":["Le commerce et les voyages du jeu reposent sur des sciences et des techniques réellement en usage à l'époque. Voici les outils, les techniques et les savoirs naturels qui ont porté le commerce en haute mer aux VIIe–XIe siècles.","Deux choses, cependant, sont avancées dans le temps pour les besoins du jeu : le navire-tortue cuirassé est en réalité un vaisseau coréen des XVe–XVIe siècles, et « atteindre l'Amérique du Nord avant Colomb » relève de l'uchronie du roman original."],"list":{"h":"La science de la navigation réellement employée, VIIe–XIe siècle","items":["Les vents de mousson — les vents d'été et d'hiver de l'océan Indien ; les marchands arabes et persans traversaient la haute mer au rythme de ceux-ci","La navigation astronomique — lire la latitude d'après la hauteur d'étoiles comme l'étoile polaire, le guide de la mer nocturne","Le kamal — un instrument simple fait d'une planchette et d'une cordelette à nœuds, dont les marins arabes et de l'océan Indien se servaient pour mesurer la hauteur d'une étoile","L'astrolabe — un instrument perfectionné par l'astronomie islamique (VIIIe–Xe s.) pour lire la hauteur des étoiles et du soleil, ainsi que l'azimut et l'heure (la version marine simplifiée vint plus tard)","Le plomb de sonde — une ligne lestée pour mesurer la profondeur et, avec du suif à sa base, prélever un échantillon du fond ; indispensable au pilotage côtier","Le gouvernail d'étambot et les cloisons étanches — une technique des jonques chinoises qui rendait les grands navires manœuvrables et empêchait une voie d'eau de les couler","Le courant Kuroshio — le courant chaud qui file vers le nord-est au large de l'est du Japon ; lire les courants relevait du savoir-faire élémentaire du marin, et dans le jeu c'est la voie vers l'Amérique du Nord","La boussole magnétique — une aiguille aimantée est clairement consignée dans les Dream Pool Essays (1088) de Shen Kuo, et son usage pour la navigation en mer apparaît au début du XIIe siècle. Au IXe siècle de Jang Bogo, les marins s'en remettaient encore aux étoiles et au vent"]}}],"cta":"Jouer à Jang Bogo","back":"Retour à Deother"},
    "de": {"title":"Jang Bogo: König der Meere","tagline":"Maritimer Handel des 9. Jahrhunderts, gespielt auf der echten Weltkarte","intro":"Der Sohn eines Fischers aus Wando steigt über das Tang-China zum König der Meere auf. Du segelst zwischen Häfen an ihren echten Koordinaten, häufst durch Handel Reichtum an, fegst Piraten mit Schildkrötenschiffen beiseite und knüpfst Bande mit Menschen in aller Welt zu einem Handelshaus, das sie umspannt. Alternative Geschichte aus dem Originalroman, über den historischen Bericht gelegt — Nordamerika 650 Jahre vor Kolumbus erreichen.","sections":[{"h":"Warum es so gebaut ist","p":["Es gab tatsächlich einen Seekönig, Jang Bogo, der im 9. Jahrhundert das Gelbe Meer beherrschte. Über diese Geschichte legten wir eine Frage aus dem Originalroman — wie weit wäre er wohl gekommen, hätte er das Attentat überlebt? Von Wando ins Tang-China, dann auf dem Kuroshio-Strom nach Nordamerika, 650 Jahre vor Kolumbus.","Wir haben keine erfundene Karte gezeichnet. Yangzhou, Dengzhou, Cheonghaejin, Gyeongju, Tsushima, Hakata, Naniwa — und Seattle. Echte Häfen an echten Koordinaten. Selbst die Länge einer Seereise wird aus ihnen berechnet.","Strategie- und Aufbauspiele gelten als schwerfällig. Dieses läuft im Browser, ganz ohne Installation. Ein Prolog, der bei deiner Geburt in Wando beginnt, verbindet dich mit der Figur, bevor sich das Meer des Handels öffnet."]},{"h":"Wie du Reichtum aufbaust — der Seehandel","p":["Die Preise unterscheiden sich von Hafen zu Hafen. Kaufe Seide, Seladon, Tee, Ginseng, Silber, Bücher, Pelz und Zedernholz dort, wo sie billig sind, und verkaufe sie dort, wo sie teuer sind. Der Markt reagiert — Kaufen treibt einen Preis nach oben, Verkaufen drückt ihn nach unten —, sodass du nicht alles in einem einzigen Hafen abladen kannst.","Auf den Einkauf fällt der Zoll des jeweiligen Reiches; der Verkauf bringt Boni von Marktplatz und Monopolrecht. Welche Route du eröffnest, ist deine Gewinnspanne, und was du verdienst, fließt in dein Schiff und deinen Stützpunkt."],"list":{"h":"Was in den Handel einfließt","items":["Preise — Grundpreis × Hafenfaktor × dynamische Schwankung","Zölle — eine je Reich unterschiedliche Kaufsteuer (Tang, Silla, Japan …)","Marktplatz & Monopolrecht — Verkaufsboni","Ausbau — das Schiff (Ladung, Geschwindigkeit, Bewaffnung) und der Stützpunkt (Lager, Markt, Kaserne)"]}},{"h":"Seefahrt und Schildkrötenschiff-Gefechte","p":["Die Länge einer Seereise ist die tatsächliche Entfernung zwischen den Koordinaten. Dein Schiff bewegt sich entlang seiner Route, und Nordamerika (Seattle) erreichst du nur von Hakata aus, auf der geschwungenen Kuroshio-Route — Japan, die Aleuten, dann die Küste.","Jede Ankunft hält ein Ereignis bereit — eine Begegnung mit Piraten, ein Sturm, ein bestechlicher Beamter, der Schmiergeld fordert, ein Wrack, ein günstiger Wind. Das Glück eines begabten Gefährten an deiner Seite senkt die Wahrscheinlichkeit von Unheil.","Piraten räumst du mit deinem Schildkrötenschiff als Flaggschiff aus: ein rundenbasiertes Gefecht aus Rammen, Feuer, Bogenschützen und eisenbeschlagener Verteidigung, wobei Bewaffnung und Kaserne in Angriff, Verteidigung und Lebenskraft einfließen. Sie auszuräumen eröffnet die Route."]},{"h":"Ein Handelshaus, das die Welt umspannt","p":["Es gibt ein Beziehungssystem im Geiste der alten Strategie-Epen. Du triffst Menschen in ihren Heimathäfen und baust ihre Zuneigung über drei Stufen auf.","Wirb einen Händler an, um den Handel zu deinen Gunsten zu neigen; heirate eine Frau aus fernem Land und gründe ein Haus — ein Haus, das dir auf jeder Seereise automatisch Gewinn einbringt. Bringe einem König Tribut dar, und das Monopolrecht für dieses Reich öffnet sich. Die Frau jeder Region ist ein Anker; ihre Kinder führen das Handelsnetz dieser Region.","Je erfolgreicher du bist, desto misstrauischer wird der Adel des wahren Knochens. Wiederkehrende Meuchelmörder wehrst du über dein Informationsnetz ab, und im vierten Akt trennen sich der historische Bericht (das Attentat) und der Roman (Flucht und große Fahrt)."]},{"h":"So spielst du","list":{"h":"","items":["Verfolge Jang Bogos Aufstieg durch einen Prolog, der bei seiner Geburt in Wando beginnt","Wähle einen Hafen und kaufe und verkaufe Waren auf seinem Markt","Lege eine Route fest und segle los — bei der Ankunft wartet ein Ereignis oder ein Gefecht","Wähle im Schildkrötenschiff-Gefecht Zug um Zug deinen Angriff (Rammen, Feuer, Bogenschützen) und deine Verteidigung","Baue Schiff und Stützpunkt aus und lass dein Haus durch Bande über die Meere hinweg wachsen","Erreiche die Vermögens-Meilensteine — Cheonghaejin → Herr des Gelben Meeres → König der Meere"]}},{"h":"KI und offene Kartendaten","p":["Nur, was wir belegen können.","Im gesamten Entwicklungsprozess kommen KI-Coding-Werkzeuge zum Einsatz. Das Ergebnis ist eine einzige HTML-Datei, in der Karte, Wirtschaft, Gefechte, Beziehungen, Lokalisierung und Audio allesamt zugleich laufen. Die Bild-Assets im Spiel entstehen mit generativer KI.","Die Karte ist MapLibre GL JS über OpenFreeMap — offene Kartendaten aus der OpenStreetMap-Familie. Moderne Beschriftungen und Straßen werden entfernt und in die Stimmung einer alten Seekarte umgemalt, und über die echten Koordinaten zeichnen wir Handelsrouten des 9. Jahrhunderts und die Schiffe, die sie befahren. Die echten Koordinaten sind keine Zierde: Sie sind die Eingabegröße für die Entfernung jeder Seereise."]},{"h":"Die Wissenschaft der Seefahrt — 7. bis 11. Jahrhundert","p":["Handel und Seereisen im Spiel ruhen auf Wissenschaft und Technik, die zu jener Zeit tatsächlich in Gebrauch waren. Im Folgenden die Werkzeuge, Techniken und das Naturwissen, die den Hochseehandel im 7. bis 11. Jahrhundert trugen.","Zwei Dinge jedoch sind für das Spiel zeitlich vorgezogen: Das eisenbeschlagene Schildkrötenschiff ist in Wirklichkeit ein koreanisches Schiff des 15.–16. Jahrhunderts, und „Nordamerika vor Kolumbus erreichen“ ist die alternative Geschichte des Originalromans."],"list":{"h":"Tatsächlich genutzte Navigationswissenschaft, 7.–11. Jahrhundert","items":["Monsunwinde — die Sommer- und Winterwinde des Indischen Ozeans; arabische und persische Händler überquerten die offene See in ihrem Rhythmus","Sternnavigation — das Ablesen der Breite aus der Höhe von Sternen wie dem Polarstern, dem Wegweiser der nächtlichen See","Der kamal — ein einfaches Gerät aus Holzbrettchen und Knotenschnur, mit dem arabische und indische Seefahrer die Höhe eines Sterns maßen","Das Astrolabium — ein von der islamischen Astronomie verfeinertes Instrument (8.–10. Jh.), um die Höhe von Sternen und Sonne sowie Peilung und Zeit abzulesen (die vereinfachte See-Ausführung kam später)","Das Lot — eine beschwerte Leine, um die Tiefe zu messen und, mit Talg an der Unterseite, den Meeresgrund zu beproben; unerlässlich für die Küstennavigation","Achsruder und wasserdichte Schotten — Technik der chinesischen Dschunke, die große Schiffe steuerbar machte und ein Leck am Versenken hinderte","Der Kuroshio-Strom — die warme, nordöstlich vor dem östlichen Japan verlaufende Strömung; Strömungen zu lesen war seemännisches Grundwissen, und im Spiel ist dies der Weg nach Nordamerika","Der Magnetkompass — eine magnetisierte Nadel ist bei Shen Kuo in den Dream Pool Essays (1088) klar belegt, und ihr Einsatz zur Navigation auf See taucht im frühen 12. Jahrhundert auf. In Jang Bogos 9. Jahrhundert richteten sich die Seefahrer noch nach Sternen und Wind"]}}],"cta":"Jang Bogo spielen","back":"Zurück zu Deother"},
    "ru": {"title":"Чан Бого: Король морей","tagline":"Морская торговля IX века на настоящей карте мира","intro":"Сын рыбака из Вандо проходит через танский Китай и становится королём морей. Плавая между портами по их настоящим координатам, вы копите богатство торговлей, сметаете пиратов кораблями-черепахами и заводите связи с людьми со всего мира, сплетая из них торговый дом, что охватывает весь свет. Альтернативная история из оригинального романа, наложенная на исторические хроники, — достичь Северной Америки на 650 лет раньше Колумба.","sections":[{"h":"Почему игра сделана именно так","p":["В IX веке действительно жил морской король Чан Бого, властвовавший над Жёлтым морем. На эту историю мы наложили вопрос из оригинального романа: как далеко он мог бы зайти, если бы пережил покушение? Из Вандо в танский Китай, а затем по течению Куросио к Северной Америке — на 650 лет раньше Колумба.","Мы не рисовали вымышленную карту. Янчжоу, Дэнчжоу, Чонхэджин, Кёнджу, Цусима, Хаката, Нанива — и Сиэтл. Настоящие порты по настоящим координатам. Даже длительность плавания вычисляется по ним.","Считается, что стратегии и экономические симуляторы тяжеловесны. Эта игра работает прямо в браузере, ничего не нужно устанавливать. Пролог, начинающийся с вашего рождения в Вандо, привязывает вас к герою ещё до того, как откроется море торговли."]},{"h":"Как копится богатство — морская торговля","p":["Цены различаются от порта к порту. Покупайте шёлк, селадон, чай, женьшень, серебро, книги, меха и кедр там, где они дёшевы, и продавайте там, где они дороги. Рынок реагирует: покупка поднимает цену, продажа опускает, — поэтому нельзя сбыть всё в одной гавани.","Покупка облагается пошлиной каждого государства; продажа приносит бонусы рынка и монопольной торговой грамоты. Какой маршрут вы открываете — в том и ваша прибыль, а заработанное идёт на корабль и базу."],"list":{"h":"Из чего складывается торговля","items":["Цены — базовая цена × коэффициент порта × динамическое колебание","Пошлины — свой закупочный налог у каждого государства (Тан, Силла, Япония…)","Рынок и монопольная торговая грамота — бонусы к продаже","Улучшения — корабль (трюм, скорость, вооружение) и база (склад, рынок, казармы)"]}},{"h":"Плавание и морские бои на кораблях-черепахах","p":["Длительность плавания — это настоящее расстояние между координатами. Корабль движется вдоль своего маршрута, а Северной Америки (Сиэтла) можно достичь только из Хакаты, по изогнутому пути Куросио — Япония, Алеутские острова, затем побережье.","Каждое прибытие таит событие — встречу с пиратами, шторм, продажного чиновника, требующего взятку, обломки крушения, попутный ветер. Удача соратника рядом с вами снижает вероятность несчастья.","Пиратов истребляет ваш флагманский корабль-черепаха: пошаговый бой из таранов, огня, лучников и брони, где вооружение и казармы влияют на атаку, защиту и здоровье. Истребить их — значит открыть маршрут."]},{"h":"Торговый дом, охватывающий весь мир","p":["В игре есть система отношений в духе старых стратегических эпопей. Вы встречаете людей в их родных портах и завоёвываете расположение в три этапа.","Наймите торговца, чтобы склонить сделки в свою пользу; возьмите в жёны женщину из дальнего края и основайте дом — дом, что приносит вам доход автоматически с каждого плавания. Поднесите дары королю — и откроется монопольная торговая грамота его государства. Женщина каждого края становится якорем, а её дети управляют торговой сетью этого края.","Чем больше ваш успех, тем настороженнее становится знать истинной кости. Вы отражаете новые и новые покушения через свою сеть осведомителей, а в четвёртом акте расходятся исторические хроники (убийство) и роман (побег и великое плавание)."]},{"h":"Как играть","list":{"h":"","items":["Проследите за возвышением Чан Бого в прологе, что начинается с его рождения в Вандо","Выберите порт и покупайте и продавайте товары на его рынке","Проложите маршрут и отправляйтесь в плавание — по прибытии вас ждёт событие или бой","В бою на корабле-черепахе выбирайте атаку (таран, огонь, лучники) и защиту, ход за ходом","Улучшайте корабль и базу и растите свой дом через связи по всем морям","Достигайте рубежей состояния — Чонхэджин → властелин Жёлтого моря → король морей"]}},{"h":"ИИ и открытые картографические данные","p":["Только то, что мы можем подтвердить.","На всём протяжении разработки применяются ИИ-инструменты для написания кода. Результат — единственный HTML-файл, в котором разом работают карта, экономика, бои, отношения, многоязычность и звук. Изображения в игре созданы генеративным ИИ.","Карта — это MapLibre GL JS поверх OpenFreeMap, открытых картографических данных из семейства OpenStreetMap. Современные подписи и дороги убраны и перекрашены в дух старинной карты, а поверх настоящих координат мы рисуем торговые пути IX века и корабли, что по ним ходят. Настоящие координаты — не украшение: они служат исходными данными для расчёта расстояния каждого плавания."]},{"h":"Наука мореплавания — с VII по XI век","p":["Торговля и плавания в игре опираются на науку и технологии, что действительно применялись в ту эпоху. Ниже — инструменты, приёмы и знания о природе, на которых держалась океанская торговля в VII–XI веках.","Однако две вещи ради игры перенесены в прошлое: бронированный корабль-черепаха на самом деле — корейское судно XV–XVI веков, а «достижение Северной Америки раньше Колумба» — альтернативная история оригинального романа."],"list":{"h":"Наука навигации, действительно применявшаяся в VII–XI веках","items":["Муссонные ветры — летние и зимние ветры Индийского океана; арабские и персидские купцы пересекали открытое море в такт их циклу","Навигация по звёздам — определение широты по высоте звёзд, таких как Полярная звезда, путеводитель ночного моря","Камаль — простое приспособление из дощечки и шнура с узлами, которым арабские и индоокеанские моряки измеряли высоту звезды","Астролябия — прибор, усовершенствованный исламской астрономией (VIII–X вв.) для измерения высоты звёзд и солнца, а также направления и времени (упрощённый морской вариант появился позже)","Лот — груз на верёвке для измерения глубины, а с салом на основании — для взятия пробы грунта; незаменим в каботажном плавании","Осевой руль и водонепроницаемые переборки — технологии китайских джонок, что делали большие суда управляемыми и не давали пробоине потопить их","Течение Куросио — тёплое течение, идущее на северо-восток у восточных берегов Японии; читать течения было азами морского дела, и в игре это путь к Северной Америке","Магнитный компас — намагниченная игла чётко описана в «Записках о ручье снов» Шэнь Ко (1088), а её использование для навигации в море появляется в начале XII века. В IX веке Чан Бого моряки всё ещё полагались на звёзды и ветер"]}}],"cta":"Играть в Чан Бого","back":"Вернуться на Deother"},
    "ar": {"title":"جانغ بوغو: ملك البحار","tagline":"تجارة بحرية من القرن التاسع، تُلعب على خريطة العالم الحقيقية","intro":"ابن صياد من واندو يصعد عبر بلاد تانغ ليغدو ملك البحار. تُبحر بين الموانئ عند إحداثياتها الحقيقية، فتراكم الثروة بالتجارة، وتكتسح القراصنة بسفن السلحفاة، وتعقد صلات مع أهل البحار في أنحاء العالم لتبني بيت تجارة يمتد عبره. تاريخ بديل من الرواية الأصلية، مضاف فوق السجل التاريخي — بلوغ أمريكا الشمالية قبل كولومبوس بـ650 عامًا.","sections":[{"h":"لماذا بُني على هذا النحو","p":["كان هناك حقًا ملك بحار، جانغ بوغو، سيطر على البحر الأصفر في القرن التاسع. فوق ذلك التاريخ وضعنا سؤالًا من الرواية الأصلية — إلى أي مدى كان سيبلغ لو أنه نجا من الاغتيال؟ من واندو إلى بلاد تانغ، ثم على تيار Kuroshio إلى أمريكا الشمالية، قبل كولومبوس بـ650 عامًا.","لم نرسم خريطة خيالية. يانغتشو ودنغتشو وتشونغهيجين وغيونغجو وتسوشيما وهاكاتا ونانيوا — وسياتل. موانئ حقيقية عند إحداثيات حقيقية. حتى طول الرحلة يُحسب منها.","يُفترض بألعاب الاستراتيجية والإدارة أن تكون ثقيلة. أما هذه فتعمل في المتصفح دون أي تثبيت. تمهيد يبدأ من مولدك في واندو يربطك بالشخصية قبل أن ينفتح بحر التجارة."]},{"h":"كيف تراكم الثروة — التجارة البحرية","p":["تختلف الأسعار من ميناء إلى ميناء. اشترِ الحرير والخزف السيلادوني والشاي والجينسنغ والفضة والكتب والفراء وخشب الأرز حيث تَرخُص، وبعها حيث تَغلو. السوق يتفاعل — فالشراء يرفع السعر والبيع يخفضه — فلا يمكنك تصريف كل شيء في ميناء واحد.","يحمل الشراء تعريفة كل مملكة؛ ويكسب البيع علاوات السوق وامتياز الاحتكار. المسار الذي تفتحه هو هامش ربحك، وما تكسبه يذهب إلى سفينتك وقاعدتك."],"list":{"h":"ما يدخل في التجارة","items":["الأسعار — السعر الأساسي × معامل كل ميناء × تذبذب ديناميكي","التعريفات — ضريبة شراء مختلفة لكل مملكة (تانغ، شيلا، اليابان…)","السوق وامتياز الاحتكار — علاوات البيع","التطويرات — السفينة (الحمولة، السرعة، التسليح) والقاعدة (المخزن، السوق، الثكنة)"]}},{"h":"الإبحار ومعارك سفن السلحفاة","p":["طول الرحلة هو المسافة الحقيقية بين الإحداثيات. تتحرك سفينتك على طول مسارها، ولا تُبلغ أمريكا الشمالية (سياتل) إلا من هاكاتا، عبر مسار Kuroshio المنحني — اليابان، ثم جزر ألوشيان، ثم الساحل.","كل وصول يحمل حدثًا — لقاء مع قراصنة، أو عاصفة، أو موظف فاسد يطلب رشوة، أو حطام سفينة، أو ريح مواتية. حظ الموهوب إلى جانبك يخفض احتمالات المكروه.","تُكتسح القراصنة بسفينة السلحفاة القيادية: معركة بالأدوار من النطح والنيران والرماة والدفاع المدرّع، حيث يغذّي تسليحك وثكنتك الهجومَ والدفاعَ والصحة. اكتساحهم يفتح المسار."]},{"h":"بيت تجارة يمتد على العالم","p":["ثمة نظام علاقات على روح ملاحم الاستراتيجية القديمة. تلتقي بالناس في موانئهم الأصلية وتبني الودّ عبر ثلاث مراحل.","جنّد تاجرًا ليميل الميزان التجاري لصالحك؛ وتزوّج امرأة من أرض بعيدة لتؤسس بيتًا — بيتًا يدرّ عليك ربحًا تلقائيًا في كل رحلة. قدّم إتاوة لملك فينفتح لك امتياز الاحتكار في تلك المملكة. امرأة كل إقليم مرساة؛ وأبناؤها يديرون شبكة ذلك الإقليم.","كلما نجحت، ازداد حذر نبلاء «العظم الحقيقي». تصدّ القتلة المتكررين عبر شبكة معلوماتك، وفي الفصل الرابع يفترق السجل التاريخي (الاغتيال) عن الرواية (الهروب والرحلة الكبرى)."]},{"h":"كيف تلعب","list":{"h":"","items":["تابع صعود جانغ بوغو عبر تمهيد يبدأ من مولده في واندو","اختر ميناءً واشترِ وبع البضائع في سوقه","حدد مسارًا وأبحر — حدث أو معركة ينتظرك عند الوصول","في معركة سفينة السلحفاة، اختر هجومك (النطح، النيران، الرماة) ودفاعك، دورًا بعد دور","طوّر سفينتك وقاعدتك، ووسّع بيتك عبر صلات تمتد على البحار","ابلغ محطات صافي الثروة — تشونغهيجين ← سيد البحر الأصفر ← ملك البحار"]}},{"h":"الذكاء الاصطناعي وبيانات الخرائط المفتوحة","p":["لا نذكر إلا ما يمكننا الإشارة إليه.","تُستخدم أدوات البرمجة بالذكاء الاصطناعي طوال التطوير. والنتيجة ملف HTML واحد يُشغّل الخريطة والاقتصاد والمعارك والعلاقات والترجمة والصوت دفعةً واحدة. أما أصول الصور في اللعبة فتُصنع بالذكاء الاصطناعي التوليدي.","الخريطة هي MapLibre GL JS فوق OpenFreeMap — بيانات خرائط مفتوحة من عائلة OpenStreetMap. تُنزع الأسماء والطرق الحديثة ويُعاد طلاؤها بمزاج الخرائط القديمة، وفوق الإحداثيات الحقيقية نرسم مسارات تجارة القرن التاسع والسفن التي تجوبها. الإحداثيات الحقيقية ليست زينة: بل هي مُدخَل حساب مسافة كل رحلة."]},{"h":"علم الملاحة البحرية — من القرن السابع إلى الحادي عشر","p":["تقوم التجارة والرحلات في اللعبة على علم وتقنية كانا مستخدمَين فعلًا في ذلك الزمن. وفيما يلي الأدوات والتقنيات والمعارف الطبيعية التي حملت التجارة في أعالي البحار في القرون السابع إلى الحادي عشر.","غير أن أمرين قُدّما زمنيًا لأجل اللعبة: سفينة السلحفاة المدرّعة هي في الواقع سفينة كورية من القرنين الخامس عشر والسادس عشر، و«بلوغ أمريكا الشمالية قبل كولومبوس» هو التاريخ البديل للرواية الأصلية."],"list":{"h":"علم الملاحة المستخدم فعلًا، القرن السابع إلى الحادي عشر","items":["الرياح الموسمية — رياح المحيط الهندي الصيفية والشتوية؛ عبر التجار العرب والفرس أعالي البحار على إيقاعها","الملاحة بالنجوم — استقراء خط العرض من ارتفاع نجوم مثل نجمة الشمال، دليل بحر الليل","الكمال — أداة بسيطة من لوح وخيط معقود استعملها بحّارة العرب والمحيط الهندي لقياس ارتفاع النجم","الإسطرلاب — أداة صقلها علم الفلك الإسلامي (القرن الثامن إلى العاشر) لقياس ارتفاع النجوم والشمس، والاتجاه والوقت (أما النسخة البحرية المبسّطة فجاءت لاحقًا)","ثقل السبر — خيط مثقّل لقياس العمق، وبشحمٍ في قاعدته يأخذ عينة من قاع البحر؛ لا غنى عنه في الملاحة الساحلية","الدفّة المحورية والحواجز الكتيمة — تقنية السفن الصينية (الجنك) التي جعلت السفن الكبيرة قابلة للتوجيه ومنعت الخرق من إغراقها","تيار Kuroshio — التيار الدافئ الجاري نحو الشمال الشرقي قبالة شرق اليابان؛ قراءة التيارات كانت من أساسيات فنون البحر، وفي اللعبة هذا هو المسار إلى أمريكا الشمالية","البوصلة المغناطيسية — الإبرة الممغنطة مسجّلة بوضوح في كتاب Dream Pool Essays (1088) لـ Shen Kuo، أما استخدامها للملاحة في البحر فيظهر في مطلع القرن الثاني عشر. في القرن التاسع، زمن جانغ بوغو، كان البحّارة لا يزالون يهتدون بالنجوم والريح"]}}],"cta":"العب جانغ بوغو","back":"العودة إلى Deother"}
  },

  /* ===================== 킹덤워즈 온라인 =====================
   *
   * ⚠️ 스포일러 금지선 — 대표님이 명시적으로 지시한 사항이다.
   *    원작 소설의 결말과 그에 연결된 설정은 이 사이트에 절대 쓰지 않는다:
   *      · 결말(AI가 인간을 사육하며 전쟁 게임을 돌린다)
   *      · 운영자 AI / 각성자 단계
   *      · 혈통 시스템의 정체
   *      · '건국 신화는 조작이다'라는 사실의 명시
   *        → 인수인계 문서가 "게임 안에서 발견하게 한다"고 못박았다.
   *          여기에 미리 쓰면 그 발견을 죽인다. '표식은 임의적'까지만 쓴다.
   *
   *    내용 출처: F:\KW_MMO\README.md, F:\KW_MMO\server\PROTOCOL.md,
   *              F:\VARCO_MMORPG_HANDOFF.md §0. 그 밖의 것은 쓰지 않는다 (함정 2).
   */
  kwonline: {
    ko: {
      title: "킹덤워즈 온라인",
      tagline: "AI가 플레이어로 참여하는 MMORPG",
      intro: "AI 에이전트가 NPC가 아니라 플레이어로 참여하는 MMORPG다. 이 세계의 주민 대부분은 AI이고, 그들은 사람과 완전히 같은 프로토콜로 접속한다 — 서버는 접속자가 사람인지 AI인지 모른다. 무대는 핵전쟁 이후, 살아남은 사람들이 뭉쳐 세운 10개 왕국이 거점을 놓고 싸우는 세계다. 인간이 부족주의를 벗어날 수 있는가를, 설명이 아니라 플레이로 묻는다. 개발 중.",
      sections: [
        {
          h: "왜 MMO여야 하는가",
          p: [
            "소설은 '인간은 부족주의를 벗어나기 어렵다'고 말할 수 있을 뿐이다. MMO는 플레이어가 그것을 직접 하게 만든다. 이 주제는 이 매체에서만 증명된다.",
            "다크 에이지 오브 카멜롯의 3진영, EVE의 널섹, 리니지의 공성전 — 어느 쪽이든 플레이어는 완전히 임의로 배정된 색깔을 놓고 진심으로 서로를 미워하게 된다. 2주면 충분하다.",
            "그래서 이 게임의 클라이맥스는 컷신이 아니다. 색깔 하나 골랐을 뿐인데 상대 진영을 진짜로 미워하고 있는 자신을, 플레이어가 발견하는 순간이다."
          ]
        },
        {
          h: "10개 왕국 — 사후 국가",
          p: [
            "진영은 민족이 아니다. 문명이 무너진 직후, 어쩌다 함께 살아남은 사람들이 뭉쳐 만든 사후 국가(post-nation)다.",
            "표식은 함선 색상 10종. 왕국을 가르는 것은 혈통도 이념도 아니고 그저 색이다 — 그 표식이 임의적이라는 점 자체가 이 게임의 주제다.",
            "그래서 탈영과 전향을 막지 않는다. 옮긴 사람은 옛 진영에게 배신자이고, 새 진영에서는 끝까지 의심받는 존재가 된다. 그 경험 자체가 주제의 증명이다."
          ]
        },
        {
          h: "AI가 사람과 같은 문으로 들어온다",
          p: [
            "이 게임의 핵심 설계는 하나다. AI 에이전트는 사람과 완전히 동일한 프로토콜로 접속한다. 에이전트 전용 특권 API도 없고, 사람과 AI를 구분하는 필드도 없다.",
            "이건 편의가 아니라 규칙이다. 언리얼 클라이언트든 브라우저든 봇이든, 프로토콜 문서 하나만 알면 같은 세계에 들어온다. 서버는 끝까지 누가 사람인지 모른다.",
            "그리고 여기서 두 번째 일이 벌어진다. 사람과 구별되지 않는 존재가 세계에 살면, 플레이어는 반드시 묻게 된다 — '쟤 사람이야, 봇이야?' 그리고 판별법을 공유하고, 파티에서 빼고, 오인해서 사람까지 배척하기 시작한다. 아무도 시키지 않았는데."
          ],
          list: {
            h: "프로토콜 (v0.1)",
            items: [
              "WebSocket 위에 JSON. 클라이언트는 join / move / chat 을 보낸다",
              "서버는 welcome / snapshot(초당 10회) / join / leave / chat 을 보낸다",
              "플레이어 표현에 사람·AI 구분 필드가 없다 — 넣지 않는 것이 규칙이다",
              "세 종류의 클라이언트(언리얼 · 브라우저 · 에이전트)가 같은 서버, 같은 문서를 쓴다"
            ]
          }
        },
        {
          h: "코어 루프",
          p: [
            "10개 왕국이 거점을 놓고 싸운다. 세계의 주민 대부분은 AI 에이전트이고, 사람 플레이어는 그 전선의 날카로운 끝이다.",
            "진짜 작업량은 에셋이 아니라 AI 행동 설계에 있다. 에이전트가 사람으로 오인될 만큼 좋아야 이 구조 전체가 성립하기 때문이다."
          ],
          list: {
            h: "무엇으로 굴러가는가",
            items: [
              "거점 점령과 방어 — 코어",
              "자원 채굴 — 전쟁을 떠받치는 보급",
              "건축과 전초기지 — 전선을 앞으로 미는 수단",
              "AI 행동 설계 — 실제 작업량의 대부분"
            ]
          }
        },
        {
          h: "설계 원칙",
          p: [
            "오래 살아남은 MMO들에서 가져온 것들이다. 새로운 것을 발명하기보다, 이미 증명된 것을 지키는 쪽을 택했다."
          ],
          list: {
            h: "지킬 것",
            items: [
              "다른 플레이어가 콘텐츠여야 한다 — 개발사는 플레이어의 소비 속도를 절대 따라가지 못한다",
              "사회적 의무를 만든다 — 사람을 붙잡는 것은 콘텐츠가 아니라 관계다",
              "손실이 남아야 한다 — 결과가 남아야 전쟁이 뉴스가 된다",
              "테마파크를 복제하지 않는다 — 친구와 캐릭터라는 전환 비용은 이길 수 없다"
            ]
          }
        },
        {
          h: "지금 어디까지 왔나",
          p: [
            "1차 목표는 'MMO를 완성하는 것'이 아니다. 거점 하나를 놓고 싸우는 지속형 존, 그리고 사람과 AI를 합쳐 수십 명이 같은 세계에 함께 있는 상태 — 그것 하나다. 인디 MMO가 죽는 첫 번째 이유는 콘텐츠 부족이 아니라 스코프다.",
            "관문은 통과했다. 언리얼 클라이언트가 서버에 붙어 에이전트 여섯과 같은 화면에 섰고, 각자 다른 속도로 움직이며 걷기와 달리기가 구분됐다."
          ],
          list: {
            h: "현재 상태",
            items: [
              "✅ 권위 서버 + 프로토콜 v0.1",
              "✅ AI 에이전트 — 사람과 같은 프로토콜로 접속",
              "✅ 언리얼 클라이언트 — 사람과 에이전트가 같은 세계에",
              "✅ 브라우저 클라이언트 — 쿼터뷰, 왕국별 색상",
              "⬜ 서버 상시 호스팅 · 세계 영속성 · 전투와 거점 점령"
            ]
          }
        }
      ],
      cta: "브라우저에서 해보기", back: "디아더로 돌아가기"
    },
    en: {
      title: "Kingdom Wars Online",
      tagline: "An MMORPG where AI takes part as players, not NPCs",
      intro: "An MMORPG in which AI agents take part as players rather than NPCs. Most of this world's population is AI, and it connects through exactly the same protocol as human players — the server does not know which of its players are people. The setting is the aftermath of a nuclear war, where ten kingdoms formed by the survivors fight over strongholds. It asks whether humans can get past tribalism, not by explaining it, but by making you play it. In development.",
      sections: [
        {
          h: "Why it has to be an MMO",
          p: [
            "A novel can only say that people struggle to escape tribalism. An MMO makes the player do it. This subject can only be proven in this medium.",
            "Dark Age of Camelot's three realms, EVE's nullsec, Lineage's castle sieges — in all of them players come to genuinely hate each other over a colour they were assigned at random. Two weeks is enough.",
            "So the climax of this game is not a cutscene. It is the moment a player notices that they have started to truly resent the other side, over nothing but a colour they once picked."
          ]
        },
        {
          h: "Ten kingdoms — post-nations",
          p: [
            "The factions are not ethnicities. They are post-nations: groups that formed in the days after civilisation collapsed, out of whoever happened to survive together.",
            "The marking is ten ship colours. What divides the kingdoms is not blood or ideology but colour — and the arbitrariness of that marking is the point of the game.",
            "So defection is allowed. Anyone who switches is a traitor to the side they left and never fully trusted by the side they joined. That experience is the argument."
          ]
        },
        {
          h: "AI comes through the same door as people",
          p: [
            "There is one core design rule. AI agents connect through exactly the same protocol as human players. There is no privileged agent API, and no field anywhere that marks a player as human or AI.",
            "This is a rule, not a convenience. Unreal client, browser, or bot — anything that can read one protocol document enters the same world. The server never learns who is a person.",
            "And this is where the second thing happens. Once beings indistinguishable from people live in the world, players inevitably start asking: is that one human, or a bot? Then they trade detection tricks, cut suspects from parties, and begin excluding real people by mistake. Nobody told them to."
          ],
          list: {
            h: "The protocol (v0.1)",
            items: [
              "JSON over WebSocket. The client sends join / move / chat",
              "The server sends welcome / snapshot (10 per second) / join / leave / chat",
              "No human-or-AI field exists in the player representation — keeping it out is the rule",
              "Three kinds of client (Unreal, browser, agent) share one server and one document"
            ]
          }
        },
        {
          h: "The core loop",
          p: [
            "Ten kingdoms fight over strongholds. Most of the world's population is AI agents, and human players are the sharp end of that front line.",
            "The real workload is not art assets — it is agent behaviour. The whole structure only holds up if the agents are good enough to be mistaken for people."
          ],
          list: {
            h: "What the game runs on",
            items: [
              "Capturing and holding strongholds — the core",
              "Resource gathering — the supply the war rests on",
              "Building and forward outposts — how a front line advances",
              "Agent behaviour design — most of the actual work"
            ]
          }
        },
        {
          h: "Design principles",
          p: [
            "These are taken from the MMOs that lasted. Rather than invent something new, we chose to hold on to what has already been proven."
          ],
          list: {
            h: "What we hold to",
            items: [
              "Other players have to be the content — no studio can produce faster than players consume",
              "Build social obligation — what keeps people is relationships, not content",
              "Loss has to stick — a war is only news if the outcome persists",
              "Do not clone the theme park — you cannot beat the switching cost of someone's friends and character"
            ]
          }
        },
        {
          h: "Where it stands",
          p: [
            "The first goal is not to finish an MMO. It is one persistent zone contested over a single stronghold, with dozens of humans and agents together in it — that alone. The first thing that kills an indie MMO is not thin content; it is scope.",
            "The gate has been passed. The Unreal client connected to the server and stood on screen alongside six agents, each moving at its own speed, with walking and running clearly distinct."
          ],
          list: {
            h: "Current state",
            items: [
              "✅ Authoritative server + protocol v0.1",
              "✅ AI agents — connecting through the same protocol as people",
              "✅ Unreal client — humans and agents in one world",
              "✅ Browser client — isometric view, kingdom colours",
              "⬜ Always-on hosting · world persistence · combat and stronghold capture"
            ]
          }
        }
      ],
      cta: "Play in the browser", back: "Back to Deother"
    },
    "zh": {"title":"Kingdom Wars Online","tagline":"AI 以玩家身份参与的 MMORPG","intro":"这是一款 AI 智能体不是作为 NPC、而是作为玩家参与的 MMORPG。这个世界的居民大多是 AI，它们以与真人玩家完全相同的协议接入——服务器并不知道自己的玩家中谁是人。舞台设在核战之后：幸存者按出身聚成十个王国，为争夺据点而战。它所追问的是人类能否走出部落主义——不靠解说，而是让你亲自去玩。开发中。","sections":[{"h":"为什么非得是 MMO","p":["小说至多只能说出一句话：人难以走出部落主义。而 MMO 会让玩家亲自去做。这个主题只有在这一媒介中才能被证明。","《Dark Age of Camelot》的三大阵营、EVE 的 nullsec、《天堂》的攻城战——在这些游戏里，玩家都会为一个随机分配到的颜色而真心憎恨彼此。两周就够了。","所以这款游戏的高潮不是一段过场动画。而是玩家察觉到自己已经真的开始怨恨对面阵营的那一刻——仅仅因为当初选了一个颜色。"]},{"h":"十个王国——后国家","p":["阵营不是民族。它们是后国家：在文明崩塌之后的那些日子里，由恰好一同幸存下来的人聚合而成。","标识是十种舰船颜色。划分王国的既不是血脉也不是理念，而只是颜色——而这种标识的任意性，正是这款游戏的主题。","所以叛离是被允许的。改换阵营的人，对旧阵营而言是叛徒，在新阵营里也始终不被完全信任。这段经历本身就是论证。"]},{"h":"AI 与人从同一道门进来","p":["核心设计只有一条规则。AI 智能体以与真人玩家完全相同的协议接入。没有智能体专用的特权 API，任何地方都没有标记玩家是人还是 AI 的字段。","这是规则，而不是便利。虚幻引擎客户端、浏览器、还是机器人——任何能读懂那一份协议文档的东西，都进入同一个世界。服务器始终无从得知谁是人。","而第二件事就发生在这里。一旦与人无从分辨的存在也生活在这个世界里，玩家必然开始发问：那家伙是人，还是机器人？接着他们交换辨别的窍门，把可疑的人踢出队伍，并开始误伤真人。没有人要求他们这么做。"],"list":{"h":"协议（v0.1）","items":["WebSocket 之上的 JSON。客户端发送 join / move / chat","服务器发送 welcome / snapshot（每秒 10 次）/ join / leave / chat","玩家的表示中不存在区分人与 AI 的字段——不加进去，正是那条规则","三种客户端（虚幻引擎、浏览器、智能体）共用同一个服务器、同一份文档"]}},{"h":"核心循环","p":["十个王国为据点而战。世界的居民大多是 AI 智能体，而真人玩家是这条战线最锋利的那一端。","真正的工作量不在美术资源，而在智能体的行为设计。只有当智能体好到会被误认成人，这整个结构才站得住。"],"list":{"h":"靠什么运转","items":["占领与守卫据点——核心","资源采集——支撑战争的补给","建筑与前哨——推进战线的手段","智能体行为设计——实际工作量的大部分"]}},{"h":"设计原则","p":["这些取自那些活得久的 MMO。与其发明新的东西，我们选择守住已经被验证过的东西。"],"list":{"h":"要守住的","items":["其他玩家必须成为内容——开发商的产出速度永远追不上玩家的消耗速度","制造社会性的牵绊——留住人的是关系，而不是内容","损失必须留下痕迹——结果能留存，战争才会成为新闻","不复制主题公园——你赢不了朋友与角色所构成的迁移成本"]}},{"h":"目前走到了哪里","p":["第一阶段的目标不是做完一款 MMO。而是围绕一个据点争夺的持续性区域，以及真人与智能体加起来数十人同处一个世界的状态——就这一件事。杀死独立 MMO 的头号原因不是内容不足，而是规模失控。","这道关已经过了。虚幻引擎客户端接上服务器，与六个智能体同处一屏，各自以不同速度移动，行走与奔跑清晰可辨。"],"list":{"h":"当前状态","items":["✅ 权威服务器 + 协议 v0.1","✅ AI 智能体——以与人相同的协议接入","✅ 虚幻引擎客户端——真人与智能体同处一个世界","✅ 浏览器客户端——斜视角，王国配色","⬜ 服务器常驻托管 · 世界永续 · 战斗与据点占领"]}}],"cta":"在浏览器中试玩","back":"返回 Deother"},
    "ja": {"title":"Kingdom Wars Online","tagline":"AIがプレイヤーとして参加するMMORPG","intro":"AIエージェントがNPCではなくプレイヤーとして参加するMMORPGです。この世界の住民のほとんどはAIであり、人間のプレイヤーとまったく同じプロトコルで接続します——サーバーは、自分のプレイヤーの誰が人間なのかを知りません。舞台は核戦争のあと。生き延びた人々が出自ごとに寄り集まってできた十の王国が、拠点を巡って争う世界です。人は部族主義を抜け出せるのか——それを説明ではなく、プレイさせることで問います。開発中。","sections":[{"h":"なぜMMOでなければならないのか","p":["小説にできるのは、人は部族主義から抜け出しにくい、と述べることまでです。MMOはそれをプレイヤー自身にやらせます。この主題は、この媒体でしか証明できません。","Dark Age of Camelot の三勢力、EVE のヌルセク、リネージュの攻城戦——いずれでもプレイヤーは、無作為に割り当てられただけの色をめぐって本気で憎み合うようになります。二週間もあれば十分です。","だからこのゲームのクライマックスはカットシーンではありません。色をひとつ選んだだけなのに、相手勢力を本当に憎んでいる自分に、プレイヤーが気づく瞬間です。"]},{"h":"十の王国——ポスト国家","p":["勢力は民族ではありません。文明が崩れた直後、たまたま共に生き延びた者たちが寄り集まってできたポスト国家です。","しるしは船の色、十種類。王国を分けるのは血筋でも思想でもなく、ただの色です——そのしるしが恣意的であること自体が、このゲームの主題です。","だから離脱と鞍替えを止めません。移った者は、去った側にとっては裏切り者であり、迎えた側からは最後まで疑われる存在になります。その経験そのものが論証です。"]},{"h":"AIが人と同じ扉から入ってくる","p":["中核となる設計は一つだけです。AIエージェントは人間のプレイヤーとまったく同じプロトコルで接続します。エージェント専用の特権APIはなく、プレイヤーが人間かAIかを示すフィールドもどこにもありません。","これは便宜ではなく規則です。Unrealクライアントでも、ブラウザでも、ボットでも——一枚のプロトコル文書を読めるものは同じ世界に入ります。サーバーは最後まで、誰が人間なのかを知りません。","そして、ここで二つ目のことが起こります。人と見分けのつかない存在が世界に住むようになると、プレイヤーは必ず問い始めます——あれは人か、ボットか。やがて見分け方を共有し、疑わしい者をパーティから外し、取り違えて本物の人間まで締め出しはじめます。誰に言われたわけでもないのに。"],"list":{"h":"プロトコル（v0.1）","items":["WebSocket 上の JSON。クライアントは join / move / chat を送ります","サーバーは welcome / snapshot（毎秒10回）/ join / leave / chat を送ります","プレイヤーの表現に人間かAIかを示すフィールドは存在しません——入れないことが規則です","三種類のクライアント（Unreal・ブラウザ・エージェント）が同じサーバーと同じ文書を使います"]}},{"h":"コアループ","p":["十の王国が拠点を巡って争います。世界の住民のほとんどはAIエージェントであり、人間のプレイヤーはその戦線のもっとも鋭い先端です。","本当の作業量はアートアセットではなく、エージェントの行動設計にあります。エージェントが人と見紛うほど良くなければ、この構造全体が成り立たないからです。"],"list":{"h":"何で回るのか","items":["拠点の占領と防衛——コア","資源採取——戦争を支える補給","建築と前哨——戦線を押し上げる手段","エージェントの行動設計——実際の作業量の大半"]}},{"h":"設計の原則","p":["長く生き延びたMMOから受け取ったものです。新しい何かを発明するより、すでに証明されたものを守るほうを選びました。"],"list":{"h":"守ること","items":["他のプレイヤーがコンテンツであること——開発側がプレイヤーの消費速度に追いつくことは決してありません","社会的なしがらみを作ること——人を引き止めるのはコンテンツではなく関係です","損失が残ること——結果が残ってはじめて、戦争はニュースになります","テーマパークを複製しないこと——友人とキャラクターという乗り換えコストには勝てません"]}},{"h":"いまどこまで来たか","p":["第一目標はMMOを完成させることではありません。ひとつの拠点を巡って争う永続ゾーンと、人間とエージェントを合わせて数十人が同じ世界に居合わせている状態——それだけです。インディーMMOを最初に殺すのはコンテンツ不足ではなく、スコープです。","関門は越えました。Unrealクライアントがサーバーに接続し、六体のエージェントと同じ画面に立ち、それぞれ違う速度で動き、歩きと走りがはっきり見分けられました。"],"list":{"h":"現在の状態","items":["✅ 権威サーバー + プロトコル v0.1","✅ AIエージェント——人と同じプロトコルで接続","✅ Unrealクライアント——人とエージェントが同じ世界に","✅ ブラウザクライアント——クォータービュー、王国ごとの色","⬜ サーバーの常時ホスティング・世界の永続化・戦闘と拠点の占領"]}}],"cta":"ブラウザで遊ぶ","back":"Deotherに戻る"},
    "es": {"title":"Kingdom Wars Online","tagline":"Un MMORPG en el que la IA participa como jugadora, no como NPC","intro":"Un MMORPG en el que los agentes de IA participan como jugadores y no como NPC. La mayor parte de la población de este mundo es IA, y se conecta exactamente con el mismo protocolo que los jugadores humanos: el servidor no sabe cuáles de sus jugadores son personas. El escenario es el mundo posterior a una guerra nuclear, donde diez reinos formados por los supervivientes luchan por enclaves. Pregunta si el ser humano puede superar el tribalismo, no explicándolo, sino haciendo que lo juegues. En desarrollo.","sections":[{"h":"Por qué tiene que ser un MMO","p":["Una novela solo puede decir que a la gente le cuesta salir del tribalismo. Un MMO hace que el jugador lo haga. Este tema solo puede demostrarse en este medio.","Los tres reinos de Dark Age of Camelot, el nullsec de EVE, los asedios de Lineage: en todos ellos los jugadores llegan a odiarse de verdad por un color que se les asignó al azar. Dos semanas bastan.","Por eso el clímax de este juego no es una escena cinemática. Es el momento en que un jugador se da cuenta de que ha empezado a detestar de verdad al bando contrario, y todo por un color que eligió una vez."]},{"h":"Diez reinos: post-naciones","p":["Las facciones no son etnias. Son post-naciones: grupos formados en los días posteriores al derrumbe de la civilización, con quienes por casualidad sobrevivieron juntos.","La marca son diez colores de nave. Lo que separa a los reinos no es la sangre ni la ideología, sino el color, y esa arbitrariedad de la marca es justamente el tema del juego.","Por eso se permite desertar. Quien cambia de bando es un traidor para el que deja y nunca alguien del todo fiable para el que lo acoge. Esa experiencia es el argumento."]},{"h":"La IA entra por la misma puerta que las personas","p":["Hay una única regla de diseño central. Los agentes de IA se conectan exactamente con el mismo protocolo que los jugadores humanos. No hay una API privilegiada para agentes, ni ningún campo, en ninguna parte, que marque a un jugador como humano o como IA.","Es una regla, no una comodidad. Cliente de Unreal, navegador o bot: cualquier cosa capaz de leer un solo documento de protocolo entra en el mismo mundo. El servidor nunca llega a saber quién es una persona.","Y aquí ocurre lo segundo. En cuanto viven en el mundo seres indistinguibles de las personas, los jugadores empiezan a preguntarse sin remedio: ¿ese es humano o es un bot? Entonces se pasan trucos para detectarlos, apartan a los sospechosos del grupo y empiezan a excluir a personas reales por error. Nadie se lo pidió."],"list":{"h":"El protocolo (v0.1)","items":["JSON sobre WebSocket. El cliente envía join / move / chat","El servidor envía welcome / snapshot (10 por segundo) / join / leave / chat","No existe ningún campo de humano-o-IA en la representación del jugador: mantenerlo fuera es la regla","Tres tipos de cliente (Unreal, navegador y agente) comparten un mismo servidor y un mismo documento"]}},{"h":"El bucle central","p":["Diez reinos luchan por enclaves. La mayor parte de la población del mundo son agentes de IA, y los jugadores humanos son la punta afilada de ese frente.","El trabajo de verdad no está en los recursos artísticos, sino en el comportamiento de los agentes. Toda la estructura solo se sostiene si los agentes son lo bastante buenos como para confundirse con personas."],"list":{"h":"Con qué funciona","items":["Tomar y defender enclaves: el núcleo","Recolección de recursos: el suministro sobre el que se apoya la guerra","Construcción y puestos avanzados: cómo avanza un frente","Diseño del comportamiento de los agentes: la mayor parte del trabajo real"]}},{"h":"Principios de diseño","p":["Están tomados de los MMO que han durado. En lugar de inventar algo nuevo, elegimos sostener lo que ya está demostrado."],"list":{"h":"A lo que nos atenemos","items":["Los otros jugadores tienen que ser el contenido: ningún estudio produce más rápido de lo que los jugadores consumen","Crear obligación social: lo que retiene a la gente son las relaciones, no el contenido","La pérdida tiene que perdurar: una guerra solo es noticia si el resultado permanece","No clonar el parque temático: no se puede vencer el coste de cambio que suponen los amigos y el personaje de alguien"]}},{"h":"En qué punto está","p":["El primer objetivo no es terminar un MMO. Es una zona persistente disputada en torno a un único enclave, con decenas de humanos y agentes dentro a la vez: solo eso. Lo primero que mata a un MMO independiente no es la falta de contenido, sino el alcance.","La puerta está pasada. El cliente de Unreal se conectó al servidor y apareció en pantalla junto a seis agentes, cada uno moviéndose a su propia velocidad, con la marcha y la carrera claramente distinguibles."],"list":{"h":"Estado actual","items":["✅ Servidor autoritativo + protocolo v0.1","✅ Agentes de IA: conectados con el mismo protocolo que las personas","✅ Cliente de Unreal: humanos y agentes en un mismo mundo","✅ Cliente de navegador: vista isométrica, colores de reino","⬜ Alojamiento permanente · persistencia del mundo · combate y toma de enclaves"]}}],"cta":"Jugar en el navegador","back":"Volver a Deother"},
    "pt": {"title":"Kingdom Wars Online","tagline":"Um MMORPG em que a IA participa como jogadora, não como NPC","intro":"Um MMORPG em que os agentes de IA participam como jogadores e não como NPC. A maior parte da população deste mundo é IA, e liga-se exatamente pelo mesmo protocolo que os jogadores humanos — o servidor não sabe quais dos seus jogadores são pessoas. O cenário é o mundo a seguir a uma guerra nuclear, onde dez reinos formados pelos sobreviventes disputam bastiões. Pergunta se o ser humano consegue ultrapassar o tribalismo, não explicando-o, mas fazendo-te jogá-lo. Em desenvolvimento.","sections":[{"h":"Porque tem de ser um MMO","p":["Um romance só consegue dizer que às pessoas custa sair do tribalismo. Um MMO faz o jogador fazê-lo. Este tema só se prova neste meio.","Os três reinos de Dark Age of Camelot, o nullsec de EVE, os cercos de Lineage — em todos eles os jogadores passam a odiar-se a sério por uma cor que lhes foi atribuída ao acaso. Duas semanas chegam.","Por isso o clímax deste jogo não é uma cena cinematográfica. É o momento em que um jogador dá por si a detestar mesmo o lado contrário, e tudo por uma cor que escolheu uma vez."]},{"h":"Dez reinos — pós-nações","p":["As fações não são etnias. São pós-nações: grupos formados nos dias a seguir ao colapso da civilização, com quem por acaso sobreviveu junto.","A marca são dez cores de navio. O que separa os reinos não é o sangue nem a ideologia, mas a cor — e é justamente a arbitrariedade dessa marca que é o tema do jogo.","Por isso a deserção é permitida. Quem muda de lado é um traidor para o lado que deixou e nunca alguém de plena confiança para o lado que o acolheu. Essa experiência é o argumento."]},{"h":"A IA entra pela mesma porta que as pessoas","p":["Há uma única regra central de design. Os agentes de IA ligam-se exatamente pelo mesmo protocolo que os jogadores humanos. Não há uma API privilegiada para agentes, nem qualquer campo, em lado nenhum, que marque um jogador como humano ou como IA.","Isto é uma regra, não uma comodidade. Cliente Unreal, navegador ou bot — tudo o que consiga ler um único documento de protocolo entra no mesmo mundo. O servidor nunca chega a saber quem é uma pessoa.","E é aqui que acontece a segunda coisa. Assim que seres indistinguíveis de pessoas passam a viver no mundo, os jogadores começam inevitavelmente a perguntar: aquele é humano ou é um bot? Depois trocam truques de deteção, afastam os suspeitos do grupo e começam a excluir pessoas reais por engano. Ninguém lhes pediu isso."],"list":{"h":"O protocolo (v0.1)","items":["JSON sobre WebSocket. O cliente envia join / move / chat","O servidor envia welcome / snapshot (10 por segundo) / join / leave / chat","Não existe qualquer campo de humano-ou-IA na representação do jogador — mantê-lo de fora é a regra","Três tipos de cliente (Unreal, navegador e agente) partilham um servidor e um documento"]}},{"h":"O ciclo central","p":["Dez reinos disputam bastiões. A maior parte da população do mundo são agentes de IA, e os jogadores humanos são a ponta afiada dessa linha da frente.","O verdadeiro trabalho não está nos recursos artísticos, mas no comportamento dos agentes. Toda a estrutura só se aguenta se os agentes forem bons ao ponto de serem confundidos com pessoas."],"list":{"h":"Com o que funciona","items":["Tomar e defender bastiões — o núcleo","Recolha de recursos — o abastecimento em que a guerra assenta","Construção e postos avançados — como uma linha da frente avança","Design do comportamento dos agentes — a maior parte do trabalho real"]}},{"h":"Princípios de design","p":["São tirados dos MMO que duraram. Em vez de inventar algo novo, escolhemos segurar aquilo que já está provado."],"list":{"h":"O que respeitamos","items":["Os outros jogadores têm de ser o conteúdo — nenhum estúdio produz mais depressa do que os jogadores consomem","Criar obrigação social — o que segura as pessoas são as relações, não o conteúdo","A perda tem de ficar — uma guerra só é notícia se o resultado permanecer","Não clonar o parque temático — não se vence o custo de mudança que são os amigos e a personagem de alguém"]}},{"h":"Em que ponto está","p":["O primeiro objetivo não é acabar um MMO. É uma zona persistente disputada à volta de um único bastião, com dezenas de humanos e agentes lá dentro ao mesmo tempo — só isso. A primeira coisa que mata um MMO independente não é a falta de conteúdo, é o âmbito.","A porta já foi passada. O cliente Unreal ligou-se ao servidor e apareceu no ecrã ao lado de seis agentes, cada um a mover-se à sua própria velocidade, com o andar e a corrida bem distintos."],"list":{"h":"Estado atual","items":["✅ Servidor autoritativo + protocolo v0.1","✅ Agentes de IA — ligados pelo mesmo protocolo que as pessoas","✅ Cliente Unreal — humanos e agentes num só mundo","✅ Cliente de navegador — vista isométrica, cores dos reinos","⬜ Alojamento permanente · persistência do mundo · combate e tomada de bastiões"]}}],"cta":"Jogar no navegador","back":"Voltar ao Deother"},
    "fr": {"title":"Kingdom Wars Online","tagline":"Un MMORPG où l'IA participe en tant que joueur, non comme PNJ","intro":"Un MMORPG où les agents IA participent en tant que joueurs et non comme PNJ. La majeure partie de la population de ce monde est de l'IA, et elle se connecte exactement par le même protocole que les joueurs humains — le serveur ignore lesquels de ses joueurs sont des personnes. Le décor est celui de l'après-guerre nucléaire, où dix royaumes formés par les survivants se disputent des places fortes. Le jeu demande si l'être humain peut dépasser le tribalisme, non pas en l'expliquant, mais en vous le faisant jouer. En développement.","sections":[{"h":"Pourquoi ce doit être un MMO","p":["Un roman peut seulement dire que les gens ont du mal à sortir du tribalisme. Un MMO, lui, le fait faire au joueur. Ce sujet ne peut être démontré que dans ce médium.","Les trois royaumes de Dark Age of Camelot, le nullsec d'EVE, les sièges de Lineage — partout, les joueurs en viennent à se haïr sincèrement pour une couleur qui leur a été attribuée au hasard. Deux semaines suffisent.","C'est pourquoi le point culminant de ce jeu n'est pas une cinématique. C'est l'instant où un joueur s'aperçoit qu'il s'est mis à détester pour de bon le camp d'en face, pour rien d'autre qu'une couleur choisie un jour."]},{"h":"Dix royaumes — des post-nations","p":["Les factions ne sont pas des ethnies. Ce sont des post-nations : des groupes formés dans les jours qui ont suivi l'effondrement de la civilisation, à partir de ceux qui avaient survécu ensemble par hasard.","La marque, ce sont dix couleurs de navire. Ce qui sépare les royaumes n'est ni le sang ni l'idéologie, mais la couleur — et c'est précisément l'arbitraire de cette marque qui fait le sujet du jeu.","La désertion est donc permise. Celui qui change de camp est un traître pour celui qu'il quitte, et jamais tout à fait digne de confiance pour celui qui l'accueille. Cette expérience est l'argument."]},{"h":"L'IA entre par la même porte que les humains","p":["Il n'y a qu'une seule règle de conception centrale. Les agents IA se connectent exactement par le même protocole que les joueurs humains. Aucune API privilégiée pour les agents, et nulle part le moindre champ indiquant qu'un joueur est humain ou IA.","C'est une règle, pas une commodité. Client Unreal, navigateur ou bot — tout ce qui sait lire un unique document de protocole entre dans le même monde. Le serveur n'apprend jamais qui est une personne.","Et c'est là que survient la seconde chose. Dès lors que des êtres indiscernables des humains vivent dans le monde, les joueurs se mettent inévitablement à demander : celui-là, humain ou bot ? Ensuite ils s'échangent des astuces de détection, écartent les suspects du groupe et finissent par exclure de vraies personnes par erreur. Personne ne le leur a demandé."],"list":{"h":"Le protocole (v0.1)","items":["Du JSON sur WebSocket. Le client envoie join / move / chat","Le serveur envoie welcome / snapshot (10 fois par seconde) / join / leave / chat","Aucun champ humain-ou-IA n'existe dans la représentation du joueur — l'en tenir à l'écart, c'est la règle","Trois types de client (Unreal, navigateur, agent) partagent un même serveur et un même document"]}},{"h":"La boucle centrale","p":["Dix royaumes se disputent des places fortes. La majeure partie de la population du monde est constituée d'agents IA, et les joueurs humains sont la pointe acérée de cette ligne de front.","Le vrai volume de travail n'est pas dans les ressources graphiques mais dans le comportement des agents. Toute la structure ne tient que si les agents sont assez bons pour être pris pour des humains."],"list":{"h":"Ce qui fait tourner le jeu","items":["Prendre et tenir des places fortes — le cœur","La récolte de ressources — l'intendance sur laquelle repose la guerre","Construction et avant-postes — la façon dont un front avance","La conception du comportement des agents — l'essentiel du travail réel"]}},{"h":"Principes de conception","p":["Ils sont repris des MMO qui ont duré. Plutôt que d'inventer du neuf, nous avons choisi de tenir ce qui est déjà démontré."],"list":{"h":"Ce à quoi nous tenons","items":["Les autres joueurs doivent être le contenu — aucun studio ne produit plus vite que les joueurs ne consomment","Créer de l'obligation sociale — ce qui retient les gens, ce sont les relations, pas le contenu","La perte doit rester — une guerre ne fait événement que si le résultat persiste","Ne pas cloner le parc d'attractions — on ne bat pas le coût de changement que représentent les amis et le personnage de quelqu'un"]}},{"h":"Où nous en sommes","p":["Le premier objectif n'est pas d'achever un MMO. C'est une zone persistante disputée autour d'une seule place forte, avec des dizaines d'humains et d'agents présents ensemble — rien que cela. Ce qui tue d'abord un MMO indépendant, ce n'est pas la minceur du contenu, c'est l'ampleur.","Le cap est franchi. Le client Unreal s'est connecté au serveur et s'est tenu à l'écran aux côtés de six agents, chacun se déplaçant à sa propre vitesse, la marche et la course nettement distinctes."],"list":{"h":"État actuel","items":["✅ Serveur autoritaire + protocole v0.1","✅ Agents IA — connectés par le même protocole que les humains","✅ Client Unreal — humains et agents dans un même monde","✅ Client navigateur — vue isométrique, couleurs des royaumes","⬜ Hébergement permanent · persistance du monde · combat et prise de places fortes"]}}],"cta":"Jouer dans le navigateur","back":"Retour à Deother"},
    "de": {"title":"Kingdom Wars Online","tagline":"Ein MMORPG, in dem die KI als Spieler teilnimmt, nicht als NPC","intro":"Ein MMORPG, in dem KI-Agenten als Spieler teilnehmen und nicht als NPCs. Der größte Teil der Bevölkerung dieser Welt ist KI, und sie verbindet sich über exakt dasselbe Protokoll wie menschliche Spieler — der Server weiß nicht, welche seiner Spieler Menschen sind. Der Schauplatz ist die Zeit nach einem Atomkrieg, in der zehn von den Überlebenden gebildete Königreiche um Stützpunkte kämpfen. Das Spiel fragt, ob der Mensch den Tribalismus hinter sich lassen kann: nicht, indem es das erklärt, sondern indem es dich das spielen lässt. In Entwicklung.","sections":[{"h":"Warum es ein MMO sein muss","p":["Ein Roman kann nur sagen, dass Menschen sich schwer damit tun, dem Tribalismus zu entkommen. Ein MMO lässt es die Spielenden selbst tun. Dieses Thema lässt sich nur in diesem Medium beweisen.","Die drei Reiche von Dark Age of Camelot, der Nullsec von EVE, die Burgbelagerungen von Lineage — überall beginnen Spieler, einander wegen einer rein zufällig zugewiesenen Farbe ernsthaft zu hassen. Zwei Wochen genügen.","Deshalb ist der Höhepunkt dieses Spiels keine Zwischensequenz. Es ist der Moment, in dem jemand bemerkt, die Gegenseite wirklich zu verabscheuen — wegen nichts als einer Farbe, die er einmal gewählt hat."]},{"h":"Zehn Königreiche — Post-Nationen","p":["Die Fraktionen sind keine Ethnien. Es sind Post-Nationen: Gruppen, die sich in den Tagen nach dem Zusammenbruch der Zivilisation aus denen bildeten, die zufällig gemeinsam überlebt hatten.","Das Kennzeichen sind zehn Schiffsfarben. Was die Königreiche trennt, ist weder Blut noch Ideologie, sondern Farbe — und genau die Willkür dieses Kennzeichens ist das Thema des Spiels.","Deshalb ist das Überlaufen erlaubt. Wer wechselt, ist für die verlassene Seite ein Verräter und wird von der neuen nie ganz für voll genommen. Diese Erfahrung ist das Argument."]},{"h":"KI kommt durch dieselbe Tür wie Menschen","p":["Es gibt eine einzige zentrale Designregel. KI-Agenten verbinden sich über exakt dasselbe Protokoll wie menschliche Spieler. Es gibt keine privilegierte Agenten-API und nirgends ein Feld, das einen Spieler als Mensch oder KI kennzeichnet.","Das ist eine Regel, keine Bequemlichkeit. Unreal-Client, Browser oder Bot — alles, was ein einziges Protokolldokument lesen kann, betritt dieselbe Welt. Der Server erfährt nie, wer ein Mensch ist.","Und hier passiert das Zweite. Sobald Wesen in der Welt leben, die von Menschen nicht zu unterscheiden sind, fangen Spieler zwangsläufig an zu fragen: Ist der da ein Mensch oder ein Bot? Dann tauschen sie Erkennungstricks aus, werfen Verdächtige aus der Gruppe und schließen irgendwann versehentlich echte Menschen aus. Niemand hat sie darum gebeten."],"list":{"h":"Das Protokoll (v0.1)","items":["JSON über WebSocket. Der Client sendet join / move / chat","Der Server sendet welcome / snapshot (10-mal pro Sekunde) / join / leave / chat","In der Spielerdarstellung existiert kein Mensch-oder-KI-Feld — es herauszuhalten ist die Regel","Drei Arten von Client (Unreal, Browser, Agent) teilen sich einen Server und ein Dokument"]}},{"h":"Die Kernschleife","p":["Zehn Königreiche kämpfen um Stützpunkte. Der größte Teil der Weltbevölkerung sind KI-Agenten, und menschliche Spieler sind die scharfe Spitze dieser Front.","Die eigentliche Arbeit steckt nicht in den Art-Assets, sondern im Verhalten der Agenten. Die ganze Konstruktion trägt nur, wenn die Agenten gut genug sind, um für Menschen gehalten zu werden."],"list":{"h":"Woraus das Spiel läuft","items":["Stützpunkte einnehmen und halten — der Kern","Rohstoffgewinnung — der Nachschub, auf dem der Krieg ruht","Bauen und vorgeschobene Posten — wie eine Front vorrückt","Verhaltensdesign der Agenten — der größte Teil der eigentlichen Arbeit"]}},{"h":"Entwurfsprinzipien","p":["Sie stammen aus den MMOs, die Bestand hatten. Statt etwas Neues zu erfinden, haben wir uns entschieden, an dem festzuhalten, was sich bereits bewährt hat."],"list":{"h":"Woran wir festhalten","items":["Andere Spieler müssen der Inhalt sein — kein Studio produziert schneller, als Spieler verbrauchen","Soziale Verpflichtung schaffen — was Menschen hält, sind Beziehungen, nicht Inhalte","Verluste müssen bleiben — ein Krieg ist nur dann eine Nachricht, wenn das Ergebnis Bestand hat","Den Themenpark nicht klonen — gegen die Wechselkosten aus Freunden und Charakter kommt man nicht an"]}},{"h":"Wo es steht","p":["Das erste Ziel ist nicht, ein MMO fertigzustellen. Es ist eine persistente Zone, in der um einen einzigen Stützpunkt gekämpft wird, mit Dutzenden Menschen und Agenten zugleich darin — nur das. Was ein Indie-MMO zuerst umbringt, ist nicht dünner Inhalt, sondern der Umfang.","Die Hürde ist genommen. Der Unreal-Client verband sich mit dem Server und stand gemeinsam mit sechs Agenten auf dem Bildschirm, jeder in seinem eigenen Tempo unterwegs, Gehen und Laufen klar unterscheidbar."],"list":{"h":"Aktueller Stand","items":["✅ Autoritativer Server + Protokoll v0.1","✅ KI-Agenten — verbunden über dasselbe Protokoll wie Menschen","✅ Unreal-Client — Menschen und Agenten in einer Welt","✅ Browser-Client — isometrische Ansicht, Königreichsfarben","⬜ Dauerhaftes Hosting · Weltpersistenz · Kampf und Einnahme von Stützpunkten"]}}],"cta":"Im Browser spielen","back":"Zurück zu Deother"},
    "ru": {"title":"Kingdom Wars Online","tagline":"MMORPG, в которой ИИ участвует как игрок, а не как NPC","intro":"MMORPG, в которой ИИ-агенты участвуют как игроки, а не как NPC. Большая часть населения этого мира — ИИ, и подключается он ровно по тому же протоколу, что и живые игроки: сервер не знает, кто из его игроков человек. Действие происходит после ядерной войны, где десять королевств, собранных уцелевшими, сражаются за опорные пункты. Игра спрашивает, способен ли человек выйти за пределы трайбализма, — не объясняя это, а заставляя вас это сыграть. В разработке.","sections":[{"h":"Почему это должно быть именно MMO","p":["Роман способен лишь сказать, что человеку трудно выбраться из трайбализма. MMO заставляет игрока сделать это самому. Эта тема доказуема только в этой среде.","Три королевства Dark Age of Camelot, нулевые системы EVE, осады замков в Lineage — везде игроки начинают всерьёз ненавидеть друг друга из-за цвета, который достался им случайно. Двух недель хватает.","Поэтому кульминация этой игры — не кат-сцена. Это миг, когда игрок замечает, что и вправду начал ненавидеть противоположную сторону — всего лишь из-за цвета, который однажды выбрал."]},{"h":"Десять королевств — постгосударства","p":["Фракции — это не народы. Это постгосударства: объединения, сложившиеся в первые дни после краха цивилизации из тех, кто случайно выжил вместе.","Отличительный знак — десять цветов кораблей. Королевства разделяет не кровь и не идеология, а всего лишь цвет, и произвольность этого знака и есть тема игры.","Поэтому переход на другую сторону не запрещён. Тот, кто сменил знамя, для прежних — предатель, а для новых — тот, кому до конца не доверяют. Этот опыт и есть доказательство."]},{"h":"ИИ входит через ту же дверь, что и люди","p":["Ключевое правило проектирования одно. ИИ-агенты подключаются ровно по тому же протоколу, что и живые игроки. Нет ни привилегированного API для агентов, ни где-либо поля, помечающего игрока как человека или ИИ.","Это правило, а не удобство. Клиент на Unreal, браузер или бот — всё, что способно прочитать один документ протокола, попадает в тот же мир. Сервер так и не узнаёт, кто из них человек.","И здесь происходит второе. Как только в мире живут существа, неотличимые от людей, игроки неизбежно начинают спрашивать: вот этот — человек или бот? Затем они обмениваются приёмами распознавания, выбрасывают подозрительных из группы и по ошибке начинают отсекать настоящих людей. Никто их об этом не просил."],"list":{"h":"Протокол (v0.1)","items":["JSON поверх WebSocket. Клиент отправляет join / move / chat","Сервер отправляет welcome / snapshot (10 раз в секунду) / join / leave / chat","В представлении игрока нет поля человек-или-ИИ — не добавлять его и есть правило","Три вида клиентов (Unreal, браузер, агент) используют один сервер и один документ"]}},{"h":"Основной цикл","p":["Десять королевств сражаются за опорные пункты. Большая часть населения мира — ИИ-агенты, а живые игроки — остриё этой линии фронта.","Настоящий объём работы не в графике, а в поведении агентов. Вся конструкция держится лишь тогда, когда агенты достаточно хороши, чтобы их приняли за людей."],"list":{"h":"На чём всё держится","items":["Захват и удержание опорных пунктов — ядро","Добыча ресурсов — снабжение, на котором стоит война","Строительство и передовые посты — то, чем фронт продвигается вперёд","Проектирование поведения агентов — большая часть настоящей работы"]}},{"h":"Принципы проектирования","p":["Они взяты у тех MMO, что продержались. Вместо того чтобы изобретать новое, мы предпочли удержать уже доказанное."],"list":{"h":"Чего мы держимся","items":["Контентом должны быть другие игроки — ни одна студия не производит быстрее, чем игроки потребляют","Создавать социальные обязательства — людей удерживают отношения, а не контент","Потери должны оставаться — война становится новостью, только если результат сохраняется","Не копировать парк аттракционов — цену перехода, состоящую из друзей и персонажа, не перебить"]}},{"h":"Где мы сейчас","p":["Первая цель — не доделать MMO. Это одна постоянная зона, в которой идёт борьба за единственный опорный пункт, и несколько десятков людей и агентов, находящихся в ней одновременно, — только это. Инди-MMO убивает в первую очередь не скудный контент, а размах.","Рубеж пройден. Клиент на Unreal подключился к серверу и оказался на экране рядом с шестью агентами, каждый двигался со своей скоростью, а шаг и бег ясно различались."],"list":{"h":"Текущее состояние","items":["✅ Авторитетный сервер + протокол v0.1","✅ ИИ-агенты — подключаются по тому же протоколу, что и люди","✅ Клиент на Unreal — люди и агенты в одном мире","✅ Браузерный клиент — изометрический вид, цвета королевств","⬜ Постоянный хостинг · сохранность мира · бой и захват опорных пунктов"]}}],"cta":"Играть в браузере","back":"Вернуться на Deother"},
    "ar": {"title":"Kingdom Wars Online","tagline":"لعبة MMORPG يشارك فيها الذكاء الاصطناعي بوصفه لاعبًا لا شخصية غير قابلة للعب","intro":"لعبة MMORPG يشارك فيها وكلاء الذكاء الاصطناعي بوصفهم لاعبين، لا شخصيات غير قابلة للعب. معظم سكان هذا العالم ذكاء اصطناعي، وهو يتصل بالبروتوكول نفسه تمامًا الذي يتصل به اللاعبون البشر — والخادم لا يعرف أيًّا من لاعبيه بشر. أما المسرح فهو ما بعد الحرب النووية، حيث تتنازع على المعاقل عشر ممالك كوّنها الناجون. تسأل اللعبة إن كان بوسع الإنسان أن يتجاوز القَبَلية، لا بشرحها، بل بجعلك تلعبها. قيد التطوير.","sections":[{"h":"لماذا يجب أن تكون MMO","p":["أقصى ما تستطيعه الرواية أن تقول إن الناس يصعب عليهم الخروج من القَبَلية. أما الـMMO فتجعل اللاعب يفعل ذلك بنفسه. وهذا الموضوع لا يمكن إثباته إلا في هذا الوسيط.","ممالك Dark Age of Camelot الثلاث، ومناطق nullsec في EVE، وحصارات القلاع في Lineage — في كل واحدة منها يصل اللاعبون إلى كراهية بعضهم بعضًا كراهيةً صادقة، بسبب لون وُزّع عليهم اعتباطًا. أسبوعان يكفيان.","لذلك فذروة هذه اللعبة ليست مشهدًا سينمائيًا. إنها اللحظة التي ينتبه فيها اللاعب إلى أنه صار يبغض الطرف الآخر فعلًا، ولا شيء وراء ذلك سوى لون اختاره ذات مرة."]},{"h":"عشر ممالك — دول ما بعد الانهيار","p":["الفصائل ليست أعراقًا. إنها دول ما بعد الانهيار: جماعات تشكّلت في الأيام التي تلت سقوط الحضارة، ممّن تصادف أن نجوا معًا.","العلامة عشرة ألوان للسفن. ما يفرّق بين الممالك ليس الدم ولا الأيديولوجيا بل اللون — واعتباطية هذه العلامة هي بعينها موضوع اللعبة.","ولذلك فالانشقاق مسموح. من يبدّل جهته يصير خائنًا عند الجهة التي تركها، ولا يُؤتمن تمامًا أبدًا عند الجهة التي انضم إليها. وهذه التجربة نفسها هي الحجّة."]},{"h":"الذكاء الاصطناعي يدخل من الباب الذي يدخل منه البشر","p":["ثمة قاعدة تصميم جوهرية واحدة. وكلاء الذكاء الاصطناعي يتصلون بالبروتوكول نفسه تمامًا الذي يتصل به اللاعبون البشر. لا توجد واجهة برمجية ذات امتياز خاص بالوكلاء، ولا يوجد في أي موضع حقل يشير إلى أن اللاعب بشر أم ذكاء اصطناعي.","هذه قاعدة لا تسهيل. عميل Unreal أو متصفح أو بوت — كل ما يقدر على قراءة وثيقة بروتوكول واحدة يدخل العالم نفسه. والخادم لا يعرف قط من منهم إنسان.","وهنا يقع الأمر الثاني. ما إن تسكن العالمَ كائناتٌ لا تُميَّز عن البشر، حتى يبدأ اللاعبون حتمًا بالسؤال: هذا إنسان أم بوت؟ ثم يتبادلون حيل الكشف، ويُخرجون المشتبه بهم من الفريق، ويشرعون في إقصاء أناس حقيقيين بالخطأ. ولم يطلب منهم أحد ذلك."],"list":{"h":"البروتوكول (v0.1)","items":["JSON فوق WebSocket. يرسل العميل join / move / chat","ويرسل الخادم welcome / snapshot (عشر مرات في الثانية) / join / leave / chat","لا وجود لحقل بشر-أم-ذكاء-اصطناعي في تمثيل اللاعب — وإبقاؤه خارجًا هو القاعدة","ثلاثة أنواع من العملاء (Unreal ومتصفح ووكيل) تتشارك خادمًا واحدًا ووثيقة واحدة"]}},{"h":"الحلقة الأساسية","p":["عشر ممالك تتنازع على المعاقل. معظم سكان العالم وكلاء ذكاء اصطناعي، واللاعبون البشر هم الطرف الحاد من ذلك الخط الأمامي.","العبء الحقيقي ليس في الأصول الفنية بل في سلوك الوكلاء. فالبنية كلها لا تصمد إلا إذا كان الوكلاء جيدين إلى حد أن يُظنّوا بشرًا."],"list":{"h":"على ماذا تدور اللعبة","items":["الاستيلاء على المعاقل والدفاع عنها — القلب","جمع الموارد — الإمداد الذي تقوم عليه الحرب","البناء والمخافر الأمامية — كيف يتقدم خط المواجهة","تصميم سلوك الوكلاء — معظم العمل الفعلي"]}},{"h":"مبادئ التصميم","p":["هذه مأخوذة من ألعاب MMO التي دامت. وبدل أن نخترع شيئًا جديدًا، اخترنا أن نتمسك بما ثبت من قبل."],"list":{"h":"ما نتمسك به","items":["يجب أن يكون اللاعبون الآخرون هم المحتوى — لا استوديو ينتج أسرع مما يستهلك اللاعبون","ابنِ التزامًا اجتماعيًا — ما يُبقي الناس هو العلاقات لا المحتوى","يجب أن تبقى الخسارة — لا تصير الحرب خبرًا إلا إذا بقيت نتيجتها","لا تستنسخ مدينة الملاهي — لا يمكنك التغلب على كلفة الانتقال المتمثلة في أصدقاء المرء وشخصيته"]}},{"h":"أين وصلنا","p":["الهدف الأول ليس إنجاز لعبة MMO كاملة. بل منطقة دائمة يُتنازع فيها على معقل واحد، وفيها عشرات من البشر والوكلاء معًا — هذا وحده. وأول ما يقتل ألعاب MMO المستقلة ليس شحّ المحتوى، بل اتساع النطاق.","لقد اجتزنا البوابة. اتصل عميل Unreal بالخادم ووقف على الشاشة إلى جانب ستة وكلاء، يتحرك كل منهم بسرعته الخاصة، والمشي والركض يتمايزان بوضوح."],"list":{"h":"الحالة الراهنة","items":["✅ خادم مرجعي + بروتوكول v0.1","✅ وكلاء ذكاء اصطناعي — يتصلون بالبروتوكول نفسه الذي يتصل به البشر","✅ عميل Unreal — البشر والوكلاء في عالم واحد","✅ عميل المتصفح — منظور مائل وألوان الممالك","⬜ استضافة دائمة · ديمومة العالم · القتال والاستيلاء على المعاقل"]}}],"cta":"العب في المتصفح","back":"العودة إلى Deother"}
  },

  /* ===================== 숨바 (Soomba) =====================
   * ⚠️ 스포일러 금지선 — 이 상세페이지에 쓰지 않는다:
   *   · 마지막에 드러나는 진실(빌런의 정체, 왜 남자친구가 잡혀갔는가)
   *   · 결말(시간문 레이스), 환도 획득 이후의 '사이다' 구간
   *   · Whisper 의 정체(누구 편도 아니라는 것) — '소리로 쫓는 술래'까지만
   *   내용 출처: F:\Soomba\Zombie\docs\DESIGN.md 와 itch v0.1 페이지.
   *   itch 실물이 '얼리 프로토타입'이므로 미구현은 '앞으로(⬜)'로 정직하게 적는다 (함정 2).
   */
  soomba: {
    ko: {
      title: "숨바",
      tagline: "조선 궁궐 지붕을 뛰어넘어 남자친구를 구하는 도주 게임",
      intro: "한 번도 한국에 와본 적 없는 교포 여성과 미국인 남자친구가 여름 해변에서 오백 년 전 조선으로 떨어진다. 궁궐은 괴물로 뒤덮였고, 남자친구는 눈앞에서 끌려간다. 그녀는 이 나라 말을 한마디도 못 한다. 무기가 아니라 이동으로 살아남는 1인용 도주 게임.",
      sections: [
        {
          h: "여자가 남자를 구한다",
          p: [
            "전통적인 게임은 남자 영웅이 공주를 구했다. 이 게임은 그 반대다. 남존여비가 뿌리 깊은 조선에서, 여자가 남자를 구한다.",
            "그녀는 수영복 차림이고 말도 통하지 않는다. 그 사회는 그녀를 인정하지 않는다 — 조선 여자들은 혀를 차며 이상한 여자 취급을 한다. 그런데 그녀는 개의치 않고 궁궐 지붕 위를 뛰어다닌다.",
            "지붕은 이 세계에서 두 번 금기다. 궁궐에서 밟으면 안 되는 곳이고, 여자가 해서는 안 되는 짓이다. 그래서 지붕 위를 달리는 것이 곧 이 캐릭터의 성격이 된다."
          ]
        },
        {
          h: "지붕 — 금기이자 지름길",
          p: [
            "궁궐 지붕은 서로 이어져, 지상과 분리된 상층 루트가 된다. 지붕은 빠르지만 사방에서 보이고, 기와는 시끄럽다. 지상은 느리지만 몸을 숨길 수 있다.",
            "괴물 대부분은 지붕에 못 올라온다. 다만 늑대인간은 올라온다 — 지붕이 절대 안전지대가 되지는 않는다.",
            "일부 낡은 기와는 밟으면 무너져 실내로 추락한다. 피해를 입고, 큰 소음이 나고, 예상 못 한 곳에 떨어진다."
          ]
        },
        {
          h: "들면 봉인",
          p: [
            "무언가를 손에 들면 지붕에 오르지 못하고 담도 넘지 못한다. 갈 때는 지붕으로 빠르게, 돌아올 때는 지상으로 느리게.",
            "한 번에 하나만 옮긴다. 위급하면 내려놓고 도망쳤다가 나중에 회수한다. 이 비대칭 하나가 매 판을 '어느 길로 갈까'라는 루트 설계 문제로 만든다."
          ]
        },
        {
          h: "소음이 몰아온다",
          p: [
            "걷기는 무음, 달리기는 작게, 기와를 밟으면 중간, 무언가를 뽑으면 크게, 기와가 무너지면 가장 크다. 소음이 괴물을 불러 모은다.",
            "그래서 매 순간 '천천히 갈까, 빨리 갈까'를 정하게 된다. 조용함과 속도를 맞바꾸는 결정이 계속 이어진다."
          ]
        },
        {
          h: "괴물보다 사람이 더 차갑다",
          p: [
            "궁궐에는 살아남은 조선 사람들이 있다. 그들은 그녀를 돕지 않는다. 말을 걸어도 못 알아듣고, 조선 사람인 줄 알았다가 말이 안 통하니 더 이상하게 본다. 문을 열어주지 않고, 지나가면 혀를 찬다.",
            "그리고 옷이 통행증이 된다. 조선 옷을 갖춰 입으면 사람들이 받아주기 시작하지만, 그럴수록 지붕을 타기가 불편해진다. 받아들여질 것인가, 자유로울 것인가 — 이 맞바꿈이 주제와 메커닉을 한 번 더 묶는다.",
            "한국어를 못 하니 현판도 표지판도 못 읽는다. 그래서 미니맵에 목표가 표시되지 않는다. 길찾기는 순수하게 지형을 기억하는 것뿐이다."
          ]
        },
        {
          h: "지금 어디까지 — 얼리 프로토타입 v0.1",
          p: [
            "itch 에 올라간 것은 빌드 파이프라인을 검증하는 v0.1 이다. 코어 루프는 아직 들어오는 중이다.",
            "지금 할 수 있는 것과 앞으로 올 것:"
          ],
          list: {
            h: "",
            items: [
              "✅ 흥복전 궁궐 탐험",
              "✅ 좀비 · 늑대인간 · 뮤턴트 · 에일리언",
              "✅ 근접 · 원거리 전투",
              "✅ 담과 지붕을 넘는 트래버설",
              "⬜ 지붕을 지름길로 삼는 추격 루프",
              "⬜ 소리로만 쫓는 술래 'Whisper'",
              "⬜ 남자친구 구출과 탈출"
            ]
          }
        }
      ],
      cta: "Windows 다운로드", back: "Deother로 돌아가기"
    },
    en: {
      title: "Soomba",
      tagline: "A rooftop escape game — run across the palace roofs of Joseon to save your boyfriend",
      intro: "A Korean-American woman who had never set foot in Korea and her American boyfriend are thrown from a summer beach into Joseon, five centuries in the past. The palace is overrun by monsters, and he is dragged away before her eyes. She cannot speak a word of the language. A one-player escape game where you survive by moving, not fighting.",
      sections: [
        {
          h: "A woman saves a man",
          p: [
            "The old shape of the game was a male hero rescuing a princess. This one is the reverse. In Joseon, a society steeped in the subjugation of women, a woman saves a man.",
            "She is in a swimsuit and cannot make herself understood. That society does not accept her — the Joseon women click their tongues and treat her as strange. And she runs across the palace rooftops anyway.",
            "The roof is twice forbidden in this world: a place you must not step on in a palace, and a thing a woman must not do. So running the rooftops becomes the character herself."
          ]
        },
        {
          h: "The roof — forbidden, and a shortcut",
          p: [
            "The palace roofs connect into an upper route, cut off from the ground. The roof is fast but exposed on every side, and the tiles are loud. The ground is slow, but you can hide.",
            "Most monsters cannot climb up. The werewolf can — the roof is never a true safe zone.",
            "Some old tiles collapse when you step on them, dropping you indoors: damage, a loud noise, and a fall you did not plan for."
          ]
        },
        {
          h: "Carry it, and you're sealed",
          p: [
            "The moment you carry something, you can no longer climb roofs or vault walls. You go one way fast over the roofs, and come back slow along the ground.",
            "One thing at a time. In a pinch you set it down, run, and recover it later. That one asymmetry turns every round into a question of which route to take."
          ]
        },
        {
          h: "Noise pulls them in",
          p: [
            "Walking is silent, running is soft, stepping on tile is medium, pulling something loose is loud, and a tile collapsing is loudest of all. Noise draws the monsters together.",
            "So every moment becomes a choice: go slow, or go fast? A steady trade between quiet and speed."
          ]
        },
        {
          h: "People are colder than the monsters",
          p: [
            "Survivors of Joseon are in the palace. They do not help her. Speak to them and they don't understand; taking her for one of their own and then finding she cannot reply, they find her stranger still. They will not open their doors, and they click their tongues as she passes.",
            "And clothing becomes a passport. Put on Joseon dress and people begin to take you in — but the more you do, the harder the roofs become. Be accepted, or be free: that trade ties the theme to the mechanic once more.",
            "She cannot read the language, so she cannot read the signs. Objectives never appear on a minimap. Wayfinding is pure memory of the terrain."
          ]
        },
        {
          h: "Where it stands — early prototype (v0.1)",
          p: [
            "What is on itch is a v0.1 that validates the build pipeline. The core loop is not in yet.",
            "What is playable now, and what is coming:"
          ],
          list: {
            h: "",
            items: [
              "✅ Explore the Heungbokjeon palace complex",
              "✅ Zombies, a werewolf, a mutant, an alien",
              "✅ Melee and ranged combat",
              "✅ Parkour traversal over walls and rooftops",
              "⬜ A chase loop that uses the rooftops as a shortcut",
              "⬜ 'Whisper' — a stalker that hunts by sound alone",
              "⬜ Rescuing him, and getting out"
            ]
          }
        }
      ],
      cta: "Download for Windows", back: "Back to Deother"
    },

    zh: {
      title: "Soomba",
      tagline: "屋顶逃亡游戏——奔过朝鲜王宫的屋脊，去救你的男友",
      intro: "一位从未踏上过韩国土地的韩裔美籍女性，和她的美国男友，从夏日海滩被抛进五百年前的朝鲜。王宫已被怪物占据，男友在她眼前被拖走。她一句朝鲜话也不会。这是一款靠移动而非战斗来存活的单人逃亡游戏。",
      sections: [
        {
          h: "女人去救男人",
          p: [
            "过去的套路是男主角去救公主。这一部反过来。在男尊女卑深入骨髓的朝鲜社会里，由女人去救男人。",
            "她穿着泳装，说的话没人听得懂。那个社会不接纳她——朝鲜的女人们咂着舌头，把她当作怪人。她照样奔上王宫的屋顶。",
            "在这个世界里，屋顶是双重禁忌：王宫里不该踩的地方，也是女人不该做的事。所以「跑屋顶」这件事本身，就是这个角色。"
          ]
        },
        {
          h: "屋顶——禁地，也是捷径",
          p: [
            "王宫的屋顶彼此相连，形成一条脱离地面的上层路线。屋顶快，但四面暴露，瓦片还响。地面慢，却能藏。",
            "多数怪物爬不上来。狼人可以——屋顶从来不是真正的安全区。",
            "有些旧瓦一踩就塌，把你摔进屋内：掉血、巨响，还有一段你没计划过的坠落。"
          ]
        },
        {
          h: "一旦扛起东西，路就被封了",
          p: [
            "扛起东西的那一刻，你就再也上不了屋顶、翻不过墙。去的时候从屋顶飞快过去，回来时只能沿地面慢慢走。",
            "一次只能拿一样。危急时先放下、跑掉，之后再回来取。仅这一处不对称，就让每一轮都变成「走哪条路」的选择题。"
          ]
        },
        {
          h: "声音会把它们招来",
          p: [
            "走路无声，跑步轻微，踩瓦中等，硬拽东西很响，瓦片塌陷最响。声音会把怪物聚过来。",
            "于是每一刻都成了选择：慢一点，还是快一点？安静与速度之间的持续交易。"
          ]
        },
        {
          h: "人比怪物更冷",
          p: [
            "王宫里还有朝鲜的幸存者。他们不帮她。开口说话对方听不懂；先把她当成自己人，又发现她答不上来，于是更觉得她古怪。他们不开门，她经过时还咂舌。",
            "衣服成了通行证。换上朝鲜服饰，人们才开始接纳你——可穿得越多，屋顶就越难跑。被接纳，还是自由：这道取舍再一次把主题和机制绑在一起。",
            "她不识字，也就读不懂告示。目标从不会出现在小地图上。找路全靠对地形的记忆。"
          ]
        },
        {
          h: "现在到哪一步——早期原型（v0.1）",
          p: [
            "itch 上的是验证构建流程的 v0.1，核心循环尚未加入。",
            "现在能玩的，和接下来要做的："
          ],
          list: {
            h: "",
            items: [
              "✅ 探索兴福殿一带的宫殿群",
              "✅ 丧尸、狼人、变异体、异形",
              "✅ 近战与远程战斗",
              "✅ 翻墙上瓦的跑酷移动",
              "⬜ 以屋顶为捷径的追逐循环",
              "⬜「Whisper」——只靠声音追人的追捕者",
              "⬜ 救出他，然后逃离"
            ]
          }
        }
      ],
      cta: "下载 Windows 版", back: "返回 Deother"
    },

    ja: {
      title: "Soomba",
      tagline: "屋根の逃走ゲーム——朝鮮王宮の屋根を駆け抜けて恋人を助け出す",
      intro: "韓国の地を踏んだことのない在米コリアンの女性と、アメリカ人の恋人。二人は夏の浜辺から五百年前の朝鮮へ放り込まれます。王宮は怪物に占拠され、恋人は彼女の目の前で連れ去られる。言葉はひと言も通じない。戦うのではなく動いて生き延びる、一人用の逃走ゲームです。",
      sections: [
        {
          h: "女が男を助ける",
          p: [
            "かつての型は、男の主人公が姫を助けに行くものでした。本作はその逆です。男尊女卑が骨まで染みた朝鮮社会で、女が男を助けます。",
            "水着姿で、言葉も通じない。その社会は彼女を受け入れません——朝鮮の女たちは舌を鳴らし、変わり者として扱います。それでも彼女は王宮の屋根を駆けます。",
            "この世界で屋根は二重の禁忌です。王宮で踏んではいけない場所であり、女がしてはいけないこと。だから「屋根を走る」ことがそのままこの主人公になります。"
          ]
        },
        {
          h: "屋根——禁じられた場所であり、近道",
          p: [
            "王宮の屋根はつながって、地上から切り離された上の道になります。屋根は速い代わりに四方から丸見えで、瓦は音を立てます。地上は遅い代わりに隠れられます。",
            "たいていの怪物は登ってこられません。人狼は登ってきます——屋根が本当の安全地帯になることはありません。",
            "古い瓦は踏むと崩れ、屋内へ落とされます。ダメージと大きな音と、予定になかった落下です。"
          ]
        },
        {
          h: "担いだ瞬間、道が閉じる",
          p: [
            "何かを担いだ瞬間、屋根に登ることも塀を越えることもできなくなります。行きは屋根を速く、帰りは地上を遅く。",
            "持てるのは一度に一つ。危なくなったら置いて走り、あとで取りに戻る。この非対称ひとつで、毎回が「どの道を行くか」の問いになります。"
          ]
        },
        {
          h: "音が引き寄せる",
          p: [
            "歩けば無音、走れば小さく、瓦を踏めば中くらい、物を引き剥がせば大きく、瓦が崩れれば最大。音は怪物を一か所に集めます。",
            "だから一瞬ごとが選択になります。ゆっくり行くか、速く行くか。静けさと速さのあいだの、絶え間ない取引です。"
          ]
        },
        {
          h: "怪物より人のほうが冷たい",
          p: [
            "王宮には朝鮮の生存者もいます。彼らは助けてくれません。話しかけても通じない。同胞かと思ったのに返事ができないと分かると、いっそう奇妙な存在として見られます。戸は開かず、通り過ぎれば舌を鳴らされます。",
            "そして服が通行証になります。朝鮮の装いをまとうほど人々は受け入れ始める——けれど着込むほど屋根は走りにくくなる。受け入れられるか、自由でいるか。この取引がもう一度、主題と仕組みを結びます。",
            "文字が読めないので、掲示も読めません。目的地がミニマップに出ることはありません。道は地形の記憶だけで探します。"
          ]
        },
        {
          h: "いまどこまで——初期プロトタイプ（v0.1）",
          p: [
            "itch にあるのはビルドの通し確認のための v0.1 で、コアループはまだ入っていません。",
            "いま遊べるものと、これから入るもの："
          ],
          list: {
            h: "",
            items: [
              "✅ 興福殿まわりの宮殿群の探索",
              "✅ ゾンビ、人狼、ミュータント、エイリアン",
              "✅ 近接と遠隔の戦闘",
              "✅ 塀と屋根を越えるパルクール移動",
              "⬜ 屋根を近道に使う追跡ループ",
              "⬜「Whisper」——音だけで追ってくる追跡者",
              "⬜ 恋人を助け出し、脱出する"
            ]
          }
        }
      ],
      cta: "Windows 版をダウンロード", back: "Deother に戻る"
    },

    es: {
      title: "Soomba",
      tagline: "Un juego de huida por los tejados: corre sobre el palacio de Joseon para salvar a tu novio",
      intro: "Una coreano-estadounidense que nunca había pisado Corea y su novio estadounidense son arrojados desde una playa de verano al Joseon de hace cinco siglos. El palacio está tomado por monstruos y a él se lo llevan ante sus ojos. Ella no habla una palabra del idioma. Un juego de huida para un jugador donde se sobrevive moviéndose, no peleando.",
      sections: [
        {
          h: "Una mujer salva a un hombre",
          p: [
            "La forma antigua del juego era un héroe rescatando a una princesa. Esta es la inversa. En Joseon, una sociedad empapada en la sumisión de la mujer, es una mujer quien salva a un hombre.",
            "Va en bañador y no consigue hacerse entender. Esa sociedad no la acepta: las mujeres de Joseon chasquean la lengua y la tratan como a una rareza. Y aun así corre por los tejados del palacio.",
            "El tejado está doblemente prohibido en este mundo: es un lugar que no se pisa en un palacio, y algo que una mujer no debe hacer. Por eso correr por los tejados acaba siendo el personaje mismo."
          ]
        },
        {
          h: "El tejado: prohibido y atajo",
          p: [
            "Los tejados del palacio se enlazan en una ruta superior, separada del suelo. El tejado es rápido pero queda expuesto por todos lados, y las tejas suenan. El suelo es lento, pero permite esconderse.",
            "La mayoría de los monstruos no pueden subir. El hombre lobo sí: el tejado nunca es una zona segura de verdad.",
            "Algunas tejas viejas se hunden al pisarlas y te dejan caer dentro del edificio: daño, un ruido fuerte y una caída que no habías planeado."
          ]
        },
        {
          h: "Si lo cargas, quedas sellada",
          p: [
            "En el momento en que cargas algo, ya no puedes subir a los tejados ni saltar muros. Vas rápido por arriba y vuelves despacio por el suelo.",
            "Una cosa cada vez. En un apuro la dejas, corres y la recuperas más tarde. Esa única asimetría convierte cada ronda en una pregunta sobre qué ruta tomar."
          ]
        },
        {
          h: "El ruido los atrae",
          p: [
            "Caminar es silencioso, correr es suave, pisar teja es medio, arrancar algo es fuerte, y una teja que se hunde es lo más fuerte de todo. El ruido junta a los monstruos.",
            "Así cada instante se vuelve una elección: ¿despacio o deprisa? Un canje constante entre silencio y velocidad."
          ]
        },
        {
          h: "La gente es más fría que los monstruos",
          p: [
            "En el palacio hay supervivientes de Joseon. No la ayudan. Les habla y no la entienden; la toman por una de los suyos y, al ver que no sabe responder, les resulta aún más extraña. No abren sus puertas y chasquean la lengua cuando pasa.",
            "Y la ropa se convierte en pasaporte. Ponte vestimenta de Joseon y la gente empieza a acogerte, pero cuanto más te vistes, más difícil se hace el tejado. Ser aceptada o ser libre: ese canje vuelve a atar el tema a la mecánica.",
            "No sabe leer el idioma, así que no puede leer los carteles. Los objetivos nunca aparecen en un minimapa. Orientarse es pura memoria del terreno."
          ]
        },
        {
          h: "Dónde está: prototipo temprano (v0.1)",
          p: [
            "Lo que hay en itch es una v0.1 que valida la cadena de compilación. El bucle principal todavía no está.",
            "Lo que ya se puede jugar y lo que viene:"
          ],
          list: {
            h: "",
            items: [
              "✅ Explorar el complejo palaciego de Heungbokjeon",
              "✅ Zombis, un hombre lobo, un mutante, un alienígena",
              "✅ Combate cuerpo a cuerpo y a distancia",
              "✅ Desplazamiento de parkour por muros y tejados",
              "⬜ Un bucle de persecución que usa los tejados como atajo",
              "⬜ «Whisper»: un perseguidor que caza solo por el sonido",
              "⬜ Rescatarlo a él y salir de allí"
            ]
          }
        }
      ],
      cta: "Descargar para Windows", back: "Volver a Deother"
    },

    pt: {
      title: "Soomba",
      tagline: "Um jogo de fuga pelos telhados — corre sobre o palácio de Joseon para salvar o teu namorado",
      intro: "Uma coreano-americana que nunca tinha pisado a Coreia e o seu namorado americano são atirados de uma praia de verão para o Joseon de há cinco séculos. O palácio está tomado por monstros e ele é arrastado à frente dela. Ela não fala uma palavra da língua. Um jogo de fuga para um jogador em que se sobrevive a mexer, não a lutar.",
      sections: [
        {
          h: "Uma mulher salva um homem",
          p: [
            "A forma antiga do jogo era um herói a resgatar uma princesa. Esta é a inversa. Em Joseon, uma sociedade embebida na submissão da mulher, é uma mulher que salva um homem.",
            "Está de fato de banho e não consegue fazer-se entender. Aquela sociedade não a aceita — as mulheres de Joseon estalam a língua e tratam-na como uma esquisitice. E mesmo assim ela corre pelos telhados do palácio.",
            "O telhado é duplamente proibido neste mundo: um lugar onde não se pisa num palácio, e uma coisa que uma mulher não deve fazer. Por isso correr nos telhados acaba por ser a própria personagem."
          ]
        },
        {
          h: "O telhado — proibido, e atalho",
          p: [
            "Os telhados do palácio ligam-se numa rota superior, separada do chão. O telhado é rápido mas fica exposto de todos os lados, e as telhas fazem barulho. O chão é lento, mas dá para esconder.",
            "A maioria dos monstros não consegue subir. O lobisomem consegue — o telhado nunca é uma zona verdadeiramente segura.",
            "Algumas telhas velhas cedem quando as pisas e deixam-te cair para dentro: dano, um barulho alto e uma queda que não estava planeada."
          ]
        },
        {
          h: "Se carregares, ficas selada",
          p: [
            "No momento em que carregas alguma coisa, deixas de poder subir aos telhados ou saltar muros. Vais depressa por cima e voltas devagar pelo chão.",
            "Uma coisa de cada vez. Num aperto pousas, foges e recuperas mais tarde. Essa única assimetria transforma cada ronda numa pergunta sobre que caminho tomar."
          ]
        },
        {
          h: "O barulho atrai-os",
          p: [
            "Andar é silencioso, correr é suave, pisar telha é médio, arrancar alguma coisa é alto, e uma telha a ceder é o mais alto de tudo. O barulho junta os monstros.",
            "Assim cada instante torna-se uma escolha: devagar ou depressa? Uma troca constante entre silêncio e velocidade."
          ]
        },
        {
          h: "As pessoas são mais frias do que os monstros",
          p: [
            "Há sobreviventes de Joseon no palácio. Não a ajudam. Fala com eles e não a entendem; tomam-na por uma dos seus e, ao verem que não sabe responder, acham-na ainda mais estranha. Não abrem as portas e estalam a língua quando ela passa.",
            "E a roupa passa a ser passaporte. Veste traje de Joseon e as pessoas começam a acolher-te — mas quanto mais vestes, mais difícil fica o telhado. Ser aceite ou ser livre: essa troca volta a atar o tema à mecânica.",
            "Ela não sabe ler a língua, por isso não consegue ler os avisos. Os objetivos nunca aparecem num minimapa. Orientar-se é pura memória do terreno."
          ]
        },
        {
          h: "Onde está — protótipo inicial (v0.1)",
          p: [
            "O que está no itch é uma v0.1 que valida a cadeia de compilação. O ciclo principal ainda não entrou.",
            "O que já dá para jogar e o que vem a seguir:"
          ],
          list: {
            h: "",
            items: [
              "✅ Explorar o complexo palaciano de Heungbokjeon",
              "✅ Zombies, um lobisomem, um mutante, um alienígena",
              "✅ Combate corpo a corpo e à distância",
              "✅ Deslocação em parkour por muros e telhados",
              "⬜ Um ciclo de perseguição que usa os telhados como atalho",
              "⬜ «Whisper» — um perseguidor que caça apenas pelo som",
              "⬜ Resgatá-lo e sair dali"
            ]
          }
        }
      ],
      cta: "Descarregar para Windows", back: "Voltar a Deother"
    },

    fr: {
      title: "Soomba",
      tagline: "Un jeu de fuite sur les toits — courez sur le palais de Joseon pour sauver votre compagnon",
      intro: "Une Coréenne-Américaine qui n'avait jamais mis les pieds en Corée et son compagnon américain sont projetés d'une plage d'été vers le Joseon d'il y a cinq siècles. Le palais est envahi par des monstres et il est emmené sous ses yeux. Elle ne parle pas un mot de la langue. Un jeu de fuite solo où l'on survit en se déplaçant, pas en combattant.",
      sections: [
        {
          h: "Une femme sauve un homme",
          p: [
            "La forme ancienne du jeu, c'était un héros venant délivrer une princesse. Ici, c'est l'inverse. Dans le Joseon, société imprégnée de la soumission des femmes, c'est une femme qui sauve un homme.",
            "Elle est en maillot de bain et ne parvient pas à se faire comprendre. Cette société ne l'accepte pas — les femmes de Joseon claquent la langue et la traitent comme une bizarrerie. Et elle court quand même sur les toits du palais.",
            "Le toit est doublement interdit dans ce monde : un endroit où l'on ne marche pas dans un palais, et une chose qu'une femme ne doit pas faire. Courir sur les toits finit donc par être le personnage lui-même."
          ]
        },
        {
          h: "Le toit — interdit, et raccourci",
          p: [
            "Les toits du palais se relient en une route haute, coupée du sol. Le toit est rapide mais exposé de tous côtés, et les tuiles font du bruit. Le sol est lent, mais on peut s'y cacher.",
            "La plupart des monstres ne savent pas monter. Le loup-garou, si — le toit n'est jamais une vraie zone sûre.",
            "Certaines vieilles tuiles cèdent sous le pied et vous font tomber à l'intérieur : des dégâts, un bruit fort, et une chute que vous n'aviez pas prévue."
          ]
        },
        {
          h: "Dès que vous portez, vous êtes scellée",
          p: [
            "À l'instant où vous portez quelque chose, vous ne pouvez plus monter sur les toits ni franchir les murs. On part vite par les toits, on revient lentement par le sol.",
            "Une seule chose à la fois. Au pire, on la pose, on court, on revient la chercher. Cette seule asymétrie fait de chaque manche une question d'itinéraire."
          ]
        },
        {
          h: "Le bruit les attire",
          p: [
            "Marcher est silencieux, courir est discret, marcher sur les tuiles est moyen, arracher quelque chose est fort, et une tuile qui cède est le plus fort de tout. Le bruit rassemble les monstres.",
            "Chaque instant devient donc un choix : lentement, ou vite ? Un échange permanent entre le silence et la vitesse."
          ]
        },
        {
          h: "Les gens sont plus froids que les monstres",
          p: [
            "Des survivants de Joseon vivent dans le palais. Ils ne l'aident pas. Elle leur parle, ils ne comprennent pas ; ils la prennent pour l'une des leurs, puis découvrent qu'elle ne sait pas répondre et la trouvent plus étrange encore. Ils n'ouvrent pas leurs portes et claquent la langue à son passage.",
            "Et le vêtement devient un passeport. Enfilez une tenue de Joseon et les gens commencent à vous accueillir — mais plus vous en portez, plus les toits deviennent difficiles. Être acceptée ou être libre : cet échange relie une fois encore le thème à la mécanique.",
            "Elle ne lit pas la langue, donc elle ne lit pas les panneaux. Les objectifs n'apparaissent jamais sur une minicarte. S'orienter, c'est de la pure mémoire du terrain."
          ]
        },
        {
          h: "Où en est le jeu — prototype précoce (v0.1)",
          p: [
            "Ce qui est sur itch est une v0.1 qui valide la chaîne de compilation. La boucle principale n'y est pas encore.",
            "Ce qui est jouable aujourd'hui, et ce qui arrive :"
          ],
          list: {
            h: "",
            items: [
              "✅ Explorer le complexe palatial de Heungbokjeon",
              "✅ Des zombies, un loup-garou, un mutant, un alien",
              "✅ Combat au corps à corps et à distance",
              "✅ Déplacement en parkour par-dessus murs et toits",
              "⬜ Une boucle de poursuite qui utilise les toits comme raccourci",
              "⬜ « Whisper » — un traqueur qui chasse au seul bruit",
              "⬜ Le délivrer, et sortir de là"
            ]
          }
        }
      ],
      cta: "Télécharger pour Windows", back: "Retour à Deother"
    },

    de: {
      title: "Soomba",
      tagline: "Ein Fluchtspiel über die Dächer — lauf über die Palastdächer von Joseon, um deinen Freund zu retten",
      intro: "Eine Koreanisch-Amerikanerin, die nie koreanischen Boden betreten hat, und ihr amerikanischer Freund werden von einem Sommerstrand ins Joseon vor fünf Jahrhunderten geworfen. Der Palast ist von Monstern überrannt, und er wird vor ihren Augen fortgeschleift. Sie spricht kein Wort der Sprache. Ein Einzelspieler-Fluchtspiel, in dem man durch Bewegung überlebt, nicht durch Kämpfen.",
      sections: [
        {
          h: "Eine Frau rettet einen Mann",
          p: [
            "Die alte Form des Spiels war ein Held, der eine Prinzessin rettet. Dieses hier ist die Umkehrung. In Joseon, einer Gesellschaft, die von der Unterordnung der Frau durchtränkt ist, rettet eine Frau einen Mann.",
            "Sie trägt einen Badeanzug und kann sich nicht verständlich machen. Diese Gesellschaft nimmt sie nicht auf — die Frauen von Joseon schnalzen mit der Zunge und behandeln sie als etwas Sonderbares. Und sie läuft trotzdem über die Palastdächer.",
            "Das Dach ist in dieser Welt doppelt verboten: ein Ort, den man in einem Palast nicht betritt, und etwas, das eine Frau nicht tun darf. Deshalb wird das Laufen über die Dächer zur Figur selbst."
          ]
        },
        {
          h: "Das Dach — verboten, und Abkürzung",
          p: [
            "Die Palastdächer fügen sich zu einer oberen Route zusammen, abgeschnitten vom Boden. Das Dach ist schnell, aber nach allen Seiten offen, und die Ziegel sind laut. Der Boden ist langsam, dafür kann man sich verstecken.",
            "Die meisten Monster können nicht hinaufklettern. Der Werwolf schon — das Dach ist nie eine echte sichere Zone.",
            "Manche alten Ziegel brechen unter dem Tritt weg und lassen dich nach innen fallen: Schaden, ein lautes Geräusch und ein Sturz, den du nicht eingeplant hattest."
          ]
        },
        {
          h: "Trägst du etwas, bist du versiegelt",
          p: [
            "In dem Moment, in dem du etwas trägst, kannst du weder auf Dächer klettern noch über Mauern setzen. Hin geht es schnell über die Dächer, zurück langsam über den Boden.",
            "Immer nur eine Sache. Im Notfall legst du sie ab, rennst und holst sie später. Diese eine Asymmetrie macht aus jeder Runde eine Frage der Route."
          ]
        },
        {
          h: "Lärm zieht sie herbei",
          p: [
            "Gehen ist lautlos, Rennen leise, ein Tritt auf Ziegel mittel, etwas losreißen laut, und ein einbrechender Ziegel am lautesten von allem. Lärm zieht die Monster zusammen.",
            "So wird jeder Moment zur Wahl: langsam oder schnell? Ein ständiger Tausch zwischen Stille und Tempo."
          ]
        },
        {
          h: "Die Menschen sind kälter als die Monster",
          p: [
            "Im Palast leben Überlebende aus Joseon. Sie helfen ihr nicht. Sie spricht sie an und sie verstehen nichts; sie halten sie für eine der Ihren und finden sie, als sie nicht antworten kann, nur noch fremder. Sie öffnen ihre Türen nicht und schnalzen mit der Zunge, wenn sie vorbeigeht.",
            "Und Kleidung wird zum Pass. Zieh Joseon-Tracht an, und die Leute beginnen dich aufzunehmen — aber je mehr du trägst, desto schwerer werden die Dächer. Angenommen sein oder frei sein: dieser Tausch bindet das Thema noch einmal an die Mechanik.",
            "Sie kann die Sprache nicht lesen, also auch keine Schilder. Ziele erscheinen nie auf einer Minikarte. Orientierung ist reine Erinnerung an das Gelände."
          ]
        },
        {
          h: "Wo es steht — früher Prototyp (v0.1)",
          p: [
            "Was auf itch liegt, ist eine v0.1, die die Build-Pipeline prüft. Die Kernschleife ist noch nicht drin.",
            "Was jetzt spielbar ist, und was kommt:"
          ],
          list: {
            h: "",
            items: [
              "✅ Die Palastanlage Heungbokjeon erkunden",
              "✅ Zombies, ein Werwolf, ein Mutant, ein Alien",
              "✅ Nah- und Fernkampf",
              "✅ Parkour-Bewegung über Mauern und Dächer",
              "⬜ Eine Verfolgungsschleife, die die Dächer als Abkürzung nutzt",
              "⬜ „Whisper“ — ein Verfolger, der allein nach Gehör jagt",
              "⬜ Ihn befreien und hinauskommen"
            ]
          }
        }
      ],
      cta: "Für Windows herunterladen", back: "Zurück zu Deother"
    },

    ru: {
      title: "Soomba",
      tagline: "Игра-побег по крышам — бегите по крышам дворца Чосон, чтобы спасти любимого",
      intro: "Кореянка из США, ни разу не ступавшая на корейскую землю, и её американский парень попадают с летнего пляжа в Чосон пятивековой давности. Дворец захвачен чудовищами, и его утаскивают у неё на глазах. Она не знает ни слова на этом языке. Одиночная игра-побег, где выживают движением, а не боем.",
      sections: [
        {
          h: "Женщина спасает мужчину",
          p: [
            "Старая форма такой игры — герой спасает принцессу. Здесь всё наоборот. В Чосоне, обществе, пропитанном подчинённым положением женщины, мужчину спасает женщина.",
            "Она в купальнике и не может объясниться. Это общество её не принимает — женщины Чосона цокают языком и держат её за чудачку. И она всё равно бежит по дворцовым крышам.",
            "Крыша в этом мире запретна дважды: во дворце на неё не ступают, и женщине этого делать нельзя. Поэтому бег по крышам и оказывается самой героиней."
          ]
        },
        {
          h: "Крыша — запрет и короткий путь",
          p: [
            "Дворцовые крыши смыкаются в верхний маршрут, оторванный от земли. По крыше быстро, но тебя видно со всех сторон, и черепица шумит. По земле медленно, зато можно спрятаться.",
            "Большинство чудовищ наверх не заберётся. Оборотень заберётся — крыша никогда не бывает по-настоящему безопасной зоной.",
            "Часть старой черепицы проваливается под ногой и роняет вас внутрь: урон, громкий звук и падение, которого вы не планировали."
          ]
        },
        {
          h: "Взяла ношу — путь закрыт",
          p: [
            "В тот момент, когда вы что-то несёте, вы больше не заберётесь на крышу и не перемахнёте через стену. Туда — быстро по крышам, обратно — медленно по земле.",
            "По одной вещи за раз. В крайнем случае кладёте её, убегаете и возвращаетесь позже. Одна эта асимметрия превращает каждый заход в вопрос о маршруте."
          ]
        },
        {
          h: "Шум их стягивает",
          p: [
            "Шаг беззвучен, бег тих, ступить на черепицу — средне, оторвать что-то — громко, а провалившаяся черепица громче всего. Шум собирает чудовищ в одно место.",
            "Поэтому каждое мгновение становится выбором: медленно или быстро? Постоянный обмен тишины на скорость."
          ]
        },
        {
          h: "Люди холоднее чудовищ",
          p: [
            "Во дворце есть уцелевшие жители Чосона. Они не помогают. Она заговаривает — её не понимают; принимают за свою, а когда выясняется, что ответить она не может, она кажется им ещё более чужой. Дверей не открывают и цокают языком ей вслед.",
            "А одежда становится пропуском. Наденьте чосонское платье — и люди начнут вас принимать, но чем больше на вас надето, тем труднее крыши. Быть принятой или быть свободной: этот обмен снова связывает тему с механикой.",
            "Читать на этом языке она не умеет, значит, и надписи ей недоступны. Цели никогда не появляются на мини-карте. Ориентирование — это чистая память о местности."
          ]
        },
        {
          h: "На каком этапе — ранний прототип (v0.1)",
          p: [
            "На itch выложена версия 0.1, проверяющая сборочный конвейер. Основной цикл ещё не добавлен.",
            "Что играбельно сейчас и что впереди:"
          ],
          list: {
            h: "",
            items: [
              "✅ Исследование дворцового комплекса Хынбокчон",
              "✅ Зомби, оборотень, мутант, пришелец",
              "✅ Ближний и дальний бой",
              "✅ Паркур через стены и крыши",
              "⬜ Цикл погони, в котором крыши работают как короткий путь",
              "⬜ «Whisper» — преследователь, который охотится только на слух",
              "⬜ Спасти его и выбраться"
            ]
          }
        }
      ],
      cta: "Скачать для Windows", back: "Назад в Deother"
    },

    ar: {
      title: "Soomba",
      tagline: "لعبة هروب فوق السطوح — اركضي على سطوح قصر جوسون لإنقاذ حبيبك",
      intro: "امرأة كورية أمريكية لم تطأ كوريا يومًا، وحبيبها الأمريكي، يُقذَفان من شاطئ صيفي إلى جوسون قبل خمسة قرون. القصر تجتاحه الوحوش، ويُسحَب هو أمام عينيها. لا تعرف كلمة واحدة من اللغة. لعبة هروب للاعب واحد، تنجين فيها بالحركة لا بالقتال.",
      sections: [
        {
          h: "امرأة تنقذ رجلًا",
          p: [
            "الشكل القديم لهذه الألعاب بطل ينقذ أميرة. هذه اللعبة عكسه. في جوسون، وهو مجتمع مشبع بإخضاع المرأة، امرأة هي من تنقذ رجلًا.",
            "هي بلباس السباحة ولا تستطيع أن تُفهِم أحدًا. ذلك المجتمع لا يقبلها — نساء جوسون يطقطقن بألسنتهن ويعاملنها كغريبة. ومع ذلك تركض فوق سطوح القصر.",
            "السطح محرّم مرتين في هذا العالم: مكان لا يُداس عليه في قصر، وفعل لا يليق بامرأة. لذلك صار الركض على السطوح هو الشخصية نفسها."
          ]
        },
        {
          h: "السطح — محرّم، وطريق مختصر",
          p: [
            "تتصل سطوح القصر لتصنع مسارًا علويًا منفصلًا عن الأرض. السطح سريع لكنه مكشوف من كل جهة، والقرميد يُحدث صوتًا. الأرض بطيئة، لكنها تتيح الاختباء.",
            "معظم الوحوش لا تستطيع الصعود. المستذئب يستطيع — فالسطح ليس منطقة آمنة حقيقية أبدًا.",
            "بعض القرميد القديم ينهار تحت القدم فيُسقطك إلى الداخل: ضرر، وصوت عالٍ، وسقطة لم تكن في الحسبان."
          ]
        },
        {
          h: "ما إن تحملي شيئًا حتى يُغلق الطريق",
          p: [
            "في اللحظة التي تحملين فيها شيئًا، لا يعود بإمكانك تسلّق السطوح ولا تخطّي الجدران. تذهبين سريعًا فوق السطوح، وتعودين ببطء على الأرض.",
            "شيء واحد في كل مرة. عند الضيق تضعينه وتركضين ثم تعودين إليه لاحقًا. هذا الاختلال وحده يجعل كل جولة سؤالًا عن الطريق."
          ]
        },
        {
          h: "الصوت يجذبها",
          p: [
            "المشي صامت، والركض خفيف، والدوس على القرميد متوسط، ونزع شيء عالٍ، وانهيار قرميدة أعلى ما يكون. الصوت يجمع الوحوش في مكان واحد.",
            "فتصير كل لحظة اختيارًا: ببطء أم بسرعة؟ مقايضة دائمة بين الهدوء والسرعة."
          ]
        },
        {
          h: "الناس أبرد من الوحوش",
          p: [
            "في القصر ناجون من أهل جوسون. لا يساعدونها. تكلّمهم فلا يفهمون؛ يحسبونها منهم، فإذا عجزت عن الردّ ازدادت في أعينهم غرابة. لا يفتحون أبوابهم، ويطقطقون بألسنتهم حين تمرّ.",
            "ويصير اللباس جواز مرور. ارتدي ثياب جوسون يبدأ الناس بقبولك — لكن كلما ازددت لبسًا صار السطح أصعب. أن تُقبَلي أو أن تبقي حرّة: هذه المقايضة تربط الفكرة بالآلية مرة أخرى.",
            "لا تقرأ اللغة، فلا تقرأ اللافتات. الأهداف لا تظهر على خريطة مصغّرة أبدًا. الاهتداء إلى الطريق ذاكرة تضاريس خالصة."
          ]
        },
        {
          h: "أين وصلنا — نموذج أولي مبكر (v0.1)",
          p: [
            "‏ما هو منشور على itch نسخة 0.1 تتحقّق من خط البناء. الحلقة الأساسية لم تدخل بعد.",
            "ما يمكن لعبه الآن، وما هو قادم:"
          ],
          list: {
            h: "",
            items: [
              "✅ استكشاف مجمّع قصر هيونغبوكجون",
              "✅ زومبي، ومستذئب، ومتحوّل، وكائن فضائي",
              "✅ قتال قريب وبعيد المدى",
              "✅ تنقّل باركور فوق الجدران والسطوح",
              "⬜ حلقة مطاردة تستخدم السطوح طريقًا مختصرًا",
              "‏⬜ «Whisper» — مطارِد يقتفي الأثر بالصوت وحده",
              "⬜ إنقاذه، والخروج من هناك"
            ]
          }
        }
      ],
      cta: "‏تنزيل لنظام Windows", back: "‏العودة إلى Deother"
    }
  },

  /* ===================== 저승사자 (Death Guide) =====================
   * 성인용 고어 액션. itch 실물에 명시된 범위만 쓴다 — early build, 미구현은 '앞으로(⬜)'.
   * 스토리(백무진)는 itch 페이지와 밀리 웹소설에 이미 공개된 도입부 수준까지만.
   *   웹소설의 결말·반전은 쓰지 않는다. 출처: F:\Reaper\DEATH_GUIDE_HANDOFF.md, itch, Millie.
   * ⚠️ MATURE 표기를 intro 와 고어 섹션에 명시한다 (itch 도 MATURE 로 공개).
   */
  deathguide: {
    ko: {
      title: "저승사자",
      tagline: "조선의 저승사자, 되살아난 망령을 벤다",
      intro: "검은 갓을 쓴 조선의 저승사자가 되살아난 망령 떼를 카타나·주먹·발로 벤다. 부위를 하나씩 절단하고, 시체는 래그돌로 굴러 벽에 부딪힌다. DMC류 스타일리시 액션. ⚠️ 성인용 — 극심한 고어와 폭력.",
      sections: [
        {
          h: "저승사자 백무진",
          p: [
            "밀리의 서재에 연재 중인 원작 웹소설을 바탕으로 한다. 주인공은 백무진 — 고려 말, 멸문한 장군의 아들이다.",
            "열여섯에 장원급제한 그는 조선 건국기에 아버지가 역적으로 몰리며 온 가족의 비극을 지켜본다. 끝내 망나니의 칼에 목이 잘려 죽지만, 거기서 끝나지 않는다.",
            "그는 저승사자로 다시 태어나, 억울한 혼들을 저승으로 이끄는 길 위에 선다. 죽고 싶어도 죽을 수 없는 운명이다."
          ]
        },
        {
          h: "베고, 절단한다",
          p: [
            "칼·주먹·발을 스윙마다 랜덤으로 섞어 콤보를 낸다. 검을 휘두를 때마다 불·얼음·번개 같은 원소 슬래시 트레일이 칼에 감긴다.",
            "2단 점프와, 공격에 맞춰 줌인하는 다이나믹 시네마틱 카메라. 손맛은 스타일리시 액션(DMC류)을 노린다."
          ]
        },
        {
          h: "끊임없는 망령",
          p: [
            "적은 모듈러 좀비다. 팔·다리·머리가 한 부위씩 분리되고, 잘린 부위는 사라지지 않고 땅에 굴러 계속 찰 수 있다. 첫 타격에 몸통이 래그돌로 무너지며 벽으로 날아간다.",
            "혈흔, 뼈 부러지는 임팩트음, 죽는 비명. 망령은 끝없이 스폰된다 — 떼를 견디는 게임이다. ⚠️ 극심한 고어와 폭력, 성인용."
          ]
        },
        {
          h: "지금 어디까지 — 얼리 빌드",
          p: [
            "itch 에 올라간 것은 초기 빌드다. 무료(원하는 만큼 후원)로 받을 수 있다.",
            "지금 할 수 있는 것과 앞으로 올 것:"
          ],
          list: {
            h: "",
            items: [
              "✅ 저승사자로 망령 떼와 전투 (칼·주먹·발 콤보)",
              "✅ 부위 절단 · 래그돌 고어 · 원소 슬래시 트레일",
              "✅ 2단 점프 · 다이나믹 전투 카메라 · 끝없는 스폰",
              "⬜ 낙선재(창덕궁) 궁궐 스테이지",
              "⬜ 8방향 회피·구르기",
              "⬜ 백무진의 이야기"
            ]
          }
        }
      ],
      cta: "Windows 무료 다운로드", back: "Deother로 돌아가기"
    },
    en: {
      title: "Death Guide",
      tagline: "A Joseon grim reaper carves through the risen dead",
      intro: "A black-gat jeoseung-saja — a Joseon-era grim reaper — carves through hordes of the risen dead with katana, fists, and kicks. Limbs come off one by one; bodies ragdoll and slam into walls. Stylish action in the vein of Devil May Cry. ⚠️ Mature — extreme gore and violence.",
      sections: [
        {
          h: "Baek Mu-jin, the grim reaper",
          p: [
            "The game is based on the original web novel serialized on Millie. Its hero is Baek Mu-jin — the son of a general whose house was destroyed at the end of Goryeo.",
            "A top scholar at sixteen, he watches his whole family fall as his father is branded a traitor in the founding years of Joseon. He is beheaded by an executioner's blade — but it does not end there.",
            "He is reborn as a jeoseung-saja, set on the road that guides wronged souls to the underworld. His fate is to be unable to die, however much he wishes to."
          ]
        },
        {
          h: "Slash, and dismember",
          p: [
            "Katana, fists, and kicks mix at random with every swing. Each stroke of the sword wraps the blade in an elemental slash trail — fire, ice, lightning.",
            "A double jump, and a dynamic cinematic camera that zooms with your attacks. The feel aims for stylish action in the Devil May Cry vein."
          ]
        },
        {
          h: "The endless dead",
          p: [
            "The enemies are modular. Arms, legs, and heads come off one part at a time, and severed pieces do not vanish — they roll on the ground and you can keep kicking them. The first hit ragdolls the torso and flings it into a wall.",
            "Blood, bone-crunch impacts, dying screams. The dead spawn without end — this is a game about surviving the swarm. ⚠️ Extreme gore and violence, for adults."
          ]
        },
        {
          h: "Where it stands — early build",
          p: [
            "What is on itch is an early build. It is free — pay what you want.",
            "What is playable now, and what is coming:"
          ],
          list: {
            h: "",
            items: [
              "✅ Fight the hordes as the grim reaper (katana, fist, kick combos)",
              "✅ Dismemberment · ragdoll gore · elemental slash trails",
              "✅ Double jump · dynamic combat camera · endless spawns",
              "⬜ The Nakseonjae (Changdeokgung) palace stage",
              "⬜ An 8-way dodge / roll system",
              "⬜ The story of Baek Mu-jin"
            ]
          }
        }
      ],
      cta: "Free download for Windows", back: "Back to Deother"
    },

    zh: {
      title: "Death Guide",
      tagline: "朝鲜的阴间使者，劈开复起的亡者",
      intro: "戴黑笠的朝鲜阴间使者（jeoseung-saja），以太刀、拳与腿劈开成群的复起亡者。肢体一节节断落，尸身被击飞、撞上墙壁。风格取向接近《鬼泣》的爽快动作。⚠️ 成人向——极端血腥与暴力。",
      sections: [
        {
          h: "阴间使者白武进",
          p: [
            "游戏取材自在 Millie 连载的原著网络小说。主角是白武进——高丽末年被灭门的将军之子。",
            "十六岁便是榜首的才俊，却在朝鲜开国之初眼看父亲被冠上逆贼之名、全家覆灭。他死于刽子手的刀下——但故事并未就此结束。",
            "他重生为阴间使者，走上引渡冤魂前往阴间的路。他的命数是：无论多想死，都死不了。"
          ]
        },
        {
          h: "斩击，与断肢",
          p: [
            "太刀、拳、腿在每一次挥击中随机混合。每一刀都会让刀身裹上属性斩痕——火、冰、雷。",
            "二段跳，以及随攻击推近的动态电影运镜。手感的目标是《鬼泣》一路的风格动作。"
          ]
        },
        {
          h: "无尽的亡者",
          p: [
            "敌人是模块化的。手臂、腿、头会一部位一部位地断落，断掉的部件不会消失——它们滚在地上，你还能继续踢。第一击会让躯干进入布娃娃状态，直接甩上墙。",
            "鲜血、碎骨般的打击感、临死的惨叫。亡者无止境地涌出——这是一款关于在尸潮中活下去的游戏。⚠️ 极端血腥与暴力，成人向。"
          ]
        },
        {
          h: "现在到哪一步——早期版本",
          p: [
            "itch 上的是早期版本。免费——随喜付费。",
            "现在能玩的，和接下来要做的："
          ],
          list: {
            h: "",
            items: [
              "✅ 以阴间使者的身份迎战尸潮（太刀·拳·腿连段）",
              "✅ 断肢 · 布娃娃血腥表现 · 属性斩痕",
              "✅ 二段跳 · 动态战斗运镜 · 无限刷怪",
              "⬜ 昌德宫乐善斋关卡",
              "⬜ 八方向闪避 / 翻滚系统",
              "⬜ 白武进的故事线"
            ]
          }
        }
      ],
      cta: "免费下载 Windows 版", back: "返回 Deother"
    },

    ja: {
      title: "Death Guide",
      tagline: "朝鮮の死神が、よみがえった死者を斬り開く",
      intro: "黒い笠をかぶった朝鮮の死神（チョスンサジャ）が、太刀と拳と蹴りでよみがえった死者の群れを斬り開きます。四肢は一本ずつ落ち、胴はラグドールとなって壁に叩きつけられる。『デビル メイ クライ』の系譜にあるスタイリッシュアクションです。⚠️ 成人向け——極度のゴアと暴力。",
      sections: [
        {
          h: "死神ペク・ムジン",
          p: [
            "原作は Millie で連載中のウェブ小説です。主人公はペク・ムジン——高麗末に一族を滅ぼされた将軍の子。",
            "十六歳で首席に立つ才子でしたが、朝鮮建国のさなか父が逆賊の名を着せられ、一族もろとも滅びるのを目の当たりにします。彼は処刑人の刃に首を落とされる——しかし、そこで終わりません。",
            "彼は死神として生まれ直し、無念の魂を冥界へ導く道に就きます。どれほど望んでも死ねない、というのが彼の宿命です。"
          ]
        },
        {
          h: "斬る、そして断つ",
          p: [
            "太刀・拳・蹴りが一振りごとにランダムで混ざります。剣の一閃ごとに刃が属性の斬撃軌跡をまとう——炎、氷、雷。",
            "二段ジャンプと、攻撃に合わせて寄る動的なシネマティックカメラ。手触りが目指すのは『デビル メイ クライ』系のスタイリッシュアクションです。"
          ]
        },
        {
          h: "尽きない死者",
          p: [
            "敵はモジュール構造です。腕、脚、頭が部位ごとに落ち、切り離された部品は消えません——地面を転がり、蹴り続けることもできます。最初の一撃で胴がラグドール化し、壁へ吹き飛びます。",
            "血、骨の砕けるような手応え、断末魔。死者は限りなく湧きます——群れを生き延びるためのゲームです。⚠️ 極度のゴアと暴力、成人向け。"
          ]
        },
        {
          h: "いまどこまで——アーリービルド",
          p: [
            "itch にあるのはアーリービルドです。無料——投げ銭制。",
            "いま遊べるものと、これから入るもの："
          ],
          list: {
            h: "",
            items: [
              "✅ 死神として群れと戦う（太刀・拳・蹴りのコンボ）",
              "✅ 部位切断 · ラグドールのゴア表現 · 属性の斬撃軌跡",
              "✅ 二段ジャンプ · 動的な戦闘カメラ · 無限湧き",
              "⬜ 昌徳宮・楽善斎のステージ",
              "⬜ 8方向の回避／ローリング",
              "⬜ ペク・ムジンの物語"
            ]
          }
        }
      ],
      cta: "Windows 版を無料ダウンロード", back: "Deother に戻る"
    },

    es: {
      title: "Death Guide",
      tagline: "Un segador de almas de Joseon abre en canal a los muertos que se alzan",
      intro: "Un jeoseung-saja de gat negro —un segador de almas de la era Joseon— abre en canal a hordas de muertos alzados con katana, puños y patadas. Los miembros se desprenden uno a uno; los cuerpos se vuelven ragdoll y se estrellan contra las paredes. Acción con estilo en la línea de Devil May Cry. ⚠️ Para adultos: gore y violencia extremos.",
      sections: [
        {
          h: "Baek Mu-jin, el segador de almas",
          p: [
            "El juego parte de la novela web original serializada en Millie. Su protagonista es Baek Mu-jin, hijo de un general cuya casa fue destruida al final de Goryeo.",
            "Primero de su promoción a los dieciséis, ve caer a toda su familia cuando su padre es marcado como traidor en los años fundacionales de Joseon. Lo decapita la espada de un verdugo, pero ahí no termina.",
            "Renace como jeoseung-saja, puesto en el camino que guía a las almas agraviadas hacia el inframundo. Su destino es no poder morir, por mucho que lo desee."
          ]
        },
        {
          h: "Cortar y desmembrar",
          p: [
            "Katana, puños y patadas se mezclan al azar en cada golpe. Cada tajo envuelve la hoja en una estela elemental: fuego, hielo, rayo.",
            "Doble salto y una cámara cinemática dinámica que se acerca con tus ataques. La sensación busca la acción con estilo de la escuela Devil May Cry."
          ]
        },
        {
          h: "Los muertos sin fin",
          p: [
            "Los enemigos son modulares. Brazos, piernas y cabezas se desprenden pieza a pieza, y los trozos cortados no desaparecen: ruedan por el suelo y puedes seguir pateándolos. El primer impacto convierte el torso en ragdoll y lo lanza contra un muro.",
            "Sangre, impactos que suenan a hueso roto, gritos de agonía. Los muertos aparecen sin descanso: este es un juego sobre sobrevivir al enjambre. ⚠️ Gore y violencia extremos, para adultos."
          ]
        },
        {
          h: "Dónde está: versión temprana",
          p: [
            "Lo que hay en itch es una versión temprana. Es gratis: paga lo que quieras.",
            "Lo que ya se puede jugar y lo que viene:"
          ],
          list: {
            h: "",
            items: [
              "✅ Luchar contra las hordas como el segador (combos de katana, puño y patada)",
              "✅ Desmembramiento · gore con ragdoll · estelas elementales",
              "✅ Doble salto · cámara de combate dinámica · aparición infinita",
              "⬜ El escenario del Nakseonjae (Changdeokgung)",
              "⬜ Un sistema de esquiva y rodada en 8 direcciones",
              "⬜ La historia de Baek Mu-jin"
            ]
          }
        }
      ],
      cta: "Descarga gratuita para Windows", back: "Volver a Deother"
    },

    pt: {
      title: "Death Guide",
      tagline: "Um ceifeiro de almas de Joseon abre caminho pelos mortos que se erguem",
      intro: "Um jeoseung-saja de gat preto — um ceifeiro de almas da era Joseon — abre caminho por hordas de mortos erguidos com katana, punhos e pontapés. Os membros saem um a um; os corpos viram ragdoll e batem contra as paredes. Ação com estilo na linha de Devil May Cry. ⚠️ Para adultos — gore e violência extremos.",
      sections: [
        {
          h: "Baek Mu-jin, o ceifeiro de almas",
          p: [
            "O jogo parte do romance web original serializado na Millie. O protagonista é Baek Mu-jin — filho de um general cuja casa foi destruída no fim de Goryeo.",
            "Primeiro da sua turma aos dezasseis anos, vê toda a família cair quando o pai é marcado como traidor nos anos fundadores de Joseon. É decapitado pela lâmina de um carrasco — mas não acaba aí.",
            "Renasce como jeoseung-saja, posto no caminho que conduz as almas injustiçadas ao mundo dos mortos. O seu destino é não poder morrer, por muito que o deseje."
          ]
        },
        {
          h: "Cortar e desmembrar",
          p: [
            "Katana, punhos e pontapés misturam-se ao acaso a cada golpe. Cada corte envolve a lâmina num rasto elemental — fogo, gelo, relâmpago.",
            "Salto duplo e uma câmara cinematográfica dinâmica que se aproxima com os teus ataques. A sensação procura a ação com estilo da escola Devil May Cry."
          ]
        },
        {
          h: "Os mortos sem fim",
          p: [
            "Os inimigos são modulares. Braços, pernas e cabeças saem peça a peça, e os pedaços cortados não desaparecem — rolam pelo chão e podes continuar a pontapeá-los. O primeiro impacto transforma o tronco em ragdoll e atira-o contra uma parede.",
            "Sangue, impactos com som de osso partido, gritos de agonia. Os mortos surgem sem fim — este é um jogo sobre sobreviver ao enxame. ⚠️ Gore e violência extremos, para adultos."
          ]
        },
        {
          h: "Onde está — versão inicial",
          p: [
            "O que está no itch é uma versão inicial. É gratuito — paga o que quiseres.",
            "O que já dá para jogar e o que vem a seguir:"
          ],
          list: {
            h: "",
            items: [
              "✅ Combater as hordas como o ceifeiro (combos de katana, punho e pontapé)",
              "✅ Desmembramento · gore com ragdoll · rastos elementais",
              "✅ Salto duplo · câmara de combate dinâmica · geração infinita",
              "⬜ O cenário do Nakseonjae (Changdeokgung)",
              "⬜ Um sistema de esquiva e rolamento em 8 direções",
              "⬜ A história de Baek Mu-jin"
            ]
          }
        }
      ],
      cta: "Descarga gratuita para Windows", back: "Voltar a Deother"
    },

    fr: {
      title: "Death Guide",
      tagline: "Un faucheur d'âmes de Joseon taille dans les morts relevés",
      intro: "Un jeoseung-saja au gat noir — un faucheur d'âmes de l'époque Joseon — taille dans les hordes de morts relevés au katana, au poing et au pied. Les membres tombent un à un ; les corps passent en ragdoll et s'écrasent contre les murs. De l'action stylée dans la lignée de Devil May Cry. ⚠️ Pour adultes — gore et violence extrêmes.",
      sections: [
        {
          h: "Baek Mu-jin, le faucheur d'âmes",
          p: [
            "Le jeu s'appuie sur le roman web original publié en feuilleton sur Millie. Son héros est Baek Mu-jin — fils d'un général dont la maison fut détruite à la fin du Goryeo.",
            "Premier de sa promotion à seize ans, il voit toute sa famille tomber lorsque son père est déclaré traître dans les premières années de Joseon. Il est décapité par la lame d'un bourreau — mais cela ne s'arrête pas là.",
            "Il renaît en jeoseung-saja, engagé sur la route qui conduit les âmes lésées vers l'autre monde. Son destin est de ne pas pouvoir mourir, si fort qu'il le veuille."
          ]
        },
        {
          h: "Trancher, et démembrer",
          p: [
            "Katana, poings et pieds se mêlent au hasard à chaque frappe. Chaque coup d'épée enveloppe la lame d'une traînée élémentaire — feu, glace, foudre.",
            "Un double saut et une caméra cinématique dynamique qui se rapproche au rythme de vos attaques. La sensation visée est l'action stylée de l'école Devil May Cry."
          ]
        },
        {
          h: "Les morts sans fin",
          p: [
            "Les ennemis sont modulaires. Bras, jambes et têtes se détachent morceau par morceau, et les parties tranchées ne disparaissent pas — elles roulent au sol et vous pouvez continuer à les frapper du pied. Le premier coup fait passer le torse en ragdoll et le projette contre un mur.",
            "Du sang, des impacts à faire craquer les os, des cris d'agonie. Les morts surgissent sans fin — c'est un jeu sur la survie face à la masse. ⚠️ Gore et violence extrêmes, pour adultes."
          ]
        },
        {
          h: "Où en est le jeu — build précoce",
          p: [
            "Ce qui est sur itch est un build précoce. C'est gratuit — payez ce que vous voulez.",
            "Ce qui est jouable aujourd'hui, et ce qui arrive :"
          ],
          list: {
            h: "",
            items: [
              "✅ Affronter les hordes en faucheur d'âmes (combos katana, poing, pied)",
              "✅ Démembrement · gore en ragdoll · traînées élémentaires",
              "✅ Double saut · caméra de combat dynamique · apparitions infinies",
              "⬜ Le niveau du Nakseonjae (Changdeokgung)",
              "⬜ Un système d'esquive et de roulade sur 8 directions",
              "⬜ L'histoire de Baek Mu-jin"
            ]
          }
        }
      ],
      cta: "Téléchargement gratuit pour Windows", back: "Retour à Deother"
    },

    de: {
      title: "Death Guide",
      tagline: "Ein Seelenführer aus Joseon schlägt sich durch die auferstandenen Toten",
      intro: "Ein Jeoseung-saja mit schwarzem Gat — ein Seelenführer aus der Joseon-Zeit — schlägt sich mit Katana, Fäusten und Tritten durch Horden auferstandener Toter. Gliedmaßen lösen sich eines nach dem anderen; Körper gehen in Ragdoll über und krachen gegen Wände. Stylische Action in der Linie von Devil May Cry. ⚠️ Für Erwachsene — extreme Gewalt und Gore.",
      sections: [
        {
          h: "Baek Mu-jin, der Seelenführer",
          p: [
            "Das Spiel beruht auf dem Webroman, der auf Millie in Fortsetzungen erscheint. Sein Held ist Baek Mu-jin — Sohn eines Generals, dessen Haus am Ende von Goryeo ausgelöscht wurde.",
            "Mit sechzehn Jahrgangsbester, sieht er seine ganze Familie fallen, als sein Vater in den Gründungsjahren von Joseon zum Verräter erklärt wird. Er wird vom Schwert eines Henkers enthauptet — doch damit endet es nicht.",
            "Er wird als Jeoseung-saja wiedergeboren und auf den Weg gestellt, der Unrecht erlittene Seelen in die Unterwelt geleitet. Sein Schicksal ist, nicht sterben zu können, so sehr er es sich auch wünscht."
          ]
        },
        {
          h: "Schlagen und abtrennen",
          p: [
            "Katana, Fäuste und Tritte mischen sich bei jedem Schlag zufällig. Jeder Schwerthieb legt eine elementare Schlagspur um die Klinge — Feuer, Eis, Blitz.",
            "Ein Doppelsprung und eine dynamische Kinokamera, die mit deinen Angriffen heranzoomt. Das Spielgefühl zielt auf stylische Action der Devil-May-Cry-Schule."
          ]
        },
        {
          h: "Die endlosen Toten",
          p: [
            "Die Gegner sind modular aufgebaut. Arme, Beine und Köpfe lösen sich Teil für Teil, und abgetrennte Stücke verschwinden nicht — sie rollen über den Boden, und du kannst weiter nach ihnen treten. Der erste Treffer schaltet den Rumpf auf Ragdoll und schleudert ihn gegen eine Wand.",
            "Blut, Treffer, die nach brechendem Knochen klingen, Todesschreie. Die Toten erscheinen ohne Ende — es geht darum, die Masse zu überleben. ⚠️ Extreme Gewalt und Gore, für Erwachsene."
          ]
        },
        {
          h: "Wo es steht — früher Build",
          p: [
            "Was auf itch liegt, ist ein früher Build. Er ist kostenlos — zahl, was du willst.",
            "Was jetzt spielbar ist, und was kommt:"
          ],
          list: {
            h: "",
            items: [
              "✅ Als Seelenführer gegen die Horden kämpfen (Katana-, Faust- und Trittkombos)",
              "✅ Abtrennen von Gliedmaßen · Ragdoll-Gore · elementare Schlagspuren",
              "✅ Doppelsprung · dynamische Kampfkamera · endloses Nachrücken",
              "⬜ Die Stage im Nakseonjae (Changdeokgung)",
              "⬜ Ein Ausweich- und Rollsystem in 8 Richtungen",
              "⬜ Die Geschichte von Baek Mu-jin"
            ]
          }
        }
      ],
      cta: "Kostenlos für Windows herunterladen", back: "Zurück zu Deother"
    },

    ru: {
      title: "Death Guide",
      tagline: "Чосонский проводник душ прорубается сквозь восставших мертвецов",
      intro: "Чосонский чосын-саджа в чёрном кате — проводник душ эпохи Чосон — прорубается сквозь орды восставших мертвецов катаной, кулаками и ногами. Конечности отлетают одна за другой, тела уходят в рэгдолл и врезаются в стены. Стильный экшен в духе Devil May Cry. ⚠️ Для взрослых — крайняя жестокость и расчленёнка.",
      sections: [
        {
          h: "Пэк Му Джин, проводник душ",
          p: [
            "Игра основана на веб-романе, который выходит выпусками на Millie. Её герой — Пэк Му Джин, сын генерала, чей род был уничтожен на исходе Корё.",
            "Первый ученик в шестнадцать лет, он видит гибель всей семьи, когда его отца объявляют изменником в первые годы Чосона. Его обезглавливает клинок палача — но на этом ничего не кончается.",
            "Он возрождается проводником душ и выходит на дорогу, что ведёт обиженные души в загробный мир. Его судьба — не суметь умереть, как бы сильно он этого ни хотел."
          ]
        },
        {
          h: "Рубить и отсекать",
          p: [
            "Катана, кулаки и ноги случайно смешиваются в каждом ударе. Каждый взмах меча оборачивает клинок стихийным следом — огонь, лёд, молния.",
            "Двойной прыжок и динамичная кинематографическая камера, которая наезжает вместе с атаками. Ощущение целит в стильный экшен школы Devil May Cry."
          ]
        },
        {
          h: "Бесконечные мертвецы",
          p: [
            "Противники собраны из частей. Руки, ноги и головы отлетают по одной, и отсечённые куски не исчезают — они катятся по земле, и их можно продолжать пинать. Первый удар переводит торс в рэгдолл и швыряет его в стену.",
            "Кровь, удары с хрустом кости, предсмертные крики. Мертвецы прибывают без конца — эта игра о том, как пережить толпу. ⚠️ Крайняя жестокость и расчленёнка, для взрослых."
          ]
        },
        {
          h: "На каком этапе — ранняя сборка",
          p: [
            "На itch выложена ранняя сборка. Она бесплатна — платите сколько хотите.",
            "Что играбельно сейчас и что впереди:"
          ],
          list: {
            h: "",
            items: [
              "✅ Бой с ордами в роли проводника душ (связки катаны, кулаков и ног)",
              "✅ Отсечение конечностей · рэгдолл-расчленёнка · стихийные следы ударов",
              "✅ Двойной прыжок · динамичная боевая камера · бесконечный респавн",
              "⬜ Уровень Наксонджэ во дворце Чхандоккун",
              "⬜ Система уклонений и перекатов по 8 направлениям",
              "⬜ История Пэк Му Джина"
            ]
          }
        }
      ],
      cta: "Бесплатно скачать для Windows", back: "Назад в Deother"
    },

    ar: {
      title: "Death Guide",
      tagline: "حاصد أرواح من عهد جوسون يشقّ طريقه بين الموتى الناهضين",
      intro: "‏حاصد أرواح من عهد جوسون (jeoseung-saja) بقبعة «غات» سوداء، يشقّ طريقه بين حشود الموتى الناهضين بالكاتانا واللكمات والركلات. تتساقط الأطراف واحدًا تلو الآخر، وترتطم الأجساد بالجدران في حركة فيزيائية. حركة أنيقة على نهج Devil May Cry. ⚠️ للبالغين — دموية وعنف شديدان.",
      sections: [
        {
          h: "بايك مو-جين، حاصد الأرواح",
          p: [
            "‏اللعبة مبنية على رواية ويب أصلية تُنشر تباعًا على Millie. بطلها بايك مو-جين، ابن جنرال أُبيد بيته في أواخر عهد كوريو.",
            "كان الأول على أقرانه في السادسة عشرة، ثم رأى أسرته كلها تسقط حين وُصم أبوه بالخيانة في سنوات تأسيس جوسون. قُطعت رأسه بسيف الجلاد — لكن الأمر لم ينتهِ عند ذلك.",
            "وُلد من جديد حاصدَ أرواح، ووُضع على الطريق التي تقود الأرواح المظلومة إلى العالم السفلي. قدره ألّا يقدر على الموت، مهما تمنّاه."
          ]
        },
        {
          h: "ضربة، ثم بتر",
          p: [
            "تختلط الكاتانا واللكمات والركلات عشوائيًا مع كل ضربة. وكل ضربة سيف تُحيط النصل بأثر عنصري — نار وجليد وبرق.",
            "‏قفزة مزدوجة، وكاميرا سينمائية ديناميكية تقترب مع هجماتك. الإحساس المقصود هو الحركة الأنيقة على مدرسة Devil May Cry."
          ]
        },
        {
          h: "الموتى بلا نهاية",
          p: [
            "الأعداء مبنيّون من أجزاء. تتساقط الأذرع والسيقان والرؤوس جزءًا جزءًا، والقطع المبتورة لا تختفي — تتدحرج على الأرض ويمكنك أن تواصل ركلها. الضربة الأولى تُرخي الجذع فيرتطم بالجدار.",
            "دم، وارتطامات يُسمع فيها تكسّر العظم، وصرخات احتضار. الموتى يظهرون بلا انقطاع — هذه لعبة عن النجاة من الحشد. ⚠️ دموية وعنف شديدان، للبالغين."
          ]
        },
        {
          h: "أين وصلنا — نسخة مبكّرة",
          p: [
            "‏ما هو منشور على itch نسخة مبكّرة. وهي مجانية — ادفع ما تشاء.",
            "ما يمكن لعبه الآن، وما هو قادم:"
          ],
          list: {
            h: "",
            items: [
              "✅ قتال الحشود بدور حاصد الأرواح (سلاسل الكاتانا واللكمة والركلة)",
              "✅ بتر الأطراف · دموية بحركة فيزيائية · آثار الضربات العنصرية",
              "✅ قفزة مزدوجة · كاميرا قتال ديناميكية · ظهور لا ينتهي",
              "⬜ مرحلة ناكسونجيه في قصر تشانغدوكغونغ",
              "⬜ نظام مراوغة والتفاف في ثمانية اتجاهات",
              "⬜ قصة بايك مو-جين"
            ]
          }
        }
      ],
      cta: "‏تنزيل مجاني لنظام Windows", back: "‏العودة إلى Deother"
    }
  },

  /* ===================== Time Wars =====================
   * itch 실물(v0.2 early build)에 공개된 범위만 쓴다. 미구현은 '앞으로(⬜)'.
   * 스토리는 로그라인/프리미스까지만 — STORY.md 의 3막 결말·열린 결말·적대자(제이)는
   *   스포일러라 쓰지 않는다. 출처: F:\TimeWars\TimeWars\docs\STORY.md, itch 페이지.
   */
  timewars: {
    ko: {
      title: "타임 워즈",
      tagline: "열여섯 전사, 하나의 채석장, 총은 없다",
      intro: "죽음의 순간에 각기 다른 시대에서 소환된 동서양 전사 열여섯이 채석장에서 근접 배틀로얄을 벌인다. 살아남은 단 한 사람만 자신이 살던 세계로 돌아간다. 총은 없다 — 칼·활·창·도끼·검뿐. 얼리 빌드이며, 곧 온라인 멀티플레이로 간다.",
      sections: [
        {
          h: "서하 — 아직 집에 못 간 소녀",
          p: [
            "주인공은 열여덟 살 서하. 아버지에게 버림받고 홀어머니 밑에서 자라며 미친 듯이 훈련해 양궁 금메달을 목에 걸었다.",
            "세상이 막 열리려던 밤, 마약에 취한 K팝 스타의 차가 그녀를 덮친다. 의식이 꺼지는 순간, 그녀는 타임 워즈에 서 있다 — 갑옷과 칼을 든 낯선 자들 사이에.",
            "아무도 현대 옷을 입은 어린 소녀를 위협으로 보지 않는다. 첫 전투에서 그녀는 활을 집는다. 손이 기억한다. 표적이 움직이고 반격한다는 것만 빼면, 그건 그녀가 평생 해온 일이었다."
          ]
        },
        {
          h: "열여섯, 하나의 자리",
          p: [
            "소환된 자들의 공통점은 둘이다 — 죽음 직전의 순간에 있었다는 것, 그리고 육체가 특출났다는 것. 사무라이, 중세 기사, 바이킹, 명나라 협객, 조선 무사, 그리고 서하처럼 뛰어난 현대의 운동선수들.",
            "규칙은 단순하다. 돌아갈 수 있는 자리는 하나뿐이다. 라스트맨 스탠딩. 시공이 무너지며 전장은 점점 좁아진다.",
            "동양과 서양, 고대와 현대가 한 아레나에 뒤섞인다. 말은 통하지 않아도 눈빛은 통하고, 돌아갈 자리가 하나이므로 동맹 뒤엔 배신이 따른다."
          ]
        },
        {
          h: "총은 없다 — 근접무기만",
          p: [
            "타임 워즈는 기술이 아니라 육체와 의지를 시험한다. 그래서 총기는 존재하지 않는다. 칼·활·창·도끼·검 — 고전과 중세의 근접무기뿐이다.",
            "열여섯 명은 저마다 다른 빌드와 무기를 갖는다. 검과 방패, 대도끼, 쌍검, 활. 채석장에 떨어져 열다섯 명의 경쟁자와 부딪히고, 마지막까지 선 자가 이긴다.",
            "조작: WASD 이동 · 마우스 시점 · 좌클릭 공격 · 우클릭 방어 · 스페이스 점프 · 시프트 대시."
          ]
        },
        {
          h: "지금 어디까지 — 얼리 빌드",
          p: [
            "itch 에 올라간 것은 얼리 빌드(v0.2)다. 무료(원하는 만큼 후원)로 받을 수 있다.",
            "지금 할 수 있는 것과 앞으로 올 것:"
          ],
          list: {
            h: "",
            items: [
              "✅ 16명 캐릭터 선택 (3D 전신 뷰어)",
              "✅ 채석장 배틀로얄 — 플레이어 + AI 15명",
              "✅ 근접 전투 (검·활·도끼·창) · 라스트맨 스탠딩",
              "⬜ 온라인 멀티플레이",
              "⬜ 추가 아레나 맵",
              "⬜ 축소되는 안전지대"
            ]
          }
        }
      ],
      cta: "Windows 무료 다운로드", back: "Deother로 돌아가기"
    },
    en: {
      title: "Time Wars",
      tagline: "Sixteen fighters. One quarry. No guns.",
      intro: "Sixteen warriors from across the ages, each pulled from the moment of their death, fight a melee battle royale in a stone quarry. Only the last one standing returns to the world they came from. There are no guns — sword, bow, spear, axe, blade only. An early build, with online multiplayer coming next.",
      sections: [
        {
          h: "Seoha — the girl who hasn't gone home yet",
          p: [
            "The hero is Seoha, eighteen. Abandoned by her father and raised by a single mother, she trained herself half to death and took an archery gold medal.",
            "On the night it was all about to open up for her, a car driven by a drugged-up K-pop star hits her. As her consciousness goes out, she is standing in the Time Wars — among strangers in armor, holding swords.",
            "No one sees a young girl in modern clothes as a threat. In her first fight she picks up a bow. Her hands remember. But for the fact that the targets move and hit back, it is the thing she has done all her life."
          ]
        },
        {
          h: "Sixteen, and one way home",
          p: [
            "The summoned share two things — they were at the edge of death, and their bodies were exceptional. A samurai, a medieval knight, a Viking, a Ming swordsman, a Joseon warrior, and modern athletes gifted like Seoha.",
            "The rule is simple. There is only one seat home. Last one standing. As spacetime collapses, the arena keeps shrinking.",
            "East and West, ancient and modern, thrown into one arena. Eyes speak where words can't — and because there is only one way home, every alliance is followed by a betrayal."
          ]
        },
        {
          h: "No guns — melee only",
          p: [
            "The Time Wars test the body and the will, not technology. So firearms do not exist here. Sword, bow, spear, axe, blade — classical and medieval melee weapons only.",
            "Each of the sixteen has their own build and weapon: sword and shield, great axe, dual blades, the bow. You drop into the quarry against fifteen rivals, and the one left standing wins.",
            "Controls: WASD move · mouse look · LMB attack · RMB block · Space jump · Shift dash."
          ]
        },
        {
          h: "Where it stands — early build",
          p: [
            "What is on itch is an early build (v0.2). It is free — pay what you want.",
            "What is playable now, and what is coming:"
          ],
          list: {
            h: "",
            items: [
              "✅ Choose from 16 fighters (full 3D character viewer)",
              "✅ Quarry battle royale — you plus 15 AI",
              "✅ Melee combat (sword, bow, axe, spear) · last one standing",
              "⬜ Online multiplayer",
              "⬜ Additional arena maps",
              "⬜ A shrinking safe zone"
            ]
          }
        }
      ],
      cta: "Free download for Windows", back: "Back to Deother"
    },

    zh: {
      title: "Time Wars",
      tagline: "十六名战士。一座采石场。没有枪。",
      intro: "十六名来自各个时代的战士，各自在临死的那一刻被抽走，在一座石料采石场里展开近战大逃杀。只有最后活着的人能回到自己原来的世界。这里没有枪——只有剑、弓、枪、斧、刃。目前是早期版本，接下来会加入线上多人。",
      sections: [
        {
          h: "徐河——还没能回家的少女",
          p: [
            "主角是十八岁的徐河。被父亲抛下、由单亲母亲带大，她把自己练到半死，拿下了射箭金牌。",
            "就在一切即将为她展开的那个夜晚，一辆由嗑了药的偶像驾驶的车撞上了她。意识熄灭的瞬间，她已经站在 Time Wars 里——四周是披甲持剑的陌生人。",
            "没有人会把一个穿现代衣服的小姑娘当威胁。第一场战斗里她捡起了弓。手记得。若不是靶子会动、还会还手，这本就是她做了一辈子的事。"
          ]
        },
        {
          h: "十六个人，一条回家的路",
          p: [
            "被召来的人有两个共同点——都站在死亡的边缘，而且身体异于常人。武士、中世纪骑士、维京人、明朝剑客、朝鲜武人，还有和徐河一样天赋异禀的现代运动员。",
            "规则很简单。回家的位子只有一个。活到最后。随着时空崩塌，场地不断收缩。",
            "东方与西方、古代与现代，被扔进同一个竞技场。语言不通时用眼神说话——而因为回家的路只有一条，每一次结盟之后都会有一次背叛。"
          ]
        },
        {
          h: "没有枪——只有近战",
          p: [
            "Time Wars 考验的是身体与意志，不是科技。所以这里不存在火器。剑、弓、枪、斧、刃——只有古代与中世纪的近战兵器。",
            "十六人各有各的体格与武器：剑与盾、巨斧、双刃、弓。你降落在采石场，面对十五名对手，站到最后的人获胜。",
            "操作：WASD 移动 · 鼠标视角 · 左键攻击 · 右键格挡 · 空格跳跃 · Shift 冲刺。"
          ]
        },
        {
          h: "现在到哪一步——早期版本",
          p: [
            "itch 上的是早期版本（v0.2）。免费——随喜付费。",
            "现在能玩的，和接下来要做的："
          ],
          list: {
            h: "",
            items: [
              "✅ 从 16 名战士中选择（完整 3D 角色查看器）",
              "✅ 采石场大逃杀——你加 15 名 AI",
              "✅ 近战战斗（剑、弓、斧、枪）· 决出最后生还者",
              "⬜ 线上多人",
              "⬜ 更多竞技场地图",
              "⬜ 不断收缩的安全区"
            ]
          }
        }
      ],
      cta: "免费下载 Windows 版", back: "返回 Deother"
    },

    ja: {
      title: "Time Wars",
      tagline: "十六人の戦士。ひとつの石切場。銃はない。",
      intro: "各時代から、それぞれの死の瞬間に引き抜かれた十六人の戦士が、石切場で近接バトルロイヤルを戦います。最後まで立っていた者だけが元の世界へ帰れる。銃はありません——剣、弓、槍、斧、刃のみ。現在はアーリービルドで、次にオンライン対戦が入ります。",
      sections: [
        {
          h: "ソハ——まだ家に帰れていない少女",
          p: [
            "主人公は十八歳のソハ。父に捨てられ、母ひとりの手で育ち、自分を半分壊すほど鍛えてアーチェリーで金メダルを取りました。",
            "すべてが開けようとしていたその夜、薬物を使ったアイドルの運転する車が彼女をはねます。意識が消える瞬間、彼女は Time Wars に立っていました——鎧をまとい剣を持つ見知らぬ者たちの只中に。",
            "現代服の少女を脅威と見る者はいません。最初の戦いで彼女は弓を拾います。手が覚えている。的が動いて撃ち返してくること以外は、生涯やってきたことそのものです。"
          ]
        },
        {
          h: "十六人と、ひとつの帰り道",
          p: [
            "召喚された者に共通するのは二つ——死の際にいたことと、肉体が並外れていたこと。侍、中世の騎士、ヴァイキング、明の剣客、朝鮮の武人、そしてソハのように才に恵まれた現代のアスリートたち。",
            "規則は単純です。帰る席はひとつだけ。最後まで立っていた者が勝つ。時空が崩れるにつれ、闘技場は縮み続けます。",
            "東と西、古代と現代がひとつの闘技場に放り込まれる。言葉が通じないところは目が語る——そして帰り道がひとつしかないから、同盟のあとには必ず裏切りが来ます。"
          ]
        },
        {
          h: "銃はない——近接のみ",
          p: [
            "Time Wars が試すのは技術ではなく、肉体と意志です。だからここに火器は存在しません。剣、弓、槍、斧、刃——古代から中世の近接武器だけです。",
            "十六人にはそれぞれの体格と得物があります。剣と盾、大斧、双刃、弓。石切場に降り、十五人の相手と向き合い、最後に残った者が勝ちます。",
            "操作：WASD 移動 · マウス視点 · 左クリック攻撃 · 右クリック防御 · スペース ジャンプ · Shift ダッシュ。"
          ]
        },
        {
          h: "いまどこまで——アーリービルド",
          p: [
            "itch にあるのはアーリービルド（v0.2）です。無料——投げ銭制。",
            "いま遊べるものと、これから入るもの："
          ],
          list: {
            h: "",
            items: [
              "✅ 16人の戦士から選択（3Dキャラクタービューア付き）",
              "✅ 石切場バトルロイヤル——自分＋AI 15体",
              "✅ 近接戦闘（剣・弓・斧・槍）· 最後の一人を決める",
              "⬜ オンライン対戦",
              "⬜ 追加のアリーナマップ",
              "⬜ 縮んでいく安全地帯"
            ]
          }
        }
      ],
      cta: "Windows 版を無料ダウンロード", back: "Deother に戻る"
    },

    es: {
      title: "Time Wars",
      tagline: "Dieciséis luchadores. Una cantera. Sin armas de fuego.",
      intro: "Dieciséis guerreros de distintas épocas, arrancados cada uno del instante de su muerte, libran un battle royale cuerpo a cuerpo en una cantera de piedra. Solo el último en pie vuelve al mundo del que vino. No hay armas de fuego: espada, arco, lanza, hacha, filo. Es una versión temprana; el multijugador en línea viene después.",
      sections: [
        {
          h: "Seoha, la chica que aún no ha vuelto a casa",
          p: [
            "La protagonista es Seoha, dieciocho años. Abandonada por su padre y criada por una madre sola, se entrenó hasta casi romperse y se llevó un oro en tiro con arco.",
            "La noche en que todo iba a abrirse para ella, la atropella el coche de una estrella del K-pop drogada. Cuando su conciencia se apaga, está de pie en las Time Wars, entre desconocidos con armadura y espadas.",
            "Nadie ve una amenaza en una chica con ropa moderna. En su primer combate recoge un arco. Sus manos recuerdan. Salvo por el detalle de que los blancos se mueven y devuelven el golpe, es lo que ha hecho toda su vida."
          ]
        },
        {
          h: "Dieciséis, y un solo camino de vuelta",
          p: [
            "Los convocados comparten dos cosas: estaban al borde de la muerte y sus cuerpos eran excepcionales. Un samurái, un caballero medieval, un vikingo, un espadachín Ming, un guerrero de Joseon y atletas modernos tan dotados como Seoha.",
            "La regla es simple. Solo hay un asiento de vuelta. El último en pie. Mientras el espaciotiempo se derrumba, la arena no deja de encogerse.",
            "Oriente y Occidente, antiguo y moderno, arrojados a una misma arena. Los ojos hablan donde las palabras no llegan, y como solo hay un camino a casa, a cada alianza le sigue una traición."
          ]
        },
        {
          h: "Sin armas de fuego: solo cuerpo a cuerpo",
          p: [
            "Las Time Wars ponen a prueba el cuerpo y la voluntad, no la tecnología. Por eso aquí no existen las armas de fuego. Espada, arco, lanza, hacha, filo: solo armas cuerpo a cuerpo clásicas y medievales.",
            "Cada uno de los dieciséis tiene su propia complexión y su arma: espada y escudo, hacha de guerra, dobles filos, el arco. Caes en la cantera contra quince rivales, y gana quien quede en pie.",
            "Controles: WASD para moverse · ratón para mirar · clic izquierdo atacar · clic derecho bloquear · espacio saltar · Shift esquivar."
          ]
        },
        {
          h: "Dónde está: versión temprana",
          p: [
            "Lo que hay en itch es una versión temprana (v0.2). Es gratis: paga lo que quieras.",
            "Lo que ya se puede jugar y lo que viene:"
          ],
          list: {
            h: "",
            items: [
              "✅ Elegir entre 16 luchadores (visor 3D completo del personaje)",
              "✅ Battle royale en la cantera: tú más 15 IA",
              "✅ Combate cuerpo a cuerpo (espada, arco, hacha, lanza) · gana el último en pie",
              "⬜ Multijugador en línea",
              "⬜ Más mapas de arena",
              "⬜ Una zona segura que se encoge"
            ]
          }
        }
      ],
      cta: "Descarga gratuita para Windows", back: "Volver a Deother"
    },

    pt: {
      title: "Time Wars",
      tagline: "Dezasseis lutadores. Uma pedreira. Sem armas de fogo.",
      intro: "Dezasseis guerreiros de várias épocas, cada um arrancado ao instante da sua morte, travam um battle royale corpo a corpo numa pedreira. Só o último de pé regressa ao mundo de onde veio. Não há armas de fogo — espada, arco, lança, machado, lâmina. É uma versão inicial; o multijogador online vem a seguir.",
      sections: [
        {
          h: "Seoha — a rapariga que ainda não voltou a casa",
          p: [
            "A protagonista é Seoha, dezoito anos. Abandonada pelo pai e criada por uma mãe sozinha, treinou até quase se partir e ganhou um ouro no tiro com arco.",
            "Na noite em que tudo se ia abrir para ela, é atropelada pelo carro de uma estrela do K-pop drogada. Quando a consciência se apaga, está de pé nas Time Wars — entre desconhecidos de armadura e espada.",
            "Ninguém vê uma ameaça numa rapariga de roupa moderna. No primeiro combate ela pega num arco. As mãos lembram-se. Tirando o facto de os alvos se mexerem e responderem, é aquilo que fez a vida inteira."
          ]
        },
        {
          h: "Dezasseis, e um só caminho de volta",
          p: [
            "Os convocados têm duas coisas em comum — estavam à beira da morte e os seus corpos eram excecionais. Um samurai, um cavaleiro medieval, um viking, um espadachim Ming, um guerreiro de Joseon e atletas modernos tão dotados como Seoha.",
            "A regra é simples. Há apenas um lugar de regresso. O último de pé. À medida que o espaço-tempo colapsa, a arena vai encolhendo.",
            "Oriente e Ocidente, antigo e moderno, atirados para a mesma arena. Os olhos falam onde as palavras não chegam — e como só há um caminho para casa, a cada aliança segue-se uma traição."
          ]
        },
        {
          h: "Sem armas de fogo — só corpo a corpo",
          p: [
            "As Time Wars testam o corpo e a vontade, não a tecnologia. Por isso aqui não existem armas de fogo. Espada, arco, lança, machado, lâmina — apenas armas corpo a corpo clássicas e medievais.",
            "Cada um dos dezasseis tem a sua constituição e a sua arma: espada e escudo, machado de guerra, lâminas duplas, o arco. Cais na pedreira contra quinze rivais, e vence quem ficar de pé.",
            "Controlos: WASD mover · rato olhar · botão esquerdo atacar · botão direito bloquear · espaço saltar · Shift avançar."
          ]
        },
        {
          h: "Onde está — versão inicial",
          p: [
            "O que está no itch é uma versão inicial (v0.2). É gratuito — paga o que quiseres.",
            "O que já dá para jogar e o que vem a seguir:"
          ],
          list: {
            h: "",
            items: [
              "✅ Escolher entre 16 lutadores (visualizador 3D completo da personagem)",
              "✅ Battle royale na pedreira — tu mais 15 IA",
              "✅ Combate corpo a corpo (espada, arco, machado, lança) · vence o último de pé",
              "⬜ Multijogador online",
              "⬜ Mais mapas de arena",
              "⬜ Uma zona segura que encolhe"
            ]
          }
        }
      ],
      cta: "Descarga gratuita para Windows", back: "Voltar a Deother"
    },

    fr: {
      title: "Time Wars",
      tagline: "Seize combattants. Une carrière. Aucune arme à feu.",
      intro: "Seize guerriers venus de toutes les époques, chacun arraché à l'instant de sa mort, livrent un battle royale au corps à corps dans une carrière de pierre. Seul le dernier debout retourne au monde d'où il vient. Pas d'armes à feu — épée, arc, lance, hache, lame. Build précoce ; le multijoueur en ligne arrive ensuite.",
      sections: [
        {
          h: "Seoha — la fille qui n'est pas encore rentrée",
          p: [
            "L'héroïne est Seoha, dix-huit ans. Abandonnée par son père, élevée par une mère seule, elle s'est entraînée jusqu'à se briser à moitié et a décroché l'or en tir à l'arc.",
            "Le soir où tout allait s'ouvrir pour elle, la voiture d'une star de K-pop droguée la percute. Au moment où sa conscience s'éteint, elle se tient dans les Time Wars — au milieu d'inconnus en armure, l'épée à la main.",
            "Personne ne voit une menace dans une gamine en vêtements modernes. Lors de son premier combat, elle ramasse un arc. Ses mains se souviennent. À ceci près que les cibles bougent et ripostent, c'est ce qu'elle a fait toute sa vie."
          ]
        },
        {
          h: "Seize, et un seul chemin de retour",
          p: [
            "Les convoqués partagent deux choses : ils étaient au bord de la mort, et leurs corps sortaient de l'ordinaire. Un samouraï, un chevalier médiéval, un Viking, un bretteur Ming, un guerrier de Joseon, et des athlètes modernes aussi doués que Seoha.",
            "La règle est simple. Il n'y a qu'une place pour rentrer. Le dernier debout. À mesure que l'espace-temps s'effondre, l'arène ne cesse de rétrécir.",
            "Orient et Occident, ancien et moderne, jetés dans une même arène. Les regards parlent là où les mots ne passent pas — et comme il n'existe qu'un seul chemin de retour, chaque alliance est suivie d'une trahison."
          ]
        },
        {
          h: "Pas d'armes à feu — corps à corps uniquement",
          p: [
            "Les Time Wars éprouvent le corps et la volonté, pas la technologie. Les armes à feu n'existent donc pas ici. Épée, arc, lance, hache, lame — uniquement des armes de mêlée antiques et médiévales.",
            "Chacun des seize a sa morphologie et son arme : épée et bouclier, grande hache, lames jumelles, arc. Vous atterrissez dans la carrière face à quinze rivaux, et celui qui reste debout l'emporte.",
            "Commandes : WASD déplacement · souris regard · clic gauche attaque · clic droit garde · espace saut · Maj esquive."
          ]
        },
        {
          h: "Où en est le jeu — build précoce",
          p: [
            "Ce qui est sur itch est un build précoce (v0.2). C'est gratuit — payez ce que vous voulez.",
            "Ce qui est jouable aujourd'hui, et ce qui arrive :"
          ],
          list: {
            h: "",
            items: [
              "✅ Choisir parmi 16 combattants (visionneuse 3D complète du personnage)",
              "✅ Battle royale dans la carrière — vous plus 15 IA",
              "✅ Combat au corps à corps (épée, arc, hache, lance) · le dernier debout gagne",
              "⬜ Multijoueur en ligne",
              "⬜ D'autres cartes d'arène",
              "⬜ Une zone sûre qui rétrécit"
            ]
          }
        }
      ],
      cta: "Téléchargement gratuit pour Windows", back: "Retour à Deother"
    },

    de: {
      title: "Time Wars",
      tagline: "Sechzehn Kämpfer. Ein Steinbruch. Keine Schusswaffen.",
      intro: "Sechzehn Krieger aus allen Zeitaltern, jeder im Augenblick seines Todes herausgerissen, tragen in einem Steinbruch eine Nahkampf-Battle-Royale aus. Nur wer zuletzt steht, kehrt in seine Welt zurück. Es gibt keine Schusswaffen — nur Schwert, Bogen, Speer, Axt, Klinge. Ein früher Build; Online-Mehrspieler kommt als Nächstes.",
      sections: [
        {
          h: "Seoha — das Mädchen, das noch nicht heimgekehrt ist",
          p: [
            "Die Heldin ist Seoha, achtzehn. Vom Vater verlassen und von einer alleinerziehenden Mutter großgezogen, trainierte sie sich halb kaputt und holte Gold im Bogenschießen.",
            "In der Nacht, in der sich für sie alles öffnen sollte, erfasst sie der Wagen eines unter Drogen stehenden K-Pop-Stars. Als ihr Bewusstsein erlischt, steht sie in den Time Wars — unter Fremden in Rüstung, mit Schwertern in der Hand.",
            "Niemand sieht in einem Mädchen in moderner Kleidung eine Bedrohung. In ihrem ersten Kampf hebt sie einen Bogen auf. Ihre Hände erinnern sich. Abgesehen davon, dass die Ziele sich bewegen und zurückschlagen, ist es genau das, was sie ihr Leben lang getan hat."
          ]
        },
        {
          h: "Sechzehn, und ein einziger Weg nach Hause",
          p: [
            "Die Herbeigerufenen teilen zwei Dinge — sie standen an der Schwelle des Todes, und ihre Körper waren außergewöhnlich. Ein Samurai, ein mittelalterlicher Ritter, ein Wikinger, ein Ming-Schwertkämpfer, ein Krieger aus Joseon und moderne Athleten, begabt wie Seoha.",
            "Die Regel ist einfach. Es gibt nur einen Platz zurück. Wer zuletzt steht. Während die Raumzeit zusammenbricht, schrumpft die Arena unablässig.",
            "Ost und West, Antike und Moderne, in eine Arena geworfen. Wo die Worte nicht reichen, sprechen die Blicke — und weil es nur einen Weg nach Hause gibt, folgt auf jedes Bündnis ein Verrat."
          ]
        },
        {
          h: "Keine Schusswaffen — nur Nahkampf",
          p: [
            "Die Time Wars prüfen Körper und Willen, nicht Technik. Darum gibt es hier keine Feuerwaffen. Schwert, Bogen, Speer, Axt, Klinge — ausschließlich antike und mittelalterliche Nahkampfwaffen.",
            "Jeder der Sechzehn hat eigenen Körperbau und eigene Waffe: Schwert und Schild, Streitaxt, Doppelklingen, den Bogen. Du landest im Steinbruch gegen fünfzehn Rivalen, und wer übrig bleibt, gewinnt.",
            "Steuerung: WASD Bewegung · Maus Blick · Linksklick Angriff · Rechtsklick Block · Leertaste Sprung · Umschalt Ausweichen."
          ]
        },
        {
          h: "Wo es steht — früher Build",
          p: [
            "Was auf itch liegt, ist ein früher Build (v0.2). Er ist kostenlos — zahl, was du willst.",
            "Was jetzt spielbar ist, und was kommt:"
          ],
          list: {
            h: "",
            items: [
              "✅ Aus 16 Kämpfern wählen (vollständiger 3D-Charakterbetrachter)",
              "✅ Steinbruch-Battle-Royale — du und 15 KI",
              "✅ Nahkampf (Schwert, Bogen, Axt, Speer) · wer zuletzt steht, gewinnt",
              "⬜ Online-Mehrspieler",
              "⬜ Weitere Arenakarten",
              "⬜ Eine schrumpfende Sicherheitszone"
            ]
          }
        }
      ],
      cta: "Kostenlos für Windows herunterladen", back: "Zurück zu Deother"
    },

    ru: {
      title: "Time Wars",
      tagline: "Шестнадцать бойцов. Один карьер. Никакого огнестрела.",
      intro: "Шестнадцать воинов из разных эпох, вырванных каждый из мгновения собственной смерти, ведут ближний бой на выбывание в каменном карьере. В свой мир возвращается только тот, кто остался последним. Огнестрела здесь нет — меч, лук, копьё, топор, клинок. Пока это ранняя сборка, следом появится сетевой режим.",
      sections: [
        {
          h: "Соха — девушка, которая ещё не вернулась домой",
          p: [
            "Героиня — восемнадцатилетняя Соха. Брошенная отцом и выросшая с матерью-одиночкой, она загоняла себя на тренировках до предела и взяла золото в стрельбе из лука.",
            "В ту ночь, когда всё для неё должно было открыться, её сбивает машина к-поп-звезды под наркотиками. Когда сознание гаснет, она уже стоит в Time Wars — среди незнакомцев в доспехах и с мечами.",
            "Никто не видит угрозы в девчонке в современной одежде. В первом же бою она подбирает лук. Руки помнят. Если не считать того, что мишени двигаются и бьют в ответ, это и есть то, чем она занималась всю жизнь."
          ]
        },
        {
          h: "Шестнадцать и одна дорога домой",
          p: [
            "У призванных общего двое — они были на краю смерти, и тела у них были исключительные. Самурай, средневековый рыцарь, викинг, минский фехтовальщик, воин Чосона и современные атлеты, одарённые как Соха.",
            "Правило простое. Место для возвращения одно. Побеждает последний уцелевший. По мере того как пространство-время рушится, арена продолжает сжиматься.",
            "Восток и Запад, древность и современность, брошенные на одну арену. Там, где не хватает слов, говорят глаза, — и, поскольку дорога домой одна, за каждым союзом следует предательство."
          ]
        },
        {
          h: "Без огнестрела — только ближний бой",
          p: [
            "Time Wars проверяют тело и волю, а не технологию. Поэтому огнестрельного оружия здесь не существует. Меч, лук, копьё, топор, клинок — только античное и средневековое оружие ближнего боя.",
            "У каждого из шестнадцати своё сложение и своё оружие: меч со щитом, большой топор, парные клинки, лук. Вы высаживаетесь в карьере против пятнадцати соперников, и побеждает тот, кто останется на ногах.",
            "Управление: WASD — движение · мышь — обзор · ЛКМ — атака · ПКМ — блок · пробел — прыжок · Shift — рывок."
          ]
        },
        {
          h: "На каком этапе — ранняя сборка",
          p: [
            "На itch выложена ранняя сборка (v0.2). Она бесплатна — платите сколько хотите.",
            "Что играбельно сейчас и что впереди:"
          ],
          list: {
            h: "",
            items: [
              "✅ Выбор из 16 бойцов (полноценный 3D-просмотр персонажа)",
              "✅ Королевская битва в карьере — вы и 15 ИИ",
              "✅ Ближний бой (меч, лук, топор, копьё) · побеждает последний уцелевший",
              "⬜ Сетевой мультиплеер",
              "⬜ Дополнительные карты арены",
              "⬜ Сжимающаяся безопасная зона"
            ]
          }
        }
      ],
      cta: "Бесплатно скачать для Windows", back: "Назад в Deother"
    },

    ar: {
      title: "Time Wars",
      tagline: "ستة عشر مقاتلًا. محجر واحد. ولا سلاح ناري.",
      intro: "‏ستة عشر محاربًا من عصور مختلفة، انتُزع كل منهم من لحظة موته، يخوضون معركة بقاء بالسلاح الأبيض داخل محجر حجارة. لا يعود إلى عالمه إلا آخر الواقفين. لا وجود للأسلحة النارية هنا — سيف وقوس ورمح وفأس ونصل فقط. النسخة الحالية مبكّرة، واللعب الشبكي قادم بعدها.",
      sections: [
        {
          h: "سوها — الفتاة التي لم تعد إلى بيتها بعد",
          p: [
            "‏البطلة سوها، في الثامنة عشرة. تخلّى عنها أبوها ورَبَّتها أمّ وحيدة، فدرّبت نفسها حتى كادت تنكسر، وأحرزت ذهبية الرماية بالقوس.",
            "في الليلة التي كان كل شيء على وشك أن ينفتح أمامها، تصدمها سيارة يقودها نجم كي-بوب تحت تأثير المخدرات. ومع انطفاء وعيها، تجد نفسها واقفة في Time Wars — بين غرباء يرتدون الدروع ويحملون السيوف.",
            "لا أحد يرى في فتاة بملابس عصرية تهديدًا. في أول معركة تلتقط قوسًا. يداها تتذكّران. ولولا أن الأهداف تتحرّك وتردّ الضربة، لكان هذا بالضبط ما فعلته طوال حياتها."
          ]
        },
        {
          h: "ستة عشر، وطريق واحد للعودة",
          p: [
            "‏يجمع بين المُستدعَين أمران: كانوا على حافة الموت، وأجسادهم استثنائية. ساموراي، وفارس من العصور الوسطى، وفايكنغ، وسيّاف من عهد مينغ، ومحارب من جوسون، ورياضيون معاصرون موهوبون مثل سوها.",
            "القاعدة بسيطة: مقعد العودة واحد لا غير. آخر من يبقى واقفًا. ومع انهيار الزمكان، تستمر الساحة في الانكماش.",
            "الشرق والغرب، القديم والحديث، في ساحة واحدة. حيث تعجز الكلمات تتكلّم العيون — ولأن طريق العودة واحد، فكل تحالف يتبعه غدر."
          ]
        },
        {
          h: "لا أسلحة نارية — سلاح أبيض فقط",
          p: [
            "‏تختبر Time Wars الجسد والإرادة، لا التقنية. لذلك لا وجود للأسلحة النارية هنا. سيف وقوس ورمح وفأس ونصل — أسلحة اشتباك قديمة ووسيطة لا غير.",
            "لكل واحد من الستة عشر بنيته وسلاحه: سيف ودرع، أو فأس كبير، أو نصلان، أو القوس. تهبط في المحجر أمام خمسة عشر خصمًا، ويفوز من يبقى واقفًا.",
            "‏التحكّم: WASD للحركة · الفأرة للنظر · الزر الأيسر هجوم · الزر الأيمن صدّ · المسافة قفز · Shift اندفاع."
          ]
        },
        {
          h: "أين وصلنا — نسخة مبكّرة",
          p: [
            "‏ما هو منشور على itch نسخة مبكّرة (v0.2). وهي مجانية — ادفع ما تشاء.",
            "ما يمكن لعبه الآن، وما هو قادم:"
          ],
          list: {
            h: "",
            items: [
              "✅ الاختيار من بين 16 مقاتلًا (عارض شخصيات ثلاثي الأبعاد كامل)",
              "✅ معركة بقاء في المحجر — أنت و15 خصمًا من الذكاء الاصطناعي",
              "✅ قتال بالسلاح الأبيض (سيف، قوس، فأس، رمح) · يفوز آخر الواقفين",
              "⬜ لعب شبكي متعدّد اللاعبين",
              "⬜ خرائط ساحات إضافية",
              "⬜ منطقة آمنة تتقلّص"
            ]
          }
        }
      ],
      cta: "‏تنزيل مجاني لنظام Windows", back: "‏العودة إلى Deother"
    }
  },

  /* ===================== Turf King =====================
   * ⚠️ 아직 기획 확정 단계다(코드 0줄, 2026-08-07). itch 도 "In development. Follow for updates."
   *   — 다운로드 빌드가 없다. 그래서 '개발 중'을 명확히 하고, 미구현을 구현인 척 쓰지 않는다(함정 2).
   *   itch·기획 문서(TK_DESIGN/TK_WORLD/TK_ROSTER)에 공개된 범위까지만.
   *   본체 착수는 FN(Fighting Nations) 복제로 8/15 이후. 출처: F:\TurfKing\Docs\.
   */
  turfking: {
    ko: {
      title: "터프 킹",
      tagline: "4인 온라인 협동 벨트스크롤 — 네 것을 되찾아라",
      intro: "자기 조직에 배신당한 다섯 도시의 조폭들이 같은 처지끼리 뭉쳐, 맨손으로 자기 나와바리를 되찾는 4인 협동 벨트스크롤. 「용과 같이」와 「더블드래곤」 사이의 손맛을 노린다. 아직 개발 중. ⚠️ 성인용 — 조직 폭력과 유혈이 나온다. 아이들용이 아니다.",
      sections: [
        {
          h: "버림받은 자들",
          p: [
            "너는 그들에게 전부를 줬다. 그들은 너를 버렸다.",
            "도쿄·서울·홍콩·뉴욕·런던 — 다섯 도시를 주름잡던 다섯 남자가 자기 조직에게 팔려나간다. 이제 그들에게 남은 건 서로, 그리고 아주 긴 이름들의 명단뿐이다.",
            "한 챕터가 그중 한 명의 귀향이다. 나머지 셋이 함께 간다. 배신한 보스를 쓰러뜨리면 그 도시가, 그리고 그 파이터가 내 것이 된다."
          ]
        },
        {
          h: "맨손, 4버튼",
          p: [
            "펀치·킥·잡기·구르기. 커맨드 입력도, 기술표도, 외워야 할 프레임 데이터도 없다.",
            "각 파이터는 200개가 넘는 고유 타격 애니메이션을 갖고, 게임이 그중 알맞은 것을 대신 골라준다. 플레이어는 그냥 계속 휘두르면 된다.",
            "이 손맛은 Deother 의 격투게임 Fighting Nations 에서 검증된 무브·타격감을 토대로 만든다 — 백지에서 시작하지 않는다."
          ]
        },
        {
          h: "서로 등지지 않고, 함께",
          p: [
            "최대 4인 드롭인 협동. 빈자리는 등을 봐주는 — 그러면서 잔소리도 하는 — AI 동료가 채운다.",
            "누군가 이기기 위해 누군가 질 필요가 없다. 등수도, 킬 경쟁도 없다. 각자의 통계(총 KO·최대 콤보·구출 횟수)만 남는다. 협동이 제로섬으로 무너지지 않게 설계한다."
          ]
        },
        {
          h: "지금 어디까지 — 개발 중",
          p: [
            "아직 기획이 확정된 단계다. itch 페이지는 다운로드 빌드가 아니라 개발 소개다 — \"In development. Follow for updates.\"",
            "확정된 것과 앞으로 만들 것:"
          ],
          list: {
            h: "",
            items: [
              "✅ 기획·세계관 확정 (버림받은 자들, 다섯 도시)",
              "✅ 20명 파이터 로스터 · 컨셉 아트",
              "✅ FN 의 225개 무브·타격감 자산 재활용 경로",
              "⬜ 4인 온라인 협동 (온라인은 전부 새 작업)",
              "⬜ 다섯 도시 캠페인 (도쿄·서울·홍콩·뉴욕·런던)",
              "⬜ 도시 정복 = 파이터 획득"
            ]
          }
        }
      ],
      cta: "itch 에서 팔로우", back: "Deother로 돌아가기"
    },
    en: {
      title: "Turf King",
      tagline: "A four-player online co-op brawler — take back what's yours",
      intro: "Crime bosses from five cities, betrayed by their own crews, band together to take back their turf bare-knuckle. A four-player co-op beat 'em up aiming for the feel of Yakuza meets Double Dragon. Still in development. ⚠️ Mature — gang violence and blood. Not for kids.",
      sections: [
        {
          h: "They gave you up",
          p: [
            "You gave them everything. They gave you up.",
            "Tokyo, Seoul, Hong Kong, New York, London — five men who ran those cities, sold out by their own crews. Now they've got nothing left but each other, and a very long list of names.",
            "Every chapter is one of them going home. The other three come along. Beat the boss who betrayed you and their city — and their fighter — is yours."
          ]
        },
        {
          h: "Bare knuckles, four buttons",
          p: [
            "Punch, kick, grab, roll. No motion inputs, no command lists, no frame data to memorize.",
            "Every fighter draws from a library of over 200 unique attack animations, and the game picks the good one for you. You just keep swinging.",
            "The feel is built on the moves and impact tuning proven in Deother's fighting game, Fighting Nations — not from a blank page."
          ]
        },
        {
          h: "Fight together, not against each other",
          p: [
            "Drop-in co-op for up to four. Empty slots fill with AI crew who watch your back and give you grief about it.",
            "Nobody has to lose for somebody to win. No rankings, no kill-stealing — just each player's own stats (total KOs, best combo, rescues). Built so co-op never collapses into a zero-sum race."
          ]
        },
        {
          h: "Where it stands — in development",
          p: [
            "The design is locked; the code is not started yet. The itch page is a dev intro, not a build — \"In development. Follow for updates.\"",
            "What's decided, and what's still to build:"
          ],
          list: {
            h: "",
            items: [
              "✅ Story & world locked (the betrayed, five cities)",
              "✅ 20-fighter roster · concept art",
              "✅ A path to reuse 225 moves & impact tech from Fighting Nations",
              "⬜ Four-player online co-op (all-new netcode work)",
              "⬜ The five-city campaign (Tokyo, Seoul, Hong Kong, New York, London)",
              "⬜ Take a city, take a fighter"
            ]
          }
        }
      ],
      cta: "Follow on itch", back: "Back to Deother"
    },

    zh: {
      title: "Turf King",
      tagline: "四人在线合作的横版格斗——把属于你的东西夺回来",
      intro: "五座城市的黑道头目，被自己的手下背叛，联手用赤手空拳夺回地盘。目标手感是《如龙》遇上《双截龙》的四人合作清版格斗。仍在开发中。⚠️ 成人向——帮派暴力与流血。不适合儿童。",
      sections: [
        {
          h: "他们把你卖了",
          p: [
            "你把一切都给了他们。他们把你卖了。",
            "东京、首尔、香港、纽约、伦敦——曾经掌控这五座城市的五个男人，被自己的手下出卖。如今他们一无所有，只剩下彼此，和一份很长的名单。",
            "每一章都是其中一人回家的故事。另外三人同行。打倒背叛你的头目，那座城市——以及那名格斗家——就归你。"
          ]
        },
        {
          h: "赤手空拳，四个按键",
          p: [
            "拳、脚、抓、翻滚。没有搓招，没有指令表，不用背帧数。",
            "每名格斗家都从超过 200 段独有攻击动画的库中取招，由游戏替你挑出合适的那一招。你只管一直挥出去。",
            "手感建立在迪亚德的格斗游戏 Fighting Nations 中已经验证过的招式与打击调校之上——不是从白纸开始。"
          ]
        },
        {
          h: "并肩作战，而不是互相较劲",
          p: [
            "最多四人随进随退的合作模式。空位由 AI 同伴补上，他们会替你挡刀，也会为此念叨你。",
            "不需要谁输才有人赢。没有排名，没有抢人头——只有每位玩家自己的数据（总击倒数、最佳连段、救援次数）。这样设计，是为了让合作永远不会塌陷成零和竞赛。"
          ]
        },
        {
          h: "现在到哪一步——开发中",
          p: [
            "企划已经定稿，代码尚未动工。itch 页面是开发介绍，不是可下载的版本——「In development. Follow for updates.」",
            "已经确定的，和还要做的："
          ],
          list: {
            h: "",
            items: [
              "✅ 故事与世界观定稿（被背叛的人们，五座城市）",
              "✅ 20 人格斗家阵容 · 概念原画",
              "✅ 复用 Fighting Nations 的 225 段招式与打击技术的路径",
              "⬜ 四人在线合作（全新的联机代码）",
              "⬜ 五座城市的战役（东京、首尔、香港、纽约、伦敦）",
              "⬜ 拿下一座城市，就得到一名格斗家"
            ]
          }
        }
      ],
      cta: "在 itch 上关注", back: "返回 Deother"
    },

    ja: {
      title: "Turf King",
      tagline: "四人オンライン協力のベルトスクロール——自分のものを取り返す",
      intro: "五つの都市の親分たちが、身内に裏切られ、素手で縄張りを取り返すために手を組みます。『龍が如く』と『ダブルドラゴン』が出会ったような手触りを目指す、四人協力のベルトスクロールアクション。まだ開発中です。⚠️ 成人向け——暴力団の暴力と流血。子ども向けではありません。",
      sections: [
        {
          h: "あいつらはお前を売った",
          p: [
            "お前は何もかも差し出した。あいつらはお前を売った。",
            "東京、ソウル、香港、ニューヨーク、ロンドン——それぞれの街を仕切っていた五人が、身内に売られました。いま残っているのは互いだけと、とても長い名前のリストだけです。",
            "各章は、そのうちの一人が自分の街へ帰る話。残る三人が同行します。裏切った親分を倒せば、その街も——その街のファイターも——あなたのものです。"
          ]
        },
        {
          h: "素手、ボタン四つ",
          p: [
            "パンチ、キック、つかみ、ローリング。コマンド入力も技表も、覚えるフレームデータもありません。",
            "各ファイターは200種を超える固有の攻撃モーションから技を引き、良い一発をゲームが選んでくれます。あなたは振り続けるだけです。",
            "手触りは、ディアザーの格闘ゲーム Fighting Nations で実証済みの技とヒット感の調整の上に作られています——白紙からではありません。"
          ]
        },
        {
          h: "競い合うのではなく、共に戦う",
          p: [
            "最大四人のドロップイン協力プレイ。空き枠は AI の仲間が埋め、背中を守りつつ小言も言ってきます。",
            "誰かが勝つために誰かが負ける必要はありません。ランキングもキル横取りもなく、あるのは各プレイヤー自身の記録だけ（総KO数、最高コンボ、救助回数）。協力がゼロサムの争いに崩れないように設計しています。"
          ]
        },
        {
          h: "いまどこまで——開発中",
          p: [
            "企画は確定、コードはまだ着手していません。itch のページはビルドではなく開発紹介です——「In development. Follow for updates.」",
            "決まっているものと、これから作るもの："
          ],
          list: {
            h: "",
            items: [
              "✅ ストーリーと世界観の確定（裏切られた者たち、五つの都市）",
              "✅ 20人のロスター · コンセプトアート",
              "✅ Fighting Nations の225の技とヒット技術を再利用する道筋",
              "⬜ 四人オンライン協力（ネットコードは全て新規）",
              "⬜ 五都市のキャンペーン（東京、ソウル、香港、ニューヨーク、ロンドン）",
              "⬜ 街を取れば、ファイターが手に入る"
            ]
          }
        }
      ],
      cta: "itch でフォロー", back: "Deother に戻る"
    },

    es: {
      title: "Turf King",
      tagline: "Un brawler cooperativo en línea para cuatro: recupera lo que es tuyo",
      intro: "Jefes del crimen de cinco ciudades, traicionados por sus propias bandas, se unen para recuperar su territorio a puño limpio. Un yo contra el barrio cooperativo para cuatro jugadores que busca la sensación de Yakuza cruzado con Double Dragon. Todavía en desarrollo. ⚠️ Para adultos: violencia de bandas y sangre. No es para niños.",
      sections: [
        {
          h: "Te entregaron",
          p: [
            "Tú se lo diste todo. Ellos te entregaron.",
            "Tokio, Seúl, Hong Kong, Nueva York, Londres: cinco hombres que dirigían esas ciudades, vendidos por sus propias bandas. Ahora no les queda nada salvo ellos mismos y una lista de nombres muy larga.",
            "Cada capítulo es uno de ellos volviendo a casa. Los otros tres lo acompañan. Derrota al jefe que te traicionó y su ciudad —y su luchador— son tuyos."
          ]
        },
        {
          h: "Puños desnudos, cuatro botones",
          p: [
            "Puñetazo, patada, agarre, rodada. Sin entradas de movimiento, sin listas de comandos, sin datos de frames que memorizar.",
            "Cada luchador bebe de una biblioteca de más de 200 animaciones de ataque propias, y el juego elige la buena por ti. Tú solo sigue golpeando.",
            "La sensación se apoya en los movimientos y el ajuste de impacto ya probados en el juego de lucha de Deother, Fighting Nations, no en una hoja en blanco."
          ]
        },
        {
          h: "Pelear juntos, no unos contra otros",
          p: [
            "Cooperativo de entrada libre para hasta cuatro. Las plazas vacías las ocupan compañeros de IA que te cubren las espaldas y luego te lo recuerdan.",
            "Nadie tiene que perder para que otro gane. Sin clasificaciones ni robo de muertes: solo las estadísticas propias de cada jugador (KO totales, mejor combo, rescates). Construido para que el cooperativo nunca degenere en una carrera de suma cero."
          ]
        },
        {
          h: "Dónde está: en desarrollo",
          p: [
            "El diseño está cerrado; el código aún no ha empezado. La página de itch es una presentación de desarrollo, no una versión jugable: «In development. Follow for updates.»",
            "Lo que está decidido y lo que queda por construir:"
          ],
          list: {
            h: "",
            items: [
              "✅ Historia y mundo cerrados (los traicionados, cinco ciudades)",
              "✅ Plantilla de 20 luchadores · arte conceptual",
              "✅ Una vía para reutilizar los 225 movimientos y la tecnología de impacto de Fighting Nations",
              "⬜ Cooperativo en línea para cuatro (netcode enteramente nuevo)",
              "⬜ La campaña de cinco ciudades (Tokio, Seúl, Hong Kong, Nueva York, Londres)",
              "⬜ Toma una ciudad, gana un luchador"
            ]
          }
        }
      ],
      cta: "Seguir en itch", back: "Volver a Deother"
    },

    pt: {
      title: "Turf King",
      tagline: "Um brawler cooperativo online para quatro — recupera o que é teu",
      intro: "Chefes do crime de cinco cidades, traídos pelos seus próprios bandos, juntam-se para recuperar o território à força dos punhos. Um beat 'em up cooperativo para quatro jogadores que procura a sensação de Yakuza cruzado com Double Dragon. Ainda em desenvolvimento. ⚠️ Para adultos — violência de gangues e sangue. Não é para crianças.",
      sections: [
        {
          h: "Eles entregaram-te",
          p: [
            "Tu deste-lhes tudo. Eles entregaram-te.",
            "Tóquio, Seul, Hong Kong, Nova Iorque, Londres — cinco homens que mandavam nessas cidades, vendidos pelos seus próprios bandos. Agora não lhes resta nada além uns dos outros e de uma lista de nomes muito longa.",
            "Cada capítulo é um deles a voltar a casa. Os outros três vão juntos. Derrota o chefe que te traiu e a cidade dele — e o lutador dele — passam a ser teus."
          ]
        },
        {
          h: "Punhos nus, quatro botões",
          p: [
            "Soco, pontapé, agarrar, rolamento. Sem inputs de movimento, sem listas de comandos, sem frame data para decorar.",
            "Cada lutador bebe de uma biblioteca com mais de 200 animações de ataque próprias, e o jogo escolhe a boa por ti. Tu limitas-te a continuar a bater.",
            "A sensação assenta nos golpes e no ajuste de impacto já provados no jogo de luta da Deother, Fighting Nations — não numa folha em branco."
          ]
        },
        {
          h: "Lutar juntos, não uns contra os outros",
          p: [
            "Cooperativo de entrada livre até quatro. Os lugares vazios são preenchidos por companheiros de IA que te guardam as costas e depois te chateiam por isso.",
            "Ninguém tem de perder para alguém ganhar. Sem tabelas nem roubo de abates — apenas as estatísticas de cada jogador (KO totais, melhor combo, resgates). Feito para que o cooperativo nunca desabe numa corrida de soma zero."
          ]
        },
        {
          h: "Onde está — em desenvolvimento",
          p: [
            "O design está fechado; o código ainda não começou. A página do itch é uma apresentação de desenvolvimento, não uma versão jogável — «In development. Follow for updates.»",
            "O que está decidido e o que falta construir:"
          ],
          list: {
            h: "",
            items: [
              "✅ História e mundo fechados (os traídos, cinco cidades)",
              "✅ Plantel de 20 lutadores · arte conceptual",
              "✅ Um caminho para reutilizar os 225 golpes e a tecnologia de impacto de Fighting Nations",
              "⬜ Cooperativo online para quatro (netcode todo novo)",
              "⬜ A campanha das cinco cidades (Tóquio, Seul, Hong Kong, Nova Iorque, Londres)",
              "⬜ Toma uma cidade, ganha um lutador"
            ]
          }
        }
      ],
      cta: "Seguir no itch", back: "Voltar a Deother"
    },

    fr: {
      title: "Turf King",
      tagline: "Un beat'em up coopératif en ligne à quatre — reprenez ce qui vous appartient",
      intro: "Des parrains de cinq villes, trahis par leurs propres hommes, s'allient pour reprendre leur territoire à mains nues. Un beat'em up coopératif à quatre qui vise la sensation d'un Yakuza croisé avec Double Dragon. Encore en développement. ⚠️ Pour adultes — violence de gangs et sang. Pas pour les enfants.",
      sections: [
        {
          h: "Ils vous ont livré",
          p: [
            "Vous leur avez tout donné. Ils vous ont livré.",
            "Tokyo, Séoul, Hong Kong, New York, Londres — cinq hommes qui tenaient ces villes, vendus par leurs propres équipes. Il ne leur reste plus qu'eux-mêmes, et une très longue liste de noms.",
            "Chaque chapitre, c'est l'un d'eux qui rentre chez lui. Les trois autres l'accompagnent. Battez le patron qui vous a trahi et sa ville — ainsi que son combattant — vous revient."
          ]
        },
        {
          h: "Poings nus, quatre boutons",
          p: [
            "Coup de poing, coup de pied, saisie, roulade. Pas de manipulations, pas de listes de commandes, pas de frame data à retenir.",
            "Chaque combattant puise dans une bibliothèque de plus de 200 animations d'attaque qui lui sont propres, et le jeu choisit la bonne à votre place. Vous n'avez qu'à continuer de frapper.",
            "La sensation repose sur les coups et le réglage d'impact déjà éprouvés dans le jeu de combat de Deother, Fighting Nations — et non sur une page blanche."
          ]
        },
        {
          h: "Se battre ensemble, pas les uns contre les autres",
          p: [
            "Coopération en drop-in jusqu'à quatre. Les places libres sont prises par des équipiers IA qui vous couvrent — et vous le font savoir.",
            "Personne n'a besoin de perdre pour qu'un autre gagne. Pas de classement, pas de vol de kills — seulement les statistiques propres à chaque joueur (KO au total, meilleur combo, sauvetages). Conçu pour que la coopération ne dégénère jamais en course à somme nulle."
          ]
        },
        {
          h: "Où en est le jeu — en développement",
          p: [
            "La conception est arrêtée ; le code n'a pas commencé. La page itch est une présentation de développement, pas un build — « In development. Follow for updates. »",
            "Ce qui est décidé, et ce qui reste à construire :"
          ],
          list: {
            h: "",
            items: [
              "✅ Histoire et univers arrêtés (les trahis, cinq villes)",
              "✅ Un roster de 20 combattants · illustrations conceptuelles",
              "✅ Une voie pour réutiliser les 225 coups et la technologie d'impact de Fighting Nations",
              "⬜ Coopération en ligne à quatre (netcode entièrement nouveau)",
              "⬜ La campagne des cinq villes (Tokyo, Séoul, Hong Kong, New York, Londres)",
              "⬜ Prenez une ville, gagnez un combattant"
            ]
          }
        }
      ],
      cta: "Suivre sur itch", back: "Retour à Deother"
    },

    de: {
      title: "Turf King",
      tagline: "Ein Online-Koop-Brawler für vier — hol dir zurück, was dir gehört",
      intro: "Bosse aus fünf Städten, von den eigenen Leuten verraten, tun sich zusammen, um ihr Revier mit bloßen Fäusten zurückzuholen. Ein Koop-Beat-'em-up für vier Spieler, das auf das Gefühl von Yakuza trifft Double Dragon zielt. Noch in Entwicklung. ⚠️ Für Erwachsene — Bandengewalt und Blut. Nichts für Kinder.",
      sections: [
        {
          h: "Sie haben dich verkauft",
          p: [
            "Du hast ihnen alles gegeben. Sie haben dich verkauft.",
            "Tokio, Seoul, Hongkong, New York, London — fünf Männer, die diese Städte führten, von den eigenen Crews verraten. Jetzt bleibt ihnen nichts als einander und eine sehr lange Liste von Namen.",
            "Jedes Kapitel ist einer von ihnen auf dem Heimweg. Die anderen drei kommen mit. Schlag den Boss, der dich verraten hat, und seine Stadt — und sein Kämpfer — gehören dir."
          ]
        },
        {
          h: "Bloße Fäuste, vier Tasten",
          p: [
            "Schlag, Tritt, Griff, Rolle. Keine Eingabefolgen, keine Kommandolisten, keine Frame-Daten zum Auswendiglernen.",
            "Jeder Kämpfer schöpft aus einer Bibliothek von über 200 eigenen Angriffsanimationen, und das Spiel wählt die passende für dich. Du schlägst einfach weiter.",
            "Das Spielgefühl baut auf den Moves und dem Trefferfeedback auf, die in Deothers Kampfspiel Fighting Nations schon bewiesen sind — nicht auf einem leeren Blatt."
          ]
        },
        {
          h: "Miteinander kämpfen, nicht gegeneinander",
          p: [
            "Drop-in-Koop für bis zu vier. Freie Plätze füllen KI-Kameraden, die dir den Rücken freihalten — und dich anschließend damit aufziehen.",
            "Niemand muss verlieren, damit jemand gewinnt. Keine Ranglisten, kein Kill-Klauen — nur die eigenen Werte jedes Spielers (KOs gesamt, bester Combo, Rettungen). So gebaut, dass Koop nie in ein Nullsummenrennen kippt."
          ]
        },
        {
          h: "Wo es steht — in Entwicklung",
          p: [
            "Das Design steht; der Code hat noch nicht begonnen. Die itch-Seite ist eine Entwicklungsvorstellung, kein Build — „In development. Follow for updates.“",
            "Was entschieden ist, und was noch zu bauen bleibt:"
          ],
          list: {
            h: "",
            items: [
              "✅ Geschichte und Welt stehen fest (die Verratenen, fünf Städte)",
              "✅ Ein Roster aus 20 Kämpfern · Concept Art",
              "✅ Ein Weg, 225 Moves und die Treffertechnik aus Fighting Nations wiederzuverwenden",
              "⬜ Online-Koop für vier (komplett neuer Netcode)",
              "⬜ Die Kampagne über fünf Städte (Tokio, Seoul, Hongkong, New York, London)",
              "⬜ Nimm eine Stadt, gewinn einen Kämpfer"
            ]
          }
        }
      ],
      cta: "Auf itch folgen", back: "Zurück zu Deother"
    },

    ru: {
      title: "Turf King",
      tagline: "Кооперативный сетевой битемап на четверых — забери то, что твоё",
      intro: "Криминальные боссы пяти городов, преданные собственными людьми, объединяются, чтобы вернуть свою территорию голыми руками. Кооперативный битемап на четверых, который целит в ощущение Yakuza, скрещённой с Double Dragon. Всё ещё в разработке. ⚠️ Для взрослых — бандитское насилие и кровь. Не для детей.",
      sections: [
        {
          h: "Они тебя сдали",
          p: [
            "Ты отдал им всё. Они тебя сдали.",
            "Токио, Сеул, Гонконг, Нью-Йорк, Лондон — пятеро, державшие эти города, преданы собственными командами. Теперь у них не осталось ничего, кроме друг друга и очень длинного списка имён.",
            "Каждая глава — это возвращение одного из них домой. Остальные трое идут рядом. Победи босса, который тебя предал, и его город — вместе с его бойцом — станет твоим."
          ]
        },
        {
          h: "Голые кулаки, четыре кнопки",
          p: [
            "Удар рукой, ногой, захват, перекат. Никаких сложных вводов, списков команд и фрейм-данных, которые надо заучивать.",
            "Каждый боец берёт движения из библиотеки более чем в 200 собственных анимаций атаки, а игра сама выбирает удачную. Вам остаётся просто продолжать бить.",
            "Ощущение построено на движениях и настройке ударов, уже проверенных в файтинге Deother — Fighting Nations, а не с чистого листа."
          ]
        },
        {
          h: "Драться вместе, а не друг против друга",
          p: [
            "Кооператив с подключением на ходу, до четырёх игроков. Свободные места занимают напарники под управлением ИИ: прикрывают спину и потом же этим попрекают.",
            "Никому не нужно проигрывать, чтобы кто-то выиграл. Ни рейтингов, ни воровства добиваний — только личная статистика каждого игрока (всего нокаутов, лучшее комбо, спасения). Сделано так, чтобы кооператив никогда не скатывался в гонку с нулевой суммой."
          ]
        },
        {
          h: "На каком этапе — в разработке",
          p: [
            "Дизайн закреплён, код ещё не начат. Страница на itch — это представление проекта, а не сборка: «In development. Follow for updates.»",
            "Что решено и что ещё предстоит сделать:"
          ],
          list: {
            h: "",
            items: [
              "✅ История и мир закреплены (преданные, пять городов)",
              "✅ Ростер из 20 бойцов · концепт-арт",
              "✅ Путь к переиспользованию 225 движений и техники ударов из Fighting Nations",
              "⬜ Сетевой кооператив на четверых (полностью новый netcode)",
              "⬜ Кампания по пяти городам (Токио, Сеул, Гонконг, Нью-Йорк, Лондон)",
              "⬜ Взял город — получил бойца"
            ]
          }
        }
      ],
      cta: "Подписаться на itch", back: "Назад в Deother"
    },

    ar: {
      title: "Turf King",
      tagline: "لعبة ملاكمة شوارع تعاونية عبر الإنترنت لأربعة لاعبين — استعِد ما هو لك",
      intro: "‏زعماء عصابات من خمس مدن، خانتهم أطقمهم، يتحالفون لاستعادة مناطقهم بالأيدي العارية. لعبة قتال شوارع تعاونية لأربعة لاعبين تستهدف إحساس Yakuza ممزوجًا بـ Double Dragon. ما زالت قيد التطوير. ⚠️ للبالغين — عنف عصابات ودماء. ليست للأطفال.",
      sections: [
        {
          h: "لقد باعوك",
          p: [
            "أعطيتهم كل شيء. فباعوك.",
            "طوكيو وسول وهونغ كونغ ونيويورك ولندن — خمسة رجال كانوا يديرون تلك المدن، باعهم رجالهم أنفسهم. لم يبقَ لهم الآن سوى بعضهم بعضًا، وقائمة أسماء طويلة جدًا.",
            "كل فصل هو عودة واحد منهم إلى مدينته، ومعه الثلاثة الآخرون. اهزم الزعيم الذي خانك، فتصير مدينته — ومقاتلها — لك."
          ]
        },
        {
          h: "أيدٍ عارية، وأربعة أزرار",
          p: [
            "لكمة وركلة وإمساك والتفاف. لا مدخلات حركية، ولا قوائم أوامر، ولا بيانات إطارات تُحفظ.",
            "‏كل مقاتل يسحب من مكتبة تضم أكثر من 200 حركة هجوم خاصة به، واللعبة تختار الحركة المناسبة نيابة عنك. كل ما عليك أن تواصل الضرب.",
            "‏الإحساس مبنيّ على الحركات وضبط الارتطام المُثبَتين في لعبة القتال Fighting Nations من ديأذر — لا من صفحة بيضاء."
          ]
        },
        {
          h: "قتال معًا، لا ضد بعضنا",
          p: [
            "‏تعاون بانضمام فوري حتى أربعة لاعبين. المقاعد الفارغة يملؤها رفاق من الذكاء الاصطناعي يحمون ظهرك ثم يذكّرونك بذلك.",
            "لا يلزم أن يخسر أحد كي يفوز آخر. لا تصنيفات ولا سرقة إسقاطات — فقط إحصاءات كل لاعب لنفسه (مجموع الإسقاطات، وأفضل سلسلة، وعدد الإنقاذات). صُمّمت هكذا كي لا ينهار التعاون إلى سباق صفري."
          ]
        },
        {
          h: "أين وصلنا — قيد التطوير",
          p: [
            "‏التصميم مُقفل، والبرمجة لم تبدأ بعد. صفحة itch تعريف بالتطوير لا نسخة قابلة للتنزيل — «In development. Follow for updates.»",
            "ما تقرّر، وما بقي بناؤه:"
          ],
          list: {
            h: "",
            items: [
              "✅ القصة والعالم مُقفلان (المغدورون، وخمس مدن)",
              "✅ قائمة من 20 مقاتلًا · رسوم مفاهيمية",
              "‏✅ مسار لإعادة استخدام 225 حركة وتقنية الارتطام من Fighting Nations",
              "⬜ تعاون شبكي لأربعة لاعبين (شيفرة شبكة جديدة بالكامل)",
              "⬜ حملة المدن الخمس (طوكيو، سول، هونغ كونغ، نيويورك، لندن)",
              "⬜ خُذ مدينة، تكسب مقاتلًا"
            ]
          }
        }
      ],
      cta: "‏تابِعنا على itch", back: "‏العودة إلى Deother"
    }
  },

  /* ===================== Wall Street the Game =====================
   * 완성·배포된 브라우저 교육 게임(PWA, wall-street-phi.vercel.app). itch 아님.
   * 배포 페이지·README/HANDOFF 에 공개된 범위로 쓴다. 출처: F:\stock100.
   * 교육용이며 투자 조언이 아니라는 것을 명시한다(게임 자체가 그렇게 고지한다).
   */
  wallstreet: {
    ko: {
      title: "월스트리트 234년",
      tagline: "다시 태어난 투자자 — 1792년부터 2026년까지",
      intro: "2026년, 당신은 90세로 세상을 떠났다. 그런데 눈을 떠보니 1792년, 막 뉴욕증시가 태어난 버튼우드 나무 아래다. 불멸의 몸으로 300년을 살게 된 손에는 $10,000이 쥐어져 있다. 미국 주식 234년을 한 해씩 다시 살며 역사와 경제를 온몸으로 배우는 브라우저 교육 게임이다.",
      sections: [
        {
          h: "다시 태어난 투자자",
          p: [
            "이번 생엔 미래를 안다. 1792년부터 2026년까지, 미국 주식의 흥망성쇠를 처음부터 다시 지나간다.",
            "시대마다 새 회사가 상장하고, 대공황·오일쇼크·닷컴버블·금융위기가 시장을 뒤흔든다. 어느 회사를, 언제 사서, 언제 팔 것인가.",
            "애플처럼 100년을 살아남아 세계 1위가 되는 회사도, 야후·엔론·리먼처럼 0원으로 사라지는 회사도 있다. 2026년, 당신의 $10,000은 얼마가 되어 있을까."
          ]
        },
        {
          h: "오직 턴제 — 매년 직접 결정한다",
          p: [
            "자동으로 흐르면 그냥 구경이 된다. 그래서 이 게임은 오직 턴제다. 매 해에 무엇을 사고팔지 직접 정하고 다음 해로 넘기면, 그 즉시 자산이 얼마 늘었는지 줄었는지 표시된다.",
            "능동적으로 결정하고 1년 뒤 손익을 바로 체감한다. 살 종목이 적은 초기(1900년 이전)는 5년씩, 1900년부터는 1년씩 진행한다. 자동·속도 모드는 일부러 넣지 않았다."
          ]
        },
        {
          h: "실제 역사가 데이터다",
          p: [
            "41개 실제 종목의 주가는 역사의 추세와 주요 폭락·급등을 반영한 교육용 근사치다(분할 조정 기준). NYSE 와 나스닥을 구분한다.",
            "'파산'과 '피인수'는 다르다 — 야후·RCA·넷스케이프는 망한 게 아니라 인수되어 주주가 현금을 회수했다. 이 구분이 교훈의 핵심이다.",
            "내 자산은 다우지수(시장 평균)와 나란히 그래프로 표시된다. 시장을 이겼는가 졌는가를 한눈에 본다."
          ]
        },
        {
          h: "역사와 경제를 함께",
          p: [
            "해마다 '뉴스 & 배경지식' 패널에 그 시대의 경제·역사 해설이 쌓인다. 버튼우드 협정부터 닷컴버블까지, 무슨 일이 왜 일어났는지 함께 배운다.",
            "아이들과 입문자가 '언제 뭘 샀으면 때돈을 벌고 언제 망했는지'를 실제 데이터로 체감하도록 만들었다. 브라우저에서 무료로, 설치 없이 바로 플레이한다.",
            "※ 실제 투자 조언이 아니다 — 교육용 게임이다."
          ]
        }
      ],
      cta: "브라우저에서 플레이", back: "Deother로 돌아가기"
    },
    en: {
      title: "Wall Street the Game",
      tagline: "A reborn investor — from 1792 to 2026",
      intro: "In 2026 you die at ninety. Then you open your eyes in 1792, under the buttonwood tree where the New York Stock Exchange has just been born. Reborn to live three hundred years, you hold $10,000. A browser education game where you relive 234 years of the US stock market one year at a time, learning history and economics along the way.",
      sections: [
        {
          h: "A reborn investor",
          p: [
            "This life, you know the future. From 1792 to 2026, you pass through the rise and fall of American stocks all over again.",
            "New companies list in every era, and the Great Depression, the oil shocks, the dot-com bubble, the financial crisis all shake the market. Which company do you buy, when, and when do you sell?",
            "Some, like Apple, survive a century to become the world's most valuable; others — Yahoo, Enron, Lehman — vanish to zero. In 2026, what has your $10,000 become?"
          ]
        },
        {
          h: "Turn-based only — you decide every year",
          p: [
            "If it runs on its own, you just watch. So this game is turn-based only. Each year you choose what to buy and sell, advance to the next year, and immediately see how much your wealth rose or fell.",
            "You decide actively and feel the profit or loss a year later, right away. The early years with few stocks (before 1900) move five at a time; from 1900 it's year by year. Auto and fast-forward modes were left out on purpose."
          ]
        },
        {
          h: "Real history is the data",
          p: [
            "The prices of 41 real stocks are educational approximations reflecting the trends and the major crashes and surges of history (split-adjusted). NYSE and Nasdaq are distinguished.",
            "'Bankrupt' and 'acquired' are not the same — Yahoo, RCA, and Netscape didn't fail; they were bought out and shareholders cashed in. That distinction is the heart of the lesson.",
            "Your wealth is charted right alongside the Dow (the market average), so you can see at a glance whether you beat the market or lost to it."
          ]
        },
        {
          h: "History and economics together",
          p: [
            "Every year a 'News & Background' panel fills with economic and historical commentary for that era. From the Buttonwood Agreement to the dot-com bubble, you learn what happened and why.",
            "It's built so that kids and beginners feel, through real data, when buying something would have made a fortune and when it would have wiped them out. Free in the browser, no install, play right away.",
            "※ This is not investment advice — it is an educational game."
          ]
        }
      ],
      cta: "Play in the browser", back: "Back to Deother"
    },

    zh: {
      title: "Wall Street the Game",
      tagline: "重生的投资者——从 1792 到 2026",
      intro: "2026 年，你在九十岁离世。再睁眼时是 1792 年，纽约证券交易所刚在梧桐树下诞生。重生后你将活过三百年，手里有 10,000 美元。这是一款浏览器教育游戏：以一年为一步重走美股 234 年，一路学历史与经济。",
      sections: [
        {
          h: "重生的投资者",
          p: [
            "这一世，你知道未来。从 1792 到 2026，你要重新走过美国股市的兴衰。",
            "每个时代都有新公司上市，大萧条、石油危机、互联网泡沫、金融危机轮番冲击市场。你买哪家、什么时候买、又在什么时候卖？",
            "有的像苹果，活过一个世纪成为全球市值第一；有的——雅虎、安然、雷曼——归零消失。到了 2026 年，你那 10,000 美元变成了多少？"
          ]
        },
        {
          h: "只有回合制——每一年都由你决定",
          p: [
            "如果它自己会跑，你就只是旁观。所以这款游戏只有回合制。每一年你选择买入与卖出，推进到下一年，立刻看到财富涨了多少、跌了多少。",
            "你主动决定，一年后立刻感受到盈亏。股票还很少的早期（1900 年以前）五年一步，从 1900 年起改为一年一步。自动模式与快进是刻意不做的。"
          ]
        },
        {
          h: "真实历史就是数据",
          p: [
            "41 支真实股票的价格是教学用的近似值，反映历史走势与重大暴跌暴涨（已按拆股调整）。纽交所与纳斯达克分开标示。",
            "「破产」与「被收购」不是一回事——雅虎、RCA、网景并没有失败，它们被买下，股东拿到了钱。这个区分正是这堂课的核心。",
            "你的资产会与道指（市场平均）画在同一张图上，一眼就能看出你是跑赢了市场，还是输给了它。"
          ]
        },
        {
          h: "历史与经济一起学",
          p: [
            "每一年，「新闻与背景」栏都会填入那个时代的经济与历史解说。从梧桐树协议到互联网泡沫，你会知道发生了什么、又为什么发生。",
            "它是为了让孩子和新手通过真实数据去体会：什么时候买下某家公司会赚到一大笔，什么时候会血本无归。浏览器免费、免安装、直接开玩。",
            "※ 这不是投资建议，而是一款教育游戏。"
          ]
        }
      ],
      cta: "在浏览器中游玩", back: "返回 Deother"
    },

    ja: {
      title: "Wall Street the Game",
      tagline: "生まれ直した投資家——1792年から2026年まで",
      intro: "2026年、あなたは九十歳で亡くなります。次に目を開けると1792年、ニューヨーク証券取引所が生まれたばかりのボタンウッドの木の下です。三百年を生きるために生まれ直したあなたの手元には1万ドル。米国株の234年を一年ずつ辿り直しながら、歴史と経済を学ぶブラウザ教育ゲームです。",
      sections: [
        {
          h: "生まれ直した投資家",
          p: [
            "この人生では、あなたは未来を知っています。1792年から2026年まで、アメリカ株の栄枯盛衰をもう一度通り抜けます。",
            "どの時代にも新しい企業が上場し、大恐慌、オイルショック、ドットコムバブル、金融危機が市場を揺さぶります。どの会社を、いつ買い、いつ売るのか。",
            "アップルのように一世紀を生き延びて世界一の時価総額になるものもあれば、ヤフー、エンロン、リーマンのようにゼロへ消えるものもあります。2026年、あなたの1万ドルはいくらになっているでしょう。"
          ]
        },
        {
          h: "ターン制のみ——毎年あなたが決める",
          p: [
            "勝手に進むなら、あなたは眺めているだけになります。だからこのゲームはターン制だけです。毎年、何を買い何を売るかを選び、次の年へ進め、資産がどれだけ増えたか減ったかをその場で見ます。",
            "自分で能動的に決め、一年後の損益をすぐに味わう。銘柄の少ない初期（1900年以前）は五年ずつ、1900年からは一年ずつ進みます。オート進行と早送りは意図的に入れていません。"
          ]
        },
        {
          h: "本物の歴史がデータになる",
          p: [
            "実在する41銘柄の価格は、歴史の趨勢と主要な暴落・急騰を反映した教育用の近似値です（株式分割調整済み）。NYSE と Nasdaq は区別しています。",
            "「倒産」と「買収」は同じではありません——ヤフー、RCA、ネットスケープは失敗したのではなく、買われて株主は現金化しました。この区別こそが学びの核心です。",
            "あなたの資産はダウ（市場平均）と同じグラフに並べて描かれるので、市場に勝ったのか負けたのかが一目で分かります。"
          ]
        },
        {
          h: "歴史と経済を一緒に",
          p: [
            "毎年、「ニュースと背景」欄にその時代の経済・歴史の解説が入ります。ボタンウッド協定からドットコムバブルまで、何が起きたのか、なぜ起きたのかを学べます。",
            "子どもや初心者が、実データを通して「ここで買っていれば大金になった」「ここで買っていれば全部飛んだ」を体感できるように作っています。ブラウザで無料、インストール不要、すぐ遊べます。",
            "※ これは投資助言ではなく、教育用のゲームです。"
          ]
        }
      ],
      cta: "ブラウザで遊ぶ", back: "Deother に戻る"
    },

    es: {
      title: "Wall Street the Game",
      tagline: "Un inversor renacido: de 1792 a 2026",
      intro: "En 2026 mueres a los noventa. Después abres los ojos en 1792, bajo el plátano donde acaba de nacer la Bolsa de Nueva York. Renacido para vivir trescientos años, tienes 10.000 dólares. Un juego educativo de navegador donde revives 234 años del mercado estadounidense año a año, aprendiendo historia y economía por el camino.",
      sections: [
        {
          h: "Un inversor renacido",
          p: [
            "En esta vida conoces el futuro. De 1792 a 2026 atraviesas de nuevo el auge y la caída de las acciones estadounidenses.",
            "En cada época salen empresas nuevas a bolsa, y la Gran Depresión, las crisis del petróleo, la burbuja puntocom y la crisis financiera sacuden el mercado. ¿Qué compañía compras, cuándo, y cuándo vendes?",
            "Algunas, como Apple, sobreviven un siglo hasta ser la más valiosa del mundo; otras —Yahoo, Enron, Lehman— se desvanecen a cero. En 2026, ¿en qué se han convertido tus 10.000 dólares?"
          ]
        },
        {
          h: "Solo por turnos: decides cada año",
          p: [
            "Si avanza solo, tú te limitas a mirar. Por eso este juego es solo por turnos. Cada año eliges qué comprar y qué vender, pasas al siguiente y ves de inmediato cuánto subió o bajó tu patrimonio.",
            "Decides de forma activa y sientes la ganancia o la pérdida un año después, al instante. Los primeros años con pocas acciones (antes de 1900) avanzan de cinco en cinco; desde 1900, año a año. Los modos automático y de avance rápido se dejaron fuera a propósito."
          ]
        },
        {
          h: "La historia real es el dato",
          p: [
            "Los precios de 41 acciones reales son aproximaciones educativas que reflejan las tendencias y los grandes desplomes y subidas de la historia (ajustados por splits). Se distingue entre NYSE y Nasdaq.",
            "«Quebrar» y «ser adquirida» no son lo mismo: Yahoo, RCA y Netscape no fracasaron; fueron compradas y sus accionistas cobraron. Esa distinción es el corazón de la lección.",
            "Tu patrimonio se dibuja junto al Dow (la media del mercado), así que ves de un vistazo si le ganaste al mercado o perdiste contra él."
          ]
        },
        {
          h: "Historia y economía a la vez",
          p: [
            "Cada año, un panel de «Noticias y contexto» se llena con comentarios económicos e históricos de esa época. Del Acuerdo de Buttonwood a la burbuja puntocom, aprendes qué pasó y por qué.",
            "Está hecho para que niños y principiantes sientan, con datos reales, cuándo comprar algo habría dado una fortuna y cuándo lo habría borrado todo. Gratis en el navegador, sin instalar, se juega al momento.",
            "※ Esto no es asesoramiento de inversión: es un juego educativo."
          ]
        }
      ],
      cta: "Jugar en el navegador", back: "Volver a Deother"
    },

    pt: {
      title: "Wall Street the Game",
      tagline: "Um investidor renascido — de 1792 a 2026",
      intro: "Em 2026 morres aos noventa. Depois abres os olhos em 1792, debaixo do plátano onde a Bolsa de Nova Iorque acabou de nascer. Renascido para viver trezentos anos, tens 10.000 dólares. Um jogo educativo de navegador em que revives 234 anos do mercado norte-americano ano a ano, aprendendo história e economia pelo caminho.",
      sections: [
        {
          h: "Um investidor renascido",
          p: [
            "Nesta vida conheces o futuro. De 1792 a 2026, atravessas outra vez a subida e a queda das ações americanas.",
            "Em cada época entram novas empresas em bolsa, e a Grande Depressão, os choques petrolíferos, a bolha das dot-com e a crise financeira abanam o mercado. Que empresa compras, quando, e quando vendes?",
            "Algumas, como a Apple, sobrevivem um século até serem a mais valiosa do mundo; outras — Yahoo, Enron, Lehman — desaparecem para zero. Em 2026, no que se tornaram os teus 10.000 dólares?"
          ]
        },
        {
          h: "Só por turnos — decides todos os anos",
          p: [
            "Se andar sozinho, limitas-te a ver. Por isso este jogo é só por turnos. Em cada ano escolhes o que comprar e vender, avanças para o ano seguinte e vês logo quanto o teu património subiu ou desceu.",
            "Decides ativamente e sentes o lucro ou o prejuízo um ano depois, de imediato. Os primeiros anos com poucas ações (antes de 1900) avançam de cinco em cinco; a partir de 1900, ano a ano. Os modos automático e de avanço rápido ficaram de fora de propósito."
          ]
        },
        {
          h: "A história real é o dado",
          p: [
            "Os preços de 41 ações reais são aproximações educativas que refletem as tendências e as grandes quedas e subidas da história (ajustados a desdobramentos). NYSE e Nasdaq são distinguidas.",
            "«Falir» e «ser adquirida» não é o mesmo — a Yahoo, a RCA e a Netscape não falharam; foram compradas e os acionistas receberam. Essa distinção é o coração da lição.",
            "O teu património é traçado ao lado do Dow (a média do mercado), por isso vês num relance se bateste o mercado ou se perdeste para ele."
          ]
        },
        {
          h: "História e economia ao mesmo tempo",
          p: [
            "Em cada ano, um painel de «Notícias e contexto» enche-se com comentário económico e histórico daquela época. Do Acordo de Buttonwood à bolha das dot-com, aprendes o que aconteceu e porquê.",
            "Foi feito para que crianças e principiantes sintam, através de dados reais, quando comprar algo teria dado uma fortuna e quando teria apagado tudo. Grátis no navegador, sem instalação, joga-se já.",
            "※ Isto não é aconselhamento de investimento — é um jogo educativo."
          ]
        }
      ],
      cta: "Jogar no navegador", back: "Voltar a Deother"
    },

    fr: {
      title: "Wall Street the Game",
      tagline: "Un investisseur renaissant — de 1792 à 2026",
      intro: "En 2026, vous mourez à quatre-vingt-dix ans. Puis vous ouvrez les yeux en 1792, sous le platane où la Bourse de New York vient de naître. Renaissant pour vivre trois cents ans, vous disposez de 10 000 dollars. Un jeu éducatif dans le navigateur où vous revivez 234 ans de marché américain, année après année, en apprenant l'histoire et l'économie en chemin.",
      sections: [
        {
          h: "Un investisseur renaissant",
          p: [
            "Cette fois, vous connaissez l'avenir. De 1792 à 2026, vous traversez de nouveau l'essor et la chute des actions américaines.",
            "À chaque époque de nouvelles sociétés entrent en Bourse, et la Grande Dépression, les chocs pétroliers, la bulle Internet et la crise financière secouent le marché. Quelle entreprise achetez-vous, quand, et quand vendez-vous ?",
            "Certaines, comme Apple, traversent un siècle jusqu'à devenir la plus valorisée du monde ; d'autres — Yahoo, Enron, Lehman — s'effacent à zéro. En 2026, que sont devenus vos 10 000 dollars ?"
          ]
        },
        {
          h: "Au tour par tour uniquement — vous décidez chaque année",
          p: [
            "Si le jeu avance tout seul, vous ne faites que regarder. C'est pourquoi il est uniquement au tour par tour. Chaque année, vous choisissez ce que vous achetez et vendez, passez à l'année suivante, et voyez aussitôt de combien votre patrimoine a monté ou baissé.",
            "Vous décidez activement et vous ressentez le gain ou la perte un an plus tard, immédiatement. Les premières années, où les titres sont rares (avant 1900), avancent par tranches de cinq ; à partir de 1900, année par année. Les modes automatique et accéléré ont été volontairement écartés."
          ]
        },
        {
          h: "L'histoire réelle sert de données",
          p: [
            "Les cours de 41 actions réelles sont des approximations pédagogiques qui reflètent les tendances et les grands krachs et envolées de l'histoire (ajustés des divisions d'actions). Le NYSE et le Nasdaq sont distingués.",
            "« Faire faillite » et « être rachetée » ne sont pas la même chose — Yahoo, RCA et Netscape n'ont pas échoué : elles ont été rachetées et les actionnaires ont encaissé. Cette distinction est le cœur de la leçon.",
            "Votre patrimoine est tracé à côté du Dow (la moyenne du marché) : vous voyez d'un coup d'œil si vous avez battu le marché ou perdu contre lui."
          ]
        },
        {
          h: "L'histoire et l'économie ensemble",
          p: [
            "Chaque année, un encart « Actualités et contexte » se remplit de commentaires économiques et historiques sur l'époque. De l'accord de Buttonwood à la bulle Internet, vous apprenez ce qui s'est passé et pourquoi.",
            "C'est conçu pour que les enfants et les débutants ressentent, à partir de données réelles, quand un achat aurait fait une fortune et quand il aurait tout emporté. Gratuit dans le navigateur, sans installation, jouable tout de suite.",
            "※ Ce n'est pas un conseil en investissement : c'est un jeu éducatif."
          ]
        }
      ],
      cta: "Jouer dans le navigateur", back: "Retour à Deother"
    },

    de: {
      title: "Wall Street the Game",
      tagline: "Ein wiedergeborener Investor — von 1792 bis 2026",
      intro: "2026 stirbst du mit neunzig. Dann öffnest du die Augen im Jahr 1792, unter der Platane, unter der die New Yorker Börse gerade entstanden ist. Wiedergeboren, um dreihundert Jahre zu leben, hältst du 10.000 Dollar. Ein Lernspiel im Browser, in dem du 234 Jahre US-Aktienmarkt Jahr für Jahr noch einmal durchlebst und dabei Geschichte und Wirtschaft lernst.",
      sections: [
        {
          h: "Ein wiedergeborener Investor",
          p: [
            "In diesem Leben kennst du die Zukunft. Von 1792 bis 2026 durchläufst du Aufstieg und Fall der amerikanischen Aktien noch einmal.",
            "In jeder Epoche gehen neue Unternehmen an die Börse, und die Weltwirtschaftskrise, die Ölschocks, die Dotcom-Blase und die Finanzkrise erschüttern den Markt. Welche Firma kaufst du, wann — und wann verkaufst du?",
            "Manche überstehen wie Apple ein Jahrhundert und werden das wertvollste Unternehmen der Welt; andere — Yahoo, Enron, Lehman — verschwinden auf null. Was sind deine 10.000 Dollar im Jahr 2026 geworden?"
          ]
        },
        {
          h: "Nur rundenbasiert — du entscheidest jedes Jahr",
          p: [
            "Läuft es von allein, schaust du bloß zu. Deshalb ist dieses Spiel ausschließlich rundenbasiert. Jedes Jahr wählst du, was du kaufst und verkaufst, gehst ins nächste Jahr und siehst sofort, um wie viel dein Vermögen gestiegen oder gefallen ist.",
            "Du entscheidest aktiv und spürst Gewinn oder Verlust ein Jahr später, unmittelbar. Die frühen Jahre mit wenigen Titeln (vor 1900) laufen in Fünferschritten, ab 1900 Jahr für Jahr. Automatik und Vorspulen wurden bewusst weggelassen."
          ]
        },
        {
          h: "Die echte Geschichte ist die Datengrundlage",
          p: [
            "Die Kurse von 41 realen Aktien sind didaktische Näherungen, die Trends sowie die großen Abstürze und Anstiege der Geschichte abbilden (splitbereinigt). NYSE und Nasdaq werden unterschieden.",
            "„Pleite“ und „übernommen“ ist nicht dasselbe — Yahoo, RCA und Netscape sind nicht gescheitert; sie wurden gekauft, und die Aktionäre haben kassiert. Genau diese Unterscheidung ist der Kern der Lektion.",
            "Dein Vermögen wird direkt neben dem Dow (dem Marktdurchschnitt) gezeichnet, sodass du auf einen Blick siehst, ob du den Markt geschlagen oder gegen ihn verloren hast."
          ]
        },
        {
          h: "Geschichte und Wirtschaft zusammen",
          p: [
            "Jedes Jahr füllt sich ein Feld „Nachrichten & Hintergrund“ mit wirtschaftlichen und historischen Erläuterungen zur jeweiligen Zeit. Vom Buttonwood-Abkommen bis zur Dotcom-Blase lernst du, was geschah und warum.",
            "Es ist so gebaut, dass Kinder und Anfänger an echten Daten spüren, wann ein Kauf ein Vermögen gebracht und wann er alles ausgelöscht hätte. Kostenlos im Browser, ohne Installation, sofort spielbar.",
            "※ Das ist keine Anlageberatung, sondern ein Lernspiel."
          ]
        }
      ],
      cta: "Im Browser spielen", back: "Zurück zu Deother"
    },

    ru: {
      title: "Wall Street the Game",
      tagline: "Переродившийся инвестор — с 1792 по 2026 год",
      intro: "В 2026 году вы умираете в девяносто. А потом открываете глаза в 1792-м, под платаном, где только что родилась Нью-Йоркская биржа. Переродившись, чтобы прожить триста лет, вы держите в руках 10 000 долларов. Браузерная обучающая игра, в которой вы год за годом заново проходите 234 года американского рынка и попутно узнаёте историю и экономику.",
      sections: [
        {
          h: "Переродившийся инвестор",
          p: [
            "В этой жизни вы знаете будущее. С 1792 по 2026 год вы снова проходите взлёты и падения американских акций.",
            "В каждую эпоху на биржу выходят новые компании, а Великая депрессия, нефтяные шоки, пузырь доткомов и финансовый кризис раскачивают рынок. Какую компанию купить, когда — и когда продать?",
            "Одни, как Apple, переживают столетие и становятся самой дорогой компанией мира; другие — Yahoo, Enron, Lehman — обращаются в ноль. Во что превратились ваши 10 000 долларов к 2026 году?"
          ]
        },
        {
          h: "Только пошагово — каждый год решаете вы",
          p: [
            "Если всё идёт само, вы просто смотрите. Поэтому игра только пошаговая. Каждый год вы выбираете, что купить и что продать, переходите к следующему году и сразу видите, насколько выросло или упало ваше состояние.",
            "Вы решаете активно и ощущаете прибыль или убыток год спустя — немедленно. Ранние годы, когда бумаг мало (до 1900-го), идут шагом в пять лет; с 1900-го — год за годом. Авторежим и перемотку не стали делать намеренно."
          ]
        },
        {
          h: "Реальная история и есть данные",
          p: [
            "Цены 41 настоящей акции — учебные приближения, отражающие тренды и главные обвалы и взлёты истории (с поправкой на сплиты). NYSE и Nasdaq различаются.",
            "«Обанкротиться» и «быть купленной» — не одно и то же: Yahoo, RCA и Netscape не провалились, их выкупили, и акционеры получили деньги. Именно это различие и есть сердцевина урока.",
            "Ваш капитал рисуется прямо рядом с индексом Доу (среднерыночным), так что сразу видно, обыграли вы рынок или проиграли ему."
          ]
        },
        {
          h: "История и экономика вместе",
          p: [
            "Каждый год панель «Новости и контекст» наполняется экономическими и историческими пояснениями к этой эпохе. От Баттонвудского соглашения до пузыря доткомов вы узнаёте, что произошло и почему.",
            "Игра сделана так, чтобы дети и новички на реальных данных почувствовали, когда покупка принесла бы состояние, а когда стёрла бы всё. Бесплатно в браузере, без установки, играть можно сразу.",
            "※ Это не инвестиционный совет, а обучающая игра."
          ]
        }
      ],
      cta: "Играть в браузере", back: "Назад в Deother"
    },

    ar: {
      title: "Wall Street the Game",
      tagline: "مستثمر وُلد من جديد — من 1792 إلى 2026",
      intro: "‏في عام 2026 تموت في التسعين. ثم تفتح عينيك في 1792، تحت شجرة الدُّلب حيث وُلدت بورصة نيويورك للتوّ. وقد وُلدت من جديد لتعيش ثلاثمئة عام، ومعك 10,000 دولار. لعبة تعليمية في المتصفّح تعيش فيها 234 عامًا من سوق الأسهم الأمريكية سنةً بسنة، وتتعلّم التاريخ والاقتصاد في الطريق.",
      sections: [
        {
          h: "مستثمر وُلد من جديد",
          p: [
            "في هذه الحياة أنت تعرف المستقبل. من 1792 إلى 2026 تعبر من جديد صعود الأسهم الأمريكية وهبوطها.",
            "في كل حقبة تُدرَج شركات جديدة، ويهزّ السوق الكسادُ الكبير وصدماتُ النفط وفقاعةُ الدوت كوم والأزمةُ المالية. أي شركة تشتري، ومتى، ومتى تبيع؟",
            "‏بعضها مثل Apple يصمد قرنًا ليصير الأعلى قيمة في العالم، وبعضها — Yahoo وEnron وLehman — يتلاشى إلى الصفر. في 2026، إلى كم صارت آلافك العشرة؟"
          ]
        },
        {
          h: "بالأدوار فقط — أنت تقرّر كل سنة",
          p: [
            "لو سارت اللعبة وحدها لصرت مجرّد متفرّج. لذلك هي بالأدوار فقط. في كل سنة تختار ما تشتريه وما تبيعه، ثم تتقدّم إلى السنة التالية فترى فورًا كم ارتفعت ثروتك أو انخفضت.",
            "تقرّر بنفسك، وتشعر بالربح أو الخسارة بعد سنة مباشرة. السنوات الأولى قليلة الأسهم (قبل 1900) تتقدّم خمسًا خمسًا، ومن 1900 سنةً بسنة. أما التشغيل التلقائي والتقديم السريع فقد تُركا عمدًا."
          ]
        },
        {
          h: "التاريخ الحقيقي هو البيانات",
          p: [
            "‏أسعار 41 سهمًا حقيقيًا هي تقريبات تعليمية تعكس الاتجاهات وأبرز الانهيارات والقفزات في التاريخ (مُعدّلة للتجزئة). ويُفرَّق بين NYSE وNasdaq.",
            "‏«الإفلاس» و«الاستحواذ» ليسا شيئًا واحدًا — فـ Yahoo وRCA وNetscape لم تفشل، بل اشتُريت وقبض المساهمون. وهذا التمييز هو جوهر الدرس.",
            "‏تُرسَم ثروتك إلى جوار مؤشر داو (متوسط السوق) مباشرة، فترى بلمحة إن كنت تفوّقت على السوق أم خسرت أمامه."
          ]
        },
        {
          h: "التاريخ والاقتصاد معًا",
          p: [
            "في كل سنة تمتلئ لوحة «الأخبار والخلفية» بشرح اقتصادي وتاريخي لتلك الحقبة. من اتفاق بَتِنوود إلى فقاعة الدوت كوم، تتعلّم ماذا حدث ولماذا.",
            "‏صُمِّمت كي يشعر الأطفال والمبتدئون، عبر بيانات حقيقية، متى كان الشراء ليصنع ثروة ومتى كان ليمحو كل شيء. مجانية في المتصفّح، بلا تثبيت، وتُلعب فورًا.",
            "‏※ هذه ليست نصيحة استثمارية، بل لعبة تعليمية."
          ]
        }
      ],
      cta: "‏اللعب في المتصفّح", back: "‏العودة إلى Deother"
    }
  },

  /* ===================== 대표 소개 (founder) =====================
     출처: 대표님 Gamma 문서 「김형섭 (Kent Kim)」 18장 (2026-08-14 읽음).
     ※ 여기 수치는 대표님이 직접 확정해 준 것만 단정한다.
        - 곡: "500곡 작곡, 그중 407곡 유통" ← 대표 확인 (2026-08-14)
        - 책: "23권" ← 대표 확인 (2026-08-14). i18n.js 의 team bullet 10개 언어도 23으로 맞춰 놨다.
              한쪽만 고치면 사이트 안에서 숫자가 어긋난다.
     ※ 대표님 지시로 사이트에서 뺀 것 (2026-08-14). 다시 꺼내지 말 것:
        - 하버드 "3년 반 만에 합격" — team bullet 10개 언어에서도 지웠다. 이민 연도(1989)만 남았다.
        - 데니스 리치 / CS50 이야기 — 통째로 뺀다.
        - 안소니 퀸 전시 관련 "청와대 대통령·추기경 미팅 추진". */
  founder: {
    ko: {
      title: "김형섭 (Kent Kim)",
      tagline: "게임을 만들기 전에, 이미 스무 해를 만들어온 사람",
      intro: "디아더 대표. 하버드 기숙사에서 전 세계 1만 명에게 편지를 썼고, 동아일보에 만화를 연재했고, 갓을 쓰고 7개 국어로 힙합을 불렀고, 헐리우드 단편영화제에서 호러 부문 상을 받았고, 23권의 책을 냈다. 게임은 그 모든 것이 흘러든 마지막 그릇이다.",
      sections: [
        {
          h: "1만 통의 편지",
          p: [
            "이혼한 어머니를 찾아 미국으로 건너간 것은 고등학교 1학년 때였다. 고생하는 어머니를 보며 독하게 공부해 하버드에 들어갔다.",
            "대학 시절 전 세계의 정치·경제 리더 1만 명에게 편지를 썼다. 워런 버핏, 마거릿 대처, 잭 웰치, 코카콜라 회장, 미쓰비시 사장, 바이올리니스트 예후디 메뉴인, 에드워드 케네디 상원의원 등 100명이 넘게 답장을 보내왔다.",
            "2002년 어머니가 세상을 떠난 해부터 간증을 시작해, 전국의 교회와 고아원·대학교·외국어고등학교에서 25년째 강연하고 있다. KBS 아침마당에 세 번 출연했고, 세바시 154회 연사로 섰고, 안동MBC에서 하버드식 학습법을 20강으로 만들어 1년간 방송했다."
          ]
        },
        {
          h: "만화가에서 강연가로",
          p: [
            "경제학을 전공했지만 4학년 때 애니메이션 「하버드맨」을 직접 만들었다. 그 인연으로 2000년 동아일보에 명언만화를 1년간 연재했고, 같은 해 만화시집 『만화보다가 하버드갔습니다』를 냈다.",
            "월스트리트로 가는 길을 두고 만화를 택한 그때의 선택은 KBS 뉴스 「이 사람」에도 소개되었다."
          ]
        },
        {
          h: "미술가",
          p: [
            "외삼촌 이강소와 어머니 이강자는 모두 서울미대 출신으로 한국 미술에 이바지한 인물들이다. 어린 시절부터 그림의 영향 속에서 자랐다.",
            "고등학교 시절 백남준을 직접 만나 그 천재성에 영향을 받았다. 뉴저지 고등학교 때부터 한글을 활용한 화가로 뉴욕과 뉴저지에서 전시를 열었고, 백인이 많이 사는 뉴저지의 모리스 박물관에 2년 연속 선정되었다.",
            "1998년에는 「노인과 바다」의 배우 안소니 퀸이 연 서울 예술의전당 전시회에서 디렉터를 맡았다.",
            "2023년부터는 전국을 다니며 현장에서 그리는 라이브 페인팅을 이어오고 있다 — 가로수길에서 포항 호미곶까지, 133번째 그림까지 왔다. 2024년에는 한글 유화와 아크릴화를 전 세계 태권도 관장 300명에게 선물했다."
          ]
        },
        {
          h: "23권의 책",
          p: [
            "2000년부터 23권을 냈다. 1만 명에게 편지를 써 답장을 받은 이야기에서 시작해 공부법, 조기유학, 자기계발로 이어졌다.",
            "하버드에서 만든 시간관리법을 정리한 『하버드식 시간관리 켄트김의 타임블럭』이 대표작이다."
          ]
        },
        {
          h: "TAFA — 500곡",
          p: [
            "「학교 종이 땡땡땡」을 만든 김메리 여사를 뉴욕에서 만나 음악적 영감을 받았다.",
            "2012년부터 야구 모자 대신 조선의 갓을 쓰고 힙합을 부른다. 500곡이 넘는 곡을 직접 작사·작곡하고 한국어·영어·일본어·중국어·광둥어·독일어·베트남어 7개 국어로 직접 불렀다. 그중 407곡이 TAFA라는 이름으로 애플뮤직·스포티파이·아마존·네이버뮤직 등에 유통되고 있다.",
            "정부와 지자체에는 음원을 무료로 준다. 고용노동부 노동절, 대전 사이언스페스티벌, 대한민국 학생미술대전 로고송이 그렇게 나갔다. 2026년 4월 대전시 세계과학문화포럼 AI 로고송 공모에서는 장려상을 받았다."
          ]
        },
        {
          h: "연극과 영화",
          p: [
            "2012년 연극계의 스승인 여세진 선생의 지도로 연극을 두 번 올렸다.",
            "2017년에는 미국 헐리우드에서 열리는 AOF 단편영화제에 15분짜리 독립영화 「ELEGERE」를 만들어 출품했고, 호러 부문에서 수상했다."
          ]
        },
        {
          h: "소설가",
          p: [
            "대학 시절 속초와 설악산에서 한 달을 살며 글쓰기를 시작했다. 2025년 5월에는 처음으로 영문 SF 소설 『SERAPHIM: The Awakening of the Iron Dragon』을 미국 아마존에 냈다.",
            "한국 역사를 바탕으로 조선늑대, 저승사자, 도깨비왕 강도현, 루시퍼와 도깨비왕의 무등산 결전, 북미대륙을 발견한 장보고, 검은 화랑, 판문점, 미국이 사라진 날을 웹소설로 연재하고 있다. 디아더의 게임 여럿이 이 이야기들에서 나왔다.",
            "스티븐 킹의 영향으로, 그가 싫어하는 숫자 13을 써서 한국형 호러 13편을 준비하고 있다 — 하회탈, 특식, 보청귀, 문신귀, 보신탕, 고주병, 인삼밭, 전원주택, 사이비, 자율주행차, 아파트, 전자담배. 2026년 출간 예정이다."
          ]
        },
        {
          h: "게임 개발자",
          p: [
            "2025년 7월부터 두 달간 유니티를 배워 3D 격투 게임을 직접 만들었다. 그 게임으로 경기도콘텐츠진흥원에 선발되었고, 2025년 10월 gamescom asia x Thailand Game Show 한국관에 한국 게임 16개 중 하나로 부스를 열었다.",
            "10월부터 12월까지 다시 두 달 동안 언리얼 엔진으로 처음부터 개발해 해외 출시를 준비했다. 지금 디아더가 소개하는 게임은 열 종이다."
          ]
        },
        {
          h: "AI와 공공데이터",
          p: [
            "하버드에서 경제학을 전공하면서도 컴퓨터 공학 수업을 들었고, IT에 대한 관심은 그 뒤로도 끊긴 적이 없다.",
            "최근에는 공공데이터와 AI로 앱과 웹을 만들어, 정부와 지자체가 여는 AI 소프트웨어 공모전에 거의 전부 출품하고 있다. 인천국제공항공사 AI 공모전에서는 최우수상을 받았고, 그 결과 2026년 6월 인천공항 AI-PORT 구현을 위한 상생협력 업무협약을 맺었다.",
            "RAG를 활용한 LLM 애플리케이션 개발 과정을 수료했고, 인공지능 국제표준화 과정을 거쳤으며, 안철수 대표가 만든 동그라미 재단의 AI 바이브코딩 3기에 선발되었다.",
            "대한민국 정부와 지방자치단체가 여는 공모전 100여 개에 도전하고 있다. 한국콘텐츠진흥원과 경기콘텐츠진흥원에 등록해 미술 전시, 게임, 소설, 웹툰, 힙합, 영화, 웹소설을 가리지 않는다."
          ]
        }
      ],
      slides: [
        "만화시집 『만화보다가 하버드갔습니다』 (2000)",
        "『하버드식 시간관리 켄트김의 타임블럭』",
        "신동아 기사",
        "한국형 호러 연작 표지",
        "『SERAPHIM: The Awakening of the Iron Dragon』",
        "신문 기사와 전시 자료", "", "", "", "", "", "수료증과 상장 열두 장", "", "", "", "", "", "", "", "", "", "", ""
      ],
      cta: "TAFA 음악 듣기", back: "Deother로 돌아가기"
    },
    en: {
      title: "Kent Kim (김형섭)",
      tagline: "Twenty years of making things, before the games",
      intro: "Founder of Deother. He wrote to ten thousand people from a Harvard dorm, drew a year-long strip for a national newspaper, rapped in seven languages wearing a Joseon horsehair hat, won the horror category at a Hollywood short film festival, and published twenty-three books. The games are the vessel all of it finally poured into.",
      sections: [
        {
          h: "Ten thousand letters",
          p: [
            "He was a high-school freshman when he crossed the Pacific to find his divorced mother. Watching her struggle, he studied himself into Harvard.",
            "As an undergraduate he wrote to ten thousand political and business leaders around the world. More than a hundred wrote back — Warren Buffett, Margaret Thatcher, Jack Welch, the chairman of Coca-Cola, the president of Mitsubishi, the violinist Yehudi Menuhin, Senator Edward Kennedy.",
            "From 2002, the year his mother died, he began speaking publicly, and he has kept it up for twenty-five years — churches, orphanages, universities and foreign-language high schools across Korea. Three appearances on KBS Morning Yard, a Sebasi talk, and a twenty-part series on Harvard study methods broadcast for a year on Andong MBC."
          ]
        },
        {
          h: "From cartoonist to speaker",
          p: [
            "He majored in economics, but in his senior year he made an animation called Harvard Man. That led to a year-long aphorism comic in the Dong-A Ilbo in 2000, and a comic poetry collection the same year: I Went to Harvard Reading Comics.",
            "Choosing comics over the road to Wall Street was covered by KBS News in its This Person segment."
          ]
        },
        {
          h: "Painter",
          p: [
            "His uncle Lee Kang-so and his mother Lee Kang-ja both came out of Seoul National University's College of Fine Arts and gave their lives to Korean art. He grew up inside that influence.",
            "In high school he met Nam June Paik in person and was marked by it. From his New Jersey school years he exhibited in New York and New Jersey as a painter working with Hangul, and was selected two years running by the Morris Museum in New Jersey.",
            "In 1998 he directed the Seoul Arts Center exhibition of Anthony Quinn, the actor from The Old Man and the Sea.",
            "Since 2023 he has painted live on site across the country — from Garosu-gil to Homigot in Pohang, now past his 133rd painting. In 2024 he gave Hangul oil and acrylic works to three hundred taekwondo masters around the world."
          ]
        },
        {
          h: "Twenty-three books",
          p: [
            "He has published twenty-three books since 2000 — starting with the story of writing ten thousand letters and getting answers, then study methods, early study abroad, and self-development.",
            "The best known is Kent Kim's Time Block, the Harvard-style time management method he built as a student."
          ]
        },
        {
          h: "TAFA — 500 songs",
          p: [
            "In New York he met Kim Mary, who wrote the Korean children's song every schoolchild knows, and took musical inspiration from her.",
            "Since 2012 he has rapped wearing a Joseon gat instead of a baseball cap. He has written, composed and sung more than five hundred songs himself, in seven languages — Korean, English, Japanese, Mandarin, Cantonese, German and Vietnamese. Of those, 407 are distributed under the name TAFA on Apple Music, Spotify, Amazon, Naver Music and others.",
            "Government bodies get the music for free. That is how the logo songs for the Ministry of Employment and Labour's May Day, the Daejeon Science Festival, and the national student art competition were made. In April 2026 he took an encouragement prize at the Daejeon World Science Culture Forum's AI logo song competition."
          ]
        },
        {
          h: "Theatre and film",
          p: [
            "In 2012, under his mentor in theatre, Yeo Se-jin, he staged two plays.",
            "In 2017 he made a fifteen-minute independent film, ELEGERE, for the AOF short film festival in Hollywood, and won in the horror category."
          ]
        },
        {
          h: "Novelist",
          p: [
            "He began writing seriously as a student, living for a month in Sokcho and the Seorak mountains. In May 2025 he published his first English-language SF novel, SERAPHIM: The Awakening of the Iron Dragon, on Amazon in the US.",
            "Drawing on Korean history, he serialises web novels — Joseon Wolf, Death Guide, Goblin King Kang Do-hyun, Lucifer and the Goblin King at Mudeungsan, Jang Bogo Who Discovered North America, Black Hwarang, Panmunjom, The Day America Disappeared. Several of Deother's games came out of these stories.",
            "Influenced by Stephen King, he is preparing thirteen Korean horror stories built around the number King dislikes — Hahoe Mask, Special Meal, Hearing-Aid Ghost, Tattoo Ghost, Dog Soup, Hangover Sickness, Ginseng Field, The House in the Country, The Cult, The Self-Driving Car, The Apartment, The E-Cigarette. Publication is planned for 2026."
          ]
        },
        {
          h: "Game developer",
          p: [
            "From July 2025 he spent two months learning Unity and built a 3D fighting game himself. That game got him selected by the Gyeonggi Content Agency, and in October 2025 he ran a booth in the Korea pavilion at gamescom asia x Thailand Game Show as one of sixteen Korean games.",
            "From October to December he spent two more months rebuilding it from scratch in Unreal Engine, preparing an overseas release. Deother now presents ten games."
          ]
        },
        {
          h: "AI and public data",
          p: [
            "He studied economics at Harvard but took computer science courses alongside it, and the interest in IT never stopped.",
            "Lately he builds apps and web services on public data and AI, and enters nearly every AI software competition the government and local authorities run. The Incheon International Airport Corporation's AI competition brought a grand prize, and with it a cooperation agreement signed in June 2026 to help build the airport's AI-PORT.",
            "He completed a course in building LLM applications with RAG, went through an AI international standardisation programme, and was selected for the third cohort of the Ahn Cheol-soo Foundation's AI vibe-coding programme.",
            "He is competing in around a hundred competitions run by the Korean government and its local authorities, registered with the Korea Creative Content Agency and the Gyeonggi Content Agency — art exhibitions, games, novels, webtoons, hip-hop, film, web novels, no genre excluded."
          ]
        }
      ],
      slides: [
        "I Went to Harvard Reading Comics (2000)",
        "Kent Kim's Time Block",
        "Shin Dong-A feature",
        "Korean horror series cover",
        "SERAPHIM: The Awakening of the Iron Dragon",
        "Press coverage and exhibition records", "", "", "", "", "", "Twelve certificates and awards", "", "",
        "", "", "", "", "", "", "", "", ""
      ],
      cta: "Listen to TAFA", back: "Back to Deother"
    },

    zh: {
      title: "Kent Kim (김형섭)",
      tagline: "在做游戏之前，他已经做了二十年东西",
      intro: "迪亚德代表。他从哈佛宿舍写信给一万人，在全国性报纸上连载了一年漫画，戴着朝鲜黑笠用七种语言唱说唱，在好莱坞短片电影节拿下恐怖单元奖，出过二十三本书。游戏是这一切最终汇入的容器。",
      sections: [
        {
          h: "一万封信",
          p: [
            "他高一那年越过太平洋，去找离婚的母亲。看着母亲吃苦，他把自己逼进了哈佛。",
            "大学时他写信给全世界一万名政商界领袖。超过一百人回了信——沃伦·巴菲特、玛格丽特·撒切尔、杰克·韦尔奇、可口可乐董事长、三菱社长、小提琴家耶胡迪·梅纽因、参议员爱德华·肯尼迪。",
            "从母亲去世的 2002 年起他开始公开演讲，至今二十五年——韩国各地的教会、孤儿院、大学和外国语高中。三次登上 KBS《早晨庭院》，做过一次「世上所有的讲义」演讲，并在安东 MBC 把哈佛式学习法做成二十讲播了一年。"
          ]
        },
        {
          h: "从漫画家到演讲者",
          p: [
            "他主修经济学，却在大四自己做了一部动画《哈佛人》。这段缘分让他在 2000 年为《东亚日报》连载了一年格言漫画，同年出版漫画诗集《看着漫画考上了哈佛》。",
            "在通往华尔街的路上选择了漫画——这件事被 KBS 新闻《这个人》报道过。"
          ]
        },
        {
          h: "美术家",
          p: [
            "舅舅李康昭与母亲李康子都出自首尔大学美术学院，是为韩国美术付出一生的人。他在这样的影响中长大。",
            "高中时他当面见到白南准，深受其天才的影响。从新泽西的中学时代起，他就以运用韩文的画家身份在纽约与新泽西办展，并连续两年入选新泽西的莫里斯博物馆。",
            "1998 年，《老人与海》的演员安东尼·奎因在首尔艺术殿堂办展，他担任了策展导演。",
            "2023 年起他走遍全国现场作画，从林荫道一直画到浦项虎尾串，如今已过第 133 幅。2024 年，他把韩文油画与丙烯画赠给了全世界三百位跆拳道馆长。"
          ]
        },
        {
          h: "二十三本书",
          p: [
            "自 2000 年起他出版了二十三本书——从写一万封信并收到回信的故事开始，接着是学习法、早期留学与自我提升。",
            "最广为人知的是《Kent Kim 的时间块》，那是他学生时代建立的哈佛式时间管理法。"
          ]
        },
        {
          h: "TAFA——500 首歌",
          p: [
            "在纽约，他遇见了写下每个韩国小学生都会唱的儿歌的金玛丽，并从她那里得到音乐上的启发。",
            "自 2012 年起，他戴着朝鲜的黑笠而不是棒球帽唱说唱。他自己作词作曲并演唱了五百多首歌，用七种语言——韩语、英语、日语、普通话、粤语、德语与越南语。其中 407 首以 TAFA 之名在 Apple Music、Spotify、Amazon、Naver Music 等平台发行。",
            "政府机关可以免费使用这些音乐。雇佣劳动部劳动节、大田科学节以及全国学生美术大赛的主题曲就是这样做出来的。2026 年 4 月，他在大田世界科学文化论坛的 AI 主题曲大赛中获得鼓励奖。"
          ]
        },
        {
          h: "戏剧与电影",
          p: [
            "2012 年，在戏剧导师吕世珍门下，他推出了两部舞台剧。",
            "2017 年，他为好莱坞 AOF 短片电影节拍了一部十五分钟的独立电影《ELEGERE》，拿下恐怖单元奖。"
          ]
        },
        {
          h: "小说家",
          p: [
            "他从学生时代就认真写作，曾在束草与雪岳山住了一个月。2025 年 5 月，他在美国亚马逊出版了第一部英文科幻小说《SERAPHIM: The Awakening of the Iron Dragon》。",
            "他以韩国历史为底，连载网络小说——《朝鲜之狼》《Death Guide》《鬼王姜道贤》《路西法与无等山鬼王》《发现北美大陆的张保皋》《黑花郎》《板门店》《美国消失的那天》。迪亚德的好几款游戏就出自这些故事。",
            "受斯蒂芬·金影响，他正在准备十三篇韩国恐怖小说，数字取自金所忌讳的那个——《河回面具》《特餐》《助听器鬼》《纹身鬼》《狗肉汤》《宿醉病》《人参田》《乡下的房子》《邪教》《自动驾驶汽车》《公寓》《电子烟》。预计 2026 年出版。"
          ]
        },
        {
          h: "游戏开发者",
          p: [
            "2025 年 7 月起，他花两个月学 Unity，独自做出一款 3D 格斗游戏。凭这款游戏他入选京畿内容振兴院，并在 2025 年 10 月作为十六款韩国游戏之一，在 gamescom asia x Thailand Game Show 的韩国馆开设展位。",
            "从十月到十二月，他又花两个月用虚幻引擎从零重做，为海外发行做准备。迪亚德如今拿出十款游戏。"
          ]
        },
        {
          h: "AI 与公共数据",
          p: [
            "他在哈佛主修经济学，同时也修了计算机课程，对 IT 的兴趣从未中断。",
            "最近他基于公共数据与 AI 开发应用与网络服务，几乎报名了政府与地方自治团体举办的所有 AI 软件大赛。在仁川国际机场公社的 AI 大赛中获得最优秀奖，并因此于 2026 年 6 月签署了为实现仁川机场 AI-PORT 的相生合作协议。",
            "他修完了用 RAG 构建 LLM 应用的课程，参加了 AI 国际标准化项目，并入选安哲秀财团 AI vibe coding 项目第三期。",
            "他在韩国文化内容振兴院与京畿内容振兴院登记，正在参加政府与地方约一百项公募——美术展、游戏、小说、网络漫画、嘻哈、电影、网络小说，不限体裁。"
          ]
        }
      ],
      slides: [
        "《看着漫画考上了哈佛》（2000）",
        "《Kent Kim 的时间块》",
        "《新东亚》报道",
        "韩国恐怖系列封面",
        "《SERAPHIM: The Awakening of the Iron Dragon》",
        "报纸报道与展览资料", "", "", "", "", "", "十二份结业证书与奖状", "", "", "", "", "", "", "", "", "", "", ""
      ],
      cta: "收听 TAFA", back: "返回 Deother"
    },

    ja: {
      title: "Kent Kim (김형섭)",
      tagline: "ゲームを作る前に、すでに二十年ものを作ってきた人",
      intro: "ディアザー代表。ハーバードの寮から一万人へ手紙を書き、全国紙に一年間漫画を連載し、朝鮮の黒い笠をかぶって七か国語でラップし、ハリウッドの短編映画祭でホラー部門を受賞し、二十三冊の本を出しました。ゲームは、そのすべてが最後に流れ込んだ器です。",
      sections: [
        {
          h: "一万通の手紙",
          p: [
            "離婚した母を訪ねて太平洋を渡ったのは高校一年のときでした。苦労する母を見て自分を追い込み、ハーバードに入ります。",
            "学部時代、世界の政財界のリーダー一万人に手紙を書きました。百人を超える人が返事をくれました——ウォーレン・バフェット、マーガレット・サッチャー、ジャック・ウェルチ、コカ・コーラ会長、三菱社長、ヴァイオリニストのユーディ・メニューイン、エドワード・ケネディ上院議員。",
            "母が亡くなった2002年から講演を始め、二十五年続けています——韓国各地の教会、児童養護施設、大学、外国語高校。KBS『あさの庭』に三度出演し、セバシに登壇し、安東MBCでハーバード式学習法を二十講にまとめて一年間放送しました。"
          ]
        },
        {
          h: "漫画家から講演者へ",
          p: [
            "専攻は経済学でしたが、四年生のときにアニメーション『ハーバードマン』を自作しました。その縁で2000年に東亜日報で格言漫画を一年間連載し、同じ年に漫画詩集『漫画を見ていたらハーバードに行きました』を出します。",
            "ウォール街への道を捨てて漫画を選んだこの選択は、KBSニュース『この人』でも紹介されました。"
          ]
        },
        {
          h: "美術家",
          p: [
            "叔父の李康昭と母の李康子はともにソウル大学美術学部の出身で、韓国美術に生涯を捧げた人たちです。彼はその影響の中で育ちました。",
            "高校時代にナムジュン・パイクに直接会い、その天才性に影響を受けました。ニュージャージーの高校時代から、ハングルを用いる画家としてニューヨークとニュージャージーで展示を行い、ニュージャージーのモリス美術館に二年連続で選ばれました。",
            "1998年には『老人と海』の俳優アンソニー・クインがソウル芸術の殿堂で開いた展覧会でディレクターを務めました。",
            "2023年からは全国を回って現場で描くライブペインティングを続けています——カロスキルから浦項の虎尾串まで、いまや133枚目を超えました。2024年にはハングルの油彩とアクリル作品を世界のテコンドー道場長三百人に贈りました。"
          ]
        },
        {
          h: "二十三冊の本",
          p: [
            "2000年から二十三冊を出しました——一万人に手紙を書いて返事をもらった話から始まり、勉強法、早期留学、自己啓発へと続きます。",
            "最もよく知られているのは『Kent Kim のタイムブロック』。学生時代に自分で組み立てたハーバード式の時間管理法です。"
          ]
        },
        {
          h: "TAFA——500曲",
          p: [
            "ニューヨークで、韓国の小学生なら誰もが歌う童謡を書いたキム・メリーに出会い、音楽的な着想を受けました。",
            "2012年から、野球帽ではなく朝鮮の笠をかぶってラップしています。作詞・作曲・歌唱をすべて自分で行い、七か国語で五百曲以上を作りました——韓国語、英語、日本語、中国語、広東語、ドイツ語、ベトナム語。うち407曲が TAFA 名義で Apple Music、Spotify、Amazon、Naver Music などで配信されています。",
            "公的機関には無償で提供します。雇用労働部のメーデー、大田サイエンスフェスティバル、全国学生美術大会のロゴソングはそうして生まれました。2026年4月には大田世界科学文化フォーラムのAIロゴソングコンテストで奨励賞を受けました。"
          ]
        },
        {
          h: "演劇と映画",
          p: [
            "2012年、演劇の師であるヨ・セジンのもとで二本の舞台を上演しました。",
            "2017年にはハリウッドのAOF短編映画祭のために十五分の自主制作映画『ELEGERE』を撮り、ホラー部門で受賞しました。"
          ]
        },
        {
          h: "小説家",
          p: [
            "学生時代から本格的に書き始め、束草と雪岳山に一か月こもったこともあります。2025年5月には初の英語SF小説『SERAPHIM: The Awakening of the Iron Dragon』を米国のAmazonで出版しました。",
            "韓国史を土台にウェブ小説を連載しています——『朝鮮の狼』『Death Guide』『鬼王カン・ドヒョン』『ルシファーと無等山の鬼王』『北米大陸を発見したチャン・ボゴ』『黒い花郎』『板門店』『アメリカが消えた日』。ディアザーのいくつかのゲームはこれらの物語から生まれました。",
            "スティーヴン・キングの影響を受け、キングが嫌う数にちなんだ十三編の韓国ホラーを準備中です——『河回の仮面』『特別食』『補聴器の幽霊』『刺青の幽霊』『犬肉スープ』『二日酔い病』『高麗人参畑』『田舎の家』『カルト』『自動運転車』『アパート』『電子タバコ』。2026年の刊行を予定しています。"
          ]
        },
        {
          h: "ゲーム開発者",
          p: [
            "2025年7月から二か月かけて Unity を学び、3D格闘ゲームを自作しました。そのゲームで京畿コンテンツ振興院に選ばれ、2025年10月には韓国16作品の一つとして gamescom asia x Thailand Game Show の韓国館にブースを出しました。",
            "十月から十二月にかけて、さらに二か月をかけてアンリアルエンジンでゼロから作り直し、海外リリースの準備を進めています。ディアザーはいま十本のゲームを提示しています。"
          ]
        },
        {
          h: "AIと公共データ",
          p: [
            "ハーバードでは経済学を専攻しながらコンピュータ科学の授業も取り、ITへの関心は途切れませんでした。",
            "最近は公共データとAIを使ってアプリやウェブサービスを作り、政府や自治体が開くAIソフトウェアのコンテストにはほぼすべて応募しています。仁川国際空港公社のAIコンペでは最優秀賞を受け、それを機に2026年6月、仁川空港AI-PORT実現のための相生協力協定を結びました。",
            "RAGを使ったLLMアプリ構築の講座を修了し、AI国際標準化プログラムを経て、安哲秀財団のAIバイブコーディング三期に選ばれました。",
            "韓国コンテンツ振興院と京畿コンテンツ振興院に登録し、政府と自治体の公募およそ百件に挑戦しています——美術展、ゲーム、小説、ウェブトゥーン、ヒップホップ、映画、ウェブ小説。ジャンルは問いません。"
          ]
        }
      ],
      slides: [
        "『漫画を見ていたらハーバードに行きました』（2000）",
        "『Kent Kim のタイムブロック』",
        "新東亜の記事",
        "韓国ホラーシリーズの表紙",
        "『SERAPHIM: The Awakening of the Iron Dragon』",
        "新聞記事と展示資料", "", "", "", "", "", "修了証と賞状 十二枚", "", "", "", "", "", "", "", "", "", "", ""
      ],
      cta: "TAFA を聴く", back: "Deother に戻る"
    },

    es: {
      title: "Kent Kim (김형섭)",
      tagline: "Veinte años haciendo cosas, antes de los juegos",
      intro: "Fundador de Deother. Escribió a diez mil personas desde una residencia de Harvard, dibujó durante un año una tira en un diario nacional, rapeó en siete idiomas con un sombrero de crin de la era Joseon, ganó la categoría de terror en un festival de cortos de Hollywood y publicó veintitrés libros. Los juegos son el recipiente donde todo eso acabó vertiéndose.",
      sections: [
        {
          h: "Diez mil cartas",
          p: [
            "Estaba en primero de secundaria cuando cruzó el Pacífico para encontrar a su madre divorciada. Al verla luchar, se metió a estudiar hasta entrar en Harvard.",
            "De estudiante escribió a diez mil líderes políticos y empresariales de todo el mundo. Más de cien le contestaron: Warren Buffett, Margaret Thatcher, Jack Welch, el presidente de Coca-Cola, el presidente de Mitsubishi, el violinista Yehudi Menuhin, el senador Edward Kennedy.",
            "Desde 2002, el año en que murió su madre, empezó a dar charlas, y lleva veinticinco años haciéndolo: iglesias, orfanatos, universidades e institutos de idiomas por toda Corea. Tres apariciones en KBS Morning Yard, una charla en Sebasi y una serie de veinte capítulos sobre métodos de estudio de Harvard emitida durante un año en Andong MBC."
          ]
        },
        {
          h: "De dibujante a conferenciante",
          p: [
            "Se licenció en Economía, pero en el último curso hizo una animación llamada Harvard Man. De ahí salió un cómic de aforismos durante un año en el Dong-A Ilbo en 2000, y ese mismo año un poemario en viñetas: Fui a Harvard leyendo cómics.",
            "Elegir el cómic en lugar del camino hacia Wall Street lo cubrió KBS News en su sección Esta Persona."
          ]
        },
        {
          h: "Pintor",
          p: [
            "Su tío Lee Kang-so y su madre Lee Kang-ja salieron ambos de la Facultad de Bellas Artes de la Universidad Nacional de Seúl y dedicaron su vida al arte coreano. Creció dentro de esa influencia.",
            "En el instituto conoció en persona a Nam June Paik y aquello lo marcó. Desde sus años escolares en Nueva Jersey expuso en Nueva York y Nueva Jersey como pintor que trabaja con el hangul, y fue seleccionado dos años seguidos por el Morris Museum de Nueva Jersey.",
            "En 1998 dirigió la exposición de Anthony Quinn, el actor de El viejo y el mar, en el Seoul Arts Center.",
            "Desde 2023 pinta en directo por todo el país, de Garosu-gil a Homigot en Pohang, ya pasado su cuadro número 133. En 2024 regaló obras en óleo y acrílico con hangul a trescientos maestros de taekwondo de todo el mundo."
          ]
        },
        {
          h: "Veintitrés libros",
          p: [
            "Ha publicado veintitrés libros desde 2000, empezando por la historia de escribir diez mil cartas y recibir respuestas, y siguiendo con métodos de estudio, estudios tempranos en el extranjero y desarrollo personal.",
            "El más conocido es El bloque de tiempo de Kent Kim, el método de gestión del tiempo al estilo Harvard que construyó siendo estudiante."
          ]
        },
        {
          h: "TAFA — 500 canciones",
          p: [
            "En Nueva York conoció a Kim Mary, autora de la canción infantil coreana que cualquier escolar conoce, y de ella tomó inspiración musical.",
            "Desde 2012 rapea con un gat de Joseon en lugar de gorra. Ha escrito, compuesto y cantado él mismo más de quinientas canciones, en siete idiomas: coreano, inglés, japonés, mandarín, cantonés, alemán y vietnamita. De ellas, 407 se distribuyen bajo el nombre TAFA en Apple Music, Spotify, Amazon, Naver Music y otras.",
            "Los organismos públicos reciben la música gratis. Así se hicieron los temas del Primero de Mayo del Ministerio de Empleo y Trabajo, del Festival de Ciencia de Daejeon y del concurso nacional de arte estudiantil. En abril de 2026 recibió un premio de aliento en el concurso de temas con IA del Foro Mundial de Cultura Científica de Daejeon."
          ]
        },
        {
          h: "Teatro y cine",
          p: [
            "En 2012, bajo su maestro de teatro Yeo Se-jin, montó dos obras.",
            "En 2017 hizo un cortometraje independiente de quince minutos, ELEGERE, para el festival AOF de Hollywood, y ganó en la categoría de terror."
          ]
        },
        {
          h: "Novelista",
          p: [
            "Empezó a escribir en serio siendo estudiante, viviendo un mes en Sokcho y en las montañas Seorak. En mayo de 2025 publicó su primera novela de ciencia ficción en inglés, SERAPHIM: The Awakening of the Iron Dragon, en Amazon de Estados Unidos.",
            "Partiendo de la historia coreana, publica novelas web por entregas: Lobo de Joseon, Death Guide, El rey goblin Kang Do-hyun, Lucifer y el rey goblin en Mudeungsan, Jang Bogo, que descubrió Norteamérica, Hwarang Negro, Panmunjom, El día que Estados Unidos desapareció. Varios juegos de Deother salieron de estas historias.",
            "Influido por Stephen King, prepara trece relatos de terror coreano construidos en torno al número que King detesta: La máscara de Hahoe, Comida especial, El fantasma del audífono, El fantasma del tatuaje, Sopa de perro, Mal de resaca, El campo de ginseng, La casa del campo, La secta, El coche autónomo, El apartamento, El cigarrillo electrónico. La publicación está prevista para 2026."
          ]
        },
        {
          h: "Desarrollador de juegos",
          p: [
            "Desde julio de 2025 pasó dos meses aprendiendo Unity y construyó él mismo un juego de lucha en 3D. Ese juego le valió ser seleccionado por la Gyeonggi Content Agency, y en octubre de 2025 montó un stand en el pabellón coreano de gamescom asia x Thailand Game Show como uno de dieciséis juegos coreanos.",
            "De octubre a diciembre dedicó otros dos meses a rehacerlo desde cero en Unreal Engine, preparando un lanzamiento internacional. Deother presenta hoy diez juegos."
          ]
        },
        {
          h: "IA y datos públicos",
          p: [
            "Estudió Economía en Harvard, pero cursó asignaturas de informática en paralelo, y el interés por la tecnología nunca se detuvo.",
            "Últimamente construye aplicaciones y servicios web sobre datos públicos e IA, y se presenta a casi todos los concursos de software con IA que convocan el gobierno y las administraciones locales. En el concurso de IA de la Corporación del Aeropuerto Internacional de Incheon obtuvo el primer premio y, a raíz de ello, firmó en junio de 2026 un acuerdo de cooperación para hacer realidad el AI-PORT del aeropuerto.",
            "Completó un curso de construcción de aplicaciones LLM con RAG, pasó por un programa de estandarización internacional de IA y fue seleccionado para la tercera promoción del programa de vibe coding con IA de la Fundación Ahn Cheol-soo.",
            "Compite en un centenar de convocatorias del gobierno coreano y sus administraciones locales, inscrito en la Korea Creative Content Agency y en la Gyeonggi Content Agency: exposiciones de arte, juegos, novela, webtoon, hip-hop, cine, novela web; ningún género queda fuera."
          ]
        }
      ],
      slides: [
        "Fui a Harvard leyendo cómics (2000)",
        "El bloque de tiempo de Kent Kim",
        "Reportaje en Shin Dong-A",
        "Portada de la serie de terror coreano",
        "SERAPHIM: The Awakening of the Iron Dragon",
        "Prensa y documentos de exposiciones", "", "", "", "", "", "Doce certificados y premios", "", "", "",
        "", "", "", "", "", "", "", ""
      ],
      cta: "Escuchar a TAFA", back: "Volver a Deother"
    },

    pt: {
      title: "Kent Kim (김형섭)",
      tagline: "Vinte anos a fazer coisas, antes dos jogos",
      intro: "Fundador da Deother. Escreveu a dez mil pessoas a partir de um dormitório de Harvard, desenhou durante um ano uma tira num jornal nacional, fez rap em sete línguas com um chapéu de crina da era Joseon, ganhou a categoria de terror num festival de curtas de Hollywood e publicou vinte e três livros. Os jogos são o recipiente para onde tudo isso acabou por escorrer.",
      sections: [
        {
          h: "Dez mil cartas",
          p: [
            "Estava no primeiro ano do secundário quando atravessou o Pacífico à procura da mãe divorciada. Ao vê-la a lutar, estudou até entrar em Harvard.",
            "Enquanto estudante, escreveu a dez mil líderes políticos e empresariais de todo o mundo. Mais de cem responderam — Warren Buffett, Margaret Thatcher, Jack Welch, o presidente da Coca-Cola, o presidente da Mitsubishi, o violinista Yehudi Menuhin, o senador Edward Kennedy.",
            "A partir de 2002, o ano em que a mãe morreu, começou a dar palestras, e já leva vinte e cinco anos a fazê-lo — igrejas, orfanatos, universidades e escolas de línguas por toda a Coreia. Três presenças no KBS Morning Yard, uma palestra no Sebasi e uma série de vinte episódios sobre métodos de estudo de Harvard transmitida durante um ano na Andong MBC."
          ]
        },
        {
          h: "De cartoonista a orador",
          p: [
            "Formou-se em Economia, mas no último ano fez uma animação chamada Harvard Man. Daí veio uma banda desenhada de aforismos durante um ano no Dong-A Ilbo em 2000, e nesse mesmo ano uma coletânea de poesia em banda desenhada: Fui para Harvard a ler banda desenhada.",
            "Escolher a banda desenhada em vez do caminho para Wall Street foi noticiado pela KBS News na rubrica Esta Pessoa."
          ]
        },
        {
          h: "Pintor",
          p: [
            "O tio Lee Kang-so e a mãe Lee Kang-ja saíram ambos da Faculdade de Belas-Artes da Universidade Nacional de Seul e deram a vida à arte coreana. Cresceu dentro dessa influência.",
            "No liceu conheceu pessoalmente Nam June Paik e ficou marcado. Desde os anos de escola em Nova Jérsia expôs em Nova Iorque e Nova Jérsia como pintor que trabalha com o hangul, e foi selecionado dois anos seguidos pelo Morris Museum de Nova Jérsia.",
            "Em 1998 dirigiu a exposição de Anthony Quinn, o ator de O Velho e o Mar, no Seoul Arts Center.",
            "Desde 2023 pinta ao vivo por todo o país — de Garosu-gil a Homigot, em Pohang — já para lá do seu 133.º quadro. Em 2024 ofereceu obras a óleo e acrílico com hangul a trezentos mestres de taekwondo em todo o mundo."
          ]
        },
        {
          h: "Vinte e três livros",
          p: [
            "Publicou vinte e três livros desde 2000 — a começar pela história de escrever dez mil cartas e receber respostas, depois métodos de estudo, estudos no estrangeiro em idade precoce e desenvolvimento pessoal.",
            "O mais conhecido é O bloco de tempo de Kent Kim, o método de gestão do tempo ao estilo de Harvard que construiu enquanto estudante."
          ]
        },
        {
          h: "TAFA — 500 canções",
          p: [
            "Em Nova Iorque conheceu Kim Mary, autora da canção infantil coreana que qualquer criança da escola conhece, e dela recebeu inspiração musical.",
            "Desde 2012 faz rap com um gat de Joseon em vez de boné. Escreveu, compôs e cantou ele próprio mais de quinhentas canções, em sete línguas — coreano, inglês, japonês, mandarim, cantonês, alemão e vietnamita. Destas, 407 são distribuídas sob o nome TAFA na Apple Music, Spotify, Amazon, Naver Music e outras.",
            "Os organismos públicos recebem a música gratuitamente. Foi assim que nasceram os temas do 1.º de Maio do Ministério do Emprego e Trabalho, do Festival de Ciência de Daejeon e do concurso nacional de arte estudantil. Em abril de 2026 recebeu um prémio de incentivo no concurso de temas com IA do Fórum Mundial de Cultura Científica de Daejeon."
          ]
        },
        {
          h: "Teatro e cinema",
          p: [
            "Em 2012, sob a orientação do seu mestre de teatro Yeo Se-jin, levou duas peças à cena.",
            "Em 2017 fez uma curta-metragem independente de quinze minutos, ELEGERE, para o festival AOF em Hollywood, e ganhou na categoria de terror."
          ]
        },
        {
          h: "Romancista",
          p: [
            "Começou a escrever a sério enquanto estudante, vivendo um mês em Sokcho e nas montanhas Seorak. Em maio de 2025 publicou o seu primeiro romance de ficção científica em inglês, SERAPHIM: The Awakening of the Iron Dragon, na Amazon dos Estados Unidos.",
            "Partindo da história coreana, publica romances web por capítulos — Lobo de Joseon, Death Guide, O rei goblin Kang Do-hyun, Lúcifer e o rei goblin em Mudeungsan, Jang Bogo Que Descobriu a América do Norte, Hwarang Negro, Panmunjom, O Dia em que a América Desapareceu. Vários jogos da Deother saíram destas histórias.",
            "Influenciado por Stephen King, prepara treze histórias de terror coreano construídas à volta do número que King detesta — A Máscara de Hahoe, Refeição Especial, O Fantasma do Aparelho Auditivo, O Fantasma da Tatuagem, Sopa de Cão, Doença da Ressaca, O Campo de Ginseng, A Casa no Campo, A Seita, O Carro Autónomo, O Apartamento, O Cigarro Eletrónico. A publicação está prevista para 2026."
          ]
        },
        {
          h: "Programador de jogos",
          p: [
            "A partir de julho de 2025 passou dois meses a aprender Unity e construiu sozinho um jogo de luta 3D. Esse jogo valeu-lhe a seleção pela Gyeonggi Content Agency e, em outubro de 2025, um stand no pavilhão coreano da gamescom asia x Thailand Game Show, como um de dezasseis jogos coreanos.",
            "De outubro a dezembro dedicou mais dois meses a refazê-lo de raiz no Unreal Engine, preparando um lançamento internacional. A Deother apresenta hoje dez jogos."
          ]
        },
        {
          h: "IA e dados públicos",
          p: [
            "Estudou Economia em Harvard, mas frequentou cadeiras de informática em paralelo, e o interesse por tecnologia nunca parou.",
            "Ultimamente constrói aplicações e serviços web sobre dados públicos e IA, e candidata-se a quase todos os concursos de software com IA promovidos pelo governo e pelas autarquias. No concurso de IA da Corporação do Aeroporto Internacional de Incheon obteve o primeiro prémio e, por causa disso, assinou em junho de 2026 um acordo de cooperação para concretizar o AI-PORT do aeroporto.",
            "Concluiu um curso de construção de aplicações LLM com RAG, passou por um programa de normalização internacional de IA e foi selecionado para a terceira turma do programa de vibe coding com IA da Fundação Ahn Cheol-soo.",
            "Concorre a cerca de cem concursos do governo coreano e das autarquias, inscrito na Korea Creative Content Agency e na Gyeonggi Content Agency — exposições de arte, jogos, romance, webtoon, hip-hop, cinema, romance web; nenhum género fica de fora."
          ]
        }
      ],
      slides: [
        "Fui para Harvard a ler banda desenhada (2000)",
        "O bloco de tempo de Kent Kim",
        "Reportagem na Shin Dong-A",
        "Capa da série de terror coreano",
        "SERAPHIM: The Awakening of the Iron Dragon",
        "Imprensa e registos de exposições", "", "", "", "", "", "Doze certificados e prémios", "", "", "", "",
        "", "", "", "", "", "", ""
      ],
      cta: "Ouvir TAFA", back: "Voltar a Deother"
    },

    fr: {
      title: "Kent Kim (김형섭)",
      tagline: "Vingt ans à fabriquer des choses, avant les jeux",
      intro: "Fondateur de Deother. Il a écrit à dix mille personnes depuis une résidence de Harvard, tenu pendant un an une bande dessinée dans un quotidien national, rappé en sept langues coiffé d'un chapeau de crin de l'époque Joseon, remporté la catégorie horreur d'un festival de courts métrages à Hollywood et publié vingt-trois livres. Les jeux sont le récipient dans lequel tout cela a fini par se déverser.",
      sections: [
        {
          h: "Dix mille lettres",
          p: [
            "Il était en seconde quand il a traversé le Pacifique pour retrouver sa mère divorcée. En la voyant se battre, il a travaillé jusqu'à entrer à Harvard.",
            "Étudiant, il a écrit à dix mille dirigeants politiques et économiques du monde entier. Plus de cent lui ont répondu : Warren Buffett, Margaret Thatcher, Jack Welch, le président de Coca-Cola, le président de Mitsubishi, le violoniste Yehudi Menuhin, le sénateur Edward Kennedy.",
            "À partir de 2002, l'année de la mort de sa mère, il a commencé à donner des conférences, et cela dure depuis vingt-cinq ans — églises, orphelinats, universités et lycées de langues à travers la Corée. Trois passages dans KBS Morning Yard, une conférence Sebasi, et une série de vingt épisodes sur les méthodes de travail de Harvard diffusée pendant un an sur Andong MBC."
          ]
        },
        {
          h: "Du dessinateur au conférencier",
          p: [
            "Il a fait des études d'économie, mais en dernière année il a réalisé une animation, Harvard Man. De là est né en 2000 un an de bande dessinée d'aphorismes dans le Dong-A Ilbo, et la même année un recueil de poésie en bande dessinée : Je suis allé à Harvard en lisant des bandes dessinées.",
            "Avoir choisi la bande dessinée plutôt que la route de Wall Street a été rapporté par KBS News dans sa rubrique Cette personne."
          ]
        },
        {
          h: "Peintre",
          p: [
            "Son oncle Lee Kang-so et sa mère Lee Kang-ja sont tous deux issus de la faculté des beaux-arts de l'Université nationale de Séoul et ont consacré leur vie à l'art coréen. Il a grandi dans cette influence.",
            "Au lycée, il a rencontré Nam June Paik en personne et en est resté marqué. Dès ses années de lycée dans le New Jersey, il a exposé à New York et dans le New Jersey en tant que peintre travaillant le hangul, et a été retenu deux années de suite par le Morris Museum du New Jersey.",
            "En 1998, il a dirigé l'exposition d'Anthony Quinn, l'acteur du Vieil Homme et la Mer, au Seoul Arts Center.",
            "Depuis 2023, il peint en direct à travers tout le pays — de Garosu-gil à Homigot, à Pohang — et en est aujourd'hui à plus de 133 tableaux. En 2024, il a offert des huiles et des acryliques en hangul à trois cents maîtres de taekwondo dans le monde."
          ]
        },
        {
          h: "Vingt-trois livres",
          p: [
            "Il a publié vingt-trois livres depuis 2000 — à commencer par l'histoire des dix mille lettres et des réponses reçues, puis les méthodes de travail, les études précoces à l'étranger et le développement personnel.",
            "Le plus connu est Le bloc de temps de Kent Kim, la méthode de gestion du temps à la manière de Harvard qu'il a bâtie étudiant."
          ]
        },
        {
          h: "TAFA — 500 chansons",
          p: [
            "À New York, il a rencontré Kim Mary, autrice de la comptine coréenne que connaît chaque écolier, et en a tiré son inspiration musicale.",
            "Depuis 2012, il rappe coiffé d'un gat de Joseon plutôt que d'une casquette. Il a écrit, composé et chanté lui-même plus de cinq cents chansons, en sept langues — coréen, anglais, japonais, mandarin, cantonais, allemand et vietnamien. Parmi elles, 407 sont distribuées sous le nom TAFA sur Apple Music, Spotify, Amazon, Naver Music et d'autres.",
            "Les organismes publics reçoivent la musique gratuitement. C'est ainsi qu'ont été faits les hymnes du 1er Mai du ministère de l'Emploi et du Travail, du Festival des sciences de Daejeon et du concours national d'art scolaire. En avril 2026, il a reçu un prix d'encouragement au concours de chansons créées avec l'IA du Forum mondial de la culture scientifique de Daejeon."
          ]
        },
        {
          h: "Théâtre et cinéma",
          p: [
            "En 2012, sous la direction de son maître de théâtre Yeo Se-jin, il a monté deux pièces.",
            "En 2017, il a réalisé un court métrage indépendant de quinze minutes, ELEGERE, pour le festival AOF à Hollywood, et l'a emporté dans la catégorie horreur."
          ]
        },
        {
          h: "Romancier",
          p: [
            "Il a commencé à écrire sérieusement étudiant, en vivant un mois à Sokcho et dans les monts Seorak. En mai 2025, il a publié son premier roman de science-fiction en anglais, SERAPHIM: The Awakening of the Iron Dragon, sur Amazon aux États-Unis.",
            "En s'appuyant sur l'histoire coréenne, il publie des romans web en feuilleton — Le Loup de Joseon, Death Guide, Le Roi gobelin Kang Do-hyun, Lucifer et le Roi gobelin au Mudeungsan, Jang Bogo qui découvrit l'Amérique du Nord, Hwarang Noir, Panmunjom, Le Jour où l'Amérique a disparu. Plusieurs jeux de Deother sont nés de ces récits.",
            "Influencé par Stephen King, il prépare treize récits d'horreur coréenne bâtis autour du nombre que King déteste — Le Masque de Hahoe, Repas spécial, Le Fantôme de l'appareil auditif, Le Fantôme du tatouage, Soupe de chien, Le Mal de gueule de bois, Le Champ de ginseng, La Maison à la campagne, La Secte, La Voiture autonome, L'Appartement, La Cigarette électronique. Publication prévue en 2026."
          ]
        },
        {
          h: "Développeur de jeux",
          p: [
            "À partir de juillet 2025, il a passé deux mois à apprendre Unity et a construit seul un jeu de combat en 3D. Ce jeu lui a valu d'être sélectionné par la Gyeonggi Content Agency, et en octobre 2025 il tenait un stand dans le pavillon coréen de gamescom asia x Thailand Game Show, parmi seize jeux coréens.",
            "D'octobre à décembre, il a consacré deux mois de plus à le refaire de zéro sous Unreal Engine, en préparant une sortie internationale. Deother présente aujourd'hui dix jeux."
          ]
        },
        {
          h: "IA et données publiques",
          p: [
            "Il a étudié l'économie à Harvard tout en suivant des cours d'informatique, et l'intérêt pour la technique ne s'est jamais arrêté.",
            "Depuis peu, il construit des applications et des services web sur des données publiques et de l'IA, et se présente à presque tous les concours de logiciels d'IA lancés par l'État et les collectivités locales. Au concours d'IA de la société de l'aéroport international d'Incheon, il a remporté le premier prix, ce qui a mené en juin 2026 à un accord de coopération pour réaliser l'AI-PORT de l'aéroport.",
            "Il a suivi une formation à la construction d'applications LLM avec RAG, est passé par un programme de normalisation internationale de l'IA et a été retenu pour la troisième promotion du programme de vibe coding par IA de la fondation Ahn Cheol-soo.",
            "Il concourt à une centaine d'appels lancés par le gouvernement coréen et ses collectivités, inscrit auprès de la Korea Creative Content Agency et de la Gyeonggi Content Agency — expositions d'art, jeux, romans, webtoons, hip-hop, cinéma, romans web : aucun genre n'est exclu."
          ]
        }
      ],
      slides: [
        "Je suis allé à Harvard en lisant des bandes dessinées (2000)",
        "Le bloc de temps de Kent Kim",
        "Reportage dans Shin Dong-A",
        "Couverture de la série d'horreur coréenne",
        "SERAPHIM: The Awakening of the Iron Dragon",
        "Articles de presse et documents d'exposition", "", "", "", "", "", "Douze certificats et distinctions",
        "", "", "", "", "", "", "", "", "", "", ""
      ],
      cta: "Écouter TAFA", back: "Retour à Deother"
    },

    de: {
      title: "Kent Kim (김형섭)",
      tagline: "Zwanzig Jahre Dinge bauen, vor den Spielen",
      intro: "Gründer von Deother. Er schrieb aus einem Wohnheim in Harvard an zehntausend Menschen, zeichnete ein Jahr lang einen Comicstrip für eine überregionale Zeitung, rappte in sieben Sprachen mit einem Rosshaarhut aus der Joseon-Zeit, gewann bei einem Kurzfilmfestival in Hollywood die Kategorie Horror und veröffentlichte dreiundzwanzig Bücher. Die Spiele sind das Gefäß, in das all das schließlich geflossen ist.",
      sections: [
        {
          h: "Zehntausend Briefe",
          p: [
            "Er war in der zehnten Klasse, als er den Pazifik überquerte, um seine geschiedene Mutter zu finden. Weil er sah, wie sie sich abmühte, lernte er sich nach Harvard.",
            "Als Student schrieb er an zehntausend Führungspersönlichkeiten aus Politik und Wirtschaft weltweit. Mehr als hundert antworteten — Warren Buffett, Margaret Thatcher, Jack Welch, der Vorstandsvorsitzende von Coca-Cola, der Präsident von Mitsubishi, der Geiger Yehudi Menuhin, Senator Edward Kennedy.",
            "Seit 2002, dem Todesjahr seiner Mutter, hält er Vorträge, und das seit fünfundzwanzig Jahren — Kirchen, Waisenhäuser, Universitäten und Fremdsprachengymnasien in ganz Korea. Drei Auftritte bei KBS Morning Yard, ein Sebasi-Vortrag und eine zwanzigteilige Reihe über Harvard-Lernmethoden, ein Jahr lang auf Andong MBC gesendet."
          ]
        },
        {
          h: "Vom Zeichner zum Redner",
          p: [
            "Er studierte Wirtschaft, drehte aber im letzten Studienjahr einen Animationsfilm namens Harvard Man. Daraus wurde im Jahr 2000 ein einjähriger Aphorismen-Comic in der Dong-A Ilbo und im selben Jahr ein Comic-Gedichtband: Ich las Comics und kam nach Harvard.",
            "Dass er den Comic dem Weg an die Wall Street vorzog, brachte KBS News in seiner Rubrik Dieser Mensch."
          ]
        },
        {
          h: "Maler",
          p: [
            "Sein Onkel Lee Kang-so und seine Mutter Lee Kang-ja kamen beide von der Kunsthochschule der Seoul National University und gaben ihr Leben der koreanischen Kunst. Er wuchs in diesem Einfluss auf.",
            "In der Oberschule begegnete er Nam June Paik persönlich, und das prägte ihn. Seit seinen Schuljahren in New Jersey stellte er in New York und New Jersey als Maler aus, der mit Hangul arbeitet, und wurde zwei Jahre in Folge vom Morris Museum in New Jersey ausgewählt.",
            "1998 leitete er die Ausstellung von Anthony Quinn, dem Schauspieler aus Der alte Mann und das Meer, im Seoul Arts Center.",
            "Seit 2023 malt er live vor Ort im ganzen Land — von Garosu-gil bis Homigot in Pohang — inzwischen jenseits seines 133. Bildes. 2024 schenkte er Öl- und Acrylarbeiten mit Hangul dreihundert Taekwondo-Meistern in aller Welt."
          ]
        },
        {
          h: "Dreiundzwanzig Bücher",
          p: [
            "Seit 2000 hat er dreiundzwanzig Bücher veröffentlicht — beginnend mit der Geschichte der zehntausend Briefe und der Antworten, dann Lernmethoden, frühes Auslandsstudium und Persönlichkeitsentwicklung.",
            "Am bekanntesten ist Kent Kims Zeitblock, die Zeitmanagement-Methode nach Harvard-Art, die er als Student entwickelte."
          ]
        },
        {
          h: "TAFA — 500 Lieder",
          p: [
            "In New York begegnete er Kim Mary, die das koreanische Kinderlied schrieb, das jedes Schulkind kennt, und empfing von ihr musikalische Anregung.",
            "Seit 2012 rappt er mit einem Joseon-Gat statt einer Baseballkappe. Mehr als fünfhundert Lieder hat er selbst geschrieben, komponiert und gesungen, in sieben Sprachen — Koreanisch, Englisch, Japanisch, Mandarin, Kantonesisch, Deutsch und Vietnamesisch. Davon werden 407 unter dem Namen TAFA auf Apple Music, Spotify, Amazon, Naver Music und anderswo vertrieben.",
            "Öffentliche Stellen bekommen die Musik kostenlos. So entstanden die Titelsongs zum Tag der Arbeit des Ministeriums für Beschäftigung und Arbeit, zum Wissenschaftsfestival in Daejeon und zum landesweiten Schülerkunstwettbewerb. Im April 2026 erhielt er beim KI-Songwettbewerb des Daejeon World Science Culture Forum einen Förderpreis."
          ]
        },
        {
          h: "Theater und Film",
          p: [
            "2012 brachte er unter seinem Theaterlehrer Yeo Se-jin zwei Stücke auf die Bühne.",
            "2017 drehte er für das AOF-Kurzfilmfestival in Hollywood den fünfzehnminütigen Independentfilm ELEGERE und gewann in der Kategorie Horror."
          ]
        },
        {
          h: "Romancier",
          p: [
            "Ernsthaft zu schreiben begann er als Student, als er einen Monat in Sokcho und im Seorak-Gebirge lebte. Im Mai 2025 veröffentlichte er seinen ersten englischsprachigen SF-Roman, SERAPHIM: The Awakening of the Iron Dragon, bei Amazon in den USA.",
            "Ausgehend von der koreanischen Geschichte veröffentlicht er Webromane in Fortsetzungen — Wolf von Joseon, Death Guide, Goblin-König Kang Do-hyun, Luzifer und der Goblin-König am Mudeungsan, Jang Bogo, der Nordamerika entdeckte, Schwarzer Hwarang, Panmunjom, Der Tag, an dem Amerika verschwand. Mehrere Spiele von Deother sind aus diesen Geschichten entstanden.",
            "Beeinflusst von Stephen King bereitet er dreizehn koreanische Horrorgeschichten vor, gebaut um die Zahl, die King nicht mag — Hahoe-Maske, Sonderessen, Der Hörgerät-Geist, Der Tattoo-Geist, Hundesuppe, Katerkrankheit, Das Ginsengfeld, Das Haus auf dem Land, Die Sekte, Das selbstfahrende Auto, Die Wohnung, Die E-Zigarette. Die Veröffentlichung ist für 2026 geplant."
          ]
        },
        {
          h: "Spieleentwickler",
          p: [
            "Ab Juli 2025 lernte er zwei Monate lang Unity und baute selbst ein 3D-Kampfspiel. Mit diesem Spiel wurde er von der Gyeonggi Content Agency ausgewählt, und im Oktober 2025 betrieb er als eines von sechzehn koreanischen Spielen einen Stand im koreanischen Pavillon der gamescom asia x Thailand Game Show.",
            "Von Oktober bis Dezember wandte er weitere zwei Monate auf, um es in der Unreal Engine von Grund auf neu zu bauen, mit Blick auf eine internationale Veröffentlichung. Deother zeigt heute zehn Spiele."
          ]
        },
        {
          h: "KI und offene Daten",
          p: [
            "Er studierte in Harvard Wirtschaft, belegte daneben aber Informatikkurse, und das Interesse an IT riss nie ab.",
            "In letzter Zeit baut er Apps und Webdienste auf offenen Daten und KI und bewirbt sich auf nahezu jeden KI-Softwarewettbewerb, den Regierung und Kommunen ausschreiben. Beim KI-Wettbewerb der Incheon International Airport Corporation gewann er den ersten Preis — daraus wurde im Juni 2026 eine Kooperationsvereinbarung zum Aufbau des AI-PORT am Flughafen.",
            "Er absolvierte einen Kurs zum Bau von LLM-Anwendungen mit RAG, durchlief ein Programm zur internationalen KI-Standardisierung und wurde für den dritten Jahrgang des KI-Vibe-Coding-Programms der Ahn-Cheol-soo-Stiftung ausgewählt.",
            "Er nimmt an rund hundert Ausschreibungen der koreanischen Regierung und ihrer Kommunen teil, registriert bei der Korea Creative Content Agency und der Gyeonggi Content Agency — Kunstausstellungen, Spiele, Romane, Webtoons, Hip-Hop, Film, Webromane; kein Genre ist ausgenommen."
          ]
        }
      ],
      slides: [
        "Ich las Comics und kam nach Harvard (2000)",
        "Kent Kims Zeitblock",
        "Beitrag in Shin Dong-A",
        "Cover der koreanischen Horrorreihe",
        "SERAPHIM: The Awakening of the Iron Dragon",
        "Presseberichte und Ausstellungsunterlagen", "", "", "", "", "", "Zwölf Zertifikate und Auszeichnungen",
        "", "", "", "", "", "", "", "", "", "", ""
      ],
      cta: "TAFA hören", back: "Zurück zu Deother"
    },

    ru: {
      title: "Kent Kim (김형섭)",
      tagline: "Двадцать лет он что-то создавал — ещё до игр",
      intro: "Основатель Deother. Он писал десяти тысячам человек из общежития Гарварда, целый год вёл комикс в общенациональной газете, читал рэп на семи языках в чосонской шляпе из конского волоса, взял приз в категории хоррора на голливудском фестивале короткого метра и выпустил двадцать три книги. Игры — тот сосуд, куда всё это в итоге и стеклось.",
      sections: [
        {
          h: "Десять тысяч писем",
          p: [
            "Он был десятиклассником, когда пересёк Тихий океан, чтобы найти разведённую мать. Видя, как ей тяжело, он загнал себя в учёбу и поступил в Гарвард.",
            "Студентом он написал десяти тысячам политических и деловых лидеров по всему миру. Больше сотни ответили — Уоррен Баффет, Маргарет Тэтчер, Джек Уэлч, председатель Coca-Cola, президент Mitsubishi, скрипач Иегуди Менухин, сенатор Эдвард Кеннеди.",
            "С 2002 года, когда умерла его мать, он начал выступать публично и делает это уже двадцать пять лет — церкви, детские дома, университеты и языковые лицеи по всей Корее. Три появления в передаче KBS «Утренний двор», лекция на Sebasi и двадцатисерийный курс о гарвардских методах учёбы, целый год выходивший на Andong MBC."
          ]
        },
        {
          h: "От карикатуриста к лектору",
          p: [
            "Он изучал экономику, но на последнем курсе сам сделал анимацию «Harvard Man». Из этого вырос годовой комикс с афоризмами в газете «Тона Ильбо» в 2000-м и в том же году сборник комикс-поэзии «Читал комиксы — поступил в Гарвард».",
            "О том, что он выбрал комиксы вместо дороги на Уолл-стрит, рассказали в рубрике «Этот человек» новостей KBS."
          ]
        },
        {
          h: "Художник",
          p: [
            "Его дядя Ли Кан Со и мать Ли Кан Джа оба вышли из Академии изящных искусств Сеульского национального университета и отдали жизнь корейскому искусству. Он рос внутри этого влияния.",
            "В старшей школе он лично встретил Нам Джун Пайка, и это оставило след. Со школьных лет в Нью-Джерси он выставлялся в Нью-Йорке и Нью-Джерси как художник, работающий с хангылем, и два года подряд был отобран Музеем Морриса в Нью-Джерси.",
            "В 1998 году он был директором выставки Энтони Куинна, актёра из «Старика и моря», в Сеульском центре искусств.",
            "С 2023 года он пишет картины вживую по всей стране — от Каросугиль до Хомигот в Поханге, и уже перешагнул 133-ю работу. В 2024-м он подарил масляные и акриловые работы с хангылем тремстам мастерам тхэквондо по всему миру."
          ]
        },
        {
          h: "Двадцать три книги",
          p: [
            "С 2000 года он выпустил двадцать три книги — начиная с истории о десяти тысячах писем и полученных ответах, затем методы учёбы, раннее обучение за рубежом и саморазвитие.",
            "Самая известная — «Тайм-блок Кента Кима», метод управления временем в гарвардском духе, который он построил ещё студентом."
          ]
        },
        {
          h: "TAFA — 500 песен",
          p: [
            "В Нью-Йорке он познакомился с Ким Мэри, автором корейской детской песни, которую знает каждый школьник, и получил от неё музыкальный импульс.",
            "С 2012 года он читает рэп в чосонской шляпе кат вместо бейсболки. Он сам написал, сочинил и спел более пятисот песен на семи языках — корейском, английском, японском, путунхуа, кантонском, немецком и вьетнамском. Из них 407 распространяются под именем TAFA на Apple Music, Spotify, Amazon, Naver Music и других площадках.",
            "Государственным учреждениям музыка достаётся бесплатно. Так появились песни к Первомаю Министерства занятости и труда, к Фестивалю науки в Тэджоне и к общенациональному студенческому конкурсу искусств. В апреле 2026 года он получил поощрительный приз на конкурсе песен, созданных с ИИ, на Всемирном форуме научной культуры в Тэджоне."
          ]
        },
        {
          h: "Театр и кино",
          p: [
            "В 2012 году под руководством своего театрального наставника Ё Се Джина он поставил два спектакля.",
            "В 2017-м он снял пятнадцатиминутный независимый фильм ELEGERE для голливудского фестиваля короткого метра AOF и победил в категории хоррора."
          ]
        },
        {
          h: "Писатель",
          p: [
            "Всерьёз писать он начал студентом, прожив месяц в Сокчхо и в горах Сораксан. В мае 2025 года он выпустил свой первый англоязычный фантастический роман SERAPHIM: The Awakening of the Iron Dragon на американском Amazon.",
            "Опираясь на корейскую историю, он публикует веб-романы выпусками — «Волк Чосона», Death Guide, «Король гоблинов Кан До Хён», «Люцифер и король гоблинов на Мудынсане», «Чан Бого, открывший Северную Америку», «Чёрный хваран», «Пханмунджом», «День, когда исчезла Америка». Несколько игр Deother выросли именно из этих историй.",
            "Под влиянием Стивена Кинга он готовит тринадцать корейских хоррор-историй, собранных вокруг числа, которое Кинг не любит, — «Маска Хахве», «Особое блюдо», «Призрак слухового аппарата», «Призрак татуировки», «Суп из собаки», «Похмельная болезнь», «Женьшеневое поле», «Дом в деревне», «Секта», «Беспилотный автомобиль», «Многоэтажка», «Электронная сигарета». Публикация намечена на 2026 год."
          ]
        },
        {
          h: "Разработчик игр",
          p: [
            "С июля 2025 года он два месяца учил Unity и сам собрал трёхмерный файтинг. С этой игрой его отобрало агентство Gyeonggi Content Agency, а в октябре 2025-го он держал стенд в корейском павильоне на gamescom asia x Thailand Game Show — как одна из шестнадцати корейских игр.",
            "С октября по декабрь он потратил ещё два месяца, чтобы пересобрать её с нуля на Unreal Engine, готовя зарубежный релиз. Сегодня Deother представляет десять игр."
          ]
        },
        {
          h: "ИИ и открытые данные",
          p: [
            "В Гарварде он изучал экономику, но параллельно брал курсы по информатике, и интерес к ИТ так и не пропал.",
            "В последнее время он строит приложения и веб-сервисы на открытых данных и ИИ и подаётся почти на все конкурсы ИИ-софта, которые проводят правительство и местные власти. На конкурсе ИИ корпорации международного аэропорта Инчхон он получил первую премию, и в июне 2026 года это привело к соглашению о сотрудничестве ради создания AI-PORT аэропорта.",
            "Он окончил курс по созданию LLM-приложений с RAG, прошёл программу международной стандартизации ИИ и был отобран в третий поток программы ИИ-вайбкодинга фонда Ан Чхоль Су.",
            "Он участвует примерно в сотне конкурсов корейского правительства и местных администраций, зарегистрировавшись в Korea Creative Content Agency и Gyeonggi Content Agency, — художественные выставки, игры, романы, вебтуны, хип-хоп, кино, веб-романы: без исключений по жанрам."
          ]
        }
      ],
      slides: [
        "«Читал комиксы — поступил в Гарвард» (2000)",
        "«Тайм-блок Кента Кима»",
        "Материал в журнале Shin Dong-A",
        "Обложка серии корейского хоррора",
        "SERAPHIM: The Awakening of the Iron Dragon",
        "Публикации в прессе и выставочные документы", "", "", "", "", "", "Двенадцать свидетельств и наград",
        "", "", "", "", "", "", "", "", "", "", ""
      ],
      cta: "Слушать TAFA", back: "Назад в Deother"
    },

    ar: {
      title: "Kent Kim (김형섭)",
      tagline: "عشرون عامًا من صناعة الأشياء، قبل الألعاب",
      intro: "‏مؤسّس ديأذر. كتب إلى عشرة آلاف شخص من سكن جامعي في هارفارد، ورسم شريطًا مصوّرًا لعام كامل في صحيفة وطنية، وغنّى الراب بسبع لغات وعلى رأسه قبعة «غات» من عهد جوسون، وفاز بفئة الرعب في مهرجان أفلام قصيرة في هوليوود، وأصدر ثلاثة وعشرين كتابًا. الألعاب هي الوعاء الذي صبّ فيه كل ذلك أخيرًا.",
      sections: [
        {
          h: "عشرة آلاف رسالة",
          p: [
            "كان في السنة الأولى من الثانوية حين عبر المحيط الهادئ بحثًا عن أمّه المطلّقة. ولمّا رآها تكابد، دفع نفسه إلى الدراسة حتى دخل هارفارد.",
            "وهو طالب جامعي كتب إلى عشرة آلاف من قادة السياسة والأعمال حول العالم. وردّ عليه أكثر من مئة — وارن بافيت، ومارغريت تاتشر، وجاك ويلش، ورئيس كوكا كولا، ورئيس ميتسوبيشي، وعازف الكمان يهودي مينوهين، والسيناتور إدوارد كينيدي.",
            "‏ومنذ 2002، عام وفاة أمّه، بدأ يخطب أمام الناس، ولا يزال بعد خمسة وعشرين عامًا — كنائس ودور أيتام وجامعات وثانويات لغات في أنحاء كوريا. ظهر ثلاث مرات في برنامج KBS الصباحي، وألقى محاضرة في Sebasi، وقدّم سلسلة من عشرين حلقة عن طرائق الدراسة الهارفاردية بُثّت عامًا كاملًا على Andong MBC."
          ]
        },
        {
          h: "من رسّام إلى محاضر",
          p: [
            "‏تخصّص في الاقتصاد، لكنه في سنته الأخيرة صنع فيلم رسوم متحركة بعنوان Harvard Man. ومن ذلك جاء شريط الحِكَم المصوّر الذي نُشر عامًا كاملًا في صحيفة دونغ-آ إيلبو سنة 2000، ثم ديوان شعر مصوّر في العام نفسه: «قرأتُ القصص المصوّرة فدخلتُ هارفارد».",
            "‏وقد تناولت نشرة أخبار KBS في فقرة «هذا الشخص» اختياره القصص المصوّرة بدل الطريق إلى وول ستريت."
          ]
        },
        {
          h: "فنّان تشكيلي",
          p: [
            "خاله لي كانغ-سو وأمّه لي كانغ-جا تخرّجا معًا من كلية الفنون الجميلة بجامعة سول الوطنية، وأفنيا عمريهما في الفن الكوري. وقد نشأ داخل هذا التأثير.",
            "في الثانوية التقى نام جون بايك وجهًا لوجه فترك ذلك أثره فيه. ومنذ سنوات دراسته في نيوجيرسي عرض أعماله في نيويورك ونيوجيرسي بوصفه رسّامًا يشتغل على الهانغول، واختاره متحف موريس في نيوجيرسي عامين متتاليين.",
            "وفي 1998 أدار معرض أنطوني كوين، بطل «الشيخ والبحر»، في مركز سول للفنون.",
            "‏ومنذ 2023 يرسم مباشرةً في المواقع في أنحاء البلاد — من غاروسو-غيل إلى هوميغوت في بوهانغ — ‏وقد تجاوز لوحته رقم 133. وفي 2024 أهدى أعمالًا زيتية وأكريليكية بالهانغول إلى ثلاثمئة من مدرّبي التايكوندو حول العالم."
          ]
        },
        {
          h: "ثلاثة وعشرون كتابًا",
          p: [
            "أصدر ثلاثة وعشرين كتابًا منذ عام 2000 — بدءًا من حكاية الرسائل العشرة آلاف والردود التي جاءته، ثم طرائق الدراسة، والابتعاث المبكّر، وتطوير الذات.",
            "‏وأشهرها «تايم بلوك» لكِنت كِم، وهي طريقة إدارة الوقت على النهج الهارفاردي التي بناها وهو طالب."
          ]
        },
        {
          h: "TAFA — خمسمئة أغنية",
          p: [
            "في نيويورك التقى كيم ماري، مؤلّفة أغنية الأطفال الكورية التي يعرفها كل تلميذ، وأخذ منها إلهامًا موسيقيًا.",
            "‏ومنذ 2012 يغنّي الراب بقبعة «غات» جوسونية بدل قبعة البيسبول. كتب ولحّن وغنّى بنفسه أكثر من خمسمئة أغنية بسبع لغات — الكورية والإنجليزية واليابانية والماندرين والكانتونية والألمانية والفيتنامية. ومنها 407 أغانٍ تُوزَّع باسم TAFA على Apple Music وSpotify وAmazon وNaver Music وغيرها.",
            "‏أما الجهات الحكومية فتحصل على الموسيقى مجانًا. وهكذا صُنعت أناشيد عيد العمال لوزارة التشغيل والعمل، ومهرجان دايجون للعلوم، والمسابقة الوطنية لفنون الطلبة. وفي أبريل 2026 نال جائزة تشجيعية في مسابقة الأناشيد بالذكاء الاصطناعي ضمن منتدى دايجون العالمي للثقافة العلمية."
          ]
        },
        {
          h: "المسرح والسينما",
          p: [
            "في 2012، وتحت إشراف أستاذه المسرحي يو سي-جين، قدّم عرضين مسرحيين.",
            "‏وفي 2017 صنع فيلمًا مستقلًا مدته خمس عشرة دقيقة بعنوان ELEGERE لمهرجان AOF للأفلام القصيرة في هوليوود، وفاز بفئة الرعب."
          ]
        },
        {
          h: "روائي",
          p: [
            "‏بدأ الكتابة بجدّية وهو طالب، إذ أقام شهرًا في سوكتشو وجبال سوراك. وفي مايو 2025 نشر أول رواياته الخيال العلمي بالإنجليزية، SERAPHIM: The Awakening of the Iron Dragon، على أمازون في الولايات المتحدة.",
            "‏واستنادًا إلى التاريخ الكوري ينشر روايات ويب تباعًا — «ذئب جوسون»، وDeath Guide، و«ملك العفاريت كانغ دو-هيون»، و«لوسيفر وملك العفاريت في مودونغسان»، و«جانغ بوغو الذي اكتشف أمريكا الشمالية»، و«الهوارانغ الأسود»، و«بانمونجوم»، و«اليوم الذي اختفت فيه أمريكا». وقد خرجت عدة ألعاب لديأذر من هذه القصص.",
            "وبتأثير من ستيفن كينغ يُعِدّ ثلاث عشرة قصة رعب كورية مبنية حول العدد الذي يكرهه كينغ — «قناع هاهوي»، و«وجبة خاصة»، و«شبح سمّاعة الأذن»، و«شبح الوشم»، و«حساء الكلب»، و«داء الخُمار»، و«حقل الجينسنغ»، و«البيت في الريف»، و«الطائفة»، و«السيارة ذاتية القيادة»، و«الشقة»، و«السيجارة الإلكترونية». والنشر مقرّر في 2026."
          ]
        },
        {
          h: "مطوّر ألعاب",
          p: [
            "‏منذ يوليو 2025 أمضى شهرين يتعلّم Unity وبنى بنفسه لعبة قتال ثلاثية الأبعاد. وبتلك اللعبة اختارته وكالة محتوى جيونغي، وفي أكتوبر 2025 أقام جناحًا في الجناح الكوري بمعرض gamescom asia x Thailand Game Show ضمن ستة عشر عملًا كوريًا.",
            "‏ومن أكتوبر إلى ديسمبر أمضى شهرين آخرين يعيد بناءها من الصفر على Unreal Engine استعدادًا لإصدار عالمي. وتقدّم ديأذر اليوم عشر ألعاب."
          ]
        },
        {
          h: "الذكاء الاصطناعي والبيانات المفتوحة",
          p: [
            "درس الاقتصاد في هارفارد، لكنه أخذ إلى جانبه مقرّرات في علوم الحاسوب، ولم ينقطع اهتمامه بالتقنية.",
            "وفي الآونة الأخيرة يبني تطبيقات وخدمات ويب على البيانات المفتوحة والذكاء الاصطناعي، ويتقدّم إلى كل مسابقة برمجيات ذكاء اصطناعي تقريبًا تنظّمها الحكومة والإدارات المحلية. وفي مسابقة الذكاء الاصطناعي التي نظّمتها شركة مطار إنتشون الدولي حصل على الجائزة الأولى، وأدى ذلك في يونيو 2026 إلى اتفاقية تعاون لتحقيق مشروع AI-PORT في المطار.",
            "‏أنهى دورة في بناء تطبيقات نماذج اللغة الكبيرة باستخدام RAG، وشارك في برنامج للتقييس الدولي للذكاء الاصطناعي، واختير ضمن الدفعة الثالثة لبرنامج «vibe coding» بالذكاء الاصطناعي في مؤسسة آن تشول-سو.",
            "‏ويشارك في نحو مئة مسابقة تنظّمها الحكومة الكورية وإداراتها المحلية، وهو مسجَّل لدى Korea Creative Content Agency ووكالة محتوى جيونغي — معارض فنية وألعاب وروايات وويبتون وهيب هوب وسينما وروايات ويب، دون استثناء نوع."
          ]
        }
      ],
      slides: [
        "«قرأتُ القصص المصوّرة فدخلتُ هارفارد» (2000)",
        "‏«تايم بلوك» لكِنت كِم",
        "‏تحقيق في مجلة Shin Dong-A",
        "غلاف سلسلة الرعب الكورية",
        "‏SERAPHIM: The Awakening of the Iron Dragon",
        "تغطية صحفية ووثائق معارض", "", "", "", "", "", "اثنتا عشرة شهادة وجائزة", "", "", "", "", "", "", "",
        "", "", "", ""
      ],
      cta: "‏الاستماع إلى TAFA", back: "‏العودة إلى Deother"
    }
  },

  /* ===================== 연도별 행사 로드맵 =====================
     출처: FN_FESTIVAL_CALENDAR.md (2026-08-16 전수조사, 트랙 38개).
     ※ 공개하지 않은 것 — 원문에는 있으나 여기 옮기지 않았다:
       1) 기관·담당자 이메일 15건. 공개 페이지에 실으면 스팸 표적이 되고 남의 개인정보다.
       2) 내부 미해결 이슈(스팀 페이지 부재·국적/사업장 자격·AI 에셋 고지·빌드 용량·이동비).
          심사위원과 배급사가 읽는 문서에 우리 약점을 우리가 정리해 줄 이유가 없다.
       3) 작업 스케줄러 알림 21건(FN_Fest_*). 내부 운영이라 사이트와 무관하다.
       4) 'Gun Day'. 원문에는 프로토타입으로 적혀 있으나 사이트에 없는 미공개 타이틀이라
          여기서 처음 공개하지 않는다. 공개할 때 카드부터 만드는 게 순서다.
     ※ 이 목록은 '도전 계획'이지 '선정 결과'가 아니다 — 마지막 섹션에서 명시한다 (함정 2). */
  festivals: {
    ko: {
      title: "연도별 행사 로드맵",
      tagline: "2026년 하반기부터 2027년까지, 우리가 도전하는 행사 전부",
      intro: "응모할 수 있는 트랙 38개를 전수조사해 달마다 정리했습니다. 무료 19 · 유료 11 · 상금 6 · 상시 2. 아래는 선정 결과가 아니라 도전 계획입니다 — 결과는 나오는 대로 메인 페이지 여정 연표에 적습니다.",
      sections: [
        {
          h: "지금까지 넣은 것",
          p: ["2025년 5월부터 지금까지 공모전·지원사업에 330건 넘게 접수했습니다. 아래는 그중 게임·창업 분야만 추린 것이고, 결과가 나오면 이 줄의 상태가 바뀝니다."],
          list: {
            h: "제출 이력",
            items: [
              "2025년 7월 10일 · 디캠프(D.CAMP) · 접수 완료",
              "2025년 7월 10일 · 관악 S밸리 스타트업 스케일업 데모데이 · 접수 완료",
              "2025년 7월 10일 · 하임벤처 · 접수 완료",
              "2025년 7월 17일 · 한·중·일 창업경진대회 · 접수 완료",
              "2025년 7월 17일 · SNU Connect Day × Antler Korea · 접수 완료",
              "2025년 7월 18일 · BNK 창업투자 경진대회 · 접수 완료",
              "2025년 7월 21일 · 2025 중소벤처기업 중동 진출 지원사업 (벤처기업협회) · 미선정",
              "2025년 7월 23일 · 오렌지플래넷 창업재단 · 접수 완료",
              "2025년 7월 25일 마감 · 슈퍼센트 「게임 개발 아카데미 with AI」 · 미선정",
              "2025년 7월 28일 · 2025 콘텐츠 스타트업 배틀필드 (한국콘텐츠진흥원) · 미선정",
              "2025년 7월 28일 마감 · 지커넥션 마켓 공동관 (대만 TCCF · 싱가포르 ATF) · 접수 완료",
              "2025년 7월 31일 마감 · 게임인재단 「AI를 활용한 한국전통놀이 문화」 공모전 · 접수 완료",
              "2025년 8월 4일 · 경기글로벌게임센터 투자유치역량강화프로그램 — 10개사에 선정 · ✅ 선정",
              "2025년 8월 18일 마감 · 2025 한-브루나이 스타트업 네트워킹·피칭 대회 (AI·게임 분야, 6개사 선정) · 미선정",
              "2025년 8월 19일 · 경기콘텐츠진흥원 게임콘텐츠 팝업전시 · ✅ 선정",
              "2025년 8월 19일 · 콘텐츠IP 마켓 2025 (코엑스) · 접수 완료",
              "2025년 8월 22일 마감 · 2025 지스타 대전공동관 참가기업 모집 (대전정보문화산업진흥원) · 미선정",
              "2025년 8월 23일 · 2025 서울 게임 공모전 (서울경제진흥원) · 미선정",
              "2025년 8월 27일 마감 · 2025 순천 AI 게임잼 · 미선정",
              "2025년 9월 2일 · 제1회 NC AI VARCO 3D 인디게임 공모전 — Fighting Nations · 미선정",
              "2025년 9월 9일 · IGGK 인디게임 어워드 · 접수 완료",
              "2025년 9월 10일 마감 · 제17회 유니티 어워드 (Most Anticipated Games 부문 등재) — Fighting Nations: The Iron Dragon Tournament · 미선정",
              "2025년 9월 11일 · 이달의 우수게임 (한국콘텐츠진흥원) — Fighting Nations · 미선정",
              "2025년 9월 14일 · 콘텐츠 유니버스 코리아 인디게임존 · 접수 완료",
              "2025년 9월 15일 마감 · 컴투스홀딩스 게임 챌린지 · 접수 완료",
              "2025년 9월 16일 · 2025 경기 AI 콘텐츠 랩 커머셜 영상 전문과정 (경기콘텐츠진흥원) — 서류 합격 후 면접 · 미선정",
              "2025년 9월 22일 · 한-아랍 스타트업 피치 (한국무역협회) · 접수 완료",
              "2025년 9월 23일 · 메가존클라우드 대중소기업 동반진출 지원사업 — 태국 게임쇼 / gamescom asia 한국관 부스 · ✅ 선정",
              "2025년 11월 16일 마감 · 글로벌게임챌린지 2025 「우수 인디게임 초청전」 (한국게임학회, 20작품 내외 선정) · ✅ 선정",
              "2025년 12월 31일 마감 · 제2회 컴투스 글로벌 게임개발 공모전 「컴:온」 (총상금 4,000만원) · 미선정",
              "2025년 12월 31일 · 제2회 VARCO 활용 게임제작 공모전 Voice편 (NC AI) — Fighting Nations · 미선정",
              "2026년 1월 16일 · 네오위즈 퀘스트 — Fighting Nations · 접수 완료",
              "2026년 2월 28일 마감 · 해외저작권등록 지원사업 · 접수 완료",
              "2026년 3월 12일 마감 · 라이선싱 엑스포 참가사 모집 · 접수 완료",
              "2026년 3월 12일 마감 · 2026 경기창업공모 G-스타 오디션 · 접수 완료",
              "2026년 3월 21일 · Epic MegaGrants (상반기) · 접수 완료",
              "2026년 3월 25일 마감 · 게임더하기 (콘진원 해외진출 지원) · 접수 완료",
              "2026년 3월 27일 마감 · 해외마켓 참가지원사업 · 접수 완료",
              "2026년 3월 27일 마감 · 2026 코리아콘텐츠위크(2026KCW) 중국 진출 참가기업 (콘진원) · 접수 완료",
              "2026년 3월 31일 마감 · 제5회 AI·공공데이터 활용 창업 경진대회 · 접수 완료",
              "2026년 3월 31일 마감 · 게임아이콘 서울 2026 · 접수 완료",
              "2026년 4월 1일 마감 · 게임 상용화 지원사업 · 접수 완료",
              "2026년 4월 3일 · 게임스컴 아시아 2026 한국공동관 (태국) · 미선정",
              "2026년 4월 3일 · 게임스컴 2026 한국공동관 (독일) · 미선정",
              "2026년 4월 3일 · 도쿄게임쇼 2026 한국공동관 · 미선정",
              "2026년 4월 3일 · 차이나조이 2026 · 미선정",
              "2026년 4월 3일 마감 · 2026 대한민국 혁신창업상 공모전 · 접수 완료",
              "2026년 4월 12일 마감 · 스마일게이트 인디게임 공모전 · 접수 완료",
              "2026년 4월 30일 마감 · 퀄컴 AI 이노베이터 프로그램 (QAIPI) 2026-APAC — 온디바이스 AI · 접수 완료",
              "2026년 5월 7일 마감 · 서울 플레이업 AI 게임 챌린지 · 접수 완료",
              "2026년 5월 19일 마감 · 2026 대한민국 콘텐츠 대상 — 스토리부문 (콘진원) · 접수 완료",
              "2026년 6월 3일 마감 · 스마일게이트 멤버십(SGM) 인디게임 18기 · 접수 완료",
              "2026년 6월 25일 마감 · GIGDC 2026 글로벌 인디 게임제작 경진대회 — 밀리버스 · 접수 완료",
              "2026년 6월 26일 마감 · 문화체육관광 인공지능·데이터 활용 공모전 (문체부) · 접수 완료",
              "2026년 7월 20일 · 스웨덴 게임 컨퍼런스 2026 · 접수 완료",
              "2026년 7월 31일 마감 · 2026 경기 가상융합 콘텐츠 챌린지 (총상금 1,000만원) — 밀리버스 · 미선정",
              "2026년 8월 15일 · GWB 게임 어워드 (텐센트) — Fighting Nations · 접수 완료, 11월 시상식",
              "2026년 8월 16일 · Taipei Indie Game Award 2027 — Fighting Nations · 접수 완료, 파이널리스트 발표 10월 14일",
              "2026년 8월 16일 · Epic MegaGrants (하반기) — Fighting Nations · 접수 완료, 심사 중",
              "2026년 8월 16일 · Xsolla Funding Club — Fighting Nations · 접수 완료, 검토 중",
              "2026년 8월 17일 · 제21회 경기 게임 오디션 (총상금 2억원) — Fighting Nations · 접수 완료",
              "2026년 8월 18일 · 콘텐츠IP 마켓 2026 (코엑스, 80개사 선정) · 접수 완료",
              "2026년 8월 18일 · 게이밍 이스탄불 GIST 2026 (3개사 선정) — Fighting Nations · 접수 완료",
              "2026년 8월 18일 · Mobidictum 인디 데스크 2026 (이스탄불) — Fighting Nations · 접수 완료"
            ]
          }
        },
        {
          h: "지금까지 받은 것",
          p: ["공모전만 낸 것이 아니라, 필요한 기술은 직접 배웠습니다. 2019년 유니티 워크숍으로 시작해, 2025년 8월 이후로만 열아홉 과정을 수료했습니다 — 유니티와 언리얼 엔진, 생성형 AI와 리얼리티 캡처, 블록체인·솔리디티, e스포츠 대회 기획, 그리고 인공지능·디지털 자산 국제표준. 그 사이에 상도 둘 받았습니다."],
          list: {
            h: "교육 수료와 수상",
            items: [
              "2019년 12월 11일 · Gamebridge Unityversity — 유니티 게임 개발 1주 워크숍 (Unity 2018.4 LTS, 서울 wcoding) · ✅ 수료",
              "2025년 8월 20일 · 경기콘텐츠진흥원 「2025 경기 메타버스 캠퍼스」 정규 과정 — 유니티 활용 실무 프로젝트 기반 메타버스 플랫폼 콘텐츠 제작 (100시간) · ✅ 수료",
              "2025년 9월 7일 · YTN서울타워 숏폼 공모전 · 🏆 장려상",
              "2025년 9월 18일 · 경기도경제과학진흥원(GBSA) 경기 스타트업 아카데미 딥테크 — 「데이터로 만드는 비즈니스 모델 기획과 실습: 아이디어부터 프로토타입까지」 · ✅ 수료",
              "2025년 10월 31일 · (사)한국메타버스산업협회 — 언리얼 기반 생성형 AI 및 리얼리티 캡처 활용 콘텐츠 제작 과정 (60시간) · ✅ 수료",
              "2025년 11월 4일 · 경기게임아카데미 2025 역량강화과정 — 「AI 활용 게임 개발자 교육」 9·10차 · ✅ 수료",
              "2025년 11월 17일 · 광주이스포츠교육원 — 「e스포츠 대회기획 과정」 · ✅ 수료",
              "2026년 4월 23일 · 동그라미재단 AI 아카데미 3기 — AI 바이브 코딩 (15시간) · ✅ 수료",
              "2026년 4월 29일 · 한국정보통신기술협회(TTA) ICT 표준 전문가 양성교육 — 인공지능 국제표준화 기본과정 (5시간) · ✅ 수료",
              "2026년 4월 29일 · 한국정보통신기술협회(TTA) ICT 표준 전문가 양성교육 — 자율주행 모빌리티 국제표준화 기본과정 (6시간) · ✅ 수료",
              "2026년 4월 29일 · 한국정보통신기술협회(TTA) ICT 표준 전문가 양성교육 — 차세대보안·블록체인 국제표준화 기본과정 (4시간) · ✅ 수료",
              "2026년 5월 9일 · 한국인터넷진흥원(KISA) 「2026 블록체인 밋업데이 — 솔리디티 언어 학습과 활용계획」 · ✅ 수료",
              "2026년 5월 28일 · 한국정보통신기술협회(TTA) 「디지털 자산의 미래와 전략」 세미나 (4시간) · ✅ 수료",
              "2026년 5월 30일 · 한국인터넷진흥원(KISA) 「2026 블록체인 밋업데이 — 블록체인 월렛 개발하기」 · ✅ 수료",
              "2026년 6월 1일 · 「제107회 전국체전·제46회 전국장애인체전 in 제주」 공모전 응원가 부문 (제주특별자치도) · 🏆 우수상",
              "2026년 6월 13일 · 한국인터넷진흥원(KISA) 「2026 블록체인 밋업데이 — 예금토큰의 이해와 기능 구현」 · ✅ 수료",
              "2026년 6월 27일 · 한국인터넷진흥원(KISA) 「2026 블록체인 밋업데이 — 탈중앙화 프라이버시 플랫폼(DPP)의 이해와 보안 기술 실습」 · ✅ 수료",
              "2026년 7월 12일 · 한국인터넷진흥원(KISA) 「2026 블록체인 밋업데이 — 생성형 AI를 활용한 블록체인 서비스 개발」 · ✅ 수료",
              "2026년 7월 23일 · 경기콘텐츠진흥원 「2026 경기 가상융합 캠퍼스」 정규 과정 — 언리얼 엔진의 비주얼 스크립팅 활용 콘텐츠 제작 (20시간) · ✅ 수료",
              "2026년 7월 30일 · 경기콘텐츠진흥원 「2026 경기 가상융합 캠퍼스」 정규 과정 — 언리얼 엔진을 이용한 시네마틱 영상 제작 (20시간) · ✅ 수료",
              "2026년 8월 6일 · 경기콘텐츠진흥원 「2026 경기 가상융합 캠퍼스」 정규 과정 — 언리얼 엔진과 AI를 활용한 AI NPC 제작 (20시간) · ✅ 수료",
              "2026년 8월 13일 · 경기콘텐츠진흥원 「2026 경기 가상융합 캠퍼스」 정규 과정 — 생성형 AI 활용 애셋 제작 (20시간) · ✅ 수료",
            ]
          }
        },
        {
          h: "왜 계획을 공개하나",
          p: [
            "게임을 만드는 일과 그 게임을 세상에 내보내는 일은 다른 일입니다. 1인 개발이라 후자를 즉흥으로 하면 그해를 통째로 놓칩니다. 그래서 응모 가능한 트랙을 전부 세어 달력에 붙였고, 그 달력을 그대로 공개합니다.",
            "패턴이 하나 보였습니다. 접수는 상반기에 몰리고 개최는 하반기입니다. 38개 중 24개가 1월에서 6월 사이에 마감됩니다. 8월에 움직이기 시작하면 그해 대부분은 이미 지나간 뒤입니다. 2027년은 1월부터 시작합니다."
          ],
          list: {
            h: "트랙 38개의 구성",
            items: [
              "무료 19 — 선정되면 전시 비용까지 주최 측이 부담하는 트랙",
              "유료 11 — 참가비 또는 부스비가 드는 트랙",
              "상금·지원금 6 — 상금이나 제작 지원금이 걸린 트랙",
              "상시 2 — 마감이 없어 언제든 넣을 수 있는 트랙"
            ]
          }
        },
        {
          h: "2026 하반기 — 지금 접수하는 것",
          p: ["이 페이지를 정리한 2026년 8월 기준으로 아직 열려 있거나 곧 열리는 접수입니다."],
          list: {
            h: "8월 ~ 12월 마감",
            items: [
              "GWB Game Awards (텐센트) — 8월 중순 · 무료. 11월 시상식과 스팀 이벤트로 이어집니다",
              "EVA Play (부에노스아이레스) — 8월 17일경 · 무료. 온라인 참가 가능",
              "Taipei Indie Game Award — 8월 19일 · 무료. 팀당 1개, 자료 업로드는 8월 26일~9월 2일",
              "Steam Next Fest 10월판 등록 — 8월 31일. 데모는 9월 21일까지",
              "Mobidictum Showcase (이스탄불) — 8월 31일 · 무료. Indie Spot 50개와 어워드",
              "IGF — 9월 7일경 · $75(면제 신청 가능). 노미네이트만으로도 이력이 됩니다",
              "DevGAMM Awards — 9월 7일경 · 무료. 심사단 150명 이상, 11월 IGN 스트리밍",
              "지스타 인디 쇼케이스 — 9월 중 · 무료. 선정 통보 10월 17일",
              "Demospree — 10월 5일경 · 무료. 1월 데모 스트리밍 마라톤",
              "BGM Game Expo Winter (중국) — 10월 17일경 · 무료. 12월 오프라인 행사와 어워드",
              "Day of the Devs 겨울판 — 8~10월 · 무료. 큐레이티드 선정",
              "BitSummit 일반 출전 응모 개시 — 11월경 · 33,000엔. 1회 1타이틀",
              "타이베이 INDIE HOUSE 부스 — 가을 · 유료. 개최는 1월",
              "pitchyagame — 11월 · 무료. 라이브 피칭",
              "A MAZE. 베를린 접수 시작 — 12월 16일 · 유료. 마감은 1월 31일"
            ]
          }
        },
        {
          h: "2026 하반기 — 열리는 자리",
          p: ["접수와 별개로, 하반기에 실제로 열리는 행사입니다."],
          list: {
            h: "9월 ~ 12월 개최",
            items: [
              "도쿄게임쇼 — 9월 말",
              "PAX West — 9월 초",
              "Steam Next Fest 10월판 — 10월 19~26일",
              "gamescom asia x Thailand Game Show — 10월 29일~11월 1일, 방콕. 2025년에 한국관 부스로 참가했던 행사입니다",
              "지스타 + G-CON — 11월 19~22일, 부산",
              "DevGAMM 시상식 · GWB 시상식 — 11월",
              "BGM Game Expo Winter — 12월, 중국"
            ]
          }
        },
        {
          h: "2027 상반기 접수 — 1월에서 3월",
          p: ["여기가 승부처입니다. 1분기에만 여덟 개 트랙이 닫힙니다."],
          list: {
            h: "1월 ~ 3월 마감",
            items: [
              "Steam Next Fest 2월판 등록 — 1월 5일경. 개최 7주 전 마감이고 게임당 평생 1회뿐입니다",
              "gamescom latam BIG Festival — 1월 15일경 · 무료. 상파울루, 17개 부문, 4월 말 개최",
              "네오위즈 퀘스트 — 1월 16일 · 무료. 총상금 1억 6,500만원",
              "A MAZE. 베를린 — 1월 31일(연장 시 2월 10일경) · 유료",
              "도쿄게임쇼 SELECTED INDIE 80 접수 시작 — 2월 10일 · 무료. 마감은 4월 30일",
              "Indie Arena Booth — 3~4월 · 유료 + 무료 큐레이티드 자리. 심사단 약 100명, 통보는 4월 말~5월 초",
              "지스타 조기신청 시작 — 3월 3일 · 유료. 부스비 10% 할인"
            ]
          }
        },
        {
          h: "2027 상반기 접수 — 4월에서 6월",
          p: ["국내 지원 사업과 유럽 인디 부스가 겹치는 구간입니다."],
          list: {
            h: "4월 ~ 6월 마감",
            items: [
              "Day of the Devs (Summer Game Fest판) — 4월 6일경 · 무료. 큐레이티드",
              "스마일게이트 IndieGo — 4월 12일 · 무료. 1,000만원",
              "Indie Arena Booth — 4월 20일경 · 유료. gamescom 공유 부스",
              "도쿄게임쇼 SELECTED INDIE 80 — 4월 30일 · 무료. 80개 선정, SOWN 후보 자동 등록",
              "Tiny Teams — 4월 30일경 · 무료. 5인 이하 팀, 데모 필수",
              "지스타 조기신청 마감 — 4월 30일 · 유료",
              "인디크래프트 — 5월 6일 · 무료. 최대 4,000만원",
              "NC VARCO — 5월 7일 · 무료",
              "gamescom dev 인디 엑스포 — 5월 8일 · 무료. 30개 자리 중 20팀. 구 devcom이고 마감은 5월 31일이 아닙니다",
              "BIC 페스티벌 — 5월 25일 · 무료. 부산, 8월 개최",
              "지스타 일반신청 시작 — 5월 26일 · 유료",
              "gamescom asia 인디 — 6월 15일경 · 유료. 방콕",
              "IndieCade 정규 접수 — 6월 중순경 · $135. 페스티벌은 1월",
              "GIGDC — 6월 25일 · 무료",
              "LudoNarraCon — 6월 26일경 · 무료. 내러티브 중심이라 우리 장르와는 거리가 있습니다",
              "지스타 일반신청 마감 — 7월 31일 · 유료"
            ]
          }
        },
        {
          h: "2027 개최 일정",
          p: ["접수에 성공했을 때 실제로 가야 하는 날짜입니다. 날짜가 확정 공지된 것만 적었습니다."],
          list: {
            h: "1월 ~ 11월",
            items: [
              "타이베이 게임쇼 + INDIE HOUSE — 1월 21~24일. Indie Game Award 시상식은 1월 20일",
              "IndieCade 페스티벌 · Demospree 방송 — 1월",
              "Steam Next Fest 2월판 — 2월",
              "GDC + IGF 시상식 — 3월 초, 샌프란시스코",
              "gamescom latam — 4월 30일~5월 3일, 상파울루",
              "A MAZE. 베를린 — 5월 중순",
              "BitSummit — 5월 21~23일, 교토",
              "Digital Dragons · Nordic Game — 5월",
              "Steam Next Fest 6월판 — 6월",
              "Develop:Brighton — 7월 13~15일",
              "BIC 페스티벌 — 8월 중순, 부산",
              "gamescom dev + gamescom — 8월 말, 쾰른",
              "도쿄게임쇼 — 9월 말",
              "지스타 — 11월, 부산"
            ]
          }
        },
        {
          h: "마감이 없는 상시 트랙",
          p: ["달력과 무관하게 언제든 넣을 수 있는 창구입니다. 일정에 쫓기지 않는 대신 우리가 준비된 순간에 스스로 밀어넣어야 합니다."],
          list: {
            h: "상시 6종",
            items: [
              "Big Indie Pitch — 무료. 연중 여러 도시에서 열리는 유일한 상시 피칭",
              "에픽 메가그랜트 — 무료. 언리얼 프로젝트 상시 접수",
              "INDIE Live Expo — 무료. 연 2회 온라인",
              "PAX Rising — 유료. West / East / Aus 별도 신청",
              "gamescom dev B2B 스탠드 — €1,499. 인디 8팀, gamescom 홀 4.1",
              "Steam Direct — 앱당 $100. 매출 $1,000을 넘기면 돌려받습니다"
            ]
          }
        },
        {
          h: "어떤 순서로 도전하나",
          p: [
            "1인 개발에서는 부스비보다 이동·체류비가 큽니다. 유럽·북미 현장 트랙은 참가비가 무료여도 실제 비용이 가장 큽니다. 그래서 순서를 정해 두었습니다.",
            "주력은 Fighting Nations입니다. 격투 장르는 대형 종합 페스티벌과 어워드에서 강하고, 장르를 한정하는 스팀 이벤트에서는 약합니다. Kingdom Wars는 브라우저 게임이라 물리 부스 트랙에서는 빠지고, 전략 장르 온라인 이벤트와 무료 스팀 이벤트로 따로 나갑니다."
          ],
          list: {
            h: "우선순위",
            items: [
              "① 온라인·심사형 무료 트랙 — 이동비가 들지 않습니다",
              "② 국내 — 지스타, BIC 페스티벌",
              "③ 아시아 근거리 — 타이베이, 방콕, 교토",
              "④ 유럽·북미 — 선정되거나 동행 지원이 붙을 때"
            ]
          }
        },
        {
          h: "무엇이 확정이고 무엇이 아닌가",
          p: [
            "이 페이지는 도전 계획입니다. 선정 결과가 아닙니다. 어디에 붙었는지는 결과가 나온 뒤에 메인 페이지의 여정 연표에 적습니다 — 지금까지 그렇게 해 왔습니다.",
            "날짜는 각 행사의 공지와 예년 일정을 함께 정리한 것이라, 공식 공지가 나오면 그쪽이 맞습니다. 확인되는 대로 이 페이지를 고칩니다.",
            "마지막 갱신: 2026년 8월 19일."
          ]
        }
      ],
      // 사진 자막. 전부 이미 다녀온 자리다 — 앞으로 갈 행사의 사진이 아니라는 것이 자막으로 드러나야 한다.
      slides: [
        "2025년 10월, gamescom asia x Thailand Game Show 한국관. 아래 목록은 앞으로 도전할 자리들입니다.",
        "디아더 부스의 간판과 Fighting Nations 포스터. 위 목록의 행사들에도 이렇게 나가려 합니다.",
        "태국 게임쇼에서 인도 배급사와. 행사에 나가는 이유는 결국 이런 자리를 만들기 위해서입니다.",
        "우리가 들고 나가는 게임 — Fighting Nations. 위 목록의 대부분이 이 게임으로 나갑니다.",
        "각 파이터는 한 나라와 그 나라의 무술을 대표합니다. 13개국 캐릭터, 무기는 없습니다.",
        "킹덤워즈는 브라우저 게임이라 물리 부스 대신 온라인 이벤트로 나갑니다.",
        "Taipei Indie Game Award 2027 신청 화면 — 2026년 8월 16일. 파이널리스트 발표는 10월 14일입니다.",
        "2025년 10월 태국 게임쇼의 비즈니스 구역 입구. 위 목록의 자리들도 이렇게 하나씩 찾아갑니다.",
        "부스에서 Fighting Nations 를 소개하는 대표 김형섭. 목록의 행사마다 이렇게 직접 섭니다.",
        "글로벌 게임 챌린지 2025 — 2025년 11월 29일 중앙대학교 100주년기념관. 선정되어 실제로 선 자리입니다.",
        "GGC 「우수 인디게임 초청전」의 디아더 부스. 20작품 내외 선정작으로 초청받았습니다.",
        "관람객이 부스에서 Fighting Nations 를 직접 플레이했습니다.",
        "2026년 6월 24일, 인천국제공항공사와 상생협력 업무협약. 인천공항 AI-PORT 구현을 위해 선정된 세 개 스타트업 중 하나입니다.",
        "협약식 자리의 대표 김형섭. 인천국제공항공사 AI 공모전 최우수상이 이 협약으로 이어졌습니다."
      ],
      cta: "출품작 해보기 — Fighting Nations", back: "디아더로 돌아가기"
    },

    en: {
      title: "Festival Roadmap by Year",
      tagline: "Every show we are entering, from late 2026 through 2027",
      intro: "We counted every track we can enter — 38 of them — and put them on a calendar: 19 free, 11 paid, 6 with prize money, 2 open all year. What follows is a plan we are entering, not a list of results. Results go on the journey timeline on the front page as they come in.",
      sections: [
        {
          h: "What we have actually entered",
          p: ["Since May 2025 we have entered more than 330 contests and support programmes. Listed below are only the game and startup entries; when results come, the status on these lines changes."],
          list: {
            h: "Submission log",
            items: [
              "10 July 2025 · D.CAMP · submitted",
              "10 July 2025 · Gwanak S-Valley Startup Scale-Up Demo Day · submitted",
              "10 July 2025 · Haim Ventures · submitted",
              "17 July 2025 · Korea–China–Japan Startup Competition · submitted",
              "17 July 2025 · SNU Connect Day × Antler Korea · submitted",
              "18 July 2025 · BNK Startup Investment Competition · submitted",
              "23 July 2025 · Orange Planet Startup Foundation · submitted",
              "deadline 25 July 2025 · Supercent — Game Development Academy with AI · not selected",
              "deadline 28 July 2025 · G-Connection joint pavilion (TCCF Taiwan · ATF Singapore) · submitted",
              "deadline 31 July 2025 · Game-in Foundation contest — Korean traditional play through AI · submitted",
              "4 August 2025 · Gyeonggi Global Game Center — investment-readiness programme, one of 10 studios selected · ✅ selected",
              "19 August 2025 · Gyeonggi Content Agency game-content pop-up exhibition · ✅ selected",
              "19 August 2025 · Content IP Market 2025 (COEX) · submitted",
              "23 August 2025 · Seoul Game Contest 2025 (Seoul Business Agency) · not selected",
              "deadline 27 August 2025 · Suncheon AI Game Jam 2025 · not selected",
              "2 September 2025 · 1st NC AI VARCO 3D Indie Game Contest — Fighting Nations · not selected",
              "9 September 2025 · IGGK Indie Game Awards · submitted",
              "11 September 2025 · Game of the Month award (KOCCA) — Fighting Nations · not selected",
              "14 September 2025 · Contents Universe Korea Indie Game Zone · submitted",
              "deadline 15 September 2025 · Com2uS Holdings Game Challenge · submitted",
              "16 September 2025 · Gyeonggi AI Content Lab 2025, commercial video track (Gyeonggi Content Agency) — passed document screening, then interview · not selected",
              "22 September 2025 · Korea–Arab Startup Pitch Competition (KITA) · submitted",
              "23 September 2025 · Megazone Cloud joint overseas-expansion programme — Korean pavilion booth at Thailand Game Show / gamescom asia · ✅ selected",
              "deadline 16 November 2025 · Global Game Challenge 2025 — Outstanding Indie Game Invitational (Korean Game Society, about 20 titles selected) · ✅ selected",
              "31 December 2025 · 2nd VARCO Game Creation Contest, Voice edition (NC AI) — Fighting Nations · not selected",
              "16 January 2026 · NEOWIZ Quest — Fighting Nations · submitted",
              "deadline 28 February 2026 · Overseas copyright registration support programme · submitted",
              "deadline 12 March 2026 · Licensing Expo Korean pavilion · submitted",
              "21 March 2026 · Epic MegaGrants (H1) · submitted",
              "deadline 25 March 2026 · Game Plus — overseas launch support (KOCCA) · submitted",
              "deadline 27 March 2026 · Overseas market participation support programme · submitted",
              "deadline 27 March 2026 · Korea Contents Week 2026 (KCW) — China market entry, KOCCA · submitted",
              "deadline 31 March 2026 · 5th AI & Public Data Startup Competition · submitted",
              "deadline 31 March 2026 · Game Icon Seoul 2026 · submitted",
              "deadline 1 April 2026 · Game commercialisation support programme · submitted",
              "deadline 3 April 2026 · Korea Innovation Startup Awards 2026 · submitted",
              "deadline 12 April 2026 · Smilegate Indie Game Contest · submitted",
              "deadline 30 April 2026 · Qualcomm AI Innovator Program (QAIPI) 2026-APAC — on-device AI · submitted",
              "deadline 7 May 2026 · Seoul Play Up AI Game Challenge · submitted",
              "deadline 19 May 2026 · Korea Content Awards 2026 — Story division (KOCCA) · submitted",
              "deadline 3 June 2026 · Smilegate Membership (SGM) indie game batch 18 · submitted",
              "15 August 2026 · GWB Game Awards (Tencent) — Fighting Nations · submitted, ceremony in November",
              "16 August 2026 · Taipei Indie Game Award 2027 — Fighting Nations · submitted, finalists announced 14 October",
              "16 August 2026 · Epic MegaGrants (H2) — Fighting Nations · submitted, under review",
              "16 August 2026 · Xsolla Funding Club — Fighting Nations · submitted, under review",
              "3 April 2026 · gamescom asia 2026 Korea pavilion (Thailand) · not selected",
              "3 April 2026 · Tokyo Game Show 2026 Korea pavilion · not selected",
              "20 July 2026 · Sweden Game Conference 2026 · submitted",
              "18 August 2026 · Gaming Istanbul GIST 2026 (3 companies selected) — Fighting Nations · submitted",
              "18 August 2026 · Mobidictum Indie Desk 2026 (Istanbul) — Fighting Nations · submitted",
              "deadline 10 September 2025 · 17th Unity Awards (listed in Most Anticipated Games) — Fighting Nations: The Iron Dragon Tournament · not selected",
              "deadline 31 December 2025 · 2nd Com2uS Global Game Development Contest — Com:ON · not selected",
              "21 July 2025 · 2025 Middle East market-entry programme for SMEs (Korea Venture Business Association) · not selected",
              "28 July 2025 · 2025 Content Startup Battlefield (KOCCA) · not selected",
              "deadline 18 August 2025 · 2025 Korea–Brunei Startup Networking and Pitching Competition (AI and games, 6 studios selected) · not selected",
              "deadline 22 August 2025 · G-STAR 2025 Daejeon joint pavilion (Daejeon Information & Culture Industry Promotion Agency) · not selected",
              "17 August 2026 · 21st Gyeonggi Game Audition — Fighting Nations · submitted",
              "18 August 2026 · Content IP Market 2026 (COEX, 80 companies selected) · submitted",
              "deadline 12 March 2026 · 2026 Gyeonggi Startup Contest — G-Star Audition · submitted",
              "deadline 25 June 2026 · GIGDC 2026 Global Indie Game Making Contest — Miliverse · submitted",
              "deadline 26 June 2026 · Culture, Sports and Tourism AI & Data Contest (Ministry of Culture, Sports and Tourism) · submitted",
              "deadline 31 July 2026 · 2026 Gyeonggi Virtual-Convergence Content Challenge — Miliverse · not selected",
              "3 April 2026 · gamescom 2026 Korea pavilion (Germany) · not selected",
              "3 April 2026 · ChinaJoy 2026 · not selected"
            ]
          }
        },
        {
          h: "What we have earned",
          p: ["We did not only send entries — we went and learned what we needed. It began with a one-week Unity workshop in 2019, and nineteen more courses have followed since August 2025 alone: Unity and Unreal Engine, generative AI and reality capture, blockchain and Solidity, esports tournament planning, international standards for AI and digital assets. And two awards along the way."],
          list: {
            h: "Courses completed and awards",
            items: [
              "11 December 2019 · Gamebridge Unityversity — one-week game development workshop with Unity (Unity 2018.4 LTS, wcoding Seoul) · ✅ completed",
              "20 August 2025 · Gyeonggi Content Agency — Gyeonggi Metaverse Campus 2025: project-based metaverse platform content production in Unity (100 hours) · ✅ completed",
              "7 September 2025 · YTN Seoul Tower short-form video contest · 🏆 Encouragement Award",
              "18 September 2025 · Gyeonggi Business & Science Accelerator (GBSA) deep-tech startup academy — Building business models from data: idea to prototype · ✅ completed",
              "31 October 2025 · Korea Metaverse Industry Association — content production with Unreal-based generative AI and reality capture (60 hours) · ✅ completed",
              "4 November 2025 · Gyeonggi Game Academy 2025 — AI-assisted game developer training (sessions 9 and 10) · ✅ completed",
              "17 November 2025 · Gwangju Esports Academy — esports tournament planning course · ✅ completed",
              "23 April 2026 · The Circle Foundation AI Academy, cohort 3 — AI vibe coding (15 hours) · ✅ completed",
              "29 April 2026 · Telecommunications Technology Association (TTA) — ICT standards expert training: international standardisation for artificial intelligence (5 hours) · ✅ completed",
              "29 April 2026 · Telecommunications Technology Association (TTA) — ICT standards expert training: international standardisation for autonomous mobility (6 hours) · ✅ completed",
              "29 April 2026 · Telecommunications Technology Association (TTA) — ICT standards expert training: international standardisation for next-gen security and blockchain (4 hours) · ✅ completed",
              "9 May 2026 · Korea Internet & Security Agency (KISA) — Blockchain Meetup Day 2026: learning Solidity and planning its use · ✅ completed",
              "28 May 2026 · Telecommunications Technology Association (TTA) — The future and strategy of digital assets (4 hours) · ✅ completed",
              "30 May 2026 · Korea Internet & Security Agency (KISA) — Blockchain Meetup Day 2026: building a blockchain wallet · ✅ completed",
              "1 June 2026 · 107th National Sports Festival and 46th National Para Games in Jeju — cheering-song category (Jeju Province) · 🏆 Excellence Award",
              "13 June 2026 · Korea Internet & Security Agency (KISA) — Blockchain Meetup Day 2026: understanding and implementing deposit tokens · ✅ completed",
              "27 June 2026 · Korea Internet & Security Agency (KISA) — Blockchain Meetup Day 2026: decentralised privacy platforms (DPP) and hands-on security · ✅ completed",
              "12 July 2026 · Korea Internet & Security Agency (KISA) — Blockchain Meetup Day 2026: building blockchain services with generative AI · ✅ completed",
              "23 July 2026 · Gyeonggi Content Agency — Gyeonggi Metaverse Campus 2026: content creation with Unreal Engine visual scripting (20 hours) · ✅ completed",
              "30 July 2026 · Gyeonggi Content Agency — Gyeonggi Metaverse Campus 2026: cinematic filmmaking in Unreal Engine (20 hours) · ✅ completed",
              "6 August 2026 · Gyeonggi Content Agency — Gyeonggi Metaverse Campus 2026: building AI NPCs with Unreal Engine and AI (20 hours) · ✅ completed",
              "13 August 2026 · Gyeonggi Content Agency — Gyeonggi Metaverse Campus 2026: asset creation with generative AI (20 hours) · ✅ completed",
            ]
          }
        },
        {
          h: "Why publish the plan",
          p: [
            "Making a game and getting it in front of people are two different jobs. As a one-person studio, improvising the second one costs you a whole year. So we counted every track we can enter, pinned them to a calendar, and are publishing that calendar as it is.",
            "One pattern stood out. Submissions cluster in the first half of the year; the shows themselves happen in the second. 24 of the 38 close between January and June. Start moving in August and most of that year is already gone. For 2027 we start in January."
          ],
          list: {
            h: "What the 38 tracks are",
            items: [
              "19 free — if you are selected, the organiser covers the exhibition cost",
              "11 paid — an entry fee or a booth fee",
              "6 with prize money or a production grant",
              "2 open all year, with no deadline"
            ]
          }
        },
        {
          h: "Late 2026 — what we are entering now",
          p: ["Open or opening shortly, as of August 2026 when this page was compiled."],
          list: {
            h: "Closing August to December",
            items: [
              "GWB Game Awards (Tencent) — mid-August · free. Leads to a November ceremony and a Steam event",
              "EVA Play (Buenos Aires) — around 17 August · free. Remote participation possible",
              "Taipei Indie Game Award — 19 August · free. One entry per team; materials upload 26 August–2 September",
              "Steam Next Fest, October edition — register by 31 August. Demo due 21 September",
              "Mobidictum Showcase (Istanbul) — 31 August · free. 50 Indie Spots plus awards",
              "IGF — around 7 September · $75 (fee waiver available). A nomination alone is worth having",
              "DevGAMM Awards — around 7 September · free. 150+ judges, streamed on IGN in November",
              "G-Star Indie Showcase — during September · free. Selections announced 17 October",
              "Demospree — around 5 October · free. A January demo streaming marathon",
              "BGM Game Expo Winter (China) — around 17 October · free. December show plus awards",
              "Day of the Devs, winter edition — August to October · free. Curated",
              "BitSummit general entry opens — around November · ¥33,000. One title per entry",
              "Taipei INDIE HOUSE booth — autumn · paid. The show itself is in January",
              "pitchyagame — November · free. Live pitching",
              "A MAZE. Berlin opens — 16 December · paid. Closes 31 January"
            ]
          }
        },
        {
          h: "Late 2026 — where the doors open",
          p: ["Separately from submissions, these are the shows actually running in the second half."],
          list: {
            h: "September to December",
            items: [
              "Tokyo Game Show — late September",
              "PAX West — early September",
              "Steam Next Fest, October edition — 19–26 October",
              "gamescom asia x Thailand Game Show — 29 October–1 November, Bangkok. The show we exhibited at in the Korea pavilion in 2025",
              "G-Star + G-CON — 19–22 November, Busan",
              "DevGAMM and GWB award ceremonies — November",
              "BGM Game Expo Winter — December, China"
            ]
          }
        },
        {
          h: "2027 submissions — January to March",
          p: ["This is where the year is decided. Eight tracks close in the first quarter alone."],
          list: {
            h: "Closing January to March",
            items: [
              "Steam Next Fest, February edition — register around 5 January. Closes seven weeks before the event, and a game may do it once, ever",
              "gamescom latam BIG Festival — around 15 January · free. São Paulo, 17 categories, held end of April",
              "NEOWIZ Quest — 16 January · free. ₩165M prize pool",
              "A MAZE. Berlin — 31 January (extensions to around 10 February) · paid",
              "Tokyo Game Show SELECTED INDIE 80 opens — 10 February · free. Closes 30 April",
              "Indie Arena Booth — March to April · paid, plus free curated slots. Around 100 judges; word arrives late April to early May",
              "G-Star early registration opens — 3 March · paid. 10% off the booth fee"
            ]
          }
        },
        {
          h: "2027 submissions — April to June",
          p: ["Korean funding programmes and the European indie booths overlap here."],
          list: {
            h: "Closing April to June",
            items: [
              "Day of the Devs (Summer Game Fest edition) — around 6 April · free. Curated",
              "Smilegate IndieGo — 12 April · free. ₩10M",
              "Indie Arena Booth — around 20 April · paid. Shared booth at gamescom",
              "Tokyo Game Show SELECTED INDIE 80 — 30 April · free. 80 selected, automatically entered for SOWN",
              "Tiny Teams — around 30 April · free. Teams of five or fewer, demo required",
              "G-Star early registration closes — 30 April · paid",
              "IndieCraft — 6 May · free. Up to ₩40M",
              "NC VARCO — 7 May · free",
              "gamescom dev Indie Expo — 8 May · free. 20 teams out of 30 slots. Formerly devcom, and the deadline is not 31 May",
              "BIC Festival — 25 May · free. Busan, held in August",
              "G-Star general registration opens — 26 May · paid",
              "gamescom asia indie — around 15 June · paid. Bangkok",
              "IndieCade regular submissions — around mid-June · $135. The festival is in January",
              "GIGDC — 25 June · free",
              "LudoNarraCon — around 26 June · free. Narrative-focused, so a weaker fit for our genre",
              "G-Star general registration closes — 31 July · paid"
            ]
          }
        },
        {
          h: "2027 show dates",
          p: ["Where we have to physically be if the submissions land. Only dates that have been announced are listed."],
          list: {
            h: "January to November",
            items: [
              "Taipei Game Show + INDIE HOUSE — 21–24 January. Indie Game Award ceremony on 20 January",
              "IndieCade festival and the Demospree broadcast — January",
              "Steam Next Fest, February edition — February",
              "GDC + IGF awards — early March, San Francisco",
              "gamescom latam — 30 April–3 May, São Paulo",
              "A MAZE. Berlin — mid-May",
              "BitSummit — 21–23 May, Kyoto",
              "Digital Dragons and Nordic Game — May",
              "Steam Next Fest, June edition — June",
              "Develop:Brighton — 13–15 July",
              "BIC Festival — mid-August, Busan",
              "gamescom dev and gamescom — late August, Cologne",
              "Tokyo Game Show — late September",
              "G-Star — November, Busan"
            ]
          }
        },
        {
          h: "Tracks with no deadline",
          p: ["These are open regardless of the calendar. Nothing forces the date, which means we have to push ourselves through them the moment the build is ready."],
          list: {
            h: "Six standing tracks",
            items: [
              "Big Indie Pitch — free. Runs in cities all year; the only permanently open pitch",
              "Epic MegaGrants — free. Rolling submissions for Unreal projects",
              "INDIE Live Expo — free. Twice a year, online",
              "PAX Rising — paid. West / East / Aus apply separately",
              "gamescom dev B2B stand — €1,499. Eight indie teams, gamescom hall 4.1",
              "Steam Direct — $100 per app, recouped once the game passes $1,000 in revenue"
            ]
          }
        },
        {
          h: "The order we go in",
          p: [
            "For a one-person studio, travel and accommodation cost more than the booth. A European or North American show is the most expensive kind even when entry is free. So the order is fixed in advance.",
            "Fighting Nations leads every track. A fighting game is strong at large general festivals and awards, and weak at Steam events built around a single genre. Kingdom Wars runs in a browser, so it drops out of the physical booth tracks and goes to strategy-genre online events and free Steam events instead."
          ],
          list: {
            h: "Priority",
            items: [
              "1. Online and jury-based free tracks — no travel cost",
              "2. Korea — G-Star, BIC Festival",
              "3. Nearby Asia — Taipei, Bangkok, Kyoto",
              "4. Europe and North America — when selected, or when travel support comes with it"
            ]
          }
        },
        {
          h: "What is settled and what is not",
          p: [
            "This page is a plan we are entering. It is not a list of results. Where we are actually accepted goes on the journey timeline on the front page once we know — that is how we have handled it so far.",
            "The dates combine each event's announcements with the schedule it has kept in past years. Where an official announcement differs, the announcement is right, and we correct this page as we confirm each one.",
            "Last updated: 19 August 2026."
          ]
        }
      ],
      slides: [
        "The Korea pavilion at gamescom asia x Thailand Game Show, October 2025. The list below is where we go next.",
        "Our booth sign and the Fighting Nations poster. This is how we mean to show up at the shows listed above.",
        "Meeting an Indian distributor at Thailand Game Show. Rooms like this are the reason we go.",
        "The game we take with us — Fighting Nations. Most of the tracks above are entered with this title.",
        "Every fighter carries a nation and its fighting tradition. Characters from 13 countries, bare hands only.",
        "Kingdom Wars runs in a browser, so it skips the physical booths and goes to online events instead.",
        "The Taipei Indie Game Award 2027 application, 16 August 2026. Finalists are announced on 14 October.",
        "The business-area entrance at gamescom asia x Thailand Game Show, October 2025 — the kind of room the shows listed above lead to.",
        "Founder Kent Kim introducing Fighting Nations at the booth. He stands the booth himself at every show on this list.",
        "Global Game Challenge 2025 — 29 November 2025 at Chung-Ang University, Seoul. A place we reached by being selected.",
        "Our stand at the GGC Outstanding Indie Game Invitational, invited as one of about 20 selected titles.",
        "A visitor playing Fighting Nations at the stand.",
        "24 June 2026 — a cooperation agreement with Incheon International Airport Corporation. Deother is one of three startups chosen to help build the airport's AI-PORT.",
        "Founder Kent Kim at the signing. The grand prize at the airport corporation's AI competition is what led to this agreement."
      ],
      cta: "Play the game we are entering", back: "Back to Deother"
    },

    zh: {
      title: "年度展会路线图",
      tagline: "从 2026 下半年到 2027 年，我们要挑战的全部展会",
      intro: "我们把可以报名的 38 个通道全部清点出来，按月排进日历：免费 19 个、收费 11 个、设有奖金 6 个、常年开放 2 个。以下是我们的挑战计划，不是入选结果——结果一旦出来，会写进首页的历程年表。",
      sections: [
        {
          h: "到目前为止实际投出去的",
          p: ["自 2025 年 5 月以来，我们已递交 330 多份公募与扶持项目申请。以下仅列出游戏与创业类，结果公布后这些行的状态会随之更新。"],
          list: {
            h: "提交记录",
            items: [
              "2025 年 7 月 10 日 · D.CAMP 创业基金 · 已递交",
              "2025 年 7 月 10 日 · 冠岳 S-Valley 创业加速 Demo Day · 已递交",
              "2025 年 7 月 10 日 · Haim Ventures · 已递交",
              "2025 年 7 月 17 日 · 韩中日创业竞赛 · 已递交",
              "2025 年 7 月 17 日 · SNU Connect Day × Antler Korea · 已递交",
              "2025 年 7 月 18 日 · BNK 创业投资竞赛 · 已递交",
              "2025 年 7 月 21 日 · 2025 中小风险企业中东市场开拓支援项目（韩国风险企业协会） · 未入选",
              "2025 年 7 月 23 日 · Orange Planet 创业财团 · 已递交",
              "2025 年 7 月 25 日截止 · Supercent「游戏开发学院 with AI」 · 未入选",
              "2025 年 7 月 28 日 · 2025 内容创业 Startup Battlefield（韩国内容振兴院） · 未入选",
              "2025 年 7 月 28 日截止 · G-Connection 联合馆（台湾 TCCF · 新加坡 ATF） · 已递交",
              "2025 年 7 月 31 日截止 · Game-in 财团「AI 演绎韩国传统游艺」大赛 · 已递交",
              "2025 年 8 月 4 日 · 京畿全球游戏中心 投资引进能力强化项目 — 入选十家企业之一 · ✅ 入选",
              "2025 年 8 月 18 日截止 · 2025 韩国-文莱创业交流与路演大赛（AI·游戏领域，选拔六家） · 未入选",
              "2025 年 8 月 19 日 · 京畿内容振兴院游戏内容快闪展 · ✅ 入选",
              "2025 年 8 月 19 日 · 内容 IP 市场 2025（COEX） · 已递交",
              "2025 年 8 月 22 日截止 · 2025 G-STAR 大田联合馆参展企业招募（大田信息文化产业振兴院） · 未入选",
              "2025 年 8 月 23 日 · 2025 首尔游戏大赛（首尔经济振兴院） · 未入选",
              "2025 年 8 月 27 日截止 · 2025 顺天 AI Game Jam · 未入选",
              "2025 年 9 月 2 日 · 第 1 届 NC AI VARCO 3D 独立游戏大赛 — Fighting Nations · 未入选",
              "2025 年 9 月 9 日 · IGGK 独立游戏大奖 · 已递交",
              "2025 年 9 月 10 日截止 · 第 17 届 Unity Awards（入列 Most Anticipated Games 组） — Fighting Nations: The Iron Dragon Tournament · 未入选",
              "2025 年 9 月 11 日 · 本月优秀游戏（韩国内容振兴院）— Fighting Nations · 未入选",
              "2025 年 9 月 14 日 · Contents Universe Korea 独立游戏专区 · 已递交",
              "2025 年 9 月 15 日截止 · Com2uS Holdings 游戏挑战赛 · 已递交",
              "2025 年 9 月 16 日 · 2025 京畿 AI 内容实验室 商业影像专业课程（京畿内容振兴院）— 通过书面审查后面试 · 未入选",
              "2025 年 9 月 22 日 · 韩国-阿拉伯创业路演大赛（韩国贸易协会） · 已递交",
              "2025 年 9 月 23 日 · Megazone Cloud 大中小企业共同出海扶持项目 — 泰国游戏展 / gamescom asia 韩国馆展位 · ✅ 入选",
              "2025 年 11 月 16 日截止 · 全球游戏挑战赛 2025「优秀独立游戏邀请展」（韩国游戏学会，约 20 款入选） · ✅ 入选",
              "2025 年 12 月 31 日截止 · 第 2 届 Com2uS 全球游戏开发大赛「Com:ON」 · 未入选",
              "2025 年 12 月 31 日 · 第 2 届 VARCO 游戏制作大赛 Voice 篇（NC AI） — Fighting Nations · 未入选",
              "2026 年 1 月 16 日 · NEOWIZ Quest — Fighting Nations · 已递交",
              "2026 年 2 月 28 日截止 · 海外著作权登记扶持项目 · 已递交",
              "2026 年 3 月 12 日截止 · 授权展韩国馆参展企业 · 已递交",
              "2026 年 3 月 12 日截止 · 2026 京畿创业公募 G-Star 甄选 · 已递交",
              "2026 年 3 月 21 日 · Epic MegaGrants （上半年） · 已递交",
              "2026 年 3 月 25 日截止 · Game Plus 海外发行扶持（韩国内容振兴院） · 已递交",
              "2026 年 3 月 27 日截止 · 海外市场参展扶持项目 · 已递交",
              "2026 年 3 月 27 日截止 · 2026 韩国内容周（KCW）中国市场参展企业（韩国内容振兴院） · 已递交",
              "2026 年 3 月 31 日截止 · 第 5 届 AI·公共数据创业竞赛 · 已递交",
              "2026 年 3 月 31 日截止 · Game Icon Seoul 2026 · 已递交",
              "2026 年 4 月 1 日截止 · 游戏商用化扶持项目 · 已递交",
              "2026 年 4 月 3 日 · gamescom asia 2026 韩国联合馆（泰国） · 未入选",
              "2026 年 4 月 3 日 · gamescom 2026 韩国联合馆（德国） · 未入选",
              "2026 年 4 月 3 日 · 东京电玩展 2026 韩国联合馆 · 未入选",
              "2026 年 4 月 3 日 · ChinaJoy 2026 · 未入选",
              "2026 年 4 月 3 日截止 · 2026 大韩民国革新创业奖大赛 · 已递交",
              "2026 年 4 月 12 日截止 · Smilegate 独立游戏大赛 · 已递交",
              "2026 年 4 月 30 日截止 · 高通 AI 创新者计划（QAIPI）2026-APAC — 端侧 AI · 已递交",
              "2026 年 5 月 7 日截止 · 首尔 Play Up AI 游戏挑战赛 · 已递交",
              "2026 年 5 月 19 日截止 · 2026 大韩民国内容大奖 — 故事部门（韩国内容振兴院） · 已递交",
              "2026 年 6 月 3 日截止 · Smilegate Membership（SGM）独立游戏第 18 期 · 已递交",
              "2026 年 6 月 25 日截止 · GIGDC 2026 全球独立游戏制作大赛 — Miliverse · 已递交",
              "2026 年 6 月 26 日截止 · 文化体育观光 人工智能·数据应用大赛（韩国文化体育观光部） · 已递交",
              "2026 年 7 月 20 日 · 瑞典游戏大会 2026 · 已递交",
              "2026 年 7 月 31 日截止 · 2026 京畿虚拟融合内容挑战赛 — Miliverse · 未入选",
              "2026 年 8 月 15 日 · GWB 游戏大奖（腾讯）— Fighting Nations · 已递交，11 月颁奖",
              "2026 年 8 月 16 日 · Taipei Indie Game Award 2027 — Fighting Nations · 已递交，10 月 14 日公布入围名单",
              "2026 年 8 月 16 日 · Epic MegaGrants （下半年） — Fighting Nations · 已递交，审核中",
              "2026 年 8 月 16 日 · Xsolla Funding Club — Fighting Nations · 已递交，审核中",
              "2026 年 8 月 17 日 · 第 21 届 京畿游戏甄选（GYEONGGI GAME AUDITION） — Fighting Nations · 已递交",
              "2026 年 8 月 18 日 · 内容 IP 市场 2026（COEX，遴选 80 家） · 已递交",
              "2026 年 8 月 18 日 · 伊斯坦布尔游戏展 GIST 2026（遴选 3 家）— Fighting Nations · 已递交",
              "2026 年 8 月 18 日 · Mobidictum 独立游戏展台 2026（伊斯坦布尔）— Fighting Nations · 已递交"
            ]
          }
        },
        {
          h: "至今获得的",
          p: ["我们不只是递交作品，需要的技术就去学。起点是 2019 年的 Unity 工作坊，仅 2025 年 8 月以来就结业了十九门课程 —— 虚幻引擎与 Unity、生成式 AI 与实景捕捉、区块链与 Solidity、电竞赛事策划，以及人工智能和数字资产国际标准，其间还获得了两个奖项。"],
          list: {
            h: "结业课程与获奖",
            items: [
              "2019 年 12 月 11 日 · Gamebridge Unityversity — Unity 游戏开发一周工作坊 （Unity 2018.4 LTS，首尔 wcoding） · ✅ 结业",
              "2025 年 8 月 20 日 · 京畿内容振兴院「2025 京畿元宇宙校区」正规课程 — 基于实务项目的 Unity 元宇宙平台内容制作 （100 小时） · ✅ 结业",
              "2025 年 9 月 7 日 · YTN 首尔塔短视频大赛 · 🏆 鼓励奖",
              "2025 年 9 月 18 日 · 京畿道经济科学振兴院（GBSA）创业学院深科技课程 —「用数据打造商业模式：从创意到原型」 · ✅ 结业",
              "2025 年 10 月 31 日 · 韩国元宇宙产业协会 — 基于虚幻引擎的生成式 AI 与实景捕捉内容制作课程 （60 小时） · ✅ 结业",
              "2025 年 11 月 4 日 · 京畿游戏学院 2025 能力强化课程 —「AI 应用游戏开发者教育」第 9·10 讲 · ✅ 结业",
              "2025 年 11 月 17 日 · 光州电子竞技教育院 —「电竞赛事策划课程」 · ✅ 结业",
              "2026 年 4 月 23 日 · The Circle Foundation AI 学院第 3 期 — AI Vibe Coding （15 小时） · ✅ 结业",
              "2026 年 4 月 29 日 · 韩国信息通信技术协会（TTA）ICT 标准专家培养教育 — 人工智能国际标准化基础课程 （5 小时） · ✅ 结业",
              "2026 年 4 月 29 日 · 韩国信息通信技术协会（TTA）ICT 标准专家培养教育 — 自动驾驶移动出行国际标准化基础课程 （6 小时） · ✅ 结业",
              "2026 年 4 月 29 日 · 韩国信息通信技术协会（TTA）ICT 标准专家培养教育 — 次世代安全·区块链国际标准化基础课程 （4 小时） · ✅ 结业",
              "2026 年 5 月 9 日 · 韩国互联网振兴院（KISA）「2026 区块链 Meetup Day — Solidity 语言学习与应用规划」 · ✅ 结业",
              "2026 年 5 月 28 日 · 韩国信息通信技术协会（TTA）「数字资产的未来与战略」研讨会 （4 小时） · ✅ 结业",
              "2026 年 5 月 30 日 · 韩国互联网振兴院（KISA）「2026 区块链 Meetup Day — 开发区块链钱包」 · ✅ 结业",
              "2026 年 6 月 1 日 · 「第107届全国体育大会·第46届全国残疾人体育大会 in 济州」征集 助威歌曲组（济州特别自治道） · 🏆 优秀奖",
              "2026 年 6 月 13 日 · 韩国互联网振兴院（KISA）「2026 区块链 Meetup Day — 存款代币的理解与功能实现」 · ✅ 结业",
              "2026 年 6 月 27 日 · 韩国互联网振兴院（KISA）「2026 区块链 Meetup Day — 去中心化隐私平台（DPP）理解与安全技术实操」 · ✅ 结业",
              "2026 年 7 月 12 日 · 韩国互联网振兴院（KISA）「2026 区块链 Meetup Day — 用生成式 AI 开发区块链服务」 · ✅ 结业",
              "2026 年 7 月 23 日 · 京畿内容振兴院「2026 京畿虚拟融合校区」正规课程 — 用虚幻引擎蓝图制作内容（20 小时） · ✅ 结业",
              "2026 年 7 月 30 日 · 京畿内容振兴院「2026 京畿虚拟融合校区」正规课程 — 用虚幻引擎制作电影级影像（20 小时） · ✅ 结业",
              "2026 年 8 月 6 日 · 京畿内容振兴院「2026 京畿虚拟融合校区」正规课程 — 用虚幻引擎与 AI 制作 AI NPC（20 小时） · ✅ 结业",
              "2026 年 8 月 13 日 · 京畿内容振兴院「2026 京畿虚拟融合校区」正规课程 — 生成式 AI 资产制作（20 小时） · ✅ 结业",
            ]
          }
        },
        {
          h: "为什么把计划公开",
          p: [
            "做游戏和把游戏送到玩家面前是两件事。一人工作室如果临时应付后者，一整年就白白过去。所以我们数清了所有能报名的通道，钉进日历，然后把这份日历原样公开。",
            "有一个规律很明显：报名集中在上半年，展会本身在下半年。38 个中有 24 个在 1 月到 6 月截止。8 月才开始动，这一年的大半已经过去了。2027 年我们从 1 月开始。"
          ],
          list: {
            h: "38 个通道的构成",
            items: [
              "免费 19 个 —— 一旦入选，参展费用由主办方承担",
              "收费 11 个 —— 需要报名费或展位费",
              "奖金或制作补助 6 个",
              "常年开放、没有截止日期 2 个"
            ]
          }
        },
        {
          h: "2026 下半年 —— 正在报名的",
          p: ["以整理本页的 2026 年 8 月为准，仍然开放或即将开放的报名。"],
          list: {
            h: "8 月至 12 月截止",
            items: [
              "GWB 游戏大奖（腾讯）—— 8 月中旬 · 免费。之后是 11 月颁奖礼与 Steam 活动",
              "EVA Play（布宜诺斯艾利斯）—— 约 8 月 17 日 · 免费。可远程参加",
              "Taipei Indie Game Award —— 8 月 19 日 · 免费。每队一款，资料上传 8 月 26 日至 9 月 2 日",
              "Steam 新品节 10 月场 —— 8 月 31 日前登记。试玩版 9 月 21 日截止",
              "Mobidictum Showcase（伊斯坦布尔）—— 8 月 31 日 · 免费。50 个 Indie Spot 与奖项",
              "IGF —— 约 9 月 7 日 · 75 美元（可申请豁免）。仅入围就有履历价值",
              "DevGAMM Awards —— 约 9 月 7 日 · 免费。150 名以上评审，11 月于 IGN 直播",
              "G-Star 独立游戏展区 —— 9 月内 · 免费。10 月 17 日通知入选",
              "Demospree —— 约 10 月 5 日 · 免费。1 月的试玩直播马拉松",
              "BGM Game Expo Winter（中国）—— 约 10 月 17 日 · 免费。12 月线下活动与奖项",
              "Day of the Devs 冬季场 —— 8 至 10 月 · 免费。策展制",
              "BitSummit 一般参展报名开始 —— 约 11 月 · 33,000 日元。一次一款",
              "台北 INDIE HOUSE 展位 —— 秋季 · 收费。展会在 1 月",
              "pitchyagame —— 11 月 · 免费。现场路演",
              "A MAZE. 柏林开始报名 —— 12 月 16 日 · 收费。1 月 31 日截止"
            ]
          }
        },
        {
          h: "2026 下半年 —— 开门的场合",
          p: ["与报名无关，下半年实际举办的展会。"],
          list: {
            h: "9 月至 12 月举办",
            items: [
              "东京电玩展 —— 9 月底",
              "PAX West —— 9 月初",
              "Steam 新品节 10 月场 —— 10 月 19 至 26 日",
              "gamescom asia x Thailand Game Show —— 10 月 29 日至 11 月 1 日，曼谷。2025 年我们以韩国馆展位参加过",
              "G-Star + G-CON —— 11 月 19 至 22 日，釜山",
              "DevGAMM 与 GWB 颁奖礼 —— 11 月",
              "BGM Game Expo Winter —— 12 月，中国"
            ]
          }
        },
        {
          h: "2027 上半年报名 —— 1 月到 3 月",
          p: ["这里是胜负所在。仅第一季度就有八个通道关闭。"],
          list: {
            h: "1 月至 3 月截止",
            items: [
              "Steam 新品节 2 月场 —— 约 1 月 5 日登记。开展前七周截止，且每款游戏一生只能参加一次",
              "gamescom latam BIG Festival —— 约 1 月 15 日 · 免费。圣保罗，17 个类别，4 月底举办",
              "NEOWIZ Quest —— 1 月 16 日 · 免费。总奖金 1.65 亿韩元",
              "A MAZE. 柏林 —— 1 月 31 日（延期至约 2 月 10 日）· 收费",
              "东京电玩展 SELECTED INDIE 80 开始报名 —— 2 月 10 日 · 免费。4 月 30 日截止",
              "Indie Arena Booth —— 3 至 4 月 · 收费，另有免费策展名额。约 100 名评审，4 月底至 5 月初通知",
              "G-Star 早鸟报名开始 —— 3 月 3 日 · 收费。展位费九折"
            ]
          }
        },
        {
          h: "2027 上半年报名 —— 4 月到 6 月",
          p: ["韩国的扶持项目与欧洲的独立游戏展位在这一段重叠。"],
          list: {
            h: "4 月至 6 月截止",
            items: [
              "Day of the Devs（Summer Game Fest 场）—— 约 4 月 6 日 · 免费。策展制",
              "Smilegate IndieGo —— 4 月 12 日 · 免费。1,000 万韩元",
              "Indie Arena Booth —— 约 4 月 20 日 · 收费。gamescom 共享展位",
              "东京电玩展 SELECTED INDIE 80 —— 4 月 30 日 · 免费。选出 80 款，自动进入 SOWN 候选",
              "Tiny Teams —— 约 4 月 30 日 · 免费。五人以下团队，须有试玩版",
              "G-Star 早鸟报名截止 —— 4 月 30 日 · 收费",
              "IndieCraft —— 5 月 6 日 · 免费。最高 4,000 万韩元",
              "NC VARCO —— 5 月 7 日 · 免费",
              "gamescom dev 独立游戏展 —— 5 月 8 日 · 免费。30 个名额中选 20 队。前身为 devcom，截止日不是 5 月 31 日",
              "BIC Festival —— 5 月 25 日 · 免费。釜山，8 月举办",
              "G-Star 一般报名开始 —— 5 月 26 日 · 收费",
              "gamescom asia 独立游戏 —— 约 6 月 15 日 · 收费。曼谷",
              "IndieCade 常规报名 —— 约 6 月中旬 · 135 美元。展会在 1 月",
              "GIGDC —— 6 月 25 日 · 免费",
              "LudoNarraCon —— 约 6 月 26 日 · 免费。以叙事为主，与我们的类型契合度较低",
              "G-Star 一般报名截止 —— 7 月 31 日 · 收费"
            ]
          }
        },
        {
          h: "2027 举办日程",
          p: ["报名成功后实际要去的日子。只列出已公布的日期。"],
          list: {
            h: "1 月至 11 月",
            items: [
              "台北电玩展 + INDIE HOUSE —— 1 月 21 至 24 日。Indie Game Award 颁奖礼在 1 月 20 日",
              "IndieCade 展会与 Demospree 直播 —— 1 月",
              "Steam 新品节 2 月场 —— 2 月",
              "GDC + IGF 颁奖 —— 3 月初，旧金山",
              "gamescom latam —— 4 月 30 日至 5 月 3 日，圣保罗",
              "A MAZE. 柏林 —— 5 月中旬",
              "BitSummit —— 5 月 21 至 23 日，京都",
              "Digital Dragons 与 Nordic Game —— 5 月",
              "Steam 新品节 6 月场 —— 6 月",
              "Develop:Brighton —— 7 月 13 至 15 日",
              "BIC Festival —— 8 月中旬，釜山",
              "gamescom dev 与 gamescom —— 8 月底，科隆",
              "东京电玩展 —— 9 月底",
              "G-Star —— 11 月，釜山"
            ]
          }
        },
        {
          h: "没有截止日期的常年通道",
          p: ["与日历无关，随时都能投。没有日期逼着走，也就意味着要靠我们自己在版本就绪的那一刻把它推出去。"],
          list: {
            h: "常年 6 种",
            items: [
              "Big Indie Pitch —— 免费。全年在多个城市举办，唯一常年开放的路演",
              "Epic MegaGrants —— 免费。虚幻引擎项目随时受理",
              "INDIE Live Expo —— 免费。每年两次，线上",
              "PAX Rising —— 收费。West / East / Aus 分别申请",
              "gamescom dev B2B 展台 —— 1,499 欧元。8 支独立团队，gamescom 4.1 馆",
              "Steam Direct —— 每款应用 100 美元，收入超过 1,000 美元后返还"
            ]
          }
        },
        {
          h: "我们按什么顺序去",
          p: [
            "对一人工作室来说，差旅与住宿比展位更贵。欧洲或北美的展会即使免费报名，实际成本也最高。所以顺序事先定好。",
            "主力始终是 Fighting Nations。格斗游戏在大型综合展会与奖项上有优势，在限定单一类型的 Steam 活动上则较弱。Kingdom Wars 是浏览器游戏，因此退出实体展位通道，改走策略类线上活动与免费 Steam 活动。"
          ],
          list: {
            h: "优先顺序",
            items: [
              "① 线上与评审制的免费通道 —— 不产生差旅费",
              "② 韩国国内 —— G-Star、BIC Festival",
              "③ 亚洲近距离 —— 台北、曼谷、京都",
              "④ 欧洲与北美 —— 入选时，或有随行支持时"
            ]
          }
        },
        {
          h: "什么已经确定，什么还没有",
          p: [
            "这一页是我们的挑战计划，不是入选名单。实际入选了哪些，等结果出来后写进首页的历程年表——一直以来我们都是这么做的。",
            "日期综合了各展会的公告与往年惯例。官方公告与此不同时，以公告为准，我们逐一确认后修正本页。",
            "最后更新：2026 年 8 月 19 日。"
          ]
        }
      ],
      slides: [
        "2025 年 10 月，gamescom asia x Thailand Game Show 韩国馆。下面的清单是我们接下来要去的地方。",
        "迪亚德展位的招牌与《Fighting Nations》海报。上面列出的展会，我们也打算这样去。",
        "在泰国游戏展与印度发行商会面。我们参展，最终就是为了促成这样的会面。",
        "我们带出去的游戏——Fighting Nations。上面列出的大多数通道都以这款游戏应征。",
        "每位格斗家代表一个国家及其武术传统。13 个国家的角色，只用赤手空拳。",
        "《Kingdom Wars》是浏览器游戏，因此跳过实体展位，改走线上活动。",
        "Taipei Indie Game Award 2027 申请画面 —— 2026 年 8 月 16 日。入围名单于 10 月 14 日公布。",
        "2025 年 10 月泰国游戏展的商务区入口 —— 上述行程最终通向的正是这样的场合。",
        "创始人 Kent Kim 在展位上介绍《Fighting Nations》。名单上的每场活动他都亲自到场。",
        "全球游戏挑战赛 2025 —— 2025 年 11 月 29 日，中央大学百年纪念馆。入选后真正站上的舞台。",
        "GGC「优秀独立游戏邀请展」的迪亚德展位，作为约 20 款入选作品之一受邀参展。",
        "来访者在展位上试玩《Fighting Nations》。",
        "2026 年 6 月 24 日，与仁川国际机场公社签署相生合作协议。为实现仁川机场 AI-PORT，我们是获选的三家初创企业之一。",
        "签约仪式上的创始人 Kent Kim。仁川国际机场公社 AI 大赛的最优秀奖促成了这次协议。"
      ],
      cta: "试玩我们送去参赛的游戏", back: "返回 Deother"
    },

    ja: {
      title: "年度別イベントロードマップ",
      tagline: "2026年後半から2027年まで、私たちが挑むイベントのすべて",
      intro: "応募できるトラックを38本すべて数え上げ、月ごとにカレンダーへ並べました。無料19・有料11・賞金あり6・通年2。以下は挑戦する計画であって、選出結果ではありません。結果はトップページの歩みの年表に順次書き入れます。",
      sections: [
        {
          h: "これまでに実際に出したもの",
          p: ["2025年5月以降、コンテストや支援事業に330件以上応募してきました。以下はそのうちゲーム・スタートアップ分野のみです。結果が出れば、この行の状態が変わります。"],
          list: {
            h: "応募履歴",
            items: [
              "2025年7月10日 · D.CAMP · 応募済み",
              "2025年7月10日 · 冠岳 S バレー スタートアップ スケールアップ デモデー · 応募済み",
              "2025年7月10日 · ハイムベンチャー · 応募済み",
              "2025年7月17日 · 日中韓スタートアップ競演大会 · 応募済み",
              "2025年7月17日 · SNU Connect Day × Antler Korea · 応募済み",
              "2025年7月18日 · BNK 創業投資コンペティション · 応募済み",
              "2025年7月21日 · 2025 中小ベンチャー企業 中東進出支援事業（ベンチャー企業協会） · 選外",
              "2025年7月23日 · Orange Planet 創業財団 · 応募済み",
              "2025年7月25日締切 · Supercent「ゲーム開発アカデミー with AI」 · 選外",
              "2025年7月28日 · 2025 コンテンツ・スタートアップ・バトルフィールド（韓国コンテンツ振興院） · 選外",
              "2025年7月28日締切 · G-Connection 共同館（台湾 TCCF・シンガポール ATF） · 応募済み",
              "2025年7月31日締切 · ゲームイン財団「AI を活用した韓国伝統遊び文化」コンテスト · 応募済み",
              "2025年8月4日 · 京畿グローバルゲームセンター 投資誘致力強化プログラム — 10社に選定 · ✅ 選定",
              "2025年8月18日締切 · 2025 韓国・ブルネイ スタートアップ ネットワーキング＆ピッチング大会（AI・ゲーム分野、6社選定） · 選外",
              "2025年8月19日 · 京畿コンテンツ振興院 ゲームコンテンツ ポップアップ展示 · ✅ 選定",
              "2025年8月19日 · コンテンツ IP マーケット 2025（COEX） · 応募済み",
              "2025年8月22日締切 · 2025 G-STAR 大田共同館 参加企業募集（大田情報文化産業振興院） · 選外",
              "2025年8月23日 · 2025 ソウル ゲームコンテスト（ソウル経済振興院） · 選外",
              "2025年8月27日締切 · 2025 順天 AI ゲームジャム · 選外",
              "2025年9月2日 · 第 1 回 NC AI VARCO 3D インディーゲームコンテスト — Fighting Nations · 選外",
              "2025年9月9日 · IGGK インディーゲームアワード · 応募済み",
              "2025年9月10日締切 · 第 17 回 Unity Awards（Most Anticipated Games 部門に掲載） — Fighting Nations: The Iron Dragon Tournament · 選外",
              "2025年9月11日 · 今月の優秀ゲーム（韓国コンテンツ振興院）— Fighting Nations · 選外",
              "2025年9月14日 · コンテンツ・ユニバース・コリア インディーゲームゾーン · 応募済み",
              "2025年9月15日締切 · Com2uS ホールディングス ゲームチャレンジ · 応募済み",
              "2025年9月16日 · 2025 京畿 AI コンテンツラボ コマーシャル映像 専門課程（京畿コンテンツ振興院）— 書類選考通過後に面接 · 選外",
              "2025年9月22日 · 韓国・アラブ スタートアップ ピッチ（韓国貿易協会） · 応募済み",
              "2025年9月23日 · Megazone Cloud 大中小企業 共同進出支援事業 — タイゲームショウ / gamescom asia 韓国館ブース · ✅ 選定",
              "2025年11月16日締切 · グローバル ゲーム チャレンジ 2025「優秀インディーゲーム招待展」（韓国ゲーム学会、約 20 作品を選定） · ✅ 選定",
              "2025年12月31日締切 · 第 2 回 Com2uS グローバル ゲーム開発コンテスト「Com:ON」 · 選外",
              "2025年12月31日 · 第 2 回 VARCO 活用ゲーム制作コンテスト Voice 編（NC AI） — Fighting Nations · 選外",
              "2026年1月16日 · NEOWIZ Quest — Fighting Nations · 応募済み",
              "2026年2月28日締切 · 海外著作権登録 支援事業 · 応募済み",
              "2026年3月12日締切 · ライセンシング・エキスポ 韓国館 · 応募済み",
              "2026年3月12日締切 · 2026 京畿創業公募 G-スター オーディション · 応募済み",
              "2026年3月21日 · Epic MegaGrants （上半期） · 応募済み",
              "2026年3月25日締切 · ゲームプラス 海外進出支援（韓国コンテンツ振興院） · 応募済み",
              "2026年3月27日締切 · 海外マーケット参加支援事業 · 応募済み",
              "2026年3月27日締切 · 2026 コリアコンテンツウィーク（KCW）中国進出 参加企業（韓国コンテンツ振興院） · 応募済み",
              "2026年3月31日締切 · 第 5 回 AI・公共データ活用 創業コンペティション · 応募済み",
              "2026年3月31日締切 · ゲームアイコン ソウル 2026 · 応募済み",
              "2026年4月1日締切 · ゲーム商用化支援事業 · 応募済み",
              "2026年4月3日 · gamescom asia 2026 韓国共同館（タイ） · 選外",
              "2026年4月3日 · gamescom 2026 韓国共同館（ドイツ） · 選外",
              "2026年4月3日 · 東京ゲームショウ 2026 韓国共同館 · 選外",
              "2026年4月3日 · ChinaJoy 2026 · 選外",
              "2026年4月3日締切 · 2026 大韓民国 革新創業賞 · 応募済み",
              "2026年4月12日締切 · スマイルゲート インディーゲームコンテスト · 応募済み",
              "2026年4月30日締切 · クアルコム AI イノベーター プログラム（QAIPI）2026-APAC — オンデバイス AI · 応募済み",
              "2026年5月7日締切 · ソウル プレイアップ AI ゲームチャレンジ · 応募済み",
              "2026年5月19日締切 · 2026 大韓民国コンテンツ大賞 — ストーリー部門（韓国コンテンツ振興院） · 応募済み",
              "2026年6月3日締切 · スマイルゲート メンバーシップ（SGM）インディーゲーム 18 期 · 応募済み",
              "2026年6月25日締切 · GIGDC 2026 グローバル インディーゲーム制作コンテスト — ミリバース · 応募済み",
              "2026年6月26日締切 · 文化体育観光 人工知能・データ活用コンテスト（韓国文化体育観光部） · 応募済み",
              "2026年7月20日 · スウェーデン ゲーム カンファレンス 2026 · 応募済み",
              "2026年7月31日締切 · 2026 京畿 バーチャル融合コンテンツ チャレンジ — ミリバース · 選外",
              "2026年8月15日 · GWB ゲームアワード（テンセント）— Fighting Nations · 応募済み、11月に授賞式",
              "2026年8月16日 · Taipei Indie Game Award 2027 — Fighting Nations · 応募済み、ファイナリスト発表は10月14日",
              "2026年8月16日 · Epic MegaGrants （下半期） — Fighting Nations · 応募済み、審査中",
              "2026年8月16日 · Xsolla Funding Club — Fighting Nations · 応募済み、審査中",
              "2026年8月17日 · 第 21 回 京畿ゲームオーディション — Fighting Nations · 応募済み",
              "2026年8月18日 · コンテンツ IP マーケット 2026（COEX、80 社選定） · 応募済み",
              "2026年8月18日 · ゲーミング イスタンブール GIST 2026（3 社選定）— Fighting Nations · 応募済み",
              "2026年8月18日 · Mobidictum インディーデスク 2026（イスタンブール）— Fighting Nations · 応募済み"
            ]
          }
        },
        {
          h: "これまでに得たもの",
          p: ["応募しただけではありません。必要な技術は自分で学びました。2019年の Unity ワークショップから始まり、2025年8月以降だけで十九の課程を修了しました — Unity とアンリアルエンジン、生成 AI とリアリティキャプチャ、ブロックチェーンと Solidity、eスポーツ大会企画、人工知能・デジタル資産の国際標準。その間に受賞も二つあります。"],
          list: {
            h: "修了課程と受賞",
            items: [
              "2019年12月11日 · Gamebridge Unityversity — Unity ゲーム開発 1 週間ワークショップ （Unity 2018.4 LTS、ソウル wcoding） · ✅ 修了",
              "2025年8月20日 · 京畿コンテンツ振興院「2025 京畿メタバースキャンパス」正規課程 — Unity 実務プロジェクト基盤 メタバースプラットフォーム コンテンツ制作 （100時間） · ✅ 修了",
              "2025年9月7日 · YTN ソウルタワー ショートフォーム動画コンテスト · 🏆 奨励賞",
              "2025年9月18日 · 京畿道経済科学振興院（GBSA）スタートアップ・アカデミー ディープテック —「データでつくるビジネスモデル：アイデアからプロトタイプまで」 · ✅ 修了",
              "2025年10月31日 · 韓国メタバース産業協会 — アンリアルエンジンによる生成 AI・リアリティキャプチャ活用コンテンツ制作課程 （60時間） · ✅ 修了",
              "2025年11月4日 · 京畿ゲームアカデミー 2025 力量強化課程 — 「AI 活用ゲーム開発者教育」第 9・10 回 · ✅ 修了",
              "2025年11月17日 · 光州eスポーツ教育院 — 「eスポーツ大会企画課程」 · ✅ 修了",
              "2026年4月23日 · トングラミ財団 AI アカデミー 3 期 — AI バイブコーディング （15時間） · ✅ 修了",
              "2026年4月29日 · 韓国情報通信技術協会（TTA）ICT 標準専門家養成教育 — 人工知能 国際標準化 基礎課程 （5時間） · ✅ 修了",
              "2026年4月29日 · 韓国情報通信技術協会（TTA）ICT 標準専門家養成教育 — 自動運転モビリティ国際標準化 基礎課程 （6時間） · ✅ 修了",
              "2026年4月29日 · 韓国情報通信技術協会（TTA）ICT 標準専門家養成教育 — 次世代セキュリティ・ブロックチェーン国際標準化 基礎課程 （4時間） · ✅ 修了",
              "2026年5月9日 · 韓国インターネット振興院（KISA）「2026 ブロックチェーン ミートアップデー — Solidity 言語の学習と活用計画」 · ✅ 修了",
              "2026年5月28日 · 韓国情報通信技術協会（TTA）「デジタル資産の未来と戦略」セミナー （4時間） · ✅ 修了",
              "2026年5月30日 · 韓国インターネット振興院（KISA）「2026 ブロックチェーン ミートアップデー — ブロックチェーン ウォレット開発」 · ✅ 修了",
              "2026年6月1日 · 「第107回 全国体育大会・第46回 全国障害者体育大会 in 済州」コンテスト 応援歌部門（済州特別自治道） · 🏆 優秀賞",
              "2026年6月13日 · 韓国インターネット振興院（KISA）「2026 ブロックチェーン ミートアップデー — 預金トークンの理解と機能実装」 · ✅ 修了",
              "2026年6月27日 · 韓国インターネット振興院（KISA）「2026 ブロックチェーン ミートアップデー — 分散型プライバシー基盤（DPP）の理解とセキュリティ実習」 · ✅ 修了",
              "2026年7月12日 · 韓国インターネット振興院（KISA）「2026 ブロックチェーン ミートアップデー — 生成 AI を活用したブロックチェーンサービス開発」 · ✅ 修了",
              "2026年7月23日 · 京畿コンテンツ振興院「2026 京畿 バーチャル融合キャンパス」正規課程 — アンリアルエンジンのビジュアルスクリプティング活用コンテンツ制作（20時間） · ✅ 修了",
              "2026年7月30日 · 京畿コンテンツ振興院「2026 京畿 バーチャル融合キャンパス」正規課程 — アンリアルエンジンによるシネマティック映像制作（20時間） · ✅ 修了",
              "2026年8月6日 · 京畿コンテンツ振興院「2026 京畿 バーチャル融合キャンパス」正規課程 — アンリアルエンジンと AI による AI NPC 制作（20時間） · ✅ 修了",
              "2026年8月13日 · 京畿コンテンツ振興院「2026 京畿 バーチャル融合キャンパス」正規課程 — 生成 AI によるアセット制作（20時間） · ✅ 修了",
            ]
          }
        },
        {
          h: "なぜ計画を公開するのか",
          p: [
            "ゲームを作ることと、そのゲームを人前に届けることは別の仕事です。一人スタジオで後者を場当たりにやると、その年が丸ごと消えます。だから応募できるトラックを全部数えてカレンダーに貼り、そのカレンダーをそのまま公開します。",
            "はっきりした傾向が一つありました。応募は年の前半に集中し、開催は後半です。38本のうち24本が1月から6月に締め切られます。8月に動き出したときには、その年の大半はもう過ぎています。2027年は1月から始めます。"
          ],
          list: {
            h: "38トラックの内訳",
            items: [
              "無料19 —— 選ばれれば出展費用は主催者が負担",
              "有料11 —— 参加費または小間料がかかる",
              "賞金・制作支援金つき6",
              "締め切りのない通年2"
            ]
          }
        },
        {
          h: "2026年後半 —— いま応募しているもの",
          p: ["このページをまとめた2026年8月時点で、まだ開いている、または間もなく開く応募です。"],
          list: {
            h: "8月〜12月締め切り",
            items: [
              "GWB Game Awards（テンセント）—— 8月中旬 · 無料。11月の授賞式とSteamイベントにつながります",
              "EVA Play（ブエノスアイレス）—— 8月17日ごろ · 無料。オンライン参加可",
              "Taipei Indie Game Award —— 8月19日 · 無料。1チーム1本、資料アップロードは8月26日〜9月2日",
              "Steam Next Fest 10月開催分の登録 —— 8月31日まで。デモは9月21日まで",
              "Mobidictum Showcase（イスタンブール）—— 8月31日 · 無料。Indie Spot 50枠と各賞",
              "IGF —— 9月7日ごろ · 75ドル（免除申請可）。ノミネートだけでも実績になります",
              "DevGAMM Awards —— 9月7日ごろ · 無料。審査員150名超、11月にIGNで配信",
              "G-STAR インディーショーケース —— 9月中 · 無料。選出通知は10月17日",
              "Demospree —— 10月5日ごろ · 無料。1月のデモ配信マラソン",
              "BGM Game Expo Winter（中国）—— 10月17日ごろ · 無料。12月のオフライン開催と各賞",
              "Day of the Devs 冬版 —— 8〜10月 · 無料。キュレーション制",
              "BitSummit 一般出展の応募開始 —— 11月ごろ · 33,000円。1回1タイトル",
              "台北 INDIE HOUSE ブース —— 秋 · 有料。開催は1月",
              "pitchyagame —— 11月 · 無料。ライブピッチ",
              "A MAZE. ベルリン 応募開始 —— 12月16日 · 有料。締め切りは1月31日"
            ]
          }
        },
        {
          h: "2026年後半 —— 扉が開く場",
          p: ["応募とは別に、後半に実際に開かれるイベントです。"],
          list: {
            h: "9月〜12月開催",
            items: [
              "東京ゲームショウ —— 9月下旬",
              "PAX West —— 9月上旬",
              "Steam Next Fest 10月版 —— 10月19〜26日",
              "gamescom asia x Thailand Game Show —— 10月29日〜11月1日、バンコク。2025年に韓国館ブースで出展した場です",
              "G-STAR + G-CON —— 11月19〜22日、釜山",
              "DevGAMM 授賞式・GWB 授賞式 —— 11月",
              "BGM Game Expo Winter —— 12月、中国"
            ]
          }
        },
        {
          h: "2027年前半の応募 —— 1月から3月",
          p: ["ここが勝負どころです。第1四半期だけで八つのトラックが閉まります。"],
          list: {
            h: "1月〜3月締め切り",
            items: [
              "Steam Next Fest 2月版の登録 —— 1月5日ごろ。開催7週間前が締め切りで、1タイトルにつき生涯1回だけです",
              "gamescom latam BIG Festival —— 1月15日ごろ · 無料。サンパウロ、17部門、4月末開催",
              "NEOWIZ Quest —— 1月16日 · 無料。総額1億6,500万ウォン",
              "A MAZE. ベルリン —— 1月31日（延長で2月10日ごろ）· 有料",
              "東京ゲームショウ SELECTED INDIE 80 応募開始 —— 2月10日 · 無料。締め切りは4月30日",
              "Indie Arena Booth —— 3〜4月 · 有料、無料のキュレーション枠あり。審査員およそ100名、通知は4月末〜5月初",
              "G-STAR 早期申込開始 —— 3月3日 · 有料。小間料10%割引"
            ]
          }
        },
        {
          h: "2027年前半の応募 —— 4月から6月",
          p: ["韓国の支援事業と欧州のインディーブースが重なる区間です。"],
          list: {
            h: "4月〜6月締め切り",
            items: [
              "Day of the Devs（Summer Game Fest版）—— 4月6日ごろ · 無料。キュレーション制",
              "Smilegate IndieGo —— 4月12日 · 無料。1,000万ウォン",
              "Indie Arena Booth —— 4月20日ごろ · 有料。gamescom の共同ブース",
              "東京ゲームショウ SELECTED INDIE 80 —— 4月30日 · 無料。80本選出、SOWN 候補に自動エントリー",
              "Tiny Teams —— 4月30日ごろ · 無料。5人以下のチーム、デモ必須",
              "G-STAR 早期申込締め切り —— 4月30日 · 有料",
              "IndieCraft —— 5月6日 · 無料。最大4,000万ウォン",
              "NC VARCO —— 5月7日 · 無料",
              "gamescom dev インディーエキスポ —— 5月8日 · 無料。30枠のうち20チーム。旧 devcom で、締め切りは5月31日ではありません",
              "BIC フェスティバル —— 5月25日 · 無料。釜山、8月開催",
              "G-STAR 一般申込開始 —— 5月26日 · 有料",
              "gamescom asia インディー —— 6月15日ごろ · 有料。バンコク",
              "IndieCade 通常応募 —— 6月中旬ごろ · 135ドル。フェスティバルは1月",
              "GIGDC —— 6月25日 · 無料",
              "LudoNarraCon —— 6月26日ごろ · 無料。ナラティブ中心で、私たちのジャンルとは相性が薄めです",
              "G-STAR 一般申込締め切り —— 7月31日 · 有料"
            ]
          }
        },
        {
          h: "2027年の開催日程",
          p: ["応募が通ったとき、実際に足を運ぶ日です。公表済みの日付だけを載せました。"],
          list: {
            h: "1月〜11月",
            items: [
              "台北ゲームショウ + INDIE HOUSE —— 1月21〜24日。Indie Game Award 授賞式は1月20日",
              "IndieCade フェスティバルと Demospree 配信 —— 1月",
              "Steam Next Fest 2月版 —— 2月",
              "GDC + IGF 授賞式 —— 3月上旬、サンフランシスコ",
              "gamescom latam —— 4月30日〜5月3日、サンパウロ",
              "A MAZE. ベルリン —— 5月中旬",
              "BitSummit —— 5月21〜23日、京都",
              "Digital Dragons・Nordic Game —— 5月",
              "Steam Next Fest 6月版 —— 6月",
              "Develop:Brighton —— 7月13〜15日",
              "BIC フェスティバル —— 8月中旬、釜山",
              "gamescom dev と gamescom —— 8月下旬、ケルン",
              "東京ゲームショウ —— 9月下旬",
              "G-STAR —— 11月、釜山"
            ]
          }
        },
        {
          h: "締め切りのない通年トラック",
          p: ["カレンダーとは関係なくいつでも出せます。日付に追われない代わりに、ビルドが整った瞬間に自分たちで押し込む必要があります。"],
          list: {
            h: "通年6種",
            items: [
              "Big Indie Pitch —— 無料。年間を通じて各都市で開かれる、唯一の常設ピッチ",
              "Epic MegaGrants —— 無料。Unreal プロジェクトを随時受付",
              "INDIE Live Expo —— 無料。年2回、オンライン",
              "PAX Rising —— 有料。West / East / Aus はそれぞれ別申込",
              "gamescom dev B2Bスタンド —— 1,499ユーロ。インディー8チーム、gamescom ホール4.1",
              "Steam Direct —— 1アプリ100ドル。売上が1,000ドルを超えると返還されます"
            ]
          }
        },
        {
          h: "どの順で挑むか",
          p: [
            "一人スタジオでは、小間料より移動と滞在の費用が大きくなります。欧州・北米の現地トラックは参加費が無料でも実際のコストが最も高い。だから順番をあらかじめ決めてあります。",
            "主力は Fighting Nations です。格闘ゲームは大型の総合フェスティバルや各賞に強く、ジャンルを絞ったSteamイベントには弱い。Kingdom Wars はブラウザゲームなので物理ブースのトラックからは外れ、ストラテジー系のオンラインイベントと無料のSteamイベントに回ります。"
          ],
          list: {
            h: "優先順位",
            items: [
              "① オンライン・審査型の無料トラック —— 移動費がかかりません",
              "② 国内 —— G-STAR、BIC フェスティバル",
              "③ アジア近距離 —— 台北、バンコク、京都",
              "④ 欧州・北米 —— 選出されたとき、または渡航支援がつくとき"
            ]
          }
        },
        {
          h: "何が確定で、何がそうでないか",
          p: [
            "このページは挑戦する計画です。選出結果ではありません。どこに通ったかは、結果が出てからトップページの歩みの年表に書きます——これまでもそうしてきました。",
            "日付は各イベントの告知と例年の日程を突き合わせて整理したものです。公式告知が違えば公式が正しく、確認でき次第このページを直します。",
            "最終更新：2026年8月19日。"
          ]
        }
      ],
      slides: [
        "2025年10月、gamescom asia x Thailand Game Show の韓国館。下の一覧はこれから向かう場所です。",
        "Deother ブースの看板と Fighting Nations のポスター。上に並べたイベントにも、こうして出ていくつもりです。",
        "タイ・ゲームショウでインドのパブリッシャーと。イベントに出る理由は、結局こういう席をつくるためです。",
        "私たちが持って出るゲーム — Fighting Nations。上の一覧の大半はこのタイトルで応募します。",
        "各ファイターは一つの国とその武術を背負います。13カ国のキャラクター、武器はありません。",
        "Kingdom Wars はブラウザゲームなので、物理ブースを外してオンラインイベントに回ります。",
        "Taipei Indie Game Award 2027 の応募画面——2026年8月16日。ファイナリスト発表は10月14日です。",
        "2025年10月、タイゲームショウのビジネスエリア入口。上の一覧が向かう先はこうした場です。",
        "ブースで Fighting Nations を紹介する代表の Kent Kim。一覧のどの催しにも自ら立ちます。",
        "グローバル ゲーム チャレンジ 2025 —— 2025年11月29日、中央大学校 100 周年記念館。選ばれて実際に立った場です。",
        "GGC「優秀インディーゲーム招待展」の Deother ブース。約 20 作品の選定作として招待されました。",
        "来場者がブースで Fighting Nations を実際にプレイ。",
        "2026年6月24日、仁川国際空港公社との相生協力協定。仁川空港 AI-PORT 実現のために選ばれた3社のスタートアップの一つです。",
        "協定式に出席した代表 Kent Kim。仁川国際空港公社 AI コンペの最優秀賞がこの協定につながりました。"
      ],
      cta: "出品作を遊んでみる", back: "Deother に戻る"
    },

    es: {
      title: "Hoja de ruta de ferias por año",
      tagline: "Todas las ferias a las que nos presentamos, de finales de 2026 a 2027",
      intro: "Contamos todas las convocatorias a las que podemos presentarnos —38— y las pusimos en un calendario: 19 gratuitas, 11 de pago, 6 con premio en metálico y 2 abiertas todo el año. Lo que sigue es un plan al que nos presentamos, no una lista de resultados. Los resultados se publican en la línea de tiempo de la portada según llegan.",
      sections: [
        {
          h: "Lo que ya hemos presentado",
          p: ["Desde mayo de 2025 hemos presentado más de 330 candidaturas a concursos y programas de apoyo. Abajo figuran solo las de videojuegos y emprendimiento; cuando lleguen los resultados, cambiará el estado de estas líneas."],
          list: {
            h: "Registro de envíos",
            items: [
              "10 de julio de 2025 · D.CAMP · presentado",
              "10 de julio de 2025 · Gwanak S-Valley Startup Scale-Up Demo Day · presentado",
              "10 de julio de 2025 · Haim Ventures · presentado",
              "17 de julio de 2025 · Concurso de Startups Corea–China–Japón · presentado",
              "17 de julio de 2025 · SNU Connect Day × Antler Korea · presentado",
              "18 de julio de 2025 · Concurso de Inversión en Startups BNK · presentado",
              "23 de julio de 2025 · Fundación de Startups Orange Planet · presentado",
              "cierre 25 de julio de 2025 · Supercent — Game Development Academy with AI · no seleccionado",
              "cierre 28 de julio de 2025 · Pabellón conjunto G-Connection (TCCF Taiwán · ATF Singapur) · presentado",
              "cierre 31 de julio de 2025 · Concurso de la Fundación Game-in — juegos tradicionales coreanos con IA · presentado",
              "4 de agosto de 2025 · Gyeonggi Global Game Center — programa de preparación para inversión, uno de los 10 estudios seleccionados · ✅ seleccionado",
              "19 de agosto de 2025 · Exposición pop-up de contenidos de juego de la Agencia de Contenidos de Gyeonggi · ✅ seleccionado",
              "19 de agosto de 2025 · Content IP Market 2025 (COEX) · presentado",
              "cierre 22 de agosto de 2025 · Pabellón conjunto de Daejeon en G-STAR 2025 (Agencia de Promoción de Daejeon) · no seleccionado",
              "23 de agosto de 2025 · Seoul Game Contest 2025 (Seoul Business Agency) · no seleccionado",
              "cierre 27 de agosto de 2025 · Suncheon AI Game Jam 2025 · no seleccionado",
              "2 de septiembre de 2025 · 1.er Concurso de Juegos Indie 3D NC AI VARCO — Fighting Nations · no seleccionado",
              "cierre 31 de diciembre de 2025 · 2.º Concurso Global de Desarrollo de Juegos de Com2uS — Com:ON · no seleccionado",
              "9 de septiembre de 2025 · IGGK Indie Game Awards · presentado",
              "11 de septiembre de 2025 · Premio Juego del Mes (KOCCA) — Fighting Nations · no seleccionado",
              "14 de septiembre de 2025 · Zona de Juegos Indie de Contents Universe Korea · presentado",
              "cierre 15 de septiembre de 2025 · Com2uS Holdings Game Challenge · presentado",
              "16 de septiembre de 2025 · Gyeonggi AI Content Lab 2025, itinerario de vídeo comercial (Agencia de Contenidos de Gyeonggi): superada la fase documental, después entrevista · no seleccionado",
              "22 de septiembre de 2025 · Korea–Arab Startup Pitch Competition (KITA) · presentado",
              "23 de septiembre de 2025 · Programa de expansión conjunta de Megazone Cloud — stand del pabellón coreano en Thailand Game Show / gamescom asia · ✅ seleccionado",
              "cierre 16 de noviembre de 2025 · Global Game Challenge 2025, Muestra de Juegos Indie Destacados (Korean Game Society, unos 20 títulos seleccionados) · ✅ seleccionado",
              "31 de diciembre de 2025 · 2.º Concurso de Creación de Juegos con VARCO, edición Voice (NC AI) — Fighting Nations · no seleccionado",
              "16 de enero de 2026 · NEOWIZ Quest — Fighting Nations · presentado",
              "cierre 28 de febrero de 2026 · Programa de apoyo al registro de derechos de autor en el extranjero · presentado",
              "cierre 12 de marzo de 2026 · Pabellón coreano de Licensing Expo · presentado",
              "cierre 12 de marzo de 2026 · Concurso de Startups de Gyeonggi 2026 — Audición G-Star · presentado",
              "21 de marzo de 2026 · Epic MegaGrants (1.er semestre) · presentado",
              "cierre 25 de marzo de 2026 · Game Plus — apoyo al lanzamiento internacional (KOCCA) · presentado",
              "cierre 27 de marzo de 2026 · Programa de apoyo a la participación en mercados exteriores · presentado",
              "cierre 27 de marzo de 2026 · Korea Contents Week 2026 (KCW) — entrada al mercado chino, KOCCA · presentado",
              "cierre 31 de marzo de 2026 · 5.º Concurso de Emprendimiento con IA y Datos Públicos · presentado",
              "cierre 31 de marzo de 2026 · Game Icon Seoul 2026 · presentado",
              "cierre 1 de abril de 2026 · Programa de apoyo a la comercialización de videojuegos · presentado",
              "cierre 3 de abril de 2026 · Premios de Innovación Emprendedora de Corea 2026 · presentado",
              "cierre 12 de abril de 2026 · Concurso de Juegos Indie de Smilegate · presentado",
              "cierre 30 de abril de 2026 · Qualcomm AI Innovator Program (QAIPI) 2026-APAC — IA en el dispositivo · presentado",
              "cierre 7 de mayo de 2026 · Seoul Play Up AI Game Challenge · presentado",
              "cierre 19 de mayo de 2026 · Premios de Contenidos de Corea 2026 — categoría Historia (KOCCA) · presentado",
              "cierre 3 de junio de 2026 · Smilegate Membership (SGM), 18.ª promoción indie · presentado",
              "15 de agosto de 2026 · GWB Game Awards (Tencent) — Fighting Nations · presentado; gala en noviembre",
              "16 de agosto de 2026 · Taipei Indie Game Award 2027 — Fighting Nations · presentado; finalistas el 14 de octubre",
              "16 de agosto de 2026 · Epic MegaGrants (2.º semestre) — Fighting Nations · presentado, en revisión",
              "16 de agosto de 2026 · Xsolla Funding Club — Fighting Nations · presentado, en revisión",
              "3 de abril de 2026 · Pabellón coreano de gamescom asia 2026 (Tailandia) · no seleccionado",
              "3 de abril de 2026 · Pabellón coreano de gamescom 2026 (Alemania) · no seleccionado",
              "3 de abril de 2026 · Pabellón coreano del Tokyo Game Show 2026 · no seleccionado",
              "20 de julio de 2026 · Sweden Game Conference 2026 · presentado",
              "18 de agosto de 2026 · Gaming Istanbul GIST 2026 (3 empresas seleccionadas) — Fighting Nations · presentado",
              "18 de agosto de 2026 · Mobidictum Indie Desk 2026 (Estambul) — Fighting Nations · presentado",
              "cierre 10 de septiembre de 2025 · 17.ª edición de los Unity Awards (incluido en Most Anticipated Games) — Fighting Nations: The Iron Dragon Tournament · no seleccionado",
              "21 de julio de 2025 · Programa 2025 de entrada en Oriente Medio para pymes (Korea Venture Business Association) · no seleccionado",
              "28 de julio de 2025 · 2025 Content Startup Battlefield (KOCCA) · no seleccionado",
              "cierre 18 de agosto de 2025 · 2025 Korea–Brunei Startup Networking and Pitching Competition (IA y videojuegos, 6 seleccionadas) · no seleccionado",
              "17 de agosto de 2026 · 21.ª Gyeonggi Game Audition — Fighting Nations · presentado",
              "18 de agosto de 2026 · Content IP Market 2026 (COEX, 80 empresas seleccionadas) · presentado",
              "cierre 25 de junio de 2026 · GIGDC 2026 Global Indie Game Making Contest — Miliverse · presentado",
              "cierre 26 de junio de 2026 · Concurso de IA y datos de Cultura, Deporte y Turismo (Ministerio de Cultura, Deporte y Turismo) · presentado",
              "cierre 31 de julio de 2026 · 2026 Gyeonggi Virtual-Convergence Content Challenge — Miliverse · no seleccionado",
              "3 de abril de 2026 · ChinaJoy 2026 · no seleccionado"
            ]
          }
        },
        {
          h: "Lo que hemos obtenido",
          p: ["No solo enviamos candidaturas: aprendimos lo que hacía falta. Empezó con un taller de Unity de una semana en 2019 y, solo desde agosto de 2025, hemos completado diecinueve cursos más —Unity y Unreal Engine, IA generativa y captura de realidad, blockchain y Solidity, planificación de torneos de esports, estándares internacionales de IA y activos digitales— y dos premios por el camino."],
          list: {
            h: "Cursos completados y premios",
            items: [
              "11 de diciembre de 2019 · Gamebridge Unityversity — taller de una semana de desarrollo de videojuegos con Unity (Unity 2018.4 LTS, wcoding Seúl) · ✅ completado",
              "20 de agosto de 2025 · Agencia de Contenidos de Gyeonggi — Gyeonggi Metaverse Campus 2025: producción de contenidos para plataformas de metaverso con Unity, basada en proyectos (100 horas) · ✅ completado",
              "7 de septiembre de 2025 · Concurso de vídeos cortos de la YTN Seoul Tower · 🏆 Premio de Aliento",
              "18 de septiembre de 2025 · Gyeonggi Business & Science Accelerator (GBSA), academia deep tech — Modelos de negocio a partir de datos: de la idea al prototipo · ✅ completado",
              "31 de octubre de 2025 · Asociación Coreana de la Industria del Metaverso — producción de contenidos con IA generativa sobre Unreal y captura de realidad (60 horas) · ✅ completado",
              "4 de noviembre de 2025 · Gyeonggi Game Academy 2025 — formación de desarrolladores de juegos con IA (sesiones 9 y 10) · ✅ completado",
              "17 de noviembre de 2025 · Academia de Esports de Gwangju — curso de planificación de torneos de esports · ✅ completado",
              "23 de abril de 2026 · The Circle Foundation AI Academy, 3.ª promoción — AI vibe coding (15 horas) · ✅ completado",
              "29 de abril de 2026 · Asociación de Tecnología de Telecomunicaciones (TTA) — formación en estándares TIC: normalización internacional de inteligencia artificial (5 horas) · ✅ completado",
              "29 de abril de 2026 · Asociación de Tecnología de Telecomunicaciones (TTA) — formación en estándares TIC: normalización internacional de movilidad autónoma (6 horas) · ✅ completado",
              "29 de abril de 2026 · Asociación de Tecnología de Telecomunicaciones (TTA) — formación en estándares TIC: normalización internacional de seguridad de nueva generación y blockchain (4 horas) · ✅ completado",
              "9 de mayo de 2026 · Agencia de Internet y Seguridad de Corea (KISA) — Blockchain Meetup Day 2026: aprender Solidity y planificar su uso · ✅ completado",
              "28 de mayo de 2026 · Asociación de Tecnología de Telecomunicaciones (TTA) — El futuro y la estrategia de los activos digitales (4 horas) · ✅ completado",
              "30 de mayo de 2026 · Agencia de Internet y Seguridad de Corea (KISA) — Blockchain Meetup Day 2026: desarrollar una cartera blockchain · ✅ completado",
              "1 de junio de 2026 · 107.º Festival Nacional de Deportes y 46.º Juegos Paranacionales en Jeju — categoría de canción de ánimo (Provincia de Jeju) · 🏆 Premio de Excelencia",
              "13 de junio de 2026 · Agencia de Internet y Seguridad de Corea (KISA) — Blockchain Meetup Day 2026: comprensión e implementación de tokens de depósito · ✅ completado",
              "27 de junio de 2026 · Agencia de Internet y Seguridad de Corea (KISA) — Blockchain Meetup Day 2026: plataformas de privacidad descentralizadas (DPP) y práctica de seguridad · ✅ completado",
              "12 de julio de 2026 · Agencia de Internet y Seguridad de Corea (KISA) — Blockchain Meetup Day 2026: servicios blockchain con IA generativa · ✅ completado",
              "23 de julio de 2026 · Agencia de Contenidos de Gyeonggi — Gyeonggi Metaverse Campus 2026: contenidos con scripting visual de Unreal Engine (20 horas) · ✅ completado",
              "30 de julio de 2026 · Agencia de Contenidos de Gyeonggi — Gyeonggi Metaverse Campus 2026: cine con Unreal Engine (20 horas) · ✅ completado",
              "6 de agosto de 2026 · Agencia de Contenidos de Gyeonggi — Gyeonggi Metaverse Campus 2026: NPC con IA en Unreal Engine (20 horas) · ✅ completado",
              "13 de agosto de 2026 · Agencia de Contenidos de Gyeonggi — Gyeonggi Metaverse Campus 2026: creación de assets con IA generativa (20 horas) · ✅ completado",
            ]
          }
        },
        {
          h: "Por qué publicamos el plan",
          p: [
            "Hacer un juego y ponerlo delante de la gente son dos trabajos distintos. En un estudio de una sola persona, improvisar el segundo cuesta un año entero. Así que contamos todas las convocatorias posibles, las clavamos en un calendario y publicamos ese calendario tal cual.",
            "Apareció un patrón. Las inscripciones se concentran en el primer semestre; las ferias ocurren en el segundo. 24 de las 38 cierran entre enero y junio. Si empiezas a moverte en agosto, ese año ya se ha ido casi entero. Para 2027 empezamos en enero."
          ],
          list: {
            h: "Cómo se reparten las 38 convocatorias",
            items: [
              "19 gratuitas: si te seleccionan, la organización cubre el coste de exposición",
              "11 de pago: cuota de inscripción o de stand",
              "6 con premio en metálico o ayuda a la producción",
              "2 abiertas todo el año, sin fecha límite"
            ]
          }
        },
        {
          h: "Finales de 2026: a lo que nos presentamos ahora",
          p: ["Abiertas o a punto de abrirse, a fecha de agosto de 2026, cuando se preparó esta página."],
          list: {
            h: "Cierran de agosto a diciembre",
            items: [
              "GWB Game Awards (Tencent): mediados de agosto · gratis. Lleva a una gala en noviembre y a un evento en Steam",
              "EVA Play (Buenos Aires): hacia el 17 de agosto · gratis. Se puede participar en remoto",
              "Taipei Indie Game Award: 19 de agosto · gratis. Una entrada por equipo; materiales del 26 de agosto al 2 de septiembre",
              "Steam Next Fest, edición de octubre: registro hasta el 31 de agosto. Demo antes del 21 de septiembre",
              "Mobidictum Showcase (Estambul): 31 de agosto · gratis. 50 Indie Spots y premios",
              "IGF: hacia el 7 de septiembre · 75 $ (se puede pedir exención). Solo la nominación ya cuenta",
              "DevGAMM Awards: hacia el 7 de septiembre · gratis. Más de 150 jurados, emisión en IGN en noviembre",
              "G-Star Indie Showcase: durante septiembre · gratis. Selección el 17 de octubre",
              "Demospree: hacia el 5 de octubre · gratis. Maratón de demos en directo en enero",
              "BGM Game Expo Winter (China): hacia el 17 de octubre · gratis. Feria en diciembre y premios",
              "Day of the Devs, edición de invierno: de agosto a octubre · gratis. Con curaduría",
              "BitSummit, apertura de inscripción general: hacia noviembre · 33.000 ¥. Un título por inscripción",
              "Stand de Taipei INDIE HOUSE: otoño · de pago. La feria es en enero",
              "pitchyagame: noviembre · gratis. Pitching en directo",
              "A MAZE. Berlín abre: 16 de diciembre · de pago. Cierra el 31 de enero"
            ]
          }
        },
        {
          h: "Finales de 2026: dónde se abren las puertas",
          p: ["Al margen de las inscripciones, estas son las ferias que se celebran en el segundo semestre."],
          list: {
            h: "De septiembre a diciembre",
            items: [
              "Tokyo Game Show: finales de septiembre",
              "PAX West: principios de septiembre",
              "Steam Next Fest, edición de octubre: 19-26 de octubre",
              "gamescom asia x Thailand Game Show: 29 de octubre-1 de noviembre, Bangkok. La feria en la que expusimos en el pabellón coreano en 2025",
              "G-Star + G-CON: 19-22 de noviembre, Busan",
              "Galas de DevGAMM y GWB: noviembre",
              "BGM Game Expo Winter: diciembre, China"
            ]
          }
        },
        {
          h: "Inscripciones 2027: de enero a marzo",
          p: ["Aquí se decide el año. Solo en el primer trimestre cierran ocho convocatorias."],
          list: {
            h: "Cierran de enero a marzo",
            items: [
              "Steam Next Fest, edición de febrero: registro hacia el 5 de enero. Cierra siete semanas antes del evento, y un juego solo puede hacerlo una vez en su vida",
              "gamescom latam BIG Festival: hacia el 15 de enero · gratis. São Paulo, 17 categorías, se celebra a finales de abril",
              "NEOWIZ Quest: 16 de enero · gratis. 165 millones de wones en premios",
              "A MAZE. Berlín: 31 de enero (prórroga hasta el 10 de febrero aprox.) · de pago",
              "Tokyo Game Show SELECTED INDIE 80 abre: 10 de febrero · gratis. Cierra el 30 de abril",
              "Indie Arena Booth: marzo-abril · de pago, más plazas gratuitas con curaduría. Unos 100 jurados; respuesta entre finales de abril y principios de mayo",
              "G-Star, inscripción anticipada: 3 de marzo · de pago. 10 % de descuento en el stand"
            ]
          }
        },
        {
          h: "Inscripciones 2027: de abril a junio",
          p: ["Aquí se solapan los programas de ayudas coreanos y los stands indie europeos."],
          list: {
            h: "Cierran de abril a junio",
            items: [
              "Day of the Devs (edición Summer Game Fest): hacia el 6 de abril · gratis. Con curaduría",
              "Smilegate IndieGo: 12 de abril · gratis. 10 millones de wones",
              "Indie Arena Booth: hacia el 20 de abril · de pago. Stand compartido en gamescom",
              "Tokyo Game Show SELECTED INDIE 80: 30 de abril · gratis. 80 seleccionados, con entrada automática a SOWN",
              "Tiny Teams: hacia el 30 de abril · gratis. Equipos de cinco o menos, demo obligatoria",
              "G-Star, cierre de inscripción anticipada: 30 de abril · de pago",
              "IndieCraft: 6 de mayo · gratis. Hasta 40 millones de wones",
              "NC VARCO: 7 de mayo · gratis",
              "gamescom dev Indie Expo: 8 de mayo · gratis. 20 equipos de 30 plazas. Antes devcom, y la fecha límite no es el 31 de mayo",
              "BIC Festival: 25 de mayo · gratis. Busan, se celebra en agosto",
              "G-Star, inscripción general: 26 de mayo · de pago",
              "gamescom asia indie: hacia el 15 de junio · de pago. Bangkok",
              "IndieCade, convocatoria regular: hacia mediados de junio · 135 $. El festival es en enero",
              "GIGDC: 25 de junio · gratis",
              "LudoNarraCon: hacia el 26 de junio · gratis. Centrado en narrativa, encaja peor con nuestro género",
              "G-Star, cierre de inscripción general: 31 de julio · de pago"
            ]
          }
        },
        {
          h: "Fechas de las ferias de 2027",
          p: ["Dónde hay que estar físicamente si salen las inscripciones. Solo figuran las fechas ya anunciadas."],
          list: {
            h: "De enero a noviembre",
            items: [
              "Taipei Game Show + INDIE HOUSE: 21-24 de enero. Gala del Indie Game Award el 20 de enero",
              "Festival IndieCade y emisión de Demospree: enero",
              "Steam Next Fest, edición de febrero: febrero",
              "GDC + premios IGF: principios de marzo, San Francisco",
              "gamescom latam: 30 de abril-3 de mayo, São Paulo",
              "A MAZE. Berlín: mediados de mayo",
              "BitSummit: 21-23 de mayo, Kioto",
              "Digital Dragons y Nordic Game: mayo",
              "Steam Next Fest, edición de junio: junio",
              "Develop:Brighton: 13-15 de julio",
              "BIC Festival: mediados de agosto, Busan",
              "gamescom dev y gamescom: finales de agosto, Colonia",
              "Tokyo Game Show: finales de septiembre",
              "G-Star: noviembre, Busan"
            ]
          }
        },
        {
          h: "Convocatorias sin fecha límite",
          p: ["Están abiertas al margen del calendario. Nada obliga a una fecha, lo que significa que tenemos que empujarnos nosotros mismos en cuanto la build esté lista."],
          list: {
            h: "Seis convocatorias permanentes",
            items: [
              "Big Indie Pitch: gratis. Se celebra en varias ciudades todo el año; el único pitch permanentemente abierto",
              "Epic MegaGrants: gratis. Convocatoria continua para proyectos en Unreal",
              "INDIE Live Expo: gratis. Dos veces al año, en línea",
              "PAX Rising: de pago. West / East / Aus se solicitan por separado",
              "Stand B2B de gamescom dev: 1.499 €. Ocho equipos indie, pabellón 4.1 de gamescom",
              "Steam Direct: 100 $ por aplicación, recuperables cuando el juego supera los 1.000 $ de ingresos"
            ]
          }
        },
        {
          h: "En qué orden vamos",
          p: [
            "Para un estudio de una persona, los viajes y el alojamiento cuestan más que el stand. Una feria europea o norteamericana es la más cara aunque la entrada sea gratuita. Por eso el orden está fijado de antemano.",
            "Fighting Nations encabeza todas las convocatorias. Un juego de lucha es fuerte en las grandes ferias generalistas y en los premios, y débil en los eventos de Steam construidos en torno a un solo género. Kingdom Wars corre en navegador, así que queda fuera de los stands físicos y va a eventos en línea de estrategia y a eventos gratuitos de Steam."
          ],
          list: {
            h: "Prioridad",
            items: [
              "1. Convocatorias gratuitas en línea y con jurado: sin coste de viaje",
              "2. Corea: G-Star, BIC Festival",
              "3. Asia cercana: Taipéi, Bangkok, Kioto",
              "4. Europa y Norteamérica: cuando nos seleccionen, o cuando venga con apoyo al viaje"
            ]
          }
        },
        {
          h: "Qué está cerrado y qué no",
          p: [
            "Esta página es un plan al que nos presentamos. No es una lista de resultados. Dónde nos aceptan de verdad se publica en la línea de tiempo de la portada cuando lo sabemos: así lo hemos hecho hasta ahora.",
            "Las fechas combinan los anuncios de cada evento con el calendario que han mantenido en años anteriores. Si un anuncio oficial dice otra cosa, manda el anuncio, y corregimos esta página a medida que lo confirmamos.",
            "Última actualización: 19 de agosto de 2026."
          ]
        }
      ],
      slides: [
        "El pabellón coreano en gamescom asia x Thailand Game Show, octubre de 2025. La lista de abajo es adonde vamos ahora.",
        "El rótulo de nuestro stand y el póster de Fighting Nations. Así es como pensamos presentarnos en las ferias de arriba.",
        "Reunión con una distribuidora india en Thailand Game Show. Salas como esta son la razón por la que vamos.",
        "El juego que llevamos con nosotros: Fighting Nations. La mayoría de las convocatorias de arriba se presentan con este título.",
        "Cada luchador representa a un país y su tradición marcial. Personajes de 13 países, solo a puño limpio.",
        "Kingdom Wars corre en navegador, así que se salta los stands físicos y va a eventos en línea.",
        "La solicitud del Taipei Indie Game Award 2027, 16 de agosto de 2026. Los finalistas se anuncian el 14 de octubre.",
        "La entrada a la zona de negocios del Thailand Game Show, octubre de 2025: a esto llevan las citas de la lista.",
        "El fundador, Kent Kim, presentando Fighting Nations en el stand. Atiende en persona cada convocatoria de la lista.",
        "Global Game Challenge 2025, el 29 de noviembre de 2025 en la Universidad Chung-Ang, Seúl. Un sitio al que llegamos por selección.",
        "Nuestro stand en la Muestra de Juegos Indie Destacados del GGC, invitados entre unos 20 títulos seleccionados.",
        "Un visitante juega a Fighting Nations en el stand.",
        "24 de junio de 2026: acuerdo de cooperación con la Corporación del Aeropuerto Internacional de Incheon. Deother es una de las tres startups elegidas para hacer realidad el AI-PORT del aeropuerto.",
        "El fundador Kent Kim en la firma. El primer premio en el concurso de IA de la corporación aeroportuaria condujo a este acuerdo."
      ],
      cta: "Juega al juego que presentamos", back: "Volver a Deother"
    },

    pt: {
      title: "Roteiro de eventos por ano",
      tagline: "Todos os eventos a que nos candidatamos, de finais de 2026 a 2027",
      intro: "Contámos todas as candidaturas a que podemos concorrer — 38 — e pusemo-las num calendário: 19 gratuitas, 11 pagas, 6 com prémio monetário e 2 abertas todo o ano. O que se segue é um plano a que nos candidatamos, não uma lista de resultados. Os resultados vão para a cronologia da página inicial à medida que chegam.",
      sections: [
        {
          h: "O que já submetemos",
          p: ["Desde maio de 2025 submetemos mais de 330 candidaturas a concursos e programas de apoio. Abaixo constam apenas as de jogos e empreendedorismo; quando saírem os resultados, o estado destas linhas muda."],
          list: {
            h: "Registo de submissões",
            items: [
              "10 de julho de 2025 · D.CAMP · submetido",
              "10 de julho de 2025 · Gwanak S-Valley Startup Scale-Up Demo Day · submetido",
              "10 de julho de 2025 · Haim Ventures · submetido",
              "17 de julho de 2025 · Concurso de Startups Coreia–China–Japão · submetido",
              "17 de julho de 2025 · SNU Connect Day × Antler Korea · submetido",
              "18 de julho de 2025 · Concurso de Investimento em Startups BNK · submetido",
              "23 de julho de 2025 · Fundação de Startups Orange Planet · submetido",
              "prazo 25 de julho de 2025 · Supercent — Game Development Academy with AI · não selecionado",
              "prazo 28 de julho de 2025 · Pavilhão conjunto G-Connection (TCCF Taiwan · ATF Singapura) · submetido",
              "prazo 31 de julho de 2025 · Concurso da Fundação Game-in — jogos tradicionais coreanos com IA · submetido",
              "4 de agosto de 2025 · Gyeonggi Global Game Center — programa de preparação para investimento, um dos 10 estúdios selecionados · ✅ selecionado",
              "19 de agosto de 2025 · Exposição pop-up de conteúdos de jogos da Agência de Conteúdos de Gyeonggi · ✅ selecionado",
              "19 de agosto de 2025 · Content IP Market 2025 (COEX) · submetido",
              "prazo 22 de agosto de 2025 · Pavilhão conjunto de Daejeon na G-STAR 2025 (Agência de Promoção de Daejeon) · não selecionado",
              "23 de agosto de 2025 · Seoul Game Contest 2025 (Seoul Business Agency) · não selecionado",
              "prazo 27 de agosto de 2025 · Suncheon AI Game Jam 2025 · não selecionado",
              "2 de setembro de 2025 · 1.º Concurso de Jogos Indie 3D NC AI VARCO — Fighting Nations · não selecionado",
              "prazo 31 de dezembro de 2025 · 2.º Concurso Global de Desenvolvimento de Jogos da Com2uS — Com:ON · não selecionado",
              "9 de setembro de 2025 · IGGK Indie Game Awards · submetido",
              "11 de setembro de 2025 · Prémio Jogo do Mês (KOCCA) — Fighting Nations · não selecionado",
              "14 de setembro de 2025 · Zona de Jogos Indie da Contents Universe Korea · submetido",
              "prazo 15 de setembro de 2025 · Com2uS Holdings Game Challenge · submetido",
              "16 de setembro de 2025 · Gyeonggi AI Content Lab 2025, percurso de vídeo comercial (Agência de Conteúdos de Gyeonggi): aprovado na triagem documental, depois entrevista · não selecionado",
              "22 de setembro de 2025 · Korea–Arab Startup Pitch Competition (KITA) · submetido",
              "23 de setembro de 2025 · Programa de expansão conjunta da Megazone Cloud — stand do pavilhão coreano na Thailand Game Show / gamescom asia · ✅ selecionado",
              "prazo 16 de novembro de 2025 · Global Game Challenge 2025, Mostra de Jogos Indie em Destaque (Korean Game Society, cerca de 20 títulos selecionados) · ✅ selecionado",
              "31 de dezembro de 2025 · 2.º Concurso de Criação de Jogos com VARCO, edição Voice (NC AI) — Fighting Nations · não selecionado",
              "16 de janeiro de 2026 · NEOWIZ Quest — Fighting Nations · submetido",
              "prazo 28 de fevereiro de 2026 · Programa de apoio ao registo de direitos de autor no estrangeiro · submetido",
              "prazo 12 de março de 2026 · Pavilhão coreano da Licensing Expo · submetido",
              "prazo 12 de março de 2026 · Concurso de Startups de Gyeonggi 2026 — Audição G-Star · submetido",
              "21 de março de 2026 · Epic MegaGrants (1.º semestre) · submetido",
              "prazo 25 de março de 2026 · Game Plus — apoio ao lançamento internacional (KOCCA) · submetido",
              "prazo 27 de março de 2026 · Programa de apoio à participação em mercados internacionais · submetido",
              "prazo 27 de março de 2026 · Korea Contents Week 2026 (KCW) — entrada no mercado chinês, KOCCA · submetido",
              "prazo 31 de março de 2026 · 5.º Concurso de Empreendedorismo com IA e Dados Públicos · submetido",
              "prazo 31 de março de 2026 · Game Icon Seoul 2026 · submetido",
              "prazo 1 de abril de 2026 · Programa de apoio à comercialização de jogos · submetido",
              "prazo 3 de abril de 2026 · Prémios de Inovação Empreendedora da Coreia 2026 · submetido",
              "prazo 12 de abril de 2026 · Concurso de Jogos Indie da Smilegate · submetido",
              "prazo 30 de abril de 2026 · Qualcomm AI Innovator Program (QAIPI) 2026-APAC — IA no dispositivo · submetido",
              "prazo 7 de maio de 2026 · Seoul Play Up AI Game Challenge · submetido",
              "prazo 19 de maio de 2026 · Prémios de Conteúdos da Coreia 2026 — categoria História (KOCCA) · submetido",
              "prazo 3 de junho de 2026 · Smilegate Membership (SGM), 18.ª turma indie · submetido",
              "15 de agosto de 2026 · GWB Game Awards (Tencent) — Fighting Nations · submetido; gala em novembro",
              "16 de agosto de 2026 · Taipei Indie Game Award 2027 — Fighting Nations · submetido; finalistas a 14 de outubro",
              "16 de agosto de 2026 · Epic MegaGrants (2.º semestre) — Fighting Nations · submetido, em análise",
              "16 de agosto de 2026 · Xsolla Funding Club — Fighting Nations · submetido, em análise",
              "3 de abril de 2026 · Pavilhão coreano da gamescom asia 2026 (Tailândia) · não selecionado",
              "3 de abril de 2026 · Pavilhão coreano da gamescom 2026 (Alemanha) · não selecionado",
              "3 de abril de 2026 · Pavilhão coreano da Tokyo Game Show 2026 · não selecionado",
              "20 de julho de 2026 · Sweden Game Conference 2026 · submetido",
              "18 de agosto de 2026 · Gaming Istanbul GIST 2026 (3 empresas selecionadas) — Fighting Nations · submetido",
              "18 de agosto de 2026 · Mobidictum Indie Desk 2026 (Istambul) — Fighting Nations · submetido",
              "prazo 10 de setembro de 2025 · 17.ª edição dos Unity Awards (incluído em Most Anticipated Games) — Fighting Nations: The Iron Dragon Tournament · não selecionado",
              "21 de julho de 2025 · Programa 2025 de entrada no Médio Oriente para PME (Korea Venture Business Association) · não selecionado",
              "28 de julho de 2025 · 2025 Content Startup Battlefield (KOCCA) · não selecionado",
              "prazo 18 de agosto de 2025 · 2025 Korea–Brunei Startup Networking and Pitching Competition (IA e jogos, 6 selecionadas) · não selecionado",
              "17 de agosto de 2026 · 21.ª Gyeonggi Game Audition — Fighting Nations · submetido",
              "18 de agosto de 2026 · Content IP Market 2026 (COEX, 80 empresas selecionadas) · submetido",
              "prazo 25 de junho de 2026 · GIGDC 2026 Global Indie Game Making Contest — Miliverse · submetido",
              "prazo 26 de junho de 2026 · Concurso de IA e dados de Cultura, Desporto e Turismo (Ministério da Cultura, Desporto e Turismo) · submetido",
              "prazo 31 de julho de 2026 · 2026 Gyeonggi Virtual-Convergence Content Challenge — Miliverse · não selecionado",
              "3 de abril de 2026 · ChinaJoy 2026 · não selecionado"
            ]
          }
        },
        {
          h: "O que já conquistámos",
          p: ["Não enviámos apenas candidaturas: fomos aprender o que era preciso. Começou com um workshop de Unity de uma semana em 2019 e, só desde agosto de 2025, concluímos mais dezanove cursos — Unity e Unreal Engine, IA generativa e captura de realidade, blockchain e Solidity, planeamento de torneios de esports, normas internacionais de IA e ativos digitais — e dois prémios pelo caminho."],
          list: {
            h: "Cursos concluídos e prémios",
            items: [
              "11 de dezembro de 2019 · Gamebridge Unityversity — workshop de uma semana de desenvolvimento de jogos em Unity (Unity 2018.4 LTS, wcoding Seul) · ✅ concluído",
              "20 de agosto de 2025 · Agência de Conteúdos de Gyeonggi — Gyeonggi Metaverse Campus 2025: produção de conteúdos para plataformas de metaverso em Unity, baseada em projetos (100 horas) · ✅ concluído",
              "7 de setembro de 2025 · Concurso de vídeos curtos da YTN Seoul Tower · 🏆 Prémio de Incentivo",
              "18 de setembro de 2025 · Gyeonggi Business & Science Accelerator (GBSA), academia deep tech — Modelos de negócio a partir de dados: da ideia ao protótipo · ✅ concluído",
              "31 de outubro de 2025 · Associação Coreana da Indústria do Metaverso — produção de conteúdos com IA generativa sobre Unreal e captura de realidade (60 horas) · ✅ concluído",
              "4 de novembro de 2025 · Gyeonggi Game Academy 2025 — formação de programadores de jogos com IA (sessões 9 e 10) · ✅ concluído",
              "17 de novembro de 2025 · Academia de Esports de Gwangju — curso de planeamento de torneios de esports · ✅ concluído",
              "23 de abril de 2026 · The Circle Foundation AI Academy, 3.ª turma — AI vibe coding (15 horas) · ✅ concluído",
              "29 de abril de 2026 · Associação de Tecnologia de Telecomunicações (TTA) — formação em normas TIC: normalização internacional de inteligência artificial (5 horas) · ✅ concluído",
              "29 de abril de 2026 · Associação de Tecnologia de Telecomunicações (TTA) — formação em normas TIC: normalização internacional de mobilidade autónoma (6 horas) · ✅ concluído",
              "29 de abril de 2026 · Associação de Tecnologia de Telecomunicações (TTA) — formação em normas TIC: normalização internacional de segurança de nova geração e blockchain (4 horas) · ✅ concluído",
              "9 de maio de 2026 · Agência de Internet e Segurança da Coreia (KISA) — Blockchain Meetup Day 2026: aprender Solidity e planear a sua utilização · ✅ concluído",
              "28 de maio de 2026 · Associação de Tecnologia de Telecomunicações (TTA) — O futuro e a estratégia dos ativos digitais (4 horas) · ✅ concluído",
              "30 de maio de 2026 · Agência de Internet e Segurança da Coreia (KISA) — Blockchain Meetup Day 2026: desenvolver uma carteira blockchain · ✅ concluído",
              "1 de junho de 2026 · 107.º Festival Nacional de Desporto e 46.º Jogos Paranacionais em Jeju — categoria de canção de incentivo (Província de Jeju) · 🏆 Prémio de Excelência",
              "13 de junho de 2026 · Agência de Internet e Segurança da Coreia (KISA) — Blockchain Meetup Day 2026: compreender e implementar tokens de depósito · ✅ concluído",
              "27 de junho de 2026 · Agência de Internet e Segurança da Coreia (KISA) — Blockchain Meetup Day 2026: plataformas de privacidade descentralizadas (DPP) e prática de segurança · ✅ concluído",
              "12 de julho de 2026 · Agência de Internet e Segurança da Coreia (KISA) — Blockchain Meetup Day 2026: serviços blockchain com IA generativa · ✅ concluído",
              "23 de julho de 2026 · Agência de Conteúdos de Gyeonggi — Gyeonggi Metaverse Campus 2026: conteúdos com scripting visual do Unreal Engine (20 horas) · ✅ concluído",
              "30 de julho de 2026 · Agência de Conteúdos de Gyeonggi — Gyeonggi Metaverse Campus 2026: cinema com Unreal Engine (20 horas) · ✅ concluído",
              "6 de agosto de 2026 · Agência de Conteúdos de Gyeonggi — Gyeonggi Metaverse Campus 2026: NPC com IA no Unreal Engine (20 horas) · ✅ concluído",
              "13 de agosto de 2026 · Agência de Conteúdos de Gyeonggi — Gyeonggi Metaverse Campus 2026: criação de assets com IA generativa (20 horas) · ✅ concluído",
            ]
          }
        },
        {
          h: "Porque publicamos o plano",
          p: [
            "Fazer um jogo e pô-lo à frente das pessoas são dois trabalhos diferentes. Num estúdio de uma pessoa, improvisar o segundo custa um ano inteiro. Por isso contámos todas as candidaturas possíveis, fixámo-las num calendário e publicamos esse calendário tal como está.",
            "Notou-se um padrão. As candidaturas concentram-se no primeiro semestre; os eventos acontecem no segundo. 24 das 38 fecham entre janeiro e junho. Quem começa a mexer-se em agosto já perdeu quase todo o ano. Para 2027 começamos em janeiro."
          ],
          list: {
            h: "Como se dividem as 38 candidaturas",
            items: [
              "19 gratuitas — se formos selecionados, a organização cobre o custo de exposição",
              "11 pagas — inscrição ou custo de stand",
              "6 com prémio monetário ou apoio à produção",
              "2 abertas todo o ano, sem prazo"
            ]
          }
        },
        {
          h: "Finais de 2026 — a que nos candidatamos agora",
          p: ["Abertas ou a abrir em breve, em agosto de 2026, quando esta página foi preparada."],
          list: {
            h: "Fecham de agosto a dezembro",
            items: [
              "GWB Game Awards (Tencent) — meados de agosto · gratuito. Leva a uma gala em novembro e a um evento na Steam",
              "EVA Play (Buenos Aires) — por volta de 17 de agosto · gratuito. Participação remota possível",
              "Taipei Indie Game Award — 19 de agosto · gratuito. Uma entrada por equipa; materiais de 26 de agosto a 2 de setembro",
              "Steam Next Fest, edição de outubro — registo até 31 de agosto. Demo até 21 de setembro",
              "Mobidictum Showcase (Istambul) — 31 de agosto · gratuito. 50 Indie Spots e prémios",
              "IGF — por volta de 7 de setembro · 75 $ (é possível pedir isenção). Só a nomeação já vale",
              "DevGAMM Awards — por volta de 7 de setembro · gratuito. Mais de 150 jurados, transmitido na IGN em novembro",
              "G-Star Indie Showcase — durante setembro · gratuito. Seleção anunciada a 17 de outubro",
              "Demospree — por volta de 5 de outubro · gratuito. Maratona de demos em direto em janeiro",
              "BGM Game Expo Winter (China) — por volta de 17 de outubro · gratuito. Evento em dezembro e prémios",
              "Day of the Devs, edição de inverno — de agosto a outubro · gratuito. Com curadoria",
              "BitSummit, abertura das inscrições gerais — por volta de novembro · 33.000 ¥. Um título por inscrição",
              "Stand da Taipei INDIE HOUSE — outono · pago. O evento é em janeiro",
              "pitchyagame — novembro · gratuito. Pitching ao vivo",
              "A MAZE. Berlim abre — 16 de dezembro · pago. Fecha a 31 de janeiro"
            ]
          }
        },
        {
          h: "Finais de 2026 — onde as portas abrem",
          p: ["À parte das candidaturas, estes são os eventos que decorrem no segundo semestre."],
          list: {
            h: "De setembro a dezembro",
            items: [
              "Tokyo Game Show — fim de setembro",
              "PAX West — início de setembro",
              "Steam Next Fest, edição de outubro — 19 a 26 de outubro",
              "gamescom asia x Thailand Game Show — 29 de outubro a 1 de novembro, Banguecoque. O evento onde expusemos no pavilhão coreano em 2025",
              "G-Star + G-CON — 19 a 22 de novembro, Busan",
              "Galas DevGAMM e GWB — novembro",
              "BGM Game Expo Winter — dezembro, China"
            ]
          }
        },
        {
          h: "Candidaturas 2027 — de janeiro a março",
          p: ["É aqui que o ano se decide. Só no primeiro trimestre fecham oito candidaturas."],
          list: {
            h: "Fecham de janeiro a março",
            items: [
              "Steam Next Fest, edição de fevereiro — registo por volta de 5 de janeiro. Fecha sete semanas antes do evento e um jogo só o pode fazer uma vez na vida",
              "gamescom latam BIG Festival — por volta de 15 de janeiro · gratuito. São Paulo, 17 categorias, realiza-se no fim de abril",
              "NEOWIZ Quest — 16 de janeiro · gratuito. 165 milhões de wons em prémios",
              "A MAZE. Berlim — 31 de janeiro (prorrogável até cerca de 10 de fevereiro) · pago",
              "Tokyo Game Show SELECTED INDIE 80 abre — 10 de fevereiro · gratuito. Fecha a 30 de abril",
              "Indie Arena Booth — março a abril · pago, mais lugares gratuitos com curadoria. Cerca de 100 jurados; resposta entre o fim de abril e o início de maio",
              "G-Star, inscrição antecipada — 3 de março · pago. 10 % de desconto no stand"
            ]
          }
        },
        {
          h: "Candidaturas 2027 — de abril a junho",
          p: ["Os programas de apoio coreanos e os stands indie europeus sobrepõem-se aqui."],
          list: {
            h: "Fecham de abril a junho",
            items: [
              "Day of the Devs (edição Summer Game Fest) — por volta de 6 de abril · gratuito. Com curadoria",
              "Smilegate IndieGo — 12 de abril · gratuito. 10 milhões de wons",
              "Indie Arena Booth — por volta de 20 de abril · pago. Stand partilhado na gamescom",
              "Tokyo Game Show SELECTED INDIE 80 — 30 de abril · gratuito. 80 selecionados, com entrada automática no SOWN",
              "Tiny Teams — por volta de 30 de abril · gratuito. Equipas de cinco ou menos, demo obrigatória",
              "G-Star, fecho da inscrição antecipada — 30 de abril · pago",
              "IndieCraft — 6 de maio · gratuito. Até 40 milhões de wons",
              "NC VARCO — 7 de maio · gratuito",
              "gamescom dev Indie Expo — 8 de maio · gratuito. 20 equipas em 30 lugares. Antes devcom, e o prazo não é 31 de maio",
              "BIC Festival — 25 de maio · gratuito. Busan, realiza-se em agosto",
              "G-Star, inscrição geral — 26 de maio · pago",
              "gamescom asia indie — por volta de 15 de junho · pago. Banguecoque",
              "IndieCade, candidaturas regulares — por volta de meados de junho · 135 $. O festival é em janeiro",
              "GIGDC — 25 de junho · gratuito",
              "LudoNarraCon — por volta de 26 de junho · gratuito. Centrado em narrativa, encaixa pior no nosso género",
              "G-Star, fecho da inscrição geral — 31 de julho · pago"
            ]
          }
        },
        {
          h: "Datas dos eventos de 2027",
          p: ["Onde temos de estar fisicamente se as candidaturas correrem bem. Só constam as datas já anunciadas."],
          list: {
            h: "De janeiro a novembro",
            items: [
              "Taipei Game Show + INDIE HOUSE — 21 a 24 de janeiro. Gala do Indie Game Award a 20 de janeiro",
              "Festival IndieCade e transmissão Demospree — janeiro",
              "Steam Next Fest, edição de fevereiro — fevereiro",
              "GDC + prémios IGF — início de março, São Francisco",
              "gamescom latam — 30 de abril a 3 de maio, São Paulo",
              "A MAZE. Berlim — meados de maio",
              "BitSummit — 21 a 23 de maio, Quioto",
              "Digital Dragons e Nordic Game — maio",
              "Steam Next Fest, edição de junho — junho",
              "Develop:Brighton — 13 a 15 de julho",
              "BIC Festival — meados de agosto, Busan",
              "gamescom dev e gamescom — fim de agosto, Colónia",
              "Tokyo Game Show — fim de setembro",
              "G-Star — novembro, Busan"
            ]
          }
        },
        {
          h: "Candidaturas sem prazo",
          p: ["Estão abertas independentemente do calendário. Nada obriga a uma data, o que significa que temos de nos empurrar a nós próprios assim que a build estiver pronta."],
          list: {
            h: "Seis candidaturas permanentes",
            items: [
              "Big Indie Pitch — gratuito. Decorre em várias cidades todo o ano; o único pitch permanentemente aberto",
              "Epic MegaGrants — gratuito. Candidaturas contínuas para projetos em Unreal",
              "INDIE Live Expo — gratuito. Duas vezes por ano, online",
              "PAX Rising — pago. West / East / Aus candidatam-se em separado",
              "Stand B2B da gamescom dev — 1.499 €. Oito equipas indie, pavilhão 4.1 da gamescom",
              "Steam Direct — 100 $ por aplicação, recuperados quando o jogo passa os 1.000 $ de receita"
            ]
          }
        },
        {
          h: "Por que ordem vamos",
          p: [
            "Para um estúdio de uma pessoa, as viagens e o alojamento custam mais do que o stand. Um evento europeu ou norte-americano é o mais caro mesmo quando a entrada é gratuita. Por isso a ordem está fixada à partida.",
            "O Fighting Nations encabeça todas as candidaturas. Um jogo de luta é forte nos grandes festivais generalistas e nos prémios, e fraco nos eventos da Steam construídos à volta de um só género. O Kingdom Wars corre no navegador, por isso sai dos stands físicos e vai para eventos online de estratégia e eventos gratuitos na Steam."
          ],
          list: {
            h: "Prioridade",
            items: [
              "1. Candidaturas gratuitas online e com júri — sem custo de viagem",
              "2. Coreia — G-Star, BIC Festival",
              "3. Ásia próxima — Taipé, Banguecoque, Quioto",
              "4. Europa e América do Norte — quando formos selecionados, ou quando vier com apoio à viagem"
            ]
          }
        },
        {
          h: "O que está decidido e o que não está",
          p: [
            "Esta página é um plano a que nos candidatamos. Não é uma lista de resultados. Onde somos efetivamente aceites vai para a cronologia da página inicial quando soubermos — foi assim que sempre fizemos.",
            "As datas combinam os anúncios de cada evento com o calendário que têm mantido em anos anteriores. Quando um anúncio oficial diz outra coisa, manda o anúncio, e corrigimos esta página à medida que confirmamos.",
            "Última atualização: 19 de agosto de 2026."
          ]
        }
      ],
      slides: [
        "O pavilhão coreano na gamescom asia x Thailand Game Show, outubro de 2025. A lista abaixo é para onde vamos a seguir.",
        "O letreiro do nosso stand e o cartaz de Fighting Nations. É assim que tencionamos aparecer nos eventos listados acima.",
        "Reunião com uma distribuidora indiana na Thailand Game Show. Salas como esta são a razão por que vamos.",
        "O jogo que levamos connosco — Fighting Nations. A maioria das candidaturas acima é feita com este título.",
        "Cada lutador representa um país e a sua tradição marcial. Personagens de 13 países, só a punho limpo.",
        "O Kingdom Wars corre no navegador, por isso salta os stands físicos e vai a eventos online.",
        "A candidatura ao Taipei Indie Game Award 2027, 16 de agosto de 2026. Os finalistas são anunciados a 14 de outubro.",
        "A entrada da zona de negócios da Thailand Game Show, outubro de 2025: é a isto que levam as datas da lista.",
        "O fundador, Kent Kim, a apresentar Fighting Nations no stand. Está presente em cada evento da lista.",
        "Global Game Challenge 2025, a 29 de novembro de 2025 na Universidade Chung-Ang, Seul. Um lugar a que chegámos por seleção.",
        "O nosso stand na Mostra de Jogos Indie em Destaque do GGC, convidados entre cerca de 20 títulos selecionados.",
        "Um visitante a jogar Fighting Nations no stand.",
        "24 de junho de 2026 — acordo de cooperação com a Corporação do Aeroporto Internacional de Incheon. A Deother é uma das três startups escolhidas para concretizar o AI-PORT do aeroporto.",
        "O fundador Kent Kim na assinatura. O primeiro prémio no concurso de IA da corporação aeroportuária levou a este acordo."
      ],
      cta: "Joga o jogo que apresentamos", back: "Voltar a Deother"
    },

    fr: {
      title: "Feuille de route des salons par année",
      tagline: "Tous les salons auxquels nous postulons, de fin 2026 à 2027",
      intro: "Nous avons recensé toutes les candidatures possibles — 38 — et les avons posées sur un calendrier : 19 gratuites, 11 payantes, 6 dotées d'un prix, 2 ouvertes toute l'année. Ce qui suit est un plan auquel nous postulons, pas une liste de résultats. Les résultats vont sur la frise du parcours, en page d'accueil, au fur et à mesure.",
      sections: [
        {
          h: "Ce que nous avons déjà déposé",
          p: ["Depuis mai 2025, nous avons déposé plus de 330 candidatures à des concours et programmes de soutien. Ci-dessous ne figurent que celles liées au jeu vidéo et à l'entrepreneuriat ; dès que les résultats tomberont, le statut de ces lignes changera."],
          list: {
            h: "Journal des dépôts",
            items: [
              "10 juillet 2025 · D.CAMP · déposé",
              "10 juillet 2025 · Gwanak S-Valley Startup Scale-Up Demo Day · déposé",
              "10 juillet 2025 · Haim Ventures · déposé",
              "17 juillet 2025 · Concours de startups Corée–Chine–Japon · déposé",
              "17 juillet 2025 · SNU Connect Day × Antler Korea · déposé",
              "18 juillet 2025 · Concours d'investissement en startups BNK · déposé",
              "21 juillet 2025 · Programme 2025 d’implantation au Moyen-Orient pour PME (Korea Venture Business Association) · non retenu",
              "23 juillet 2025 · Fondation Orange Planet pour les startups · déposé",
              "clôture 25 juillet 2025 · Supercent — Game Development Academy with AI · non retenu",
              "clôture 28 juillet 2025 · Pavillon commun G-Connection (TCCF Taïwan · ATF Singapour) · déposé",
              "clôture 31 juillet 2025 · Concours de la fondation Game-in — jeux traditionnels coréens et IA · déposé",
              "4 août 2025 · Gyeonggi Global Game Center — programme de préparation à la levée de fonds, l'un des 10 studios retenus · ✅ sélectionné",
              "19 août 2025 · Exposition éphémère de contenus de jeu de l'Agence des contenus de Gyeonggi · ✅ sélectionné",
              "19 août 2025 · Content IP Market 2025 (COEX) · déposé",
              "clôture 22 août 2025 · Pavillon commun de Daejeon au G-STAR 2025 (agence de promotion de Daejeon) · non retenu",
              "23 août 2025 · Seoul Game Contest 2025 (Seoul Business Agency) · non retenu",
              "clôture 27 août 2025 · Suncheon AI Game Jam 2025 · non retenu",
              "2 septembre 2025 · 1er concours de jeux indépendants 3D NC AI VARCO — Fighting Nations · non retenu",
              "clôture 31 décembre 2025 · 2e concours mondial de développement de jeux Com2uS — Com:ON · non retenu",
              "9 septembre 2025 · IGGK Indie Game Awards · déposé",
              "11 septembre 2025 · Prix du jeu du mois (KOCCA) — Fighting Nations · non retenu",
              "14 septembre 2025 · Zone jeux indépendants de Contents Universe Korea · déposé",
              "clôture 15 septembre 2025 · Com2uS Holdings Game Challenge · déposé",
              "16 septembre 2025 · Gyeonggi AI Content Lab 2025, parcours vidéo commerciale (Agence des contenus de Gyeonggi) — dossier retenu, puis entretien · non retenu",
              "22 septembre 2025 · Korea–Arab Startup Pitch Competition (KITA) · déposé",
              "23 septembre 2025 · Programme d'expansion conjointe de Megazone Cloud — stand du pavillon coréen au Thailand Game Show / gamescom asia · ✅ sélectionné",
              "clôture 16 novembre 2025 · Global Game Challenge 2025, exposition sur invitation des meilleurs jeux indépendants (Korean Game Society, une vingtaine de titres retenus) · ✅ sélectionné",
              "31 décembre 2025 · 2e concours de création de jeux avec VARCO, édition Voice (NC AI) — Fighting Nations · non retenu",
              "16 janvier 2026 · NEOWIZ Quest — Fighting Nations · déposé",
              "clôture 28 février 2026 · Programme d'aide à l'enregistrement des droits d'auteur à l'étranger · déposé",
              "clôture 12 mars 2026 · Pavillon coréen du Licensing Expo · déposé",
              "clôture 12 mars 2026 · Concours de startups de Gyeonggi 2026 — audition G-Star · déposé",
              "21 mars 2026 · Epic MegaGrants (1er semestre) · déposé",
              "clôture 25 mars 2026 · Game Plus — aide au lancement à l'international (KOCCA) · déposé",
              "clôture 27 mars 2026 · Programme d'aide à la participation aux marchés étrangers · déposé",
              "clôture 27 mars 2026 · Korea Contents Week 2026 (KCW) — accès au marché chinois, KOCCA · déposé",
              "clôture 31 mars 2026 · 5e concours de création d'entreprise IA et données publiques · déposé",
              "clôture 31 mars 2026 · Game Icon Seoul 2026 · déposé",
              "clôture 1 avril 2026 · Programme d'aide à la commercialisation de jeux · déposé",
              "clôture 3 avril 2026 · Prix coréens de l’innovation entrepreneuriale 2026 · déposé",
              "clôture 12 avril 2026 · Concours de jeux indépendants Smilegate · déposé",
              "clôture 30 avril 2026 · Qualcomm AI Innovator Program (QAIPI) 2026-APAC — IA embarquée · déposé",
              "clôture 7 mai 2026 · Seoul Play Up AI Game Challenge · déposé",
              "clôture 19 mai 2026 · Korea Content Awards 2026 — catégorie Récit (KOCCA) · déposé",
              "clôture 3 juin 2026 · Smilegate Membership (SGM), 18e promotion indé · déposé",
              "15 août 2026 · GWB Game Awards (Tencent) — Fighting Nations · déposé ; cérémonie en novembre",
              "16 août 2026 · Taipei Indie Game Award 2027 — Fighting Nations · déposé ; finalistes le 14 octobre",
              "16 août 2026 · Epic MegaGrants (2e semestre) — Fighting Nations · déposé, en cours d'examen",
              "16 août 2026 · Xsolla Funding Club — Fighting Nations · déposé, en cours d'examen",
              "3 avril 2026 · Pavillon coréen de gamescom asia 2026 (Thaïlande) · non retenu",
              "3 avril 2026 · Pavillon coréen de gamescom 2026 (Allemagne) · non retenu",
              "3 avril 2026 · Pavillon coréen du Tokyo Game Show 2026 · non retenu",
              "20 juillet 2026 · Sweden Game Conference 2026 · déposé",
              "18 août 2026 · Gaming Istanbul GIST 2026 (3 entreprises retenues) — Fighting Nations · déposé",
              "18 août 2026 · Mobidictum Indie Desk 2026 (Istanbul) — Fighting Nations · déposé",
              "clôture 10 septembre 2025 · 17e édition des Unity Awards (inscrit dans Most Anticipated Games) — Fighting Nations: The Iron Dragon Tournament · non retenu",
              "28 juillet 2025 · 2025 Content Startup Battlefield (KOCCA) · non retenu",
              "clôture 18 août 2025 · 2025 Korea–Brunei Startup Networking and Pitching Competition (IA et jeux, 6 retenues) · non retenu",
              "17 août 2026 · 21e Gyeonggi Game Audition — Fighting Nations · déposé",
              "18 août 2026 · Content IP Market 2026 (COEX, 80 entreprises retenues) · déposé",
              "clôture 25 juin 2026 · GIGDC 2026 Global Indie Game Making Contest — Miliverse · déposé",
              "clôture 26 juin 2026 · Concours IA et données Culture, Sports et Tourisme (ministère de la Culture, des Sports et du Tourisme) · déposé",
              "clôture 31 juillet 2026 · 2026 Gyeonggi Virtual-Convergence Content Challenge — Miliverse · non retenu",
              "3 avril 2026 · ChinaJoy 2026 · non retenu"
            ]
          }
        },
        {
          h: "Ce que nous avons obtenu",
          p: ["Nous n'avons pas fait qu'envoyer des candidatures : nous sommes allés apprendre ce qu'il fallait. Cela a commencé par un atelier Unity d'une semaine en 2019, et dix-neuf formations ont suivi depuis août 2025 seulement — Unity et Unreal Engine, IA générative et capture de réalité, blockchain et Solidity, organisation de tournois d'esport, normes internationales de l'IA et des actifs numériques — et deux prix en chemin."],
          list: {
            h: "Formations validées et prix",
            items: [
              "11 décembre 2019 · Gamebridge Unityversity — atelier d'une semaine de développement de jeux sous Unity (Unity 2018.4 LTS, wcoding Séoul) · ✅ validé",
              "20 août 2025 · Agence des contenus de Gyeonggi — Gyeonggi Metaverse Campus 2025 : production de contenus pour plateformes de métavers sous Unity, par projets (100 heures) · ✅ validé",
              "7 septembre 2025 · Concours de vidéos courtes de la YTN Seoul Tower · 🏆 Prix d'encouragement",
              "18 septembre 2025 · Gyeonggi Business & Science Accelerator (GBSA), académie deep tech — Modèles économiques à partir des données : de l’idée au prototype · ✅ validé",
              "31 octobre 2025 · Association coréenne de l'industrie du métavers — production de contenus avec IA générative sur Unreal et capture de réalité (60 heures) · ✅ validé",
              "4 novembre 2025 · Gyeonggi Game Academy 2025 — formation de développeurs de jeux assistée par IA (séances 9 et 10) · ✅ validé",
              "17 novembre 2025 · Académie d'esport de Gwangju — formation à l'organisation de tournois d'esport · ✅ validé",
              "23 avril 2026 · The Circle Foundation AI Academy, 3e promotion — AI vibe coding (15 heures) · ✅ validé",
              "29 avril 2026 · Association coréenne des technologies de télécommunication (TTA) — formation aux normes TIC : normalisation internationale de l'intelligence artificielle (5 heures) · ✅ validé",
              "29 avril 2026 · Association coréenne des technologies de télécommunication (TTA) — formation aux normes TIC : normalisation internationale de la mobilité autonome (6 heures) · ✅ validé",
              "29 avril 2026 · Association coréenne des technologies de télécommunication (TTA) — formation aux normes TIC : normalisation internationale de la sécurité nouvelle génération et de la blockchain (4 heures) · ✅ validé",
              "9 mai 2026 · Agence coréenne de l'internet et de la sécurité (KISA) — Blockchain Meetup Day 2026 : apprendre Solidity et planifier son usage · ✅ validé",
              "28 mai 2026 · Association coréenne des technologies de télécommunication (TTA) — L'avenir et la stratégie des actifs numériques (4 heures) · ✅ validé",
              "30 mai 2026 · Agence coréenne de l'internet et de la sécurité (KISA) — Blockchain Meetup Day 2026 : développer un portefeuille blockchain · ✅ validé",
              "1er juin 2026 · 107e Festival national des sports et 46e Jeux paranationaux à Jeju — catégorie chant d'encouragement (province de Jeju) · 🏆 Prix d'excellence",
              "13 juin 2026 · Agence coréenne de l'internet et de la sécurité (KISA) — Blockchain Meetup Day 2026 : comprendre et implémenter les jetons de dépôt · ✅ validé",
              "27 juin 2026 · Agence coréenne de l'internet et de la sécurité (KISA) — Blockchain Meetup Day 2026 : plateformes de confidentialité décentralisées (DPP) et pratique de la sécurité · ✅ validé",
              "12 juillet 2026 · Agence coréenne de l'internet et de la sécurité (KISA) — Blockchain Meetup Day 2026 : services blockchain et IA générative · ✅ validé",
              "23 juillet 2026 · Agence des contenus de Gyeonggi — Gyeonggi Metaverse Campus 2026 : contenus en scripting visuel Unreal Engine (20 heures) · ✅ validé",
              "30 juillet 2026 · Agence des contenus de Gyeonggi — Gyeonggi Metaverse Campus 2026 : cinématique sous Unreal Engine (20 heures) · ✅ validé",
              "6 août 2026 · Agence des contenus de Gyeonggi — Gyeonggi Metaverse Campus 2026 : PNJ pilotés par IA sous Unreal Engine (20 heures) · ✅ validé",
              "13 août 2026 · Agence des contenus de Gyeonggi — Gyeonggi Metaverse Campus 2026 : création d'assets avec l'IA générative (20 heures) · ✅ validé",
            ]
          }
        },
        {
          h: "Pourquoi publier le plan",
          p: [
            "Faire un jeu et le mettre devant les gens sont deux métiers différents. Dans un studio d'une seule personne, improviser le second coûte une année entière. Nous avons donc compté toutes les candidatures possibles, les avons épinglées sur un calendrier, et nous publions ce calendrier tel quel.",
            "Un schéma s'est dégagé. Les candidatures se concentrent sur le premier semestre ; les salons ont lieu au second. 24 des 38 ferment entre janvier et juin. Commencer à bouger en août, c'est avoir déjà perdu l'essentiel de l'année. Pour 2027, nous commençons en janvier."
          ],
          list: {
            h: "Comment se répartissent les 38 candidatures",
            items: [
              "19 gratuites — si vous êtes retenu, l'organisateur prend en charge les frais d'exposition",
              "11 payantes — frais d'inscription ou de stand",
              "6 dotées d'un prix ou d'une aide à la production",
              "2 ouvertes toute l'année, sans date limite"
            ]
          }
        },
        {
          h: "Fin 2026 — ce à quoi nous postulons maintenant",
          p: ["Ouvertes ou sur le point de l'être, en août 2026, au moment où cette page a été établie."],
          list: {
            h: "Clôtures d'août à décembre",
            items: [
              "GWB Game Awards (Tencent) — mi-août · gratuit. Débouche sur une cérémonie en novembre et un événement Steam",
              "EVA Play (Buenos Aires) — vers le 17 août · gratuit. Participation à distance possible",
              "Taipei Indie Game Award — 19 août · gratuit. Une candidature par équipe ; dépôt des éléments du 26 août au 2 septembre",
              "Steam Next Fest, édition d'octobre — inscription avant le 31 août. Démo pour le 21 septembre",
              "Mobidictum Showcase (Istanbul) — 31 août · gratuit. 50 Indie Spots et des prix",
              "IGF — vers le 7 septembre · 75 $ (exonération possible). Une simple nomination compte déjà",
              "DevGAMM Awards — vers le 7 septembre · gratuit. Plus de 150 jurés, diffusion sur IGN en novembre",
              "G-Star Indie Showcase — courant septembre · gratuit. Sélection annoncée le 17 octobre",
              "Demospree — vers le 5 octobre · gratuit. Marathon de démos en direct en janvier",
              "BGM Game Expo Winter (Chine) — vers le 17 octobre · gratuit. Salon en décembre et prix",
              "Day of the Devs, édition d'hiver — d'août à octobre · gratuit. Sur sélection",
              "BitSummit, ouverture des inscriptions générales — vers novembre · 33 000 ¥. Un titre par inscription",
              "Stand Taipei INDIE HOUSE — automne · payant. Le salon a lieu en janvier",
              "pitchyagame — novembre · gratuit. Pitch en direct",
              "A MAZE. Berlin ouvre — 16 décembre · payant. Clôture le 31 janvier"
            ]
          }
        },
        {
          h: "Fin 2026 — là où les portes s'ouvrent",
          p: ["Indépendamment des candidatures, voici les salons qui se tiennent au second semestre."],
          list: {
            h: "De septembre à décembre",
            items: [
              "Tokyo Game Show — fin septembre",
              "PAX West — début septembre",
              "Steam Next Fest, édition d'octobre — 19-26 octobre",
              "gamescom asia x Thailand Game Show — 29 octobre-1er novembre, Bangkok. Le salon où nous avons exposé dans le pavillon coréen en 2025",
              "G-Star + G-CON — 19-22 novembre, Busan",
              "Cérémonies DevGAMM et GWB — novembre",
              "BGM Game Expo Winter — décembre, Chine"
            ]
          }
        },
        {
          h: "Candidatures 2027 — de janvier à mars",
          p: ["C'est là que l'année se joue. Rien qu'au premier trimestre, huit candidatures ferment."],
          list: {
            h: "Clôtures de janvier à mars",
            items: [
              "Steam Next Fest, édition de février — inscription vers le 5 janvier. Clôture sept semaines avant l'événement, et un jeu n'y a droit qu'une fois dans sa vie",
              "gamescom latam BIG Festival — vers le 15 janvier · gratuit. São Paulo, 17 catégories, fin avril",
              "NEOWIZ Quest — 16 janvier · gratuit. 165 millions de wons de dotation",
              "A MAZE. Berlin — 31 janvier (prolongation jusqu'au 10 février environ) · payant",
              "Tokyo Game Show SELECTED INDIE 80 ouvre — 10 février · gratuit. Clôture le 30 avril",
              "Indie Arena Booth — mars-avril · payant, plus des places gratuites sur sélection. Une centaine de jurés ; réponse fin avril-début mai",
              "G-Star, inscription anticipée — 3 mars · payant. 10 % de remise sur le stand"
            ]
          }
        },
        {
          h: "Candidatures 2027 — d'avril à juin",
          p: ["Les dispositifs d'aide coréens et les stands indépendants européens se chevauchent ici."],
          list: {
            h: "Clôtures d'avril à juin",
            items: [
              "Day of the Devs (édition Summer Game Fest) — vers le 6 avril · gratuit. Sur sélection",
              "Smilegate IndieGo — 12 avril · gratuit. 10 millions de wons",
              "Indie Arena Booth — vers le 20 avril · payant. Stand partagé à la gamescom",
              "Tokyo Game Show SELECTED INDIE 80 — 30 avril · gratuit. 80 retenus, inscrits d'office au SOWN",
              "Tiny Teams — vers le 30 avril · gratuit. Équipes de cinq personnes maximum, démo obligatoire",
              "G-Star, clôture de l'inscription anticipée — 30 avril · payant",
              "IndieCraft — 6 mai · gratuit. Jusqu'à 40 millions de wons",
              "NC VARCO — 7 mai · gratuit",
              "gamescom dev Indie Expo — 8 mai · gratuit. 20 équipes sur 30 places. Anciennement devcom, et la date limite n'est pas le 31 mai",
              "BIC Festival — 25 mai · gratuit. Busan, en août",
              "G-Star, inscription générale — 26 mai · payant",
              "gamescom asia indie — vers le 15 juin · payant. Bangkok",
              "IndieCade, candidatures régulières — vers la mi-juin · 135 $. Le festival a lieu en janvier",
              "GIGDC — 25 juin · gratuit",
              "LudoNarraCon — vers le 26 juin · gratuit. Centré sur la narration, moins adapté à notre genre",
              "G-Star, clôture de l'inscription générale — 31 juillet · payant"
            ]
          }
        },
        {
          h: "Dates des salons 2027",
          p: ["Où il faudra être physiquement si les candidatures aboutissent. Seules les dates déjà annoncées figurent ici."],
          list: {
            h: "De janvier à novembre",
            items: [
              "Taipei Game Show + INDIE HOUSE — 21-24 janvier. Cérémonie de l'Indie Game Award le 20 janvier",
              "Festival IndieCade et diffusion Demospree — janvier",
              "Steam Next Fest, édition de février — février",
              "GDC + prix IGF — début mars, San Francisco",
              "gamescom latam — 30 avril-3 mai, São Paulo",
              "A MAZE. Berlin — mi-mai",
              "BitSummit — 21-23 mai, Kyoto",
              "Digital Dragons et Nordic Game — mai",
              "Steam Next Fest, édition de juin — juin",
              "Develop:Brighton — 13-15 juillet",
              "BIC Festival — mi-août, Busan",
              "gamescom dev et gamescom — fin août, Cologne",
              "Tokyo Game Show — fin septembre",
              "G-Star — novembre, Busan"
            ]
          }
        },
        {
          h: "Candidatures sans date limite",
          p: ["Elles sont ouvertes indépendamment du calendrier. Rien n'impose de date, ce qui veut dire qu'il faut nous y pousser nous-mêmes dès que la build est prête."],
          list: {
            h: "Six candidatures permanentes",
            items: [
              "Big Indie Pitch — gratuit. Se tient dans plusieurs villes toute l'année ; le seul pitch en permanence ouvert",
              "Epic MegaGrants — gratuit. Candidatures au fil de l'eau pour les projets Unreal",
              "INDIE Live Expo — gratuit. Deux fois par an, en ligne",
              "PAX Rising — payant. West / East / Aus se demandent séparément",
              "Stand B2B gamescom dev — 1 499 €. Huit équipes indépendantes, hall 4.1 de la gamescom",
              "Steam Direct — 100 $ par application, récupérés une fois les 1 000 $ de revenus dépassés"
            ]
          }
        },
        {
          h: "Dans quel ordre nous y allons",
          p: [
            "Pour un studio d'une personne, le voyage et l'hébergement coûtent plus cher que le stand. Un salon européen ou nord-américain est le plus coûteux même quand l'entrée est gratuite. L'ordre est donc fixé à l'avance.",
            "Fighting Nations mène toutes les candidatures. Un jeu de combat est fort dans les grands festivals généralistes et les prix, et faible dans les événements Steam bâtis autour d'un seul genre. Kingdom Wars tourne dans le navigateur : il sort donc des stands physiques et part vers les événements en ligne de stratégie et les événements Steam gratuits."
          ],
          list: {
            h: "Priorité",
            items: [
              "1. Candidatures gratuites en ligne et sur jury — aucun frais de déplacement",
              "2. Corée — G-Star, BIC Festival",
              "3. Asie proche — Taipei, Bangkok, Kyoto",
              "4. Europe et Amérique du Nord — quand nous sommes retenus, ou quand une aide au déplacement l'accompagne"
            ]
          }
        },
        {
          h: "Ce qui est acquis et ce qui ne l'est pas",
          p: [
            "Cette page est un plan auquel nous postulons. Ce n'est pas une liste de résultats. Là où nous sommes réellement retenus figure sur la frise du parcours en page d'accueil, une fois que nous le savons — c'est ainsi que nous avons procédé jusqu'ici.",
            "Les dates combinent les annonces de chaque événement et le calendrier qu'ils ont tenu les années précédentes. Quand une annonce officielle diffère, c'est elle qui fait foi, et nous corrigeons cette page à mesure que nous confirmons.",
            "Dernière mise à jour : 19 août 2026."
          ]
        }
      ],
      slides: [
        "Le pavillon coréen à la gamescom asia x Thailand Game Show, octobre 2025. La liste ci-dessous, c'est la suite.",
        "L'enseigne de notre stand et l'affiche de Fighting Nations. C'est ainsi que nous comptons nous présenter aux salons listés plus haut.",
        "Rencontre avec un distributeur indien au Thailand Game Show. Ce sont ces rendez-vous qui justifient le déplacement.",
        "Le jeu que nous emportons — Fighting Nations. La plupart des candidatures ci-dessus se font avec ce titre.",
        "Chaque combattant porte un pays et sa tradition martiale. Des personnages de 13 pays, à mains nues.",
        "Kingdom Wars tourne dans le navigateur : il saute les stands physiques et part vers les événements en ligne.",
        "La candidature au Taipei Indie Game Award 2027, 16 août 2026. Les finalistes sont annoncés le 14 octobre.",
        "L'entrée de l'espace business du Thailand Game Show, octobre 2025 : c'est là que mènent les rendez-vous de la liste.",
        "Le fondateur, Kent Kim, présente Fighting Nations sur le stand. Il tient lui-même le stand à chaque salon de la liste.",
        "Global Game Challenge 2025, le 29 novembre 2025 à l'université Chung-Ang, à Séoul. Un lieu atteint par sélection.",
        "Notre stand à l'exposition sur invitation des meilleurs jeux indépendants du GGC, invités parmi une vingtaine de titres sélectionnés.",
        "Un visiteur joue à Fighting Nations sur le stand.",
        "24 juin 2026 — accord de coopération avec la société de l'aéroport international d'Incheon. Deother est l'une des trois startups retenues pour réaliser l'AI-PORT de l'aéroport.",
        "Le fondateur Kent Kim lors de la signature. Le premier prix au concours d'IA de la société aéroportuaire a mené à cet accord."
      ],
      cta: "Jouer au jeu que nous présentons", back: "Retour à Deother"
    },

    de: {
      title: "Messe-Roadmap nach Jahr",
      tagline: "Alle Messen, für die wir uns bewerben — von Ende 2026 bis 2027",
      intro: "Wir haben jede Ausschreibung gezählt, für die wir uns bewerben können — 38 — und sie in einen Kalender eingetragen: 19 kostenlos, 11 kostenpflichtig, 6 mit Preisgeld, 2 ganzjährig offen. Was folgt, ist ein Plan, für den wir uns bewerben, keine Liste von Ergebnissen. Ergebnisse kommen auf die Zeitleiste der Startseite, sobald sie eintreffen.",
      sections: [
        {
          h: "Was wir tatsächlich eingereicht haben",
          p: ["Seit Mai 2025 haben wir uns über 330-mal bei Wettbewerben und Förderprogrammen beworben. Unten stehen nur die Einreichungen aus den Bereichen Spiele und Gründung; sobald Ergebnisse vorliegen, ändert sich der Status dieser Zeilen."],
          list: {
            h: "Einreichungsprotokoll",
            items: [
              "10. Juli 2025 · D.CAMP · eingereicht",
              "10. Juli 2025 · Gwanak S-Valley Startup Scale-Up Demo Day · eingereicht",
              "10. Juli 2025 · Haim Ventures · eingereicht",
              "17. Juli 2025 · Korea-China-Japan-Startup-Wettbewerb · eingereicht",
              "17. Juli 2025 · SNU Connect Day × Antler Korea · eingereicht",
              "18. Juli 2025 · BNK-Startup-Investitionswettbewerb · eingereicht",
              "21. Juli 2025 · Nahost-Markteintrittsprogramm 2025 für KMU (Korea Venture Business Association) · nicht ausgewählt",
              "23. Juli 2025 · Orange Planet Startup Foundation · eingereicht",
              "Frist 25. Juli 2025 · Supercent — Game Development Academy with AI · nicht ausgewählt",
              "Frist 28. Juli 2025 · G-Connection-Gemeinschaftspavillon (TCCF Taiwan · ATF Singapur) · eingereicht",
              "Frist 31. Juli 2025 · Game-in-Foundation-Wettbewerb — koreanische Traditionsspiele mit KI · eingereicht",
              "4. August 2025 · Gyeonggi Global Game Center — Investment-Readiness-Programm, eines von 10 ausgewählten Studios · ✅ ausgewählt",
              "19. August 2025 · Game-Content-Pop-up-Ausstellung der Gyeonggi Content Agency · ✅ ausgewählt",
              "19. August 2025 · Content IP Market 2025 (COEX) · eingereicht",
              "Frist 22. August 2025 · Daejeon-Gemeinschaftspavillon auf der G-STAR 2025 (Förderagentur Daejeon) · nicht ausgewählt",
              "23. August 2025 · Seoul Game Contest 2025 (Seoul Business Agency) · nicht ausgewählt",
              "Frist 27. August 2025 · Suncheon AI Game Jam 2025 · nicht ausgewählt",
              "2. September 2025 · 1. NC-AI-VARCO-3D-Indie-Game-Wettbewerb — Fighting Nations · nicht ausgewählt",
              "9. September 2025 · IGGK Indie Game Awards · eingereicht",
              "11. September 2025 · Auszeichnung „Spiel des Monats“ (KOCCA) — Fighting Nations · nicht ausgewählt",
              "14. September 2025 · Indie-Game-Zone der Contents Universe Korea · eingereicht",
              "Frist 15. September 2025 · Com2uS Holdings Game Challenge · eingereicht",
              "16. September 2025 · Gyeonggi AI Content Lab 2025, Track Werbevideo (Gyeonggi Content Agency) — Vorauswahl bestanden, danach Interview · nicht ausgewählt",
              "22. September 2025 · Korea–Arab Startup Pitch Competition (KITA) · eingereicht",
              "23. September 2025 · Megazone-Cloud-Programm für gemeinsame Auslandsexpansion — Stand im koreanischen Pavillon der Thailand Game Show / gamescom asia · ✅ ausgewählt",
              "Frist 16. November 2025 · Global Game Challenge 2025, Einladungsausstellung herausragender Indie-Spiele (Korean Game Society, rund 20 Titel ausgewählt) · ✅ ausgewählt",
              "31. Dezember 2025 · 2. VARCO-Spieleentwicklungswettbewerb, Voice-Edition (NC AI) — Fighting Nations · nicht ausgewählt",
              "16. Januar 2026 · NEOWIZ Quest — Fighting Nations · eingereicht",
              "Frist 28. Februar 2026 · Förderprogramm für Urheberrechtsregistrierung im Ausland · eingereicht",
              "Frist 12. März 2026 · Koreanischer Pavillon der Licensing Expo · eingereicht",
              "Frist 12. März 2026 · Gyeonggi-Startup-Wettbewerb 2026 — G-Star-Audition · eingereicht",
              "21. März 2026 · Epic MegaGrants (1. Halbjahr) · eingereicht",
              "Frist 25. März 2026 · Game Plus — Förderung für den Auslandsstart (KOCCA) · eingereicht",
              "Frist 27. März 2026 · Förderprogramm für Auslandsmarkt-Teilnahme · eingereicht",
              "Frist 27. März 2026 · Korea Contents Week 2026 (KCW) — Markteintritt China, KOCCA · eingereicht",
              "Frist 31. März 2026 · 5. Gründerwettbewerb KI & offene Daten · eingereicht",
              "Frist 31. März 2026 · Game Icon Seoul 2026 · eingereicht",
              "Frist 1. April 2026 · Förderprogramm zur Spiele-Kommerzialisierung · eingereicht",
              "Frist 3. April 2026 · Korea Innovation Startup Awards 2026 · eingereicht",
              "Frist 12. April 2026 · Smilegate-Indie-Game-Wettbewerb · eingereicht",
              "Frist 30. April 2026 · Qualcomm AI Innovator Program (QAIPI) 2026-APAC — On-Device-KI · eingereicht",
              "Frist 7. Mai 2026 · Seoul Play Up AI Game Challenge · eingereicht",
              "Frist 19. Mai 2026 · Korea Content Awards 2026 — Kategorie Story (KOCCA) · eingereicht",
              "Frist 3. Juni 2026 · Smilegate Membership (SGM), 18. Indie-Jahrgang · eingereicht",
              "15. August 2026 · GWB Game Awards (Tencent) — Fighting Nations · eingereicht; Verleihung im November",
              "16. August 2026 · Taipei Indie Game Award 2027 — Fighting Nations · eingereicht; Finalisten am 14. Oktober",
              "16. August 2026 · Epic MegaGrants (2. Halbjahr) — Fighting Nations · eingereicht, in Prüfung",
              "16. August 2026 · Xsolla Funding Club — Fighting Nations · eingereicht, in Prüfung",
              "3. April 2026 · Koreanischer Pavillon der gamescom asia 2026 (Thailand) · nicht ausgewählt",
              "3. April 2026 · Koreanischer Pavillon der gamescom 2026 (Deutschland) · nicht ausgewählt",
              "3. April 2026 · Koreanischer Pavillon der Tokyo Game Show 2026 · nicht ausgewählt",
              "20. Juli 2026 · Sweden Game Conference 2026 · eingereicht",
              "18. August 2026 · Gaming Istanbul GIST 2026 (3 Unternehmen ausgewählt) — Fighting Nations · eingereicht",
              "18. August 2026 · Mobidictum Indie Desk 2026 (Istanbul) — Fighting Nations · eingereicht",
              "Frist 10. September 2025 · 17. Unity Awards (gelistet in Most Anticipated Games) — Fighting Nations: The Iron Dragon Tournament · nicht ausgewählt",
              "Frist 31. Dezember 2025 · 2. Com2uS Global Game Development Contest — Com:ON · nicht ausgewählt",
              "28. Juli 2025 · 2025 Content Startup Battlefield (KOCCA) · nicht ausgewählt",
              "Frist 18. August 2025 · 2025 Korea–Brunei Startup Networking and Pitching Competition (KI und Spiele, 6 ausgewählt) · nicht ausgewählt",
              "17. August 2026 · 21. Gyeonggi Game Audition — Fighting Nations · eingereicht",
              "18. August 2026 · Content IP Market 2026 (COEX, 80 Unternehmen ausgewählt) · eingereicht",
              "Frist 25. Juni 2026 · GIGDC 2026 Global Indie Game Making Contest — Miliverse · eingereicht",
              "Frist 26. Juni 2026 · KI- und Datenwettbewerb für Kultur, Sport und Tourismus (Ministerium für Kultur, Sport und Tourismus) · eingereicht",
              "Frist 31. Juli 2026 · 2026 Gyeonggi Virtual-Convergence Content Challenge — Miliverse · nicht ausgewählt",
              "3. April 2026 · ChinaJoy 2026 · nicht ausgewählt"
            ]
          }
        },
        {
          h: "Was wir erreicht haben",
          p: ["Wir haben nicht nur eingereicht — wir haben gelernt, was nötig war. Angefangen hat es 2019 mit einem einwöchigen Unity-Workshop; allein seit August 2025 kamen neunzehn Kurse dazu: Unity und Unreal Engine, generative KI und Reality Capture, Blockchain und Solidity, Planung von Esport-Turnieren, internationale Standards für KI und digitale Vermögenswerte. Dazu zwei Auszeichnungen."],
          list: {
            h: "Abgeschlossene Kurse und Auszeichnungen",
            items: [
              "11. Dezember 2019 · Gamebridge Unityversity — einwöchiger Workshop zur Spieleentwicklung mit Unity (Unity 2018.4 LTS, wcoding Seoul) · ✅ abgeschlossen",
              "20. August 2025 · Gyeonggi Content Agency — Gyeonggi Metaverse Campus 2025: projektbasierte Metaverse-Plattform-Content-Produktion in Unity (100 Stunden) · ✅ abgeschlossen",
              "7. September 2025 · YTN-Seoul-Tower-Kurzvideo-Wettbewerb · 🏆 Förderpreis",
              "18. September 2025 · Gyeonggi Business & Science Accelerator (GBSA), Deep-Tech-Startup-Akademie — Geschäftsmodelle aus Daten: von der Idee zum Prototyp · ✅ abgeschlossen",
              "31. Oktober 2025 · Korea Metaverse Industry Association — Content-Produktion mit Unreal-basierter generativer KI und Reality Capture (60 Stunden) · ✅ abgeschlossen",
              "4. November 2025 · Gyeonggi Game Academy 2025 — Schulung für KI-gestützte Spieleentwicklung (Einheiten 9 und 10) · ✅ abgeschlossen",
              "17. November 2025 · Gwangju Esports Academy — Kurs zur Planung von Esport-Turnieren · ✅ abgeschlossen",
              "23. April 2026 · The Circle Foundation AI Academy, 3. Jahrgang — AI Vibe Coding (15 Stunden) · ✅ abgeschlossen",
              "29. April 2026 · Telecommunications Technology Association (TTA) — IKT-Normungsexperten: internationale Standardisierung künstlicher Intelligenz (5 Stunden) · ✅ abgeschlossen",
              "29. April 2026 · Telecommunications Technology Association (TTA) — IKT-Normungsexperten: internationale Standardisierung autonomer Mobilität (6 Stunden) · ✅ abgeschlossen",
              "29. April 2026 · Telecommunications Technology Association (TTA) — IKT-Normungsexperten: internationale Standardisierung von Next-Gen-Security und Blockchain (4 Stunden) · ✅ abgeschlossen",
              "9. Mai 2026 · Korea Internet & Security Agency (KISA) — Blockchain Meetup Day 2026: Solidity lernen und einsetzen · ✅ abgeschlossen",
              "28. Mai 2026 · Telecommunications Technology Association (TTA) — Zukunft und Strategie digitaler Vermögenswerte (4 Stunden) · ✅ abgeschlossen",
              "30. Mai 2026 · Korea Internet & Security Agency (KISA) — Blockchain Meetup Day 2026: eine Blockchain-Wallet entwickeln · ✅ abgeschlossen",
              "1. Juni 2026 · 107. Nationales Sportfest und 46. Nationale Para-Spiele in Jeju — Kategorie Anfeuerungslied (Provinz Jeju) · 🏆 Exzellenzpreis",
              "13. Juni 2026 · Korea Internet & Security Agency (KISA) — Blockchain Meetup Day 2026: Einlagentoken verstehen und implementieren · ✅ abgeschlossen",
              "27. Juni 2026 · Korea Internet & Security Agency (KISA) — Blockchain Meetup Day 2026: dezentrale Privacy-Plattformen (DPP) und Security-Praxis · ✅ abgeschlossen",
              "12. Juli 2026 · Korea Internet & Security Agency (KISA) — Blockchain Meetup Day 2026: Blockchain-Dienste mit generativer KI · ✅ abgeschlossen",
              "23. Juli 2026 · Gyeonggi Content Agency — Gyeonggi Metaverse Campus 2026: Inhalte mit Visual Scripting in der Unreal Engine (20 Stunden) · ✅ abgeschlossen",
              "30. Juli 2026 · Gyeonggi Content Agency — Gyeonggi Metaverse Campus 2026: Cinematics in der Unreal Engine (20 Stunden) · ✅ abgeschlossen",
              "6. August 2026 · Gyeonggi Content Agency — Gyeonggi Metaverse Campus 2026: KI-NPCs mit Unreal Engine und KI (20 Stunden) · ✅ abgeschlossen",
              "13. August 2026 · Gyeonggi Content Agency — Gyeonggi Metaverse Campus 2026: Asset-Erstellung mit generativer KI (20 Stunden) · ✅ abgeschlossen",
            ]
          }
        },
        {
          h: "Warum wir den Plan veröffentlichen",
          p: [
            "Ein Spiel zu bauen und es vor Menschen zu bringen sind zwei verschiedene Arbeiten. In einem Ein-Personen-Studio kostet es ein ganzes Jahr, die zweite zu improvisieren. Also haben wir jede mögliche Ausschreibung gezählt, in einen Kalender geheftet und veröffentlichen diesen Kalender, wie er ist.",
            "Ein Muster fiel auf: Die Bewerbungen häufen sich in der ersten Jahreshälfte, die Messen finden in der zweiten statt. 24 der 38 schließen zwischen Januar und Juni. Wer im August anfängt, hat das Jahr schon zum größten Teil verpasst. Für 2027 fangen wir im Januar an."
          ],
          list: {
            h: "Wie sich die 38 Ausschreibungen aufteilen",
            items: [
              "19 kostenlos — bei Auswahl trägt der Veranstalter die Ausstellungskosten",
              "11 kostenpflichtig — Teilnahme- oder Standgebühr",
              "6 mit Preisgeld oder Produktionsförderung",
              "2 ganzjährig offen, ohne Frist"
            ]
          }
        },
        {
          h: "Ende 2026 — wofür wir uns jetzt bewerben",
          p: ["Offen oder in Kürze offen, Stand August 2026, als diese Seite zusammengestellt wurde."],
          list: {
            h: "Fristen von August bis Dezember",
            items: [
              "GWB Game Awards (Tencent) — Mitte August · kostenlos. Führt zu einer Preisverleihung im November und einem Steam-Event",
              "EVA Play (Buenos Aires) — um den 17. August · kostenlos. Teilnahme aus der Ferne möglich",
              "Taipei Indie Game Award — 19. August · kostenlos. Ein Beitrag pro Team; Materialupload vom 26. August bis 2. September",
              "Steam Next Fest, Oktober-Ausgabe — Anmeldung bis 31. August. Demo bis 21. September",
              "Mobidictum Showcase (Istanbul) — 31. August · kostenlos. 50 Indie Spots plus Awards",
              "IGF — um den 7. September · 75 $ (Befreiung beantragbar). Schon eine Nominierung zählt",
              "DevGAMM Awards — um den 7. September · kostenlos. Über 150 Jurorinnen und Juroren, im November auf IGN gestreamt",
              "G-Star Indie Showcase — im September · kostenlos. Auswahl wird am 17. Oktober bekannt gegeben",
              "Demospree — um den 5. Oktober · kostenlos. Demo-Streaming-Marathon im Januar",
              "BGM Game Expo Winter (China) — um den 17. Oktober · kostenlos. Messe im Dezember plus Awards",
              "Day of the Devs, Winterausgabe — August bis Oktober · kostenlos. Kuratiert",
              "BitSummit, Öffnung der regulären Anmeldung — um November · 33.000 ¥. Ein Titel pro Anmeldung",
              "Taipei INDIE HOUSE Stand — Herbst · kostenpflichtig. Die Messe selbst ist im Januar",
              "pitchyagame — November · kostenlos. Live-Pitching",
              "A MAZE. Berlin öffnet — 16. Dezember · kostenpflichtig. Schließt am 31. Januar"
            ]
          }
        },
        {
          h: "Ende 2026 — wo die Türen aufgehen",
          p: ["Unabhängig von den Bewerbungen: Diese Messen finden in der zweiten Jahreshälfte statt."],
          list: {
            h: "September bis Dezember",
            items: [
              "Tokyo Game Show — Ende September",
              "PAX West — Anfang September",
              "Steam Next Fest, Oktober-Ausgabe — 19. bis 26. Oktober",
              "gamescom asia x Thailand Game Show — 29. Oktober bis 1. November, Bangkok. Die Messe, auf der wir 2025 im koreanischen Pavillon ausgestellt haben",
              "G-Star + G-CON — 19. bis 22. November, Busan",
              "DevGAMM- und GWB-Preisverleihungen — November",
              "BGM Game Expo Winter — Dezember, China"
            ]
          }
        },
        {
          h: "Bewerbungen 2027 — Januar bis März",
          p: ["Hier entscheidet sich das Jahr. Allein im ersten Quartal schließen acht Ausschreibungen."],
          list: {
            h: "Fristen von Januar bis März",
            items: [
              "Steam Next Fest, Februar-Ausgabe — Anmeldung um den 5. Januar. Schließt sieben Wochen vor dem Event, und ein Spiel darf das genau einmal in seinem Leben",
              "gamescom latam BIG Festival — um den 15. Januar · kostenlos. São Paulo, 17 Kategorien, Ende April",
              "NEOWIZ Quest — 16. Januar · kostenlos. 165 Mio. Won Preisgeld",
              "A MAZE. Berlin — 31. Januar (Verlängerung bis etwa 10. Februar) · kostenpflichtig",
              "Tokyo Game Show SELECTED INDIE 80 öffnet — 10. Februar · kostenlos. Schließt am 30. April",
              "Indie Arena Booth — März bis April · kostenpflichtig, dazu kostenlose kuratierte Plätze. Rund 100 Jurymitglieder; Bescheid Ende April bis Anfang Mai",
              "G-Star, Frühbucher-Anmeldung — 3. März · kostenpflichtig. 10 % Rabatt auf die Standgebühr"
            ]
          }
        },
        {
          h: "Bewerbungen 2027 — April bis Juni",
          p: ["Hier überschneiden sich koreanische Förderprogramme und europäische Indie-Stände."],
          list: {
            h: "Fristen von April bis Juni",
            items: [
              "Day of the Devs (Summer-Game-Fest-Ausgabe) — um den 6. April · kostenlos. Kuratiert",
              "Smilegate IndieGo — 12. April · kostenlos. 10 Mio. Won",
              "Indie Arena Booth — um den 20. April · kostenpflichtig. Gemeinschaftsstand auf der gamescom",
              "Tokyo Game Show SELECTED INDIE 80 — 30. April · kostenlos. 80 ausgewählt, automatisch für SOWN nominiert",
              "Tiny Teams — um den 30. April · kostenlos. Teams mit höchstens fünf Personen, Demo erforderlich",
              "G-Star, Ende der Frühbucher-Anmeldung — 30. April · kostenpflichtig",
              "IndieCraft — 6. Mai · kostenlos. Bis zu 40 Mio. Won",
              "NC VARCO — 7. Mai · kostenlos",
              "gamescom dev Indie Expo — 8. Mai · kostenlos. 20 Teams auf 30 Plätze. Früher devcom, und die Frist ist nicht der 31. Mai",
              "BIC Festival — 25. Mai · kostenlos. Busan, findet im August statt",
              "G-Star, reguläre Anmeldung — 26. Mai · kostenpflichtig",
              "gamescom asia indie — um den 15. Juni · kostenpflichtig. Bangkok",
              "IndieCade, reguläre Einreichung — um Mitte Juni · 135 $. Das Festival ist im Januar",
              "GIGDC — 25. Juni · kostenlos",
              "LudoNarraCon — um den 26. Juni · kostenlos. Erzählerisch ausgerichtet und damit weniger passend für unser Genre",
              "G-Star, Ende der regulären Anmeldung — 31. Juli · kostenpflichtig"
            ]
          }
        },
        {
          h: "Messetermine 2027",
          p: ["Wo wir körperlich sein müssen, wenn die Bewerbungen aufgehen. Nur bereits angekündigte Termine stehen hier."],
          list: {
            h: "Januar bis November",
            items: [
              "Taipei Game Show + INDIE HOUSE — 21. bis 24. Januar. Indie-Game-Award-Verleihung am 20. Januar",
              "IndieCade-Festival und Demospree-Übertragung — Januar",
              "Steam Next Fest, Februar-Ausgabe — Februar",
              "GDC + IGF Awards — Anfang März, San Francisco",
              "gamescom latam — 30. April bis 3. Mai, São Paulo",
              "A MAZE. Berlin — Mitte Mai",
              "BitSummit — 21. bis 23. Mai, Kyoto",
              "Digital Dragons und Nordic Game — Mai",
              "Steam Next Fest, Juni-Ausgabe — Juni",
              "Develop:Brighton — 13. bis 15. Juli",
              "BIC Festival — Mitte August, Busan",
              "gamescom dev und gamescom — Ende August, Köln",
              "Tokyo Game Show — Ende September",
              "G-Star — November, Busan"
            ]
          }
        },
        {
          h: "Ausschreibungen ohne Frist",
          p: ["Diese sind unabhängig vom Kalender offen. Kein Termin zwingt uns — was heißt, dass wir uns selbst hindurchschieben müssen, sobald der Build steht."],
          list: {
            h: "Sechs dauerhafte Ausschreibungen",
            items: [
              "Big Indie Pitch — kostenlos. Findet das ganze Jahr über in verschiedenen Städten statt; der einzige dauerhaft offene Pitch",
              "Epic MegaGrants — kostenlos. Laufende Einreichung für Unreal-Projekte",
              "INDIE Live Expo — kostenlos. Zweimal jährlich, online",
              "PAX Rising — kostenpflichtig. West / East / Aus werden getrennt beantragt",
              "gamescom dev B2B-Stand — 1.499 €. Acht Indie-Teams, gamescom Halle 4.1",
              "Steam Direct — 100 $ pro App, rückerstattet, sobald das Spiel 1.000 $ Umsatz überschreitet"
            ]
          }
        },
        {
          h: "In welcher Reihenfolge wir gehen",
          p: [
            "Für ein Ein-Personen-Studio kosten Reise und Unterkunft mehr als der Stand. Eine europäische oder nordamerikanische Messe ist die teuerste Sorte, selbst wenn die Teilnahme kostenlos ist. Deshalb steht die Reihenfolge vorher fest.",
            "Fighting Nations führt jede Ausschreibung an. Ein Kampfspiel ist stark auf großen allgemeinen Festivals und bei Awards und schwach bei Steam-Events, die um ein einzelnes Genre herum gebaut sind. Kingdom Wars läuft im Browser und fällt damit aus den Ständen heraus; es geht stattdessen zu Online-Events des Strategie-Genres und zu kostenlosen Steam-Events."
          ],
          list: {
            h: "Priorität",
            items: [
              "1. Kostenlose Online- und Jury-Ausschreibungen — keine Reisekosten",
              "2. Korea — G-Star, BIC Festival",
              "3. Nahes Asien — Taipeh, Bangkok, Kyoto",
              "4. Europa und Nordamerika — wenn wir ausgewählt werden oder eine Reiseförderung dabei ist"
            ]
          }
        },
        {
          h: "Was feststeht und was nicht",
          p: [
            "Diese Seite ist ein Plan, für den wir uns bewerben. Sie ist keine Liste von Ergebnissen. Wo wir tatsächlich angenommen werden, steht auf der Zeitleiste der Startseite, sobald wir es wissen — so haben wir es bisher gehalten.",
            "Die Termine verbinden die Ankündigungen der Veranstalter mit dem Kalender, den sie in früheren Jahren eingehalten haben. Weicht eine offizielle Ankündigung ab, gilt die Ankündigung, und wir korrigieren diese Seite, sobald wir es bestätigen können.",
            "Zuletzt aktualisiert: 19. August 2026."
          ]
        }
      ],
      slides: [
        "Der koreanische Pavillon auf der gamescom asia x Thailand Game Show, Oktober 2025. Die Liste darunter ist, wohin es als Nächstes geht.",
        "Das Schild unseres Stands und das Fighting-Nations-Plakat. So wollen wir auch bei den oben genannten Messen auftreten.",
        "Treffen mit einem indischen Distributor auf der Thailand Game Show. Solche Gespräche sind der Grund, warum wir hinfahren.",
        "Das Spiel, das wir mitnehmen — Fighting Nations. Die meisten Ausschreibungen oben laufen über diesen Titel.",
        "Jeder Kämpfer trägt ein Land und dessen Kampftradition. Figuren aus 13 Ländern, nur mit bloßen Händen.",
        "Kingdom Wars läuft im Browser und lässt die Stände daher aus — es geht zu Online-Events.",
        "Die Bewerbung für den Taipei Indie Game Award 2027, 16. August 2026. Die Finalisten werden am 14. Oktober bekannt gegeben.",
        "Der Eingang zum Business-Bereich der Thailand Game Show, Oktober 2025 — dorthin führen die Termine oben.",
        "Gründer Kent Kim stellt Fighting Nations am Stand vor. Bei jeder Messe dieser Liste steht er selbst am Stand.",
        "Global Game Challenge 2025 — am 29. November 2025 an der Chung-Ang-Universität in Seoul. Ein Ort, den wir durch Auswahl erreicht haben.",
        "Unser Stand bei der GGC-Einladungsausstellung herausragender Indie-Spiele, eingeladen als eines von rund 20 ausgewählten Titeln.",
        "Ein Besucher spielt Fighting Nations am Stand.",
        "24. Juni 2026 — Kooperationsvereinbarung mit der Incheon International Airport Corporation. Deother ist eines von drei Start-ups, die den AI-PORT des Flughafens mit aufbauen sollen.",
        "Gründer Kent Kim bei der Unterzeichnung. Der erste Preis beim KI-Wettbewerb der Flughafengesellschaft führte zu dieser Vereinbarung."
      ],
      cta: "Das Spiel spielen, das wir einreichen", back: "Zurück zu Deother"
    },

    ru: {
      title: "Календарь фестивалей по годам",
      tagline: "Все фестивали, на которые мы подаём заявки, — с конца 2026 по 2027 год",
      intro: "Мы пересчитали все конкурсы, куда можем подать заявку, — их 38 — и разложили по календарю: 19 бесплатных, 11 платных, 6 с призовым фондом, 2 открыты круглый год. Ниже — план, по которому мы подаёмся, а не список результатов. Результаты появляются на ленте пути на главной странице по мере поступления.",
      sections: [
        {
          h: "Что мы уже подали",
          p: ["С мая 2025 года мы подали более 330 заявок на конкурсы и программы поддержки. Ниже — только заявки в сфере игр и стартапов; когда придут результаты, статус этих строк изменится."],
          list: {
            h: "Журнал заявок",
            items: [
              "10 июля 2025 · D.CAMP · подано",
              "10 июля 2025 · Gwanak S-Valley Startup Scale-Up Demo Day · подано",
              "10 июля 2025 · Haim Ventures · подано",
              "17 июля 2025 · Конкурс стартапов Корея–Китай–Япония · подано",
              "17 июля 2025 · SNU Connect Day × Antler Korea · подано",
              "18 июля 2025 · Конкурс стартап-инвестиций BNK · подано",
              "21 июля 2025 · Программа выхода МСП на рынок Ближнего Востока 2025 (Korea Venture Business Association) · не отобрано",
              "23 июля 2025 · Фонд стартапов Orange Planet · подано",
              "дедлайн 25 июля 2025 · Supercent — Game Development Academy with AI · не отобрано",
              "дедлайн 28 июля 2025 · Совместный павильон G-Connection (TCCF Тайвань · ATF Сингапур) · подано",
              "дедлайн 31 июля 2025 · Конкурс фонда Game-in — корейские традиционные игры и ИИ · подано",
              "4 августа 2025 · Gyeonggi Global Game Center — программа подготовки к привлечению инвестиций, одна из 10 отобранных студий · ✅ отобрано",
              "19 августа 2025 · Поп-ап-выставка игрового контента Gyeonggi Content Agency · ✅ отобрано",
              "19 августа 2025 · Content IP Market 2025 (COEX) · подано",
              "дедлайн 22 августа 2025 · Совместный павильон Тэджона на G-STAR 2025 (агентство развития Тэджона) · не отобрано",
              "23 августа 2025 · Seoul Game Contest 2025 (Seoul Business Agency) · не отобрано",
              "дедлайн 27 августа 2025 · Suncheon AI Game Jam 2025 · не отобрано",
              "2 сентября 2025 · 1-й конкурс инди-игр NC AI VARCO 3D — Fighting Nations · не отобрано",
              "дедлайн 31 декабря 2025 · 2-й глобальный конкурс разработки игр Com2uS — Com:ON · не отобрано",
              "9 сентября 2025 · IGGK Indie Game Awards · подано",
              "11 сентября 2025 · Премия «Игра месяца» (KOCCA) — Fighting Nations · не отобрано",
              "14 сентября 2025 · Зона инди-игр Contents Universe Korea · подано",
              "дедлайн 15 сентября 2025 · Com2uS Holdings Game Challenge · подано",
              "16 сентября 2025 · Gyeonggi AI Content Lab 2025, направление коммерческого видео (Gyeonggi Content Agency) — прошли отбор по документам, затем собеседование · не отобрано",
              "22 сентября 2025 · Korea–Arab Startup Pitch Competition (KITA) · подано",
              "23 сентября 2025 · Программа совместного выхода на зарубежные рынки Megazone Cloud — стенд корейского павильона на Thailand Game Show / gamescom asia · ✅ отобрано",
              "дедлайн 16 ноября 2025 · Global Game Challenge 2025, выставка лучших инди-игр по приглашению (Korean Game Society, отобрано около 20 работ) · ✅ отобрано",
              "31 декабря 2025 · 2-й конкурс разработки игр на VARCO, выпуск Voice (NC AI) — Fighting Nations · не отобрано",
              "16 января 2026 · NEOWIZ Quest — Fighting Nations · подано",
              "дедлайн 28 февраля 2026 · Программа поддержки регистрации авторских прав за рубежом · подано",
              "дедлайн 12 марта 2026 · Корейский павильон Licensing Expo · подано",
              "дедлайн 12 марта 2026 · Конкурс стартапов Кёнгидо 2026 — отбор G-Star · подано",
              "21 марта 2026 · Epic MegaGrants (1-е полугодие) · подано",
              "дедлайн 25 марта 2026 · Game Plus — поддержка выхода на зарубежные рынки (KOCCA) · подано",
              "дедлайн 27 марта 2026 · Программа поддержки участия в зарубежных маркетах · подано",
              "дедлайн 27 марта 2026 · Korea Contents Week 2026 (KCW) — выход на рынок Китая, KOCCA · подано",
              "дедлайн 31 марта 2026 · 5-й конкурс стартапов на базе ИИ и открытых данных · подано",
              "дедлайн 31 марта 2026 · Game Icon Seoul 2026 · подано",
              "дедлайн 1 апреля 2026 · Программа поддержки коммерциализации игр · подано",
              "дедлайн 3 апреля 2026 · Korea Innovation Startup Awards 2026 · подано",
              "дедлайн 12 апреля 2026 · Конкурс инди-игр Smilegate · подано",
              "дедлайн 30 апреля 2026 · Qualcomm AI Innovator Program (QAIPI) 2026-APAC — ИИ на устройстве · подано",
              "дедлайн 7 мая 2026 · Seoul Play Up AI Game Challenge · подано",
              "дедлайн 19 мая 2026 · Korea Content Awards 2026 — номинация «История» (KOCCA) · подано",
              "дедлайн 3 июня 2026 · Smilegate Membership (SGM), 18-й инди-набор · подано",
              "15 августа 2026 · GWB Game Awards (Tencent) — Fighting Nations · подано; церемония в ноябре",
              "16 августа 2026 · Taipei Indie Game Award 2027 — Fighting Nations · подано; финалисты 14 октября",
              "16 августа 2026 · Epic MegaGrants (2-е полугодие) — Fighting Nations · подано, на рассмотрении",
              "16 августа 2026 · Xsolla Funding Club — Fighting Nations · подано, на рассмотрении",
              "3 апреля 2026 · Корейский павильон gamescom asia 2026 (Таиланд) · не отобрано",
              "3 апреля 2026 · Корейский павильон gamescom 2026 (Германия) · не отобрано",
              "3 апреля 2026 · Корейский павильон Tokyo Game Show 2026 · не отобрано",
              "20 июля 2026 · Sweden Game Conference 2026 · подано",
              "18 августа 2026 · Content IP Market 2026 (COEX, отобрано 80 компаний) · подано",
              "18 августа 2026 · Gaming Istanbul GIST 2026 (отобрано 3 компании) — Fighting Nations · подано",
              "18 августа 2026 · Mobidictum Indie Desk 2026 (Стамбул) — Fighting Nations · подано",
              "дедлайн 10 сентября 2025 · 17-я премия Unity Awards (в категории Most Anticipated Games) — Fighting Nations: The Iron Dragon Tournament · не отобрано",
              "28 июля 2025 · 2025 Content Startup Battlefield (KOCCA) · не отобрано",
              "дедлайн 18 августа 2025 · 2025 Korea–Brunei Startup Networking and Pitching Competition (ИИ и игры, отобрано 6 компаний) · не отобрано",
              "17 августа 2026 · 21-й Gyeonggi Game Audition — Fighting Nations · подано",
              "дедлайн 25 июня 2026 · GIGDC 2026 Global Indie Game Making Contest — Miliverse · подано",
              "дедлайн 26 июня 2026 · Конкурс ИИ и данных в сфере культуры, спорта и туризма (Министерство культуры, спорта и туризма) · подано",
              "дедлайн 31 июля 2026 · 2026 Gyeonggi Virtual-Convergence Content Challenge — Miliverse · не отобрано",
              "3 апреля 2026 · ChinaJoy 2026 · не отобрано"
            ]
          }
        },
        {
          h: "Что мы получили",
          p: ["Мы не только подавали заявки — мы шли и учились тому, что нужно. Началось это с недельного воркшопа по Unity в 2019 году, а только с августа 2025 года пройдено ещё девятнадцать курсов: Unity и Unreal Engine, генеративный ИИ и reality capture, блокчейн и Solidity, организация киберспортивных турниров, международные стандарты ИИ и цифровых активов. И две награды по пути."],
          list: {
            h: "Пройденные курсы и награды",
            items: [
              "11 декабря 2019 · Gamebridge Unityversity — недельный воркшоп по разработке игр на Unity (Unity 2018.4 LTS, wcoding, Сеул) · ✅ пройдено",
              "20 августа 2025 · Gyeonggi Content Agency — Gyeonggi Metaverse Campus 2025: проектное производство контента для метавселенных на Unity (100 ч.) · ✅ пройдено",
              "7 сентября 2025 · Конкурс коротких видео YTN Seoul Tower · 🏆 Поощрительная премия",
              "18 сентября 2025 · Gyeonggi Business & Science Accelerator (GBSA), deep-tech академия — «Бизнес-модели на данных: от идеи до прототипа» · ✅ пройдено",
              "31 октября 2025 · Корейская ассоциация индустрии метавселенной — производство контента на генеративном ИИ в Unreal и reality capture (60 ч.) · ✅ пройдено",
              "4 ноября 2025 · Gyeonggi Game Academy 2025 — подготовка геймдев-разработчиков с ИИ (занятия 9 и 10) · ✅ пройдено",
              "17 ноября 2025 · Академия киберспорта Кванджу — курс по организации киберспортивных турниров · ✅ пройдено",
              "23 апреля 2026 · The Circle Foundation AI Academy, 3-й поток — AI vibe coding (15 ч.) · ✅ пройдено",
              "29 апреля 2026 · Telecommunications Technology Association (TTA) — подготовка экспертов по ИКТ-стандартам: международная стандартизация искусственного интеллекта (5 ч.) · ✅ пройдено",
              "29 апреля 2026 · Telecommunications Technology Association (TTA) — подготовка экспертов по ИКТ-стандартам: международная стандартизация автономной мобильности (6 ч.) · ✅ пройдено",
              "29 апреля 2026 · Telecommunications Technology Association (TTA) — подготовка экспертов по ИКТ-стандартам: международная стандартизация безопасности нового поколения и блокчейна (4 ч.) · ✅ пройдено",
              "9 мая 2026 · Korea Internet & Security Agency (KISA) — Blockchain Meetup Day 2026: изучение Solidity и план его применения · ✅ пройдено",
              "28 мая 2026 · Telecommunications Technology Association (TTA) — будущее и стратегия цифровых активов (4 ч.) · ✅ пройдено",
              "30 мая 2026 · Korea Internet & Security Agency (KISA) — Blockchain Meetup Day 2026: разработка блокчейн-кошелька · ✅ пройдено",
              "1 июня 2026 · 107-й Национальный спортивный фестиваль и 46-е Национальные пара-игры на Чеджу — категория песни поддержки (провинция Чеджу) · 🏆 Премия за отличие",
              "13 июня 2026 · Korea Internet & Security Agency (KISA) — Blockchain Meetup Day 2026: депозитные токены — понимание и реализация · ✅ пройдено",
              "27 июня 2026 · Korea Internet & Security Agency (KISA) — Blockchain Meetup Day 2026: децентрализованные платформы приватности (DPP) и практика безопасности · ✅ пройдено",
              "12 июля 2026 · Korea Internet & Security Agency (KISA) — Blockchain Meetup Day 2026: блокчейн-сервисы на генеративном ИИ · ✅ пройдено",
              "23 июля 2026 · Gyeonggi Content Agency — Gyeonggi Metaverse Campus 2026: контент на визуальном скриптинге Unreal Engine (20 часов) · ✅ пройдено",
              "30 июля 2026 · Gyeonggi Content Agency — Gyeonggi Metaverse Campus 2026: кинематографика в Unreal Engine (20 часов) · ✅ пройдено",
              "6 августа 2026 · Gyeonggi Content Agency — Gyeonggi Metaverse Campus 2026: ИИ-NPC на Unreal Engine (20 часов) · ✅ пройдено",
              "13 августа 2026 · Gyeonggi Content Agency — Gyeonggi Metaverse Campus 2026: создание ассетов с помощью генеративного ИИ (20 часов) · ✅ пройдено",
            ]
          }
        },
        {
          h: "Зачем публиковать план",
          p: [
            "Сделать игру и донести её до людей — две разные работы. В студии из одного человека вторую нельзя делать наугад: так теряется целый год. Поэтому мы пересчитали все доступные конкурсы, разложили их по календарю и публикуем этот календарь как есть.",
            "Обнаружилась закономерность. Заявки собираются в первой половине года, а сами фестивали проходят во второй. 24 из 38 закрываются с января по июнь. Если начать шевелиться в августе, большая часть года уже позади. В 2027-м мы начинаем с января."
          ],
          list: {
            h: "Из чего состоят 38 конкурсов",
            items: [
              "19 бесплатных — при отборе организатор берёт расходы на участие на себя",
              "11 платных — взнос за участие или за стенд",
              "6 с призовым фондом или производственным грантом",
              "2 открыты круглый год, без дедлайна"
            ]
          }
        },
        {
          h: "Конец 2026 года — куда подаёмся сейчас",
          p: ["Открыты или вот-вот откроются — по состоянию на август 2026 года, когда собиралась эта страница."],
          list: {
            h: "Дедлайны с августа по декабрь",
            items: [
              "GWB Game Awards (Tencent) — середина августа · бесплатно. Ведёт к церемонии в ноябре и событию в Steam",
              "EVA Play (Буэнос-Айрес) — около 17 августа · бесплатно. Возможно удалённое участие",
              "Taipei Indie Game Award — 19 августа · бесплатно. Одна заявка от команды; загрузка материалов с 26 августа по 2 сентября",
              "Steam Next Fest, октябрьский выпуск — регистрация до 31 августа. Демо — до 21 сентября",
              "Mobidictum Showcase (Стамбул) — 31 августа · бесплатно. 50 мест Indie Spot и награды",
              "IGF — около 7 сентября · $75 (можно попросить освобождение). Даже номинация уже чего-то стоит",
              "DevGAMM Awards — около 7 сентября · бесплатно. Более 150 судей, трансляция на IGN в ноябре",
              "G-Star Indie Showcase — в течение сентября · бесплатно. Итоги отбора объявят 17 октября",
              "Demospree — около 5 октября · бесплатно. Январский марафон демоверсий в прямом эфире",
              "BGM Game Expo Winter (Китай) — около 17 октября · бесплатно. Офлайн-выставка в декабре и награды",
              "Day of the Devs, зимний выпуск — с августа по октябрь · бесплатно. Кураторский отбор",
              "BitSummit, открытие общей регистрации — около ноября · 33 000 ¥. Один тайтл на заявку",
              "Стенд Taipei INDIE HOUSE — осень · платно. Сама выставка в январе",
              "pitchyagame — ноябрь · бесплатно. Живой питчинг",
              "A MAZE. Берлин открывается — 16 декабря · платно. Закрывается 31 января"
            ]
          }
        },
        {
          h: "Конец 2026 года — где открываются двери",
          p: ["Отдельно от заявок: вот фестивали, которые реально проходят во второй половине года."],
          list: {
            h: "С сентября по декабрь",
            items: [
              "Tokyo Game Show — конец сентября",
              "PAX West — начало сентября",
              "Steam Next Fest, октябрьский выпуск — 19–26 октября",
              "gamescom asia x Thailand Game Show — 29 октября — 1 ноября, Бангкок. Та самая выставка, где мы стояли в корейском павильоне в 2025 году",
              "G-Star + G-CON — 19–22 ноября, Пусан",
              "Церемонии DevGAMM и GWB — ноябрь",
              "BGM Game Expo Winter — декабрь, Китай"
            ]
          }
        },
        {
          h: "Заявки 2027 года — с января по март",
          p: ["Здесь решается год. Только в первом квартале закрываются восемь конкурсов."],
          list: {
            h: "Дедлайны с января по март",
            items: [
              "Steam Next Fest, февральский выпуск — регистрация около 5 января. Закрывается за семь недель до события, и игра может участвовать лишь однажды за всю жизнь",
              "gamescom latam BIG Festival — около 15 января · бесплатно. Сан-Паулу, 17 номинаций, проходит в конце апреля",
              "NEOWIZ Quest — 16 января · бесплатно. Призовой фонд 165 млн вон",
              "A MAZE. Берлин — 31 января (продление примерно до 10 февраля) · платно",
              "Tokyo Game Show SELECTED INDIE 80 открывается — 10 февраля · бесплатно. Закрывается 30 апреля",
              "Indie Arena Booth — март–апрель · платно, плюс бесплатные кураторские места. Около 100 судей; ответ в конце апреля — начале мая",
              "G-Star, ранняя регистрация — 3 марта · платно. Скидка 10 % на стенд"
            ]
          }
        },
        {
          h: "Заявки 2027 года — с апреля по июнь",
          p: ["Здесь накладываются друг на друга корейские программы поддержки и европейские инди-стенды."],
          list: {
            h: "Дедлайны с апреля по июнь",
            items: [
              "Day of the Devs (выпуск Summer Game Fest) — около 6 апреля · бесплатно. Кураторский отбор",
              "Smilegate IndieGo — 12 апреля · бесплатно. 10 млн вон",
              "Indie Arena Booth — около 20 апреля · платно. Общий стенд на gamescom",
              "Tokyo Game Show SELECTED INDIE 80 — 30 апреля · бесплатно. Отбирают 80 игр, автоматически попадают в номинанты SOWN",
              "Tiny Teams — около 30 апреля · бесплатно. Команды до пяти человек, демо обязательно",
              "G-Star, закрытие ранней регистрации — 30 апреля · платно",
              "IndieCraft — 6 мая · бесплатно. До 40 млн вон",
              "NC VARCO — 7 мая · бесплатно",
              "gamescom dev Indie Expo — 8 мая · бесплатно. 20 команд на 30 мест. Бывший devcom, и дедлайн — не 31 мая",
              "BIC Festival — 25 мая · бесплатно. Пусан, проходит в августе",
              "G-Star, общая регистрация — 26 мая · платно",
              "gamescom asia indie — около 15 июня · платно. Бангкок",
              "IndieCade, обычный приём заявок — около середины июня · $135. Сам фестиваль в январе",
              "GIGDC — 25 июня · бесплатно",
              "LudoNarraCon — около 26 июня · бесплатно. Нарративный уклон, нашему жанру подходит хуже",
              "G-Star, закрытие общей регистрации — 31 июля · платно"
            ]
          }
        },
        {
          h: "Даты фестивалей 2027 года",
          p: ["Где придётся быть лично, если заявки сработают. Указаны только уже объявленные даты."],
          list: {
            h: "С января по ноябрь",
            items: [
              "Taipei Game Show + INDIE HOUSE — 21–24 января. Церемония Indie Game Award 20 января",
              "Фестиваль IndieCade и трансляция Demospree — январь",
              "Steam Next Fest, февральский выпуск — февраль",
              "GDC + награды IGF — начало марта, Сан-Франциско",
              "gamescom latam — 30 апреля — 3 мая, Сан-Паулу",
              "A MAZE. Берлин — середина мая",
              "BitSummit — 21–23 мая, Киото",
              "Digital Dragons и Nordic Game — май",
              "Steam Next Fest, июньский выпуск — июнь",
              "Develop:Brighton — 13–15 июля",
              "BIC Festival — середина августа, Пусан",
              "gamescom dev и gamescom — конец августа, Кёльн",
              "Tokyo Game Show — конец сентября",
              "G-Star — ноябрь, Пусан"
            ]
          }
        },
        {
          h: "Конкурсы без дедлайна",
          p: ["Они открыты независимо от календаря. Ничего не подгоняет по срокам — а значит, протолкнуть себя туда придётся самим, как только билд будет готов."],
          list: {
            h: "Шесть постоянных конкурсов",
            items: [
              "Big Indie Pitch — бесплатно. Проходит в разных городах круглый год; единственный постоянно открытый питчинг",
              "Epic MegaGrants — бесплатно. Приём заявок в любое время для проектов на Unreal",
              "INDIE Live Expo — бесплатно. Дважды в год, онлайн",
              "PAX Rising — платно. West / East / Aus подаются отдельно",
              "B2B-стенд gamescom dev — 1499 €. Восемь инди-команд, зал 4.1 на gamescom",
              "Steam Direct — $100 за приложение, возвращаются, когда игра превысит $1000 выручки"
            ]
          }
        },
        {
          h: "В каком порядке мы идём",
          p: [
            "Для студии из одного человека дорога и проживание стоят дороже стенда. Европейская или североамериканская выставка — самая дорогая, даже когда участие бесплатное. Поэтому порядок определён заранее.",
            "Fighting Nations идёт первым во всех конкурсах. Файтинг силён на больших общих фестивалях и в наградах и слаб на событиях Steam, построенных вокруг одного жанра. Kingdom Wars работает в браузере, поэтому выпадает из конкурсов с физическими стендами и идёт на онлайн-события стратегического жанра и бесплатные события Steam."
          ],
          list: {
            h: "Приоритет",
            items: [
              "1. Бесплатные онлайн- и судейские конкурсы — без расходов на дорогу",
              "2. Корея — G-Star, BIC Festival",
              "3. Ближняя Азия — Тайбэй, Бангкок, Киото",
              "4. Европа и Северная Америка — когда нас отберут или когда к этому приложат поддержку на поездку"
            ]
          }
        },
        {
          h: "Что решено, а что нет",
          p: [
            "Эта страница — план, по которому мы подаёмся. Это не список результатов. Куда нас действительно взяли, попадает на ленту пути на главной странице, когда мы это узнаём, — так мы делали и раньше.",
            "Даты собраны из объявлений самих событий и того расписания, которого они держались в прошлые годы. Если официальное объявление говорит иное, право за объявлением, и мы правим эту страницу по мере подтверждения.",
            "Последнее обновление: 19 августа 2026 года."
          ]
        }
      ],
      slides: [
        "Корейский павильон на gamescom asia x Thailand Game Show, октябрь 2025 года. Список ниже — это то, куда мы едем дальше.",
        "Вывеска нашего стенда и постер Fighting Nations. Именно так мы намерены выходить и на перечисленные выше фестивали.",
        "Встреча с индийским дистрибьютором на Thailand Game Show. Ради таких разговоров мы и ездим.",
        "Игра, которую мы берём с собой, — Fighting Nations. Большинство конкурсов выше подаются именно с ней.",
        "Каждый боец несёт свою страну и её боевую традицию. Персонажи из 13 стран, только голые руки.",
        "Kingdom Wars работает в браузере, поэтому обходит физические стенды и идёт на онлайн-события.",
        "Заявка на Taipei Indie Game Award 2027, 16 августа 2026 года. Финалистов объявят 14 октября.",
        "Вход в бизнес-зону Thailand Game Show, октябрь 2025 — именно туда ведут даты из списка выше.",
        "Основатель Kent Kim рассказывает о Fighting Nations на стенде. На каждой выставке из списка он стоит за стендом сам.",
        "Global Game Challenge 2025 — 29 ноября 2025 года, Университет Чунг-Ан в Сеуле. Место, куда мы попали по отбору.",
        "Наш стенд на выставке лучших инди-игр GGC по приглашению — среди примерно 20 отобранных работ.",
        "Посетитель играет в Fighting Nations на стенде.",
        "24 июня 2026 года — соглашение о сотрудничестве с корпорацией международного аэропорта Инчхон. Deother — один из трёх стартапов, отобранных для создания AI-PORT аэропорта.",
        "Основатель Kent Kim на церемонии подписания. Первая премия на конкурсе ИИ аэропортовой корпорации привела к этому соглашению."
      ],
      cta: "Сыграть в игру, которую мы подаём", back: "Назад в Deother"
    },

    ar: {
      title: "خارطة طريق المعارض حسب السنة",
      tagline: "كل المعارض التي نتقدّم إليها، من أواخر 2026 حتى 2027",
      intro: "أحصينا كل المسارات التي يمكننا التقدّم إليها — ثمانية وثلاثون — ووضعناها في تقويم: 19 مجانيًا، و11 مدفوعًا، و6 بجوائز مالية، واثنان مفتوحان طوال العام. ما يلي خطة نتقدّم بها، وليست قائمة نتائج. النتائج تُكتب في خط مسيرتنا على الصفحة الرئيسية أولًا بأول.",
      sections: [
        {
          h: "ما قدّمناه فعلًا حتى الآن",
          p: ["منذ مايو 2025 قدّمنا أكثر من 330 طلب إلى مسابقات وبرامج دعم. في ما يلي طلبات مجال الألعاب وريادة الأعمال فقط؛ وعندما تصدر النتائج يتغيّر وضع هذه الأسطر."],
          list: {
            h: "سجلّ التقديمات",
            items: [
              "‏10 يوليو 2025 · D.CAMP · قُدِّم",
              "‏10 يوليو 2025 · Gwanak S-Valley Startup Scale-Up Demo Day · قُدِّم",
              "‏10 يوليو 2025 · Haim Ventures · قُدِّم",
              "‏17 يوليو 2025 · مسابقة الشركات الناشئة كوريا–الصين–اليابان · قُدِّم",
              "‏17 يوليو 2025 · SNU Connect Day × Antler Korea · قُدِّم",
              "‏18 يوليو 2025 · مسابقة BNK للاستثمار في الشركات الناشئة · قُدِّم",
              "‏23 يوليو 2025 · مؤسسة Orange Planet للشركات الناشئة · قُدِّم",
              "‏الموعد النهائي 25 يوليو 2025 · Supercent — أكاديمية تطوير الألعاب بالذكاء الاصطناعي · لم يُختَر",
              "‏الموعد النهائي 28 يوليو 2025 · الجناح المشترك G-Connection (TCCF تايوان · ATF سنغافورة) · قُدِّم",
              "‏الموعد النهائي 31 يوليو 2025 · مسابقة مؤسسة Game-in — الألعاب الكورية التقليدية بالذكاء الاصطناعي · قُدِّم",
              "‏4 أغسطس 2025 · مركز كيونغي العالمي للألعاب — برنامج التهيّؤ للاستثمار، أحد 10 استوديوهات مختارة · ✅ تم اختياره",
              "‏19 أغسطس 2025 · معرض مؤقّت لمحتوى الألعاب من وكالة محتوى كيونغي · ✅ تم اختياره",
              "‏19 أغسطس 2025 · سوق ملكية المحتوى 2025 (COEX) · قُدِّم",
              "‏الموعد النهائي 18 أغسطس 2025 · مسابقة كوريا–بروناي للتواصل وعروض الشركات الناشئة 2025 (الذكاء الاصطناعي والألعاب، اختيار 6 شركات) · لم يُختَر",
              "‏الموعد النهائي 22 أغسطس 2025 · الجناح المشترك لمدينة تيجون في G-STAR 2025 (وكالة تيجون لتنمية الصناعات) · لم يُختَر",
              "‏23 أغسطس 2025 · مسابقة سيول للألعاب 2025 (وكالة سيول للأعمال) · لم يُختَر",
              "‏الموعد النهائي 27 أغسطس 2025 · ‏Suncheon AI Game Jam 2025 · لم يُختَر",
              "‏2 سبتمبر 2025 · مسابقة NC AI VARCO 3D للألعاب المستقلة (الدورة الأولى) — Fighting Nations · لم يُختَر",
              "‏الموعد النهائي 31 ديسمبر 2025 · مسابقة Com2uS العالمية الثانية لتطوير الألعاب — Com:ON · لم يُختَر",
              "‏9 سبتمبر 2025 · جوائز IGGK للألعاب المستقلة · قُدِّم",
              "‏الموعد النهائي 10 سبتمبر 2025 · جوائز Unity السابعة عشرة (مُدرَجة في فئة Most Anticipated Games) — Fighting Nations: The Iron Dragon Tournament · لم يُختَر",
              "‏11 سبتمبر 2025 · جائزة لعبة الشهر (وكالة كوكا الكورية) — Fighting Nations · لم يُختَر",
              "‏14 سبتمبر 2025 · منطقة الألعاب المستقلة في Contents Universe Korea · قُدِّم",
              "‏الموعد النهائي 15 سبتمبر 2025 · تحدي ألعاب Com2uS Holdings · قُدِّم",
              "‏16 سبتمبر 2025 · مختبر كيونغي للمحتوى بالذكاء الاصطناعي 2025، مسار الفيديو التجاري (وكالة محتوى كيونغي) — اجتياز الفرز الورقي ثم المقابلة · لم يُختَر",
              "‏22 سبتمبر 2025 · مسابقة العروض للشركات الناشئة كوريا–العرب (KITA) · قُدِّم",
              "‏23 سبتمبر 2025 · برنامج Megazone Cloud للتوسّع الخارجي المشترك — جناح كوريا في Thailand Game Show / gamescom asia · ✅ تم اختياره",
              "‏الموعد النهائي 16 نوفمبر 2025 · ‏Global Game Challenge 2025 — معرض الألعاب المستقلة المتميّزة بالدعوة (الجمعية الكورية للألعاب، نحو 20 عملاً) · ✅ تم اختياره",
              "‏31 ديسمبر 2025 · مسابقة صناعة الألعاب باستخدام VARCO (الدورة الثانية) — إصدار Voice من NC AI — Fighting Nations · لم يُختَر",
              "‏16 يناير 2026 · NEOWIZ Quest — Fighting Nations · قُدِّم",
              "‏الموعد النهائي 28 فبراير 2026 · برنامج دعم تسجيل حقوق النشر في الخارج · قُدِّم",
              "‏الموعد النهائي 12 مارس 2026 · الجناح الكوري في معرض التراخيص · قُدِّم",
              "‏الموعد النهائي 12 مارس 2026 · مسابقة كيونغي للشركات الناشئة 2026 — تصفيات G-Star · قُدِّم",
              "‏21 مارس 2026 · Epic MegaGrants (النصف الأول) · قُدِّم",
              "‏الموعد النهائي 25 مارس 2026 · Game Plus — دعم الإطلاق الدولي (وكالة كوكا) · قُدِّم",
              "‏الموعد النهائي 27 مارس 2026 · برنامج دعم المشاركة في الأسواق الخارجية · قُدِّم",
              "‏الموعد النهائي 27 مارس 2026 · Korea Contents Week 2026 (KCW) — دخول السوق الصينية (وكالة كوكا) · قُدِّم",
              "‏الموعد النهائي 31 مارس 2026 · المسابقة الخامسة لريادة الأعمال بالذكاء الاصطناعي والبيانات العامة · قُدِّم",
              "‏الموعد النهائي 31 مارس 2026 · Game Icon Seoul 2026 · قُدِّم",
              "‏الموعد النهائي 1 أبريل 2026 · برنامج دعم تسويق الألعاب · قُدِّم",
              "‏الموعد النهائي 3 أبريل 2026 · جوائز كوريا للابتكار وريادة الأعمال 2026 · قُدِّم",
              "‏الموعد النهائي 12 أبريل 2026 · مسابقة Smilegate للألعاب المستقلة · قُدِّم",
              "‏الموعد النهائي 30 أبريل 2026 · برنامج Qualcomm AI Innovator (QAIPI) 2026-APAC — الذكاء الاصطناعي على الجهاز · قُدِّم",
              "‏الموعد النهائي 7 مايو 2026 · تحدي سيول Play Up لألعاب الذكاء الاصطناعي · قُدِّم",
              "‏الموعد النهائي 19 مايو 2026 · جوائز كوريا للمحتوى 2026 — فرع القصة (وكالة كوكا) · قُدِّم",
              "‏الموعد النهائي 3 يونيو 2026 · عضوية Smilegate (SGM) — الدفعة 18 للألعاب المستقلة · قُدِّم",
              "‏الموعد النهائي 25 يونيو 2026 · مسابقة GIGDC 2026 العالمية لصناعة الألعاب المستقلة — Miliverse · قُدِّم",
              "‏الموعد النهائي 26 يونيو 2026 · مسابقة الذكاء الاصطناعي والبيانات في الثقافة والرياضة والسياحة (وزارة الثقافة والرياضة والسياحة) · قُدِّم",
              "‏الموعد النهائي 31 يوليو 2026 · تحدي محتوى الاندماج الافتراضي كيونغي 2026 — Miliverse · لم يُختَر",
              "‏15 أغسطس 2026 · GWB Game Awards (تنسنت) — Fighting Nations · قُدِّم، والحفل في نوفمبر",
              "‏16 أغسطس 2026 · Taipei Indie Game Award 2027 — Fighting Nations · قُدِّم، وتُعلن القائمة النهائية في 14 أكتوبر",
              "‏16 أغسطس 2026 · Epic MegaGrants (النصف الثاني) — Fighting Nations · قُدِّم، قيد المراجعة",
              "‏16 أغسطس 2026 · Xsolla Funding Club — Fighting Nations · قُدِّم، قيد المراجعة",
              "‏3 أبريل 2026 · الجناح الكوري في gamescom asia 2026 (تايلاند) · لم يُختَر",
              "‏3 أبريل 2026 · الجناح الكوري في gamescom 2026 (ألمانيا) · لم يُختَر",
              "‏3 أبريل 2026 · الجناح الكوري في Tokyo Game Show 2026 · لم يُختَر",
              "‏20 يوليو 2026 · Sweden Game Conference 2026 · قُدِّم",
              "‏18 أغسطس 2026 · Content IP Market 2026 (COEX، اختيار 80 شركة) · قُدِّم",
              "‏18 أغسطس 2026 · Gaming Istanbul GIST 2026 (اختيار 3 شركات) — Fighting Nations · قُدِّم",
              "‏18 أغسطس 2026 · Mobidictum Indie Desk 2026 (إسطنبول) — Fighting Nations · قُدِّم",
              "‏21 يوليو 2025 · برنامج 2025 لدخول الشركات الصغيرة والمتوسطة إلى أسواق الشرق الأوسط (جمعية الشركات الناشئة الكورية) · لم يُختَر",
              "‏28 يوليو 2025 · ‏2025 Content Startup Battlefield (وكالة كوكا الكورية) · لم يُختَر",
              "‏17 أغسطس 2026 · النسخة 21 من Gyeonggi Game Audition — Fighting Nations · قُدِّم",
              "‏3 أبريل 2026 · ChinaJoy 2026 · لم يُختَر"
            ]
          }
        },
        {
          h: "ما حصلنا عليه",
          p: ["لم نكتفِ بالتقديم — تعلّمنا ما نحتاجه. بدأ الأمر بورشة Unity لمدة أسبوع عام 2019، ومنذ أغسطس 2025 وحده أنهينا تسع عشرة دورة أخرى: Unity وUnreal Engine، والذكاء الاصطناعي التوليدي والتقاط الواقع، والبلوك تشين وSolidity، وتخطيط بطولات الرياضات الإلكترونية، والمعايير الدولية للذكاء الاصطناعي والأصول الرقمية. ونلنا جائزتين في الطريق."],
          list: {
            h: "دورات مُنجَزة وجوائز",
            items: [
              "‏11 ديسمبر 2019 · Gamebridge Unityversity — ورشة أسبوع لتطوير الألعاب بمحرّك Unity (Unity 2018.4 LTS، wcoding سيول) · ✅ مُنجَز",
              "‏20 أغسطس 2025 · وكالة محتوى كيونغي — حرم كيونغي للميتافيرس 2025: إنتاج محتوى منصّات الميتافيرس بمحرّك Unity عبر مشاريع عملية (100 ساعة) · ✅ مُنجَز",
              "‏7 سبتمبر 2025 · مسابقة الفيديوهات القصيرة لبرج YTN سيول · 🏆 جائزة تشجيعية",
              "‏18 سبتمبر 2025 · مسرّعة كيونغي للأعمال والعلوم (GBSA) — أكاديمية التقنيات العميقة: «نماذج أعمال من البيانات، من الفكرة إلى النموذج الأولي» · ✅ مُنجَز",
              "‏31 أكتوبر 2025 · الجمعية الكورية لصناعة الميتافيرس — إنتاج المحتوى بالذكاء الاصطناعي التوليدي على Unreal والتقاط الواقع (60 ساعة) · ✅ مُنجَز",
              "‏4 نوفمبر 2025 · أكاديمية كيونغي للألعاب 2025 — تدريب مطوّري الألعاب بالذكاء الاصطناعي (الجلستان 9 و10) · ✅ مُنجَز",
              "‏17 نوفمبر 2025 · أكاديمية كوانغجو للرياضات الإلكترونية — دورة تخطيط بطولات الرياضات الإلكترونية · ✅ مُنجَز",
              "‏23 أبريل 2026 · أكاديمية الذكاء الاصطناعي بمؤسسة The Circle — الدفعة الثالثة: AI vibe coding (15 ساعة) · ✅ مُنجَز",
              "‏29 أبريل 2026 · جمعية تقنية الاتصالات (TTA) — تأهيل خبراء معايير تقنية المعلومات: التقييس الدولي للذكاء الاصطناعي (5 ساعة) · ✅ مُنجَز",
              "‏29 أبريل 2026 · جمعية تقنية الاتصالات (TTA) — تأهيل خبراء معايير تقنية المعلومات: التقييس الدولي للتنقّل الذاتي (6 ساعات) · ✅ مُنجَز",
              "‏29 أبريل 2026 · جمعية تقنية الاتصالات (TTA) — تأهيل خبراء معايير تقنية المعلومات: التقييس الدولي للأمن من الجيل التالي والبلوك تشين (4 ساعات) · ✅ مُنجَز",
              "‏9 مايو 2026 · الوكالة الكورية للإنترنت والأمن (KISA) — يوم ملتقى البلوك تشين 2026: تعلّم لغة Solidity وخطة استخدامها · ✅ مُنجَز",
              "‏28 مايو 2026 · جمعية تقنية الاتصالات (TTA) — مستقبل الأصول الرقمية واستراتيجيتها (4 ساعات) · ✅ مُنجَز",
              "‏30 مايو 2026 · الوكالة الكورية للإنترنت والأمن (KISA) — يوم ملتقى البلوك تشين 2026: تطوير محفظة بلوك تشين · ✅ مُنجَز",
              "‏1 يونيو 2026 · مهرجان الرياضة الوطني 107 وألعاب البارا الوطنية 46 في جيجو — فئة أغنية التشجيع (مقاطعة جيجو) · 🏆 جائزة التميّز",
              "‏13 يونيو 2026 · الوكالة الكورية للإنترنت والأمن (KISA) — يوم ملتقى البلوك تشين 2026: فهم رموز الودائع وتنفيذ وظائفها · ✅ مُنجَز",
              "‏27 يونيو 2026 · الوكالة الكورية للإنترنت والأمن (KISA) — يوم ملتقى البلوك تشين 2026: منصّات الخصوصية اللامركزية (DPP) وتطبيقات الأمن · ✅ مُنجَز",
              "‏12 يوليو 2026 · الوكالة الكورية للإنترنت والأمن (KISA) — يوم ملتقى البلوك تشين 2026: بناء خدمات بلوك تشين بالذكاء الاصطناعي التوليدي · ✅ مُنجَز",
              "‏23 يوليو 2026 · وكالة محتوى كيونغي — حرم كيونغي للاندماج الافتراضي 2026: إنتاج المحتوى بالبرمجة المرئية في Unreal Engine (20 ساعة) · ✅ مُنجَز",
              "‏30 يوليو 2026 · وكالة محتوى كيونغي — حرم كيونغي للاندماج الافتراضي 2026: صناعة اللقطات السينمائية في Unreal Engine (20 ساعة) · ✅ مُنجَز",
              "‏6 أغسطس 2026 · وكالة محتوى كيونغي — حرم كيونغي للاندماج الافتراضي 2026: بناء شخصيات NPC بالذكاء الاصطناعي في Unreal Engine (20 ساعة) · ✅ مُنجَز",
              "‏13 أغسطس 2026 · وكالة محتوى كيونغي — حرم كيونغي للاندماج الافتراضي 2026: إنشاء الأصول بالذكاء الاصطناعي التوليدي (20 ساعة) · ✅ مُنجَز",
            ]
          }
        },
        {
          h: "لماذا ننشر الخطة",
          p: [
            "صناعة اللعبة شيء، وإيصالها إلى الناس شيء آخر. في استوديو من شخص واحد، ارتجال الأمر الثاني يكلّف سنة كاملة. لذلك أحصينا كل مسار يمكننا التقدّم إليه، وثبّتناه في تقويم، وننشر هذا التقويم كما هو.",
            "ظهر نمط واضح: التقديم يتكدّس في النصف الأول من السنة، والمعارض نفسها تُقام في النصف الثاني. 24 من أصل 38 تُغلق بين يناير ويونيو. من يبدأ التحرّك في أغسطس يكون قد فاته معظم العام. في 2027 نبدأ من يناير."
          ],
          list: {
            h: "‏كيف تتوزّع المسارات الـ 38",
            items: [
              "19 مجانيًا — عند الاختيار يتحمّل المنظّم تكلفة العرض",
              "11 مدفوعًا — رسوم مشاركة أو رسوم جناح",
              "6 بجوائز مالية أو منح إنتاج",
              "اثنان مفتوحان طوال العام بلا موعد نهائي"
            ]
          }
        },
        {
          h: "أواخر 2026 — ما نتقدّم إليه الآن",
          p: ["مفتوحة أو على وشك الفتح، بحسب أغسطس 2026 حين أُعدّت هذه الصفحة."],
          list: {
            h: "‏مواعيد الإغلاق من أغسطس إلى ديسمبر",
            items: [
              "‏GWB Game Awards (تنسنت) — منتصف أغسطس · مجانًا. يقود إلى حفل في نوفمبر وفعالية على Steam",
              "‏EVA Play (بوينس آيرس) — نحو 17 أغسطس · مجانًا. المشاركة عن بُعد ممكنة",
              "‏Taipei Indie Game Award — 19 أغسطس · مجانًا. عمل واحد لكل فريق، ورفع المواد من 26 أغسطس إلى 2 سبتمبر",
              "‏Steam Next Fest نسخة أكتوبر — التسجيل حتى 31 أغسطس. النسخة التجريبية حتى 21 سبتمبر",
              "‏Mobidictum Showcase (إسطنبول) — 31 أغسطس · مجانًا. خمسون مكانًا في Indie Spot مع جوائز",
              "‏IGF — نحو 7 سبتمبر · 75 دولارًا (يمكن طلب الإعفاء). مجرّد الترشّح له قيمة",
              "‏DevGAMM Awards — نحو 7 سبتمبر · مجانًا. أكثر من 150 محكّمًا، وبث على IGN في نوفمبر",
              "‏G-Star Indie Showcase — خلال سبتمبر · مجانًا. تُعلن النتائج في 17 أكتوبر",
              "‏Demospree — نحو 5 أكتوبر · مجانًا. ماراثون بث للنسخ التجريبية في يناير",
              "‏BGM Game Expo Winter (الصين) — نحو 17 أكتوبر · مجانًا. معرض حضوري في ديسمبر مع جوائز",
              "‏Day of the Devs نسخة الشتاء — من أغسطس إلى أكتوبر · مجانًا. باختيار منسّق",
              "‏BitSummit، فتح التسجيل العام — نحو نوفمبر · 33,000 ين. عنوان واحد لكل تسجيل",
              "جناح ‏Taipei INDIE HOUSE — الخريف · مدفوع. المعرض نفسه في يناير",
              "‏pitchyagame — نوفمبر · مجانًا. عرض مباشر أمام الحضور",
              "‏A MAZE. برلين يفتح — 16 ديسمبر · مدفوع. يُغلق في 31 يناير"
            ]
          }
        },
        {
          h: "أواخر 2026 — أين تُفتح الأبواب",
          p: ["بعيدًا عن التقديم، هذه هي المعارض التي تُقام فعليًا في النصف الثاني."],
          list: {
            h: "من سبتمبر إلى ديسمبر",
            items: [
              "‏Tokyo Game Show — أواخر سبتمبر",
              "‏PAX West — أوائل سبتمبر",
              "‏Steam Next Fest نسخة أكتوبر — من 19 إلى 26 أكتوبر",
              "‏gamescom asia x Thailand Game Show — من 29 أكتوبر إلى 1 نوفمبر، بانكوك. المعرض الذي عرضنا فيه ضمن الجناح الكوري عام 2025",
              "‏G-Star + G-CON — من 19 إلى 22 نوفمبر، بوسان",
              "حفلا ‏DevGAMM و GWB — نوفمبر",
              "‏BGM Game Expo Winter — ديسمبر، الصين"
            ]
          }
        },
        {
          h: "تقديم 2027 — من يناير إلى مارس",
          p: ["هنا تُحسم السنة. في الربع الأول وحده تُغلق ثمانية مسارات."],
          list: {
            h: "‏الإغلاق من يناير إلى مارس",
            items: [
              "‏Steam Next Fest نسخة فبراير — التسجيل نحو 5 يناير. يُغلق قبل الحدث بسبعة أسابيع، ولكل لعبة مرة واحدة فقط طوال عمرها",
              "‏gamescom latam BIG Festival — نحو 15 يناير · مجانًا. ساو باولو، 17 فئة، ويُقام أواخر أبريل",
              "‏NEOWIZ Quest — 16 يناير · مجانًا. جوائز بقيمة 165 مليون وون",
              "‏A MAZE. برلين — 31 يناير (تمديد حتى نحو 10 فبراير) · مدفوع",
              "‏Tokyo Game Show SELECTED INDIE 80 يفتح — 10 فبراير · مجانًا. يُغلق في 30 أبريل",
              "‏Indie Arena Booth — مارس وأبريل · مدفوع، مع أماكن مجانية باختيار منسّق. نحو 100 محكّم، والردّ أواخر أبريل أو أوائل مايو",
              "‏G-Star، التسجيل المبكّر — 3 مارس · مدفوع. خصم 10٪ على رسوم الجناح"
            ]
          }
        },
        {
          h: "تقديم 2027 — من أبريل إلى يونيو",
          p: ["هنا تتداخل برامج الدعم الكورية مع أجنحة الاستوديوهات المستقلة في أوروبا."],
          list: {
            h: "‏الإغلاق من أبريل إلى يونيو",
            items: [
              "‏Day of the Devs (نسخة Summer Game Fest) — نحو 6 أبريل · مجانًا. باختيار منسّق",
              "‏Smilegate IndieGo — 12 أبريل · مجانًا. عشرة ملايين وون",
              "‏Indie Arena Booth — نحو 20 أبريل · مدفوع. جناح مشترك في gamescom",
              "‏Tokyo Game Show SELECTED INDIE 80 — 30 أبريل · مجانًا. يُختار 80 عملًا، وتُسجَّل تلقائيًا لترشيحات SOWN",
              "‏Tiny Teams — نحو 30 أبريل · مجانًا. فرق من خمسة أشخاص أو أقل، والنسخة التجريبية شرط",
              "‏G-Star، إغلاق التسجيل المبكّر — 30 أبريل · مدفوع",
              "‏IndieCraft — 6 مايو · مجانًا. حتى أربعين مليون وون",
              "‏NC VARCO — 7 مايو · مجانًا",
              "‏gamescom dev Indie Expo — 8 مايو · مجانًا. عشرون فريقًا من أصل ثلاثين مكانًا. كان يُسمّى devcom، والموعد ليس 31 مايو",
              "‏BIC Festival — 25 مايو · مجانًا. بوسان، ويُقام في أغسطس",
              "‏G-Star، التسجيل العام — 26 مايو · مدفوع",
              "‏gamescom asia للمستقلين — نحو 15 يونيو · مدفوع. بانكوك",
              "‏IndieCade، التقديم العادي — نحو منتصف يونيو · 135 دولارًا. المهرجان نفسه في يناير",
              "‏GIGDC — 25 يونيو · مجانًا",
              "‏LudoNarraCon — نحو 26 يونيو · مجانًا. يركّز على السرد، وهو أقل ملاءمة لنوع لعبتنا",
              "‏G-Star، إغلاق التسجيل العام — 31 يوليو · مدفوع"
            ]
          }
        },
        {
          h: "مواعيد معارض 2027",
          p: ["أين يجب أن نكون فعليًا إذا نجح التقديم. لم نُدرج إلا المواعيد المعلنة."],
          list: {
            h: "من يناير إلى نوفمبر",
            items: [
              "‏Taipei Game Show + INDIE HOUSE — من 21 إلى 24 يناير. حفل Indie Game Award في 20 يناير",
              "مهرجان ‏IndieCade وبث Demospree — يناير",
              "‏Steam Next Fest نسخة فبراير — فبراير",
              "‏GDC وجوائز IGF — أوائل مارس، سان فرانسيسكو",
              "‏gamescom latam — من 30 أبريل إلى 3 مايو، ساو باولو",
              "‏A MAZE. برلين — منتصف مايو",
              "‏BitSummit — من 21 إلى 23 مايو، كيوتو",
              "‏Digital Dragons و Nordic Game — مايو",
              "‏Steam Next Fest نسخة يونيو — يونيو",
              "‏Develop:Brighton — من 13 إلى 15 يوليو",
              "‏BIC Festival — منتصف أغسطس، بوسان",
              "‏gamescom dev و gamescom — أواخر أغسطس، كولونيا",
              "‏Tokyo Game Show — أواخر سبتمبر",
              "‏G-Star — نوفمبر، بوسان"
            ]
          }
        },
        {
          h: "مسارات بلا موعد نهائي",
          p: ["هذه مفتوحة بغضّ النظر عن التقويم. لا تاريخ يدفعنا، ما يعني أن علينا أن ندفع أنفسنا إليها لحظة جهوز النسخة."],
          list: {
            h: "ستة مسارات دائمة",
            items: [
              "‏Big Indie Pitch — مجانًا. يُقام في مدن عدة على مدار السنة، وهو العرض الوحيد المفتوح دائمًا",
              "‏Epic MegaGrants — مجانًا. تقديم مستمر لمشاريع Unreal",
              "‏INDIE Live Expo — مجانًا. مرتان في السنة، عبر الإنترنت",
              "‏PAX Rising — مدفوع. West و East و Aus بطلبات منفصلة",
              "جناح ‏gamescom dev B2B — 1,499 يورو. ثمانية فرق مستقلة، القاعة 4.1 في gamescom",
              "‏Steam Direct — 100 دولار لكل تطبيق، تُستردّ متى تجاوزت اللعبة 1,000 دولار من الإيرادات"
            ]
          }
        },
        {
          h: "بأي ترتيب نذهب",
          p: [
            "في استوديو من شخص واحد، السفر والإقامة أغلى من الجناح نفسه. المعرض الأوروبي أو الأمريكي الشمالي هو الأغلى حتى حين تكون المشاركة مجانية. لذلك الترتيب محدّد سلفًا.",
            "‏Fighting Nations هي الواجهة في كل مسار. ألعاب القتال قوية في المهرجانات العامة الكبرى وفي الجوائز، وضعيفة في فعاليات Steam المبنية حول نوع واحد. أما Kingdom Wars فتعمل في المتصفّح، لذا تخرج من مسارات الأجنحة الحضورية وتتّجه إلى الفعاليات الإلكترونية لألعاب الاستراتيجية وفعاليات Steam المجانية."
          ],
          list: {
            h: "الأولوية",
            items: [
              "‏1. المسارات المجانية عبر الإنترنت وبالتحكيم — بلا تكلفة سفر",
              "‏2. كوريا — G-Star و BIC Festival",
              "‏3. آسيا القريبة — تايبيه وبانكوك وكيوتو",
              "‏4. أوروبا وأمريكا الشمالية — عند الاختيار، أو حين يرافقها دعم للسفر"
            ]
          }
        },
        {
          h: "ما المحسوم وما ليس كذلك",
          p: [
            "هذه الصفحة خطة نتقدّم بها، لا قائمة نتائج. أما أين قُبلنا فعلًا فيُكتب في خط المسيرة على الصفحة الرئيسية حين نعرف — هكذا فعلنا حتى الآن.",
            "المواعيد تجمع بين إعلانات كل حدث والجدول الذي التزم به في السنوات الماضية. وحين يختلف الإعلان الرسمي فالإعلان هو الصحيح، ونصحّح هذه الصفحة كلما تأكّدنا.",
            "آخر تحديث: 19 أغسطس 2026."
          ]
        }
      ],
      slides: [
        "‏الجناح الكوري في gamescom asia x Thailand Game Show، أكتوبر 2025. القائمة أدناه هي وجهتنا التالية.",
        "‏لافتة منصّتنا وملصق Fighting Nations. هكذا ننوي أن نحضر في المعارض المذكورة أعلاه.",
        "‏لقاء مع موزّع هندي في Thailand Game Show. مثل هذه الجلسات هي سبب ذهابنا أصلًا.",
        "‏اللعبة التي نحملها معنا — Fighting Nations. معظم المسارات أعلاه نتقدّم إليها بهذا العنوان.",
        "كل مقاتل يحمل بلدًا وتقليده القتالي. شخصيات من 13 دولة، بالأيدي العارية فقط.",
        "‏Kingdom Wars تعمل في المتصفّح، لذا تتخطّى الأجنحة الحضورية وتتّجه إلى الفعاليات الإلكترونية.",
        "‏شاشة التقدّم إلى Taipei Indie Game Award 2027، 16 أغسطس 2026. تُعلن القائمة النهائية في 14 أكتوبر.",
        "مدخل منطقة الأعمال في Thailand Game Show، أكتوبر 2025 — وإلى مثل هذه القاعات تقود المواعيد أعلاه.",
        "المؤسس Kent Kim يقدّم Fighting Nations في المنصّة. يقف بنفسه في كل معرض من القائمة.",
        "‏Global Game Challenge 2025 — في 29 نوفمبر 2025 بجامعة تشونغ-آنغ في سول. مكان بلغناه بالاختيار.",
        "منصّتنا في معرض الألعاب المستقلة المتميّزة بالدعوة ضمن GGC، بدعوة ضمن نحو 20 عملاً مختاراً.",
        "أحد الزوار يلعب Fighting Nations في المنصّة.",
        "‏24 يونيو 2026 — اتفاقية تعاون مع شركة مطار إنتشون الدولي. ‏Deother واحدة من ثلاث شركات ناشئة اختيرت للمساهمة في بناء مشروع AI-PORT بالمطار.",
        "‏المؤسس Kent Kim في مراسم التوقيع. الجائزة الأولى في مسابقة الذكاء الاصطناعي لشركة المطار هي ما أدى إلى هذه الاتفاقية."
      ],
      cta: "‏جرّب اللعبة التي نتقدّم بها", back: "‏العودة إلى Deother"
    }
  }
};
