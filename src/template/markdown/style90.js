export default `/* 海风物语 - style-90-ocean-breeze.css */

/* Style 90: 海风物语 - Ocean Breeze */

/* 全局属性 */
#nice {
  font-family: 'Open Sans', 'Segoe UI', sans-serif;
  color: #1e3a5f;
  background: #f8fbff;
  background-image:
    linear-gradient(180deg, rgba(64, 164, 223, 0.05) 0%, transparent 400px),
    radial-gradient(ellipse at top right, rgba(91, 192, 235, 0.03) 0%, transparent 50%);
  font-size: 15px;
  line-height: 1.75;
  padding: 68px 52px;
  max-width: 700px;
  margin: 0 auto;
}

/* 段落 */
#nice p {
  font-size: 15px;
  line-height: 1.75;
  color: #2e5073;
  margin: 18px 0;
  letter-spacing: 0.01em;
}

/* 一级标题 */
#nice h1 {
  font-size: 42px;
  font-weight: 200;
  margin: 60px 0 40px 0;
  color: #1976d2;
  text-align: center;
  letter-spacing: 0.03em;
  position: relative;
  padding: 20px 0;
}

#nice h1:after {
  content: '';
  display: block;
  width: 100px;
  height: 2px;
  background: linear-gradient(90deg, transparent, #40a4df, transparent);
  margin: 20px auto 0;
}

/* 二级标题 */
#nice h2 {
  font-size: 24px;
  font-weight: 400;
  margin: 36px 0 24px 0;
  color: #1565c0;
  padding-bottom: 8px;
  border-bottom: 1px solid #90caf9;
}

/* 三级标题 */
#nice h3 {
  font-size: 18px;
  font-weight: 500;
  margin: 24px 0 14px 0;
  color: #42a5f5;
  padding-left: 16px;
  position: relative;
}

#nice h3:before {
  content: '〜';
  position: absolute;
  left: 0;
  color: #90caf9;
}

/* 引用 */
#nice blockquote {
  margin: 32px 0;
  padding: 20px 28px;
  background: linear-gradient(135deg, rgba(33, 150, 243, 0.05), rgba(144, 202, 249, 0.05));
  border-left: 3px solid #42a5f5;
}

#nice blockquote p {
  color: #37526b;
  margin: 8px 0;
  font-style: italic;
}

/* 链接 */
#nice a {
  color: #1976d2;
  text-decoration: none;
  position: relative;
  transition: all 0.3s;
}

#nice a:after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  height: 2px;
  background: #64b5f6;
  transform: scaleX(0);
  transition: transform 0.3s;
}

#nice a:hover:after {
  transform: scaleX(1);
}

/* 加粗 */
#nice strong {
  font-weight: 600;
  color: #1565c0;
  background: rgba(33, 150, 243, 0.08);
  padding: 2px 8px;
  margin: 0 2px;
  border-radius: 2px;
}

/* 代码块 */
#nice pre {
  margin: 32px 0;
  background: #1e3a5f;
  color: #b3e5fc;
  padding: 28px;
  font-family: 'Source Code Pro', monospace;
  font-size: 13px;
  line-height: 1.6;
  border-radius: 6px;
}`;
