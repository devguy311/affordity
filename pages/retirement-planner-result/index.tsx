import React from "react";
import Seo from "../../component/Seo"
import RetirementPlannerResult from "../../component/retirementplanner/RetirementPlannerResult"
import { useTranslation } from "react-i18next";

const RetirementPlannerResultPage = () => {
    const { t } = useTranslation("seo");

    return (
        <>
            <Seo
                title={t("retirementView.title")}
                description={t("retirementView.description") as string}
            />

            <RetirementPlannerResult />
        </>
    );
};

export default RetirementPlannerResultPage;
