import { t } from "visual/utils/i18n";
import { getDynamicContentChoices } from "visual/utils/options";
import { defaultValueKey, defaultValueValue } from "visual/utils/onChange";

export function toolbarImageLinkExternal({
  v,
  inGallery,
  device,
  state,
  devices = "all"
}) {
  const dvk = key => defaultValueKey({ key, device, state });
  const dvv = key => defaultValueValue({ v, key, device, state });

  const linkDynamicContentChoices = getDynamicContentChoices("link");

  return {
    id: dvk("linkExternal"),
    type: "input",
    label: t("Link to"),
    placeholder: "http://",
    devices,
    population: {
      show: linkDynamicContentChoices.length > 0 && !inGallery,
      choices: linkDynamicContentChoices
    },
    value: {
      population: dvv("linkPopulation"),
      value: dvv("linkExternal")
    },
    onChange: (
      { value: linkExternal, population: linkPopulation },
      { changed }
    ) => {
      return {
        linkExternal,
        linkPopulation,
        linkExternalType:
          changed === "value" || linkPopulation === ""
            ? "linkExternal"
            : "linkPopulation"
      };
    }
  };
}
