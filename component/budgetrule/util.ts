import { getAssetUrl } from "../../util/SiteUtil";
import { InfoCardType } from "../commoncomponent/component/type";
import { ShoppingAssistantHelpType } from "../shoppingassistantform/type";

/* eslint-disable no-console */
import axios from "axios";
import { number, object } from "yup";
import { getBudgetRuleApiUrl } from "../../constant/apiConstant";
import { catchError } from "../../util/common-function";
import { TFunction } from "i18next";

export type BudgetRuleResultType = {
  needs?: string;
  wants?: string;
  savings?: string;
};

const transformData = (data: any) => {
  return {
    needs: data?.needs,
    wants: data?.wants,
    savings: data?.savings,
    usr_needs: data?.usr_needs,
    usr_savings: data?.usr_savings,
    usr_wants: data?.usr_wants,
  };
};

export type BudgetType = {
  income: string;
};

export const BudgetRuleValidationSchema = object().shape({
  income: number()
    .typeError("Please enter number")
    .required("Please enter your income"),
  needs: number()
    .typeError("Please enter number")
    .required("Please enter the amount spent on needs"),
  wants: number()
    .typeError("Please enter number")
    .required("Please enter the amount spent on wants"),
});

export const getBudgetRule = (income: string, needs: string, wants: string) => {
  return axios
    .post(getBudgetRuleApiUrl, {
      income: Number(income),
      needs: Number(needs),
      wants: Number(wants),
    })
    .then((res) => {
      return Promise.resolve(transformData(res.data));
    })
    .catch((err) => {
      catchError(err, "getBudgetRule");
      throw new Error(err.message);
    });
};

export const budgetInfo = (t: TFunction<"budgetrule">) => [
  {
    id: 1,
    title: t("infoCardTitle1"),
    description:
      t("infoCardDescription1"),
    logo: getAssetUrl("redesign/shopping_no_length.svg"),
  },
  {
    id: 2,
    title: t("infoCardTitle2"),
    description:
      t("infoCardDescription2"),
    logo: getAssetUrl("redesign/shopping_coffee.svg"),
  },
  {
    id: 3,
    title: t("infoCardTitle3"),
    description:
      t("infoCardDescription3"),
    logo: getAssetUrl("redesign/shopping_curve.svg"),
  },
];


export const budgetFormHelpData = (t: TFunction<"budgetrule">) => [
  {
    id: 1,
    title: t("helpTitle1"),
    description: t("helpDescription1"),
    logo: getAssetUrl('redesign/piggybank.svg')
  },
  {
    id: 2,
    title: t("helpTitle2"),
    description: t("helpDescription2"),
    logo: getAssetUrl('redesign/piggybank.svg')
  },
  {
    id: 3,
    title: t("helpTitle3"),
    description: t("helpDescription3"),
    logo: getAssetUrl('redesign/piggybank.svg')
  }
];