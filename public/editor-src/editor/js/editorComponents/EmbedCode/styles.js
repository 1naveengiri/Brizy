import classnames from "classnames";
import { css } from "glamor";
import { tabletSyncOnChange, mobileSyncOnChange } from "visual/utils/onChange";
import {
  styleBorderStyle,
  styleBorderWidth,
  styleBorderRadius,
  styleBorderColor,
  styleHoverTransition,
  styleHoverTransitionProperty
} from "visual/utils/style";

export function styleClassName(v) {
  const { className } = v;
  let glamorObj;

  if (IS_EDITOR) {
    glamorObj = {
      ".brz &": {
        "& .brz-embed-content": {
          overflow: "hidden"
        }
      },
      ".brz-ed--desktop &": {
        width: "var(--width)",

        "& .brz-embed-content": {
          borderStyle: "var(--borderStyle)",

          borderTopWidth: "var(--borderTopWidth)",
          borderRightWidth: "var(--borderRightWidth)",
          borderBottomWidth: "var(--borderBottomWidth)",
          borderLeftWidth: "var(--borderLeftWidth)",

          borderTopLeftRadius: "var(--borderTopLeftRadius)",
          borderTopRightRadius: "var(--borderTopRightRadius)",
          borderBottomLeftRadius: "var(--borderBottomLeftRadius)",
          borderBottomRightRadius: "var(--borderBottomRightRadius)",

          borderColor: "var(--borderColor)",

          transition: "var(--hoverTransition)",
          transitionProperty: "var(--hoverTransitionProperty)",

          "&:hover": {
            borderStyle: "var(--hoverBorderStyle)",

            borderTopWidth: "var(--hoverBorderTopWidth)",
            borderRightWidth: "var(--hoverBorderRightWidth)",
            borderBottomWidth: "var(--hoverBorderBottomWidth)",
            borderLeftWidth: "var(--hoverBorderLeftWidth)",

            borderTopLeftRadius: "var(--hoverBorderTopLeftRadius)",
            borderTopRightRadius: "var(--hoverBorderTopRightRadius)",
            borderBottomLeftRadius: "var(--hoverBorderBottomLeftRadius)",
            borderBottomRightRadius: "var(--hoverBorderBottomRightRadius)",

            borderColor: "var(--hoverBorderColor)"
          }
        }
      },
      ".brz-ed--tablet &": {
        width: "var(--tabletWidth)",

        "& .brz-embed-content": {
          borderStyle: "var(--tabletBorderStyle)",

          borderTopWidth: "var(--tabletBorderTopWidth)",
          borderRightWidth: "var(--tabletBorderRightWidth)",
          borderBottomWidth: "var(--tabletBorderBottomWidth)",
          borderLeftWidth: "var(--tabletBorderLeftWidth)",

          borderTopLeftRadius: "var(--tabletBorderTopLeftRadius)",
          borderTopRightRadius: "var(--tabletBorderTopRightRadius)",
          borderBottomLeftRadius: "var(--tabletBorderBottomLeftRadius)",
          borderBottomRightRadius: "var(--tabletBorderBottomRightRadius)",

          borderColor: "var(--tabletBorderColor)"
        }
      },
      ".brz-ed--mobile &": {
        width: "var(--mobileWidth)",

        "& .brz-embed-content": {
          borderStyle: "var(--mobileBorderStyle)",

          borderTopWidth: "var(--mobileBorderTopWidth)",
          borderRightWidth: "var(--mobileBorderRightWidth)",
          borderBottomWidth: "var(--mobileBorderBottomWidth)",
          borderLeftWidth: "var(--mobileBorderLeftWidth)",

          borderTopLeftRadius: "var(--mobileBorderTopLeftRadius)",
          borderTopRightRadius: "var(--mobileBorderTopRightRadius)",
          borderBottomLeftRadius: "var(--mobileBorderBottomLeftRadius)",
          borderBottomRightRadius: "var(--mobileBorderBottomRightRadius)",

          borderColor: "var(--mobileBorderColor)"
        }
      }
    };
  } else {
    const { width } = v;

    glamorObj = {
      ".brz &": {
        width: `${width}%`,
        "& .brz-embed-content": {
          overflow: "hidden",
          borderStyle: styleBorderStyle({
            v,
            device: "desktop",
            state: "normal"
          }),

          borderTopWidth: styleBorderWidth({
            v,
            device: "desktop",
            state: "normal",
            current: "borderTopWidth"
          }),
          borderRightWidth: styleBorderWidth({
            v,
            device: "desktop",
            state: "normal",
            current: "borderRightWidth"
          }),
          borderBottomWidth: styleBorderWidth({
            v,
            device: "desktop",
            state: "normal",
            current: "borderBottomWidth"
          }),
          borderLeftWidth: styleBorderWidth({
            v,
            device: "desktop",
            state: "normal",
            current: "borderLeftWidth"
          }),

          borderTopLeftRadius: styleBorderRadius({
            v,
            device: "desktop",
            state: "normal",
            current: "borderTopLeftRadius"
          }),
          borderTopRightRadius: styleBorderRadius({
            v,
            device: "desktop",
            state: "normal",
            current: "borderTopRightRadius"
          }),
          borderBottomLeftRadius: styleBorderRadius({
            v,
            device: "desktop",
            state: "normal",
            current: "borderBottomLeftRadius"
          }),
          borderBottomRightRadius: styleBorderRadius({
            v,
            device: "desktop",
            state: "normal",
            current: "borderBottomRightRadius"
          }),

          borderColor: `${styleBorderColor({
            v,
            device: "desktop",
            state: "normal"
          })}`,
          "@media (min-width: 991px)": {
            // Hover Transition
            transition: styleHoverTransition({ v }),
            transitionProperty: styleHoverTransitionProperty(),
            ":hover": {
              borderStyle: styleBorderStyle({
                v,
                device: "desktop",
                state: "hover"
              }),

              borderTopWidth: styleBorderWidth({
                v,
                device: "desktop",
                state: "hover",
                current: "borderTopWidth"
              }),
              borderRightWidth: styleBorderWidth({
                v,
                device: "desktop",
                state: "hover",
                current: "borderRightWidth"
              }),
              borderBottomWidth: styleBorderWidth({
                v,
                device: "desktop",
                state: "hover",
                current: "borderBottomWidth"
              }),
              borderLeftWidth: styleBorderWidth({
                v,
                device: "desktop",
                state: "hover",
                current: "borderLeftWidth"
              }),

              borderTopLeftRadius: styleBorderRadius({
                v,
                device: "desktop",
                state: "hover",
                current: "borderTopLeftRadius"
              }),
              borderTopRightRadius: styleBorderRadius({
                v,
                device: "desktop",
                state: "hover",
                current: "borderTopRightRadius"
              }),
              borderBottomLeftRadius: styleBorderRadius({
                v,
                device: "desktop",
                state: "hover",
                current: "borderBottomLeftRadius"
              }),
              borderBottomRightRadius: styleBorderRadius({
                v,
                device: "desktop",
                state: "hover",
                current: "borderBottomRightRadius"
              }),

              borderColor: `${styleBorderColor({
                v,
                device: "desktop",
                state: "hover"
              })}`
            }
          }
        }
      },

      "@media (max-width: 991px)": {
        ".brz &": {
          width: `${tabletSyncOnChange(v, "width")}%`,

          "& .brz-embed-content": {
            borderStyle: styleBorderStyle({ v, device: "tablet" }),

            borderTopWidth: styleBorderWidth({
              v,
              device: "tablet",
              state: "normal",
              current: "borderTopWidth"
            }),
            borderRightWidth: styleBorderWidth({
              v,
              device: "tablet",
              state: "normal",
              current: "borderRightWidth"
            }),
            borderBottomWidth: styleBorderWidth({
              v,
              device: "tablet",
              state: "normal",
              current: "borderBottomWidth"
            }),
            borderLeftWidth: styleBorderWidth({
              v,
              device: "tablet",
              state: "normal",
              current: "borderLeftWidth"
            }),

            borderTopLeftRadius: styleBorderRadius({
              v,
              device: "tablet",
              state: "normal",
              current: "borderTopLeftRadius"
            }),
            borderTopRightRadius: styleBorderRadius({
              v,
              device: "tablet",
              state: "normal",
              current: "borderTopRightRadius"
            }),
            borderBottomLeftRadius: styleBorderRadius({
              v,
              device: "tablet",
              state: "normal",
              current: "borderBottomLeftRadius"
            }),
            borderBottomRightRadius: styleBorderRadius({
              v,
              device: "tablet",
              state: "normal",
              current: "borderBottomRightRadius"
            }),

            borderColor: `${styleBorderColor({
              v,
              device: "tablet",
              state: "normal"
            })}`
          }
        }
      },
      "@media (max-width: 767px)": {
        ".brz &": {
          width: `${mobileSyncOnChange(v, "width")}%`,

          "& .brz-embed-content": {
            borderStyle: styleBorderStyle({ v, device: "mobile" }),

            borderTopWidth: styleBorderWidth({
              v,
              device: "mobile",
              state: "normal",
              current: "borderTopWidth"
            }),
            borderRightWidth: styleBorderWidth({
              v,
              device: "mobile",
              state: "normal",
              current: "borderRightWidth"
            }),
            borderBottomWidth: styleBorderWidth({
              v,
              device: "mobile",
              state: "normal",
              current: "borderBottomWidth"
            }),
            borderLeftWidth: styleBorderWidth({
              v,
              device: "mobile",
              state: "normal",
              current: "borderLeftWidth"
            }),

            borderTopLeftRadius: styleBorderRadius({
              v,
              device: "mobile",
              state: "normal",
              current: "borderTopLeftRadius"
            }),
            borderTopRightRadius: styleBorderRadius({
              v,
              device: "mobile",
              state: "normal",
              current: "borderTopRightRadius"
            }),
            borderBottomLeftRadius: styleBorderRadius({
              v,
              device: "mobile",
              state: "normal",
              current: "borderBottomLeftRadius"
            }),
            borderBottomRightRadius: styleBorderRadius({
              v,
              device: "mobile",
              state: "normal",
              current: "borderBottomRightRadius"
            }),

            borderColor: `${styleBorderColor({
              v,
              device: "mobile",
              state: "normal"
            })}`
          }
        }
      }
    };
  }

  const glamorClassName = String(css(glamorObj));

  return classnames("brz-embed-code", glamorClassName, className);
}

