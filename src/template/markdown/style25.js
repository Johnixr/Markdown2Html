export default `/* 薰衣草田园 - style-25-lavender-field.css */

/* Style 25: 薰衣草田园 - Lavender Field */

/* 全局属性 */
#nice {
  font-family: 'Georgia', 'Times New Roman', serif;
  color: #4a4a5e;
  background: linear-gradient(180deg, #f5f3ff 0%, #e8e3ff 100%);
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
  color: #5a5a6e;
  margin: 18px 0;
  letter-spacing: 0.3px;
}

/* 一级标题 - 紫色花海 */
#nice h1 {
  font-size: 44px;
  font-weight: 800;
  margin: 56px 0 36px 0;
  color: #ffffff;
  background: linear-gradient(135deg, #9d50bb 0%, #6e48aa 50%, #8e44ad 100%);
  padding: 36px;
  text-align: center;
  border-radius: 60px 20px 60px 20px;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
}

/* 二级标题 - 薰衣草紫 */
#nice h2 {
  font-size: 28px;
  font-weight: 700;
  margin: 36px 0 24px 0;
  color: #6e48aa;
  padding: 14px 28px;
  background: rgba(157, 80, 187, 0.1);
  border-left: 5px solid #9d50bb;
  position: relative;
}

#nice h2:after {
  content: '❀';
  position: absolute;
  right: 28px;
  color: #9d50bb;
  opacity: 0.3;
  font-size: 24px;
}

/* 三级标题 */
#nice h3 {
  font-size: 20px;
  font-weight: 600;
  margin: 28px 0 16px 0;
  color: #8e44ad;
  padding-bottom: 8px;
  border-bottom: 2px dotted #9d50bb;
}

/* 引用 - 田园诗意 */
#nice blockquote {
  margin: 32px 0;
  padding: 24px;
  background: linear-gradient(135deg, rgba(157, 80, 187, 0.05) 0%, rgba(142, 68, 173, 0.05) 100%);
  border: 1px solid #9d50bb;
  border-radius: 12px;
  font-style: italic;
}

#nice blockquote p {
  color: #5a5a6e;
  margin: 8px 0;
}

/* 链接 - 紫色优雅 */
#nice a {
  color: #6e48aa;
  text-decoration: none;
  font-weight: 600;
  padding: 2px 6px;
  border-bottom: 2px solid #9d50bb;
  transition: all 0.3s;
}

#nice a:hover {
  background: rgba(157, 80, 187, 0.1);
  border-radius: 4px;
}

/* 加粗 - 花蕊深紫 */
#nice strong {
  font-weight: 700;
  color: #ffffff;
  background: linear-gradient(135deg, #9d50bb, #6e48aa);
  padding: 3px 10px;
  margin: 0 2px;
  border-radius: 20px;
  display: inline-block;
}

/* 列表 */
#nice ul li:before {
  content: '❋';
  position: absolute;
  left: 0;
  color: #9d50bb;
  font-size: 14px;
}

#nice ol li:before {
  background: linear-gradient(135deg, #9d50bb, #6e48aa);
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

/* 代码块 - 夜色田园 */
#nice pre {
  margin: 32px 0;
  background: #3e2c41;
  color: #e8e3ff;
  padding: 28px;
  border-radius: 12px;
  border: 2px solid #6e48aa;
}

#nice pre code {
  color: #e8e3ff;
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
  box-shadow: 0 12px 36px rgba(157, 80, 187, 0.2);
  border-radius: 12px;
}`;
