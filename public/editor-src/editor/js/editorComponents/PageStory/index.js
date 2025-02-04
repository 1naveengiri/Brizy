import React from "react";
import EditorComponent from "visual/editorComponents/EditorComponent";
import EditorArrayComponent from "visual/editorComponents/EditorArrayComponent";
import UIEvents from "visual/global/UIEvents";
// should we move this util folder to another place?
import { changeValueAfterDND } from "visual/editorComponents/Page/utils";
import defaultValue from "./defaultValue.json";
import { uuid } from "visual/utils/uuid";

class PageStory extends EditorComponent {
  static get componentId() {
    return "PageStory";
  }

  static defaultValue = defaultValue;

  getDBValue() {
    const dbValue = super.getDBValue();

    if (dbValue._id) {
      return dbValue;
    } else {
      if (!this._id) {
        this._id = uuid();
      }

      return { ...dbValue, _id: this._id };
    }
  }

  componentDidMount() {
    UIEvents.on("dnd.sort", this.handleDNDSort);
  }

  componentWillUnmount() {
    UIEvents.off("dnd.sort", this.handleDNDSort);
  }

  blocksFilter(blocks) {
    /* eslint-disable no-unused-vars */
    return blocks.filter(([_, block]) => block.type === "StoryItem");
    /* eslint-enabled no-unused-vars */
  }

  handleClose = () => {
    this.patchValue({
      items: []
    });
  };

  handleDNDSort = data => {
    const { dbValue } = this.props;

    const newValue = changeValueAfterDND(dbValue, data);

    this.props.onChange(newValue);
  };

  renderForEdit(v) {
    const popupsProps = this.makeSubcomponentProps({
      bindWithKey: "items",
      itemProps: () => ({
        isOpened: true,
        onClose: this.handleClose
      })
    });

    return (
      <div className="brz-root__container brz-root__container-story brz-reset-all">
        <EditorArrayComponent {...popupsProps} />
      </div>
    );
  }
}

export default PageStory;
