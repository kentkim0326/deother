// page.js — 게임 상세 페이지(밀리버스 / 킹덤워즈) 렌더
// 메인 페이지의 app.js 와 별개다. 메인에서 고른 언어를 그대로 잇는다.
// 어느 게임인지는 <body data-game="miliverse"> 로 알려준다.

const P_STORE = "deother.lang";
// 이름·순서는 메인 페이지(i18n.js)와 맞춘다. 실제 노출은 그 게임에 번역이 있는 언어만.
const P_LANGS = {
  en: "English", ko: "한국어", zh: "中文", ja: "日本語", es: "Español",
  pt: "Português", fr: "Français", de: "Deutsch", ru: "Русский", ar: "العربية"
};

// 이 게임(PAGES[game])에 실제 번역이 들어있는 언어만 캐논 순서대로 돌려준다.
// 킹덤워즈처럼 아직 ko/en 만 있는 페이지는 나머지 버튼이 뜨지 않는다 —
// 번역을 채우면 자동으로 버튼이 늘어난다.
function pAvailLangs() {
  const game = document.body.dataset.game;
  return Object.keys(P_LANGS).filter(code => PAGES[game] && PAGES[game][code]);
}

// 슬라이드 설명. pSetup 이 슬라이드쇼를 한 번만 만들고,
// pRender 가 언어를 바꿀 때마다 이 둘을 갈아끼운다.
let pSlideCaps = [];
let pShowCap = () => {};

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

  pSlideCaps = t.slides || [];
  pShowCap();

  // 소개 영상 — 자막이 언어를 타므로 언어를 바꿀 때마다 설명을 다시 쓴다
  const vid = (typeof PAGE_VIDEOS !== "undefined") ? PAGE_VIDEOS[game] : null;
  const vbox = document.getElementById("pVideo");
  if (vbox && vid && vid.id) {
    vbox.hidden = false;
    const frame = document.getElementById("pVideoFrame");
    if (!frame.firstChild) {
      const f = document.createElement("iframe");
      f.src = `https://www.youtube-nocookie.com/embed/${vid.id}`;   // 재생 전에는 추적 쿠키를 심지 않는다
      f.loading = "lazy";
      f.allow = "accelerometer; clipboard-write; encrypted-media; picture-in-picture";
      f.allowFullscreen = true;
      frame.append(f);
    }
    frame.firstChild.title = vid[code] || vid.en;
    document.getElementById("pVideoCap").textContent = vid[code] || vid.en;
  }

  const cta = document.getElementById("pCta");
  cta.textContent = t.cta;
  const back = document.getElementById("pBack");
  back.textContent = "← " + t.back;

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

  // 목차 — 내용이 길어서 위에서 훑을 수 있게 한다
  const toc = document.getElementById("pToc");
  toc.replaceChildren(...t.sections.map((sec, i) => {
    const a = pEl("a", null, sec.h);
    a.href = "#sec-" + i;
    return a;
  }));
  [...body.children].forEach((s, i) => { s.id = "sec-" + i; });

  const pf = document.getElementById("pLangFlag"); if (pf) pf.src = `assets/flags/${code}.svg`;
  const pl = document.getElementById("pLangLabel"); if (pl) pl.textContent = P_LANGS[code];
  document.querySelectorAll("#pLangMenu button").forEach(b =>
    b.setAttribute("aria-current", String(b.dataset.code === code)));
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

  // 슬라이드쇼 — 게임별 이미지가 있으면 붙인다 (메인 페이지와 같은 파일을 쓴다)
  const game = document.body.dataset.game;
  const set = game === "miliverse"
    ? { files: (typeof MV_SLIDES !== "undefined" ? MV_SLIDES : []), folder: "assets/slides-mv/" }
    : { files: (typeof KW_SLIDES !== "undefined" ? KW_SLIDES : []), folder: "assets/slides-kw/" };

  const box2 = document.getElementById("pSlides");
  if (!set.files.length || !box2) return;
  box2.hidden = false;
  const track = document.getElementById("pTrack");
  const dots  = document.getElementById("pDots");
  let idx = 0, timer = null;

  // 설명을 붙인다 — 공모전 심사에서는 "무슨 화면인지"가 그림만큼 중요하다.
  // 언어를 바꾸면 pRender 가 pSlideCaps 를 갈아끼우므로 여기서는 자리만 만든다.
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
