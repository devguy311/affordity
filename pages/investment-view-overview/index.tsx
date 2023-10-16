import React from 'react'
import Seo from "../../component/Seo"
import InvestmentOverview from '../../component/investment/InvestmentOverview'
import { useTranslation } from "react-i18next";


const InvestmentOverviewPage = () => {
    const { t } = useTranslation("seo");

    return (
        <>
            <Seo
                title={t("investmentView.title")}
                description={t("investmentView.description") as string}
            />

            <InvestmentOverview />
        </>
    );
}

export default InvestmentOverviewPage