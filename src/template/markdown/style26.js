export default `/* 火山熔岩 - style-26-volcano-lava.css */

/* Style 26: 火山熔岩 - Volcano Lava */

/* 全局属性 */
#nice {
  font-family: 'Arial Black', 'Impact', sans-serif;
  color: #e8e8e8;
  background: linear-gradient(180deg, #1a0f0f 0%, #2d1414 100%);
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
  color: #d0d0d0;
  margin: 18px 0;
  letter-spacing: 0.3px;
  font-family: 'Helvetica Neue', Arial, sans-serif;
}

/* 一级标题 - 熔岩爆发 */
#nice h1 {
  font-size: 48px;
  font-weight: 900;
  margin: 56px 0 36px 0;
  background: linear-gradient(180deg, #ff0000 0%, #ff6600 30%, #ffaa00 60%, #ffff00 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 3px;
  padding: 32px 0;
  text-shadow: 0 4px 8px rgba(255, 0, 0, 0.5);
  position: relative;
}

#nice h1:after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 20%;
  right: 20%;
  height: 4px;
  background: linear-gradient(90deg, transparent, #ff6600, #ff0000, #ff6600, transparent);
}

/* 二级标题 - 岩浆流动 */
#nice h2 {
  font-size: 30px;
  font-weight: 800;
  margin: 36px 0 24px 0;
  color: #1a0f0f;
  background: linear-gradient(135deg, #ff6600, #ff0000);
  padding: 14px 28px;
  display: inline-block;
  clip-path: polygon(0 0, 100% 0, 95% 100%, 5% 100%);
  box-shadow: 0 8px 24px rgba(255, 0, 0, 0.4);
}

/* 三级标题 */
#nice h3 {
  font-size: 20px;
  font-weight: 700;
  margin: 28px 0 16px 0;
  color: #ff6600;
  padding-left: 20px;
  border-left: 4px solid #ff0000;
  text-shadow: 0 2px 4px rgba(255, 0, 0, 0.3);
}

/* 引用 - 火山灰 */
#nice blockquote {
  margin: 32px 0;
  padding: 24px;
  background: rgba(255, 102, 0, 0.1);
  border: 2px solid #ff6600;
  border-radius: 8px;
  position: relative;
}

#nice blockquote:before,
#nice blockquote:after {
  content: '🔥';
  position: absolute;
  font-size: 24px;
  opacity: 0.5;
}

#nice blockquote:before {
  top: 8px;
  left: 16px;
}

#nice blockquote:after {
  bottom: 8px;
  right: 16px;
}

#nice blockquote p {
  color: #e8e8e8;
  margin: 8px 0;
}

/* 链接 - 熔岩连接 */
#nice a {
  color: #ff6600;
  text-decoration: none;
  font-weight: 600;
  padding: 2px 8px;
  background: rgba(255, 102, 0, 0.1);
  border: 1px solid #ff6600;
  border-radius: 4px;
  transition: all 0.3s;
}

#nice a:hover {
  background: #ff6600;
  color: #1a0f0f;
  box-shadow: 0 4px 12px rgba(255, 102, 0, 0.5);
}

/* 加粗 - 火焰标记 */
#nice strong {
  font-weight: 800;
  color: #1a0f0f;
  background: linear-gradient(180deg, #ffaa00, #ff6600);
  padding: 3px 12px;
  margin: 0 2px;
  border-radius: 4px;
  display: inline-block;
  text-transform: uppercase;
  font-size: 13px;
  letter-spacing: 1px;
}

/* 列表 */
#nice ul li:before {
  content: '▸';
  position: absolute;
  left: 0;
  color: #ff0000;
  font-size: 18px;
  font-weight: bold;
}

#nice ol li:before {
  background: linear-gradient(135deg, #ff0000, #ff6600);
  color: #1a0f0f;
  width: 26px;
  height: 26px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  font-weight: 800;
}

/* 代码块 - 熔炉内核 */
#nice pre {
  margin: 32px 0;
  background: #0f0505;
  color: #ff6600;
  padding: 28px;
  border: 2px solid #ff0000;
  position: relative;
  box-shadow:
    0 0 30px rgba(255, 0, 0, 0.3),
    inset 0 0 30px rgba(255, 102, 0, 0.1);
}

#nice pre code {
  color: #ff6600;
  font-family: 'Courier New', monospace;
  font-size: 13px;
  line-height: 1.6;
  text-shadow: 0 0 3px rgba(255, 102, 0, 0.5);
}

/* 图片 */
#nice img {
  max-width: 100%;
  height: auto;
  margin: 36px auto;
  display: block;
  border: 4px solid #ff0000;
  box-shadow: 0 12px 36px rgba(255, 0, 0, 0.3);
}`;
