export default `/* 茶道禅心 - style-87-tea-ceremony.css */

/* Style 87: 茶道禅心 - Tea Ceremony */

/* 全局属性 */
#nice {
  font-family: 'Source Han Serif', 'Noto Serif CJK', serif;
  color: #3e3832;
  background: #faf8f3;
  background-image:
    radial-gradient(circle at 50% 50%, rgba(139, 119, 101, 0.02) 1px, transparent 1px);
  background-size: 24px 24px;
  font-size: 15px;
  line-height: 1.8;
  padding: 80px 60px;
  max-width: 660px;
  margin: 0 auto;
}

/* 段落 */
#nice p {
  font-size: 15px;
  line-height: 1.8;
  color: #4a453f;
  margin: 20px 0;
  text-align: justify;
}

/* 一级标题 */
#nice h1 {
  font-size: 32px;
  font-weight: 400;
  margin: 60px 0 40px 0;
  color: #6b5d4f;
  text-align: center;
  position: relative;
  padding: 20px 0;
}

#nice h1:after {
  content: '茶';
  position: absolute;
  bottom: -20px;
  left: 50%;
  transform: translateX(-50%);
  color: rgba(107, 93, 79, 0.1);
  font-size: 60px;
  font-weight: 100;
}

/* 二级标题 */
#nice h2 {
  font-size: 20px;
  font-weight: 500;
  margin: 36px 0 24px 0;
  color: #8b7765;
  text-align: center;
  padding: 8px 0;
}

/* 三级标题 */
#nice h3 {
  font-size: 16px;
  font-weight: 500;
  margin: 24px 0 14px 0;
  color: #6b5d4f;
  padding-left: 16px;
  position: relative;
}

#nice h3:before {
  content: '一';
  position: absolute;
  left: 0;
  color: #a0937f;
}

/* 引用 */
#nice blockquote {
  margin: 32px 0;
  padding: 20px 32px;
  background: rgba(160, 147, 127, 0.05);
  border-left: 1px solid #8b7765;
  border-right: 1px solid #8b7765;
  text-align: center;
}

#nice blockquote p {
  color: #5a524a;
  margin: 8px 0;
  font-style: italic;
}

/* 链接 */
#nice a {
  color: #8b7765;
  text-decoration: none;
  border-bottom: 1px dotted #a0937f;
  transition: all 0.3s;
}

#nice a:hover {
  color: #6b5d4f;
  border-bottom-style: solid;
}

/* 加粗 */
#nice strong {
  font-weight: 600;
  color: #3e3832;
  padding: 0 4px;
  background: linear-gradient(180deg, transparent 70%, rgba(139, 119, 101, 0.2) 70%);
}

/* 代码块 */
#nice pre {
  margin: 32px 0;
  background: #3e3832;
  color: #d4cfc7;
  padding: 28px;
  font-family: 'STFangsong', monospace;
  font-size: 13px;
  line-height: 1.7;
  border-radius: 2px;
}`;
