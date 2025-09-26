export default `/* 包豪斯工业美学 - style-7-bauhaus-industrial.css */

/* Style 7: 包豪斯工业美学 - Bauhaus Industrial Aesthetics */

/* 全局属性 - 功能主义 */
#nice {
  font-family: 'DIN', 'Futura', 'Helvetica Neue', sans-serif;
  color: #2c2c2c;
  background: #e8e8e8;
  font-size: 14px;
  line-height: 1.618;
  padding: 60px 40px;
  max-width: 840px;
  margin: 0 auto;
}

/* 段落 - 理性排版 */
#nice p {
  font-size: 14px;
  line-height: 22px;
  color: #2c2c2c;
  margin: 22px 0;
  text-align: left;
}

/* 一级标题 - 几何构成 */
#nice h1 {
  font-size: 56px;
  font-weight: 900;
  margin: 66px 0 44px 0;
  position: relative;
  color: #ffffff;
  background: #1e1e1e;
  padding: 44px;
  letter-spacing: -1px;
}

#nice h1 .content {
  display: flex;
  align-items: center;
}

#nice h1 .content:before {
  content: '';
  width: 0;
  height: 0;
  border-left: 32px solid #f39000;
  border-top: 32px solid transparent;
  border-bottom: 32px solid transparent;
  margin-right: 22px;
}

#nice h1 .content:after {
  content: '';
  width: 44px;
  height: 44px;
  background: #005caa;
  border-radius: 50%;
  margin-left: auto;
}

/* 二级标题 - 色块组合 */
#nice h2 {
  font-size: 32px;
  font-weight: 700;
  margin: 44px 0 22px 0;
  color: #1e1e1e;
  position: relative;
  padding: 16px 0;
}

#nice h2 .content {
  position: relative;
  padding-left: 66px;
}

#nice h2 .content:before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 44px;
  height: 44px;
  background: #e30613;
  clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
}

/* 三级标题 - 线条系统 */
#nice h3 {
  font-size: 22px;
  font-weight: 600;
  margin: 33px 0 16px 0;
  color: #1e1e1e;
  position: relative;
  padding: 11px 0;
  border-bottom: 3px solid #1e1e1e;
  border-top: 1px solid #1e1e1e;
}

#nice h3 .content {
  text-transform: uppercase;
  letter-spacing: 2px;
}

/* 无序列表 - 圆形元素 */
#nice ul {
  margin: 22px 0;
  padding-left: 0;
  list-style: none;
}

#nice ul li {
  position: relative;
  padding-left: 44px;
  margin: 11px 0;
  color: #2c2c2c;
  min-height: 22px;
  display: flex;
  align-items: center;
}

#nice ul li:before {
  content: '';
  position: absolute;
  left: 11px;
  width: 11px;
  height: 11px;
  background: #e30613;
  border-radius: 50%;
}

#nice ul li:after {
  content: '';
  position: absolute;
  left: 17px;
  width: 11px;
  height: 11px;
  background: #005caa;
  border-radius: 50%;
  opacity: 0.6;
}

/* 有序列表 - 方形序号 */
#nice ol {
  margin: 22px 0;
  padding-left: 0;
  list-style: none;
  counter-reset: bauhaus-count;
}

#nice ol li {
  position: relative;
  padding-left: 55px;
  margin: 14px 0;
  counter-increment: bauhaus-count;
  min-height: 33px;
  display: flex;
  align-items: center;
}

#nice ol li:before {
  content: counter(bauhaus-count);
  position: absolute;
  left: 0;
  width: 33px;
  height: 33px;
  background: #1e1e1e;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 16px;
}

/* 引用 - 构成主义 */
#nice blockquote {
  margin: 44px 0;
  padding: 22px 33px;
  background: linear-gradient(
    90deg,
    #e30613 0,
    #e30613 11px,
    #f39000 11px,
    #f39000 22px,
    #005caa 22px,
    #005caa 33px,
    transparent 33px
  );
  position: relative;
}

#nice blockquote p {
  color: #1e1e1e;
  font-size: 16px;
  line-height: 26px;
  margin: 11px 0;
  padding-left: 11px;
  font-weight: 500;
}

/* 链接 - 功能色标 */
#nice a {
  color: #005caa;
  text-decoration: none;
  font-weight: 600;
  position: relative;
  padding: 2px 0;
  border-bottom: 2px solid #f39000;
  transition: all 0.3s;
}

#nice a:hover {
  color: #e30613;
  border-bottom-color: #e30613;
  border-bottom-width: 4px;
}

/* 加粗 - 黑色方块 */
#nice strong {
  font-weight: 800;
  color: #ffffff;
  background: #1e1e1e;
  padding: 3px 11px;
  margin: 0 3px;
  display: inline-block;
  position: relative;
}

#nice strong:after {
  content: '';
  position: absolute;
  bottom: -3px;
  left: 3px;
  right: -3px;
  height: 3px;
  background: #e30613;
}

/* 斜体 - 倾斜线条 */
#nice em {
  font-style: normal;
  color: #e30613;
  font-weight: 500;
  position: relative;
  padding: 0 6px;
}

#nice em:after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 11px;
  background: linear-gradient(
    135deg,
    transparent 40%,
    #f39000 40%,
    #f39000 60%,
    transparent 60%
  );
  opacity: 0.3;
}

/* 分隔线 - 三原色 */
#nice hr {
  border: none;
  height: 11px;
  margin: 44px 0;
  background: linear-gradient(
    90deg,
    #e30613 0%,
    #e30613 33.33%,
    #f39000 33.33%,
    #f39000 66.66%,
    #005caa 66.66%,
    #005caa 100%
  );
}

/* 图片 - 框架结构 */
#nice img {
  max-width: 100%;
  height: auto;
  margin: 44px 0;
  display: block;
  border: 11px solid #1e1e1e;
  padding: 11px;
  background: #ffffff;
  position: relative;
}

/* 行内代码 - 技术标签 */
#nice p code,
#nice li code {
  background: #1e1e1e;
  color: #f39000;
  padding: 2px 8px;
  font-family: 'DIN Mono', 'Courier New', monospace;
  font-size: 13px;
  font-weight: 500;
  border-left: 3px solid #e30613;
}

/* 代码块 - 工业终端 */
#nice pre {
  margin: 44px 0;
  background: #1e1e1e;
  padding: 33px;
  position: relative;
  border-left: 11px solid #005caa;
}

#nice pre:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 22px;
  background: linear-gradient(
    90deg,
    #e30613 0,
    #e30613 33.33%,
    #f39000 33.33%,
    #f39000 66.66%,
    #005caa 66.66%
  );
}

#nice pre code {
  color: #e8e8e8;
  font-family: 'DIN Mono', 'Courier New', monospace;
  font-size: 13px;
  line-height: 22px;
  display: block;
  margin-top: 11px;
}

/* 表格 - 网格系统 */
#nice table {
  width: 100%;
  margin: 44px 0;
  border-collapse: collapse;
  background: #ffffff;
  border: 3px solid #1e1e1e;
}

#nice table tr th,
#nice table tr td {
  padding: 11px 16px;
  text-align: left;
  font-size: 14px;
  border: 1px solid #1e1e1e;
}

#nice table tr th {
  background: #1e1e1e;
  color: #ffffff;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 12px;
}

#nice table tr:nth-child(2n) td {
  background: #f5f5f5;
}

#nice table tr:nth-child(4n) td {
  background: rgba(227, 6, 19, 0.05);
}`;
