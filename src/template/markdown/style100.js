export default `/* 薰衣草梦境 - style-100-lavender-dream.css */

/* Style 100: 薰衣草梦境 - Lavender Dream */

/* 全局属性 */
#nice {
  font-family: 'Comfortaa', 'Noto Sans SC', sans-serif;
  color: #4a5568;
  background: #faf9fc;
  background-image:
    linear-gradient(180deg, rgba(167, 139, 250, 0.05) 0%, transparent 300px),
    radial-gradient(ellipse at center, rgba(196, 181, 253, 0.03) 0%, transparent 70%);
  font-size: 15px;
  line-height: 1.75;
  padding: 72px 52px;
  max-width: 680px;
  margin: 0 auto;
}

/* 段落 */
#nice p {
  font-size: 15px;
  line-height: 1.75;
  color: #5a67d8;
  margin: 18px 0;
  letter-spacing: 0.02em;
}

/* 一级标题 */
#nice h1 {
  font-size: 38px;
  font-weight: 300;
  margin: 60px 0 40px 0;
  color: #6b46c1;
  text-align: center;
  letter-spacing: 0.05em;
  position: relative;
  padding: 24px 0;
}

#nice h1:before {
  content: '✿';
  display: block;
  font-size: 24px;
  color: #a78bfa;
  margin-bottom: 12px;
}

/* 二级标题 */
#nice h2 {
  font-size: 24px;
  font-weight: 400;
  margin: 36px 0 24px 0;
  color: #7c3aed;
  text-align: center;
  padding: 8px 0;
  border-bottom: 1px solid #c4b5fd;
}

/* 三级标题 */
#nice h3 {
  font-size: 18px;
  font-weight: 500;
  margin: 24px 0 14px 0;
  color: #8b5cf6;
  font-style: italic;
}

/* 引用 */
#nice blockquote {
  margin: 32px 16px;
  padding: 20px 32px;
  background: linear-gradient(135deg, rgba(167, 139, 250, 0.08), rgba(196, 181, 253, 0.08));
  border-left: 2px solid #a78bfa;
  text-align: center;
  font-style: italic;
}

#nice blockquote p {
  color: #6b7280;
  margin: 8px 0;
}

/* 链接 */
#nice a {
  color: #7c3aed;
  text-decoration: none;
  position: relative;
  padding-bottom: 2px;
}

#nice a:after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1px;
  background: #a78bfa;
  transform: scaleX(0);
  transition: transform 0.3s;
}

#nice a:hover:after {
  transform: scaleX(1);
}

/* 加粗 */
#nice strong {
  font-weight: 600;
  color: #6b46c1;
  background: linear-gradient(180deg, transparent 70%, rgba(167, 139, 250, 0.3) 70%);
}

/* 代码块 */
#nice pre {
  margin: 32px 0;
  background: #2d3748;
  color: #c4b5fd;
  padding: 28px;
  font-family: 'Cascadia Code', monospace;
  font-size: 13px;
  line-height: 1.7;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(107, 70, 193, 0.1);
}`;
