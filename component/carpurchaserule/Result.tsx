import { useRouter } from "next/router";
import React from "react";
import { useTranslation } from "react-i18next";
import { useWindowSize } from "../../hooks";
import { CarRuleInfoType } from "./type";
import { Box, Grid } from "@mui/material";
import NextImage from "../commoncomponent/component/NextImage";
import { getAssetUrl } from "../../util/SiteUtil";
import { DescriptionText2, HeadingText } from "../commoncomponent/Text";
import BudgetCard from "./component/CarBudgetCard";
import CumulatedPaymentGraph from "./component/CarCumulatedPaymentGraph";
import CarExpenseBreadown from "./component/CarExpenseBreakdown";
import MonthlySavings from "./component/CarMonthlySavings";
import CapitalGraph from "./component/CarCapital";
import { PrimaryOutlinedButton } from "../commoncomponent/Button";


const CarPurchaseRuleResult = () => {
  const navigate = useRouter();
  const { query } = navigate;
  const stringQuery = query.data as unknown as string;
  const { mobileView } = useWindowSize();
  const router = useRouter();
  const data = JSON.parse(stringQuery) as CarRuleInfoType;
  const { t } = useTranslation("carruleresult");

  return (
    <Grid container pt={["0px", "0px", "0px"]} justifyContent={"center"}>
      <Grid px={"24px"} item maxWidth={["100%", "1144px"]}>
        <Grid container columnSpacing={"80px"}>
          <Grid item xs={12} mb={"42px"}>

            <Box display={"flex"} gap={"10px"} alignItems={"center"} mt={"35px"}>
              <Box display={"flex"} gap={"10px"} alignItems={"center"}>
                <NextImage
                  width="24px"
                  height="24px"
                  alt={"Car purchase rule"}
                  src={getAssetUrl("/redesign/transportindicatorIcon_black.svg")}
                />
                <DescriptionText2 textweight={700}>
                  {t("header")}
                </DescriptionText2>
                <PrimaryOutlinedButton
                  onClick={() => router.push("/car-purchase-input")}
                  style={{ display: "flex", gap: 1 }}
                > {t("inputButton")}
                </PrimaryOutlinedButton>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} mb={"40px"}>
            <HeadingText
              style={{ lineHeight: "125%" }}
              textsize={mobileView ? "24px" : "32px"}
            >
              {t("title")}
            </HeadingText>
          </Grid>
          <Grid item xs={12} mt={"31px"}>
            <Grid container spacing={"46px"}>
              <Grid item xs={12} md={4}>
                <BudgetCard
                  amount={data.budget.transport}
                  cardTitle={t("card1a")}
                  descriptionText={t("card1")!}
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <BudgetCard
                  amount={data.budget.insuranceGas}
                  cardTitle={t("card2a")}
                  descriptionText={t("card2")!}
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <BudgetCard
                  amount={data.budget.leasePmt}
                  cardTitle={t("card3a")}
                  descriptionText={t("card3")!}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={8} mt={"31px"}>
            <CumulatedPaymentGraph cumulatedGraph={data.cumulatedAmntGraph} />
          </Grid>
          <Grid item xs={12} mt={"80px"}>
            <Grid
              container
              rowSpacing={["20px", "20px", "0px"]}
              columnSpacing={["0px", "0px", "20px"]}
            >
              <Grid item xs={12} md={4}>
                <CarExpenseBreadown expenseDetail={data.expenseBreakDown} />
              </Grid>
              <Grid item xs={12} md={4}>
                <MonthlySavings monthlySavingData={data.savingsGraph} />
              </Grid>
              <Grid item xs={12} md={4}>
                <CapitalGraph capitalInfo={data.capitalGraph} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        xs={12}
        mt={"120px"}
        px={"24px"}
        bgcolor={"rgba(0, 0, 0, 0.05)"}
      >
      </Grid>
    </Grid>
  );
};

export default CarPurchaseRuleResult;
