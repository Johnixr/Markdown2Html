export default `/* 工匠精神 - style-80-craftsman-spirit.css */

/* Style 80: 工匠精神 - Craftsman Spirit */

/* 全局属性 */
#nice {
  font-family: 'Work Sans', 'PingFang SC', sans-serif;
  color: #3a3a3a;
  background: #f7f5f2;
  background-image:
    repeating-linear-gradient(
      45deg,
      transparent,
      transparent 20px,
      rgba(139, 87, 42, 0.02) 20px,
      rgba(139, 87, 42, 0.02) 21px
    );
  font-size: 15px;
  line-height: 1.7;
  padding: 60px 48px;
  max-width: 720px;
  margin: 0 auto;
}

/* 段落 */
#nice p {
  font-size: 15px;
  line-height: 1.7;
  color: #4a4a4a;
  margin: 16px 0;
  letter-spacing: 0.02em;
}

/* 一级标题 */
#nice h1 {
  font-size: 36px;
  font-weight: 700;
  margin: 52px 0 32px 0;
  color: #8b572a;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  padding: 20px 0;
  position: relative;
}

#nice h1:before,
#nice h1:after {
  content: '';
  position: absolute;
  top: 50%;
  width: 60px;
  height: 2px;
  background: #8b572a;
}

#nice h1:before {
  left: -80px;
}

#nice h1:after {
  right: -80px;
}

/* 二级标题 */
#nice h2 {
  font-size: 22px;
  font-weight: 600;
  margin: 32px 0 20px 0;
  color: #6b4423;
  padding: 10px 0;
  border-bottom: 2px solid #8b572a;
  display: inline-block;
}

/* 三级标题 */
#nice h3 {
  font-size: 17px;
  font-weight: 500;
  margin: 24px 0 14px 0;
  color: #8b572a;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-size: 15px;
}

/* 引用 */
#nice blockquote {
  margin: 28px 0;
  padding: 20px 24px;
  background: #ffffff;
  border-left: 4px solid #8b572a;
  box-shadow: 0 2px 8px rgba(139, 87, 42, 0.1);
}

#nice blockquote p {
  color: #5a5a5a;
  margin: 8px 0;
}

/* 链接 */
#nice a {
  color: #8b572a;
  text-decoration: none;
  font-weight: 500;
  border-bottom: 1px solid #d4a574;
  transition: all 0.3s;
}

#nice a:hover {
  border-bottom-width: 2px;
  border-bottom-color: #8b572a;
}

/* 加粗 */
#nice strong {
  font-weight: 700;
  color: #6b4423;
  background: rgba(139, 87, 42, 0.08);
  padding: 2px 8px;
  margin: 0 2px;
}

/* 代码块 */
#nice pre {
  margin: 28px 0;
  background: #3a3a3a;
  color: #f7f5f2;
  padding: 24px;
  font-family: 'Roboto Mono', monospace;
  font-size: 13px;
  line-height: 1.6;
  border-left: 4px solid #8b572a;
}`;
