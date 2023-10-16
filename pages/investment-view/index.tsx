import React from "react";
import Seo from "../../component/Seo";
import InvestmentInput from "../../component/investment/InvestmentInput";
import { useTranslation } from "react-i18next";

const InvestmentView = () => {
  const { t } = useTranslation("seo");

  return (
    <>
      <Seo
        title={t("investmentView.title")}
        description={t("investmentView.description") as string}
      />

      <InvestmentInput />
    </>
  );
};

export default InvestmentView;
