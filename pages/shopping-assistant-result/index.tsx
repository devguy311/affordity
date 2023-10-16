import React from "react";
import Seo from "../../component/Seo"
import AffordifiedMetric from "../../component/shoppingassistantform/result/ShoppingAssistantResult"
import { useTranslation } from "react-i18next";


const ShoppingAssistantResultView = () => {
  const { t } = useTranslation("seo");

  return (
    <>
      <Seo
        title={t("shoppingAssistant.title")}
        description={t("shoppingAssistant.description") as string}
      />


      <AffordifiedMetric />
    </>
  );
};

export default ShoppingAssistantResultView;
