import { getAssetUrl } from "../../util/SiteUtil";
import { TFunction } from "i18next";

import axios from "axios";
import { number, object } from "yup";
import { getInvestmentCalculatorApiUrl } from "../../constant/apiConstant";
import { catchError } from "../../util/common-function";
import {
  AllocationDataType,
  GraphDataType,
  InvestmentCalcultorType,
  InvetmentReturnGraphType,
  RetirementTableColumnType,
} from "./type";

const transformGraphData = (data: any): GraphDataType[] => {
  if (!data) {
    return [];
  }
  const aggressiveData = Object.entries(data.aggressive.graph_data);
  const conservativeData = Object.values(data.conservative.graph_data);
  const transformData = aggressiveData.map((item, index) => ({
    name: `${item[0]} year`,
    aggressiveData: item[1],
    conservativeData: conservativeData[index],
  }));
  return transformData as GraphDataType[];
};

const transformAllocationData = (data: any): AllocationDataType => {
  return {
    bonds: data.bonds,
    cash: data.cash,
    stocks: data.stocks,
  };
};
const transformTableData = (data: any): RetirementTableColumnType => {
  return {
    expectedReturn: data.expected_return,
    expectedVolatility: data.expected_volatility,
    name: data.name,
  };
};

const transformData = (res: any): InvetmentReturnGraphType | null => {
  if (!res) {
    return null;
  }
  return {
    aggressive: {
      retirementIncome: res.aggressive.retirement_income,
      totalInvestment: res.aggressive.total_investment,
      allocation: {
        after: transformAllocationData(res.aggressive.allocation.after),
        before: transformAllocationData(res.aggressive.allocation.before),
      },
      tableData: {
        bonds: transformTableData(res.aggressive.table_data.bonds),
        cash: transformTableData(res.aggressive.table_data.cash),
        stock: transformTableData(res.aggressive.table_data.stock),
      },
    },
    conservative: {
      retirementIncome: res.conservative.retirement_income,
      totalInvestment: res.conservative.total_investment,
      allocation: {
        after: transformAllocationData(res.conservative.allocation.after),
        before: transformAllocationData(res.conservative.allocation.before),
      },
      tableData: {
        bonds: transformTableData(res.conservative.table_data.bonds),
        cash: transformTableData(res.conservative.table_data.cash),
        stock: transformTableData(res.conservative.table_data.stock),
      },
    },
    graphData: transformGraphData(res),
  };
};
export const getInvestmentCalculatorDetail = (
  values: InvestmentCalcultorType
) => {
  return axios
    .post(getInvestmentCalculatorApiUrl, {
      age_start: values.age[0],
      age_end: values.age[1],
      start_capital: values.customSaveAmount
        ? Number(values.customSaveAmount)
        : Number(values.saveAmount),
      monthly_saving: values.customSaveEachMonth
        ? Number(values.customSaveAmount)
        : Number(values.saveEachMonth),
    })
    .then((res) => {
      return Promise.resolve(transformData(res.data));
    })
    .catch((err) => {
      catchError(err, "getInvestmentCalculatorDetail");
      throw new Error(err.message);
    });
};

export const InvestmentCalculatorValidationSchema = object().shape({
  customSaveAmount: number().typeError("Please enter valid number"),
  customSaveEachMonth: number().typeError("Please enter valid number"),
});

export const retirementFormHelpData = (t: TFunction<"retirementplanneroverview">) => [
  {
    id: 1,
    title: t("helpTitle1"),
    description: t("helpDescription1"),
    logo: getAssetUrl("redesign/solar.svg"),
  },
  {
    id: 2,
    title: t("helpTitle2"),
    description: t("helpDescription2"),
    logo: getAssetUrl("redesign/hand.svg"),
  },
  {
    id: 3,
    title: t("helpTitle3"),
    description: t("helpDescription3"),
    logo: getAssetUrl("redesign/dollar.svg"),
  },
];

export const getRetirementMaximumHeight = (
  beforePurchase: AllocationDataType,
  afterPurchase: AllocationDataType
) => {
  return Math.max(
    beforePurchase.bonds + beforePurchase.cash + beforePurchase.stocks,
    afterPurchase.bonds + afterPurchase.cash + afterPurchase.stocks
  );
};
