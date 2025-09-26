export default `/* 画廊空间 - style-66-gallery-space.css */

/* Style 66: 画廊空间 - Gallery Space */

/* 全局属性 */
#nice {
  font-family: 'Optima', 'Georgia', serif;
  color: #1a1a1a;
  background: #fdfdfb;
  background-image:
    linear-gradient(90deg, rgba(0, 0, 0, 0.01) 1px, transparent 1px),
    linear-gradient(rgba(0, 0, 0, 0.01) 1px, transparent 1px);
  background-size: 50px 50px;
  font-size: 15px;
  line-height: 1.8;
  padding: 80px 60px;
  max-width: 680px;
  margin: 0 auto;
}

/* 段落 */
#nice p {
  font-size: 15px;
  line-height: 1.8;
  color: #2a2a2a;
  margin: 20px 0;
  letter-spacing: 0.02em;
}

/* 一级标题 */
#nice h1 {
  font-size: 32px;
  font-weight: 200;
  margin: 60px 0 40px 0;
  color: #000000;
  text-align: center;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  position: relative;
  padding: 24px 0;
}

#nice h1:before,
#nice h1:after {
  content: '';
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  height: 1px;
  background: #000000;
}

#nice h1:before {
  top: 0;
}

#nice h1:after {
  bottom: 0;
}

/* 二级标题 */
#nice h2 {
  font-size: 20px;
  font-weight: 300;
  margin: 36px 0 24px 0;
  color: #1a1a1a;
  text-align: center;
  letter-spacing: 0.15em;
}

/* 三级标题 */
#nice h3 {
  font-size: 16px;
  font-weight: 400;
  margin: 24px 0 14px 0;
  color: #3a3a3a;
  font-style: italic;
}

/* 引用 */
#nice blockquote {
  margin: 32px 60px;
  padding: 20px 0;
  border-top: 1px solid #cccccc;
  border-bottom: 1px solid #cccccc;
}

#nice blockquote p {
  color: #4a4a4a;
  margin: 8px 0;
  font-style: italic;
  text-align: center;
}

/* 链接 */
#nice a {
  color: #1a1a1a;
  text-decoration: none;
  border-bottom: 1px solid #cccccc;
  transition: all 0.3s;
}

#nice a:hover {
  border-bottom-color: #000000;
}

/* 加粗 */
#nice strong {
  font-weight: 500;
  color: #000000;
  background: #f5f5f5;
  padding: 2px 10px;
  margin: 0 2px;
  letter-spacing: 0.05em;
}

/* 代码块 */
#nice pre {
  margin: 32px 0;
  background: #1a1a1a;
  color: #f5f5f5;
  padding: 32px;
  font-family: 'Monaco', monospace;
  font-size: 12px;
  line-height: 1.6;
}`;
