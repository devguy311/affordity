import React from "react";
import Seo from "../../component/Seo";
import InvestmentResultDetailed from "../../component/investment/InvestmentResultDetailed";
import { useTranslation } from "react-i18next";


const InvestmentResultDetailedPage = () => {
  const { t } = useTranslation("seo");

  return (
    <>
      <Seo
        title={t("investmentView.title")}
        description={t("investmentView.description") as string}
      />
      <InvestmentResultDetailed />
    </>
  )
};

export default InvestmentResultDetailedPage;
