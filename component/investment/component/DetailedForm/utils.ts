import axios from "axios";
import { object, number, string } from "yup";
import { getInvestmentDetailedApiUrl } from "../../../../constant/apiConstant";
import { CompletedTransactionImpactType } from "../../type";
import { catchError } from "../../../../util/common-function";
import { DetailedFormType } from "./type";
import { format } from "date-fns";

export const DetailFormValidation = object().shape({
  monthlyDeposit: number()
    .min(0, "Deposit cannot be negative")
    .required("Required"),
  initialDeposit: number()
    .min(0, "Deposit cannot be negative")
    .required("Required"),
  investmentDuration: number()
    .min(0, "Must be between 0 - 100")
    .max(100, "Must be between 0 - 100")
    .typeError("Enter valid number"),
  financialRisk: string().required("Required"),
  riskyAssets: string().required("Required"),
  investmentConcept: string().required("Required"),
  investmentProduct: string().required("Required"),
  stockMarket: string().required("Required"),
  action: string().required("Required"),
});

const reverseTransformData = (values: DetailedFormType) => {
  return {
    questionnaire: {
      question_1: values.risks.action,
      question_2: values.risks.financialRisk,
      question_3: values.risks.investmentConcept,
      question_4: values.risks.investmentProduct,
      question_5: values.risks.riskyAssets,
      question_6: values.risks.stockMarket,
    },
    goal_1: {
      initial_deposit: Number(values.goals?.[0]?.data?.initialDeposit),
      monthly_deposit: Number(values.goals?.[0]?.data?.monthlyDeposit),
      investment_duration: Number(values.goals?.[0]?.data?.investmentDuration),
      target_amount: Number(values.goals?.[0]?.data?.targetAmount),
      liquidity_needs: Number(values.goals?.[0]?.data?.liquidity),
      start_date: format(new Date(), "yyyy-MM-dd"),
    },
    goal_2: {
      initial_deposit: Number(values.goals?.[1]?.data?.initialDeposit),
      monthly_deposit: Number(values.goals?.[1]?.data?.monthlyDeposit),
      investment_duration: Number(values.goals?.[1]?.data?.investmentDuration),
      target_amount: Number(values.goals?.[1]?.data?.targetAmount),
      liquidity_needs: Number(values.goals?.[1]?.data?.liquidity),
      start_date: format(new Date(), "yyyy-MM-dd"),
    },
    goal_3: {
      initial_deposit: Number(values.goals?.[2]?.data?.initialDeposit),
      monthly_deposit: Number(values.goals?.[2]?.data?.monthlyDeposit),
      investment_duration: Number(values.goals?.[2]?.data?.investmentDuration),
      target_amount: Number(values.goals?.[2]?.data?.targetAmount),
      liquidity_needs: Number(values.goals?.[2]?.data?.liquidity),
      start_date: format(new Date(), "yyyy-MM-dd"),
    },
  };
};

const transformGoal = (data: any): any => {
  return {
    detailedExplanation: data?.detailed_explanation,
    etfExamples: {
      option1: {
        etfName: data?.etf_examples?.option_1?.etf_name,
        expectedReturn: data?.etf_examples.option_1.expected_return,
        expectedVolatility: data?.etf_examples.option_1.expected_volatility,
        finalAmount: data?.etf_examples.option_1.final_amount,
      },
      option2: data?.etf_examples?.option_2
        ? {
            etfName: data?.etf_examples?.option_2?.etf_name,
            expectedReturn: data?.etf_examples.option_2?.expected_return,
            expectedVolatility:
              data?.etf_examples.option_2?.expected_volatility,
            finalAmount: data?.etf_examples.option_2?.final_amount,
          }
        : undefined,
    },
    goalSummary: {
      horizon: data?.goal_summmary?.horizon,
      startCapital: data?.goal_summmary?.start_capital,
      targetAmount: data?.goal_summmary?.target_amount,
      monthlyDeposits: data?.goal_summmary?.monthly_deposits,
    },
    graph: data?.graph,
    options: {
      option1: data?.options?.option_1,
      option2: data?.options?.option_2,
    },
    portfolioAllocation: {
      option1: data?.portfolio_allocation?.option_1,
      option2: data?.portfolio_allocation?.option_2,
    },
    riskResult: {
      aligned: data?.risk_result?.aligned,
      riskNeeds: data?.risk_result?.risk_needs,
      riskAbility: data?.risk_result?.risk_ability,
      riskTolerance: data?.risk_result?.risk_tolerance,
    },
    strategy: data?.strategy
      ? {
          option1: data?.strategy?.option_1,
          option2: data?.strategy?.option_2,
        }
      : undefined,
  };
};
export const transformInvestmentreturnData = (
  data: any
): CompletedTransactionImpactType => {
  return {
    goal1: data?.goal_1 ? transformGoal(data?.goal_1) : null,
    goal2: data?.goal_2 ? transformGoal(data?.goal_2) : null,
    goal3: data?.goal_3 ? transformGoal(data?.goal_3) : null,
  };
};
export const getInvestmentReturnDetail = (values: DetailedFormType) => {
  return axios
    .post(getInvestmentDetailedApiUrl, reverseTransformData(values))
    .then((res) => {
      // return Promise.resolve(
      //   transformInvestmentreturnData(INVESTMENT_DUMMY_DATA)
      // );
      return Promise.resolve(transformInvestmentreturnData(res.data));
    })
    .catch((err) => {
      catchError(err, "getInvestmentReturnDetail");
      throw new Error(err.message);
    });
};
