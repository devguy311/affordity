import axios from "axios";
import { ref, object, number, mixed, string } from "yup";
import { saveLogin } from "../../constant/apiConstant";
import { LoginRegisterType } from "./type";
import { TFunction } from "i18next";

export const loginRegiterInitialValue = {
  salary: "",
  savings: "",
  capital: "",
  country: "",
};

export const saveLoginInfo = async (values: LoginRegisterType) => {
  return axios.post(saveLogin, values).then(() => Promise.resolve());
};

// const min_value_msg = t("minvalueMsg");
// const max_value_msg = t("maxvalueMsg");
// const type_error_msg = t("typeerrorMsg");
// const sav_income_msg = t("savinglessincomeMsg");

export const RegisterFormSchema = (t: TFunction<"signup">) => object().shape({

  salary: number()
    .min(0, (t("minvalueMsg")!) || "Value must be positive")
    .max(999999, (t("maxvalueMsg")!) || "This value is too large")
    .typeError(t("typeerrorMsg")! || "Enter a number"),

  savings: number()
    .min(0, (t("minvalueMsg")!) || "Value must be positive")
    .max(999999, (t("maxvalueMsg")!) || "This value is too large")
    .typeError(t("typeerrorMsg")! || "Enter a number")
    .lessThan(ref("salary"), t("savinglessincomeMsg")! || "Savings to be lower than salary"),

  capital: number()
    .min(0, (t("minvalueMsg")!) || "Value must be positive")
    .max(999999, (t("maxvalueMsg")!) || "This value is too large")
    .typeError(t("typeerrorMsg")! || "Enter a number")

});