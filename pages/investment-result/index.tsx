import React from "react";
import Seo from "../../component/Seo"
import InvestmentResult from "../../component/investment/InvestmentResult"
import { useTranslation } from "react-i18next";


const InvestmentResultView = () => {
  const { t } = useTranslation("seo");

  return (
    <>
      <Seo
        title={t("investmentView.title")}
        description={t("investmentView.description") as string}
      />

      <InvestmentResult />
    </>
  );
};

export default InvestmentResultView;
