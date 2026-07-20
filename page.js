// page.js — 게임 상세 페이지(밀리버스 / 킹덤워즈) 렌더
// 메인 페이지의 app.js 와 별개다. 여기는 ko / en 두 언어만 쓴다.
// 어느 게임인지는 <body data-game="miliverse"> 로 알려준다.

const P_STORE = "deother.lang";
const P_LANGS = { ko: "한국어", en: "English" };

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
  // 메인 페이지에서 고른 언어를 이어받되, 여기 없는 언어면 영어로 떨어뜨린다
  const saved = localStorage.getItem(P_STORE);
  if (saved && P_LANGS[saved]) return saved;
  for (const tag of navigator.languages || [navigator.language || ""]) {
    const base = tag.toLowerCase().split("-")[0];
    if (P_LANGS[base]) return base;
  }
  return "en";
}

function pRender(code) {
  const game = document.body.dataset.game;          // "miliverse" | "kingdom"
  const t = PAGES[game][code] || PAGES[game].en;
  document.documentElement.lang = code;
  localStorage.setItem(P_STORE, code);

  document.title = t.title + " — Deother";
  document.getElementById("pTitle").textContent   = t.title;
  document.getElementById("pTagline").textContent = t.tagline;
  document.getElementById("pIntro").textContent   = t.intro;

  pSlideCaps = t.slides || [];
  pShowCap();

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

  document.querySelectorAll("#pLang button").forEach(b =>
    b.setAttribute("aria-current", String(b.dataset.code === code)));
}

function pSetup() {
  const box = document.getElementById("pLang");
  box.replaceChildren(...Object.entries(P_LANGS).map(([code, name]) => {
    const b = pEl("button", null, name);
    b.type = "button";
    b.dataset.code = code;
    b.addEventListener("click", () => pRender(code));
    return b;
  }));

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
