
export type CapitalType = {
    beforePurchase: number;
    afterPurchase: number;
    status: string;
    warning: string;
}

export type MonthlySavingType = {
    beforePurchase: number;
    afterPurchase: number;
    status: string;
    warning: string;
}

export type ExpensesBreakdownType = {
    beforePurchase: ExpensesBrakdownPurchase;
    afterPurchase: ExpensesBrakdownPurchase;
}

export type ExpensesBrakdownPurchase = {
    loanAmount: number;
    insuranceGas: number;
    regularExpenses: number;
}

export type DownpaymentType = {
    pie: number;
    slice: number;
}

export type CumulatedGraphType = {
    name: string;
    value: number;
}

export type LeasingPaymentType = {
    user: number;
    ideal: number;
    status: string;
    warning: string;
}

export type BudgetType = {
    transport: number;
    insuranceGas: number;
    leasePmt: number;
}

export type PurchaseRuleType = {
    revenue: string;
    savings: string;
    startCapital: string;
    purchaseDate: string | Date;
    leasePayment: string;
    carPrice: string;
  };
  
  export type CarRuleInfoType = {
    capitalGraph: CapitalType;
    cumulatedAmntGraph: CumulatedGraphType[];
    downPaymentGraph: DownpaymentType;
    expenseBreakDown: ExpensesBreakdownType;
    savingsGraph: MonthlySavingType;
    leasingPayment: LeasingPaymentType;
    budget: BudgetType;
  };
  