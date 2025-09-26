export default `/* 深绿墨金皇家典藏 - new-design-2.css */

/* 极创新视觉设计 方案二 - 深绿墨金美学 */

/* 全局属性 - 奢华基调 */
#nice {
  font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Inter', 'Helvetica Neue', sans-serif;
  color: #0a2818;
  background: #fefefe;
  font-size: 15px;
  line-height: 1.75;
  padding: 40px;
  max-width: 900px;
  margin: 0 auto;
}

/* 段落 - 优雅呈现 */
#nice p {
  font-size: 15px;
  line-height: 1.9;
  color: #1a3d2a;
  margin: 20px 0;
  letter-spacing: 0.4px;
  font-weight: 400;
}

/* 一级标题 - 帝王气势 */
#nice h1 {
  position: relative;
  font-size: 34px;
  font-weight: 900;
  letter-spacing: -0.5px;
  margin: 52px 0 36px 0;
  color: #d4af37;
  background: #0a2818;
  padding: 32px 40px;
  margin-left: -40px;
  margin-right: -40px;
  text-align: center;
  clip-path: polygon(0 0, 100% 0, 95% 100%, 5% 100%);
}

#nice h1 .content {
  text-shadow: 3px 3px 0 rgba(0,0,0,0.3);
  display: block;
}

#nice h1:before {
  content: '◈';
  display: block;
  font-size: 20px;
  margin-bottom: 12px;
  opacity: 0.7;
}

/* 二级标题 - 贵族标记 */
#nice h2 {
  font-size: 26px;
  font-weight: 800;
  margin: 40px 0 24px 0;
  position: relative;
  color: #0a2818;
}

#nice h2 .content {
  display: inline-block;
  position: relative;
  padding: 12px 28px;
  background: #d4af37;
  color: #0a2818;
  clip-path: polygon(8% 0%, 100% 0%, 92% 100%, 0% 100%);
  letter-spacing: 0.5px;
  text-transform: uppercase;
  font-size: 20px;
}

/* 三级标题 - 章节标识 */
#nice h3 {
  font-size: 20px;
  font-weight: 700;
  margin: 32px 0 18px 0;
  color: #0a2818;
  position: relative;
  padding: 8px 0;
}

#nice h3 .content {
  border-bottom: 4px solid #d4af37;
  border-top: 4px solid #d4af37;
  padding: 6px 16px;
  display: inline-block;
  background: rgba(212, 175, 55, 0.1);
}

/* 无序列表 - 装饰美学 */
#nice ul {
  margin: 24px 0;
  padding-left: 0;
  list-style: none;
}

#nice ul li {
  position: relative;
  padding-left: 36px;
  margin: 14px 0;
  color: #1a3d2a;
  background: rgba(212, 175, 55, 0.05);
  padding-top: 8px;
  padding-bottom: 8px;
  padding-right: 16px;
}

#nice ul li:before {
  content: '❖';
  position: absolute;
  left: 12px;
  color: #d4af37;
  font-size: 16px;
  top: 8px;
}

/* 有序列表 - 序号艺术 */
#nice ol {
  margin: 24px 0;
  padding-left: 0;
  list-style: none;
  counter-reset: item;
}

#nice ol li {
  position: relative;
  padding-left: 48px;
  margin: 16px 0;
  counter-increment: item;
  background: linear-gradient(90deg, rgba(10, 40, 24, 0.05) 0%, transparent 100%);
  padding-top: 10px;
  padding-bottom: 10px;
  padding-right: 20px;
}

#nice ol li:before {
  content: counter(item, decimal-leading-zero);
  position: absolute;
  left: 8px;
  top: 8px;
  color: #d4af37;
  font-size: 18px;
  font-weight: 900;
  font-family: Georgia, serif;
  border-bottom: 3px solid #0a2818;
  padding-bottom: 2px;
}

/* 引用 - 典籍风格 */
#nice blockquote {
  margin: 32px 0;
  padding: 28px 36px;
  background: linear-gradient(135deg, #0a2818 0%, #1a5033 100%);
  color: #d4af37;
  position: relative;
  border-left: 8px solid #d4af37;
  border-right: 8px solid #d4af37;
  font-size: 16px;
}

#nice blockquote p {
  color: #f4e5c2;
  margin: 10px 0;
  line-height: 1.8;
  font-style: normal;
  text-align: justify;
}

#nice blockquote:before,
#nice blockquote:after {
  content: '◆◆◆';
  display: block;
  text-align: center;
  color: #d4af37;
  font-size: 12px;
  letter-spacing: 8px;
  opacity: 0.6;
}

/* 链接 - 皇家点缀 */
#nice a {
  color: #0a2818;
  text-decoration: none;
  font-weight: 600;
  position: relative;
  padding: 4px 12px;
  background: #d4af37;
  clip-path: polygon(5% 0%, 100% 0%, 95% 100%, 0% 100%);
  margin: 0 3px;
  transition: all 0.2s ease;
  display: inline-block;
}

#nice a:hover {
  background: #0a2818;
  color: #d4af37;
  transform: translateY(-2px);
}

/* 加粗 - 权威标记 */
#nice strong {
  font-weight: 800;
  color: #ffffff;
  background: #0a2818;
  padding: 4px 14px;
  margin: 0 3px;
  position: relative;
  display: inline-block;
  border: 2px solid #d4af37;
  box-shadow: -4px 4px 0 #d4af37;
}

/* 斜体 - 书法韵味 */
#nice em {
  font-style: italic;
  color: #0a2818;
  font-weight: 600;
  letter-spacing: 0.8px;
  background: linear-gradient(90deg, transparent, rgba(212, 175, 55, 0.2), transparent);
  padding: 0 8px;
}

/* 加粗斜体 - 双重尊贵 */
#nice em strong,
#nice strong em {
  color: #d4af37;
  background: #0a2818;
  padding: 4px 16px;
  font-style: italic;
  font-weight: 800;
  border-radius: 20px 0;
  box-shadow: inset 0 0 0 2px #d4af37;
}

/* 删除线 - 废弃印记 */
#nice del {
  color: #999;
  text-decoration: line-through;
  text-decoration-color: #0a2818;
  text-decoration-thickness: 3px;
  opacity: 0.6;
  background: rgba(10, 40, 24, 0.1);
  padding: 0 4px;
}

/* 分隔线 - 章节分界 */
#nice hr {
  border: none;
  height: 20px;
  margin: 48px 0;
  position: relative;
  text-align: center;
  background: linear-gradient(90deg, transparent, #d4af37 20%, #d4af37 80%, transparent);
  height: 2px;
}

#nice hr:before {
  content: '◈ ◈ ◈';
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  background: #fefefe;
  padding: 0 20px;
  color: #d4af37;
  font-size: 16px;
  letter-spacing: 12px;
}

/* 图片 - 画框展示 */
#nice img {
  max-width: 100%;
  height: auto;
  margin: 36px auto;
  display: block;
  border: 12px solid #0a2818;
  outline: 2px solid #d4af37;
  outline-offset: -8px;
  background: #ffffff;
  padding: 12px;
  position: relative;
}

/* 图片描述 - 作品说明 */
#nice figcaption {
  text-align: center;
  color: #0a2818;
  font-size: 13px;
  margin-top: 16px;
  font-style: italic;
  letter-spacing: 0.8px;
  padding: 8px;
  background: rgba(212, 175, 55, 0.1);
  border-left: 3px solid #d4af37;
  border-right: 3px solid #d4af37;
}

/* 行内代码 - 技术镶嵌 */
#nice p code,
#nice li code {
  background: #0a2818;
  color: #d4af37;
  padding: 3px 10px;
  font-family: 'SF Mono', Monaco, 'Courier New', monospace;
  font-size: 13px;
  font-weight: 600;
  margin: 0 4px;
  border-radius: 0;
  position: relative;
  top: -1px;
  box-shadow: inset 0 0 0 1px #d4af37;
}

/* 代码块 - 卷轴展开 */
#nice pre {
  margin: 32px 0;
  background: linear-gradient(135deg, #0a2818 0%, #1a5033 100%);
  padding: 28px;
  overflow-x: auto;
  position: relative;
  border-top: 6px solid #d4af37;
  border-bottom: 6px solid #d4af37;
}

#nice pre code {
  background: none;
  color: #f4e5c2;
  font-family: 'SF Mono', Monaco, 'Courier New', monospace;
  font-size: 13px;
  line-height: 1.7;
  display: block;
}

#nice pre:before {
  content: '< CODE >';
  position: absolute;
  top: 8px;
  right: 16px;
  color: #d4af37;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 2px;
  font-family: sans-serif;
}

/* 表格 - 皇家清单 */
#nice table {
  width: 100%;
  margin: 32px 0;
  border-collapse: separate;
  border-spacing: 0;
  background: #ffffff;
  border: 3px solid #0a2818;
  position: relative;
}

#nice table:before {
  content: '';
  position: absolute;
  top: -6px;
  left: -6px;
  right: -6px;
  bottom: -6px;
  border: 2px solid #d4af37;
  z-index: -1;
}

#nice table tr th,
#nice table tr td {
  padding: 14px 18px;
  text-align: left;
  font-size: 14px;
  border-right: 2px solid #0a2818;
  border-bottom: 2px solid #0a2818;
}

#nice table tr th {
  background: linear-gradient(90deg, #0a2818 0%, #1a5033 100%);
  color: #d4af37;
  font-weight: 800;
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 1px;
}

#nice table tr:nth-child(even) td {
  background: rgba(212, 175, 55, 0.08);
}

#nice table tr td:last-child,
#nice table tr th:last-child {
  border-right: none;
}

#nice table tr:last-child td {
  border-bottom: none;
}

/* 脚注 - 文献标注 */
#nice .footnote-word {
  color: #0a2818;
  font-weight: 700;
  background: rgba(212, 175, 55, 0.3);
  padding: 0 4px;
}

#nice .footnote-ref {
  background: #d4af37;
  color: #0a2818;
  padding: 2px 6px;
  font-size: 11px;
  font-weight: 800;
  margin-left: 3px;
  clip-path: polygon(15% 0%, 100% 0%, 85% 100%, 0% 100%);
}

#nice .footnotes-sep:before {
  content: "文献引用";
  font-size: 20px;
  font-weight: 800;
  color: #d4af37;
  background: #0a2818;
  display: inline-block;
  margin: 48px 0 24px 0;
  padding: 10px 24px;
  letter-spacing: 2px;
  clip-path: polygon(5% 0%, 100% 0%, 95% 100%, 0% 100%);
}

#nice .footnote-num {
  color: #d4af37;
  font-weight: 800;
  font-size: 15px;
  background: #0a2818;
  padding: 0 8px;
  margin-right: 8px;
}

#nice .footnote-item p {
  font-size: 13px;
  color: #1a3d2a;
  line-height: 1.7;
  background: rgba(212, 175, 55, 0.05);
  padding: 8px 12px;
  border-left: 3px solid #d4af37;
}

/* 公式 - 学术展示 */
#nice .block-equation svg {
  max-width: 100% !important;
  height: auto;
  margin: 28px auto;
  display: block;
  background: rgba(212, 175, 55, 0.05);
  padding: 20px;
  border: 2px solid #0a2818;
  position: relative;
}

#nice .block-equation svg:before {
  content: 'EQUATION';
  position: absolute;
  top: -12px;
  left: 20px;
  background: #d4af37;
  color: #0a2818;
  padding: 2px 12px;
  font-size: 11px;
  font-weight: 800;
}

#nice .inline-equation svg {
  vertical-align: middle;
  margin: 0 4px;
  background: rgba(212, 175, 55, 0.15);
  padding: 2px 6px;
  border-top: 1px solid #d4af37;
  border-bottom: 1px solid #d4af37;
}`;
