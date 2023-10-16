import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { selectAuth, toggleSignupModal } from "../../redux/auth";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { selectUser, updateUser } from "../../redux/user";
import {
  ComparatorDataType,
  ComparatorOutputType,
  IndicatorDataType,
  QueryType,
  RealStateType,
} from "./type";
import { initiaValue, getRealStateInformation } from "./util";
import { useRouter } from "next/router";

let isSetFormValues = false;

export const useLivingCostIndicator = () => {
  const { t } = useTranslation("housing");
  const navigate = useRouter();

  const dispatch = useAppDispatch();
  const { auth } = useAppSelector(selectAuth);
  const { user } = useAppSelector(selectUser);

  const [initialComparatorData, setInitialComparatorData] =
    useState(initiaValue);

  useEffect(() => {
    if (user && !isSetFormValues) {
      setInitialComparatorData({
        city: user?.realestateView?.city ?? "",
        ownership_status: user?.realestateView?.ownership_status ?? "owner",
        income: user?.realestateView?.income ?? "",
      });
    }
  }, [user]);

  const handleFormSubmit = async (value: RealStateType) => {
    if (auth.authenticated) {
      isSetFormValues = false;

      const userData = {
        ...user,
        realestateView: value,
      };

      // toast.loading("loading...");

      getRealStateInformation(value).then((response) => {
        dispatch(updateUser(userData));
        navigate.push({
          pathname: "/housing-indicator-result",
          query: {
            data: JSON.stringify(response),
          },
        });
      });
    } else {
      isSetFormValues = false;

      dispatch(toggleSignupModal());
    }
  };

  return {
    t,
    dispatch,
    auth,
    user,
    initialComparatorData,
    handleFormSubmit,
  };
};

export const useHousingCostIndicatorResult = () => {
  const { t } = useTranslation("housingResult");
  const [selectedItem, setSelectedItem] = useState<ComparatorOutputType | null>(
    null
  );
  const navigate = useRouter();
  const { query } = navigate;
  const stringQuery = query.data as unknown as string;
  const comparatorResult: ComparatorDataType = JSON.parse(stringQuery);

  const transformOutput: ComparatorOutputType[] = Object.entries(
    comparatorResult.output
  ).map((item) => ({
    name: item[0],
    data: item[1] as IndicatorDataType,
  }));

  const transformQuery: QueryType = {
    city: comparatorResult.query.city,
    incomeRange: comparatorResult.query.income_range,
    tenure: comparatorResult.query.tenure,
  };

  return {
    t,
    selectedItem,
    setSelectedItem,
    transformOutput,
    transformQuery,
  };
};