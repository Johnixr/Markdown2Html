export default `/* 装饰艺术风华 - style-11-art-deco.css */

/* Style 11: 装饰艺术风华 - Art Deco Glamour */

/* 全局属性 - 奢华基调 */
#nice {
  font-family: 'Didot', 'Bodoni MT', 'Georgia', serif;
  color: #1a1a1a;
  background: linear-gradient(180deg, #f4e8d0 0%, #e8dcc0 100%);
  font-size: 15px;
  line-height: 1.7;
  padding: 50px 40px;
  max-width: 860px;
  margin: 0 auto;
  position: relative;
}

#nice:before,
#nice:after {
  content: '';
  position: absolute;
  top: 20px;
  width: 2px;
  height: calc(100% - 40px);
  background: linear-gradient(180deg, #b8860b, #d4af37, #b8860b);
}

#nice:before {
  left: 20px;
}

#nice:after {
  right: 20px;
}

/* 段落 - 典雅排版 */
#nice p {
  font-size: 15px;
  line-height: 1.9;
  color: #2a2a2a;
  margin: 24px 0;
  text-align: justify;
  letter-spacing: 0.3px;
}

/* 一级标题 - 几何装饰 */
#nice h1 {
  font-size: 42px;
  font-weight: 300;
  margin: 72px 0 48px 0;
  color: #b8860b;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 6px;
  position: relative;
  padding: 32px 0;
}

#nice h1 .content {
  position: relative;
  display: inline-block;
  padding: 20px 40px;
  border: 3px solid #b8860b;
}

#nice h1 .content:before,
#nice h1 .content:after {
  content: '';
  position: absolute;
  width: 60px;
  height: 60px;
  border: 2px solid #b8860b;
}

#nice h1 .content:before {
  top: -10px;
  left: -10px;
  border-right: none;
  border-bottom: none;
}

#nice h1 .content:after {
  bottom: -10px;
  right: -10px;
  border-left: none;
  border-top: none;
}

#nice h1:after {
  content: '◆ ◆ ◆';
  display: block;
  text-align: center;
  color: #b8860b;
  font-size: 16px;
  letter-spacing: 20px;
  margin-top: 24px;
}

/* 二级标题 - 扇形图案 */
#nice h2 {
  font-size: 28px;
  font-weight: 400;
  margin: 56px 0 32px 0;
  color: #1a1a1a;
  text-transform: uppercase;
  letter-spacing: 3px;
  position: relative;
  text-align: center;
}

#nice h2 .content {
  display: inline-block;
  position: relative;
  padding: 12px 32px;
  background: rgba(184, 134, 11, 0.1);
}

#nice h2 .content:before {
  content: '';
  position: absolute;
  top: -20px;
  left: 50%;
  transform: translateX(-50%);
  width: 40px;
  height: 20px;
  border-radius: 40px 40px 0 0;
  border: 2px solid #b8860b;
  border-bottom: none;
}

#nice h2 .content:after {
  content: '';
  position: absolute;
  bottom: -20px;
  left: 50%;
  transform: translateX(-50%);
  width: 40px;
  height: 20px;
  border-radius: 0 0 40px 40px;
  border: 2px solid #b8860b;
  border-top: none;
}

/* 三级标题 - 线条艺术 */
#nice h3 {
  font-size: 20px;
  font-weight: 500;
  margin: 40px 0 20px 0;
  color: #1a1a1a;
  position: relative;
  padding: 8px 0;
  text-transform: uppercase;
  letter-spacing: 2px;
}

#nice h3 .content {
  display: inline-block;
  position: relative;
  padding-bottom: 8px;
}

#nice h3 .content:after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, #b8860b 20%, #b8860b 80%, transparent);
}

#nice h3 .content:before {
  content: '◆';
  position: absolute;
  bottom: -5px;
  left: 50%;
  transform: translateX(-50%);
  color: #b8860b;
  font-size: 12px;
  background: linear-gradient(180deg, #f4e8d0 0%, #e8dcc0 100%);
  padding: 0 8px;
}

/* 无序列表 - 装饰符号 */
#nice ul {
  margin: 28px 0;
  padding-left: 0;
  list-style: none;
}

#nice ul li {
  position: relative;
  padding-left: 36px;
  margin: 14px 0;
  color: #2a2a2a;
  line-height: 1.8;
}

#nice ul li:before {
  content: '◈';
  position: absolute;
  left: 0;
  color: #b8860b;
  font-size: 14px;
  top: 2px;
}

/* 有序列表 - 罗马数字 */
#nice ol {
  margin: 28px 0;
  padding-left: 0;
  list-style: none;
  counter-reset: deco-count;
}

#nice ol li {
  position: relative;
  padding-left: 56px;
  margin: 16px 0;
  counter-increment: deco-count;
  color: #2a2a2a;
}

#nice ol li:before {
  content: counter(deco-count, upper-roman);
  position: absolute;
  left: 0;
  color: #b8860b;
  font-weight: 500;
  font-size: 16px;
  width: 40px;
  text-align: center;
  top: 1px;
  padding-right: 8px;
  border-right: 1px solid #b8860b;
}

/* 引用 - 古典边框 */
#nice blockquote {
  margin: 48px 0;
  padding: 32px;
  background: rgba(184, 134, 11, 0.05);
  position: relative;
  border: 1px solid #b8860b;
}

#nice blockquote:before,
#nice blockquote:after {
  content: '';
  position: absolute;
  width: 20px;
  height: 20px;
  background: linear-gradient(180deg, #f4e8d0 0%, #e8dcc0 100%);
}

#nice blockquote:before {
  top: -10px;
  left: 30px;
  border-left: 2px solid #b8860b;
  border-right: 2px solid #b8860b;
}

#nice blockquote:after {
  bottom: -10px;
  right: 30px;
  border-left: 2px solid #b8860b;
  border-right: 2px solid #b8860b;
}

#nice blockquote p {
  color: #3a3a3a;
  font-style: italic;
  margin: 12px 0;
  text-align: center;
  font-size: 16px;
  line-height: 1.8;
}

/* 链接 - 金属质感 */
#nice a {
  color: #b8860b;
  text-decoration: none;
  font-weight: 500;
  position: relative;
  padding: 2px 8px;
  background: linear-gradient(180deg, rgba(184, 134, 11, 0) 0%, rgba(184, 134, 11, 0.1) 100%);
  border-bottom: 1px solid #b8860b;
  transition: all 0.3s;
}

#nice a:hover {
  background: linear-gradient(180deg, rgba(184, 134, 11, 0.1) 0%, rgba(184, 134, 11, 0.2) 100%);
  color: #8b6914;
  border-bottom-width: 2px;
}

/* 加粗 - 黄金强调 */
#nice strong {
  font-weight: 600;
  color: #1a1a1a;
  background: linear-gradient(90deg, transparent, rgba(184, 134, 11, 0.15), transparent);
  padding: 2px 10px;
  position: relative;
}

#nice strong:before,
#nice strong:after {
  content: '|';
  color: #b8860b;
  font-weight: 300;
  margin: 0 4px;
}

/* 斜体 - 优雅倾斜 */
#nice em {
  font-style: italic;
  color: #5a4a3a;
  letter-spacing: 0.5px;
}

/* 分隔线 - 装饰分割 */
#nice hr {
  border: none;
  height: 20px;
  margin: 64px 0;
  position: relative;
  text-align: center;
}

#nice hr:before {
  content: '◆';
  color: #b8860b;
  font-size: 20px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: linear-gradient(180deg, #f4e8d0 0%, #e8dcc0 100%);
  padding: 0 20px;
}

#nice hr:after {
  content: '';
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg,
    transparent 0%,
    #b8860b 20%,
    #b8860b 40%,
    transparent 50%,
    #b8860b 60%,
    #b8860b 80%,
    transparent 100%);
  z-index: -1;
}

/* 图片 - 相框装饰 */
#nice img {
  max-width: 100%;
  height: auto;
  margin: 48px auto;
  display: block;
  padding: 16px;
  background: #ffffff;
  border: 2px solid #b8860b;
  position: relative;
  box-shadow:
    0 0 0 8px #f4e8d0,
    0 0 0 10px #b8860b,
    0 8px 20px rgba(0, 0, 0, 0.1);
}

/* 代码块 - 复古打字机 */
#nice pre {
  margin: 48px 0;
  background: #2a2a2a;
  color: #d4af37;
  padding: 32px;
  position: relative;
  border: 1px solid #b8860b;
  font-family: 'Courier New', monospace;
}

#nice pre:before {
  content: '{ CODE }';
  position: absolute;
  top: -12px;
  left: 24px;
  background: linear-gradient(180deg, #f4e8d0 0%, #e8dcc0 100%);
  color: #b8860b;
  padding: 0 16px;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 2px;
}

#nice pre code {
  color: #d4af37;
  font-size: 13px;
  line-height: 1.7;
}

/* 表格 - 古典网格 */
#nice table {
  width: 100%;
  margin: 48px 0;
  border-collapse: collapse;
  background: #ffffff;
  border: 2px solid #b8860b;
}

#nice table tr th,
#nice table tr td {
  padding: 14px 18px;
  text-align: left;
  font-size: 14px;
  border-bottom: 1px solid #d4c4a0;
}

#nice table tr th {
  background: linear-gradient(180deg, rgba(184, 134, 11, 0.15) 0%, rgba(184, 134, 11, 0.1) 100%);
  color: #1a1a1a;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 13px;
  border-bottom: 2px solid #b8860b;
}

#nice table tr:last-child td {
  border-bottom: none;
}

#nice table tr:nth-child(even) td {
  background: rgba(184, 134, 11, 0.03);
}`;
