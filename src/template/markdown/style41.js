export default `/* 马卡龙甜品 - style-41-macaron-sweet.css */

/* Style 41: 马卡龙甜品 - Macaron Sweet */

/* 全局属性 */
#nice {
  font-family: 'Georgia', 'Times New Roman', serif;
  color: #5a4a42;
  background: linear-gradient(180deg, #fff9f5 0%, #fef5ee 100%);
  font-size: 15px;
  line-height: 1.75;
  padding: 40px;
  max-width: 900px;
  margin: 0 auto;
}

/* 段落 */
#nice p {
  font-size: 15px;
  line-height: 1.8;
  color: #6b5d54;
  margin: 18px 0;
  letter-spacing: 0.3px;
}

/* 一级标题 - 马卡龙拼盘 */
#nice h1 {
  font-size: 44px;
  font-weight: 700;
  margin: 56px 0 36px 0;
  background: linear-gradient(135deg,
    #ffc0e0 0%, #c8b6db 25%, #b6e5d8 50%,
    #fbe5c8 75%, #ffc0e0 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-align: center;
  padding: 36px 0;
  position: relative;
}

#nice h1:after {
  content: '◯ ◯ ◯';
  display: block;
  font-size: 16px;
  margin-top: 16px;
  color: #d4a5a5;
  letter-spacing: 12px;
}

/* 二级标题 - 草莓粉 */
#nice h2 {
  font-size: 28px;
  font-weight: 600;
  margin: 36px 0 24px 0;
  color: #ffffff;
  background: linear-gradient(135deg, #ffb4b4, #ffdcdc);
  padding: 14px 28px;
  display: inline-block;
  border-radius: 30px;
  box-shadow: 3px 3px 10px rgba(255, 180, 180, 0.3);
}

/* 三级标题 */
#nice h3 {
  font-size: 20px;
  font-weight: 600;
  margin: 28px 0 16px 0;
  color: #9a8194;
  padding: 8px 16px;
  background: rgba(200, 182, 219, 0.2);
  border-radius: 20px;
  display: inline-block;
}

/* 引用 - 奶油装饰 */
#nice blockquote {
  margin: 32px 0;
  padding: 24px;
  background: linear-gradient(135deg,
    rgba(255, 192, 224, 0.1) 0%,
    rgba(182, 229, 216, 0.1) 100%);
  border-radius: 20px;
  border: 2px solid #ffc0e0;
  position: relative;
}

#nice blockquote:before {
  content: '✿';
  position: absolute;
  top: 12px;
  left: 20px;
  color: #ffb4b4;
  font-size: 24px;
}

#nice blockquote p {
  color: #6b5d54;
  font-style: italic;
  margin: 8px 0;
}

/* 链接 - 薄荷绿 */
#nice a {
  color: #7fb069;
  text-decoration: none;
  font-weight: 600;
  padding: 2px 8px;
  background: rgba(182, 229, 216, 0.3);
  border-radius: 12px;
  transition: all 0.3s;
}

#nice a:hover {
  background: #b6e5d8;
  color: #ffffff;
}

/* 加粗 - 巧克力夹心 */
#nice strong {
  font-weight: 700;
  color: #ffffff;
  background: linear-gradient(135deg, #9a8194, #d4a5a5);
  padding: 3px 10px;
  margin: 0 2px;
  border-radius: 15px;
  display: inline-block;
}

/* 代码块 - 香草底色 */
#nice pre {
  margin: 32px 0;
  background: #f9f5f1;
  color: #8b7355;
  padding: 28px;
  border-radius: 16px;
  border: 2px solid #ffc0e0;
}

#nice pre code {
  color: #8b7355;
  font-family: 'Monaco', monospace;
  font-size: 13px;
  line-height: 1.6;
}`;
