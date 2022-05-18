import { getDynamicContentChoices } from "visual/utils/options";
import { t } from "visual/utils/i18n";
import { DCTypes } from "visual/global/Config/types/DynamicContent";

export function getItems({ context }) {
  const cssIDDynamicContentChoices = getDynamicContentChoices(
    context.dynamicContent.config,
    DCTypes.richText
  );

  return [
    {
      id: "sidebarTabs",
      type: "sidebarTabs-dev",
      tabs: [
        {
          id: "styles",
          title: t("Styling"),
          label: t("Styling"),
          options: [
            {
              id: "settingsTabs",
              type: "tabs-dev",
              config: {
                align: "start"
              },
              devices: "desktop",
              tabs: [
                {
                  id: "moreSettingsAdvanced",
                  label: t("Advanced"),
                  icon: "nc-cog",
                  options: [
                    {
                      id: "zIndex",
                      type: "slider-dev",
                      position: 20,
                      label: t("Z-index"),
                      // disabled: IS_STORY,
                      config: {
                        min: 0,
                        max: 100
                      }
                    },
                    {
                      id: "rotate",
                      type: "slider-dev",
                      position: 21,
                      label: t("Rotate"),
                      //disabled: !IS_STORY,
                      config: {
                        min: 0,
                        max: 360,
                        units: [{ is: "deg", title: "deg" }]
                      }
                    },
                    {
                      id: "cssID",
                      label: t("CSS ID"),
                      type: "population-dev",
                      position: 40,
                      devices: "desktop",
                      display: "block",
                      helper: {
                        content:
                          "Add your custom ID without the #pound, example: my-id"
                      },
                      config: {
                        choices: cssIDDynamicContentChoices
                      },
                      options: [
                        {
                          id: "customID",
                          type: "inputText-dev"
                        }
                      ]
                    },
                    {
                      id: "cssClass",
                      label: t("CSS Class"),
                      type: "population-dev",
                      position: 40,
                      devices: "desktop",
                      display: "block",
                      helper: {
                        content:
                          "Add your custom class without the .dot, example: my-class"
                      },
                      config: {
                        choices: cssIDDynamicContentChoices
                      },
                      options: [
                        {
                          id: "customClassName",
                          type: "inputText-dev"
                        }
                      ]
                    },
                    {
                      id: "customAttributes",
                      label: t("Custom Attributes"),
                      type: "codeMirror-dev",
                      position: 45,
                      placeholder: "key1:value1\nkey2:value2",
                      display: "block",
                      helper: {
                        content:
                          "Set your custom attribute for wrapper element. Each attribute in a separate line. Separate attribute key from the value using : character."
                      }
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "effects",
          title: t("Effects"),
          label: t("Effects"),
          options: [
            {
              id: "tabs",
              type: "tabs-dev",
              config: {
                align: "start"
              },
              tabs: [
                {
                  id: "entrance",
                  label: t("Entrance"),
                  options: [
                    {
                      id: "animation",
                      type: "animation-dev"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ];
}
