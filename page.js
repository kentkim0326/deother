// page.js — 게임 상세 페이지(밀리버스 / 킹덤워즈) 렌더
// 메인 페이지의 app.js 와 별개다. 메인에서 고른 언어를 그대로 잇는다.
// 어느 게임인지는 <body data-game="miliverse"> 로 알려준다.

const P_STORE = "deother.lang";
// 이름·순서는 메인 페이지(i18n.js)와 맞춘다. 실제 노출은 그 게임에 번역이 있는 언어만.
const P_LANGS = {
  en: "English", ko: "한국어", zh: "中文", ja: "日本語", es: "Español",
  pt: "Português", fr: "Français", de: "Deutsch", ru: "Русский", ar: "العربية"
};

// 섹션 사이에 이미지·영상을 끼워 넣는 배치. 게임별로 정의하면 그 게임은
// "글만 위, 그림은 아래"가 아니라 글·그림·영상이 번갈아 나온다.
//   top     : 섹션 시작 전(인트로 아래)에 넣을 미디어
//   after[i]: i 번째 섹션 뒤에 넣을 미디어들
//   { v: n } → PAGE_VIDEOS[game][n],  { s: n } → n 번째 슬라이드(+자막)
// 레이아웃이 없는 게임(킹덤워즈)은 예전처럼 아래에 영상 + 슬라이드쇼로 붙는다.
const P_LAYOUT = {
  miliverse: {
    // 이미지는 게임 화면이 아니라 콘셉트 아트라 자막 없이 시네마틱 밴드({img})로 넣는다.
    // 실제 게임플레이 증거는 영상({v})이 담당. 글 → 아트 → 글 → 영상 리듬.
    top: [{ v: 0 }],                          // 소개 영상 — 맨 위에서 붙잡는다
    after: {
      0: [{ img: 0 }],                        // 왜 만들었나  → WWII 사단(석양)
      1: [{ img: 1 }],                        // 전쟁         → 파워아머 노장
      2: [{ v: 1 }],                          // 실시간 데이터 → 2분 소개 영상
      3: [{ img: 2 }],                        // 무기/배치    → 파워아머 근접
      4: [{ img: 3 }],                        // 하는 방법    → WWII 무디
      5: [{ img: 4 }, { v: 2 }],              // AI/데이터    → 파워아머 + v2.4 쇼츠
    },
  },
  jangbogo: {
    // 게임 시작화면 아트(세계 교역 가문)를 자막 없이 밴드로. 영상 없음.
    after: {
      0: [{ img: 0 }],                        // 왜 만들었나  → 장보고와 각지 여인들
      2: [{ img: 1 }],                        // 항해·해전
      3: [{ img: 2 }],                        // 교역 가문    → 다문화 가문 아트
      4: [{ img: 3 }],                        // 하는 방법
    },
  },
  soomba: {
    // 미디어: 게임 영상 1편 + 커버 스크린샷(궁궐 전경) 1장.
    // 스크린샷이 늘면 {img}/{s} 를 더 끼워 리듬을 촘촘하게 할 것.
    top: [{ v: 0 }],                          // 인트로 아래 → 게임 영상으로 붙잡는다
    after: {
      1: [{ img: 0 }],                        // 지붕(핵심 메커닉) 뒤 → 궁궐 전경 밴드
    },
  },
  // deathguide 는 P_LAYOUT 을 두지 않는다 → 폴백(본문 아래 슬라이드쇼)로 렌더된다.
  //   DEATHGUIDE_SLIDES(커버 + 아트 8장)가 #pSlides 슬라이드쇼로 나온다.
  timewars: {
    // 미디어: 게임플레이 영상 1편 + 키아트 커버 1장.
    top: [{ v: 0 }],                          // 인트로 아래 → 게임플레이 영상
    after: {
      1: [{ img: 0 }],                        // 세계관(열여섯 하나의 자리) 뒤 → 키아트 밴드
    },
  },
  turfking: {
    // 개발 중이라 게임 화면·영상이 없다. 컨셉 키아트 1장만. 배경음은 timewars-theme 처럼 audio.
    top: [{ img: 0 }],                        // 인트로 아래 → 컨셉 키아트로 붙잡는다
  },
  kwonline: {
    // 아직 게임 화면 캡처가 없다. 미디어는 테스트 영상 + 영어 주제가 3곡.
    // 글벽 사이에 고르게 흩어 리듬을 준다. 스크린샷이 나오면 {img}/{s} 를 더 끼울 것.
    top: [{ v: 2 }],                          // 영어 록 주제가 — 히어로 CTA('브라우저에서 해보기') 바로 밑
    after: {
      1: [{ v: 1 }],                          // 10개 왕국(세계관) 뒤 → 주제가(영어, 쇼츠·세로)
      2: [{ v: 0 }],                          // AI가 같은 문으로 → 사람·에이전트 동시 접속 테스트 영상
      3: [{ v: 3 }],                          // 코어 루프 뒤 → 주제가(영어, 가로)
      4: [{ img: 0 }],                        // 설계 원칙 뒤 → 실제 모바일 플레이 화면 1
      5: [{ img: 1 }],                        // 현재 진행 상황 뒤 → 실제 모바일 플레이 화면 2
    },
  },
};

