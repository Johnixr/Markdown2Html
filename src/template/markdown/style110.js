export default `/* 孟菲斯风格 110 - 街头涂鸦拼贴 Memphis Street Art Collage */
#nice {
  font-family: "Permanent Marker", "Fredoka One", "Impact", sans-serif;
  background: #2d2d2d;
  background-image:
    linear-gradient(45deg, transparent 30%, rgba(255, 0, 128, 0.1) 30%, rgba(255, 0, 128, 0.1) 70%, transparent 70%),
    linear-gradient(-45deg, transparent 30%, rgba(0, 255, 128, 0.1) 30%, rgba(0, 255, 128, 0.1) 70%, transparent 70%),
    repeating-linear-gradient(0deg, transparent, transparent 50px, rgba(255, 255, 0, 0.05) 50px, rgba(255, 255, 0, 0.05) 100px);
  padding: 40px;
  position: relative;
  overflow: hidden;
  color: #ffffff;
}

/* 喷漆装饰背景 */
#nice::before {
  content: "STREET ART";
  position: absolute;
  top: 30px;
  right: -100px;
  font-size: 8em;
  font-weight: 900;
  color: rgba(255, 0, 128, 0.1);
  transform: rotate(90deg);
  letter-spacing: 0.2em;
  z-index: 0;
}

#nice > * {
  position: relative;
  z-index: 1;
}

/* 涂鸦大标题 */
#nice h1 {
  font-size: 5em;
  text-transform: uppercase;
  background: linear-gradient(
    135deg,
    #ff0080 0%,
    #ffff00 25%,
    #00ff00 50%,
    #00ffff 75%,
    #ff00ff 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow:
    2px 2px 0 #000000,
    4px 4px 0 rgba(255, 255, 255, 0.2),
    6px 6px 10px rgba(0, 0, 0, 0.5);
  margin: 50px 0;
  transform: skew(-10deg) rotate(-3deg);
  display: inline-block;
  position: relative;
  letter-spacing: -0.05em;
}

#nice h1::before {
  content: "";
  position: absolute;
  top: 50%;
  left: -30px;
  right: -30px;
  height: 20px;
  background: rgba(255, 255, 0, 0.5);
  transform: rotate(2deg);
  z-index: -1;
}

#nice h1::after {
  content: "✖";
  position: absolute;
  right: -60px;
  top: 0;
  color: #ff0080;
  font-size: 0.8em;
  transform: rotate(15deg);
}

/* 标签贴纸次标题 */
#nice h2 {
  font-size: 3em;
  background: #ffff00;
  color: #000000;
  padding: 15px 35px;
  display: inline-block;
  position: relative;
  margin: 35px 0;
  transform: rotate(-5deg);
  box-shadow:
    3px 3px 0 #ff0080,
    6px 6px 0 #00ff00,
    9px 9px 15px rgba(0, 0, 0, 0.5);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border: 3px solid #000000;
  clip-path: polygon(
    0 10%,
    10% 0,
    90% 0,
    100% 10%,
    100% 90%,
    90% 100%,
    10% 100%,
    0 90%
  );
}

#nice h2::before {
  content: "★";
  position: absolute;
  left: -20px;
  top: 50%;
  transform: translateY(-50%);
  color: #00ffff;
  font-size: 1.5em;
  text-shadow: 2px 2px 0 #000000;
}

/* 喷漆三级标题 */
#nice h3 {
  font-size: 2.5em;
  color: #00ff00;
  text-shadow:
    2px 2px 0 #000000,
    4px 4px 8px rgba(0, 0, 0, 0.5);
  background: rgba(255, 255, 255, 0.1);
  padding: 10px 25px;
  display: inline-block;
  border-left: 10px solid #ff00ff;
  margin: 30px 0;
  transform: skewX(-10deg);
  position: relative;
  text-transform: uppercase;
}

#nice h3::after {
  content: "";
  position: absolute;
  bottom: -5px;
  left: 0;
  right: 0;
  height: 3px;
  background: repeating-linear-gradient(
    90deg,
    #ff0080,
    #ff0080 5px,
    transparent 5px,
    transparent 10px
  );
}

/* 撕纸拼贴段落 */
#nice p {
  background: rgba(255, 255, 255, 0.9);
  color: #2d2d2d;
  padding: 20px 25px;
  margin: 25px 0;
  position: relative;
  transform: rotate(-1deg);
  box-shadow:
    0 5px 15px rgba(0, 0, 0, 0.3),
    inset 0 0 20px rgba(0, 0, 0, 0.05);
  font-size: 1.15em;
  line-height: 1.7;
  clip-path: polygon(
    0 0,
    calc(100% - 15px) 0,
    100% 15px,
    100% 100%,
    15px 100%,
    0 calc(100% - 15px)
  );
}

#nice p::before {
  content: "";
  position: absolute;
  top: 10px;
  right: 10px;
  width: 30px;
  height: 30px;
  background: #ff0080;
  border-radius: 50%;
  box-shadow: 2px 2px 0 #000000;
}

/* 荧光笔强调文本 */
#nice strong {
  background: linear-gradient(to bottom, transparent 40%, #ffff00 40%, #ffff00 95%, transparent 95%);
  color: #000000;
  padding: 0 5px;
  font-weight: 900;
  font-size: 1.1em;
  display: inline-block;
  transform: rotate(-2deg);
  position: relative;
  text-transform: uppercase;
}

#nice strong::after {
  content: "!";
  position: absolute;
  right: -15px;
  top: -5px;
  color: #ff0080;
  font-size: 1.5em;
  transform: rotate(15deg);
  text-shadow: 2px 2px 0 #000000;
}

/* 手写斜体 */
#nice em {
  font-style: italic;
  color: #00ffff;
  text-shadow:
    0 0 5px #00ffff,
    0 0 10px #00ffff;
  font-weight: bold;
  border-bottom: 3px solid #ff00ff;
  display: inline-block;
  transform: skewX(-10deg);
}

/* 墙壁涂鸦引用块 */
#nice blockquote {
  background: #000000;
  background-image:
    repeating-linear-gradient(
      0deg,
      transparent,
      transparent 20px,
      rgba(255, 255, 255, 0.02) 20px,
      rgba(255, 255, 255, 0.02) 21px
    );
  border-left: 10px solid #ff0080;
  padding: 30px;
  margin: 40px 0;
  position: relative;
  color: #ffffff;
  transform: perspective(500px) rotateY(3deg);
  box-shadow:
    5px 5px 0 #ffff00,
    10px 10px 0 #00ff00,
    15px 15px 20px rgba(0, 0, 0, 0.5);
}

#nice blockquote::before {
  content: """;
  font-size: 5em;
  position: absolute;
  top: -20px;
  left: 10px;
  color: #ff00ff;
  text-shadow: 3px 3px 0 #000000;
  font-weight: bold;
}

#nice blockquote p {
  background: transparent;
  color: #ffffff;
  transform: none;
  box-shadow: none;
  clip-path: none;
}

/* 代码块黑板风格 */
#nice pre code {
  background: #1a1a1a;
  color: #00ff00;
  padding: 30px;
  border: 5px solid;
  border-image: repeating-linear-gradient(
    45deg,
    #ff0080,
    #ff0080 10px,
    #ffff00 10px,
    #ffff00 20px,
    #00ffff 20px,
    #00ffff 30px
  ) 5;
  font-family: "Courier New", monospace;
  font-size: 1.1em;
  position: relative;
  overflow-x: auto;
  text-shadow: 0 0 5px rgba(0, 255, 0, 0.5);
}

#nice pre code::before {
  content: "< CODE >";
  position: absolute;
  top: -20px;
  left: 20px;
  background: #ff0080;
  color: #ffffff;
  padding: 2px 10px;
  font-weight: bold;
  transform: rotate(-3deg);
}

/* 行内代码标签 */
#nice code {
  background: #ff00ff;
  color: #ffffff;
  padding: 2px 8px;
  font-weight: bold;
  border: 2px solid #000000;
  box-shadow: 2px 2px 0 #ffff00;
  transform: rotate(-1deg);
  display: inline-block;
}

/* 链接霓虹按钮 */
#nice a {
  color: #000000;
  background: #00ff00;
  text-decoration: none;
  padding: 8px 18px;
  display: inline-block;
  position: relative;
  font-weight: bold;
  text-transform: uppercase;
  border: 3px solid #000000;
  box-shadow:
    3px 3px 0 #ff0080,
    6px 6px 0 #ffff00;
  transform: skewX(-5deg);
  transition: all 0.2s;
}

#nice a:hover {
  transform: skewX(-5deg) translate(-3px, -3px);
  box-shadow:
    6px 6px 0 #ff0080,
    9px 9px 0 #ffff00,
    12px 12px 15px rgba(0, 0, 0, 0.3);
}

#nice a::after {
  content: " ↗";
  font-weight: bold;
}

/* 列表涂鸦墙 */
#nice ul, #nice ol {
  background: rgba(0, 0, 0, 0.8);
  border: 4px solid #ffff00;
  padding: 25px 40px;
  margin: 30px 0;
  position: relative;
  box-shadow:
    5px 5px 0 #ff0080,
    10px 10px 0 #00ff00;
  transform: rotate(1deg);
}

#nice ul::before {
  content: "LIST";
  position: absolute;
  top: -15px;
  left: 20px;
  background: #ff0080;
  color: #ffffff;
  padding: 2px 15px;
  font-weight: bold;
  font-size: 0.9em;
  transform: rotate(-5deg);
}

#nice li {
  color: #ffffff;
  margin: 12px 0;
  padding-left: 35px;
  position: relative;
  font-size: 1.1em;
}

#nice ul li::before {
  content: "▶";
  position: absolute;
  left: 0;
  color: #00ff00;
  font-size: 1.2em;
  text-shadow: 2px 2px 0 #000000;
}

#nice ol {
  counter-reset: graffiti-counter;
}

#nice ol li {
  counter-increment: graffiti-counter;
}

#nice ol li::before {
  content: counter(graffiti-counter);
  position: absolute;
  left: 0;
  width: 25px;
  height: 25px;
  background: #ff00ff;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  border: 2px solid #000000;
  transform: rotate(-10deg);
}

/* 表格涂鸦板 */
#nice table {
  width: 100%;
  background: #2d2d2d;
  border: 5px solid #ffff00;
  margin: 35px 0;
  box-shadow:
    5px 5px 0 #ff0080,
    10px 10px 0 #00ff00,
    15px 15px 20px rgba(0, 0, 0, 0.5);
  transform: rotate(-1deg);
}

#nice th {
  background: linear-gradient(90deg, #ff0080, #ffff00, #00ff00, #00ffff);
  color: #000000;
  padding: 15px;
  text-transform: uppercase;
  font-weight: 900;
  letter-spacing: 0.1em;
  text-shadow: 2px 2px 0 rgba(255, 255, 255, 0.3);
}

#nice td {
  background: rgba(255, 255, 255, 0.1);
  color: #ffffff;
  padding: 12px;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

#nice tbody tr:hover td {
  background: rgba(255, 0, 128, 0.3);
  color: #ffff00;
}

/* 分割线喷漆效果 */
#nice hr {
  border: none;
  height: 20px;
  background: repeating-linear-gradient(
    90deg,
    #ff0080 0px,
    #ff0080 20px,
    transparent 20px,
    transparent 30px,
    #ffff00 30px,
    #ffff00 50px,
    transparent 50px,
    transparent 60px,
    #00ff00 60px,
    #00ff00 80px,
    transparent 80px,
    transparent 90px
  );
  margin: 50px 0;
  position: relative;
  transform: skewX(-10deg);
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
}

#nice hr::before,
#nice hr::after {
  content: "✕";
  position: absolute;
  font-size: 2em;
  font-weight: bold;
  top: -5px;
}

#nice hr::before {
  left: 20px;
  color: #ff0080;
  transform: rotate(-15deg);
}

#nice hr::after {
  right: 20px;
  color: #00ffff;
  transform: rotate(15deg);
}

/* 图片拍立得拼贴 */
#nice img {
  max-width: 100%;
  height: auto;
  padding: 10px;
  background: #ffffff;
  border: 3px solid #000000;
  box-shadow:
    5px 5px 0 #ff0080,
    10px 10px 0 #ffff00,
    15px 15px 0 #00ff00,
    20px 20px 30px rgba(0, 0, 0, 0.5);
  transform: rotate(-7deg);
  margin: 40px auto;
  display: block;
  filter: contrast(1.2) saturate(1.3);
  transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

#nice img:hover {
  transform: rotate(7deg) scale(1.05);
  box-shadow:
    5px 5px 0 #ffff00,
    10px 10px 0 #00ff00,
    15px 15px 0 #00ffff,
    20px 20px 40px rgba(0, 0, 0, 0.6);
}`;