export function styleCSSVars(v) {
  if (IS_PREVIEW) return;

  const { width } = v;

  return {
    //###---DeskTop--###//
    // Border Style
    "--borderStyle": styleBorderStyle({
      v,
      device: "desktop",
      state: "normal"
    }),

    // Border Width
    "--borderTopWidth": styleBorderWidth({
      v,
      device: "desktop",
      state: "normal",
      current: "borderTopWidth"
    }),
    "--borderRightWidth": styleBorderWidth({
      v,
      device: "desktop",
      state: "normal",
      current: "borderRightWidth"
    }),
    "--borderBottomWidth": styleBorderWidth({
      v,
      device: "desktop",
      state: "normal",
      current: "borderBottomWidth"
    }),
    "--borderLeftWidth": styleBorderWidth({
      v,
      device: "desktop",
      state: "normal",
      current: "borderLeftWidth"
    }),

    // Border Radius
    "--borderTopLeftRadius": styleBorderRadius({
      v,
      device: "desktop",
      state: "normal",
      current: "borderTopLeftRadius"
    }),
    "--borderTopRightRadius": styleBorderRadius({
      v,
      device: "desktop",
      state: "normal",
      current: "borderTopRightRadius"
    }),
    "--borderBottomLeftRadius": styleBorderRadius({
      v,
      device: "desktop",
      state: "normal",
      current: "borderBottomLeftRadius"
    }),
    "--borderBottomRightRadius": styleBorderRadius({
      v,
      device: "desktop",
      state: "normal",
      current: "borderBottomRightRadius"
    }),

    // Border Color
    "--borderColor": styleBorderColor({
      v,
      device: "desktop",
      state: "normal"
    }),

    "--width": `${width}%`,

    //###---Hover--###//
    // Border Style
    "--hoverBorderStyle": styleBorderStyle({
      v,
      device: "desktop",
      state: "hover"
    }),

    // Border Width
    "--hoverBorderTopWidth": styleBorderWidth({
      v,
      device: "desktop",
      state: "hover",
      current: "borderTopWidth"
    }),
    "--hoverBorderRightWidth": styleBorderWidth({
      v,
      device: "desktop",
      state: "hover",
      current: "borderRightWidth"
    }),
    "--hoverBorderBottomWidth": styleBorderWidth({
      v,
      device: "desktop",
      state: "hover",
      current: "borderBottomWidth"
    }),
    "--hoverBorderLeftWidth": styleBorderWidth({
      v,
      device: "desktop",
      state: "hover",
      current: "borderLeftWidth"
    }),

    // Border Radius
    "--hoverBorderTopLeftRadius": styleBorderRadius({
      v,
      device: "desktop",
      state: "hover",
      current: "borderTopLeftRadius"
    }),
    "--hoverBorderTopRightRadius": styleBorderRadius({
      v,
      device: "desktop",
      state: "hover",
      current: "borderTopRightRadius"
    }),
    "--hoverBorderBottomLeftRadius": styleBorderRadius({
      v,
      device: "desktop",
      state: "hover",
      current: "borderBottomLeftRadius"
    }),
    "--hoverBorderBottomRightRadius": styleBorderRadius({
      v,
      device: "desktop",
      state: "hover",
      current: "borderBottomRightRadius"
    }),

    // Border Color
    "--hoverBorderColor": styleBorderColor({
      v,
      device: "desktop",
      state: "hover"
    }),

    // Hover Transition
    "--hoverTransition": styleHoverTransition({ v }),
    "--hoverTransitionProperty": styleHoverTransitionProperty({ v }),

    //###---Tablet--###//

    // Border Style
    "--tabletBorderStyle": styleBorderStyle({
      v,
      device: "tablet",
      state: "normal"
    }),

    // Border Width
    "--tabletBorderTopWidth": styleBorderWidth({
      v,
      device: "tablet",
      state: "normal",
      current: "borderTopWidth"
    }),
    "--tabletBorderRightWidth": styleBorderWidth({
      v,
      device: "tablet",
      state: "normal",
      current: "borderRightWidth"
    }),
    "--tabletBorderBottomWidth": styleBorderWidth({
      v,
      device: "tablet",
      state: "normal",
      current: "borderBottomWidth"
    }),
    "--tabletBorderLeftWidth": styleBorderWidth({
      v,
      device: "tablet",
      state: "normal",
      current: "borderLeftWidth"
    }),

    // Border Radius
    "--tabletBorderTopLeftRadius": styleBorderRadius({
      v,
      device: "tablet",
      state: "normal",
      current: "borderTopLeftRadius"
    }),
    "--tabletBorderTopRightRadius": styleBorderRadius({
      v,
      device: "tablet",
      state: "normal",
      current: "borderTopRightRadius"
    }),
    "--tabletBorderBottomLeftRadius": styleBorderRadius({
      v,
      device: "tablet",
      state: "normal",
      current: "borderBottomLeftRadius"
    }),
    "--tabletBorderBottomRightRadius": styleBorderRadius({
      v,
      device: "tablet",
      state: "normal",
      current: "borderBottomRightRadius"
    }),

    // Border Color
    "--tabletBorderColor": styleBorderColor({
      v,
      device: "tablet",
      state: "normal"
    }),

    "--tabletWidth": `${tabletSyncOnChange(v, "width")}%`,

    //###---Mobile--###//

    // Border Style
    "--mobileBorderStyle": styleBorderStyle({
      v,
      device: "mobile",
      state: "normal"
    }),

    // Border Width
    "--mobileBorderTopWidth": styleBorderWidth({
      v,
      device: "mobile",
      state: "normal",
      current: "borderTopWidth"
    }),
    "--mobileBorderRightWidth": styleBorderWidth({
      v,
      device: "mobile",
      state: "normal",
      current: "borderRightWidth"
    }),
    "--mobileBorderBottomWidth": styleBorderWidth({
      v,
      device: "mobile",
      state: "normal",
      current: "borderBottomWidth"
    }),
    "--mobileBorderLeftWidth": styleBorderWidth({
      v,
      device: "mobile",
      state: "normal",
      current: "borderLeftWidth"
    }),

    // Border Radius
    "--mobileBorderTopLeftRadius": styleBorderRadius({
      v,
      device: "mobile",
      state: "normal",
      current: "borderTopLeftRadius"
    }),
    "--mobileBorderTopRightRadius": styleBorderRadius({
      v,
      device: "mobile",
      state: "normal",
      current: "borderTopRightRadius"
    }),
    "--mobileBorderBottomLeftRadius": styleBorderRadius({
      v,
      device: "mobile",
      state: "normal",
      current: "borderBottomLeftRadius"
    }),
    "--mobileBorderBottomRightRadius": styleBorderRadius({
      v,
      device: "mobile",
      state: "normal",
      current: "borderBottomRightRadius"
    }),

    // Border Color
    "--mobileBorderColor": styleBorderColor({
      v,
      device: "mobile",
      state: "normal"
    }),

    "--mobileWidth": `${mobileSyncOnChange(v, "width")}%`
  };
}
