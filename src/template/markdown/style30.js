export default `/* 月光银河 - style-30-moonlight-galaxy.css */

/* Style 30: 月光银河 - Moonlight Galaxy */

/* 全局属性 */
#nice {
  font-family: 'Helvetica Neue', 'Arial', sans-serif;
  color: #e0e7ff;
  background: linear-gradient(180deg, #0f0c29 0%, #302b63 50%, #24243e 100%);
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
  color: #c7d2fe;
  margin: 18px 0;
  letter-spacing: 0.3px;
}

/* 一级标题 - 银河流光 */
#nice h1 {
  font-size: 44px;
  font-weight: 800;
  margin: 56px 0 36px 0;
  background: linear-gradient(135deg, #a78bfa 0%, #c4b5fd 25%, #e0e7ff 50%, #c4b5fd 75%, #a78bfa 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 4px;
  padding: 32px 0;
  text-shadow: 0 0 30px rgba(167, 139, 250, 0.5);
  position: relative;
}

#nice h1:after {
  content: '✦ ✦ ✦';
  display: block;
  font-size: 16px;
  margin-top: 16px;
  opacity: 0.6;
  color: #a78bfa;
}

/* 二级标题 - 星云紫光 */
#nice h2 {
  font-size: 28px;
  font-weight: 700;
  margin: 36px 0 24px 0;
  color: #e0e7ff;
  background: rgba(167, 139, 250, 0.2);
  padding: 14px 28px;
  border: 1px solid #a78bfa;
  display: inline-block;
  border-radius: 30px;
  box-shadow: 0 0 20px rgba(167, 139, 250, 0.3);
}

/* 三级标题 */
#nice h3 {
  font-size: 20px;
  font-weight: 600;
  margin: 28px 0 16px 0;
  color: #c4b5fd;
  padding-left: 20px;
  position: relative;
}

#nice h3:before {
  content: '✧';
  position: absolute;
  left: 0;
  color: #a78bfa;
  font-size: 18px;
}

/* 引用 - 星辰低语 */
#nice blockquote {
  margin: 32px 0;
  padding: 24px;
  background: rgba(167, 139, 250, 0.1);
  border-left: 3px solid #a78bfa;
  border-radius: 8px;
  position: relative;
  backdrop-filter: blur(10px);
}

#nice blockquote:before {
  content: '★';
  position: absolute;
  top: 12px;
  left: 16px;
  color: #a78bfa;
  font-size: 20px;
  opacity: 0.5;
}

#nice blockquote p {
  color: #e0e7ff;
  font-style: italic;
  margin: 8px 0;
}

/* 链接 - 星链连接 */
#nice a {
  color: #a78bfa;
  text-decoration: none;
  font-weight: 600;
  padding: 2px 8px;
  background: rgba(167, 139, 250, 0.1);
  border-radius: 4px;
  transition: all 0.3s;
}

#nice a:hover {
  background: rgba(167, 139, 250, 0.3);
  box-shadow: 0 0 12px rgba(167, 139, 250, 0.5);
  color: #e0e7ff;
}

/* 加粗 - 月光照耀 */
#nice strong {
  font-weight: 700;
  color: #0f0c29;
  background: linear-gradient(135deg, #c4b5fd, #e0e7ff);
  padding: 3px 10px;
  margin: 0 2px;
  border-radius: 16px;
  display: inline-block;
}

/* 列表 */
#nice ul li:before {
  content: '✦';
  position: absolute;
  left: 0;
  color: #a78bfa;
  font-size: 14px;
}

#nice ol li:before {
  background: linear-gradient(135deg, #a78bfa, #c4b5fd);
  color: #0f0c29;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 700;
}

/* 代码块 - 深空终端 */
#nice pre {
  margin: 32px 0;
  background: #0f0c29;
  color: #c4b5fd;
  padding: 28px;
  border: 1px solid #a78bfa;
  border-radius: 8px;
  position: relative;
  box-shadow: 0 0 30px rgba(167, 139, 250, 0.2);
}

#nice pre code {
  color: #c4b5fd;
  font-family: 'Monaco', 'Courier New', monospace;
  font-size: 13px;
  line-height: 1.6;
}

/* 图片 */
#nice img {
  max-width: 100%;
  height: auto;
  margin: 36px auto;
  display: block;
  border: 2px solid #a78bfa;
  border-radius: 12px;
  box-shadow: 0 12px 36px rgba(167, 139, 250, 0.3);
}`;
