import classnames from "classnames";
import React from "react";
import CustomCSS from "visual/component/CustomCSS";
import Facebook from "visual/component/Facebook";
import Toolbar from "visual/component/Toolbar";
import EditorComponent from "visual/editorComponents/EditorComponent";
import { css } from "visual/utils/cssStyle";
import { makePlaceholder } from "visual/utils/dynamicContent";
import defaultValue from "./defaultValue.json";
import * as sidebarConfig from "./sidebar";
import { style } from "./styles";
import * as toolbarConfig from "./toolbar";

class FacebookGroup extends EditorComponent {
  static get componentId() {
    return "FacebookGroup";
  }

  static defaultValue = defaultValue;

  getAppData() {
    return {
      appId: 113869198637480,
      lang: makePlaceholder({
        content: "{{ brizy_dc_page_language }}"
      })
    };
  }

  renderForEdit(v, vs, vd) {
    const { width, href, showSocialContext, showMetaData, skin } = v;
    const appData = this.getAppData();
    const data = {
      width,
      href: href === "" ? "https://www.facebook.com/groups/brizy/" : href,
      showSocialContext: showSocialContext === "on",
      showMetaData: showMetaData === "on",
      skin,
      lang: appData.lang
    };
    const className = classnames(
      "brz-fb-group",
      css(
        `${this.constructor.componentId}`,
        `${this.getId()}`,
        style(v, vs, vd)
      )
    );

    return (
      <Toolbar
        {...this.makeToolbarPropsFromConfig2(toolbarConfig, sidebarConfig)}
      >
        <CustomCSS selectorName={this.getId()} css={v.customCSS}>
          <div className={className}>
            <Facebook appId={appData.appId} type="Group" data={data} />
          </div>
        </CustomCSS>
      </Toolbar>
    );
  }

  renderForView(v, vs, vd) {
    const { width, href, showSocialContext, showMetaData, skin } = v;
    const appData = this.getAppData();
    const data = {
      "data-width": width,
      "data-href":
        href === "" ? "https://www.facebook.com/groups/brizy/" : href,
      "data-show-social-context": showSocialContext === "on",
      "data-show-metadata": showMetaData === "on",
      "data-skin": skin,
      "data-lang": appData.lang
    };
    const className = classnames(
      "brz-fb-group",
      css(
        `${this.constructor.componentId}`,
        `${this.getId()}`,
        style(v, vs, vd)
      )
    );
    return (
      <CustomCSS selectorName={this.getId()} css={v.customCSS}>
        <div className={className}>
          <Facebook appId={appData.appId} type="Group" data={data} />
        </div>
      </CustomCSS>
    );
  }
}

export default FacebookGroup;
