export default `/* 墨水印刷 - style-57-ink-print.css */

/* Style 57: 墨水印刷 - Ink Print */

/* 全局属性 */
#nice {
  font-family: 'Garamond', 'Georgia', serif;
  color: #1a1a1a;
  background: #fffef9;
  font-size: 15px;
  line-height: 1.75;
  padding: 72px 48px;
  max-width: 680px;
  margin: 0 auto;
}

/* 段落 */
#nice p {
  font-size: 15px;
  line-height: 1.75;
  color: #2a2a2a;
  margin: 18px 0;
  text-align: justify;
  text-indent: 2em;
}

/* 一级标题 */
#nice h1 {
  font-size: 36px;
  font-weight: 400;
  margin: 48px 0 32px 0;
  color: #000000;
  text-align: center;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  border-top: 2px solid #000000;
  border-bottom: 2px solid #000000;
  padding: 16px 0;
}

/* 二级标题 */
#nice h2 {
  font-size: 22px;
  font-weight: 400;
  margin: 32px 0 20px 0;
  color: #000000;
  position: relative;
  padding-left: 32px;
}

#nice h2:before {
  content: '§';
  position: absolute;
  left: 0;
  font-size: 24px;
}

/* 三级标题 */
#nice h3 {
  font-size: 17px;
  font-weight: 400;
  margin: 24px 0 14px 0;
  color: #1a1a1a;
  font-style: italic;
  border-bottom: 1px solid #d0d0d0;
  padding-bottom: 6px;
}

/* 引用 */
#nice blockquote {
  margin: 28px 40px;
  padding: 16px 0;
  border-top: 1px solid #000000;
  border-bottom: 1px solid #000000;
}

#nice blockquote p {
  color: #3a3a3a;
  margin: 8px 0;
  font-style: italic;
  text-indent: 0;
  text-align: center;
}

/* 链接 */
#nice a {
  color: #1a1a1a;
  text-decoration: none;
  border-bottom: 1px dotted #666666;
  transition: all 0.2s;
}

#nice a:hover {
  border-bottom: 1px solid #000000;
}

/* 加粗 */
#nice strong {
  font-weight: 700;
  color: #000000;
  background: #f0f0f0;
  padding: 1px 6px;
  margin: 0 2px;
}

/* 代码块 */
#nice pre {
  margin: 28px 0;
  background: #1a1a1a;
  color: #f0f0f0;
  padding: 24px 28px;
  font-family: 'Courier', monospace;
  font-size: 12px;
  line-height: 1.6;
  border: 1px solid #000000;
}`;
