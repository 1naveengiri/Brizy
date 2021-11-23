import { roundTo } from "visual/utils/math";
import { cssStyleFilter } from "./cssStyleFilter";
import { defaultValueValue } from "visual/utils/onChange";
import { isNullish } from "visual/utils/value";
import { getSizeType } from "visual/editorComponents/Image/utils";

const isAbsoluteOrFixed = v =>
  v.elementPosition === "absolute" || v.elementPosition === "fixed";

export function cssStyleElementImageMaxWidthPreview({ v, device, props = {} }) {
  const dvv = key => defaultValueValue({ v, key, device });
  const sizeType = dvv("sizeType");
  const size = dvv("size");
  const { width } = props.wrapperSizes[device];
  const containerWidth = props.props.meta[`${device}W`];

  if (isNullish(width) || isNullish(containerWidth)) {
    return "";
  }

  if (sizeType === "custom") {
    if (dvv("widthSuffix") === "%") {
      const _width = Math.round(Math.abs((width * 100) / containerWidth));
      return `${isAbsoluteOrFixed(v) ? "width" : "max-width"}: ${_width}%;`;
    }
    return `max-width: ${dvv("width")}px;`;
  }

  return `max-width: ${size}%;`;
}

export function cssStyleElementImageHeightPreview({ device, props = {} }) {
  const { height } = props.wrapperSizes[device];

  return height === undefined || height === null ? "" : "height: auto;";
}

export function cssStyleElementImageMaxWidthEditor({ v, device, props = {} }) {
  const dvv = key => defaultValueValue({ v, key, device });
  const sizeType = getSizeType(v, device);
  const size = dvv("size");
  const { width } = props[device];

  if (isNullish(width)) {
    return "";
  }

  if (sizeType === "custom") {
    return `${isAbsoluteOrFixed(v) ? "width" : "max-width"}: ${width}px;`;
  }

  return isNullish(size) ? `max-width: ${width}px;` : `max-width: ${size}%;`;
}

export function cssStyleElementImageHeightEditor({ v, device, props = {} }) {
  const sizeType = getSizeType(v, device);

  if (sizeType === "custom") {
    const { height } = props[device];
    return isNullish(height) ? "" : `height: ${height}px;`;
  }

  return "height: auto;";
}

export function cssStyleElementImageWidthWrapper({ v, device, props = {} }) {
  const sizeType = getSizeType(v, device);

  if (sizeType === "custom") {
    const { width } = props[device];
    return isNullish(width) ? "" : `width: ${width}px;`;
  }

  return "width: 100%;";
}

export function cssStyleElementImageHeightWrapper({ v, device, props = {} }) {
  const sizeType = getSizeType(v, device);

  if (sizeType === "custom") {
    const { height } = props[device];
    return isNullish(height) ? "" : `height: ${height}px;`;
  }

  const dvv = key => defaultValueValue({ v, device, key });
  const src = dvv("imageSrc");
  const { width, height } = props[device];

  if (src || isNullish(width) || isNullish(height)) {
    return "height: auto;";
  }

  const paddingTop = roundTo((height / width) * 100, 4);

  return `height: auto;padding-top: ${paddingTop}%;`;
}

export function cssStyleElementImagePosition({ v, device }) {
  const sizeType = getSizeType(v, device);

  if (sizeType === "custom") {
    return "position: absolute;";
  }

  return "position: static;";
}

export function cssStyleElementImageMarginLeft({ v, device, props = {} }) {
  const { marginLeft } = props[device];

  if (isNullish(marginLeft)) {
    return "";
  }

  const sizeType = getSizeType(v, device);

  if (sizeType === "custom") {
    return `margin-left: ${marginLeft}px;`;
  }

  return "margin-left: auto;";
}

export function cssStyleElementImageMarginTop({ v, device, props = {} }) {
  const { marginTop } = props[device];

  if (isNullish(marginTop)) {
    return "";
  }

  const sizeType = getSizeType(v, device);

  if (sizeType === "custom") {
    return `margin-top: ${marginTop}px;`;
  }

  return "margin-top: auto;";
}

export function cssStyleElementImagePictureSizePreview({ v, device, props }) {
  const sizeType = getSizeType(v, device);
  const dvv = key => defaultValueValue({ v, device, key });
  const src = dvv("imageSrc");

  if (sizeType === "custom" || !src) {
    const { width, height } = props[device];
    if (isNullish(width) && isNullish(height)) {
      return "";
    }

    const paddingTop = roundTo((height / width) * 100, 4);

    return `padding-top: ${paddingTop}%;`;
  }

  return "padding-top: 0;";
}

export function cssStyleElementImageSizePreview() {
  return "width: 100%;";
}

export function cssStyleElementImageTransitionProperty() {
  return "transition-property: border, box-shadow, filter;";
}

export function cssStyleElementImageFilter({
  v,
  device,
  state,
  prefix = "image"
}) {
  return cssStyleFilter({ v, device, state, prefix });
}
