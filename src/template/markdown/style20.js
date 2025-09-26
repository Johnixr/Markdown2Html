export default `/* 樱花季节 - style-20-sakura-season.css */

/* Style 20: 樱花季节 - Sakura Season */

/* 全局属性 */
#nice {
  font-family: 'Hiragino Sans', 'Microsoft YaHei', sans-serif;
  color: #4a4a4a;
  background: linear-gradient(180deg, #fff5f7 0%, #ffe0e6 100%);
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
  color: #5a5a5a;
  margin: 18px 0;
  letter-spacing: 0.3px;
}

/* 一级标题 - 樱花绽放 */
#nice h1 {
  font-size: 44px;
  font-weight: 800;
  margin: 56px 0 36px 0;
  color: #ffffff;
  background: linear-gradient(135deg, #ff6fa6 0%, #ffb6c1 50%, #ffc0cb 100%);
  padding: 36px;
  text-align: center;
  border-radius: 80px 20px 80px 20px;
  text-shadow: 2px 2px 4px rgba(255, 111, 166, 0.3);
}

/* 二级标题 - 花瓣飘落 */
#nice h2 {
  font-size: 28px;
  font-weight: 700;
  margin: 36px 0 24px 0;
  color: #ff6fa6;
  padding: 14px 28px;
  background: rgba(255, 182, 193, 0.2);
  border-left: 5px solid #ffb6c1;
  position: relative;
}

#nice h2:after {
  content: '🌸';
  position: absolute;
  right: 28px;
  opacity: 0.5;
}

/* 三级标题 */
#nice h3 {
  font-size: 20px;
  font-weight: 600;
  margin: 28px 0 16px 0;
  color: #ff8fab;
  padding-bottom: 8px;
  border-bottom: 2px dotted #ffb6c1;
}

/* 引用 - 花语诗意 */
#nice blockquote {
  margin: 32px 0;
  padding: 24px;
  background: rgba(255, 182, 193, 0.1);
  border: 1px solid #ffb6c1;
  border-radius: 12px;
  position: relative;
}

#nice blockquote:before {
  content: '「';
  position: absolute;
  top: 8px;
  left: 16px;
  color: #ff6fa6;
  font-size: 24px;
}

#nice blockquote:after {
  content: '」';
  position: absolute;
  bottom: 8px;
  right: 16px;
  color: #ff6fa6;
  font-size: 24px;
}

#nice blockquote p {
  color: #5a5a5a;
  font-style: italic;
  margin: 8px 0;
}

/* 链接 - 粉色温柔 */
#nice a {
  color: #ff6fa6;
  text-decoration: none;
  font-weight: 600;
  padding: 2px 6px;
  border-bottom: 2px solid #ffb6c1;
  transition: all 0.3s;
}

#nice a:hover {
  background: rgba(255, 182, 193, 0.2);
  border-radius: 4px;
}

/* 加粗 - 花蕊点缀 */
#nice strong {
  font-weight: 700;
  color: #ffffff;
  background: linear-gradient(135deg, #ff6fa6, #ff8fab);
  padding: 3px 10px;
  margin: 0 2px;
  border-radius: 20px;
  display: inline-block;
}

/* 列表 */
#nice ul li:before {
  content: '✿';
  position: absolute;
  left: 0;
  color: #ff6fa6;
  font-size: 16px;
}

#nice ol li:before {
  background: linear-gradient(135deg, #ff6fa6, #ffb6c1);
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

/* 代码块 - 夜樱背景 */
#nice pre {
  margin: 32px 0;
  background: #4a3843;
  color: #ffb6c1;
  padding: 28px;
  border-radius: 12px;
  border: 2px solid #ff6fa6;
}

#nice pre code {
  color: #ffb6c1;
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
  box-shadow: 0 12px 36px rgba(255, 111, 166, 0.2);
  border-radius: 12px;
}`;
