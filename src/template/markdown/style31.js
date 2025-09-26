export default `/* 咖啡馆温暖 - style-31-coffee-warmth.css */

/* Style 31: 咖啡馆温暖 - Coffee House Warmth */

/* 全局属性 */
#nice {
  font-family: 'Georgia', 'Times New Roman', serif;
  color: #3e2723;
  background: linear-gradient(180deg, #fdf6f0 0%, #f5e6d3 100%);
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

/* 一级标题 - 浓缩咖啡 */
#nice h1 {
  font-size: 44px;
  font-weight: 800;
  margin: 56px 0 36px 0;
  color: #ffffff;
  background: linear-gradient(135deg, #6f4e37 0%, #8b5a3c 50%, #a0522d 100%);
  padding: 36px;
  text-align: center;
  border-radius: 12px;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
  position: relative;
}

#nice h1:after {
  content: '☕';
  display: block;
  font-size: 24px;
  margin-top: 12px;
  opacity: 0.7;
}

/* 二级标题 - 拿铁奶泡 */
#nice h2 {
  font-size: 28px;
  font-weight: 700;
  margin: 36px 0 24px 0;
  color: #6f4e37;
  padding: 14px 28px;
  background: rgba(160, 82, 45, 0.1);
  border-left: 5px solid #8b5a3c;
  position: relative;
}

/* 三级标题 */
#nice h3 {
  font-size: 20px;
  font-weight: 600;
  margin: 28px 0 16px 0;
  color: #8b5a3c;
  padding-bottom: 8px;
  border-bottom: 2px dotted #a0522d;
}

/* 引用 - 咖啡笔记 */
#nice blockquote {
  margin: 32px 0;
  padding: 24px;
  background: linear-gradient(135deg, rgba(111, 78, 55, 0.05) 0%, rgba(160, 82, 45, 0.05) 100%);
  border-left: 3px solid #8b5a3c;
  border-radius: 8px;
  font-style: italic;
  position: relative;
}

#nice blockquote:before {
  content: '"';
  position: absolute;
  top: 8px;
  left: 16px;
  font-size: 32px;
  color: #a0522d;
  opacity: 0.3;
  font-family: Georgia, serif;
}

#nice blockquote p {
  color: #4e342e;
  margin: 8px 0;
}

/* 链接 - 焦糖连接 */
#nice a {
  color: #6f4e37;
  text-decoration: none;
  font-weight: 600;
  padding: 2px 6px;
  background: linear-gradient(180deg, transparent 60%, rgba(160, 82, 45, 0.2) 60%);
  transition: all 0.3s;
}

#nice a:hover {
  background: rgba(160, 82, 45, 0.2);
  border-radius: 4px;
}

/* 加粗 - 深烘强调 */
#nice strong {
  font-weight: 700;
  color: #ffffff;
  background: linear-gradient(135deg, #6f4e37, #8b5a3c);
  padding: 3px 10px;
  margin: 0 2px;
  border-radius: 4px;
  display: inline-block;
}

/* 列表 */
#nice ul li:before {
  content: '◦';
  position: absolute;
  left: 0;
  color: #8b5a3c;
  font-size: 16px;
}

#nice ol li:before {
  background: #6f4e37;
  color: #ffffff;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 700;
}

/* 代码块 - 咖啡豆色 */
#nice pre {
  margin: 32px 0;
  background: #3e2723;
  color: #d7ccc8;
  padding: 28px;
  border-radius: 8px;
  border: 2px solid #6f4e37;
}

#nice pre code {
  color: #d7ccc8;
  font-family: 'Monaco', 'Courier New', monospace;
  font-size: 13px;
  line-height: 1.6;
}

/* 图片 */
#nice img {
  max-width: 100%;
  height: auto;
  margin: 36px auto;
  display: block;
  border: 8px solid #ffffff;
  box-shadow: 0 12px 36px rgba(111, 78, 55, 0.2);
  border-radius: 8px;
}`;
