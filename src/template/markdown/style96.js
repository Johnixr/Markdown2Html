export default `/* 铜绿岁月 - style-96-copper-patina.css */

/* Style 96: 铜绿岁月 - Copper Patina */

/* 全局属性 */
#nice {
  font-family: 'Lora', 'STSong', serif;
  color: #37474f;
  background: #fafbf9;
  background-image:
    repeating-linear-gradient(
      -45deg,
      transparent,
      transparent 40px,
      rgba(0, 150, 136, 0.02) 40px,
      rgba(0, 150, 136, 0.02) 41px
    );
  font-size: 15px;
  line-height: 1.75;
  padding: 68px 52px;
  max-width: 700px;
  margin: 0 auto;
}

/* 段落 */
#nice p {
  font-size: 15px;
  line-height: 1.75;
  color: #455a64;
  margin: 18px 0;
  letter-spacing: 0.01em;
}

/* 一级标题 */
#nice h1 {
  font-size: 38px;
  font-weight: 400;
  margin: 56px 0 36px 0;
  color: #00695c;
  text-align: center;
  letter-spacing: 0.06em;
  padding: 24px 0;
  border-top: 2px solid #009688;
  border-bottom: 2px solid #009688;
}

/* 二级标题 */
#nice h2 {
  font-size: 24px;
  font-weight: 500;
  margin: 32px 0 20px 0;
  color: #00796b;
  position: relative;
  padding-left: 28px;
}

#nice h2:before {
  content: '◈';
  position: absolute;
  left: 0;
  color: #4db6ac;
  font-size: 20px;
}

/* 三级标题 */
#nice h3 {
  font-size: 18px;
  font-weight: 500;
  margin: 24px 0 14px 0;
  color: #00897b;
  padding-bottom: 6px;
  border-bottom: 1px dotted #4db6ac;
}

/* 引用 */
#nice blockquote {
  margin: 28px 0;
  padding: 20px 28px;
  background: rgba(0, 150, 136, 0.05);
  border-left: 3px solid #009688;
  border-right: 3px solid #009688;
}

#nice blockquote p {
  color: #546e7a;
  margin: 8px 0;
  font-style: italic;
}

/* 链接 */
#nice a {
  color: #00796b;
  text-decoration: none;
  border-bottom: 1px solid #4db6ac;
  transition: all 0.3s;
}

#nice a:hover {
  color: #004d40;
  border-bottom-width: 2px;
}

/* 加粗 */
#nice strong {
  font-weight: 700;
  color: #00695c;
  background: rgba(0, 150, 136, 0.1);
  padding: 2px 8px;
  margin: 0 2px;
}

/* 代码块 */
#nice pre {
  margin: 32px 0;
  background: #263238;
  color: #4db6ac;
  padding: 28px;
  font-family: 'Roboto Mono', monospace;
  font-size: 13px;
  line-height: 1.6;
  border: 1px solid #009688;
}`;
