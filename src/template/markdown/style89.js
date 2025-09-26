export default `/* 复古书房 - style-89-vintage-library.css */

/* Style 89: 复古书房 - Vintage Library */

/* 全局属性 */
#nice {
  font-family: 'Cormorant Garamond', 'Georgia', serif;
  color: #3a342c;
  background: #faf8f4;
  background-image:
    linear-gradient(90deg, rgba(139, 110, 69, 0.02) 1px, transparent 1px),
    linear-gradient(rgba(139, 110, 69, 0.02) 1px, transparent 1px);
  background-size: 40px 40px;
  font-size: 15px;
  line-height: 1.8;
  padding: 72px 56px;
  max-width: 680px;
  margin: 0 auto;
}

/* 段落 */
#nice p {
  font-size: 15px;
  line-height: 1.8;
  color: #4a4035;
  margin: 20px 0;
  text-indent: 2em;
}

/* 一级标题 */
#nice h1 {
  font-size: 38px;
  font-weight: 400;
  margin: 56px 0 36px 0;
  color: #6b4e3d;
  text-align: center;
  font-variant: small-caps;
  letter-spacing: 0.1em;
  padding: 24px 0;
  border-top: 2px solid #8b6e45;
  border-bottom: 2px solid #8b6e45;
}

/* 二级标题 */
#nice h2 {
  font-size: 24px;
  font-weight: 500;
  margin: 36px 0 24px 0;
  color: #8b6e45;
  position: relative;
  padding-left: 32px;
}

#nice h2:before {
  content: '§';
  position: absolute;
  left: 0;
  font-size: 28px;
  color: #a08560;
}

/* 三级标题 */
#nice h3 {
  font-size: 18px;
  font-weight: 500;
  margin: 24px 0 14px 0;
  color: #6b5a47;
  font-style: italic;
  text-decoration: underline;
  text-decoration-color: #d4c4a8;
  text-underline-offset: 4px;
}

/* 引用 */
#nice blockquote {
  margin: 32px 20px;
  padding: 20px 28px;
  background: rgba(139, 110, 69, 0.05);
  border-left: 3px solid #8b6e45;
  font-style: italic;
  position: relative;
}

#nice blockquote:before {
  content: '"';
  position: absolute;
  left: 12px;
  top: 8px;
  font-size: 32px;
  color: #a08560;
  font-family: serif;
}

#nice blockquote p {
  color: #5a4d3f;
  margin: 8px 0;
  text-indent: 0;
}

/* 链接 */
#nice a {
  color: #8b6e45;
  text-decoration: none;
  border-bottom: 1px dotted #a08560;
  transition: all 0.3s;
}

#nice a:hover {
  color: #6b4e3d;
  border-bottom: 1px solid #8b6e45;
}

/* 加粗 */
#nice strong {
  font-weight: 700;
  color: #3a342c;
  background: rgba(139, 110, 69, 0.08);
  padding: 1px 6px;
  margin: 0 2px;
}

/* 代码块 */
#nice pre {
  margin: 32px 0;
  background: #3a342c;
  color: #d4c4a8;
  padding: 28px;
  font-family: 'Courier', monospace;
  font-size: 13px;
  line-height: 1.7;
  border: 1px solid #8b6e45;
  box-shadow: 2px 2px 8px rgba(139, 110, 69, 0.2);
}`;