// 슬라이드 설명(슬라이드쇼 방식·킹덤워즈용). pSetup 이 한 번 만들고 pRender 가 갈아끼운다.
let pSlideCaps = [];
let pShowCap = () => {};

// 인터리브(밀리버스) 방식에서 만든 요소 참조. 언어를 바꿔도 요소를 다시 만들지 않고
// 텍스트만 갈아끼운다 — 그래야 재생 중인 영상이 안 끊긴다.
let pRefs = null;

function pEl(tag, cls, text) {
  const n = document.createElement(tag);
  if (cls) n.className = cls;
  if (text != null) n.textContent = text;
  return n;
}

function pDetectLang() {
  // 메인 페이지에서 고른 언어를 이어받되, 이 게임에 번역이 없는 언어면 영어로 떨어뜨린다
  const avail = pAvailLangs();
  const has = code => avail.includes(code);
  const saved = localStorage.getItem(P_STORE);
  if (saved && has(saved)) return saved;
  for (const tag of navigator.languages || [navigator.language || ""]) {
    const base = tag.toLowerCase().split("-")[0];
    if (has(base)) return base;
  }
  return "en";
}

// 이 게임(PAGES[game])에 실제 번역이 들어있는 언어만 캐논 순서대로 돌려준다.
function pAvailLangs() {
  const game = document.body.dataset.game;
  return Object.keys(P_LANGS).filter(code => PAGES[game] && PAGES[game][code]);
}

// 게임별 슬라이드 파일·폴더. 새 게임은 여기 한 줄만 추가하면 된다.
function pSlideSet(game) {
  if (game === "miliverse") return { files: (typeof MV_SLIDES !== "undefined" ? MV_SLIDES : []), folder: "assets/slides-mv/" };
  if (game === "kingdom")   return { files: (typeof KW_SLIDES !== "undefined" ? KW_SLIDES : []), folder: "assets/slides-kw/" };
  if (game === "jangbogo")  return { files: (typeof JB_SLIDES !== "undefined" ? JB_SLIDES : []), folder: "assets/slides-jb/" };
  if (game === "soomba")    return { files: (typeof SOOMBA_SLIDES !== "undefined" ? SOOMBA_SLIDES : []), folder: "assets/" };
  if (game === "deathguide") return { files: (typeof DEATHGUIDE_SLIDES !== "undefined" ? DEATHGUIDE_SLIDES : []), folder: "assets/" };
  if (game === "kwonline")  return { files: (typeof KWONLINE_SLIDES !== "undefined" ? KWONLINE_SLIDES : []), folder: "assets/" };
  if (game === "timewars")  return { files: (typeof TIMEWARS_SLIDES !== "undefined" ? TIMEWARS_SLIDES : []), folder: "assets/" };
  if (game === "turfking")  return { files: (typeof TURFKING_SLIDES !== "undefined" ? TURFKING_SLIDES : []), folder: "assets/" };
  return { files: [], folder: "" };
}

// 영상 figure 하나. 세로 영상(쇼츠)은 vertical 클래스로 9:16 프레임을 쓴다.
function pVideoFig(v) {
  const fig = pEl("figure", "page-video" + (v.vertical ? " vertical" : ""));
  const frame = pEl("div", "video-frame");
  const f = document.createElement("iframe");
  f.src = `https://www.youtube-nocookie.com/embed/${v.id}`;   // 재생 전에는 추적 쿠키를 심지 않는다
  f.loading = "lazy";
  f.allow = "accelerometer; clipboard-write; encrypted-media; picture-in-picture";
  f.allowFullscreen = true;
  frame.append(f);
  const cap = pEl("figcaption");
  fig.append(frame, cap);
  return { fig, cap };
}

