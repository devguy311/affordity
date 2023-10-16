import Grid from "@mui/material/Grid";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { DetailedGraphType } from "../../../type";
import { MetricCardContainer } from "../../../style";
import { formatAmountWithGap } from "../../../../../helpers/currencyHelper";
import { DescriptionText2 } from "../../../../commoncomponent/Text";
import { useAppSelector } from "../../../../../redux/hooks";
import { selectUser } from "../../../../../redux/user";
import MonthlySavingComparisonVertical from "./ShopMonSavingVerticalBar";
import NextImage from "../../../../commoncomponent/component/NextImage";
import { getAssetUrl } from "../../../../../util/SiteUtil";

type ShoppingMonthlyCompBetProps = {
  detailedGraphData: DetailedGraphType;
};

const ShoppingMonthlyCompBet: FC<ShoppingMonthlyCompBetProps> = ({
  detailedGraphData,
}) => {
  const { affordified, user, metrics } = detailedGraphData;
  const { t } = useTranslation("shoppingassistantresult");
  const { user: userData } = useAppSelector(selectUser);
  const prefferedCurrency = userData?.profileData?.prefferedCurrency || "USD";
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
            justifyContent={"flex-start"}
            textcolor="#534F59"
          >
            <NextImage
              src={getAssetUrl("redesign/wallet_icon_green.svg")}
              height="24px"
              width={"24px"}
              alt={"bill"}
            />{" "}
            {t("monthlySavingsScenarios")}
          </DescriptionText2>
        </Grid>
        <Grid item xs={11}>
          <Grid container pl={["10px", "0px"]}>
            <Grid zIndex={10} item xs={12} mt={"10px"}>
              <DescriptionText2
                textsize="14px"
                textweight={400}
                textcolor={"#7A7A7A"}
              >
                {t("between_a")}{" "}
                <span style={{ fontWeight: 800 }}>
                  {formatAmountWithGap(user.purchase.price)} {prefferedCurrency}
                </span>{" "}
                {t("and")}{" "}
                <span style={{ fontWeight: 800 }}>
                  {formatAmountWithGap(affordified.purchase.price)}{" "}
                  {prefferedCurrency}
                </span>{" "}
                {t("purchase")}
              </DescriptionText2>
            </Grid>
            <Grid item xs={12} position={"relative"} right={"47px"}>
              <MonthlySavingComparisonVertical
                detailedGraphData={detailedGraphData}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </MetricCardContainer>
  );
};

export default ShoppingMonthlyCompBet;
