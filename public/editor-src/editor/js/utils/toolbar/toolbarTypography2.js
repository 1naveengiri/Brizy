import Config from "visual/global/Config";
import { t } from "visual/utils/i18n";
import { isStory } from "visual/utils/models";
import {
  defaultValueKey,
  defaultValueValue,
  saveOnChanges
} from "visual/utils/onChange";
import { getOptionFontByGlobal } from "visual/utils/options";
import { capByPrefix } from "visual/utils/string";

export function toolbarTypography2FontFamily({
  v,
  prefix = "",
  device,
  state,
  disabled = false,
  devices = "all",
  onChange
}) {
  const fontFamilyKey = defaultValueKey({
    key: capByPrefix(prefix, "fontFamily"),
    device,
    state
  });

  const fontFamilyValue = getOptionFontByGlobal(
    "fontFamily",
    defaultValueValue({
      v,
      key: capByPrefix(prefix, "fontFamily"),
      device,
      state
    }),
    defaultValueValue({
      v,
      key: capByPrefix(prefix, "fontStyle"),
      device,
      state
    })
  );

  return {
    id: fontFamilyKey,
    label: t("Font Family"),
    type: "fontFamily",
    devices,
    disabled,
    value: fontFamilyValue,
    onChange: ({ id, weights, type }) => {
      const values = {
        ...{ v, prefix, device, state, onChange },
        ...{ current: fontFamilyKey, value: id, weights, type }
      };

      return saveOnChanges(values);
    }
  };
}

export function toolbarTypography2FontStyle({
  v,
  prefix = "",
  device,
  state,
  disabled = false,
  devices = "all"
}) {
  const fontStyleKey = defaultValueKey({
    key: capByPrefix(prefix, "fontStyle"),
    device,
    state
  });

  const fontStyleValue = defaultValueValue({
    v,
    key: capByPrefix(prefix, "fontStyle"),
    device,
    state
  });

  return {
    id: fontStyleKey,
    label: t("Typography"),
    type: "fontStyle",
    devices,
    disabled,
    className: "brz-ed-popover__font-style",
    display: "block",
    value: fontStyleValue,
    onChange: (fontStyle) => {
      return {
        [fontStyleKey]: fontStyle
      };
    }
  };
}

export function toolbarTypography2FontSize({
  v,
  prefix = "",
  device,
  state,
  disabled = false,
  devices = "all",
  onChange
}) {
  const fontSizeKey = defaultValueKey({
    key: capByPrefix(prefix, "fontSize"),
    device,
    state
  });

  const fontSizeValue = getOptionFontByGlobal(
    fontSizeKey,
    defaultValueValue({
      v,
      key: capByPrefix(prefix, "fontSize"),
      device,
      state
    }),
    defaultValueValue({
      v,
      key: capByPrefix(prefix, "fontStyle"),
      device,
      state
    })
  );

  return {
    id: fontSizeKey,
    label: isStory(Config.getAll()) ? t("Size") : "",
    type: "stepper",
    devices,
    disabled,
    display: "block",
    min: 1,
    max: 100,
    step: 1,
    value: fontSizeValue,
    onChange: (fontSize) => {
      const values = {
        ...{ v, prefix, device, state, onChange },
        ...{ current: fontSizeKey, value: fontSize }
      };

      return saveOnChanges(values);
    }
  };
}

export function toolbarTypography2LineHeight({
  v,
  prefix = "",
  device,
  state,
  disabled = false,
  devices = "all",
  onChange
}) {
  const lineHeightKey = defaultValueKey({
    key: capByPrefix(prefix, "lineHeight"),
    device,
    state
  });

  const lineHeightValue = getOptionFontByGlobal(
    lineHeightKey,
    defaultValueValue({
      v,
      key: capByPrefix(prefix, "lineHeight"),
      device,
      state
    }),
    defaultValueValue({
      v,
      key: capByPrefix(prefix, "fontStyle"),
      device,
      state
    })
  );

  return {
    id: lineHeightKey,
    label: t("Line Hgt."),
    type: "stepper",
    devices,
    disabled,
    display: "block",
    min: 1,
    max: 10,
    step: 0.1,
    value: lineHeightValue,
    onChange: (lineHeight) => {
      const values = {
        ...{ v, prefix, device, state, onChange },
        ...{ current: lineHeightKey, value: lineHeight }
      };

      return saveOnChanges(values);
    }
  };
}

export function toolbarTypography2LetterSpacing({
  v,
  prefix = "",
  device,
  state,
  disabled = false,
  devices = "all",
  onChange
}) {
  const letterSpacingKey = defaultValueKey({
    key: capByPrefix(prefix, "letterSpacing"),
    device,
    state
  });

  const letterSpacingValue = getOptionFontByGlobal(
    letterSpacingKey,
    defaultValueValue({
      v,
      key: capByPrefix(prefix, "letterSpacing"),
      device,
      state
    }),
    defaultValueValue({
      v,
      key: capByPrefix(prefix, "fontStyle"),
      device,
      state
    })
  );

  return {
    id: letterSpacingKey,
    label: t("Letter Sp."),
    type: "stepper",
    devices,
    disabled,
    display: "block",
    min: -20,
    max: 20,
    step: 0.5,
    value: letterSpacingValue,
    onChange: (letterSpacing) => {
      const values = {
        ...{ v, prefix, device, state, onChange },
        ...{ current: letterSpacingKey, value: letterSpacing }
      };

      return saveOnChanges(values);
    }
  };
}
