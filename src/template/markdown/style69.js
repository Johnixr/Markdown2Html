export default `/* 线条艺术 - style-69-line-art.css */

/* Style 69: 线条艺术 - Line Art */

/* 全局属性 */
#nice {
  font-family: 'Raleway', 'Helvetica Neue', sans-serif;
  color: #2a2a2a;
  background: #ffffff;
  background-image:
    linear-gradient(90deg, rgba(0, 0, 0, 0.03) 1px, transparent 1px),
    linear-gradient(rgba(0, 0, 0, 0.03) 1px, transparent 1px),
    linear-gradient(45deg, transparent 48%, rgba(0, 0, 0, 0.02) 48%, rgba(0, 0, 0, 0.02) 52%, transparent 52%);
  background-size: 100px 100px, 100px 100px, 50px 50px;
  font-size: 15px;
  line-height: 1.7;
  padding: 60px 48px;
  max-width: 700px;
  margin: 0 auto;
}

/* 段落 */
#nice p {
  font-size: 15px;
  line-height: 1.7;
  color: #3a3a3a;
  margin: 16px 0;
  letter-spacing: 0.01em;
}

/* 一级标题 */
#nice h1 {
  font-size: 36px;
  font-weight: 100;
  margin: 52px 0 32px 0;
  color: #1a1a1a;
  text-align: center;
  letter-spacing: 0.2em;
  position: relative;
  padding: 24px 0;
  border-top: 1px solid #1a1a1a;
  border-bottom: 1px solid #1a1a1a;
}

#nice h1:before,
#nice h1:after {
  content: '';
  position: absolute;
  width: 1px;
  height: 40px;
  background: #1a1a1a;
  top: 50%;
  transform: translateY(-50%);
}

#nice h1:before {
  left: 0;
}

#nice h1:after {
  right: 0;
}

/* 二级标题 */
#nice h2 {
  font-size: 22px;
  font-weight: 300;
  margin: 32px 0 20px 0;
  color: #2a2a2a;
  position: relative;
  padding-bottom: 8px;
  border-bottom: 1px solid #2a2a2a;
}

/* 三级标题 */
#nice h3 {
  font-size: 17px;
  font-weight: 400;
  margin: 24px 0 14px 0;
  color: #3a3a3a;
  padding-left: 20px;
  position: relative;
}

#nice h3:before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  width: 12px;
  height: 1px;
  background: #3a3a3a;
}

/* 引用 */
#nice blockquote {
  margin: 28px 0;
  padding: 20px;
  border: 1px solid #cccccc;
  position: relative;
}

#nice blockquote:before {
  content: '';
  position: absolute;
  top: -1px;
  left: 20px;
  right: 20px;
  height: 1px;
  background: #ffffff;
}

#nice blockquote p {
  color: #4a4a4a;
  margin: 8px 0;
}

/* 链接 */
#nice a {
  color: #2a2a2a;
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
  background: #2a2a2a;
  transition: transform 0.3s;
}

#nice a:hover:after {
  transform: translateY(2px);
}

/* 加粗 */
#nice strong {
  font-weight: 600;
  color: #1a1a1a;
  padding: 2px 8px;
  margin: 0 2px;
  border: 1px solid #1a1a1a;
}

/* 代码块 */
#nice pre {
  margin: 28px 0;
  background: #fafafa;
  color: #2a2a2a;
  padding: 24px;
  font-family: 'Fira Code', monospace;
  font-size: 13px;
  line-height: 1.6;
  border: 1px solid #cccccc;
}`;
