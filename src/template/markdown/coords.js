export default `/* 12. 坐标 — 工程图纸：§ 编号 + 标尺刻度、裁切角标引用、十字准星分隔 */
/* 主题色：--accent 主色，--accent-soft 浅色（只用于线条和小装饰）；编辑器「主题色」菜单可一键替换 */
/* ---------- 装饰（渲染时注入，占位符 {n} {nn} {cn} {p}） ---------- */

/* @decor h2.prefix
§ {nn}
*/

/* @decor h2.suffix
<svg width="100%" height="10" viewBox="0 0 361 10" preserveAspectRatio="none" style="display:block;margin-top:10px;"><line x1="0" y1="9.5" x2="361" y2="9.5" stroke-width="1" style="stroke:var(--accent-soft)"/><line x1="0.5" y1="2" x2="0.5" y2="10" stroke-width="1" style="stroke:var(--accent)"/><line x1="10.5" y1="6" x2="10.5" y2="10" stroke-width="1" style="stroke:var(--accent-soft)"/><line x1="20.5" y1="6" x2="20.5" y2="10" stroke-width="1" style="stroke:var(--accent-soft)"/><line x1="30.5" y1="6" x2="30.5" y2="10" stroke-width="1" style="stroke:var(--accent-soft)"/><line x1="40.5" y1="6" x2="40.5" y2="10" stroke-width="1" style="stroke:var(--accent-soft)"/><line x1="50.5" y1="2" x2="50.5" y2="10" stroke-width="1" style="stroke:var(--accent)"/><line x1="60.5" y1="6" x2="60.5" y2="10" stroke-width="1" style="stroke:var(--accent-soft)"/><line x1="70.5" y1="6" x2="70.5" y2="10" stroke-width="1" style="stroke:var(--accent-soft)"/><line x1="80.5" y1="6" x2="80.5" y2="10" stroke-width="1" style="stroke:var(--accent-soft)"/><line x1="90.5" y1="6" x2="90.5" y2="10" stroke-width="1" style="stroke:var(--accent-soft)"/><line x1="100.5" y1="2" x2="100.5" y2="10" stroke-width="1" style="stroke:var(--accent)"/><line x1="110.5" y1="6" x2="110.5" y2="10" stroke-width="1" style="stroke:var(--accent-soft)"/><line x1="120.5" y1="6" x2="120.5" y2="10" stroke-width="1" style="stroke:var(--accent-soft)"/><line x1="130.5" y1="6" x2="130.5" y2="10" stroke-width="1" style="stroke:var(--accent-soft)"/><line x1="140.5" y1="6" x2="140.5" y2="10" stroke-width="1" style="stroke:var(--accent-soft)"/><line x1="150.5" y1="2" x2="150.5" y2="10" stroke-width="1" style="stroke:var(--accent)"/><line x1="160.5" y1="6" x2="160.5" y2="10" stroke-width="1" style="stroke:var(--accent-soft)"/><line x1="170.5" y1="6" x2="170.5" y2="10" stroke-width="1" style="stroke:var(--accent-soft)"/><line x1="180.5" y1="6" x2="180.5" y2="10" stroke-width="1" style="stroke:var(--accent-soft)"/><line x1="190.5" y1="6" x2="190.5" y2="10" stroke-width="1" style="stroke:var(--accent-soft)"/><line x1="200.5" y1="2" x2="200.5" y2="10" stroke-width="1" style="stroke:var(--accent)"/><line x1="210.5" y1="6" x2="210.5" y2="10" stroke-width="1" style="stroke:var(--accent-soft)"/><line x1="220.5" y1="6" x2="220.5" y2="10" stroke-width="1" style="stroke:var(--accent-soft)"/><line x1="230.5" y1="6" x2="230.5" y2="10" stroke-width="1" style="stroke:var(--accent-soft)"/><line x1="240.5" y1="6" x2="240.5" y2="10" stroke-width="1" style="stroke:var(--accent-soft)"/><line x1="250.5" y1="2" x2="250.5" y2="10" stroke-width="1" style="stroke:var(--accent)"/><line x1="260.5" y1="6" x2="260.5" y2="10" stroke-width="1" style="stroke:var(--accent-soft)"/><line x1="270.5" y1="6" x2="270.5" y2="10" stroke-width="1" style="stroke:var(--accent-soft)"/><line x1="280.5" y1="6" x2="280.5" y2="10" stroke-width="1" style="stroke:var(--accent-soft)"/><line x1="290.5" y1="6" x2="290.5" y2="10" stroke-width="1" style="stroke:var(--accent-soft)"/><line x1="300.5" y1="2" x2="300.5" y2="10" stroke-width="1" style="stroke:var(--accent)"/><line x1="310.5" y1="6" x2="310.5" y2="10" stroke-width="1" style="stroke:var(--accent-soft)"/><line x1="320.5" y1="6" x2="320.5" y2="10" stroke-width="1" style="stroke:var(--accent-soft)"/><line x1="330.5" y1="6" x2="330.5" y2="10" stroke-width="1" style="stroke:var(--accent-soft)"/><line x1="340.5" y1="6" x2="340.5" y2="10" stroke-width="1" style="stroke:var(--accent-soft)"/><line x1="350.5" y1="2" x2="350.5" y2="10" stroke-width="1" style="stroke:var(--accent)"/><line x1="360.5" y1="6" x2="360.5" y2="10" stroke-width="1" style="stroke:var(--accent-soft)"/></svg>
*/

/* @decor blockquote.before
<section class="nice-q-before"><svg width="12" height="12" viewBox="0 0 12 12" style="display:block;margin:0 0 4px -10px;"><path d="M0 8.5 H6 M8.5 0 V6" fill="none" stroke-width="1.2" style="stroke:var(--accent)"/></svg></section>
*/

/* @decor blockquote.after
<section class="nice-q-after"><svg width="12" height="12" viewBox="0 0 12 12" style="display:inline-block;margin:4px -10px 0 0;"><path d="M6 3.5 H12 M3.5 6 V12" fill="none" stroke-width="1.2" style="stroke:var(--accent)"/></svg></section>
*/

/* @decor hr
<section class="nice-divider"><svg width="140" height="16" viewBox="0 0 140 16" style="display:inline-block;"><line x1="0" y1="8" x2="58" y2="8" stroke-width="1" style="stroke:var(--accent-soft)"/><circle cx="70" cy="8" r="5" fill="none" stroke-width="1" style="stroke:var(--accent)"/><line x1="70" y1="0" x2="70" y2="16" stroke-width="1" style="stroke:var(--accent)"/><line x1="62" y1="8" x2="78" y2="8" stroke-width="1" style="stroke:var(--accent)"/><line x1="82" y1="8" x2="140" y2="8" stroke-width="1" style="stroke:var(--accent-soft)"/></svg></section>
*/

/* ========== 全局 ========== */
#nice {
  --accent: #b0412e;
  --accent-soft: #ecc9c1;
  font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', sans-serif;
  font-size: 15.5px;
  color: #333333;
  line-height: 1.85;
  letter-spacing: 0.02em;
  padding: 0 8px;
  background: #ffffff;
  word-break: break-word;
  text-align: left;
}

#nice p {
  font-size: 15.5px;
  line-height: 1.85;
  color: #333333;
  margin: 20px 0;
  padding: 0;
  text-align: left;
}

/* ========== 标题 ========== */
#nice h1, #nice h2, #nice h3, #nice h4, #nice h5, #nice h6 {
  color: #141414;
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
  font-size: 15.5px;
  font-weight: 700;
  margin: 24px 0 8px;
}

#nice h2 {
  font-size: 19px;
  font-weight: 800;
  line-height: 1.45;
  margin: 46px 0 20px;
}
#nice h2 .prefix {
  display: block;
  font-family: 'SF Mono', Menlo, Consolas, 'PingFang SC', monospace;
  font-size: 11.5px;
  font-weight: 400;
  letter-spacing: 0.18em;
  color: var(--accent);
  margin-bottom: 6px;
}
#nice h2 .suffix { display: block; line-height: 0; }
#nice h3 {
  font-size: 15.5px;
  font-weight: 700;
  margin: 28px 0 10px;
}

/* ========== 行内 ========== */
#nice strong {
  font-weight: 700;
  color: #141414;
}
#nice em {
  font-style: italic;
  color: #333333;
}
#nice em strong, #nice strong em {
  color: #141414;
}
#nice del {
  color: #999999;
}
#nice a {
  color: #141414;
  font-weight: 400;
  text-decoration: none;
  border-bottom: 1px solid var(--accent-soft);
  word-wrap: break-word;
}
#nice p code, #nice li code, #nice blockquote code, #nice td code {
  font-family: 'SF Mono', Menlo, Consolas, 'PingFang SC', monospace;
  font-size: 0.86em;
  color: #444444;
  background: #f3f3f3;
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
  font-size: 15.5px;
  line-height: 1.85;
  color: #333333;
  font-weight: 400;
  margin: 6px 0;
  text-align: left;
}

/* ========== 引用 ========== */
#nice blockquote {
  margin: 30px 10px;
  padding: 0;
  border: none;
  background: none;
}

#nice blockquote p, #nice blockquote li section {
  font-size: 15px;
  line-height: 1.8;
  color: #444444;
  margin: 6px 0;
}

/* ========== 代码块（微信代码主题 / 高亮主题两种结构） ========== */
#nice .code-snippet__fix {
  background: #f7f7f7;
  border: none;
  border-radius: 0px;
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
  background: #f7f7f7;
  border: none;
  border-radius: 0px;
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
  text-align: left;
  letter-spacing: 0.04em;
  font-family: 'SF Mono', Menlo, Consolas, 'PingFang SC', monospace;
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
#nice table tr th { background: none; font-weight: 700; color: #141414; }

#nice table tr th { font-family: 'SF Mono', Menlo, Consolas, 'PingFang SC', monospace; font-size: 12px; font-weight: 400; letter-spacing: 0.06em; color: #666666; border-bottom: 1px solid #333333; }
#nice table tr td { border-bottom: 1px solid #ececec; }

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
  color: #141414;
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
  color: #141414;
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
  color: #141414;
}
#nice .footnote-item p, #nice .footnote-num {
  font-size: 12px;
  line-height: 1.8;
  color: #999999;
}
`;
