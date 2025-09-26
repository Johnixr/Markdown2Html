export default `/* 极简主义大师手笔 - style-4-minimalist-master.css */

/* Style 4: 极简主义大师手笔 - Minimalist Master's Touch */

/* 全局属性 - 空灵留白 */
#nice {
  font-family: 'Helvetica Neue', 'Arial', sans-serif;
  color: #111111;
  background: #ffffff;
  font-size: 15px;
  line-height: 2.0;
  padding: 80px 40px;
  max-width: 680px;
  margin: 0 auto;
}

/* 段落 - 呼吸感文字 */
#nice p {
  font-size: 15px;
  line-height: 1.8;
  color: #1a1a1a;
  margin: 24px 0;
  font-weight: 300;
  letter-spacing: 0.02em;
}

/* 一级标题 - 巨型留白 */
#nice h1 {
  font-size: 48px;
  font-weight: 100;
  letter-spacing: -2px;
  margin: 120px 0 80px 0;
  color: #000000;
  text-align: left;
  padding: 0;
}

#nice h1 .content {
  display: block;
  padding-bottom: 40px;
  border-bottom: 1px solid #000000;
}

/* 二级标题 - 精准分割 */
#nice h2 {
  font-size: 18px;
  font-weight: 400;
  margin: 80px 0 40px 0;
  color: #000000;
  text-transform: uppercase;
  letter-spacing: 3px;
}

#nice h2 .content {
  display: block;
  padding-top: 40px;
  border-top: 4px solid #000000;
}

/* 三级标题 - 微妙强调 */
#nice h3 {
  font-size: 15px;
  font-weight: 500;
  margin: 48px 0 24px 0;
  color: #000000;
  letter-spacing: 1px;
}

#nice h3 .content:before {
  content: '—';
  margin-right: 12px;
  color: #999999;
}

/* 无序列表 - 点状优雅 */
#nice ul {
  margin: 40px 0;
  padding-left: 0;
  list-style: none;
}

#nice ul li {
  position: relative;
  padding-left: 24px;
  margin: 16px 0;
  color: #333333;
  font-weight: 300;
}

#nice ul li:before {
  content: '·';
  position: absolute;
  left: 0;
  color: #000000;
  font-size: 20px;
  line-height: 1.2;
}

/* 有序列表 - 细线编号 */
#nice ol {
  margin: 40px 0;
  padding-left: 0;
  list-style: none;
  counter-reset: minimal-count;
}

#nice ol li {
  position: relative;
  padding-left: 48px;
  margin: 20px 0;
  counter-increment: minimal-count;
  color: #333333;
}

#nice ol li:before {
  content: counter(minimal-count);
  position: absolute;
  left: 0;
  color: #000000;
  font-size: 12px;
  font-weight: 300;
  width: 24px;
  text-align: right;
  top: 2px;
}

/* 引用 - 边缘呼吸 */
#nice blockquote {
  margin: 60px 0;
  padding: 0 0 0 32px;
  border-left: 1px solid #000000;
  position: relative;
}

#nice blockquote p {
  color: #666666;
  font-style: italic;
  font-weight: 300;
  margin: 16px 0;
  font-size: 14px;
  line-height: 2.0;
}

/* 链接 - 底线存在 */
#nice a {
  color: #000000;
  text-decoration: none;
  border-bottom: 1px solid #000000;
  padding-bottom: 2px;
  transition: all 0.3s;
  font-weight: 400;
}

#nice a:hover {
  border-bottom: 2px solid #000000;
  padding-bottom: 1px;
}

/* 加粗 - 纯粹黑体 */
#nice strong {
  font-weight: 600;
  color: #000000;
  letter-spacing: 0.5px;
}

/* 斜体 - 轻柔倾斜 */
#nice em {
  font-style: italic;
  font-weight: 300;
  color: #666666;
}

/* 分隔线 - 极细存在 */
#nice hr {
  border: none;
  height: 1px;
  background: #000000;
  margin: 80px auto;
  width: 40px;
}

/* 图片 - 无框纯净 */
#nice img {
  max-width: 100%;
  height: auto;
  margin: 60px 0;
  display: block;
}

/* 行内代码 - 灰度标记 */
#nice p code,
#nice li code {
  background: #f5f5f5;
  color: #000000;
  padding: 2px 6px;
  font-family: 'Monaco', 'Courier New', monospace;
  font-size: 13px;
  font-weight: 400;
}

/* 代码块 - 纯净空间 */
#nice pre {
  margin: 48px 0;
  background: #fafafa;
  padding: 32px;
  border-left: 2px solid #000000;
  overflow-x: auto;
}

#nice pre code {
  background: none;
  color: #333333;
  font-family: 'Monaco', 'Courier New', monospace;
  font-size: 13px;
  line-height: 1.8;
}

/* 表格 - 线性美学 */
#nice table {
  width: 100%;
  margin: 48px 0;
  border-collapse: collapse;
  border-top: 2px solid #000000;
  border-bottom: 2px solid #000000;
}

#nice table tr th,
#nice table tr td {
  padding: 16px 0;
  text-align: left;
  font-size: 14px;
  border-bottom: 1px solid #eeeeee;
  font-weight: 300;
}

#nice table tr th {
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 12px;
  border-bottom: 1px solid #000000;
}

#nice table tr:last-child td {
  border-bottom: none;
}`;
