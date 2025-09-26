export default `/* 雨夜霓虹 - style-49-rainy-neon.css */

/* Style 49: 雨夜霓虹 - Rainy Night Neon */

/* 全局属性 */
#nice {
  font-family: 'SF Pro Display', 'Arial', sans-serif;
  color: #e0e0e0;
  background: linear-gradient(180deg, #0a0a0a 0%, #1a1a2e 100%);
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
  color: #b8b8b8;
  margin: 18px 0;
  letter-spacing: 0.3px;
}

/* 一级标题 - 霓虹招牌 */
#nice h1 {
  font-size: 48px;
  font-weight: 900;
  margin: 56px 0 36px 0;
  color: #ffffff;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 4px;
  text-shadow:
    0 0 10px #ff00ff,
    0 0 20px #ff00ff,
    0 0 30px #ff00ff,
    0 0 40px #00ffff,
    0 0 70px #00ffff,
    0 0 80px #00ffff;
}

/* 二级标题 - 紫色反光 */
#nice h2 {
  font-size: 30px;
  font-weight: 700;
  margin: 36px 0 24px 0;
  color: #ffffff;
  background: linear-gradient(135deg, #ff00ff, #00ffff);
  padding: 14px 32px;
  display: inline-block;
  position: relative;
  box-shadow:
    0 4px 20px rgba(255, 0, 255, 0.5),
    inset 0 0 20px rgba(0, 255, 255, 0.3);
}

#nice h2:after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, #ff00ff, transparent);
  filter: blur(4px);
}

/* 三级标题 */
#nice h3 {
  font-size: 20px;
  font-weight: 600;
  margin: 28px 0 16px 0;
  color: #00ffff;
  padding: 8px 16px;
  border-left: 3px solid #ff00ff;
  background: rgba(255, 0, 255, 0.1);
  text-shadow: 0 0 10px currentColor;
}

/* 引用 - 雨水倒影 */
#nice blockquote {
  margin: 32px 0;
  padding: 24px;
  background: linear-gradient(180deg,
    rgba(255, 0, 255, 0.1) 0%,
    rgba(0, 255, 255, 0.1) 100%);
  border: 1px solid rgba(255, 0, 255, 0.3);
  position: relative;
  backdrop-filter: blur(10px);
}

#nice blockquote:before {
  content: '💧';
  position: absolute;
  top: -12px;
  left: 20px;
  font-size: 24px;
  filter: blur(1px);
}

#nice blockquote p {
  color: #e0e0e0;
  margin: 8px 0;
  text-shadow: 0 0 5px rgba(255, 0, 255, 0.3);
}

/* 链接 - 电光蓝 */
#nice a {
  color: #00ffff;
  text-decoration: none;
  font-weight: 600;
  padding: 2px 8px;
  background: rgba(0, 255, 255, 0.1);
  border: 1px solid #00ffff;
  transition: all 0.3s;
  text-shadow: 0 0 5px currentColor;
}

#nice a:hover {
  background: rgba(0, 255, 255, 0.3);
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.5);
}

/* 加粗 - 霓虹粉 */
#nice strong {
  font-weight: 700;
  color: #0a0a0a;
  background: linear-gradient(135deg, #ff00ff, #ff69b4);
  padding: 3px 12px;
  margin: 0 2px;
  display: inline-block;
  box-shadow:
    0 0 10px rgba(255, 0, 255, 0.5),
    inset 0 0 10px rgba(255, 255, 255, 0.2);
}

/* 代码块 - 湿润街道 */
#nice pre {
  margin: 32px 0;
  background: #0a0a0a;
  color: #00ffff;
  padding: 28px;
  border: 1px solid #ff00ff;
  position: relative;
  box-shadow:
    0 0 20px rgba(255, 0, 255, 0.3),
    inset 0 0 20px rgba(0, 255, 255, 0.1);
}

#nice pre:before {
  content: 'NEON RAIN';
  position: absolute;
  top: 8px;
  right: 12px;
  color: #ff00ff;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 2px;
  text-shadow: 0 0 10px currentColor;
}

#nice pre code {
  color: #00ffff;
  font-family: 'Monaco', monospace;
  font-size: 13px;
  line-height: 1.6;
  text-shadow: 0 0 3px currentColor;
}`;
