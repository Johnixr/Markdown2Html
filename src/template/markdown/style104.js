export default `/* 孟菲斯风格 104 - 赛博朋克市集 Cyberpunk Memphis Market */
#nice {
  font-family: "Space Mono", "Roboto Mono", monospace;
  background:
    linear-gradient(180deg, #1a1a2e 0%, #252555 50%, #1a1a2e 100%),
    repeating-linear-gradient(
      0deg,
      transparent,
      transparent 2px,
      #00ffff 2px,
      #00ffff 4px
    );
  background-blend-mode: normal, overlay;
  color: #ffffff;
  padding: 40px;
  position: relative;
  overflow: hidden;
}

/* 网格背景 - 静态版本 */
#nice::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image:
    repeating-linear-gradient(0deg, #ff00ff 0px, transparent 1px, transparent 40px, #ff00ff 41px),
    repeating-linear-gradient(90deg, #ff00ff 0px, transparent 1px, transparent 40px, #ff00ff 41px);
  opacity: 0.1;
  pointer-events: none;
}

/* 霓虹标题 - 无动画版本 */
#nice h1 {
  font-size: 3.5em;
  font-weight: 900;
  text-transform: uppercase;
  color: #00ffff;
  text-shadow:
    0 0 10px #00ffff,
    0 0 20px #00ffff,
    0 0 30px #00ffff,
    0 0 40px #ff00ff;
  letter-spacing: 0.2em;
  margin: 40px 0;
  position: relative;
  background: linear-gradient(45deg, #00ffff, #ff00ff, #ffff00);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transform: skewY(-5deg);
}

/* 二级标题 - 像素块 */
#nice h2 {
  font-size: 2.2em;
  background: #ff00ff;
  color: #1a1a2e;
  padding: 15px 30px;
  display: inline-block;
  position: relative;
  clip-path: polygon(0 0, calc(100% - 15px) 0, 100% 15px, 100% 100%, 15px 100%, 0 calc(100% - 15px));
  margin: 30px 0;
  font-weight: 900;
  letter-spacing: 0.1em;
  box-shadow:
    5px 5px 0 #00ffff,
    10px 10px 0 #ffff00,
    10px 10px 20px rgba(255, 0, 255, 0.5);
  transform: perspective(300px) rotateY(-10deg);
}

#nice h2::before {
  content: "//";
  color: #00ffff;
  margin-right: 10px;
  font-size: 1.2em;
}

/* 三级标题 - 霓虹边框 */
#nice h3 {
  font-size: 1.8em;
  color: #ffff00;
  padding: 12px 25px;
  margin: 25px 0;
  border: 3px solid #00ffff;
  position: relative;
  background: rgba(26, 26, 46, 0.9);
  text-transform: uppercase;
  letter-spacing: 0.15em;
  font-weight: 700;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.5);
}

#nice h3::after {
  content: "►";
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  color: #ff00ff;
  font-size: 1.5em;
}

/* 段落 - 改善对比度 */
#nice p {
  background: rgba(255, 255, 255, 0.95);
  border: 2px solid #00ffff;
  padding: 20px 25px;
  margin: 20px 0;
  color: #1a1a2e;
  font-size: 1.1em;
  line-height: 1.8;
  position: relative;
  font-family: "Courier New", monospace;
  box-shadow:
    inset 0 0 20px rgba(0, 255, 255, 0.1),
    0 0 10px rgba(0, 255, 255, 0.5);
}

#nice p::before {
  content: ">";
  position: absolute;
  left: 5px;
  top: 20px;
  color: #ff00ff;
  font-weight: bold;
}

/* 强调文本 - 静态版本 */
#nice strong {
  color: #ff00ff;
  font-weight: 900;
  position: relative;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  display: inline-block;
  padding: 2px 8px;
  background: rgba(255, 0, 255, 0.2);
  border: 1px solid #ff00ff;
  text-shadow: 1px 0 #00ffff, -1px 0 #ffff00;
}

/* 斜体 - 数字雨效果 */
#nice em {
  color: #00ffff;
  font-style: normal;
  font-weight: bold;
  background: linear-gradient(180deg, #00ffff, #00ffaa);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
  text-shadow: 0 2px 5px rgba(0, 255, 255, 0.5);
}

/* 引用块 - 全息投影 */
#nice blockquote {
  background: linear-gradient(135deg, rgba(255, 0, 255, 0.2), rgba(0, 255, 255, 0.2));
  border-left: 5px solid #ff00ff;
  border-right: 5px solid #00ffff;
  padding: 25px;
  margin: 30px 0;
  position: relative;
  color: #ffffff;
  font-size: 1.15em;
  transform: perspective(500px) rotateY(2deg);
  box-shadow:
    0 0 30px rgba(255, 0, 255, 0.3),
    inset 0 0 30px rgba(0, 255, 255, 0.1);
}

#nice blockquote::before {
  content: "『";
  font-size: 3em;
  color: #ffff00;
  position: absolute;
  top: -10px;
  left: 10px;
  text-shadow: 0 0 10px #ffff00;
}

#nice blockquote::after {
  content: "』";
  font-size: 3em;
  color: #ffff00;
  position: absolute;
  bottom: -10px;
  right: 10px;
  text-shadow: 0 0 10px #ffff00;
}

/* 代码块 - 黑客终端 */
#nice pre code {
  background: #000;
  color: #00ff00;
  padding: 25px;
  font-family: "Fira Code", "Courier New", monospace;
  font-size: 0.95em;
  border: 2px solid #00ffff;
  position: relative;
  overflow-x: auto;
  box-shadow:
    0 0 20px rgba(0, 255, 0, 0.5),
    inset 0 0 20px rgba(0, 255, 0, 0.1);
  margin: 25px 0;
}

#nice pre code::before {
  content: "[SYSTEM] CODE INJECTION //";
  display: block;
  color: #ff00ff;
  margin-bottom: 15px;
  font-weight: bold;
  letter-spacing: 0.1em;
}

/* 行内代码 - 像素按钮 */
#nice code {
  background: linear-gradient(45deg, #ff00ff, #00ffff);
  color: #0a0e27;
  padding: 3px 8px;
  font-weight: bold;
  font-family: "Space Mono", monospace;
  border-radius: 0;
  box-shadow:
    2px 2px 0 #ffff00,
    4px 4px 0 #0a0e27;
  position: relative;
  display: inline-block;
  transform: translateY(-2px);
}

/* 链接 - 霓虹按钮 */
#nice a {
  color: #00ffff;
  text-decoration: none;
  position: relative;
  font-weight: bold;
  padding: 5px 10px;
  display: inline-block;
  background: rgba(0, 255, 255, 0.1);
  border: 1px solid #00ffff;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

#nice a:hover {
  color: #ffff00;
  border-color: #ff00ff;
  text-shadow: 0 0 10px #ffff00;
  box-shadow:
    0 0 10px #ff00ff,
    inset 0 0 10px rgba(255, 0, 255, 0.3);
  background: rgba(255, 0, 255, 0.2);
}

/* 列表 - 数据流 */
#nice ul, #nice ol {
  background: rgba(26, 26, 46, 0.9);
  border: 1px solid #00ffff;
  padding: 20px 35px;
  margin: 25px 0;
  position: relative;
  box-shadow: inset 0 0 20px rgba(0, 255, 255, 0.1);
}

#nice ul::before, #nice ol::before {
  content: "[DATA STREAM]";
  position: absolute;
  top: -12px;
  left: 10px;
  background: #1a1a2e;
  color: #ffff00;
  padding: 0 10px;
  font-size: 0.9em;
  font-weight: bold;
  letter-spacing: 0.1em;
}

#nice li {
  margin: 12px 0;
  padding-left: 30px;
  position: relative;
  color: #ffffff;
  font-size: 1.05em;
}

#nice ul li::before {
  content: "◆";
  position: absolute;
  left: 0;
  color: #ff00ff;
  font-size: 1.2em;
}

#nice ol {
  counter-reset: cyber-counter;
}

#nice ol li {
  counter-increment: cyber-counter;
}

#nice ol li::before {
  content: "[" counter(cyber-counter, decimal-leading-zero) "]";
  position: absolute;
  left: 0;
  color: #00ffff;
  font-weight: bold;
  font-family: "Space Mono", monospace;
}

/* 表格 - 数据矩阵 */
#nice table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 2px;
  background: #000;
  margin: 30px 0;
  box-shadow: 0 0 30px rgba(0, 255, 255, 0.3);
  border: 2px solid #00ffff;
  position: relative;
  overflow: hidden;
}

#nice th {
  background: linear-gradient(45deg, #ff00ff, #00ffff);
  color: #0a0e27;
  padding: 12px;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-size: 1.1em;
  text-shadow: 1px 1px 0 rgba(255, 255, 255, 0.3);
}

#nice td {
  background: rgba(26, 26, 46, 0.9);
  color: #00ff00;
  padding: 10px;
  font-family: "Space Mono", monospace;
  border: 1px solid rgba(0, 255, 255, 0.3);
}

#nice tr:hover td {
  background: rgba(255, 0, 255, 0.3);
  color: #ffff00;
  text-shadow: 0 0 5px currentColor;
}

/* 分割线 - 数据传输 */
#nice hr {
  border: none;
  height: 20px;
  background: repeating-linear-gradient(
    90deg,
    #ff00ff 0px,
    #ff00ff 10px,
    transparent 10px,
    transparent 20px,
    #00ffff 20px,
    #00ffff 30px,
    transparent 30px,
    transparent 40px
  );
  position: relative;
  margin: 40px 0;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(255, 0, 255, 0.5);
}

/* 图片 - 全息显示 */
#nice img {
  max-width: 100%;
  height: auto;
  border: 3px solid #00ffff;
  position: relative;
  display: block;
  margin: 30px auto;
  box-shadow:
    0 0 30px rgba(0, 255, 255, 0.5),
    inset 0 0 30px rgba(0, 255, 255, 0.1);
  filter: contrast(1.2) saturate(1.5);
}`;
