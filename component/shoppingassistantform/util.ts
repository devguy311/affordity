import { ref, object, number, mixed, string } from "yup";
import moment from "moment";
import { IUser, IUserState } from "../../redux/user";
import { IAuthState } from "../../redux/auth";
import { FinancialGoalType } from "./type";
import { getAssetUrl } from "../../util/SiteUtil";
import axios from "axios";
import { getDetaileGraphApiUrl } from "../../constant/apiConstant";
import { catchError } from "../../util/common-function";
import {
  AffordifiedGraphType,
  DetailedGraphType,
  MetricType,
  UserGraphType,
  SavingComparisonType,
} from "./type";
import { TFunction } from "i18next";

export const financialGoalInitialValue: FinancialGoalType = {
  currentCapital: "",
  monthlySavings: "",
  monthlySalary: "",
  price: "",
  purchaseDate: "",
  loanAmount: "",
  loanInterestRate: "",
  loanTerm: "",
  maintenance: "",
  insurance: "",
  financingAdviceType: "loan",
  monthlyPayment: "",
  downPayment: "",
  leasingLength: "",
  isLoanAmountInValue: true,
  isInsuranceInValue: true,
  isLoanInterestInValue: false,
  isMaintenanceInValue: true,
  isDownPaymentInValue: false,
};

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

  price: number()
    .min(0, min_value_msg)
    .max(999999, max_value_msg)
    .typeError(type_error_msg)
    .required(required_field_msg),

  purchaseDate: string().required(required_field_msg),

  maintenance: mixed().when("isMaintenanceInValue", {
    is: (value: boolean) => !value,
    then: number()
      // when a percentage
      .min(0, min_value_msg)
      .max(100, max_value_msg)
      .typeError(type_error_msg),
    otherwise: number()
      // when a value
      .min(0, min_value_msg)
      .max(999999, max_value_msg)
      .typeError(type_error_msg),
  }),
  insurance: mixed().when("isInsuranceInValue", {
    is: (value: boolean) => !value,
    then: number()
      // when a percentage
      .min(0, min_value_msg)
      .max(100, max_value_msg)
      .typeError(type_error_msg),
    otherwise: number()
      // when a value
      .min(0, min_value_msg)
      .max(999999, max_value_msg)
      .typeError(type_error_msg),
  }),

  loanAmount: mixed().when("isLoanAmountInValue", {
    is: (value: boolean) => !value,
    then: number()
      // when percentage is selected
      .typeError("Please enter number")
      .min(0, min_value_msg)
      .max(100, max_value_msg),
    otherwise: number()
      // when value is selected
      .min(0, min_value_msg)
      .max(999999, max_value_msg)
      .typeError(type_error_msg)
      .lessThan(ref("price"), "Loan to be lower than the purchase price"),
  }),
  loanTerm: number()
    .typeError("Please enter number")
    .min(0, min_value_msg)
    .max(20, max_value_msg),

  loanInterestRate: mixed().when("isLoanInterestInValue", {
    is: (value: boolean) => !value,
    then: number()
      // when percentage is selected
      .min(0, min_value_msg)
      .max(100, max_value_msg)
      .typeError(type_error_msg),
    otherwise: number()
      // when value is selected
      .min(0, min_value_msg)
      .max(999999, max_value_msg)
      .typeError(type_error_msg),
  }),

  monthlyPayment: number()
    .min(0, min_value_msg)
    .max(999999, max_value_msg)
    .typeError(type_error_msg)
    .lessThan(
      ref("downPayment"),
      "Monthly payments to be lower than the downpayment"
    ),

  downPayment: number()
    .min(0, min_value_msg)
    .max(999999, max_value_msg)
    .typeError(type_error_msg)
    .lessThan(ref("price"), "Downpayment to be lower than the purchase price"),
});

