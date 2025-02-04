import React, { ReactNode } from "react";
import { ElementModel } from "visual/component/Elements/Types";
import Placeholder from "visual/component/Placeholder";
import Toolbar from "visual/component/Toolbar";
import EditorComponent from "visual/editorComponents/EditorComponent";
import { Wrapper } from "../../tools/Wrapper";
import defaultValue from "./defaultValue.json";
import * as sidebarConfig from "./sidebar";
import * as toolbarConfig from "./toolbar";

export interface Value extends ElementModel {
  badgeSeal: string;
}

export class HextomBadges extends EditorComponent<Value> {
  static get componentId(): "HextomBadges" {
    return "HextomBadges";
  }

  static defaultValue = defaultValue;

  renderForEdit(): ReactNode {
    return (
      <Toolbar
        {...this.makeToolbarPropsFromConfig2(toolbarConfig, sidebarConfig)}
      >
        <Wrapper
          {...this.makeWrapperProps({
            className: "brz-shopify-hextom-badge"
          })}
        >
          <Placeholder icon="img" />
        </Wrapper>
      </Toolbar>
    );
  }

  renderForView(v: Value): ReactNode {
    const { badgeSeal } = v;
    return (
      <Wrapper
        {...this.makeWrapperProps({ className: "brz-shopify-hextom-badge" })}
      >
        <div className={badgeSeal} data-pf-type="HextomSalesBoost"/>
      </Wrapper>
    );
  }
}
