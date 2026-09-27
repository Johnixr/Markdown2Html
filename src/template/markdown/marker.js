export default `/* 06. 荧光笔 — 一支黄色马克笔：标题与加粗半高划线 */

/* ========== 全局 ========== */
#nice {
  font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', sans-serif;
  font-size: 16px;
  color: #2d2d2d;
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
  color: #2d2d2d;
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
  line-height: 1.4;
  margin: 44px 0 22px;
}
#nice h1 .content {
  background: linear-gradient(180deg, rgba(255,255,255,0) 55%, #ffe066 55%);
  padding: 0 4px;
}
#nice h2 {
  font-size: 20px;
  font-weight: 800;
  line-height: 1.5;
  margin: 44px 0 18px;
}
#nice h2 .content {
  background: linear-gradient(180deg, rgba(255,255,255,0) 58%, #ffe066 58%);
  padding: 0 4px;
}
#nice h3 {
  font-size: 16px;
  font-weight: 700;
  margin: 30px 0 10px;
}
#nice h3 .prefix {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #ffe066;
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
  color: #111111;
  background: linear-gradient(180deg, rgba(255,255,255,0) 60%, #fff0a0 60%);
  padding: 0 2px;
}
#nice em {
  font-style: italic;
  color: #2d2d2d;
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
  border-bottom: 2px solid #ffe066;
  word-wrap: break-word;
}
#nice p code, #nice li code, #nice blockquote code, #nice td code {
  font-family: 'SF Mono', Menlo, Consolas, 'PingFang SC', monospace;
  font-size: 0.86em;
  color: #333333;
  background: #f3f3f1;
  padding: 2px 5px;
  margin: 0 2px;
  border-radius: 3px;
  word-break: break-all;
}

/* ========== 列表 ========== */
#nice ul, #nice ol {
  margin: 20px 0;
  padding-left: 1.3em;
  color: #2d2d2d;
}
#nice ul { list-style-type: disc; }
#nice ul ul { list-style-type: circle; margin: 4px 0; }
#nice ol { list-style-type: decimal; }
#nice li section {
  font-size: 16px;
  line-height: 1.85;
  color: #2d2d2d;
  font-weight: 400;
  margin: 6px 0;
  text-align: left;
}

/* ========== 引用 ========== */
#nice blockquote {
  margin: 26px 0;
  padding: 14px 18px;
  border: none;
  background: #f7f7f5;
  border-radius: 4px;
}
#nice blockquote p, #nice blockquote li section {
  font-size: 15px;
  line-height: 1.8;
  color: #555555;
  margin: 4px 0;
}

/* ========== 代码块（微信代码主题 + 高亮主题两种结构） ========== */
#nice .code-snippet__fix {
  background: #fafaf8;
  border: 1px solid #eeeeea;
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
  background: #fafaf8;
  border: 1px solid #eeeeea;
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
  border-radius: 4px;
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
  color: #2d2d2d;
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
  background: #fff4bf;
  color: #111111;
  font-weight: 700;
}
#nice table tr td { border-bottom: 1px solid #eeeeea; }

/* ========== 分隔线 ========== */
#nice hr {
  border: none;
  border-top: 1px dashed #cccccc;
  height: 0;
  margin: 40px 0;
}

/* ========== 脚注 / 参考资料 ========== */
#nice .footnote-word {
  color: #111111;
  font-weight: 400;
}
#nice .footnote-ref {
  color: #d4a800;
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
