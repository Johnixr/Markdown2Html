export default `/* 北极狐 - style-99-arctic-fox.css */

/* Style 99: 北极狐 - Arctic Fox */

/* 全局属性 */
#nice {
  font-family: 'Karla', 'PingFang SC', sans-serif;
  color: #4b5563;
  background: #ffffff;
  background-image:
    radial-gradient(circle at 100% 50%, rgba(209, 213, 219, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 0% 50%, rgba(209, 213, 219, 0.1) 0%, transparent 50%);
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
  color: #6b7280;
  margin: 16px 0;
  letter-spacing: 0.01em;
}

/* 一级标题 */
#nice h1 {
  font-size: 40px;
  font-weight: 200;
  margin: 56px 0 36px 0;
  color: #111827;
  text-align: center;
  letter-spacing: -0.02em;
  padding: 20px 0;
  position: relative;
}

#nice h1:after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 40px;
  height: 1px;
  background: #9ca3af;
}

/* 二级标题 */
#nice h2 {
  font-size: 24px;
  font-weight: 400;
  margin: 32px 0 20px 0;
  color: #374151;
  padding-left: 12px;
  border-left: 2px solid #d1d5db;
}

/* 三级标题 */
#nice h3 {
  font-size: 18px;
  font-weight: 500;
  margin: 24px 0 14px 0;
  color: #6b7280;
  letter-spacing: 0.03em;
}

/* 引用 */
#nice blockquote {
  margin: 28px 0;
  padding: 20px 28px;
  background: #f9fafb;
  border-left: 2px solid #e5e7eb;
}

#nice blockquote p {
  color: #9ca3af;
  margin: 8px 0;
  font-style: italic;
}

/* 链接 */
#nice a {
  color: #6b7280;
  text-decoration: none;
  border-bottom: 1px solid #d1d5db;
  transition: all 0.3s;
}

#nice a:hover {
  color: #111827;
  border-bottom-color: #6b7280;
}

/* 加粗 */
#nice strong {
  font-weight: 600;
  color: #111827;
  background: #f3f4f6;
  padding: 2px 8px;
  margin: 0 2px;
}

/* 代码块 */
#nice pre {
  margin: 32px 0;
  background: #111827;
  color: #e5e7eb;
  padding: 28px;
  font-family: 'SF Mono', monospace;
  font-size: 13px;
  line-height: 1.6;
  border-radius: 4px;
}`;
