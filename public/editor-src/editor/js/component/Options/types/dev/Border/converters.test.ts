import * as Opacity from "visual/utils/cssProps/opacity";
import * as Palette from "visual/component/Options/types/dev/ColorPicker/entities/palette";
import * as Width from "./entities/width";
import * as WidthType from "./entities/widthType";
import * as Style from "./entities/style";
import {
  fromElementModel,
  toElementModel,
  defaultValue,
  isEmptyWidth
} from "./converters";
import { COLOR3 } from "visual/utils/color/Palette";
import { Value } from "./entities/Value";
import * as Hex from "visual/utils/color/Hex";
import { MValue } from "visual/utils/value";
import { Literal } from "visual/utils/types/Literal";
import { ElementModel } from "visual/component/Elements/Types";

const model = defaultValue;

describe("Testing 'fromElementModel' function", function() {
  const db: ElementModel = {
    style: Style.SOLID,
    tempStyle: Style.DASHED,
    colorHex: "#333",
    colorOpacity: 0.5,
    tempColorOpacity: 0.7,
    colorPalette: "color1",
    tempColorPalette: "color2",
    widthType: WidthType.GROUPED,
    width: Width.unsafe(1),
    tempWidth: Width.unsafe(2),
    topWidth: Width.unsafe(3),
    tempTopWidth: Width.unsafe(4),
    rightWidth: Width.unsafe(5),
    tempRightWidth: Width.unsafe(6),
    bottomWidth: Width.unsafe(7),
    tempBottomWidth: Width.unsafe(8),
    leftWidth: Width.unsafe(9),
    tempLeftWidth: Width.unsafe(10)
  };

  test("If the element model key is missing or is not valid, use use empty value for default", () => {
    const m: Value = model;
    const r = {
      ...model,
      style: Style.empty,
      opacity: Opacity.empty,
      palette: Palette.empty,
      tempPalette: Palette.empty,
      widthType: WidthType.empty,
      width: Width.empty,
      topWidth: Width.empty,
      rightWidth: Width.empty,
      bottomWidth: Width.empty,
      leftWidth: Width.empty
    };

    expect(fromElementModel(k => m[k as keyof Value])).toMatchObject(r);
  });

  test("If key exists and value is valid, use key value", () => {
    const {
      colorHex,
      colorOpacity,
      tempColorOpacity,
      colorPalette,
      tempColorPalette,
      ...other
    } = db;

    const r = {
      ...other,
      hex: colorHex,
      opacity: colorOpacity,
      tempOpacity: tempColorOpacity,
      palette: colorPalette,
      tempPalette: tempColorPalette
    };

    expect(fromElementModel(k => db[k] as MValue<Literal>)).toMatchObject(r);
  });

  test("If style is empty, set opacity, palette and width to their empty values", () => {
    const _db: ElementModel = { ...db, style: Style.empty };

    expect(fromElementModel(k => _db[k] as MValue<Literal>)).toMatchObject({
      opacity: Opacity.empty,
      palette: Palette.empty,
      width: Width.unsafe(0),
      topWidth: Width.unsafe(0),
      rightWidth: Width.unsafe(0),
      bottomWidth: Width.unsafe(0),
      leftWidth: Width.unsafe(0)
    });
  });

  test("If opacity is empty, set style, palette and width to their empty values", () => {
    const _db: ElementModel = { ...db, colorOpacity: Opacity.empty };

    expect(fromElementModel(k => _db[k] as MValue<Literal>)).toMatchObject({
      style: Style.empty,
      palette: Palette.empty,
      width: Width.empty,
      topWidth: Width.empty,
      rightWidth: Width.empty,
      bottomWidth: Width.empty,
      leftWidth: Width.empty
    });
  });

  test("If width type is 'grouped' and width is empty, set style, palette and opacity to their empty values", () => {
    const _db: ElementModel = {
      ...db,
      widthType: WidthType.GROUPED,
      width: Width.empty
    };

    expect(fromElementModel(k => _db[k] as MValue<Literal>)).toMatchObject({
      style: Style.empty,
      palette: Palette.empty,
      opacity: Opacity.empty,
      topWidth: Width.empty,
      rightWidth: Width.empty,
      bottomWidth: Width.empty,
      leftWidth: Width.empty
    });
  });

  test("If width type is 'ungrouped' and all edge widths are empty, set style, palette and opacity to their empty values", () => {
    const _db: ElementModel = {
      ...db,
      widthType: WidthType.UNGROUPED,
      topWidth: Width.empty,
      rightWidth: Width.empty,
      bottomWidth: Width.empty,
      leftWidth: Width.empty
    };

    expect(fromElementModel(k => _db[k] as MValue<Literal>)).toMatchObject({
      style: Style.empty,
      palette: Palette.empty,
      opacity: Opacity.empty,
      width: Width.empty
    });
  });

  test("If width type is 'ungrouped' and at least one edge width is not empty, do not empty style, palette and opacity values", () => {
    [
      { topWidth: 1 },
      { rightWidth: 1 },
      { bottomWidth: 1 },
      { leftWidth: Width.unsafe(1) }
    ].map(v => {
      const _db: ElementModel = {
        ...db,
        topWidth: Width.empty,
        rightWidth: Width.empty,
        bottomWidth: Width.empty,
        leftWidth: Width.empty,
        widthType: WidthType.UNGROUPED,
        ...v
      };

      expect(fromElementModel(k => _db[k] as MValue<Literal>)).toMatchObject({
        style: _db.style,
        palette: _db.colorPalette,
        opacity: _db.colorOpacity,
        width: _db.width
      });
    });
  });
});

