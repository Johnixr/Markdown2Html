export default `/* 黄金分割美学 - style-48-golden-ratio.css */

/* Style 48: 黄金分割美学 - Golden Ratio Aesthetics */

/* 全局属性 */
#nice {
  font-family: 'Bodoni', 'Georgia', serif;
  color: #3a3a3a;
  background: linear-gradient(180deg, #fdfcfb 0%, #f5f3f0 100%);
  font-size: 15px;
  line-height: 1.618;
  padding: 40px;
  max-width: 900px;
  margin: 0 auto;
}

/* 段落 */
#nice p {
  font-size: 15px;
  line-height: 1.618;
  color: #4a4a4a;
  margin: 16.18px 0;
  letter-spacing: 0.3px;
}

/* 一级标题 - 黄金螺旋 */
#nice h1 {
  font-size: 46.98px; /* 29px * 1.618 */
  font-weight: 300;
  margin: 61.8px 0 38.2px 0;
  background: linear-gradient(135deg,
    #d4af37 0%, #f4e4c1 38.2%, #d4af37 61.8%, #f4e4c1 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-align: center;
  letter-spacing: 6.18px;
  position: relative;
}

#nice h1:after {
  content: '1.618';
  display: block;
  font-size: 16.18px;
  color: #d4af37;
  margin-top: 16.18px;
  opacity: 0.382;
}

/* 二级标题 - 黄金矩形 */
#nice h2 {
  font-size: 29px;
  font-weight: 400;
  margin: 38.2px 0 23.6px 0;
  color: #2a2a2a;
  padding: 16.18px 26.18px;
  background: linear-gradient(90deg, #f4e4c1 0%, #f4e4c1 61.8%, transparent 61.8%);
  position: relative;
}

#nice h2:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 3.82px;
  height: 100%;
  background: #d4af37;
}

/* 三级标题 */
#nice h3 {
  font-size: 18px;
  font-weight: 500;
  margin: 23.6px 0 14.6px 0;
  color: #d4af37;
  padding: 10px 0;
  border-top: 1px solid #d4af37;
  border-bottom: 1px solid #d4af37;
}

/* 引用 - 斐波那契 */
#nice blockquote {
  margin: 38.2px 0;
  padding: 23.6px 38.2px;
  background: linear-gradient(135deg,
    rgba(212, 175, 55, 0.05) 0%,
    rgba(244, 228, 193, 0.1) 61.8%,
    rgba(212, 175, 55, 0.05) 100%);
  border-left: 3.82px solid #d4af37;
  position: relative;
}

#nice blockquote:before {
  content: '0, 1, 1, 2, 3, 5, 8, 13...';
  position: absolute;
  top: -10px;
  left: 16.18px;
  background: #fdfcfb;
  color: #d4af37;
  padding: 0 10px;
  font-size: 10px;
  font-style: italic;
  opacity: 0.618;
}

#nice blockquote p {
  color: #4a4a4a;
  margin: 10px 0;
  font-style: italic;
}

/* 链接 - 金色比例 */
#nice a {
  color: #d4af37;
  text-decoration: none;
  font-weight: 500;
  padding: 3.82px 6.18px;
  background: rgba(212, 175, 55, 0.1);
  border-bottom: 1.618px solid #d4af37;
  transition: all 0.382s;
}

#nice a:hover {
  background: rgba(212, 175, 55, 0.2);
  padding: 3.82px 10px;
}

/* 加粗 - 黄金高亮 */
#nice strong {
  font-weight: 600;
  color: #2a2a2a;
  background: linear-gradient(90deg, #f4e4c1 0%, #d4af37 61.8%, #f4e4c1 100%);
  padding: 3.82px 10px;
  margin: 0 3.82px;
  display: inline-block;
}

/* 代码块 - 完美比例 */
#nice pre {
  margin: 38.2px 0;
  background: #2a2a2a;
  color: #f4e4c1;
  padding: 23.6px 38.2px;
  border: 1.618px solid #d4af37;
  position: relative;
}

#nice pre:before {
  content: 'φ = 1.618033988...';
  position: absolute;
  top: 6.18px;
  right: 10px;
  color: #d4af37;
  font-size: 10px;
  opacity: 0.618;
}

#nice pre code {
  color: #f4e4c1;
  font-family: 'Consolas', monospace;
  font-size: 13px;
  line-height: 1.618;
}`;
