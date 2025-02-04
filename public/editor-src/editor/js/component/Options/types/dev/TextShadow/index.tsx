import classNames from "classnames";
import React, { FC, useCallback, useMemo } from "react";
import { useDispatch } from "react-redux";
import {
  TextShadow as ShadowControl,
  Props as ShadowProps
} from "visual/component/Controls/TextShadow";
import {
  Meta as CMeta,
  Value as CValue
} from "visual/component/Controls/TextShadow/types";
import { Props as OptionProps } from "visual/component/Options/Type";
import Config from "visual/global/Config";
import { LeftSidebarOptionsIds } from "visual/global/Config/types/configs/ConfigCommon";
import { updateUI } from "visual/redux/actions2";
import { getColorPaletteColors } from "visual/utils/color";
import { Palette } from "visual/utils/color/Palette";
import { mPipe } from "visual/utils/fp";
import { WithClassName } from "visual/utils/options/attributes";
import * as Value from "./types/Value";
import * as Utils from "./utils";
import {
  SelectType,
  options,
  selectTypeFromValue,
  valueFromSelectType
} from "./utils";

export interface Props extends OptionProps<Value.Value>, WithClassName {}

export const TextShadow: FC<Props> = ({ onChange, value, className }) => {
  const dispatch = useDispatch();
  const _className = classNames("brz-ed-option__textShadow", className);
  const onValueChange = useCallback<
    ShadowProps<Palette, SelectType>["onChange"]
  >(
    (v, m) =>
      mPipe(
        (
          m: CValue<Palette, SelectType>,
          meta: CMeta<Palette, SelectType>
        ): Value.Value => {
          switch (meta.isChanged) {
            case "opacity": {
              return Value.setOpacity(
                m.opacity as Value.Value["opacity"],
                value
              );
            }
            case "blur": {
              return Value.setBlur(m.blur as Value.Value["blur"], value);
            }
            case "hex": {
              return Value.setHex(m.hex, value);
            }
            case "palette": {
              return m.palette ? Value.setPalette(m.palette, value) : value;
            }
            case "horizontal": {
              return Value.setHorizontal(m.horizontal, value);
            }
            case "vertical": {
              return Value.setVertical(m.vertical, value);
            }
            case "select":
              return valueFromSelectType(m.select, value);
          }
        },
        onChange
      )(v, m),
    [onChange, value]
  );
  const openPaletteSidebar = useCallback(
    () =>
      dispatch(
        updateUI("leftSidebar", {
          isOpen: true,
          drawerContentType: LeftSidebarOptionsIds.globalStyle
        })
      ),
    [dispatch]
  );

  const shadowValue = useMemo<ShadowProps<Palette, SelectType>["value"]>(
    () => ({
      ...value,
      palette: Utils.getPalette(value),
      select: selectTypeFromValue(value)
    }),
    [value]
  );

  const enableGlobalStyle = useMemo((): boolean => {
    const config = Config.getAll();
    const { bottomTabsOrder = [], topTabsOrder = [] } =
      config.ui?.leftSidebar ?? {};

    return [...bottomTabsOrder, ...topTabsOrder].includes(
      LeftSidebarOptionsIds.globalStyle
    );
  }, []);

  return (
    <ShadowControl<Palette, SelectType>
      opacity={true}
      className={_className}
      value={shadowValue}
      onChange={onValueChange}
      palette={getColorPaletteColors()}
      paletteOpenSettings={enableGlobalStyle ? openPaletteSidebar : undefined}
      options={options}
    />
  );
};
