export default `/* 08. 留白 — 安静克制：宽字距、居中标题、细线里缓缓下落的点 */
/* 主题色：--accent 主色，--accent-soft 浅色（只用于线条和小装饰）；编辑器「主题色」菜单可一键替换 */
/* ---------- 装饰（渲染时注入，占位符 {n} {nn} {cn} {p}） ---------- */

/* @decor h2.suffix
<svg width="9" height="30" viewBox="0 0 9 30" style="display:block;margin:14px auto 0;"><line x1="4.5" y1="0" x2="4.5" y2="30" stroke-width="1" style="stroke:var(--accent-soft)"/><circle cx="4.5" cy="3" r="2.2" style="fill:var(--accent)"><animate attributeName="cy" values="3;27;27" keyTimes="0;0.7;1" dur="3s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;1;1;0;0" keyTimes="0;0.15;0.6;0.72;1" dur="3s" repeatCount="indefinite"/></circle></svg>
*/

/* ========== 全局 ========== */
#nice {
  --accent: #8a7560;
  --accent-soft: #e3dad0;
  font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', sans-serif;
  font-size: 15px;
  color: #444444;
  line-height: 2;
  letter-spacing: 0.05em;
  padding: 0 12px;
  background: #ffffff;
  word-break: break-word;
  text-align: left;
}

#nice p {
  font-size: 15px;
  line-height: 2;
  color: #444444;
  margin: 22px 0;
  padding: 0;
  text-align: left;
}

/* ========== 标题 ========== */
#nice h1, #nice h2, #nice h3, #nice h4, #nice h5, #nice h6 {
  color: #222222;
  padding: 0;
  text-align: left;
  letter-spacing: 0.05em;
}
#nice h1 .prefix, #nice h2 .prefix, #nice h3 .prefix,
#nice h4 .prefix, #nice h5 .prefix, #nice h6 .prefix,
#nice h1 .suffix, #nice h2 .suffix, #nice h3 .suffix,
#nice h4 .suffix, #nice h5 .suffix, #nice h6 .suffix {
  display: none;
}
/* 一级标题保持朴素：公众号标题在文章顶部，正文里少用 */
#nice h1 {
  font-size: 20px;
  font-weight: 700;
  line-height: 1.45;
  margin: 36px 0 16px;
}
#nice h4 {
  font-size: 15px;
  font-weight: 700;
  margin: 24px 0 8px;
}

#nice h2 {
  font-size: 17px;
  font-weight: 600;
  line-height: 1.6;
  letter-spacing: 0.2em;
  text-align: center;
  margin: 56px 0 28px;
}
#nice h2 .suffix { display: block; line-height: 0; }
#nice h3 {
  font-size: 15px;
  font-weight: 600;
  letter-spacing: 0.1em;
  margin: 34px 0 12px;
}

/* ========== 行内 ========== */
#nice strong {
  font-weight: 700;
  color: #222222;
}
#nice em {
  font-style: normal;
  color: var(--accent);
}
#nice em strong, #nice strong em {
  color: #222222;
}
#nice del {
  color: #999999;
}
#nice a {
  color: var(--accent);
  font-weight: 400;
  text-decoration: none;
  border-bottom: 1px solid var(--accent-soft);
  word-wrap: break-word;
}
#nice p code, #nice li code, #nice blockquote code, #nice td code {
  font-family: 'SF Mono', Menlo, Consolas, 'PingFang SC', monospace;
  font-size: 0.86em;
  color: #5e5145;
  background: #f5f3f0;
  padding: 2px 5px;
  margin: 0 2px;
  border-radius: 3px;
  word-break: break-all;
}

/* ========== 列表 ========== */
#nice ul, #nice ol {
  margin: 22px 0;
  padding-left: 1.3em;
  color: #444444;
}
#nice ul { list-style-type: disc; }
#nice ul ul { list-style-type: circle; margin: 4px 0; }
#nice ol { list-style-type: decimal; }
#nice li section {
  font-size: 15px;
  line-height: 2;
  color: #444444;
  font-weight: 400;
  margin: 6px 0;
  text-align: left;
}

/* ========== 引用 ========== */
#nice blockquote {
  margin: 32px 0;
  padding: 20px 24px;
  border: none;
  background: #faf9f7;
  text-align: center;
}

#nice blockquote p, #nice blockquote li section {
  font-size: 14.5px;
  line-height: 1.8;
  color: #6b635b;
  margin: 6px 0;
  line-height: 1.95;
  text-align: center;
}

/* ========== 代码块（微信代码主题 / 高亮主题两种结构） ========== */
#nice .code-snippet__fix {
  background: #faf9f7;
  border: none;
  border-radius: 2px;
  margin: 24px 0;
  font-size: 13px;
  line-height: 1.7;
  color: #333333;
}
#nice .code-snippet__fix .code-snippet__line-index li::before {
  color: #bbbbbb;
}
#nice .code-snippet__fix pre, #nice .code-snippet__fix code {
  font-family: 'SF Mono', Menlo, Consolas, 'PingFang SC', monospace;
  color: #333333;
}
#nice pre.custom {
  background: #faf9f7;
  border: none;
  border-radius: 2px;
  margin: 24px 0;
  padding: 0;
}
#nice pre code {
  font-family: 'SF Mono', Menlo, Consolas, 'PingFang SC', monospace;
  font-size: 13px;
  line-height: 1.7;
  padding: 16px;
  background: none;
  color: #333333;
  border-radius: 0;
}
#nice pre code span {
  line-height: 1.7;
}

/* ========== 图片 ========== */
#nice figure {
  margin: 28px 0;
}
#nice img {
  display: block;
  max-width: 100%;
  margin: 0 auto;
  border-radius: 0px;
}
#nice figcaption {
  margin-top: 10px;
  font-size: 12.5px;
  line-height: 1.6;
  color: #999999;
  text-align: center;
  letter-spacing: 0.04em;
}

/* ========== 表格 ========== */
#nice .table-container { overflow-x: auto; margin: 24px 0; }
#nice table {
  display: table;
  width: 100%;
  border-collapse: collapse;
  font-size: 13.5px;
  line-height: 1.6;
  color: #444444;
}
#nice table tr { border: 0; background: #ffffff; }
#nice table tr:nth-child(2n) { background: #ffffff; }
#nice table tr th, #nice table tr td {
  font-size: 13.5px;
  border: 0;
  padding: 9px 8px;
  text-align: left;
  min-width: 56px;
}
#nice table tr th { background: none; font-weight: 700; color: #222222; }

#nice table tr th { font-size: 12.5px; font-weight: 500; letter-spacing: 0.08em; color: var(--accent); border-bottom: 1px solid #e2dad1; }
#nice table tr td { border-bottom: 1px solid #f0ece7; }

/* ========== 分隔线 ========== */
#nice hr {
  border: none;
  height: 1px;
  width: 32px;
  margin: 52px auto;
  background: #cfc6bc;
}

/* 悬挂的引号 / 角标需要露出引用框 */
#nice blockquote { overflow: visible; }

/* ========== 嵌套引用只缩进，不重复装饰 ========== */
#nice blockquote blockquote {
  margin: 10px 0 4px;
  padding: 0 0 0 1em;
  border: none;
  background: none;
  box-shadow: none;
  text-align: inherit;
}
#nice blockquote blockquote::before { content: none; display: none; }

/* ========== 装饰容器 ========== */
#nice .nice-divider {
  margin: 44px 0;
  text-align: center;
  line-height: 0;
}
#nice .nice-end {
  margin: 48px 0 8px;
  text-align: center;
  line-height: 0;
}
#nice .nice-q-before, #nice .nice-q-after {
  line-height: 0;
}
#nice .nice-q-after { text-align: right; }

/* ========== 脚注 / 参考资料 ========== */
#nice .footnote-word {
  color: var(--accent);
  font-weight: 400;
}
#nice .footnote-ref {
  color: var(--accent);
  font-weight: 400;
  font-size: 11px;
}
#nice h3.footnotes-sep {
  display: block;
  font-family: inherit;
  font-size: 14px;
  color: #222222;
  background: none;
  border: none;
  padding: 0;
  margin: 48px 0 12px;
  text-align: left;
  text-decoration: none;
}
#nice .footnotes-sep:before {
  content: "参考资料";
  display: block;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.1em;
  color: #222222;
}
#nice .footnote-item p, #nice .footnote-num {
  font-size: 12px;
  line-height: 1.8;
  color: #999999;
}
`;
