export default `/* 冰川蓝调 - style-32-glacier-blues.css */

/* Style 32: 冰川蓝调 - Glacier Blues */

/* 全局属性 */
#nice {
  font-family: 'Helvetica Neue', 'Arial', sans-serif;
  color: #2c3e50;
  background: linear-gradient(180deg, #f0f9ff 0%, #e0f2fe 100%);
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
  color: #334155;
  margin: 18px 0;
  letter-spacing: 0.3px;
}

/* 一级标题 - 冰川巨峰 */
#nice h1 {
  font-size: 44px;
  font-weight: 800;
  margin: 56px 0 36px 0;
  color: #ffffff;
  background: linear-gradient(135deg, #0284c7 0%, #0ea5e9 50%, #38bdf8 100%);
  padding: 36px;
  text-align: center;
  position: relative;
  clip-path: polygon(0 0, 100% 0, 95% 100%, 5% 100%);
  text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
}

#nice h1:after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #ffffff, rgba(255,255,255,0.3), #ffffff);
}

/* 二级标题 - 冰晶蓝 */
#nice h2 {
  font-size: 28px;
  font-weight: 700;
  margin: 36px 0 24px 0;
  color: #0284c7;
  padding: 14px 28px;
  background: rgba(14, 165, 233, 0.1);
  border-left: 5px solid #0ea5e9;
  border-right: 5px solid #38bdf8;
  display: inline-block;
}

/* 三级标题 */
#nice h3 {
  font-size: 20px;
  font-weight: 600;
  margin: 28px 0 16px 0;
  color: #0369a1;
  padding-bottom: 8px;
  border-bottom: 2px solid #7dd3fc;
}

/* 引用 - 冰层反射 */
#nice blockquote {
  margin: 32px 0;
  padding: 24px;
  background: linear-gradient(135deg, rgba(14, 165, 233, 0.05) 0%, rgba(56, 189, 248, 0.05) 100%);
  border-left: 3px solid #0ea5e9;
  border-radius: 8px;
  position: relative;
}

#nice blockquote:before {
  content: '❄';
  position: absolute;
  top: 12px;
  right: 16px;
  font-size: 24px;
  opacity: 0.2;
}

#nice blockquote p {
  color: #334155;
  font-style: italic;
  margin: 8px 0;
}

/* 链接 - 冰蓝链接 */
#nice a {
  color: #0284c7;
  text-decoration: none;
  font-weight: 600;
  padding: 2px 6px;
  border-bottom: 2px solid #38bdf8;
  transition: all 0.3s;
}

#nice a:hover {
  background: rgba(14, 165, 233, 0.1);
  border-radius: 4px;
}

/* 加粗 - 深冰强调 */
#nice strong {
  font-weight: 700;
  color: #ffffff;
  background: linear-gradient(135deg, #0284c7, #0ea5e9);
  padding: 3px 10px;
  margin: 0 2px;
  border-radius: 4px;
  display: inline-block;
  box-shadow: 2px 2px 8px rgba(14, 165, 233, 0.2);
}

/* 列表 */
#nice ul li:before {
  content: '◈';
  position: absolute;
  left: 0;
  color: #0ea5e9;
  font-size: 14px;
}

#nice ol li:before {
  background: linear-gradient(135deg, #0284c7, #38bdf8);
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

/* 代码块 - 深海冰层 */
#nice pre {
  margin: 32px 0;
  background: #0c4a6e;
  color: #7dd3fc;
  padding: 28px;
  border-radius: 8px;
  border: 2px solid #0284c7;
  position: relative;
}

#nice pre:before {
  content: '</>';
  position: absolute;
  top: 8px;
  right: 16px;
  color: #38bdf8;
  font-size: 12px;
  font-weight: 700;
  opacity: 0.5;
}

#nice pre code {
  color: #7dd3fc;
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
  box-shadow: 0 12px 36px rgba(14, 165, 233, 0.2);
  border-radius: 8px;
}`;
