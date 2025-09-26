export default `/* 日式禅意 - style-54-japanese-zen.css */

/* Style 54: 日式禅意 - Japanese Zen */

/* 全局属性 */
#nice {
  font-family: 'Hiragino Sans', 'Yu Gothic', sans-serif;
  color: #3a3a3a;
  background: #fafaf8;
  font-size: 15px;
  line-height: 1.8;
  padding: 80px 40px;
  max-width: 680px;
  margin: 0 auto;
}

/* 段落 */
#nice p {
  font-size: 15px;
  line-height: 1.8;
  color: #3a3a3a;
  margin: 20px 0;
  letter-spacing: 0.03em;
}

/* 一级标题 */
#nice h1 {
  font-size: 32px;
  font-weight: 300;
  margin: 60px 0 40px 0;
  color: #1a1a1a;
  text-align: center;
  position: relative;
  padding: 20px 0;
}

#nice h1:after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 40px;
  height: 1px;
  background: #1a1a1a;
}

/* 二级标题 */
#nice h2 {
  font-size: 20px;
  font-weight: 400;
  margin: 36px 0 24px 0;
  color: #1a1a1a;
  position: relative;
  padding-left: 20px;
}

#nice h2:before {
  content: '一';
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  color: #8b8680;
}

/* 三级标题 */
#nice h3 {
  font-size: 16px;
  font-weight: 400;
  margin: 24px 0 16px 0;
  color: #3a3a3a;
  letter-spacing: 0.15em;
}

/* 引用 */
#nice blockquote {
  margin: 32px 0;
  padding: 20px 32px;
  background: #ffffff;
  border: 1px solid #e5e5e5;
  position: relative;
}

#nice blockquote p {
  color: #5a5a5a;
  margin: 8px 0;
  font-style: italic;
}

/* 链接 */
#nice a {
  color: #8b8680;
  text-decoration: none;
  padding-bottom: 1px;
  border-bottom: 1px solid #d4d4d4;
  transition: all 0.3s;
}

#nice a:hover {
  color: #3a3a3a;
  border-bottom-color: #3a3a3a;
}

/* 加粗 */
#nice strong {
  font-weight: 500;
  color: #1a1a1a;
  background: #f0f0ed;
  padding: 2px 8px;
  margin: 0 2px;
}

/* 代码块 */
#nice pre {
  margin: 32px 0;
  background: #ffffff;
  color: #3a3a3a;
  padding: 28px;
  border: 1px solid #e5e5e5;
  font-family: 'Monaco', monospace;
  font-size: 13px;
  line-height: 1.6;
}`;
