import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import Header from "./Header";
import UseCases from "./UseCases";
import Security from "../homepage/component/Security";
import ImageDescription from "../commoncomponent/component/ImageDescription";
import { getAssetUrl } from "../../util/SiteUtil";
import { HeadingText, ColorText, DescriptionText2 } from "../commoncomponent/Text";
import { useWindowSize } from "../../hooks";
import FeatureHeader from "../homepage/component/FeatureHeader";

import ReadyToGetStarted from "../commoncomponent/ReadyToGetStarted";
import { useAppSelector } from "../../redux/hooks";
import { selectAuth } from "../../redux/auth";
import { selectLanguage } from "../../redux/language";
import CTAMyfinance from "./component";

const DashboardOverview = () => {
  const { mobileView } = useWindowSize();
  const { auth } = useAppSelector(selectAuth);
  const { t } = useTranslation("dashboardOverview");

  const { lang } = useSelector(selectLanguage);

  return (
    <Grid container pt={["0px", "0px", "0px"]} justifyContent={"center"}>
      <Grid px={"24px"} item maxWidth={["100%", "1144px"]}>
        <Header />
        <Grid container>

          <Grid item mt={["85px", "100px"]} xs={12} p={"0px"} width={["300px", "350px", "350px"]}>
            <FeatureHeader
              title_1={t("bigText1")}
              title_2={t("bigText2")}
              description={
                t("bigText3")
              }
            />
          </Grid>
          <Grid item mt={["80px", "50px"]} xs={12} p={"0px"} >
            <UseCases />
          </Grid>

        </Grid>
        <Box mt="80px">
          <ImageDescription
            info={{
              description: t("description1"),
              image:
                lang === "en"
                  ? getAssetUrl("redesign/dashboard-1.webp")
                  : getAssetUrl("redesign/dashboard-1-fr.webp"),
              subTitle: (
                <HeadingText
                  style={{ lineHeight: "46px", textAlign: "center" }}
                  align="center"
                  textsize={mobileView ? "32px" : "40px"}

                >
                  {t("title1")} <ColorText textcolor="#C0C0C0"> {t("title1b")}</ColorText>
                </HeadingText>
              ),
              title: t("header1"),
              imgDirection: "left",
            }}
          />
        </Box>
        <Box mt={["80px", "10px"]}>
          <ImageDescription
            info={{
              description: t("description2"),
              image:
                lang === "en"
                  ? getAssetUrl("redesign/dashboard-2.webp")
                  : getAssetUrl("redesign/dashboard-2-fr.webp"),
              subTitle: (
                <HeadingText
                  style={{ lineHeight: "46px", textAlign: "center" }}
                  align="center"
                  textsize={mobileView ? "32px" : "40px"}
                >
                  {t("title2")}<ColorText textcolor="#C0C0C0"> {t("title2b")}</ColorText>
                </HeadingText>
              ),
              title: t("header2"),
              imgDirection: "right",
            }}
          />
        </Box>
        <Box mt={"80px"} display={"flex"} justifyContent={"center"}>
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
              {t("bigText")}
            </HeadingText>
            <Box mt={"40px"} display={"flex"} justifyContent={"center"}>
              <CTAMyfinance />
            </Box>
          </Box>
        </Box>
        <Box mt={"80px"}>
          <ImageDescription
            info={{
              description: t("description3"),
              image:
                lang === "en"
                  ? getAssetUrl("redesign/dashboard-3.webp")
                  : getAssetUrl("redesign/dashboard-3-fr.webp"),
              subTitle: (
                <HeadingText
                  style={{ lineHeight: "46px", textAlign: "center" }}
                  align="center"
                  textsize={mobileView ? "32px" : "40px"}
                >
                  {t("title3")}<ColorText textcolor="#C0C0C0"> {t("title3b")}</ColorText>
                </HeadingText>
              ),
              title: t("header3"),
              imgDirection: "left",
            }}
          />
        </Box>


        <Grid container>
          <Grid item mt={["50px", "70px"]} xs={12} p={"16px"} width={["300px", "350px", "350px"]}>
            <Security />
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
        {!auth.authenticated && <ReadyToGetStarted />}
      </Grid>
    </Grid >
  );
};

export default DashboardOverview;
