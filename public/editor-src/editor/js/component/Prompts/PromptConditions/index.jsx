import React, { Component } from "react";
import classnames from "classnames";
import Fixed from "visual/component/Prompts/Fixed";
import EditorIcon from "visual/component/EditorIcon";
import Config from "visual/global/Config";
import { t } from "visual/utils/i18n";
import { IS_PRO } from "visual/utils/env";
import items from "./items";

const ConfigUrls = Config.get("urls");

export default class PromptConditions extends Component {
  static defaultProps = {
    options: [],
    onChange: () => {},
    onClose: () => {}
  };

  state = {
    activeTab: this.props.options[0].type
  };

  handleTabChange = activeTab => this.setState({ activeTab });

  renderIcons() {
    const { options } = this.props;
    const { activeTab } = this.state;

    return options.map(option => {
      const className = classnames(
        "brz-ed-popup-tab-item",
        "brz-ed-popup-tab-item-conditions",
        {
          active: activeTab === option.type
        }
      );

      return (
        <div
          key={option.type}
          className={className}
          onClick={() => this.handleTabChange(option.type)}
        >
          <div className="brz-ed-popup-tab-icon">
            <EditorIcon icon={option.icon} />
          </div>
          <div className="brz-ed-popup-tab-name">{option.label}</div>
        </div>
      );
    });
  }

  renderProException() {
    return (
      <div className="brz-ed-alert brz-ed-alert-pro brz-mb-lg-0">
        <span className="brz-span">
          {t("Block conditions are available only in PRO")}
        </span>
        <a
          className="brz-ed-btn brz-ed-btn-width-2 brz-ed-btn-sm brz-ed-btn-icon brz-ed-btn-icon--left brz-ed-btn-rounded brz-ed-btn-pro"
          rel="noopener noreferrer"
          href={ConfigUrls.upgradeToPro}
          target="_blank"
        >
          <EditorIcon icon="nc-lock" />
          {t("Get a PRO plan")}
        </a>
      </div>
    );
  }

  render() {
    const { options, opened, onClose } = this.props;
    const { activeTab } = this.state;
    const Item = items[activeTab];

    // eslint-disable-next-line no-unused-vars
    const { type, icon, label, title, ...itemProps } = options.find(
      ({ type }) => type === activeTab
    );

    return (
      <Fixed opened={opened} onClose={onClose}>
        <div className="brz-ed-popup-wrapper">
          <div className="brz-ed-popup-header">
            <div className="brz-ed-popup-header__tabs">
              {this.renderIcons()}
            </div>
            <div className="brz-ed-popup-btn-close" onClick={onClose} />
          </div>
          <div className="brz-ed-popup-content brz-ed-popup-pane brz-ed-popup-icons">
            <div className="brz-ed-popup-body">
              {!IS_PRO && this.renderProException()}
              <div
                className={classnames("brz-ed-popup-conditions", {
                  "brz-ed-popup-conditions__free": !IS_PRO
                })}
              >
                <div className="brz-ed-popup-conditions__head">
                  <h3>{title}</h3>
                </div>
                <div className="brz-ed-popup-conditions__body">
                  <Item {...itemProps} onClose={onClose} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fixed>
    );
  }
}
