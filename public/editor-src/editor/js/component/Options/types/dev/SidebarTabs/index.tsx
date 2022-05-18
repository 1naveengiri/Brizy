import React, { FC, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Option from "visual/component/Options/Type";
import Options from "visual/component/Options";
import { RightSidebarTabs as Control } from "visual/component/Controls/RightSidebarTabs";
import { Tab } from "visual/component/Controls/Tabs2/Tab";
import { WithClassName, WithId } from "visual/utils/options/attributes";
import { always, pipe } from "visual/utils/fp";
import { uiSelector } from "visual/redux/selectors-new";
import { prop } from "visual/utils/object/get";
import { updateUI } from "visual/redux/actions2";
import { nextAlign } from "./utils";
import { ElementModel } from "visual/component/Elements/Types";
import { ToolbarItemType } from "visual/editorComponents/ToolbarItemType";
import { withTabs } from "visual/component/Options/utils/filters";

export interface Tab {
  id: string;
  title: string;
}

export interface Props extends Option.Props<undefined> {
  tabs: (WithId<string> &
    WithClassName & {
      title?: string;
      label?: string;
      position?: number;
      options: ToolbarItemType[];
    })[];
}

const selector = pipe(uiSelector, prop("rightSidebar"));

export const SidebarTabs: FC<Props> &
  Option.OptionType<undefined> &
  Option.SelfFilter<"sidebarTabs-dev"> = ({ tabs, toolbar }) => {
  const { alignment, lock, isOpen, activeTab } = useSelector(selector);
  const dispatch = useDispatch();
  const onLock = useCallback(
    pipe(
      () => (lock ? undefined : "manual"),
      lock => updateUI("rightSidebar", { alignment, isOpen, lock, activeTab }),
      dispatch
    ),
    [dispatch, alignment, isOpen, lock, activeTab]
  );
  const onAlign = useCallback(
    pipe(
      always(alignment),
      nextAlign,
      alignment =>
        updateUI("rightSidebar", { alignment, isOpen, lock, activeTab }),
      dispatch
    ),
    [dispatch, alignment, isOpen, lock, activeTab]
  );
  const onChange = useCallback(
    pipe(
      (activeTab: string) =>
        updateUI("rightSidebar", { alignment, isOpen, lock, activeTab }),
      dispatch
    ),
    [dispatch, alignment, isOpen, lock]
  );

  return (
    <Control<string>
      value={activeTab ?? tabs[0]?.id}
      onChange={onChange}
      align={alignment}
      onAlign={onAlign}
      locked={!!lock}
      onLock={onLock}
    >
      {tabs.map(({ id, title, label, className, options }) => (
        <Tab
          key={id}
          value={id}
          title={title}
          label={label}
          className={className}
        >
          <Options wrapOptions={false} data={options} toolbar={toolbar} />
        </Tab>
      ))}
    </Control>
  );
};

// @ts-expect-error: Variable 'defaultValue' implicitly has an 'any' type.
SidebarTabs.defaultValue = undefined;
SidebarTabs.fromElementModel = (): undefined => undefined;
SidebarTabs.toElementModel = (): ElementModel => ({});
SidebarTabs.filter = withTabs;

SidebarTabs.reduce = (fn, t0, item) =>
  item.tabs?.reduce((acc, { options }) => options.reduce(fn, acc), t0) ?? t0;

SidebarTabs.map = (fn, item) => ({
  ...item,
  tabs: item.tabs?.map(tab => ({ ...tab, options: tab.options.map(fn) }))
});
