
import Grid from "@mui/material/Grid";
import React from "react";
import { useTranslation } from "react-i18next";
import ContactFormView from "./component/ContactFormView";
import SiteFeatureInfo from "../homepage/component/NewSiteFeatureInfo";
import {
  BenchmarkInfoType,
  BudgetingInfoType,
  InvestmentInfoType,
} from "../homepage/util";
import { useWindowSize } from "../../hooks";
import { useRouter } from "next/router";

const ContactUs = () => {
  const { mobileView } = useWindowSize();
  const router = useRouter();

  const handleNavigate = (url: string) => {
    router.push(url);
  };
  const { t } = useTranslation("homepage");

  return (
    <Grid container py={["32px", "32px", "32px"]} justifyContent={"center"} mb={"100px"}>
      <Grid item xs={12} maxWidth={["100%", "1104px"]}>
        <ContactFormView />
        <SiteFeatureInfo
          description={t("budgetingTitle")}
          title={t("budgeting")}
          navigateTo={handleNavigate}
          notHomePage
          isMobile={mobileView}
          info={BudgetingInfoType(t)}
        />
        <SiteFeatureInfo
          description={t("investingTitle")}
          title={t("investing")}
          info={InvestmentInfoType(t)}
          navigateTo={handleNavigate}
          isMobile={mobileView}
          notHomePage
        />
        <SiteFeatureInfo
          description={t("benchmarking")}
          title={t("benchmarkingTitle")}
          info={BenchmarkInfoType(t)}
          navigateTo={handleNavigate}
          isMobile={mobileView}
          notHomePage
        />
      </Grid>
    </Grid>
  );
};

export default ContactUs;
