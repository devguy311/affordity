import React from "react";
import Seo from "../../component/Seo";
import DashboardOverview from "../../component/dashboard/Overview"
import { useTranslation } from "react-i18next";


const DashboardOverviewPage = () => {
    const { t } = useTranslation("seo");

    return (
        <>
            <Seo
                title={t("home.title")}
                description={t("home.description") as string}
            />

            <DashboardOverview />
        </>
    );
};

export default DashboardOverviewPage;
