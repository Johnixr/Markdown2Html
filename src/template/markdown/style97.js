export default `/* 贤者之思 - style-97-sage-wisdom.css */

/* Style 97: 贤者之思 - Sage Wisdom */

/* 全局属性 */
#nice {
  font-family: 'Philosopher', 'Noto Serif', serif;
  color: #3a3f47;
  background: #fcfbf9;
  background-image:
    linear-gradient(180deg, rgba(107, 91, 149, 0.03) 0%, transparent 400px);
  font-size: 15px;
  line-height: 1.8;
  padding: 76px 56px;
  max-width: 660px;
  margin: 0 auto;
}

/* 段落 */
#nice p {
  font-size: 15px;
  line-height: 1.8;
  color: #4a4f57;
  margin: 20px 0;
  text-align: justify;
}

/* 一级标题 */
#nice h1 {
  font-size: 36px;
  font-weight: 400;
  margin: 60px 0 40px 0;
  color: #6b5b95;
  text-align: center;
  letter-spacing: 0.08em;
  position: relative;
  padding: 24px 0;
}

#nice h1:after {
  content: '✦ ✦ ✦';
  display: block;
  font-size: 12px;
  color: #9b8eb5;
  margin-top: 16px;
  letter-spacing: 8px;
}

/* 二级标题 */
#nice h2 {
  font-size: 22px;
  font-weight: 500;
  margin: 36px 0 24px 0;
  color: #7e6997;
  text-align: center;
  font-style: italic;
}

/* 三级标题 */
#nice h3 {
  font-size: 17px;
  font-weight: 500;
  margin: 24px 0 14px 0;
  color: #8b7aa8;
  padding-left: 20px;
  position: relative;
}

#nice h3:before {
  content: '◊';
  position: absolute;
  left: 0;
  color: #a896c8;
}

/* 引用 */
#nice blockquote {
  margin: 32px 24px;
  padding: 20px 32px;
  background: rgba(107, 91, 149, 0.06);
  border-left: 2px solid #8b7aa8;
  text-align: center;
  font-style: italic;
}

#nice blockquote p {
  color: #5a5f67;
  margin: 8px 0;
}

/* 链接 */
#nice a {
  color: #6b5b95;
  text-decoration: none;
  border-bottom: 1px dotted #9b8eb5;
  transition: all 0.3s;
}

#nice a:hover {
  color: #5a4a7a;
  border-bottom-style: solid;
}

/* 加粗 */
#nice strong {
  font-weight: 600;
  color: #3a3f47;
  background: linear-gradient(180deg, transparent 75%, rgba(107, 91, 149, 0.2) 75%);
}

/* 代码块 */
#nice pre {
  margin: 32px 0;
  background: #3a3f47;
  color: #c8c1d8;
  padding: 28px;
  font-family: 'Fira Code', monospace;
  font-size: 13px;
  line-height: 1.7;
  border-radius: 4px;
}`;
