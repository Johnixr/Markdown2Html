export default `/* 10. 留白 — 安静克制：宽字距、居中标题、细竖线引导 */

/* ========== 全局 ========== */
#nice {
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

/* 段落 */
#nice p {
  font-size: 15px;
  line-height: 2;
  color: #444444;
  margin: 22px 0;
  padding: 0;
  text-align: left;
}

/* 标题通用 */
#nice h1, #nice h2, #nice h3, #nice h4, #nice h5, #nice h6 {
  color: #222222;
  padding: 0;
  text-align: left;
}
#nice h1 .prefix, #nice h2 .prefix, #nice h3 .prefix,
#nice h4 .prefix, #nice h5 .prefix, #nice h6 .prefix,
#nice h1 .suffix, #nice h2 .suffix, #nice h3 .suffix,
#nice h4 .suffix, #nice h5 .suffix, #nice h6 .suffix {
  display: none;
}

/* ========== 标题 ========== */
#nice h1 {
  font-size: 22px;
  font-weight: 600;
  line-height: 1.6;
  letter-spacing: 0.14em;
  text-align: center;
  margin: 60px 0 36px;
}
#nice h2 {
  font-size: 17px;
  font-weight: 600;
  line-height: 1.6;
  letter-spacing: 0.2em;
  text-align: center;
  margin: 56px 0 28px;
}
#nice h2 .suffix {
  display: block;
  width: 1px;
  height: 22px;
  margin: 14px auto 0;
  background: #c8bfb5;
}
#nice h3 {
  font-size: 15px;
  font-weight: 600;
  letter-spacing: 0.1em;
  color: #8a7560;
  margin: 34px 0 12px;
}
#nice h4 {
  font-size: 15px;
  font-weight: 600;
  margin: 24px 0 8px;
}

/* ========== 行内 ========== */
#nice strong {
  font-weight: 700;
  color: #222222;
}
#nice em {
  font-style: normal;
  color: #8a7560;
}
#nice em strong, #nice strong em {
  color: #222222;
}
#nice del {
  color: #a39d96;
  text-decoration: line-through;
}
#nice a {
  color: #8a7560;
  font-weight: 400;
  text-decoration: none;
  border-bottom: 1px solid #e2dad1;
  word-wrap: break-word;
}
#nice p code, #nice li code, #nice blockquote code, #nice td code {
  font-family: 'SF Mono', Menlo, Consolas, 'PingFang SC', monospace;
  font-size: 0.86em;
  color: #6b5b4b;
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
  line-height: 1.95;
  color: #6b635b;
  text-align: center;
  margin: 4px 0;
}

/* ========== 代码块（微信代码主题 + 高亮主题两种结构） ========== */
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
  color: #a39d96;
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
#nice table tr th { background: none; font-weight: 700; }

#nice table tr th {
  font-size: 12.5px;
  font-weight: 500;
  letter-spacing: 0.08em;
  color: #8a7560;
  border-bottom: 1px solid #e2dad1;
}
#nice table tr td { border-bottom: 1px solid #f0ece7; }

/* ========== 分隔线 ========== */
#nice hr {
  border: none;
  height: 1px;
  width: 32px;
  margin: 52px auto;
  background: #c8bfb5;
}

/* ========== 脚注 / 参考资料 ========== */
#nice .footnote-word {
  color: #8a7560;
  font-weight: 400;
}
#nice .footnote-ref {
  color: #8a7560;
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
  color: #a39d96;
}

#nice blockquote blockquote {
  margin: 10px 0 4px;
  padding: 0 0 0 1em;
  border: none;
  background: none;
  text-align: inherit;
}
#nice blockquote blockquote::before {
  content: none;
  display: none;
}
`;
