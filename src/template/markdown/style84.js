export default `/* 丝绸之路 - style-84-silk-road.css */

/* Style 84: 丝绸之路 - Silk Road */

/* 全局属性 */
#nice {
  font-family: 'Playfair Display', 'STKaiti', serif;
  color: #3d3d3d;
  background: #fffef8;
  background-image:
    repeating-linear-gradient(
      90deg,
      transparent,
      transparent 80px,
      rgba(184, 134, 11, 0.03) 80px,
      rgba(184, 134, 11, 0.03) 81px
    ),
    repeating-linear-gradient(
      0deg,
      transparent,
      transparent 80px,
      rgba(184, 134, 11, 0.03) 80px,
      rgba(184, 134, 11, 0.03) 81px
    );
  font-size: 15px;
  line-height: 1.8;
  padding: 72px 52px;
  max-width: 700px;
  margin: 0 auto;
}

/* 段落 */
#nice p {
  font-size: 15px;
  line-height: 1.8;
  color: #4d4d4d;
  margin: 18px 0;
  text-align: justify;
}

/* 一级标题 */
#nice h1 {
  font-size: 40px;
  font-weight: 500;
  margin: 60px 0 40px 0;
  color: #b8860b;
  text-align: center;
  position: relative;
  padding: 24px 0;
}

#nice h1:before,
#nice h1:after {
  content: '❈';
  position: absolute;
  color: #daa520;
  font-size: 24px;
}

#nice h1:before {
  left: 20px;
}

#nice h1:after {
  right: 20px;
}

/* 二级标题 */
#nice h2 {
  font-size: 26px;
  font-weight: 500;
  margin: 36px 0 24px 0;
  color: #8b6914;
  text-align: center;
  padding: 12px 0;
  border-bottom: 2px solid #daa520;
}

/* 三级标题 */
#nice h3 {
  font-size: 18px;
  font-weight: 500;
  margin: 24px 0 14px 0;
  color: #6b5d4f;
  padding-left: 24px;
  position: relative;
}

#nice h3:before {
  content: '◆';
  position: absolute;
  left: 0;
  color: #b8860b;
}

/* 引用 */
#nice blockquote {
  margin: 32px 0;
  padding: 24px;
  background: linear-gradient(135deg, rgba(218, 165, 32, 0.05), rgba(184, 134, 11, 0.05));
  border-left: 3px solid #b8860b;
  border-right: 3px solid #b8860b;
}

#nice blockquote p {
  color: #5d5d5d;
  margin: 8px 0;
  font-style: italic;
  text-align: center;
}

/* 链接 */
#nice a {
  color: #b8860b;
  text-decoration: none;
  font-weight: 500;
  border-bottom: 1px solid #daa520;
  transition: all 0.3s;
}

#nice a:hover {
  background: rgba(218, 165, 32, 0.1);
}

/* 加粗 */
#nice strong {
  font-weight: 700;
  color: #8b6914;
  background: rgba(218, 165, 32, 0.15);
  padding: 2px 8px;
  margin: 0 2px;
}

/* 代码块 */
#nice pre {
  margin: 32px 0;
  background: #3d3d3d;
  color: #daa520;
  padding: 28px;
  font-family: 'Courier', monospace;
  font-size: 13px;
  line-height: 1.7;
  border: 1px solid #b8860b;
}`;
