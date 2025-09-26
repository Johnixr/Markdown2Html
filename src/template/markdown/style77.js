export default `/* 几何构成 - style-77-geometric-composition.css */

/* Style 77: 几何构成 - Geometric Composition */

/* 全局属性 */
#nice {
  font-family: 'DIN Next', 'Helvetica', sans-serif;
  color: #212121;
  background: #fafafa;
  background-image:
    linear-gradient(90deg, #e0e0e0 1px, transparent 1px),
    linear-gradient(#e0e0e0 1px, transparent 1px);
  background-size: 24px 24px;
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
  color: #424242;
  margin: 16px 0;
  letter-spacing: 0.01em;
}

/* 一级标题 */
#nice h1 {
  font-size: 42px;
  font-weight: 700;
  margin: 48px 0 32px 0;
  color: #000000;
  position: relative;
  padding: 20px;
  background: #ffffff;
  border: 3px solid #000000;
  box-shadow: 8px 8px 0 #000000;
}

/* 二级标题 */
#nice h2 {
  font-size: 24px;
  font-weight: 600;
  margin: 32px 0 20px 0;
  color: #ffffff;
  background: #000000;
  padding: 12px 24px;
  display: inline-block;
  transform: skew(-10deg);
}

/* 三级标题 */
#nice h3 {
  font-size: 18px;
  font-weight: 500;
  margin: 24px 0 14px 0;
  color: #212121;
  padding-left: 20px;
  position: relative;
}

#nice h3:before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 12px;
  height: 12px;
  background: #000000;
  transform: rotate(45deg) translateY(-50%);
}

/* 引用 */
#nice blockquote {
  margin: 28px 0;
  padding: 20px;
  background: #ffffff;
  border: 2px solid #000000;
  position: relative;
}

#nice blockquote:before {
  content: '';
  position: absolute;
  top: -10px;
  left: 20px;
  width: 20px;
  height: 20px;
  background: #ffffff;
  border: 2px solid #000000;
  transform: rotate(45deg);
}

#nice blockquote p {
  color: #424242;
  margin: 8px 0;
}

/* 链接 */
#nice a {
  color: #000000;
  text-decoration: none;
  font-weight: 600;
  padding: 2px 6px;
  background: #ffffff;
  border: 1px solid #000000;
  transition: all 0.2s;
}

#nice a:hover {
  background: #000000;
  color: #ffffff;
}

/* 加粗 */
#nice strong {
  font-weight: 700;
  color: #ffffff;
  background: #000000;
  padding: 2px 8px;
  margin: 0 2px;
  transform: skew(-5deg);
  display: inline-block;
}

/* 代码块 */
#nice pre {
  margin: 28px 0;
  background: #212121;
  color: #ffffff;
  padding: 24px;
  font-family: 'Space Mono', monospace;
  font-size: 13px;
  line-height: 1.5;
  border: 3px solid #000000;
  position: relative;
}

#nice pre:after {
  content: '';
  position: absolute;
  top: 4px;
  right: 4px;
  bottom: 4px;
  left: 4px;
  border: 1px solid #616161;
}`;
