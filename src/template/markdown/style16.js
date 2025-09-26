export default `/* 深海生物荧光 - style-16-deepsea-bioluminescence.css */

/* Style 16: 深海生物荧光 - Deep Sea Bioluminescence */

/* 全局属性 */
#nice {
  font-family: 'Helvetica Neue', 'Arial', sans-serif;
  color: #c8e6f5;
  background: linear-gradient(180deg, #001528 0%, #003566 50%, #001528 100%);
  font-size: 15px;
  line-height: 1.75;
  padding: 40px;
  max-width: 900px;
  margin: 0 auto;
}

/* 段落 */
#nice p {
  font-size: 15px;
  line-height: 1.8;
  color: #a8dadc;
  margin: 18px 0;
  letter-spacing: 0.3px;
}

/* 一级标题 - 生物发光 */
#nice h1 {
  font-size: 44px;
  font-weight: 800;
  margin: 56px 0 36px 0;
  color: #00ffff;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 3px;
  text-shadow:
    0 0 20px #00ffff,
    0 0 40px #00ffff,
    0 0 60px #0099ff;
  padding: 32px;
  background: radial-gradient(ellipse at center, rgba(0,255,255,0.1) 0%, transparent 70%);
}

/* 二级标题 - 水母漂浮 */
#nice h2 {
  font-size: 28px;
  font-weight: 700;
  margin: 36px 0 24px 0;
  color: #00ffff;
  padding: 16px 28px;
  background: rgba(0, 255, 255, 0.1);
  border: 2px solid rgba(0, 255, 255, 0.3);
  border-radius: 50px;
  display: inline-block;
  box-shadow:
    0 0 20px rgba(0, 255, 255, 0.3),
    inset 0 0 20px rgba(0, 255, 255, 0.1);
}

/* 三级标题 */
#nice h3 {
  font-size: 20px;
  font-weight: 600;
  margin: 28px 0 16px 0;
  color: #00ccff;
  padding-left: 24px;
  position: relative;
}

#nice h3:before {
  content: '◈';
  position: absolute;
  left: 0;
  color: #00ffff;
  text-shadow: 0 0 10px #00ffff;
}

/* 引用 - 深渊回声 */
#nice blockquote {
  margin: 32px 0;
  padding: 24px;
  background: rgba(0, 53, 102, 0.5);
  border: 1px solid rgba(0, 255, 255, 0.3);
  border-radius: 12px;
  position: relative;
  backdrop-filter: blur(10px);
}

#nice blockquote:before,
#nice blockquote:after {
  content: '〰';
  position: absolute;
  color: #00ffff;
  font-size: 30px;
  opacity: 0.5;
}

#nice blockquote:before {
  top: -10px;
  left: 20px;
}

#nice blockquote:after {
  bottom: -10px;
  right: 20px;
}

#nice blockquote p {
  color: #a8dadc;
  font-style: italic;
  margin: 8px 0;
}

/* 链接 - 荧光触须 */
#nice a {
  color: #00ffff;
  text-decoration: none;
  font-weight: 600;
  padding: 2px 8px;
  background: rgba(0, 255, 255, 0.1);
  border-radius: 4px;
  transition: all 0.3s;
  border: 1px solid transparent;
}

#nice a:hover {
  border: 1px solid #00ffff;
  box-shadow: 0 0 12px rgba(0, 255, 255, 0.5);
  background: rgba(0, 255, 255, 0.2);
}

/* 加粗 - 深海宝石 */
#nice strong {
  font-weight: 700;
  color: #001528;
  background: linear-gradient(135deg, #00ffff, #0099ff);
  padding: 3px 10px;
  margin: 0 2px;
  border-radius: 20px;
  display: inline-block;
  box-shadow: 0 0 10px rgba(0, 255, 255, 0.5);
}

/* 列表 */
#nice ul li:before {
  content: '○';
  position: absolute;
  left: 0;
  color: #00ffff;
  font-size: 16px;
  text-shadow: 0 0 5px #00ffff;
}

#nice ol li:before {
  background: radial-gradient(circle, #00ffff, #0099ff);
  color: #001528;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 700;
}

/* 代码块 - 深海屏幕 */
#nice pre {
  margin: 32px 0;
  background: #000814;
  color: #00ffff;
  padding: 28px;
  border: 1px solid rgba(0, 255, 255, 0.3);
  border-radius: 8px;
  position: relative;
  box-shadow:
    0 0 30px rgba(0, 255, 255, 0.2),
    inset 0 0 30px rgba(0, 255, 255, 0.05);
}

#nice pre code {
  color: #00ffff;
  font-family: 'Monaco', 'Courier New', monospace;
  font-size: 13px;
  line-height: 1.6;
  text-shadow: 0 0 3px rgba(0, 255, 255, 0.5);
}

/* 图片 */
#nice img {
  max-width: 100%;
  height: auto;
  margin: 36px auto;
  display: block;
  border: 2px solid rgba(0, 255, 255, 0.3);
  border-radius: 12px;
  box-shadow: 0 12px 40px rgba(0, 255, 255, 0.2);
}`;
