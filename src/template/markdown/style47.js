export default `/* 荧光标记笔 - style-47-highlighter-marker.css */

/* Style 47: 荧光标记笔 - Highlighter Marker */

/* 全局属性 */
#nice {
  font-family: 'Helvetica Neue', 'Arial', sans-serif;
  color: #2c3e50;
  background: linear-gradient(180deg, #ffffff 0%, #f8f9fa 100%);
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
  letter-spacing: 0.3px;
}

/* 一级标题 - 荧光黄划线 */
#nice h1 {
  font-size: 46px;
  font-weight: 900;
  margin: 56px 0 36px 0;
  color: #2c3e50;
  display: inline-block;
  position: relative;
  text-transform: uppercase;
  letter-spacing: 2px;
}

#nice h1:after {
  content: '';
  position: absolute;
  bottom: 8px;
  left: -8px;
  right: -8px;
  height: 20px;
  background: #ffff00;
  opacity: 0.6;
  z-index: -1;
  transform: skew(-3deg);
}

/* 二级标题 - 荧光粉标记 */
#nice h2 {
  font-size: 30px;
  font-weight: 700;
  margin: 36px 0 24px 0;
  color: #2c3e50;
  display: inline-block;
  position: relative;
  padding: 8px 0;
}

#nice h2:after {
  content: '';
  position: absolute;
  bottom: 4px;
  left: 0;
  right: 0;
  height: 14px;
  background: #ff69b4;
  opacity: 0.5;
  z-index: -1;
}

/* 三级标题 - 荧光绿标记 */
#nice h3 {
  font-size: 20px;
  font-weight: 600;
  margin: 28px 0 16px 0;
  color: #2c3e50;
  display: inline-block;
  position: relative;
  padding: 6px 0;
}

#nice h3:after {
  content: '';
  position: absolute;
  bottom: 2px;
  left: 0;
  right: 0;
  height: 10px;
  background: #39ff14;
  opacity: 0.5;
  z-index: -1;
}

/* 引用 - 橙色侧边标记 */
#nice blockquote {
  margin: 32px 0;
  padding: 24px 24px 24px 36px;
  background: #f8f9fa;
  border-left: 8px solid #ff9500;
  position: relative;
}

#nice blockquote:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 36px;
  background: #ff9500;
  opacity: 0.2;
}

#nice blockquote p {
  color: #34495e;
  margin: 8px 0;
  position: relative;
  z-index: 1;
}

/* 链接 - 蓝色荧光笔 */
#nice a {
  color: #2c3e50;
  text-decoration: none;
  font-weight: 600;
  position: relative;
  padding: 2px 4px;
}

#nice a:after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 8px;
  background: #00ffff;
  opacity: 0.4;
  z-index: -1;
  transition: all 0.3s;
}

#nice a:hover:after {
  height: 100%;
  opacity: 0.3;
}

/* 加粗 - 黄色荧光满涂 */
#nice strong {
  font-weight: 700;
  color: #2c3e50;
  background: linear-gradient(180deg, transparent 40%, #ffff00 40%, #ffff00 85%, transparent 85%);
  padding: 2px 6px;
  margin: 0 2px;
}

/* 代码块 - 紫色荧光框 */
#nice pre {
  margin: 32px 0;
  background: #2c3e50;
  color: #ecf0f1;
  padding: 28px;
  border: 3px solid #9b59b6;
  position: relative;
  box-shadow: 0 0 20px rgba(155, 89, 182, 0.3);
}

#nice pre:before {
  content: 'HIGHLIGHTED CODE';
  position: absolute;
  top: -14px;
  left: 20px;
  background: #9b59b6;
  color: #ffffff;
  padding: 2px 12px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 1px;
}

#nice pre code {
  color: #ecf0f1;
  font-family: 'Monaco', monospace;
  font-size: 13px;
  line-height: 1.6;
}`;
