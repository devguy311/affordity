export type ComparisonType = {
  country: string;
  state: string;
  age: string;
  gender: string;
  income: string;
  carMaintenance: string;
  houseMaintenance: string;
  savings: string;
  health: string;
  clothing: string;
  houseRent: string;
  gasAndElectricity: string;
  hotelsAndRestaurants: string;
  holidays: string;
  food: string;
  currency: string;
};

export type ComparatorResultType = {
  clothingIndicator: ComparatorDataType;
  electricityGasIndicator: ComparatorDataType;
  foodIndicator: ComparatorDataType;
  healthIndicator: ComparatorDataType;
  restaurantAndHotelsIndicator: ComparatorDataType;
  carMaintainanceIndicator: ComparatorDataType;
  holidaysIndicator: ComparatorDataType;
  houseMaintenanceIndicator: ComparatorDataType;
  houseRentIndicator: ComparatorDataType;
  incomeIndicator: ComparatorDataType;
  savingsIndicator: ComparatorDataType;
};

export type ComparatorDataType = {
  data: {
    age?: string;
    sex?: string;
    timePeriod?: number;
    coicop?: string;
    dataset?: string;
    geo?: string;
    unit?: string;
    value?: number;
  };
  currency?: string;
  rangeMonth?: number[];
  rangeYear?: number[];
  textCustomMonth?: {
    details?: string[];
    explanation?: string;
  };
  textCustomYear?: {
    details?: string[];
    explanation?: string;
  };
  userInput?: number;
  userInputMonth?: number;
  userInputYear?: number;
};
