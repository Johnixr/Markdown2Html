export default `/* 孔雀翎羽 - style-39-peacock-feather.css */

/* Style 39: 孔雀翎羽 - Peacock Feather */

/* 全局属性 */
#nice {
  font-family: 'Didot', 'Georgia', serif;
  color: #1a4d4d;
  background: linear-gradient(180deg, #f0fdf4 0%, #e6f7f1 100%);
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
  color: #2c5f5f;
  margin: 18px 0;
  letter-spacing: 0.3px;
}

/* 一级标题 - 孔雀开屏 */
#nice h1 {
  font-size: 44px;
  font-weight: 700;
  margin: 56px 0 36px 0;
  background: linear-gradient(135deg,
    #006064 0%, #00838f 20%, #00acc1 40%,
    #4dd0e1 60%, #00c853 80%, #006064 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-align: center;
  padding: 36px 0;
  position: relative;
}

#nice h1:after {
  content: '◉';
  display: block;
  color: #00acc1;
  font-size: 24px;
  margin-top: 16px;
  text-shadow: 0 0 20px rgba(0, 172, 193, 0.5);
}

/* 二级标题 - 翠绿羽毛 */
#nice h2 {
  font-size: 28px;
  font-weight: 600;
  margin: 36px 0 24px 0;
  color: #ffffff;
  background: linear-gradient(135deg, #00838f, #00c853);
  padding: 14px 28px;
  display: inline-block;
  border-radius: 40px 8px 40px 8px;
  box-shadow: 4px 4px 12px rgba(0, 131, 143, 0.3);
}

/* 三级标题 */
#nice h3 {
  font-size: 20px;
  font-weight: 600;
  margin: 28px 0 16px 0;
  color: #006064;
  padding-bottom: 8px;
  border-bottom: 2px solid;
  border-image: linear-gradient(90deg, #00acc1, #00c853) 1;
}

/* 引用 - 羽毛纹理 */
#nice blockquote {
  margin: 32px 0;
  padding: 24px;
  background: linear-gradient(135deg,
    rgba(0, 172, 193, 0.1) 0%,
    rgba(0, 200, 83, 0.1) 100%);
  border-left: 4px solid #00838f;
  position: relative;
  font-style: italic;
}

#nice blockquote:after {
  content: '❋';
  position: absolute;
  top: 12px;
  right: 20px;
  color: #00acc1;
  font-size: 28px;
  opacity: 0.3;
}

#nice blockquote p {
  color: #2c5f5f;
  margin: 8px 0;
}

/* 链接 - 宝石点缀 */
#nice a {
  color: #00838f;
  text-decoration: none;
  font-weight: 600;
  padding: 2px 8px;
  background: linear-gradient(180deg, transparent 60%, rgba(0, 200, 83, 0.3) 60%);
  transition: all 0.3s;
}

#nice a:hover {
  background: rgba(0, 200, 83, 0.2);
  border-radius: 4px;
}

/* 加粗 - 华丽羽冠 */
#nice strong {
  font-weight: 700;
  color: #ffffff;
  background: linear-gradient(135deg, #006064, #00acc1);
  padding: 3px 10px;
  margin: 0 2px;
  border-radius: 20px;
  display: inline-block;
  box-shadow: 2px 2px 8px rgba(0, 108, 100, 0.3);
}

/* 代码块 - 深邃羽影 */
#nice pre {
  margin: 32px 0;
  background: #1a4d4d;
  color: #4dd0e1;
  padding: 28px;
  border-radius: 8px;
  border: 2px solid #00838f;
}

#nice pre code {
  color: #4dd0e1;
  font-family: 'Monaco', monospace;
  font-size: 13px;
  line-height: 1.6;
}`;
