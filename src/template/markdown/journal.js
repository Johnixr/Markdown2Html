export default `/* 04. 学刊 — 期刊版式：宋体标题、藏青单色、三线表 */

/* ========== 全局 ========== */
#nice {
  font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', sans-serif;
  font-size: 15.5px;
  color: #333333;
  line-height: 1.85;
  letter-spacing: 0.02em;
  padding: 0 8px;
  background: #ffffff;
  word-break: break-word;
  text-align: justify;
}

/* 段落 */
#nice p {
  font-size: 15.5px;
  line-height: 1.85;
  color: #333333;
  margin: 20px 0;
  padding: 0;
  text-align: justify;
}

/* 标题通用 */
#nice h1, #nice h2, #nice h3, #nice h4, #nice h5, #nice h6 {
  color: #1f3a5f;
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
  font-family: 'Songti SC', 'Noto Serif SC', 'Source Han Serif SC', STSong, Georgia, serif;
  font-size: 24px;
  font-weight: 700;
  line-height: 1.45;
  text-align: center;
  border-top: 2px solid #1f3a5f;
  border-bottom: 1px solid #1f3a5f;
  padding: 14px 0;
  margin: 48px 0 28px;
}
#nice h2 {
  font-family: 'Songti SC', 'Noto Serif SC', 'Source Han Serif SC', STSong, Georgia, serif;
  font-size: 19px;
  font-weight: 700;
  line-height: 1.5;
  border-bottom: 1px solid #d5dce6;
  padding-bottom: 8px;
  margin: 44px 0 18px;
}
#nice h3 {
  font-size: 15.5px;
  font-weight: 700;
  color: #1f3a5f;
  margin: 30px 0 10px;
}
#nice h4 {
  font-size: 15px;
  font-weight: 700;
  color: #333333;
  margin: 22px 0 6px;
}

/* ========== 行内 ========== */
#nice strong {
  font-weight: 700;
  color: #1f3a5f;
}
#nice em {
  font-style: italic;
  color: #333333;
}
#nice em strong, #nice strong em {
  color: #1f3a5f;
}
#nice del {
  color: #7a8699;
  text-decoration: line-through;
}
#nice a {
  color: #1f3a5f;
  font-weight: 400;
  text-decoration: none;
  border-bottom: 1px dotted #1f3a5f;
  word-wrap: break-word;
}
#nice p code, #nice li code, #nice blockquote code, #nice td code {
  font-family: 'SF Mono', Menlo, Consolas, 'PingFang SC', monospace;
  font-size: 0.86em;
  color: #1f3a5f;
  background: #f1f4f8;
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
  margin: 26px 0;
  padding: 14px 18px;
  border: none;
  background: #f3f6f9;
  border-radius: 2px;
}
#nice blockquote p, #nice blockquote li section {
  font-size: 14.5px;
  line-height: 1.8;
  color: #44546a;
  margin: 4px 0;
}

/* ========== 代码块（微信代码主题 + 高亮主题两种结构） ========== */
#nice .code-snippet__fix {
  background: #f7f9fb;
  border: 1px solid #e3e8ee;
  border-radius: 4px;
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
  background: #f7f9fb;
  border: 1px solid #e3e8ee;
  border-radius: 4px;
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
  color: #6b7a90;
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
#nice table tr th { background: none; font-weight: 700; }

#nice table { border-top: 2px solid #1f3a5f; border-bottom: 2px solid #1f3a5f; }
#nice table tr th {
  font-weight: 700;
  color: #1f3a5f;
  border-bottom: 1px solid #1f3a5f;
}

/* ========== 分隔线 ========== */
#nice hr {
  border: none;
  border-top: 3px double #c9d2de;
  height: 0;
  margin: 40px 0;
}

/* ========== 脚注 / 参考资料 ========== */
#nice .footnote-word {
  color: #1f3a5f;
  font-weight: 400;
}
#nice .footnote-ref {
  color: #1f3a5f;
  font-weight: 400;
  font-size: 11px;
}
#nice h3.footnotes-sep {
  display: block;
  font-family: inherit;
  font-size: 14px;
  color: #1f3a5f;
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
  color: #1f3a5f;
}
#nice .footnote-item p, #nice .footnote-num {
  font-size: 12px;
  line-height: 1.8;
  color: #7a8699;
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
