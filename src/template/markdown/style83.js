export default `/* 沙漠贤者 - style-83-desert-sage.css */

/* Style 83: 沙漠贤者 - Desert Sage */

/* 全局属性 */
#nice {
  font-family: 'Libre Baskerville', 'Georgia', serif;
  color: #4a4e51;
  background: #faf9f6;
  background-image:
    linear-gradient(180deg, rgba(194, 154, 108, 0.05) 0%, transparent 400px),
    repeating-radial-gradient(
      circle at 50% 50%,
      transparent 0,
      transparent 40px,
      rgba(194, 154, 108, 0.02) 40px,
      rgba(194, 154, 108, 0.02) 41px
    );
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
  color: #5a5e61;
  margin: 18px 0;
}

/* 一级标题 */
#nice h1 {
  font-size: 38px;
  font-weight: 400;
  margin: 56px 0 36px 0;
  color: #c29a6c;
  text-align: center;
  letter-spacing: 0.08em;
  padding: 24px 0;
  border-top: 1px solid #d4b896;
  border-bottom: 1px solid #d4b896;
}

/* 二级标题 */
#nice h2 {
  font-size: 24px;
  font-weight: 500;
  margin: 32px 0 20px 0;
  color: #8b7355;
  position: relative;
  padding-left: 28px;
}

#nice h2:before {
  content: '❋';
  position: absolute;
  left: 0;
  color: #c29a6c;
  font-size: 20px;
}

/* 三级标题 */
#nice h3 {
  font-size: 18px;
  font-weight: 500;
  margin: 24px 0 14px 0;
  color: #6b5d4f;
  font-style: italic;
}

/* 引用 */
#nice blockquote {
  margin: 28px 0;
  padding: 20px 28px;
  background: rgba(194, 154, 108, 0.08);
  border-left: 3px solid #c29a6c;
}

#nice blockquote p {
  color: #6b5d4f;
  margin: 8px 0;
  font-style: italic;
}

/* 链接 */
#nice a {
  color: #8b7355;
  text-decoration: none;
  border-bottom: 1px dotted #c29a6c;
  transition: all 0.3s;
}

#nice a:hover {
  color: #c29a6c;
  border-bottom-style: solid;
}

/* 加粗 */
#nice strong {
  font-weight: 600;
  color: #4a4e51;
  background: linear-gradient(180deg, transparent 70%, rgba(194, 154, 108, 0.3) 70%);
}

/* 代码块 */
#nice pre {
  margin: 32px 0;
  background: #4a4e51;
  color: #faf9f6;
  padding: 28px;
  font-family: 'Inconsolata', monospace;
  font-size: 13px;
  line-height: 1.6;
  border-radius: 4px;
}`;
