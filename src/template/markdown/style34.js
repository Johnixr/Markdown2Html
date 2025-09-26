export default `/* 珊瑚礁潜水 - style-34-coral-reef.css */

/* Style 34: 珊瑚礁潜水 - Coral Reef Diving */

/* 全局属性 */
#nice {
  font-family: 'Helvetica Neue', 'Arial', sans-serif;
  color: #2d4a56;
  background: linear-gradient(180deg, #e6f7ff 0%, #b3e5fc 100%);
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
  color: #37474f;
  margin: 18px 0;
  letter-spacing: 0.3px;
}

/* 一级标题 - 珊瑚橙粉 */
#nice h1 {
  font-size: 44px;
  font-weight: 800;
  margin: 56px 0 36px 0;
  color: #ffffff;
  background: linear-gradient(135deg, #ff6b9d 0%, #feca57 50%, #48dbfb 100%);
  padding: 40px;
  text-align: center;
  border-radius: 24px 80px 24px 80px;
  box-shadow: 0 12px 40px rgba(255, 107, 157, 0.3);
}

/* 二级标题 - 海葵触手 */
#nice h2 {
  font-size: 28px;
  font-weight: 700;
  margin: 36px 0 24px 0;
  color: #ff6b9d;
  padding: 14px 28px;
  background: rgba(255, 107, 157, 0.1);
  border: 2px solid #feca57;
  border-radius: 50px;
  display: inline-block;
}

/* 三级标题 */
#nice h3 {
  font-size: 20px;
  font-weight: 600;
  margin: 28px 0 16px 0;
  color: #00a8cc;
  padding-bottom: 8px;
  border-bottom: 3px wavy #48dbfb;
}

/* 引用 - 水泡效果 */
#nice blockquote {
  margin: 32px 0;
  padding: 24px;
  background: linear-gradient(135deg, rgba(72, 219, 251, 0.1) 0%, rgba(255, 107, 157, 0.1) 100%);
  border-radius: 20px;
  position: relative;
}

#nice blockquote:before,
#nice blockquote:after {
  content: '○';
  position: absolute;
  color: #48dbfb;
  opacity: 0.3;
}

#nice blockquote:before {
  font-size: 40px;
  top: -10px;
  right: 20px;
}

#nice blockquote:after {
  font-size: 24px;
  bottom: -5px;
  left: 30px;
}

#nice blockquote p {
  color: #37474f;
  margin: 8px 0;
}

/* 链接 - 海水连接 */
#nice a {
  color: #00a8cc;
  text-decoration: none;
  font-weight: 600;
  padding: 2px 8px;
  background: linear-gradient(180deg, transparent 60%, rgba(72, 219, 251, 0.3) 60%);
  transition: all 0.3s;
}

#nice a:hover {
  background: rgba(72, 219, 251, 0.3);
  border-radius: 4px;
}

/* 加粗 - 珊瑚醒目 */
#nice strong {
  font-weight: 700;
  color: #ffffff;
  background: linear-gradient(135deg, #ff6b9d, #feca57);
  padding: 3px 10px;
  margin: 0 2px;
  border-radius: 16px;
  display: inline-block;
}

/* 代码块 - 深海背景 */
#nice pre {
  margin: 32px 0;
  background: #0e7490;
  color: #67e8f9;
  padding: 28px;
  border-radius: 12px;
  position: relative;
}

#nice pre code {
  color: #67e8f9;
  font-family: 'Monaco', monospace;
  font-size: 13px;
  line-height: 1.6;
}`;
