import classnames from "classnames";
import React from "react";
import { connect } from "react-redux";
import { TextEditor } from "visual/component/Controls/TextEditor";
import EditorIcon from "visual/component/EditorIcon";
import { Scrollbar } from "visual/component/Scrollbar";
import Toolbar, { hideToolbar } from "visual/component/Toolbar";
import Config from "visual/global/Config";
import { setDeviceMode } from "visual/redux/actions2";
import { deviceModeSelector } from "visual/redux/selectors";
import { getFontById } from "visual/utils/fonts";
import { getWeightChoices } from "visual/utils/fonts";
import { getSuffixChoices } from "visual/utils/fonts/SizeSuffix";
import { t } from "visual/utils/i18n";
import { isStory } from "visual/utils/models";
import { printf } from "visual/utils/string";
import { uuid } from "visual/utils/uuid";

const animateClassName = "brz-ed-option__font-style-editor--animate";

const mapDevice = (device) => ({
  deviceMode: deviceModeSelector(device)
});
const mapDispatch = { setDeviceMode };

const connector = connect(mapDevice, mapDispatch);

class FontStyle extends React.Component {
  static defaultProps = {
    title: "Title",
    fontFamily: "",
    fontSize: 12,
    fontSizeSuffix: "px",
    fontWeight: 300,
    lineHeight: 1,
    letterSpacing: 1,
    tabletFontSize: 12,
    tabletFontSizeSuffix: "px",
    tabletFontWeight: 300,
    tabletLineHeight: 1,
    tabletLetterSpacing: 1,
    mobileFontSize: 12,
    mobileFontSizeSuffix: "px",
    mobileFontWeight: 300,
    mobileLineHeight: 1,
    mobileLetterSpacing: 1,
    showDeleteIcon: false
  };

  state = {
    device: "desktop",
    active: false
  };

  handleToolbarOpen = () => {
    this.setState({ active: true });
  };

  handleToolbarClose = () => {
    this.setState({ active: false });
  };

  handleTabsChange = (device) => {
    this.props.setDeviceMode(device);

    this.setState({ device });
  };

  handleTextChange = (text) => {
    this.props.onChange({ title: text });
  };

  handleDelete = () => {
    hideToolbar();
    this.props.onChange({ deleted: true });
  };

