export type InvestmentReturnType = {
  explanationGrowth: string;
  graphValues: GraphValuesType[];
  allocation: AllocationType;
  tableData: InvestmentTableType;
};

export type AllocationType = {
  stocks: number;
  bonds: number;
  cash: number;
};

export type AllocationTableDataType = {
  stocks: number;
  bonds: number;
  cash: number;
};

export type InvestmentTableColumnType = {
  name: string;
  expectedReturn: number;
  expectedVolatility: number;
};

export type InvestmentTableType = {
  stock: InvestmentTableColumnType;
  bonds: InvestmentTableColumnType;
  cash: InvestmentTableColumnType;
};

export type GraphValuesType = {
  name: string;
  investmentGrowth: number;
  totalDeposit: number;
  projectedAccountLine1: number;
  projectedAccountLine2: number;
  returnOnly: number;
};

export type InvestmentFilterType = {
  targetAmount: string;
  riskType: string;
  investmentDuration: string;
  importanceType: string;
  initialDeposit: string;
  monthlyDeposit: string;
};

export type InvestmentBreakdownType = {
  beforePurchase: InvestmentBrakdownPurchase;
  afterPurchase: InvestmentBrakdownPurchase;
};

export type InvestmentBrakdownPurchase = {
  stocks: number;
  bonds: number;
  cash: number;
};

export type CompletedTransactionImpactType = {
  goal1: TransactiionGoalType;
  goal2: TransactiionGoalType;
  goal3: TransactiionGoalType;
};

export type GoalSummaryType = {
  horizon: string;
  startCapital: number;
  targetAmount: number;
  monthlyDeposits: number;
};

export type RiskResultType = {
  riskNeeds: string;
  riskTolerance: string;
  riskAbility: string;
  aligned: boolean;
};

export type StrategyType = {
  option1: string;
  option2: string;
};

export type OptionType = {
  option1: string[][];
  option2: string[][];
};

export type PortfolioAllocationType = {
  option1: OptionAllocationType;
  option2: OptionAllocationType;
};

export type OptionAllocationType = {
  stock: number;
  bonds: number;
  cash: number;
};
export type EtfExampleType = {
  option1?: {
    etfName?: string;
    finalAmount?: number;
    expectedReturn?: number;
    expectedVolatility?: number;
  };
  option2?: {
    etfName?: string;
    finalAmount?: number;
    expectedReturn?: number;
    expectedVolatility?: number;
  };
};

export type TransactiionGoalType = {
  graph: Record<string, number>;
  goalSummary: GoalSummaryType;
  riskResult: RiskResultType;
  strategy: StrategyType;
  detailedExplanation: string[][];
  options: OptionType;
  portfolioAllocation: PortfolioAllocationType;
  etfExamples: EtfExampleType;
};

export type GraphType = {
  name: string;
  goal1Graph: number;
  goal2Graph: number;
  goal3Graph: number;
};
