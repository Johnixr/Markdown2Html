export default `/* 街头工业涂鸦革命 - new-design.css */

/* 极创新视觉设计 - Markdown样式大改版 */

/* 全局属性 - 建立高级感基调 */
#nice {
  font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Inter', 'Helvetica Neue', sans-serif;
  color: #1a1a1a;
  background: #ffffff;
  font-size: 15px;
  line-height: 1.75;
  padding: 40px;
  max-width: 900px;
  margin: 0 auto;
}

/* 段落 - 精致的文字呈现 */
#nice p {
  font-size: 15px;
  line-height: 1.85;
  color: #2c2c2c;
  margin: 18px 0;
  word-spacing: 0.5px;
  letter-spacing: 0.3px;
  font-weight: 400;
}

/* 一级标题 - 震撼视觉主导 */
#nice h1 {
  position: relative;
  font-size: 32px;
  font-weight: 900;
  letter-spacing: -1px;
  margin: 48px 0 32px 0;
  padding: 0;
  color: #ffffff;
  background: linear-gradient(135deg, #1a1a1a 0%, #3a3a3a 100%);
  padding: 28px 36px;
  margin-left: -40px;
  margin-right: -40px;
  box-shadow: 0 12px 40px rgba(0,0,0,0.15);
}

#nice h1 .content {
  position: relative;
  z-index: 1;
}

#nice h1:after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: #ff6b35;
}

/* 二级标题 - 力量感设计 */
#nice h2 {
  font-size: 24px;
  font-weight: 800;
  margin: 36px 0 20px 0;
  position: relative;
  color: #1a1a1a;
  padding: 16px 0;
}

#nice h2 .content {
  display: inline-block;
  background: #f0f0f0;
  color: #1a1a1a;
  padding: 10px 24px;
  position: relative;
  font-weight: 800;
  letter-spacing: -0.5px;
  border-left: 6px solid #ff6b35;
  box-shadow: 8px 8px 0 #1a1a1a;
}

/* 三级标题 - 精准定位 */
#nice h3 {
  font-size: 19px;
  font-weight: 700;
  margin: 28px 0 16px 0;
  position: relative;
  padding-left: 20px;
}

#nice h3 .content {
  color: #1a1a1a;
  position: relative;
}

#nice h3:before {
  content: '◆';
  position: absolute;
  left: 0;
  color: #ff6b35;
  font-size: 16px;
  top: 2px;
}

/* 无序列表 - 层次分明 */
#nice ul {
  margin: 20px 0;
  padding-left: 0;
  list-style: none;
}

#nice ul li {
  position: relative;
  padding-left: 32px;
  margin: 12px 0;
  color: #2c2c2c;
}

#nice ul li:before {
  content: '▪';
  position: absolute;
  left: 0;
  color: #ff6b35;
  font-size: 20px;
  font-weight: bold;
  line-height: 1.2;
}

/* 有序列表 - 权威数字感 */
#nice ol {
  margin: 20px 0;
  padding-left: 0;
  list-style: none;
  counter-reset: item;
}

#nice ol li {
  position: relative;
  padding-left: 40px;
  margin: 14px 0;
  counter-increment: item;
}

#nice ol li:before {
  content: counter(item);
  position: absolute;
  left: 0;
  top: 0;
  background: #1a1a1a;
  color: #ffffff;
  width: 24px;
  height: 24px;
  border-radius: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  font-weight: 700;
}

/* 引用 - 权威感陈述 */
#nice blockquote {
  margin: 28px 0;
  padding: 24px 32px;
  background: #1a1a1a;
  color: #ffffff;
  position: relative;
  border: none;
  font-size: 16px;
  font-style: italic;
  letter-spacing: 0.5px;
  box-shadow: 12px 12px 0 #ff6b35;
}

#nice blockquote p {
  color: #f0f0f0;
  margin: 8px 0;
  line-height: 1.7;
}

#nice blockquote:before {
  content: '"';
  position: absolute;
  top: -10px;
  left: 20px;
  font-size: 60px;
  color: #ff6b35;
  font-family: Georgia, serif;
  line-height: 1;
}

/* 链接 - 醒目互动 */
#nice a {
  color: #1a1a1a;
  text-decoration: none;
  font-weight: 600;
  position: relative;
  background: #ffeb3b;
  padding: 2px 6px;
  margin: 0 2px;
  transition: all 0.2s ease;
  box-shadow: 3px 3px 0 #1a1a1a;
}

#nice a:hover {
  background: #ff6b35;
  color: #ffffff;
  box-shadow: 5px 5px 0 #1a1a1a;
}

/* 加粗 - 力量感 */
#nice strong {
  font-weight: 800;
  color: #000000;
  background: #ffeb3b;
  padding: 3px 12px;
  margin: 0 2px;
  box-shadow: 2px 2px 0 rgba(26, 26, 26, 0.3);
  display: inline-block;
  transform: skewX(-3deg);
}

/* 斜体 - 优雅强调 */
#nice em {
  font-style: italic;
  color: #ff6b35;
  font-weight: 500;
  letter-spacing: 0.5px;
}

/* 加粗斜体 - 双重强调 */
#nice em strong,
#nice strong em {
  color: #ffffff;
  background: #ff6b35;
  padding: 2px 8px;
  font-style: italic;
  font-weight: 700;
  box-shadow: 4px 4px 0 #1a1a1a;
}

/* 删除线 - 明确否定 */
#nice del {
  color: #888;
  text-decoration: line-through;
  text-decoration-color: #ff6b35;
  text-decoration-thickness: 2px;
  opacity: 0.7;
}

/* 分隔线 - 视觉断层 */
#nice hr {
  border: none;
  height: 4px;
  background: #1a1a1a;
  margin: 40px 0;
  position: relative;
  box-shadow: 0 4px 0 #ff6b35;
}

/* 图片 - 艺术展示 */
#nice img {
  max-width: 100%;
  height: auto;
  margin: 32px auto;
  display: block;
  border: 8px solid #1a1a1a;
  box-shadow: 16px 16px 0 #ff6b35;
  background: #ffffff;
  padding: 8px;
}

/* 图片描述 - 精致说明 */
#nice figcaption {
  text-align: center;
  color: #666;
  font-size: 13px;
  margin-top: 12px;
  font-style: italic;
  letter-spacing: 0.5px;
}

/* 行内代码 - 技术标记 */
#nice p code,
#nice li code {
  background: #1a1a1a;
  color: #ffffff;
  padding: 3px 8px;
  font-family: 'SF Mono', Monaco, 'Courier New', monospace;
  font-size: 13px;
  font-weight: 500;
  margin: 0 3px;
  border-radius: 2px;
  box-shadow: 2px 2px 0 #ff6b35;
}

/* 代码块 - 专业展示 */
#nice pre {
  margin: 28px 0;
  background: #1a1a1a;
  padding: 24px;
  overflow-x: auto;
  position: relative;
  box-shadow: 12px 12px 0 #ff6b35;
}

#nice pre code {
  background: none;
  color: #f0f0f0;
  font-family: 'SF Mono', Monaco, 'Courier New', monospace;
  font-size: 13px;
  line-height: 1.6;
  display: block;
}

#nice pre:before {
  content: 'CODE';
  position: absolute;
  top: 0;
  right: 0;
  background: #ff6b35;
  color: #ffffff;
  padding: 4px 12px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 1px;
}

/* 表格 - 数据权威 */
#nice table {
  width: 100%;
  margin: 28px 0;
  border-collapse: separate;
  border-spacing: 0;
  background: #ffffff;
  box-shadow: 8px 8px 0 #1a1a1a;
  border: 3px solid #1a1a1a;
}

#nice table tr th,
#nice table tr td {
  padding: 12px 16px;
  text-align: left;
  font-size: 14px;
  border-right: 2px solid #1a1a1a;
  border-bottom: 2px solid #1a1a1a;
}

#nice table tr th {
  background: #ff6b35;
  color: #ffffff;
  font-weight: 700;
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

#nice table tr:nth-child(even) td {
  background: #f8f8f8;
}

#nice table tr td:last-child,
#nice table tr th:last-child {
  border-right: none;
}

#nice table tr:last-child td {
  border-bottom: none;
}

/* 脚注 - 学术引用 */
#nice .footnote-word {
  color: #ff6b35;
  font-weight: 600;
}

#nice .footnote-ref {
  background: #1a1a1a;
  color: #ffffff;
  padding: 1px 5px;
  font-size: 11px;
  font-weight: 700;
  margin-left: 2px;
  border-radius: 2px;
}

#nice .footnotes-sep:before {
  content: "参考资料";
  font-size: 18px;
  font-weight: 800;
  color: #1a1a1a;
  display: block;
  margin: 40px 0 20px 0;
  padding: 8px 16px;
  background: #f0f0f0;
  border-left: 6px solid #ff6b35;
}

#nice .footnote-num {
  color: #ff6b35;
  font-weight: 700;
  font-size: 14px;
}

#nice .footnote-item p {
  font-size: 13px;
  color: #666;
  line-height: 1.6;
}

/* 公式 - 学术展示 */
#nice .block-equation svg {
  max-width: 100% !important;
  height: auto;
  margin: 24px auto;
  display: block;
  background: #f8f8f8;
  padding: 16px;
  border: 2px solid #1a1a1a;
  box-shadow: 6px 6px 0 #ff6b35;
}

#nice .inline-equation svg {
  vertical-align: middle;
  margin: 0 4px;
  background: #f0f0f0;
  padding: 2px 6px;
  border-radius: 2px;
}`;
