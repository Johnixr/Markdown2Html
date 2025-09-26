export default `/* 纸张质感 - style-71-paper-texture.css */

/* Style 71: 纸张质感 - Paper Texture */

/* 全局属性 */
#nice {
  font-family: 'Crimson Text', 'Georgia', serif;
  color: #3a3a3a;
  background: #fefef8;
  background-image:
    repeating-linear-gradient(
      45deg,
      transparent,
      transparent 10px,
      rgba(139, 90, 43, 0.01) 10px,
      rgba(139, 90, 43, 0.01) 20px
    ),
    repeating-linear-gradient(
      -45deg,
      transparent,
      transparent 10px,
      rgba(139, 90, 43, 0.01) 10px,
      rgba(139, 90, 43, 0.01) 20px
    );
  font-size: 15px;
  line-height: 1.8;
  padding: 64px 52px;
  max-width: 680px;
  margin: 0 auto;
  position: relative;
}

#nice:before {
  content: '';
  position: absolute;
  top: 0;
  left: 40px;
  bottom: 0;
  width: 1px;
  background: #e8d7c3;
}

/* 段落 */
#nice p {
  font-size: 15px;
  line-height: 1.8;
  color: #4a4a4a;
  margin: 18px 0;
  text-align: justify;
}

/* 一级标题 */
#nice h1 {
  font-size: 34px;
  font-weight: 400;
  margin: 48px 0 32px 0;
  color: #5d4e37;
  text-align: center;
  font-variant: small-caps;
  letter-spacing: 0.08em;
  padding: 20px 0;
  border-top: 1px solid #d4c4a8;
  border-bottom: 1px solid #d4c4a8;
}

/* 二级标题 */
#nice h2 {
  font-size: 22px;
  font-weight: 500;
  margin: 32px 0 20px 0;
  color: #6b5d54;
  font-style: italic;
}

/* 三级标题 */
#nice h3 {
  font-size: 17px;
  font-weight: 500;
  margin: 24px 0 14px 0;
  color: #7d6d5d;
  text-decoration: underline;
  text-decoration-color: #d4c4a8;
}

/* 引用 */
#nice blockquote {
  margin: 28px 20px;
  padding: 16px 24px;
  background: rgba(212, 196, 168, 0.1);
  border-left: 3px solid #8b7355;
  font-style: italic;
}

#nice blockquote p {
  color: #6b5d54;
  margin: 8px 0;
}

/* 链接 */
#nice a {
  color: #8b7355;
  text-decoration: none;
  border-bottom: 1px solid #d4c4a8;
  transition: all 0.3s;
}

#nice a:hover {
  color: #6b5d54;
  border-bottom-color: #8b7355;
}

/* 加粗 */
#nice strong {
  font-weight: 700;
  color: #5d4e37;
  background: rgba(212, 196, 168, 0.2);
  padding: 1px 6px;
  margin: 0 2px;
}

/* 代码块 */
#nice pre {
  margin: 28px 0;
  background: #f5f0e8;
  color: #5d4e37;
  padding: 24px;
  font-family: 'Courier', monospace;
  font-size: 13px;
  line-height: 1.6;
  border: 1px solid #d4c4a8;
  box-shadow: 2px 2px 8px rgba(139, 115, 85, 0.1);
}`;
