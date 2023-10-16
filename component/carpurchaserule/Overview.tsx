import { Box, Grid } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import CarRuleHeader from "./component/CarRuleHeader";
import CarFeature from "./component/CarFeature";
import ImageDescription from "../commoncomponent/component/ImageDescription";
import { getAssetUrl } from "../../util/SiteUtil";
import { HeadingText } from "../commoncomponent/Text";
import { useWindowSize } from "../../hooks";
import { useRouter } from "next/router";
import { SecondaryButton1 } from "../commoncomponent/Button";
import ChevronRightSharpIcon from "@mui/icons-material/ChevronRightSharp";
import ReadyToGetStarted from "../commoncomponent/ReadyToGetStarted";
import CarForm from "./Form";
import { carPurchaseHelpData } from "./util";
import { useAppSelector } from "../../redux/hooks";
import { selectAuth } from "../../redux/auth";


const CarPurchseRuleOverview = () => {
  const { mobileView } = useWindowSize();
  const navigate = useRouter();
  const { auth } = useAppSelector(selectAuth);
  const { t } = useTranslation("carrule");
  return (
    <Grid container pt={["0px", "0px", "0px"]} justifyContent={"center"}>
      <Grid px={"24px"} item maxWidth={["100%", "1144px"]}>
        <CarRuleHeader />
        <CarFeature />
        <Box mt={"80px"}>
          <ImageDescription
            info={{
              description:
                t("description1"),
              image: getAssetUrl("redesign/man_drive.webp"),
              subTitle: (
                <HeadingText
                  style={{ lineHeight: "46px" }}
                  align="center"
                  textsize={mobileView ? "32px" : "40px"}
                >
                  {t("title1")}
                </HeadingText>
              ),
              title: t("header1").toUpperCase(),
              imgDirection: "left",
            }}
          />
        </Box>
        <ImageDescription
          info={{
            description:
              t("description2"),
            image: getAssetUrl("redesign/mobile_app.webp"),
            subTitle: (
              <HeadingText
                style={{ lineHeight: "46px" }}
                align="center"
                textsize={mobileView ? "32px" : "40px"}
              >
                {t("title2")}
              </HeadingText>
            ),
            title: t("header2").toUpperCase(),
            imgDirection: "right",
          }}
        />
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
              {t("BigText")}
            </HeadingText>
            <Box mt={"40px"}>
              <SecondaryButton1
                style={{
                  background: "#4B8F8F",
                  color: "#fff",
                }}
                onClick={() => navigate.push("/car-purchase-input")}
              >
                {t("Button2")} <ChevronRightSharpIcon />
              </SecondaryButton1>
            </Box>
          </Box>
        </Box>
        <ImageDescription
          info={{
            description:
              t("description3"),
            image: getAssetUrl("redesign/car_price.webp"),
            subTitle: (
              <HeadingText
                style={{ lineHeight: "46px" }}
                align="center"
                textsize={mobileView ? "32px" : "40px"}
              >
                {t("title3")}
              </HeadingText>
            ),
            title: t("header3").toUpperCase(),
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
        bgcolor={"rgba(40, 132, 216, 0.05)"}
      >
        <CarForm helpData={carPurchaseHelpData(t)} />
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

export default CarPurchseRuleOverview;
