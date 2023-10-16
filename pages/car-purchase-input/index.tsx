import React from 'react'
import Seo from "../../component/Seo";
import CarPurchaseInput from '../../component/carpurchaserule/Inputs'
import { useTranslation } from "react-i18next";

const CarPurchaseInputPage = () => {
  const { t } = useTranslation("seo");

  return (
    <>
      <Seo
        title={t("carPurchase.title")}
        description={t("carPurchase.description") as string}
      />

      <CarPurchaseInput />
    </>
  );
}

export default CarPurchaseInputPage