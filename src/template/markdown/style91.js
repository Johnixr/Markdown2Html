export default `/* 枯山水庭 - style-91-zen-garden.css */

/* Style 91: 枯山水庭 - Zen Garden */

/* 全局属性 */
#nice {
  font-family: 'Noto Sans', 'Hiragino Sans', sans-serif;
  color: #424242;
  background: #fafafa;
  background-image:
    repeating-radial-gradient(
      circle at 0 0,
      transparent 0,
      transparent 30px,
      rgba(0, 0, 0, 0.02) 30px,
      rgba(0, 0, 0, 0.02) 31px
    );
  font-size: 15px;
  line-height: 1.75;
  padding: 80px 60px;
  max-width: 640px;
  margin: 0 auto;
}

/* 段落 */
#nice p {
  font-size: 15px;
  line-height: 1.75;
  color: #616161;
  margin: 20px 0;
  letter-spacing: 0.03em;
}

/* 一级标题 */
#nice h1 {
  font-size: 30px;
  font-weight: 300;
  margin: 60px 0 40px 0;
  color: #212121;
  text-align: center;
  position: relative;
  padding: 20px 0;
}

#nice h1:before,
#nice h1:after {
  content: '';
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 30px;
  height: 30px;
  border: 1px solid #9e9e9e;
  border-radius: 50%;
}

#nice h1:before {
  top: -15px;
}

#nice h1:after {
  bottom: -15px;
}

/* 二级标题 */
#nice h2 {
  font-size: 20px;
  font-weight: 400;
  margin: 36px 0 24px 0;
  color: #424242;
  text-align: center;
  position: relative;
  padding: 12px 0;
}

#nice h2:after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 40px;
  height: 1px;
  background: #bdbdbd;
}

/* 三级标题 */
#nice h3 {
  font-size: 16px;
  font-weight: 500;
  margin: 24px 0 14px 0;
  color: #616161;
  letter-spacing: 0.1em;
}

/* 引用 */
#nice blockquote {
  margin: 32px 40px;
  padding: 0;
  text-align: center;
  position: relative;
}

#nice blockquote:before,
#nice blockquote:after {
  content: '·';
  position: absolute;
  color: #9e9e9e;
  font-size: 24px;
}

#nice blockquote:before {
  left: -20px;
}

#nice blockquote:after {
  right: -20px;
}

#nice blockquote p {
  color: #757575;
  margin: 8px 0;
  font-style: italic;
}

/* 链接 */
#nice a {
  color: #616161;
  text-decoration: none;
  border-bottom: 1px solid #bdbdbd;
  transition: all 0.3s;
}

#nice a:hover {
  color: #212121;
  border-bottom-color: #616161;
}

/* 加粗 */
#nice strong {
  font-weight: 500;
  color: #212121;
  background: rgba(0, 0, 0, 0.03);
  padding: 2px 8px;
  margin: 0 2px;
}

/* 代码块 */
#nice pre {
  margin: 32px 0;
  background: #212121;
  color: #e0e0e0;
  padding: 28px;
  font-family: 'SF Mono', monospace;
  font-size: 13px;
  line-height: 1.7;
  border-radius: 2px;
}`;
