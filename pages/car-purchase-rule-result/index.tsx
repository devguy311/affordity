import React from "react";
import Seo from "../../component/Seo";
import PurchaseRuleResult from "../../component/carpurchaserule/Result"
import { useTranslation } from "react-i18next";


const PurchaseRuleResultPage = () => {
  const { t } = useTranslation("seo");

  return (
    <>
      <Seo
        title={t("carPurchase.title")}
        description={t("carPurchase.description") as string}
      />
      <PurchaseRuleResult />
    </>
  );
};

export default PurchaseRuleResultPage;
