export default `/* 孟菲斯风格 109 - 热带雨林冲浪 Memphis Tropical Surf */
#nice {
  font-family: "Pacifico", "Lobster", cursive, sans-serif;
  background: linear-gradient(180deg, #ff6b9d 0%, #feca57 25%, #48dbfb 50%, #00d2d3 100%);
  padding: 50px;
  position: relative;
  overflow: hidden;
}

/* 热带叶子装饰 */
#nice::before {
  content: "🌴 🌺 🦩 🌊 🏄 🌴 🦜 🌺";
  position: absolute;
  top: 20px;
  left: 0;
  right: 0;
  font-size: 2.5em;
  text-align: center;
  opacity: 0.4;
  
}


  25% { transform: translateX(50px) rotate(5deg); }
  50% { transform: translateX(-30px) rotate(-3deg); }
  75% { transform: translateX(40px) rotate(4deg); }
}

/* 大标题冲浪板风格 */
#nice h1 {
  font-size: 4.5em;
  background: linear-gradient(135deg, #ff6b9d 0%, #feca57 50%, #48dbfb 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
  margin: 45px 0;
  position: relative;
  transform: skew(-10deg);
  text-shadow:
    3px 3px 0 rgba(0, 210, 211, 0.5),
    6px 6px 0 rgba(254, 202, 87, 0.3),
    9px 9px 15px rgba(0, 0, 0, 0.2);
  letter-spacing: 0.05em;
}

#nice h1::after {
  content: "🏄‍♂️";
  position: absolute;
  right: -80px;
  top: 50%;
  transform: translateY(-50%) rotate(-15deg);
  font-size: 0.8em;
  
}


  50% { transform: translateY(-50%) translateX(20px) rotate(-10deg); }
}

/* 沙滩小屋次标题 */
#nice h2 {
  font-size: 2.8em;
  background: repeating-linear-gradient(
    45deg,
    #ff6b9d,
    #ff6b9d 20px,
    #feca57 20px,
    #feca57 40px
  );
  color: #ffffff;
  padding: 20px 35px;
  display: inline-block;
  position: relative;
  clip-path: polygon(0 0, 100% 0, 95% 100%, 5% 100%);
  margin: 35px 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  transform: rotate(-2deg);
  box-shadow: 10px 10px 0 #00d2d3;
}

#nice h2::before {
  content: "☀️";
  position: absolute;
  top: -30px;
  right: 20px;
  font-size: 1.5em;
  
}


  100% { transform: rotate(360deg); }
}

/* 棕榈叶三级标题 */
#nice h3 {
  font-size: 2.2em;
  color: #00d2d3;
  background: rgba(255, 255, 255, 0.9);
  padding: 15px 30px;
  border-left: 8px solid #ff6b9d;
  border-right: 8px solid #feca57;
  display: inline-block;
  position: relative;
  margin: 30px 0;
  box-shadow:
    5px 5px 0 #48dbfb,
    10px 10px 0 #ff6b9d;
  transform: skewX(-5deg);
}

#nice h3::after {
  content: "🌺";
  margin-left: 10px;
  display: inline-block;
  
}


  50% { transform: rotate(180deg); }
}

/* 海浪段落 */
#nice p {
  background: rgba(255, 255, 255, 0.95);
  padding: 25px;
  margin: 25px 0;
  border-radius: 20px 5px 20px 5px;
  border: 3px solid #48dbfb;
  color: #2c3e50;
  font-size: 1.15em;
  line-height: 1.8;
  position: relative;
  box-shadow:
    0 5px 15px rgba(72, 219, 251, 0.3),
    inset 0 -5px 10px rgba(0, 210, 211, 0.1);
  transform: rotate(-1deg);
}

#nice p::before {
  content: "🌊";
  position: absolute;
  bottom: -20px;
  left: 20px;
  font-size: 2em;
  opacity: 0.5;
  
}


  25% { transform: translateX(10px) translateY(-5px); }
  50% { transform: translateX(0) translateY(-10px); }
  75% { transform: translateX(-10px) translateY(-5px); }
}

/* 夏日强调文本 */
#nice strong {
  background: linear-gradient(to right, #ff6b9d, #feca57);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 900;
  font-size: 1.2em;
  position: relative;
  display: inline-block;
  filter: drop-shadow(2px 2px 0 #48dbfb);
}

#nice strong::after {
  content: "🌟";
  position: absolute;
  right: -20px;
  top: -5px;
  font-size: 0.8em;
  
}


  50% { opacity: 1; transform: scale(1); }
}

/* 手写斜体 */
#nice em {
  font-style: italic;
  color: #00d2d3;
  font-weight: bold;
  border-bottom: 3px wavy #ff6b9d;
  text-decoration: underline wavy #feca57;
  text-decoration-thickness: 2px;
  text-underline-offset: 5px;
}

/* 沙滩明信片引用块 */
#nice blockquote {
  background: linear-gradient(135deg, rgba(255, 107, 157, 0.2) 0%, rgba(254, 202, 87, 0.2) 100%);
  border: 3px dashed #48dbfb;
  border-radius: 10px;
  padding: 30px;
  margin: 40px 0;
  position: relative;
  transform: rotate(2deg);
  box-shadow:
    5px 5px 0 #00d2d3,
    10px 10px 20px rgba(0, 0, 0, 0.1);
  color: #2c3e50;
}

#nice blockquote::before {
  content: "🦩";
  font-size: 3em;
  position: absolute;
  top: -20px;
  left: 20px;
  transform: rotate(-15deg);
}

#nice blockquote::after {
  content: "WISH YOU WERE HERE!";
  position: absolute;
  bottom: 10px;
  right: 20px;
  font-size: 0.8em;
  color: #ff6b9d;
  font-weight: bold;
  transform: rotate(-5deg);
  letter-spacing: 0.1em;
}

/* 代码块黑板风格 */
#nice pre code {
  background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
  color: #48dbfb;
  padding: 30px;
  border: 8px solid #feca57;
  border-radius: 15px;
  font-family: "Courier New", monospace;
  font-size: 1.1em;
  position: relative;
  box-shadow:
    inset 0 0 20px rgba(0, 0, 0, 0.3),
    0 10px 30px rgba(0, 0, 0, 0.2);
  transform: perspective(500px) rotateX(3deg);
}

#nice pre code::before {
  content: "🏝️ ISLAND CODE";
  position: absolute;
  top: -25px;
  left: 20px;
  background: #feca57;
  color: #2c3e50;
  padding: 3px 15px;
  font-weight: bold;
  border-radius: 20px;
}

/* 行内代码贴纸 */
#nice code {
  background: #ff6b9d;
  color: #ffffff;
  padding: 3px 10px;
  border-radius: 15px;
  font-weight: bold;
  box-shadow: 2px 2px 0 #48dbfb;
  font-family: "Courier New", monospace;
  display: inline-block;
  transform: rotate(-2deg);
}

/* 链接冲浪板按钮 */
#nice a {
  color: #ffffff;
  background: linear-gradient(135deg, #48dbfb 0%, #00d2d3 100%);
  text-decoration: none;
  padding: 8px 20px;
  border-radius: 30px;
  display: inline-block;
  position: relative;
  font-weight: bold;
  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  box-shadow: 3px 3px 0 #ff6b9d;
}

#nice a:hover {
  transform: translateY(-3px) rotate(2deg);
  background: linear-gradient(135deg, #ff6b9d 0%, #feca57 100%);
  box-shadow: 5px 5px 0 #48dbfb;
}

#nice a::after {
  content: " →";
  font-weight: bold;
  transition: transform 0.3s;
}

#nice a:hover::after {
  transform: translateX(5px);
}

/* 列表海滩小屋 */
#nice ul, #nice ol {
  background: rgba(255, 255, 255, 0.9);
  border: 4px solid #feca57;
  border-radius: 15px;
  padding: 25px 40px;
  margin: 30px 0;
  position: relative;
  box-shadow:
    5px 5px 0 #48dbfb,
    10px 10px 0 #ff6b9d;
  transform: rotate(1deg);
}

#nice ul::before {
  content: "🏖️";
  position: absolute;
  top: -25px;
  left: 30px;
  font-size: 2em;
}

#nice li {
  margin: 15px 0;
  padding-left: 35px;
  position: relative;
  color: #2c3e50;
  font-size: 1.1em;
  font-weight: 500;
}

#nice ul li::before {
  content: "🐚";
  position: absolute;
  left: 0;
  font-size: 1.3em;
}

#nice ol {
  counter-reset: beach-counter;
}

#nice ol li {
  counter-increment: beach-counter;
}

#nice ol li::before {
  content: counter(beach-counter);
  position: absolute;
  left: 0;
  width: 25px;
  height: 25px;
  background: linear-gradient(135deg, #ff6b9d, #feca57);
  color: #ffffff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  box-shadow: 2px 2px 0 #48dbfb;
}

/* 表格沙滩排球记分板 */
#nice table {
  width: 100%;
  background: #ffffff;
  border: 5px solid #48dbfb;
  border-radius: 15px;
  overflow: hidden;
  margin: 35px 0;
  box-shadow:
    5px 5px 0 #feca57,
    10px 10px 0 #ff6b9d;
  transform: rotate(-1deg);
}

#nice th {
  background: linear-gradient(90deg, #ff6b9d, #feca57, #48dbfb);
  color: #ffffff;
  padding: 15px;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 0.1em;
  text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.2);
}

#nice td {
  background: rgba(72, 219, 251, 0.1);
  color: #2c3e50;
  padding: 12px;
  border-bottom: 2px dashed rgba(0, 210, 211, 0.3);
  font-weight: 500;
}

#nice tbody tr:nth-child(odd) td {
  background: rgba(254, 202, 87, 0.1);
}

#nice tbody tr:hover td {
  background: rgba(255, 107, 157, 0.2) !important;
  transform: scale(1.02);
  transition: all 0.3s;
}

/* 分割线海浪 */
#nice hr {
  border: none;
  height: 30px;
  background: repeating-linear-gradient(
    90deg,
    transparent,
    transparent 10px,
    #48dbfb 10px,
    #48dbfb 20px,
    transparent 20px,
    transparent 30px,
    #00d2d3 30px,
    #00d2d3 40px
  );
  position: relative;
  margin: 50px 0;
  
}


  100% { background-position: 40px 0; }
}

#nice hr::before,
#nice hr::after {
  content: "🌊";
  position: absolute;
  font-size: 2em;
  top: 0;
}

#nice hr::before {
  left: 20px;
  
}

#nice hr::after {
  right: 20px;
  
}


  50% { transform: translateY(-10px) rotate(10deg); }
}


  50% { transform: translateY(-10px) rotate(-10deg); }
}

/* 图片宝丽来风格 */
#nice img {
  max-width: 100%;
  height: auto;
  padding: 15px;
  background: #ffffff;
  border: 2px solid #feca57;
  box-shadow:
    5px 5px 0 #48dbfb,
    10px 10px 0 #ff6b9d,
    15px 15px 30px rgba(0, 0, 0, 0.2);
  transform: rotate(-5deg);
  margin: 40px auto;
  display: block;
  transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  position: relative;
}

#nice img:hover {
  transform: rotate(5deg) scale(1.05);
  box-shadow:
    5px 5px 0 #ff6b9d,
    10px 10px 0 #feca57,
    15px 15px 40px rgba(0, 0, 0, 0.3);
}

/* 装饰元素 */
.tropical-decoration {
  position: fixed;
  bottom: 20px;
  right: 20px;
  font-size: 3em;
  
  pointer-events: none;
  z-index: 9999;
}


  50% { transform: translateY(-20px); }
}`;
