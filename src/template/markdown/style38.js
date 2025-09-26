export default `/* 赛车方格旗 - style-38-racing-checkered.css */

/* Style 38: 赛车方格旗 - Racing Checkered Flag */

/* 全局属性 */
#nice {
  font-family: 'Arial Black', 'Impact', sans-serif;
  color: #1a1a1a;
  background: linear-gradient(180deg, #f5f5f5 0%, #e0e0e0 100%);
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
  color: #2c2c2c;
  margin: 18px 0;
  letter-spacing: 0.3px;
  font-family: 'Helvetica Neue', Arial, sans-serif;
}

/* 一级标题 - 终点线 */
#nice h1 {
  font-size: 48px;
  font-weight: 900;
  margin: 56px 0 36px 0;
  color: #ffffff;
  background: repeating-linear-gradient(
    90deg,
    #000000 0px,
    #000000 20px,
    #ffffff 20px,
    #ffffff 40px
  );
  padding: 36px;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 4px;
  position: relative;
  text-shadow: 2px 2px 0 #ff0000;
}

#nice h1:after {
  content: '🏁';
  display: block;
  font-size: 32px;
  margin-top: 16px;
}

/* 二级标题 - 赛道红 */
#nice h2 {
  font-size: 32px;
  font-weight: 800;
  margin: 36px 0 24px 0;
  color: #ffffff;
  background: #ff0000;
  padding: 14px 32px;
  display: inline-block;
  transform: skewX(-10deg);
  box-shadow: 6px 6px 0 #000000;
}

/* 三级标题 */
#nice h3 {
  font-size: 20px;
  font-weight: 700;
  margin: 28px 0 16px 0;
  color: #ff0000;
  padding-left: 20px;
  border-left: 8px solid #000000;
  text-transform: uppercase;
}

/* 引用 - 维修站 */
#nice blockquote {
  margin: 32px 0;
  padding: 24px;
  background: #ffeb3b;
  border: 3px solid #000000;
  position: relative;
  transform: rotate(-1deg);
}

#nice blockquote:before {
  content: 'PIT STOP';
  position: absolute;
  top: -12px;
  left: 20px;
  background: #ff0000;
  color: #ffffff;
  padding: 2px 12px;
  font-size: 12px;
  font-weight: 900;
}

#nice blockquote p {
  color: #1a1a1a;
  margin: 8px 0;
  font-weight: 600;
}

/* 链接 - 加速带 */
#nice a {
  color: #ffffff;
  text-decoration: none;
  font-weight: 700;
  padding: 4px 12px;
  background: #ff0000;
  border: 2px solid #000000;
  transition: all 0.3s;
  text-transform: uppercase;
  font-size: 13px;
}

#nice a:hover {
  background: #000000;
  transform: scale(1.1);
}

/* 加粗 - 涡轮增压 */
#nice strong {
  font-weight: 900;
  color: #ff0000;
  background: #000000;
  padding: 3px 12px;
  margin: 0 2px;
  display: inline-block;
  transform: skewX(-5deg);
  text-transform: uppercase;
  font-size: 14px;
}

/* 代码块 - 仪表盘 */
#nice pre {
  margin: 32px 0;
  background: #1a1a1a;
  color: #00ff00;
  padding: 28px;
  border: 3px solid #ff0000;
  position: relative;
}

#nice pre:before {
  content: 'TELEMETRY';
  position: absolute;
  top: 0;
  right: 0;
  background: #ff0000;
  color: #ffffff;
  padding: 4px 16px;
  font-weight: 900;
  font-size: 11px;
}

#nice pre code {
  color: #00ff00;
  font-family: 'Courier New', monospace;
  font-size: 13px;
  line-height: 1.6;
}`;
