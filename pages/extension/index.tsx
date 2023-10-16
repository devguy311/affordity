import React from 'react'
import Seo from "../../component/Seo";
import ChromeExtension from '../../component/chromextension'
import { useTranslation } from "react-i18next";


const Extension = () => {
    const { t } = useTranslation("seo");

    return (
        <>
            <Seo
                title={t("chromeExtension.title")}
                description={t("chromeExtension.description") as string}
            />

            <ChromeExtension />
        </>
    );
}

export default Extension