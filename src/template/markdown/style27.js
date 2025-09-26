export default `/* 翡翠森林 - style-27-emerald-forest.css */

/* Style 27: 翡翠森林 - Emerald Forest */

/* 全局属性 */
#nice {
  font-family: 'Helvetica Neue', 'Arial', sans-serif;
  color: #1a3d2e;
  background: linear-gradient(180deg, #f0fdf4 0%, #dcfce7 100%);
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
  color: #2d5a3d;
  margin: 18px 0;
  letter-spacing: 0.3px;
}

/* 一级标题 - 翡翠宝石 */
#nice h1 {
  font-size: 44px;
  font-weight: 800;
  margin: 56px 0 36px 0;
  color: #ffffff;
  background: linear-gradient(135deg, #059669 0%, #10b981 50%, #34d399 100%);
  padding: 36px;
  text-align: center;
  position: relative;
  box-shadow: 0 12px 40px rgba(5, 150, 105, 0.3);
  border-radius: 12px;
}

#nice h1:before,
#nice h1:after {
  content: '◆';
  position: absolute;
  color: #34d399;
  font-size: 28px;
}

#nice h1:before {
  top: 16px;
  left: 40px;
}

#nice h1:after {
  bottom: 16px;
  right: 40px;
}

/* 二级标题 - 森林深绿 */
#nice h2 {
  font-size: 28px;
  font-weight: 700;
  margin: 36px 0 24px 0;
  color: #059669;
  padding: 14px 28px;
  background: rgba(16, 185, 129, 0.1);
  border-left: 6px solid #10b981;
  display: inline-block;
}

/* 三级标题 */
#nice h3 {
  font-size: 20px;
  font-weight: 600;
  margin: 28px 0 16px 0;
  color: #047857;
  padding-bottom: 8px;
  border-bottom: 2px solid #34d399;
}

/* 引用 - 林间清泉 */
#nice blockquote {
  margin: 32px 0;
  padding: 24px;
  background: linear-gradient(135deg, rgba(5, 150, 105, 0.05) 0%, rgba(52, 211, 153, 0.05) 100%);
  border-left: 3px solid #059669;
  border-radius: 8px;
  position: relative;
}

#nice blockquote p {
  color: #2d5a3d;
  font-style: italic;
  margin: 8px 0;
}

/* 链接 - 绿宝石链 */
#nice a {
  color: #059669;
  text-decoration: none;
  font-weight: 600;
  padding: 2px 6px;
  background: linear-gradient(180deg, transparent 60%, rgba(52, 211, 153, 0.3) 60%);
  transition: all 0.3s;
}

#nice a:hover {
  background: rgba(52, 211, 153, 0.3);
  border-radius: 4px;
}

/* 加粗 - 浓绿强调 */
#nice strong {
  font-weight: 700;
  color: #ffffff;
  background: linear-gradient(135deg, #059669, #10b981);
  padding: 3px 10px;
  margin: 0 2px;
  border-radius: 4px;
  display: inline-block;
  box-shadow: 2px 2px 0 rgba(5, 150, 105, 0.3);
}

/* 列表 */
#nice ul li:before {
  content: '♦';
  position: absolute;
  left: 0;
  color: #10b981;
  font-size: 14px;
}

#nice ol li:before {
  background: #059669;
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

/* 代码块 - 苔藓石板 */
#nice pre {
  margin: 32px 0;
  background: #1a3d2e;
  color: #34d399;
  padding: 28px;
  border-radius: 8px;
  border: 2px solid #059669;
}

#nice pre code {
  color: #34d399;
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
  box-shadow: 0 12px 36px rgba(5, 150, 105, 0.2);
  border-radius: 8px;
}`;
