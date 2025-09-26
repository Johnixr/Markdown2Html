export default `/* 太阳耀斑 - style-50-solar-flare.css */

/* Style 50: 太阳耀斑 - Solar Flare */

/* 全局属性 */
#nice {
  font-family: 'Futura', 'Helvetica Neue', sans-serif;
  color: #2c2c2c;
  background: linear-gradient(180deg, #fff7e6 0%, #ffd4a3 100%);
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
  color: #4a4a4a;
  margin: 18px 0;
  letter-spacing: 0.3px;
}

/* 一级标题 - 太阳核心 */
#nice h1 {
  font-size: 52px;
  font-weight: 900;
  margin: 56px 0 36px 0;
  background: radial-gradient(circle,
    #ffffff 0%, #ffe082 20%, #ffb300 40%,
    #ff6f00 60%, #ff3d00 80%, #d84315 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 5px;
  text-shadow: 0 0 40px rgba(255, 111, 0, 0.5);
}

/* 二级标题 - 日冕喷射 */
#nice h2 {
  font-size: 32px;
  font-weight: 800;
  margin: 36px 0 24px 0;
  color: #ffffff;
  background: linear-gradient(135deg, #ff6f00, #ff3d00, #d84315);
  padding: 16px 36px;
  display: inline-block;
  position: relative;
  box-shadow:
    0 4px 20px rgba(255, 111, 0, 0.4),
    0 8px 40px rgba(255, 61, 0, 0.3);
}

#nice h2:before,
#nice h2:after {
  content: '';
  position: absolute;
  width: 100px;
  height: 2px;
  background: linear-gradient(90deg, transparent, #ff6f00, transparent);
}

#nice h2:before {
  top: 50%;
  left: -100px;
  transform: translateY(-50%);
}

#nice h2:after {
  top: 50%;
  right: -100px;
  transform: translateY(-50%);
}

/* 三级标题 */
#nice h3 {
  font-size: 20px;
  font-weight: 700;
  margin: 28px 0 16px 0;
  color: #ff6f00;
  padding: 10px 20px;
  background: rgba(255, 183, 0, 0.2);
  border-left: 4px solid #ffb300;
  border-radius: 0 20px 20px 0;
}

/* 引用 - 太阳风暴 */
#nice blockquote {
  margin: 32px 0;
  padding: 24px;
  background: radial-gradient(ellipse at top,
    rgba(255, 239, 179, 0.4) 0%,
    rgba(255, 183, 0, 0.2) 50%,
    rgba(255, 111, 0, 0.1) 100%);
  border: 2px solid #ffb300;
  border-radius: 20px;
  position: relative;
}

#nice blockquote:before {
  content: '☀';
  position: absolute;
  top: -16px;
  left: 24px;
  font-size: 32px;
  color: #ff6f00;
  background: #fff7e6;
  padding: 0 8px;
}

#nice blockquote p {
  color: #5a4a3a;
  margin: 8px 0;
  font-weight: 500;
}

/* 链接 - 等离子体 */
#nice a {
  color: #ff6f00;
  text-decoration: none;
  font-weight: 700;
  padding: 2px 8px;
  background: rgba(255, 183, 0, 0.2);
  border-bottom: 2px solid #ffb300;
  transition: all 0.3s;
}

#nice a:hover {
  background: linear-gradient(90deg, #ffb300, #ff6f00);
  color: #ffffff;
  border-bottom-color: #ff3d00;
}

/* 加粗 - 核聚变 */
#nice strong {
  font-weight: 800;
  color: #ffffff;
  background: radial-gradient(circle, #ff6f00, #d84315);
  padding: 4px 14px;
  margin: 0 2px;
  display: inline-block;
  border-radius: 20px;
  box-shadow: 0 2px 10px rgba(255, 111, 0, 0.4);
}

/* 代码块 - 日珥 */
#nice pre {
  margin: 32px 0;
  background: linear-gradient(135deg, #2c2c2c, #1a1a1a);
  color: #ffb300;
  padding: 32px;
  border: 3px solid #ff6f00;
  border-radius: 12px;
  position: relative;
  box-shadow:
    inset 0 0 30px rgba(255, 111, 0, 0.2),
    0 0 20px rgba(255, 111, 0, 0.3);
}

#nice pre:before {
  content: 'SOLAR CORE';
  position: absolute;
  top: -14px;
  right: 24px;
  background: linear-gradient(90deg, #ff6f00, #ff3d00);
  color: #ffffff;
  padding: 2px 16px;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 2px;
  border-radius: 10px;
}

#nice pre code {
  color: #ffb300;
  font-family: 'Monaco', monospace;
  font-size: 13px;
  line-height: 1.6;
}`;