export const getFinancialAdvice = async (
  value: FinancialGoalType,
  user: IUserState,
  auth: IAuthState
) => {
  const purchaseDate = moment(value.purchaseDate);
  const relevant_user_input = {
    revenue: Number(value.monthlySalary),
    saving: Number(value.monthlySavings),
    price: Number(value.price),
    start_capital: Number(value.currentCapital),
    loan: Number(value.loanAmount) || 0,
    int_rate: Number(value.loanInterestRate) || 0,
    maintenance: Number(value.maintenance) || 0,
    purchase_date: purchaseDate.format("YYYY-MM-DD"),
    start_date: moment().format("YYYY-MM-DD"),
    loan_term: value.loanTerm,
    insurance: value.insurance,
    financingAdviceType: value.financingAdviceType,
    monthlyPayment: Number(value.monthlyPayment) || 0,
    downPayment: Number(value.downPayment) || 0,
    leasingLength: value.leasingLength,
    amountInValue: value.isLoanAmountInValue,
    insuranceInValue: value.isInsuranceInValue,
    interestInValue: value.isLoanInterestInValue,
    maintenanceInValue: value.isMaintenanceInValue,
    downPaymentInValue: value.isDownPaymentInValue,
  };

  if (user && auth.authenticated) {
    const updatedFinancesUser: IUser = {
      displayName: user.displayName,
      email: user.email,
      phoneNumber: user.phoneNumber,
      photoURL: user.photoURL,
      uid: user.uid,
      finances: {
        revenue: relevant_user_input.revenue,
        saving: relevant_user_input.saving,
        price: relevant_user_input.price,
        startDate: relevant_user_input.start_date,
        startCapital: relevant_user_input.start_capital,
        loan: relevant_user_input.loan,
        interestRate: relevant_user_input.int_rate,
        maintenance: relevant_user_input.maintenance,
        purchaseDate: relevant_user_input.purchase_date,
        loanTerm: Number(relevant_user_input.loan_term),
        insurance: Number(relevant_user_input.insurance),
        financingAdviceType: relevant_user_input.financingAdviceType,
        monthlyPayment: relevant_user_input.monthlyPayment,
        downPayment: relevant_user_input.downPayment,
        leasingLength: Number(relevant_user_input.leasingLength),
        amountInValue: relevant_user_input.amountInValue,
        insuranceInValue: relevant_user_input.insuranceInValue,
        interestInValue: relevant_user_input.interestInValue,
        maintenanceInValue: relevant_user_input.maintenanceInValue,
        downPaymentInValue: relevant_user_input.downPaymentInValue,
      },
    };
    return Promise.resolve(updatedFinancesUser);
  }
  return Promise.resolve();
};

export const reverseGraphTranformData = (values: FinancialGoalType) => {
  return {
    revenue: Number(values.monthlySalary),
    saving: values.monthlySavings ? Number(values.monthlySavings) : 0,
    price: Number(values.price),
    start_capital: values.currentCapital
      ? Number(values.currentCapital)
      : undefined,
    loan:
      values.financingAdviceType === "loan" && values.loanAmount
        ? {
          val: Number(values.loanAmount),
          unit: !values.isLoanAmountInValue ? "percent" : "value",
        }
        : values.financingAdviceType === "leasingTerms" && values.downPayment
          ? {
            val: Number(values.price) - Number(values.downPayment),
            unit: "value",
          }
          : undefined,
    loan_term:
      values.financingAdviceType === "loan" &&
        values.loanAmount &&
        values.loanTerm
        ? Number(values.loanTerm)
        : values.financingAdviceType === "leasingTerms" &&
          values.downPayment &&
          values.leasingLength
          ? values.leasingLength
          : undefined,
    int_rate:
      values.loanAmount && values.loanInterestRate
        ? {
          value: Number(values.loanInterestRate),
          unit: !values.isLoanInterestInValue ? "percent" : "value",
        }
        : values.monthlyPayment
          ? {
            value: Number(values.monthlyPayment),
            unit: "value",
          }
          : undefined,
    purchase_date:
      values.purchaseDate !== "" ? values.purchaseDate : new Date(),
    start_date: moment(new Date()).format("YYYY-MM-DD"),
    insurance: values.insurance
      ? {
        val: Number(values.insurance),
        unit: !values.isInsuranceInValue ? "percent" : "value",
      }
      : undefined,
    maintenance: values.maintenance
      ? {
        val: Number(values.maintenance),
        unit: !values.isMaintenanceInValue ? "percent" : "value",
      }
      : undefined,
    leasing_downpayment:
      values.financingAdviceType === "leasingTerms" && values.downPayment
        ? Number(values.downPayment)
        : undefined,
  };
};

export const helpData = (t: TFunction<"shoppingassistant">) => [
  {
    id: 1,
    title: t("helpTitle1"),
    description:
      t("helpDescription1"),
    logo: getAssetUrl("redesign/eye.svg"),
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
    logo: getAssetUrl("redesign/piggybank.svg"),
  },
  {
    id: 4,
    title: t("helpTitle4"),
    description:
      t("helpDescription4"),
    logo: getAssetUrl("redesign/wallet.svg"),
  },
  {
    id: 5,
    title: t("helpTitle5"),
    description:
      t("helpDescription5"),
    logo: getAssetUrl("redesign/calendarhelpdata.svg"),
  },
];

