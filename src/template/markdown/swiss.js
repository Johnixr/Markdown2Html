export default `/* 03. 瑞士 — 国际主义网格：粗黑标题、红方块、拉引式引文 */

/* ========== 全局 ========== */
#nice {
  font-family: 'Helvetica Neue', Helvetica, Arial, 'PingFang SC', 'Microsoft YaHei', sans-serif;
  font-size: 15.5px;
  color: #1f1f1f;
  line-height: 1.8;
  letter-spacing: 0;
  padding: 0 8px;
  background: #ffffff;
  word-break: break-word;
  text-align: left;
}

/* 段落 */
#nice p {
  font-size: 15.5px;
  line-height: 1.8;
  color: #1f1f1f;
  margin: 20px 0;
  padding: 0;
  text-align: left;
}

/* 标题通用 */
#nice h1, #nice h2, #nice h3, #nice h4, #nice h5, #nice h6 {
  color: #111111;
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
  font-size: 30px;
  font-weight: 800;
  line-height: 1.2;
  letter-spacing: -0.02em;
  border-top: 6px solid #111111;
  padding-top: 14px;
  margin: 48px 0 24px;
}
#nice h2 {
  font-size: 22px;
  font-weight: 800;
  line-height: 1.3;
  letter-spacing: -0.01em;
  margin: 48px 0 16px;
}
#nice h2 .prefix {
  display: block;
  width: 14px;
  height: 14px;
  margin-bottom: 14px;
  background: #e3342f;
}
#nice h3 {
  font-size: 15px;
  font-weight: 700;
  letter-spacing: 0.06em;
  color: #e3342f;
  margin: 30px 0 8px;
}
#nice h4 {
  font-size: 15px;
  font-weight: 700;
  margin: 22px 0 6px;
}

/* ========== 行内 ========== */
#nice strong {
  font-weight: 700;
  color: #111111;
}
#nice em {
  font-style: italic;
  color: #1f1f1f;
}
#nice em strong, #nice strong em {
  color: #111111;
}
#nice del {
  color: #888888;
  text-decoration: line-through;
}
#nice a {
  color: #e3342f;
  font-weight: 400;
  text-decoration: none;
  border-bottom: none;
  word-wrap: break-word;
}
#nice p code, #nice li code, #nice blockquote code, #nice td code {
  font-family: 'SF Mono', Menlo, Consolas, 'PingFang SC', monospace;
  font-size: 0.86em;
  color: #e3342f;
  background: #f2f2f2;
  padding: 2px 5px;
  margin: 0 2px;
  border-radius: 0px;
  word-break: break-all;
}

/* ========== 列表 ========== */
#nice ul, #nice ol {
  margin: 20px 0;
  padding-left: 1.3em;
  color: #1f1f1f;
}
#nice ul { list-style-type: square; }
#nice ul ul { list-style-type: square; margin: 4px 0; }
#nice ol { list-style-type: decimal; }
#nice li section {
  font-size: 15.5px;
  line-height: 1.8;
  color: #1f1f1f;
  font-weight: 400;
  margin: 6px 0;
  text-align: left;
}

/* ========== 引用 ========== */
#nice blockquote {
  margin: 32px 0;
  padding: 14px 0 4px;
  border: none;
  border-top: 2px solid #111111;
  background: none;
}
#nice blockquote p, #nice blockquote li section {
  font-size: 18px;
  font-weight: 600;
  line-height: 1.6;
  color: #111111;
  margin: 6px 0;
}

/* ========== 代码块（微信代码主题 + 高亮主题两种结构） ========== */
#nice .code-snippet__fix {
  background: #f4f4f4;
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
  background: #f4f4f4;
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
  color: #666666;
  text-align: left;
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
  color: #1f1f1f;
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
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.06em;
  color: #111111;
  border-bottom: 2px solid #111111;
}
#nice table tr td { border-bottom: 1px solid #dddddd; }

/* ========== 分隔线 ========== */
#nice hr {
  border: none;
  height: 2px;
  margin: 44px 0;
  background: #111111;
}

/* ========== 脚注 / 参考资料 ========== */
#nice .footnote-word {
  color: #e3342f;
  font-weight: 400;
}
#nice .footnote-ref {
  color: #e3342f;
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
  color: #888888;
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
