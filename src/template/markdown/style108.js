export default `/* 孟菲斯风格 108 - 迷幻太空迪斯科 Memphis Psychedelic Space Disco */
#nice {
  font-family: "Bebas Neue", "Oswald", sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #ffc0cb 100%);
  background-size: 400% 400%;
  
  padding: 45px;
  position: relative;
  overflow: hidden;
}


  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

/* 星空装饰 */
#nice::before {
  content: "✨ ⭐ 🌟 💫 ⚡ 🌙 ☄️ 🪐";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  font-size: 3em;
  text-align: center;
  
  opacity: 0.6;
  z-index: 1;
}


  100% { transform: translateY(calc(100vh + 100px)) rotate(360deg); }
}

/* 迪斯科球标题 */
#nice h1 {
  font-size: 4.5em;
  background: linear-gradient(
    45deg,
    #ff006e,
    #8338ec,
    #3a86ff,
    #06b6d4,
    #10b981,
    #f59e0b,
    #ef4444,
    #ff006e
  );
  background-size: 200% 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  
  text-transform: uppercase;
  letter-spacing: 0.1em;
  text-align: center;
  margin: 50px 0;
  position: relative;
  text-shadow:
    0 0 20px rgba(255, 0, 110, 0.5),
    0 0 40px rgba(131, 56, 236, 0.5),
    0 0 60px rgba(58, 134, 255, 0.5);
  transform: perspective(500px) rotateY(15deg);
}


  100% { background-position: 200% 50%; filter: hue-rotate(360deg); }
}

#nice h1::after {
  content: "🕺💃";
  position: absolute;
  right: -80px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 0.8em;
  
}


  100% { transform: translateY(-50%) rotate(10deg); }
}

/* 霓虹招牌次标题 */
#nice h2 {
  font-size: 3em;
  background: #000000;
  color: #ffffff;
  padding: 20px 40px;
  display: inline-block;
  border: 5px solid #ff006e;
  border-radius: 20px;
  position: relative;
  margin: 35px 0;
  box-shadow:
    0 0 20px #ff006e,
    inset 0 0 20px #ff006e,
    0 0 40px #8338ec,
    inset 0 0 40px #8338ec;
  
  text-transform: uppercase;
  letter-spacing: 0.15em;
}


  50% {
    box-shadow:
      0 0 30px #ff006e,
      inset 0 0 30px #ff006e,
      0 0 60px #8338ec,
      inset 0 0 60px #8338ec;
  }
}

/* 彩虹三级标题 */
#nice h3 {
  font-size: 2.5em;
  background: repeating-linear-gradient(
    90deg,
    #ff006e 0px,
    #ff006e 40px,
    #8338ec 40px,
    #8338ec 80px,
    #3a86ff 80px,
    #3a86ff 120px,
    #06b6d4 120px,
    #06b6d4 160px
  );
  color: #ffffff;
  padding: 15px 30px;
  display: inline-block;
  clip-path: polygon(
    0% 0%,
    100% 0%,
    90% 50%,
    100% 100%,
    0% 100%,
    10% 50%
  );
  margin: 30px 0;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
  
}


  100% { background-position: 160px 0; }
}

/* 玻璃态段落 */
#nice p {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 20px;
  padding: 25px;
  margin: 25px 0;
  color: #ffffff;
  font-size: 1.15em;
  line-height: 1.8;
  position: relative;
  box-shadow:
    0 8px 32px rgba(131, 56, 236, 0.3),
    inset 0 0 20px rgba(255, 255, 255, 0.1);
  transform: perspective(1000px) rotateX(2deg);
}

#nice p::before {
  content: "🌈";
  position: absolute;
  top: -15px;
  left: 20px;
  font-size: 1.5em;
  
}


  50% { transform: translateY(-10px); }
}

/* 全息强调文本 */
#nice strong {
  background: linear-gradient(
    90deg,
    #ff006e,
    #8338ec,
    #3a86ff,
    #ff006e
  );
  background-size: 300% 100%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 900;
  font-size: 1.1em;
  
  display: inline-block;
  position: relative;
  padding: 0 5px;
}


  100% { background-position: 300% 50%; }
}

#nice strong::after {
  content: "✨";
  position: absolute;
  right: -20px;
  top: -5px;
  
}


  50% { opacity: 1; transform: scale(1); }
}

/* 彩虹斜体 */
#nice em {
  font-style: italic;
  background: linear-gradient(to right, #ff006e, #8338ec, #3a86ff, #06b6d4, #10b981, #f59e0b, #ef4444);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: bold;
  filter: drop-shadow(0 0 10px rgba(255, 0, 110, 0.5));
}

/* 迷幻引用块 */
#nice blockquote {
  background: linear-gradient(
    135deg,
    rgba(255, 0, 110, 0.2) 0%,
    rgba(131, 56, 236, 0.2) 25%,
    rgba(58, 134, 255, 0.2) 50%,
    rgba(6, 182, 212, 0.2) 75%,
    rgba(16, 185, 129, 0.2) 100%
  );
  border-left: 10px solid;
  border-image: linear-gradient(to bottom, #ff006e, #8338ec, #3a86ff) 1;
  padding: 30px;
  margin: 40px 0;
  position: relative;
  border-radius: 20px;
  backdrop-filter: blur(5px);
  color: #ffffff;
  transform: perspective(1000px) rotateY(-5deg);
}

#nice blockquote::before {
  content: "🎭";
  font-size: 3em;
  position: absolute;
  top: -20px;
  left: 20px;
  
}


  50% { transform: rotate(10deg); }
}

/* 代码块迷幻终端 */
#nice pre code {
  background: linear-gradient(135deg, #000000 0%, #1a0033 100%);
  color: #00ff00;
  padding: 30px;
  border: 3px solid;
  border-image: linear-gradient(45deg, #ff006e, #8338ec, #3a86ff, #06b6d4) 1;
  border-radius: 15px;
  font-family: "Courier New", monospace;
  font-size: 1.1em;
  position: relative;
  box-shadow:
    0 0 30px rgba(255, 0, 110, 0.5),
    inset 0 0 30px rgba(131, 56, 236, 0.2);
  
}


  50% { filter: brightness(1.2); }
}

#nice pre code::before {
  content: "// DISCO CODE";
  color: #ff006e;
  font-weight: bold;
  display: block;
  margin-bottom: 10px;
  
}


  50% { width: 100%; }
}

/* 行内代码霓虹标签 */
#nice code {
  background: linear-gradient(90deg, #ff006e, #8338ec);
  color: #ffffff;
  padding: 3px 10px;
  border-radius: 20px;
  font-weight: bold;
  box-shadow:
    0 0 10px rgba(255, 0, 110, 0.5),
    0 0 20px rgba(131, 56, 236, 0.3);
  
}


  50% { transform: scale(1.05); }
}

/* 链接发光按钮 */
#nice a {
  color: #ffffff;
  background: linear-gradient(135deg, #ff006e 0%, #8338ec 100%);
  text-decoration: none;
  padding: 10px 25px;
  border-radius: 30px;
  display: inline-block;
  position: relative;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  overflow: hidden;
  transition: all 0.3s;
  box-shadow:
    0 4px 15px rgba(255, 0, 110, 0.4),
    0 0 30px rgba(131, 56, 236, 0.3);
}

#nice a::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  background: radial-gradient(circle, rgba(255,255,255,0.5) 0%, transparent 70%);
  transition: all 0.5s;
  transform: translate(-50%, -50%);
}

#nice a:hover {
  transform: translateY(-3px);
  box-shadow:
    0 6px 20px rgba(255, 0, 110, 0.6),
    0 0 40px rgba(131, 56, 236, 0.5);
}

#nice a:hover::before {
  width: 300px;
  height: 300px;
}

/* 列表迪斯科灯光 */
#nice ul, #nice ol {
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
  border: 3px solid;
  border-image: linear-gradient(45deg, #ff006e, #8338ec, #3a86ff) 1;
  padding: 30px 45px;
  margin: 30px 0;
  border-radius: 20px;
  position: relative;
  color: #ffffff;
}

#nice ul::before {
  content: "🪩";
  position: absolute;
  top: -25px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 2.5em;
  
}


  100% { transform: translateX(-50%) rotate(360deg); }
}

#nice li {
  margin: 15px 0;
  padding-left: 35px;
  position: relative;
  font-size: 1.1em;
}

#nice ul li::before {
  content: "💠";
  position: absolute;
  left: 0;
  font-size: 1.3em;
  
}


  50% { transform: scale(1.2); opacity: 0.8; }
}

#nice ol {
  counter-reset: disco-counter;
}

#nice ol li {
  counter-increment: disco-counter;
}

#nice ol li::before {
  content: counter(disco-counter);
  position: absolute;
  left: 0;
  width: 25px;
  height: 25px;
  background: linear-gradient(135deg, #ff006e, #8338ec);
  color: #ffffff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  box-shadow: 0 0 15px rgba(255, 0, 110, 0.5);
}

/* 表格激光网格 */
#nice table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 2px;
  background: rgba(0, 0, 0, 0.8);
  padding: 5px;
  margin: 35px 0;
  box-shadow:
    0 0 30px rgba(255, 0, 110, 0.5),
    inset 0 0 30px rgba(131, 56, 236, 0.3);
}

#nice th {
  background: linear-gradient(90deg, #ff006e, #8338ec, #3a86ff);
  color: #ffffff;
  padding: 15px;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 0.1em;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
  
}


  100% { background-position: 100% 50%; }
}

#nice td {
  background: rgba(255, 255, 255, 0.05);
  color: #ffffff;
  padding: 12px;
  border: 1px solid rgba(255, 0, 110, 0.3);
  position: relative;
}

#nice tbody tr:hover td {
  background: rgba(255, 0, 110, 0.2);
  box-shadow: inset 0 0 20px rgba(255, 0, 110, 0.3);
}

/* 分割线激光束 */
#nice hr {
  border: none;
  height: 4px;
  background: linear-gradient(
    90deg,
    transparent,
    #ff006e 20%,
    #8338ec 50%,
    #3a86ff 80%,
    transparent
  );
  margin: 50px 0;
  position: relative;
  
  box-shadow:
    0 0 20px rgba(255, 0, 110, 0.5),
    0 0 40px rgba(131, 56, 236, 0.3);
}


  50% { transform: scaleX(1); opacity: 1; }
  100% { transform: scaleX(0); opacity: 0; }
}

#nice hr::before,
#nice hr::after {
  content: "⚡";
  position: absolute;
  font-size: 2em;
  top: -20px;
  
}

#nice hr::before {
  left: 0;
  color: #ff006e;
}

#nice hr::after {
  right: 0;
  color: #3a86ff;
}


  50% { opacity: 1; }
}

/* 图片全息投影 */
#nice img {
  max-width: 100%;
  height: auto;
  border: 5px solid;
  border-image: linear-gradient(45deg, #ff006e, #8338ec, #3a86ff, #06b6d4) 1;
  border-radius: 20px;
  box-shadow:
    0 10px 40px rgba(255, 0, 110, 0.4),
    0 0 60px rgba(131, 56, 236, 0.3);
  filter: saturate(1.5) contrast(1.1);
  transition: all 0.5s;
  margin: 40px auto;
  display: block;
}

#nice img:hover {
  transform: scale(1.05) rotateY(5deg);
  box-shadow:
    0 15px 50px rgba(255, 0, 110, 0.6),
    0 0 80px rgba(131, 56, 236, 0.5);
  filter: saturate(2) contrast(1.2) hue-rotate(10deg);
}`;
