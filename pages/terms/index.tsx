import React from 'react'
import dynamic from 'next/dynamic'
import Seo from "../../component/Seo";
import { useTranslation } from "react-i18next";

const Terms = dynamic(import('../../component/terms'), { ssr: false })

const TermsView = () => {
    const { t } = useTranslation("seo");

    return (
        <>
            <Seo
                title={t("home.title")}
                description={t("home.description") as string}
            />

            <Terms />
        </>
    );
};

export default TermsView