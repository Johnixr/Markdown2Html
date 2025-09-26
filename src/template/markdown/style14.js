export default `/* 热带雨林秘境 - style-14-tropical-rainforest.css */

/* Style 14: 热带雨林秘境 - Tropical Rainforest Mystery */

/* 全局属性 */
#nice {
  font-family: 'Helvetica Neue', 'Arial', sans-serif;
  color: #1a3d1a;
  background: linear-gradient(180deg, #f0f8f0 0%, #e8f5e8 100%);
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
  color: #2d4a2b;
  margin: 18px 0;
  letter-spacing: 0.3px;
}

/* 一级标题 - 热带叶片 */
#nice h1 {
  font-size: 44px;
  font-weight: 900;
  margin: 56px 0 36px 0;
  color: #ffffff;
  background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%);
  padding: 32px;
  text-align: center;
  position: relative;
  box-shadow: 0 12px 40px rgba(17, 153, 142, 0.3);
  border-radius: 12px 48px 12px 48px;
}

/* 二级标题 - 藤蔓缠绕 */
#nice h2 {
  font-size: 28px;
  font-weight: 700;
  margin: 36px 0 24px 0;
  color: #0b5d1e;
  position: relative;
  padding: 12px 24px;
  background: rgba(56, 239, 125, 0.15);
  border-left: 6px solid #38ef7d;
  border-right: 6px solid #11998e;
}

/* 三级标题 */
#nice h3 {
  font-size: 20px;
  font-weight: 600;
  margin: 28px 0 16px 0;
  color: #11998e;
  padding-bottom: 8px;
  border-bottom: 2px dashed #38ef7d;
}

/* 引用 - 叶片包裹 */
#nice blockquote {
  margin: 32px 0;
  padding: 24px 32px;
  background: linear-gradient(135deg, rgba(17, 153, 142, 0.1) 0%, rgba(56, 239, 125, 0.1) 100%);
  border-left: 4px solid #11998e;
  border-radius: 0 24px 24px 0;
  position: relative;
}

#nice blockquote:before {
  content: '🌿';
  position: absolute;
  left: -12px;
  top: 20px;
  font-size: 24px;
  background: #f0f8f0;
  padding: 4px;
}

#nice blockquote p {
  color: #2d4a2b;
  font-style: italic;
  margin: 8px 0;
}

/* 链接 - 翠绿生机 */
#nice a {
  color: #0b5d1e;
  text-decoration: none;
  font-weight: 600;
  background: linear-gradient(180deg, transparent 60%, rgba(56, 239, 125, 0.3) 60%);
  padding: 0 4px;
  transition: all 0.3s;
}

#nice a:hover {
  background: rgba(56, 239, 125, 0.3);
  border-radius: 4px;
}

/* 加粗 - 深林强调 */
#nice strong {
  font-weight: 700;
  color: #ffffff;
  background: linear-gradient(135deg, #0b5d1e, #11998e);
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
  background: linear-gradient(135deg, #11998e, #38ef7d);
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

/* 代码块 - 丛林深处 */
#nice pre {
  margin: 32px 0;
  background: #0a2f0a;
  color: #38ef7d;
  padding: 28px;
  border-radius: 12px;
  border: 2px solid #11998e;
  position: relative;
}

#nice pre code {
  color: #38ef7d;
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
  box-shadow: 0 16px 48px rgba(17, 153, 142, 0.2);
  border-radius: 8px;
}`;
