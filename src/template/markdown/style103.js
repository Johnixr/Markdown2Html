export default `/* 孟菲斯风格 103 - 霓虹狂欢夜 Memphis Neon Party */
#nice {
  font-family: "Comic Sans MS", "Marker Felt", "Arial Black", sans-serif;
  background:
    repeating-linear-gradient(
      45deg,
      #ff006e,
      #ff006e 20px,
      #ffbe0b 20px,
      #ffbe0b 40px
    ),
    linear-gradient(135deg, #8338ec 0%, #3a86ff 100%);
  background-blend-mode: multiply;
  padding: 45px;
  position: relative;
  overflow: hidden;
}

/* 装饰性几何图形背景 */
#nice::before {
  content: "";
  position: absolute;
  top: -50px;
  right: -50px;
  width: 200px;
  height: 200px;
  background: #fb5607;
  transform: rotate(45deg);
  opacity: 0.6;
  z-index: 0;
}

#nice::after {
  content: "";
  position: absolute;
  bottom: -100px;
  left: -100px;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: repeating-radial-gradient(
    circle at center,
    #ffbe0b,
    #ffbe0b 10px,
    transparent 10px,
    transparent 20px
  );
  opacity: 0.5;
  z-index: 0;
}

#nice > * {
  position: relative;
  z-index: 1;
}

/* 超大标题 - 倾斜霓虹效果 */
#nice h1 {
  font-size: 4.5em;
  font-weight: 900;
  color: #ffbe0b;
  text-transform: uppercase;
  letter-spacing: -0.05em;
  transform: skew(-15deg, -5deg);
  background: linear-gradient(45deg, #ff006e, #ffbe0b, #fb5607);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow:
    5px 5px 0 #8338ec,
    10px 10px 0 #3a86ff,
    10px 10px 20px rgba(131, 56, 236, 0.5);
  margin: 40px 0;
  display: inline-block;
  position: relative;
}

/* 次标题 - 几何形状背景 */
#nice h2 {
  font-size: 2.8em;
  background: #ff006e;
  color: #ffbe0b;
  padding: 20px 40px;
  display: inline-block;
  position: relative;
  transform: rotate(-3deg);
  box-shadow:
    10px 10px 0 #8338ec,
    20px 20px 0 #3a86ff;
  margin: 35px 0;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  clip-path: polygon(0 0, 100% 0, 95% 100%, 5% 100%);
}

#nice h2::before {
  content: "▲";
  position: absolute;
  left: -40px;
  top: 50%;
  transform: translateY(-50%) rotate(90deg);
  color: #fb5607;
  font-size: 1.5em;
}

/* 三级标题 - 波浪下划线 */
#nice h3 {
  font-size: 2em;
  color: #3a86ff;
  position: relative;
  display: inline-block;
  padding: 10px 20px;
  background: #ffbe0b;
  margin: 25px 0;
  transform: skewX(-10deg);
  font-weight: 900;
  text-transform: uppercase;
}

#nice h3::after {
  content: "";
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 100%;
  height: 8px;
  background: repeating-linear-gradient(
    90deg,
    #ff006e,
    #ff006e 5px,
    #8338ec 5px,
    #8338ec 10px
  );
  transform: skewX(10deg);
}

/* 段落 - 不规则边框 */
#nice p {
  background: rgba(255, 255, 255, 0.95);
  padding: 20px 25px;
  margin: 20px 0;
  color: #2d3436;
  font-size: 1.15em;
  line-height: 1.8;
  border: 5px solid #ff006e;
  position: relative;
  transform: rotate(-1deg);
  box-shadow: 8px 8px 0 #ffbe0b;
  clip-path: polygon(
    0 0,
    calc(100% - 20px) 0,
    100% 20px,
    100% 100%,
    20px 100%,
    0 calc(100% - 20px)
  );
}

/* 强调文本 - 高亮标记效果 */
#nice strong {
  background: linear-gradient(to bottom, transparent 40%, #ffbe0b 40%, #ffbe0b 90%, transparent 90%);
  padding: 0 8px;
  font-weight: 900;
  color: #ff006e;
  display: inline-block;
  transform: rotate(-2deg);
  position: relative;
}

#nice strong::after {
  content: "!";
  position: absolute;
  right: -15px;
  top: -5px;
  color: #8338ec;
  font-size: 1.5em;
  transform: rotate(15deg);
}

/* 斜体 - 手写风格 */
#nice em {
  font-style: italic;
  color: #8338ec;
  font-weight: bold;
  text-decoration: underline wavy #fb5607;
  text-decoration-thickness: 3px;
  text-underline-offset: 5px;
  letter-spacing: 0.05em;
}

/* 引用块 - 对话气泡风格 */
#nice blockquote {
  position: relative;
  background: #3a86ff;
  color: white;
  padding: 30px;
  margin: 40px 20px;
  border-radius: 20px;
  transform: rotate(2deg);
  box-shadow:
    -10px 10px 0 #ff006e,
    -20px 20px 0 #ffbe0b;
  font-size: 1.2em;
  font-weight: bold;
}

#nice blockquote::before {
  content: "💬";
  font-size: 3em;
  position: absolute;
  top: -20px;
  left: 20px;
  transform: rotate(-15deg);
}

#nice blockquote::after {
  content: "";
  position: absolute;
  bottom: -30px;
  left: 50px;
  width: 0;
  height: 0;
  border: 30px solid transparent;
  border-top-color: #3a86ff;
  transform: rotate(-10deg);
}

/* 代码块 - 复古电脑屏幕 */
#nice pre code {
  background: #2d3436;
  color: #00ff00;
  padding: 30px;
  border: 10px solid #8338ec;
  border-radius: 10px;
  font-family: "Courier New", monospace;
  font-size: 1.1em;
  position: relative;
  box-shadow:
    0 0 0 15px #ff006e,
    0 0 0 20px #ffbe0b;
  transform: perspective(500px) rotateY(5deg);
  overflow-x: auto;
}

#nice pre code::before {
  content: "💾 CODE.EXE";
  position: absolute;
  top: -35px;
  left: 0;
  background: #8338ec;
  color: white;
  padding: 5px 15px;
  font-weight: bold;
  letter-spacing: 0.1em;
}

/* 行内代码 - 像素风格 */
#nice code {
  background: #fb5607;
  color: white;
  padding: 3px 10px;
  font-weight: bold;
  font-family: "Courier New", monospace;
  border: 2px solid #2d3436;
  box-shadow: 3px 3px 0 #2d3436;
  position: relative;
  top: -2px;
}

/* 链接 - 弹跳动画 */
#nice a {
  color: #ff006e;
  text-decoration: none;
  font-weight: bold;
  position: relative;
  display: inline-block;
  padding: 2px 8px;
  background: #ffbe0b;
  transform: rotate(-2deg);
}

#nice a:hover {
  transform: rotate(2deg);
  background: #fb5607;
  color: white;
  box-shadow: 5px 5px 0 #8338ec;
}

#nice a::after {
  content: "→";
  margin-left: 5px;
  display: inline-block;
}

/* 列表 - 彩色几何标记 */
#nice ul, #nice ol {
  background: rgba(255, 255, 255, 0.9);
  padding: 25px 40px;
  margin: 25px 0;
  border-left: 10px solid;
  border-image: linear-gradient(to bottom, #ff006e, #ffbe0b, #fb5607, #8338ec, #3a86ff) 1;
  transform: skew(-2deg);
}

#nice li {
  margin: 15px 0;
  position: relative;
  padding-left: 35px;
  color: #2d3436;
  font-weight: 600;
  font-size: 1.1em;
}

#nice ul li::before {
  content: "";
  position: absolute;
  left: 0;
  top: 8px;
  width: 20px;
  height: 20px;
  background: #ff006e;
  transform: rotate(45deg);
  box-shadow: 3px 3px 0 #ffbe0b;
}

#nice ol {
  counter-reset: memphis-counter;
}

#nice ol li {
  counter-increment: memphis-counter;
}

#nice ol li::before {
  content: counter(memphis-counter);
  position: absolute;
  left: 0;
  top: 0;
  width: 25px;
  height: 25px;
  background: #8338ec;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 900;
  box-shadow: 3px 3px 0 #fb5607;
}

/* 表格 - 棋盘格风格 */
#nice table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 5px;
  background: #2d3436;
  padding: 10px;
  transform: rotate(-1deg);
  box-shadow: 10px 10px 0 #ff006e;
  margin: 30px 0;
}

#nice th {
  background: linear-gradient(45deg, #ff006e, #ffbe0b);
  color: white;
  padding: 15px;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-size: 1.2em;
  transform: skewX(-5deg);
}

#nice td {
  background: white;
  color: #2d3436;
  padding: 12px;
  font-weight: 600;
  position: relative;
}

#nice tbody tr:nth-child(odd) td:nth-child(even),
#nice tbody tr:nth-child(even) td:nth-child(odd) {
  background: #ffbe0b;
}

#nice tbody tr:hover td {
  background: #8338ec !important;
  color: white;
}

/* 分割线 - 锯齿波浪 */
#nice hr {
  border: none;
  height: 30px;
  background-image: repeating-linear-gradient(
    45deg,
    #ff006e,
    #ff006e 10px,
    transparent 10px,
    transparent 20px,
    #ffbe0b 20px,
    #ffbe0b 30px,
    transparent 30px,
    transparent 40px
  );
  transform: rotate(-2deg) scaleY(0.5);
  margin: 40px 0;
  position: relative;
}

#nice hr::before,
#nice hr::after {
  content: "✦";
  position: absolute;
  font-size: 2em;
  top: -5px;
}

#nice hr::before {
  left: 20px;
  color: #8338ec;
  transform: rotate(-45deg);
}

#nice hr::after {
  right: 20px;
  color: #fb5607;
  transform: rotate(45deg);
}

/* 图片 - 拍立得效果 */
#nice img {
  max-width: 100%;
  height: auto;
  padding: 10px;
  background: white;
  border: 3px solid #2d3436;
  box-shadow:
    5px 5px 0 #ff006e,
    10px 10px 0 #ffbe0b,
    15px 15px 0 #8338ec,
    15px 15px 20px rgba(0,0,0,0.3);
  transform: rotate(-5deg);
  margin: 30px auto;
  display: block;
}

/* 特殊装饰类 */
#nice .memphis-decoration {
  position: fixed;
  pointer-events: none;
  z-index: 9999;
}

/* 滚动条美化 */
#nice ::-webkit-scrollbar {
  width: 15px;
  height: 15px;
}

#nice ::-webkit-scrollbar-track {
  background: repeating-linear-gradient(
    45deg,
    #ffbe0b,
    #ffbe0b 5px,
    #ff006e 5px,
    #ff006e 10px
  );
}

#nice ::-webkit-scrollbar-thumb {
  background: #8338ec;
  border: 2px solid #2d3436;
  border-radius: 5px;
}

#nice ::-webkit-scrollbar-thumb:hover {
  background: #3a86ff;
}`;
