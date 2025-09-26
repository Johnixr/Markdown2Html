export default `/* 海岸晨光 - style-79-coastal-dawn.css */

/* Style 79: 海岸晨光 - Coastal Dawn */

/* 全局属性 */
#nice {
  font-family: 'Avenir', 'Montserrat', sans-serif;
  color: #2c3e50;
  background: #fefefe;
  background-image:
    linear-gradient(180deg, rgba(52, 152, 219, 0.05) 0%, transparent 300px),
    radial-gradient(circle at 80% 20%, rgba(241, 196, 15, 0.03) 0%, transparent 50%);
  font-size: 15px;
  line-height: 1.75;
  padding: 72px 52px;
  max-width: 700px;
  margin: 0 auto;
}

/* 段落 */
#nice p {
  font-size: 15px;
  line-height: 1.75;
  color: #34495e;
  margin: 18px 0;
  letter-spacing: 0.01em;
}

/* 一级标题 */
#nice h1 {
  font-size: 40px;
  font-weight: 300;
  margin: 56px 0 36px 0;
  color: #2980b9;
  text-align: center;
  letter-spacing: 0.05em;
  position: relative;
  padding: 20px 0;
}

#nice h1:after {
  content: '～';
  display: block;
  font-size: 24px;
  color: #f39c12;
  margin-top: 12px;
}

/* 二级标题 */
#nice h2 {
  font-size: 24px;
  font-weight: 400;
  margin: 32px 0 20px 0;
  color: #2c3e50;
  padding-bottom: 8px;
  background: linear-gradient(90deg, #3498db, transparent);
  background-size: 60px 2px;
  background-repeat: no-repeat;
  background-position: bottom left;
}

/* 三级标题 */
#nice h3 {
  font-size: 18px;
  font-weight: 500;
  margin: 24px 0 14px 0;
  color: #7f8c8d;
  padding-left: 16px;
  position: relative;
}

#nice h3:before {
  content: '◦';
  position: absolute;
  left: 0;
  color: #f39c12;
}

/* 引用 */
#nice blockquote {
  margin: 28px 0;
  padding: 20px 28px;
  background: linear-gradient(135deg, rgba(52, 152, 219, 0.05), rgba(241, 196, 15, 0.05));
  border-left: 3px solid #3498db;
}

#nice blockquote p {
  color: #5a6c7d;
  margin: 8px 0;
  font-style: italic;
}

/* 链接 */
#nice a {
  color: #3498db;
  text-decoration: none;
  position: relative;
  padding-bottom: 2px;
}

#nice a:after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, #3498db, #f39c12);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s;
}

#nice a:hover:after {
  transform: scaleX(1);
}

/* 加粗 */
#nice strong {
  font-weight: 600;
  color: #2c3e50;
  background: linear-gradient(180deg, transparent 70%, rgba(241, 196, 15, 0.3) 70%);
  padding: 0 2px;
}

/* 代码块 */
#nice pre {
  margin: 32px 0;
  background: #2c3e50;
  color: #ecf0f1;
  padding: 28px;
  font-family: 'Fira Code', monospace;
  font-size: 13px;
  line-height: 1.6;
  border-top: 3px solid #3498db;
  border-radius: 4px;
}`;
