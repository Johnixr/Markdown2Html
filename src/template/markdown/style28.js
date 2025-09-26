export default `/* 钴蓝深渊 - style-28-cobalt-abyss.css */

/* Style 28: 钴蓝深渊 - Cobalt Abyss */

/* 全局属性 */
#nice {
  font-family: 'SF Pro Display', 'Arial', sans-serif;
  color: #b8c5d6;
  background: linear-gradient(180deg, #0f172a 0%, #1e293b 100%);
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
  color: #94a3b8;
  margin: 18px 0;
  letter-spacing: 0.3px;
}

/* 一级标题 - 深渊钴蓝 */
#nice h1 {
  font-size: 44px;
  font-weight: 800;
  margin: 56px 0 36px 0;
  background: linear-gradient(135deg, #0ea5e9 0%, #3b82f6 50%, #6366f1 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 3px;
  padding: 32px 0;
  position: relative;
}

#nice h1:after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 10%;
  right: 10%;
  height: 2px;
  background: linear-gradient(90deg, transparent, #3b82f6, transparent);
}

/* 二级标题 - 深海宝蓝 */
#nice h2 {
  font-size: 28px;
  font-weight: 700;
  margin: 36px 0 24px 0;
  color: #ffffff;
  background: linear-gradient(135deg, #3b82f6, #6366f1);
  padding: 14px 28px;
  display: inline-block;
  clip-path: polygon(0 0, calc(100% - 20px) 0, 100% 100%, 20px 100%);
  box-shadow: 0 8px 24px rgba(59, 130, 246, 0.3);
}

/* 三级标题 */
#nice h3 {
  font-size: 20px;
  font-weight: 600;
  margin: 28px 0 16px 0;
  color: #0ea5e9;
  padding-left: 16px;
  border-left: 4px solid #3b82f6;
}

/* 引用 - 深海回音 */
#nice blockquote {
  margin: 32px 0;
  padding: 24px;
  background: rgba(59, 130, 246, 0.1);
  border: 1px solid #3b82f6;
  border-radius: 8px;
  position: relative;
  backdrop-filter: blur(10px);
}

#nice blockquote p {
  color: #b8c5d6;
  font-style: italic;
  margin: 8px 0;
}

/* 链接 - 电蓝脉冲 */
#nice a {
  color: #0ea5e9;
  text-decoration: none;
  font-weight: 600;
  padding: 2px 8px;
  border-bottom: 2px solid #3b82f6;
  transition: all 0.3s;
}

#nice a:hover {
  background: rgba(59, 130, 246, 0.2);
  border-radius: 4px;
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
}

/* 加粗 - 钴蓝晶体 */
#nice strong {
  font-weight: 700;
  color: #0f172a;
  background: linear-gradient(135deg, #0ea5e9, #6366f1);
  padding: 3px 10px;
  margin: 0 2px;
  border-radius: 4px;
  display: inline-block;
}

/* 列表 */
#nice ul li:before {
  content: '◉';
  position: absolute;
  left: 0;
  color: #3b82f6;
  font-size: 14px;
}

#nice ol li:before {
  background: linear-gradient(135deg, #3b82f6, #6366f1);
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

/* 代码块 - 深渊终端 */
#nice pre {
  margin: 32px 0;
  background: #0f172a;
  color: #0ea5e9;
  padding: 28px;
  border: 1px solid #3b82f6;
  border-radius: 8px;
  box-shadow:
    0 0 20px rgba(59, 130, 246, 0.2),
    inset 0 0 20px rgba(14, 165, 233, 0.05);
}

#nice pre code {
  color: #0ea5e9;
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
  border: 2px solid #3b82f6;
  border-radius: 8px;
  box-shadow: 0 12px 36px rgba(59, 130, 246, 0.2);
}`;
