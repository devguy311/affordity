import React from 'react'
import Seo from "../../component/Seo"
import ShoppingAssisant from '../../component/shoppingassistantform/form'
import { useTranslation } from "react-i18next";

const ShoppingAssistantView = () => {
    const { t } = useTranslation("seo");

    return (
        <>
            <Seo
                title={t("shoppingAssistant.title")}
                description={t("shoppingAssistant.description") as string}
            />

            <ShoppingAssisant />
        </>
    );
}

export default ShoppingAssistantView