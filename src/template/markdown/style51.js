export default `/* 青花瓷韵 - style-51-blue-white-porcelain.css */

/* Style 51: 青花瓷韵 - Blue and White Porcelain */

/* 全局属性 */
#nice {
  font-family: 'Songti SC', 'SimSun', serif;
  color: #2c3e50;
  background: linear-gradient(180deg, #f8f9fa 0%, #e8eef3 100%);
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
  color: #34495e;
  margin: 18px 0;
  letter-spacing: 0.5px;
}

/* 一级标题 - 青花主纹 */
#nice h1 {
  font-size: 46px;
  font-weight: 400;
  margin: 56px 0 36px 0;
  color: #1e3a6f;
  text-align: center;
  position: relative;
  padding: 40px 0;
}

#nice h1:before {
  content: '〔';
  position: absolute;
  left: 20px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 60px;
  color: #4a69bd;
  font-weight: 100;
}

#nice h1:after {
  content: '〕';
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 60px;
  color: #4a69bd;
  font-weight: 100;
}

/* 二级标题 - 釉下青花 */
#nice h2 {
  font-size: 28px;
  font-weight: 500;
  margin: 36px 0 24px 0;
  color: #ffffff;
  background: linear-gradient(135deg, #1e3a6f, #4a69bd);
  padding: 14px 32px;
  display: inline-block;
  position: relative;
  border-radius: 0 20px 0 20px;
}

#nice h2:before,
#nice h2:after {
  content: '❋';
  position: absolute;
  color: #ffffff;
  font-size: 16px;
}

#nice h2:before {
  top: 8px;
  left: 12px;
}

#nice h2:after {
  bottom: 8px;
  right: 12px;
}

/* 三级标题 */
#nice h3 {
  font-size: 20px;
  font-weight: 500;
  margin: 28px 0 16px 0;
  color: #1e3a6f;
  padding: 10px 20px;
  border: 2px solid #4a69bd;
  border-left: 8px solid #1e3a6f;
  background: rgba(74, 105, 189, 0.05);
}

/* 引用 - 瓷器纹理 */
#nice blockquote {
  margin: 32px 0;
  padding: 24px 32px;
  background:
    repeating-linear-gradient(
      0deg,
      transparent,
      transparent 20px,
      rgba(30, 58, 111, 0.03) 20px,
      rgba(30, 58, 111, 0.03) 21px
    ),
    linear-gradient(90deg,
      rgba(74, 105, 189, 0.05) 0%,
      rgba(30, 58, 111, 0.05) 100%);
  border: 1px solid #4a69bd;
  position: relative;
}

#nice blockquote:before {
  content: '青花';
  position: absolute;
  top: -12px;
  left: 24px;
  background: #f8f9fa;
  color: #1e3a6f;
  padding: 0 12px;
  font-size: 16px;
  font-weight: 500;
}

#nice blockquote p {
  color: #34495e;
  margin: 8px 0;
  font-style: italic;
}

/* 链接 - 钴蓝 */
#nice a {
  color: #1e3a6f;
  text-decoration: none;
  font-weight: 500;
  padding: 2px 8px;
  border-bottom: 2px solid #4a69bd;
  transition: all 0.3s;
}

#nice a:hover {
  background: rgba(74, 105, 189, 0.1);
  color: #4a69bd;
}

/* 加粗 - 青花点缀 */
#nice strong {
  font-weight: 700;
  color: #ffffff;
  background: linear-gradient(90deg, #1e3a6f, #4a69bd, #1e3a6f);
  padding: 3px 12px;
  margin: 0 2px;
  display: inline-block;
  border-radius: 12px;
}

/* 代码块 - 瓷底 */
#nice pre {
  margin: 32px 0;
  background: #ffffff;
  color: #1e3a6f;
  padding: 32px;
  border: 2px solid #4a69bd;
  position: relative;
  box-shadow:
    inset 0 0 20px rgba(74, 105, 189, 0.05),
    0 4px 12px rgba(30, 58, 111, 0.1);
}

#nice pre:before {
  content: '〈 景德镇 〉';
  position: absolute;
  bottom: 8px;
  right: 12px;
  color: #4a69bd;
  font-size: 10px;
  opacity: 0.5;
}

#nice pre code {
  color: #1e3a6f;
  font-family: 'Consolas', monospace;
  font-size: 13px;
  line-height: 1.6;
}`;
