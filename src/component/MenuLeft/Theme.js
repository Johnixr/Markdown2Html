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
        themeId: "editorial",
        name: "01 编辑部",
        css: TEMPLATE.theme.editorial
      },
      { themeId: "songke", name: "02 宋刻", css: TEMPLATE.theme.songke },
      { themeId: "swiss", name: "03 瑞士", css: TEMPLATE.theme.swiss },
      { themeId: "journal", name: "04 学刊", css: TEMPLATE.theme.journal },
      { themeId: "terminal", name: "05 终端", css: TEMPLATE.theme.terminal },
      { themeId: "magazine", name: "06 杂志", css: TEMPLATE.theme.magazine },
      { themeId: "report", name: "07 报告", css: TEMPLATE.theme.report },
      { themeId: "quiet", name: "08 留白", css: TEMPLATE.theme.quiet },
      { themeId: "seal", name: "09 印章", css: TEMPLATE.theme.seal },
      { themeId: "timeline", name: "10 编年", css: TEMPLATE.theme.timeline },
      { themeId: "outline", name: "11 描边", css: TEMPLATE.theme.outline },
      { themeId: "coords", name: "12 坐标", css: TEMPLATE.theme.coords },
      { themeId: "margin", name: "13 页边", css: TEMPLATE.theme.margin },
      { themeId: "letter", name: "14 尺素", css: TEMPLATE.theme.letter },
      { themeId: "tag", name: "15 标签", css: TEMPLATE.theme.tag },
      { themeId: "newspaper", name: "16 报刊", css: TEMPLATE.theme.newspaper },
      { themeId: "card", name: "17 卡片", css: TEMPLATE.theme.card },
      { themeId: "annotate", name: "18 批注", css: TEMPLATE.theme.annotate },
      { themeId: "compose", name: "19 构成", css: TEMPLATE.theme.compose },
      { themeId: "plaque", name: "20 铭牌", css: TEMPLATE.theme.plaque },
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
        style = TEMPLATE.theme.editorial || TEMPLATE.theme.custom;
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
