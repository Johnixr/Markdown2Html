export default `/* 包豪斯几何 - style-56-bauhaus-geometry.css */

/* Style 56: 包豪斯几何 - Bauhaus Geometry */

/* 全局属性 */
#nice {
  font-family: 'Futura', 'Century Gothic', sans-serif;
  color: #1a1a1a;
  background: #f5f5f5;
  font-size: 15px;
  line-height: 1.65;
  padding: 60px 40px;
  max-width: 720px;
  margin: 0 auto;
}

/* 段落 */
#nice p {
  font-size: 15px;
  line-height: 1.65;
  color: #2a2a2a;
  margin: 16px 0;
  letter-spacing: 0.02em;
}

/* 一级标题 */
#nice h1 {
  font-size: 40px;
  font-weight: 700;
  margin: 52px 0 36px 0;
  color: #000000;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  position: relative;
  padding: 16px 0;
}

#nice h1:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 40px;
  height: 40px;
  background: #e74c3c;
}

#nice h1:after {
  content: '';
  position: absolute;
  bottom: 0;
  right: 0;
  width: 0;
  height: 0;
  border-left: 40px solid transparent;
  border-bottom: 40px solid #3498db;
}

/* 二级标题 */
#nice h2 {
  font-size: 24px;
  font-weight: 600;
  margin: 32px 0 20px 0;
  color: #ffffff;
  background: #2c3e50;
  padding: 12px 20px;
  display: inline-block;
}

/* 三级标题 */
#nice h3 {
  font-size: 18px;
  font-weight: 500;
  margin: 24px 0 14px 0;
  color: #e74c3c;
  position: relative;
  padding-left: 24px;
}

#nice h3:before {
  content: '●';
  position: absolute;
  left: 0;
  color: #f39c12;
}

/* 引用 */
#nice blockquote {
  margin: 28px 0;
  padding: 20px;
  background: #ffffff;
  border: 2px solid #2c3e50;
  position: relative;
}

#nice blockquote:before {
  content: '';
  position: absolute;
  top: -10px;
  left: 20px;
  width: 20px;
  height: 20px;
  background: #f39c12;
  transform: rotate(45deg);
}

#nice blockquote p {
  color: #34495e;
  margin: 8px 0;
}

/* 链接 */
#nice a {
  color: #3498db;
  text-decoration: none;
  font-weight: 500;
  border-bottom: 2px solid #3498db;
  transition: all 0.2s;
}

#nice a:hover {
  color: #2c3e50;
  border-bottom-color: #e74c3c;
}

/* 加粗 */
#nice strong {
  font-weight: 700;
  color: #ffffff;
  background: #e74c3c;
  padding: 3px 10px;
  margin: 0 2px;
}

/* 代码块 */
#nice pre {
  margin: 28px 0;
  background: #2c3e50;
  color: #ecf0f1;
  padding: 28px;
  font-family: 'Courier New', monospace;
  font-size: 13px;
  line-height: 1.5;
  border-left: 4px solid #f39c12;
}`;
