import { getAssetUrl } from "../../util/SiteUtil";
import axios from "axios";
import { number, object, string } from "yup";
import { getRealstateInfoApiUrl } from "../../constant/apiConstant";
import { catchError } from "../../util/common-function";
import { RealStateType } from "./type";
import { toast } from "react-hot-toast";
import { TFunction } from "i18next";

export const initiaValue: RealStateType = {
  city: "",
  ownership_status: "owner",
  income: "",
};

const min_value_msg = "Value must be positive";
const max_value_msg = "This value is too large";
const type_error_msg = "Enter a number";
const required_field_msg = "This field is required";

export const validationSchema = object().shape({
  city: string().required("Please select country"),
  ownership_status: string().required("Select ownership status"),
  income: number()
    .min(0, min_value_msg)
    .max(4000000, max_value_msg)
    .typeError(type_error_msg)
    .required(required_field_msg),
});

export const getRealStateInformation = (values: RealStateType) => {
  return axios
    .post(getRealstateInfoApiUrl, {
      income: Number(values.income),
      city: values.city,
      ownership_status: values.ownership_status,
    })

    .then((res) => {
      return Promise.resolve(res.data);
    })
    .catch((err) => {
      catchError(err, "getRealStateInformation");
      toast.error(err.message);
      return Promise.reject(err);
    });
};

export const housingCostFormHelpData = (t: TFunction<"housing">) => [
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

export const ownershipStatusOptions = (t: TFunction<"housing">) => [
  {
    label: t("owner"),
    value: "owner",
  },
  {
    label: t("rental"),
    value: "rental",
  },
];

const cities = [
  "Atlanta",
  "Sandy Springs",
  "Roswell",
  "Boston",
  "Cambridge",
  "Newton",
  "Chicago",
  "Naperville",
  "Elgin",
  "Dallas",
  "Fort Worth",
  "Arlington",
  "Detroit",
  "Warren",
  "Dearborn",
  "Houston",
  "The Woodlands",
  "Sugar Land",
  "Los Angeles",
  "Long Beach",
  "Anaheim",
  "Miami",
  "Fort Lauderdale",
  "West Palm Beach",
  "New York",
  "Newark",
  "Jersey City",
  "Philadelphia",
  "Camden",
  "Wilmington",
  "Phoenix",
  "Mesa",
  "Scottsdale",
  "Riverside",
  "San Bernardino",
  "Ontario",
  "San Francisco",
  "Oakland",
  "Hayward",
  "Seattle",
  "Tacoma",
  "Bellevue",
  "Washington",
  "Alexandria",
];

export const cityOptions = cities.map((item) => ({
  label: item,
  value: item,
}));

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