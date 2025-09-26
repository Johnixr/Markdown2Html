export default `/* 德式严谨 - style-64-german-precision.css */

/* Style 64: 德式严谨 - German Precision */

/* 全局属性 */
#nice {
  font-family: 'DIN', 'Arial', sans-serif;
  color: #1a1a1a;
  background: #fafafa;
  background-image:
    repeating-linear-gradient(
      0deg,
      transparent,
      transparent 40px,
      rgba(0, 0, 0, 0.02) 40px,
      rgba(0, 0, 0, 0.02) 41px
    );
  font-size: 15px;
  line-height: 1.6;
  padding: 48px 40px;
  max-width: 760px;
  margin: 0 auto;
}

/* 段落 */
#nice p {
  font-size: 15px;
  line-height: 1.6;
  color: #2a2a2a;
  margin: 14px 0;
  letter-spacing: 0.01em;
}

/* 一级标题 */
#nice h1 {
  font-size: 36px;
  font-weight: 700;
  margin: 48px 0 32px 0;
  color: #000000;
  letter-spacing: -0.02em;
  padding-bottom: 8px;
  border-bottom: 4px solid #000000;
}

/* 二级标题 */
#nice h2 {
  font-size: 22px;
  font-weight: 700;
  margin: 32px 0 20px 0;
  color: #ffffff;
  background: #333333;
  padding: 10px 20px;
  display: inline-block;
}

/* 三级标题 */
#nice h3 {
  font-size: 16px;
  font-weight: 600;
  margin: 24px 0 12px 0;
  color: #333333;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

/* 引用 */
#nice blockquote {
  margin: 24px 0;
  padding: 16px 20px;
  background: #f5f5f5;
  border-left: 4px solid #333333;
}

#nice blockquote p {
  color: #4a4a4a;
  margin: 8px 0;
}

/* 链接 */
#nice a {
  color: #000000;
  text-decoration: none;
  font-weight: 600;
  border-bottom: 2px solid #cccccc;
  transition: all 0.2s;
}

#nice a:hover {
  border-bottom-color: #000000;
}

/* 加粗 */
#nice strong {
  font-weight: 900;
  color: #ffffff;
  background: #000000;
  padding: 2px 8px;
  margin: 0 1px;
}

/* 代码块 */
#nice pre {
  margin: 24px 0;
  background: #1a1a1a;
  color: #f0f0f0;
  padding: 24px;
  font-family: 'Monaco', monospace;
  font-size: 13px;
  line-height: 1.5;
}`;
