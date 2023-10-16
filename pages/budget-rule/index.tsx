import React from 'react'
import Seo from "../../component/Seo";
import BudgetRule from '../../component/budgetrule/BudgetRuleOverview'
import { useTranslation } from "react-i18next";


const BudgetRulePage = () => {
    const { t } = useTranslation("seo");

    return (
        <>
            <Seo
                title={t("budgetRule.title")}
                description={t("budgetRule.description") as string}
            />

            <BudgetRule />
        </>
    );
};


export default BudgetRulePage


