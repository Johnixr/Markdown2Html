export default `/* 粗野主义建筑 - style-12-brutalism-architecture.css */

/* Style 12: 粗野主义建筑 - Brutalism Architecture */

/* 全局属性 - 混凝土质感 */
#nice {
  font-family: 'Impact', 'Bebas Neue', 'Arial Black', sans-serif;
  color: #2a2a2a;
  background: #d4d4d4;
  font-size: 14px;
  line-height: 1.5;
  padding: 0;
  max-width: 100%;
  margin: 0;
  position: relative;
}

#nice:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image:
    repeating-linear-gradient(0deg, rgba(0,0,0,0.03) 0px, transparent 1px, transparent 2px, rgba(0,0,0,0.03) 3px),
    repeating-linear-gradient(90deg, rgba(0,0,0,0.03) 0px, transparent 1px, transparent 2px, rgba(0,0,0,0.03) 3px);
  z-index: -1;
}

/* 段落 - 块状布局 */
#nice p {
  font-size: 14px;
  line-height: 1.6;
  color: #2a2a2a;
  margin: 20px 0;
  padding: 0 40px;
  font-family: 'Arial', sans-serif;
  font-weight: 400;
}

/* 一级标题 - 巨型体块 */
#nice h1 {
  font-size: 72px;
  font-weight: 900;
  margin: 0;
  padding: 60px 40px;
  background: #3a3a3a;
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: -4px;
  position: relative;
  box-shadow: inset 0 -20px 0 #1a1a1a;
}

#nice h1 .content {
  display: block;
  position: relative;
  z-index: 1;
  text-shadow: 8px 8px 0 rgba(0,0,0,0.5);
}

#nice h1:after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 20px;
  background: repeating-linear-gradient(
    90deg,
    #ff4444 0,
    #ff4444 20px,
    #3a3a3a 20px,
    #3a3a3a 40px
  );
}

/* 二级标题 - 悬臂结构 */
#nice h2 {
  font-size: 48px;
  font-weight: 800;
  margin: 0;
  padding: 32px 40px 32px 80px;
  background: #6a6a6a;
  color: #ffffff;
  text-transform: uppercase;
  position: relative;
  margin-left: -40px;
  box-shadow: 12px 12px 0 #3a3a3a;
}

#nice h2 .content {
  display: block;
}

#nice h2:before {
  content: '';
  position: absolute;
  left: 40px;
  top: 50%;
  transform: translateY(-50%);
  width: 20px;
  height: 60%;
  background: #ff4444;
}

/* 三级标题 - 凹凸表面 */
#nice h3 {
  font-size: 28px;
  font-weight: 700;
  margin: 0;
  padding: 20px 40px;
  background: #b0b0b0;
  color: #1a1a1a;
  text-transform: uppercase;
  border-left: 12px solid #ff4444;
  letter-spacing: 1px;
  box-shadow: inset 4px 4px 0 rgba(0,0,0,0.1);
}

#nice h3 .content {
  display: block;
}

/* 无序列表 - 混凝土模块 */
#nice ul {
  margin: 0;
  padding: 32px 40px 32px 60px;
  list-style: none;
  background: #c8c8c8;
  border-left: 8px solid #5a5a5a;
}

#nice ul li {
  position: relative;
  padding-left: 32px;
  margin: 16px 0;
  color: #2a2a2a;
  font-family: 'Arial', sans-serif;
  font-weight: 500;
}

#nice ul li:before {
  content: '';
  position: absolute;
  left: 0;
  top: 6px;
  width: 16px;
  height: 16px;
  background: #ff4444;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
}

/* 有序列表 - 层级台阶 */
#nice ol {
  margin: 0;
  padding: 32px 40px;
  list-style: none;
  counter-reset: brutal-count;
  background: linear-gradient(180deg, #d4d4d4 0%, #b8b8b8 100%);
}

#nice ol li {
  position: relative;
  padding: 12px 20px 12px 60px;
  margin: 8px 0;
  counter-increment: brutal-count;
  background: #e8e8e8;
  border-left: 4px solid #3a3a3a;
  font-family: 'Arial', sans-serif;
  box-shadow: 4px 4px 0 rgba(0,0,0,0.1);
}

#nice ol li:before {
  content: counter(brutal-count, decimal-leading-zero);
  position: absolute;
  left: 8px;
  top: 50%;
  transform: translateY(-50%);
  color: #ff4444;
  font-size: 24px;
  font-weight: 900;
}

/* 引用 - 深陷凹槽 */
#nice blockquote {
  margin: 0;
  padding: 40px;
  background: #2a2a2a;
  color: #e8e8e8;
  position: relative;
  box-shadow: inset 8px 8px 16px rgba(0,0,0,0.5);
  border-top: 8px solid #ff4444;
  border-bottom: 8px solid #ff4444;
}

#nice blockquote p {
  color: #e8e8e8;
  font-size: 18px;
  line-height: 1.6;
  margin: 16px 0;
  padding: 0;
  border: none;
  background: none;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 1px;
}

/* 链接 - 工业按钮 */
#nice a {
  color: #ffffff;
  text-decoration: none;
  font-weight: 700;
  padding: 8px 16px;
  background: #ff4444;
  display: inline-block;
  text-transform: uppercase;
  margin: 0 4px;
  position: relative;
  box-shadow: 4px 4px 0 #3a3a3a;
  transition: all 0.1s;
  font-size: 12px;
  letter-spacing: 1px;
}

#nice a:hover {
  transform: translate(2px, 2px);
  box-shadow: 2px 2px 0 #3a3a3a;
}

#nice a:active {
  transform: translate(4px, 4px);
  box-shadow: none;
}

/* 加粗 - 钢筋强化 */
#nice strong {
  font-weight: 900;
  color: #ffffff;
  background: #1a1a1a;
  padding: 4px 12px;
  margin: 0 4px;
  display: inline-block;
  text-transform: uppercase;
  letter-spacing: 1px;
  box-shadow: 4px 4px 0 #ff4444;
}

/* 斜体 - 倾斜切面 */
#nice em {
  font-style: normal;
  color: #ff4444;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  background: rgba(255, 68, 68, 0.1);
  padding: 2px 6px;
  transform: skewX(-10deg);
  display: inline-block;
}

/* 分隔线 - 结构断层 */
#nice hr {
  border: none;
  height: 40px;
  margin: 0;
  background: repeating-linear-gradient(
    90deg,
    #3a3a3a 0,
    #3a3a3a 40px,
    #ff4444 40px,
    #ff4444 60px,
    #6a6a6a 60px,
    #6a6a6a 100px
  );
  position: relative;
  box-shadow: 0 8px 16px rgba(0,0,0,0.3);
}

/* 图片 - 粗糙框体 */
#nice img {
  max-width: calc(100% - 80px);
  height: auto;
  margin: 40px;
  display: block;
  border: 16px solid #3a3a3a;
  box-shadow:
    16px 16px 0 #6a6a6a,
    32px 32px 0 #9a9a9a;
  background: #ffffff;
}

/* 代码块 - 工业终端 */
#nice pre {
  margin: 0;
  background: #1a1a1a;
  color: #00ff00;
  padding: 40px;
  font-family: 'Courier New', monospace;
  position: relative;
  border-left: 20px solid #ff4444;
  box-shadow: inset 0 0 40px rgba(0,0,0,0.5);
}

#nice pre:before {
  content: 'TERMINAL';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  background: #ff4444;
  color: #ffffff;
  padding: 8px 40px;
  font-size: 14px;
  font-weight: 900;
  letter-spacing: 2px;
  text-transform: uppercase;
}

#nice pre code {
  color: #00ff00;
  font-size: 14px;
  line-height: 1.5;
  display: block;
  margin-top: 20px;
  font-weight: 600;
}

/* 表格 - 钢架结构 */
#nice table {
  width: 100%;
  margin: 0;
  border-collapse: separate;
  border-spacing: 0;
  background: #b8b8b8;
  border: 4px solid #3a3a3a;
}

#nice table tr th,
#nice table tr td {
  padding: 16px 24px;
  text-align: left;
  font-size: 14px;
  border-right: 4px solid #3a3a3a;
  border-bottom: 4px solid #3a3a3a;
  font-family: 'Arial', sans-serif;
}

#nice table tr th {
  background: #5a5a5a;
  color: #ffffff;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 16px;
}

#nice table tr td {
  background: #e8e8e8;
  font-weight: 500;
}

#nice table tr:nth-child(even) td {
  background: #d4d4d4;
}

#nice table tr th:last-child,
#nice table tr td:last-child {
  border-right: none;
}`;
