import React, { useEffect } from 'react'
import Seo from "../../component/Seo"
import ShoppingAssistantOverview from '../../component/shoppingassistantform'
import { useTranslation } from "react-i18next";

const ShoppingAsistant = () => {
    const { t } = useTranslation("seo");

    return (
        <>
            <Seo
                title={t("shoppingAssistant.title")}
                description={t("shoppingAssistant.description") as string}
            />


            <ShoppingAssistantOverview />
        </>
    );
}

export default ShoppingAsistant