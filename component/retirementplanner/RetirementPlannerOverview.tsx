import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import RetirementHeader from "./component/RetirementHeader";
import RetirementFeature from "./component/RetirementFeature";
import { getAssetUrl } from "../../util/SiteUtil";
import { ColorText, HeadingText } from "../commoncomponent/Text";
import ImageDescription from "../commoncomponent/component/ImageDescription";
import { useWindowSize } from "../../hooks";
import { useRouter } from "next/router";
import { SecondaryButton1 } from "../commoncomponent/Button";
import ChevronRightSharpIcon from "@mui/icons-material/ChevronRightSharp";
import ReadyToGetStarted from "../commoncomponent/ReadyToGetStarted";
import RetirementForm from "./component/RetirementForm";
import { retirementFormHelpData } from "./util";
import { useAppSelector } from "../../redux/hooks";
import { selectAuth } from "../../redux/auth";
import { selectLanguage } from "../../redux/language";


const RetirementPlannerOverview = () => {
  const { mobileView } = useWindowSize();
  const navigate = useRouter();
  const { auth } = useAppSelector(selectAuth);
  const { t } = useTranslation("retirementplanneroverview");
  const { lang } = useSelector(selectLanguage);

  return (
    <Grid container pt={["0px", "0px", "0px"]} justifyContent={"center"}>
      <Grid px={"24px"} item maxWidth={["100%", "1144px"]}>
        <RetirementHeader />
        <RetirementFeature />
        <Box mt={"80px"}>
          <ImageDescription
            info={{
              description:
                t("description1"),
              image:
                lang === "en"
                  ? getAssetUrl("redesign/age_investment.webp")
                  : getAssetUrl("redesign/age_investment_fr.webp"),
              subTitle: (
                <HeadingText
                  style={{ lineHeight: "46px" }}
                  align="center"
                  textsize={mobileView ? "32px" : "40px"}
                >
                  {t("title1")}
                </HeadingText>
              ),
              title: t("header1"),
              imgDirection: "left",
            }}
          />
          <ImageDescription
            info={{
              description:
                t("description2"),
              image:
                lang === "en"
                  ? getAssetUrl("redesign/retirement_calc.webp")
                  : getAssetUrl("redesign/retirement_calc_fr.webp"),
              subTitle: (
                <HeadingText
                  style={{ lineHeight: "46px" }}
                  align="center"
                  textsize={mobileView ? "32px" : "40px"}
                >
                  {t("title2")}
                </HeadingText>
              ),
              title: t("header2"),
              imgDirection: "right",
            }}
          />
        </Box>
        <Box my={"80px"} display={"flex"} justifyContent={"center"}>
          <Box width={["100%", "100%", "682px"]}>
            <HeadingText
              maxWidth={"682px"}
              textsize={mobileView ? "32px" : "56px"}
              style={{
                textAlign: "center",
                lineHeight: !mobileView ? "64px" : "37px",
              }}
              align="center"
            >
              {t("largeText")}
            </HeadingText>
            <Box mt={"40px"}>
              <SecondaryButton1
                style={{
                  background: "#207754",
                  color: "#fff",
                }}
                onClick={() => navigate.push("/retirement-planner")}
              >
                {t("button2")} <ChevronRightSharpIcon />
              </SecondaryButton1>
            </Box>
          </Box>
        </Box>
        <ImageDescription
          info={{
            description:
              t("description3"),
            image:
              lang === "en"
                ? getAssetUrl("redesign/visualise_invest.webp")
                : getAssetUrl("redesign/visualise_invest_fr.webp"),
            subTitle: (
              <HeadingText
                style={{ lineHeight: "46px" }}
                align="center"
                textsize={mobileView ? "32px" : "40px"}
              >
                <ColorText>{t("title3")}</ColorText> {t("title3a")}
              </HeadingText>
            ),
            title: t("header3"),
            imgDirection: "left",
          }}
        />
      </Grid>
      <Grid
        item
        xs={12}
        px={"24px"}
        mt={"80px"}
        py={"120px"}
        bgcolor={"rgba(24, 101, 69, 0.05)"}
      >
        <RetirementForm helpData={retirementFormHelpData(t)} />
      </Grid>
      <Grid
        item
        xs={12}
        px={"24px"}
        mt={"80px"}
        bgcolor={"rgba(0, 0, 0, 0.05)"}
      >
        {!auth.authenticated && (
          <ReadyToGetStarted />
        )}
      </Grid>
    </Grid>
  );
};

export default RetirementPlannerOverview;
