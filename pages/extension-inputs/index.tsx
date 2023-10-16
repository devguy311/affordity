import React from 'react'
import Seo from "../../component/Seo"
import ExtensionInputs from '../../component/chromextension/ChromeExtensionInput'
import { useTranslation } from "react-i18next";

const ExtensionInputsPage = () => {
    const { t } = useTranslation("seo");

    return (
        <>
            <Seo
                title={t("chromeExtension.title")}
                description={t("chromeExtension.description") as string}
            />


            <ExtensionInputs />
        </>
    );
}

export default ExtensionInputsPage