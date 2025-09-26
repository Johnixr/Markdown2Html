import React from "react";
import { Menu, Dropdown } from "antd";
import { observer, inject } from "mobx-react";

import {
  RIGHT_SYMBOL,
  TEMPLATE_NUM,
  MARKDOWN_THEME_ID,
  STYLE
} from "../../utils/constant";
import { replaceStyle } from "../../utils/helper";
import TEMPLATE from "../../template/index";
import "./Theme.css";

@inject("content")
@inject("navbar")
@inject("view")
@observer
class Theme extends React.Component {
  changeTemplate = item => {
    const index = parseInt(item.key, 10);
    const { themeId, css } = this.props.content.themeList[index];
    this.props.navbar.setTemplateNum(index);

    // 更新style编辑器
    if (themeId === "custom") {
      this.props.content.setCustomStyle();
      // 切换自定义自动打开css编辑
      this.props.view.setStyleEditorOpen(true);
    } else {
      this.props.content.setStyle(css);
    }
  };

  toggleStyleEditor = () => {
    const { isStyleEditorOpen } = this.props.view;
    this.props.view.setStyleEditorOpen(!isStyleEditorOpen);
  };

  componentDidMount = async () => {
    const themeList = [
      {
        themeId: "style1",
        name: "1. 街头工业涂鸦革命",
        css: TEMPLATE.theme.style1
      },
      {
        themeId: "style2",
        name: "2. 深绿墨金皇家典藏",
        css: TEMPLATE.theme.style2
      },
      {
        themeId: "style3",
        name: "3. 赛博朋克霓虹",
        css: TEMPLATE.theme.style3
      },
      {
        themeId: "style4",
        name: "4. 极简主义大师",
        css: TEMPLATE.theme.style4
      },
      {
        themeId: "style5",
        name: "5. 瑞士国际主义",
        css: TEMPLATE.theme.style5
      },
      { themeId: "style6", name: "6. 孟菲斯波普", css: TEMPLATE.theme.style6 },
      { themeId: "style7", name: "7. 包豪斯工业", css: TEMPLATE.theme.style7 },
      { themeId: "style8", name: "8. 日式侘寂", css: TEMPLATE.theme.style8 },
      { themeId: "style9", name: "9. 野兽派艺术", css: TEMPLATE.theme.style9 },
      {
        themeId: "style10",
        name: "10. 未来主义宣言",
        css: TEMPLATE.theme.style10
      },
      { themeId: "style11", name: "11. 装饰艺术", css: TEMPLATE.theme.style11 },
      {
        themeId: "style12",
        name: "12. 野兽派建筑",
        css: TEMPLATE.theme.style12
      },
      { themeId: "style13", name: "13. 北欧极光", css: TEMPLATE.theme.style13 },
      { themeId: "style14", name: "14. 热带雨林", css: TEMPLATE.theme.style14 },
      { themeId: "style15", name: "15. 火星基地", css: TEMPLATE.theme.style15 },
      {
        themeId: "style16",
        name: "16. 深海生物光",
        css: TEMPLATE.theme.style16
      },
      { themeId: "style17", name: "17. 沙漠绿洲", css: TEMPLATE.theme.style17 },
      { themeId: "style18", name: "18. 紫禁城", css: TEMPLATE.theme.style18 },
      { themeId: "style19", name: "19. 极地暮光", css: TEMPLATE.theme.style19 },
      { themeId: "style20", name: "20. 樱花季", css: TEMPLATE.theme.style20 },
      { themeId: "style21", name: "21. 午夜爵士", css: TEMPLATE.theme.style21 },
      {
        themeId: "style22",
        name: "22. 地中海阳光",
        css: TEMPLATE.theme.style22
      },
      { themeId: "style23", name: "23. 秋枫", css: TEMPLATE.theme.style23 },
      { themeId: "style24", name: "24. 霓虹东京", css: TEMPLATE.theme.style24 },
      { themeId: "style25", name: "25. 薰衣草田", css: TEMPLATE.theme.style25 },
      { themeId: "style26", name: "26. 火山熔岩", css: TEMPLATE.theme.style26 },
      { themeId: "style27", name: "27. 北冰洋", css: TEMPLATE.theme.style27 },
      { themeId: "style28", name: "28. 橘子汽水", css: TEMPLATE.theme.style28 },
      { themeId: "style29", name: "29. 墨竹", css: TEMPLATE.theme.style29 },
      { themeId: "style30", name: "30. 蒸汽波", css: TEMPLATE.theme.style30 },
      { themeId: "style31", name: "31. 玛雅神庙", css: TEMPLATE.theme.style31 },
      { themeId: "style32", name: "32. 银河系", css: TEMPLATE.theme.style32 },
      { themeId: "style33", name: "33. 夏日蜜桃", css: TEMPLATE.theme.style33 },
      { themeId: "style34", name: "34. 秋枫", css: TEMPLATE.theme.style34 },
      { themeId: "style35", name: "35. 冬霜", css: TEMPLATE.theme.style35 },
      { themeId: "style36", name: "36. 春华", css: TEMPLATE.theme.style36 },
      { themeId: "style37", name: "37. 金色时光", css: TEMPLATE.theme.style37 },
      { themeId: "style38", name: "38. 暮光地带", css: TEMPLATE.theme.style38 },
      { themeId: "style39", name: "39. 北极光", css: TEMPLATE.theme.style39 },
      { themeId: "style40", name: "40. 热带天堂", css: TEMPLATE.theme.style40 },
      { themeId: "style41", name: "41. 复古报纸", css: TEMPLATE.theme.style41 },
      { themeId: "style42", name: "42. 霓虹都市", css: TEMPLATE.theme.style42 },
      { themeId: "style43", name: "43. 粉彩梦境", css: TEMPLATE.theme.style43 },
      { themeId: "style44", name: "44. 暗黑学院", css: TEMPLATE.theme.style44 },
      { themeId: "style45", name: "45. 宇宙紫", css: TEMPLATE.theme.style45 },
      { themeId: "style46", name: "46. 翡翠花园", css: TEMPLATE.theme.style46 },
      { themeId: "style47", name: "47. 火烈鸟粉", css: TEMPLATE.theme.style47 },
      {
        themeId: "style48",
        name: "48. 午夜海军蓝",
        css: TEMPLATE.theme.style48
      },
      { themeId: "style49", name: "49. 琥珀光辉", css: TEMPLATE.theme.style49 },
      { themeId: "style50", name: "50. 冰晶", css: TEMPLATE.theme.style50 },
      { themeId: "style51", name: "51. 青花瓷", css: TEMPLATE.theme.style51 },
      { themeId: "style52", name: "52. 星际深空", css: TEMPLATE.theme.style52 },
      { themeId: "style53", name: "53. 清纸", css: TEMPLATE.theme.style53 },
      { themeId: "style54", name: "54. 墨韵", css: TEMPLATE.theme.style54 },
      { themeId: "style55", name: "55. 北欧雪", css: TEMPLATE.theme.style55 },
      { themeId: "style56", name: "56. 禅石", css: TEMPLATE.theme.style56 },
      { themeId: "style57", name: "57. 纯棉", css: TEMPLATE.theme.style57 },
      { themeId: "style58", name: "58. 晨雾", css: TEMPLATE.theme.style58 },
      { themeId: "style59", name: "59. 宣纸", css: TEMPLATE.theme.style59 },
      { themeId: "style60", name: "60. 静谧灰", css: TEMPLATE.theme.style60 },
      { themeId: "style61", name: "61. 留白", css: TEMPLATE.theme.style61 },
      { themeId: "style62", name: "62. 软麻", css: TEMPLATE.theme.style62 },
      { themeId: "style63", name: "63. 极简黑", css: TEMPLATE.theme.style63 },
      { themeId: "style64", name: "64. 鸽灰", css: TEMPLATE.theme.style64 },
      { themeId: "style65", name: "65. 珍珠白", css: TEMPLATE.theme.style65 },
      { themeId: "style66", name: "66. 灰调", css: TEMPLATE.theme.style66 },
      { themeId: "style67", name: "67. 云白", css: TEMPLATE.theme.style67 },
      { themeId: "style68", name: "68. 炭黑", css: TEMPLATE.theme.style68 },
      { themeId: "style69", name: "69. 月光", css: TEMPLATE.theme.style69 },
      { themeId: "style70", name: "70. 羊皮纸", css: TEMPLATE.theme.style70 },
      { themeId: "style71", name: "71. 石碑", css: TEMPLATE.theme.style71 },
      { themeId: "style72", name: "72. 丝幕", css: TEMPLATE.theme.style72 },
      { themeId: "style73", name: "73. 晨岚", css: TEMPLATE.theme.style73 },
      { themeId: "style74", name: "74. 海风", css: TEMPLATE.theme.style74 },
      { themeId: "style75", name: "75. 沙丘", css: TEMPLATE.theme.style75 },
      { themeId: "style76", name: "76. 竹林", css: TEMPLATE.theme.style76 },
      { themeId: "style77", name: "77. 山巅", css: TEMPLATE.theme.style77 },
      { themeId: "style78", name: "78. 河石", css: TEMPLATE.theme.style78 },
      { themeId: "style79", name: "79. 秋叶", css: TEMPLATE.theme.style79 },
      { themeId: "style80", name: "80. 冬松", css: TEMPLATE.theme.style80 },
      { themeId: "style81", name: "81. 春雨", css: TEMPLATE.theme.style81 },
      { themeId: "style82", name: "82. 夏空", css: TEMPLATE.theme.style82 },
      { themeId: "style83", name: "83. 极夜", css: TEMPLATE.theme.style83 },
      { themeId: "style84", name: "84. 金麦", css: TEMPLATE.theme.style84 },
      { themeId: "style85", name: "85. 数字蓝图", css: TEMPLATE.theme.style85 },
      {
        themeId: "style86",
        name: "86. 城市混凝土",
        css: TEMPLATE.theme.style86
      },
      {
        themeId: "style87",
        name: "87. 复古打字机",
        css: TEMPLATE.theme.style87
      },
      { themeId: "style88", name: "88. 北欧暮光", css: TEMPLATE.theme.style88 },
      { themeId: "style89", name: "89. 和纸", css: TEMPLATE.theme.style89 },
      { themeId: "style90", name: "90. 瑞士网格", css: TEMPLATE.theme.style90 },
      {
        themeId: "style91",
        name: "91. 包豪斯原色",
        css: TEMPLATE.theme.style91
      },
      { themeId: "style92", name: "92. 黑白胶片", css: TEMPLATE.theme.style92 },
      { themeId: "style93", name: "93. 建筑草图", css: TEMPLATE.theme.style93 },
      { themeId: "style94", name: "94. 编辑经典", css: TEMPLATE.theme.style94 },
      { themeId: "style95", name: "95. 博物馆白", css: TEMPLATE.theme.style95 },
      { themeId: "style96", name: "96. 画廊光影", css: TEMPLATE.theme.style96 },
      {
        themeId: "style97",
        name: "97. 图书馆静谧",
        css: TEMPLATE.theme.style97
      },
      { themeId: "style98", name: "98. 工作室光", css: TEMPLATE.theme.style98 },
      { themeId: "style99", name: "99. 北极狐", css: TEMPLATE.theme.style99 },
      {
        themeId: "style100",
        name: "100. 薰衣草梦境",
        css: TEMPLATE.theme.style100
      },
      {
        themeId: "style101",
        name: "101. 静谧晨曦",
        css: TEMPLATE.theme.style101
      },
      {
        themeId: "style102",
        name: "102. 极简精英",
        css: TEMPLATE.theme.style102
      },
      {
        themeId: "style103",
        name: "103. 霓虹狂欢夜",
        css: TEMPLATE.theme.style103
      },
      {
        themeId: "style104",
        name: "104. 赛博朋克市集",
        css: TEMPLATE.theme.style104
      },
      {
        themeId: "style105",
        name: "105. 糖果工厂爆炸",
        css: TEMPLATE.theme.style105
      },
      {
        themeId: "style106",
        name: "106. 复古电玩街机",
        css: TEMPLATE.theme.style106
      },
      {
        themeId: "style107",
        name: "107. 波普艺术画廊",
        css: TEMPLATE.theme.style107
      },
      {
        themeId: "style108",
        name: "108. 迷幻太空迪斯科",
        css: TEMPLATE.theme.style108
      },
      {
        themeId: "style109",
        name: "109. 热带雨林冲浪",
        css: TEMPLATE.theme.style109
      },
      {
        themeId: "style110",
        name: "110. 街头涂鸦拼贴",
        css: TEMPLATE.theme.style110
      },
      {
        themeId: "style111",
        name: "111. 几何万花筒梦境",
        css: TEMPLATE.theme.style111
      },
      {
        themeId: "style112",
        name: "112. 未来复古派对",
        css: TEMPLATE.theme.style112
      },
      { themeId: "custom", name: "自定义", css: TEMPLATE.theme.custom }
    ];

    this.props.content.setThemeList(themeList);
    // 设置一下自定义的规则
    if (!window.localStorage.getItem(STYLE)) {
      window.localStorage.setItem(STYLE, TEMPLATE.theme.custom);
    }
    const templateNum = parseInt(window.localStorage.getItem(TEMPLATE_NUM), 10);

    // 主题样式初始化，属于自定义主题则从localstorage中读数据
    let style = "";
    if (templateNum === themeList.length - 1) {
      style = window.localStorage.getItem(STYLE);
    } else {
      if (templateNum >= 0 && templateNum < themeList.length) {
        const { css } = themeList[templateNum];
        style = css;
      } else {
        style = TEMPLATE.theme.style1 || TEMPLATE.theme.custom;
      }
    }
    this.props.content.setStyle(style);
    replaceStyle(MARKDOWN_THEME_ID, style);
  };

