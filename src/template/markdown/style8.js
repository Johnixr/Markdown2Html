export default `/* 日式侘寂美学 - style-8-japanese-wabisabi.css */

/* Style 8: 日式侘寂美学 - Japanese Wabi-Sabi Aesthetics */

/* 全局属性 - 素雅基调 */
#nice {
  font-family: 'Hiragino Sans', 'Noto Sans CJK SC', 'Microsoft YaHei', sans-serif;
  color: #3e3e3e;
  background: linear-gradient(180deg, #f5f2ed 0%, #ebe7e0 100%);
  font-size: 15px;
  line-height: 2.0;
  padding: 60px 40px;
  max-width: 720px;
  margin: 0 auto;
}

/* 段落 - 静谧呼吸 */
#nice p {
  font-size: 15px;
  line-height: 1.75;
  color: #4a4a4a;
  margin: 20px 0;
  text-align: justify;
  letter-spacing: 0.5px;
}

/* 一级标题 - 墨染山水 */
#nice h1 {
  font-size: 36px;
  font-weight: 300;
  margin: 80px 0 60px 0;
  color: #1a1a1a;
  text-align: center;
  position: relative;
  padding: 40px 0;
}

#nice h1 .content {
  position: relative;
  display: inline-block;
}

#nice h1 .content:before,
#nice h1 .content:after {
  content: '';
  position: absolute;
  width: 100px;
  height: 1px;
  background: linear-gradient(90deg, transparent, #8b7355, transparent);
  top: 50%;
}

#nice h1 .content:before {
  right: calc(100% + 20px);
}

#nice h1 .content:after {
  left: calc(100% + 20px);
}

#nice h1:after {
  content: '◯';
  display: block;
  text-align: center;
  color: #8b7355;
  font-size: 20px;
  margin-top: 20px;
  opacity: 0.5;
}

/* 二级标题 - 枯山水 */
#nice h2 {
  font-size: 24px;
  font-weight: 400;
  margin: 56px 0 32px 0;
  color: #2a2a2a;
  position: relative;
  padding: 20px 0;
}

#nice h2 .content {
  position: relative;
  padding-bottom: 12px;
}

#nice h2 .content:after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 60px;
  height: 2px;
  background: #8b7355;
}

#nice h2 .content:before {
  content: '一';
  position: absolute;
  right: 0;
  bottom: -20px;
  color: #8b7355;
  opacity: 0.3;
  font-size: 40px;
  font-weight: 100;
}

/* 三级标题 - 竹节韵律 */
#nice h3 {
  font-size: 18px;
  font-weight: 500;
  margin: 40px 0 20px 0;
  color: #3a3a3a;
  position: relative;
  padding-left: 20px;
}

#nice h3 .content:before {
  content: '｜';
  position: absolute;
  left: 0;
  color: #8b7355;
  font-weight: 300;
}

/* 无序列表 - 茶道印记 */
#nice ul {
  margin: 32px 0;
  padding-left: 0;
  list-style: none;
}

#nice ul li {
  position: relative;
  padding-left: 32px;
  margin: 16px 0;
  color: #4a4a4a;
  line-height: 1.8;
}

#nice ul li:before {
  content: '○';
  position: absolute;
  left: 0;
  color: #8b7355;
  font-size: 12px;
  top: 4px;
  font-weight: 300;
}

/* 有序列表 - 和风序章 */
#nice ol {
  margin: 32px 0;
  padding-left: 0;
  list-style: none;
  counter-reset: wabi-count;
}

#nice ol li {
  position: relative;
  padding-left: 48px;
  margin: 20px 0;
  counter-increment: wabi-count;
  color: #4a4a4a;
}

#nice ol li:before {
  content: "其" counter(wabi-count, cjk-ideographic);
  position: absolute;
  left: 0;
  color: #8b7355;
  font-size: 14px;
  top: 2px;
}

/* 引用 - 禅意留白 */
#nice blockquote {
  margin: 48px 0;
  padding: 32px;
  background: rgba(139, 115, 85, 0.06);
  border-left: 1px solid #8b7355;
  border-right: 1px solid #8b7355;
  position: relative;
}

#nice blockquote:before,
#nice blockquote:after {
  content: '"';
  position: absolute;
  color: #8b7355;
  font-size: 48px;
  opacity: 0.2;
  font-family: serif;
}

#nice blockquote:before {
  top: 0;
  left: 16px;
}

#nice blockquote:after {
  bottom: -20px;
  right: 16px;
  transform: rotate(180deg);
}

#nice blockquote p {
  color: #5a5a5a;
  font-style: italic;
  margin: 12px 0;
  text-align: center;
  font-size: 16px;
}

/* 链接 - 朱印落款 */
#nice a {
  color: #8b4513;
  text-decoration: none;
  position: relative;
  padding: 0 4px;
  transition: all 0.3s;
  font-weight: 500;
}

#nice a:after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: #8b7355;
  transform: scaleX(0);
  transition: transform 0.3s;
}

#nice a:hover:after {
  transform: scaleX(1);
}

#nice a:hover {
  color: #8b7355;
  background: rgba(139, 115, 85, 0.08);
}

/* 加粗 - 浓墨重彩 */
#nice strong {
  font-weight: 600;
  color: #1a1a1a;
  position: relative;
  padding: 2px 8px;
  background: linear-gradient(180deg, transparent 70%, rgba(139, 115, 85, 0.2) 70%);
}

/* 斜体 - 行书飘逸 */
#nice em {
  font-style: italic;
  color: #6a5a4a;
  letter-spacing: 0.5px;
  font-weight: 400;
}

/* 分隔线 - 一期一会 */
#nice hr {
  border: none;
  margin: 64px 0;
  text-align: center;
  position: relative;
  height: 20px;
}

#nice hr:before {
  content: '❋';
  color: #8b7355;
  font-size: 20px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(180deg, #f5f2ed 0%, #ebe7e0 100%);
  padding: 0 20px;
}

#nice hr:after {
  content: '';
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, #8b7355 30%, #8b7355 70%, transparent);
  z-index: -1;
}

/* 图片 - 画轴装裱 */
#nice img {
  max-width: 100%;
  height: auto;
  margin: 48px auto;
  display: block;
  padding: 20px;
  background: #ffffff;
  border: 1px solid #d4c4b0;
  box-shadow: 0 8px 24px rgba(139, 115, 85, 0.1);
  position: relative;
}

/* 行内代码 - 印章标记 */
#nice p code,
#nice li code {
  background: rgba(139, 115, 85, 0.1);
  color: #5a4a3a;
  padding: 2px 8px;
  font-family: 'Courier New', monospace;
  font-size: 13px;
  border-radius: 2px;
  border: 1px solid rgba(139, 115, 85, 0.2);
}

/* 代码块 - 和纸质感 */
#nice pre {
  margin: 48px 0;
  background: rgba(255, 255, 255, 0.6);
  padding: 32px;
  border: 1px solid #d4c4b0;
  position: relative;
  overflow-x: auto;
}

#nice pre:before {
  content: '〈 代码 〉';
  position: absolute;
  top: -12px;
  left: 24px;
  background: linear-gradient(180deg, #f5f2ed 0%, #ebe7e0 100%);
  padding: 0 12px;
  color: #8b7355;
  font-size: 12px;
}

#nice pre code {
  color: #4a4a4a;
  font-family: 'Courier New', monospace;
  font-size: 13px;
  line-height: 1.8;
}

/* 表格 - 素朴格子 */
#nice table {
  width: 100%;
  margin: 48px 0;
  border-collapse: collapse;
  background: rgba(255, 255, 255, 0.8);
}

#nice table tr th,
#nice table tr td {
  padding: 16px 20px;
  text-align: left;
  font-size: 14px;
  border-bottom: 1px solid #d4c4b0;
  color: #4a4a4a;
}

#nice table tr th {
  background: rgba(139, 115, 85, 0.08);
  color: #3a3a3a;
  font-weight: 500;
  font-size: 13px;
  letter-spacing: 0.5px;
  border-bottom: 2px solid #8b7355;
}

#nice table tr:last-child td {
  border-bottom: none;
}`;
