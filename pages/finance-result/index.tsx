import React from "react";
import Seo from "../../component/Seo";
import FinanceResult from "../../component/myfinance/FinanceResult";
import { useTranslation } from "react-i18next";


const FinanceResultPage = () => {

  const { t } = useTranslation("seo");

  return (
    <>
      <Seo
        title={t("home.title")}
        description={t("home.description") as string}
      />
      <FinanceResult />
    </>
  );

};

export default FinanceResultPage;
