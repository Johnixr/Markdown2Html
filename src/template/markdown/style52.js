export default `/* 电路板科技 - style-52-circuit-board.css */

/* Style 52: 电路板科技 - Circuit Board Technology */

/* 全局属性 */
#nice {
  font-family: 'Roboto Mono', 'Courier New', monospace;
  color: #00ff00;
  background: linear-gradient(180deg, #0a0a0a 0%, #1a1a1a 100%);
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
  background-image:
    repeating-linear-gradient(0deg,
      transparent,
      transparent 20px,
      rgba(0, 255, 0, 0.02) 20px,
      rgba(0, 255, 0, 0.02) 21px),
    repeating-linear-gradient(90deg,
      transparent,
      transparent 20px,
      rgba(0, 255, 0, 0.02) 20px,
      rgba(0, 255, 0, 0.02) 21px);
  pointer-events: none;
}

/* 段落 */
#nice p {
  font-size: 15px;
  line-height: 1.8;
  color: #00cc00;
  margin: 18px 0;
  letter-spacing: 0.3px;
  position: relative;
}

/* 一级标题 - CPU核心 */
#nice h1 {
  font-size: 48px;
  font-weight: 900;
  margin: 56px 0 36px 0;
  color: #00ff00;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 8px;
  position: relative;
  padding: 32px;
  border: 2px solid #00ff00;
  background:
    repeating-linear-gradient(90deg,
      transparent,
      transparent 10px,
      rgba(0, 255, 0, 0.1) 10px,
      rgba(0, 255, 0, 0.1) 11px);
}

#nice h1:before,
#nice h1:after {
  content: '◆';
  position: absolute;
  color: #00ff00;
  font-size: 20px;
  background: #0a0a0a;
  padding: 0 8px;
}

#nice h1:before {
  top: -12px;
  left: 20px;
}

#nice h1:after {
  bottom: -12px;
  right: 20px;
}

/* 二级标题 - 电路节点 */
#nice h2 {
  font-size: 28px;
  font-weight: 700;
  margin: 36px 0 24px 0;
  color: #0a0a0a;
  background: #00ff00;
  padding: 12px 28px;
  display: inline-block;
  position: relative;
  clip-path: polygon(8px 0, 100% 0, calc(100% - 8px) 100%, 0 100%);
}

#nice h2:before {
  content: '>';
  position: absolute;
  left: -20px;
  color: #00ff00;
}

#nice h2:after {
  content: '_';
  animation: blink 1s infinite;
  margin-left: 4px;
}

@keyframes blink {
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
}

/* 三级标题 */
#nice h3 {
  font-size: 20px;
  font-weight: 600;
  margin: 28px 0 16px 0;
  color: #00ff00;
  padding: 8px 16px;
  border: 1px solid #00ff00;
  border-left: 8px solid #00ff00;
  background: rgba(0, 255, 0, 0.05);
  font-family: 'Roboto Mono', monospace;
}

/* 引用 - 数据流 */
#nice blockquote {
  margin: 32px 0;
  padding: 24px;
  background: rgba(0, 255, 0, 0.05);
  border: 1px solid #00ff00;
  border-left: 4px solid #00ff00;
  position: relative;
  font-family: 'Courier New', monospace;
}

#nice blockquote:before {
  content: '// SYSTEM LOG';
  position: absolute;
  top: 8px;
  left: 24px;
  color: #00ff00;
  font-size: 10px;
  opacity: 0.6;
}

#nice blockquote p {
  color: #00cc00;
  margin: 8px 0;
  padding-left: 20px;
}

/* 链接 - 电路连接 */
#nice a {
  color: #00ff00;
  text-decoration: none;
  font-weight: 600;
  padding: 2px 8px;
  border: 1px solid #00ff00;
  background: rgba(0, 255, 0, 0.1);
  transition: all 0.2s;
  display: inline-block;
  position: relative;
}

#nice a:hover {
  background: #00ff00;
  color: #0a0a0a;
  box-shadow: 0 0 10px #00ff00;
}

/* 加粗 - 高压节点 */
#nice strong {
  font-weight: 700;
  color: #0a0a0a;
  background: #00ff00;
  padding: 3px 10px;
  margin: 0 2px;
  display: inline-block;
  position: relative;
  box-shadow: 0 0 8px #00ff00;
}

#nice strong:before,
#nice strong:after {
  content: '[';
  color: #00ff00;
  position: absolute;
}

#nice strong:before {
  left: -6px;
}

#nice strong:after {
  content: ']';
  right: -6px;
}

/* 代码块 - 主板 */
#nice pre {
  margin: 32px 0;
  background: #0a0a0a;
  color: #00ff00;
  padding: 28px;
  border: 2px solid #00ff00;
  position: relative;
  font-family: 'Roboto Mono', monospace;
  box-shadow:
    inset 0 0 20px rgba(0, 255, 0, 0.1),
    0 0 20px rgba(0, 255, 0, 0.2);
}

#nice pre:before {
  content: 'BOOT SEQUENCE INITIALIZED';
  position: absolute;
  top: 8px;
  left: 12px;
  color: #00ff00;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 1px;
  opacity: 0.8;
}

#nice pre:after {
  content: 'OK';
  position: absolute;
  bottom: 8px;
  right: 12px;
  color: #00ff00;
  font-size: 10px;
  padding: 2px 8px;
  border: 1px solid #00ff00;
}

#nice pre code {
  color: #00ff00;
  font-family: 'Roboto Mono', monospace;
  font-size: 13px;
  line-height: 1.6;
}`;
