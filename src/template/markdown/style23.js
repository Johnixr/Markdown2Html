export default `/* 秋叶枫红 - style-23-autumn-maple.css */

/* Style 23: 秋叶枫红 - Autumn Maple Red */

/* 全局属性 */
#nice {
  font-family: 'Georgia', 'Times New Roman', serif;
  color: #4a3426;
  background: linear-gradient(180deg, #fef5e7 0%, #fadbd8 100%);
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
  color: #5d4037;
  margin: 18px 0;
  letter-spacing: 0.3px;
}

/* 一级标题 - 枫叶渐变 */
#nice h1 {
  font-size: 44px;
  font-weight: 800;
  margin: 56px 0 36px 0;
  background: linear-gradient(135deg, #d32f2f 0%, #ff6f00 25%, #ff8f00 50%, #ffc107 75%, #ffb300 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-align: center;
  padding: 32px 0;
  position: relative;
}

#nice h1:after {
  content: '🍁 🍂 🍁';
  display: block;
  font-size: 20px;
  margin-top: 16px;
  opacity: 0.6;
}

/* 二级标题 - 褐红深秋 */
#nice h2 {
  font-size: 28px;
  font-weight: 700;
  margin: 36px 0 24px 0;
  color: #ffffff;
  background: linear-gradient(135deg, #bf360c, #e64a19);
  padding: 14px 28px;
  display: inline-block;
  border-radius: 4px 16px 4px 16px;
  box-shadow: 4px 4px 0 rgba(191, 54, 12, 0.3);
}

/* 三级标题 */
#nice h3 {
  font-size: 20px;
  font-weight: 600;
  margin: 28px 0 16px 0;
  color: #bf360c;
  padding-left: 16px;
  border-left: 4px solid #ff6f00;
}

/* 引用 - 秋意浓 */
#nice blockquote {
  margin: 32px 0;
  padding: 24px;
  background: linear-gradient(135deg, rgba(255, 111, 0, 0.1) 0%, rgba(191, 54, 12, 0.1) 100%);
  border-left: 3px solid #d32f2f;
  border-radius: 8px;
  position: relative;
}

#nice blockquote p {
  color: #5d4037;
  font-style: italic;
  margin: 8px 0;
}

/* 链接 - 金秋链接 */
#nice a {
  color: #bf360c;
  text-decoration: none;
  font-weight: 600;
  padding: 2px 6px;
  background: linear-gradient(180deg, transparent 60%, rgba(255, 193, 7, 0.3) 60%);
  transition: all 0.3s;
}

#nice a:hover {
  background: rgba(255, 193, 7, 0.3);
  border-radius: 4px;
}

/* 加粗 - 深秋浓色 */
#nice strong {
  font-weight: 700;
  color: #ffffff;
  background: linear-gradient(135deg, #d32f2f, #ff6f00);
  padding: 3px 10px;
  margin: 0 2px;
  border-radius: 16px 4px 16px 4px;
  display: inline-block;
}

/* 列表 */
#nice ul li:before {
  content: '🍃';
  position: absolute;
  left: 0;
  font-size: 14px;
}

#nice ol li:before {
  background: linear-gradient(135deg, #bf360c, #ff6f00);
  color: #ffffff;
  width: 24px;
  height: 24px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 700;
}

/* 代码块 - 树干深褐 */
#nice pre {
  margin: 32px 0;
  background: #3e2723;
  color: #ffb300;
  padding: 28px;
  border-radius: 8px;
  border: 2px solid #5d4037;
}

#nice pre code {
  color: #ffb300;
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
  box-shadow: 0 12px 36px rgba(191, 54, 12, 0.2);
  border-radius: 8px;
}`;
