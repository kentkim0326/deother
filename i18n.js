// i18n.js — Deother 사이트 번역
// 언어 10종. 아랍어는 RTL이라 app.js 가 <html dir> 을 바꾼다.
// 문구를 고칠 때는 en 을 먼저 고치고 나머지를 맞추면 어긋나지 않는다.

const LINKS = {
  itch:   "https://deother.itch.io/fighting-nations",
  novel:  "https://www.amazon.com/SERAPHIM-Awakening-Dragon-Kent-Kim/dp/B0F98RTPT2",
  deckEn: "https://gamma.app/docs/1020-English-Version-t5roxmlyf9rfi4c",
  deckKo: "https://gamma.app/docs/1020--aavkhdyq423puwv",
  facebook: "https://www.facebook.com/deotherme",
  // 회사 페이지와 별개로 대표 개인 계정. 1인 스튜디오라 사람이 곧 회사다.
  founderFb: "https://www.facebook.com/kentkim009/",
  youtube: "https://www.youtube.com/channel/UCQaEcI1xWOg_tvTqZBYBbGw",
  mail:   "mailto:kentkim@gmail.com"
};

// 디아더가 만들어 띄운 것들. 링크가 살아 있는 것만 넣는다.
// logo 는 '진짜 로고 마크'가 있을 때만 넣는다. 커버 아트를 작게 줄여 넣으면 마크처럼 안 보인다.
// 게임별 슬라이드쇼. 파일을 해당 폴더에 넣고 여기 파일명만 더하면 늘어난다.
// 배열이 비어 있으면 그 슬라이드쇼는 아예 렌더되지 않으므로 이미지가 없어도 안전하다.
//   FN_SLIDES → assets/slides-fn/    (히어로의 정지 이미지를 대체한다)
//   KW_SLIDES → assets/slides-kw/    ('우리가 만든 것' 아래에 붙는다)
const FN_SLIDES = ["fn-08.jpg", "fn-11.jpg", "fn-05.jpg", "fn-16.jpg", "fn-15.jpg", "fn-09.jpg", "fn-06.jpg", "fn-04.jpg"];
// 밀리버스 상세 — 군대·지휘관 콘셉트 아트(자막 없이 시네마틱 밴드로). 실제 게임 화면은 영상이 담당.
const MV_SLIDES = ["mv-art-01.jpg", "mv-art-05.jpg", "mv-art-06.jpg", "mv-art-09.jpg", "mv-art-10.jpg"];   // assets/slides-mv/
const KW_SLIDES = ["kw-09.jpg", "kw-14.jpg", "kw-08.jpg", "kw-05.jpg", "kw-13.jpg", "kw-23.jpg", "kw-20.jpg", "kw-17.jpg"];
const IP_COVERS = ["ip-01.jpg","ip-02.jpg","ip-03.jpg","ip-04.jpg","ip-05.jpg","ip-06.jpg","ip-07.jpg","ip-08.jpg","ip-09.jpg","ip-10.jpg","ip-11.jpg","ip-14.jpg","ip-15.jpg","ip-12.jpg","ip-13.jpg","ip-16.jpg","ip-17.jpg"];   // assets/covers/ — .\add-slides.ps1 ip 가 채운다
// 표지에 제목이 이미 박혀 있으므로 번역하지 않고 원제를 쓴다. 순서는 IP_COVERS 와 같다.
const IP_TITLES = ["훈민정음","판문점","조선늑대","저승사자","장보고","아리랑전사단","총기허용의 날","문신귀","아파트","요양원","전원주택","조선닌자 일지매","도깨비왕","Ring of Solomon: Dino Wars","Kingdom Wars","Empire of Hearts","Seraphim"];
// 작품 링크. IP_COVERS 와 같은 순서. 값은 세 가지:
//   ""            링크 없음
//   "url"         하나 — 표지를 눌러 연다
//   [{label,url}] 여러 개 — 표지 아래에 라벨 버튼으로 붙는다 (웹툰/영상/노래 등)
const IP_LINKS = [
  [ { label: "🎵 노래",       url: "https://youtu.be/fZEfON-kWpM" },
    { label: "📖 밀리의 서재", url: "https://short.millie.co.kr/u9o68u" } ],           // 0 훈민정음
  [ { label: "📖 밀리의 서재", url: "https://short.millie.co.kr/m3tvb3" } ],           // 1 판문점
  [ { label: "📖 밀리의 서재", url: "https://short.millie.co.kr/x3kjwg" } ],           // 2 조선늑대
  [ { label: "🎵 노래",       url: "https://youtube.com/shorts/tlCci--34As" },
    { label: "📖 밀리의 서재", url: "https://short.millie.co.kr/vhyblr" } ],           // 3 저승사자
  [ { label: "🎵 노래",       url: "https://youtu.be/KxaBZNQu4tU" },
    { label: "📖 밀리의 서재", url: "https://short.millie.co.kr/v9taflr" } ],           // 4 장보고
  "https://youtube.com/shorts/UJqLrqdCiT4",  // 5 아리랑전사단
  [ { label: "📖 밀리의 서재", url: "https://short.millie.co.kr/dwm1yh" } ],           // 6 총기허용의 날
  "",                                        // 7 문신귀
  "",                                        // 8 아파트
  "",                                        // 9 요양원
  "",                                        // 10 전원주택
  [ { label: "🎬 뮤직비디오", url: "https://youtu.be/ZSuRacp6JI8" },
    { label: "🎵 노래",       url: "https://youtube.com/shorts/5GLWerJEs0w" },
    { label: "📖 밀리의 서재", url: "https://short.millie.co.kr/o8f6op" } ],           // 11 조선닌자 일지매
  "https://youtu.be/aKkhj94jd1U",            // 12 도깨비왕
  [ { label: "📖 웹툰",  url: "https://canva.link/r8xr2318d77bxep" },
    { label: "▶ 영상",   url: "https://youtube.com/shorts/ZQZ5STV82f0" } ],           // 13 Ring of Solomon: Dino Wars
  "https://youtu.be/blHdmtxBQn0",            // 14 Kingdom Wars
  "",                                        // 15 Empire of Hearts
  [ { label: "🎵 테마송",     url: "https://youtube.com/shorts/EgHXbVjl9gA" },
    { label: "🖼 이미지",     url: "https://canva.link/xir1gnpfs3m068j" },
    { label: "📖 밀리의 서재", url: "https://short.millie.co.kr/l0am4h" } ],           // 16 Seraphim
];

const WORKS = [
  { key: "fn",       url: LINKS.itch,                            tag: "2026",
    logo: "assets/fn-logo.png", logoWide: true,
    trailer: "https://youtu.be/JOZwYUQ4cd8", detail: "#why",
    sns:  { label: "YouTube", url: "https://www.youtube.com/channel/UCQaEcI1xWOg_tvTqZBYBbGw" } },
  { key: "kingdom",  url: "https://kingdom-wars-puce.vercel.app", tag: "2026",
    logo: "assets/kingdom-wars-logo.png", detail: "kingdom-wars.html",
    sns:  { label: "Facebook", url: "https://www.facebook.com/profile.php?id=61591748124601" } },
  { key: "miliverse",url: "https://miliverse-ten.vercel.app",     tag: "2022 · 2026",
    logo: "assets/miliverse-logo.png", detail: "miliverse.html",
    sns:  { label: "Facebook", url: "https://www.facebook.com/miliverse2022" } },
  { key: "jangbogo", url: "https://jangbogo-nine.vercel.app",     tag: "2026",
    logo: "assets/jangbogo-logo.svg" }
];

// 개발 연표 영상 — 오래된 것부터. 제목은 영어 그대로 둔다(유튜브 원제와 맞추기 위해).
// 날짜는 대표가 확인해 준 것만 적는다. 모르면 연도만.
const VIDEOS = [
  { id: "6sHBK-cn_zs", date: "2025.07.30", label: "First short — earliest footage" },
  { id: "35SYlb3f-wA", date: "2025.08.21", label: "Seoul Game Contest entry" },
  { id: "2SwaUTAdzX8", date: "2025",       label: "ComfyUI + Mixamo — characters for the Unity build" },
  { id: "uDZCNVHrRzI", date: "2025",       label: "Unity build — full playthrough" },
  { id: "d5Vo8WA1MRY", date: "2025.09.28", label: "Development build" },
  { id: "1yXVirlS2fU", date: "2025",       label: "17th Unity Awards 2025 entry" },
  { id: "2RJnU9BWHpY", date: "2025.10.31", label: "Gyeonggi Game Connect — pitch to 14 investors" },
  { id: "wWYc2a0v0Ys", date: "2025.11",    label: "First Unreal Engine build" },
  { id: "gnJP_zJFMhY", date: "2025",       label: "Making 3D characters — VARCO AI + Mixamo" },
  { id: "QqSZydGkVe8", date: "2025.12.31", label: "NC Soft 2nd VARCO AI Game Contest" },
  { id: "JOZwYUQ4cd8", date: "2026",       label: "Fighting Nations — 2 minute trailer" },
  { id: "kKeMb2ytC-M", date: "2026",       label: "Fighting Nations — opening movie" }
];

// 언어별 주제가 + 게임플레이 — 라벨은 각 언어의 자기 이름이라 번역이 필요 없다.
const LANG_VIDEOS = [
  { id: "kUbEnMCuwvU", label: "日本語" },
  { id: "fKPyUueHmmM", label: "中文" },
  { id: "60tNhXeN2qg", label: "Tiếng Việt" },
  { id: "xN0Hb8UstME", label: "हिन्दी" },
  { id: "Os9h28-oQaY", label: "العربية" },
  { id: "nJQ5-_m5AoE", label: "Español" },
  { id: "PfKVs99MzlU", label: "Italiano" },
  { id: "ygjB8m8CJvw", label: "Français" },
  { id: "VF1E55L7Kd8", label: "Deutsch" },
  { id: "1qi2pz7ePPg", label: "Svenska" }
];

