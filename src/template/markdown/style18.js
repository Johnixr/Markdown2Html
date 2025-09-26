export default `/* 紫禁城皇家 - style-18-forbidden-city.css */

/* Style 18: 紫禁城皇家 - Forbidden City Imperial */

/* 全局属性 */
#nice {
  font-family: 'Songti SC', 'STSong', 'Georgia', serif;
  color: #3d2914;
  background: linear-gradient(180deg, #fef9f3 0%, #fdf4e8 100%);
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
  color: #4a3426;
  margin: 18px 0;
  letter-spacing: 0.5px;
}

/* 一级标题 - 龙纹御制 */
#nice h1 {
  font-size: 46px;
  font-weight: 900;
  margin: 56px 0 36px 0;
  color: #ffd700;
  background: linear-gradient(135deg, #8b0000 0%, #dc143c 50%, #8b0000 100%);
  padding: 40px;
  text-align: center;
  position: relative;
  text-shadow: 2px 2px 0 #4a0404;
}

#nice h1:before,
#nice h1:after {
  content: '◈';
  position: absolute;
  color: #ffd700;
  font-size: 32px;
}

#nice h1:before {
  top: 12px;
  left: 40px;
}

#nice h1:after {
  bottom: 12px;
  right: 40px;
}

/* 二级标题 - 朱门金匾 */
#nice h2 {
  font-size: 30px;
  font-weight: 700;
  margin: 36px 0 24px 0;
  color: #8b0000;
  padding: 16px 32px;
  background: linear-gradient(90deg, #ffd700 0%, #ffed4e 50%, #ffd700 100%);
  display: inline-block;
  position: relative;
  box-shadow: 4px 4px 0 #8b0000;
}

/* 三级标题 */
#nice h3 {
  font-size: 20px;
  font-weight: 600;
  margin: 28px 0 16px 0;
  color: #dc143c;
  padding: 8px 0;
  border-top: 2px solid #ffd700;
  border-bottom: 2px solid #ffd700;
}

/* 引用 - 圣旨卷轴 */
#nice blockquote {
  margin: 32px 0;
  padding: 28px;
  background: linear-gradient(180deg, #fff8dc 0%, #faebd7 100%);
  border: 3px solid #8b0000;
  position: relative;
  box-shadow: 0 8px 24px rgba(139, 0, 0, 0.2);
}

#nice blockquote:before,
#nice blockquote:after {
  content: '';
  position: absolute;
  width: 100px;
  height: 4px;
  background: #ffd700;
}

#nice blockquote:before {
  top: 12px;
  left: 50%;
  transform: translateX(-50%);
}

#nice blockquote:after {
  bottom: 12px;
  left: 50%;
  transform: translateX(-50%);
}

#nice blockquote p {
  color: #4a3426;
  font-style: normal;
  margin: 8px 0;
  text-align: center;
}

/* 链接 - 玺印朱批 */
#nice a {
  color: #8b0000;
  text-decoration: none;
  font-weight: 600;
  padding: 2px 8px;
  background: rgba(255, 215, 0, 0.2);
  border: 1px solid #dc143c;
  transition: all 0.3s;
}

#nice a:hover {
  background: #dc143c;
  color: #ffd700;
}

/* 加粗 - 御笔钦定 */
#nice strong {
  font-weight: 800;
  color: #ffd700;
  background: #8b0000;
  padding: 4px 12px;
  margin: 0 2px;
  border-radius: 4px;
  display: inline-block;
  box-shadow: 2px 2px 0 #4a0404;
}

/* 列表 */
#nice ul li:before {
  content: '◆';
  position: absolute;
  left: 0;
  color: #dc143c;
  font-size: 14px;
}

#nice ol li:before {
  background: linear-gradient(135deg, #8b0000, #dc143c);
  color: #ffd700;
  width: 26px;
  height: 26px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  font-weight: 700;
}

/* 代码块 - 墨玉石刻 */
#nice pre {
  margin: 32px 0;
  background: #2c1810;
  color: #ffd700;
  padding: 32px;
  border: 3px solid #8b0000;
  position: relative;
}

#nice pre:before {
  content: '〔 典 〕';
  position: absolute;
  top: -14px;
  left: 24px;
  background: #fef9f3;
  color: #8b0000;
  padding: 0 12px;
  font-weight: 700;
}

#nice pre code {
  color: #ffd700;
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
  border: 8px solid #8b0000;
  box-shadow: 0 0 0 2px #ffd700, 0 12px 36px rgba(139, 0, 0, 0.3);
  padding: 8px;
  background: #ffffff;
}`;
