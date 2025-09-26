export default `/* 月光诗篇 - style-81-moonlight-poem.css */

/* Style 81: 月光诗篇 - Moonlight Poem */

/* 全局属性 */
#nice {
  font-family: 'EB Garamond', 'STSong', serif;
  color: #4a5568;
  background: #f7fafc;
  background-image:
    radial-gradient(circle at 70% 30%, rgba(159, 122, 234, 0.05) 0%, transparent 50%),
    linear-gradient(180deg, rgba(203, 213, 224, 0.1) 0%, transparent 100%);
  font-size: 15px;
  line-height: 1.85;
  padding: 80px 56px;
  max-width: 660px;
  margin: 0 auto;
}

/* 段落 */
#nice p {
  font-size: 15px;
  line-height: 1.85;
  color: #64748b;
  margin: 20px 0;
  text-align: justify;
}

/* 一级标题 */
#nice h1 {
  font-size: 34px;
  font-weight: 300;
  margin: 60px 0 40px 0;
  color: #5b21b6;
  text-align: center;
  font-style: italic;
  letter-spacing: 0.05em;
  position: relative;
  padding: 24px 0;
}

#nice h1:before {
  content: '✦';
  display: block;
  font-size: 20px;
  color: #9f7aea;
  margin-bottom: 12px;
}

/* 二级标题 */
#nice h2 {
  font-size: 22px;
  font-weight: 400;
  margin: 36px 0 24px 0;
  color: #6b46c1;
  text-align: center;
  font-style: italic;
}

/* 三级标题 */
#nice h3 {
  font-size: 17px;
  font-weight: 400;
  margin: 24px 0 14px 0;
  color: #7c3aed;
  padding-left: 20px;
  position: relative;
}

#nice h3:before {
  content: '◈';
  position: absolute;
  left: 0;
  color: #a78bfa;
  font-size: 12px;
}

/* 引用 */
#nice blockquote {
  margin: 32px 20px;
  padding: 20px 28px;
  background: linear-gradient(135deg, rgba(159, 122, 234, 0.05), rgba(196, 181, 253, 0.05));
  border-left: 2px solid #9f7aea;
  font-style: italic;
}

#nice blockquote p {
  color: #64748b;
  margin: 8px 0;
  text-align: center;
}

/* 链接 */
#nice a {
  color: #7c3aed;
  text-decoration: none;
  position: relative;
  transition: all 0.3s;
}

#nice a:after {
  content: '';
  position: absolute;
  bottom: -1px;
  left: 0;
  right: 0;
  height: 1px;
  background: #a78bfa;
  opacity: 0;
  transition: opacity 0.3s;
}

#nice a:hover:after {
  opacity: 1;
}

/* 加粗 */
#nice strong {
  font-weight: 600;
  color: #5b21b6;
  background: linear-gradient(180deg, transparent 80%, rgba(159, 122, 234, 0.2) 80%);
}

/* 代码块 */
#nice pre {
  margin: 32px 0;
  background: #1e1b4b;
  color: #c4b5fd;
  padding: 28px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 13px;
  line-height: 1.7;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(91, 33, 182, 0.1);
}`;
