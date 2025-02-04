import { ToastNotification } from "visual/component/Notifications";
import {
  SavedBlockImport,
  SavedLayoutImport
} from "visual/global/Config/types/configs/ConfigCommon";
import { SavedBlock, SavedLayout } from "visual/types";
import { isSavedBlock, isSavedLayout, isSavedPopup } from "visual/types/utils";
import { BlockTypes } from "../types";

type Data = SavedBlockImport | SavedLayoutImport;

export const ShowSuccessError = (data: Data, type: BlockTypes): void => {
  data.success.forEach((block: SavedBlock | SavedLayout) => {
    const seconds = 5;
    switch (type) {
      case "BLOCK": {
        if (isSavedLayout(block)) {
          ToastNotification.error(
            "Your .zip contains layouts. We imported them in the Saved Layouts library",
            seconds
          );
        }
        if (isSavedPopup(block)) {
          ToastNotification.error(
            "Your .zip contains popups blocks. We imported them in the Saved Popups library",
            seconds
          );
        }
        break;
      }
      case "POPUP": {
        if (isSavedLayout(block)) {
          ToastNotification.error(
            "Your .zip contains layouts. We imported them in the Saved Layouts library",
            seconds
          );
        }
        if (isSavedBlock(block)) {
          ToastNotification.error(
            "Your .zip contains regular blocks. We imported them in the Saved Blocks library",
            seconds
          );
        }
        break;
      }
      case "LAYOUT": {
        if (isSavedBlock(block)) {
          ToastNotification.error(
            "Your .zip contains regular blocks. We imported them in the Saved Blocks library",
            seconds
          );
        }
        if (isSavedPopup(block)) {
          ToastNotification.error(
            "Your .zip contains popups blocks. We imported them in the Saved Popups library",
            seconds
          );
        }
        break;
      }
    }
  });
};