  render() {
    const {
      title,
      fontFamily,
      fontFamilyType,
      fontSize,
      fontSizeSuffix,
      fontWeight,
      lineHeight,
      letterSpacing,
      tabletFontSize,
      tabletFontSizeSuffix,
      tabletFontWeight,
      tabletLineHeight,
      tabletLetterSpacing,
      mobileFontSize,
      mobileFontSizeSuffix,
      mobileFontWeight,
      mobileLineHeight,
      mobileLetterSpacing,
      showDeleteIcon,
      deletable,
      onChange,
      itemIndex,
      animationCounter,
      deviceMode
    } = this.props;
    const { active } = this.state;

    const className = classnames("brz-ed-option__font-style-editor", {
      active,
      [`${animateClassName}`]: animationCounter !== 0
    });

    const sampleStyle = {
      fontFamily: getFontById({ family: fontFamily, type: fontFamilyType })
        .family,
      fontWeight:
        deviceMode === "desktop"
          ? fontWeight
          : deviceMode === "tablet"
          ? tabletFontWeight
          : mobileFontWeight
    };
    const IS_STORY = isStory(Config.getAll());
    const getToolbarItems = () => [
      {
        id: "toolbarTypography",
        type: "popover",
        icon: "nc-font",
        size: "xlarge",
        display: "inside",
        onOpenDirect: true,
        options: [
          {
            type: "grid",
            className:
              "brz-ed-grid__typography brz-ed-grid__typography--sidebar",
            columns: [
              {
                width: 54,
                options: [
                  {
                    id: "fontFamily",
                    label: "Font Family",
                    type: "fontFamily",
                    value: fontFamily,
                    onChange: ({ id, type }) =>
                      onChange({ fontFamily: id, fontFamilyType: type })
                  }
                ]
              },
              {
                width: 46,
                className: "brz-ed-popover__typography",
                options: [
                  {
                    id: "fontDevices",
                    type: "tabs",
                    align: "start",
                    tabsClassName: "brz-ed-control__tabs__editor",
                    tabs: [
                      {
                        id: "desktop",
                        tabIcon: "nc-desktop",
                        options: [
                          {
                            type: "grid",
                            className: "brz-ed-grid__typography",
                            columns: [
                              {
                                width: 50,
                                className:
                                  "brz-ed-grid__typography--globalStyles-col1",
                                options: [
                                  {
                                    id: "fontSizeSuffix",
                                    type: "select-dev",
                                    label: "Size",
                                    className: "brz-control__typography-suffix",
                                    disabled: IS_STORY,
                                    choices: getSuffixChoices,
                                    value: { value: fontSizeSuffix },
                                    onChange: ({ value }) =>
                                      onChange({ fontSizeSuffix: value })
                                  },
                                  {
                                    id: "fontSize",
                                    type: "stepper",
                                    label: IS_STORY ? "Size" : "",
                                    display: "block",
                                    min: 1,
                                    max: 300,
                                    step: 1,
                                    value: fontSize,
                                    onChange: (fontSize) =>
                                      onChange({ fontSize })
                                  },
                                  {
                                    id: "lineHeight",
                                    label: "Line Hgt.",
                                    type: "stepper",
                                    display: "block",
                                    min: 1,
                                    max: 20,
                                    step: 0.1,
                                    value: lineHeight,
                                    onChange: (lineHeight) =>
                                      onChange({ lineHeight })
                                  }
                                ]
                              },
                              {
                                width: 50,
                                className:
                                  "brz-ed-grid__typography--globalStyles-col2",
                                options: [
                                  {
                                    id: "fontWeight",
                                    label: "Weight",
                                    type: "select-dev",
                                    display: "block",
                                    choices: getWeightChoices({
                                      family: fontFamily,
                                      type: fontFamilyType
                                    }),
                                    value: { value: fontWeight },
                                    onChange: ({ value }) =>
                                      onChange({ fontWeight: value })
                                  },
                                  {
                                    id: "letterSpacing",
                                    label: "Letter Sp.",
                                    type: "stepper",
                                    display: "block",
                                    min: -20,
                                    max: 20,
                                    step: 0.1,
                                    value: letterSpacing,
                                    onChange: (letterSpacing) =>
                                      onChange({ letterSpacing })
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      },
                      {
                        id: "tablet",
                        tabIcon: "nc-tablet",
                        options: [
                          {
                            type: "grid",
                            disabled: IS_STORY,
                            className: "brz-ed-grid__typography",
                            columns: [
                              {
                                width: 50,
                                className:
                                  "brz-ed-grid__typography--globalStyles-col1",
                                options: [
                                  {
                                    id: "tabletFontSizeSuffix",
                                    type: "select-dev",
                                    label: "Size",
                                    className: "brz-control__typography-suffix",
                                    choices: getSuffixChoices,
                                    value: { value: tabletFontSizeSuffix },
                                    onChange: ({ value }) =>
                                      onChange({ tabletFontSizeSuffix: value })
                                  },
                                  {
                                    id: "tabletFontSize",
                                    type: "stepper",
                                    display: "block",
                                    min: 1,
                                    max: 300,
                                    step: 1,
                                    value: tabletFontSize,
                                    onChange: (tabletFontSize) =>
                                      onChange({ tabletFontSize })
                                  },
                                  {
                                    id: "tabletLineHeight",
                                    label: "Line Hgt.",
                                    type: "stepper",
                                    display: "block",
                                    min: 1,
                                    max: 20,
                                    step: 0.1,
                                    value: tabletLineHeight,
                                    onChange: (tabletLineHeight) =>
                                      onChange({ tabletLineHeight })
                                  }
                                ]
                              },
                              {
                                width: 50,
                                className:
                                  "brz-ed-grid__typography--globalStyles-col2",
                                options: [
                                  {
                                    id: "tabletFontWeight",
                                    label: "Weight",
                                    type: "select-dev",
                                    display: "block",
                                    choices: getWeightChoices({
                                      family: fontFamily,
                                      type: fontFamilyType
                                    }),
                                    value: { value: tabletFontWeight },
                                    onChange: ({ value }) =>
                                      onChange({ tabletFontWeight: value })
                                  },
                                  {
                                    id: "tabletLetterSpacing",
                                    label: "Letter Sp.",
                                    type: "stepper",
                                    display: "block",
                                    min: -20,
                                    max: 20,
                                    step: 0.5,
                                    value: tabletLetterSpacing,
                                    onChange: (tabletLetterSpacing) =>
                                      onChange({ tabletLetterSpacing })
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      },
                      {
                        id: "mobile",
                        tabIcon: "nc-phone",
                        options: [
                          {
                            type: "grid",
                            disabled: IS_STORY,
                            className: "brz-ed-grid__typography",
                            columns: [
                              {
                                width: 50,
                                className:
                                  "brz-ed-grid__typography--globalStyles-col1",
                                options: [
                                  {
                                    id: "mobileFontSizeSuffix",
                                    type: "select-dev",
                                    label: "Size",
                                    className: "brz-control__typography-suffix",
                                    choices: getSuffixChoices,
                                    value: { value: mobileFontSizeSuffix },
                                    onChange: ({ value }) =>
                                      onChange({ mobileFontSizeSuffix: value })
                                  },
                                  {
                                    id: "mobileFontSize",
                                    type: "stepper",
                                    display: "block",
                                    min: 1,
                                    max: 300,
                                    step: 1,
                                    value: mobileFontSize,
                                    onChange: (mobileFontSize) =>
                                      onChange({ mobileFontSize })
                                  },
                                  {
                                    id: "mobileLineHeight",
                                    label: "Line Hgt.",
                                    type: "stepper",
                                    display: "block",
                                    min: 1,
                                    max: 20,
                                    step: 0.1,
                                    value: mobileLineHeight,
                                    onChange: (mobileLineHeight) =>
                                      onChange({ mobileLineHeight })
                                  }
                                ]
                              },
                              {
                                width: 50,
                                className:
                                  "brz-ed-grid__typography--globalStyles-col2",
                                options: [
                                  {
                                    id: "mobileFontWeight",
                                    label: "Weight",
                                    type: "select-dev",
                                    display: "block",
                                    choices: getWeightChoices({
                                      family: fontFamily,
                                      type: fontFamilyType
                                    }),
                                    value: { value: mobileFontWeight },
                                    onChange: (data) =>
                                      onChange({
                                        mobileFontWeight: data.value
                                      })
                                  },
                                  {
                                    id: "mobileLetterSpacing",
                                    label: "Letter Sp.",
                                    type: "stepper",
                                    display: "block",
                                    min: -20,
                                    max: 20,
                                    step: 0.5,
                                    value: mobileLetterSpacing,
                                    onChange: (mobileLetterSpacing) =>
                                      onChange({ mobileLetterSpacing })
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      }
                    ],
                    value: deviceMode,
                    onChange: this.handleTabsChange
                  }
                ]
              }
            ]
          }
        ]
      }
    ];

    const style = { animationDelay: `${0.2 * itemIndex}s` };

    return (
      <div className={className} style={style}>
        {showDeleteIcon ? (
          <div
            className="brz-ed-option__font-style-editor--delete"
            onClick={this.handleDelete}
          >
            <EditorIcon icon="nc-trash" />
          </div>
        ) : null}
        <Toolbar
          getItems={getToolbarItems}
          onOpen={this.handleToolbarOpen}
          onClose={this.handleToolbarClose}
        >
          <div className="brz-ed-option__font-style-editor__container">
            <p className="brz-p brz-ed-option__font-style-editor__title">
              {deletable === "on" ? (
                <TextEditor value={title} onChange={this.handleTextChange} />
              ) : (
                title
              )}
            </p>
            <p
              className="brz-p brz-ed-option__font-style-editor__sample"
              style={sampleStyle}
            >
              {t("It's a sample")}
            </p>
          </div>
        </Toolbar>
      </div>
    );
  }
}

const FontStyleItems = connector(FontStyle);

class FontStyleEditor extends React.Component {
  static defaultProps = {
    value: {}
  };

  state = {
    brzNewItem: false,
    numItems:
      this.props.value.fontStyles.length +
      this.props.value.extraFontStyles.length,
    animationCounter: 0
  };

  scrollRef = React.createRef();

  handleChange = (id, newValue) => {
    const { value: _value, onChange } = this.props;
    const fonts = [..._value.extraFontStyles, ..._value.fontStyles];

    const value = fonts.map((el) =>
      id === el.id ? { ...el, ...newValue } : el
    );

    onChange(value);

    this.setState({ brzNewItem: false });
  };

  handleAnimationEnd = (event) => {
    const { numItems, animationCounter } = this.state;
    const targetEvent = event.target;

    targetEvent.classList.remove(animateClassName);
    targetEvent.removeEventListener("animationend", this.handleAnimationEnd);

    if (animationCounter < numItems - 1) {
      this.setState((prevState) => ({
        animationCounter: prevState.animationCounter + 1
      }));
    }
  };

  handleAddNew = () => {
    const { value, onChange } = this.props;

    const lastFont = value.fontStyles.find((v) => v.id === "paragraph");
    const valuesLength = value.extraFontStyles.length + value.fontStyles.length;

    const newFont = {
      ...(lastFont ?? value.fontStyles[0]),
      deletable: "on",
      id: uuid(),
      title: printf(t("New Style #%s"), valuesLength)
    };
    const newValue = [...value.fontStyles, ...value.extraFontStyles, newFont];

    onChange(newValue);

    this.setState((prevState) => ({
      brzNewItem: true,
      numItems: prevState.numItems + 1,
      animationCounter: prevState.animationCounter + 1
    }));

    const getAllItems = window.parent.document.querySelectorAll(
      ".brz-ed-option__font-style-editor"
    );

    getAllItems.forEach((element, index) => {
      const endAnimation = element.addEventListener(
        "animationend",
        this.handleAnimationEnd
      );

      element.classList.remove(animateClassName);

      if (index === 0) {
        requestAnimationFrame(() => {
          element.classList.add(animateClassName);
          endAnimation;
        });
      } else {
        element.classList.add(animateClassName);
        endAnimation;
      }
    });

    if (this.scrollRef.current) {
      this.scrollRef.current.scrollToTop();
    }
  };

  render() {
    const { value: _value } = this.props;
    const { brzNewItem, numItems, animationCounter } = this.state;
    const reversedExtraFontStyles = _value.extraFontStyles.slice().reverse();
    const value = [...reversedExtraFontStyles, ..._value.fontStyles];

    const items = value
      .filter((el) => !el.deleted)
      .map((el, index) => (
        <FontStyleItems
          key={el.id}
          showDeleteIcon={el.deletable === "on"}
          {...el}
          onChange={this.handleChange.bind(null, el.id)}
          itemIndex={index}
          numItems={numItems}
          animationCounter={animationCounter}
        />
      ));

    const className = classnames("brz-ed-option__font-styles", {
      "brz-ed-option__font-styles--new-item": brzNewItem
    });

    return (
      <div className={className}>
        <Scrollbar theme="dark" ref={this.scrollRef}>
          {items}
        </Scrollbar>
        <div
          className="brz-ed-option__font-styles--add"
          onClick={this.handleAddNew}
        >
          <EditorIcon icon="nc-add" />
          <span className="brz-span">{t("Add New")}</span>
        </div>
      </div>
    );
  }
}

export default FontStyleEditor;
