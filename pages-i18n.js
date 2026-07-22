// pages-i18n.js — 게임 상세 페이지(밀리버스 / 킹덤워즈) 번역
//
// ※ 여기 적힌 수치와 기능은 각 프로젝트의 CLAUDE.md / 인수인계 문서에서 확인한 것만 쓴다.
//   추측으로 적으면 공모전 심사에서 확인당했을 때 나머지 주장까지 의심받는다.
//   확인 안 된 항목은 아예 쓰지 않는다.
//
// 언어: 우선 ko / en 두 가지. 공모전(국내·국제) 제출에 쓰이는 언어가 이 둘이라
//      먼저 정확하게 만들고, 나머지는 내용이 굳은 뒤에 옮긴다.

// 게임 소개 영상. 없는 게임은 빈 문자열이면 영상 자리가 통째로 숨는다.
const PAGE_VIDEOS = {
  miliverse: { id: "0ojvADdKOqA", ko: "밀리버스 소개 영상", en: "Milliverse — introduction" },
  kingdom:   { id: "",            ko: "",                  en: "" },
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
    }
  }
};
