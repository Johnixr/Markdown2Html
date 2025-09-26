export default `/* 午夜爵士 - style-21-midnight-jazz.css */

/* Style 21: 午夜爵士 - Midnight Jazz */

/* 全局属性 */
#nice {
  font-family: 'Georgia', 'Times New Roman', serif;
  color: #e0d5c7;
  background: linear-gradient(180deg, #1a1a2e 0%, #0f0f1e 100%);
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
  color: #e0d5c7;
  margin: 18px 0;
  letter-spacing: 0.3px;
}

/* 一级标题 - 萨克斯金 */
#nice h1 {
  font-size: 46px;
  font-weight: 900;
  margin: 56px 0 36px 0;
  color: #daa520;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 4px;
  text-shadow:
    3px 3px 0 #8b7355,
    6px 6px 12px rgba(0,0,0,0.5);
  padding: 32px;
  position: relative;
}

#nice h1:after {
  content: '♪ ♫ ♪';
  display: block;
  font-size: 20px;
  margin-top: 16px;
  opacity: 0.5;
}

/* 二级标题 - 烟熏紫 */
#nice h2 {
  font-size: 30px;
  font-weight: 700;
  margin: 36px 0 24px 0;
  color: #daa520;
  padding: 14px 28px;
  background: rgba(75, 0, 130, 0.3);
  border-left: 4px solid #daa520;
  font-style: italic;
}

/* 三级标题 */
#nice h3 {
  font-size: 20px;
  font-weight: 600;
  margin: 28px 0 16px 0;
  color: #b8860b;
  padding-bottom: 8px;
  border-bottom: 1px solid #4b0082;
}

/* 引用 - 低音节奏 */
#nice blockquote {
  margin: 32px 0;
  padding: 24px;
  background: rgba(75, 0, 130, 0.2);
  border-left: 3px solid #daa520;
  border-radius: 8px;
  font-style: italic;
  position: relative;
}

#nice blockquote:before {
  content: '♩';
  position: absolute;
  top: 12px;
  left: 16px;
  color: #daa520;
  font-size: 32px;
  opacity: 0.3;
}

#nice blockquote p {
  color: #e0d5c7;
  margin: 8px 0;
}

/* 链接 - 金铜高光 */
#nice a {
  color: #daa520;
  text-decoration: none;
  font-weight: 600;
  padding: 2px 8px;
  background: rgba(218, 165, 32, 0.1);
  border: 1px solid #daa520;
  border-radius: 4px;
  transition: all 0.3s;
}

#nice a:hover {
  background: rgba(218, 165, 32, 0.3);
  box-shadow: 0 4px 12px rgba(218, 165, 32, 0.3);
}

/* 加粗 - 聚光灯下 */
#nice strong {
  font-weight: 700;
  color: #1a1a2e;
  background: linear-gradient(135deg, #daa520, #b8860b);
  padding: 3px 10px;
  margin: 0 2px;
  border-radius: 4px;
  display: inline-block;
}

/* 列表 */
#nice ul li:before {
  content: '♦';
  position: absolute;
  left: 0;
  color: #daa520;
  font-size: 14px;
}

#nice ol li:before {
  background: #4b0082;
  color: #daa520;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 700;
}

/* 代码块 - 烟雾缭绕 */
#nice pre {
  margin: 32px 0;
  background: #0f0f1e;
  color: #daa520;
  padding: 28px;
  border: 1px solid #4b0082;
  border-radius: 8px;
  position: relative;
  box-shadow: 0 8px 24px rgba(0,0,0,0.5);
}

#nice pre code {
  color: #daa520;
  font-family: 'Courier New', monospace;
  font-size: 13px;
  line-height: 1.6;
}

/* 图片 */
#nice img {
  max-width: 100%;
  height: auto;
  margin: 36px auto;
  display: block;
  border: 4px solid #daa520;
  box-shadow: 0 12px 36px rgba(218, 165, 32, 0.2);
  filter: sepia(10%);
}`;
