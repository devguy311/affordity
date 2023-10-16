import React, { FC } from "react";
import Grid from "@mui/material/Grid";
import { MetricCardContainer } from "../../../../style";
import { DetailedGraphType } from "../../../../type";
import { ToastMessage } from "../../../../../commoncomponent/ToastMessage";
import MonthlyExpensesGraph from "./MonthlyExpensesGraph";
import { DescriptionText2 } from "../../../../../commoncomponent/Text";
import NextImage from "../../../../../commoncomponent/component/NextImage";
import { getAssetUrl } from "../../../../../../util/SiteUtil";

type PurchaseMonthlyExpensesProps = {
  detailedGraphData: DetailedGraphType;
};

const PurchaseMonthlyExpenses: FC<PurchaseMonthlyExpensesProps> = ({
  detailedGraphData,
}) => {
  const { metrics } = detailedGraphData;
  return (
    <MetricCardContainer p={"30px"}>
      <Grid container>
        <Grid item xs={12}>
          <DescriptionText2
            display={"flex"}
            gap={"10px"}
            alignItems={"center"}
            textsize="16px"
            textweight={700}
            justifyContent={"center"}
            textcolor="#534F59"
          >
            <NextImage
              src={getAssetUrl("redesign/bill_green.svg")}
              height="24px"
              width={"24px"}
              alt={"tag"}
            />{" "}
            {"Affordified Purchase breakdown".toUpperCase()}
          </DescriptionText2>
        </Grid>
        <Grid item xs={12} mt={"15px"}>
          <DescriptionText2 textsize="16px"></DescriptionText2>
        </Grid>
        <Grid item xs={12}>
          <MonthlyExpensesGraph detailedGraphData={detailedGraphData} />
        </Grid>
        <Grid mt={"55px"}>
          <ToastMessage
            type={metrics.affordabilityCheck ? "success" : "error"}
            titleMessage={
              <DescriptionText2
                style={{ lineHeight: "25px" }}
                textsize={"14px"}
                textweight={400}
                align="center"
                textcolor={"#7C7A7A"}
              >
                {metrics.text.monthlyExpComps}
              </DescriptionText2>
            }
          />
        </Grid>
      </Grid>
    </MetricCardContainer>
  );
};

export default PurchaseMonthlyExpenses;
