import classnames from "classnames";
import React, { ReactNode } from "react";
import { Text } from "visual/component/ContentOptions/types";
import CustomCSS from "visual/component/CustomCSS";
import { ElementModel } from "visual/component/Elements/Types";
import { ThemeIcon } from "visual/component/ThemeIcon";
import PortalToolbar from "visual/component/Toolbar";
import EditorComponent from "visual/editorComponents/EditorComponent";
import { css } from "visual/utils/cssStyle";
import { makePlaceholder } from "visual/utils/dynamicContent";
import * as Str from "visual/utils/reader/string";
import { Wrapper } from "../../tools/Wrapper";
import defaultValue from "./defaultValue.json";
import * as sidebar from "./sidebar";
import { style } from "./styles";
import * as toolbar from "./toolbar";

export interface Value extends ElementModel {
  iconName: string;
  iconType: string;
  itemId: string;
}

export class AddToCart extends EditorComponent<Value> {
  static get componentId(): "AddToCart" {
    return "AddToCart";
  }

  static defaultValue = defaultValue;

  handleTextChange = (patch: { [k: string]: string }): void =>
    this.patchValue(patch);

  renderIcon(v: Value): ReactNode {
    const { iconName, iconType } = v;

    if (iconName && iconType) {
      return (
        <ThemeIcon
          className="brz-shopify-icon-cart"
          name={iconName}
          type={iconType}
        />
      );
    }
  }
  renderForEdit(v: Value, vs: Value, vd: Value): ReactNode {
    const { itemId } = v;

    const className = classnames(
      "brz-shopify-add-to-cart",
      css(this.getComponentId(), this.getId(), style(v, vs, vd))
    );

    const _itemId =
      Str.read(itemId) ||
      makePlaceholder({
        content: "{{ brizy_dc_collection_item_field }}",
        attr: { slug: "id" }
      });

    const _variantId = makePlaceholder({
      content: "{{ brizy_dc_collection_item_field }}",
      attr: { slug: "variants.id" }
    });

    return (
      <PortalToolbar {...this.makeToolbarPropsFromConfig2(toolbar, sidebar)}>
        <CustomCSS selectorName={this.getId()} css={v.customCSS}>
          <Wrapper
            {...this.makeWrapperProps({
              className,
              attributes: {
                "data-product-handle": _itemId,
                "data-default-variant-id": _variantId
              }
            })}
            component={"button"}
          >
            {this.renderIcon(v)}
            <Text id="text" v={v} onChange={this.handleTextChange} />
            {IS_PREVIEW && (
              <ThemeIcon
                className="brz-shopify-add-to-cart--spinner brz-invisible"
                name="circle-02"
                type="glyph"
              />
            )}
          </Wrapper>
        </CustomCSS>
      </PortalToolbar>
    );
  }
}