const transformData = (data: any): DetailedGraphType | null => {
  if (!data) {
    return null;
  }
  return {
    user: {
      financials: {
        prePurchase: {
          income: data.user.financials.pre_purchase.income,
          monthlySavings: data.user.financials.pre_purchase.monthly_savings,
          monthlyExpenses: data.user.financials.pre_purchase.monthly_expenses,
        },
        postPurchase: {
          income: data.user.financials.post_purchase.income,
          monthlySavings: data.user.financials.post_purchase.monthly_savings,
          monthlyExpenses: data.user.financials.post_purchase.monthly_expenses,
        },
      },
      purchase: {
        date: data.user.purchase.date,
        price: data.user.purchase.price,
        loanAmount: data.user.purchase.loan_amount,
        loanPayment: data.user.purchase.loan_payment,
      },
      addExp: {
        insurance: data.user.add_exp.insurance,
        maintenance: data.user.add_exp.maintenance,
      },
    },
    affordified: {
      financials: {
        prePurchase: {
          income: data.affordified.financials.pre_purchase.income,
          monthlySavings:
            data.affordified.financials.pre_purchase.monthly_savings,
          monthlyExpenses:
            data.affordified.financials.pre_purchase.monthly_expenses,
        },
        postPurchase: {
          income: data.affordified.financials.post_purchase.income,
          monthlySavings:
            data.affordified.financials.post_purchase.monthly_savings,
          monthlyExpenses:
            data.affordified.financials.post_purchase.monthly_expenses,
        },
      },
      purchase: {
        date: data.affordified.purchase.date,
        price: data.affordified.purchase.price,
        loanAmount: data.affordified.purchase.loan_amount,
        loanPayment: data.affordified.purchase.loan_payment,
      },
      addExp: {
        insurance: data.affordified.add_exp.insurance,
        maintenance: data.affordified.add_exp.maintenance,
      },
    },
    metrics: {
      text: {
        savingResult: data.metrics.text.saving_result,
        savingComps: data.metrics.text.saving_comps,
        priceResult: data.metrics.text.price_result,
        monthlyExpComps: data.metrics.text.monthly_exp_comps,
      },
      dates: {
        today: data.metrics.dates.today,
        latest: data.metrics.dates.latest,
        middle: data.metrics.dates.middle,
      },
      savingCompletionRate: data.metrics.saving_completion_rate,
      priceGap: data.metrics.price_gap,
      savingGap: data.metrics.saving_gap,
      totalPostExpenseGap: data.metrics.total_post_expense,
      cashExpense: data.metrics.cash_expense,
      affordabilityCheck: data.metrics.affordability_check,
      currency: data.metrics.currency,
    },
  };
};
export const getAffordifiedDetailedGraph = (metricData: MetricType) => {
  const transformDate = moment(new Date(metricData.purchase_date))
    .add(0, "month")
    .format("YYYY-MM");
  return axios
    .post(
      getDetaileGraphApiUrl,
      {
        ...metricData,
        purchase_date: metricData.purchase_date
          ? `${transformDate}-01`
          : undefined,
      }
      // {
      //     headers: {
      //         Authorization: getAuthorizationHeader(),
      //     },
      // }
    )
    .then((response) => {
      return Promise.resolve(transformData(response.data));
    })
    .catch((err) => {
      catchError(err, "getAffordifiedDetailedGraph");
      return Promise.reject();
    });
};

export const rechartdata = (
  monthlySavings: number,
  affordifiedMonthlySavings: number
) => [
    {
      monthlySavings: monthlySavings,
      affordifiedMonthlySavings: affordifiedMonthlySavings,
      monthlySavingsLabel: "MONTHLY SAVINGS",
      affordifiedMonthlySavingsLabel: "MONTHLY SAVINGS REQUIRED",
    },
  ];

export const monthlySavingData = (
  monthlySavings: number,
  purchaseSavings: number,
  currency: string
) => [
    {
      currentMonthlySavings: monthlySavings,
      monthlySavingAfterPurchase: purchaseSavings,
      currentMonthlySavingsLabel: `${monthlySavings}`,
      monthlySavingAfterPurchaseLabel: `${purchaseSavings}`,
    },
  ];

export const monthlySavingComparisonsData = (data: SavingComparisonType) => [
  {
    beforeAmnt: data.prePurchaseMonthlySaving,
    afterAmnt: data.postPurchaseMonthlySaving,
    beforeAmntLabel: `${data.prePurchaseMonthlySaving.toLocaleString()}`,
    afterAmntLabel: `${data.postPurchaseMonthlySaving.toLocaleString()}`,
  },
];

export const calculateHeight = (
  totalValue: number,
  containerHeight: number,
  barHeight: number
) => {
  const blueBlockHeight = (barHeight * containerHeight) / totalValue + 10;
  return blueBlockHeight;
};

export const getMaximumHeight = (
  user: UserGraphType,
  affordified: AffordifiedGraphType
) => {
  return Math.max(
    user.purchase.loanPayment + user.addExp.insurance + user.addExp.maintenance,
    affordified.addExp.insurance +
    affordified.addExp.maintenance +
    affordified.purchase.loanPayment
  );
};


export const ShoopingTab = (t: TFunction<"shoppingassistantresult">) => [
  {
    id: 1,
    tab: "SAVINGS",
    title: t("monthlySavings"),
    description:
      t("savingsDescription"),
  },
  {
    id: 2,
    tab: "PRICE",
    title: t("price"),
    description:
      t("priceDescription"),
  },
  {
    id: 3,
    tab: "DATE",
    title: t("date"),
    description: t("dateDescription"),
  },
];
