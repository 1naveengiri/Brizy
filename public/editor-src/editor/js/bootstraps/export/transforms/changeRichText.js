import Config from "visual/global/Config";
import { SizeType } from "visual/global/Config/types/configs/common";
import { pageDataNoRefsSelector } from "visual/redux/selectors";
import { getStore } from "visual/redux/store";
import { makePlaceholder } from "visual/utils/dynamicContent";
import {
  defaultImagePopulation,
  getImageUrl,
  imagePopulationUrl
} from "visual/utils/image";

const isWP = Config.get("wp");

const linkClassNames = [
  "link--anchor",
  "link--external",
  "link--popup",
  "is-empty"
];

export default function changeRichText($) {
  // Change Links
  $(".brz-rich-text")
    .find("a[data-href]")
    .filter(function () {
      const attr = $(this).attr("data-href");
      return attr.trim().length > 0;
    })
    .each(function () {
      const $this = $(this);
      const html = $this.html();
      const className = $this.attr("class") || "";
      const style = $this.attr("style") || "";
      const href = $this.attr("data-href") ?? "";
      const data = JSON.parse(decodeURIComponent(href));
      const { population, populationEntityId, populationEntityType } =
        data ?? {};
      const populationAttr = {};

      if (populationEntityId) {
        populationAttr.entityId = populationEntityId;
      }
      if (populationEntityType) {
        populationAttr.entityType = populationEntityType;
      }

      const externalLink = {
        external: data.external,
        population: population
          ? makePlaceholder({
              content: population,
              attr: populationAttr
            })
          : ""
      };
      const internalLink = {
        page: data.internal
      };
      const newData = {
        ...data,
        // when we added dynamic content old links
        // did not have data.externalType
        // so temporarily defaulted to external
        external: data.externalType
          ? externalLink[data.externalType]
          : externalLink.external,
        page: data.internalType
          ? internalLink[data.internalType]
          : internalLink.page
      };

      const url = newData[data.type];
      const link = $(`<a>${html}</a>`);

      link.attr("class", className);

      if (style) {
        link.attr("style", style);
      }

      if (data.type === "linkToSlide") {
        link.attr("href", "#");
        link.attr("data-brz-link-story", newData.linkToSlide);

        $this.replaceWith(link);
      } else if (url) {
        link.attr("href", getLinkContentByType(data.type, url));
        link.attr("data-brz-link-type", data.type);

        if (newData.type === "external" && newData.externalBlank === "on") {
          link.attr("target", "_blank");
        }
        if (newData.type === "external" && newData.externalRel === "on") {
          link.attr("rel", "nofollow");
        }
        $this.replaceWith(link);
      } else {
        const newClassNames = className
          .split(" ")
          .filter((name) => !linkClassNames.includes(name))
          .join(" ");

        $this.replaceWith(
          `<span class="${newClassNames} brz-span" style="${style}">${html}</span>`
        );
      }
    });

  // replace DynamicContent
  $(".brz-rich-text")
    .find("[data-population]")
    .each(function () {
      const $this = $(this);
      const population = $this.attr("data-population");
      const $blockDynamicContentElem = $this.closest(".brz-tp__dc-block");
      let $elem;
      if ($blockDynamicContentElem.length) {
        $elem = $blockDynamicContentElem;
      } else {
        $elem = $this;
      }

      if (population) {
        // Override current html with placeholder
        $elem.html(population);
        $elem.removeAttr("data-population");
      }
    });

  // replace Image
  $(".brz-rich-text")
    .find(".brz-text-mask, .brz-population-mask")
    .each(function () {
      const $this = $(this);
      const src = $this.attr("data-image_src") ?? "";
      const population = $this.attr("data-image_population");
      const fileName = $this.attr("data-image_file_name") ?? "image";

      const imgUrl = getImageUrl({
        fileName,
        uid: src,
        sizeType: SizeType.custom
      });

      const css = $this.css();
      const newCSS = Object.entries(css).reduce((acc, [property, value]) => {
        // cheeriojs have bug for background-image: url("someurl")
        // this is small fix for this case
        if (!property.includes("http")) {
          acc[property] = value;
        }

        return acc;
      }, {});

      $this.removeAttr("style");

      if (population) {
        $this.css({
          ...newCSS,
          "background-image": `url('${imagePopulationUrl(population, {
            ...defaultImagePopulation
          })}')`
        });
      } else if (imgUrl)
        $this.css({
          ...newCSS,
          "background-image": `url('${imgUrl}')`
        });

      $this.removeAttr("data-image_src");
      $this.removeAttr("data-image_width");
      $this.removeAttr("data-image_height");
      $this.removeAttr("data-image_extension");
      $this.removeAttr("data-image_file_name");
      $this.removeAttr("data-image_population");
    });
}

function getLinkContentByType(type, href) {
  switch (type) {
    case "anchor": {
      href = href.replace("#", "");
      const pageDataNoRefs = pageDataNoRefsSelector(getStore().getState());
      const pageBlocks = pageDataNoRefs.items || [];
      const blockByHref = pageBlocks.find((block) => block.value._id === href);
      const anchorName = (blockByHref && blockByHref.value.anchorName) || href;

      return `#${anchorName}`;
    }
    case "upload": {
      const { customFile } = Config.get("urls");
      const [name] = href.split("|||", 1);

      return isWP ? `${customFile}${name}` : `${customFile}/${name}`;
    }
    case "popup":
    case "lightBox":
    case "external":
    case "story":
      return href;
  }

  return href;
}
