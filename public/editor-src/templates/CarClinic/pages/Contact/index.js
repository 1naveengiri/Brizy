module.exports = {
  id: "CarClinicContact",
  thumbnailWidth: 680,
  thumbnailHeight: 992,
  title: "Contact",
  keywords: "contact, car clinic, Car, Service, Auto, Moto, Transportation",
  cat: [0, 5],
  pro: true,
  resolve: {
    blocks: [
      {
        type: "Section",
        value: {
          _styles: ["section"],
          items: [
            {
              type: "SectionItem",
              value: {
                _styles: ["section-item"],
                items: [
                  {
                    type: "Wrapper",
                    value: {
                      _styles: ["wrapper", "wrapper--richText"],
                      items: [
                        {
                          type: "RichText",
                          value: {
                            _styles: ["richText"],
                            text:
                              '<h1 class="brz-tp-heading1"><span class="brz-cp-color2">Send us your thoughts</span></h1>'
                          }
                        }
                      ],
                      marginBottom: 0,
                      marginBottomSuffix: "px",
                      margin: 0,
                      marginLeft: 35,
                      marginLeftSuffix: "px",
                      animationName: "fadeInDown",
                      tempAnimationName: "fadeInDown",
                      animationDelay: 0
                    }
                  },
                  {
                    type: "Wrapper",
                    value: {
                      _styles: ["wrapper", "wrapper--richText"],
                      items: [
                        {
                          type: "RichText",
                          value: {
                            _styles: ["richText"],
                            text:
                              '<p class="brz-tp-paragraph"><span class="brz-cp-color2">Contact us by filling in the form below. Address and phone info further down.</span></p>'
                          }
                        }
                      ],
                      marginTop: 0,
                      marginTopSuffix: "px",
                      margin: 0,
                      marginLeft: 35,
                      marginLeftSuffix: "px",
                      animationName: "fadeInDown",
                      tempAnimationName: "fadeInDown",
                      animationDelay: 0
                    }
                  },
                  {
                    type: "Wrapper",
                    value: {
                      _styles: ["wrapper", "wrapper--spacer"],
                      items: [
                        {
                          type: "Spacer",
                          value: {
                            _styles: ["spacer"],
                            height: 20
                          }
                        }
                      ],
                      showOnMobile: "off"
                    }
                  },
                  {
                    type: "Row",
                    value: {
                      _styles: ["row", "hide-row-borders", "padding-0"],
                      items: [
                        {
                          type: "Column",
                          value: {
                            _styles: ["column"],
                            items: [
                              {
                                type: "Wrapper",
                                value: {
                                  _styles: ["wrapper", "wrapper--iconText"],
                                  items: [
                                    {
                                      type: "Form",
                                      value: {
                                        _styles: ["form"],
                                        items: [
                                          {
                                            type: "FormFields",
                                            value: {
                                              items: [
                                                {
                                                  type: "FormField",
                                                  value: {
                                                    type: "Email",
                                                    label: "Email Address",
                                                    required: "off",
                                                    options: [
                                                      "Option 1",
                                                      "Option 2"
                                                    ],
                                                    width: 32
                                                  }
                                                },
                                                {
                                                  type: "FormField",
                                                  value: {
                                                    type: "Text",
                                                    label: "Your Name",
                                                    required: "off",
                                                    options: [
                                                      "Option 1",
                                                      "Option 2"
                                                    ],
                                                    width: 34
                                                  }
                                                },
                                                {
                                                  type: "FormField",
                                                  value: {
                                                    type: "Number",
                                                    label: "Phone Number",
                                                    required: "off",
                                                    options: [
                                                      "Option 1",
                                                      "Option 2"
                                                    ],
                                                    width: 34
                                                  }
                                                },
                                                {
                                                  type: "FormField",
                                                  value: {
                                                    type: "Paragraph",
                                                    label: "Message",
                                                    required: "off",
                                                    options: [
                                                      "Option 1",
                                                      "Option 2"
                                                    ],
                                                    width: 100
                                                  }
                                                }
                                              ],
                                              fontStyle: "paragraph",
                                              mobileFontStyle: "",
                                              bgColorPalette: "color6",
                                              colorPalette: "color2",
                                              borderColorHex: "#8a95aa",
                                              borderColorOpacity: 0.299999999999999988897769753748434595763683319091796875,
                                              borderColorPalette: "color4",
                                              padding: 20,
                                              paddingRight: 20,
                                              paddingBottom: 20,
                                              paddingLeft: 20
                                            }
                                          },
                                          {
                                            type: "Button",
                                            value: {
                                              _styles: ["button", "submit"],
                                              text: "SEND MESSAGE\u00a0 \u00a0",
                                              iconName: "stre-right",
                                              iconType: "glyph",
                                              size: "small",
                                              mobileSize: "small",
                                              fontSize: 11,
                                              paddingTB: 11,
                                              paddingTop: 11,
                                              paddingBottom: 11,
                                              tempPaddingTB: 11,
                                              tempPaddingTop: 11,
                                              tempPaddingBottom: 11,
                                              paddingRL: 26,
                                              paddingRight: 26,
                                              paddingLeft: 26,
                                              tempPaddingRL: 26,
                                              tempPaddingRight: 26,
                                              tempPaddingLeft: 26,
                                              borderRadius: 4,
                                              borderWidth: 2,
                                              mobilePaddingTop: 11,
                                              mobilePaddingRight: 26,
                                              mobilePaddingBottom: 11,
                                              mobilePaddingLeft: 26,
                                              bgColorPalette: "color5",
                                              tempBgColorPalette: "color5",
                                              bgColorOpacity: 1,
                                              borderRadiusType: "custom",
                                              fillType: "filled",
                                              borderColorPalette: "color5",
                                              tempBorderColorPalette: "color5",
                                              hoverBgColorOpacity: 1,
                                              tempBorderRadiusType: "custom",
                                              borderColorOpacity: 1,
                                              hoverBorderColorOpacity: 0,
                                              tempBorderRadius: 4,
                                              tempMobileBorderRadius: 4,
                                              hoverBgColorHex: "#2dabe0",
                                              tempHoverBgColorOpacity: 1,
                                              hoverBgColorPalette: "color3",
                                              tempHoverBgColorPalette: "color3",
                                              hoverBorderColorHex: "#2dabe0",
                                              hoverBorderColorPalette: "",
                                              tempHoverBorderColorPalette: "",
                                              iconSize: "custom",
                                              iconCustomSize: 12,
                                              iconSpacing: 0
                                            }
                                          }
                                        ],
                                        horizontalAlign: "left"
                                      }
                                    }
                                  ],
                                  customClassName: "header-contact-brizy",
                                  marginTop: 0,
                                  marginTopSuffix: "px",
                                  margin: 0,
                                  marginBottom: 0,
                                  marginBottomSuffix: "px"
                                }
                              }
                            ],
                            width: 70,
                            bgColorPalette: "color8",
                            bgColorHex: "#ffffff",
                            bgColorOpacity: 1,
                            mobilePaddingRight: 10,
                            mobilePaddingLeft: 10,
                            paddingType: "grouped",
                            padding: 70,
                            paddingSuffix: "px",
                            paddingTop: 70,
                            paddingRight: 70,
                            paddingBottom: 70,
                            paddingLeft: 70,
                            borderRadius: 5,
                            borderTopLeftRadius: 5,
                            borderTopRightRadius: 5,
                            borderBottomLeftRadius: 5,
                            borderBottomRightRadius: 5,
                            tempBorderRadius: 5,
                            tempBorderTopLeftRadius: 5,
                            tempBorderTopRightRadius: 5,
                            tempBorderBottomRightRadius: 5,
                            tempBorderBottomLeftRadius: 5,
                            animationName: "fadeInUp",
                            tempAnimationName: "fadeInUp",
                            animationDelay: 0,
                            tempBgColorOpacity: 1
                          }
                        },
                        {
                          type: "Column",
                          value: {
                            _styles: ["column"],
                            items: [],
                            width: 30,
                            showOnMobile: "off"
                          }
                        }
                      ]
                    }
                  }
                ],
                paddingType: "ungrouped",
                paddingTop: 150,
                paddingBottom: 180,
                padding: 75,
                bgImageWidth: 1920,
                bgImageHeight: 970,
                bgImageSrc: "10a3b3c55a3efbc65f66dadc74316ccf.jpg",
                bgPositionX: 50,
                bgPositionY: 50,
                bgColorOpacity: 0,
                tempBgColorOpacity: 1,
                tempMobileBgColorOpacity: 1,
                bgPopulation: ""
              }
            }
          ]
        },
        blockId: "Blank000Light"
      },
      {
        type: "Section",
        value: {
          _styles: ["section"],
          items: [
            {
              type: "SectionItem",
              value: {
                _styles: ["section-item"],
                items: [
                  {
                    type: "Row",
                    value: {
                      _styles: ["row", "hide-row-borders", "padding-0"],
                      items: [
                        {
                          type: "Column",
                          value: {
                            _styles: ["column"],
                            items: [
                              {
                                type: "Wrapper",
                                value: {
                                  _styles: ["wrapper", "wrapper--spacer"],
                                  items: [
                                    {
                                      type: "Spacer",
                                      value: {
                                        _styles: ["spacer"],
                                        height: 60
                                      }
                                    }
                                  ],
                                  showOnMobile: "off"
                                }
                              },
                              {
                                type: "Wrapper",
                                value: {
                                  _styles: ["wrapper", "wrapper--richText"],
                                  items: [
                                    {
                                      type: "RichText",
                                      value: {
                                        _styles: ["richText"],
                                        text:
                                          '<h3 class="brz-tp-heading3"><span class="brz-cp-color2">Address &amp; Phones</span></h3>'
                                      }
                                    }
                                  ],
                                  marginBottom: 0,
                                  marginBottomSuffix: "px",
                                  margin: 0
                                }
                              },
                              {
                                type: "Wrapper",
                                value: {
                                  _styles: ["wrapper", "wrapper--richText"],
                                  items: [
                                    {
                                      type: "RichText",
                                      value: {
                                        _styles: ["richText"],
                                        text:
                                          '<p class="brz-tp-paragraph"><span class="brz-cp-color4">Proostwetering 53, 3543 AC Utrecht</span></p><p class="brz-tp-paragraph"><span class="brz-cp-color4">The Netherlands.</span></p>'
                                      }
                                    }
                                  ],
                                  marginBottom: 15,
                                  marginBottomSuffix: "px",
                                  margin: 0
                                }
                              },
                              {
                                type: "Row",
                                value: {
                                  _styles: [
                                    "row",
                                    "hide-row-borders",
                                    "padding-0"
                                  ],
                                  items: [
                                    {
                                      type: "Column",
                                      value: {
                                        _styles: ["column"],
                                        items: [
                                          {
                                            type: "Wrapper",
                                            value: {
                                              _styles: [
                                                "wrapper",
                                                "wrapper--image"
                                              ],
                                              items: [
                                                {
                                                  type: "Image",
                                                  value: {
                                                    _styles: ["image"],
                                                    imageWidth: 40,
                                                    imageHeight: 40,
                                                    imageSrc:
                                                      "77007f578debeb6f2378eac05fab8bf4.png",
                                                    height: 96,
                                                    positionX: 50,
                                                    positionY: 50,
                                                    mobileHeight: 100,
                                                    resize: 80
                                                  }
                                                }
                                              ],
                                              horizontalAlign: "left"
                                            }
                                          }
                                        ],
                                        paddingType: "grouped",
                                        padding: 0,
                                        paddingSuffix: "px",
                                        paddingTop: 0,
                                        paddingRight: 0,
                                        paddingBottom: 0,
                                        paddingLeft: 0,
                                        width: 20.39999999999999857891452847979962825775146484375,
                                        verticalAlign: "center"
                                      }
                                    },
                                    {
                                      type: "Column",
                                      value: {
                                        _styles: ["column"],
                                        items: [
                                          {
                                            type: "Wrapper",
                                            value: {
                                              _styles: [
                                                "wrapper",
                                                "wrapper--richText"
                                              ],
                                              items: [
                                                {
                                                  type: "RichText",
                                                  value: {
                                                    _styles: ["richText"],
                                                    text:
                                                      '<p class="brz-tp-paragraph brz-mt-lg-0"><strong class="brz-cp-color5">+31 302 212 121</strong></p>'
                                                  }
                                                }
                                              ],
                                              marginBottom: 0,
                                              marginBottomSuffix: "px",
                                              margin: 0,
                                              marginTop: 2,
                                              marginTopSuffix: "px"
                                            }
                                          },
                                          {
                                            type: "Wrapper",
                                            value: {
                                              _styles: [
                                                "wrapper",
                                                "wrapper--richText"
                                              ],
                                              items: [
                                                {
                                                  type: "RichText",
                                                  value: {
                                                    _styles: ["richText"],
                                                    text:
                                                      '<p class="brz-mt-lg-0 brz-tp-paragraph"><strong class="brz-cp-color5">+31 302 212 121</strong></p>'
                                                  }
                                                }
                                              ],
                                              marginBottom: 0,
                                              marginBottomSuffix: "px",
                                              margin: 0,
                                              marginTop: 0,
                                              marginTopSuffix: "px"
                                            }
                                          }
                                        ],
                                        paddingType: "grouped",
                                        padding: 0,
                                        paddingSuffix: "px",
                                        paddingTop: 0,
                                        paddingRight: 0,
                                        paddingBottom: 0,
                                        paddingLeft: 0,
                                        width: 79.599999999999994315658113919198513031005859375,
                                        verticalAlign: "center",
                                        marginType: "ungrouped",
                                        marginLeft: -15,
                                        marginLeftSuffix: "px",
                                        margin: 0
                                      }
                                    }
                                  ]
                                }
                              },
                              {
                                type: "Wrapper",
                                value: {
                                  _styles: ["wrapper", "wrapper--richText"],
                                  items: [
                                    {
                                      type: "RichText",
                                      value: {
                                        _styles: ["richText"],
                                        text:
                                          '<p class="brz-tp-paragraph"><span class="brz-cp-color4">Operating Hours:</span></p><p class="brz-tp-paragraph"><span class="brz-cp-color4">Monday - Friday:&nbsp;</span><span class="brz-cp-color2">08:30 - 18:00</span></p>'
                                      }
                                    }
                                  ],
                                  marginBottom: 15,
                                  marginBottomSuffix: "px",
                                  margin: 0
                                }
                              }
                            ],
                            width: 33.2999999999999971578290569595992565155029296875,
                            paddingRight: 30,
                            paddingRightSuffix: "px",
                            padding: 15,
                            paddingLeft: 60,
                            paddingLeftSuffix: "px"
                          }
                        },
                        {
                          type: "Column",
                          value: {
                            _styles: ["column"],
                            items: [
                              {
                                type: "Wrapper",
                                value: {
                                  _styles: ["wrapper", "wrapper--image"],
                                  items: [
                                    {
                                      type: "Image",
                                      value: {
                                        _styles: ["image"],
                                        imageWidth: 278,
                                        imageHeight: 511,
                                        imageSrc:
                                          "a58ae32d37d848a4f76072b2c7724b43.png",
                                        height: 100,
                                        positionX: 50,
                                        positionY: 50,
                                        resize: 75,
                                        mobileResize: 50
                                      }
                                    }
                                  ],
                                  horizontalAlign: "center",
                                  mobileHorizontalAlign: "left"
                                }
                              }
                            ],
                            width: 33.39999999999999857891452847979962825775146484375,
                            marginType: "ungrouped",
                            marginBottom: 20,
                            marginBottomSuffix: "px",
                            margin: 0,
                            paddingRight: 15,
                            paddingRightSuffix: "px",
                            padding: 15,
                            marginRight: 0,
                            marginRightSuffix: "px"
                          }
                        },
                        {
                          type: "Column",
                          value: {
                            _styles: ["column"],
                            items: [
                              {
                                type: "Wrapper",
                                value: {
                                  _styles: ["wrapper", "wrapper--spacer"],
                                  items: [
                                    {
                                      type: "Spacer",
                                      value: {
                                        _styles: ["spacer"],
                                        height: 60
                                      }
                                    }
                                  ],
                                  showOnMobile: "off"
                                }
                              },
                              {
                                type: "Wrapper",
                                value: {
                                  _styles: ["wrapper", "wrapper--richText"],
                                  items: [
                                    {
                                      type: "RichText",
                                      value: {
                                        _styles: ["richText"],
                                        text:
                                          '<h3 class="brz-tp-heading3"><span class="brz-cp-color2" style="opacity: 0.8;">Follow us on:</span></h3>'
                                      }
                                    }
                                  ],
                                  marginBottom: 0,
                                  marginBottomSuffix: "px",
                                  margin: 0
                                }
                              },
                              {
                                type: "Wrapper",
                                value: {
                                  _styles: ["wrapper", "wrapper--spacer"],
                                  items: [
                                    {
                                      type: "Spacer",
                                      value: {
                                        _styles: ["spacer"],
                                        height: 20
                                      }
                                    }
                                  ]
                                }
                              },
                              {
                                type: "Cloneable",
                                value: {
                                  _styles: [
                                    "wrapper-clone",
                                    "wrapper-clone--button"
                                  ],
                                  items: [
                                    {
                                      type: "Button",
                                      value: {
                                        _styles: ["button"],
                                        text: "FACEBOOK",
                                        iconName: "logo-facebook",
                                        iconType: "glyph",
                                        borderRadiusType: "custom",
                                        tempBorderRadiusType: "custom",
                                        paddingRight: 41,
                                        paddingLeft: 41,
                                        fillType: "filled",
                                        borderRadius: 0,
                                        borderWidth: 2,
                                        borderColorOpacity: 1,
                                        borderColorPalette: "color2",
                                        bgColorOpacity: 1,
                                        bgColorPalette: "color2",
                                        hoverBgColorOpacity: 1,
                                        hoverBorderColorOpacity: 1,
                                        tempBorderRadius: 0,
                                        tempMobileBorderRadius: 0,
                                        tempBgColorPalette: "color2",
                                        tempBorderColorPalette: "color2",
                                        hoverBgColorHex: "#2dabe0",
                                        tempHoverBgColorOpacity: 1,
                                        hoverBgColorPalette: "color3",
                                        tempHoverBgColorPalette: "color3",
                                        hoverBorderColorHex: "#2dabe0",
                                        hoverBorderColorPalette: "",
                                        tempHoverBorderColorPalette: "",
                                        iconPosition: "left",
                                        size: "custom",
                                        mobileSize: "small",
                                        fontSize: 14,
                                        paddingTB: 14,
                                        paddingTop: 14,
                                        paddingBottom: 14,
                                        tempPaddingTB: 14,
                                        tempPaddingTop: 14,
                                        tempPaddingBottom: 14,
                                        paddingRL: 41,
                                        tempPaddingRL: 41,
                                        tempPaddingRight: 41,
                                        tempPaddingLeft: 41,
                                        mobilePaddingTop: 11,
                                        mobilePaddingRight: 26,
                                        mobilePaddingBottom: 11,
                                        mobilePaddingLeft: 26,
                                        linkExternalBlank: "off",
                                        linkExternal: "#"
                                      }
                                    },
                                    {
                                      type: "Button",
                                      value: {
                                        _styles: ["button"],
                                        text: "TWITTER",
                                        iconName: "logo-twitter",
                                        iconType: "glyph",
                                        borderRadiusType: "custom",
                                        tempBorderRadiusType: "custom",
                                        paddingRight: 46,
                                        paddingLeft: 46,
                                        fillType: "filled",
                                        borderRadius: 0,
                                        borderWidth: 2,
                                        borderColorOpacity: 1,
                                        borderColorPalette: "color2",
                                        bgColorOpacity: 1,
                                        bgColorPalette: "color2",
                                        hoverBgColorOpacity: 1,
                                        hoverBorderColorOpacity: 1,
                                        tempBorderRadius: 0,
                                        tempMobileBorderRadius: 0,
                                        tempBgColorPalette: "color2",
                                        tempBorderColorPalette: "color2",
                                        hoverBgColorHex: "#2dabe0",
                                        tempHoverBgColorOpacity: 1,
                                        hoverBgColorPalette: "color3",
                                        tempHoverBgColorPalette: "color3",
                                        hoverBorderColorHex: "#2dabe0",
                                        hoverBorderColorPalette: "",
                                        tempHoverBorderColorPalette: "",
                                        iconPosition: "left",
                                        size: "custom",
                                        mobileSize: "small",
                                        fontSize: 14,
                                        paddingTB: 14,
                                        paddingTop: 14,
                                        paddingBottom: 14,
                                        tempPaddingTB: 14,
                                        tempPaddingTop: 14,
                                        tempPaddingBottom: 14,
                                        paddingRL: 46,
                                        tempPaddingRL: 46,
                                        tempPaddingRight: 46,
                                        tempPaddingLeft: 46,
                                        mobilePaddingTop: 11,
                                        mobilePaddingRight: 26,
                                        mobilePaddingBottom: 11,
                                        mobilePaddingLeft: 26,
                                        linkExternal: "#",
                                        linkExternalBlank: "off"
                                      }
                                    },
                                    {
                                      type: "Button",
                                      value: {
                                        _styles: ["button"],
                                        text: "INSTAGRAM",
                                        iconName: "logo-instagram",
                                        iconType: "glyph",
                                        borderRadiusType: "custom",
                                        tempBorderRadiusType: "custom",
                                        paddingRight: 37,
                                        paddingLeft: 37,
                                        fillType: "filled",
                                        borderRadius: 0,
                                        borderWidth: 2,
                                        borderColorOpacity: 1,
                                        borderColorPalette: "color2",
                                        bgColorOpacity: 1,
                                        bgColorPalette: "color2",
                                        hoverBgColorOpacity: 1,
                                        hoverBorderColorOpacity: 1,
                                        tempBorderRadius: 0,
                                        tempMobileBorderRadius: 0,
                                        tempBgColorPalette: "color2",
                                        tempBorderColorPalette: "color2",
                                        hoverBgColorHex: "#2dabe0",
                                        tempHoverBgColorOpacity: 1,
                                        hoverBgColorPalette: "color3",
                                        tempHoverBgColorPalette: "color3",
                                        hoverBorderColorHex: "#2dabe0",
                                        hoverBorderColorPalette: "",
                                        tempHoverBorderColorPalette: "",
                                        iconPosition: "left",
                                        size: "custom",
                                        mobileSize: "small",
                                        fontSize: 14,
                                        paddingTB: 14,
                                        paddingTop: 14,
                                        paddingBottom: 14,
                                        tempPaddingTB: 14,
                                        tempPaddingTop: 14,
                                        tempPaddingBottom: 14,
                                        paddingRL: 37,
                                        tempPaddingRL: 37,
                                        tempPaddingRight: 37,
                                        tempPaddingLeft: 37,
                                        mobilePaddingTop: 11,
                                        mobilePaddingRight: 26,
                                        mobilePaddingBottom: 11,
                                        mobilePaddingLeft: 26,
                                        linkExternal: "#",
                                        linkExternalBlank: "off"
                                      }
                                    }
                                  ],
                                  horizontalAlign: "left",
                                  itemPadding: 10,
                                  itemPaddingRight: 10,
                                  itemPaddingLeft: 10
                                }
                              }
                            ],
                            width: 33.2999999999999971578290569595992565155029296875,
                            paddingRight: 50,
                            paddingRightSuffix: "px",
                            padding: 15,
                            paddingLeft: 45,
                            paddingLeftSuffix: "px"
                          }
                        }
                      ]
                    }
                  }
                ],
                bgColorPalette: "color8",
                bgColorHex: "#ffffff",
                bgColorOpacity: 1,
                tempBgColorOpacity: 1,
                paddingType: "ungrouped",
                paddingTop: 25,
                paddingBottom: 0,
                padding: 75
              }
            }
          ],
          zIndex: 15
        },
        blockId: "Blank000Light"
      },
      {
        type: "Section",
        blockId: "Blank000Light",
        value: {
          _styles: ["section"],
          items: [
            {
              type: "SectionItem",
              value: {
                _styles: ["section-item"],
                items: [
                  {
                    type: "Wrapper",
                    value: {
                      _styles: ["wrapper", "wrapper--map"],
                      items: [
                        {
                          type: "Map",
                          value: {
                            _styles: ["map"],
                            height: 500,
                            mobileHeight: 300
                          }
                        }
                      ],
                      marginTop: 0,
                      marginTopSuffix: "px",
                      margin: 0,
                      marginBottom: 0,
                      marginBottomSuffix: "px",
                      mobileHorizontalAlign: "center"
                    }
                  }
                ],
                paddingType: "grouped",
                paddingTop: 0,
                paddingBottom: 0,
                padding: 0,
                containerType: "fullWidth"
              }
            }
          ]
        }
      },
      {
        type: "Section",
        blockId: "Blank000Light",
        value: {
          _styles: ["section"],
          items: [
            {
              type: "SectionItem",
              value: {
                _styles: ["section-item"],
                items: [
                  {
                    type: "Row",
                    value: {
                      _styles: ["row", "hide-row-borders", "padding-0"],
                      items: [
                        {
                          type: "Column",
                          value: {
                            _styles: ["column"],
                            items: [
                              {
                                type: "Wrapper",
                                value: {
                                  _styles: ["wrapper", "wrapper--image"],
                                  items: [
                                    {
                                      type: "Image",
                                      value: {
                                        _styles: ["image"],
                                        imageWidth: 90,
                                        imageHeight: 90,
                                        imageSrc:
                                          "ba5547b09324f357690900ba787ca9fd.png",
                                        height: 99,
                                        positionX: 50,
                                        positionY: 50,
                                        mobileHeight: 100,
                                        resize: 55
                                      }
                                    }
                                  ],
                                  showOnMobile: "off"
                                }
                              }
                            ],
                            width: 15,
                            verticalAlign: "center",
                            showOnMobile: "off"
                          }
                        },
                        {
                          type: "Column",
                          value: {
                            _styles: ["column"],
                            items: [
                              {
                                type: "Wrapper",
                                value: {
                                  _styles: ["wrapper", "wrapper--richText"],
                                  items: [
                                    {
                                      type: "RichText",
                                      value: {
                                        _styles: ["richText"],
                                        text:
                                          '<p class="brz-tp-subtitle brz-text-lg-right brz-text-xs-center"><strong class="brz-cp-color4">REPAIR YOUR CAR.</strong><strong class="brz-cp-color7">&nbsp;</strong><strong class="brz-cp-color5">EXPERTLY DONE</strong></p>'
                                      }
                                    }
                                  ]
                                }
                              }
                            ],
                            width: 38,
                            verticalAlign: "center",
                            paddingRight: 30,
                            paddingRightSuffix: "px",
                            padding: 15
                          }
                        },
                        {
                          type: "Column",
                          value: {
                            _styles: ["column"],
                            items: [
                              {
                                type: "Cloneable",
                                value: {
                                  _styles: [
                                    "wrapper-clone",
                                    "wrapper-clone--button"
                                  ],
                                  items: [
                                    {
                                      type: "Button",
                                      value: {
                                        _styles: ["button"],
                                        text:
                                          "\u00a0\u00a0 BOOK APPOINTMENT \u00a0\u00a0",
                                        iconName: "",
                                        iconType: "",
                                        size: "small",
                                        mobileSize: "small",
                                        fontSize: 11,
                                        paddingTB: 11,
                                        paddingTop: 11,
                                        paddingBottom: 11,
                                        tempPaddingTB: 11,
                                        tempPaddingTop: 11,
                                        tempPaddingBottom: 11,
                                        paddingRL: 26,
                                        paddingRight: 26,
                                        paddingLeft: 26,
                                        tempPaddingRL: 26,
                                        tempPaddingRight: 26,
                                        tempPaddingLeft: 26,
                                        borderRadius: 4,
                                        borderWidth: 1,
                                        mobilePaddingTop: 11,
                                        mobilePaddingRight: 26,
                                        mobilePaddingBottom: 11,
                                        mobilePaddingLeft: 26,
                                        fillType: "outline",
                                        tempFillType: "outline",
                                        borderRadiusType: "custom",
                                        borderColorOpacity: 1,
                                        borderColorPalette: "color3",
                                        bgColorOpacity: 0,
                                        bgColorPalette: "color3",
                                        hoverBgColorOpacity: 1,
                                        hoverBorderColorOpacity: 0.8000000000000000444089209850062616169452667236328125,
                                        mobilePaddingRL: 26,
                                        tempBorderRadiusType: "custom",
                                        tempBorderRadius: 4,
                                        tempMobileBorderRadius: 4,
                                        tempBorderWidth: 1,
                                        colorPalette: "color3",
                                        colorOpacity: 1,
                                        hoverBgColorHex: "#2dabe0",
                                        tempHoverBgColorOpacity: 1,
                                        hoverBgColorPalette: "color3",
                                        tempHoverBgColorPalette: "color3",
                                        hoverBorderColorHex: "#239ddb",
                                        hoverBorderColorPalette: "color3",
                                        tempHoverBorderColorPalette: "color3",
                                        linkExternalBlank: "off",
                                        linkExternal:
                                          "https://demo.themefuse.com/car-repair-wordpress-theme/?page_id=477"
                                      }
                                    }
                                  ],
                                  horizontalAlign: "left",
                                  mobileHorizontalAlign: "center"
                                }
                              }
                            ],
                            width: 32,
                            verticalAlign: "center",
                            paddingLeft: 30,
                            paddingLeftSuffix: "px",
                            padding: 15
                          }
                        },
                        {
                          type: "Column",
                          value: {
                            _styles: ["column"],
                            items: [
                              {
                                type: "Wrapper",
                                value: {
                                  _styles: ["wrapper", "wrapper--image"],
                                  items: [
                                    {
                                      type: "Image",
                                      value: {
                                        _styles: ["image"],
                                        imageWidth: 90,
                                        imageHeight: 90,
                                        imageSrc:
                                          "718f58f066f03137daa262b453f78b75.png",
                                        height: 98,
                                        positionX: 50,
                                        positionY: 50,
                                        mobileHeight: 100,
                                        resize: 55
                                      }
                                    }
                                  ],
                                  showOnMobile: "off"
                                }
                              }
                            ],
                            width: 15,
                            verticalAlign: "center",
                            showOnMobile: "off"
                          }
                        }
                      ]
                    }
                  }
                ],
                paddingType: "ungrouped",
                paddingTop: 35,
                paddingBottom: 35,
                padding: 75,
                bgColorPalette: "color2",
                bgColorHex: "",
                bgColorOpacity: 1
              }
            }
          ]
        }
      }
    ]
  }
};
