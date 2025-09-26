export default `/* 极地暮光 - style-19-polar-twilight.css */

/* Style 19: 极地暮光 - Polar Twilight */

/* 全局属性 */
#nice {
  font-family: 'Helvetica Neue', 'Arial', sans-serif;
  color: #4a5568;
  background: linear-gradient(180deg, #f7fafc 0%, #edf2f7 100%);
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
  color: #4a5568;
  margin: 18px 0;
  letter-spacing: 0.3px;
}

/* 一级标题 - 暮光渐变 */
#nice h1 {
  font-size: 44px;
  font-weight: 800;
  margin: 56px 0 36px 0;
  background: linear-gradient(135deg, #667eea 0%, #9f7aea 25%, #ed64a6 50%, #f56565 75%, #ed8936 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-align: center;
  padding: 32px 0;
  text-transform: uppercase;
  letter-spacing: 2px;
}

/* 二级标题 - 冰晶紫 */
#nice h2 {
  font-size: 28px;
  font-weight: 700;
  margin: 36px 0 24px 0;
  color: #ffffff;
  background: linear-gradient(135deg, #9f7aea, #667eea);
  padding: 14px 28px;
  display: inline-block;
  border-radius: 8px;
  box-shadow: 0 8px 24px rgba(159, 122, 234, 0.3);
}

/* 三级标题 */
#nice h3 {
  font-size: 20px;
  font-weight: 600;
  margin: 28px 0 16px 0;
  color: #ed64a6;
  padding-left: 16px;
  border-left: 4px solid #f56565;
}

/* 引用 - 晚霞余晖 */
#nice blockquote {
  margin: 32px 0;
  padding: 24px;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(237, 100, 166, 0.1) 100%);
  border-left: 3px solid #9f7aea;
  border-radius: 8px;
}

#nice blockquote p {
  color: #4a5568;
  font-style: italic;
  margin: 8px 0;
}

/* 链接 - 紫粉渐变 */
#nice a {
  color: #667eea;
  text-decoration: none;
  font-weight: 600;
  padding: 2px 8px;
  background: linear-gradient(180deg, transparent 60%, rgba(159, 122, 234, 0.2) 60%);
  transition: all 0.3s;
}

#nice a:hover {
  background: rgba(159, 122, 234, 0.2);
  border-radius: 4px;
}

/* 加粗 - 极光强调 */
#nice strong {
  font-weight: 700;
  color: #ffffff;
  background: linear-gradient(135deg, #ed64a6, #f56565);
  padding: 3px 10px;
  margin: 0 2px;
  border-radius: 16px;
  display: inline-block;
}

/* 列表 */
#nice ul li:before {
  content: '◉';
  position: absolute;
  left: 0;
  color: #9f7aea;
  font-size: 14px;
}

#nice ol li:before {
  background: linear-gradient(135deg, #667eea, #9f7aea);
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

/* 代码块 - 夜幕深沉 */
#nice pre {
  margin: 32px 0;
  background: #2d3748;
  color: #ed8936;
  padding: 28px;
  border-radius: 8px;
  box-shadow: 0 8px 24px rgba(45, 55, 72, 0.3);
}

#nice pre code {
  color: #ed8936;
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
  box-shadow: 0 12px 36px rgba(102, 126, 234, 0.2);
}`;
