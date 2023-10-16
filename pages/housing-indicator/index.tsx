import React from "react";
import Seo from "../../component/Seo";
import RealEstateIndicatorOverView from "../../component/housingindicator/Overview";
import { useTranslation } from "react-i18next";


const ComparatorPage = () => {
  const { t } = useTranslation("seo");

  return (
    <>
      <Seo
        title={t("housingIndicator.title")}
        description={t("housingIndicator.description") as string}
      />

      <RealEstateIndicatorOverView />
    </>
  );
};

export default ComparatorPage;
