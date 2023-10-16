import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import { BankFilterType } from "../type";
import { AddBankButton, SidebarContainer } from "../style";

import Box from "@mui/material/Box";
import { DescriptionText2 } from "../../commoncomponent/Text";
import FilterAccordian from "./FilterAccordian";
import SettingsIcon from "@mui/icons-material/Settings";

type FinanceFilterProps = {
  filters: BankFilterType[];
  checkedAccounts: number[];
  handleCheckedAccount: (accountId: number) => void;
  handleConnectBank: () => void;
};
const FinanceFilter: FC<FinanceFilterProps> = ({
  filters,
  checkedAccounts,
  handleCheckedAccount,
  handleConnectBank,
}) => {
  const { t } = useTranslation("dashboardResult");
  return (
    <SidebarContainer width={"100%"} mt={["26px", "26px", "0px"]}>
      <Box display={"flex"} justifyContent={"end"}>
        <AddBankButton
          display={"flex"}
          alignItems={"center"}
          gap={"9px"}
          onClick={handleConnectBank}
        >
          <DescriptionText2 textsize={"14px"} textcolor="#4F5459">
            {t("settings")}
          </DescriptionText2>
          <SettingsIcon color={"action"} />
        </AddBankButton>
      </Box>
      <Box mt={"20px"}>
        {filters.map((item) => (
          <FilterAccordian
            checkedAccounts={checkedAccounts}
            filterInfo={item}
            key={item.name}
            handleCheckedAccount={handleCheckedAccount}
          />
        ))}
      </Box>
    </SidebarContainer>
  );
};

export default FinanceFilter;
