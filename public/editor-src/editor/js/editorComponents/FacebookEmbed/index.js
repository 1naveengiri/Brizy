import classnames from "classnames";
import React from "react";
import CustomCSS from "visual/component/CustomCSS";
import Facebook from "visual/component/Facebook";
import Toolbar from "visual/component/Toolbar";
//import Config from "visual/global/Config";
import EditorComponent from "visual/editorComponents/EditorComponent";
import { css } from "visual/utils/cssStyle";
import { makePlaceholder } from "visual/utils/dynamicContent";
import defaultValue from "./defaultValue.json";
import * as sidebarConfig from "./sidebar";
import { style } from "./styles";
import * as toolbarConfig from "./toolbar";

class FacebookEmbed extends EditorComponent {
  static get componentId() {
    return "FacebookEmbed";
  }

  static defaultValue = defaultValue;

  getAppData() {
    //const { social = [] } = Config.get("applications");
    //const facebook = social.find(({ service }) => service === "facebook");

    return {
      //appId: facebook && facebook.appid ? facebook.appid : "nick",

      appId: 113869198637480,
      lang: makePlaceholder({
        content: "{{ brizy_dc_page_language }}"
      })
    };
  }

  renderForEdit(v, vs, vd) {
    const {
      type,
      postAndVideoShowText,
      videoAllowFullScreen,
      videoAutoPlay,
      videoCaptions,
      postHref,
      videoHref
    } = v;
    const appData = this.getAppData();
    const data =
      type === "post"
        ? {
            width: "auto",
            showText: postAndVideoShowText === "on",
            href: postHref,
            lang: appData.lang
          }
        : {
            width: "auto",
            showText: postAndVideoShowText === "on",
            allowFullScreen: videoAllowFullScreen === "on",
            autoPlay: videoAutoPlay === "on",
            showCaptions: videoCaptions === "on",
            href: videoHref,
            lang: appData.lang
          };
    const t = type === "post" ? "EmbeddedPost" : "EmbeddedVideo";

    const className = classnames(
      "brz-fb-embed",
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
            <Facebook appId={appData.appId} type={t} data={data} />
          </div>
        </CustomCSS>
      </Toolbar>
    );
  }

  renderForView(v, vs, vd) {
    const {
      type,
      postAndVideoShowText,
      videoAllowFullScreen,
      videoAutoPlay,
      videoCaptions,
      postHref,
      videoHref
    } = v;
    const appData = this.getAppData();
    const data =
      type === "post"
        ? {
            "data-show-text": postAndVideoShowText === "on",
            "data-href": postHref,
            "data-lang": appData.lang
          }
        : {
            "data-width": "auto",
            "data-show-text": postAndVideoShowText === "on",
            "data-allowFullScreen": videoAllowFullScreen === "on",
            "data-autoplay": videoAutoPlay === "on",
            "data-show-captions": videoCaptions == "on",
            "data-href": videoHref,
            "data-lang": appData.lang
          };
    const t = type === "post" ? "post" : "video";

    const className = classnames(
      "brz-fb-embed",
      css(
        `${this.constructor.componentId}`,
        `${this.getId()}`,
        style(v, vs, vd)
      )
    );

    return (
      <CustomCSS selectorName={this.getId()} css={v.customCSS}>
        <div className={className}>
          <Facebook appId={appData.appId} type={t} data={data} />
        </div>
      </CustomCSS>
    );
  }
}

export default FacebookEmbed;
