import React from "react";
import Seo from "../../component/Seo"
import RetirementPlannerOverviewView from "../../component/retirementplanner/RetirementPlannerOverview"
import { useTranslation } from "react-i18next";


const RetirementOverview = () => {
  const { t } = useTranslation("seo");

  return (
    <>
      <Seo
        title={t("retirementView.title")}
        description={t("retirementView.description") as string}
      />


      <RetirementPlannerOverviewView />
    </>
  );
};

export default RetirementOverview;
