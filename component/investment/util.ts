import { getAssetUrl } from "../../util/SiteUtil";
import { TFunction } from "i18next";

import axios from "axios";
import moment from "moment";
import { object, number } from "yup";
import { getInvestmentReturnApiUrl } from "../../constant/apiConstant";
import { catchError } from "../../util/common-function";

import {
  CompletedTransactionImpactType,
  GraphValuesType,
  InvestmentBrakdownPurchase,
  InvestmentFilterType,
  InvestmentReturnType,
  InvestmentTableColumnType,
  OptionAllocationType,
} from "./type";

export const InvestmentFilterInitialValues: InvestmentFilterType = {
  targetAmount: "",
  riskType: "low",
  investmentDuration: "",
  importanceType: "very",
  initialDeposit: "",
  monthlyDeposit: "",
};

export const InvestmentFilterValidationSchema = object().shape({
  investmentDuration: number()
    .min(0, "Must be between 0 - 100")
    .max(100, "Must be between 0 - 100")
    .typeError("Enter valid number"),
  initialDeposit: number()
    .min(0, "Deposit cannot be negative")
    .required("Required"),
  monthlyDeposit: number()
    .min(0, "Deposit cannot be negative")
    .required("Required"),
});

const transformGraphData = (data: any): GraphValuesType[] => {
  if (!data) {
    return [];
  }
  return data.map((item: any) => ({
    name: item.name,
    investmentGrowth: item.investmentGrowth,
    totalDeposit: item.totalDeposit,
    projectedAccountLine1: item.projectedAccountLine1,
    projectedAccountLine2: item.projectedAccountLine2,
    returnOnly: item.returnOnly,
  }));
};

const transformTableData = (data: any): InvestmentTableColumnType => {
  return {
    expectedReturn: data.expected_return,
    expectedVolatility: data.expected_volatility,
    name: data.name,
  };
};
const transformData = (data: any): InvestmentReturnType | null => {
  if (!data) {
    return null;
  }
  return {
    explanationGrowth: data.inv_txt,
    graphValues: transformGraphData(data.graph_values),
    allocation: {
      bonds: data.allocation.bonds,
      cash: data.allocation.cash,
      stocks: data.allocation.stocks,
    },
    tableData: {
      bonds: transformTableData(data.table_data.bonds),
      cash: transformTableData(data.table_data.cash),
      stock: transformTableData(data.table_data.stock),
    },
  };
};

const transformGoal = (data: any): any => {
  return {
    detailedExplanation: data.detailed_explanation,
    etfExamples: {
      option1: {
        etfName: data?.etf_examples?.option_1?.etf_name,
        expectedReturn: data.etf_examples.option_1.expected_return,
        expectedVolatility: data.etf_examples.option_1.expected_volatility,
        finalAmount: data.etf_examples.option_1.final_amount,
      },
      option2: data.etf_examples?.option_2
        ? {
          etfName: data.etf_examples?.option_2?.etf_name,
          expectedReturn: data.etf_examples.option_2?.expected_return,
          expectedVolatility: data.etf_examples.option_2?.expected_volatility,
          finalAmount: data.etf_examples.option_2?.final_amount,
        }
        : undefined,
    },
    goalSummary: {
      horizon: data.goal_summary.horizon,
      startCapital: data.goal_summary.start_capital,
      targetAmount: data.goal_summary.target_amount,
      monthlyDeposits: data.goal_summary.monthly_deposits,
    },
    graph: data.graph,
    options: {
      option1: data.options.option_1,
      option2: data.options.option_2,
    },
    portfolioAllocation: {
      option1: data.portfolio_allocation.option_1,
      option2: data.portfolio_allocation.option_2,
    },
    riskResult: {
      aligned: data.risk_result.aligned,
      riskNeeds: data.risk_result.risk_needs,
      riskAbility: data.risk_result.risk_ability,
      riskTolerance: data.risk_result.risk_tolerance,
    },
    strategy: data.strategy
      ? {
        option1: data.strategy.option_1,
        option2: data.strategy.option_2,
      }
      : undefined,
  };
};
export const transformInvestmentreturnData = (
  data: any
): CompletedTransactionImpactType => {
  return {
    goal1: transformGoal(data.goal_1),
    goal2: transformGoal(data.goal_2),
    goal3: transformGoal(data.goal_3),
  };
};
export const getInvestmentReturnDetail = (values: InvestmentFilterType) => {
  return axios
    .post(getInvestmentReturnApiUrl, {
      "initial deposit": Number(values.initialDeposit),
      "monthly deposit": Number(values.monthlyDeposit),
      "risk comfort": values.riskType,
      "goal importance": values.importanceType,
      "investment duration": Number(values.investmentDuration || 0),
      "target amount": Number(values.targetAmount || 0),
      start_date: moment().format("YYYY-MM-DD"),
    })
    .then((res) => {
      return Promise.resolve(transformData(res.data));
    })
    .catch((err) => {
      catchError(err, "getInvestmentReturnDetail");
      throw new Error(err.message);
    });
};

export const investmentFormHelpData = (t: TFunction<"investmentviewoverview">) => [
  {
    id: 1,
    title: t("helpTitle1"),
    description:
      t("helpDescription1"),
    logo: getAssetUrl("redesign/solar.svg"),
  },
  {
    id: 2,
    title: t("helpTitle2"),
    description:
      t("helpDescription2"),
    logo: getAssetUrl("redesign/hand.svg"),
  },
  {
    id: 3,
    title: t("helpTitle3"),
    description:
      t("helpDescription3"),
    logo: getAssetUrl("redesign/dollar.svg"),
  },
];

export const getInvestmentExpenseMaximumHeight = (
  option1?: OptionAllocationType,
  option2?: OptionAllocationType
) => {
  if (option1 && option2) {
    return Math.max(
      option1.bonds + option1.cash + option1.stock,
      option2.bonds + option2.cash + option2.stock
    );
  }
  if (option1) {
    return Math.max(option1.bonds + option1.cash + option1.stock);
  }

  return 100;
};

export const getInvestmentQuickWayExpenseMaximumHeight = (
  beforePurchase: InvestmentBrakdownPurchase
) => {
  return Math.max(
    beforePurchase.bonds + beforePurchase.cash + beforePurchase.stocks
  );
};

export const trnasformGraphDetail = (
  graphData: CompletedTransactionImpactType
) => {
  const goal1 = {
    name: "Goal 1",
    data: graphData?.goal1?.graph
      ? Object.entries(graphData.goal1.graph).map(([key, value]) => ({
        category: key,
        value: value,
      }))
      : [],
  };

  const goal2 = {
    name: "Goal 2",
    data: graphData?.goal2?.graph
      ? Object.entries(graphData.goal2.graph).map(([key, value]) => ({
        category: key,
        value: value,
      }))
      : [],
  };

  const goal3 = {
    name: "Goal 3",
    data: graphData?.goal3?.graph
      ? Object.entries(graphData.goal3.graph).map(([key, value]) => ({
        category: key,
        value: value,
      }))
      : [],
  };

  return [goal1, goal2, goal3];
};

export const getTabGoal = (t: TFunction<"investmentdetailedResult">) => [
  {
    label: t("goal1"),
    value: "goal1",
  },
  {
    label: t("goal2"),
    value: "goal2",
  },
  {
    label: t("goal3"),
    value: "goal4",
  },
];

export const getInvestmentGraphLineColor = (name: string) => {
  if (name === "Goal 1") {
    return "#096C49";
  }
  if (name === "Goal 2") {
    return "#00BB78";
  }

  return "#00BBA5";
};