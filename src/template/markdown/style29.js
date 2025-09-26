export default `/* 玫瑰金奢华 - style-29-rosegold-luxury.css */

/* Style 29: 玫瑰金奢华 - Rose Gold Luxury */

/* 全局属性 */
#nice {
  font-family: 'Didot', 'Georgia', 'Times New Roman', serif;
  color: #4a3f36;
  background: linear-gradient(180deg, #fdf8f5 0%, #faf4f0 100%);
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
  color: #5a4a42;
  margin: 18px 0;
  letter-spacing: 0.3px;
}

/* 一级标题 - 玫瑰金耀 */
#nice h1 {
  font-size: 46px;
  font-weight: 300;
  margin: 56px 0 36px 0;
  background: linear-gradient(135deg, #b76e79 0%, #e8b4b8 25%, #d4a574 50%, #e8b4b8 75%, #b76e79 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 6px;
  padding: 36px 0;
  position: relative;
}

#nice h1:before,
#nice h1:after {
  content: '◇';
  position: absolute;
  color: #b76e79;
  font-size: 32px;
}

#nice h1:before {
  top: 8px;
  left: 50%;
  transform: translateX(-50%);
}

#nice h1:after {
  bottom: 8px;
  left: 50%;
  transform: translateX(-50%);
}

/* 二级标题 - 香槟金泽 */
#nice h2 {
  font-size: 28px;
  font-weight: 400;
  margin: 36px 0 24px 0;
  color: #b76e79;
  padding: 14px 32px;
  background: rgba(183, 110, 121, 0.08);
  border: 1px solid #e8b4b8;
  display: inline-block;
  position: relative;
}

#nice h2:before,
#nice h2:after {
  content: '';
  position: absolute;
  width: 40px;
  height: 1px;
  background: #b76e79;
  top: 50%;
}

#nice h2:before {
  left: -50px;
}

#nice h2:after {
  right: -50px;
}

/* 三级标题 */
#nice h3 {
  font-size: 20px;
  font-weight: 500;
  margin: 28px 0 16px 0;
  color: #b76e79;
  text-align: center;
  padding: 8px 0;
  border-top: 1px solid #e8b4b8;
  border-bottom: 1px solid #e8b4b8;
}

/* 引用 - 奢华边框 */
#nice blockquote {
  margin: 32px 0;
  padding: 28px;
  background: rgba(183, 110, 121, 0.04);
  border: 1px solid #e8b4b8;
  position: relative;
  font-style: italic;
}

#nice blockquote:before,
#nice blockquote:after {
  content: '';
  position: absolute;
  width: 20px;
  height: 20px;
  border: 1px solid #b76e79;
}

#nice blockquote:before {
  top: -10px;
  left: -10px;
  border-right: none;
  border-bottom: none;
}

#nice blockquote:after {
  bottom: -10px;
  right: -10px;
  border-left: none;
  border-top: none;
}

#nice blockquote p {
  color: #5a4a42;
  margin: 8px 0;
  text-align: center;
}

/* 链接 - 精致链扣 */
#nice a {
  color: #b76e79;
  text-decoration: none;
  font-weight: 500;
  padding: 2px 8px;
  border-bottom: 1px solid #e8b4b8;
  transition: all 0.3s;
}

#nice a:hover {
  background: rgba(183, 110, 121, 0.1);
  border-bottom: 2px solid #b76e79;
}

/* 加粗 - 钻石切面 */
#nice strong {
  font-weight: 600;
  color: #ffffff;
  background: linear-gradient(135deg, #b76e79, #e8b4b8);
  padding: 3px 12px;
  margin: 0 2px;
  border-radius: 20px;
  display: inline-block;
  box-shadow: 2px 2px 8px rgba(183, 110, 121, 0.2);
}

/* 列表 */
#nice ul li:before {
  content: '◈';
  position: absolute;
  left: 0;
  color: #b76e79;
  font-size: 12px;
}

#nice ol li:before {
  background: linear-gradient(135deg, #b76e79, #e8b4b8);
  color: #ffffff;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  font-weight: 500;
}

/* 代码块 - 丝绒质感 */
#nice pre {
  margin: 32px 0;
  background: #3d2f2f;
  color: #e8b4b8;
  padding: 32px;
  border: 1px solid #b76e79;
  position: relative;
}

#nice pre:before {
  content: '< / >';
  position: absolute;
  top: -10px;
  left: 24px;
  background: #fdf8f5;
  color: #b76e79;
  padding: 0 12px;
  font-size: 11px;
  font-weight: 500;
}

#nice pre code {
  color: #e8b4b8;
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
  border: 1px solid #e8b4b8;
  padding: 12px;
  background: #ffffff;
  box-shadow: 0 8px 32px rgba(183, 110, 121, 0.15);
}`;
