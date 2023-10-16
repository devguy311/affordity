import { LOWER_TOKEN, USER_AUTH_TOKEN, USER_AUTH_UID } from "../const";

const AUTH_TOKEN = LOWER_TOKEN;
// export function getTokenFromCookies() {
//   return localStorage.getItem(AUTH_TOKEN) || "";
// }

export function setTokenIntoCookies(token: string) {
  localStorage.setItem(AUTH_TOKEN, token);
  setCookie(USER_AUTH_TOKEN, token, 7);
}
export function flushTokenFromCookies() {
  localStorage.removeItem(AUTH_TOKEN);
  clearCookie(USER_AUTH_TOKEN);
  clearCookie(USER_AUTH_UID);
}
// export function getAuthorizationHeader() {
//   return `${getTokenFromCookies()}`;
// }

export function setCookie(key: string, token: string, days: number) {
  let expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = key + "=" + token + ";expires=" + expires.toUTCString();
}

export function getCookie(key: string) {
  var keyValue = document.cookie.match("(^|;) ?" + key + "=([^;]*)(;|$)");
  return keyValue ? keyValue[2] : null;
}

export function clearCookie(key: string) {
  var keyValue = getCookie(key);
  setCookie(key, keyValue as string, -1);
}

export const catchError = (
  error,
  at = "Mention function Name To Track Error At:"
) => {};

export const postData = async ({ url, data }: { url: string; data: any }) => {
  const res = await fetch(url, {
    method: "POST",
    headers: new Headers({ "Content-Type": "application/json" }),
    credentials: "same-origin",
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    console.error("Error in postData", { url, data, res });

    const errorData = await res.json();

    throw Error(errorData.message || res.statusText);
  }

  return res.json();
};