  render() {
    const { templateNum } = this.props.navbar;
    const { themeList } = this.props.content;

    const menuStyle = {
      maxHeight: "400px",
      overflowY: "auto",
      overflowX: "hidden"
    };

    const menuItems = [];

    // 添加所有主题项
    for (let i = 0; i < themeList.length; i++) {
      const option = themeList[i];
      menuItems.push(
        <Menu.Item key={i}>
          <div
            id={`nice-menu-theme-${option.themeId}`}
            className="nice-themeselect-theme-item"
          >
            <span>
              <span className="nice-themeselect-theme-item-flag">
                {templateNum === i && <span>{RIGHT_SYMBOL}</span>}
              </span>
              <span className="nice-themeselect-theme-item-name">
                {option.name}
              </span>
            </span>
          </div>
        </Menu.Item>
      );
    }

    // 添加分隔线
    menuItems.push(<Menu.Divider key="divider" />);

    // 添加查看CSS选项
    menuItems.push(
      <li key="css-viewer" className="nice-themeselect-menu-item">
        <div
          id="nice-menu-view-css"
          className="nice-themeselect-theme-item"
          onClick={this.toggleStyleEditor}
        >
          <span>
            <span className="nice-themeselect-theme-item-flag">
              {this.props.view.isStyleEditorOpen && <span>{RIGHT_SYMBOL}</span>}
            </span>
            <span className="nice-themeselect-theme-item-name">
              查看主题 CSS
            </span>
          </span>
        </div>
      </li>
    );

    const mdMenu = (
      <Menu onClick={this.changeTemplate} style={menuStyle}>
        {menuItems}
      </Menu>
    );

    return (
      <Dropdown
        overlay={mdMenu}
        trigger={["click"]}
        overlayClassName="nice-overlay"
      >
        <a id="nice-menu-theme" className="nice-menu-link" href="#">
          主题
        </a>
      </Dropdown>
    );
  }
}

export default Theme;