describe("Testing 'toElementModel' function", function() {
  test("If the element model key is missing or is not valid, use use empty value for default", () => {
    const m: Value = model;
    const r = {
      style: Style.empty,
      tempStyle: model.tempStyle,
      colorHex: model.hex,
      colorOpacity: Opacity.empty,
      tempColorOpacity: model.tempOpacity,
      colorPalette: Palette.empty,
      tempColorPalette: Palette.empty,
      widthType: WidthType.empty,
      width: Width.empty,
      tempWidth: model.tempWidth,
      topWidth: Width.empty,
      tempTopWidth: model.tempTopWidth,
      rightWidth: Width.empty,
      tempRightWidth: model.tempRightWidth,
      bottomWidth: Width.empty,
      tempBottomWidth: model.tempBottomWidth,
      leftWidth: Width.empty,
      tempLeftWidth: model.tempLeftWidth
    };

    expect(toElementModel(m)).toMatchObject(r);
  });

  test("If key exists and value is valid, use key value", () => {
    const m: Value = {
      ...model,
      style: Style.DOTTED,
      tempStyle: Style.DOTTED,
      hex: Hex.unsafe("#555555"),
      opacity: Opacity.unsafe(0.1),
      tempOpacity: Opacity.unsafe(0.1),
      palette: COLOR3,
      tempPalette: COLOR3,
      widthType: WidthType.UNGROUPED,
      width: Width.unsafe(1),
      tempWidth: Width.unsafe(1),
      topWidth: Width.unsafe(1),
      tempTopWidth: Width.unsafe(1),
      rightWidth: Width.unsafe(1),
      tempRightWidth: Width.unsafe(1),
      bottomWidth: Width.unsafe(1),
      tempBottomWidth: Width.unsafe(1),
      leftWidth: Width.unsafe(1),
      tempLeftWidth: Width.unsafe(1)
    };
    const { hex, opacity, tempOpacity, palette, tempPalette, ...other } = m;

    const r = {
      ...other,
      colorHex: hex,
      colorOpacity: opacity,
      tempColorOpacity: tempOpacity,
      colorPalette: palette,
      tempColorPalette: tempPalette
    };

    expect(toElementModel(m)).toMatchObject(r);
  });
});

describe("Testing 'isEmptyWidth' function", function() {
  test("If width type is grouped and width empty, return true", () => {
    const m: Value = {
      ...model,
      widthType: WidthType.GROUPED,
      width: Width.empty
    };
    expect(isEmptyWidth(m)).toBe(true);
  });

  test("If width type is grouped and width not empty, return false", () => {
    const m: Value = {
      ...model,
      widthType: WidthType.GROUPED,
      width: Width.unsafe(1)
    };
    expect(isEmptyWidth(m)).toBe(false);
  });

  test("If width type is ungrouped and all edges widths are empty, return true", () => {
    const m: Value = {
      ...model,
      widthType: WidthType.UNGROUPED,
      topWidth: Width.unsafe(0),
      rightWidth: Width.unsafe(0),
      bottomWidth: Width.unsafe(0),
      leftWidth: Width.unsafe(0)
    };
    expect(isEmptyWidth(m)).toBe(true);
  });

  test("If width type is ungrouped and at least one edge is not empty, return true", () => {
    const m: Value = {
      ...model,
      widthType: WidthType.UNGROUPED,
      topWidth: Width.unsafe(0),
      rightWidth: Width.unsafe(0),
      bottomWidth: Width.unsafe(0),
      leftWidth: Width.unsafe(9)
    };
    expect(isEmptyWidth(m)).toBe(false);
  });
});
