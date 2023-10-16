import { getAssetUrl } from "../../util/SiteUtil";
import { object, string, ref } from "yup";
import { TFunction } from "i18next";
import { SignupType } from "./type";
import axios, { AxiosError } from "axios";
import {
  EXPIRES,
  LOWER_TOKEN,
  REFRESH_TOKEN,
  USER_AUTH_TOKEN,
} from "../../util/const";
import config from "../../config/firebase";
import { clearCookie, setCookie } from "../../util/common-function";

export const AuthCarouselData = [
  // {
  //   id: 1,
  //   image: getAssetUrl("redesign/budgeting.webp"),

  //   title: "BUDGETING",
  //   info: "Empowering financial decisions for everyone.",
  // },
  {
    id: 2,
    image: getAssetUrl("redesign/benchmarking.webp"),
    title: "BUDGETING",
    info: "Empowering financial decisions for everyone.",
  },
  {
    id: 3,
    image: getAssetUrl("redesign/investing.webp"),
    title: "BENCHMARKING",
    info: "Discover a comprehensive view of your finances.",
  },
];

export const Questionaries = (t: TFunction<"homepage">) => [
  t("option1"),
  t("option2"),
  t("option3"),
  t("option4"),
];

export const loginInitialValue = {
  email: "",
  password: "",
};

export const loginValidationSchema = object().shape({
  email: string().required("Please enter your email"),
  password: string().required("Please enter your password"),
});

export const SignUpInitialValue: SignupType = {
  email: "",
  password: "",
  fullName: "",
  getNotification: false,
};

export const SignUpValidationSchema = (t: TFunction<"signup">) =>
  object().shape({
    email: string().required(t("emptyEmail") || "Email cannot be empty"),
    password: string()
      .required(t("emptyPassword") || "Password cannot be empty")
      .min(6, "Password must be 6 chars minimum."),
  });

export const setAxiosInterceptor = () => {
  axios.interceptors.request.use(
    (confi) => {
      let token = localStorage.getItem(LOWER_TOKEN);
      const refreshToken = localStorage.getItem(REFRESH_TOKEN);
      if (token) {
        if (
          refreshToken &&
          Date.now() >= Number(localStorage.getItem(EXPIRES))
        ) {
          fetch(
            `https://securetoken.googleapis.com/v1/token?key=${config.apiKey}`,
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                grant_type: "refresh_token",
                refresh_token: refreshToken,
              }),
            }
          )
            .then((res) => {
              return res.json();
            })
            .then((resp) => {
              localStorage.removeItem(LOWER_TOKEN);
              clearCookie(USER_AUTH_TOKEN);

              localStorage.setItem(LOWER_TOKEN, resp.access_token);
              localStorage.setItem(EXPIRES, resp.expires_in);
              localStorage.setItem(REFRESH_TOKEN, resp.refresh_token);

              setCookie(
                USER_AUTH_TOKEN,
                resp.access_token,
                Number(localStorage.getItem(EXPIRES))
              );
            });
        }
        token = localStorage.getItem(LOWER_TOKEN);
        confi.headers!.Authorization = token;
      }
      return confi;
    },
    (error: AxiosError) => {
      Promise.reject(error);
    }
  );
};
