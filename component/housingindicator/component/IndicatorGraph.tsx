import Grid from "@mui/material/Grid";
import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import { SliderRail } from "../style";
import CustomTooltip from "./CustomTooltip";
import { Box } from "@mui/material";
import { DescriptionText2 } from "../../commoncomponent/Text";
import { formatAmountWithGap } from "../../../helpers/currencyHelper";
import { ComparatorOutputType } from "../type";

type Props = {
  comparatorResult?: ComparatorOutputType;
};
const ComporatorGraph: FC<Props> = ({ comparatorResult }) => {
  const symbol = comparatorResult?.name === "INTRATE" ? "%" : "USD";

  if (comparatorResult) {
    const { t } = useTranslation("housingResult");
    return (
      <Grid mb={"60px"} container>
        <Grid item xs={2}>
          <SliderRail />
        </Grid>
        <Grid item xs={8}>
          <Box display={"flex"}>
            <Box
              height={"20px"}
              width={"20px"}
              bgcolor={"#000"}
              borderRadius={"50%"}
              position={"relative"}
              zIndex={1}
              left={"12px"}
              marginTop={"8px"}
            >
              <Box
                style={{ width: "max-content" }}
                position={"relative"}
                bottom={
                  comparatorResult.data.median - comparatorResult.data.low < 300
                    ? "-60px"
                    : "60px"
                }
              >
                <DescriptionText2
                  textsize="12px"
                  textweight={700}
                  align="center"
                  style={{ lineHeight: "150%" }}
                  textcolor="#7A7A7A"
                >
                  {t("low")}
                </DescriptionText2>
                <DescriptionText2
                  textsize="12px"
                  textcolor="#7A7A7A"
                  style={{ opacity: 1 }}
                  align="center"
                >
                  {comparatorResult.data.low &&
                    formatAmountWithGap(comparatorResult.data.low)}{" "}
                  {symbol}
                </DescriptionText2>
              </Box>
            </Box>
            <Box width={"100%"}>
              <CustomTooltip
                lowValue={comparatorResult.data.low}
                highValue={comparatorResult.data.high}
                medianValue={comparatorResult.data.median}
                userValue={comparatorResult.data.median + 3000}
                currency={symbol}
              />
            </Box>
            <Box
              height={"20px"}
              width={"20px"}
              bgcolor={"#000"}
              borderRadius={"50%"}
              position={"relative"}
              zIndex={1}
              right={"12px"}
              marginTop={"8px"}
            >
              <Box
                position={"relative"}
                style={{ width: "max-content" }}
                bottom={
                  comparatorResult.data.high - comparatorResult.data.median <
                    300
                    ? "-60px"
                    : "60px"
                }
              >
                <DescriptionText2
                  textsize="12px"
                  align="center"
                  textweight={700}
                  style={{ lineHeight: "150%" }}
                  textcolor="#7A7A7A"
                >
                  {t("high")}
                </DescriptionText2>
                <DescriptionText2
                  textsize="12px"
                  textcolor="#7A7A7A"
                  style={{ opacity: 1 }}
                  align="center"
                >
                  {comparatorResult.data.high &&
                    formatAmountWithGap(comparatorResult.data.high)}{" "}
                  {symbol}
                </DescriptionText2>
              </Box>
            </Box>
          </Box>
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
