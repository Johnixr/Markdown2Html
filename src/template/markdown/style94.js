export default `/* 阿尔卑斯晨曲 - style-94-alpine-morning.css */

/* Style 94: 阿尔卑斯晨曲 - Alpine Morning */

/* 全局属性 */
#nice {
  font-family: 'Rubik', 'Helvetica Neue', sans-serif;
  color: #37474f;
  background: #ffffff;
  background-image:
    linear-gradient(180deg, rgba(187, 222, 251, 0.1) 0%, transparent 300px);
  font-size: 15px;
  line-height: 1.7;
  padding: 72px 52px;
  max-width: 700px;
  margin: 0 auto;
}

/* 段落 */
#nice p {
  font-size: 15px;
  line-height: 1.7;
  color: #546e7a;
  margin: 16px 0;
  letter-spacing: 0.01em;
}

/* 一级标题 */
#nice h1 {
  font-size: 44px;
  font-weight: 300;
  margin: 60px 0 40px 0;
  color: #01579b;
  text-align: center;
  letter-spacing: -0.02em;
  padding: 20px 0;
  position: relative;
}

#nice h1:before {
  content: '⛰';
  display: block;
  font-size: 32px;
  margin-bottom: 16px;
  opacity: 0.5;
}

/* 二级标题 */
#nice h2 {
  font-size: 26px;
  font-weight: 400;
  margin: 36px 0 24px 0;
  color: #0277bd;
  padding-left: 16px;
  border-left: 3px solid #4fc3f7;
}

/* 三级标题 */
#nice h3 {
  font-size: 18px;
  font-weight: 500;
  margin: 24px 0 14px 0;
  color: #0288d1;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-size: 16px;
}

/* 引用 */
#nice blockquote {
  margin: 32px 0;
  padding: 20px 28px;
  background: rgba(179, 229, 252, 0.1);
  border-left: 3px solid #29b6f6;
}

#nice blockquote p {
  color: #607d8b;
  margin: 8px 0;
  font-style: italic;
}

/* 链接 */
#nice a {
  color: #0288d1;
  text-decoration: none;
  border-bottom: 1px solid #81d4fa;
  transition: all 0.3s;
}

#nice a:hover {
  color: #01579b;
  border-bottom-color: #0288d1;
}

/* 加粗 */
#nice strong {
  font-weight: 600;
  color: #01579b;
  background: rgba(179, 229, 252, 0.2);
  padding: 2px 8px;
  margin: 0 2px;
}

/* 代码块 */
#nice pre {
  margin: 32px 0;
  background: #263238;
  color: #b3e5fc;
  padding: 28px;
  font-family: 'Fira Code', monospace;
  font-size: 13px;
  line-height: 1.6;
  border-top: 3px solid #0288d1;
}`;
