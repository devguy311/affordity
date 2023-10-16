export type RiskType = {
  action: string;
  financialRisk: string;
  investmentConcept: string;
  investmentProduct: string;
  riskyAssets: string;
  stockMarket: string;
};

export type GoalDataType = {
  initialDeposit: string;
  investmentDuration: string;
  liquidity: string;
  monthlyDeposit: string;
  targetAmount: string;
};
export type GoalType = {
  data: GoalDataType;
  goal: number;
};

export type DetailedFormType = {
  risks: RiskType;
  goals: GoalType[];
};
