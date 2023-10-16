import { number, object, ref, string } from "yup";

export const MyDetailsInitialData = {
  displayName: "",
  email: "",
  password: "",
};

export const confirmDialogValidationSchema = object().shape({
  password: string().required("Please enter your  password"),
});

export const changeUserNameValidationSchema = object().shape({
  displayName: string().required("Please enter username"),
  email: string().email("Please enter correct email"),
});

export const changePasswordValidationSchema = object().shape({
  oldPassword: string().required("Please enter your old password"),
  newPassword: string().required("Please enter your new password"),
});

export const generalSettingsInitialData = {
  monthlySalary: "",
  monthlySavings: "",
  currentCapital: "",
  country: "",
  age: "",
  gender: "",
  prefferedCurrency: "",
};

export const generalValidationSchema = object().shape({
  monthlySalary: number()
    .typeError("Please enter a number")
    .notOneOf([0], "Monthly salary cannot be 0")
    .max(999999, "Value is too large")
    .min(0, "Salary must be positive"),
  monthlySavings: number()
    .min(0, "Value cannot be negative")
    .max(99999, "Value is too large")
    .typeError("Please enter a number")
    .lessThan(
      ref("monthlySalary"),
      "Savings cannot be higher than your monthly income."
    ),
  currentCapital: number().typeError("Please enter number"),
  country: string(),
  age: number()
    .min(0)
    .max(99, "Value is too large")
    .typeError("Please enter a number"),
  gender: string(),
});
