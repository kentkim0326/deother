// app.js — 언어 전환과 화면 그리기
// 빌드 도구 없는 정적 사이트. i18n.js 의 I18N 을 읽어 DOM 을 다시 채운다.

const FALLBACK = "en";
const STORE_KEY = "deother.lang";

/** 브라우저 언어 중 우리가 가진 것을 고른다. 저장값이 있으면 그게 우선. */
function detectLang() {
  const saved = localStorage.getItem(STORE_KEY);
  if (saved && I18N[saved]) return saved;
  for (const tag of navigator.languages || [navigator.language || ""]) {
    const base = tag.toLowerCase().split("-")[0];
    if (I18N[base]) return base;
  }
  return FALLBACK;
}

function el(tag, cls, text) {
  const n = document.createElement(tag);
  if (cls) n.className = cls;
  if (text != null) n.textContent = text;
  return n;
}
function set(id, text) {
  const n = document.getElementById(id);
  if (n) n.textContent = text;          // 요소가 없어도 멈추지 않게 (예전에 여기서 렌더가 통째로 죽었다)
}

function render(code) {
  const t = I18N[code] || I18N[FALLBACK];
  document.documentElement.lang = code;
  document.documentElement.dir = t.dir;      // 아랍어면 rtl
  localStorage.setItem(STORE_KEY, code);

  // --- 상단 메뉴 ---
  const nav = document.getElementById("nav");
  nav.replaceChildren();
  [["why", t.nav.why], ["world", t.nav.world], ["features", t.nav.features],
   ["journey", t.nav.journey], ["roadmap", t.nav.roadmap], ["team", t.nav.team]]
    .forEach(([id, label]) => {
      const a = el("a", null, label);
      a.href = "#" + id;
      nav.appendChild(a);
    });
  set("langLabel", t.name);

  // --- 히어로 ---
  set("eyebrow", t.hero.studio);
  set("title", t.hero.title);
  set("tagline", t.hero.tagline);
  const cta = document.getElementById("cta");
  cta.href = LINKS.itch;
  cta.replaceChildren(document.createTextNode(t.hero.cta), el("small", null, t.hero.ctaSub));

  // --- 기획의도 ---
  set("whyHeading", t.why.heading);
  set("whyLead", t.why.lead);
  document.getElementById("whyBody").replaceChildren(...t.why.body.map(p => el("p", null, p)));

  // --- 왜 시작했나 ---
  set("orHeading", t.origin.heading);
  document.getElementById("orBody").replaceChildren(...t.origin.body.map(p => el("p", null, p)));

  // --- 세계관 ---
  set("wdHeading", t.world.heading);
  document.getElementById("wdBody").replaceChildren(...t.world.body.map(p => el("p", null, p)));
  const wdCta = document.getElementById("wdCta");
  wdCta.href = LINKS.novel;
  wdCta.textContent = t.world.cta + " →";
  const book = document.getElementById("bookLink");
  if (book) { book.href = LINKS.novel; book.title = t.world.cta; }

  // --- 게임 특징 ---
  set("ftHeading", t.features.heading);
  document.getElementById("featureCards").replaceChildren(...t.features.items.map(it => {
    const c = el("article", "card");
    c.append(el("h3", null, it.t), el("p", null, it.b));
    return c;
  }));

  // 영상 카드 하나를 만든다 (연표용·언어별용 공통)
  const videoCard = (id, label, sub) => {
    const card = el("article", "video-card");
    const frame = el("div", "video-frame");
    const f = document.createElement("iframe");
    // nocookie: 재생 전에는 추적 쿠키를 심지 않는다
    f.src = `https://www.youtube-nocookie.com/embed/${id}`;
    f.title = label;
    f.loading = "lazy";
    f.allow = "accelerometer; clipboard-write; encrypted-media; picture-in-picture";
    f.allowFullscreen = true;
    frame.appendChild(f);
    const meta = el("div", "video-meta");
    meta.append(el("div", "t", label));
    if (sub) meta.append(el("div", "d", sub));
    card.append(frame, meta);
    return card;
  };

  // --- 여정 ---
  set("jrHeading", t.journey.heading);
  set("jrLead", t.journey.lead);
  document.getElementById("videos")
    .replaceChildren(...VIDEOS.map(v => videoCard(v.id, v.label, v.date)));

  // --- 언어별 주제가 ---
  set("sgHeading", t.songs.heading);
  set("sgLead", t.songs.lead);
  document.getElementById("langVideos")
    .replaceChildren(...LANG_VIDEOS.map(v => videoCard(v.id, v.label)));
  document.getElementById("events").replaceChildren(...t.journey.events.map(e => {
    const row = el("div", "event");
    row.append(el("div", "when", e.d), el("div", "what", e.t));
    return row;
  }));

  // --- 로드맵 ---
  set("rmHeading", t.roadmap.heading);
  document.getElementById("timeline").replaceChildren(...t.roadmap.items.map(item => {
    const row = el("div", "step");
    row.append(el("div", "when", item.date));
    const box = el("div");
    box.append(el("h3", null, item.title), el("p", null, item.body));
    row.append(box);
    return row;
  }));

  // --- 팀 ---
  set("tmHeading", t.team.heading);
  set("tmName", t.team.name);
  set("tmRole", t.team.role);
  document.getElementById("tmBullets")
    .replaceChildren(...t.team.bullets.map(b => el("li", null, b)));

  // --- 디아더가 만든 것 ---
  set("wkHeading", t.works.heading);
  set("wkLead", t.works.lead);
  document.getElementById("workCards").replaceChildren(...WORKS.map(w => {
    const it = t.works.items[w.key];
    // ※ 카드 전체를 <a> 로 감싸면 안에 페이스북 링크를 못 넣는다(중첩 링크는 잘못된 HTML).
    //   그래서 카드는 article 이고, 제목과 SNS 가 각각 링크다.
    const card = el("article", "card work");

    // 로고가 있는 것만 마크를 얹는다 (없으면 제목이 그 자리를 차지해 어색하지 않다)
    if (w.logo) {
      const img = document.createElement("img");
      img.src = w.logo; img.alt = ""; img.className = "work-logo"; img.loading = "lazy";
      card.append(img);
    }
    card.append(el("div", "work-tag", w.tag));

    const h = el("h3");
    const link = el("a", "work-title", it.t);
    link.href = w.url; link.target = "_blank"; link.rel = "noopener";
    h.append(link);
    card.append(h, el("p", null, it.b));

    // 상세 페이지가 있는 게임은 그쪽을 먼저 보여준다 — 철학·전투·데이터 활용이 거기 있다
    const links = el("div", "work-links");
    if (w.detail) {
      const d = el("a", "work-more", t.works.more + " →");
      d.href = w.detail;
      links.append(d);
    }
    if (w.sns) {
      const s = el("a", "work-sns", w.sns.label + " →");
      s.href = w.sns.url; s.target = "_blank"; s.rel = "noopener";
      links.append(s);
    }
    if (links.children.length) card.append(links);
    return card;
  }));

  buildSlideshow();

  // --- 발표 자료 ---
  set("dkHeading", t.decks.heading);
  const dkEn = document.getElementById("dkEn");
  dkEn.href = LINKS.deckEn; dkEn.textContent = t.decks.en;
  const dkKo = document.getElementById("dkKo");
  dkKo.href = LINKS.deckKo; dkKo.textContent = t.decks.ko;

  // --- 푸터 ---
  const contact = document.getElementById("ftContact");
  contact.href = LINKS.mail; contact.textContent = t.footer.contact;
  document.getElementById("ftYouTube").href = LINKS.youtube;
  document.getElementById("ftFacebook").href = LINKS.facebook;
  document.getElementById("ftItch").href = LINKS.itch;
  set("ftRights", `© ${new Date().getFullYear()} ${t.footer.studio}. ${t.footer.rights}`);
}

