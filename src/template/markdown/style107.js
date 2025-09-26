export default `/* 孟菲斯风格 107 - 波普艺术画廊 Memphis Pop Art Gallery */
#nice {
  font-family: "Impact", "Helvetica Neue", sans-serif;
  background: #ffd700;
  background-image:
    radial-gradient(circle at 20% 50%, #ff1493 0%, transparent 50%),
    radial-gradient(circle at 80% 80%, #00bfff 0%, transparent 50%),
    radial-gradient(circle at 40% 20%, #ff6347 0%, transparent 50%),
    radial-gradient(circle at 80% 10%, #32cd32 0%, transparent 50%);
  padding: 50px;
  position: relative;
  overflow: hidden;
}

/* 艺术画框装饰 */
#nice::before {
  content: "";
  position: absolute;
  top: 20px;
  left: 20px;
  right: 20px;
  bottom: 20px;
  border: 15px solid;
  border-image: repeating-linear-gradient(
    45deg,
    #ff1493,
    #ff1493 10px,
    #00bfff 10px,
    #00bfff 20px,
    #ff6347 20px,
    #ff6347 30px,
    #32cd32 30px,
    #32cd32 40px
  ) 15;
  pointer-events: none;
  z-index: 10;
}

/* 巨型波普标题 */
#nice h1 {
  font-size: 5em;
  font-weight: 900;
  text-transform: uppercase;
  background: repeating-linear-gradient(
    -45deg,
    #ff1493,
    #ff1493 20px,
    #ffffff 20px,
    #ffffff 40px
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow:
    5px 5px 0 #000000,
    10px 10px 0 #00bfff,
    15px 15px 0 #ff6347,
    20px 20px 20px rgba(0,0,0,0.3);
  margin: 40px 0;
  transform: perspective(500px) rotateY(-5deg);
  display: inline-block;
  position: relative;
}

#nice h1::after {
  content: "!";
  position: absolute;
  right: -50px;
  top: 0;
  color: #ff1493;
  font-size: 1.5em;
  transform: rotate(15deg);
  text-shadow: 3px 3px 0 #000000;
}

/* 漫画风格次标题 */
#nice h2 {
  font-size: 3em;
  background: #000000;
  color: #ffffff;
  padding: 20px 40px;
  display: inline-block;
  position: relative;
  margin: 35px 0;
  transform: skew(-5deg) rotate(-2deg);
  box-shadow:
    5px 5px 0 #ff1493,
    10px 10px 0 #00bfff,
    15px 15px 0 #ffd700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

#nice h2::before {
  content: "BAM!";
  position: absolute;
  top: -30px;
  left: -20px;
  background: #ff6347;
  color: #ffffff;
  padding: 10px 20px;
  font-size: 0.8em;
  font-weight: bold;
  transform: rotate(-15deg);
  border: 3px solid #000000;
  z-index: 1;
}

/* 对话气泡三级标题 */
#nice h3 {
  font-size: 2.2em;
  background: #ffffff;
  color: #ff1493;
  padding: 15px 30px;
  border: 4px solid #000000;
  border-radius: 30px;
  display: inline-block;
  position: relative;
  margin: 30px 0;
  font-weight: 900;
  box-shadow: 8px 8px 0 #00bfff;
}

#nice h3::after {
  content: "";
  position: absolute;
  bottom: -20px;
  left: 40px;
  width: 0;
  height: 0;
  border: 15px solid transparent;
  border-top: 15px solid #000000;
  border-right: 15px solid #000000;
}

/* 报纸剪贴段落 */
#nice p {
  background: #ffffff;
  padding: 25px;
  margin: 25px 0;
  border: 3px dashed #000000;
  position: relative;
  transform: rotate(-1deg);
  box-shadow: 5px 5px 15px rgba(0,0,0,0.2);
  font-size: 1.15em;
  line-height: 1.8;
  color: #333333;
}

#nice p::before,
#nice p::after {
  content: "✂";
  position: absolute;
  font-size: 1.5em;
  color: #ff1493;
}

#nice p::before {
  top: -15px;
  left: 10px;
  transform: rotate(-45deg);
}

#nice p::after {
  bottom: -15px;
  right: 10px;
  transform: rotate(135deg);
}

/* 爆炸强调文本 */
#nice strong {
  background: radial-gradient(ellipse at center, #ff6347 0%, #ffd700 100%);
  color: #000000;
  padding: 5px 15px;
  font-weight: 900;
  font-size: 1.2em;
  text-transform: uppercase;
  display: inline-block;
  transform: rotate(-3deg);
  border: 3px solid #000000;
  box-shadow: 3px 3px 0 #ff1493;
  position: relative;
}

#nice strong::before {
  content: "★";
  position: absolute;
  left: -10px;
  top: -5px;
  color: #00bfff;
  font-size: 1.5em;
}

/* 斜体霓虹效果 */
#nice em {
  color: #ff1493;
  font-style: italic;
  font-weight: bold;
  text-shadow:
    0 0 5px #ff1493,
    0 0 10px #ff1493,
    0 0 15px #ff1493;
  background: linear-gradient(90deg, transparent, rgba(255,20,147,0.2), transparent);
  padding: 0 10px;
}

/* 波普艺术引用块 */
#nice blockquote {
  background: repeating-linear-gradient(
    90deg,
    #ff1493 0px,
    #ff1493 20px,
    #00bfff 20px,
    #00bfff 40px,
    #ffd700 40px,
    #ffd700 60px,
    #ff6347 60px,
    #ff6347 80px
  );
  padding: 30px;
  margin: 40px 0;
  position: relative;
  border: 5px solid #000000;
  color: #000000;
}

#nice blockquote::before {
  content: """;
  font-size: 5em;
  position: absolute;
  top: -20px;
  left: 20px;
  color: #ffffff;
  text-shadow: 3px 3px 0 #000000;
  font-weight: bold;
}

#nice blockquote p {
  background: rgba(255,255,255,0.95);
  border: 3px solid #000000;
  transform: none;
  margin: 0;
  font-weight: bold;
}

/* 代码块艺术作品 */
#nice pre code {
  background: #000000;
  color: #ffffff;
  padding: 30px;
  border: 10px solid;
  border-image: repeating-linear-gradient(
    45deg,
    #ff1493,
    #ff1493 5px,
    #00bfff 5px,
    #00bfff 10px
  ) 10;
  font-family: "Courier New", monospace;
  font-size: 1.1em;
  position: relative;
  transform: perspective(500px) rotateX(5deg);
  box-shadow: 0 20px 40px rgba(0,0,0,0.3);
}

#nice pre code::before {
  content: "CODE ART";
  position: absolute;
  top: -30px;
  right: 20px;
  background: #ffd700;
  color: #000000;
  padding: 5px 15px;
  font-weight: bold;
  border: 3px solid #000000;
  transform: rotate(5deg);
}

/* 行内代码标签风格 */
#nice code {
  background: #ff1493;
  color: #ffffff;
  padding: 3px 10px;
  font-weight: bold;
  border-radius: 20px;
  border: 2px solid #000000;
  box-shadow: 2px 2px 0 #00bfff;
  font-family: "Courier New", monospace;
}

/* 链接贴纸风格 */
#nice a {
  color: #ffffff;
  background: #00bfff;
  text-decoration: none;
  padding: 8px 20px;
  border: 3px solid #000000;
  border-radius: 50px;
  display: inline-block;
  font-weight: bold;
  transform: rotate(-5deg);
  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  box-shadow: 3px 3px 0 #ff1493;
  position: relative;
}

#nice a:hover {
  transform: rotate(5deg) scale(1.1);
  background: #ff6347;
  box-shadow: 5px 5px 0 #32cd32;
}

#nice a::after {
  content: "→";
  margin-left: 5px;
  font-weight: bold;
}

/* 列表漫画面板 */
#nice ul, #nice ol {
  background: #ffffff;
  border: 5px solid #000000;
  padding: 25px 40px;
  margin: 30px 0;
  position: relative;
  box-shadow:
    10px 10px 0 #ff1493,
    20px 20px 0 #00bfff;
  transform: rotate(1deg);
}

#nice ul::before {
  content: "POW!";
  position: absolute;
  top: -25px;
  left: 30px;
  background: #ffd700;
  color: #000000;
  padding: 5px 15px;
  font-weight: bold;
  font-size: 1.5em;
  border: 3px solid #000000;
  transform: rotate(-10deg);
}

#nice li {
  margin: 15px 0;
  padding-left: 35px;
  position: relative;
  color: #000000;
  font-weight: 600;
  font-size: 1.1em;
}

#nice ul li::before {
  content: "💥";
  position: absolute;
  left: 0;
  font-size: 1.5em;
}

#nice ol {
  counter-reset: pop-counter;
}

#nice ol li {
  counter-increment: pop-counter;
}

#nice ol li::before {
  content: counter(pop-counter);
  position: absolute;
  left: 0;
  width: 25px;
  height: 25px;
  background: #ff1493;
  color: #ffffff;
  border: 2px solid #000000;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
}

/* 表格连环画格子 */
#nice table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 10px;
  background: #000000;
  padding: 10px;
  transform: rotate(-1deg);
  margin: 35px 0;
}

#nice th {
  background: linear-gradient(135deg, #ff1493 0%, #00bfff 100%);
  color: #ffffff;
  padding: 15px;
  font-weight: 900;
  text-transform: uppercase;
  border: 3px solid #000000;
  font-size: 1.2em;
  text-shadow: 2px 2px 0 #000000;
}

#nice td {
  background: #ffffff;
  color: #000000;
  padding: 12px;
  border: 3px solid #000000;
  font-weight: 600;
  position: relative;
}

#nice tbody tr:nth-child(odd) td {
  background: #ffd700;
}

#nice tbody tr:hover td {
  background: #ff6347 !important;
  color: #ffffff;
  transform: scale(1.05);
  transition: all 0.3s;
}

/* 分割线爆炸效果 */
#nice hr {
  border: none;
  height: 50px;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 20"><text x="0" y="15" font-size="20" font-weight="bold">BOOM!</text></svg>') repeat-x center;
  background-size: 100px 50px;
  margin: 50px 0;
  position: relative;
  filter: drop-shadow(3px 3px 0 #ff1493);
}

#nice hr::before,
#nice hr::after {
  content: "💥";
  position: absolute;
  font-size: 2em;
  top: 10px;
}

#nice hr::before {
  left: 20px;
  
}

#nice hr::after {
  right: 20px;
  
}


  100% { transform: scale(1.2) rotate(10deg); }
}

/* 图片艺术品展示 */
#nice img {
  max-width: 100%;
  height: auto;
  border: 10px solid #ffffff;
  box-shadow:
    0 0 0 5px #000000,
    10px 10px 0 5px #ff1493,
    20px 20px 0 5px #00bfff,
    30px 30px 20px rgba(0,0,0,0.3);
  transform: rotate(-3deg);
  margin: 40px auto;
  display: block;
  transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

#nice img:hover {
  transform: rotate(3deg) scale(1.05);
  box-shadow:
    0 0 0 5px #000000,
    10px 10px 0 5px #ffd700,
    20px 20px 0 5px #ff6347,
    30px 30px 30px rgba(0,0,0,0.5);
}`;
