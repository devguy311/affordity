import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import HousingHeader from "./component/HousingHeader";
import HousingFeature from "./component/HousingFeature";
import ImageDescription from "../commoncomponent/component/ImageDescription";
import { getAssetUrl } from "../../util/SiteUtil";
import { ColorText, HeadingText } from "../commoncomponent/Text";
import { useWindowSize } from "../../hooks";
import { useRouter } from "next/router";
import { SecondaryButton1 } from "../commoncomponent/Button";
import ChevronRightSharpIcon from "@mui/icons-material/ChevronRightSharp";
import ReadyToGetStarted from "../commoncomponent/ReadyToGetStarted";
import LivingForm from "./component/IndicatorForm";
import { housingCostFormHelpData } from "./util";
import { useAppSelector } from "../../redux/hooks";
import { selectAuth } from "../../redux/auth";
import { selectLanguage } from "../../redux/language";


const RealEstateIndicatorOverView = () => {
  const { mobileView } = useWindowSize();
  const navigate = useRouter();
  const { auth } = useAppSelector(selectAuth);
  const { t } = useTranslation("housing");
  const { lang } = useSelector(selectLanguage);
  return (
    <Grid container pt={["0px", "0px", "0px"]} justifyContent={"center"}>
      <Grid px={"24px"} item maxWidth={["100%", "1144px"]}>
        <HousingHeader />
        <HousingFeature />

        <Box mt={"80px"}>
          <ImageDescription
            info={{
              description:
                t("description1"),
              image:
                lang === "en"
                  ? getAssetUrl("redesign/realestate_overview_1.webp")
                  : getAssetUrl("redesign/realestate_overview_1_fr.webp"),
              subTitle: (
                <HeadingText
                  style={{ lineHeight: "46px", textAlign: "center" }}
                  align="center"
                  textsize={mobileView ? "32px" : "40px"}
                >
                  <ColorText textcolor="#2E86A1"> {t("title1Color")}</ColorText>  {t("title1")}
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
                  ? getAssetUrl("redesign/realestate_overview_2.webp")
                  : getAssetUrl("redesign/realestate_overview_2_fr.webp"),
              subTitle: (
                <HeadingText
                  style={{ lineHeight: "46px", textAlign: "center" }}
                  align="center"
                  textsize={mobileView ? "32px" : "40px"}
                >
                  {t("title2")}
                </HeadingText>
              ),
              title: t("header2").toUpperCase(),
              imgDirection: "left",
            }}
          />
          <ImageDescription
            info={{
              description:
                t("description3"),
              image:
                lang === "en"
                  ? getAssetUrl("redesign/realestate_overview_3.webp")
                  : getAssetUrl("redesign/realestate_overview_3_fr.webp"),
              subTitle: (
                <HeadingText
                  style={{ lineHeight: "46px", textAlign: "center" }}
                  align="center"
                  textsize={mobileView ? "32px" : "40px"}
                >
                  {t("title3")}
                </HeadingText>
              ),
              title: t("header3").toUpperCase(),
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
                  background: "#2E86A1",
                  color: "#fff",
                }}
                onClick={() => navigate.push("/housing-indicator-input")}
              >
                {t("button2")} <ChevronRightSharpIcon />
              </SecondaryButton1>
            </Box>
          </Box>
        </Box>
      </Grid>
      <Grid
        item
        xs={12}
        px={"24px"}
        mt={"80px"}
        py={"120px"}
        bgcolor={"#F4F9FD"}
      >
        <LivingForm helpData={housingCostFormHelpData(t)} />
      </Grid>
      <Grid item xs={12} px={"24px"} bgcolor={"rgba(0, 0, 0, 0.05)"}>
        {!auth.authenticated && (
          <ReadyToGetStarted />
        )}
      </Grid>
    </Grid>
  );
};

export default RealEstateIndicatorOverView;
