export default `/* 05. 终端 — 开发者：提示符章节、虚线卡片、文末闪烁光标 */
/* 主题色：--accent 主色，--accent-soft 浅色（只用于线条和小装饰）；编辑器「主题色」菜单可一键替换 */
/* ---------- 装饰（渲染时注入，占位符 {n} {nn} {cn} {p}） ---------- */

/* @decor h2.prefix
<svg width="12" height="14" viewBox="0 0 12 14" style="display:inline-block;vertical-align:-1px;margin-right:10px;"><path d="M2 2 L9 7 L2 12" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="stroke:var(--accent)"/></svg>
*/

/* @decor end
<section class="nice-end"><svg width="40" height="16" viewBox="0 0 40 16" style="display:inline-block;"><text x="0" y="12" font-size="11" font-family="Menlo, monospace" letter-spacing="1" fill="#9a9a9a">EOF</text><rect x="30" y="2" width="7" height="12" style="fill:var(--accent)"><animate attributeName="opacity" values="1;0" dur="1.1s" calcMode="discrete" repeatCount="indefinite"/></rect></svg></section>
*/

/* ========== 全局 ========== */
#nice {
  --accent: #2e6a57;
  --accent-soft: #c8dbd3;
  font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', sans-serif;
  font-size: 15.5px;
  color: #2b2f33;
  line-height: 1.8;
  letter-spacing: 0.01em;
  padding: 0 8px;
  background: #ffffff;
  word-break: break-word;
  text-align: left;
}

#nice p {
  font-size: 15.5px;
  line-height: 1.8;
  color: #2b2f33;
  margin: 20px 0;
  padding: 0;
  text-align: left;
}

/* ========== 标题 ========== */
#nice h1, #nice h2, #nice h3, #nice h4, #nice h5, #nice h6 {
  color: #16191c;
  padding: 0;
  text-align: left;
  letter-spacing: 0.01em;
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
  font-family: 'SF Mono', Menlo, Consolas, 'PingFang SC', monospace;
  font-size: 17px;
  font-weight: 700;
  line-height: 1.5;
  border-bottom: 1px dashed #d6dad9;
  padding-bottom: 10px;
  margin: 40px 0 16px;
}
#nice h2 .prefix { display: inline; }
#nice h3 {
  font-family: 'SF Mono', Menlo, Consolas, 'PingFang SC', monospace;
  font-size: 15px;
  font-weight: 700;
  margin: 28px 0 10px;
}

/* ========== 行内 ========== */
#nice strong {
  font-weight: 700;
  color: #16191c;
}
#nice em {
  font-style: italic;
  color: #2b2f33;
}
#nice em strong, #nice strong em {
  color: #16191c;
}
#nice del {
  color: #999999;
}
#nice a {
  color: var(--accent);
  font-weight: 400;
  text-decoration: none;
  border-bottom: 1px dotted var(--accent);
  word-wrap: break-word;
}
#nice p code, #nice li code, #nice blockquote code, #nice td code {
  font-family: 'SF Mono', Menlo, Consolas, 'PingFang SC', monospace;
  font-size: 0.86em;
  color: #2b2f33;
  background: #f0f2f1;
  padding: 2px 5px;
  margin: 0 2px;
  border-radius: 4px;
  word-break: break-all;
}

/* ========== 列表 ========== */
#nice ul, #nice ol {
  margin: 20px 0;
  padding-left: 1.3em;
  color: #2b2f33;
}
#nice ul { list-style-type: disc; }
#nice ul ul { list-style-type: circle; margin: 4px 0; }
#nice ol { list-style-type: decimal; }
#nice li section {
  font-size: 15.5px;
  line-height: 1.8;
  color: #2b2f33;
  font-weight: 400;
  margin: 6px 0;
  text-align: left;
}

/* ========== 引用 ========== */
#nice blockquote {
  margin: 24px 0;
  padding: 12px 16px;
  border: 1px dashed #cfd4d3;
  background: #fbfbfb;
  border-radius: 6px;
}

#nice blockquote p, #nice blockquote li section {
  font-size: 14.5px;
  line-height: 1.8;
  color: #555a5e;
  margin: 6px 0;
}

/* ========== 代码块（微信代码主题 / 高亮主题两种结构） ========== */
#nice .code-snippet__fix {
  background: #f6f7f7;
  border: 1px solid #e4e7e6;
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
  background: #f6f7f7;
  border: 1px solid #e4e7e6;
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
  border-radius: 6px;
}
#nice figcaption {
  margin-top: 10px;
  font-size: 12.5px;
  line-height: 1.6;
  color: #999999;
  text-align: center;
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
  color: #2b2f33;
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
#nice table tr th { background: none; font-weight: 700; color: #16191c; }

#nice table tr th, #nice table tr td { border: 1px solid #e4e7e6; }
#nice table tr th { background: #f6f7f7; font-family: 'SF Mono', Menlo, Consolas, 'PingFang SC', monospace; font-size: 12.5px; }

/* ========== 分隔线 ========== */
#nice hr {
  border: none;
  border-top: 1px dashed #d6dad9;
  height: 0;
  margin: 40px 0;
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
  color: #16191c;
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
  color: #16191c;
}
#nice .footnote-item p, #nice .footnote-num {
  font-size: 12px;
  line-height: 1.8;
  color: #999999;
}
`;
