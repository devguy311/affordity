import { getAssetUrl } from "../../util/SiteUtil";
import { TFunction } from "i18next";

export const featureData = (t: TFunction<"homepage">) => [
  {
    id: 1,
    title: t("feature1"),
    description: t("feature1Description"),
    image: getAssetUrl("redesign/privacy.svg"),
  },
  {
    id: 2,
    title: t("feature2"),
    description: t("feature2Description"),
    image: getAssetUrl("redesign/secure.svg"),
  },
  {
    id: 3,
    title: t("feature3"),
    description: t("feature3Description"),
    image: getAssetUrl("redesign/safety.svg"),
  },

];

export const BudgetingInfoType = (t: TFunction<"homepage">) => [
  // export const BudgetingInfoType: SiteFeatureType[] = [
  {
    id: 1,
    title: t("shoppingTitle"),
    description: t("shoppingDescription"),
    logo: getAssetUrl("redesign/shoppingAssistantIcon.svg"),
    backImage: getAssetUrl("redesign/shoppingBack.webp"),
    url: "/shopping-assistant-overview",
  },
  {
    id: 2,
    title: t("budgetruleTitle"),
    description: t("budgetruleDescription"),
    logo: getAssetUrl("redesign/budgetRuleIcon.svg"),
    backImage: getAssetUrl("redesign/503020back.webp"),
    url: "/budget-rule",
  },
  {
    id: 3,
    title: t("chromeTitle"),
    description: t("chromeDescription"),
    logo: getAssetUrl("redesign/chromeExtensionIcon.svg"),
    backImage: getAssetUrl("redesign/chromeback.webp"),
    url: "/extension",
  },
];

export const BenchmarkInfoType = (t: TFunction<"homepage">) => [
  {
    id: 1,
    title: t("livingTitle"),
    description: t("livingDescription"),
    logo: getAssetUrl("redesign/livingcostindicatorIcon.svg"),
    backImage: getAssetUrl("redesign/livingback.webp"),
    url: "/living-indicator",
  },
  {
    id: 2,
    title: t("housingTitle"),
    description: t("housingDescription"),
    logo: getAssetUrl("redesign/realestateindicatorIcon.svg"),
    backImage: getAssetUrl("redesign/realback.webp"),
    url: "/housing-indicator",
  },
  {
    id: 3,
    title: t("transportTitle"),
    description: t("transportDescription"),
    logo: getAssetUrl("redesign/transportindicatorIcon.svg"),
    backImage: getAssetUrl("redesign/transportback.webp"),
    url: "",
  },
];

export const InvestmentInfoType = (t: TFunction<"homepage">) => [
  {
    id: 1,
    title: t("retirementTitle"),
    description: t("retirementDescription"),
    logo: getAssetUrl("redesign/retirementplanner.svg"),
    backImage: getAssetUrl("redesign/retirementback.webp"),
    url: "/retirement-planner-overview",
  },
  {
    id: 2,
    title: t("investmentTitle"),
    description: t("investmentDescription"),
    logo: getAssetUrl("redesign/investmentview.svg"),
    backImage: getAssetUrl("redesign/investmentback.webp"),
    url: "/investment-view-overview",
  },
  {
    id: 3,
    title: t("roboTitle"),
    description: t("roboDescription"),
    logo: getAssetUrl("redesign/roboIcon.svg"),
    backImage: getAssetUrl("redesign/roboback.webp"),
    url: "",
  },
];

export const getApplicationFeature = (t: TFunction<"homepage">) => [
  {
    id: 1,
    title: t("appfeatureTitle1"),
    subTitle: t("appfeaturesubTitle1"),
    title1: t("appfeatureDesc1A"),
    title2: t("appfeatureDesc1B"),
    title3: t("appfeatureDesc1C"),
    icon_0: getAssetUrl("redesign/feature-professional.svg"),
    icon_1: getAssetUrl("redesign/feat-analytics.svg"),
    icon_2: getAssetUrl("redesign/feat-time-save.svg"),
    icon_3: getAssetUrl("redesign/feat-grow.svg"),
  },
  {
    id: 2,
    title: t("appfeatureTitle2"),
    subTitle: t("appfeaturesubTitle2"),
    title1: t("appfeatureDesc2A"),
    title2: t("appfeatureDesc2B"),
    title3: t("appfeatureDesc2C"),

    icon_0: getAssetUrl("redesign/feature-entrepreneur.svg"),
    icon_1: getAssetUrl("redesign/feat-connect.svg"),
    icon_2: getAssetUrl("redesign/feat-live.svg"),
    icon_3: getAssetUrl("redesign/feat-collab.svg"),
  },
  {
    id: 3,
    title: t("appfeatureTitle3"),
    subTitle: t("appfeaturesubTitle3"),
    title1: t("appfeatureDesc3A"),
    title2: t("appfeatureDesc3B"),
    title3: t("appfeatureDesc3C"),

    icon_0: getAssetUrl("redesign/feature-family.svg"),
    icon_1: getAssetUrl("redesign/feat-house.svg"),
    icon_2: getAssetUrl("redesign/feat-target.svg"),
    icon_3: getAssetUrl("redesign/feat-book.svg"),
  },


];


