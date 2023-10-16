import Grid from "@mui/material/Grid";
import { FC } from "react";
import { DetailedGraphType } from "../../../type";
import PriceInfo from "./PriceInfo";
import PurchaseMonthlyExpenses from "./purchasemonthlyexpense";

type PriceViewProps = {
  detailedGraphData: DetailedGraphType;
};

const PriceView: FC<PriceViewProps> = ({ detailedGraphData }) => {
  return (
    <Grid container justifyContent={"center"} spacing={"15px"}>
      <Grid item width={["100%", undefined]} maxWidth={"460px"}>
        <PriceInfo detailedGraphData={detailedGraphData} />
      </Grid>
      <Grid
        item
        p={["10px", "0px"]}
        width={["100%", undefined]}
        maxWidth={[undefined, "460px"]}
      >
        <PurchaseMonthlyExpenses detailedGraphData={detailedGraphData} />
      </Grid>
    </Grid>
  );
};

export default PriceView;
