export default `/* 维京战士 - style-44-viking-warrior.css */

/* Style 44: 维京战士 - Viking Warrior */

/* 全局属性 */
#nice {
  font-family: 'Georgia', 'Times New Roman', serif;
  color: #2c2416;
  background: linear-gradient(180deg, #e8dcc0 0%, #d4c4a0 100%);
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
  color: #3d342a;
  margin: 18px 0;
  letter-spacing: 0.3px;
}

/* 一级标题 - 战斧劈砍 */
#nice h1 {
  font-size: 48px;
  font-weight: 900;
  margin: 56px 0 36px 0;
  color: #8b0000;
  background: linear-gradient(135deg, #4a4a4a 0%, #8c8c8c 50%, #4a4a4a 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 4px;
  position: relative;
  text-shadow: 2px 2px 0 #2c2416;
}

#nice h1:before,
#nice h1:after {
  content: '⚔';
  position: absolute;
  color: #8b0000;
  font-size: 36px;
}

#nice h1:before {
  left: 20px;
}

#nice h1:after {
  right: 20px;
  transform: scaleX(-1);
}

/* 二级标题 - 铁甲护身 */
#nice h2 {
  font-size: 30px;
  font-weight: 800;
  margin: 36px 0 24px 0;
  color: #ffffff;
  background: linear-gradient(135deg, #4a4a4a, #2c2416);
  padding: 14px 32px;
  display: inline-block;
  position: relative;
  box-shadow: 4px 4px 0 #8b0000;
}

/* 三级标题 */
#nice h3 {
  font-size: 20px;
  font-weight: 700;
  margin: 28px 0 16px 0;
  color: #8b0000;
  padding: 8px 0;
  border-top: 3px solid #4a4a4a;
  border-bottom: 3px solid #4a4a4a;
}

/* 引用 - 北欧符文 */
#nice blockquote {
  margin: 32px 0;
  padding: 24px;
  background: rgba(75, 75, 75, 0.1);
  border-left: 5px solid #8b0000;
  border-right: 5px solid #8b0000;
  position: relative;
}

#nice blockquote:before {
  content: 'ᚱᚢᚾᛖ';
  position: absolute;
  top: -12px;
  left: 20px;
  background: #e8dcc0;
  color: #8b0000;
  padding: 0 12px;
  font-size: 16px;
}

#nice blockquote p {
  color: #3d342a;
  margin: 8px 0;
  font-weight: 500;
}

/* 链接 - 血色连接 */
#nice a {
  color: #8b0000;
  text-decoration: none;
  font-weight: 700;
  padding: 2px 8px;
  background: rgba(139, 0, 0, 0.1);
  border-bottom: 2px solid #8b0000;
  transition: all 0.3s;
}

#nice a:hover {
  background: #8b0000;
  color: #ffffff;
}

/* 加粗 - 狂战士怒 */
#nice strong {
  font-weight: 900;
  color: #ffffff;
  background: #8b0000;
  padding: 3px 12px;
  margin: 0 2px;
  display: inline-block;
  text-transform: uppercase;
  border: 2px solid #4a4a4a;
}

/* 代码块 - 符文石刻 */
#nice pre {
  margin: 32px 0;
  background: #2c2416;
  color: #c4a060;
  padding: 28px;
  border: 3px solid #4a4a4a;
  position: relative;
}

#nice pre:before {
  content: 'RUNES';
  position: absolute;
  top: -14px;
  right: 20px;
  background: #e8dcc0;
  color: #8b0000;
  padding: 0 12px;
  font-weight: 900;
  font-size: 12px;
}

#nice pre code {
  color: #c4a060;
  font-family: 'Courier New', monospace;
  font-size: 13px;
  line-height: 1.6;
}`;
