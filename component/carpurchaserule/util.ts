import { getAssetUrl } from "../../util/SiteUtil";
import { TFunction } from "i18next";

import axios from "axios";
import { ref, number, object, string } from "yup";
import moment from "moment";
import { toast } from "react-hot-toast";
import { getVehiclePurchaseApiUrl } from "../../constant/apiConstant";
import { CarRuleInfoType, PurchaseRuleType } from "./type";
import {
    CapitalType,
    CumulatedGraphType,
    ExpensesBrakdownPurchase,
    MonthlySavingType,
} from "./type";

export const PurchaseRuleInitialValue: PurchaseRuleType = {
    revenue: "",
    savings: "",
    startCapital: "",
    purchaseDate: "",
    leasePayment: "",
    carPrice: ""
};

const min_value_msg = "Value must be positive"
const max_value_msg = "This value is too large"
const type_error_msg = "Enter a number"
const required_field_msg = "This field is required"

export const PurchaseRulevalidationSchema = object().shape({
    revenue: number()
        .min(0, min_value_msg)
        .max(999999, max_value_msg)
        .typeError(type_error_msg)
        .required(required_field_msg),
    startCapital: number()
        .min(0, min_value_msg)
        .max(999999, max_value_msg)
        .typeError(type_error_msg),
    savings: number()
        .min(0, min_value_msg)
        .max(999999, max_value_msg)
        .typeError(type_error_msg)
        .lessThan(ref("revenue"), "Savings to be lower than income"),
    purchaseDate: string()
        .required(required_field_msg),

    leasePayment: number()
        .min(0, min_value_msg)
        .max(999999, max_value_msg)
        .typeError(type_error_msg)
        .lessThan(ref("carPrice"), "Leasing payments to be less than the car price"),
    carPrice: number()
        .min(0, min_value_msg)
        .max(999999, max_value_msg)
        .typeError(type_error_msg),
});

export const transformCumulatedGraph = (data: { [key: string]: number }): CumulatedGraphType[] => {
    return Object.entries(data).map(([name, value]) => ({ name, value }));
}

export const transformData = (data: any): CarRuleInfoType => {
    return {
        capitalGraph: {
            afterPurchase: data.capital_graph.after_purchase,
            beforePurchase: data.capital_graph.before_purchase,
            status: data.capital_graph.status,
            warning: data.capital_graph.warning
        },
        cumulatedAmntGraph: transformCumulatedGraph(data.cumulated_pmt_graph),
        downPaymentGraph: {
            pie: data.downpayment_graph.pie,
            slice: data.downpayment_graph.slice
        },
        expenseBreakDown: {
            afterPurchase: {
                insuranceGas: data.expense_breakdown.after_purchase.insurance_gas,
                loanAmount: data.expense_breakdown.after_purchase.loan_pmt,
                regularExpenses: data.expense_breakdown.after_purchase.regular_expense
            },
            beforePurchase: {
                insuranceGas: data.expense_breakdown.before_purchase.insurance_gas,
                loanAmount: data.expense_breakdown.before_purchase.loan_pmt,
                regularExpenses: data.expense_breakdown.before_purchase.regular_expense
            }
        },
        savingsGraph: {
            afterPurchase: data.savings_graph.after_purchase,
            beforePurchase: data.savings_graph.before_purchase,
            status: data.savings_graph.status,
            warning: data.savings_graph.warning
        },
        budget: {
            transport: data.budget.transport,
            insuranceGas: data.budget.insurance_gas,
            leasePmt: data.budget.lease_pmt
        },
        leasingPayment: {
            ideal: data.leasing_payment.ideal,
            user: data.leasing_payment.user,
            status: data.leasing_payment.status,
            warning: data.leasing_payment.warning
        },
    };
};
export const getVehiclePurchaseRule = (data: PurchaseRuleType) => {
    return axios.post(getVehiclePurchaseApiUrl,
        {
            revenue: Number(data.revenue),
            saving: Number(data.savings),
            price: Number(data.carPrice),
            start_capital: Number(data.startCapital),
            purchase_date: moment(data.purchaseDate).format("YYYY-MM-DD"),
            start_date: moment(new Date()).format("YYYY-MM-DD"),
            int_rate: {
                value: Number(data.leasePayment),
                unit: "value",
            },
            // currency: "CHF",
            financing: "leasing",
        },).then((res) => Promise.resolve(transformData(res.data)))
        .catch((err: any) => {
            toast.error(err.message);
            return Promise.reject();
        });
};

export const getExpenseMaximumHeight = (
    beforePurchase: ExpensesBrakdownPurchase,
    afterPurchase: ExpensesBrakdownPurchase
) => {
    return Math.max(
        beforePurchase.insuranceGas +
        beforePurchase.loanAmount +
        beforePurchase.regularExpenses,
        afterPurchase.insuranceGas +
        afterPurchase.loanAmount +
        afterPurchase.regularExpenses
    );
};

export const monthlySavingData = (data: MonthlySavingType) => [
    {
        beforeAmnt: data.beforePurchase,
        afterAmnt: data.afterPurchase,
        beforeAmntLabel: `${data.beforePurchase}`,
        afterAmntLabel: `${data.afterPurchase}`,
    },
];

export const capitalData = (data: CapitalType) => [
    {
        beforeAmnt: data.beforePurchase,
        afterAmnt: data.afterPurchase,
        beforeAmntLabel: `${data.beforePurchase}`,
        afterAmntLabel: `${data.afterPurchase}`,
    },
];


export const carPurchaseHelpData = (t: TFunction<"carrule">) => [
    {
        id: 1,
        title: t("helpTitle1"),
        description: t("helpDescription1"),
        logo: getAssetUrl('redesign/cash.svg')
    },
    {
        id: 2,
        title: t("helpTitle2"),
        description: t("helpDescription2"),
        logo: getAssetUrl('redesign/card.svg')
    },
    {
        id: 3,
        title: t("helpTitle3"),
        description: t("helpDescription3"),
        logo: getAssetUrl('redesign/bus.svg')
    },
];

