// 主题色与主题装饰
// 1. 主题 CSS 用 var(--accent) / var(--accent-soft) 引用主题色，预览里由浏览器解析，
//    复制到公众号前由 resolveVars 换成字面色值（微信不认 CSS 变量）。
// 2. 主题 CSS 里可以写装饰指令，渲染时注入到对应位置（微信不支持 CSS 动画，
//    但支持内联 SVG + SMIL，所以微动效都放在装饰里）：
//      /* @decor h2.prefix
//      <svg ...>{nn}</svg>
//      */
//    位置：h1-h6.prefix / h1-h6.suffix / hr / blockquote.before / blockquote.after / end
//    占位符：{n} 序号、{nn} 两位序号、{cn} 中文序号、{p} 上一级标题序号

export const PALETTE_ID = "palette_id";
export const PALETTE_CUSTOM = "palette_custom";

export const PALETTES = [
  { id: "default", name: "主题默认" },
  { id: "cinnabar", name: "朱砂", accent: "#b0412e", soft: "#ecc9c1" },
  { id: "rouge", name: "胭脂", accent: "#9d2d45", soft: "#e8c5ce" },
  { id: "ochre", name: "赭石", accent: "#9c5b2e", soft: "#e7d2bf" },
  { id: "amber", name: "琥珀", accent: "#b07d25", soft: "#ecdcb8" },
  { id: "taupe", name: "灰褐", accent: "#8a7560", soft: "#e3dad0" },
  { id: "moss", name: "苔绿", accent: "#5d6b3a", soft: "#d7dcc5" },
  { id: "jade", name: "松石", accent: "#2e6a57", soft: "#c8dbd3" },
  { id: "slate", name: "黛青", accent: "#3f5d6b", soft: "#cad6db" },
  { id: "rosewood", name: "紫檀", accent: "#6b3b4d", soft: "#decbd2" },
  { id: "ink", name: "墨黑", accent: "#262626", soft: "#d6d6d6" }
];

// 自选色：浅色版按 72% 混白得到
export const mixWhite = (hex, ratio = 0.72) => {
  const m = /^#?([0-9a-f]{6})$/i.exec(hex || "");
  if (!m) return "#dddddd";
  const n = parseInt(m[1], 16);
  const ch = [(n >> 16) & 255, (n >> 8) & 255, n & 255].map(c =>
    Math.round(c + (255 - c) * ratio)
  );
  return "#" + ch.map(c => c.toString(16).padStart(2, "0")).join("");
};

export const customPalette = accent => ({
  id: "custom",
  name: "自选",
  accent,
  soft: mixWhite(accent)
});

// body #nice 比主题里的 #nice 优先级高，切主题后仍然生效
export const paletteCss = palette => {
  if (!palette || !palette.accent) return "";
  return `body #nice {\n  --accent: ${palette.accent};\n  --accent-soft: ${palette.soft};\n}\n`;
};

const stripComments = css => (css || "").replace(/\/\*[\s\S]*?\*\//g, "");

// 按出现顺序收集 --name: value，后出现的覆盖先出现的
export const collectVars = (...cssList) => {
  const vars = {};
  cssList.forEach(css => {
    stripComments(css).replace(
      /(--[\w-]+)\s*:\s*([^;{}]+)/g,
      (m, name, value) => {
        vars[name] = value.trim();
        return m;
      }
    );
  });
  return vars;
};

export const resolveVars = (text, vars) => {
  let out = text || "";
  for (let i = 0; i < 5; i++) {
    const prev = out;
    out = out.replace(
      /var\(\s*(--[\w-]+)\s*(?:,\s*([^()]*))?\)/g,
      (m, name, fallback) => {
        if (vars[name] !== undefined) return vars[name];
        return fallback !== undefined ? fallback.trim() : m;
      }
    );
    if (out === prev) break;
  }
  return out;
};

// 去掉变量声明本身，避免被 juice 内联进 style 属性
export const stripVarDecls = css =>
  (css || "").replace(/--[\w-]+\s*:[^;{}]+;?/g, "");

export const parseDecor = css => {
  const decor = {};
  (css || "").replace(
    /\/\*\s*@decor\s+([\w.]+)\s*\n([\s\S]*?)\*\//g,
    (m, key, body) => {
      decor[key] = body.trim();
      return m;
    }
  );
  return decor;
};

const CN = ["零", "一", "二", "三", "四", "五", "六", "七", "八", "九", "十"];
const toCn = n => {
  if (n <= 10) return CN[n];
  if (n < 20) return "十" + CN[n % 10];
  return CN[Math.floor(n / 10)] + "十" + (n % 10 ? CN[n % 10] : "");
};

const fill = (tpl, n, parent) =>
  tpl
    .replace(/\{nn\}/g, String(n).padStart(2, "0"))
    .replace(/\{n\}/g, String(n))
    .replace(/\{cn\}/g, toCn(n))
    .replace(/\{p\}/g, String(parent));

export const decorate = (html, css) => {
  const decor = parseDecor(css);
  if (!html || !Object.keys(decor).length) return html;
  let out = html;

  const count = [0, 0, 0, 0, 0, 0, 0];
  out = out.replace(
    /<h([1-6])([^>]*)><span class="prefix"><\/span>([\s\S]*?)<span class="suffix"><\/span><\/h\1>/g,
    (m, lv, attrs, mid) => {
      const level = Number(lv);
      count[level] += 1;
      for (let i = level + 1; i <= 6; i++) count[i] = 0;
      const n = count[level];
      const parent = count[level - 1] || 0;
      const pre = decor[`h${level}.prefix`];
      const suf = decor[`h${level}.suffix`];
      return (
        `<h${level}${attrs}><span class="prefix">${
          pre ? fill(pre, n, parent) : ""
        }</span>` +
        `${mid}<span class="suffix">${
          suf ? fill(suf, n, parent) : ""
        }</span></h${level}>`
      );
    }
  );

  if (decor.hr) {
    out = out.replace(/<hr\s*\/?>/g, decor.hr);
  }

  // 只装饰最外层引用
  if (decor["blockquote.before"] || decor["blockquote.after"]) {
    let depth = 0;
    out = out.replace(/<blockquote>|<\/blockquote>/g, tag => {
      if (tag === "<blockquote>") {
        depth += 1;
        return depth === 1 && decor["blockquote.before"]
          ? tag + decor["blockquote.before"]
          : tag;
      }
      depth -= 1;
      return depth === 0 && decor["blockquote.after"]
        ? decor["blockquote.after"] + tag
        : tag;
    });
  }

  if (decor.end) {
    const idx = out.indexOf('<h3 class="footnotes-sep">');
    out =
      idx >= 0
        ? out.slice(0, idx) + decor.end + out.slice(idx)
        : out + decor.end;
  }
  return out;
};
