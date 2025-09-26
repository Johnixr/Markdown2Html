export default `/* 孟菲斯风格 105 - 糖果工厂爆炸 Candy Factory Explosion */
#nice {
  font-family: "Bubblegum Sans", "Comic Neue", "Arial Rounded MT Bold", sans-serif;
  background:
    radial-gradient(circle at 20% 80%, #ff6b9d 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, #feca57 0%, transparent 50%),
    radial-gradient(circle at 40% 40%, #48dbfb 0%, transparent 50%),
    radial-gradient(circle at 60% 60%, #ff9ff3 0%, transparent 50%),
    linear-gradient(135deg, #ffeaa7 0%, #fdcb6e 100%);
  padding: 50px 40px;
  position: relative;
  overflow: hidden;
  min-height: 100vh;
}

/* 糖果装饰背景 */
#nice::before,
#nice::after {
  content: "🍭 🍬 🍪 🧁 🍩 🍰";
  position: absolute;
  font-size: 2em;
  opacity: 0.4;
}

#nice::before {
  top: 10%;
  left: 10%;
}

#nice::after {
  bottom: 10%;
  right: 10%;
}

/* 超大泡泡糖标题 */
#nice h1 {
  font-size: 5em;
  font-weight: 900;
  color: #ff6b9d;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: -0.02em;
  margin: 50px 0;
  position: relative;
  transform: rotate(-3deg);
  text-shadow: 5px 5px 0 rgba(0, 0, 0, 0.2), 2px 2px 0 #ffffff;
}


#nice h1::before,
#nice h1::after {
  content: "✨";
  position: absolute;
  font-size: 0.5em;
  color: #feca57;
}

#nice h1::before {
  top: -20px;
  left: 20px;
}

#nice h1::after {
  bottom: -20px;
  right: 20px;
}

/* 棒棒糖二级标题 */
#nice h2 {
  font-size: 3em;
  font-weight: bold;
  background: repeating-linear-gradient(
    45deg,
    #ff6b9d,
    #ff6b9d 10px,
    white 10px,
    white 20px
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline-block;
  padding: 10px 30px;
  margin: 40px 0;
  position: relative;
  transform: rotate(5deg);
  filter: drop-shadow(5px 5px 0 #feca57);
}

#nice h2::before {
  content: "";
  position: absolute;
  bottom: -20px;
  left: 50%;
  transform: translateX(-50%);
  width: 4px;
  height: 60px;
  background: repeating-linear-gradient(
    0deg,
    #48dbfb,
    #48dbfb 5px,
    white 5px,
    white 10px
  );
}

#nice h2::after {
  content: "🍭";
  position: absolute;
  top: -30px;
  right: -20px;
  font-size: 1.5em;
}

/* 果冻软糖三级标题 */
#nice h3 {
  font-size: 2.2em;
  font-weight: bold;
  color: white;
  background: linear-gradient(135deg, #ff9ff3, #ff6b9d);
  padding: 15px 30px;
  border-radius: 50px;
  display: inline-block;
  margin: 30px 0;
  position: relative;
  box-shadow:
    0 10px 20px rgba(255, 107, 157, 0.3),
    inset 0 -5px 10px rgba(0, 0, 0, 0.1),
    inset 0 5px 10px rgba(255, 255, 255, 0.3);
  transform: rotate(-2deg);
  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

#nice h3:hover {
  transform: rotate(2deg) scale(1.05);
  box-shadow:
    0 15px 30px rgba(255, 107, 157, 0.4),
    inset 0 -5px 10px rgba(0, 0, 0, 0.1),
    inset 0 5px 10px rgba(255, 255, 255, 0.3);
}

/* 棉花糖段落 */
#nice p {
  background: rgba(255, 255, 255, 0.95);
  padding: 25px;
  margin: 20px 0;
  border-radius: 20px;
  font-size: 1.15em;
  line-height: 1.8;
  color: #1a1a1a;
  position: relative;
  box-shadow:
    0 10px 30px rgba(0, 0, 0, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 1);
  transform: rotate(-1deg);
  transition: all 0.3s ease;
}

#nice p:hover {
  transform: rotate(0deg) scale(1.02);
  box-shadow:
    0 15px 40px rgba(0, 0, 0, 0.15),
    inset 0 1px 0 rgba(255, 255, 255, 1);
}

#nice p::before {
  content: "";
  position: absolute;
  top: -10px;
  left: 20px;
  width: 30px;
  height: 30px;
  background: linear-gradient(135deg, #feca57, #f368e0);
  border-radius: 50%;
  box-shadow: 0 5px 10px rgba(243, 104, 224, 0.3);
}

/* 彩虹糖强调 */
#nice strong {
  background: #ff6b9d;
  color: #ffffff;
  font-weight: 900;
  font-size: 1.1em;
  position: relative;
  display: inline-block;
  padding: 5px 10px;
  border-radius: 8px;
  box-shadow: 2px 2px 0 rgba(0, 0, 0, 0.2);
}

/* 泡泡糖斜体 */
#nice em {
  color: #ff6b9d;
  font-style: italic;
  font-weight: bold;
  text-decoration: underline wavy #feca57;
  text-decoration-thickness: 3px;
  text-underline-offset: 3px;
  position: relative;
}

#nice em::after {
  content: "💖";
  font-size: 0.8em;
  margin-left: 5px;
  display: inline-block;
}

/* 糖果盒引用 */
#nice blockquote {
  background:
    repeating-linear-gradient(
      45deg,
      #ff9ff3,
      #ff9ff3 20px,
      #feca57 20px,
      #feca57 40px
    );
  padding: 5px;
  margin: 40px 0;
  border-radius: 15px;
  position: relative;
  transform: rotate(2deg);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}

#nice blockquote > * {
  background: white;
  padding: 25px;
  margin: 0;
  border-radius: 10px;
}

#nice blockquote::before {
  content: "🎁";
  position: absolute;
  top: -20px;
  left: 30px;
  font-size: 3em;
  transform: rotate(-15deg);
}

/* 巧克力代码块 */
#nice pre code {
  background: linear-gradient(135deg, #6c4f3d, #8b6f47);
  color: #fff;
  padding: 30px;
  border-radius: 15px;
  font-family: "Courier New", monospace;
  font-size: 1em;
  position: relative;
  box-shadow:
    0 10px 30px rgba(108, 79, 61, 0.3),
    inset 0 2px 0 rgba(255, 255, 255, 0.2),
    inset 0 -2px 0 rgba(0, 0, 0, 0.2);
  margin: 30px 0;
  overflow-x: auto;
}

#nice pre code::before {
  content: "🍫 CHOCOLATE CODE 🍫";
  display: block;
  text-align: center;
  margin-bottom: 15px;
  font-weight: bold;
  color: #feca57;
  letter-spacing: 0.2em;
}

/* 糖果按钮代码 */
#nice code {
  background: linear-gradient(135deg, #48dbfb, #0abde3);
  color: white;
  padding: 4px 12px;
  border-radius: 20px;
  font-weight: bold;
  font-family: monospace;
  display: inline-block;
  box-shadow:
    0 3px 10px rgba(72, 219, 251, 0.3),
    inset 0 -2px 0 rgba(0, 0, 0, 0.2);
  transform: translateY(-2px);
  transition: all 0.2s;
}

#nice code:active {
  transform: translateY(0);
  box-shadow:
    0 1px 5px rgba(72, 219, 251, 0.3),
    inset 0 -1px 0 rgba(0, 0, 0, 0.2);
}

/* 彩虹桥链接 */
#nice a {
  color: #ff6b9d;
  text-decoration: none;
  font-weight: bold;
  position: relative;
  display: inline-block;
  transition: all 0.3s;
}

#nice a::before {
  content: "";
  position: absolute;
  bottom: -3px;
  left: 0;
  width: 100%;
  height: 3px;
  background: linear-gradient(90deg, #ff6b9d, #feca57, #48dbfb, #ff9ff3);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s ease;
}

#nice a:hover {
  color: #feca57;
  transform: translateY(-2px);
}

#nice a:hover::before {
  transform: scaleX(1);
}

#nice a::after {
  content: " 🌈";
  opacity: 0;
  transition: opacity 0.3s;
}

#nice a:hover::after {
  opacity: 1;
}

/* 糖果色列表 */
#nice ul, #nice ol {
  background: rgba(255, 255, 255, 0.9);
  padding: 25px 40px;
  margin: 25px 0;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  position: relative;
  transform: rotate(-1deg);
}

#nice li {
  margin: 15px 0;
  padding-left: 30px;
  position: relative;
  font-size: 1.1em;
  color: #2c3e50;
}

#nice ul li::before {
  content: "🍬";
  position: absolute;
  left: 0;
  font-size: 1.2em;
}

#nice ul li:nth-child(2n)::before { content: "🍭"; }
#nice ul li:nth-child(3n)::before { content: "🧁"; }
#nice ul li:nth-child(4n)::before { content: "🍩"; }
#nice ul li:nth-child(5n)::before { content: "🍰"; }

#nice ol {
  counter-reset: candy-counter;
}

#nice ol li {
  counter-increment: candy-counter;
}

#nice ol li::before {
  content: counter(candy-counter);
  position: absolute;
  left: 0;
  width: 25px;
  height: 25px;
  background: linear-gradient(135deg, #ff6b9d, #feca57);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 0.9em;
  box-shadow: 0 3px 10px rgba(255, 107, 157, 0.3);
}

/* 糖果盒表格 */
#nice table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 10px;
  margin: 30px 0;
}

#nice th {
  background: linear-gradient(135deg, #ff6b9d, #feca57);
  color: white;
  padding: 15px;
  border-radius: 10px 10px 0 0;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  text-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

#nice td {
  background: white;
  padding: 12px;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s;
}

#nice td:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  background: linear-gradient(135deg, #fff, #ffeaa7);
}

/* 糖纸分割线 */
#nice hr {
  border: none;
  height: 40px;
  margin: 50px 0;
  position: relative;
  overflow: visible;
}

#nice hr::before {
  content: "🍬 🍭 🍬 🍭 🍬 🍭 🍬 🍭 🍬";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1.5em;
  letter-spacing: 0.5em;
}

/* 糖果包装纸图片 */
#nice img {
  max-width: 100%;
  height: auto;
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  position: relative;
  display: block;
  margin: 40px auto;
  padding: 10px;
  background:
    repeating-linear-gradient(
      45deg,
      transparent,
      transparent 10px,
      rgba(255, 107, 157, 0.1) 10px,
      rgba(255, 107, 157, 0.1) 20px
    ),
    white;
  transform: rotate(-2deg);
  transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

#nice img:hover {
  transform: rotate(2deg) scale(1.05);
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.2);
}`;
