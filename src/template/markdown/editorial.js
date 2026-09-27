export default `/* 01. 编辑部 — 黑白编辑式，琥珀细节，等宽黑底小标签 */

/* ========== 全局 ========== */
#nice {
  font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', sans-serif;
  font-size: 16px;
  color: #3d3d3d;
  line-height: 1.85;
  letter-spacing: 0.02em;
  padding: 0 8px;
  background: #ffffff;
  word-break: break-word;
  text-align: left;
}

/* 段落 */
#nice p {
  font-size: 16px;
  line-height: 1.85;
  color: #3d3d3d;
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
  font-size: 26px;
  font-weight: 900;
  line-height: 1.3;
  letter-spacing: -0.02em;
  margin: 48px 0 24px;
}
#nice h1 .suffix {
  display: block;
  width: 32px;
  height: 3px;
  margin-top: 16px;
  background: #c4a35a;
}
#nice h2 {
  font-size: 21px;
  font-weight: 800;
  line-height: 1.4;
  letter-spacing: -0.01em;
  margin: 48px 0 18px;
}
#nice h2 .prefix {
  display: block;
  width: 24px;
  height: 3px;
  margin-bottom: 14px;
  background: #c4a35a;
}
#nice h3 {
  display: inline-block;
  font-family: 'SF Mono', Menlo, Consolas, 'PingFang SC', monospace;
  font-size: 13px;
  font-weight: 600;
  line-height: 1.5;
  letter-spacing: 0.08em;
  color: #ffffff;
  background: #111111;
  padding: 3px 10px;
  border-radius: 3px;
  margin: 32px 0 6px;
}
#nice h4 {
  font-size: 16px;
  font-weight: 700;
  margin: 24px 0 8px;
}

/* ========== 行内 ========== */
#nice strong {
  font-weight: 700;
  color: #111111;
}
#nice em {
  font-style: italic;
  color: #3d3d3d;
}
#nice em strong, #nice strong em {
  color: #111111;
}
#nice del {
  color: #999999;
  text-decoration: line-through;
}
#nice a {
  color: #111111;
  font-weight: 400;
  text-decoration: none;
  border-bottom: 1px solid #c4a35a;
  word-wrap: break-word;
}
#nice p code, #nice li code, #nice blockquote code, #nice td code {
  font-family: 'SF Mono', Menlo, Consolas, 'PingFang SC', monospace;
  font-size: 0.86em;
  color: #333333;
  background: #f0f0ee;
  padding: 2px 5px;
  margin: 0 2px;
  border-radius: 3px;
  word-break: break-all;
}

/* ========== 列表 ========== */
#nice ul, #nice ol {
  margin: 20px 0;
  padding-left: 1.3em;
  color: #3d3d3d;
}
#nice ul { list-style-type: disc; }
#nice ul ul { list-style-type: circle; margin: 4px 0; }
#nice ol { list-style-type: decimal; }
#nice li section {
  font-size: 16px;
  line-height: 1.85;
  color: #3d3d3d;
  font-weight: 400;
  margin: 6px 0;
  text-align: left;
}

/* ========== 引用 ========== */
#nice blockquote {
  margin: 28px 0;
  padding: 14px 20px 16px;
  border: none;
  background: #f5f5f3;
  border-radius: 6px;
  color: #555555;
  font-size: 15px;
}
#nice blockquote::before {
  content: "“";
  display: block;
  height: 22px;
  font-family: Georgia, serif;
  font-size: 40px;
  line-height: 1;
  color: #c4a35a;
}
#nice blockquote p, #nice blockquote li section {
  font-size: 15px;
  line-height: 1.8;
  color: #555555;
  margin: 6px 0;
}

/* ========== 代码块（微信代码主题 + 高亮主题两种结构） ========== */
#nice .code-snippet__fix {
  background: #f6f6f4;
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
  background: #f6f6f4;
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
  color: #3d3d3d;
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
  background: #111111;
  color: #ffffff;
  font-size: 12.5px;
  font-weight: 600;
  letter-spacing: 0.04em;
}
#nice table tr td { border-bottom: 1px solid #ececea; }

/* ========== 分隔线 ========== */
#nice hr {
  border: none;
  height: 1px;
  width: 48px;
  margin: 44px auto;
  background: #c4a35a;
}

/* ========== 脚注 / 参考资料 ========== */
#nice .footnote-word {
  color: #111111;
  font-weight: 400;
}
#nice .footnote-ref {
  color: #c4a35a;
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
  color: #999999;
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
