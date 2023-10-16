import { getAssetUrl } from "../../util/SiteUtil";
import { TFunction } from "i18next";

export const AppsFeatures = (t: TFunction<"dashboardOverview">) => [
    {
        id: 1,
        title: t("featureTitle1"),
        description: t("featureDescription1"),
        logo: getAssetUrl('redesign/shopping_no_length.svg')
    },
    {
        id: 2,
        title: t("featureTitle2"),
        description: t("featureDescription2"),
        logo: getAssetUrl('redesign/shopping_coffee.svg')
    },
    {
        id: 3,
        title: t("featureTitle3"),
        description: t("featureDescription3"),
        logo: getAssetUrl('redesign/shopping_curve.svg')
    }
]

export const UserCases = (t: TFunction<"dashboardOverview">) => [
    {
        id: 1,
        title: t("UserTitle1"),
        description: t("UserDescription1"),
    },
    {
        id: 2,
        title: t("UserTitle2"),
        description: t("UserDescription2"),
    },
    {
        id: 3,
        title: t("UserTitle3"),
        description: t("UserDescription3"),
    }
]