import Grid from "@mui/material/Grid";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import React, { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import { HeadingText } from "../../commoncomponent/Text";
import FinanceFilter from "./FinanceFilter";
import { BankFilterType } from "../type";
import NextImage from "../../commoncomponent/component/NextImage";
import { getAssetUrl } from "../../../util/SiteUtil";
import { PrimaryContainedButton } from "../../commoncomponent/Button";

type FilterMobileFinanceProps = {
  isOpen: boolean;
  handleClose: () => void;
  leftPanel: BankFilterType[];
  checkedAccounts: number[];
  setCheckedAccount: (accountNumberList: number[]) => void;
  handleConnectBank: () => void;
};
const FilterMobileFinance: FC<FilterMobileFinanceProps> = ({
  handleClose,
  isOpen,
  leftPanel,
  checkedAccounts,
  setCheckedAccount,
  handleConnectBank,
}) => {
  const [selectedAccountNumber, setSelectedAccountNumber] =
    useState<number[]>(checkedAccounts);

  const handleAccountNumber = (accountId: number) => {
    if (checkedAccounts.find((item) => item === accountId)) {
      setSelectedAccountNumber((prev) =>
        prev.filter((item) => item !== accountId)
      );
      return;
    }
    setSelectedAccountNumber((prev) => [...prev, accountId]);
  };
  const { t } = useTranslation("dashboardResult");

  return (
    <Dialog fullScreen onClose={handleClose} open={isOpen}>
      <DialogContent>
        <Grid container mt={"100px"}>
          <Grid item xs={12}>
            <HeadingText
              display={"flex"}
              gap={"5px"}
              alignItems={"center"}
              onClick={() => handleClose()}
              textsize="32px"
            >
              <NextImage
                src={getAssetUrl("/redesign/chevronLeftIcon.svg")}
                height={"24px"}
                width={"24px"}
                alt={"back"}
              />{" "}
              View
            </HeadingText>
            <FinanceFilter
              handleConnectBank={handleConnectBank}
              handleCheckedAccount={handleAccountNumber}
              checkedAccounts={selectedAccountNumber}
              filters={leftPanel}
            />
          </Grid>
          <Grid
            item
            xs={12}
            display={"flex"}
            mt={"30px"}
            justifyContent={"center"}
          >
            <PrimaryContainedButton
              onClick={() => {
                setCheckedAccount(selectedAccountNumber);
              }}
              style={{ width: 210, borderRadius: "16px" }}
            >
              Update
            </PrimaryContainedButton>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

export default FilterMobileFinance;
