/* eslint-disable @next/next/no-img-element */
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import Image from "next/image";
import { getAssetUrl } from "../../util/SiteUtil";
import {
  ColorText,
  DescriptionText,
  DescriptionText2,
  HeadingText,
} from "../commoncomponent/Text";
import { useWindowSize } from "../../hooks";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { selectLanguage } from "../../redux/language";

import CTAMyfinance from "./component";

const DashboardHeader = () => {
  const { mobileView } = useWindowSize();
  const { t } = useTranslation("dashboardOverview");
  const { lang } = useSelector(selectLanguage);
  const dispatch = useDispatch();

  return (
    <Grid container columnSpacing={"80px"}>
      <Grid item xs={12} mt={"35px"} mb={"42px"}>
        <Box display={"flex"} gap={"10px"} alignItems={"center"}>
          <Box width={"24px"} height={"24px"} position={"relative"}>
            <Image
              alt={"Budgeting Dashboard"}
              src={getAssetUrl("/redesign/dashboard_32_black.svg")}
              layout="fill"
              objectFit="contain"
            />
          </Box>
          <DescriptionText2 textweight={700}>{t("header")} </DescriptionText2>
        </Box>
      </Grid>
      <Grid item mt={["8px", "32px", "0px"]} xs={12} md={5}>
        <HeadingText
          style={{ textAlign: mobileView ? "center" : "left" }}
          textsize={mobileView ? "32px" : "56px"}
        >
          {t("titleA")} <ColorText textcolor="#C0C0C0"> {t("titleColor")}</ColorText>
        </HeadingText>
        <Box mt={["8px", "8px", "32px"]}>
          <DescriptionText style={{ textAlign: mobileView ? "center" : "left" }}>
            {t("description")}
          </DescriptionText>
        </Box>
        <Box mt={"32px"}>
          <CTAMyfinance />
        </Box>
      </Grid>
      <Grid item mt={["64px", "32px", "0px"]} xs={12} md={7} order={[1, 1, 2]}>
        <img
          src={lang == "en" ? getAssetUrl(mobileView ?
            "redesign/dashboard-homepage-mobile.webp" : "redesign/dashboard-homepage.webp") : getAssetUrl(mobileView ? "redesign/dashboard-mobile-fr.webp" : "redesign/dashboard-fr.webp")}
          alt={"affordify"}
        />
      </Grid>
    </Grid>
  );
};

export default DashboardHeader;
