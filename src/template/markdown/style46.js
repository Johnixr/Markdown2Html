export default `/* 千纸鹤折纸 - style-46-origami-crane.css */

/* Style 46: 千纸鹤折纸 - Origami Paper Crane */

/* 全局属性 */
#nice {
  font-family: 'Hiragino Sans', 'Microsoft YaHei', sans-serif;
  color: #424242;
  background: linear-gradient(180deg, #ffffff 0%, #f5f5f5 100%);
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
  color: #616161;
  margin: 18px 0;
  letter-spacing: 0.3px;
}

/* 一级标题 - 千纸鹤展翅 */
#nice h1 {
  font-size: 42px;
  font-weight: 300;
  margin: 56px 0 36px 0;
  background: linear-gradient(45deg,
    #ff6b6b 0%, #4ecdc4 25%, #45b7d1 50%,
    #96ceb4 75%, #ffeaa7 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-align: center;
  position: relative;
  padding: 32px 0;
}

#nice h1:before,
#nice h1:after {
  content: '◢◣';
  position: absolute;
  font-size: 24px;
  color: #ff6b6b;
}

#nice h1:before {
  top: 0;
  left: 50%;
  transform: translateX(-50%) rotate(45deg);
}

#nice h1:after {
  bottom: 0;
  left: 50%;
  transform: translateX(-50%) rotate(-45deg);
}

/* 二级标题 - 折痕艺术 */
#nice h2 {
  font-size: 26px;
  font-weight: 500;
  margin: 36px 0 24px 0;
  color: #ffffff;
  background: linear-gradient(135deg, #4ecdc4, #45b7d1);
  padding: 12px 24px;
  display: inline-block;
  position: relative;
  clip-path: polygon(0 0, calc(100% - 20px) 0, 100% 50%, calc(100% - 20px) 100%, 0 100%);
}

/* 三级标题 */
#nice h3 {
  font-size: 20px;
  font-weight: 500;
  margin: 28px 0 16px 0;
  color: #ff6b6b;
  padding: 8px 0;
  border-bottom: 2px solid #ffeaa7;
  display: inline-block;
}

/* 引用 - 纸质纹理 */
#nice blockquote {
  margin: 32px 0;
  padding: 24px;
  background: linear-gradient(135deg,
    rgba(255, 107, 107, 0.05) 0%,
    rgba(78, 205, 196, 0.05) 100%);
  border: 1px solid #e0e0e0;
  position: relative;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.05);
}

#nice blockquote:before {
  content: '折';
  position: absolute;
  top: -12px;
  left: 20px;
  background: #ffffff;
  color: #4ecdc4;
  padding: 0 8px;
  font-size: 20px;
  font-weight: 300;
}

#nice blockquote p {
  color: #616161;
  margin: 8px 0;
  font-style: italic;
}

/* 链接 - 天空蓝 */
#nice a {
  color: #45b7d1;
  text-decoration: none;
  font-weight: 500;
  padding: 2px 6px;
  border-bottom: 1px dashed #45b7d1;
  transition: all 0.3s;
}

#nice a:hover {
  background: rgba(69, 183, 209, 0.1);
  border-bottom: 2px solid #45b7d1;
}

/* 加粗 - 彩纸片 */
#nice strong {
  font-weight: 600;
  color: #ffffff;
  background: linear-gradient(135deg, #ff6b6b, #ffeaa7);
  padding: 3px 10px;
  margin: 0 2px;
  display: inline-block;
  transform: skew(-5deg);
}

/* 代码块 - 折纸图解 */
#nice pre {
  margin: 32px 0;
  background: #fafafa;
  color: #424242;
  padding: 28px;
  border: 1px solid #e0e0e0;
  position: relative;
  box-shadow:
    inset 1px 1px 0 #ffffff,
    inset -1px -1px 0 #e0e0e0;
}

#nice pre:before {
  content: 'STEP BY STEP';
  position: absolute;
  top: 8px;
  right: 12px;
  color: #4ecdc4;
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 1px;
}

#nice pre code {
  color: #424242;
  font-family: 'Consolas', monospace;
  font-size: 13px;
  line-height: 1.6;
}`;
