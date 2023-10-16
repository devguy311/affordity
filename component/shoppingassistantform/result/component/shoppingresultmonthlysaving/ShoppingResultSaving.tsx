import Grid from "@mui/material/Grid";
import React, { FC } from "react";
import { DetailedGraphType } from "../../../type";
import ShoppingResultCurrentMonthlySavings from "./ShoppingResultCurrentMonthlySavings";
import ShopResultMonthlySaveComparison from "./ShopResultMonthlySaveComparison";
import ShoppingMonthlyCompBet from "./ShoppingMonthlyCompBet";

type ShoppingResultSavingProps = {
  detailedGraphData: DetailedGraphType;
};
const ShoppingResultSaving: FC<ShoppingResultSavingProps> = ({
  detailedGraphData,
}) => {
  return (
    <Grid
      container
      alignItems={"stretch"}
      justifyContent={"center"}
      spacing={"15px"}
    >
      <Grid item xs={12}>
        <ShoppingResultCurrentMonthlySavings
          detailedGraphData={detailedGraphData}
        />
      </Grid>
      <Grid item xs={12}>
        <ShopResultMonthlySaveComparison
          detailedGraphData={detailedGraphData}
        />
      </Grid>
      <Grid item xs={12}>
        <ShoppingMonthlyCompBet detailedGraphData={detailedGraphData} />
      </Grid>
    </Grid>
  );
};

export default ShoppingResultSaving;
