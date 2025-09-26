export default `/* 孟菲斯风格 106 - 复古电玩街机 Memphis Retro Arcade */
#nice {
  font-family: "Press Start 2P", "Courier New", monospace;
  background: #0a0a0a;
  background-image:
    repeating-linear-gradient(
      0deg,
      transparent,
      transparent 2px,
      rgba(255, 0, 255, 0.1) 2px,
      rgba(255, 0, 255, 0.1) 4px
    ),
    repeating-linear-gradient(
      90deg,
      transparent,
      transparent 2px,
      rgba(0, 255, 255, 0.1) 2px,
      rgba(0, 255, 255, 0.1) 4px
    );
  padding: 40px;
  position: relative;
  overflow: hidden;
  color: #00ff00;
}

/* 像素化装饰背景 */
#nice::before {
  content: "⬛⬜⬛⬜⬛⬜⬛⬜";
  position: absolute;
  top: 10px;
  left: 0;
  right: 0;
  font-size: 2em;
  text-align: center;
  opacity: 0.3;
  
}


  100% { transform: translateX(100px); }
}

/* 8-bit风格标题 */
#nice h1 {
  font-size: 3em;
  background: linear-gradient(
    0deg,
    #ff0080 0%,
    #ff0080 25%,
    #ff8000 25%,
    #ff8000 50%,
    #ffff00 50%,
    #ffff00 75%,
    #00ff00 75%,
    #00ff00 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  position: relative;
  padding: 20px;
  margin: 40px 0;
  text-shadow:
    4px 4px 0 rgba(255, 0, 128, 0.5),
    8px 8px 0 rgba(128, 0, 255, 0.3);
  
}


  51%, 100% { opacity: 0.95; }
}

/* GAME OVER风格次标题 */
#nice h2 {
  font-size: 2em;
  color: #00ffff;
  background: #ff00ff;
  padding: 15px 30px;
  display: inline-block;
  position: relative;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  clip-path: polygon(
    0 10px,
    10px 0,
    calc(100% - 10px) 0,
    100% 10px,
    100% calc(100% - 10px),
    calc(100% - 10px) 100%,
    10px 100%,
    0 calc(100% - 10px)
  );
  box-shadow:
    inset 0 0 20px rgba(0, 255, 255, 0.5),
    0 0 30px rgba(255, 0, 255, 0.5);
  margin: 30px 0;
}

#nice h2::before {
  content: "▶ ";
  color: #ffff00;
  
}


  51%, 100% { opacity: 0; }
}

/* LEVEL标题 */
#nice h3 {
  font-size: 1.5em;
  color: #ffff00;
  background: rgba(255, 0, 255, 0.2);
  border: 3px solid #ff00ff;
  padding: 10px 20px;
  display: inline-block;
  position: relative;
  margin: 25px 0;
  text-transform: uppercase;
  box-shadow:
    4px 4px 0 #00ffff,
    8px 8px 0 #ffff00;
}

#nice h3::after {
  content: " LV.3";
  color: #00ff00;
  font-size: 0.8em;
  margin-left: 10px;
}

/* 游戏对话框段落 */
#nice p {
  background: rgba(0, 0, 0, 0.9);
  border: 3px solid #00ff00;
  padding: 20px;
  margin: 20px 0;
  color: #00ff00;
  font-family: monospace;
  font-size: 1.1em;
  line-height: 1.6;
  position: relative;
  box-shadow:
    inset 0 0 20px rgba(0, 255, 0, 0.2),
    0 0 10px rgba(0, 255, 0, 0.5);
}

#nice p::before {
  content: ">";
  position: absolute;
  left: 5px;
  top: 20px;
  color: #ffff00;
  
}

/* POWER UP强调文本 */
#nice strong {
  color: #ff00ff;
  background: linear-gradient(
    90deg,
    #ffff00 0%,
    #ff00ff 50%,
    #00ffff 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 900;
  text-transform: uppercase;
  display: inline-block;
  padding: 0 5px;
  
}


  100% { transform: scale(1.1); }
}

/* 斜体特殊效果 */
#nice em {
  color: #00ffff;
  font-style: normal;
  border-bottom: 2px dashed #ff00ff;
  text-shadow: 2px 2px 0 #ff0080;
  letter-spacing: 0.1em;
}

/* 游戏提示引用块 */
#nice blockquote {
  background: linear-gradient(
    135deg,
    rgba(255, 0, 128, 0.2) 0%,
    rgba(0, 255, 255, 0.2) 100%
  );
  border-left: 10px solid;
  border-image: repeating-linear-gradient(
    0deg,
    #ff00ff,
    #ff00ff 5px,
    #00ffff 5px,
    #00ffff 10px
  ) 1;
  padding: 20px;
  margin: 30px 0;
  position: relative;
  color: #ffffff;
  font-family: monospace;
}

#nice blockquote::before {
  content: "💾 TIP:";
  position: absolute;
  top: -15px;
  left: 20px;
  background: #ff00ff;
  color: #ffff00;
  padding: 2px 10px;
  font-weight: bold;
  font-size: 0.9em;
}

/* 代码块终端风格 */
#nice pre code {
  background: #000000;
  color: #00ff00;
  border: 2px solid #00ff00;
  padding: 20px;
  font-family: "Courier New", monospace;
  position: relative;
  overflow-x: auto;
  box-shadow:
    0 0 20px rgba(0, 255, 0, 0.5),
    inset 0 0 20px rgba(0, 255, 0, 0.1);
}

#nice pre code::before {
  content: "TERMINAL.EXE";
  position: absolute;
  top: -25px;
  left: 0;
  background: #00ff00;
  color: #000000;
  padding: 2px 10px;
  font-size: 0.8em;
  font-weight: bold;
}

/* 行内代码像素风格 */
#nice code {
  background: #ff00ff;
  color: #ffff00;
  padding: 2px 8px;
  font-family: monospace;
  border: 1px solid #00ffff;
  box-shadow: 2px 2px 0 #00ffff;
}

/* 超链接游戏按钮风格 */
#nice a {
  color: #00ffff;
  text-decoration: none;
  background: rgba(255, 0, 255, 0.2);
  padding: 5px 15px;
  border: 2px solid #ff00ff;
  display: inline-block;
  position: relative;
  text-transform: uppercase;
  transition: all 0.2s;
  clip-path: polygon(
    0 5px,
    5px 0,
    calc(100% - 5px) 0,
    100% 5px,
    100% calc(100% - 5px),
    calc(100% - 5px) 100%,
    5px 100%,
    0 calc(100% - 5px)
  );
}

#nice a:hover {
  background: #ff00ff;
  color: #ffff00;
  transform: translate(-2px, -2px);
  box-shadow:
    2px 2px 0 #00ffff,
    4px 4px 0 #ffff00;
}

#nice a::after {
  content: " ↗";
  font-weight: bold;
}

/* 列表积分板风格 */
#nice ul, #nice ol {
  background: rgba(0, 0, 0, 0.8);
  border: 3px solid #ffff00;
  padding: 20px 30px;
  margin: 25px 0;
  position: relative;
}

#nice ul::before {
  content: "SCORE BOARD";
  position: absolute;
  top: -12px;
  left: 20px;
  background: #ffff00;
  color: #000000;
  padding: 2px 10px;
  font-weight: bold;
  font-size: 0.8em;
}

#nice li {
  color: #00ff00;
  margin: 10px 0;
  padding-left: 30px;
  position: relative;
  font-family: monospace;
}

#nice ul li::before {
  content: "◆";
  position: absolute;
  left: 0;
  color: #ff00ff;
  font-size: 1.2em;
  
}


  100% { transform: rotate(360deg); }
}

#nice ol {
  counter-reset: arcade-counter;
}

#nice ol li {
  counter-increment: arcade-counter;
}

#nice ol li::before {
  content: counter(arcade-counter) "P";
  position: absolute;
  left: 0;
  color: #00ffff;
  font-weight: bold;
}

/* 表格记分板风格 */
#nice table {
  width: 100%;
  background: #000000;
  border: 3px solid #00ff00;
  margin: 30px 0;
  box-shadow: 0 0 20px rgba(0, 255, 0, 0.5);
}

#nice th {
  background: linear-gradient(90deg, #ff00ff, #00ffff);
  color: #ffff00;
  padding: 10px;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 0.1em;
  border-bottom: 2px solid #ffff00;
}

#nice td {
  background: rgba(0, 255, 0, 0.1);
  color: #00ff00;
  padding: 10px;
  border: 1px solid rgba(0, 255, 0, 0.3);
  font-family: monospace;
}

#nice tbody tr:hover td {
  background: rgba(255, 0, 255, 0.3);
  color: #ffff00;
}

/* 分割线电路板风格 */
#nice hr {
  border: none;
  height: 10px;
  background: repeating-linear-gradient(
    90deg,
    #ff00ff 0px,
    #ff00ff 10px,
    transparent 10px,
    transparent 15px,
    #00ffff 15px,
    #00ffff 25px,
    transparent 25px,
    transparent 30px
  );
  margin: 40px 0;
  position: relative;
  box-shadow: 0 0 10px rgba(255, 0, 255, 0.5);
}

#nice hr::before,
#nice hr::after {
  content: "⚡";
  position: absolute;
  font-size: 1.5em;
  top: -8px;
}

#nice hr::before {
  left: 10px;
  color: #ff00ff;
}

#nice hr::after {
  right: 10px;
  color: #00ffff;
}

/* 图片CRT显示器效果 */
#nice img {
  max-width: 100%;
  height: auto;
  border: 5px solid #00ff00;
  box-shadow:
    0 0 30px rgba(0, 255, 0, 0.5),
    inset 0 0 30px rgba(0, 255, 0, 0.1);
  position: relative;
  filter: contrast(1.2) brightness(0.9);
  image-rendering: pixelated;
  image-rendering: -moz-crisp-edges;
  image-rendering: crisp-edges;
}

/* 扫描线效果 */
#nice img::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: repeating-linear-gradient(
    0deg,
    transparent,
    transparent 2px,
    rgba(0, 0, 0, 0.3) 2px,
    rgba(0, 0, 0, 0.3) 4px
  );
  pointer-events: none;
}`;
