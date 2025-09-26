export default `/* 咖啡手札 - style-76-coffee-notes.css */

/* Style 76: 咖啡手札 - Coffee Notes */

/* 全局属性 */
#nice {
  font-family: 'Merriweather', 'Georgia', serif;
  color: #3e2723;
  background: #faf7f0;
  background-image:
    repeating-linear-gradient(
      0deg,
      transparent,
      transparent 24px,
      rgba(121, 85, 72, 0.06) 24px,
      rgba(121, 85, 72, 0.06) 25px
    );
  font-size: 15px;
  line-height: 1.8;
  padding: 60px 48px;
  max-width: 680px;
  margin: 0 auto;
}

/* 段落 */
#nice p {
  font-size: 15px;
  line-height: 1.8;
  color: #4e342e;
  margin: 18px 0;
  text-indent: 1.5em;
}

/* 一级标题 */
#nice h1 {
  font-size: 32px;
  font-weight: 400;
  margin: 48px 0 32px 0;
  color: #3e2723;
  text-align: center;
  font-variant: small-caps;
  letter-spacing: 0.08em;
  padding: 16px 0;
  border-bottom: 2px solid #795548;
}

/* 二级标题 */
#nice h2 {
  font-size: 22px;
  font-weight: 500;
  margin: 32px 0 20px 0;
  color: #5d4037;
  position: relative;
  padding-left: 24px;
}

#nice h2:before {
  content: '☕';
  position: absolute;
  left: 0;
  font-size: 18px;
}

/* 三级标题 */
#nice h3 {
  font-size: 17px;
  font-weight: 500;
  margin: 24px 0 14px 0;
  color: #6d4c41;
  font-style: italic;
}

/* 引用 */
#nice blockquote {
  margin: 28px 20px;
  padding: 16px 20px;
  background: #efebe9;
  border-left: 3px solid #8d6e63;
  font-style: italic;
}

#nice blockquote p {
  color: #5d4037;
  margin: 8px 0;
  text-indent: 0;
}

/* 链接 */
#nice a {
  color: #6d4c41;
  text-decoration: none;
  border-bottom: 1px dotted #8d6e63;
  transition: all 0.3s;
}

#nice a:hover {
  color: #3e2723;
  border-bottom-style: solid;
}

/* 加粗 */
#nice strong {
  font-weight: 600;
  color: #3e2723;
  background: rgba(121, 85, 72, 0.1);
  padding: 1px 6px;
  margin: 0 2px;
  border-radius: 2px;
}

/* 代码块 */
#nice pre {
  margin: 28px 0;
  background: #3e2723;
  color: #d7ccc8;
  padding: 24px;
  font-family: 'Courier', monospace;
  font-size: 13px;
  line-height: 1.6;
  border: 1px solid #6d4c41;
}`;
