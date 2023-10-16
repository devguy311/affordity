import Grid from "@mui/material/Grid";
import React, { FC } from "react";
import { MetricCardContainer } from "../../../style";
import { DetailedGraphType } from "../../../type";
import { DescriptionText2 } from "../../../../commoncomponent/Text";
import NextImage from "../../../../commoncomponent/component/NextImage";
import { getAssetUrl } from "../../../../../util/SiteUtil";

type PurchaseAffordiablityDateProps = {
  detailedGraphData: DetailedGraphType;
};

const PurchaseAffordabilityDate: FC<PurchaseAffordiablityDateProps> = ({
  detailedGraphData,
}) => {
  const { user, affordified } = detailedGraphData;
  return (
    <MetricCardContainer p={"32px"}>
      <Grid container>
        <Grid item xs={12}>
          <DescriptionText2
            display={"flex"}
            gap={"10px"}
            alignItems={"center"}
            textsize="16px"
            textweight={700}
            justifyContent={["center", "center", "flex-start"]}
            textcolor="#534F59"
          >
            <NextImage
              src={getAssetUrl("redesign/calendar_red.svg")}
              height="24px"
              width={"24px"}
              alt={"tag"}
            />{" "}
            {"optimal purchase date".toUpperCase()}
          </DescriptionText2>

          <DescriptionText2 mt={"8px"} textcolor="#7A7A7A" textsize="14px">
            With your current budget, Affordify has determined that you will be
            able to afford your purchase on :
          </DescriptionText2>
        </Grid>
        <Grid mt={"24px"} item xs={12}>
          <DescriptionText2 mt={"11px"} textsize={"16px"} textcolor={"#534F59"}>
            Optimal Date
          </DescriptionText2>
          <DescriptionText2
            mt={"11px"}
            textsize={"24px"}
            textweight={700}
            textcolor={"#45B386"}
          >
            {affordified.purchase.date.split(" ")[0]}{" "}
            {affordified.purchase.date.split(" ")[1]}
          </DescriptionText2>
        </Grid>
      </Grid>
    </MetricCardContainer>
  );
};

export default PurchaseAffordabilityDate;
