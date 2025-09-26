export default `/* 孟菲斯风格 112 - 未来复古派对 Memphis Retro-Future Party */
#nice {
  font-family: "Orbitron", "Exo 2", "Space Mono", sans-serif;
  background: #0a0e27;
  background-image:
    radial-gradient(circle at 20% 30%, rgba(255, 0, 255, 0.4) 0%, transparent 50%),
    radial-gradient(circle at 80% 70%, rgba(0, 255, 255, 0.4) 0%, transparent 50%),
    radial-gradient(circle at 50% 50%, rgba(255, 255, 0, 0.2) 0%, transparent 70%);
  padding: 50px;
  position: relative;
  overflow: hidden;
  color: #ffffff;
}

/* 霓虹网格背景 */
#nice::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image:
    linear-gradient(rgba(255, 0, 255, 0.3) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 255, 255, 0.3) 1px, transparent 1px);
  background-size: 50px 50px;
  
  z-index: 0;
}


  100% { transform: translate(50px, 50px); }
}

#nice > * {
  position: relative;
  z-index: 1;
}

/* 全息投影大标题 */
#nice h1 {
  font-size: 5em;
  font-weight: 900;
  text-transform: uppercase;
  text-align: center;
  margin: 60px 0;
  background: linear-gradient(
    45deg,
    #ff00ff,
    #00ffff,
    #ffff00,
    #ff00ff,
    #00ffff
  );
  background-size: 200% 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  
  text-shadow:
    0 0 20px rgba(255, 0, 255, 0.5),
    0 0 40px rgba(0, 255, 255, 0.5),
    0 0 60px rgba(255, 255, 0, 0.5);
  letter-spacing: 0.2em;
  position: relative;
}


  50% {
    background-position: 100% 50%;
    filter: hue-rotate(180deg);
  }
}

#nice h1::after {
  content: "2099";
  position: absolute;
  right: -100px;
  top: 0;
  font-size: 0.5em;
  color: #00ffff;
  text-shadow: 0 0 10px #00ffff;
  
}


  50% { opacity: 0.3; }
}

/* 激光切割次标题 */
#nice h2 {
  font-size: 3.5em;
  background: linear-gradient(90deg, #ff00ff 0%, #00ffff 50%, #ffff00 100%);
  color: #0a0e27;
  padding: 20px 45px;
  display: inline-block;
  position: relative;
  margin: 40px 0;
  clip-path: polygon(
    0 20%,
    20% 0,
    80% 0,
    100% 20%,
    100% 80%,
    80% 100%,
    20% 100%,
    0 80%
  );
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-weight: bold;
  box-shadow:
    0 0 30px rgba(255, 0, 255, 0.5),
    inset 0 0 30px rgba(0, 255, 255, 0.3);
  
}


  50% { transform: scale(1.05); }
}

#nice h2::before {
  content: "◉";
  position: absolute;
  left: -50px;
  top: 50%;
  transform: translateY(-50%);
  color: #ffff00;
  font-size: 1.2em;
  
}


  100% { transform: translateY(-50%) rotate(360deg); }
}

/* 霓虹管三级标题 */
#nice h3 {
  font-size: 2.5em;
  color: #00ffff;
  text-shadow:
    0 0 10px #00ffff,
    0 0 20px #00ffff,
    0 0 30px #00ffff,
    0 0 40px #ff00ff;
  background: rgba(10, 14, 39, 0.8);
  border: 3px solid #00ffff;
  padding: 15px 30px;
  display: inline-block;
  position: relative;
  margin: 35px 0;
  text-transform: uppercase;
  box-shadow:
    inset 0 0 20px rgba(0, 255, 255, 0.3),
    0 0 40px rgba(0, 255, 255, 0.5);
  
}


  100% { border-color: #ff00ff; }
}

/* 未来玻璃段落 */
#nice p {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 0, 255, 0.3);
  padding: 25px;
  margin: 25px 0;
  color: #ffffff;
  font-size: 1.15em;
  line-height: 1.8;
  position: relative;
  border-radius: 10px;
  box-shadow:
    0 8px 32px rgba(0, 255, 255, 0.2),
    inset 0 0 32px rgba(255, 0, 255, 0.1);
  transform: perspective(1000px) rotateX(2deg);
}

#nice p::before {
  content: "";
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  background: linear-gradient(45deg, #ff00ff, #00ffff, #ffff00, #ff00ff);
  border-radius: 10px;
  opacity: 0.5;
  z-index: -1;
  
}


  100% { transform: rotate(360deg); }
}

/* 激光强调文本 */
#nice strong {
  color: #ffff00;
  text-shadow:
    0 0 5px #ffff00,
    0 0 10px #ffff00,
    0 0 15px #ff00ff;
  font-weight: 900;
  font-size: 1.1em;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  position: relative;
  display: inline-block;
  
}


  50% { transform: scale(1.1); }
}

#nice strong::after {
  content: "⚡";
  position: absolute;
  right: -25px;
  top: -5px;
  color: #00ffff;
  font-size: 1.2em;
  
}


  50% { opacity: 1; transform: scale(1); }
}

/* 数字斜体 */
#nice em {
  font-style: italic;
  background: linear-gradient(90deg, #ff00ff, #00ffff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: bold;
  filter: drop-shadow(0 0 8px rgba(0, 255, 255, 0.5));
}

/* 全息投影引用块 */
#nice blockquote {
  background: linear-gradient(
    135deg,
    rgba(255, 0, 255, 0.1) 0%,
    rgba(0, 255, 255, 0.1) 50%,
    rgba(255, 255, 0, 0.1) 100%
  );
  border: 2px solid;
  border-image: linear-gradient(45deg, #ff00ff, #00ffff, #ffff00) 1;
  padding: 35px;
  margin: 45px 0;
  position: relative;
  color: #ffffff;
  backdrop-filter: blur(5px);
  transform: perspective(1000px) rotateY(-5deg);
  box-shadow:
    0 0 40px rgba(255, 0, 255, 0.3),
    inset 0 0 40px rgba(0, 255, 255, 0.1);
}

#nice blockquote::before {
  content: "//";
  font-size: 3em;
  position: absolute;
  top: -10px;
  left: 20px;
  color: #ffff00;
  text-shadow: 0 0 20px #ffff00;
  font-weight: bold;
}

#nice blockquote p {
  background: transparent;
  border: none;
  box-shadow: none;
  color: #ffffff;
  transform: none;
}

/* 代码块终端界面 */
#nice pre code {
  background: linear-gradient(135deg, #0a0e27 0%, #1a1e37 100%);
  color: #00ff00;
  padding: 35px;
  border: 3px solid #00ffff;
  border-radius: 10px;
  font-family: "Fira Code", "Source Code Pro", monospace;
  font-size: 1.1em;
  position: relative;
  box-shadow:
    0 0 40px rgba(0, 255, 255, 0.5),
    inset 0 0 40px rgba(0, 255, 0, 0.1);
  overflow-x: auto;
  
}


  50% { background-position: 100% 50%; }
}

#nice pre code::before {
  content: "> SYSTEM.EXECUTE()";
  position: absolute;
  top: -25px;
  left: 20px;
  color: #ff00ff;
  font-weight: bold;
  text-shadow: 0 0 10px #ff00ff;
  
}


  51%, 100% { opacity: 0; }
}

/* 行内代码数据芯片 */
#nice code {
  background: linear-gradient(90deg, #ff00ff, #00ffff);
  color: #0a0e27;
  padding: 3px 12px;
  border-radius: 20px;
  font-weight: bold;
  box-shadow:
    0 0 10px rgba(255, 0, 255, 0.5),
    inset 0 0 10px rgba(0, 255, 255, 0.3);
  display: inline-block;
  
}


  50% { box-shadow: 0 0 20px rgba(0, 255, 255, 0.8); }
}

/* 链接传送门按钮 */
#nice a {
  color: #0a0e27;
  background: linear-gradient(135deg, #00ffff 0%, #ffff00 100%);
  text-decoration: none;
  padding: 10px 30px;
  display: inline-block;
  position: relative;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  clip-path: polygon(10px 0, 100% 0, calc(100% - 10px) 100%, 0 100%);
  overflow: hidden;
  transition: all 0.3s;
  box-shadow:
    0 0 20px rgba(0, 255, 255, 0.5),
    inset 0 0 20px rgba(255, 255, 0, 0.3);
}

#nice a::before {
  content: "";
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  transform: rotate(45deg);
  transition: all 0.5s;
}

#nice a:hover {
  transform: translateY(-3px);
  box-shadow:
    0 5px 30px rgba(0, 255, 255, 0.7),
    inset 0 0 30px rgba(255, 255, 0, 0.5);
}

#nice a:hover::before {
  
}


  100% { transform: rotate(45deg) translateX(100%); }
}

/* 列表数据面板 */
#nice ul, #nice ol {
  background: rgba(10, 14, 39, 0.8);
  border: 3px solid;
  border-image: linear-gradient(45deg, #ff00ff, #00ffff, #ffff00) 1;
  padding: 30px 45px;
  margin: 35px 0;
  position: relative;
  backdrop-filter: blur(10px);
  box-shadow:
    0 0 40px rgba(255, 0, 255, 0.3),
    inset 0 0 40px rgba(0, 255, 255, 0.1);
}

#nice ul::before {
  content: "[DATA_LIST]";
  position: absolute;
  top: -15px;
  left: 20px;
  background: #0a0e27;
  color: #ffff00;
  padding: 2px 10px;
  font-weight: bold;
  font-size: 0.9em;
  text-shadow: 0 0 10px #ffff00;
}

#nice li {
  color: #ffffff;
  margin: 15px 0;
  padding-left: 40px;
  position: relative;
  font-size: 1.1em;
}

#nice ul li::before {
  content: "▸";
  position: absolute;
  left: 0;
  color: #00ffff;
  font-size: 1.5em;
  text-shadow: 0 0 10px #00ffff;
  
}


  50% { transform: translateX(5px); }
}

#nice ol {
  counter-reset: future-counter;
}

#nice ol li {
  counter-increment: future-counter;
}

#nice ol li::before {
  content: counter(future-counter, decimal-leading-zero);
  position: absolute;
  left: 0;
  background: linear-gradient(135deg, #ff00ff, #00ffff);
  color: #0a0e27;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  clip-path: circle(50%);
  box-shadow: 0 0 20px rgba(255, 0, 255, 0.5);
}

/* 表格矩阵界面 */
#nice table {
  width: 100%;
  background: #0a0e27;
  border: 3px solid #00ffff;
  margin: 40px 0;
  box-shadow:
    0 0 40px rgba(0, 255, 255, 0.5),
    inset 0 0 40px rgba(0, 255, 255, 0.1);
  position: relative;
  overflow: hidden;
color: #ffffff;}

#nice th {
  background: linear-gradient(90deg, #ff00ff, #00ffff, #ffff00);
  color: #0a0e27;
  padding: 15px;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 0.1em;
  position: relative;
  
}


  100% { background-position: 100% 50%; }
}

#nice td {
  background: rgba(0, 255, 255, 0.05);
  color: #ffffff;
  padding: 12px;
  border: 1px solid rgba(255, 0, 255, 0.2);
  position: relative;
}

#nice tbody tr:hover td {
  background: rgba(255, 0, 255, 0.2);
  box-shadow: inset 0 0 20px rgba(255, 0, 255, 0.3);
  color: #ffff00;
}

/* 分割线能量束 */
#nice hr {
  border: none;
  height: 3px;
  background: linear-gradient(
    90deg,
    transparent,
    #ff00ff 20%,
    #00ffff 50%,
    #ffff00 80%,
    transparent
  );
  margin: 60px 0;
  position: relative;
  box-shadow:
    0 0 20px rgba(255, 0, 255, 0.5),
    0 0 40px rgba(0, 255, 255, 0.3);
  
}


  50% { transform: scaleX(1); opacity: 1; }
  100% { transform: scaleX(0); opacity: 0; }
}

#nice hr::before,
#nice hr::after {
  content: "◈";
  position: absolute;
  font-size: 2em;
  top: -15px;
  
}

#nice hr::before {
  left: 0;
  color: #ff00ff;
}

#nice hr::after {
  right: 0;
  color: #00ffff;
}


  50% { opacity: 1; transform: scale(1) rotate(180deg); }
}

/* 图片全息显示 */
#nice img {
  max-width: 100%;
  height: auto;
  border: 5px solid;
  border-image: linear-gradient(45deg, #ff00ff, #00ffff, #ffff00, #ff00ff) 1;
  box-shadow:
    0 0 40px rgba(255, 0, 255, 0.5),
    0 0 80px rgba(0, 255, 255, 0.3);
  filter: saturate(1.5) contrast(1.2);
  position: relative;
  margin: 45px auto;
  display: block;
  
}


  95% {
    filter: saturate(1.5) contrast(1.2);
    transform: translate(0, 0);
  }
  96% {
    filter: saturate(2) contrast(2) hue-rotate(90deg);
    transform: translate(2px, 0);
  }
  97% {
    filter: saturate(0.5) contrast(0.5) hue-rotate(-90deg);
    transform: translate(-2px, 0);
  }
  98% {
    filter: saturate(1.5) contrast(1.2);
    transform: translate(0, 0);
  }
}

#nice img:hover {
  
  transform: scale(1.05);
  box-shadow:
    0 0 60px rgba(255, 0, 255, 0.7),
    0 0 120px rgba(0, 255, 255, 0.5);
}`;
