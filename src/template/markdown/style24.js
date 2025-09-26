export default `/* 霓虹东京 - style-24-neon-tokyo.css */

/* Style 24: 霓虹东京 - Neon Tokyo */

/* 全局属性 */
#nice {
  font-family: 'SF Pro Display', 'Hiragino Sans', sans-serif;
  color: #e0e0e0;
  background: linear-gradient(180deg, #0a0e27 0%, #151933 100%);
  font-size: 15px;
  line-height: 1.75;
  padding: 40px;
  max-width: 900px;
  margin: 0 auto;
}

/* 段落 */
#nice p {
  font-size: 15px;
  line-height: 1.8;
  color: #b8b8d0;
  margin: 18px 0;
  letter-spacing: 0.3px;
}

/* 一级标题 - 霓虹招牌 */
#nice h1 {
  font-size: 44px;
  font-weight: 900;
  margin: 56px 0 36px 0;
  color: #ff0080;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 3px;
  text-shadow:
    0 0 10px #ff0080,
    0 0 20px #ff0080,
    0 0 30px #ff0080,
    0 0 40px #ff0080;
  padding: 32px;
  border: 3px solid #ff0080;
  position: relative;
}

#nice h1:before,
#nice h1:after {
  content: '';
  position: absolute;
  width: 100%;
  height: 2px;
  background: #00ffff;
  left: 0;
}

#nice h1:before {
  top: 12px;
}

#nice h1:after {
  bottom: 12px;
}

/* 二级标题 - 电子蓝紫 */
#nice h2 {
  font-size: 28px;
  font-weight: 700;
  margin: 36px 0 24px 0;
  color: #00ffff;
  padding: 14px 28px;
  background: rgba(0, 255, 255, 0.1);
  border: 2px solid #00ffff;
  display: inline-block;
  clip-path: polygon(0 0, calc(100% - 20px) 0, 100% 100%, 20px 100%);
  text-shadow: 0 0 10px #00ffff;
}

/* 三级标题 */
#nice h3 {
  font-size: 20px;
  font-weight: 600;
  margin: 28px 0 16px 0;
  color: #ff00ff;
  padding-left: 20px;
  position: relative;
  text-shadow: 0 0 5px #ff00ff;
}

#nice h3:before {
  content: '//';
  position: absolute;
  left: 0;
  color: #00ffff;
}

/* 引用 - 赛博街道 */
#nice blockquote {
  margin: 32px 0;
  padding: 24px;
  background: rgba(255, 0, 128, 0.1);
  border: 1px solid #ff0080;
  border-radius: 0;
  position: relative;
  font-family: monospace;
}

#nice blockquote:before {
  content: '[QUOTE]';
  position: absolute;
  top: 8px;
  left: 24px;
  color: #00ffff;
  font-size: 10px;
  letter-spacing: 2px;
}

#nice blockquote p {
  color: #e0e0e0;
  margin: 16px 0 8px 0;
}

/* 链接 - 电子链接 */
#nice a {
  color: #00ffff;
  text-decoration: none;
  font-weight: 600;
  padding: 2px 8px;
  border: 1px solid #00ffff;
  transition: all 0.3s;
  text-transform: uppercase;
  font-size: 13px;
  letter-spacing: 1px;
}

#nice a:hover {
  background: #00ffff;
  color: #0a0e27;
  box-shadow: 0 0 12px #00ffff;
}

/* 加粗 - 激光标记 */
#nice strong {
  font-weight: 700;
  color: #0a0e27;
  background: linear-gradient(90deg, #ff0080, #ff00ff);
  padding: 3px 10px;
  margin: 0 2px;
  display: inline-block;
  clip-path: polygon(5px 0, 100% 0, calc(100% - 5px) 100%, 0 100%);
}

/* 列表 */
#nice ul li:before {
  content: '▸';
  position: absolute;
  left: 0;
  color: #ff0080;
  font-size: 18px;
  text-shadow: 0 0 5px #ff0080;
}

#nice ol li:before {
  background: #ff00ff;
  color: #0a0e27;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 700;
  clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
}

/* 代码块 - 终端界面 */
#nice pre {
  margin: 32px 0;
  background: #000000;
  color: #00ff00;
  padding: 28px;
  border: 2px solid #ff0080;
  position: relative;
  font-family: 'Courier New', monospace;
  box-shadow:
    0 0 20px rgba(255, 0, 128, 0.3),
    inset 0 0 20px rgba(0, 255, 255, 0.1);
}

#nice pre:before {
  content: 'TOKYO://SYSTEM';
  position: absolute;
  top: 8px;
  left: 16px;
  color: #ff0080;
  font-size: 10px;
  letter-spacing: 2px;
}

#nice pre code {
  color: #00ff00;
  font-size: 13px;
  line-height: 1.6;
  margin-top: 8px;
  display: block;
}

/* 图片 */
#nice img {
  max-width: 100%;
  height: auto;
  margin: 36px auto;
  display: block;
  border: 3px solid #ff0080;
  box-shadow:
    0 0 20px rgba(255, 0, 128, 0.3),
    0 0 40px rgba(0, 255, 255, 0.2);
}`;
