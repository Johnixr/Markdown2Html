export default `/* 意式精致 - style-62-italian-refined.css */

/* Style 62: 意式精致 - Italian Refinement */

/* 全局属性 */
#nice {
  font-family: 'Palatino', 'Book Antiqua', serif;
  color: #3c3c3c;
  background: #faf9f7;
  font-size: 15px;
  line-height: 1.7;
  padding: 56px 44px;
  max-width: 700px;
  margin: 0 auto;
}

/* 段落 */
#nice p {
  font-size: 15px;
  line-height: 1.7;
  color: #4a4a4a;
  margin: 16px 0;
  letter-spacing: 0.01em;
}

/* 一级标题 */
#nice h1 {
  font-size: 34px;
  font-weight: 400;
  margin: 48px 0 32px 0;
  color: #8b4513;
  text-align: center;
  font-variant: small-caps;
  letter-spacing: 0.12em;
  border-bottom: 2px double #8b4513;
  padding-bottom: 12px;
}

/* 二级标题 */
#nice h2 {
  font-size: 22px;
  font-weight: 500;
  margin: 32px 0 20px 0;
  color: #704214;
  position: relative;
  padding-left: 24px;
}

#nice h2:before {
  content: '◈';
  position: absolute;
  left: 0;
  color: #daa520;
}

/* 三级标题 */
#nice h3 {
  font-size: 17px;
  font-weight: 500;
  margin: 24px 0 14px 0;
  color: #5a5a5a;
  font-style: italic;
}

/* 引用 */
#nice blockquote {
  margin: 24px 0;
  padding: 16px 24px;
  background: #ffffff;
  border: 1px solid #daa520;
}

#nice blockquote p {
  color: #5a5a5a;
  margin: 8px 0;
  font-style: italic;
}

/* 链接 */
#nice a {
  color: #8b4513;
  text-decoration: none;
  border-bottom: 1px solid #daa520;
  transition: all 0.2s;
}

#nice a:hover {
  color: #704214;
  border-bottom-width: 2px;
}

/* 加粗 */
#nice strong {
  font-weight: 600;
  color: #ffffff;
  background: #8b4513;
  padding: 2px 8px;
  margin: 0 2px;
}

/* 代码块 */
#nice pre {
  margin: 24px 0;
  background: #3c3c3c;
  color: #f5f5f5;
  padding: 24px;
  font-family: 'Consolas', monospace;
  font-size: 13px;
  line-height: 1.6;
  border-left: 3px solid #daa520;
}`;
