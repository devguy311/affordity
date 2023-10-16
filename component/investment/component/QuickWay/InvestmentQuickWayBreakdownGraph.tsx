import { Box, Grid } from "@mui/material";
import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import { GraphOuter } from "../../../carpurchaserule/style";
import { DescriptionText2 } from "../../../commoncomponent/Text";
import { AllocationType } from "../../type";
import InvestmentQuickWayLeftGraph from "./InvestmentQuickWayLeftGraph";

type InvestmentQuickWayBreakdownGraphProps = {
  expenseDetail: AllocationType;
};
const InvestmentQuickWayBreakdownGraph: FC<
  InvestmentQuickWayBreakdownGraphProps
> = ({ expenseDetail }) => {
  const { t } = useTranslation("investmentview");
  return (
    <Grid>
      <GraphOuter justifyContent={"center"}>
        <Grid>
          <InvestmentQuickWayLeftGraph expenseDetail={expenseDetail} />
        </Grid>
      </GraphOuter>
      <Grid p={["20px", "20px", "50px"]} container mt={"19px"} spacing={"20px"}>
        <Grid item xs={4}>
          <Box display={"flex"} alignItems={"center"} gap={"10px"}>
            <Box
              height={16}
              width={16}
              bgcolor={"#4B8F8F"}
              borderRadius={"5px"}
            />
            <Box>
              <DescriptionText2
                textweight={300}
                textsize={"10px"}
                textcolor="#7A7A7A"
              >
                {t("stocks")}
              </DescriptionText2>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box display={"flex"} gap={"10px"} alignItems={"center"}>
            <Box
              height={16}
              width={16}
              bgcolor={"#4B8F8F80"}
              borderRadius={"5px"}
            />
            <Box>
              <DescriptionText2
                textweight={300}
                textsize={"10px"}
                textcolor="#7A7A7A"
              >
                {t("bonds")}
              </DescriptionText2>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box display={"flex"} gap={"10px"} alignItems={"center"}>
            <Box
              height={16}
              width={16}
              bgcolor={"#4B8F8F33"}
              borderRadius={"5px"}
            />
            <Box>
              <DescriptionText2
                textweight={300}
                textsize={"10px"}
                textcolor="#7A7A7A"
              >
                {t("cash")}
              </DescriptionText2>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default InvestmentQuickWayBreakdownGraph;
