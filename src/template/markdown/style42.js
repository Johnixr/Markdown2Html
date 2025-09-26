export default `/* 墨西哥节日 - style-42-mexican-fiesta.css */

/* Style 42: 墨西哥节日 - Mexican Fiesta */

/* 全局属性 */
#nice {
  font-family: 'Georgia', 'Arial', sans-serif;
  color: #3e2723;
  background: linear-gradient(180deg, #fff8e1 0%, #ffecb3 100%);
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
  color: #4e342e;
  margin: 18px 0;
  letter-spacing: 0.3px;
}

/* 一级标题 - 彩旗飘扬 */
#nice h1 {
  font-size: 46px;
  font-weight: 900;
  margin: 56px 0 36px 0;
  color: #ffffff;
  background: linear-gradient(135deg,
    #f44336 0%, #ff9800 20%, #ffeb3b 40%,
    #4caf50 60%, #2196f3 80%, #9c27b0 100%);
  padding: 40px;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 3px;
  position: relative;
  text-shadow: 2px 2px 0 #000000;
}

#nice h1:after {
  content: '🎉 🌮 🎊';
  display: block;
  font-size: 24px;
  margin-top: 16px;
}

/* 二级标题 - 辣椒红 */
#nice h2 {
  font-size: 30px;
  font-weight: 800;
  margin: 36px 0 24px 0;
  color: #ffffff;
  background: #d32f2f;
  padding: 14px 28px;
  display: inline-block;
  position: relative;
  box-shadow: 4px 4px 0 #ff9800;
}

#nice h2:before,
#nice h2:after {
  content: '◆';
  position: absolute;
  color: #ffeb3b;
  font-size: 20px;
}

#nice h2:before {
  top: -10px;
  left: 10px;
}

#nice h2:after {
  bottom: -10px;
  right: 10px;
}

/* 三级标题 */
#nice h3 {
  font-size: 20px;
  font-weight: 700;
  margin: 28px 0 16px 0;
  color: #f57c00;
  padding: 8px 16px;
  border: 2px solid #4caf50;
  display: inline-block;
}

/* 引用 - 节日装饰 */
#nice blockquote {
  margin: 32px 0;
  padding: 24px;
  background: repeating-linear-gradient(
    45deg,
    rgba(244, 67, 54, 0.1),
    rgba(244, 67, 54, 0.1) 10px,
    rgba(76, 175, 80, 0.1) 10px,
    rgba(76, 175, 80, 0.1) 20px
  );
  border-left: 4px solid #ff9800;
  border-right: 4px solid #4caf50;
  position: relative;
}

#nice blockquote p {
  color: #4e342e;
  margin: 8px 0;
  font-weight: 500;
}

/* 链接 - 仙人掌绿 */
#nice a {
  color: #388e3c;
  text-decoration: none;
  font-weight: 700;
  padding: 2px 8px;
  background: rgba(76, 175, 80, 0.2);
  border-bottom: 2px solid #4caf50;
  transition: all 0.3s;
}

#nice a:hover {
  background: #4caf50;
  color: #ffffff;
}

/* 加粗 - 烈日黄 */
#nice strong {
  font-weight: 800;
  color: #6a4c93;
  background: #ffeb3b;
  padding: 3px 10px;
  margin: 0 2px;
  display: inline-block;
  border: 2px solid #ff9800;
  transform: rotate(-2deg);
}

/* 代码块 - 龙舌兰色 */
#nice pre {
  margin: 32px 0;
  background: #388e3c;
  color: #ffeb3b;
  padding: 28px;
  border: 3px solid #d32f2f;
  position: relative;
}

#nice pre:before {
  content: 'FIESTA';
  position: absolute;
  top: -12px;
  left: 20px;
  background: #ffeb3b;
  color: #d32f2f;
  padding: 0 12px;
  font-weight: 900;
  font-size: 12px;
}

#nice pre code {
  color: #ffeb3b;
  font-family: 'Courier New', monospace;
  font-size: 13px;
  line-height: 1.6;
}`;
