import { TFunction } from "i18next";
import { getAssetUrl } from "../util/SiteUtil";

export type InvestmentOptionType = {
  value: string;
  label: string;
  isRecommended: boolean;
};

export const SaveInvestmentOption: InvestmentOptionType[] = [
  {
    label: "0",
    value: "0",
    isRecommended: false,
  },
  {
    label: "10K",
    value: "10000",
    isRecommended: false,
  },
  {
    label: "40K",
    value: "40000",
    isRecommended: true,
  },
  {
    label: "100K",
    value: "100000",
    isRecommended: false,
  },
];

export const SaveMonthInvestmentOption: InvestmentOptionType[] = [
  {
    label: "100",
    value: "100",
    isRecommended: false,
  },
  {
    label: "250",
    value: "250",
    isRecommended: false,
  },
  {
    label: "500",
    value: "500",
    isRecommended: true,
  },
  {
    label: "1K",
    value: "1000",
    isRecommended: false,
  },
];

export const ComfortableOptions = (
  t: TFunction<"investmentview", undefined, "investmentview">
) => [
    {
      value: "low",
      label: t("lowRisk"),
    },
    {
      value: "medium",
      label: t("mediumRisk"),
    },
    {
      value: "high",
      label: t("highRisk"),
    },
  ];

export const genderOptions = (
  t: TFunction<"comparator", undefined, "comparator">
) => [
    {
      label: t("male") || "",
      value: "M",
    },
    {
      label: t("female") || "",
      value: "F",
    },
    {
      label: t("Other") || "",
      value: "O",
    },
  ];


export const ImportantOptions = (
  t: TFunction<"investmentview", undefined, "investmentview">
) => [
    {
      value: "very",
      label: t("very"),
    },
    {
      value: "medium",
      label: t("medium"),
    },
    {
      value: "only nice to have",
      label: t("onlyNiceToHave"),
    },
  ];

export const languagesOptions = [
  {
    id: 1,
    value: "en",
    text: "English",
    icon: getAssetUrl(""),
  },
  // {
  //   id: 2,
  //   value: "de",
  //   text: "DE",
  //   icon: getAssetUrl(""),
  // },
  {
    id: 3,
    value: "fr",
    text: "Français",
    icon: getAssetUrl(""),
  },
];

const country = [
  "Albania",
  "Austria",
  "Belgium",
  "Bulgaria",
  "Croatia",
  "Cyprus",
  "Czechia",
  "Denmark",
  "Estonia",
  "Euro Area",
  "Finland",
  "France",
  "Germany",
  "Greece",
  "Hungary",
  "Iceland",
  "Ireland",
  "Italy",
  "Kosovo",
  "Latvia",
  "Lithuania",
  "Luxembourg",
  "Malta",
  "Montenegro",
  "Netherlands",
  "North Macedonia",
  "Norways",
  "Poland",
  "Portugal",
  "Romania",
  "Serbia",
  "Slovakia",
  "Slovenia",
  "Spain",
  "Sweden",
  "Switzerland",
  "Turkey",
  "United Kingdom",
];
export const countryOptions = country.map((item) => ({
  label: item,
  value: item,
}));



export const costIndicatorOptions = (
  t: TFunction<"comparator", undefined, "comparator">
) => [
    {
      label: t("monthly") || "",
      value: "monthly",
    },
    {
      label: t("yearly") || "",
      value: "yearly",
    },
  ];

export const financingOption = (
  t: TFunction<"comparator", undefined, "comparator">
) => [
    {
      label: t("none"),
      value: "none",
    },
    {
      label: t("loan"),
      value: "loan",
    },
    {
      label: t("leasing"),
      value: "leasingTerms",
    },
  ];

export const currencyOption = [
  {
    label: "USD",
    value: "USD",
  },
  {
    label: "EUR",
    value: "EUR",
  },
  {
    label: "CHF",
    value: "CHF",
  },
  {
    label: "GBP",
    value: "GBP",
  },
  {
    label: "INR",
    value: "INR",
  },
  {
    label: "CAD",
    value: "CAD",
  },
];
