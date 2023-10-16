import React from "react";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";
import { useInvestmentQuickWayResult, useInvestmentResult } from "./hook";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import NextImage from "../commoncomponent/component/NextImage";
import { getAssetUrl } from "../../util/SiteUtil";
import { DescriptionText2, HeadingText } from "../commoncomponent/Text";
import { investmentFormHelpData } from "./util";
import InvestmentGraphInfo from "./component/InvestmentGraphInfo";
import { PrimaryOutlinedButton } from "../commoncomponent/Button";
import AssistantHelp from "../commoncomponent/AssistantHelp";
import { CardContainer } from "./style";
import InvestmentQuickWayGraph from "./component/QuickWay/InvestmentQuickWayGraph";
import InvestmentQuickWayPortfolioAllocation from "./component/InvestmentPortfolioAllocation";
import InvestmentQuickWayBreakdownData from "./component/QuickWay/InvestmentQuickWayBreakdownData";
import InvestmentLearnMore from "./component/InvestmentLearnMore";

const InvestmentResult = () => {
  const router = useRouter();
  const { comparatorResult, mobileView, prefferedCurrency } =
    useInvestmentQuickWayResult();
  const { t } = useTranslation("investmentviewoverview");
  return (
    <Grid container justifyContent={"center"} pt={"0px"}>
      <Grid item px={"24px"} maxWidth={"1140px"}>
        <Grid container>
          <Grid item xs={12} mt={["0px", "0px", "35px"]} mb={"42px"}>
            <Box
              display={"flex"}
              gap={"10px"}
              alignItems={"center"}
              mt={"24px"}
            >
              <NextImage
                width="24px"
                height="24px"
                alt={"Investment view"}
                src={getAssetUrl("/redesign/investing_32_black.svg")}
              />
              <DescriptionText2 textweight={700}>
                {t("header")}
              </DescriptionText2>
              <PrimaryOutlinedButton
                onClick={() => router.push("/investment-view-input")}
                style={{ display: "flex", gap: 1 }}
              >
                {t("inputButton")}
              </PrimaryOutlinedButton>
            </Box>
          </Grid>
          <Grid item xs={12} mb={"40px"}>
            <HeadingText
              style={{ lineHeight: "125%" }}
              textsize={mobileView ? "24px" : "32px"}
            >
              {t("titleInput")}
            </HeadingText>
          </Grid>
          <Grid item xs={12}>
            <Grid container>
              <Grid
                item
                xs={12}
                md={6}
                pr={["0px", "0px", "70px"]}
                borderRight={["none", "none", "1px dashed rgba(0, 0, 0, 0.2)"]}
              >
                <InvestmentQuickWayGraph
                  graphData={comparatorResult.graphValues}
                />
              </Grid>
              <Grid item xs={12} md={6} display={["none", "none", "block"]}>
                <AssistantHelp
                  title={t("helpTitle")}
                  helpData={investmentFormHelpData(t)}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} mt={"147px"}>
            <Grid
              container
              rowSpacing={["40px", "40px", "0px"]}
              columnSpacing={"50px"}
            >
              <Grid item xs={12} md={7}>
                <CardContainer>
                  <Grid
                    container
                    alignItems={"center"}
                    columnSpacing={"55px"}
                    p={"50px"}
                  >
                    <Grid item xs={12} md={6}>
                      <InvestmentGraphInfo
                        cardIcon={getAssetUrl("redesign/wallet_bg.svg")}
                        amount={`${comparatorResult.graphValues[
                          comparatorResult.graphValues.length - 1
                        ].totalDeposit
                          .toLocaleString()
                          .replaceAll(",", " ")}
                              ${prefferedCurrency}`}
                        subDescriptionText={t("yourProjectedAverage")}
                      />
                    </Grid>
                    <Grid item xs={12} mt={["50px", "50px", "0px"]} md={6}>
                      <Grid item xs={12}>
                        <InvestmentGraphInfo
                          cardIcon={getAssetUrl("redesign/graph_bg.svg")}
                          amount={`${comparatorResult.graphValues[
                            comparatorResult.graphValues.length - 1
                          ].returnOnly
                            .toLocaleString()
                            .replaceAll(",", " ")}
                              ${prefferedCurrency}`}
                          subDescriptionText={t("yourTotalDeposit")}
                        />
                      </Grid>
                      <Grid item xs={12} mt={"80px"}>
                        <InvestmentGraphInfo
                          cardIcon={getAssetUrl("redesign/currency_bg.svg")}
                          amount={`${comparatorResult.graphValues[
                            comparatorResult.graphValues.length - 1
                          ].investmentGrowth
                            .toLocaleString()
                            .replaceAll(",", " ")}
                              ${prefferedCurrency}`}
                          subDescriptionText={t("yourProjectedAccount")}
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                </CardContainer>
              </Grid>
              <Grid item xs={12} md={5}>
                <InvestmentQuickWayPortfolioAllocation
                  expenseDetail={comparatorResult.allocation}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} mt={"60px"}>
            <Grid
              container
              alignItems={"stretch"}
              rowSpacing={"40px"}
              columnSpacing={"50px"}
            >
              <Grid item xs={12} md={7}>
                <InvestmentQuickWayBreakdownData
                  investmentData={comparatorResult.tableData}
                  invText={comparatorResult.explanationGrowth}
                />
              </Grid>
              <Grid item xs={12} md={5}>
                <InvestmentLearnMore />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        xs={12}
        mt={"100px"}
        px={"24px"}
        bgcolor={"rgba(0, 0, 0, 0.05)"}
      ></Grid>
    </Grid>
  );
};

export default InvestmentResult;
