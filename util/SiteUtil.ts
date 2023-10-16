import { includes, some } from "lodash";
import { HEADER_INHERIT_STYLE } from "../constant/siteConstant";

export const monthDiff = (dateFrom: Date, dateTo: Date) => {
  return (
    dateTo.getMonth() -
    dateFrom.getMonth() +
    12 * (dateTo.getFullYear() - dateFrom.getFullYear())
  );
};

export const getLanguage = () => {
  const lang = typeof window !== "undefined" ? navigator.language : "en_US";
  if (lang === "en-US") {
    return "en";

  }

  else if (lang === "en-GB") {
    return "en";

  }
  return lang;
};

const SI_SYMBOL = ["", "K", "M", "G", "T", "P", "E"];

export const abbreviateNumber = (value: number) => {
  const tier = (Math.log10(Math.abs(value)) / 3) | 0;
  if (tier == 0) return value;
  const suffix = SI_SYMBOL[tier];
  const scale = Math.pow(10, tier * 3);
  const scaled = value / scale;
  return scaled.toFixed(1) + suffix;
};

export const getAssetUrl = (url: string) => {
  return `/assets/${url}`;
};

export const containsString = (location) => {
  return some(HEADER_INHERIT_STYLE, (str) => includes(location, str));
};

export const calculateBarHeight = (
  totalValue: number,
  containerHeight: number,
  barHeight: number
) => {
  const blueBlockHeight = (barHeight * containerHeight) / totalValue + 10;
  return blueBlockHeight;
};

export const hideSensitiveNumber = (number: string) => {
  const lastFourDigits = number.slice(-4);
  const hiddenPart = "*".repeat(number.length - 4);
  return hiddenPart + lastFourDigits;
};