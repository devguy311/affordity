import axios, { AxiosError } from "axios";
import config from "../config/firebase";

import { EXPIRES, LOWER_TOKEN, REFRESH_TOKEN, USER_AUTH_TOKEN } from "./const";
import { setCookie, clearCookie } from "./common-function";

function AxiosInterceptors() {
  // Interceptors

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
      // refreshToken &&
      //   setCookie(
      //     USER_AUTH_TOKEN,
      //     refreshToken,
      //     Number(localStorage.getItem(EXPIRES))
      //   );
      return confi;
    },
    (error: AxiosError) => {
      Promise.reject(error);
    }
  );

  return null;
}

export default AxiosInterceptors;
