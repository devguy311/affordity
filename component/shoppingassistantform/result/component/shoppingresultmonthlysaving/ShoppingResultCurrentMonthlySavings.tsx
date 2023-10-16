import Grid from "@mui/material/Grid";
import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import { ToastMessage } from "../../../../commoncomponent/ToastMessage";
import { MetricCardContainer } from "../../../style";
import { DetailedGraphType } from "../../../type";
import { useAppSelector } from "../../../../../redux/hooks";
import { selectUser } from "../../../../../redux/user";
import ShoppingResultCurrentMonthlyGraph from "./ShoppingResultCurrentMonthlyGraph";
import { DescriptionText2 } from "../../../../commoncomponent/Text";
import NextImage from "../../../../commoncomponent/component/NextImage";
import { getAssetUrl } from "../../../../../util/SiteUtil";
import { Box } from "@mui/material";

type ShoppingResultCurrentMonthlySavingsProps = {
  detailedGraphData: DetailedGraphType;
};

const ShoppingResultCurrentMonthlySavings: FC<
  ShoppingResultCurrentMonthlySavingsProps
> = ({ detailedGraphData }) => {
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
            justifyContent={"center"}
            textcolor="#534F59"
          >
            <NextImage
              src={getAssetUrl("redesign/tag_icon.svg")}
              height="24px"
              width={"24px"}
              alt={"tag"}
            />{" "}
            {t("monthlySavings")}
          </DescriptionText2>
        </Grid>
        <Grid item xs={6} mt={"20px"}>
          <Grid container>
            <Grid item xs={12}>
              <Box>
                <DescriptionText2
                  textweight={700}
                  textsize="20px"
                  textcolor="#000"
                >
                  {prefferedCurrency}{" "}
                  <span style={{ fontSize: "32px" }}>
                    {affordified.financials.prePurchase.monthlySavings}
                  </span>
                </DescriptionText2>
                <DescriptionText2
                  mt={"8px"}
                  textcolor="#7A7A7A"
                  textsize="16px"
                >
                  {t("monthlySavingsRequired")}
                </DescriptionText2>
              </Box>
            </Grid>
            <Grid item xs={12} mt={"20px"}>
              <Grid container columnSpacing={"10px"}>
                <Grid item xs={6}>
                  <DescriptionText2
                    textweight={800}
                    textsize={"14px"}
                    textcolor="#534F59"
                  >
                    {prefferedCurrency}{" "}
                    <span style={{ color: "#333", fontSize: "20px" }}>
                      {user.financials.prePurchase.monthlySavings}
                    </span>
                  </DescriptionText2>
                  <DescriptionText2 textcolor="#7A7A7A" textsize="12px">
                    {t("YourmonthlySavings")}
                  </DescriptionText2>
                </Grid>
                <Grid item xs={6}>
                  <DescriptionText2
                    textweight={800}
                    textsize={"14px"}
                    textcolor="#534F59"
                  >
                    {prefferedCurrency}{" "}
                    <span
                      style={{
                        color: metrics.savingGap < 0 ? "#E45152" : "#289017",
                        fontSize: "20px",
                      }}
                    >
                      {metrics.savingGap}
                    </span>
                  </DescriptionText2>
                  <DescriptionText2 textcolor="#7A7A7A" textsize="12px">
                    {t("difference")}
                  </DescriptionText2>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6} mt={["30px", "30px", "0px"]}>
          <ShoppingResultCurrentMonthlyGraph
            detailedGraphData={detailedGraphData}
          />
        </Grid>
        <Grid item xs={12} mt={"10px"}>
          <ToastMessage
            type={metrics.affordabilityCheck ? "success" : "error"}
            subDescription={
              <DescriptionText2
                textsize="14px"
                align="center"
                textcolor="#7C7A7A"
                style={{ lineHeight: "140%" }}
              >
                {metrics.text.savingResult}
              </DescriptionText2>
            }
          />
        </Grid>
      </Grid>
    </MetricCardContainer>
  );
};

export default ShoppingResultCurrentMonthlySavings;
