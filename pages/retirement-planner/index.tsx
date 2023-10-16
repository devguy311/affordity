import React from "react";
import Seo from "../../component/Seo"
import RetirementCalculator from "../../component/retirementplanner/RetirementPlannerInput"
import { useTranslation } from "react-i18next";


const RetirementPlanner = () => {
  const { t } = useTranslation("seo");

  return (
    <>
      <Seo
        title={t("retirementView.title")}
        description={t("retirementView.description") as string}
      />

      <RetirementCalculator />
    </>
  );
};

export default RetirementPlanner;
