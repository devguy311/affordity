import React from "react";
import { useTranslation } from "react-i18next";
import { useRetirementPlannerResult } from "./hook";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import NextImage from "../commoncomponent/component/NextImage";
import { getAssetUrl } from "../../util/SiteUtil";
import { DescriptionText2, HeadingText } from "../commoncomponent/Text";
import RetirementOutcomeGraph from "./component/RetirementOutcomeGraph";
import RetirementOutcomeTable from "./component/RetirementOutcomeTable";
import { retirementFormHelpData } from "./util";
import { PrimaryOutlinedButton } from "../commoncomponent/Button";
import { useRouter } from "next/router";
import AssistantHelp from "../commoncomponent/AssistantHelp";
import RetirementBreakdownData from "./component/RetirementBreakdownData";
import RetirementLearnMore from "./component/RetirementLearnMore";
import RetirementPortfolioAllocation from "./component/RetirementPortfolioAllocation";


const RetirementPlannerResult = () => {
  const { graphData } = useRetirementPlannerResult();
  const router = useRouter();
  const { t } = useTranslation("retirementplanneroverview");
  return (
    <Grid container justifyContent={"center"}>
      <Grid px={"24px"} item maxWidth={["100%", "1144px"]}>
        <Grid container columnSpacing={"80px"}>
          <Grid item xs={12} mt={"35px"} mb={"42px"}>

            <Box
              display={"flex"}
              gap={"10px"}
              alignItems={"center"}
            >
              <NextImage
                width="24px"
                height="24px"
                alt={"retirement planner"}
                src={getAssetUrl("/redesign/retirement_32_black.svg")}
              />
              <DescriptionText2 textweight={700}>
                {t("header")}
              </DescriptionText2>

              <PrimaryOutlinedButton
                onClick={() => router.push("/retirement-planner")}
                style={{ display: "flex", gap: 1 }}
              >
                {t("inputButton")}
              </PrimaryOutlinedButton>
            </Box>
          </Grid>
          <Grid item xs={12} mt={"32px"}>
            <HeadingText textsize="32px">
              {t("resultTitle")}
            </HeadingText>
          </Grid>
          <Grid item xs={12} mt={"60px"}>
            <Grid container>
              <Grid
                item
                xs={12}
                md={7}
                pr={["0px", "0px", "100px"]}
                borderRight={["none", "none", "1px dashed rgba(0, 0, 0, 0.2)"]}
              >
                <Grid container rowSpacing={"42px"}>
                  <Grid item xs={12}>
                    <RetirementOutcomeGraph graphData={graphData.graphData} />
                  </Grid>
                  <Grid item xs={12}>
                    <RetirementOutcomeTable investmentOutcomeData={graphData} />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={5} display={["none", "none", "block"]}>
                <AssistantHelp
                  title={t("helpTitle")}
                  helpData={retirementFormHelpData(t)}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} mt={"68px"}>
            <Grid container>
              <Grid item xs={12} md={9}>
                <Grid container rowSpacing={"30px"} columnSpacing={"35px"}>
                  <Grid item xs={12} md={6}>
                    <RetirementPortfolioAllocation
                      expenseDetail={graphData.aggressive.allocation}
                      title={"Portfolio allocation aggresssive"}
                      descripiton={t("beforeAfter")}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <RetirementPortfolioAllocation
                      expenseDetail={graphData.conservative.allocation}
                      title={"Portfolio allocation conservative"}
                      descripiton={t("beforeAfter")}
                    />
                  </Grid>
                </Grid>
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
                <RetirementBreakdownData
                  investmentData={graphData.aggressive.tableData}
                  invText={""}
                />
              </Grid>
              <Grid item xs={12} md={5}>
                <RetirementLearnMore />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        xs={12}
        px={"24px"}
        mt={"80px"}
        bgcolor={"rgba(0, 0, 0, 0.05)"}
      >
      </Grid>
    </Grid>
  );
};

export default RetirementPlannerResult;