// 인터리브 본문을 한 번만 짓는다. 텍스트는 비워두고 pRefs 에 참조만 담는다 (pRender 가 채운다).
function pBuildInterleaved(game, layout) {
  const en = PAGES[game].en;                       // 구조(섹션·문단·항목 수)의 기준
  const vids = (typeof PAGE_VIDEOS !== "undefined") ? (PAGE_VIDEOS[game] || []) : [];
  const { files, folder } = pSlideSet(game);

  const body = document.getElementById("pBody");
  body.replaceChildren();
  const refs = { secs: [], slideCaps: {}, videoCaps: {}, toc: [] };

  const addMedia = (items) => (items || []).forEach(m => {
    if (m.v != null && vids[m.v]) {
      const { fig, cap } = pVideoFig(vids[m.v]);
      body.append(fig);
      refs.videoCaps[m.v] = cap;
    } else if (m.s != null && files[m.s]) {
      const fig = pEl("figure", "doc-shot");
      const img = document.createElement("img");
      img.src = folder + files[m.s]; img.alt = ""; img.loading = "lazy";
      const cap = pEl("figcaption");
      fig.append(img, cap);
      body.append(fig);
      refs.slideCaps[m.s] = cap;
    } else if (m.img != null && files[m.img]) {
      // 자막 없는 시네마틱 아트 밴드 — 언어 무관이라 refs 에 넣지 않는다
      const fig = pEl("figure", "doc-band");
      const img = document.createElement("img");
      img.src = folder + files[m.img]; img.alt = ""; img.loading = "lazy";
      fig.append(img);
      body.append(fig);
    }
  });

  addMedia(layout.top);

  en.sections.forEach((sec, i) => {
    const s = pEl("section", "doc-section");
    s.id = "sec-" + i;
    const h = pEl("h2"); s.append(h);
    const ps = (sec.p || []).map(() => { const p = pEl("p"); s.append(p); return p; });
    let listH = null; let lis = [];
    if (sec.list) {
      if (sec.list.h) { listH = pEl("h3"); s.append(listH); }
      const ul = pEl("ul", "doc-list");
      lis = sec.list.items.map(() => { const li = pEl("li"); ul.append(li); return li; });
      s.append(ul);
    }
    body.append(s);
    refs.secs.push({ h, ps, listH, lis });
    addMedia(layout.after && layout.after[i]);
  });

  const toc = document.getElementById("pToc");
  toc.replaceChildren(...en.sections.map((sec, i) => {
    const a = pEl("a"); a.href = "#sec-" + i; refs.toc.push(a); return a;
  }));

  pRefs = refs;
}

// 인터리브 본문의 텍스트만 언어에 맞춰 갈아끼운다.
function pUpdateInterleaved(t, code, vids) {
  t.sections.forEach((sec, i) => {
    const r = pRefs.secs[i]; if (!r) return;
    r.h.textContent = sec.h;
    (sec.p || []).forEach((x, j) => { if (r.ps[j]) r.ps[j].textContent = x; });
    if (r.listH && sec.list) r.listH.textContent = sec.list.h;
    if (sec.list) sec.list.items.forEach((x, j) => { if (r.lis[j]) r.lis[j].textContent = x; });
  });
  const caps = t.slides || [];
  Object.keys(pRefs.slideCaps).forEach(si => { pRefs.slideCaps[si].textContent = caps[+si] || ""; });
  Object.keys(pRefs.videoCaps).forEach(vi => {
    const v = vids[+vi];
    const label = v ? (v[code] || v.en || "") : "";
    const cap = pRefs.videoCaps[vi];
    cap.textContent = label;
    const f = cap.parentElement.querySelector("iframe"); if (f) f.title = label;
  });
  pRefs.toc.forEach((a, i) => { a.textContent = t.sections[i] ? t.sections[i].h : ""; });
}

