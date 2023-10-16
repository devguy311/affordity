import Grid from "@mui/material/Grid";
import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import { ToastMessage } from "../../../../commoncomponent/ToastMessage";
import { formatAmountWithGap } from "../../../../../helpers/currencyHelper";
import { AmountCard, MetricCardContainer } from "../../../style";
import { DetailedGraphType } from "../../../type";
import { useAppSelector } from "../../../../../redux/hooks";
import { selectUser } from "../../../../../redux/user";
import { getAssetUrl } from "../../../../../util/SiteUtil";
import NextImage from "../../../../commoncomponent/component/NextImage";
import { DescriptionText2 } from "../../../../commoncomponent/Text";

type PriceInfoProps = {
  detailedGraphData: DetailedGraphType;
};

const PriceInfo: FC<PriceInfoProps> = ({ detailedGraphData }) => {
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
            justifyContent={["center", "center", "flex-start"]}
            textcolor="#534F59"
          >
            <NextImage
              src={getAssetUrl("redesign/tag_icon.svg")}
              height="24px"
              width={"24px"}
              alt={"tag"}
            />{" "}
            {t("price")}
          </DescriptionText2>
        </Grid>
        <Grid
          item
          xs={12}
          display={["flex", "flex", "block"]}
          flexDirection={["column", "column", "initial"]}
          alignItems={"center"}
          textAlign={"center"}
          mt={"25px"}
        >
          <DescriptionText2 textweight={700} textsize="20px" textcolor="#000">
            {prefferedCurrency} {formatAmountWithGap(affordified.purchase.price)}
          </DescriptionText2>
          <DescriptionText2 mt={"8px"} textcolor="#7A7A7A" textsize="16px">
            {t("affordablePrice")}
          </DescriptionText2>
        </Grid>
        <Grid item mt={"32px"} xs={12}>
          <Grid
            container
            justifyContent={["center", "center", "start"]}
            gap={"34px"}
          >
            <Grid item maxWidth={"150px"}>
              <DescriptionText2
                display={"flex"}
                gap={"5px"}
                flexWrap={"wrap"}
                textweight={800}
                textsize={"24px"}
                textcolor="#534F59"
              >
                {prefferedCurrency} {formatAmountWithGap(user.purchase.price)}
              </DescriptionText2>
              <DescriptionText2 mt={"16px"} textcolor="#7A7A7A" textsize="14px">
                {t("targetPrice")}
              </DescriptionText2>
            </Grid>
            <AmountCard item maxWidth={"150px"}>
              <DescriptionText2
                display={"flex"}
                gap={"2px"}
                flexWrap={"wrap"}
                textweight={800}
                textsize={"24px"}
                textcolor={metrics.priceGap > 0 ? "#4B8F8F" : "#EF3434"}
              >
                {prefferedCurrency} {formatAmountWithGap(metrics.priceGap)}
              </DescriptionText2>
              <DescriptionText2 mt={"16px"} textcolor="#7A7A7A" textsize="14px">
                {t("difference")}
              </DescriptionText2>
            </AmountCard>
          </Grid>
        </Grid>
        <Grid item xs={12} mt={"32px"}>
          <ToastMessage
            type={metrics.affordabilityCheck ? "success" : "error"}
            subDescription={
              <DescriptionText2
                textsize="14px"
                align="center"
                textcolor="#7C7A7A"
                style={{ lineHeight: "140%" }}
              >
                {metrics.text.priceResult}
              </DescriptionText2>
            }
          />
        </Grid>
      </Grid>
    </MetricCardContainer>
  );
};

export default PriceInfo;
