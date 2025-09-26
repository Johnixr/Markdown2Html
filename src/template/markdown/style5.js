export default `/* 瑞士国际主义网格 - style-5-swiss-international.css */

/* Style 5: 瑞士国际主义网格 - Swiss International Grid System */

/* 全局属性 - 网格系统 */
#nice {
  font-family: 'Univers', 'Helvetica', 'Arial', sans-serif;
  color: #000000;
  background: #f0f0f0;
  font-size: 14px;
  line-height: 1.6;
  padding: 48px;
  max-width: 960px;
  margin: 0 auto;
}

/* 段落 - 网格对齐 */
#nice p {
  font-size: 14px;
  line-height: 20px; /* 精确基线网格 */
  color: #1a1a1a;
  margin: 20px 0;
  text-align: justify;
}

/* 一级标题 - 红色主导 */
#nice h1 {
  font-size: 72px;
  font-weight: 700;
  margin: 48px 0 48px -48px;
  padding: 48px;
  color: #ffffff;
  background: #e30613;
  letter-spacing: -3px;
  line-height: 1;
  text-transform: lowercase;
}

#nice h1 .content {
  display: block;
}

/* 二级标题 - 网格区块 */
#nice h2 {
  font-size: 36px;
  font-weight: 700;
  margin: 48px 0 24px 0;
  color: #000000;
  padding: 24px;
  background: #ffffff;
  position: relative;
  text-transform: lowercase;
}

#nice h2 .content {
  display: flex;
  align-items: baseline;
}

#nice h2 .content:before {
  content: '';
  width: 48px;
  height: 48px;
  background: #e30613;
  margin-right: 24px;
  flex-shrink: 0;
}

/* 三级标题 - 功能标识 */
#nice h3 {
  font-size: 21px;
  font-weight: 500;
  margin: 24px 0 12px 0;
  color: #000000;
  padding-left: 72px;
  position: relative;
}

#nice h3 .content:before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 48px;
  height: 2px;
  background: #e30613;
}

/* 无序列表 - 方块系统 */
#nice ul {
  margin: 24px 0;
  padding-left: 0;
  list-style: none;
}

#nice ul li {
  position: relative;
  padding-left: 48px;
  margin: 12px 0;
  line-height: 24px;
  color: #1a1a1a;
}

#nice ul li:before {
  content: '';
  position: absolute;
  left: 12px;
  top: 8px;
  width: 8px;
  height: 8px;
  background: #e30613;
}

/* 有序列表 - 数字网格 */
#nice ol {
  margin: 24px 0;
  padding-left: 0;
  list-style: none;
  counter-reset: swiss-count;
}

#nice ol li {
  position: relative;
  padding-left: 72px;
  margin: 12px 0;
  counter-increment: swiss-count;
  line-height: 24px;
}

#nice ol li:before {
  content: counter(swiss-count, decimal-leading-zero);
  position: absolute;
  left: 0;
  background: #000000;
  color: #ffffff;
  width: 48px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 12px;
}

/* 引用 - 倾斜网格 */
#nice blockquote {
  margin: 48px 0;
  padding: 24px;
  background: #ffffff;
  border-left: 12px solid #e30613;
  transform: skewY(-2deg);
  position: relative;
}

#nice blockquote p {
  color: #000000;
  font-size: 18px;
  line-height: 24px;
  margin: 12px 0;
  font-weight: 500;
  transform: skewY(2deg);
}

/* 链接 - 功能色块 */
#nice a {
  color: #000000;
  text-decoration: none;
  font-weight: 700;
  padding: 2px 8px;
  background: #ffcc00;
  position: relative;
  transition: all 0.2s;
  margin: 0 2px;
}

#nice a:hover {
  background: #e30613;
  color: #ffffff;
}

/* 加粗 - 黑块强调 */
#nice strong {
  font-weight: 900;
  color: #ffffff;
  background: #000000;
  padding: 4px 12px;
  margin: 0 2px;
  display: inline-block;
}

/* 斜体 - 角度倾斜 */
#nice em {
  font-style: normal;
  color: #e30613;
  font-weight: 500;
  transform: skewX(-12deg);
  display: inline-block;
  padding: 0 4px;
}

/* 分隔线 - 构成主义 */
#nice hr {
  border: none;
  margin: 48px 0;
  height: 24px;
  background: repeating-linear-gradient(
    90deg,
    #000000,
    #000000 12px,
    transparent 12px,
    transparent 24px
  );
}

/* 图片 - 网格框架 */
#nice img {
  max-width: 100%;
  height: auto;
  margin: 48px 0;
  display: block;
  padding: 24px;
  background: #ffffff;
  border: 2px solid #000000;
}

/* 行内代码 - 技术标记 */
#nice p code,
#nice li code {
  background: #000000;
  color: #ffcc00;
  padding: 2px 8px;
  font-family: 'Courier New', monospace;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
}

/* 代码块 - 打字机风格 */
#nice pre {
  margin: 48px 0;
  background: #1a1a1a;
  padding: 24px;
  position: relative;
  border: 4px solid #e30613;
}

#nice pre code {
  color: #ffffff;
  font-family: 'Courier New', monospace;
  font-size: 12px;
  line-height: 24px;
}

#nice pre:before {
  content: 'CODE';
  position: absolute;
  top: -2px;
  left: 24px;
  background: #e30613;
  color: #ffffff;
  padding: 4px 24px;
  font-weight: 700;
  font-size: 12px;
}

/* 表格 - 瑞士网格 */
#nice table {
  width: 100%;
  margin: 48px 0;
  border-collapse: separate;
  border-spacing: 0;
  background: #ffffff;
  border: 2px solid #000000;
}

#nice table tr th,
#nice table tr td {
  padding: 12px 24px;
  text-align: left;
  font-size: 14px;
  line-height: 24px;
  border-right: 1px solid #000000;
  border-bottom: 1px solid #000000;
}

#nice table tr th {
  background: #e30613;
  color: #ffffff;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 12px;
}

#nice table tr:nth-child(even) td {
  background: #f0f0f0;
}

#nice table tr td:last-child,
#nice table tr th:last-child {
  border-right: none;
}`;
