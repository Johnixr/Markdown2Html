export default `/* 11. 描边 — 海报感：大号空心数字章节（笔画描出）、描边引号 */
/* 主题色：--accent 主色，--accent-soft 浅色（只用于线条和小装饰）；编辑器「主题色」菜单可一键替换 */
/* ---------- 装饰（渲染时注入，占位符 {n} {nn} {cn} {p}） ---------- */

/* @decor h2.prefix
<svg width="86" height="50" viewBox="0 0 86 50" style="display:block;margin-bottom:6px;"><text x="1" y="44" font-size="50" font-weight="700" font-family="Helvetica Neue, Arial, sans-serif" letter-spacing="-1" fill="none" stroke-width="1.1" stroke-dasharray="700" style="stroke:var(--accent)">{nn}<animate attributeName="stroke-dashoffset" from="700" to="0" dur="2.6s" fill="freeze"/></text></svg>
*/

/* @decor blockquote.before
<section class="nice-q-before"><svg width="26" height="20" viewBox="0 0 26 20" style="display:block;margin:0 0 6px;"><text x="-1" y="30" font-size="40" font-family="Georgia, serif" fill="none" stroke-width="1" style="stroke:var(--accent)">“</text></svg></section>
*/

/* @decor hr
<section class="nice-divider"><svg width="46" height="10" viewBox="0 0 46 10" style="display:inline-block;"><circle cx="5" cy="5" r="4" fill="none" stroke-width="1" style="stroke:var(--accent)"/><circle cx="23" cy="5" r="4" fill="none" stroke-width="1" style="stroke:var(--accent)"/><circle cx="41" cy="5" r="4" fill="none" stroke-width="1" style="stroke:var(--accent)"/></svg></section>
*/

/* ========== 全局 ========== */
#nice {
  --accent: #262626;
  --accent-soft: #d6d6d6;
  font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', sans-serif;
  font-size: 16px;
  color: #333333;
  line-height: 1.85;
  letter-spacing: 0.02em;
  padding: 0 8px;
  background: #ffffff;
  word-break: break-word;
  text-align: left;
}

#nice p {
  font-size: 16px;
  line-height: 1.85;
  color: #333333;
  margin: 20px 0;
  padding: 0;
  text-align: left;
}

/* ========== 标题 ========== */
#nice h1, #nice h2, #nice h3, #nice h4, #nice h5, #nice h6 {
  color: #111111;
  padding: 0;
  text-align: left;
  letter-spacing: 0.02em;
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
  font-size: 16px;
  font-weight: 700;
  margin: 24px 0 8px;
}

#nice h2 {
  font-size: 21px;
  font-weight: 800;
  line-height: 1.4;
  margin: 52px 0 18px;
}
#nice h2 .prefix { display: block; line-height: 0; }
#nice h3 {
  font-size: 16px;
  font-weight: 700;
  margin: 30px 0 10px;
}

/* ========== 行内 ========== */
#nice strong {
  font-weight: 700;
  color: #111111;
}
#nice em {
  font-style: italic;
  color: #333333;
}
#nice em strong, #nice strong em {
  color: #111111;
}
#nice del {
  color: #999999;
}
#nice a {
  color: #111111;
  font-weight: 400;
  text-decoration: none;
  border-bottom: 1px solid var(--accent-soft);
  word-wrap: break-word;
}
#nice p code, #nice li code, #nice blockquote code, #nice td code {
  font-family: 'SF Mono', Menlo, Consolas, 'PingFang SC', monospace;
  font-size: 0.86em;
  color: #444444;
  background: #f2f2f1;
  padding: 2px 5px;
  margin: 0 2px;
  border-radius: 3px;
  word-break: break-all;
}

/* ========== 列表 ========== */
#nice ul, #nice ol {
  margin: 20px 0;
  padding-left: 1.3em;
  color: #333333;
}
#nice ul { list-style-type: disc; }
#nice ul ul { list-style-type: circle; margin: 4px 0; }
#nice ol { list-style-type: decimal; }
#nice li section {
  font-size: 16px;
  line-height: 1.85;
  color: #333333;
  font-weight: 400;
  margin: 6px 0;
  text-align: left;
}

/* ========== 引用 ========== */
#nice blockquote {
  margin: 30px 0;
  padding: 0;
  border: none;
  background: none;
}

#nice blockquote p, #nice blockquote li section {
  font-size: 16px;
  line-height: 1.8;
  color: #444444;
  margin: 6px 0;
}

/* ========== 代码块（微信代码主题 / 高亮主题两种结构） ========== */
#nice .code-snippet__fix {
  background: #f7f7f6;
  border: none;
  border-radius: 6px;
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
  background: #f7f7f6;
  border: none;
  border-radius: 6px;
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
  border-radius: 2px;
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
  color: #333333;
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
#nice table tr th { background: none; font-weight: 700; color: #111111; }

#nice table tr th { border-bottom: 1.5px solid #111111; }
#nice table tr td { border-bottom: 1px solid #eeeeee; }

/* ========== 分隔线 ========== */

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
  color: #111111;
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
  color: #111111;
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
  color: #111111;
}
#nice .footnote-item p, #nice .footnote-num {
  font-size: 12px;
  line-height: 1.8;
  color: #999999;
}
`;
