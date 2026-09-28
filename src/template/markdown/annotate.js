export default `/* 18. 批注 — 读书批注：手写弧线章节、波浪线小标题、注字签引文 */
/* 主题色：--accent 主色，--accent-soft 浅色（只用于线条和小装饰）；编辑器「主题色」菜单可一键替换 */
/* ---------- 装饰（渲染时注入，占位符 {n} {nn} {cn} {p}） ---------- */

/* @decor h2.suffix
<svg width="72" height="10" viewBox="0 0 72 10" style="display:block;margin-top:6px;"><path d="M1.5 7.5 C 18 2.5, 42 1.5, 70.5 4.5" fill="none" stroke-width="1.8" stroke-linecap="round" style="stroke:var(--accent)"/></svg>
*/

/* @decor blockquote.before
<section class="nice-q-before"><svg width="22" height="22" viewBox="0 0 22 22" style="display:block;margin:0 0 8px;"><circle cx="11" cy="11" r="10" fill="none" stroke-width="1.2" style="stroke:var(--accent)"/><text x="11" y="15.2" text-anchor="middle" font-size="12" font-family="Kaiti SC, STKaiti, serif" style="fill:var(--accent)">注</text></svg></section>
*/

/* @decor hr
<section class="nice-divider"><svg width="84" height="8" viewBox="0 0 84 8" style="display:inline-block;"><path d="M0 4 Q 5.25 0 10.5 4 T 21 4 T 31.5 4 T 42 4 T 52.5 4 T 63 4 T 73.5 4 T 84 4" fill="none" stroke-width="1.2" style="stroke:var(--accent)"/></svg></section>
*/

/* ========== 全局 ========== */
#nice {
  --accent: #b0412e;
  --accent-soft: #ecc9c1;
  font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', sans-serif;
  font-size: 16px;
  color: #333333;
  line-height: 1.9;
  letter-spacing: 0.03em;
  padding: 0 8px;
  background: #ffffff;
  word-break: break-word;
  text-align: left;
}

#nice p {
  font-size: 16px;
  line-height: 1.9;
  color: #333333;
  margin: 20px 0;
  padding: 0;
  text-align: left;
}

/* ========== 标题 ========== */
#nice h1, #nice h2, #nice h3, #nice h4, #nice h5, #nice h6 {
  color: #161616;
  padding: 0;
  text-align: left;
  letter-spacing: 0.03em;
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
  font-size: 19px;
  font-weight: 700;
  line-height: 1.5;
  margin: 46px 0 18px;
}
#nice h2 .suffix { display: block; line-height: 0; }
#nice h3 {
  font-size: 16px;
  font-weight: 700;
  margin: 28px 0 12px;
}
#nice h3 .content {
  text-decoration: underline;
  text-decoration-style: wavy;
  text-decoration-color: var(--accent);
  text-decoration-thickness: 1px;
  text-underline-offset: 6px;
}

/* ========== 行内 ========== */
#nice strong {
  font-weight: 700;
  color: #161616;
  border-bottom: 1.5px solid var(--accent);
  padding-bottom: 1px;
}
#nice em {
  font-style: italic;
  color: #333333;
}
#nice em strong, #nice strong em {
  color: #161616;
}
#nice del {
  color: #999999;
}
#nice a {
  color: #161616;
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
  line-height: 1.9;
  color: #333333;
  font-weight: 400;
  margin: 6px 0;
  text-align: left;
}

/* ========== 引用 ========== */
#nice blockquote {
  margin: 28px 0;
  padding: 14px 18px 12px;
  border: none;
  background: #f7f7f7;
  border-radius: 4px;
}

#nice blockquote p, #nice blockquote li section {
  font-size: 15.5px;
  line-height: 1.8;
  color: #4f4f4f;
  margin: 6px 0;
  font-family: 'Kaiti SC', STKaiti, KaiTi, 'Songti SC', serif;
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
#nice table tr th { background: none; font-weight: 700; color: #161616; }

#nice table tr th { border-bottom: 1px solid #333333; }
#nice table tr td { border-bottom: 1px solid #ededed; }

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
  color: #161616;
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
  color: #161616;
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
  color: #161616;
}
#nice .footnote-item p, #nice .footnote-num {
  font-size: 12px;
  line-height: 1.8;
  color: #999999;
}
`;
