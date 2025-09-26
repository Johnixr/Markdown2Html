export default `/* 量子紫外光谱 - style-33-quantum-ultraviolet.css */

/* Style 33: 量子紫外光谱 - Quantum Ultraviolet Spectrum */

/* 全局属性 */
#nice {
  font-family: 'SF Pro Display', 'Arial', sans-serif;
  color: #e1e8ff;
  background: linear-gradient(180deg, #0d0221 0%, #1a0b3e 100%);
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
  color: #c3cff4;
  margin: 18px 0;
  letter-spacing: 0.3px;
}

/* 一级标题 - 量子态叠加 */
#nice h1 {
  font-size: 46px;
  font-weight: 900;
  margin: 56px 0 36px 0;
  background: linear-gradient(90deg,
    #8b00ff 0%,
    #7c4dff 20%,
    #b388ff 40%,
    #00e5ff 60%,
    #b388ff 80%,
    #8b00ff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 4px;
  padding: 36px 0;
  position: relative;
}

#nice h1:before,
#nice h1:after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, #8b00ff, transparent);
}

#nice h1:before { top: 0; }
#nice h1:after { bottom: 0; }

/* 二级标题 - 紫外辐射 */
#nice h2 {
  font-size: 30px;
  font-weight: 700;
  margin: 36px 0 24px 0;
  color: #00e5ff;
  padding: 16px 32px;
  background: rgba(139, 0, 255, 0.2);
  border: 2px solid #8b00ff;
  display: inline-block;
  clip-path: polygon(0 0, calc(100% - 15px) 0, 100% 50%, calc(100% - 15px) 100%, 0 100%);
}

/* 三级标题 */
#nice h3 {
  font-size: 20px;
  font-weight: 600;
  margin: 28px 0 16px 0;
  color: #b388ff;
  padding-left: 24px;
  position: relative;
}

#nice h3:before {
  content: '◈';
  position: absolute;
  left: 0;
  color: #00e5ff;
  font-size: 16px;
}

/* 引用 - 量子波动 */
#nice blockquote {
  margin: 32px 0;
  padding: 24px;
  background: rgba(139, 0, 255, 0.1);
  border-left: 3px solid #8b00ff;
  border-right: 3px solid #00e5ff;
  position: relative;
}

#nice blockquote p {
  color: #e1e8ff;
  margin: 8px 0;
}

/* 链接 - 等离子体 */
#nice a {
  color: #00e5ff;
  text-decoration: none;
  font-weight: 600;
  padding: 2px 8px;
  background: rgba(0, 229, 255, 0.1);
  border: 1px solid #00e5ff;
  transition: all 0.3s;
}

#nice a:hover {
  background: rgba(0, 229, 255, 0.3);
  box-shadow: 0 0 12px rgba(0, 229, 255, 0.5);
}

/* 加粗 - 能量聚焦 */
#nice strong {
  font-weight: 700;
  color: #0d0221;
  background: linear-gradient(135deg, #8b00ff, #00e5ff);
  padding: 3px 12px;
  margin: 0 2px;
  border-radius: 20px;
  display: inline-block;
}

/* 代码块 - 量子计算 */
#nice pre {
  margin: 32px 0;
  background: #0d0221;
  color: #00e5ff;
  padding: 28px;
  border: 1px solid #8b00ff;
  position: relative;
  box-shadow:
    0 0 30px rgba(139, 0, 255, 0.3),
    inset 0 0 30px rgba(0, 229, 255, 0.1);
}

#nice pre code {
  color: #00e5ff;
  font-family: 'Monaco', monospace;
  font-size: 13px;
  line-height: 1.6;
}`;
