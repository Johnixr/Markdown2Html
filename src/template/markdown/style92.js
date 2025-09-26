export default `/* 秋收时节 - style-92-autumn-harvest.css */

/* Style 92: 秋收时节 - Autumn Harvest */

/* 全局属性 */
#nice {
  font-family: 'Libre Franklin', 'Source Han Sans', sans-serif;
  color: #5d4037;
  background: #fffaf3;
  background-image:
    linear-gradient(180deg, rgba(255, 152, 0, 0.03) 0%, transparent 300px),
    repeating-linear-gradient(
      45deg,
      transparent,
      transparent 30px,
      rgba(230, 126, 34, 0.02) 30px,
      rgba(230, 126, 34, 0.02) 31px
    );
  font-size: 15px;
  line-height: 1.75;
  padding: 64px 48px;
  max-width: 700px;
  margin: 0 auto;
}

/* 段落 */
#nice p {
  font-size: 15px;
  line-height: 1.75;
  color: #6d4c41;
  margin: 18px 0;
  letter-spacing: 0.01em;
}

/* 一级标题 */
#nice h1 {
  font-size: 40px;
  font-weight: 600;
  margin: 56px 0 36px 0;
  color: #e65100;
  text-align: center;
  letter-spacing: 0.02em;
  padding: 20px 0;
  border-bottom: 2px solid #ff9800;
}

/* 二级标题 */
#nice h2 {
  font-size: 24px;
  font-weight: 500;
  margin: 32px 0 20px 0;
  color: #ef6c00;
  padding: 10px 0;
  position: relative;
}

#nice h2:before {
  content: '🍂';
  margin-right: 8px;
  font-size: 20px;
}

/* 三级标题 */
#nice h3 {
  font-size: 18px;
  font-weight: 500;
  margin: 24px 0 14px 0;
  color: #f57c00;
  padding-left: 16px;
  border-left: 3px solid #ffb74d;
}

/* 引用 */
#nice blockquote {
  margin: 28px 0;
  padding: 20px 24px;
  background: linear-gradient(135deg, rgba(255, 152, 0, 0.05), rgba(255, 183, 77, 0.05));
  border-left: 3px solid #ff9800;
}

#nice blockquote p {
  color: #795548;
  margin: 8px 0;
  font-style: italic;
}

/* 链接 */
#nice a {
  color: #ef6c00;
  text-decoration: none;
  border-bottom: 1px solid #ffb74d;
  transition: all 0.3s;
}

#nice a:hover {
  color: #e65100;
  border-bottom-width: 2px;
}

/* 加粗 */
#nice strong {
  font-weight: 600;
  color: #5d4037;
  background: rgba(255, 152, 0, 0.15);
  padding: 2px 8px;
  margin: 0 2px;
  border-radius: 2px;
}

/* 代码块 */
#nice pre {
  margin: 32px 0;
  background: #5d4037;
  color: #ffe0b2;
  padding: 28px;
  font-family: 'IBM Plex Mono', monospace;
  font-size: 13px;
  line-height: 1.6;
  border-radius: 4px;
}`;
