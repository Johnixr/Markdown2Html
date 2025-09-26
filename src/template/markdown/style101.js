export default `/* 静谧晨曦 - style-101-silent-morning.css */

/* Style 101: 静谧晨曦 - Silent Morning */

/* 全局属性 */
#nice {
  font-family: 'Nunito Sans', 'Source Han Sans', sans-serif;
  color: #2d3436;
  background: #ffffff;
  background-image:
    linear-gradient(180deg, rgba(253, 239, 132, 0.03) 0%, transparent 400px);
  font-size: 15px;
  line-height: 1.75;
  padding: 76px 56px;
  max-width: 680px;
  margin: 0 auto;
}

/* 段落 */
#nice p {
  font-size: 15px;
  line-height: 1.75;
  color: #636e72;
  margin: 18px 0;
  letter-spacing: 0.01em;
}

/* 一级标题 */
#nice h1 {
  font-size: 36px;
  font-weight: 300;
  margin: 64px 0 40px 0;
  color: #2d3436;
  text-align: center;
  letter-spacing: 0.02em;
  position: relative;
  padding: 20px 0;
}

#nice h1:before,
#nice h1:after {
  content: '';
  position: absolute;
  width: 100px;
  height: 1px;
  background: linear-gradient(90deg, transparent, #b2bec3, transparent);
  top: 50%;
}

#nice h1:before {
  left: -120px;
}

#nice h1:after {
  right: -120px;
}

/* 二级标题 */
#nice h2 {
  font-size: 22px;
  font-weight: 400;
  margin: 36px 0 24px 0;
  color: #2d3436;
  padding-bottom: 8px;
  border-bottom: 1px solid #dfe6e9;
}

/* 三级标题 */
#nice h3 {
  font-size: 17px;
  font-weight: 500;
  margin: 24px 0 14px 0;
  color: #636e72;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-size: 15px;
}

/* 引用 */
#nice blockquote {
  margin: 32px 0;
  padding: 20px 32px;
  background: #f5f6fa;
  border-left: 2px solid #b2bec3;
}

#nice blockquote p {
  color: #74b9ff;
  margin: 8px 0;
  font-style: italic;
}

/* 链接 */
#nice a {
  color: #74b9ff;
  text-decoration: none;
  border-bottom: 1px solid #dfe6e9;
  transition: all 0.3s;
}

#nice a:hover {
  color: #0984e3;
  border-bottom-color: #74b9ff;
}

/* 加粗 */
#nice strong {
  font-weight: 600;
  color: #2d3436;
  background: linear-gradient(180deg, transparent 70%, rgba(116, 185, 255, 0.2) 70%);
}

/* 代码块 */
#nice pre {
  margin: 32px 0;
  background: #2d3436;
  color: #dfe6e9;
  padding: 28px;
  font-family: 'Fira Code', monospace;
  font-size: 13px;
  line-height: 1.7;
  border-radius: 4px;
}`;
