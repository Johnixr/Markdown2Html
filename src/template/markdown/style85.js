export default `/* 竹林清韵 - style-85-bamboo-grove.css */

/* Style 85: 竹林清韵 - Bamboo Grove */

/* 全局属性 */
#nice {
  font-family: 'Noto Sans SC', 'Microsoft YaHei', sans-serif;
  color: #2d4a2b;
  background: #fafff5;
  background-image:
    repeating-linear-gradient(
      90deg,
      transparent,
      transparent 30px,
      rgba(76, 136, 67, 0.03) 30px,
      rgba(76, 136, 67, 0.03) 31px
    );
  font-size: 15px;
  line-height: 1.75;
  padding: 72px 52px;
  max-width: 680px;
  margin: 0 auto;
}

/* 段落 */
#nice p {
  font-size: 15px;
  line-height: 1.75;
  color: #3a5838;
  margin: 18px 0;
  letter-spacing: 0.02em;
}

/* 一级标题 */
#nice h1 {
  font-size: 36px;
  font-weight: 300;
  margin: 56px 0 36px 0;
  color: #2d4a2b;
  text-align: center;
  position: relative;
  padding: 20px 0;
}

#nice h1:before,
#nice h1:after {
  content: '竹';
  position: absolute;
  color: rgba(76, 136, 67, 0.3);
  font-size: 60px;
  font-weight: 100;
  top: 50%;
  transform: translateY(-50%);
}

#nice h1:before {
  left: -60px;
}

#nice h1:after {
  right: -60px;
}

/* 二级标题 */
#nice h2 {
  font-size: 22px;
  font-weight: 400;
  margin: 32px 0 20px 0;
  color: #4c8843;
  padding: 8px 0;
  border-bottom: 1px solid #8bc34a;
}

/* 三级标题 */
#nice h3 {
  font-size: 17px;
  font-weight: 500;
  margin: 24px 0 14px 0;
  color: #558b2f;
  padding-left: 16px;
  border-left: 2px solid #8bc34a;
}

/* 引用 */
#nice blockquote {
  margin: 28px 0;
  padding: 20px 28px;
  background: rgba(139, 195, 74, 0.05);
  border-left: 3px solid #689f38;
}

#nice blockquote p {
  color: #3a5838;
  margin: 8px 0;
  font-style: italic;
}

/* 链接 */
#nice a {
  color: #558b2f;
  text-decoration: none;
  padding-bottom: 1px;
  border-bottom: 1px solid #8bc34a;
  transition: all 0.3s;
}

#nice a:hover {
  color: #33691e;
  border-bottom-width: 2px;
}

/* 加粗 */
#nice strong {
  font-weight: 600;
  color: #2d4a2b;
  background: rgba(139, 195, 74, 0.15);
  padding: 2px 8px;
  margin: 0 2px;
  border-radius: 2px;
}

/* 代码块 */
#nice pre {
  margin: 32px 0;
  background: #2d4a2b;
  color: #dcedc8;
  padding: 28px;
  font-family: 'Source Code Pro', monospace;
  font-size: 13px;
  line-height: 1.6;
  border-radius: 4px;
}`;
