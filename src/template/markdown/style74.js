export default `/* 墨韵东方 - style-74-ink-oriental.css */

/* Style 74: 墨韵东方 - Oriental Ink */

/* 全局属性 */
#nice {
  font-family: 'Songti SC', 'Noto Serif CJK SC', serif;
  color: #2c2c2c;
  background: #f9f8f5;
  background-image:
    radial-gradient(circle at 20% 50%, rgba(0, 0, 0, 0.02) 1px, transparent 1px),
    radial-gradient(circle at 80% 50%, rgba(0, 0, 0, 0.02) 1px, transparent 1px);
  background-size: 100px 100px;
  font-size: 15px;
  line-height: 1.8;
  padding: 80px 56px;
  max-width: 680px;
  margin: 0 auto;
}

/* 段落 */
#nice p {
  font-size: 15px;
  line-height: 1.8;
  color: #3a3a3a;
  margin: 20px 0;
  text-align: justify;
  text-indent: 2em;
}

/* 一级标题 */
#nice h1 {
  font-size: 32px;
  font-weight: 400;
  margin: 60px 0 40px 0;
  color: #1a1a1a;
  text-align: center;
  position: relative;
  padding: 24px 0;
}

#nice h1:before,
#nice h1:after {
  content: '〡';
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  color: #999;
  font-weight: 100;
}

#nice h1:before {
  left: -40px;
}

#nice h1:after {
  right: -40px;
}

/* 二级标题 */
#nice h2 {
  font-size: 22px;
  font-weight: 500;
  margin: 36px 0 24px 0;
  color: #2c2c2c;
  padding-left: 16px;
  position: relative;
}

#nice h2:before {
  content: '◉';
  position: absolute;
  left: 0;
  color: #666;
  font-size: 12px;
}

/* 三级标题 */
#nice h3 {
  font-size: 17px;
  font-weight: 400;
  margin: 24px 0 14px 0;
  color: #4a4a4a;
  padding-bottom: 6px;
  border-bottom: 1px dotted #d0d0d0;
}

/* 引用 */
#nice blockquote {
  margin: 32px 0;
  padding: 20px 24px;
  background: #ffffff;
  border-left: 1px solid #999;
  border-right: 1px solid #999;
  position: relative;
}

#nice blockquote:before {
  content: '「';
  position: absolute;
  left: 8px;
  top: 8px;
  font-size: 20px;
  color: #999;
}

#nice blockquote:after {
  content: '」';
  position: absolute;
  right: 8px;
  bottom: 8px;
  font-size: 20px;
  color: #999;
}

#nice blockquote p {
  color: #4a4a4a;
  margin: 8px 0;
  text-indent: 0;
  font-style: italic;
}

/* 链接 */
#nice a {
  color: #2c2c2c;
  text-decoration: none;
  padding-bottom: 1px;
  border-bottom: 1px solid #999;
  transition: all 0.3s;
}

#nice a:hover {
  border-bottom-width: 2px;
}

/* 加粗 */
#nice strong {
  font-weight: 600;
  color: #1a1a1a;
  padding: 0 4px;
  position: relative;
}

#nice strong:after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 8px;
  background: rgba(0, 0, 0, 0.08);
  z-index: -1;
}

/* 代码块 */
#nice pre {
  margin: 32px 0;
  background: #2c2c2c;
  color: #e0e0e0;
  padding: 28px;
  font-family: 'STKaiti', 'KaiTi', monospace;
  font-size: 13px;
  line-height: 1.7;
  border-radius: 2px;
}`;
