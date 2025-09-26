export default `/* 英伦古典 - style-63-british-classic.css */

/* Style 63: 英伦古典 - British Classic */

/* 全局属性 */
#nice {
  font-family: 'Baskerville', 'Georgia', serif;
  color: #2c2c2c;
  background: #f9f7f4;
  background-image:
    repeating-linear-gradient(
      90deg,
      transparent,
      transparent 100px,
      rgba(139, 69, 19, 0.03) 100px,
      rgba(139, 69, 19, 0.03) 101px
    );
  font-size: 15px;
  line-height: 1.75;
  padding: 60px 48px;
  max-width: 720px;
  margin: 0 auto;
}

/* 段落 */
#nice p {
  font-size: 15px;
  line-height: 1.75;
  color: #3a3a3a;
  margin: 16px 0;
  letter-spacing: 0.01em;
}

/* 一级标题 */
#nice h1 {
  font-size: 38px;
  font-weight: 400;
  margin: 52px 0 32px 0;
  color: #1a1a1a;
  text-align: center;
  letter-spacing: 0.06em;
  border-top: 3px double #8b4513;
  border-bottom: 3px double #8b4513;
  padding: 20px 0;
  text-transform: uppercase;
}

/* 二级标题 */
#nice h2 {
  font-size: 24px;
  font-weight: 600;
  margin: 32px 0 20px 0;
  color: #8b4513;
  position: relative;
  padding-left: 36px;
}

#nice h2:before {
  content: '❦';
  position: absolute;
  left: 0;
  font-size: 28px;
  top: -2px;
}

/* 三级标题 */
#nice h3 {
  font-size: 18px;
  font-weight: 500;
  margin: 24px 0 14px 0;
  color: #4a4a4a;
  font-variant: small-caps;
  letter-spacing: 0.08em;
}

/* 引用 */
#nice blockquote {
  margin: 28px 20px;
  padding: 16px 24px;
  background: #ffffff;
  border-left: 4px solid #8b4513;
  box-shadow: 0 2px 8px rgba(139, 69, 19, 0.08);
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
  border-bottom: 1px dotted #8b4513;
  transition: all 0.3s;
}

#nice a:hover {
  border-bottom: 1px solid #8b4513;
}

/* 加粗 */
#nice strong {
  font-weight: 700;
  color: #1a1a1a;
  background: #f0e6d2;
  padding: 2px 8px;
  margin: 0 2px;
}

/* 代码块 */
#nice pre {
  margin: 28px 0;
  background: #2c2c2c;
  color: #f5f5f5;
  padding: 24px;
  font-family: 'Courier', monospace;
  font-size: 13px;
  line-height: 1.6;
  border: 1px solid #8b4513;
}`;
