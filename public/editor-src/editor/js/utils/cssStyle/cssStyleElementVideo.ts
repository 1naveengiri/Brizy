import {
  cssStyleBgColor,
  cssStyleBgGradient,
  cssStyleColor,
  cssStylePadding,
  cssStyleSizeFontSize,
  cssStyleSizeSize,
  cssStyleSizeSizeHeight
} from "visual/utils/cssStyle";
import {
  styleElementVideoCoverSrc,
  styleElementVideoIconFontSize,
  styleElementVideoPaddingRatio
} from "visual/utils/style2";
import { defaultValueValue } from "../onChange";
import { CSSValue } from "../style2/types";

export function cssStyleElementVideoPaddingRatio({
  v,
  device,
  state
}: CSSValue): string {
  const paddingRatio = styleElementVideoPaddingRatio({ v, device, state });

  return paddingRatio === undefined ? "" : `padding-top:${paddingRatio};`;
}

export function cssStyleElementVideoBgSize({
  v,
  device,
  state
}: CSSValue): string {
  const dvv = (key: string) => defaultValueValue({ v, key, device, state });
  const coverZoom = dvv("coverZoom");

  return coverZoom === undefined ? "" : `background-size:${coverZoom}%;`;
}

export function cssStyleElementVideoIconFontSize({
  v,
  device,
  state
}: CSSValue): string {
  const fontSize = styleElementVideoIconFontSize({ v, device, state });

  return fontSize === undefined ? "" : `font-size:${fontSize}px;`;
}

export function cssStyleElementVideoIconWidth({
  v,
  device,
  state
}: CSSValue): string {
  return cssStyleSizeSize({ v, device, state, prefix: "icon" });
}

export function cssStyleElementVideoIconHeight({
  v,
  device,
  state
}: CSSValue): string {
  return cssStyleSizeSizeHeight({ v, device, state, prefix: "icon" });
}

export function cssStyleElementVideoCoverSrc({
  v,
  device,
  state
}: CSSValue): string {
  const coverSrc = styleElementVideoCoverSrc({ v, device, state });

  return coverSrc ? `background-image:${coverSrc};` : "";
}

export function cssStyleElementVideoCoverPosition({
  v,
  device,
  state
}: CSSValue): string {
  const dvv = (key: string) => defaultValueValue({ v, key, device, state });

  const positionX = dvv("coverPositionX");
  const positionY = dvv("coverPositionY");

  return positionX === undefined && positionY === undefined
    ? ""
    : `background-position:${positionX}% ${positionY}%;`;
}

export function cssStyleVideoControlsBgColor({
  v,
  device,
  state
}: CSSValue): string {
  return cssStyleBgColor({ v, device, state, prefix: "controlsBg" });
}

export function cssStyleVideoIconControls({
  v,
  device,
  state
}: CSSValue): string {
  return cssStyleColor({ v, device, state, prefix: "iconControlsColor" });
}

export function cssStyleElementVideoControlsIconFontSize({
  v,
  device,
  state
}: CSSValue): string {
  return cssStyleSizeFontSize({
    v,
    device,
    state,
    prefix: "controlsIconCustom"
  });
}

export function cssStyleElementVideoBgColorPadding({
  v,
  device,
  state
}: CSSValue): string {
  return cssStyleBgColor({ v, device, state, prefix: "paddingBg" });
}

export function cssStyleElementVideoBgGradientPadding({
  v,
  device,
  state
}: CSSValue): string {
  return cssStyleBgGradient({ v, device, state, prefix: "padding" });
}

export function cssStyleElementVideoCoverPaddingBG({
  v,
  device,
  state
}: CSSValue): string {
  const p = cssStylePadding({ v, device, state, prefix: "bg" });

  const noEmptyGrouped =
    p.paddingTop === p.paddingRight &&
    p.paddingTop === p.paddingBottom &&
    p.paddingTop === p.paddingLeft &&
    p.paddingTop > 0;

  const empty =
    p.paddingTop === 0 &&
    p.paddingRight === 0 &&
    p.paddingBottom === 0 &&
    p.paddingLeft === 0;

  if (empty) {
    return "margin:0;";
  } else if (noEmptyGrouped) {
    return `margin:${p.paddingTop}${p.paddingTopSuffix};`;
  } else {
    return `margin:${p.paddingTop}${p.paddingTopSuffix} ${p.paddingRight}${p.paddingRightSuffix} ${p.paddingBottom}${p.paddingBottomSuffix} ${p.paddingLeft}${p.paddingLeftSuffix};`;
  }
}