function pRender(code) {
  const game = document.body.dataset.game;          // "miliverse" | "kingdom"
  const t = PAGES[game][code] || PAGES[game].en;
  document.documentElement.lang = code;
  document.documentElement.dir = code === "ar" ? "rtl" : "ltr";   // 아랍어만 RTL (app.js 와 동일)
  localStorage.setItem(P_STORE, code);

  document.title = t.title + " — Deother";
  document.getElementById("pTitle").textContent   = t.title;
  document.getElementById("pTagline").textContent = t.tagline;
  document.getElementById("pIntro").textContent   = t.intro;

  const cta = document.getElementById("pCta");   cta.textContent = t.cta;
  const back = document.getElementById("pBack"); back.textContent = "← " + t.back;

  const vids = (typeof PAGE_VIDEOS !== "undefined") ? (PAGE_VIDEOS[game] || []) : [];

  if (pRefs) {
    // 인터리브(밀리버스) — 요소는 그대로 두고 텍스트만 갱신
    pUpdateInterleaved(t, code, vids);
  } else {
    // 폴백(킹덤워즈) — 본문은 다시 그리고, 영상/슬라이드는 아래에 따로
    pSlideCaps = t.slides || [];
    pShowCap();
    document.querySelectorAll("#pVideos figcaption").forEach(cap => {
      const v = vids[+cap.dataset.vi]; if (!v) return;
      const label = v[code] || v.en || "";
      cap.textContent = label;
      const f = cap.parentElement.querySelector("iframe"); if (f) f.title = label;
    });
    const body = document.getElementById("pBody");
    body.replaceChildren(...t.sections.map(sec => {
      const s = pEl("section", "doc-section");
      s.append(pEl("h2", null, sec.h));
      (sec.p || []).forEach(x => s.append(pEl("p", null, x)));
      if (sec.list) {
        if (sec.list.h) s.append(pEl("h3", null, sec.list.h));
        const ul = pEl("ul", "doc-list");
        sec.list.items.forEach(x => ul.append(pEl("li", null, x)));
        s.append(ul);
      }
      return s;
    }));
    const toc = document.getElementById("pToc");
    toc.replaceChildren(...t.sections.map((sec, i) => {
      const a = pEl("a", null, sec.h); a.href = "#sec-" + i; return a;
    }));
    [...body.children].forEach((s, i) => { s.id = "sec-" + i; });
  }

  const pf = document.getElementById("pLangFlag"); if (pf) pf.src = `assets/flags/${code}.svg`;
  const pl = document.getElementById("pLangLabel"); if (pl) pl.textContent = P_LANGS[code];
  document.querySelectorAll("#pLangMenu button").forEach(b =>
    b.setAttribute("aria-current", String(b.dataset.code === code)));
}

// 주제가 재생 — #pAudio 가 있는 페이지(kwonline)에서만 동작한다. 없으면 조용히 지나간다.
// 브라우저는 소리 있는 오디오의 무조건 자동재생을 막는다. 그래서:
//   1) 진입하면 한 번 시도하고(대개 막힌다),
//   2) 사용자가 페이지를 처음 건드리는 순간 다시 시도하며,
//   3) 우하단 토글 버튼으로 언제든 끄고 켤 수 있다.
function pSetupAudio() {
  const audio = document.getElementById("pAudio");
  const btn = document.getElementById("pAudioToggle");
  if (!audio || !btn) return;
  audio.volume = 0.7;
  btn.hidden = false;

  const sync = () => {
    const playing = !audio.paused;
    btn.textContent = playing ? "❚❚" : "♪";
    btn.classList.toggle("playing", playing);
    btn.setAttribute("aria-label", playing ? "주제가 정지" : "주제가 재생");
  };
  audio.addEventListener("play", sync);
  audio.addEventListener("pause", sync);

  let armed = true;                         // 첫 상호작용 자동시작이 아직 유효한가
  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    armed = false;                          // 직접 제어했으니 자동시작 로직은 끈다
    if (audio.paused) audio.play().catch(() => {}); else audio.pause();
  });

  const tryPlay = () => audio.play().then(sync).catch(() => {});
  tryPlay();                                // 진입 즉시 시도

  const onFirst = (e) => {
    if (e.target === btn) return;           // 버튼 클릭은 위 핸들러가 처리한다
    if (armed && audio.paused) tryPlay();
    armed = false;
    window.removeEventListener("pointerdown", onFirst);
    window.removeEventListener("keydown", onFirst);
  };
  window.addEventListener("pointerdown", onFirst);
  window.addEventListener("keydown", onFirst);
  sync();
}

