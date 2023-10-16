import React, { FC } from "react";
import { SwitchButtonTab, SwitcherContainer } from "../style";
import { SwitcherTabType } from "../type";

type SwitcherTabProps = {
  options: SwitcherTabType[];
  selectedTab: string;
  setSelectedtab: (tab: string) => void;
};
const SwitcherTab: FC<SwitcherTabProps> = ({
  options,
  setSelectedtab,
  selectedTab,
}) => {
  return (
    <SwitcherContainer>
      {options.map((item, index) => (
        <SwitchButtonTab
          fullWidth
          onClick={() => setSelectedtab(item.value)}
          isactive={item.value === selectedTab ? 1 : 0}
          key={item.value}
        >
          {item.label}
        </SwitchButtonTab>
      ))}
    </SwitcherContainer>
  );
};

export default SwitcherTab;
