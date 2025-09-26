export default `/* 孟菲斯风格 111 - 几何万花筒梦境 Memphis Geometric Kaleidoscope */
#nice {
  font-family: "Righteous", "Bungee", "Archivo Black", sans-serif;
  background: linear-gradient(45deg, #fc5c65 25%, #fed330 25%, #fed330 50%, #26de81 50%, #26de81 75%, #4b7bec 75%);
  background-size: 40px 40px;
  padding: 50px;
  position: relative;
  overflow: hidden;
}

/* 万花筒旋转背景 */
#nice::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 600px;
  height: 600px;
  background: conic-gradient(
    from 0deg,
    #fc5c65 0deg 60deg,
    #fed330 60deg 120deg,
    #26de81 120deg 180deg,
    #4b7bec 180deg 240deg,
    #a55eea 240deg 300deg,
    #fc5c65 300deg 360deg
  );
  transform: translate(-50%, -50%) rotate(0deg);
  opacity: 0.1;
  
  z-index: 0;
}


  100% { transform: translate(-50%, -50%) rotate(360deg); }
}

#nice > * {
  position: relative;
  z-index: 1;
}

/* 几何拼接大标题 */
#nice h1 {
  font-size: 4.5em;
  text-transform: uppercase;
  background: repeating-linear-gradient(
    -45deg,
    #fc5c65,
    #fc5c65 10px,
    #fed330 10px,
    #fed330 20px,
    #26de81 20px,
    #26de81 30px,
    #4b7bec 30px,
    #4b7bec 40px
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
  margin: 50px 0;
  position: relative;
  transform: perspective(500px) rotateX(15deg);
  text-shadow:
    5px 5px 0 rgba(0, 0, 0, 0.2),
    10px 10px 0 rgba(0, 0, 0, 0.1);
  letter-spacing: 0.1em;
}

#nice h1::before,
#nice h1::after {
  content: "◆";
  position: absolute;
  font-size: 0.8em;
  
}

#nice h1::before {
  left: -60px;
  top: 50%;
  transform: translateY(-50%);
  color: #fc5c65;
}

#nice h1::after {
  right: -60px;
  top: 50%;
  transform: translateY(-50%);
  color: #4b7bec;
}


  50% { transform: translateY(-50%) scale(1.3) rotate(180deg); }
}

/* 三角形拼贴次标题 */
#nice h2 {
  font-size: 3em;
  background: #fed330;
  color: #2d3436;
  padding: 20px 40px;
  display: inline-block;
  position: relative;
  margin: 40px 0;
  clip-path: polygon(0 0, 100% 0, 85% 100%, 15% 100%);
  box-shadow:
    5px 5px 0 #fc5c65,
    10px 10px 0 #26de81,
    15px 15px 0 #4b7bec;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  transform: rotate(-3deg);
}

#nice h2::before {
  content: "▲";
  position: absolute;
  left: -40px;
  top: 50%;
  transform: translateY(-50%) rotate(90deg);
  color: #a55eea;
  font-size: 1.5em;
}

#nice h2::after {
  content: "●";
  position: absolute;
  right: -40px;
  top: 50%;
  transform: translateY(-50%);
  color: #fc5c65;
  font-size: 1.5em;
  
}


  50% { transform: translateY(-50%) scale(1.2); }
}

/* 圆形徽章三级标题 */
#nice h3 {
  font-size: 2.2em;
  background: #4b7bec;
  color: #ffffff;
  padding: 20px 35px;
  display: inline-block;
  border-radius: 50px;
  border: 5px solid #fed330;
  position: relative;
  margin: 35px 0;
  box-shadow:
    0 0 0 10px #fc5c65,
    0 0 0 15px #26de81;
  text-transform: uppercase;
  transform: rotate(2deg);
}

#nice h3::before {
  content: "⬟";
  position: absolute;
  left: -30px;
  top: 50%;
  transform: translateY(-50%) rotate(45deg);
  color: #a55eea;
  font-size: 1.3em;
}

/* 几何拼贴段落 */
#nice p {
  background: rgba(255, 255, 255, 0.95);
  padding: 25px;
  margin: 25px 0;
  border: 4px solid;
  border-image: repeating-linear-gradient(
    45deg,
    #fc5c65,
    #fc5c65 5px,
    #fed330 5px,
    #fed330 10px,
    #26de81 10px,
    #26de81 15px,
    #4b7bec 15px,
    #4b7bec 20px
  ) 4;
  color: #2d3436;
  font-size: 1.15em;
  line-height: 1.8;
  position: relative;
  transform: rotate(-1deg);
  box-shadow: 8px 8px 0 rgba(0, 0, 0, 0.1);
}

#nice p::before,
#nice p::after {
  content: "";
  position: absolute;
  width: 30px;
  height: 30px;
}

#nice p::before {
  top: -15px;
  left: -15px;
  background: #fc5c65;
  clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
}

#nice p::after {
  bottom: -15px;
  right: -15px;
  background: #4b7bec;
  border-radius: 50%;
}

/* 彩虹强调文本 */
#nice strong {
  background: linear-gradient(
    90deg,
    #fc5c65 0%,
    #fed330 25%,
    #26de81 50%,
    #4b7bec 75%,
    #a55eea 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 900;
  font-size: 1.2em;
  display: inline-block;
  position: relative;
  
}


  100% { filter: hue-rotate(360deg); }
}

#nice strong::after {
  content: "★";
  position: absolute;
  right: -20px;
  top: -5px;
  color: #fed330;
  font-size: 1em;
  
}


  100% { transform: rotate(360deg); }
}

/* 斜体波浪线 */
#nice em {
  font-style: italic;
  color: #fc5c65;
  font-weight: bold;
  position: relative;
  display: inline-block;
}

#nice em::after {
  content: "";
  position: absolute;
  bottom: -3px;
  left: 0;
  right: 0;
  height: 3px;
  background: repeating-linear-gradient(
    90deg,
    #4b7bec,
    #4b7bec 3px,
    #26de81 3px,
    #26de81 6px
  );
  
}


  100% { background-position: 6px 0; }
}

/* 马赛克引用块 */
#nice blockquote {
  background: repeating-linear-gradient(
    90deg,
    #fc5c65 0px,
    #fc5c65 40px,
    #fed330 40px,
    #fed330 80px,
    #26de81 80px,
    #26de81 120px,
    #4b7bec 120px,
    #4b7bec 160px
  );
  padding: 35px;
  margin: 45px 0;
  position: relative;
  transform: skew(-2deg);
  box-shadow:
    10px 10px 0 rgba(0, 0, 0, 0.2),
    20px 20px 0 rgba(0, 0, 0, 0.1);
  color: #ffffff;
}

#nice blockquote::before {
  content: "◈";
  font-size: 4em;
  position: absolute;
  top: -20px;
  left: 20px;
  color: #ffffff;
  text-shadow: 3px 3px 0 rgba(0, 0, 0, 0.3);
}

#nice blockquote p {
  background: rgba(255, 255, 255, 0.95);
  color: #2d3436;
  transform: none;
  border: none;
  box-shadow: 5px 5px 0 rgba(0, 0, 0, 0.2);
}

/* 代码块像素艺术 */
#nice pre code {
  background: #2d3436;
  color: #26de81;
  padding: 30px;
  border: 8px solid;
  border-image: repeating-linear-gradient(
    0deg,
    #fc5c65 0px,
    #fc5c65 8px,
    #fed330 8px,
    #fed330 16px,
    #26de81 16px,
    #26de81 24px,
    #4b7bec 24px,
    #4b7bec 32px
  ) 8;
  font-family: "Courier New", monospace;
  font-size: 1.1em;
  position: relative;
  transform: perspective(500px) rotateY(-5deg);
  box-shadow: 15px 15px 0 rgba(0, 0, 0, 0.3);
}

#nice pre code::before {
  content: "{ CODE }";
  position: absolute;
  top: -25px;
  left: 20px;
  background: #fed330;
  color: #2d3436;
  padding: 3px 12px;
  font-weight: bold;
  clip-path: polygon(0 0, 100% 0, 90% 100%, 10% 100%);
}

/* 行内代码几何标签 */
#nice code {
  background: #a55eea;
  color: #ffffff;
  padding: 3px 10px;
  font-weight: bold;
  clip-path: polygon(5px 0, 100% 0, calc(100% - 5px) 100%, 0 100%);
  box-shadow: 3px 3px 0 #fc5c65;
  display: inline-block;
  transform: skewX(-10deg);
}

/* 链接立体按钮 */
#nice a {
  color: #ffffff;
  background: linear-gradient(135deg, #4b7bec 0%, #a55eea 100%);
  text-decoration: none;
  padding: 10px 25px;
  display: inline-block;
  position: relative;
  font-weight: bold;
  text-transform: uppercase;
  transform-style: preserve-3d;
  transform: perspective(500px) rotateX(10deg);
  transition: all 0.3s;
  box-shadow:
    0 5px 0 #fc5c65,
    0 10px 0 #fed330,
    0 15px 20px rgba(0, 0, 0, 0.3);
}

#nice a:hover {
  transform: perspective(500px) rotateX(0deg) translateY(-5px);
  box-shadow:
    0 10px 0 #fc5c65,
    0 20px 0 #fed330,
    0 25px 30px rgba(0, 0, 0, 0.4);
}

#nice a::after {
  content: " ◉";
  margin-left: 5px;
}

/* 列表几何装饰 */
#nice ul, #nice ol {
  background: rgba(255, 255, 255, 0.95);
  border: 5px solid;
  border-image: conic-gradient(
    from 0deg,
    #fc5c65,
    #fed330,
    #26de81,
    #4b7bec,
    #a55eea,
    #fc5c65
  ) 5;
  padding: 30px 45px;
  margin: 35px 0;
  position: relative;
  transform: rotate(1deg);
  box-shadow: 10px 10px 0 rgba(0, 0, 0, 0.1);
}

#nice ul::before {
  content: "◎";
  position: absolute;
  top: -25px;
  left: 30px;
  font-size: 3em;
  color: #fc5c65;
  
}


  100% { transform: rotate(360deg); }
}

#nice li {
  margin: 15px 0;
  padding-left: 40px;
  position: relative;
  color: #2d3436;
  font-size: 1.1em;
}

#nice ul li::before {
  content: "";
  position: absolute;
  left: 0;
  top: 8px;
  width: 20px;
  height: 20px;
  background: conic-gradient(#fc5c65, #fed330, #26de81, #4b7bec);
  clip-path: polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%);
  
}


  100% { transform: rotate(360deg); }
}

#nice ol {
  counter-reset: geometric-counter;
}

#nice ol li {
  counter-increment: geometric-counter;
}

#nice ol li::before {
  content: counter(geometric-counter);
  position: absolute;
  left: 0;
  width: 28px;
  height: 28px;
  background: linear-gradient(45deg, #fc5c65, #4b7bec);
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  clip-path: polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%);
}

/* 表格棋盘格 */
#nice table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 5px;
  background: #2d3436;
  padding: 10px;
  margin: 40px 0;
  transform: rotate(-1deg);
  box-shadow:
    10px 10px 0 #fc5c65,
    20px 20px 0 #fed330;
}

#nice th {
  background: linear-gradient(diagonal, #4b7bec 0%, #a55eea 100%);
  color: #ffffff;
  padding: 15px;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 0.1em;
  clip-path: polygon(0 0, 100% 0, 95% 100%, 5% 100%);
}

#nice td {
  background: #ffffff;
  color: #2d3436;
  padding: 12px;
  position: relative;
  font-weight: 500;
}

#nice tbody tr:nth-child(odd) td:nth-child(even),
#nice tbody tr:nth-child(even) td:nth-child(odd) {
  background: linear-gradient(45deg, rgba(252, 92, 101, 0.2) 25%, transparent 25%, transparent 75%, rgba(254, 211, 48, 0.2) 75%);
}

#nice tbody tr:hover td {
  background: linear-gradient(135deg, #fc5c65, #4b7bec) !important;
  color: #ffffff;
  transform: scale(1.05);
}

/* 分割线几何图案 */
#nice hr {
  border: none;
  height: 40px;
  background: repeating-linear-gradient(
    90deg,
    transparent,
    transparent 10px,
    #fc5c65 10px,
    #fc5c65 20px,
    transparent 20px,
    transparent 30px,
    #fed330 30px,
    #fed330 40px,
    transparent 40px,
    transparent 50px,
    #26de81 50px,
    #26de81 60px,
    transparent 60px,
    transparent 70px,
    #4b7bec 70px,
    #4b7bec 80px
  );
  margin: 50px 0;
  position: relative;
  transform: skewX(-10deg);
}

#nice hr::before,
#nice hr::after {
  content: "◆";
  position: absolute;
  font-size: 2.5em;
  top: 5px;
  
}

#nice hr::before {
  left: 20px;
  color: #fc5c65;
  
}

#nice hr::after {
  right: 20px;
  color: #4b7bec;
  
}


  50% { transform: translateY(-10px) rotate(180deg); }
}

/* 图片万花筒边框 */
#nice img {
  max-width: 100%;
  height: auto;
  padding: 15px;
  background: repeating-conic-gradient(
    from 0deg at 50% 50%,
    #fc5c65 0deg 30deg,
    #fed330 30deg 60deg,
    #26de81 60deg 90deg,
    #4b7bec 90deg 120deg
  );
  border: 5px solid #2d3436;
  box-shadow:
    0 0 0 10px #ffffff,
    0 0 0 15px #a55eea,
    15px 15px 30px rgba(0, 0, 0, 0.3);
  transform: rotate(-3deg);
  margin: 45px auto;
  display: block;
  transition: all 0.5s;
}

#nice img:hover {
  transform: rotate(3deg) scale(1.05);
  box-shadow:
    0 0 0 10px #ffffff,
    0 0 0 15px #fc5c65,
    20px 20px 40px rgba(0, 0, 0, 0.4);
}`;
