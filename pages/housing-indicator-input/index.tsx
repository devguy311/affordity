import React, { useEffect } from "react";
import Seo from "../../component/Seo";
import HousingCostIndicatorInput from "../../component/housingindicator/Input"
import { useTranslation } from "react-i18next";

const HCIInput = () => {
    const { t } = useTranslation("seo");

    return (
        <>
            <Seo
                title={t("housingIndicator.title")}
                description={t("housingIndicator.description") as string}
            />

            <HousingCostIndicatorInput />
        </>
    );
};

export default HCIInput;