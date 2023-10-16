import React from 'react'
import Seo from "../../component/Seo";
import dynamic from 'next/dynamic'
import { useTranslation } from "react-i18next";

const Privacy = dynamic(import('../../component/privacy'), { ssr: false })

const PrivacyView = () => {
    const { t } = useTranslation("seo");

    return (
        <>
            <Seo
                title={t("privacy.title")}
                description={t("privacy.description") as string}
            />

            <Privacy />
        </>
    )
}

export default PrivacyView