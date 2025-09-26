export default `/* 蒸汽朋克铜锈 - style-35-steampunk-copper.css */

/* Style 35: 蒸汽朋克铜锈 - Steampunk Copper Rust */

/* 全局属性 */
#nice {
  font-family: 'Playfair Display', 'Georgia', serif;
  color: #3e2723;
  background: linear-gradient(180deg, #f5e6d3 0%, #e8d4b0 100%);
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
  color: #4e342e;
  margin: 18px 0;
  letter-spacing: 0.3px;
}

/* 一级标题 - 齿轮铜器 */
#nice h1 {
  font-size: 46px;
  font-weight: 900;
  margin: 56px 0 36px 0;
  color: #d4a373;
  background: linear-gradient(135deg, #8d5524 0%, #c68642 25%, #f9c74f 50%, #c68642 75%, #8d5524 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 3px;
  position: relative;
  padding: 36px 0;
}

#nice h1:before,
#nice h1:after {
  content: '⚙';
  position: absolute;
  color: #8d5524;
  font-size: 32px;
}

#nice h1:before {
  top: 8px;
  left: 40px;
}

#nice h1:after {
  bottom: 8px;
  right: 40px;
}

/* 二级标题 - 铜管装饰 */
#nice h2 {
  font-size: 28px;
  font-weight: 700;
  margin: 36px 0 24px 0;
  color: #5d4037;
  background: linear-gradient(90deg, #d4a373 0%, #c68642 100%);
  padding: 14px 32px;
  display: inline-block;
  border: 3px solid #8d5524;
  box-shadow: 6px 6px 0 #6f4e37;
  position: relative;
}

/* 三级标题 */
#nice h3 {
  font-size: 20px;
  font-weight: 600;
  margin: 28px 0 16px 0;
  color: #8d5524;
  padding: 8px 0;
  border-top: 2px solid #c68642;
  border-bottom: 2px solid #c68642;
}

/* 引用 - 古老卷轴 */
#nice blockquote {
  margin: 32px 0;
  padding: 24px;
  background: linear-gradient(135deg, rgba(141, 85, 36, 0.1) 0%, rgba(198, 134, 66, 0.1) 100%);
  border: 2px solid #8d5524;
  position: relative;
  font-style: italic;
}

#nice blockquote:before,
#nice blockquote:after {
  content: '⚙';
  position: absolute;
  color: #c68642;
  font-size: 20px;
}

#nice blockquote:before {
  top: -10px;
  left: 20px;
  background: #f5e6d3;
  padding: 0 8px;
}

#nice blockquote:after {
  bottom: -10px;
  right: 20px;
  background: #f5e6d3;
  padding: 0 8px;
}

#nice blockquote p {
  color: #4e342e;
  margin: 8px 0;
}

/* 链接 - 铜质链条 */
#nice a {
  color: #8d5524;
  text-decoration: none;
  font-weight: 600;
  padding: 2px 8px;
  background: rgba(198, 134, 66, 0.2);
  border-bottom: 2px solid #c68642;
  transition: all 0.3s;
}

#nice a:hover {
  background: #c68642;
  color: #ffffff;
}

/* 加粗 - 蒸汽压力 */
#nice strong {
  font-weight: 800;
  color: #ffffff;
  background: linear-gradient(135deg, #8d5524, #6f4e37);
  padding: 3px 12px;
  margin: 0 2px;
  display: inline-block;
  border-radius: 4px;
  box-shadow: 2px 2px 0 #c68642;
}

/* 代码块 - 机械终端 */
#nice pre {
  margin: 32px 0;
  background: #3e2723;
  color: #f9c74f;
  padding: 28px;
  border: 3px solid #8d5524;
  position: relative;
}

#nice pre:before {
  content: 'MECHANISM';
  position: absolute;
  top: -12px;
  left: 20px;
  background: #f5e6d3;
  color: #8d5524;
  padding: 0 12px;
  font-weight: 700;
  font-size: 11px;
  letter-spacing: 2px;
}

#nice pre code {
  color: #f9c74f;
  font-family: 'Courier New', monospace;
  font-size: 13px;
  line-height: 1.6;
}`;
