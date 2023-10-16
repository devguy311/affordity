import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { GraphOuter } from "../../carpurchaserule/style";
import { DescriptionText2 } from "../../commoncomponent/Text";
import { PortfolioAllocationType } from "../type";
import InvestmentLeftGraph from "./InvestmentLeftGraph";
import InvestmentRightGraph from "./InvestmentRightGraph";

type InvestmentBreakdownGraphProps = {
  allocationDetail: PortfolioAllocationType;
};
const InvestmentBreakdownGraph: FC<InvestmentBreakdownGraphProps> = ({
  allocationDetail,
}) => {
  const { t } = useTranslation("investmentdetailedResult");
  return (
    <Grid>
      <GraphOuter justifyContent={"center"}>
        {allocationDetail.option1 && (
          <Grid>
            <InvestmentLeftGraph expenseDetail={allocationDetail} />
          </Grid>
        )}
        {allocationDetail.option2 && (
          <Grid>
            <InvestmentRightGraph expenseDetail={allocationDetail} />
          </Grid>
        )}
      </GraphOuter>
      <Grid p={["20px", "20px", "20px"]} container>
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

export default InvestmentBreakdownGraph;
