import React from "react";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";
import { useInvestmentResult } from "./hook";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import NextImage from "../commoncomponent/component/NextImage";
import { getAssetUrl } from "../../util/SiteUtil";
import { DescriptionText2, HeadingText } from "../commoncomponent/Text";
import { investmentFormHelpData } from "./util";
import InvestmentGraph from "./component/InvestmentGraph";
import { PrimaryOutlinedButton } from "../commoncomponent/Button";
import AssistantHelp from "../commoncomponent/AssistantHelp";
import InvestmentGoalView from "./component/InvestmentGoalView";

const InvestmentResultDetailed = () => {
  const router = useRouter();
  const { comparatorResult, mobileView, prefferedCurrency } =
    useInvestmentResult();

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
                {comparatorResult && (
                  <InvestmentGraph graphData={comparatorResult} />
                )}
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
            <InvestmentGoalView goalInfo={comparatorResult} />
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

export default InvestmentResultDetailed;
