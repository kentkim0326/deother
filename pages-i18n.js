// pages-i18n.js — 게임 상세 페이지(밀리버스 / 킹덤워즈) 번역
//
// ※ 여기 적힌 수치와 기능은 각 프로젝트의 CLAUDE.md / 인수인계 문서에서 확인한 것만 쓴다.
//   추측으로 적으면 공모전 심사에서 확인당했을 때 나머지 주장까지 의심받는다.
//   확인 안 된 항목은 아예 쓰지 않는다.
//
// 언어: 우선 ko / en 두 가지. 공모전(국내·국제) 제출에 쓰이는 언어가 이 둘이라
//      먼저 정확하게 만들고, 나머지는 내용이 굳은 뒤에 옮긴다.

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
            "혼자 커지는 것도 마냥 유리하지 않다. 상대보다 타일이 많을수록 공격에 불이익이 붙는다(2배 보유 시 -6%, 10배면 -25%). 1등이 판을 굳히지 못하게 하는 장치다."
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
            "자동전투는 적을 공격하는 데만 쓴다. 빈 땅 자동 확장은 뺐다 — 넣었더니 경제가 무너졌다."
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
              "자동전투를 켜면 도시 1·2·3위의 영토를 우선 노린다. 상위 랭커를 잡으면 현상금이 붙는다",
              "공격받으면 브라우저 알림이 즉시 온다"
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
            "Growing alone doesn't win either. The more tiles you hold relative to your opponent, the worse your attacks perform (−6% at twice their holdings, −25% at ten times). It keeps first place from freezing the board."
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
            "Auto-battle only attacks enemies. Automatic expansion into empty land was removed — with it in, the economy collapsed."
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
              "Turn on auto-battle and it targets the top three landholders in the city. Beating a ranked player pays a bounty",
              "You get a browser notification the moment you are attacked"
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
      cta: "Play Milliverse", back: "Back to Deother"
    }
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
