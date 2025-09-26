export default `/* 午夜墨痕 - style-93-midnight-ink.css */

/* Style 93: 午夜墨痕 - Midnight Ink */

/* 全局属性 */
#nice {
  font-family: 'Spectral', 'Georgia', serif;
  color: #e8eaf6;
  background: #1a1b2e;
  background-image:
    radial-gradient(circle at 20% 80%, rgba(63, 81, 181, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(92, 107, 192, 0.1) 0%, transparent 50%);
  font-size: 15px;
  line-height: 1.8;
  padding: 72px 52px;
  max-width: 680px;
  margin: 0 auto;
}

/* 段落 */
#nice p {
  font-size: 15px;
  line-height: 1.8;
  color: #c5cae9;
  margin: 20px 0;
  letter-spacing: 0.02em;
}

/* 一级标题 */
#nice h1 {
  font-size: 38px;
  font-weight: 400;
  margin: 60px 0 40px 0;
  color: #7986cb;
  text-align: center;
  letter-spacing: 0.1em;
  position: relative;
  padding: 24px 0;
}

#nice h1:after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 2px;
  background: linear-gradient(90deg, transparent, #5c6bc0, transparent);
}

/* 二级标题 */
#nice h2 {
  font-size: 24px;
  font-weight: 500;
  margin: 36px 0 24px 0;
  color: #9fa8da;
  padding-bottom: 8px;
  border-bottom: 1px solid #3f51b5;
}

/* 三级标题 */
#nice h3 {
  font-size: 18px;
  font-weight: 500;
  margin: 24px 0 14px 0;
  color: #b3b9e3;
  font-style: italic;
}

/* 引用 */
#nice blockquote {
  margin: 32px 0;
  padding: 20px 28px;
  background: rgba(63, 81, 181, 0.1);
  border-left: 2px solid #5c6bc0;
}

#nice blockquote p {
  color: #c5cae9;
  margin: 8px 0;
  font-style: italic;
}

/* 链接 */
#nice a {
  color: #7986cb;
  text-decoration: none;
  position: relative;
  transition: all 0.3s;
}

#nice a:after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  height: 1px;
  background: #5c6bc0;
  opacity: 0;
  transition: opacity 0.3s;
}

#nice a:hover:after {
  opacity: 1;
}

/* 加粗 */
#nice strong {
  font-weight: 600;
  color: #e8eaf6;
  background: rgba(92, 107, 192, 0.2);
  padding: 2px 8px;
  margin: 0 2px;
  border-radius: 2px;
}

/* 代码块 */
#nice pre {
  margin: 32px 0;
  background: #0f1021;
  color: #9fa8da;
  padding: 28px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 13px;
  line-height: 1.7;
  border: 1px solid #3f51b5;
}`;
