import React from 'react'
import Seo from "../../component/Seo";
import HousingCostIndicatorResult from "../../component/housingindicator/Result"
import { useTranslation } from "react-i18next";


const HousingResultPage = () => {
    const { t } = useTranslation("seo");

    return (
        <>
            <Seo
                title={t("housingIndicator.title")}
                description={t("housingIndicator.description") as string}
            />
            <HousingCostIndicatorResult />
        </>
    );
}

export default HousingResultPage