/** 슬라이드쇼 하나를 만든다. 언어와 무관하므로 언어 전환 때 다시 만들지 않는다.
 *  files 가 비어 있으면 아무것도 하지 않는다 — 이미지가 없어도 안전하다. */
function makeSlideshow({ boxId, trackId, dotsId, folder, files, interval = 4500 }) {
  const box = document.getElementById(boxId);
  if (!box || !files.length || box.dataset.built) return;
  box.dataset.built = "1";
  box.hidden = false;

  const track = document.getElementById(trackId);
  const dots  = document.getElementById(dotsId);
  let idx = 0, timer = null;

  files.forEach((file, i) => {
    const img = document.createElement("img");
    img.src = folder + file;
    img.alt = "";
    // 첫 장만 즉시 불러오고 나머지는 지연 — 15장을 한꺼번에 받으면 첫 화면이 느려진다
    img.loading = i === 0 ? "eager" : "lazy";
    if (i === 0) img.className = "on";
    track.append(img);

    const d = el("button", i === 0 ? "on" : null);
    d.type = "button";
    d.setAttribute("aria-label", String(i + 1));
    d.addEventListener("click", () => show(i));
    dots.append(d);
  });

  function show(n) {
    idx = (n + files.length) % files.length;
    [...track.children].forEach((c, i) => c.classList.toggle("on", i === idx));
    [...dots.children].forEach((c, i) => c.classList.toggle("on", i === idx));
  }
  const start = () => { timer = setInterval(() => show(idx + 1), interval); };
  const stop  = () => clearInterval(timer);

  start();
  // 마우스를 올리면 멈춘다 — 보고 있는 장면이 넘어가면 성가시다
  box.addEventListener("mouseenter", stop);
  box.addEventListener("mouseleave", start);
}

function buildSlideshow() {
  // Fighting Nations — 히어로의 정지 커버를 대신한다 (이미지가 있을 때만)
  const heroArt = document.getElementById("heroArt");
  if (FN_SLIDES.length && heroArt) heroArt.hidden = true;
  makeSlideshow({ boxId: "fnSlides", trackId: "fnTrack", dotsId: "fnDots",
                  folder: "assets/slides-fn/", files: FN_SLIDES });

  // Kingdom Wars — '우리가 만든 것' 아래
  makeSlideshow({ boxId: "kwSlides", trackId: "kwTrack", dotsId: "kwDots",
                  folder: "assets/slides-kw/", files: KW_SLIDES });
}

function setupLangMenu() {
  const btn = document.getElementById("langBtn");
  const menu = document.getElementById("langMenu");

  menu.replaceChildren(...Object.entries(I18N).map(([code, t]) => {
    const b = el("button", null, t.name);
    b.type = "button";
    b.dataset.code = code;
    b.addEventListener("click", () => {
      render(code); markCurrent(code); close();
    });
    return b;
  }));

  const close = () => {
    menu.classList.remove("open");
    btn.setAttribute("aria-expanded", "false");
  };
  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    const open = menu.classList.toggle("open");
    btn.setAttribute("aria-expanded", String(open));
  });
  document.addEventListener("click", close);
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") close(); });
}

function markCurrent(code) {
  document.querySelectorAll("#langMenu button").forEach(b =>
    b.setAttribute("aria-current", String(b.dataset.code === code)));
}

const lang = detectLang();
setupLangMenu();
render(lang);
markCurrent(lang);
