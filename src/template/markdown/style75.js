export default `/* 极地冰川 - style-75-arctic-glacier.css */

/* Style 75: 极地冰川 - Arctic Glacier */

/* 全局属性 */
#nice {
  font-family: 'Inter', 'San Francisco', sans-serif;
  color: #1e293b;
  background: #f8fafc;
  background-image:
    linear-gradient(180deg, #e0f2fe 0%, transparent 200px),
    repeating-linear-gradient(
      120deg,
      transparent,
      transparent 40px,
      rgba(148, 163, 184, 0.03) 40px,
      rgba(148, 163, 184, 0.03) 80px
    );
  font-size: 15px;
  line-height: 1.7;
  padding: 64px 48px;
  max-width: 700px;
  margin: 0 auto;
}

/* 段落 */
#nice p {
  font-size: 15px;
  line-height: 1.7;
  color: #334155;
  margin: 16px 0;
  letter-spacing: 0.01em;
}

/* 一级标题 */
#nice h1 {
  font-size: 36px;
  font-weight: 600;
  margin: 52px 0 32px 0;
  color: #0f172a;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding: 16px 0;
  border-top: 2px solid #94a3b8;
  border-bottom: 2px solid #94a3b8;
}

/* 二级标题 */
#nice h2 {
  font-size: 22px;
  font-weight: 500;
  margin: 32px 0 20px 0;
  color: #1e293b;
  background: #e0f2fe;
  padding: 10px 20px;
  border-left: 3px solid #0284c7;
}

/* 三级标题 */
#nice h3 {
  font-size: 17px;
  font-weight: 500;
  margin: 24px 0 14px 0;
  color: #475569;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-size: 15px;
}

/* 引用 */
#nice blockquote {
  margin: 28px 0;
  padding: 20px 24px;
  background: #ffffff;
  border: 1px solid #cbd5e1;
  border-left: 3px solid #0284c7;
}

#nice blockquote p {
  color: #475569;
  margin: 8px 0;
}

/* 链接 */
#nice a {
  color: #0284c7;
  text-decoration: none;
  font-weight: 500;
  border-bottom: 1px solid transparent;
  transition: all 0.2s;
}

#nice a:hover {
  border-bottom-color: #0284c7;
}

/* 加粗 */
#nice strong {
  font-weight: 600;
  color: #0f172a;
  background: #e0f2fe;
  padding: 2px 6px;
  margin: 0 1px;
}

/* 代码块 */
#nice pre {
  margin: 28px 0;
  background: #0f172a;
  color: #e0f2fe;
  padding: 24px;
  font-family: 'Fira Code', monospace;
  font-size: 13px;
  line-height: 1.6;
  border-radius: 4px;
}`;
