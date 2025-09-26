export default `/* 孟菲斯波普狂欢 - style-6-memphis-pop.css */

/* Style 6: 孟菲斯波普狂欢 - Memphis Pop Party */

/* 全局属性 - 波普基调 */
#nice {
  font-family: 'Comic Sans MS', 'Marker Felt', 'Arial Rounded', sans-serif;
  color: #2b2b2b;
  background: #fff8dc;
  font-size: 15px;
  line-height: 1.7;
  padding: 40px;
  max-width: 900px;
  margin: 0 auto;
  background-image:
    repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,182,193,0.1) 35px, rgba(255,182,193,0.1) 70px),
    repeating-linear-gradient(-45deg, transparent, transparent 35px, rgba(135,206,235,0.1) 35px, rgba(135,206,235,0.1) 70px);
}

/* 段落 - 活泼节奏 */
#nice p {
  font-size: 15px;
  line-height: 1.9;
  color: #2b2b2b;
  margin: 20px 0;
  background: rgba(255,255,255,0.8);
  padding: 8px 12px;
  border-radius: 8px;
}

/* 一级标题 - 几何爆炸 */
#nice h1 {
  font-size: 42px;
  font-weight: 900;
  margin: 56px 0 40px 0;
  color: #ff1493;
  background: #40e0d0;
  padding: 32px;
  position: relative;
  transform: rotate(-3deg);
  box-shadow: 8px 8px 0 #ffd700;
  text-shadow: 3px 3px 0 #000000;
  text-align: center;
}

#nice h1 .content {
  display: inline-block;
  background: #ffffff;
  padding: 12px 24px;
  color: #ff1493;
  border: 4px solid #000000;
  transform: rotate(3deg);
}

#nice h1:before,
#nice h1:after {
  content: '★';
  position: absolute;
  font-size: 60px;
  color: #ffd700;
}

#nice h1:before {
  top: -20px;
  left: 20px;
  transform: rotate(-15deg);
}

#nice h1:after {
  bottom: -20px;
  right: 20px;
  transform: rotate(15deg);
}

/* 二级标题 - 涂鸦美学 */
#nice h2 {
  font-size: 28px;
  font-weight: 800;
  margin: 44px 0 24px 0;
  color: #000000;
  position: relative;
  display: inline-block;
}

#nice h2 .content {
  background: #ff69b4;
  color: #ffffff;
  padding: 8px 20px;
  border-radius: 50px 10px 50px 10px;
  border: 3px dashed #000000;
  position: relative;
  z-index: 1;
}

#nice h2 .content:after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 8px;
  right: -8px;
  top: 8px;
  background: #87ceeb;
  z-index: -1;
  border-radius: 50px 10px 50px 10px;
}

/* 三级标题 - 贴纸风格 */
#nice h3 {
  font-size: 20px;
  font-weight: 700;
  margin: 32px 0 16px 0;
  color: #ffffff;
  display: inline-block;
}

#nice h3 .content {
  background: linear-gradient(45deg, #ff6347, #ffa500);
  padding: 8px 16px;
  border-radius: 20px;
  border: 2px solid #ffffff;
  box-shadow: 3px 3px 0 #000000;
  transform: rotate(-2deg);
}

/* 无序列表 - 糖果色点 */
#nice ul {
  margin: 24px 0;
  padding-left: 0;
  list-style: none;
}

#nice ul li {
  position: relative;
  padding-left: 40px;
  margin: 14px 0;
  color: #2b2b2b;
  background: linear-gradient(90deg, rgba(255,182,193,0.2) 0%, transparent 100%);
  padding-top: 8px;
  padding-bottom: 8px;
  padding-right: 12px;
  border-radius: 0 20px 20px 0;
}

#nice ul li:before {
  content: '●';
  position: absolute;
  left: 12px;
  color: #ff1493;
  font-size: 20px;
  top: 6px;
}

#nice ul li:nth-child(even):before {
  color: #40e0d0;
}

#nice ul li:nth-child(3n):before {
  color: #ffd700;
}

/* 有序列表 - 泡泡数字 */
#nice ol {
  margin: 24px 0;
  padding-left: 0;
  list-style: none;
  counter-reset: memphis-count;
}

#nice ol li {
  position: relative;
  padding-left: 56px;
  margin: 16px 0;
  counter-increment: memphis-count;
  background: rgba(255,255,255,0.8);
  padding-top: 10px;
  padding-bottom: 10px;
  padding-right: 16px;
  border: 2px solid #87ceeb;
  border-radius: 12px;
}

#nice ol li:before {
  content: counter(memphis-count);
  position: absolute;
  left: 8px;
  top: 50%;
  transform: translateY(-50%);
  width: 32px;
  height: 32px;
  background: #ff69b4;
  color: #ffffff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  border: 2px solid #000000;
}

/* 引用 - 漫画气泡 */
#nice blockquote {
  margin: 36px 0;
  padding: 24px;
  background: #87ceeb;
  border: 3px solid #000000;
  border-radius: 20px;
  position: relative;
  transform: rotate(1deg);
}

#nice blockquote:after {
  content: '';
  position: absolute;
  bottom: -15px;
  left: 50px;
  width: 30px;
  height: 30px;
  background: #87ceeb;
  border-bottom: 3px solid #000000;
  border-right: 3px solid #000000;
  transform: rotate(45deg);
  border-radius: 0 0 8px 0;
}

#nice blockquote p {
  color: #000000;
  font-weight: 600;
  margin: 8px 0;
  position: relative;
  z-index: 1;
}

/* 链接 - 霓虹按钮 */
#nice a {
  color: #ffffff;
  text-decoration: none;
  font-weight: 700;
  padding: 4px 12px;
  background: #ff1493;
  border-radius: 12px;
  border: 2px solid #000000;
  display: inline-block;
  transform: rotate(-2deg);
  transition: all 0.2s;
  margin: 0 4px;
  box-shadow: 2px 2px 0 #000000;
}

#nice a:hover {
  transform: rotate(2deg) scale(1.1);
  background: #40e0d0;
  box-shadow: 4px 4px 0 #000000;
}

/* 加粗 - 爆炸贴纸 */
#nice strong {
  font-weight: 900;
  color: #000000;
  background: #ffd700;
  padding: 4px 12px;
  margin: 0 4px;
  display: inline-block;
  border: 2px solid #000000;
  border-radius: 8px;
  transform: rotate(-1deg);
  box-shadow: 2px 2px 0 #ff69b4;
}

/* 斜体 - 手写风格 */
#nice em {
  font-style: italic;
  color: #ff1493;
  font-weight: 600;
  text-decoration: underline wavy #40e0d0;
  text-underline-offset: 4px;
}

/* 分隔线 - 波浪装饰 */
#nice hr {
  border: none;
  height: 20px;
  margin: 48px 0;
  background: repeating-linear-gradient(
    90deg,
    #ff1493,
    #ff1493 10px,
    #40e0d0 10px,
    #40e0d0 20px,
    #ffd700 20px,
    #ffd700 30px
  );
  border-radius: 10px;
  border: 2px solid #000000;
}

/* 图片 - 拍立得风格 */
#nice img {
  max-width: 90%;
  height: auto;
  margin: 40px auto;
  display: block;
  padding: 12px;
  background: #ffffff;
  border: 3px solid #000000;
  transform: rotate(-2deg);
  box-shadow:
    8px 8px 0 #ff69b4,
    16px 16px 0 #87ceeb;
}

/* 代码块 - 复古电脑 */
#nice pre {
  margin: 36px 0;
  background: #000000;
  color: #00ff00;
  padding: 24px;
  border: 4px solid #ff1493;
  border-radius: 12px;
  position: relative;
  font-family: 'Courier New', monospace;
  transform: rotate(1deg);
}

#nice pre:before {
  content: '◉ ◉ ◉';
  position: absolute;
  top: 8px;
  left: 12px;
  color: #ff1493;
  font-size: 16px;
  letter-spacing: 8px;
}

#nice pre code {
  color: #00ff00;
  font-size: 13px;
  line-height: 1.6;
  display: block;
  margin-top: 16px;
}`;
