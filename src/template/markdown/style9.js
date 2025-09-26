export default `/* 野兽派艺术狂想 - style-9-fauvism-art.css */

/* Style 9: 野兽派艺术狂想 - Fauvism Art Fantasy */

/* 全局属性 - 色彩暴动 */
#nice {
  font-family: 'Gill Sans', 'Trebuchet MS', 'Arial Bold', sans-serif;
  color: #2d1b69;
  background: linear-gradient(45deg, #ffeb3b 0%, #ff6f00 50%, #d500f9 100%);
  font-size: 15px;
  line-height: 1.75;
  padding: 40px;
  max-width: 900px;
  margin: 0 auto;
}

#nice:before {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.85);
  z-index: -1;
}

/* 段落 - 笔触肌理 */
#nice p {
  font-size: 15px;
  line-height: 1.9;
  color: #2d1b69;
  margin: 24px 0;
  background: rgba(255, 255, 255, 0.9);
  padding: 12px 16px;
  border-radius: 8px 24px 16px 32px;
  box-shadow: 4px 4px 0 #ff1744;
}

/* 一级标题 - 色彩爆炸 */
#nice h1 {
  font-size: 48px;
  font-weight: 900;
  margin: 64px 0 48px 0;
  background: linear-gradient(135deg, #ff1744 0%, #d500f9 25%, #00e676 50%, #ffea00 75%, #ff6f00 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-align: center;
  position: relative;
  text-transform: uppercase;
  letter-spacing: 3px;
  text-shadow: 6px 6px 0 rgba(0,0,0,0.1);
}

#nice h1 .content {
  position: relative;
  z-index: 1;
  display: inline-block;
  padding: 20px 40px;
  background: rgba(255, 255, 255, 0.9);
  -webkit-text-fill-color: initial;
  color: #2d1b69;
  border: 6px solid #ff1744;
  border-radius: 40px 10px 40px 10px;
  transform: rotate(-2deg);
}

#nice h1 .content:after {
  content: '';
  position: absolute;
  top: -12px;
  left: -12px;
  right: -12px;
  bottom: -12px;
  background: linear-gradient(45deg, #00e676, #ffea00, #ff1744, #d500f9);
  z-index: -1;
  border-radius: 40px 10px 40px 10px;
  opacity: 0.6;
}

/* 二级标题 - 画笔涂抹 */
#nice h2 {
  font-size: 32px;
  font-weight: 800;
  margin: 48px 0 28px 0;
  color: #ffffff;
  position: relative;
  display: inline-block;
}

#nice h2 .content {
  background: #ff1744;
  padding: 12px 32px;
  border-radius: 60px 20px 60px 20px;
  position: relative;
  transform: rotate(3deg);
  box-shadow:
    -8px 8px 0 #00e676,
    8px -8px 0 #d500f9;
}

/* 三级标题 - 颜料飞溅 */
#nice h3 {
  font-size: 22px;
  font-weight: 700;
  margin: 36px 0 20px 0;
  color: #2d1b69;
  position: relative;
  display: inline-block;
}

#nice h3 .content {
  background: linear-gradient(90deg, #ffea00 0%, transparent 100%);
  padding: 8px 20px;
  border-left: 8px solid #ff6f00;
  position: relative;
}

#nice h3 .content:before,
#nice h3 .content:after {
  content: '●';
  position: absolute;
  font-size: 40px;
}

#nice h3 .content:before {
  color: #00e676;
  top: -15px;
  left: -20px;
}

#nice h3 .content:after {
  color: #d500f9;
  bottom: -15px;
  right: -20px;
}

/* 无序列表 - 色块拼贴 */
#nice ul {
  margin: 28px 0;
  padding-left: 0;
  list-style: none;
}

#nice ul li {
  position: relative;
  padding-left: 48px;
  margin: 16px 0;
  color: #2d1b69;
  background: linear-gradient(90deg, rgba(255, 23, 68, 0.1) 0%, transparent 100%);
  padding-top: 10px;
  padding-bottom: 10px;
  padding-right: 16px;
  border-radius: 0 24px 24px 0;
}

#nice ul li:before {
  content: '';
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  background: #ff1744;
  border-radius: 50% 0 50% 0;
}

#nice ul li:nth-child(2n):before {
  background: #00e676;
  border-radius: 0 50% 0 50%;
}

#nice ul li:nth-child(3n):before {
  background: #d500f9;
  border-radius: 0;
  transform: translateY(-50%) rotate(45deg);
}

/* 有序列表 - 数字画布 */
#nice ol {
  margin: 28px 0;
  padding-left: 0;
  list-style: none;
  counter-reset: fauve-count;
}

#nice ol li {
  position: relative;
  padding-left: 64px;
  margin: 18px 0;
  counter-increment: fauve-count;
  background: rgba(255, 255, 255, 0.8);
  padding-top: 12px;
  padding-bottom: 12px;
  padding-right: 20px;
  border: 3px solid transparent;
  border-image: linear-gradient(45deg, #ff1744, #00e676, #d500f9) 1;
  border-radius: 12px;
}

#nice ol li:before {
  content: counter(fauve-count);
  position: absolute;
  left: 8px;
  top: 50%;
  transform: translateY(-50%) rotate(-15deg);
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, #ffea00, #ff6f00);
  color: #2d1b69;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 900;
  font-size: 20px;
  border-radius: 50%;
  border: 3px solid #2d1b69;
}

/* 引用 - 画家宣言 */
#nice blockquote {
  margin: 40px 0;
  padding: 28px;
  background:
    linear-gradient(45deg, transparent 30%, rgba(255, 23, 68, 0.1) 30%, rgba(255, 23, 68, 0.1) 70%, transparent 70%),
    linear-gradient(-45deg, transparent 30%, rgba(0, 230, 118, 0.1) 30%, rgba(0, 230, 118, 0.1) 70%, transparent 70%),
    rgba(255, 255, 255, 0.9);
  border: 4px dashed #2d1b69;
  position: relative;
  transform: rotate(1deg);
  border-radius: 20px;
}

#nice blockquote p {
  color: #2d1b69;
  font-size: 17px;
  font-weight: 600;
  margin: 12px 0;
  font-style: italic;
  text-align: center;
}

/* 链接 - 调色板 */
#nice a {
  color: #ffffff;
  text-decoration: none;
  font-weight: 700;
  padding: 6px 16px;
  background: linear-gradient(45deg, #ff1744, #d500f9);
  border-radius: 20px;
  display: inline-block;
  transform: skewX(-10deg);
  transition: all 0.3s;
  margin: 0 4px;
  box-shadow: 3px 3px 0 #2d1b69;
}

#nice a:hover {
  transform: skewX(10deg) scale(1.1);
  background: linear-gradient(45deg, #00e676, #ffea00);
  box-shadow: 5px 5px 0 #2d1b69;
}

/* 加粗 - 油画厚涂 */
#nice strong {
  font-weight: 900;
  color: #ffffff;
  background: #2d1b69;
  padding: 4px 14px;
  margin: 0 4px;
  display: inline-block;
  border-radius: 8px 20px 8px 20px;
  position: relative;
  box-shadow: 4px 4px 0 #ff1744;
}

/* 分隔线 - 彩虹画笔 */
#nice hr {
  border: none;
  height: 16px;
  margin: 56px 0;
  background: repeating-linear-gradient(
    90deg,
    #ff1744 0,
    #ff1744 20px,
    #00e676 20px,
    #00e676 40px,
    #ffea00 40px,
    #ffea00 60px,
    #d500f9 60px,
    #d500f9 80px
  );
  border-radius: 8px;
  transform: rotate(-1deg);
}

/* 图片 - 画展装框 */
#nice img {
  max-width: 100%;
  height: auto;
  margin: 48px auto;
  display: block;
  border: 12px solid;
  border-image: linear-gradient(45deg, #ff1744, #00e676, #ffea00, #d500f9) 1;
  padding: 12px;
  background: #ffffff;
  transform: rotate(-2deg);
  box-shadow:
    12px 12px 0 rgba(255, 23, 68, 0.3),
    -12px -12px 0 rgba(213, 0, 249, 0.3);
}

/* 代码块 - 创作草稿 */
#nice pre {
  margin: 40px 0;
  background: #2d1b69;
  color: #ffffff;
  padding: 28px;
  border-radius: 16px 48px 16px 48px;
  position: relative;
  transform: rotate(1deg);
  box-shadow:
    8px 8px 0 #ff1744,
    16px 16px 0 #00e676;
}

#nice pre code {
  color: #ffea00;
  font-family: 'Courier New', monospace;
  font-size: 14px;
  line-height: 1.7;
  text-shadow: 2px 2px 0 rgba(0,0,0,0.3);
}`;
