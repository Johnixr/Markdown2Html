export default `/* 火星基地科技 - style-15-mars-base.css */

/* Style 15: 火星基地科技 - Mars Base Technology */

/* 全局属性 */
#nice {
  font-family: 'SF Pro Display', 'Arial', sans-serif;
  color: #2c2c2c;
  background: linear-gradient(180deg, #ffeee8 0%, #ffd6cc 100%);
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
  color: #3d3d3d;
  margin: 18px 0;
  letter-spacing: 0.3px;
}

/* 一级标题 - 火星地平线 */
#nice h1 {
  font-size: 46px;
  font-weight: 900;
  margin: 56px 0 36px 0;
  color: #ffffff;
  background: linear-gradient(135deg, #ee5a24 0%, #f07b3f 50%, #ea2c62 100%);
  padding: 36px;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 4px;
  clip-path: polygon(0 0, 100% 0, 95% 100%, 5% 100%);
  text-shadow: 2px 2px 0 rgba(0,0,0,0.2);
}

/* 二级标题 - 基地模块 */
#nice h2 {
  font-size: 30px;
  font-weight: 800;
  margin: 36px 0 24px 0;
  color: #ee5a24;
  padding: 14px 28px;
  background: rgba(238, 90, 36, 0.1);
  border: 3px solid #ee5a24;
  display: inline-block;
  position: relative;
}

#nice h2:after {
  content: '';
  position: absolute;
  top: 0;
  right: -20px;
  width: 40px;
  height: 100%;
  background: linear-gradient(90deg, rgba(238, 90, 36, 0.1), transparent);
}

/* 三级标题 */
#nice h3 {
  font-size: 20px;
  font-weight: 600;
  margin: 28px 0 16px 0;
  color: #ea2c62;
  padding-left: 20px;
  position: relative;
}

#nice h3:before {
  content: '▶';
  position: absolute;
  left: 0;
  color: #f07b3f;
}

/* 引用 - 通讯记录 */
#nice blockquote {
  margin: 32px 0;
  padding: 24px;
  background: #2c2c2c;
  color: #ffd6cc;
  border-left: 4px solid #ee5a24;
  border-right: 4px solid #ea2c62;
  font-family: monospace;
  position: relative;
}

#nice blockquote:before {
  content: '[MARS-BASE-01]';
  position: absolute;
  top: 8px;
  left: 24px;
  color: #f07b3f;
  font-size: 10px;
  letter-spacing: 2px;
}

#nice blockquote p {
  color: #ffd6cc;
  margin: 16px 0 8px 0;
}

/* 链接 - 橙红激活 */
#nice a {
  color: #ee5a24;
  text-decoration: none;
  font-weight: 600;
  padding: 2px 8px;
  border: 1px solid #ee5a24;
  border-radius: 4px;
  transition: all 0.3s;
}

#nice a:hover {
  background: #ee5a24;
  color: #ffffff;
  box-shadow: 0 4px 12px rgba(238, 90, 36, 0.3);
}

/* 加粗 - 警示标记 */
#nice strong {
  font-weight: 800;
  color: #ffffff;
  background: linear-gradient(135deg, #ea2c62, #ee5a24);
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
  content: '◉';
  position: absolute;
  left: 0;
  color: #ee5a24;
  font-size: 16px;
}

#nice ol li:before {
  background: #ea2c62;
  color: #ffffff;
  width: 26px;
  height: 26px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  font-weight: 700;
}

/* 代码块 - 控制台输出 */
#nice pre {
  margin: 32px 0;
  background: #1a1a1a;
  color: #f07b3f;
  padding: 28px;
  border: 2px solid #ee5a24;
  position: relative;
  font-family: 'Courier New', monospace;
}

#nice pre:before {
  content: '◉ ◉ ◉';
  position: absolute;
  top: 8px;
  right: 16px;
  color: #ee5a24;
  letter-spacing: 8px;
}

#nice pre code {
  color: #f07b3f;
  font-size: 13px;
  line-height: 1.6;
}

/* 图片 */
#nice img {
  max-width: 100%;
  height: auto;
  margin: 36px auto;
  display: block;
  border: 4px solid #ee5a24;
  border-radius: 8px;
  box-shadow: 0 12px 36px rgba(238, 90, 36, 0.2);
}`;
