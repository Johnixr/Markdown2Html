export default `/* 05. 松石 — 墨绿色带章节头、圆点小标题、柔和卡片 */

/* ========== 全局 ========== */
#nice {
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

/* 段落 */
#nice p {
  font-size: 16px;
  line-height: 1.85;
  color: #333333;
  margin: 20px 0;
  padding: 0;
  text-align: left;
}

/* 标题通用 */
#nice h1, #nice h2, #nice h3, #nice h4, #nice h5, #nice h6 {
  color: #1f4d3d;
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
  font-size: 25px;
  font-weight: 800;
  line-height: 1.35;
  margin: 44px 0 22px;
}
#nice h2 {
  font-size: 18px;
  font-weight: 700;
  line-height: 1.5;
  background: #edf4f0;
  border-radius: 6px;
  padding: 10px 14px;
  margin: 44px 0 18px;
}
#nice h3 {
  font-size: 16px;
  font-weight: 700;
  color: #2f6b55;
  margin: 30px 0 10px;
}
#nice h3 .prefix {
  display: inline-block;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #2f6b55;
  margin-right: 8px;
  vertical-align: middle;
}
#nice h4 {
  font-size: 15px;
  font-weight: 700;
  margin: 22px 0 6px;
}

/* ========== 行内 ========== */
#nice strong {
  font-weight: 700;
  color: #1f4d3d;
}
#nice em {
  font-style: italic;
  color: #333333;
}
#nice em strong, #nice strong em {
  color: #1f4d3d;
}
#nice del {
  color: #8a9a92;
  text-decoration: line-through;
}
#nice a {
  color: #2f6b55;
  font-weight: 400;
  text-decoration: none;
  border-bottom: 1px solid #b9d3c6;
  word-wrap: break-word;
}
#nice p code, #nice li code, #nice blockquote code, #nice td code {
  font-family: 'SF Mono', Menlo, Consolas, 'PingFang SC', monospace;
  font-size: 0.86em;
  color: #2f6b55;
  background: #edf4f0;
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
  margin: 26px 0;
  padding: 14px 18px;
  border: 1px solid #dbe8e1;
  background: #f7faf8;
  border-radius: 8px;
}
#nice blockquote p, #nice blockquote li section {
  font-size: 15px;
  line-height: 1.8;
  color: #4a5a52;
  margin: 4px 0;
}

/* ========== 代码块（微信代码主题 + 高亮主题两种结构） ========== */
#nice .code-snippet__fix {
  background: #f6f9f7;
  border: 1px solid #e3ede7;
  border-radius: 8px;
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
  background: #f6f9f7;
  border: 1px solid #e3ede7;
  border-radius: 8px;
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
  border-radius: 8px;
}
#nice figcaption {
  margin-top: 10px;
  font-size: 12.5px;
  line-height: 1.6;
  color: #8a9a92;
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

#nice table tr th {
  background: #edf4f0;
  color: #1f4d3d;
  font-weight: 700;
}
#nice table tr td { border-bottom: 1px solid #e5eee9; }

/* ========== 分隔线 ========== */
#nice hr {
  border: none;
  height: 1px;
  margin: 40px 0;
  background: #dbe8e1;
}

/* ========== 脚注 / 参考资料 ========== */
#nice .footnote-word {
  color: #2f6b55;
  font-weight: 400;
}
#nice .footnote-ref {
  color: #2f6b55;
  font-weight: 400;
  font-size: 11px;
}
#nice h3.footnotes-sep {
  display: block;
  font-family: inherit;
  font-size: 14px;
  color: #1f4d3d;
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
  color: #1f4d3d;
}
#nice .footnote-item p, #nice .footnote-num {
  font-size: 12px;
  line-height: 1.8;
  color: #8a9a92;
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
