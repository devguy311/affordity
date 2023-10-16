import React from "react";
import Seo from "../../component/Seo";
import PricingView from "../../component/pricing/index"
import { useTranslation } from "react-i18next";


const PricingPage = () => {
    const { t } = useTranslation("seo");

    return (
        <>
            <Seo
                title={t("pricing.title")}
                description={t("pricing.description") as string}
            />

            <PricingView />
        </>
    );
};

export default PricingPage;
