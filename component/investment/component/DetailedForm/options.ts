import { TFunction } from "i18next";

export const financialRisks = (t: TFunction<"investmentdetailedInputs">) => [
  {
    value: "very-low",
    label: t("veryLow"),
  },
  {
    value: "low",
    label: t("low"),
  },
  {
    value: "moderate",
    label: t("moderate"),
  },
];

export const riskyAssets = (t: TFunction<"investmentdetailedInputs">) => [
  {
    value: "maximize-safety",
    label: t("maximizeSafety"),
  },
  {
    value: "mostly-safe",
    label: t("mostlySafe"),
  },
  {
    value: "mix-safety-return",
    label: t("mixsafetyreturn"),
  },
  {
    value: "mostly-return",
    label: t("mostlyReturn"),
  },
  {
    value: "maximize-return",
    label: t("maximizeReturn"),
  },
];

export const investmentConcepts = (t: TFunction<"investmentdetailedInputs">) => [
  {
    value: "not-at-all",
    label: t("notatall"),
  },
  {
    value: "minimally",
    label: t("minimally"),
  },
  {
    value: "moderately",
    label: t("moderately"),
  },
  {
    value: "competent",
    label: t("competent"),
  },
  {
    value: "very",
    label: t("very"),
  },
];

export const investmentProducts = (t: TFunction<"investmentdetailedInputs">) => [
  {
    value: "none",
    label: t("none"),
  },
  {
    value: "very-little",
    label: t("veryLittle"),
  },
  {
    value: "some",
    label: t("some"),
  },
  {
    value: "modest",
    label: t("modest"),
  },
  {
    value: "extensive",
    label: t("extensive"),
  },
];

export const stockMarkets = (t: TFunction<"investmentdetailedInputs">) => [
  {
    value: "very-risky",
    label: t("veryRisky"),
  },
  {
    value: "somewhat-risky",
    label: t("somewhatRisky"),
  },
  {
    value: "neutral",
    label: t("neutral"),
  },
  {
    value: "somewhat-safe",
    label: t("somewhatSafe"),
  },
  {
    value: "very-safe",
    label: t("verySafe"),
  },
];

export const actions = (t: TFunction<"investmentdetailedInputs">) => [
  {
    value: "sole-investment",
    label: t("soleInvestment"),
  },
  {
    value: "did-nothing",
    label: t("didNothing"),
  },
  {
    value: "purchased-more",
    label: t("purchasedMore"),
  },
];
