export default `/* 点阵设计 - style-70-dot-matrix.css */

/* Style 70: 点阵设计 - Dot Matrix Design */

/* 全局属性 */
#nice {
  font-family: 'Space Mono', 'Courier', monospace;
  color: #1a1a1a;
  background: #fafafa;
  background-image:
    radial-gradient(circle at 2px 2px, #d0d0d0 1px, transparent 1px);
  background-size: 16px 16px;
  font-size: 15px;
  line-height: 1.6;
  padding: 48px 40px;
  max-width: 720px;
  margin: 0 auto;
}

/* 段落 */
#nice p {
  font-size: 15px;
  line-height: 1.6;
  color: #2a2a2a;
  margin: 16px 0;
}

/* 一级标题 */
#nice h1 {
  font-size: 32px;
  font-weight: 700;
  margin: 48px 0 32px 0;
  color: #000000;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  padding: 16px;
  background:
    radial-gradient(circle at 4px 4px, #000000 2px, transparent 2px);
  background-size: 8px 8px;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* 二级标题 */
#nice h2 {
  font-size: 20px;
  font-weight: 600;
  margin: 32px 0 20px 0;
  color: #ffffff;
  background: #333333;
  padding: 8px 16px;
  display: inline-block;
  position: relative;
}

#nice h2:after {
  content: ':::';
  position: absolute;
  right: -30px;
  color: #333333;
}

/* 三级标题 */
#nice h3 {
  font-size: 16px;
  font-weight: 500;
  margin: 24px 0 14px 0;
  color: #333333;
  padding-left: 24px;
  position: relative;
}

#nice h3:before {
  content: '• • •';
  position: absolute;
  left: 0;
  font-size: 8px;
  top: 50%;
  transform: translateY(-50%);
}

/* 引用 */
#nice blockquote {
  margin: 24px 0;
  padding: 16px 20px;
  background: #ffffff;
  border: 2px dotted #666666;
}

#nice blockquote p {
  color: #4a4a4a;
  margin: 8px 0;
  font-family: 'Georgia', serif;
}

/* 链接 */
#nice a {
  color: #000000;
  text-decoration: none;
  border-bottom: 2px dotted #666666;
  transition: all 0.2s;
}

#nice a:hover {
  border-bottom: 2px solid #000000;
}

/* 加粗 */
#nice strong {
  font-weight: 700;
  color: #ffffff;
  background: #000000;
  padding: 2px 6px;
  margin: 0 2px;
}

/* 代码块 */
#nice pre {
  margin: 24px 0;
  background: #1a1a1a;
  color: #00ff00;
  padding: 24px;
  font-family: 'Space Mono', monospace;
  font-size: 12px;
  line-height: 1.5;
  border: 1px solid #000000;
}`;
