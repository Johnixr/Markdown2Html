export default `/* 北非摩洛哥 - style-36-morocco-mosaic.css */

/* Style 36: 北非摩洛哥马赛克 - Morocco Mosaic */

/* 全局属性 */
#nice {
  font-family: 'Georgia', 'Times New Roman', serif;
  color: #2c3e50;
  background: linear-gradient(180deg, #fef9e7 0%, #fdebd0 100%);
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
  color: #34495e;
  margin: 18px 0;
  letter-spacing: 0.3px;
}

/* 一级标题 - 马赛克拼贴 */
#nice h1 {
  font-size: 44px;
  font-weight: 800;
  margin: 56px 0 36px 0;
  color: #ffffff;
  background: linear-gradient(135deg, #e74c3c 0%, #f39c12 25%, #27ae60 50%, #3498db 75%, #9b59b6 100%);
  padding: 40px;
  text-align: center;
  position: relative;
  clip-path: polygon(
    20% 0%, 80% 0%, 100% 20%, 100% 80%,
    80% 100%, 20% 100%, 0% 80%, 0% 20%
  );
}

/* 二级标题 - 摩洛哥蓝 */
#nice h2 {
  font-size: 28px;
  font-weight: 700;
  margin: 36px 0 24px 0;
  color: #ffffff;
  background: #2980b9;
  padding: 14px 28px;
  display: inline-block;
  position: relative;
}

#nice h2:before,
#nice h2:after {
  content: '◈';
  position: absolute;
  color: #f39c12;
  font-size: 20px;
}

#nice h2:before {
  left: -30px;
}

#nice h2:after {
  right: -30px;
}

/* 三级标题 */
#nice h3 {
  font-size: 20px;
  font-weight: 600;
  margin: 28px 0 16px 0;
  color: #e74c3c;
  padding: 8px 16px;
  border: 2px solid #f39c12;
  display: inline-block;
}

/* 引用 - 阿拉伯纹样 */
#nice blockquote {
  margin: 32px 0;
  padding: 24px;
  background: repeating-linear-gradient(
    45deg,
    rgba(52, 152, 219, 0.1),
    rgba(52, 152, 219, 0.1) 10px,
    rgba(243, 156, 18, 0.1) 10px,
    rgba(243, 156, 18, 0.1) 20px
  );
  border: 2px solid #e74c3c;
  position: relative;
}

#nice blockquote p {
  color: #34495e;
  margin: 8px 0;
  font-style: italic;
}

/* 链接 - 香料市场 */
#nice a {
  color: #e74c3c;
  text-decoration: none;
  font-weight: 600;
  padding: 2px 8px;
  background: rgba(243, 156, 18, 0.2);
  border-radius: 4px;
  transition: all 0.3s;
}

#nice a:hover {
  background: #f39c12;
  color: #ffffff;
}

/* 加粗 - 集市热闹 */
#nice strong {
  font-weight: 700;
  color: #ffffff;
  background: linear-gradient(135deg, #e74c3c, #c0392b);
  padding: 3px 10px;
  margin: 0 2px;
  border-radius: 4px;
  display: inline-block;
  box-shadow: 2px 2px 0 #f39c12;
}

/* 代码块 - 夜市灯火 */
#nice pre {
  margin: 32px 0;
  background: #2c3e50;
  color: #f39c12;
  padding: 28px;
  border: 3px solid #e74c3c;
  position: relative;
}

#nice pre code {
  color: #f39c12;
  font-family: 'Monaco', monospace;
  font-size: 13px;
  line-height: 1.6;
}`;
