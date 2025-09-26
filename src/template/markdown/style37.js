export default `/* 霜降冰晶 - style-37-frost-crystal.css */

/* Style 37: 霜降冰晶 - Frost Crystal */

/* 全局属性 */
#nice {
  font-family: 'Helvetica Neue', 'Arial', sans-serif;
  color: #4a5568;
  background: linear-gradient(180deg, #ffffff 0%, #f0f4f8 100%);
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

/* 一级标题 - 冰晶形成 */
#nice h1 {
  font-size: 44px;
  font-weight: 300;
  margin: 56px 0 36px 0;
  background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 6px;
  padding: 36px 0;
  position: relative;
}

#nice h1:after {
  content: '❄ ❄ ❄';
  display: block;
  font-size: 20px;
  margin-top: 16px;
  color: #a8edea;
  opacity: 0.5;
  letter-spacing: 20px;
}

/* 二级标题 - 霜花绽放 */
#nice h2 {
  font-size: 28px;
  font-weight: 400;
  margin: 36px 0 24px 0;
  color: #718096;
  padding: 14px 28px;
  background: rgba(168, 237, 234, 0.1);
  border: 1px solid #a8edea;
  display: inline-block;
  position: relative;
}

#nice h2:before,
#nice h2:after {
  content: '';
  position: absolute;
  width: 8px;
  height: 8px;
  background: #fed6e3;
  transform: rotate(45deg);
}

#nice h2:before {
  top: -4px;
  left: -4px;
}

#nice h2:after {
  bottom: -4px;
  right: -4px;
}

/* 三级标题 */
#nice h3 {
  font-size: 20px;
  font-weight: 500;
  margin: 28px 0 16px 0;
  color: #718096;
  padding-bottom: 8px;
  background: linear-gradient(90deg, #a8edea 0%, transparent 100%);
  background-size: 100% 1px;
  background-position: bottom;
  background-repeat: no-repeat;
}

/* 引用 - 晨霜诗意 */
#nice blockquote {
  margin: 32px 0;
  padding: 24px;
  background: linear-gradient(135deg, rgba(168, 237, 234, 0.05) 0%, rgba(254, 214, 227, 0.05) 100%);
  border-left: 2px solid #a8edea;
  border-right: 2px solid #fed6e3;
  position: relative;
}

#nice blockquote p {
  color: #4a5568;
  font-style: italic;
  margin: 8px 0;
}

/* 链接 - 清透连接 */
#nice a {
  color: #4299e1;
  text-decoration: none;
  font-weight: 500;
  padding: 2px 6px;
  background: linear-gradient(180deg, transparent 70%, rgba(168, 237, 234, 0.3) 70%);
  transition: all 0.3s;
}

#nice a:hover {
  background: rgba(168, 237, 234, 0.2);
  border-radius: 4px;
}

/* 加粗 - 晶莹剔透 */
#nice strong {
  font-weight: 600;
  color: #2d3748;
  background: linear-gradient(135deg, rgba(168, 237, 234, 0.3), rgba(254, 214, 227, 0.3));
  padding: 3px 10px;
  margin: 0 2px;
  border-radius: 20px;
  display: inline-block;
}

/* 代码块 - 冰层覆盖 */
#nice pre {
  margin: 32px 0;
  background: linear-gradient(135deg, #f7fafc, #edf2f7);
  color: #2d3748;
  padding: 28px;
  border: 1px solid #cbd5e0;
  border-radius: 8px;
  position: relative;
}

#nice pre code {
  color: #2d3748;
  font-family: 'Monaco', monospace;
  font-size: 13px;
  line-height: 1.6;
}`;
