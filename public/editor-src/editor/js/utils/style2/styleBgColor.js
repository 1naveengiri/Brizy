import { capByPrefix } from "visual/utils/string";
import { defaultValueValue } from "visual/utils/onChange";
import { hexToRgba } from "visual/utils/color";
import { styleState } from "visual/utils/style";
import { getOptionColorHexByPalette } from "visual/utils/options";

export function styleBgColor({ v, device, state, prefix = "bg" }) {
  state = getState(v, state);

  const dvv = key => defaultValueValue({ v, key, device, state });

  const { hex } = getOptionColorHexByPalette(
    dvv(capByPrefix(prefix, "colorHex")),
    dvv(capByPrefix(prefix, "colorPalette"))
  );

  return hexToRgba(hex, dvv(capByPrefix(prefix, "colorOpacity")));
}

const getState = (v, state) =>
  styleState({ v, state }) === "hover" ? "hover" : state;
