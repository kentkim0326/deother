// 검색엔진용 정적 텍스트 생성기
//
// 이 사이트는 HTML 에 텍스트가 없고 i18n.js / pages-i18n.js 가 브라우저에서 채운다.
// 구글봇은 자바스크립트를 실행하므로 문제가 없지만, **네이버 Yeti 는 실행하지 않는다** —
// 원본 HTML 에 글자가 없으면 네이버에는 빈 페이지로 색인된다.
//
// 그래서 각 상세 페이지의 한국어 본문을 <noscript> 로 박아 넣는다.
// 자바스크립트가 켜진 방문자에게는 안 보이고, JS 를 실행하지 않는 크롤러만 읽는다.
//
// 번역을 고친 뒤에는 이 스크립트를 다시 돌린다:  node build-seo.js
// 마커(<!-- seo:start --> … <!-- seo:end -->) 사이만 갈아끼우므로 몇 번을 돌려도 안전하다.

const fs = require("fs");
const vm = require("vm");

const SITE = "https://deother.vercel.app";
const ctx = {};
vm.createContext(ctx);
vm.runInContext(fs.readFileSync("i18n.js", "utf8") + ";globalThis.__I=I18N;", ctx);
vm.runInContext(fs.readFileSync("pages-i18n.js", "utf8") + ";globalThis.__P=PAGES;", ctx);

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

// 상세 페이지의 <noscript> 본문을 만든다. 제목 → 태그라인 → 인트로 → 섹션(제목+문단+목록).
function detailBlock(key) {
  const d = ctx.__P[key] && ctx.__P[key].ko;
  if (!d) return null;
  const out = [];
  out.push(`<h1>${esc(d.title)}</h1>`);
  if (d.tagline) out.push(`<p>${esc(d.tagline)}</p>`);
  if (d.intro) out.push(`<p>${esc(d.intro)}</p>`);
  (d.sections || []).forEach((s) => {
    if (s.h) out.push(`<h2>${esc(s.h)}</h2>`);
    (s.p || []).forEach((p) => out.push(`<p>${esc(p)}</p>`));
    if (s.list && s.list.items) {
      out.push("<ul>");
      s.list.items.forEach((x) => out.push(`<li>${esc(x)}</li>`));
      out.push("</ul>");
    }
  });
  return out;
}

// 메인 페이지는 i18n.js 쪽 구조라 따로 만든다.
function indexBlock() {
  const t = ctx.__I.ko;
  const out = [];
  out.push(`<h1>${esc(t.hero.title)} — ${esc(t.brand || "주식회사 디아더")}</h1>`);
  out.push(`<p>${esc(t.hero.tagline)}</p>`);
  [["why", t.why], ["origin", t.origin], ["world", t.world], ["features", t.features],
   ["journey", t.journey], ["works", t.works], ["roadmap", t.roadmap], ["team", t.team]]
    .forEach(([, sec]) => {
      if (!sec) return;
      if (sec.heading) out.push(`<h2>${esc(sec.heading)}</h2>`);
      if (sec.lead) out.push(`<p>${esc(sec.lead)}</p>`);
      if (sec.note) out.push(`<p>${esc(sec.note)}</p>`);
      if (Array.isArray(sec.items)) {
        out.push("<ul>");
        sec.items.forEach((x) => {
          const s = typeof x === "string" ? x
            : [x.t || x.title, x.b || x.body || x.d].filter(Boolean).join(" — ");
          if (s) out.push(`<li>${esc(s)}</li>`);
        });
        out.push("</ul>");
      }
      if (Array.isArray(sec.events)) {
        out.push("<ul>");
        sec.events.forEach((e) => out.push(`<li>${esc(e.d)} — ${esc(e.t)}</li>`));
        out.push("</ul>");
      }
      if (Array.isArray(sec.bullets)) {
        out.push("<ul>");
        sec.bullets.forEach((b) => out.push(`<li>${esc(b)}</li>`));
        out.push("</ul>");
      }
    });
  return out;
}

function inject(file, lines) {
  let html = fs.readFileSync(file, "utf8");
  const block =
    "<!-- seo:start — build-seo.js 가 만든다. 손으로 고치지 말 것. 네이버 Yeti 처럼\n" +
    "     자바스크립트를 실행하지 않는 크롤러가 읽는 자리다. -->\n" +
    "<noscript>\n<div class=\"wrap seo-text\">\n" +
    lines.map((l) => "  " + l).join("\n") +
    "\n</div>\n</noscript>\n<!-- seo:end -->";

  const re = /<!-- seo:start[\s\S]*?<!-- seo:end -->/;
  if (re.test(html)) {
    html = html.replace(re, block);
  } else {
    const m = html.match(/<main\b[^>]*>\s*/);   // index.html 은 <main id="top"> 이다
    if (!m) throw new Error(file + ": <main> 을 찾지 못했다");
    const at = m.index + m[0].length;
    html = html.slice(0, at) + block + "\n\n" + html.slice(at);
  }
  fs.writeFileSync(file, html);
  const chars = lines.join(" ").replace(/<[^>]+>/g, "").length;
  console.log(`  ${file.padEnd(20)} ${String(lines.length).padStart(4)}줄 · ${chars}자`);
}

const PAGES_MAP = {
  "index.html": null, // 메인은 indexBlock()
  "miliverse.html": "miliverse", "kingdom-wars.html": "kingdom", "jangbogo.html": "jangbogo",
  "kwonline.html": "kwonline", "soomba.html": "soomba", "deathguide.html": "deathguide",
  "timewars.html": "timewars", "turfking.html": "turfking", "wallstreet.html": "wallstreet",
  "founder.html": "founder", "festivals.html": "festivals",
};

const only = process.argv.slice(2);
console.log("검색엔진용 정적 텍스트 생성");
Object.entries(PAGES_MAP).forEach(([file, key]) => {
  if (only.length && !only.includes(file)) return;
  if (!fs.existsSync(file)) return;
  const lines = key === null ? indexBlock() : detailBlock(key);
  if (!lines) { console.log(`  ${file} — PAGES 에 없다, 건너뜀`); return; }
  inject(file, lines);
});

// sitemap.xml — 실제로 존재하는 html 만 넣는다
const urls = Object.keys(PAGES_MAP).filter((f) => fs.existsSync(f));
const today = process.env.SEO_DATE || "";
fs.writeFileSync("sitemap.xml",
  '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
  urls.map((f) => {
    const loc = f === "index.html" ? SITE + "/" : `${SITE}/${f}`;
    return `  <url>\n    <loc>${loc}</loc>${today ? `\n    <lastmod>${today}</lastmod>` : ""}\n  </url>`;
  }).join("\n") + "\n</urlset>\n");
console.log(`  sitemap.xml          ${urls.length}개 주소`);
