import Grid from "@mui/material/Grid";
import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import { MetricCardContainer } from "../../../style";
import { DetailedGraphType } from "../../../type";
import ShopResultMonthSaveComparisonGraph from "./ShopResultMonthSaveComparisonGraph";
import NextImage from "../../../../commoncomponent/component/NextImage";
import { getAssetUrl } from "../../../../../util/SiteUtil";
import { DescriptionText2 } from "../../../../commoncomponent/Text";

type ShopResultMonthlySaveComparisonProps = {
  detailedGraphData: DetailedGraphType;
};

const ShopResultMonthlySaveComparison: FC<
  ShopResultMonthlySaveComparisonProps
> = ({ detailedGraphData }) => {
  const { t } = useTranslation("shoppingassistantresult");
  const { metrics } = detailedGraphData;

  return (
    <MetricCardContainer p={"42px"}>
      <Grid container>
        <Grid item xs={12}>
          <DescriptionText2
            display={"flex"}
            gap={"10px"}
            alignItems={"center"}
            textsize="16px"
            textweight={700}
            justifyContent={"flex-start"}
            textcolor="#534F59"
          >
            <NextImage
              src={getAssetUrl("redesign/bill.svg")}
              height="24px"
              width={"24px"}
              alt={"bill"}
            />{" "}
            {t("savingsBeforeAfter")}
          </DescriptionText2>
        </Grid>
        <Grid item xs={12} mt={"8px"}>
          <DescriptionText2 textcolor="#7A7A7A" textsize="14px">
            {metrics.text.savingComps}
          </DescriptionText2>
        </Grid>
        <Grid item xs={12}>
          <ShopResultMonthSaveComparisonGraph
            detailedGraphData={detailedGraphData}
          />
        </Grid>
      </Grid>
    </MetricCardContainer>
  );
};

export default ShopResultMonthlySaveComparison;
