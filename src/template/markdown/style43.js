export default `/* 星际迷航 - style-43-star-trek.css */

/* Style 43: 星际迷航 - Star Trek */

/* 全局属性 */
#nice {
  font-family: 'Helvetica Neue', 'Arial', sans-serif;
  color: #c9d1d9;
  background: linear-gradient(180deg, #0d1117 0%, #161b22 100%);
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
  color: #b1bac4;
  margin: 18px 0;
  letter-spacing: 0.3px;
}

/* 一级标题 - 星舰徽章 */
#nice h1 {
  font-size: 48px;
  font-weight: 700;
  margin: 56px 0 36px 0;
  background: linear-gradient(135deg, #ffd700 0%, #ffa500 50%, #ff6b35 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 6px;
  position: relative;
}

#nice h1:before {
  content: '◤ STARFLEET ◥';
  display: block;
  font-size: 14px;
  color: #58a6ff;
  margin-bottom: 16px;
  letter-spacing: 4px;
}

/* 二级标题 - 指挥金 */
#nice h2 {
  font-size: 28px;
  font-weight: 600;
  margin: 36px 0 24px 0;
  color: #0d1117;
  background: linear-gradient(135deg, #ffd700, #ffa500);
  padding: 14px 32px;
  display: inline-block;
  clip-path: polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%);
}

/* 三级标题 */
#nice h3 {
  font-size: 20px;
  font-weight: 600;
  margin: 28px 0 16px 0;
  color: #58a6ff;
  padding-left: 20px;
  border-left: 4px solid #ffd700;
}

/* 引用 - 舰长日志 */
#nice blockquote {
  margin: 32px 0;
  padding: 24px;
  background: rgba(88, 166, 255, 0.1);
  border: 1px solid #58a6ff;
  position: relative;
  font-family: monospace;
}

#nice blockquote:before {
  content: 'CAPTAIN\\'S LOG';
  position: absolute;
  top: -10px;
  left: 20px;
  background: #161b22;
  color: #ffd700;
  padding: 0 12px;
  font-size: 11px;
  font-weight: 700;
}

#nice blockquote p {
  color: #c9d1d9;
  margin: 8px 0;
  font-style: italic;
}

/* 链接 - 科学蓝 */
#nice a {
  color: #58a6ff;
  text-decoration: none;
  font-weight: 600;
  padding: 2px 8px;
  border: 1px solid #58a6ff;
  background: rgba(88, 166, 255, 0.1);
  transition: all 0.3s;
}

#nice a:hover {
  background: #58a6ff;
  color: #0d1117;
}

/* 加粗 - 工程红 */
#nice strong {
  font-weight: 700;
  color: #0d1117;
  background: #ff6b35;
  padding: 3px 10px;
  margin: 0 2px;
  display: inline-block;
  clip-path: polygon(5% 0%, 100% 0%, 95% 100%, 0% 100%);
}

/* 代码块 - 控制台 */
#nice pre {
  margin: 32px 0;
  background: #0d1117;
  color: #58a6ff;
  padding: 28px;
  border: 2px solid #ffd700;
  position: relative;
}

#nice pre:before {
  content: 'LCARS SYSTEM';
  position: absolute;
  top: 0;
  right: 0;
  background: #ffd700;
  color: #0d1117;
  padding: 4px 16px;
  font-weight: 700;
  font-size: 11px;
}

#nice pre code {
  color: #58a6ff;
  font-family: 'Monaco', monospace;
  font-size: 13px;
  line-height: 1.6;
}`;
