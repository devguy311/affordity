import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import { CarCardContainer } from "../../carpurchaserule/style";
import { Grid } from "@mui/material";
import { DescriptionText2 } from "../../commoncomponent/Text";
import NextImage from "../../commoncomponent/component/NextImage";
import { getAssetUrl } from "../../../util/SiteUtil";
import { AllocationType } from "../type";
import InvestmentQuickWayBreakdownGraph from "./QuickWay/InvestmentQuickWayBreakdownGraph";

type InvestmentQuickWayPortfolioAllocationProps = {
  expenseDetail: AllocationType;
};
const InvestmentQuickWayPortfolioAllocation: FC<
  InvestmentQuickWayPortfolioAllocationProps
> = ({ expenseDetail }) => {
  const { t } = useTranslation("investmentview");
  return (
    <CarCardContainer style={{ padding: "30px 30px" }}>
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
            {t("titleAllocation")}
          </DescriptionText2>
        </Grid>
        <Grid item xs={12} mt={"15px"}>
          <DescriptionText2
            textcolor="#7A7A7A"
            textsize="12px"
            textweight={400}
          >
            {t("DescriptionAllocation")}
          </DescriptionText2>
        </Grid>
        <Grid item xs={12} mt={"50px"}>
          <InvestmentQuickWayBreakdownGraph expenseDetail={expenseDetail} />
        </Grid>
      </Grid>
    </CarCardContainer>
  );
};

export default InvestmentQuickWayPortfolioAllocation;
