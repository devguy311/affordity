import { getAssetUrl } from "../../util/SiteUtil";
import axios from "axios";
import { ref, number, object, string } from "yup";
import { getComparisonInfoApiUrl } from "../../constant/apiConstant";
import { catchError } from "../../util/common-function";
import { TFunction } from "i18next";

import {
  ComparatorDataType,
  ComparisonType,
  ComparatorResultType,
} from "./type";
import { toast } from "react-hot-toast";

export const comparatorInitiaValue: ComparisonType = {
  country: "",
  state: "",
  age: "",
  gender: "M",
  income: "",
  holidays: "",
  carMaintenance: "",
  houseMaintenance: "",
  savings: "",
  clothing: "",
  food: "",
  gasAndElectricity: "",
  health: "",
  hotelsAndRestaurants: "",
  houseRent: "",
  currency: "",
};

const min_value_msg = "Value must be positive";
const max_value_msg = "This value is too large";
const type_error_msg = "Enter a number";
const required_field_msg = "This field is required";

export const comparatorValidationSchema = object().shape({
  country: string().required("Please select country"),
  age: number().min(0).typeError("Enter correct value").required("Enter age"),
  gender: string().required("Select gender"),
  income: number()
    .min(0, min_value_msg)
    .max(999999, max_value_msg)
    .typeError(type_error_msg)
    .required(required_field_msg),
  savings: number()
    .min(0, min_value_msg)
    .max(99999, max_value_msg)
    .typeError(type_error_msg)
    .required(required_field_msg)
    .lessThan(ref("income"), "Income should be higher than savings"),
  holidaysAmount: number()
    .min(0, min_value_msg)
    .max(99999, max_value_msg)
    .typeError(type_error_msg),
  carMaintenance: number()
    .min(0, min_value_msg)
    .max(99999, max_value_msg)
    .typeError(type_error_msg),
  houseMaintenance: number()
    .min(0, min_value_msg)
    .max(99999, max_value_msg)
    .typeError(type_error_msg),
  houseRent: number()
    .min(0, min_value_msg)
    .max(99999, max_value_msg)
    .typeError(type_error_msg),
  health: number()
    .min(0, min_value_msg)
    .max(99999, max_value_msg)
    .typeError(type_error_msg),
  clothing: number()
    .min(0, min_value_msg)
    .max(99999, max_value_msg)
    .typeError(type_error_msg),
  gasAndElectricity: number()
    .min(0, min_value_msg)
    .max(99999, max_value_msg)
    .typeError(type_error_msg),
  hotelsAndRestaurants: number()
    .min(0, min_value_msg)
    .max(99999, max_value_msg)
    .typeError(type_error_msg),
  food: number()
    .min(0, min_value_msg)
    .max(99999, max_value_msg)
    .typeError(type_error_msg),
  holidays: number()
    .min(0, min_value_msg)
    .max(99999, max_value_msg)
    .typeError(type_error_msg),
});

const transformValueData = (data: any): ComparatorDataType => {
  return {
    currency: data?.currency || "USD",
    data: {
      age: data?.data?.age,
      sex: data?.data?.gender,
      timePeriod: data?.data?.timePeriod,
      coicop: data?.data?.coicop,
      dataset: data?.data?.dataset,
      geo: data?.data?.geo,
      unit: data?.data?.unit,
      value: data?.data?.value,
    },
    rangeMonth: data?.range_month,
    rangeYear: data?.range_year,
    textCustomMonth: data?.text_custom_month,
    textCustomYear: data?.text_custom_year,
    userInput: data?.user_input,
    userInputMonth: data?.user_input_month,
    userInputYear: data?.user_input_year,
  };
};
const transformData = (data: any): ComparatorResultType => {
  return {
    clothingIndicator: transformValueData(data["clothing"]),
    electricityGasIndicator: transformValueData(data["electricity_and_gas"]),
    foodIndicator: transformValueData(data["food"]),
    healthIndicator: transformValueData(data["health"]),
    restaurantAndHotelsIndicator: transformValueData(
      data["restaurant_and_hotels"]
    ),
    carMaintainanceIndicator: transformValueData(data["car_maintenance"]),
    holidaysIndicator: transformValueData(data["holidays"]),
    houseMaintenanceIndicator: transformValueData(data["house_maintenance"]),
    houseRentIndicator: transformValueData(data["house_rent"]),
    incomeIndicator: transformValueData(data["income"]),
    savingsIndicator: transformValueData(data["savings"]),
  };
};

export const getComparisonInformation = (values: ComparisonType) => {
  return axios
    .post(
      getComparisonInfoApiUrl,
      {
        income: Number(values.income),
        savings: Number(values.savings),
        age: Number(values.age),
        country: values.country,
        gender: values.gender,
        currency: values.currency,
        holidays: values.holidays ? Number(values.holidays) : undefined,
        house_maintenance: values.houseMaintenance
          ? Number(values.houseMaintenance)
          : undefined,
        house_rent: values.houseRent ? Number(values.houseRent) : undefined,
        food: values.food ? Number(values.food) : undefined,
        clothing: values.clothing ? Number(values.clothing) : undefined,
        health: values.health ? Number(values.health) : undefined,
        restaurant_and_hotels: values.hotelsAndRestaurants
          ? Number(values.hotelsAndRestaurants)
          : undefined,
        electricity_and_gas: values.gasAndElectricity
          ? Number(values.gasAndElectricity)
          : undefined,
        car_maintenance: values.carMaintenance
          ? Number(values.carMaintenance)
          : undefined,
      }
      //{
      // headers: {
      // Authorization: getAuthorizationHeader(),
      // },
      //}
    )

    .then((res) => {
      return Promise.resolve(transformData(res.data));
    })
    .catch((err) => {
      catchError(err, "getComparisonInformation");
      toast.error(err.message);
      return Promise.reject(err);
    });
};

export const livingCostFormHelpData = (t: TFunction<"livingcostindicator">) => [
  {
    id: 1,
    title: t("helpTitle1"),
    description:
      t("helpDescription1"),
    logo: getAssetUrl("redesign/eye.svg"),
  },
  {
    id: 2,
    title: t("helpTitle2"),
    description:
      t("helpDescription2"),
    logo: getAssetUrl("redesign/hand.svg"),
  },
  {
    id: 3,
    title: t("helpTitle3"),
    description:
      t("helpDescription3"),
    logo: getAssetUrl("redesign/dollar.svg"),
  },
];

export const getTransformTooltip = (
  value: number,
  userValue: number,
  avgValue: number
) => {
  if (Math.abs(userValue) <= Math.abs(avgValue)) {
    if (Math.abs(userValue - avgValue) < 3000) {
      if (value === userValue) {
        return 0;
      }
      if (value === avgValue) {
        return 1;
      }
    }
  }
  if (Math.abs(userValue - avgValue) < 3000) {
    if (value === userValue) {
      return 1;
    }
    if (value === avgValue) {
      return 0;
    }
  }
  if (value === userValue) {
    return 1;
  }
  if (value === avgValue) {
    return 1;
  }
  return 1;
};

export const getMinValue = (
  userValue: number,
  startValue: number,
  endValue: number
) => {
  let min = startValue;
  let max = endValue;
  if (userValue < startValue) {
    min = userValue;
  }
  if (userValue > endValue) {
    max = userValue;
  }
  return {
    min,
    max,
  };
};
