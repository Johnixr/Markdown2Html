export default `/* 北欧简约 - style-55-nordic-simple.css */

/* Style 55: 北欧简约 - Nordic Simplicity */

/* 全局属性 */
#nice {
  font-family: 'Inter', 'Segoe UI', sans-serif;
  color: #2d3748;
  background: #f7fafc;
  font-size: 15px;
  line-height: 1.7;
  padding: 64px 40px;
  max-width: 700px;
  margin: 0 auto;
}

/* 段落 */
#nice p {
  font-size: 15px;
  line-height: 1.7;
  color: #4a5568;
  margin: 18px 0;
  letter-spacing: 0.01em;
}

/* 一级标题 */
#nice h1 {
  font-size: 34px;
  font-weight: 600;
  margin: 56px 0 32px 0;
  color: #1a202c;
  letter-spacing: -0.03em;
  position: relative;
  padding-bottom: 16px;
}

#nice h1:after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 60px;
  height: 3px;
  background: #cbd5e0;
}

/* 二级标题 */
#nice h2 {
  font-size: 22px;
  font-weight: 600;
  margin: 32px 0 20px 0;
  color: #2d3748;
  display: flex;
  align-items: center;
}

#nice h2:before {
  content: '';
  width: 4px;
  height: 20px;
  background: #718096;
  margin-right: 12px;
}

/* 三级标题 */
#nice h3 {
  font-size: 17px;
  font-weight: 500;
  margin: 24px 0 14px 0;
  color: #4a5568;
  letter-spacing: 0.02em;
}

/* 引用 */
#nice blockquote {
  margin: 28px 0;
  padding: 20px 24px;
  background: #ffffff;
  border-left: 3px solid #cbd5e0;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}

#nice blockquote p {
  color: #718096;
  margin: 8px 0;
}

/* 链接 */
#nice a {
  color: #4a5568;
  text-decoration: none;
  border-bottom: 1px solid #cbd5e0;
  transition: all 0.2s;
}

#nice a:hover {
  color: #1a202c;
  border-bottom-color: #718096;
}

/* 加粗 */
#nice strong {
  font-weight: 600;
  color: #ffffff;
  background: #718096;
  padding: 2px 8px;
  margin: 0 2px;
}

/* 代码块 */
#nice pre {
  margin: 28px 0;
  background: #2d3748;
  color: #e2e8f0;
  padding: 24px;
  font-family: 'Fira Code', monospace;
  font-size: 13px;
  line-height: 1.6;
  border-radius: 2px;
}`;
