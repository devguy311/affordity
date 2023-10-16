import React from "react";
import Seo from "../../component/Seo";
import LivingCostIndicator from "../../component/livingcostindicator/LivingCostIndicatorOverView"
import { useTranslation } from "react-i18next";


const ComparatorPage = () => {
  const { t } = useTranslation("seo");

  return (
    <>
      <Seo
        title={t("livingIndicator.title")}
        description={t("livingIndicator.description") as string}
      />

      <LivingCostIndicator />
    </>
  );
};

export default ComparatorPage;
