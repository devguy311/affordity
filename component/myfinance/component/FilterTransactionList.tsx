import React, { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import { TransactionListType } from "../type";
import Grid from "@mui/material/Grid";
import { transactionColumn } from "./ListColumn";
import DataGridWrapper from "../../commoncomponent/component/DataGridWrapper";
import { HeadingText } from "../../commoncomponent/Text";
import { StyledSearchTextfield } from "../style";
import NextImage from "../../commoncomponent/component/NextImage";
import { getAssetUrl } from "../../../util/SiteUtil";
import { filterTransactionList } from "../util";

type FilterTransactionListProps = {
  transactionList: TransactionListType[];
};
const FilterTransactionList: FC<FilterTransactionListProps> = ({
  transactionList,
}) => {
  const [searchText, setSearchText] = useState("");
  const { t } = useTranslation("dashboardResult");
  return (
    <Grid container>
      <Grid item xs={12}>
        <Grid container justifyContent={"space-between"}>
          <Grid item xs={12} md={4}>
            <HeadingText textsize="24px" style={{ lineHeight: "125%" }}>
              Transactions
            </HeadingText>
          </Grid>
          {/* <Grid item xs={12} mt={["8px", "8px", "0px"]} md={4}>
            <StyledSearchTextfield
              id="outlined-basic"
              fullWidth
              label=""
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              placeholder="Search by bank or account name"
              size="small"
              InputLabelProps={{
                shrink: false,
              }}
              InputProps={{
                endAdornment: (
                  <NextImage
                    src={getAssetUrl("redesign/search_icon.svg")}
                    alt="search"
                    height="24px"
                    width={"24px"}
                  />
                ),
                style: {
                  border: 0,
                },
              }}
              variant="outlined"
            />
          </Grid> */}
        </Grid>
      </Grid>
      <Grid item xs={12} height={"300px"} mt={"16px"}>
        <DataGridWrapper
          autoHeight={false}
          rows={filterTransactionList(transactionList, searchText)}
          columns={transactionColumn(t)}
        />
      </Grid>
    </Grid>
  );
};

export default FilterTransactionList;
