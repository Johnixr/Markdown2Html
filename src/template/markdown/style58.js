export default `/* 现代编辑 - style-58-modern-editorial.css */

/* Style 58: 现代编辑 - Modern Editorial */

/* 全局属性 */
#nice {
  font-family: 'Charter', 'Georgia', serif;
  color: #333333;
  background: #ffffff;
  font-size: 15px;
  line-height: 1.7;
  padding: 60px 40px;
  max-width: 740px;
  margin: 0 auto;
}

/* 段落 */
#nice p {
  font-size: 15px;
  line-height: 1.7;
  color: #444444;
  margin: 16px 0;
}

/* 一级标题 */
#nice h1 {
  font-size: 38px;
  font-weight: 700;
  margin: 48px 0 32px 0;
  color: #111111;
  letter-spacing: -0.02em;
  position: relative;
}

#nice h1:after {
  content: '';
  display: block;
  width: 100px;
  height: 4px;
  background: #ff6b6b;
  margin-top: 16px;
}

/* 二级标题 */
#nice h2 {
  font-size: 24px;
  font-weight: 600;
  margin: 32px 0 20px 0;
  color: #222222;
  position: relative;
  padding-top: 8px;
}

#nice h2:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 30px;
  height: 2px;
  background: #ff6b6b;
}

/* 三级标题 */
#nice h3 {
  font-size: 18px;
  font-weight: 500;
  margin: 24px 0 14px 0;
  color: #333333;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-size: 16px;
}

/* 引用 */
#nice blockquote {
  margin: 28px 0;
  padding: 0 0 0 24px;
  border-left: 3px solid #ff6b6b;
}

#nice blockquote p {
  color: #666666;
  margin: 8px 0;
  font-size: 17px;
  line-height: 1.6;
  font-style: italic;
}

/* 链接 */
#nice a {
  color: #ff6b6b;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.2s;
}

#nice a:hover {
  color: #ff5252;
  text-decoration: underline;
}

/* 加粗 */
#nice strong {
  font-weight: 700;
  color: #111111;
  background: #ffebee;
  padding: 2px 6px;
  margin: 0 1px;
}

/* 代码块 */
#nice pre {
  margin: 28px 0;
  background: #f8f9fa;
  color: #333333;
  padding: 24px;
  font-family: 'SF Mono', monospace;
  font-size: 13px;
  line-height: 1.6;
  border-left: 3px solid #ff6b6b;
}`;
