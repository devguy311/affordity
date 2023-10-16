import React from 'react'
import Seo from "../../component/Seo";
import PurchaseRule from '../../component/carpurchaserule/Overview'
import { useTranslation } from "react-i18next";


const CarPurchaseRulePage = () => {
    const { t } = useTranslation("seo");

    return (
        <>
            <Seo
                title={t("carPurchase.title")}
                description={t("carPurchase.description") as string}
            />

            <PurchaseRule />
        </>
    );
}

export default CarPurchaseRulePage