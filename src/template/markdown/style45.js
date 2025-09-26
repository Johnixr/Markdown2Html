export default `/* 热力图数据 - style-45-heatmap-data.css */

/* Style 45: 热力图数据 - Heatmap Data Visualization */

/* 全局属性 */
#nice {
  font-family: 'SF Pro Display', 'Arial', sans-serif;
  color: #2d3748;
  background: linear-gradient(180deg, #f7fafc 0%, #edf2f7 100%);
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
  color: #4a5568;
  margin: 18px 0;
  letter-spacing: 0.3px;
}

/* 一级标题 - 热度峰值 */
#nice h1 {
  font-size: 44px;
  font-weight: 800;
  margin: 56px 0 36px 0;
  background: linear-gradient(90deg,
    #313695 0%, #4575b4 15%, #74add1 30%,
    #abd9e9 45%, #fee090 60%, #fdae61 75%,
    #f46d43 90%, #d73027 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 3px;
}

/* 二级标题 - 数据网格 */
#nice h2 {
  font-size: 28px;
  font-weight: 700;
  margin: 36px 0 24px 0;
  color: #ffffff;
  background: linear-gradient(135deg, #f46d43, #d73027);
  padding: 14px 28px;
  display: inline-block;
  position: relative;
}

#nice h2:after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 0;
  right: 0;
  height: 4px;
  background: repeating-linear-gradient(
    90deg,
    #313695 0px,
    #313695 10px,
    transparent 10px,
    transparent 20px
  );
}

/* 三级标题 */
#nice h3 {
  font-size: 20px;
  font-weight: 600;
  margin: 28px 0 16px 0;
  color: #4575b4;
  padding: 8px 16px;
  background: rgba(69, 117, 180, 0.1);
  border-left: 4px solid #4575b4;
}

/* 引用 - 数据洞察 */
#nice blockquote {
  margin: 32px 0;
  padding: 24px;
  background: linear-gradient(135deg,
    rgba(49, 54, 149, 0.05) 0%,
    rgba(215, 48, 39, 0.05) 100%);
  border: 1px solid #74add1;
  position: relative;
}

#nice blockquote:before {
  content: 'DATA INSIGHT';
  position: absolute;
  top: -10px;
  left: 20px;
  background: #f7fafc;
  color: #f46d43;
  padding: 0 12px;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 2px;
}

#nice blockquote p {
  color: #4a5568;
  margin: 8px 0;
}

/* 链接 - 冷色调节点 */
#nice a {
  color: #313695;
  text-decoration: none;
  font-weight: 600;
  padding: 2px 8px;
  background: rgba(49, 54, 149, 0.1);
  border-radius: 4px;
  transition: all 0.3s;
}

#nice a:hover {
  background: #313695;
  color: #ffffff;
}

/* 加粗 - 热点标记 */
#nice strong {
  font-weight: 700;
  color: #ffffff;
  background: linear-gradient(135deg, #f46d43, #fdae61);
  padding: 3px 10px;
  margin: 0 2px;
  border-radius: 4px;
  display: inline-block;
}

/* 代码块 - 数据矩阵 */
#nice pre {
  margin: 32px 0;
  background: #1a202c;
  color: #fee090;
  padding: 28px;
  border: 1px solid #4575b4;
  position: relative;
}

#nice pre:before {
  content: 'MATRIX VIEW';
  position: absolute;
  top: 8px;
  right: 12px;
  color: #74add1;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 1px;
}

#nice pre code {
  color: #fee090;
  font-family: 'Monaco', monospace;
  font-size: 13px;
  line-height: 1.6;
}`;