function pSetup() {
  // 언어 선택 — 메인 페이지와 같은 드롭다운(.lang-btn + .lang-menu). 국기 포함.
  const box = document.getElementById("pLang");
  const btn = pEl("button", "lang-btn"); btn.type = "button"; btn.id = "pLangBtn";
  btn.setAttribute("aria-haspopup", "true"); btn.setAttribute("aria-expanded", "false");
  const bFlag = pEl("img", "flag"); bFlag.id = "pLangFlag"; bFlag.alt = ""; bFlag.width = 21; bFlag.height = 14;
  const bLabel = pEl("span", null, ""); bLabel.id = "pLangLabel";
  const caret = pEl("span", "caret", "▾"); caret.setAttribute("aria-hidden", "true");
  btn.append(bFlag, bLabel, caret);

  const menu = pEl("div", "lang-menu"); menu.id = "pLangMenu"; menu.setAttribute("role", "menu");
  const closeMenu = () => { menu.classList.remove("open"); btn.setAttribute("aria-expanded", "false"); };
  pAvailLangs().forEach(code => {
    const b = pEl("button", null); b.type = "button"; b.dataset.code = code;
    const flag = pEl("img", "flag"); flag.src = `assets/flags/${code}.svg`; flag.alt = ""; flag.width = 21; flag.height = 14;
    b.append(flag, pEl("span", null, P_LANGS[code]));
    b.addEventListener("click", () => { pRender(code); closeMenu(); });
    menu.append(b);
  });
  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    const open = menu.classList.toggle("open");
    btn.setAttribute("aria-expanded", String(open));
  });
  document.addEventListener("click", closeMenu);
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeMenu(); });
  box.replaceChildren(btn, menu);

  pSetupAudio();

  const game = document.body.dataset.game;
  const layout = (typeof P_LAYOUT !== "undefined") ? P_LAYOUT[game] : null;
  if (layout) {
    // 인터리브 방식 — 본문 안에 섹션·이미지·영상을 섞어 짓는다. 아래 슬라이드쇼/영상은 안 쓴다.
    pBuildInterleaved(game, layout);
    return;
  }

  // ── 폴백(킹덤워즈): 영상은 아래 #pVideos 에 한 번만, 슬라이드는 슬라이드쇼로 ──
  const vids = (typeof PAGE_VIDEOS !== "undefined") ? (PAGE_VIDEOS[game] || []) : [];
  const vbox = document.getElementById("pVideos");
  if (vbox && vids.length) {
    vbox.hidden = false;
    vids.forEach((v, i) => {
      const { fig, cap } = pVideoFig(v);
      cap.dataset.vi = String(i);
      vbox.append(fig);
    });
  }

  const set = pSlideSet(game);

  const box2 = document.getElementById("pSlides");
  if (!set.files.length || !box2) return;
  box2.hidden = false;
  const track = document.getElementById("pTrack");
  const dots  = document.getElementById("pDots");
  let idx = 0, timer = null;

  const cap = pEl("p", "slide-cap");
  cap.id = "pCap";
  track.after(cap);
  pShowCap = () => { cap.textContent = pSlideCaps[idx] || ""; };

  set.files.forEach((f, i) => {
    const img = document.createElement("img");
    img.src = set.folder + f;
    img.alt = "";
    img.loading = i === 0 ? "eager" : "lazy";
    if (i === 0) img.className = "on";
    track.append(img);
    const d = pEl("button", i === 0 ? "on" : null);
    d.type = "button";
    d.setAttribute("aria-label", String(i + 1));
    d.addEventListener("click", () => show(i));
    dots.append(d);
  });
  function show(n) {
    idx = (n + set.files.length) % set.files.length;
    [...track.children].forEach((c, i) => c.classList.toggle("on", i === idx));
    [...dots.children].forEach((c, i) => c.classList.toggle("on", i === idx));
    pShowCap();
  }
  pShowCap();
  const start = () => { timer = setInterval(() => show(idx + 1), 4500); };
  start();
  box2.addEventListener("mouseenter", () => clearInterval(timer));
  box2.addEventListener("mouseleave", start);
}

pSetup();
pRender(pDetectLang());