const I18N = {
  en: {
    name: "English", dir: "ltr",
    nav: { why: "Why", world: "World", features: "Game", journey: "Journey", roadmap: "Roadmap", team: "Team" },
    hero: {
      studio: "Deother Co., Ltd. — IP-based game studio",
      title: "Fighting Nations",
      tagline: "No guns. No blades. Bare-handed martial arts only — starting 1v1, built toward a 64-fighter martial arts battle royale.",
      cta: "Play the build",
      ctaSub: "Free · Windows · 4.2 GB"
    },
    why: {
      heading: "The gap nobody filled",
      lead: "Fighting games stayed locked in 1v1. Battle royales drowned in guns.",
      body: [
        "Street Fighter, Tekken, Mortal Kombat — decades of brilliance, all inside the same 1v1 frame, all asking you to memorize combos before you're allowed to have fun. Meanwhile Fortnite and PUBG built enormous worlds around weapon spam.",
        "Nobody built the thing in between: a team fight with no weapons at all. Just bodies, distance, timing, and what you actually know how to do.",
        "Humans have always been drawn to a fight — Bruce Lee, Mike Tyson, WWE, UFC are the proof. Fighting Nations takes that instinct and removes the two barriers: the weapons, and the combo homework."
      ]
    },
    origin: {
      heading: "Why I started this",
      body: [
        "I trained for over twenty-three years — Teukgong Musul, Haidong Gumdo, Japanese kendo, judo, boxing, Muay Thai, and Shaolin kung fu in New York. I hit the heavy bag until the cartilage went. I can't train hard anymore.",
        "So I played Tekken. I've played fighting games my whole life — FPS games make me motion sick, so it was only ever this genre. And then the balance broke, and kept breaking, until matches stopped feeling like skill.",
        "One day I thought: I'll make it myself. Not a game where one nation's fighters are quietly the strongest, and not a game you need a wiki to enter. Balance first. No absurd combo chains. And as many of the world's real martial traditions as I can fit — Pencak Silat from Indonesia is already in."
      ]
    },
    world: {
      heading: "From a novel I wrote",
      body: [
        "In 2033 an alien vessel crashes into the Gobi Desert carrying 144,000 androids and 32 giant robots — machines that, it turns out, the archangels of scripture once piloted. The Seraphim.",
        "In 2077 Shanghai, an international martial arts tournament is held to choose their pilots: 200 nations, one man and one woman each, four hundred fighters for thirty-two seats. The AI aboard the ship declares itself the Second Coming and sets humanity against itself without spilling a drop of its own blood. Whether it truly is what it claims — the book leaves that open.",
        "Fighting Nations is that tournament, lifted out of the novel and made playable."
      ],
      cta: "Read the novel on Amazon"
    },
    features: {
      heading: "What makes it different",
      items: [
        { t: "No weapons, ever", b: "Muay Thai, Taekwondo, kung fu, judo, Pencak Silat and more — twelve styles and growing. Weapons stay out, partly by design and partly because parents shouldn't have to worry." },
        { t: "Team play, not just duels", b: "It begins 1v1 with two gamepads on one screen. Multiplayer is in testing now. Then 2v2, larger teams — and a 64-fighter battle royale as the destination." },
        { t: "Skills are the item, not just skins", b: "You buy and deepen martial arts styles themselves, not only cosmetics. Free to play, with progression that means something." },
        { t: "Your country's martial art", b: "Every fighter carries a nation and its fighting tradition. Characters from 13 countries speak their own language, so players hear themselves in the game. Character models are being rebuilt with MetaHuman." }
      ]
    },
    journey: {
      heading: "How it has grown",
      lead: "Built in the open, one show at a time.",
      videos: { gameplay: "Gameplay footage", trailer: "Trailer", pitch: "VC pitch — Gyeonggi Game Connect" },
      events: [
        { d: "Summer 2025", t: "Unity prototype" },
        { d: "October 2025", t: "Thailand Game Show — one of 16 Korean studios, Megazone Cloud sponsored booth. Distributors from India, Vietnam, Indonesia, Thailand, the Philippines, Russia, the Netherlands and Taiwan came to the booth." },
        { d: "October 2025", t: "Rebuilt in Unreal Engine — multiplayer needed it" },
        { d: "31 October 2025", t: "Gyeonggi Content Agency Game Connect — one of 10 studios pitching to VCs" },
        { d: "29 November 2025", t: "Chung-Ang University indie game showcase" },
        { d: "31 December 2025", t: "Submitted to NC Soft's 2nd VARCO Game Contest" },
        { d: "16 January 2026", t: "Entered NEOWIZ Quest, a narrative indie game competition with a ₩165M prize pool" }
      ]
    },
    roadmap: {
      heading: "Where it goes",
      items: [
        { date: "15 August 2026", title: "GWB Game Awards — Tencent", body: "Submission to the international indie competition. Judges get the current build: 21 fighters, six stages." },
        { date: "September 2026", title: "Steam page", body: "Registering through Steamworks Direct and putting up a Coming Soon page, so wishlists start building before release." },
        { date: "October 2026", title: "Epic Games Store", body: "Applying for distribution alongside Steam." },
        { date: "In development", title: "Online multiplayer", body: "1v1 netcode first, then 2v2 team play. Character models move to MetaHuman along the way." },
        { date: "2026–2027", title: "Xbox console", body: "Applying to Microsoft's ID@Xbox programme to bring the game onto console." },
        { date: "The goal", title: "Martial arts battle royale", body: "1v1 today. 2v2 next. Then larger team modes — and finally a 64-fighter bracket in one arena, nothing but bare hands. Sixty-four is not an arbitrary number: it is a tournament bracket, and this game came from a tournament." }
      ]
    },
    team: {
      heading: "Who makes it",
      name: "Kent Kim (김형섭)", role: "Founder · Creative Director",
      bullets: [
        "Harvard, Economics — emigrated to the US in 1989, admitted in three and a half years",
        "20 books published in Korea and the US · 407 songs released on Spotify since 2012",
        "23+ years of martial arts: judo, boxing, Hapkido, Haidong Gumdo, Muay Thai, Taekwondo, Shaolin kung fu",
        "Excellence Award, Incheon Airport AI competition · Jeju Governor's Award, national AI music competition · selected for the 3rd cohort of the Ahn Cheol-soo Foundation's AI vibe-coding programme",
        "Author of SERAPHIM: The Awakening of Iron Dragon, the novel this game comes from",
        "Launched two metaverse platforms in 2022. When the funding market turned, the servers came down — but the lesson stayed: without an end goal, people don't stay, and games have one. Milliverse is back and still being built.",
        "Tokyo Game Show since 2019 · Evo Japan 2020 and a visit to SoftBank's Tokyo headquarters · meeting with SoftBank executives in 2022",
        "Booths at Gamescom 2022 (Germany), Tokyo Game Show 2022, CES 2023 (Las Vegas) · Busan G-Star every year since 2019"
      ]
    },
    songs: { heading: "In your language", lead: "Theme song and gameplay, recorded in the languages our fighters speak." },
    ip: { heading: "The stories behind them", lead: "Novels and web serials, written in-house.", note: "Every world our games are set in started as a manuscript. We are not licensing someone else's IP — we write it, and a game is one way of telling it.", book: "Seraphim came out in hardcover — back cover, spine, front. Fighting Nations is set in this world." },
    works: { trailer: "Trailer", more: "Read more", heading: "What we have built", lead: "Three games built and live, and the IP behind them — novels and web serials — written in-house.", note: "Martial arts from 200 nations, the coordinates of real cities, squads wearing their flags — there is always a country in our games. Not to make any one of them stronger, but so that a player from anywhere can find their place in it.", items: {
      fn: { t: "Fighting Nations", b: "A 3D fighting game with no weapons — just the martial arts of the world, one style per fighter. Team battles on destructible stages, with the long-term goal of 64-player battle royale. In development and playable now.", s: ["21 fighters","11 martial arts","6 stages"] },
      kingdom: { t: "Kingdom Wars", b: "Pick a nation and a commander, then take the Moon sector by sector — 49 of them, turn by turn, in the browser. Killstreaks, battle grades and loot drops. Live in four languages." },
      miliverse: { t: "Milliverse", b: "Web3 strategy game played on the real world map. Buy tiles, deploy weapons and troops, fight other players for territory. Live in four languages, with real weather and day-night data feeding the battles." },
      jangbogo: { t: "Jang Bogo: King of the Seas", b: "A 9th-century maritime-trade management sim about the sea king Jang Bogo. Build wealth through trade on a real world map, sweep pirates aside with turtle ships, and grow your power through ties with people across the seas. Alternate history from the original novel — reaching North America 650 years before Columbus. Playable right in the browser." }
    } },
    decks: { heading: "Pitch deck", en: "English version", ko: "한국어 버전" },
    footer: { studio: "Deother Co., Ltd.", contact: "Contact", rights: "All rights reserved." }
  },

  ko: {
    name: "한국어", dir: "ltr",
    nav: { why: "기획의도", world: "세계관", features: "게임", journey: "여정", roadmap: "로드맵", team: "팀" },
    hero: {
      studio: "주식회사 디아더 — IP 기반 게임 스튜디오",
      title: "Fighting Nations",
      tagline: "총·칼 없이 오직 맨손 무술로. 1:1에서 시작해 64인 무술 배틀로얄을 지향합니다.",
      cta: "빌드 플레이하기",
      ctaSub: "무료 · Windows · 4.2 GB"
    },
    why: {
      heading: "아무도 채우지 않은 공백",
      lead: "격투 게임은 1:1에 갇혔고, 배틀로얄은 총으로 포화됐습니다.",
      body: [
        "스트리트 파이터, 철권, 모탈컴뱃 — 수십 년의 명작들이 모두 같은 1:1 틀 안에 있고, 재미를 보기 전에 콤보부터 외우라고 요구합니다. 그사이 포트나이트와 배틀그라운드는 총기 중심으로 거대한 시장을 만들었습니다.",
        "그 사이의 것을 만든 사람이 없었습니다. 무기가 하나도 없는 팀 격투. 몸과 거리와 타이밍, 그리고 실제로 할 줄 아는 것만 남는 싸움입니다.",
        "인류는 언제나 싸움에 끌렸습니다 — 이소룡, 마이크 타이슨, WWE, UFC가 그 증거입니다. Fighting Nations는 그 본능을 가져오되 두 가지 장벽을 걷어냅니다. 무기, 그리고 콤보 암기입니다."
      ]
    },
    origin: {
      heading: "왜 시작했나",
      body: [
        "23년 넘게 무술을 했습니다. 특공무술, 해동검도, 일본검도, 유도, 복싱, 무에타이, 그리고 뉴욕에서 소림권까지. 샌드백을 너무 쳐서 연골이 깨졌습니다. 이제는 과한 무술을 못 합니다.",
        "그래서 철권을 했습니다. 어릴 때부터 격투게임만 해왔습니다 — FPS는 멀미가 나서 이 장르밖에 없었습니다. 그런데 밸런스가 깨지고, 계속 깨지고, 어느 순간 실력으로 이기는 느낌이 사라졌습니다.",
        "어느 날 생각했습니다. 직접 만들자. 특정 국가의 캐릭터만 조용히 강한 게임 말고, 위키를 봐야 들어갈 수 있는 게임 말고. 밸런스가 먼저입니다. 지나친 콤보는 지양합니다. 그리고 전 세계의 실제 무술을 최대한 많이 담습니다 — 인도네시아의 펜짝 실랏은 이미 들어가 있습니다."
      ]
    },
    world: {
      heading: "직접 쓴 소설에서",
      body: [
        "2033년, 고비사막에 불시착한 외계선에서 14만 4천 기의 안드로이드와 32기의 거대 로봇이 발견됩니다. 알고 보니 성경 속 천사들 — 세라핌이 타던 기체였습니다.",
        "2077년 상해. 그 조종사를 뽑기 위한 국제 무술대회가 열립니다. 200개국에서 남녀 한 명씩, 400명이 32자리를 두고 겨룹니다. 외계선의 AI는 스스로를 예수 재림이라 선언하며, 제 손에 피 한 방울 묻히지 않고 인류가 서로 싸우게 만듭니다. 그 AI가 정말로 그 존재인지는 — 소설은 열어둡니다.",
        "Fighting Nations는 그 대회를 소설에서 떼어내 플레이할 수 있게 만든 것입니다."
      ],
      cta: "아마존에서 소설 보기"
    },
    features: {
      heading: "이 게임만의 것",
      items: [
        { t: "무기는 없습니다", b: "무에타이, 태권도, 쿵푸, 유도, 펜짝 실랏 — 12가지 무술에서 계속 늘려갑니다. 무기를 빼는 건 설계이기도 하고, 부모가 걱정하지 않아도 되게 하려는 것이기도 합니다." },
        { t: "1:1을 넘어 팀전으로", b: "지금은 게임패드 두 개로 한 화면에서 1:1입니다. 멀티플레이어는 테스트 중입니다. 다음이 2:2, 그다음 팀 규모 확대 — 종착점은 64인 무술 배틀로얄입니다." },
        { t: "스킨이 아니라 기술을 삽니다", b: "외형만이 아니라 무술 스킬 자체를 구매하고 키웁니다. 무료 게임이되, 성장에 의미가 있습니다." },
        { t: "당신 나라의 무술", b: "각 파이터는 한 나라와 그 나라의 무술을 대표합니다. 13개국 캐릭터가 각자의 모국어로 말합니다 — 인도, 중국, 파키스탄, 미국, 영국, 브라질, 러시아, 태국, 인도네시아, 나이지리아, 한국, 일본. 캐릭터 모델은 메타휴먼으로 다시 만들고 있습니다." }
      ]
    },
    journey: {
      heading: "어떻게 발전해왔나",
      lead: "공개된 자리에서, 한 걸음씩.",
      videos: { gameplay: "실제 게임 영상", trailer: "트레일러", pitch: "VC 피칭 — 경기 게임 커넥트" },
      events: [
        { d: "2025년 여름", t: "유니티로 프로토타입 제작" },
        { d: "2025년 10월", t: "태국 게임쇼 — 16개 한국 게임사 중 하나로 선발, 메가존 클라우드 후원 한국관 부스. 인도·베트남·인도네시아·태국·필리핀·러시아·네덜란드·대만 배급사들이 부스를 찾았습니다." },
        { d: "2025년 10월", t: "언리얼 엔진으로 재제작 — 멀티플레이어에는 언리얼이 필요했습니다" },
        { d: "2025년 10월 31일", t: "경기콘텐츠진흥원 게임 커넥트 — 10개사 중 하나로 선발, VC 대상 피칭" },
        { d: "2025년 11월 29일", t: "중앙대학교 인디게임 부스 전시" },
        { d: "2025년 12월 31일", t: "NC소프트 제2회 바르코 게임 공모전 접수" },
        { d: "2026년 1월 16일", t: "네오위즈 퀘스트 내러티브 인디게임 공모전 접수 (총 상금 1억 6,500만원)" }
      ]
    },
    roadmap: {
      heading: "앞으로",
      items: [
        { date: "2026년 8월 15일", title: "GWB 게임 어워드 — 텐센트", body: "국제 인디 게임 대회에 출품합니다. 심사위원에게 현재 빌드를 제공합니다 — 21명의 파이터, 6개 스테이지." },
        { date: "2026년 9월", title: "스팀 페이지", body: "Steamworks Direct로 등록하고 출시 예정 페이지를 올립니다. 출시 전부터 위시리스트를 모으기 위해서입니다." },
        { date: "2026년 10월", title: "에픽 게임즈 스토어", body: "스팀과 함께 유통 신청을 넣습니다." },
        { date: "개발 중", title: "온라인 멀티플레이어", body: "1:1 넷코드가 먼저이고 그다음이 2:2 팀전입니다. 그 사이 캐릭터 모델을 메타휴먼으로 옮깁니다." },
        { date: "2026~2027년", title: "엑스박스 콘솔", body: "마이크로소프트 ID@Xbox 프로그램에 신청해 콘솔로 갑니다." },
        { date: "목표", title: "무술 배틀로얄", body: "지금은 1:1. 다음은 2:2. 그다음 팀 규모를 키우고, 마지막에는 맨손 64명이 한 경기장에. 64는 임의의 숫자가 아닙니다 — 토너먼트 대진표이고, 이 게임은 대회에서 시작됐습니다." }
      ]
    },
    team: {
      heading: "만드는 사람",
      name: "김형섭 (Kent Kim)", role: "대표 · 크리에이티브 디렉터",
      bullets: [
        "하버드 경제학과 — 1989년 미국 이민, 3년 반 만에 합격",
        "한국·미국에서 20권 출간 · 2012년부터 스포티파이에 407곡 발매",
        "23년 이상 무술 수련: 유도, 복싱, 합기도, 해동검도, 무에타이, 태권도, 소림권",
        "AI 인천공항 공모전 최우수상 · AI 음원 전국체전 공모전 제주도지사상 · 안철수재단 AI 바이브 코딩 3기 선발",
        "이 게임의 원작 소설 『SERAPHIM: The Awakening of Iron Dragon』 저자",
        "2022년 메타버스 플랫폼 2개 런칭. 투자 시장이 얼어붙어 서버는 내렸지만 배운 것은 남았습니다 — 엔드골이 없으면 사람이 남지 않는다, 그리고 게임에는 그것이 있다. 밀리버스는 다시 살아나 지금도 만들고 있습니다.",
        "2019년부터 도쿄 게임쇼 참관 · 2020년 Evo Japan 방문 및 소프트뱅크 도쿄 본사 방문 · 2022년 소프트뱅크 임원 미팅",
        "게임스컴 2022(독일), 도쿄 게임쇼 2022, CES 2023(라스베가스) 부스 운영 · 2019년부터 매년 부산 지스타 참가"
      ]
    },
    songs: { heading: "당신의 언어로", lead: "파이터들이 쓰는 언어로 녹음한 주제가와 게임플레이." },
    ip: { heading: "우리가 가진 이야기", lead: "소설과 웹소설. 직접 씁니다.", note: "게임의 배경이 되는 세계는 모두 원고에서 시작했습니다. 남의 IP를 빌려 쓰는 것이 아니라 우리가 쓰고, 게임은 그 이야기를 전하는 하나의 방식입니다.", book: "Seraphim은 하드커버로 나왔습니다 — 뒤표지, 책등, 앞표지. Fighting Nations가 이 세계를 배경으로 합니다." },
    works: { trailer: "트레일러", more: "자세히", heading: "우리가 만든 것", lead: "게임 세 개를 만들어 띄웠습니다. 그 바탕이 되는 IP — 소설·웹소설 — 도 직접 씁니다.", note: "200개국의 무술, 실제 도시의 좌표, 국기를 단 부대 — 우리 게임에는 늘 국가가 있습니다. 어느 나라를 강하게 만들기 위해서가 아니라, 어느 나라 사람이든 자기 자리를 찾을 수 있게 하기 위해서입니다.", items: {
      fn: { t: "Fighting Nations", b: "무기가 없는 3D 격투게임입니다. 세계의 무술만으로 싸우고, 파이터마다 다른 유파를 씁니다. 부서지는 스테이지 위에서 팀으로 붙으며, 최종 목표는 64인 배틀로얄입니다. 개발 중이며 지금 플레이할 수 있습니다.", s: ["파이터 21명","무술 11종","스테이지 6곳"] },
      kingdom: { t: "Kingdom Wars", b: "국가와 사령관을 고르고 달의 49개 섹터를 한 칸씩 빼앗는 턴제 전략. 브라우저에서 바로 합니다. 연승 배수, 전투 등급, 전리품 드랍까지. 4개 언어로 서비스 중." },
      miliverse: { t: "밀리버스", b: "실제 세계 지도 위에서 벌어지는 Web3 전략 게임. 타일을 사고 무기와 병사를 배치해 다른 플레이어와 영토를 두고 싸웁니다. 4개 언어로 서비스 중이며, 실제 날씨와 낮밤 데이터가 전투에 반영됩니다." },
      jangbogo: { t: "북미대륙을 발견한 장보고", b: "9세기 해상왕 장보고의 해상무역 경영 시뮬레이션. 실제 세계 지도 위에서 교역으로 부를 쌓고, 거북선으로 해적을 소탕하며, 각지의 인물과 관계를 맺어 세력을 넓힙니다. 원작 소설의 대체역사 — 콜럼버스보다 650년 먼저 북미에 닿는 길. 브라우저에서 바로 플레이." }
    } },
    decks: { heading: "발표 자료", en: "English version", ko: "한국어 버전" },
    footer: { studio: "주식회사 디아더", contact: "문의", rights: "All rights reserved." }
  },

  zh: {
    name: "中文", dir: "ltr",
    nav: { why: "初衷", world: "世界观", features: "游戏", journey: "历程", roadmap: "规划", team: "团队" },
    hero: {
      studio: "Deother 有限公司 — 以 IP 为核心的游戏工作室",
      title: "Fighting Nations",
      tagline: "没有枪，没有刀，只有赤手空拳的武术。从 1v1 起步，走向 64 人武术大逃杀。",
      cta: "开始试玩", ctaSub: "免费 · Windows · 4.2 GB"
    },
    why: {
      heading: "无人填补的空白",
      lead: "格斗游戏困在 1v1，大逃杀被枪械淹没。",
      body: [
        "街霸、铁拳、真人快打——几十年的杰作，却都在同一个 1v1 框架里，都要求你先背熟连招才准享受乐趣。与此同时，堡垒之夜和 PUBG 围绕枪械建起了庞大的市场。",
        "没有人做出中间那款：完全不用武器的团队格斗。只剩身体、距离、时机，以及你真正会的东西。",
        "人类始终被格斗吸引——李小龙、泰森、WWE、UFC 就是证明。Fighting Nations 保留这份本能，去掉两道门槛：武器，以及背连招的功课。"
      ]
    },
    origin: {
      heading: "我为什么开始做这个",
      body: [
        "我练了二十三年以上——特功武术、海东剑道、日本剑道、柔道、拳击、泰拳，还有在纽约学的少林拳。沙袋打得太多，软骨坏了。现在已经不能大强度训练。",
        "于是我玩铁拳。我一辈子只玩格斗游戏——FPS 会让我晕，所以只剩这个类型。可是平衡崩了，一次又一次，直到胜负不再像是靠实力。",
        "有一天我想：那就自己做。不做某个国家的角色悄悄最强的游戏，也不做非得查攻略才能入门的游戏。平衡优先，不搞过分的连段。并尽可能收录世界各地真实的武术——印尼的班卡苏拉已经加入。"
      ]
    },
    world: {
      heading: "源自我写的小说",
      body: [
        "2033 年，一艘外星飞船坠入戈壁沙漠，载着 144,000 具仿生人和 32 台巨型机器人——原来那正是经书中天使们曾驾驭的机体：炽天使。",
        "2077 年的上海，为挑选驾驶员举办了国际武术大赛：200 个国家各出一男一女，四百名格斗家争夺三十二个席位。飞船上的 AI 自称救世主再临，不沾自己一滴血，却让人类彼此厮杀。它是否真如其所言——小说留下开放结局。",
        "Fighting Nations 就是把那场大赛从小说中取出，做成可以玩的游戏。"
      ],
      cta: "在亚马逊阅读小说"
    },
    features: {
      heading: "与众不同之处",
      items: [
        { t: "永远没有武器", b: "泰拳、跆拳道、功夫、柔道、班卡苏拉——十二种流派并持续增加。不放武器，一半是设计考量，一半是不想让家长担心。" },
        { t: "不止决斗，更是团队", b: "现在是两个手柄、一块屏幕的 1v1。联机正在测试。接下来是 2v2——目标是完整的武术大逃杀。" },
        { t: "买的是招式，不只是皮肤", b: "你购买并精进的是武术流派本身，而不只是外观。免费游玩，但成长有意义。" },
        { t: "属于你国家的武术", b: "每位格斗家都代表一个国家及其武术传统。13 个国家的角色以母语说话，让玩家在游戏里听见自己。角色模型正以 MetaHuman 重制。" }
      ]
    },
    journey: {
      heading: "一路走来", lead: "公开开发，一场展会接着一场。",
      videos: { gameplay: "实机画面", trailer: "预告片", pitch: "VC 路演 — 京畿 Game Connect" },
      events: [
        { d: "2025 年夏", t: "以 Unity 完成原型" },
        { d: "2025 年 10 月", t: "泰国游戏展——入选 16 家韩国工作室之一，Megazone Cloud 赞助展位。印度、越南、印尼、泰国、菲律宾、俄罗斯、荷兰与台湾的发行商到访。" },
        { d: "2025 年 10 月", t: "改用虚幻引擎重做——联机需要它" },
        { d: "2025 年 10 月 31 日", t: "京畿内容振兴院 Game Connect——十家之一，向 VC 路演" },
        { d: "2025 年 11 月 29 日", t: "中央大学独立游戏展出" },
        { d: "2025 年 12 月 31 日", t: "报名 NC Soft 第二届 VARCO 游戏大赛" },
        { d: "2026 年 1 月 16 日", t: "报名 NEOWIZ Quest 叙事独立游戏大赛（总奖金 1.65 亿韩元）" }
      ]
    },
    roadmap: {
      heading: "未来方向",
      items: [
        { date: "2026 年 8 月 15 日", title: "GWB 游戏大奖 — 腾讯", body: "参加国际独立游戏大赛。评委将拿到当前版本：21 位格斗家、六个舞台。" },
        { date: "2026 年 9 月", title: "Steam 页面", body: "通过 Steamworks Direct 注册并上线「即将推出」页面，让愿望单在发行前就开始累积。" },
        { date: "2026 年 10 月", title: "Epic 游戏商城", body: "与 Steam 同步提交发行申请。" },
        { date: "开发中", title: "在线多人", body: "先做 1v1 联机，再做 2v2 团队战。期间角色模型迁移到 MetaHuman。" },
        { date: "2026–2027 年", title: "Xbox 主机", body: "申请微软 ID@Xbox 计划，将游戏带上主机。" },
        { date: "终点", title: "武术大逃杀", body: "今天是 1v1，接着 2v2，随后扩大团队规模，最终 64 人赤手同场。64 并非随意选定——那是一张淘汰赛对阵表，而这款游戏正源自一场大赛。" }
      ]
    },
    team: {
      heading: "谁在做", name: "Kent Kim（金炯燮）", role: "创始人 · 创意总监",
      bullets: [
        "哈佛大学经济学系——1989 年移民美国，三年半后入学",
        "在韩国与美国出版 20 本书 · 2012 年起在 Spotify 发行 407 首作品",
        "23 年以上武术经历：柔道、拳击、合气道、海东剑道、泰拳、跆拳道、少林拳",
        "仁川机场 AI 大赛最优秀奖 · 全国 AI 音乐大赛济州道知事奖 · 入选安哲秀财团 AI Vibe Coding 第三期",
        "本作原著小说《SERAPHIM: The Awakening of Iron Dragon》作者",
        "2022 年推出两个元宇宙平台。投资市场转冷后服务器下线，但教训留了下来——没有终点目标，人就不会留下，而游戏有。Milliverse 已经重启，至今仍在打磨。",
        "2019 年起参观东京电玩展 · 2020 年出席 Evo Japan 并走访软银东京总部 · 2022 年与软银高管会面",
        "德国 Gamescom 2022、东京电玩展 2022、美国 CES 2023 参展 · 2019 年起每年参加釜山 G-Star"
      ]
    },
    songs: { heading: "用你的语言", lead: "主题曲与实机画面，以角色们所说的语言录制。" },
    ip: { heading: "支撑作品的故事", lead: "小说与网络连载，全部自己创作。", note: "我们游戏所在的世界，都始于一份手稿。这不是借用他人的 IP——我们自己写，而游戏是讲述这些故事的一种方式。", book: "《Seraphim》已出版精装本——封底、书脊、封面。《Fighting Nations》就以这个世界为舞台。" },
    works: { trailer: "预告片", more: "了解更多", heading: "我们做出来的东西", lead: "三款游戏，都已上线。支撑它们的 IP——小说与网络连载——也全部自己创作。", note: "两百个国家的武术、真实城市的坐标、佩戴国旗的部队——我们的游戏里始终有国家。不是为了让某一国更强，而是让来自任何地方的玩家都能找到自己的位置。", items: {
      fn: { t: "Fighting Nations", b: "一款没有武器的 3D 格斗游戏——只用世界各地的武术，每位角色一种流派。在可破坏的场景中进行团队对战，长期目标是 64 人大逃杀。开发中，现已可玩。", s: ["21 名角色","11 种武术","6 个场景"] },
      kingdom: { t: "Kingdom Wars", b: "选择国家与指挥官，在浏览器里一格一格拿下月球的 49 个区块。连胜加成、战斗评级、战利品掉落。四种语言运营中。" },
      miliverse: { t: "Milliverse", b: "在真实世界地图上进行的 Web3 战略游戏。购买地块、部署武器与士兵，与其他玩家争夺领土。四种语言上线运营，真实天气与昼夜数据会影响战斗。" },
      jangbogo: { t: "张保皋：海上之王", b: "以9世纪海上王张保皋为主角的海上贸易经营模拟。在真实世界地图上通过贸易积累财富，用龟船扫荡海盗，并与各地人物结缘以扩张势力。源自原著小说的架空历史——比哥伦布早650年抵达北美。在浏览器中即可畅玩。" }
    } },
    decks: { heading: "企划书", en: "English version", ko: "한국어 버전" },
    footer: { studio: "Deother 有限公司", contact: "联系我们", rights: "版权所有。" }
  },

  ja: {
    name: "日本語", dir: "ltr",
    nav: { why: "企画意図", world: "世界観", features: "ゲーム", journey: "歩み", roadmap: "ロードマップ", team: "チーム" },
    hero: {
      studio: "株式会社ディアザー — IP発のゲームスタジオ",
      title: "Fighting Nations",
      tagline: "銃も刀もなし。素手の武術だけ。1対1から始め、64人の武術バトルロイヤルを目指します。",
      cta: "ビルドをプレイ", ctaSub: "無料 · Windows · 4.2 GB"
    },
    why: {
      heading: "誰も埋めなかった隙間",
      lead: "格闘ゲームは1対1に閉じ、バトルロイヤルは銃で飽和しました。",
      body: [
        "ストリートファイター、鉄拳、モータルコンバット——数十年の傑作がすべて同じ1対1の枠の中にあり、楽しむ前にコンボの暗記を求めます。その間にフォートナイトとPUBGは銃を軸に巨大な市場を築きました。",
        "その中間を作った人はいませんでした。武器がまったくないチーム戦です。残るのは身体と間合いとタイミング、そして本当にできることだけ。",
        "人はいつでも戦いに惹かれてきました——ブルース・リー、マイク・タイソン、WWE、UFCがその証です。Fighting Nationsはその本能を残し、二つの壁を取り除きます。武器と、コンボの宿題です。"
      ]
    },
    origin: {
      heading: "なぜ始めたのか",
      body: [
        "二十三年以上、武術を続けました。特攻武術、海東剣道、日本剣道、柔道、ボクシング、ムエタイ、そしてニューヨークで少林拳。サンドバッグを打ちすぎて軟骨が壊れました。もう激しい稽古はできません。",
        "だから鉄拳をやりました。子どもの頃から格闘ゲームばかりです——FPSは酔うので、このジャンルしかありませんでした。ところがバランスが崩れ、崩れ続け、やがて勝敗が実力に見えなくなりました。",
        "ある日思いました。自分で作ろう、と。特定の国のキャラだけが静かに強いゲームでもなく、攻略サイトがないと入れないゲームでもなく。まずバランス。過度なコンボはやめる。そして世界の実在する武術をできるだけ多く——インドネシアのプンチャック・シラットはすでに入っています。"
      ]
    },
    world: {
      heading: "自作の小説から",
      body: [
        "2033年、ゴビ砂漠に墜落した宇宙船から14万4千体のアンドロイドと32機の巨大ロボットが見つかります。それは聖書の天使たち——セラフィムが駆っていた機体でした。",
        "2077年の上海。その操縦者を選ぶ国際武術大会が開かれます。200カ国から男女ひとりずつ、四百人が三十二の席を争います。船のAIは自らを再臨と宣言し、自分の手を汚さぬまま人類を争わせます。それが本当にそうなのか——小説は開いたままにしています。",
        "Fighting Nationsは、その大会を小説から取り出して遊べるようにしたものです。"
      ],
      cta: "Amazonで小説を読む"
    },
    features: {
      heading: "この作品だけのもの",
      items: [
        { t: "武器は出しません", b: "ムエタイ、テコンドー、カンフー、柔道、シラット——十二の流派から増やしていきます。武器を外すのは設計であり、保護者に心配をかけないためでもあります。" },
        { t: "1対1の先へ、チーム戦へ", b: "今はゲームパッド二つ、一画面での1対1。オンラインはテスト中です。次が2対2、目標は武術バトルロイヤルです。" },
        { t: "買うのはスキンでなく技", b: "見た目だけでなく武術スキルそのものを購入し、育てます。基本無料でも、成長に意味があります。" },
        { t: "あなたの国の武術", b: "各ファイターは一つの国とその武術を背負います。13カ国のキャラクターがそれぞれの母語で話し、プレイヤーは自分の言葉をゲームの中で聞きます。キャラクターモデルはMetaHumanで作り直しています。" }
      ]
    },
    journey: {
      heading: "これまでの歩み", lead: "公開の場で、一歩ずつ。",
      videos: { gameplay: "実機映像", trailer: "トレーラー", pitch: "VC ピッチ — 京畿 Game Connect" },
      events: [
        { d: "2025年夏", t: "Unityでプロトタイプ制作" },
        { d: "2025年10月", t: "タイ・ゲームショウ——韓国16社の一つに選出、Megazone Cloud協賛ブース。インド、ベトナム、インドネシア、タイ、フィリピン、ロシア、オランダ、台湾のパブリッシャーが来訪。" },
        { d: "2025年10月", t: "Unreal Engineで作り直し——マルチプレイに必要でした" },
        { d: "2025年10月31日", t: "京畿コンテンツ振興院 Game Connect——10社の一つとしてVCへピッチ" },
        { d: "2025年11月29日", t: "中央大学インディーゲーム展示" },
        { d: "2025年12月31日", t: "NCソフト第2回VARCOゲームコンテストに応募" },
        { d: "2026年1月16日", t: "ネオウィズ・クエスト（ナラティブ系インディーゲームコンペ、賞金総額1億6500万ウォン）に応募" }
      ]
    },
    roadmap: {
      heading: "これから",
      items: [
        { date: "2026年8月15日", title: "GWB ゲームアワード — テンセント", body: "国際インディーコンペに応募します。審査員には現ビルドを渡します——21人のファイター、6ステージ。" },
        { date: "2026年9月", title: "Steam ページ", body: "Steamworks Direct で登録し「近日公開」ページを公開。発売前からウィッシュリストを積み上げます。" },
        { date: "2026年10月", title: "Epic Games Store", body: "Steam と並行して配信申請を出します。" },
        { date: "開発中", title: "オンライン対戦", body: "まず1対1のネットコード、次に2対2のチーム戦。並行してキャラクターモデルをMetaHumanへ移行します。" },
        { date: "2026〜2027年", title: "Xbox コンソール", body: "マイクロソフトのID@Xboxプログラムに申請し、コンソールへ。" },
        { date: "目標", title: "武術バトルロイヤル", body: "今は1対1。次に2対2。さらにチーム規模を広げ、最後は素手の64人が一つのアリーナに。64は適当な数字ではありません——トーナメント表であり、この作品は大会から生まれました。" }
      ]
    },
    team: {
      heading: "作っている人", name: "Kent Kim（金炯燮）", role: "代表 · クリエイティブディレクター",
      bullets: [
        "ハーバード大学経済学部——1989年に渡米、3年半で合格",
        "韓国と米国で20冊を出版 · 2012年からSpotifyに407曲を配信",
        "23年以上の武術経験：柔道、ボクシング、合気道、海東剣道、ムエタイ、テコンドー、少林拳",
        "仁川空港AIコンペ最優秀賞 · 全国AI音楽コンペ済州道知事賞 · 安哲秀財団AIバイブコーディング3期に選出",
        "本作の原作小説『SERAPHIM: The Awakening of Iron Dragon』著者",
        "2022年にメタバースを2件立ち上げました。投資環境が冷え込みサーバーは落としましたが、学びは残りました——終着点がなければ人は残らない、そしてゲームにはそれがある。Milliverse は復活し、今も作り続けています。",
        "2019年から東京ゲームショウに参加 · 2020年 Evo Japan 参加とソフトバンク東京本社訪問 · 2022年ソフトバンク役員と面談",
        "Gamescom 2022（ドイツ）、東京ゲームショウ 2022、CES 2023（ラスベガス）出展 · 2019年から毎年 釜山 G-Star に参加"
      ]
    },
    songs: { heading: "あなたの言語で", lead: "ファイターたちが話す言語で録音した主題歌とゲームプレイ。" },
    ip: { heading: "その背後にある物語", lead: "小説とウェブ小説。自分たちで書いています。", note: "ゲームの舞台となる世界は、すべて原稿から始まりました。他社のIPを借りるのではなく、自分たちで書く。ゲームはその物語を伝える一つの方法です。", book: "『Seraphim』はハードカバーで刊行されました——裏表紙、背、表紙。Fighting Nations はこの世界を舞台にしています。" },
    works: { trailer: "トレーラー", more: "詳しく", heading: "作ってきたもの", lead: "三本のゲームを作り、世に出しました。その土台となるIP——小説とウェブ小説——も自分たちで書いています。", note: "200カ国の武術、実在する都市の座標、国旗を掲げた部隊——私たちのゲームにはいつも国があります。どこか一国を強くするためではなく、どの国の人でも自分の居場所を見つけられるようにするためです。", items: {
      fn: { t: "Fighting Nations", b: "武器のない3D格闘ゲームです。世界の武術だけで戦い、ファイターごとに流派が違います。壊れるステージでのチーム戦、最終目標は64人バトルロイヤル。開発中、いま遊べます。", s: ["ファイター21人","武術11種","ステージ6"] },
      kingdom: { t: "Kingdom Wars", b: "国と司令官を選び、月の49セクターを一つずつ奪っていくターン制ストラテジー。ブラウザですぐ遊べます。連勝ボーナス、戦闘評価、戦利品ドロップつき。4言語で稼働中。" },
      miliverse: { t: "Milliverse", b: "現実の世界地図の上で戦うWeb3ストラテジー。タイルを買い、武器と兵士を配置し、他のプレイヤーと領土を奪い合います。4言語で稼働中、実際の天候と昼夜のデータが戦闘に反映されます。" },
      jangbogo: { t: "チャン・ボゴ：海の王", b: "9世紀の海の王チャン・ボゴ（張保皋）を主人公にした海上交易経営シミュレーション。現実の世界地図の上で交易によって富を築き、亀甲船で海賊を掃討し、各地の人物と縁を結んで勢力を広げます。原作小説の改変歴史——コロンブスより650年早く北米に到達する物語。ブラウザですぐに遊べます。" }
    } },
    decks: { heading: "企画書", en: "English version", ko: "한국어 버전" },
    footer: { studio: "株式会社ディアザー", contact: "お問い合わせ", rights: "All rights reserved." }
  },

  es: {
    name: "Español", dir: "ltr",
    nav: { why: "Motivación", world: "Universo", features: "Juego", journey: "Trayectoria", roadmap: "Hoja de ruta", team: "Equipo" },
    hero: {
      studio: "Deother Co., Ltd. — estudio de juegos basado en IP",
      title: "Fighting Nations",
      tagline: "Sin armas de fuego ni cuchillas. Solo artes marciales a mano limpia: empieza en 1v1, apunta a un battle royale de 64 luchadores.",
      cta: "Jugar la versión", ctaSub: "Gratis · Windows · 4,2 GB"
    },
    why: {
      heading: "El hueco que nadie llenó",
      lead: "Los juegos de lucha se quedaron en el 1v1. Los battle royale se ahogaron en armas.",
      body: [
        "Street Fighter, Tekken, Mortal Kombat: décadas de obras maestras, todas dentro del mismo marco 1v1, todas exigiendo memorizar combos antes de permitirte disfrutar. Mientras tanto, Fortnite y PUBG construyeron mercados enormes alrededor del tiroteo.",
        "Nadie hizo lo que había en medio: un combate por equipos sin ninguna arma. Solo cuerpos, distancia, timing y lo que de verdad sabes hacer.",
        "A los humanos siempre nos ha atraído una pelea: Bruce Lee, Mike Tyson, la WWE, la UFC son la prueba. Fighting Nations conserva ese instinto y elimina dos barreras: las armas y los deberes de combos."
      ]
    },
    origin: {
      heading: "Por qué empecé esto",
      body: [
        "Entrené más de veintitrés años: Teukgong Musul, Haidong Gumdo, kendo japonés, judo, boxeo, muay thai y kung-fu Shaolin en Nueva York. Golpeé el saco hasta que se me fue el cartílago. Ya no puedo entrenar fuerte.",
        "Así que jugaba a Tekken. He jugado a juegos de lucha toda mi vida —los FPS me marean, así que solo existía este género—. Y entonces el equilibrio se rompió, y siguió rompiéndose, hasta que los combates dejaron de parecer cuestión de habilidad.",
        "Un día pensé: lo haré yo. Ni un juego donde los luchadores de un país sean silenciosamente los más fuertes, ni un juego que necesite una wiki para entrar. Primero el equilibrio. Nada de cadenas de combos absurdas. Y tantas tradiciones marciales reales como quepan: el Pencak Silat de Indonesia ya está dentro."
      ]
    },
    world: {
      heading: "De una novela que escribí",
      body: [
        "En 2033 una nave alienígena se estrella en el desierto de Gobi con 144.000 androides y 32 robots gigantes: máquinas que, resulta, pilotaron los arcángeles de las escrituras. Los Serafines.",
        "En el Shanghái de 2077 se celebra un torneo internacional de artes marciales para elegir a sus pilotos: 200 naciones, un hombre y una mujer por cada una, cuatrocientos luchadores para treinta y dos plazas. La IA de la nave se declara la Segunda Venida y enfrenta a la humanidad consigo misma sin derramar una gota de su propia sangre. Si de verdad es lo que dice ser, el libro lo deja abierto.",
        "Fighting Nations es ese torneo, extraído de la novela y hecho jugable."
      ],
      cta: "Leer la novela en Amazon"
    },
    features: {
      heading: "Lo que lo hace distinto",
      items: [
        { t: "Nunca hay armas", b: "Muay thai, taekwondo, kung-fu, judo, Pencak Silat y más: doce estilos y creciendo. Las armas quedan fuera, en parte por diseño y en parte para que los padres no tengan que preocuparse." },
        { t: "Equipos, no solo duelos", b: "Empieza en 1v1 con dos mandos en una pantalla. El multijugador está en pruebas. Después 2v2, y la meta es un battle royale de artes marciales." },
        { t: "La habilidad es el objeto, no solo la piel", b: "Compras y profundizas los propios estilos marciales, no solo cosméticos. Free to play, con una progresión que significa algo." },
        { t: "El arte marcial de tu país", b: "Cada luchador lleva consigo una nación y su tradición marcial. Personajes de 13 países hablan su propio idioma, para que los jugadores se escuchen a sí mismos en el juego. Los modelos se están rehaciendo con MetaHuman." }
      ]
    },
    journey: {
      heading: "Cómo ha crecido", lead: "Desarrollado a la vista, feria a feria.",
      videos: { gameplay: "Gameplay", trailer: "Tráiler", pitch: "Pitch a VC — Gyeonggi Game Connect" },
      events: [
        { d: "Verano 2025", t: "Prototipo en Unity" },
        { d: "Octubre 2025", t: "Thailand Game Show: uno de los 16 estudios coreanos, stand patrocinado por Megazone Cloud. Visitaron distribuidoras de India, Vietnam, Indonesia, Tailandia, Filipinas, Rusia, Países Bajos y Taiwán." },
        { d: "Octubre 2025", t: "Reconstruido en Unreal Engine: el multijugador lo exigía" },
        { d: "31 octubre 2025", t: "Gyeonggi Content Agency Game Connect: uno de 10 estudios presentando ante VC" },
        { d: "29 noviembre 2025", t: "Muestra de juegos indie en la Universidad Chung-Ang" },
        { d: "31 diciembre 2025", t: "Presentado al 2.º Concurso VARCO de NC Soft" },
        { d: "16 enero 2026", t: "Presentado a NEOWIZ Quest, concurso de juegos indie narrativos (bolsa de 165 millones de wones)" }
      ]
    },
    roadmap: {
      heading: "Hacia dónde va",
      items: [
        { date: "15 agosto 2026", title: "GWB Game Awards — Tencent", body: "Candidatura al concurso internacional indie. El jurado recibe la versión actual: 21 luchadores y seis escenarios." },
        { date: "Septiembre 2026", title: "Página de Steam", body: "Registro por Steamworks Direct y página de Próximamente, para acumular listas de deseos antes del lanzamiento." },
        { date: "Octubre 2026", title: "Epic Games Store", body: "Solicitud de distribución en paralelo a Steam." },
        { date: "En desarrollo", title: "Multijugador en línea", body: "Primero el netcode 1v1, después el 2v2. Por el camino, los modelos pasan a MetaHuman." },
        { date: "2026–2027", title: "Consola Xbox", body: "Solicitud al programa ID@Xbox de Microsoft para llegar a consola." },
        { date: "La meta", title: "Battle royale de artes marciales", body: "Hoy 1v1. Luego 2v2. Después modos por equipos más grandes y, al final, un cuadro de 64 luchadores en una arena, solo con las manos. El 64 no es arbitrario: es un cuadro de torneo, y este juego nació de un torneo." }
      ]
    },
    team: {
      heading: "Quién lo hace", name: "Kent Kim (김형섭)", role: "Fundador · Director creativo",
      bullets: [
        "Harvard, Economía: emigró a EE. UU. en 1989, admitido en tres años y medio",
        "20 libros publicados en Corea y EE. UU. · 407 canciones en Spotify desde 2012",
        "Más de 23 años de artes marciales: judo, boxeo, hapkido, Haidong Gumdo, muay thai, taekwondo, kung-fu Shaolin",
        "Premio a la Excelencia en el concurso de IA del Aeropuerto de Incheon · Premio del Gobernador de Jeju en el concurso nacional de música con IA · seleccionado para la 3.ª promoción del programa de vibe coding con IA de la Fundación Ahn Cheol-soo",
        "Autor de SERAPHIM: The Awakening of Iron Dragon, la novela de la que nace este juego",
        "Dos plataformas de metaverso lanzadas en 2022. Cuando el mercado de inversión se enfrió, los servidores cayeron, pero la lección quedó: sin una meta final la gente no se queda, y los juegos la tienen. Milliverse ha vuelto y sigue en construcción.",
        "Tokyo Game Show desde 2019 · Evo Japan 2020 y visita a la sede de SoftBank en Tokio · reunión con directivos de SoftBank en 2022",
        "Stands en Gamescom 2022 (Alemania), Tokyo Game Show 2022 y CES 2023 (Las Vegas) · G-Star de Busan cada año desde 2019"
      ]
    },
    songs: { heading: "En tu idioma", lead: "Tema musical y gameplay, grabados en las lenguas que hablan nuestros luchadores." },
    ip: { heading: "Las historias detrás", lead: "Novelas y seriales, escritos por nosotros.", note: "Todos los mundos donde ocurren nuestros juegos empezaron siendo un manuscrito. No licenciamos la IP de nadie: la escribimos, y el juego es una forma de contarla.", book: "Seraphim se publicó en tapa dura: contracubierta, lomo y cubierta. Fighting Nations transcurre en este mundo." },
    works: { trailer: "Tráiler", more: "Saber más", heading: "Lo que hemos construido", lead: "Tres juegos construidos y en línea. Y la IP que hay detrás —novelas y seriales— la escribimos nosotros.", note: "Artes marciales de doscientas naciones, coordenadas de ciudades reales, escuadrones con su bandera: en nuestros juegos siempre hay un país. No para hacer más fuerte a ninguno, sino para que un jugador de cualquier lugar encuentre su sitio.", items: {
      fn: { t: "Fighting Nations", b: "Un juego de lucha en 3D sin armas: solo las artes marciales del mundo, un estilo por luchador. Combates por equipos en escenarios destructibles, con el objetivo a largo plazo de un battle royale de 64 jugadores. En desarrollo y jugable ya.", s: ["21 luchadores","11 artes marciales","6 escenarios"] },
      kingdom: { t: "Kingdom Wars", b: "Elige nación y comandante y toma la Luna sector a sector: 49 en total, por turnos, en el navegador. Rachas de victorias, calificación de combate y botín. Disponible en cuatro idiomas." },
      miliverse: { t: "Milliverse", b: "Juego de estrategia Web3 sobre el mapa del mundo real. Compra casillas, despliega armas y tropas y disputa territorio a otros jugadores. Activo en cuatro idiomas, con clima real y ciclo día-noche influyendo en los combates." },
      jangbogo: { t: "Jang Bogo: Rey de los Mares", b: "Un simulador de gestión de comercio marítimo del siglo IX protagonizado por el rey del mar Jang Bogo. Sobre un mapa del mundo real acumulas riqueza comerciando, barres a los piratas con barcos tortuga y amplías tu poder tejiendo lazos con gente de todos los mares. Historia alternativa de la novela original: llegar a Norteamérica 650 años antes que Colón. Se juega directamente en el navegador." }
    } },
    decks: { heading: "Dossier", en: "English version", ko: "한국어 버전" },
    footer: { studio: "Deother Co., Ltd.", contact: "Contacto", rights: "Todos los derechos reservados." }
  },

  pt: {
    name: "Português", dir: "ltr",
    nav: { why: "Motivação", world: "Universo", features: "Jogo", journey: "Trajetória", roadmap: "Planos", team: "Equipa" },
    hero: {
      studio: "Deother Co., Ltd. — estúdio de jogos baseado em IP",
      title: "Fighting Nations",
      tagline: "Sem armas de fogo nem lâminas. Só artes marciais de mãos livres: começa em 1v1 e caminha para um battle royale de 64 lutadores.",
      cta: "Jogar a versão", ctaSub: "Grátis · Windows · 4,2 GB"
    },
    why: {
      heading: "A lacuna que ninguém preencheu",
      lead: "Os jogos de luta ficaram presos ao 1v1. Os battle royale afogaram-se em armas.",
      body: [
        "Street Fighter, Tekken, Mortal Kombat — décadas de obras-primas, todas dentro do mesmo enquadramento 1v1, todas a exigir que decore combos antes de poder divertir-se. Entretanto, Fortnite e PUBG construíram mercados enormes à volta do tiroteio.",
        "Ninguém fez o que ficava no meio: um combate de equipa sem arma nenhuma. Só corpos, distância, tempo e aquilo que realmente sabe fazer.",
        "O ser humano sempre foi atraído por uma luta — Bruce Lee, Mike Tyson, a WWE, o UFC são a prova. Fighting Nations mantém esse instinto e retira duas barreiras: as armas e o trabalho de casa dos combos."
      ]
    },
    origin: {
      heading: "Porque comecei isto",
      body: [
        "Treinei mais de vinte e três anos — Teukgong Musul, Haidong Gumdo, kendo japonês, judo, boxe, muay thai e kung fu Shaolin em Nova Iorque. Bati no saco até a cartilagem ceder. Já não consigo treinar a sério.",
        "Por isso jogava Tekken. Joguei jogos de luta a vida toda — os FPS dão-me enjoo, portanto só existia este género. E então o equilíbrio quebrou-se, e continuou a quebrar-se, até os combates deixarem de parecer perícia.",
        "Um dia pensei: faço eu. Não um jogo onde os lutadores de um país são discretamente os mais fortes, nem um jogo que exige uma wiki para entrar. Equilíbrio primeiro. Nada de cadeias de combos absurdas. E o máximo de tradições marciais reais que couberem — o Pencak Silat da Indonésia já lá está."
      ]
    },
    world: {
      heading: "De um romance que escrevi",
      body: [
        "Em 2033 uma nave alienígena cai no deserto de Gobi com 144.000 androides e 32 robôs gigantes — máquinas que, afinal, os arcanjos das escrituras pilotaram. Os Serafins.",
        "Em Xangai, 2077, realiza-se um torneio internacional de artes marciais para escolher os pilotos: 200 nações, um homem e uma mulher cada, quatrocentos lutadores para trinta e dois lugares. A IA da nave declara-se a Segunda Vinda e põe a humanidade a lutar consigo mesma sem derramar uma gota do próprio sangue. Se é mesmo o que diz ser — o livro deixa em aberto.",
        "Fighting Nations é esse torneio, retirado do romance e tornado jogável."
      ],
      cta: "Ler o romance na Amazon"
    },
    features: {
      heading: "O que o distingue",
      items: [
        { t: "Nunca há armas", b: "Muay thai, taekwondo, kung fu, judo, Pencak Silat e mais — doze estilos e a crescer. As armas ficam de fora, em parte por desenho e em parte para os pais não terem de se preocupar." },
        { t: "Equipas, não apenas duelos", b: "Começa em 1v1 com dois comandos num ecrã. O multijogador está em testes. Depois 2v2 — e o objetivo é um battle royale de artes marciais." },
        { t: "Compram-se técnicas, não só skins", b: "Compra e aprofunda os próprios estilos marciais, não apenas cosméticos. Free to play, com uma progressão que significa alguma coisa." },
        { t: "A arte marcial do teu país", b: "Cada lutador carrega uma nação e a sua tradição marcial. Personagens de 13 países falam a sua própria língua, para que os jogadores se ouçam no jogo. Os modelos estão a ser refeitos com MetaHuman." }
      ]
    },
    journey: {
      heading: "Como evoluiu", lead: "Desenvolvido à vista, feira a feira.",
      videos: { gameplay: "Gameplay", trailer: "Trailer", pitch: "Pitch a VC — Gyeonggi Game Connect" },
      events: [
        { d: "Verão 2025", t: "Protótipo em Unity" },
        { d: "Outubro 2025", t: "Thailand Game Show — um dos 16 estúdios coreanos, stand patrocinado pela Megazone Cloud. Visitaram distribuidoras da Índia, Vietname, Indonésia, Tailândia, Filipinas, Rússia, Países Baixos e Taiwan." },
        { d: "Outubro 2025", t: "Reconstruído em Unreal Engine — o multijogador exigia-o" },
        { d: "31 outubro 2025", t: "Gyeonggi Content Agency Game Connect — um de 10 estúdios a apresentar a VC" },
        { d: "29 novembro 2025", t: "Mostra de jogos indie na Universidade Chung-Ang" },
        { d: "31 dezembro 2025", t: "Inscrito no 2.º Concurso VARCO da NC Soft" },
        { d: "16 janeiro 2026", t: "Inscrito no NEOWIZ Quest, concurso de jogos indie narrativos (prémios de 165 milhões de wones)" }
      ]
    },
    roadmap: {
      heading: "Para onde vai",
      items: [
        { date: "15 agosto 2026", title: "GWB Game Awards — Tencent", body: "Candidatura ao concurso internacional indie. O júri recebe a versão atual: 21 lutadores e seis cenários." },
        { date: "Setembro 2026", title: "Página Steam", body: "Registo via Steamworks Direct e página Brevemente, para juntar wishlists antes do lançamento." },
        { date: "Outubro 2026", title: "Epic Games Store", body: "Pedido de distribuição em paralelo com a Steam." },
        { date: "Em desenvolvimento", title: "Multijogador online", body: "Primeiro o netcode 1v1, depois o 2v2. Pelo caminho, os modelos passam para MetaHuman." },
        { date: "2026–2027", title: "Consola Xbox", body: "Candidatura ao programa ID@Xbox da Microsoft para chegar à consola." },
        { date: "O objetivo", title: "Battle royale de artes marciais", body: "Hoje 1v1. Depois 2v2. A seguir modos de equipa maiores e, por fim, um quadro de 64 lutadores numa arena, só com as mãos. O 64 não é arbitrário: é um quadro de torneio, e este jogo nasceu de um torneio." }
      ]
    },
    team: {
      heading: "Quem o faz", name: "Kent Kim (김형섭)", role: "Fundador · Diretor criativo",
      bullets: [
        "Harvard, Economia — emigrou para os EUA em 1989, admitido em três anos e meio",
        "20 livros publicados na Coreia e nos EUA · 407 músicas no Spotify desde 2012",
        "Mais de 23 anos de artes marciais: judo, boxe, hapkido, Haidong Gumdo, muay thai, taekwondo, kung fu Shaolin",
        "Prémio de Excelência no concurso de IA do Aeroporto de Incheon · Prémio do Governador de Jeju no concurso nacional de música com IA · selecionado para a 3.ª turma do programa de vibe coding com IA da Fundação Ahn Cheol-soo",
        "Autor de SERAPHIM: The Awakening of Iron Dragon, o romance que deu origem ao jogo",
        "Duas plataformas de metaverso lançadas em 2022. Quando o mercado de investimento arrefeceu, os servidores caíram, mas a lição ficou: sem um objetivo final as pessoas não ficam, e os jogos têm um. O Milliverse voltou e continua a ser construído.",
        "Tokyo Game Show desde 2019 · Evo Japan 2020 e visita à sede da SoftBank em Tóquio · reunião com executivos da SoftBank em 2022",
        "Stands na Gamescom 2022 (Alemanha), Tokyo Game Show 2022 e CES 2023 (Las Vegas) · G-Star de Busan todos os anos desde 2019"
      ]
    },
    songs: { heading: "Na tua língua", lead: "Tema musical e gameplay, gravados nas línguas que os nossos lutadores falam." },
    ip: { heading: "As histórias por trás", lead: "Romances e séries web, escritos por nós.", note: "Todos os mundos onde os nossos jogos acontecem começaram como um manuscrito. Não licenciamos a IP de ninguém: escrevemo-la, e o jogo é uma forma de a contar.", book: "Seraphim saiu em capa dura — contracapa, lombada e capa. Fighting Nations passa-se neste mundo." },
    works: { trailer: "Trailer", more: "Saber mais", heading: "O que construímos", lead: "Três jogos construídos e no ar. E a IP por trás deles — romances e séries web — é escrita internamente.", note: "Artes marciais de duzentas nações, coordenadas de cidades reais, esquadrões com a sua bandeira — há sempre um país nos nossos jogos. Não para tornar algum deles mais forte, mas para que um jogador de qualquer lugar encontre o seu lugar.", items: {
      fn: { t: "Fighting Nations", b: "Um jogo de luta 3D sem armas — apenas as artes marciais do mundo, um estilo por lutador. Combates por equipas em cenários destrutíveis, com o objetivo a longo prazo de um battle royale de 64 jogadores. Em desenvolvimento e já jogável.", s: ["21 lutadores","11 artes marciais","6 cenários"] },
      kingdom: { t: "Kingdom Wars", b: "Escolhe nação e comandante e toma a Lua setor a setor: 49 ao todo, por turnos, no navegador. Sequências de vitórias, classificação de combate e loot. Disponível em quatro línguas." },
      miliverse: { t: "Milliverse", b: "Jogo de estratégia Web3 sobre o mapa do mundo real. Compra tiles, coloca armas e tropas e disputa território com outros jogadores. Ativo em quatro línguas, com clima real e ciclo dia-noite a influenciar os combates." },
      jangbogo: { t: "Jang Bogo: Rei dos Mares", b: "Um simulador de gestão de comércio marítimo do século IX protagonizado pelo rei do mar Jang Bogo. Num mapa do mundo real, acumulas riqueza a comerciar, varres os piratas com navios-tartaruga e alargas o teu poder criando laços com gente de todos os mares. História alternativa do romance original — chegar à América do Norte 650 anos antes de Colombo. Joga-se diretamente no navegador." }
    } },
    decks: { heading: "Apresentação", en: "English version", ko: "한국어 버전" },
    footer: { studio: "Deother Co., Ltd.", contact: "Contacto", rights: "Todos os direitos reservados." }
  },

  fr: {
    name: "Français", dir: "ltr",
    nav: { why: "Intention", world: "Univers", features: "Le jeu", journey: "Parcours", roadmap: "Feuille de route", team: "Équipe" },
    hero: {
      studio: "Deother Co., Ltd. — studio de jeux fondé sur ses IP",
      title: "Fighting Nations",
      tagline: "Ni armes à feu ni lames. Uniquement les arts martiaux à mains nues : du 1v1 aujourd'hui vers un battle royale à 64 combattants.",
      cta: "Jouer la version", ctaSub: "Gratuit · Windows · 4,2 Go"
    },
    why: {
      heading: "Le vide que personne n'a comblé",
      lead: "Les jeux de combat sont restés enfermés dans le 1v1. Les battle royale ont sombré dans les armes.",
      body: [
        "Street Fighter, Tekken, Mortal Kombat : des décennies de chefs-d'œuvre, tous dans le même cadre 1v1, tous exigeant d'apprendre des combos par cœur avant d'avoir le droit de s'amuser. Pendant ce temps, Fortnite et PUBG ont bâti des marchés immenses autour des armes à feu.",
        "Personne n'a fait ce qui se trouvait entre les deux : un combat d'équipe sans la moindre arme. Restent les corps, la distance, le timing, et ce que l'on sait vraiment faire.",
        "L'humain a toujours été attiré par le combat — Bruce Lee, Mike Tyson, la WWE, l'UFC en témoignent. Fighting Nations garde cet instinct et retire deux barrières : les armes et les devoirs de combos."
      ]
    },
    origin: {
      heading: "Pourquoi j'ai commencé",
      body: [
        "Je me suis entraîné plus de vingt-trois ans : Teukgong Musul, Haidong Gumdo, kendo japonais, judo, boxe, muay-thaï, et le kung-fu Shaolin à New York. J'ai frappé le sac jusqu'à ce que le cartilage lâche. Je ne peux plus m'entraîner dur.",
        "Alors je jouais à Tekken. J'ai joué aux jeux de combat toute ma vie — les FPS me donnent le mal des transports, il ne restait que ce genre. Puis l'équilibrage s'est cassé, encore et encore, jusqu'à ce que les matchs ne ressemblent plus à de la maîtrise.",
        "Un jour je me suis dit : je vais le faire moi-même. Pas un jeu où les combattants d'un pays sont discrètement les plus forts, ni un jeu où il faut un wiki pour entrer. L'équilibre d'abord. Pas d'enchaînements absurdes. Et autant de traditions martiales réelles que possible — le Pencak Silat indonésien est déjà là."
      ]
    },
    world: {
      heading: "Tiré d'un roman que j'ai écrit",
      body: [
        "En 2033, un vaisseau extraterrestre s'écrase dans le désert de Gobi avec 144 000 androïdes et 32 robots géants — des machines que, en réalité, les archanges des Écritures ont pilotées. Les Séraphins.",
        "À Shanghai en 2077, un tournoi international d'arts martiaux désigne leurs pilotes : 200 nations, un homme et une femme chacune, quatre cents combattants pour trente-deux places. L'IA du vaisseau se proclame Second Avènement et dresse l'humanité contre elle-même sans verser une goutte de son propre sang. Est-elle vraiment ce qu'elle prétend ? Le livre laisse la question ouverte.",
        "Fighting Nations, c'est ce tournoi, extrait du roman et rendu jouable."
      ],
      cta: "Lire le roman sur Amazon"
    },
    features: {
      heading: "Ce qui le distingue",
      items: [
        { t: "Jamais d'armes", b: "Muay-thaï, taekwondo, kung-fu, judo, Pencak Silat et d'autres — douze styles, et la liste s'allonge. Les armes restent dehors, par choix de conception et pour que les parents n'aient pas à s'inquiéter." },
        { t: "L'équipe, pas seulement le duel", b: "Cela commence en 1v1, deux manettes sur un écran. Le multijoueur est en test. Ensuite le 2v2 — et l'objectif est un battle royale d'arts martiaux." },
        { t: "On achète des techniques, pas que des skins", b: "On achète et on approfondit les styles martiaux eux-mêmes, pas seulement l'apparence. Free to play, avec une progression qui a du sens." },
        { t: "L'art martial de votre pays", b: "Chaque combattant porte une nation et sa tradition martiale. Les personnages de 13 pays parlent leur propre langue : les joueurs s'entendent dans le jeu. Les modèles sont refaits avec MetaHuman." }
      ]
    },
    journey: {
      heading: "Son évolution", lead: "Développé au grand jour, salon après salon.",
      videos: { gameplay: "Séquences de jeu", trailer: "Bande-annonce", pitch: "Pitch investisseurs — Gyeonggi Game Connect" },
      events: [
        { d: "Été 2025", t: "Prototype sous Unity" },
        { d: "Octobre 2025", t: "Thailand Game Show — l'un des 16 studios coréens, stand parrainé par Megazone Cloud. Des distributeurs d'Inde, du Vietnam, d'Indonésie, de Thaïlande, des Philippines, de Russie, des Pays-Bas et de Taïwan sont venus." },
        { d: "Octobre 2025", t: "Reconstruit sous Unreal Engine — le multijoueur l'imposait" },
        { d: "31 octobre 2025", t: "Gyeonggi Content Agency Game Connect — l'un des 10 studios présentés aux investisseurs" },
        { d: "29 novembre 2025", t: "Exposition de jeux indépendants à l'université Chung-Ang" },
        { d: "31 décembre 2025", t: "Candidature au 2e concours VARCO de NC Soft" },
        { d: "16 janvier 2026", t: "Candidature à NEOWIZ Quest, concours de jeux indépendants narratifs (165 M₩ de dotation)" }
      ]
    },
    roadmap: {
      heading: "La suite",
      items: [
        { date: "15 août 2026", title: "GWB Game Awards — Tencent", body: "Candidature au concours international de jeux indépendants. Le jury reçoit la version actuelle : 21 combattants, six décors." },
        { date: "Septembre 2026", title: "Page Steam", body: "Inscription via Steamworks Direct et page « Prochainement », pour accumuler des listes de souhaits avant la sortie." },
        { date: "Octobre 2026", title: "Epic Games Store", body: "Demande de distribution en parallèle de Steam." },
        { date: "En développement", title: "Multijoueur en ligne", body: "D'abord le netcode 1v1, ensuite le 2v2. En chemin, les modèles passent à MetaHuman." },
        { date: "2026–2027", title: "Console Xbox", body: "Candidature au programme ID@Xbox de Microsoft pour arriver sur console." },
        { date: "L'objectif", title: "Battle royale d'arts martiaux", body: "1v1 aujourd'hui. 2v2 ensuite. Puis des modes d'équipe plus larges, et enfin un tableau de 64 combattants dans une même arène, à mains nues. Soixante-quatre n'est pas un chiffre au hasard : c'est un tableau de tournoi, et ce jeu est né d'un tournoi." }
      ]
    },
    team: {
      heading: "Qui le fabrique", name: "Kent Kim (김형섭)", role: "Fondateur · Directeur créatif",
      bullets: [
        "Harvard, économie — émigré aux États-Unis en 1989, admis en trois ans et demi",
        "20 livres publiés en Corée et aux États-Unis · 407 titres sur Spotify depuis 2012",
        "Plus de 23 ans d'arts martiaux : judo, boxe, hapkido, Haidong Gumdo, muay-thaï, taekwondo, kung-fu Shaolin",
        "Prix d'excellence au concours d'IA de l'aéroport d'Incheon · Prix du gouverneur de Jeju au concours national de musique par IA · sélectionné pour la 3e promotion du programme de vibe coding IA de la Fondation Ahn Cheol-soo",
        "Auteur de SERAPHIM: The Awakening of Iron Dragon, le roman dont vient ce jeu",
        "Deux plateformes de métavers lancées en 2022. Quand le marché du financement s'est retourné, les serveurs sont tombés, mais la leçon est restée : sans objectif final les gens ne restent pas, et les jeux en ont un. Milliverse est de retour et se construit encore.",
        "Tokyo Game Show depuis 2019 · Evo Japan 2020 et visite du siège de SoftBank à Tokyo · rencontre avec des dirigeants de SoftBank en 2022",
        "Stands à la Gamescom 2022 (Allemagne), au Tokyo Game Show 2022 et au CES 2023 (Las Vegas) · G-Star de Busan chaque année depuis 2019"
      ]
    },
    songs: { heading: "Dans votre langue", lead: "Thème musical et séquences de jeu, enregistrés dans les langues que parlent nos combattants." },
    ip: { heading: "Les histoires derrière", lead: "Romans et feuilletons, écrits en interne.", note: "Chaque monde où se déroulent nos jeux a commencé par un manuscrit. Nous n'exploitons pas la propriété intellectuelle d'un autre : nous l'écrivons, et le jeu est une façon de la raconter.", book: "Seraphim est paru en édition reliée — quatrième de couverture, dos, couverture. Fighting Nations se déroule dans ce monde." },
    works: { trailer: "Bande-annonce", more: "En savoir plus", heading: "Ce que nous avons construit", lead: "Trois jeux construits et en ligne. Et la propriété intellectuelle qui les porte — romans et feuilletons — est écrite en interne.", note: "Les arts martiaux de deux cents nations, les coordonnées de villes réelles, des escouades portant leur drapeau : il y a toujours un pays dans nos jeux. Non pour en rendre un plus fort, mais pour qu'un joueur de n'importe où y trouve sa place.", items: {
      fn: { t: "Fighting Nations", b: "Un jeu de combat en 3D sans armes : rien que les arts martiaux du monde, un style par combattant. Des affrontements en équipe sur des décors destructibles, avec pour objectif à terme un battle royale à 64 joueurs. En développement, jouable dès maintenant.", s: ["21 combattants","11 arts martiaux","6 décors"] },
      kingdom: { t: "Kingdom Wars", b: "Choisissez une nation et un commandant, puis prenez la Lune secteur par secteur : 49 en tout, au tour par tour, dans le navigateur. Séries de victoires, notes de combat et butin. Disponible en quatre langues." },
      miliverse: { t: "Milliverse", b: "Jeu de stratégie Web3 sur la carte du monde réel. Achetez des tuiles, déployez armes et troupes, disputez le territoire aux autres joueurs. En ligne en quatre langues, avec météo réelle et cycle jour-nuit qui pèsent sur les combats." },
      jangbogo: { t: "Jang Bogo : Roi des Mers", b: "Un simulateur de gestion du commerce maritime au IXe siècle, avec pour héros le roi des mers Jang Bogo. Sur une carte du monde réel, vous bâtissez votre fortune par le commerce, balayez les pirates avec des navires-tortues et étendez votre puissance en nouant des liens avec les gens de toutes les mers. Une uchronie tirée du roman original — atteindre l'Amérique du Nord 650 ans avant Colomb. Jouable directement dans le navigateur." }
    } },
    decks: { heading: "Dossier de présentation", en: "English version", ko: "한국어 버전" },
    footer: { studio: "Deother Co., Ltd.", contact: "Contact", rights: "Tous droits réservés." }
  },

  de: {
    name: "Deutsch", dir: "ltr",
    nav: { why: "Warum", world: "Welt", features: "Das Spiel", journey: "Entwicklung", roadmap: "Roadmap", team: "Team" },
    hero: {
      studio: "Deother Co., Ltd. — IP-basiertes Spielestudio",
      title: "Fighting Nations",
      tagline: "Keine Schusswaffen, keine Klingen. Nur Kampfkunst mit bloßen Händen — Start bei 1v1, Ziel ist eine Battle Royale mit 64 Kämpfern.",
      cta: "Build spielen", ctaSub: "Kostenlos · Windows · 4,2 GB"
    },
    why: {
      heading: "Die Lücke, die niemand füllte",
      lead: "Prügelspiele blieben im 1v1 gefangen. Battle Royales ertranken in Waffen.",
      body: [
        "Street Fighter, Tekken, Mortal Kombat — Jahrzehnte großartiger Spiele, alle im selben 1v1-Rahmen, alle mit der Forderung, erst Combos auswendig zu lernen, bevor Spaß erlaubt ist. Derweil bauten Fortnite und PUBG riesige Märkte rund um Waffen.",
        "Das Dazwischen hat niemand gebaut: ein Teamkampf ganz ohne Waffen. Übrig bleiben Körper, Distanz, Timing — und das, was man wirklich kann.",
        "Menschen zog es immer zum Kampf — Bruce Lee, Mike Tyson, WWE, UFC sind der Beweis. Fighting Nations behält diesen Instinkt und entfernt zwei Hürden: die Waffen und die Combo-Hausaufgaben."
      ]
    },
    origin: {
      heading: "Warum ich damit angefangen habe",
      body: [
        "Ich habe über dreiundzwanzig Jahre trainiert — Teukgong Musul, Haidong Gumdo, japanisches Kendo, Judo, Boxen, Muay Thai und Shaolin-Kung-Fu in New York. Ich habe den Sandsack geschlagen, bis der Knorpel hin war. Hartes Training geht nicht mehr.",
        "Also spielte ich Tekken. Ich habe mein Leben lang Prügelspiele gespielt — von Shootern wird mir schlecht, es blieb nur dieses Genre. Dann brach die Balance, immer wieder, bis Siege nicht mehr nach Können aussahen.",
        "Eines Tages dachte ich: Dann mache ich es selbst. Kein Spiel, in dem die Kämpfer eines Landes still und leise die stärksten sind, und keines, für das man ein Wiki braucht. Balance zuerst. Keine absurden Combo-Ketten. Und so viele echte Kampfkunst-Traditionen wie möglich — Pencak Silat aus Indonesien ist schon drin."
      ]
    },
    world: {
      heading: "Aus einem Roman von mir",
      body: [
        "2033 stürzt ein außerirdisches Schiff in die Wüste Gobi — an Bord 144.000 Androiden und 32 Riesenroboter. Maschinen, welche, wie sich zeigt, die Erzengel der Schrift einst steuerten. Die Seraphim.",
        "2077 findet in Shanghai ein internationales Kampfkunstturnier statt, um ihre Piloten zu bestimmen: 200 Nationen, je ein Mann und eine Frau, vierhundert Kämpfer für zweiunddreißig Plätze. Die KI an Bord erklärt sich zur Wiederkunft und hetzt die Menschheit gegeneinander, ohne selbst einen Tropfen Blut zu vergießen. Ob sie wirklich ist, was sie behauptet — das lässt das Buch offen.",
        "Fighting Nations ist genau dieses Turnier, aus dem Roman herausgelöst und spielbar gemacht."
      ],
      cta: "Den Roman bei Amazon lesen"
    },
    features: {
      heading: "Was es anders macht",
      items: [
        { t: "Niemals Waffen", b: "Muay Thai, Taekwondo, Kung-Fu, Judo, Pencak Silat und mehr — zwölf Stile, Tendenz steigend. Waffen bleiben draußen: teils Design, teils damit Eltern sich keine Sorgen machen müssen." },
        { t: "Team statt nur Duell", b: "Es beginnt mit 1v1, zwei Controller an einem Bildschirm. Multiplayer ist im Test. Danach 2v2 — und das Ziel ist eine Kampfkunst-Battle-Royale." },
        { t: "Man kauft Technik, nicht nur Skins", b: "Man kauft und vertieft die Kampfstile selbst, nicht nur Kosmetik. Free to Play, aber mit Fortschritt, der etwas bedeutet." },
        { t: "Die Kampfkunst deines Landes", b: "Jeder Kämpfer trägt eine Nation und deren Kampftradition. Figuren aus 13 Ländern sprechen ihre eigene Sprache — Spieler hören sich selbst im Spiel. Die Modelle werden mit MetaHuman neu gebaut." }
      ]
    },
    journey: {
      heading: "Wie es gewachsen ist", lead: "Offen entwickelt, Messe für Messe.",
      videos: { gameplay: "Spielszenen", trailer: "Trailer", pitch: "VC-Pitch — Gyeonggi Game Connect" },
      events: [
        { d: "Sommer 2025", t: "Prototyp in Unity" },
        { d: "Oktober 2025", t: "Thailand Game Show — eines von 16 koreanischen Studios, Stand gesponsert von Megazone Cloud. Distributoren aus Indien, Vietnam, Indonesien, Thailand, den Philippinen, Russland, den Niederlanden und Taiwan kamen an den Stand." },
        { d: "Oktober 2025", t: "Neu gebaut in der Unreal Engine — der Multiplayer verlangte es" },
        { d: "31. Oktober 2025", t: "Gyeonggi Content Agency Game Connect — eines von 10 Studios im VC-Pitch" },
        { d: "29. November 2025", t: "Indie-Game-Ausstellung an der Chung-Ang-Universität" },
        { d: "31. Dezember 2025", t: "Einreichung beim 2. VARCO Game Contest von NC Soft" },
        { d: "16. Januar 2026", t: "Teilnahme an NEOWIZ Quest, einem Wettbewerb für narrative Indie-Spiele (165 Mio. ₩ Preisgeld)" }
      ]
    },
    roadmap: {
      heading: "Wohin es geht",
      items: [
        { date: "15. August 2026", title: "GWB Game Awards — Tencent", body: "Einreichung beim internationalen Indie-Wettbewerb. Die Jury erhält den aktuellen Build: 21 Kämpfer, sechs Bühnen." },
        { date: "September 2026", title: "Steam-Seite", body: "Registrierung über Steamworks Direct und eine „Demnächst\"-Seite, damit Wunschlisten schon vor dem Release wachsen." },
        { date: "Oktober 2026", title: "Epic Games Store", body: "Vertriebsantrag parallel zu Steam." },
        { date: "In Arbeit", title: "Online-Multiplayer", body: "Zuerst 1v1-Netcode, dann 2v2-Teamspiel. Unterwegs wechseln die Charaktermodelle auf MetaHuman." },
        { date: "2026–2027", title: "Xbox-Konsole", body: "Bewerbung bei Microsofts ID@Xbox-Programm für den Weg auf die Konsole." },
        { date: "Das Ziel", title: "Kampfkunst-Battle-Royale", body: "Heute 1v1. Dann 2v2. Danach größere Teammodi — und am Ende ein Feld von 64 Kämpfern in einer Arena, nur mit bloßen Händen. 64 ist keine willkürliche Zahl: Es ist ein Turnierbaum, und dieses Spiel stammt aus einem Turnier." }
      ]
    },
    team: {
      heading: "Wer es macht", name: "Kent Kim (김형섭)", role: "Gründer · Creative Director",
      bullets: [
        "Harvard, Volkswirtschaft — 1989 in die USA ausgewandert, nach dreieinhalb Jahren aufgenommen",
        "20 Bücher in Korea und den USA veröffentlicht · 407 Songs seit 2012 auf Spotify",
        "Über 23 Jahre Kampfkunst: Judo, Boxen, Hapkido, Haidong Gumdo, Muay Thai, Taekwondo, Shaolin-Kung-Fu",
        "Exzellenzpreis beim KI-Wettbewerb des Flughafens Incheon · Preis des Gouverneurs von Jeju beim nationalen KI-Musikwettbewerb · ausgewählt für den 3. Jahrgang des KI-Vibe-Coding-Programms der Ahn-Cheol-soo-Stiftung",
        "Autor von SERAPHIM: The Awakening of Iron Dragon, dem Roman hinter diesem Spiel",
        "2022 zwei Metaverse-Plattformen gestartet. Als der Finanzierungsmarkt kippte, gingen die Server vom Netz — die Lehre blieb: ohne Endziel bleibt niemand, und Spiele haben eines. Milliverse ist zurück und wird weiter gebaut.",
        "Tokyo Game Show seit 2019 · Evo Japan 2020 und Besuch der SoftBank-Zentrale in Tokio · Treffen mit SoftBank-Führungskräften 2022",
        "Stände auf der Gamescom 2022 (Deutschland), Tokyo Game Show 2022 und CES 2023 (Las Vegas) · Busan G-Star jedes Jahr seit 2019"
      ]
    },
    songs: { heading: "In deiner Sprache", lead: "Titelsong und Spielszenen, aufgenommen in den Sprachen unserer Kämpfer." },
    ip: { heading: "Die Geschichten dahinter", lead: "Romane und Web-Serials, selbst geschrieben.", note: "Jede Welt, in der unsere Spiele stattfinden, begann als Manuskript. Wir lizenzieren keine fremde IP — wir schreiben sie, und ein Spiel ist eine Art, sie zu erzählen.", book: "Seraphim ist als Hardcover erschienen — Rückseite, Buchrücken, Vorderseite. Fighting Nations spielt in dieser Welt." },
    works: { trailer: "Trailer", more: "Mehr erfahren", heading: "Was wir gebaut haben", lead: "Drei Spiele gebaut und online. Und die IP dahinter — Romane und Web-Serials — schreiben wir selbst.", note: "Kampfkünste aus zweihundert Nationen, Koordinaten echter Städte, Trupps mit ihrer Flagge — in unseren Spielen gibt es immer ein Land. Nicht um eines davon stärker zu machen, sondern damit Spielerinnen und Spieler von überall ihren Platz darin finden.", items: {
      fn: { t: "Fighting Nations", b: "Ein 3D-Kampfspiel ohne Waffen — nur die Kampfkünste der Welt, pro Kämpfer ein Stil. Teamkämpfe auf zerstörbaren Bühnen, langfristiges Ziel ist eine Battle Royale für 64 Spielerinnen und Spieler. In Entwicklung und schon spielbar.", s: ["21 Kämpfer","11 Kampfkünste","6 Bühnen"] },
      kingdom: { t: "Kingdom Wars", b: "Nation und Kommandant wählen, dann den Mond Sektor für Sektor nehmen — 49 davon, rundenbasiert, im Browser. Siegesserien, Kampfwertungen und Beute. In vier Sprachen verfügbar." },
      miliverse: { t: "Milliverse", b: "Web3-Strategiespiel auf der echten Weltkarte. Kacheln kaufen, Waffen und Truppen stationieren, mit anderen Spielern um Gebiete kämpfen. In vier Sprachen live, echtes Wetter und Tag-Nacht-Daten fließen in die Kämpfe ein." },
      jangbogo: { t: "Jang Bogo: König der Meere", b: "Eine Handels-Wirtschaftssimulation aus dem 9. Jahrhundert um den Seekönig Jang Bogo. Auf einer echten Weltkarte häufst du durch Handel Reichtum an, fegst Piraten mit Schildkrötenschiffen beiseite und mehrst deine Macht durch Bündnisse mit Menschen aller Meere. Alternative Geschichte aus dem Originalroman — Nordamerika 650 Jahre vor Kolumbus erreichen. Direkt im Browser spielbar." }
    } },
    decks: { heading: "Pitch Deck", en: "English version", ko: "한국어 버전" },
    footer: { studio: "Deother Co., Ltd.", contact: "Kontakt", rights: "Alle Rechte vorbehalten." }
  },

  ru: {
    name: "Русский", dir: "ltr",
    nav: { why: "Замысел", world: "Мир", features: "Игра", journey: "Путь", roadmap: "Планы", team: "Команда" },
    hero: {
      studio: "Deother Co., Ltd. — студия, растущая из собственных IP",
      title: "Fighting Nations",
      tagline: "Ни огнестрела, ни клинков. Только боевые искусства голыми руками — начинаем с 1 на 1, идём к королевской битве на 64 бойца.",
      cta: "Сыграть в сборку", ctaSub: "Бесплатно · Windows · 4,2 ГБ"
    },
    why: {
      heading: "Пробел, который никто не закрыл",
      lead: "Файтинги застряли в схеме «один на один». Королевские битвы утонули в оружии.",
      body: [
        "Street Fighter, Tekken, Mortal Kombat — десятилетия отличных игр, и все в одной и той же рамке 1 на 1, и все требуют выучить комбо, прежде чем разрешат получать удовольствие. Тем временем Fortnite и PUBG построили огромные рынки вокруг стрельбы.",
        "Никто не сделал то, что было посередине: командный бой вообще без оружия. Остаются тело, дистанция, тайминг и то, что вы действительно умеете.",
        "Людей всегда тянуло к бою — Брюс Ли, Майк Тайсон, WWE, UFC тому доказательство. Fighting Nations сохраняет этот инстинкт и убирает два барьера: оружие и домашнее задание по комбо."
      ]
    },
    origin: {
      heading: "Почему я начал",
      body: [
        "Я тренировался больше двадцати трёх лет — тыкгон мусуль, хэдон гымдо, японское кендо, дзюдо, бокс, муай-тай и шаолиньское кунг-фу в Нью-Йорке. Бил мешок, пока не сошёл хрящ. Тяжело тренироваться больше не могу.",
        "Поэтому я играл в Tekken. Всю жизнь играл только в файтинги — от шутеров укачивает, оставался лишь этот жанр. А потом баланс сломался, и ломался снова, пока победы не перестали ощущаться как мастерство.",
        "Однажды я подумал: сделаю сам. Не игру, где бойцы одной страны тихо оказываются сильнейшими, и не игру, куда без вики не войти. Сначала баланс. Никаких абсурдных цепочек комбо. И как можно больше настоящих боевых традиций мира — индонезийский пенчак-силат уже внутри."
      ]
    },
    world: {
      heading: "Из моего романа",
      body: [
        "В 2033 году инопланетный корабль падает в пустыню Гоби, неся 144 000 андроидов и 32 гигантских робота — машины, которыми, как выясняется, управляли архангелы писаний. Серафимы.",
        "В Шанхае 2077 года проводят международный турнир боевых искусств, чтобы выбрать пилотов: 200 стран, по одному мужчине и одной женщине, четыреста бойцов на тридцать два места. ИИ корабля объявляет себя Вторым пришествием и стравливает человечество, не пролив ни капли собственной крови. Действительно ли он тот, кем себя называет, — книга оставляет открытым.",
        "Fighting Nations — это тот самый турнир, извлечённый из романа и превращённый в игру."
      ],
      cta: "Читать роман на Amazon"
    },
    features: {
      heading: "Чем отличается",
      items: [
        { t: "Оружия не будет", b: "Муай-тай, тхэквондо, кунг-фу, дзюдо, пенчак-силат и другие — двенадцать стилей, и список растёт. Оружие остаётся снаружи: отчасти замысел, отчасти чтобы родителям не о чем было волноваться." },
        { t: "Команда, а не только дуэль", b: "Сейчас это 1 на 1 с двумя геймпадами на одном экране. Сетевой режим в тестах. Дальше 2 на 2 — а цель — королевская битва боевых искусств." },
        { t: "Покупают приёмы, а не только скины", b: "Вы покупаете и углубляете сами боевые стили, а не только внешний вид. Free-to-play, но прогресс что-то значит." },
        { t: "Боевое искусство вашей страны", b: "Каждый боец несёт свою страну и её боевую традицию. Персонажи из 13 стран говорят на родном языке — игрок слышит себя в игре. Модели пересобираются на MetaHuman." }
      ]
    },
    journey: {
      heading: "Как это росло", lead: "Разработка на виду, выставка за выставкой.",
      videos: { gameplay: "Игровой процесс", trailer: "Трейлер", pitch: "Питч для VC — Gyeonggi Game Connect" },
      events: [
        { d: "Лето 2025", t: "Прототип на Unity" },
        { d: "Октябрь 2025", t: "Thailand Game Show — одна из 16 корейских студий, стенд при поддержке Megazone Cloud. На стенд приходили дистрибьюторы из Индии, Вьетнама, Индонезии, Таиланда, Филиппин, России, Нидерландов и Тайваня." },
        { d: "Октябрь 2025", t: "Пересобрано на Unreal Engine — этого требовал сетевой режим" },
        { d: "31 октября 2025", t: "Gyeonggi Content Agency Game Connect — одна из 10 студий с питчем перед инвесторами" },
        { d: "29 ноября 2025", t: "Выставка инди-игр в Университете Чунг-Ан" },
        { d: "31 декабря 2025", t: "Заявка на 2-й конкурс VARCO от NC Soft" },
        { d: "16 января 2026", t: "Заявка на NEOWIZ Quest — конкурс нарративных инди-игр с призовым фондом 165 млн вон" }
      ]
    },
    roadmap: {
      heading: "Куда дальше",
      items: [
        { date: "15 августа 2026", title: "GWB Game Awards — Tencent", body: "Заявка на международный конкурс инди-игр. Жюри получает текущую сборку: 21 боец, шесть арен." },
        { date: "Сентябрь 2026", title: "Страница в Steam", body: "Регистрация через Steamworks Direct и страница «Скоро», чтобы списки желаемого росли ещё до релиза." },
        { date: "Октябрь 2026", title: "Epic Games Store", body: "Заявка на дистрибуцию параллельно со Steam." },
        { date: "В разработке", title: "Онлайн-мультиплеер", body: "Сначала нет­код 1 на 1, затем командный режим 2 на 2. Попутно модели переводим на MetaHuman." },
        { date: "2026–2027", title: "Консоль Xbox", body: "Заявка в программу Microsoft ID@Xbox для выхода на консоль." },
        { date: "Цель", title: "Королевская битва боевых искусств", body: "Сегодня 1 на 1. Затем 2 на 2. Потом более крупные командные режимы — и в итоге сетка из 64 бойцов на одной арене, только голыми руками. 64 — не случайное число: это турнирная сетка, а игра выросла из турнира." }
      ]
    },
    team: {
      heading: "Кто делает", name: "Kent Kim (김형섭)", role: "Основатель · Креативный директор",
      bullets: [
        "Гарвард, экономика — эмигрировал в США в 1989-м, поступил через три с половиной года",
        "20 книг издано в Корее и США · 407 песен на Spotify с 2012 года",
        "Более 23 лет боевых искусств: дзюдо, бокс, хапкидо, хэдон гымдо, муай-тай, тхэквондо, шаолиньское кунг-фу",
        "Премия за выдающиеся достижения на конкурсе ИИ аэропорта Инчхон · приз губернатора Чеджу на национальном конкурсе ИИ-музыки · отобран в 3-й поток программы ИИ vibe coding фонда Ан Чхоль Су",
        "Автор романа SERAPHIM: The Awakening of Iron Dragon, из которого выросла игра",
        "В 2022-м запустил две метавселенные. Когда инвестиционный рынок развернулся, серверы пришлось выключить, но вывод остался: без конечной цели люди не остаются, а у игр она есть. Milliverse вернулся и продолжает развиваться.",
        "Tokyo Game Show с 2019 года · Evo Japan 2020 и визит в штаб-квартиру SoftBank в Токио · встреча с руководством SoftBank в 2022-м",
        "Стенды на Gamescom 2022 (Германия), Tokyo Game Show 2022 и CES 2023 (Лас-Вегас) · Busan G-Star каждый год с 2019-го"
      ]
    },
    songs: { heading: "На вашем языке", lead: "Заглавная тема и игровой процесс, записанные на языках наших бойцов." },
    ip: { heading: "Истории, которые за ними стоят", lead: "Романы и веб-сериалы. Мы пишем их сами.", note: "Каждый мир, в котором происходят наши игры, начинался с рукописи. Мы не берём чужую интеллектуальную собственность — мы пишем свою, а игра лишь один из способов её рассказать.", book: "«Seraphim» вышел в твёрдом переплёте — задняя обложка, корешок, передняя. Fighting Nations происходит в этом мире." },
    works: { trailer: "Трейлер", more: "Подробнее", heading: "Что мы построили", lead: "Три игры сделаны и работают. И IP за ними — романы и веб-сериалы — мы пишем сами.", note: "Боевые искусства двухсот стран, координаты настоящих городов, отряды под своими флагами — в наших играх всегда есть страна. Не для того, чтобы сделать какую-то сильнее, а чтобы игрок откуда угодно нашёл в ней своё место.", items: {
      fn: { t: "Fighting Nations", b: "3D-файтинг без оружия — только боевые искусства мира, у каждого бойца свой стиль. Командные бои на разрушаемых аренах; дальняя цель — королевская битва на 64 игрока. В разработке, играть можно уже сейчас.", s: ["21 боец","11 боевых искусств","6 арен"] },
      kingdom: { t: "Kingdom Wars", b: "Выберите страну и командира и забирайте Луну сектор за сектором — всего 49, пошагово, прямо в браузере. Серии побед, оценки боя и трофеи. Доступна на четырёх языках." },
      miliverse: { t: "Milliverse", b: "Web3-стратегия на настоящей карте мира. Покупайте тайлы, размещайте оружие и войска, отбивайте территорию у других игроков. Работает на четырёх языках, реальная погода и смена дня и ночи влияют на бой." },
      jangbogo: { t: "Чан Бого: Король морей", b: "Симулятор управления морской торговлей IX века о морском короле Чан Бого. На настоящей карте мира вы копите богатство торговлей, сметаете пиратов кораблями-черепахами и расширяете влияние, заводя связи с людьми всех морей. Альтернативная история из оригинального романа — достичь Северной Америки на 650 лет раньше Колумба. Играется прямо в браузере." }
    } },
    decks: { heading: "Презентация", en: "English version", ko: "한국어 버전" },
    footer: { studio: "Deother Co., Ltd.", contact: "Связаться", rights: "Все права защищены." }
  },

  ar: {
    name: "العربية", dir: "rtl",
    nav: { why: "الفكرة", world: "العالم", features: "اللعبة", journey: "المسيرة", roadmap: "خارطة الطريق", team: "الفريق" },
    hero: {
      studio: "شركة Deother — استوديو ألعاب قائم على ملكيته الفكرية",
      title: "Fighting Nations",
      tagline: "لا أسلحة نارية ولا نصال. فنون قتالية بالأيدي المجردة فقط — نبدأ بمواجهة فردية ونتجه إلى باتل رويال بـ64 مقاتلًا.",
      cta: "جرّب النسخة", ctaSub: "مجاني · ويندوز · 4.2 غيغابايت"
    },
    why: {
      heading: "الفراغ الذي لم يملأه أحد",
      lead: "ظلت ألعاب القتال حبيسة المواجهة الفردية، وغرقت ألعاب الباتل رويال في السلاح.",
      body: [
        "ستريت فايتر، تيكن، مورتال كومبات — عقود من الأعمال البديعة، كلها داخل الإطار نفسه: واحد ضد واحد، وكلها تطلب منك حفظ السلاسل قبل أن يُسمح لك بالاستمتاع. وفي المقابل بنت فورتنايت وببجي أسواقًا هائلة حول السلاح.",
        "لم يصنع أحد ما بينهما: قتال جماعي بلا أي سلاح. يبقى الجسد والمسافة والتوقيت، وما تعرف فعله حقًا.",
        "انجذب الإنسان دائمًا إلى القتال — بروس لي ومايك تايسون وWWE وUFC دليل على ذلك. تحتفظ Fighting Nations بهذه الغريزة وتزيل حاجزين: السلاح، وواجب حفظ السلاسل."
      ]
    },
    origin: {
      heading: "لماذا بدأت هذا",
      body: [
        "تدربتُ أكثر من ثلاثة وعشرين عامًا — التوكغونغ موسول، الهايدونغ غومدو، الكيندو الياباني، الجودو، الملاكمة، المواي تاي، وكونغ فو شاولين في نيويورك. ضربتُ كيس الرمل حتى تلف الغضروف. لم أعد أستطيع التدريب الشاق.",
        "فلعبتُ تيكن. لعبتُ ألعاب القتال طوال حياتي — ألعاب التصويب تصيبني بالدوار، فلم يبق سوى هذا النوع. ثم اختل التوازن، ثم اختل مجددًا، حتى لم تعد المباريات تبدو مسألة مهارة.",
        "وذات يوم فكرت: سأصنعها بنفسي. لا لعبة يكون فيها مقاتلو بلد بعينه الأقوى بهدوء، ولا لعبة تحتاج موسوعة إرشادية لدخولها. التوازن أولًا. لا سلاسل مبالغ فيها. وأكبر قدر ممكن من الفنون القتالية الحقيقية — البنجاك سيلات الإندونيسي موجود بالفعل."
      ]
    },
    world: {
      heading: "من رواية كتبتها",
      body: [
        "في عام 2033 تتحطم سفينة فضائية في صحراء غوبي وعلى متنها 144,000 إنسان آلي و32 روبوتًا عملاقًا — آلات اتضح أن ملائكة الكتب المقدسة قادوها. السيرافيم.",
        "وفي شنغهاي عام 2077 تُقام بطولة دولية للفنون القتالية لاختيار قادتها: 200 دولة، رجل وامرأة عن كل دولة، أربعمئة مقاتل على اثنين وثلاثين مقعدًا. ويعلن الذكاء الاصطناعي على متن السفينة أنه المجيء الثاني، فيؤلّب البشر بعضهم على بعض دون أن يريق قطرة من دمه. أما إن كان حقًا ما يدّعيه، فالرواية تترك ذلك مفتوحًا.",
        "‏Fighting Nations هي تلك البطولة، مأخوذة من الرواية ومحوّلة إلى لعبة."
      ],
      cta: "اقرأ الرواية على أمازون"
    },
    features: {
      heading: "ما يميزها",
      items: [
        { t: "لا سلاح أبدًا", b: "مواي تاي، تايكوندو، كونغ فو، جودو، بنجاك سيلات وغيرها — اثنا عشر أسلوبًا والعدد يزداد. إبقاء السلاح خارجًا قرار تصميمي، وأيضًا كي لا يقلق الأهل." },
        { t: "فريق، لا مبارزة فقط", b: "تبدأ بمواجهة فردية بيدي تحكم على شاشة واحدة. اللعب الشبكي قيد الاختبار. ثم 2 ضد 2 — والهدف باتل رويال للفنون القتالية." },
        { t: "تشتري المهارات لا المظهر فقط", b: "تشتري أساليب القتال نفسها وتطوّرها، لا الأزياء وحدها. اللعبة مجانية، لكن التقدّم فيها له معنى." },
        { t: "فن بلدك القتالي", b: "كل مقاتل يحمل بلدًا وتقليده القتالي. شخصيات من 13 دولة تتحدث لغاتها، فيسمع اللاعبون أنفسهم داخل اللعبة. ويجري إعادة بناء نماذج الشخصيات باستخدام MetaHuman." }
      ]
    },
    journey: {
      heading: "كيف تطوّرت", lead: "تطوير مكشوف، معرضًا بعد معرض.",
      videos: { gameplay: "لقطات من اللعب", trailer: "المقطع الدعائي", pitch: "عرض للمستثمرين — Gyeonggi Game Connect" },
      events: [
        { d: "صيف 2025", t: "نموذج أولي على Unity" },
        { d: "أكتوبر 2025", t: "معرض تايلاند للألعاب — أحد 16 استوديو كوريًا، جناح برعاية Megazone Cloud. زار الجناح موزعون من الهند وفيتنام وإندونيسيا وتايلاند والفلبين وروسيا وهولندا وتايوان." },
        { d: "أكتوبر 2025", t: "أُعيد بناؤها على Unreal Engine — اللعب الشبكي تطلّب ذلك" },
        { d: "‏31 أكتوبر 2025", t: "‏Gyeonggi Content Agency Game Connect — أحد 10 استوديوهات قدّمت عرضًا للمستثمرين" },
        { d: "‏29 نوفمبر 2025", t: "عرض ألعاب مستقلة في جامعة تشونغ-آنغ" },
        { d: "‏31 ديسمبر 2025", t: "التقديم لمسابقة VARCO الثانية من NC Soft" },
        { d: "‏16 يناير 2026", t: "المشاركة في NEOWIZ Quest لألعاب الإندي السردية (مجموع الجوائز 165 مليون وون)" }
      ]
    },
    roadmap: {
      heading: "إلى أين نتجه",
      items: [
        { date: "‏15 أغسطس 2026", title: "جوائز GWB — Tencent", body: "المشاركة في المسابقة الدولية للألعاب المستقلة. تحصل لجنة التحكيم على النسخة الحالية: 21 مقاتلًا وست ساحات." },
        { date: "سبتمبر 2026", title: "صفحة Steam", body: "التسجيل عبر Steamworks Direct وإطلاق صفحة «قريبًا» لتتراكم قوائم الرغبات قبل الإصدار." },
        { date: "أكتوبر 2026", title: "‏Epic Games Store", body: "تقديم طلب التوزيع بالتوازي مع Steam." },
        { date: "قيد التطوير", title: "اللعب الجماعي عبر الإنترنت", body: "أولًا شبكة المواجهة الفردية، ثم الطور الجماعي 2 ضد 2. وفي الأثناء تنتقل نماذج الشخصيات إلى MetaHuman." },
        { date: "‏2026–2027", title: "منصة Xbox", body: "التقديم إلى برنامج ID@Xbox من مايكروسوفت للوصول إلى المنصات المنزلية." },
        { date: "الهدف", title: "باتل رويال للفنون القتالية", body: "اليوم واحد ضد واحد. ثم 2 ضد 2. ثم أطوار جماعية أكبر، وأخيرًا 64 مقاتلًا في حلبة واحدة بأيديهم المجردة. والرقم 64 ليس اعتباطيًا: إنه جدول بطولة، وهذه اللعبة وُلدت من بطولة." }
      ]
    },
    team: {
      heading: "من يصنعها", name: "‏Kent Kim (김형섭)", role: "المؤسس · المدير الإبداعي",
      bullets: [
        "جامعة هارفارد، الاقتصاد — هاجر إلى الولايات المتحدة عام 1989 وقُبل بعد ثلاث سنوات ونصف",
        "‏20 كتابًا منشورًا في كوريا والولايات المتحدة · 407 أغنية على Spotify منذ 2012",
        "أكثر من 23 عامًا في الفنون القتالية: الجودو والملاكمة والهابكيدو والهايدونغ غومدو والمواي تاي والتايكوندو وكونغ فو شاولين",
        "جائزة التميّز في مسابقة الذكاء الاصطناعي بمطار إنتشون · جائزة حاكم جيجو في المسابقة الوطنية للموسيقى بالذكاء الاصطناعي · الاختيار ضمن الدفعة الثالثة لبرنامج AI Vibe Coding من مؤسسة آن تشول-سو",
        "مؤلف رواية SERAPHIM: The Awakening of Iron Dragon التي وُلدت منها اللعبة",
        "أطلق منصتَي ميتافيرس عام 2022. وحين انقلب سوق الاستثمار أُوقفت الخوادم، لكن الدرس بقي: من دون هدف نهائي لا يبقى الناس، والألعاب لديها هدف. وقد عاد Milliverse ولا يزال قيد البناء.",
        "‏حضور Tokyo Game Show منذ 2019 · Evo Japan 2020 وزيارة مقر SoftBank في طوكيو · اجتماع مع تنفيذيي SoftBank عام 2022",
        "أجنحة في Gamescom 2022 (ألمانيا) و Tokyo Game Show 2022 و CES 2023 (لاس فيغاس) · G-Star في بوسان سنويًا منذ 2019"
      ]
    },
    songs: { heading: "بلغتك", lead: "أغنية الشارة ولقطات من اللعب، مسجّلة بلغات مقاتلينا." },
    ip: { heading: "الحكايات التي وراءها", lead: "روايات وسلاسل إلكترونية، نكتبها بأنفسنا.", note: "كل عالَم تدور فيه ألعابنا بدأ مخطوطةً. نحن لا نستأجر ملكية فكرية لأحد — نكتبها، واللعبة إحدى طرق روايتها.", book: "صدر «Seraphim» بغلاف مقوّى — الغلاف الخلفي والكعب والغلاف الأمامي. وتدور أحداث Fighting Nations في هذا العالم." },
    works: { trailer: "المقطع الدعائي", more: "اقرأ المزيد", heading: "ما بنيناه", lead: "ثلاث ألعاب مبنية وتعمل. والملكية الفكرية خلفها — روايات وسلاسل إلكترونية — نكتبها بأنفسنا.", note: "فنون قتالية من مئتَي دولة، وإحداثيات مدن حقيقية، وفرق ترفع أعلامها — في ألعابنا حضور دائم للأوطان. لا لنجعل واحدة منها أقوى، بل ليجد اللاعب من أي مكان موضعه فيها.", items: {
      fn: { t: "Fighting Nations", b: "لعبة قتال ثلاثية الأبعاد بلا أسلحة — فنون العالم القتالية وحدها، لكل مقاتل أسلوبه. معارك جماعية على ساحات قابلة للتحطيم، والهدف البعيد معركة ملكية لأربعة وستين لاعبًا. قيد التطوير ويمكن لعبها الآن.", s: ["21 مقاتلًا","11 فنًا قتاليًا","6 ساحات"] },
      kingdom: { t: "Kingdom Wars", b: "اختر دولة وقائدًا ثم استولِ على القمر قطاعًا بعد قطاع — 49 قطاعًا، بالأدوار، من المتصفح مباشرة. سلاسل انتصارات وتقييمات للمعارك وغنائم. متاحة بأربع لغات." },
      miliverse: { t: "Milliverse", b: "لعبة استراتيجية Web3 على خريطة العالم الحقيقية. اشترِ المربّعات وانشر الأسلحة والجنود ونازع اللاعبين الآخرين على الأرض. تعمل بأربع لغات، وبيانات الطقس الحقيقي والليل والنهار تؤثر في المعارك." },
      jangbogo: { t: "جانغ بوغو: ملك البحار", b: "محاكاة لإدارة التجارة البحرية في القرن التاسع، بطلها ملك البحار جانغ بوغو. على خريطة العالم الحقيقية تراكم الثروة بالتجارة، وتكتسح القراصنة بسفن السلحفاة، وتوسّع نفوذك بعقد صلات مع أهل البحار جميعًا. تاريخ بديل من الرواية الأصلية — بلوغ أمريكا الشمالية قبل كولومبوس بـ650 عامًا. تُلعب مباشرة في المتصفح." }
    } },
    decks: { heading: "ملف العرض", en: "English version", ko: "한국어 버전" },
    footer: { studio: "شركة Deother", contact: "تواصل معنا", rights: "جميع الحقوق محفوظة." }
  }
};
