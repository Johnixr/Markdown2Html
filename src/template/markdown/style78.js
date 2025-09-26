export default `/* 复古打字机 - style-78-vintage-typewriter.css */

/* Style 78: 复古打字机 - Vintage Typewriter */

/* 全局属性 */
#nice {
  font-family: 'Courier Prime', 'Courier', monospace;
  color: #2a2a2a;
  background: #f5f2e8;
  background-image:
    repeating-linear-gradient(
      0deg,
      transparent,
      transparent 20px,
      rgba(0, 0, 0, 0.05) 20px,
      rgba(0, 0, 0, 0.05) 21px
    );
  font-size: 15px;
  line-height: 2;
  padding: 60px 60px;
  max-width: 650px;
  margin: 0 auto;
}

/* 段落 */
#nice p {
  font-size: 15px;
  line-height: 2;
  color: #2a2a2a;
  margin: 20px 0;
  text-align: justify;
}

/* 一级标题 */
#nice h1 {
  font-size: 24px;
  font-weight: 700;
  margin: 40px 0 30px 0;
  color: #000000;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  padding: 20px 0;
  border-top: 3px double #000000;
  border-bottom: 3px double #000000;
}

/* 二级标题 */
#nice h2 {
  font-size: 18px;
  font-weight: 700;
  margin: 30px 0 20px 0;
  color: #000000;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  text-decoration: underline;
  text-underline-offset: 4px;
}

/* 三级标题 */
#nice h3 {
  font-size: 15px;
  font-weight: 700;
  margin: 20px 0 12px 0;
  color: #2a2a2a;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

/* 引用 */
#nice blockquote {
  margin: 24px 40px;
  padding: 0;
  font-style: italic;
  position: relative;
}

#nice blockquote:before,
#nice blockquote:after {
  content: '"';
  position: absolute;
  font-size: 32px;
  color: #999;
}

#nice blockquote:before {
  left: -20px;
  top: -10px;
}

#nice blockquote:after {
  right: -20px;
  bottom: -20px;
}

#nice blockquote p {
  color: #4a4a4a;
  margin: 8px 0;
}

/* 链接 */
#nice a {
  color: #000000;
  text-decoration: underline;
  text-underline-offset: 2px;
  transition: all 0.2s;
}

#nice a:hover {
  background: #2a2a2a;
  color: #f5f2e8;
}

/* 加粗 */
#nice strong {
  font-weight: 700;
  color: #000000;
  text-decoration: underline;
  text-decoration-style: double;
  text-underline-offset: 2px;
}

/* 代码块 */
#nice pre {
  margin: 24px 0;
  background: #2a2a2a;
  color: #f5f2e8;
  padding: 20px;
  font-family: 'Courier Prime', monospace;
  font-size: 13px;
  line-height: 1.8;
  border: 1px solid #000000;
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.3);
}`;
