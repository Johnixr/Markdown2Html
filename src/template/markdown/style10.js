export default `/* 未来主义宣言 - style-10-futurism-manifesto.css */

/* Style 10: 未来主义宣言 - Futurism Manifesto Declaration */

/* 全局属性 - 速度美学 */
#nice {
  font-family: 'Eurostile', 'Microgramma', 'Arial Black', sans-serif;
  color: #0a0a0a;
  background: linear-gradient(180deg, #e0e0e0 0%, #c0c0c0 100%);
  font-size: 14px;
  line-height: 1.6;
  padding: 40px;
  max-width: 920px;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
}

#nice:before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: repeating-linear-gradient(
    45deg,
    transparent,
    transparent 10px,
    rgba(255, 0, 0, 0.03) 10px,
    rgba(255, 0, 0, 0.03) 20px
  );
  animation: speed-lines 20s linear infinite;
  z-index: -1;
}

/* 段落 - 动态推进 */
#nice p {
  font-size: 14px;
  line-height: 1.8;
  color: #1a1a1a;
  margin: 20px 0;
}

/* 一级标题 - 爆炸宣言 */
#nice h1 {
  font-size: 64px;
  font-weight: 900;
  margin: 72px 0 48px 0;
  color: #ff0000;
  text-transform: uppercase;
  letter-spacing: -4px;
  position: relative;
  text-align: center;
  font-style: italic;
  transform: perspective(400px) rotateY(-5deg);
  text-shadow:
    4px 0 0 #000000,
    8px 0 0 rgba(255,0,0,0.5),
    12px 0 0 rgba(0,0,0,0.3);
}

#nice h1 .content {
  display: block;
  position: relative;
}

#nice h1 .content:before,
#nice h1 .content:after {
  content: '→→→';
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  color: #000000;
  font-size: 32px;
  letter-spacing: -8px;
}

#nice h1 .content:before {
  left: -80px;
}

#nice h1 .content:after {
  right: -80px;
  transform: translateY(-50%) scaleX(-1);
}

/* 二级标题 - 机械动力 */
#nice h2 {
  font-size: 36px;
  font-weight: 800;
  margin: 48px 0 28px 0;
  color: #000000;
  text-transform: uppercase;
  position: relative;
  padding: 16px 0;
  font-style: italic;
  transform: skewX(-15deg);
}

#nice h2 .content {
  display: inline-block;
  background: linear-gradient(90deg, #ff0000 0%, transparent 100%);
  padding: 8px 24px;
  position: relative;
}

#nice h2 .content:after {
  content: '';
  position: absolute;
  top: 0;
  right: -40px;
  width: 0;
  height: 0;
  border-top: 28px solid transparent;
  border-bottom: 28px solid transparent;
  border-left: 40px solid #ff0000;
}

/* 三级标题 - 速度标记 */
#nice h3 {
  font-size: 24px;
  font-weight: 700;
  margin: 36px 0 20px 0;
  color: #0a0a0a;
  position: relative;
  text-transform: uppercase;
  letter-spacing: 2px;
  padding-left: 40px;
}

#nice h3 .content:before {
  content: '▶';
  position: absolute;
  left: 0;
  color: #ff0000;
  font-size: 20px;
  animation: pulse-arrow 1s infinite;
}

/* 无序列表 - 子弹轨迹 */
#nice ul {
  margin: 24px 0;
  padding-left: 0;
  list-style: none;
}

#nice ul li {
  position: relative;
  padding-left: 48px;
  margin: 14px 0;
  color: #1a1a1a;
  font-weight: 500;
}

#nice ul li:before {
  content: '';
  position: absolute;
  left: 0;
  top: 8px;
  width: 32px;
  height: 2px;
  background: linear-gradient(90deg, #ff0000 0%, transparent 100%);
  animation: shoot 2s infinite;
}

#nice ul li:after {
  content: '▸';
  position: absolute;
  left: 28px;
  top: 0;
  color: #ff0000;
  font-size: 16px;
}

/* 有序列表 - 倒计时 */
#nice ol {
  margin: 24px 0;
  padding-left: 0;
  list-style: none;
  counter-reset: future-count;
}

#nice ol li {
  position: relative;
  padding-left: 64px;
  margin: 16px 0;
  counter-increment: future-count;
  font-weight: 500;
  color: #1a1a1a;
}

#nice ol li:before {
  content: counter(future-count, decimal-leading-zero);
  position: absolute;
  left: 0;
  color: #ff0000;
  font-size: 24px;
  font-weight: 900;
  font-style: italic;
  text-shadow: 2px 2px 0 #000000;
}

/* 引用 - 战斗号角 */
#nice blockquote {
  margin: 40px 0;
  padding: 24px;
  background: #000000;
  color: #ffffff;
  position: relative;
  transform: skewX(-5deg);
  border-left: 8px solid #ff0000;
  border-right: 8px solid #ff0000;
}

#nice blockquote:before,
#nice blockquote:after {
  content: '!!!';
  position: absolute;
  color: #ff0000;
  font-size: 32px;
  font-weight: 900;
}

#nice blockquote:before {
  top: -16px;
  left: 16px;
}

#nice blockquote:after {
  bottom: -16px;
  right: 16px;
}

#nice blockquote p {
  color: #ffffff;
  font-size: 16px;
  line-height: 1.6;
  margin: 8px 0;
  font-style: italic;
  text-transform: uppercase;
  letter-spacing: 1px;
}

/* 链接 - 推进按钮 */
#nice a {
  color: #ffffff;
  text-decoration: none;
  font-weight: 800;
  padding: 6px 20px;
  background: #ff0000;
  clip-path: polygon(0 0, calc(100% - 10px) 0, 100% 50%, calc(100% - 10px) 100%, 0 100%);
  display: inline-block;
  transition: all 0.2s;
  text-transform: uppercase;
  margin: 0 8px 0 4px;
  font-size: 12px;
  letter-spacing: 1px;
}

#nice a:hover {
  background: #000000;
  transform: translateX(4px);
  box-shadow: -4px 0 0 #ff0000;
}

/* 加粗 - 力量冲击 */
#nice strong {
  font-weight: 900;
  color: #ff0000;
  text-transform: uppercase;
  letter-spacing: 1px;
  position: relative;
  font-style: italic;
  text-shadow: 2px 0 0 #000000;
  padding: 0 4px;
}

/* 斜体 - 速度倾斜 */
#nice em {
  font-style: italic;
  color: #0a0a0a;
  font-weight: 600;
  transform: skewX(-15deg);
  display: inline-block;
  border-bottom: 2px solid #ff0000;
}

/* 分隔线 - 飞行航迹 */
#nice hr {
  border: none;
  height: 4px;
  margin: 56px 0;
  position: relative;
  overflow: hidden;
  background: linear-gradient(90deg, transparent 0%, #ff0000 10%, #ff0000 90%, transparent 100%);
}

#nice hr:before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, #ffffff 50%, transparent);
  animation: fly-through 3s infinite;
}

/* 图片 - 机械框架 */
#nice img {
  max-width: 100%;
  height: auto;
  margin: 48px 0;
  display: block;
  border: 4px solid #000000;
  position: relative;
  clip-path: polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px));
  background: #ffffff;
  padding: 8px;
}

/* 代码块 - 控制台 */
#nice pre {
  margin: 40px 0;
  background: #0a0a0a;
  color: #ff0000;
  padding: 32px;
  position: relative;
  border-left: 4px solid #ff0000;
  font-family: 'Courier New', monospace;
  overflow-x: auto;
}

#nice pre:before {
  content: '[SYSTEM//INITIALIZE]';
  position: absolute;
  top: 8px;
  left: 16px;
  color: #ffffff;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 2px;
  opacity: 0.6;
}

#nice pre code {
  color: #ff0000;
  font-size: 13px;
  line-height: 1.6;
  display: block;
  margin-top: 16px;
}

/* 表格 - 数据网格 */
#nice table {
  width: 100%;
  margin: 40px 0;
  border-collapse: collapse;
  background: #ffffff;
  border: 3px solid #000000;
  transform: perspective(600px) rotateX(2deg);
}

#nice table tr th,
#nice table tr td {
  padding: 12px 16px;
  text-align: left;
  font-size: 14px;
  border: 1px solid #000000;
  font-weight: 500;
}

#nice table tr th {
  background: #ff0000;
  color: #ffffff;
  font-weight: 800;
  text-transform: uppercase;
  font-size: 12px;
  letter-spacing: 1px;
  font-style: italic;
}

#nice table tr:nth-child(even) td {
  background: rgba(255, 0, 0, 0.05);
}

@keyframes speed-lines {
  from { transform: translateX(0); }
  to { transform: translateX(20px); }
}

@keyframes pulse-arrow {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.2); }
}

@keyframes shoot {
  0% { width: 0; opacity: 0; }
  50% { width: 32px; opacity: 1; }
  100% { width: 32px; opacity: 0.3; }
}

@keyframes fly-through {
  to { left: 100%; }
}`;
