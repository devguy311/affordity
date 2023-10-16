/* eslint-disable @next/next/no-img-element */
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import Header from "./component/Header";
import Security from "./component/Security";
import { getAssetUrl } from "../../util/SiteUtil";
// import NewSiteFeatureInfo from "./component/NewSiteFeatureInfo";
// import {
//   BenchmarkInfoType,
//   BudgetingInfoType,
//   InvestmentInfoType,
// } from "./util";

import Image from "next/image";

import LatestStories from "./component/LatestStories";
import { useWindowSize } from "../../hooks";
import { useRouter } from "next/router";
import { getBlogList } from "../blog/util";
import FaqQuestion from "../faq/component/FaqQuestion";
import ApplicationFeature from "./component/ApplicationFeature";

import { selectLanguage } from "../../redux/language";
import FeatureHeader from "./component/FeatureHeader";
import Coverage from "./component/Coverage";
// import Essentials from "./component/Essentials";
import Essentials2 from "./component/Essentials2";

// fetch the blogs as soon as the page load. (better to use next data fetching)
const promise = getBlogList();

const Homepage = () => {
  const { mobileView } = useWindowSize();
  const router = useRouter();
  const { t } = useTranslation("homepage");
  const { lang } = useSelector(selectLanguage);

  const [blogs, setBlogs] = useState<any[]>([]);

  useEffect(() => {
    promise.then((data) => {
      setBlogs(data);
    });
  }, []);

  const handleNavigate = (url: string) => {
    router.push(url);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Box p={0} width="100%" maxWidth={"1140px"}>
        <Grid container>
          <Grid item xs={12}>
            <Header />
          </Grid>
          <Grid item xs={12} p={"0px"}>
            <Image
              src={
                lang == "en"
                  ? getAssetUrl(
                    mobileView
                      ? "redesign/dashboard-homepage-mobile.webp"
                      : "redesign/dashboard-homepage.webp"
                  )
                  : getAssetUrl(
                    mobileView
                      ? "redesign/dashboard-mobile-fr.webp"
                      : "redesign/dashboard-fr.webp"
                  )
              }
              alt={"affordify"}
              width={mobileView ? 1040 : 1140}
              height={mobileView ? 1200 : 620}

            />
          </Grid>
        </Grid>
      </Box>

      <Box p={0} width="100%" maxWidth={"1140px"}>
        <Grid container>
          <Grid item mt={mobileView ? "80px" : "80px"} xs={12}>
            <FeatureHeader
              title_1={t("featureheaderTitle")}
              title_2={t("featureheaderTitleB")}
              description={t("featureheaderDesc")}
            />
            <ApplicationFeature />
          </Grid>
          <Box width="100%" mt={mobileView ? "60px" : "120px"}>
            <Box p={0} width="100%" mx="auto" maxWidth={"1140px"}>
              <FeatureHeader
                title_1={t("essentialTitle")}
                title_2={t("essentialTitleB")}
                description={t("essentialSubtitle")}
              />
            </Box>
            <Box width="100%" maxWidth={"1440"} display="flex">
              <Essentials2></Essentials2>
            </Box>
          </Box>
          <Grid item mt={mobileView ? "0px" : "80px"} xs={12}>
            <Coverage />
          </Grid>
        </Grid>
      </Box>

      <Box
        mt={mobileView ? "0px" : "80px"}
        width="100%"
        maxWidth="1044px"
        mx="auto"
        alignItems={["center", "center", "normal"]}
      >
        <FeatureHeader
          title_1={t("securityTitle")}
          title_2={t("securityTitleB")}
          description={t("securityDesc")}
        />

        <Box px={["16px", "0px"]}>
          <Security />
        </Box>
      </Box>

      <Box width="100%" maxWidth={"1140px"}>
        <Grid container>
          <Grid item xs={12} mt={mobileView ? "80px" : "150px"}>
            <FaqQuestion />
          </Grid>
        </Grid>
      </Box>

      {/* <Box p={0} width="100%" maxWidth={"1028px"}>
        <NewSiteFeatureInfo
          description={t("budgetingTitle")}
          title={t("budgeting")}
          navigateTo={handleNavigate}
          isMobile={mobileView}
          info={BudgetingInfoType(t)}
        />
        <NewSiteFeatureInfo
          description={t("investingTitle")}
          title={t("investing")}
          info={InvestmentInfoType(t)}
          navigateTo={handleNavigate}
          isMobile={mobileView}
        />
        <NewSiteFeatureInfo
          description={t("benchmarking")}
          title={t("benchmarkingTitle")}
          info={BenchmarkInfoType(t)}
          navigateTo={handleNavigate}
          isMobile={mobileView}
        />
      </Box> */}

      <Box width="100%" mb={"120px"} maxWidth={"1044px"}>
        <LatestStories storiesList={blogs} />
      </Box>
    </Box>
  );
};

export default Homepage;
