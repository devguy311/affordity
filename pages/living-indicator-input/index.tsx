import React, { useEffect } from "react";
import Seo from "../../component/Seo";

import LivingCostIndicatorInput from "../../component/livingcostindicator/LivingCostIndicatorInput"
import { useTranslation } from "react-i18next";

const LCIInput = () => {
    const { t } = useTranslation("seo");

    return (
        <>
            <Seo
                title={t("livingIndicator.title")}
                description={t("livingIndicator.description") as string}
            />

            <LivingCostIndicatorInput />
        </>
    );
};

export default LCIInput;