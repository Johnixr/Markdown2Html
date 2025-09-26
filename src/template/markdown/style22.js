export default `/* 地中海阳光 - style-22-mediterranean-sun.css */

/* Style 22: 地中海阳光 - Mediterranean Sunshine */

/* 全局属性 */
#nice {
  font-family: 'Helvetica Neue', 'Arial', sans-serif;
  color: #2c3e50;
  background: linear-gradient(180deg, #f8f9fa 0%, #e8f4fd 100%);
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
  color: #34495e;
  margin: 18px 0;
  letter-spacing: 0.3px;
}

/* 一级标题 - 爱琴海蓝 */
#nice h1 {
  font-size: 44px;
  font-weight: 800;
  margin: 56px 0 36px 0;
  color: #ffffff;
  background: linear-gradient(135deg, #0077be 0%, #00a8cc 50%, #0099d4 100%);
  padding: 36px;
  text-align: center;
  position: relative;
  box-shadow: 0 12px 36px rgba(0, 119, 190, 0.3);
}

#nice h1:after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: #ffa500;
}

/* 二级标题 - 陶土橙 */
#nice h2 {
  font-size: 28px;
  font-weight: 700;
  margin: 36px 0 24px 0;
  color: #d35400;
  padding: 14px 28px;
  background: rgba(255, 165, 0, 0.1);
  border-left: 5px solid #ffa500;
  display: inline-block;
}

/* 三级标题 */
#nice h3 {
  font-size: 20px;
  font-weight: 600;
  margin: 28px 0 16px 0;
  color: #0077be;
  padding-bottom: 8px;
  border-bottom: 2px solid #00a8cc;
}

/* 引用 - 白墙蓝窗 */
#nice blockquote {
  margin: 32px 0;
  padding: 24px;
  background: #ffffff;
  border: 2px solid #0077be;
  border-radius: 8px;
  position: relative;
  box-shadow: 0 4px 16px rgba(0, 119, 190, 0.1);
}

#nice blockquote p {
  color: #34495e;
  font-style: italic;
  margin: 8px 0;
}

/* 链接 - 海洋连接 */
#nice a {
  color: #0077be;
  text-decoration: none;
  font-weight: 600;
  padding: 2px 6px;
  border-bottom: 2px solid #00a8cc;
  transition: all 0.3s;
}

#nice a:hover {
  background: rgba(0, 168, 204, 0.1);
  border-radius: 4px;
}

/* 加粗 - 阳光照耀 */
#nice strong {
  font-weight: 700;
  color: #ffffff;
  background: linear-gradient(135deg, #ffa500, #ff8c00);
  padding: 3px 10px;
  margin: 0 2px;
  border-radius: 4px;
  display: inline-block;
}

/* 列表 */
#nice ul li:before {
  content: '☀';
  position: absolute;
  left: 0;
  color: #ffa500;
  font-size: 14px;
}

#nice ol li:before {
  background: #0077be;
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

/* 代码块 - 深海背景 */
#nice pre {
  margin: 32px 0;
  background: #003f5c;
  color: #00d9ff;
  padding: 28px;
  border-radius: 8px;
  position: relative;
}

#nice pre code {
  color: #00d9ff;
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
  box-shadow: 0 12px 36px rgba(0, 119, 190, 0.2);
  border-radius: 8px;
}`;
