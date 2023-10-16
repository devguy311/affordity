import React, { FC } from "react";
import { MetricCardContainer } from "../../../style";
import { DescriptionText2 } from "../../../../commoncomponent/Text";
import NextImage from "../../../../commoncomponent/component/NextImage";
import { getAssetUrl } from "../../../../../util/SiteUtil";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { DetailedGraphType } from "../../../type";

type PurchaseOptimalDateProps = {
  detailedGraphData: DetailedGraphType;
};
const PurchaseOptimalDate: FC<PurchaseOptimalDateProps> = ({
  detailedGraphData,
}) => {
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
              src={getAssetUrl("redesign/bill.svg")}
              height="24px"
              width={"24px"}
              alt={"tag"}
            />{" "}
            {"optimal purchase date".toUpperCase()}
          </DescriptionText2>

          <DescriptionText2 mt={"8px"} textcolor="#7A7A7A" textsize="14px">
            With your current budget Affordify has determined that you will be
            able to afford your purchase on:
          </DescriptionText2>
        </Grid>
        <Grid mt={"24px"} item xs={12}>
          <Box display={"flex"} gap={"12px"}>
            <NextImage
              src={getAssetUrl("redesign/tick_outlined.svg")}
              alt="Tick"
              height="24px"
              width="24px"
            />
            <Box>
              <DescriptionText2
                style={{ lineHeight: "175%" }}
                textsize={"14px"}
                textcolor={"#7A7A7A"}
              >
                Initial Date
              </DescriptionText2>
              <DescriptionText2
                textsize={"14px"}
                textweight={700}
                textcolor={"#7A7A7A"}
                style={{ lineHeight: "175%" }}
              >
                {detailedGraphData.metrics.dates.latest}{" "}
              </DescriptionText2>
            </Box>
          </Box>
        </Grid>

        <Grid mt={"24px"} item xs={12}>
          <Box display={"flex"} gap={"12px"}>
            <NextImage
              src={getAssetUrl("redesign/tick_outlined.svg")}
              alt="Tick"
              height="24px"
              width="24px"
            />
            <Box>
              <DescriptionText2
                style={{ lineHeight: "175%" }}
                textsize={"12px"}
                textcolor={"#7A7A7A"}
              >
                Final Date
              </DescriptionText2>
              <DescriptionText2
                textsize={"12px"}
                textweight={700}
                textcolor={"#7A7A7A"}
                style={{ lineHeight: "175%" }}
              >
                {detailedGraphData.metrics.dates.middle}{" "}
              </DescriptionText2>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </MetricCardContainer>
  );
};

export default PurchaseOptimalDate;
