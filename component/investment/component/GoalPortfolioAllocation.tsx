import { FC } from "react";
import { useTranslation } from "react-i18next";
import { GoalCardContainer } from "../style";
import Grid from "@mui/material/Grid";
import { DescriptionText2 } from "../../commoncomponent/Text";
import NextImage from "../../commoncomponent/component/NextImage";
import { getAssetUrl } from "../../../util/SiteUtil";
import InvestmentBreakdownGraph from "./InvestmentBreakdownGraph";
import { PortfolioAllocationType } from "../type";

type GoalPortfolioAllocationProps = {
  allocation: PortfolioAllocationType;
};
const GoalPortfolioAllocation: FC<GoalPortfolioAllocationProps> = ({
  allocation,
}) => {
  const { t } = useTranslation("investmentdetailedResult");
  return (
    <GoalCardContainer>
      <Grid container>
        <Grid item xs={12}>
          <DescriptionText2
            display={"flex"}
            alignItems={"center"}
            textcolor="#534F59"
            textsize="12px"
            textTransform={"uppercase"}
            textweight={700}
            gap={"10px"}
            align={"left"}
          >
            <NextImage
              src={getAssetUrl("redesign/Expense.svg")}
              alt="Calendar"
              height="24px"
              width="24px"
            />
            {t("allocTitle")}
          </DescriptionText2>
        </Grid>
        <Grid item xs={12} mt={"15px"}>
          <DescriptionText2
            textcolor="#7A7A7A"
            textsize="12px"
            textweight={400}
          >
            {t("allocsubTitle")}
          </DescriptionText2>
        </Grid>
        <Grid item xs={12} mt={"30px"}>
          <InvestmentBreakdownGraph allocationDetail={allocation} />
        </Grid>
      </Grid>
    </GoalCardContainer>
  );
};

export default GoalPortfolioAllocation;
