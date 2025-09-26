export default `/* 石碑铭文 - style-72-stone-inscription.css */

/* Style 72: 石碑铭文 - Stone Inscription */

/* 全局属性 */
#nice {
  font-family: 'Trajan Pro', 'Times New Roman', serif;
  color: #2c2c2c;
  background: #e8e6e1;
  background-image:
    repeating-linear-gradient(
      0deg,
      transparent,
      transparent 50px,
      rgba(0, 0, 0, 0.03) 50px,
      rgba(0, 0, 0, 0.03) 51px
    ),
    repeating-linear-gradient(
      90deg,
      transparent,
      transparent 50px,
      rgba(0, 0, 0, 0.03) 50px,
      rgba(0, 0, 0, 0.03) 51px
    ),
    radial-gradient(circle at 20% 80%, rgba(139, 119, 101, 0.05) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(139, 119, 101, 0.05) 0%, transparent 50%);
  font-size: 15px;
  line-height: 1.8;
  padding: 72px 56px;
  max-width: 680px;
  margin: 0 auto;
}

/* 段落 */
#nice p {
  font-size: 15px;
  line-height: 1.8;
  color: #3a3a3a;
  margin: 20px 0;
  letter-spacing: 0.05em;
}

/* 一级标题 */
#nice h1 {
  font-size: 40px;
  font-weight: 400;
  margin: 56px 0 36px 0;
  color: #1a1a1a;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  padding: 24px 0;
  border-top: 3px solid #6b6b6b;
  border-bottom: 3px solid #6b6b6b;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
}

/* 二级标题 */
#nice h2 {
  font-size: 24px;
  font-weight: 600;
  margin: 36px 0 24px 0;
  color: #2c2c2c;
  text-align: center;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

/* 三级标题 */
#nice h3 {
  font-size: 18px;
  font-weight: 500;
  margin: 24px 0 14px 0;
  color: #4a4a4a;
  letter-spacing: 0.08em;
  border-bottom: 1px solid #8b8b8b;
  padding-bottom: 6px;
}

/* 引用 */
#nice blockquote {
  margin: 32px 24px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.5);
  border: 2px solid #6b6b6b;
  text-align: center;
  position: relative;
}

#nice blockquote:before,
#nice blockquote:after {
  content: '"';
  position: absolute;
  font-size: 48px;
  color: #8b8b8b;
  font-family: serif;
}

#nice blockquote:before {
  top: -10px;
  left: 10px;
}

#nice blockquote:after {
  bottom: -30px;
  right: 10px;
}

#nice blockquote p {
  color: #3a3a3a;
  margin: 8px 0;
  font-style: italic;
  letter-spacing: 0.02em;
}

/* 链接 */
#nice a {
  color: #6b6b6b;
  text-decoration: none;
  font-weight: 600;
  letter-spacing: 0.05em;
  border-bottom: 1px solid #8b8b8b;
  transition: all 0.3s;
}

#nice a:hover {
  color: #2c2c2c;
  border-bottom-width: 2px;
}

/* 加粗 */
#nice strong {
  font-weight: 700;
  color: #1a1a1a;
  background: rgba(107, 107, 107, 0.1);
  padding: 2px 8px;
  margin: 0 2px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

/* 代码块 */
#nice pre {
  margin: 32px 0;
  background: #2c2c2c;
  color: #d4d4d4;
  padding: 28px;
  font-family: 'Courier', monospace;
  font-size: 13px;
  line-height: 1.6;
  border: 3px solid #6b6b6b;
  box-shadow: inset 0 0 20px rgba(0, 0, 0, 0.3);
}`;
