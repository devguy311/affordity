export type FinancialDetailType = {
  activeAccount: number;
  leftPanel: BankFilterType[];
  transactionList: TransactionListType[];
  dashboardResponse: DashboardResponseType;
};

export type DashboardResponseType = {
  header: DashboardHeaderType;
  cards: CardType;
  balance: GraphDataType;
  spending: GraphDataType;
  income: GraphDataType;
};

export type GraphDataType = {
  labels: Record<string, string>;
  thisWeek: FilterGraphDataType;
  thisMonth: FilterGraphDataType;
  thisYear: FilterGraphDataType;
};

export type FilterGraphDataType = {
  treeMap: TreeMapType;
  lineChart: LineChartDataType[];
};

export type TreeMapType = Record<string, TreeMapValueType>;
export type TreeMapValueType = {
  value: number;
  percent: number;
};

export type LineChartDataType = {
  date: string;
  values: Record<string, number>;
};
export type CardType = {
  thisWeek: CardInfoType;
  thisMonth: CardInfoType;
  thisYear: CardInfoType;
};

export type CardInfoType = {
  balance: CardValueType;
  income: CardValueType;
  spending: CardValueType;
};

export type CardValueType = {
  value: number;
  isIncrease: boolean;
  isNeutral: boolean;
  difference: number;
};

export type DashboardHeaderType = {
  currency: string;
};
export type BankFilterType = {
  name: string;
  value: number;
  currency: string;
  id: number;
  account: AccountType[];
  state: null | string;
};

export type AccountType = {
  name: string;
  value: number;
  currency: string;
  id: number;
  defaultCheck: boolean;
};

export type TransactionListType = {
  id: number;
  date: string;
  value: number;
  type: string;
  category: string;
  bank: string;
  account: string;
  cardNumber: string;
  counterparty: string;
};

export type SwitcherTabType = {
  value: string;
  label: string | JSX.Element;
};

export type TreeMapDataType = {
  name: string;
  type: string;
  bgColor: string;
  children: TreeMapChildrenDataType[];
};

export type TreeMapChildrenDataType = {
  name: string;
  size: number;
  percentage: number;
};

export type FinanceLineChartType = {
  name: string;
  [key: string]: string;
};
