import React from "react";
import Seo from "../../component/Seo";
import FinanceOverview from "../../component/myfinance/FinanceOverview";
import { useTranslation } from "react-i18next";

const MyFinanceView = () => {
  const { t } = useTranslation("seo");

  return (
    <>
      <Seo
        title={t("home.title")}
        description={t("home.description") as string}
      />
      <FinanceOverview />
    </>
  );
};

export default MyFinanceView;
