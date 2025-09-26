export default `/* 音乐谱系 - style-67-music-score.css */

/* Style 67: 音乐谱系 - Music Score */

/* 全局属性 */
#nice {
  font-family: 'Baskerville', 'Times', serif;
  color: #2a2a2a;
  background: #fffef8;
  background-image:
    repeating-linear-gradient(
      0deg,
      transparent,
      transparent 30px,
      rgba(0, 0, 0, 0.08) 30px,
      rgba(0, 0, 0, 0.08) 31px,
      transparent 31px,
      transparent 36px,
      rgba(0, 0, 0, 0.05) 36px,
      rgba(0, 0, 0, 0.05) 37px,
      transparent 37px,
      transparent 42px,
      rgba(0, 0, 0, 0.05) 42px,
      rgba(0, 0, 0, 0.05) 43px,
      transparent 43px,
      transparent 48px,
      rgba(0, 0, 0, 0.05) 48px,
      rgba(0, 0, 0, 0.05) 49px,
      transparent 49px,
      transparent 54px,
      rgba(0, 0, 0, 0.05) 54px,
      rgba(0, 0, 0, 0.05) 55px
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
  margin: 18px 0;
}

/* 一级标题 */
#nice h1 {
  font-size: 36px;
  font-weight: 400;
  margin: 48px 0 32px 0;
  color: #000000;
  text-align: center;
  font-style: italic;
  position: relative;
  padding: 16px 0;
}

#nice h1:before {
  content: '𝄞';
  position: absolute;
  left: -40px;
  font-size: 48px;
  top: 50%;
  transform: translateY(-50%);
}

/* 二级标题 */
#nice h2 {
  font-size: 22px;
  font-weight: 500;
  margin: 32px 0 20px 0;
  color: #1a1a1a;
  position: relative;
  padding-left: 28px;
}

#nice h2:before {
  content: '♪';
  position: absolute;
  left: 0;
  font-size: 20px;
}

/* 三级标题 */
#nice h3 {
  font-size: 17px;
  font-weight: 400;
  margin: 24px 0 14px 0;
  color: #4a4a4a;
  font-style: italic;
}

/* 引用 */
#nice blockquote {
  margin: 28px 0;
  padding: 16px 24px;
  background: rgba(0, 0, 0, 0.02);
  border-left: 3px solid #666666;
}

#nice blockquote p {
  color: #4a4a4a;
  margin: 8px 0;
  font-style: italic;
}

/* 链接 */
#nice a {
  color: #333333;
  text-decoration: none;
  border-bottom: 1px solid #999999;
  transition: all 0.3s;
}

#nice a:hover {
  color: #000000;
  border-bottom-color: #000000;
}

/* 加粗 */
#nice strong {
  font-weight: 700;
  color: #000000;
  background: rgba(0, 0, 0, 0.05);
  padding: 2px 8px;
  margin: 0 2px;
}

/* 代码块 */
#nice pre {
  margin: 28px 0;
  background: #2a2a2a;
  color: #f0f0f0;
  padding: 24px;
  font-family: 'Courier', monospace;
  font-size: 13px;
  line-height: 1.6;
  border: 1px solid #000000;
}`;
