export type RealStateType = {
  city: string;
  ownership_status: string;
  income: string;
};

export type ComparatorResultType = {
  FINCP: IndicatorDataType;
  HINCP: IndicatorDataType;
  INTP: IndicatorDataType;
  RETP: IndicatorDataType;
  WAGP: IndicatorDataType;
  INSURAMT: IndicatorDataType;
  MORTAMT: IndicatorDataType;
  PROTAXAMT: IndicatorDataType;
  RENT: IndicatorDataType;
  TOTHCAMT: IndicatorDataType;
  UTILAMT: IndicatorDataType;
  ELECAMT: IndicatorDataType;
  GASAMT: IndicatorDataType;
  OILAMT: IndicatorDataType;
  OTHERAMT: IndicatorDataType;
  TRASHAMT: IndicatorDataType;
  WATERAMT: IndicatorDataType;
  MARKETVAL: IndicatorDataType;
  TOTBALAMT: IndicatorDataType;
  AMMORT: IndicatorDataType;
  INTRATE: IndicatorDataType;
  PMTAMT: IndicatorDataType;
  PMTONLY: IndicatorDataType;
};

export type IndicatorDataType = {
  median: number;
  low: number;
  high: number;
  description: string;
  name: string;
};

export type ComparatorDataType = {
  output: ComparatorResultType;
  query: {
    city: string;
    income_range: string;
    tenure: string;
  };
  // add support for downpayment and other categoricals
};

export type QueryType = {
  city: string;
  incomeRange: string;
  tenure: string;
};
export type ComparatorOutputType = {
  name: string;
  data: IndicatorDataType;
};