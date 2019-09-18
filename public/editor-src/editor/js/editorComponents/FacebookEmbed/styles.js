import { renderStyles } from "visual/utils/cssStyle";

export function style(v, vs, vd) {
  const styles = {
    ".brz &&:hover:before": {
      standart: ["cssStyleBoxShadow"],
      interval: [
        "cssStyleHoverTransition",
        "cssStyleElementFacebookEmbedPropertyHoverTransition"
      ]
    }
  };

  return renderStyles({ v, vs, vd, styles });
}
