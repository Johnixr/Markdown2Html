export default `/* 棋盘格局 - style-68-chessboard-layout.css */

/* Style 68: 棋盘格局 - Chessboard Layout */

/* 全局属性 */
#nice {
  font-family: 'Avenir', 'Helvetica', sans-serif;
  color: #1a1a1a;
  background: #f8f8f8;
  background-image:
    repeating-linear-gradient(0deg, #ffffff 0, #ffffff 40px, transparent 40px, transparent 80px),
    repeating-linear-gradient(90deg, #ffffff 0, #ffffff 40px, transparent 40px, transparent 80px);
  font-size: 15px;
  line-height: 1.65;
  padding: 60px 48px;
  max-width: 720px;
  margin: 0 auto;
}

/* 段落 */
#nice p {
  font-size: 15px;
  line-height: 1.65;
  color: #2a2a2a;
  margin: 16px 0;
}

/* 一级标题 */
#nice h1 {
  font-size: 38px;
  font-weight: 700;
  margin: 48px 0 32px 0;
  color: #ffffff;
  background: #000000;
  padding: 20px 32px;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

/* 二级标题 */
#nice h2 {
  font-size: 24px;
  font-weight: 600;
  margin: 32px 0 20px 0;
  color: #000000;
  padding: 10px 20px;
  border: 2px solid #000000;
  display: inline-block;
}

/* 三级标题 */
#nice h3 {
  font-size: 17px;
  font-weight: 500;
  margin: 24px 0 14px 0;
  color: #ffffff;
  background: #666666;
  padding: 6px 12px;
  display: inline-block;
}

/* 引用 */
#nice blockquote {
  margin: 24px 0;
  padding: 20px;
  background: #ffffff;
  border: 1px solid #000000;
  box-shadow: 4px 4px 0 #000000;
}

#nice blockquote p {
  color: #3a3a3a;
  margin: 8px 0;
}

/* 链接 */
#nice a {
  color: #000000;
  text-decoration: none;
  font-weight: 600;
  border-bottom: 2px solid #000000;
  transition: all 0.2s;
}

#nice a:hover {
  background: #000000;
  color: #ffffff;
}

/* 加粗 */
#nice strong {
  font-weight: 700;
  color: #ffffff;
  background: #000000;
  padding: 2px 8px;
  margin: 0 2px;
}

/* 代码块 */
#nice pre {
  margin: 28px 0;
  background: #000000;
  color: #ffffff;
  padding: 24px;
  font-family: 'Monaco', monospace;
  font-size: 13px;
  line-height: 1.5;
  border: 2px solid #000000;
}`;
