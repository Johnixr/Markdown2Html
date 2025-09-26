export default `/* 沙漠绿洲幻境 - style-17-desert-oasis.css */

/* Style 17: 沙漠绿洲幻境 - Desert Oasis Mirage */

/* 全局属性 */
#nice {
  font-family: 'Georgia', 'Times New Roman', serif;
  color: #4a4031;
  background: linear-gradient(180deg, #fdf4e3 0%, #f4e4c1 100%);
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
  color: #5d4e37;
  margin: 18px 0;
  letter-spacing: 0.3px;
}

/* 一级标题 - 沙丘曲线 */
#nice h1 {
  font-size: 44px;
  font-weight: 800;
  margin: 56px 0 36px 0;
  color: #ffffff;
  background: linear-gradient(135deg, #d4a574 0%, #c19a6b 25%, #b08d57 50%, #cdaa7d 100%);
  padding: 36px;
  text-align: center;
  position: relative;
  border-radius: 200px 20px 200px 20px;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
}

/* 二级标题 - 绿洲清泉 */
#nice h2 {
  font-size: 28px;
  font-weight: 700;
  margin: 36px 0 24px 0;
  color: #228b22;
  padding: 14px 28px;
  background: linear-gradient(90deg, rgba(34, 139, 34, 0.1) 0%, transparent 100%);
  border-left: 6px solid #228b22;
  position: relative;
}

#nice h2:after {
  content: '🌴';
  position: absolute;
  right: 28px;
  opacity: 0.3;
  font-size: 24px;
}

/* 三级标题 */
#nice h3 {
  font-size: 20px;
  font-weight: 600;
  margin: 28px 0 16px 0;
  color: #b08d57;
  padding-bottom: 8px;
  border-bottom: 2px dotted #d4a574;
}

/* 引用 - 海市蜃楼 */
#nice blockquote {
  margin: 32px 0;
  padding: 24px;
  background: linear-gradient(135deg, rgba(212, 165, 116, 0.1) 0%, rgba(34, 139, 34, 0.05) 100%);
  border: 1px solid #d4a574;
  border-radius: 8px;
  position: relative;
  font-style: italic;
}

#nice blockquote:before {
  content: '"';
  position: absolute;
  top: -10px;
  left: 20px;
  font-size: 48px;
  color: #d4a574;
  font-family: Georgia, serif;
}

#nice blockquote p {
  color: #5d4e37;
  margin: 8px 0;
}

/* 链接 - 绿洲生机 */
#nice a {
  color: #228b22;
  text-decoration: none;
  font-weight: 600;
  padding: 2px 6px;
  border-bottom: 2px solid #228b22;
  transition: all 0.3s;
}

#nice a:hover {
  background: rgba(34, 139, 34, 0.1);
  border-radius: 4px;
}

/* 加粗 - 烈日金沙 */
#nice strong {
  font-weight: 700;
  color: #ffffff;
  background: linear-gradient(135deg, #d4a574, #b08d57);
  padding: 3px 10px;
  margin: 0 2px;
  border-radius: 4px;
  display: inline-block;
  box-shadow: 2px 2px 4px rgba(0,0,0,0.1);
}

/* 列表 */
#nice ul li:before {
  content: '◆';
  position: absolute;
  left: 0;
  color: #d4a574;
  font-size: 14px;
}

#nice ol li:before {
  background: #b08d57;
  color: #ffffff;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 700;
}

/* 代码块 - 古老石板 */
#nice pre {
  margin: 32px 0;
  background: #4a4031;
  color: #f4e4c1;
  padding: 28px;
  border: 2px solid #b08d57;
  border-radius: 8px;
  position: relative;
}

#nice pre code {
  color: #f4e4c1;
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
  border: 8px solid #ffffff;
  box-shadow: 0 12px 36px rgba(176, 141, 87, 0.3);
  border-radius: 8px;
}`;
