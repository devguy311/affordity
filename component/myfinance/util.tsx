import axios from "axios";
import { getAssetUrl } from "../../util/SiteUtil";
import { TFunction } from "i18next";
import NextImage from "../commoncomponent/component/NextImage";
import {
  AccountType,
  BankFilterType,
  CardInfoType,
  CardType,
  CardValueType,
  DashboardResponseType,
  FilterGraphDataType,
  FinanceLineChartType,
  GraphDataType,
  LineChartDataType,
  TransactionListType,
  TreeMapDataType,
  TreeMapType,
} from "./type";
import {
  getFinanceDetails,
  getFinanceFilters,
  getTransactionList,
  getWebviewURL,
} from "../../constant/apiConstant";

export const filterTabOption = (t: TFunction<"dashboardResult">) => [
  {
    label: t("thisWeek"),
    value: "thisWeek",
  },
  {
    label: t("thisMonth"),
    value: "thisMonth",
  },
  {
    label: t("thisYear"),
    value: "thisYear",
  },
];

export const graphTabOption = (t: TFunction<"dashboardResult">) => [
  {
    label: t("balance"),
    value: "balance",
  },
  {
    label: t("income"),
    value: "income",
  },
  {
    label: t("spending"),
    value: "spending",
  },
];

export const graphTypeOption = [
  {
    value: "tree",
    label: (
      <NextImage
        src={getAssetUrl("redesign/tree_icon.svg")}
        alt="tree map"
        height="24px"
        width="24px"
      />
    ),
  },
  {
    value: "line",
    label: (
      <NextImage
        src={getAssetUrl("redesign/line_icon.svg")}
        alt="line chart"
        height="24px"
        width="24px"
      />
    ),
  },
];

export const transformTreeMapData = (
  data: GraphDataType,
  selectedTab: string
): TreeMapDataType[] => {
  const transformInfo = Object.entries(
    data[selectedTab].treeMap as TreeMapType
  ).map(([key, value], index) => ({
    name: data.labels[key],
    type: key,
    bgColor: getBarColor(index),
    children: [
      {
        name: data.labels[key],
        size: value.value,
        percentage: value.percent,
      },
    ],
  }));
  return transformInfo;
};

export const getBarColor = (index: number) => {
  if (index === 0 || index > 7) {
    return "#248A8A";
  }
  return `rgba(36, 138, 138, ${1 - index / 10})`;
};

export const transformLineChart = (
  data: GraphDataType,
  selectedTab: string
): FinanceLineChartType[] => {
  const transformedLineChart: FinanceLineChartType[] = [];
  (data[selectedTab] as FilterGraphDataType).lineChart.forEach(
    (item, index) => {
      const obj = {};
      obj["name"] = item.date;
      Object.entries(item.values).forEach(([key, value]) => {
        obj[data.labels[key]] = value;
      });
      transformedLineChart.push(obj as FinanceLineChartType);
    }
  );
  return transformedLineChart;
};

export const transformBarLineLabel = (data: GraphDataType): string[] => {
  return Object.entries(data.labels).map(([key, value]) => value);
};
const transformCardValueType = (data: any): CardValueType => {
  return {
    difference: data.difference,
    isIncrease: data.isIncrease,
    isNeutral: data.isNeutral,
    value: data.value,
  };
};

export const transformCardInfoType = (data: any): CardInfoType => {
  return {
    balance: transformCardValueType(data?.balance),
    income: transformCardValueType(data?.income),
    spending: transformCardValueType(data?.spending),
  };
};

export const transformCardData = (data: any): CardType => {
  return {
    thisMonth: transformCardInfoType(data.thisMonth),
    thisWeek: transformCardInfoType(data.thisWeek),
    thisYear: transformCardInfoType(data.thisYear),
  };
};

const transformFilterGraphData = (data: any): FilterGraphDataType => {
  return {
    treeMap: data.treeMap,
    lineChart: data.lineChart.map(
      (item) =>
        ({
          date: item.date,
          values: item.values,
        } as LineChartDataType)
    ),
  };
};
const transformGraphData = (data: any): GraphDataType => {
  return {
    labels: data.labels,
    thisMonth: transformFilterGraphData(data.thisMonth),
    thisWeek: transformFilterGraphData(data.thisWeek),
    thisYear: transformFilterGraphData(data.thisYear),
  };
};
export const transformDashBoardData = (data: any): DashboardResponseType => {
  return {
    header: {
      currency: data?.header?.currency || "€",
    },
    cards: transformCardData(data.cards),
    balance: transformGraphData(data.balance),
    income: transformGraphData(data.income),
    spending: transformGraphData(data.spending),
  };
};

const transformAccountType = (data: any): AccountType[] => {
  if (!data) {
    return [];
  }
  return data.map(
    (item) =>
      ({
        currency: item.currency,
        defaultCheck: item.defaultCheck,
        name: item.name,
        value: item.value,
        id: item.id,
      } as AccountType)
  );
};
const transformFilterType = (data: any): BankFilterType => {
  return {
    account: transformAccountType(data.accounts),
    currency: data.currency,
    name: data.name,
    value: data.value,
    id: data.id,
    state: data.state,
  };
};
const transformLeftPanel = (data: any): BankFilterType[] => {
  if (!data) {
    return [];
  }
  return data.map((item) => transformFilterType(item));
};

export const filterLabelText = (t: TFunction<"dashboardResult">) => [
  {
    thisWeek: t("cardText1"),
    thisMonth: t("cardText2"),
    thisYear: t("cardText3"),
  },
];

export const PeriodLabelText = (t: TFunction<"dashboardResult">) => [
  {
    thisWeek: t("thisWeek"),
    thisMonth: t("thisMonth"),
    thisYear: t("thisYear"),
  },
];

export const getFinanceFilterData = async () =>
  axios.post(getFinanceFilters, {}).then((res) => {
    return Promise.resolve(transformLeftPanel(res.data.selector));
  });

export const getFinanceDetailsData = async (data: {
  banks: number[];
  accounts: number[];
  language: string;
}) =>
  axios.post(getFinanceDetails, data).then((res) => {
    return Promise.resolve(transformDashBoardData(res.data));
  });

const transformTransaction = (data: any): TransactionListType[] => {
  if (!data) {
    return [];
  }

  return data.map(
    (item) =>
      ({
        id: item.id,
        account: item.account,
        bank: item.bank,
        cardNumber: item.cardNumber,
        category: item.category,
        counterparty: item.counterparty,
        date: item.date,
        type: item.type,
        value: item.value,
      } as TransactionListType)
  );
};

export const getTransactionDetails = async (data: {
  banks: number[];
  accounts: number[];
}) =>
  axios.post(getTransactionList, data).then((res) => {
    return Promise.resolve(transformTransaction(res.data));
  });

export const getWebViewRedirectURL = async () =>
  axios.post(getWebviewURL).then((res) => {
    return res.data;
  });

export const filterTransactionList = (
  list: TransactionListType[],
  searchText: string
) => {
  if (searchText === "") {
    return list;
  }
  return list.filter(
    (item) =>
      item.bank.toLowerCase().includes(searchText.toLowerCase()) ||
      item.account.toLowerCase().includes(searchText.toLowerCase())
  );
};

export const getSortedWeekDays = (weekDays) => {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  weekDays.sort((a, b) => {
    return daysOfWeek.indexOf(a.date) - daysOfWeek.indexOf(b.date);
  });

  return weekDays;
};

export const getSortedMonth = (monthDates: any[]) => {
  monthDates.sort((a, b) => {
    return new Date(a.date).getTime() - new Date(b.date).getTime();
  });

  return monthDates;
};
