export type FinancialGoalType = {
  monthlySalary: string | number;
  monthlySavings: string | number;
  currentCapital: string | number;
  price: string | number;
  purchaseDate: string | Date;
  loanAmount: string | number;
  loanInterestRate: string | number;
  maintenance: string | number;
  loanTerm: string | number;
  insurance: string | number;
  monthlyPayment: string | number;
  downPayment: string | number;
  leasingLength: string | number;
  isLoanAmountInValue: boolean;
  isLoanInterestInValue: boolean;
  isMaintenanceInValue: boolean;
  isInsuranceInValue: boolean;
  financingAdviceType: string;
  isDownPaymentInValue: boolean;
};


export type ShoppingAssistantHelpType = {
  id: number;
  title: string;
  description: string;
  logo: string;
};

export type MetricType = {
  insurance: {
    val: string;
    metric: string;
  };
  int_rate: {
    value: string;
    metric: string;
  };
  loan: {
    val: string;
    metric: string;
  };
  loan_term: number;
  maintenance: {
    val: string;
    metric: string;
  };
  price: string;
  purchase_date: string;
  revenue: string;
  saving: string;
  start_capital: string;
  start_date: string;
};

export type DetailedGraphType = {
  user: UserGraphType;
  affordified: AffordifiedGraphType;
  metrics: MetricsGraphType;
};

export type UserGraphType = {
  financials: {
    prePurchase: {
      income: number;
      monthlySavings: number;
      monthlyExpenses: number;
    };
    postPurchase: {
      income: number;
      monthlySavings: number;
      monthlyExpenses: number;
    };
  };
  purchase: {
    date: string;
    price: number;
    loanAmount: number;
    loanPayment: number;
  };
  addExp: {
    insurance: number;
    maintenance: number;
  };
};

export type AffordifiedGraphType = {
  financials: {
    prePurchase: {
      income: number;
      monthlySavings: number;
      monthlyExpenses: number;
    };
    postPurchase: {
      income: number;
      monthlySavings: number;
      monthlyExpenses: number;
    };
  };
  purchase: {
    date: string;
    price: number;
    loanAmount: number;
    loanPayment: number;
  };
  addExp: {
    insurance: number;
    maintenance: number;
  };
};

export type MetricsGraphType = {
  text: {
    savingResult: string;
    savingComps: string;
    priceResult: string;
    monthlyExpComps: string;
  };
  dates: {
    today: string;
    latest: string;
    middle: string;
  };
  savingCompletionRate: number;
  priceGap: number;
  savingGap: number;
  totalPostExpenseGap: number;
  cashExpense: string;
  affordabilityCheck: boolean;
  currency: string;
};

export type SavingComparisonType = {
  prePurchaseMonthlySaving: number;
  postPurchaseMonthlySaving: number;
};

