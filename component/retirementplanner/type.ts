export type InvestmentOptionType = {
  value: string;
  label: string;
  isRecommended: boolean;
};

export type InvetmentReturnGraphType = {
  aggressive: InvestmentAggressiveType;
  conservative: InvestmentAggressiveType;
  graphData: GraphDataType[];
};

export type InvestmentAggressiveType = {
  retirementIncome: string;
  totalInvestment: string;
  allocation: AllocationType;
  tableData: RetirementTableType;
};

export type RetirementTableColumnType = {
  name: string;
  expectedReturn: number;
  expectedVolatility: number;
};

export type RetirementTableType = {
  stock: RetirementTableColumnType;
  bonds: RetirementTableColumnType;
  cash: RetirementTableColumnType;
};

export type AllocationType = {
  before: AllocationDataType;
  after: AllocationDataType;
};

export type AllocationDataType = {
  stocks: number;
  bonds: number;
  cash: number;
};

export type GraphDataType = {
  name: string;
  aggressiveData: number;
  conservativeData: number;
};

export type InvestmentCalcultorType = {
  age: number[];
  saveAmount: string;
  saveEachMonth: string;
  customSaveAmount: string;
  customSaveEachMonth: string;
};
