import React from 'react'
import Seo from "../../component/Seo";
import LivingCostIndicatorResult from "../../component/livingcostindicator/LivingCostIndicatorResult"
import { useTranslation } from "react-i18next";

const ComparatorResultPage = () => {
    const { t } = useTranslation("seo");

    return (
        <>
            <Seo
                title={t("livingIndicator.title")}
                description={t("livingIndicator.description") as string}
            />


            <LivingCostIndicatorResult />
        </>
    );
}

export default ComparatorResultPage