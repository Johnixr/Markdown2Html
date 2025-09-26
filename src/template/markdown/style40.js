export default `/* 黑客帝国 - style-40-matrix-code.css */

/* Style 40: 黑客帝国 - Matrix Code */

/* 全局属性 */
#nice {
  font-family: 'Courier New', 'Monaco', monospace;
  color: #00ff00;
  background: #000000;
  font-size: 15px;
  line-height: 1.75;
  padding: 40px;
  max-width: 900px;
  margin: 0 auto;
  position: relative;
}

#nice:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: repeating-linear-gradient(
    180deg,
    rgba(0, 255, 0, 0.03) 0px,
    transparent 2px,
    transparent 4px
  );
  pointer-events: none;
  z-index: 1;
}

/* 段落 */
#nice p {
  font-size: 15px;
  line-height: 1.8;
  color: #00ff00;
  margin: 18px 0;
  letter-spacing: 0.5px;
  text-shadow: 0 0 5px rgba(0, 255, 0, 0.5);
}

/* 一级标题 - 数字瀑布 */
#nice h1 {
  font-size: 48px;
  font-weight: 700;
  margin: 56px 0 36px 0;
  color: #00ff00;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 8px;
  text-shadow:
    0 0 10px #00ff00,
    0 0 20px #00ff00,
    0 0 30px #00ff00;
  position: relative;
}

#nice h1:before {
  content: '[ SYSTEM INITIALIZED ]';
  display: block;
  font-size: 12px;
  margin-bottom: 16px;
  opacity: 0.6;
  letter-spacing: 4px;
}

/* 二级标题 - 代码流 */
#nice h2 {
  font-size: 28px;
  font-weight: 600;
  margin: 36px 0 24px 0;
  color: #00ff00;
  padding: 14px 28px;
  border: 1px solid #00ff00;
  display: inline-block;
  position: relative;
  background: rgba(0, 255, 0, 0.05);
}

#nice h2:before,
#nice h2:after {
  content: '';
  position: absolute;
  width: 6px;
  height: 6px;
  background: #00ff00;
}

#nice h2:before {
  top: -3px;
  left: -3px;
}

#nice h2:after {
  bottom: -3px;
  right: -3px;
}

/* 三级标题 */
#nice h3 {
  font-size: 20px;
  font-weight: 600;
  margin: 28px 0 16px 0;
  color: #00ff00;
  padding-left: 20px;
  position: relative;
}

#nice h3:before {
  content: '>';
  position: absolute;
  left: 0;
  color: #00ff00;
  animation: blink 1s infinite;
}

/* 引用 - 系统消息 */
#nice blockquote {
  margin: 32px 0;
  padding: 24px;
  background: rgba(0, 255, 0, 0.05);
  border: 1px solid #00ff00;
  font-family: monospace;
  position: relative;
}

#nice blockquote:before {
  content: '[TRANSMISSION]';
  position: absolute;
  top: 4px;
  left: 8px;
  font-size: 10px;
  color: #00ff00;
  opacity: 0.6;
}

#nice blockquote p {
  color: #00ff00;
  margin: 16px 0 8px 0;
}

/* 链接 - 访问节点 */
#nice a {
  color: #00ff00;
  text-decoration: none;
  font-weight: 600;
  padding: 2px 8px;
  border: 1px solid #00ff00;
  background: rgba(0, 255, 0, 0.1);
  transition: all 0.3s;
}

#nice a:hover {
  background: #00ff00;
  color: #000000;
  box-shadow: 0 0 20px #00ff00;
}

/* 加粗 - 高亮代码 */
#nice strong {
  font-weight: 700;
  color: #000000;
  background: #00ff00;
  padding: 2px 8px;
  margin: 0 2px;
  display: inline-block;
}

/* 代码块 - 核心矩阵 */
#nice pre {
  margin: 32px 0;
  background: #0a0a0a;
  color: #00ff00;
  padding: 28px;
  border: 1px solid #00ff00;
  position: relative;
  overflow: hidden;
}

#nice pre:before {
  content: 'MATRIX://CODE';
  position: absolute;
  top: 8px;
  right: 12px;
  color: #00ff00;
  font-size: 10px;
  opacity: 0.5;
}

#nice pre code {
  color: #00ff00;
  font-size: 13px;
  line-height: 1.6;
  text-shadow: 0 0 3px rgba(0, 255, 0, 0.5);
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}`;
