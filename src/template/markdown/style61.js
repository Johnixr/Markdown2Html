export default `/* 法式优雅 - style-61-french-elegance.css */

/* Style 61: 法式优雅 - French Elegance */

/* 全局属性 */
#nice {
  font-family: 'Didot', 'Bodoni MT', serif;
  color: #2c2c2c;
  background: #fdfbf7;
  font-size: 15px;
  line-height: 1.75;
  padding: 64px 48px;
  max-width: 680px;
  margin: 0 auto;
}

/* 段落 */
#nice p {
  font-size: 15px;
  line-height: 1.75;
  color: #3a3a3a;
  margin: 16px 0;
  letter-spacing: 0.02em;
}

/* 一级标题 */
#nice h1 {
  font-size: 36px;
  font-weight: 300;
  margin: 52px 0 32px 0;
  color: #1a1a1a;
  text-align: center;
  letter-spacing: 0.08em;
  position: relative;
  padding: 20px 0;
}

#nice h1:before,
#nice h1:after {
  content: '·';
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  color: #8b7355;
  font-size: 24px;
}

#nice h1:before {
  left: -30px;
}

#nice h1:after {
  right: -30px;
}

/* 二级标题 */
#nice h2 {
  font-size: 22px;
  font-weight: 400;
  margin: 32px 0 20px 0;
  color: #8b7355;
  text-align: center;
  font-style: italic;
}

/* 三级标题 */
#nice h3 {
  font-size: 17px;
  font-weight: 400;
  margin: 24px 0 14px 0;
  color: #2c2c2c;
  padding-bottom: 6px;
  border-bottom: 1px solid #e0d5c7;
}

/* 引用 */
#nice blockquote {
  margin: 28px 32px;
  padding: 16px 0;
  border-left: 2px solid #8b7355;
  padding-left: 24px;
}

#nice blockquote p {
  color: #5a5a5a;
  margin: 8px 0;
  font-style: italic;
}

/* 链接 */
#nice a {
  color: #8b7355;
  text-decoration: none;
  transition: all 0.3s;
}

#nice a:hover {
  color: #6b5a45;
  text-decoration: underline;
}

/* 加粗 */
#nice strong {
  font-weight: 600;
  color: #1a1a1a;
  background: #f5f0e8;
  padding: 2px 8px;
  margin: 0 2px;
}

/* 代码块 */
#nice pre {
  margin: 28px 0;
  background: #2c2c2c;
  color: #e0d5c7;
  padding: 24px;
  font-family: 'Monaco', monospace;
  font-size: 13px;
  line-height: 1.6;
}`;
