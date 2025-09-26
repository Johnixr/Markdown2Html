export default `/* 赛博朋克霓虹迷幻 - style-3-cyberpunk-neon.css */

/* Style 3: 赛博朋克霓虹迷幻 - Cyberpunk Neon Dream */

/* 全局属性 - 暗夜霓虹 */
#nice {
  font-family: 'JetBrains Mono', 'Fira Code', 'SF Mono', monospace;
  color: #e0e0e0;
  background: #0a0a0f;
  font-size: 14px;
  line-height: 1.8;
  padding: 40px;
  max-width: 900px;
  margin: 0 auto;
  text-shadow: 0 0 2px rgba(0, 255, 255, 0.3);
}

/* 段落 - 荧光文字 */
#nice p {
  font-size: 14px;
  line-height: 1.9;
  color: #c0c0d0;
  margin: 20px 0;
  letter-spacing: 0.5px;
  position: relative;
}

/* 一级标题 - 霓虹灯管 */
#nice h1 {
  font-size: 36px;
  font-weight: 900;
  margin: 52px 0 36px 0;
  text-transform: uppercase;
  letter-spacing: 4px;
  position: relative;
  color: #00ffff;
  text-align: center;
  padding: 24px;
  background: linear-gradient(45deg,
    transparent 30%,
    rgba(255, 0, 255, 0.1) 30%,
    rgba(255, 0, 255, 0.1) 70%,
    transparent 70%);
  text-shadow:
    0 0 10px #00ffff,
    0 0 20px #00ffff,
    0 0 30px #00ffff,
    0 0 40px #ff00ff;
  animation: neon-flicker 2s infinite alternate;
}

#nice h1 .content {
  display: inline-block;
  border: 2px solid #00ffff;
  padding: 16px 32px;
  position: relative;
}

#nice h1 .content:before,
#nice h1 .content:after {
  content: '';
  position: absolute;
  width: 100%;
  height: 2px;
  background: #ff00ff;
  left: 0;
}

#nice h1 .content:before {
  top: -8px;
}

#nice h1 .content:after {
  bottom: -8px;
}

/* 二级标题 - 数码故障 */
#nice h2 {
  font-size: 26px;
  font-weight: 700;
  margin: 40px 0 24px 0;
  color: #ff00ff;
  position: relative;
  padding: 12px 20px;
  background: rgba(255, 0, 255, 0.1);
  border-left: 4px solid #ff00ff;
  text-transform: uppercase;
  letter-spacing: 2px;
}

#nice h2 .content {
  position: relative;
  display: inline-block;
}

#nice h2 .content:after {
  content: attr(data-text);
  position: absolute;
  left: 2px;
  top: 2px;
  color: #00ffff;
  opacity: 0.5;
  z-index: -1;
}

/* 三级标题 - 扫描线 */
#nice h3 {
  font-size: 20px;
  font-weight: 600;
  margin: 32px 0 18px 0;
  color: #00ff00;
  position: relative;
  padding: 10px 0;
  overflow: hidden;
}

#nice h3 .content {
  background: linear-gradient(90deg,
    transparent,
    rgba(0, 255, 0, 0.2),
    transparent);
  padding: 6px 16px;
  display: inline-block;
}

#nice h3:after {
  content: '';
  position: absolute;
  width: 100%;
  height: 1px;
  background: #00ff00;
  bottom: 0;
  left: -100%;
  animation: scan 3s infinite;
}

/* 无序列表 - 像素标记 */
#nice ul {
  margin: 24px 0;
  padding-left: 0;
  list-style: none;
}

#nice ul li {
  position: relative;
  padding-left: 40px;
  margin: 14px 0;
  color: #c0c0d0;
  border-bottom: 1px dashed rgba(0, 255, 255, 0.2);
  padding-bottom: 10px;
}

#nice ul li:before {
  content: '▸';
  position: absolute;
  left: 0;
  color: #00ffff;
  font-size: 24px;
  text-shadow: 0 0 10px #00ffff;
  animation: blink 1s infinite;
}

/* 有序列表 - 数字矩阵 */
#nice ol {
  margin: 24px 0;
  padding-left: 0;
  list-style: none;
  counter-reset: cyber-count;
}

#nice ol li {
  position: relative;
  padding-left: 60px;
  margin: 16px 0;
  counter-increment: cyber-count;
  background: linear-gradient(90deg,
    rgba(255, 0, 255, 0.05) 0%,
    transparent 100%);
  padding-top: 12px;
  padding-bottom: 12px;
}

#nice ol li:before {
  content: "[" counter(cyber-count, decimal-leading-zero) "]";
  position: absolute;
  left: 8px;
  color: #ff00ff;
  font-family: 'Courier New', monospace;
  font-weight: bold;
  font-size: 16px;
  text-shadow: 0 0 5px #ff00ff;
}

/* 引用 - 数据流 */
#nice blockquote {
  margin: 32px 0;
  padding: 24px;
  background: linear-gradient(135deg,
    rgba(0, 255, 255, 0.1) 0%,
    rgba(255, 0, 255, 0.1) 100%);
  border: 1px solid #00ffff;
  position: relative;
  overflow: hidden;
}

#nice blockquote:before {
  content: '//TRANSMISSION_START//';
  display: block;
  color: #00ff00;
  font-size: 10px;
  margin-bottom: 12px;
  font-family: monospace;
  letter-spacing: 2px;
}

#nice blockquote:after {
  content: '//TRANSMISSION_END//';
  display: block;
  color: #00ff00;
  font-size: 10px;
  margin-top: 12px;
  font-family: monospace;
  letter-spacing: 2px;
}

#nice blockquote p {
  color: #00ffff;
  font-family: monospace;
  line-height: 1.8;
  margin: 8px 0;
}

/* 链接 - 交互按钮 */
#nice a {
  color: #00ff00;
  text-decoration: none;
  font-weight: 600;
  position: relative;
  padding: 4px 12px;
  border: 1px solid #00ff00;
  background: rgba(0, 255, 0, 0.1);
  transition: all 0.3s;
  display: inline-block;
  text-transform: uppercase;
  font-size: 12px;
  letter-spacing: 1px;
}

#nice a:hover {
  background: #00ff00;
  color: #0a0a0f;
  box-shadow:
    0 0 20px #00ff00,
    inset 0 0 20px rgba(0, 0, 0, 0.2);
  transform: scale(1.05);
}

/* 加粗 - 能量条 */
#nice strong {
  font-weight: 700;
  color: #0a0a0f;
  background: #00ffff;
  padding: 4px 12px;
  margin: 0 4px;
  display: inline-block;
  position: relative;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 255, 255, 0.5);
}

/* 代码块 - 终端界面 */
#nice pre {
  margin: 32px 0;
  background: #000000;
  border: 2px solid #00ffff;
  padding: 20px;
  position: relative;
  font-family: 'Courier New', monospace;
  box-shadow:
    0 0 20px rgba(0, 255, 255, 0.5),
    inset 0 0 20px rgba(0, 255, 255, 0.1);
}

#nice pre:before {
  content: 'TERMINAL://ROOT@CYBER_SYSTEM';
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  background: #00ffff;
  color: #000000;
  padding: 4px 12px;
  font-size: 11px;
  font-weight: bold;
}

#nice pre code {
  color: #00ff00;
  font-size: 13px;
  line-height: 1.6;
  text-shadow: 0 0 3px rgba(0, 255, 0, 0.5);
}

@keyframes neon-flicker {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.8; }
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.3; }
}

@keyframes scan {
  to { left: 100%; }
}`;
