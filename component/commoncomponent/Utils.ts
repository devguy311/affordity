import { getAssetUrl } from "../../util/SiteUtil";
import { TFunction } from "i18next";

export const AppsFeatures = (t: TFunction<"common">) => [
    {
        id: 1,
        title: t("feature1Title"),
        description: t("feature1Description"),
        logo: getAssetUrl('redesign/shopping_no_length.svg')
    },
    {
        id: 2,
        title: t("feature2Title"),
        description: t("feature2Description"),
        logo: getAssetUrl('redesign/shopping_coffee.svg')
    },
    {
        id: 3,
        title: t("feature3Title"),
        description: t("feature3Description"),
        logo: getAssetUrl('redesign/shopping_curve.svg')
    }
]