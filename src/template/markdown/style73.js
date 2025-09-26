export default `/* 晨曦薄雾 - style-73-morning-mist.css */

/* Style 73: 晨曦薄雾 - Morning Mist */

/* 全局属性 */
#nice {
  font-family: 'Avenir Next', 'Helvetica Neue', sans-serif;
  color: #4a5568;
  background: #fafbfc;
  background-image:
    linear-gradient(180deg, rgba(226, 232, 240, 0.3) 0%, transparent 50%),
    radial-gradient(ellipse at top, rgba(203, 213, 224, 0.2) 0%, transparent 70%);
  font-size: 15px;
  line-height: 1.75;
  padding: 72px 48px;
  max-width: 720px;
  margin: 0 auto;
}

/* 段落 */
#nice p {
  font-size: 15px;
  line-height: 1.75;
  color: #5a6c7d;
  margin: 18px 0;
  letter-spacing: 0.02em;
}

/* 一级标题 */
#nice h1 {
  font-size: 38px;
  font-weight: 200;
  margin: 56px 0 36px 0;
  color: #2d3748;
  text-align: center;
  letter-spacing: 0.05em;
  position: relative;
  padding: 20px 0;
}

#nice h1:after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 1px;
  background: linear-gradient(90deg, transparent, #cbd5e0, transparent);
}

/* 二级标题 */
#nice h2 {
  font-size: 24px;
  font-weight: 300;
  margin: 32px 0 20px 0;
  color: #2d3748;
  padding-bottom: 8px;
  border-bottom: 1px solid #e2e8f0;
}

/* 三级标题 */
#nice h3 {
  font-size: 18px;
  font-weight: 400;
  margin: 24px 0 14px 0;
  color: #4a5568;
  font-style: italic;
}

/* 引用 */
#nice blockquote {
  margin: 28px 0;
  padding: 20px 28px;
  background: rgba(237, 242, 247, 0.5);
  border-left: 2px solid #cbd5e0;
  font-style: italic;
}

#nice blockquote p {
  color: #64748b;
  margin: 8px 0;
}

/* 链接 */
#nice a {
  color: #4299e1;
  text-decoration: none;
  position: relative;
  transition: all 0.3s;
}

#nice a:after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  right: 0;
  height: 1px;
  background: #4299e1;
  transform: scaleX(0);
  transition: transform 0.3s;
}

#nice a:hover:after {
  transform: scaleX(1);
}

/* 加粗 */
#nice strong {
  font-weight: 500;
  color: #2d3748;
  background: linear-gradient(180deg, transparent 60%, rgba(66, 153, 225, 0.2) 60%);
  padding: 0 2px;
}

/* 代码块 */
#nice pre {
  margin: 32px 0;
  background: #f7fafc;
  color: #2d3748;
  padding: 28px;
  border: 1px solid #e2e8f0;
  font-family: 'SF Mono', monospace;
  font-size: 13px;
  line-height: 1.6;
  position: relative;
  overflow: hidden;
}

#nice pre:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 3px;
  height: 100%;
  background: linear-gradient(180deg, #4299e1, #667eea);
}`;
