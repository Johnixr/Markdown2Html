export default `/* 北欧极光冰境 - style-13-nordic-aurora.css */

/* Style 13: 北欧极光冰境 - Nordic Aurora Ice Realm */

/* 全局属性 */
#nice {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  color: #1a2332;
  background: linear-gradient(180deg, #e8f4f8 0%, #d1e7ee 100%);
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
  color: #2c3e50;
  margin: 18px 0;
  letter-spacing: 0.3px;
}

/* 一级标题 - 极光渐变 */
#nice h1 {
  font-size: 42px;
  font-weight: 800;
  margin: 56px 0 36px 0;
  background: linear-gradient(135deg, #00d2ff 0%, #3a7bd5 25%, #00d2ff 50%, #928dab 75%, #3a7bd5 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-align: center;
  padding: 24px 0;
  position: relative;
  text-transform: uppercase;
  letter-spacing: 3px;
}

#nice h1 .content:after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 10%;
  right: 10%;
  height: 3px;
  background: linear-gradient(90deg, transparent, #3a7bd5, transparent);
}

/* 二级标题 - 冰晶效果 */
#nice h2 {
  font-size: 28px;
  font-weight: 700;
  margin: 36px 0 24px 0;
  color: #ffffff;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 16px 28px;
  display: inline-block;
  border-radius: 8px;
  box-shadow: 0 8px 24px rgba(102, 126, 234, 0.3);
}

/* 三级标题 */
#nice h3 {
  font-size: 20px;
  font-weight: 600;
  margin: 28px 0 16px 0;
  color: #3a7bd5;
  padding-left: 16px;
  border-left: 4px solid #00d2ff;
}

/* 引用 - 冰霜边框 */
#nice blockquote {
  margin: 32px 0;
  padding: 24px;
  background: rgba(255, 255, 255, 0.9);
  border: 2px solid #00d2ff;
  border-radius: 12px;
  position: relative;
  box-shadow: 0 4px 20px rgba(0, 210, 255, 0.1);
}

#nice blockquote p {
  color: #4a5568;
  font-style: italic;
  margin: 8px 0;
}

/* 链接 - 冰蓝高亮 */
#nice a {
  color: #3a7bd5;
  text-decoration: none;
  font-weight: 600;
  position: relative;
  padding: 2px 0;
  border-bottom: 2px solid #00d2ff;
  transition: all 0.3s;
}

#nice a:hover {
  color: #00d2ff;
  background: rgba(0, 210, 255, 0.1);
  padding: 2px 6px;
}

/* 加粗 - 深邃强调 */
#nice strong {
  font-weight: 700;
  color: #ffffff;
  background: linear-gradient(135deg, #667eea, #764ba2);
  padding: 3px 10px;
  margin: 0 2px;
  border-radius: 4px;
  display: inline-block;
}

/* 列表 */
#nice ul li:before {
  content: '❄';
  position: absolute;
  left: 0;
  color: #00d2ff;
  font-size: 16px;
}

#nice ol li:before {
  background: #3a7bd5;
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

/* 代码块 - 暗夜终端 */
#nice pre {
  margin: 32px 0;
  background: #1a2332;
  color: #00d2ff;
  padding: 24px;
  border-radius: 8px;
  box-shadow: 0 8px 32px rgba(26, 35, 50, 0.3);
}

#nice pre code {
  color: #00d2ff;
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
  border-radius: 12px;
  box-shadow: 0 12px 40px rgba(58, 123, 213, 0.2);
}`;
