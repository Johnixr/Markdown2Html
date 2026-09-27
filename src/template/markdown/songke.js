export default `/* 02. 宋刻 — 书卷气：宋体正文，楷体引文，朱砂批注色 */

/* ========== 全局 ========== */
#nice {
  font-family: 'Songti SC', 'Noto Serif SC', 'Source Han Serif SC', STSong, Georgia, serif;
  font-size: 16px;
  color: #2b2b2b;
  line-height: 1.95;
  letter-spacing: 0.04em;
  padding: 0 8px;
  background: #ffffff;
  word-break: break-word;
  text-align: justify;
}

/* 段落 */
#nice p {
  font-size: 16px;
  line-height: 1.95;
  color: #2b2b2b;
  margin: 20px 0;
  padding: 0;
  text-align: justify;
}

/* 标题通用 */
#nice h1, #nice h2, #nice h3, #nice h4, #nice h5, #nice h6 {
  color: #1f1f1f;
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
  font-size: 24px;
  font-weight: 700;
  line-height: 1.5;
  letter-spacing: 0.12em;
  text-align: center;
  margin: 52px 0 32px;
}
#nice h1 .suffix {
  display: block;
  width: 36px;
  height: 1px;
  margin: 18px auto 0;
  background: #a33a2c;
}
#nice h2 {
  font-size: 19px;
  font-weight: 700;
  line-height: 1.6;
  letter-spacing: 0.16em;
  text-align: center;
  margin: 52px 0 26px;
}
#nice h2 .suffix {
  display: block;
  width: 6px;
  height: 6px;
  margin: 14px auto 0;
  background: #a33a2c;
}
#nice h3 {
  font-size: 17px;
  font-weight: 700;
  letter-spacing: 0.06em;
  color: #a33a2c;
  margin: 34px 0 12px;
}
#nice h4 {
  font-size: 16px;
  font-weight: 700;
  margin: 24px 0 8px;
}

/* ========== 行内 ========== */
#nice strong {
  font-weight: 700;
  color: #a33a2c;
}
#nice em {
  font-style: normal;
  color: #5a524c;
  font-family: 'Kaiti SC', STKaiti, KaiTi, 'Songti SC', serif;
}
#nice em strong, #nice strong em {
  color: #a33a2c;
}
#nice del {
  color: #8c8279;
  text-decoration: line-through;
}
#nice a {
  color: #a33a2c;
  font-weight: 400;
  text-decoration: none;
  border-bottom: 1px solid #e3c5bf;
  word-wrap: break-word;
}
#nice p code, #nice li code, #nice blockquote code, #nice td code {
  font-family: 'SF Mono', Menlo, Consolas, 'PingFang SC', monospace;
  font-size: 0.86em;
  color: #7a4a3a;
  background: #f6f2ec;
  padding: 2px 5px;
  margin: 0 2px;
  border-radius: 3px;
  word-break: break-all;
}

/* ========== 列表 ========== */
#nice ul, #nice ol {
  margin: 20px 0;
  padding-left: 1.3em;
  color: #2b2b2b;
}
#nice ul { list-style-type: disc; }
#nice ul ul { list-style-type: circle; margin: 4px 0; }
#nice ol { list-style-type: decimal; }
#nice li section {
  font-size: 16px;
  line-height: 1.95;
  color: #2b2b2b;
  font-weight: 400;
  margin: 6px 0;
  text-align: left;
}

/* ========== 引用 ========== */
#nice blockquote {
  margin: 30px 0;
  padding: 18px 12px;
  border: none;
  border-top: 1px solid #e6ddd0;
  border-bottom: 1px solid #e6ddd0;
  background: none;
  font-family: 'Kaiti SC', STKaiti, KaiTi, 'Songti SC', serif;
  color: #5a524c;
}
#nice blockquote p, #nice blockquote li section {
  font-family: 'Kaiti SC', STKaiti, KaiTi, 'Songti SC', serif;
  font-size: 16px;
  line-height: 1.9;
  color: #5a524c;
  margin: 6px 0;
}

/* ========== 代码块（微信代码主题 + 高亮主题两种结构） ========== */
#nice .code-snippet__fix {
  background: #faf8f4;
  border: 1px solid #eee7dc;
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
  background: #faf8f4;
  border: 1px solid #eee7dc;
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
  color: #8c8279;
  text-align: center;
  letter-spacing: 0.04em;
  font-family: 'Kaiti SC', STKaiti, KaiTi, 'Songti SC', serif;
}

/* ========== 表格 ========== */
#nice .table-container { overflow-x: auto; margin: 24px 0; }
#nice table {
  display: table;
  width: 100%;
  border-collapse: collapse;
  font-size: 13.5px;
  line-height: 1.6;
  color: #2b2b2b;
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
  font-weight: 700;
  color: #1f1f1f;
  border-bottom: 1px solid #2b2b2b;
  border-top: 1px solid #2b2b2b;
}
#nice table tr td { border-bottom: 1px solid #eee7dc; }

/* ========== 分隔线 ========== */
#nice hr {
  border: none;
  height: 1px;
  width: 30%;
  margin: 48px auto;
  background: #d8cdbd;
}

/* ========== 脚注 / 参考资料 ========== */
#nice .footnote-word {
  color: #a33a2c;
  font-weight: 400;
}
#nice .footnote-ref {
  color: #a33a2c;
  font-weight: 400;
  font-size: 11px;
}
#nice h3.footnotes-sep {
  display: block;
  font-family: inherit;
  font-size: 14px;
  color: #1f1f1f;
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
  color: #1f1f1f;
}
#nice .footnote-item p, #nice .footnote-num {
  font-size: 12px;
  line-height: 1.8;
  color: #8c8279;
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
