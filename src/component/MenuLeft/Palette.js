import React from "react";
import { Dropdown } from "antd";
import { observer, inject } from "mobx-react";

import { PALETTES } from "../../utils/palette";
import "./Palette.css";

// 主题色：换掉主题里的 --accent / --accent-soft，复制到公众号时会解析成字面色值
@inject("content")
@observer
class Palette extends React.Component {
  choose = id => {
    this.props.content.setPalette(id);
  };

  chooseCustom = e => {
    this.props.content.setPalette("custom", e.target.value);
  };

  render() {
    const { paletteId, paletteCustom } = this.props.content;
    const current = this.props.content.currentPalette();

    const overlay = (
      <div className="nice-palette-panel">
        <div className="nice-palette-title">主题色</div>
        <div className="nice-palette-grid">
          {PALETTES.map(p => (
            <button
              key={p.id}
              type="button"
              id={`nice-menu-palette-${p.id}`}
              className={`nice-palette-item${
                paletteId === p.id ? " is-active" : ""
              }`}
              onClick={() => this.choose(p.id)}
            >
              <i
                className={
                  p.accent ? "nice-palette-dot" : "nice-palette-dot is-default"
                }
                style={p.accent ? { background: p.accent } : undefined}
              />
              <span>{p.name}</span>
            </button>
          ))}
          <label
            className={`nice-palette-item${
              paletteId === "custom" ? " is-active" : ""
            }`}
          >
            <input
              type="color"
              value={paletteCustom || "#9c5b2e"}
              onChange={this.chooseCustom}
            />
            <span>自选</span>
          </label>
        </div>
        <div className="nice-palette-hint">
          只替换主题里的点缀色，正文仍是黑灰
        </div>
      </div>
    );

    return (
      <Dropdown
        overlay={overlay}
        trigger={["click"]}
        overlayClassName="nice-overlay"
      >
        <a id="nice-menu-palette" className="nice-menu-link" href="#">
          <i
            className={
              current.accent
                ? "nice-palette-dot is-small"
                : "nice-palette-dot is-small is-default"
            }
            style={current.accent ? { background: current.accent } : undefined}
          />
          主题色
        </a>
      </Dropdown>
    );
  }
}

export default Palette;
