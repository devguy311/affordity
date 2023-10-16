import Grid from "@mui/material/Grid";
import { FC } from "react";
import { DetailedGraphType } from "../../../type";
import PurchaseAffordabilityDate from "./PurchaseAffordabilityDate";
import PurchaseOptimalDate from "./PurchaseOptimalDate";

type MetricDateViewProps = {
  detailedGraphData: DetailedGraphType;
};

const MetricDateView: FC<MetricDateViewProps> = ({ detailedGraphData }) => {
  return (
    <Grid container justifyContent={"center"} spacing={"15px"}>
      <Grid item maxWidth={"460px"}>
        <PurchaseAffordabilityDate detailedGraphData={detailedGraphData} />
      </Grid>
      <Grid item maxWidth={"460px"}>
        <PurchaseOptimalDate detailedGraphData={detailedGraphData} />
      </Grid>
    </Grid>
  );
};

export default MetricDateView;
