export default `/* 07. 工程笔记 — 等宽标题带井号前缀，GitHub 式卡片与网格表 */

/* ========== 全局 ========== */
#nice {
  font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', sans-serif;
  font-size: 15.5px;
  color: #24292f;
  line-height: 1.8;
  letter-spacing: 0.01em;
  padding: 0 8px;
  background: #ffffff;
  word-break: break-word;
  text-align: left;
}

/* 段落 */
#nice p {
  font-size: 15.5px;
  line-height: 1.8;
  color: #24292f;
  margin: 20px 0;
  padding: 0;
  text-align: left;
}

/* 标题通用 */
#nice h1, #nice h2, #nice h3, #nice h4, #nice h5, #nice h6 {
  color: #1f2328;
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
  font-family: 'SF Mono', Menlo, Consolas, 'PingFang SC', monospace;
  font-size: 22px;
  font-weight: 700;
  line-height: 1.4;
  margin: 44px 0 20px;
}
#nice h1 .prefix { display: inline; }
#nice h1 .prefix::before { content: "# "; color: #1a7f37; }
#nice h2 {
  font-family: 'SF Mono', Menlo, Consolas, 'PingFang SC', monospace;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.5;
  border-bottom: 1px dashed #d0d7de;
  padding-bottom: 8px;
  margin: 40px 0 16px;
}
#nice h2 .prefix { display: inline; }
#nice h2 .prefix::before { content: "## "; color: #1a7f37; }
#nice h3 {
  font-family: 'SF Mono', Menlo, Consolas, 'PingFang SC', monospace;
  font-size: 15.5px;
  font-weight: 700;
  margin: 28px 0 10px;
}
#nice h3 .prefix { display: inline; }
#nice h3 .prefix::before { content: "### "; color: #8c959f; }
#nice h4 {
  font-family: 'SF Mono', Menlo, Consolas, 'PingFang SC', monospace;
  font-size: 14.5px;
  font-weight: 700;
  margin: 22px 0 6px;
}

/* ========== 行内 ========== */
#nice strong {
  font-weight: 700;
  color: #1f2328;
}
#nice em {
  font-style: italic;
  color: #24292f;
}
#nice em strong, #nice strong em {
  color: #1f2328;
}
#nice del {
  color: #6e7781;
  text-decoration: line-through;
}
#nice a {
  color: #1a7f37;
  font-weight: 400;
  text-decoration: none;
  border-bottom: 1px dotted #1a7f37;
  word-wrap: break-word;
}
#nice p code, #nice li code, #nice blockquote code, #nice td code {
  font-family: 'SF Mono', Menlo, Consolas, 'PingFang SC', monospace;
  font-size: 0.86em;
  color: #1a7f37;
  background: #eef6f0;
  padding: 2px 5px;
  margin: 0 2px;
  border-radius: 4px;
  word-break: break-all;
}

/* ========== 列表 ========== */
#nice ul, #nice ol {
  margin: 20px 0;
  padding-left: 1.3em;
  color: #24292f;
}
#nice ul { list-style-type: disc; }
#nice ul ul { list-style-type: circle; margin: 4px 0; }
#nice ol { list-style-type: decimal; }
#nice li section {
  font-size: 15.5px;
  line-height: 1.8;
  color: #24292f;
  font-weight: 400;
  margin: 6px 0;
  text-align: left;
}

/* ========== 引用 ========== */
#nice blockquote {
  margin: 24px 0;
  padding: 12px 16px;
  border: 1px dashed #c9d1d9;
  background: #fbfcfd;
  border-radius: 6px;
}
#nice blockquote p, #nice blockquote li section {
  font-size: 14.5px;
  line-height: 1.75;
  color: #57606a;
  margin: 4px 0;
}

/* ========== 代码块（微信代码主题 + 高亮主题两种结构） ========== */
#nice .code-snippet__fix {
  background: #f6f8fa;
  border: 1px solid #e1e4e8;
  border-radius: 6px;
  margin: 24px 0;
  font-size: 13px;
  line-height: 1.7;
  color: #24292f;
}
#nice .code-snippet__fix .code-snippet__line-index li::before {
  color: #bbbbbb;
}
#nice .code-snippet__fix pre, #nice .code-snippet__fix code {
  font-family: 'SF Mono', Menlo, Consolas, 'PingFang SC', monospace;
  color: #24292f;
}
#nice pre.custom {
  background: #f6f8fa;
  border: 1px solid #e1e4e8;
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
  color: #24292f;
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
  color: #6e7781;
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
  color: #24292f;
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

#nice table tr th, #nice table tr td { border: 1px solid #e1e4e8; }
#nice table tr th {
  background: #f6f8fa;
  font-family: 'SF Mono', Menlo, Consolas, 'PingFang SC', monospace;
  font-size: 12.5px;
  font-weight: 700;
  color: #57606a;
}

/* ========== 分隔线 ========== */
#nice hr {
  border: none;
  border-top: 1px dashed #d0d7de;
  height: 0;
  margin: 40px 0;
}

/* ========== 脚注 / 参考资料 ========== */
#nice .footnote-word {
  color: #1a7f37;
  font-weight: 400;
}
#nice .footnote-ref {
  color: #1a7f37;
  font-weight: 400;
  font-size: 11px;
}
#nice h3.footnotes-sep {
  display: block;
  font-family: inherit;
  font-size: 14px;
  color: #1f2328;
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
  color: #1f2328;
}
#nice .footnote-item p, #nice .footnote-num {
  font-size: 12px;
  line-height: 1.8;
  color: #6e7781;
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
