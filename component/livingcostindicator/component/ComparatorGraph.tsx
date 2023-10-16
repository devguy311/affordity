import Grid from "@mui/material/Grid";
import React, { FC } from "react";
import { ComparatorDataType } from "../../livingcostindicator/type";
import { SliderRail } from "../style";
import CustomTooltip from "./CustomTooltip";
import { getMinValue } from "../util";

type Props = {
  comparatorResult?: ComparatorDataType;
  selectedFilter: string;
};
const ComporatorGraph: FC<Props> = ({ comparatorResult, selectedFilter }) => {
  if (comparatorResult) {
    return (
      <Grid mb={"60px"} columnSpacing={"16px"} container>
        <Grid item xs={2}>
          <SliderRail />
        </Grid>
        <Grid item xs={8}>
          {selectedFilter === "yearly" ? (
            <CustomTooltip
              endValue={
                getMinValue(
                  comparatorResult.userInputYear || 0,
                  comparatorResult?.rangeYear?.[0] || 0,
                  comparatorResult?.rangeYear?.[2] || 0
                ).max
              }
              startValue={
                getMinValue(
                  comparatorResult.userInputYear || 0,
                  comparatorResult?.rangeYear?.[0] || 0,
                  comparatorResult?.rangeYear?.[2] || 0
                ).min
              }
              userValue={
                comparatorResult?.userInputYear
                  ? comparatorResult?.userInputYear
                  : 0
              }
              currency={comparatorResult?.currency || ""}
              avgValue={
                comparatorResult?.rangeYear?.[1]
                  ? comparatorResult?.rangeYear?.[1]
                  : 0
              }
            />
          ) : (
            <CustomTooltip
              endValue={
                getMinValue(
                  comparatorResult.userInputMonth || 0,
                  comparatorResult?.rangeMonth?.[0] || 0,
                  comparatorResult?.rangeMonth?.[2] || 0
                ).max
              }
              startValue={
                getMinValue(
                  comparatorResult.userInputMonth || 0,
                  comparatorResult?.rangeMonth?.[0] || 0,
                  comparatorResult?.rangeMonth?.[2] || 0
                ).min
              }
              currency={comparatorResult?.currency || ""}
              userValue={
                comparatorResult?.userInputMonth
                  ? comparatorResult?.userInputMonth
                  : 0
              }
              avgValue={
                comparatorResult?.rangeMonth?.[1]
                  ? comparatorResult?.rangeMonth?.[1]
                  : 0
              }
            />
          )}
        </Grid>
        <Grid item xs={2}>
          <SliderRail />
        </Grid>
      </Grid>
    );
  }

  return <></>;
};

export default ComporatorGraph;
