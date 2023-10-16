import { getAssetUrl } from "../../util/SiteUtil";
import { ref, object, number } from "yup";
import { TFunction } from "i18next";

const min_value_msg = "Value must be positive";
const max_value_msg = "This value is too large";
const type_error_msg = "Enter a number";
const required_field_msg = "This field is required";

export const validationSchema = object().shape({
  monthlySalary: number()
    .min(0, min_value_msg)
    .max(999999, max_value_msg)
    .typeError(type_error_msg)
    .required(required_field_msg),

  monthlySavings: number()
    .min(0, min_value_msg)
    .max(999999, max_value_msg)
    .typeError(type_error_msg)
    .lessThan(ref("monthlySalary"), "Savings to be lower than salary"),

  currentCapital: number()
    .min(0, min_value_msg)
    .max(999999, max_value_msg)
    .typeError(type_error_msg),
});

export const extensionInfo = (t: TFunction<"extension">) => [
  {
    id: 1,
    title: t("infoCardTitle1"),
    description: t("infoCardDesc1"),
    logo: getAssetUrl("redesign/shopping_no_length.svg"),
  },
  {
    id: 2,
    title: t("infoCardTitle2"),
    description: t("infoCardDesc2"),
    logo: getAssetUrl("redesign/shopping_coffee.svg"),
  },
  {
    id: 3,
    title: t("infoCardTitle3"),
    description: t("infoCardDesc3"),
    logo: getAssetUrl("redesign/shopping_curve.svg"),
  },
];


export const extensionFormHelpData = (t: TFunction<"extension">) => [
  {
    id: 1,
    title: t("helpTitle1"),
    description: t("helpDescription1"),
    logo: getAssetUrl('redesign/tag.svg')
  },
  {
    id: 2,
    title: t("helpTitle2"),
    description: t("helpDescription2"),
    logo: getAssetUrl('redesign/alarm.svg')
  },
  {
    id: 3,
    title: t("helpTitle3"),
    description: t("helpDescription3"),
    logo: getAssetUrl('redesign/solar.svg')
  }
];
