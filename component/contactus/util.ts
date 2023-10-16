import { object, string } from "yup";
import { RadioOptionType } from "../commoncomponent/form/Type";

export const contactUsInitial = {
  fullName: "",
  email: "",
  hearAboutUs: "",
  message: "",
  notify: false,
};

export const contactUsValidationSchema = object().shape({
  fullName: string().required("Please enter your name"),
  email: string()
    .email("Please enter valid mail")
    .required("Pleas enter email"),
  message: string().required("Please enter message"),
});

export const hearOptions: RadioOptionType[] = [
  {
    label: "Through a friend",
    value: "Through a friend",
  },
  {
    label: "Social Media",
    value: "Social Media",
  },
  {
    label: "Google",
    value: "Google",
  },
  {
    label: "Print media",
    value: "Print media",
  },
  {
    label: "Magazine",
    value: "Magazine",
  },
];
