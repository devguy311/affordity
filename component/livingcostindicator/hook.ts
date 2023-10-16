import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { selectAuth, toggleSignupModal } from "../../redux/auth";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { selectUser, updateUser } from "../../redux/user";
import { ComparatorResultType, ComparisonType } from "./type";
import { comparatorInitiaValue, getComparisonInformation } from "./util";
import { useRouter } from "next/router";

let isSetFormValues = false;

export const useLivingCostIndicator = () => {
  const { t } = useTranslation("livingcostindicator");
  const navigate = useRouter();

  const dispatch = useAppDispatch();
  const { auth } = useAppSelector(selectAuth);
  const { user } = useAppSelector(selectUser);

  const [initialComparatorData, setInitialComparatorData] = useState(
    comparatorInitiaValue
  );

  useEffect(() => {
    if (user && !isSetFormValues) {
      setInitialComparatorData({
        country: user?.comparatorView?.country ?? "",
        state: user?.comparatorView?.state ?? "",
        age: user?.comparatorView?.age ?? "",
        gender: user?.comparatorView?.gender ?? "M",
        income: user?.comparatorView?.income ?? "",
        holidays: user?.comparatorView?.holidays ?? "",
        carMaintenance: user?.comparatorView?.carMaintenance ?? "",
        houseMaintenance: user?.comparatorView?.houseMaintenance ?? "",
        savings: user?.comparatorView?.savings ?? "",
        clothing: user?.comparatorView?.clothing ?? "",
        food: user?.comparatorView?.food ?? "",
        gasAndElectricity: user?.comparatorView?.gasAndElectricity ?? "",
        health: user?.comparatorView?.health ?? "",
        hotelsAndRestaurants: user?.comparatorView?.hotelsAndRestaurants ?? "",
        houseRent: user?.comparatorView?.houseRent ?? "",
        currency:
          user?.comparatorView?.currency ??
          user?.profileData?.prefferedCurrency ??
          "USD",
      });
    }
  }, [user]);

  const handleFormSubmit = async (value: ComparisonType) => {
    if (auth.authenticated) {
      isSetFormValues = false;

      const userData = {
        ...user,
        comparatorView: value,
      };

      getComparisonInformation(value).then((response) => {
        dispatch(updateUser(userData));
        navigate.push({
          pathname: "/living-indicator-result",
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

export const useLivingCostIndicatorResult = () => {
  const { t } = useTranslation("livingcostindicator");
  const [selectedItem, setSelectedItem] = useState("income");
  const [selectedFilter, setSelectedFilter] = useState("yearly");
  const navigate = useRouter();
  const { query } = navigate;
  const stringQuery = query.data as unknown as string;
  const comparatorResult: ComparatorResultType = JSON.parse(stringQuery);

  return {
    t,
    comparatorResult,
    selectedItem,
    setSelectedItem,
    selectedFilter,
    setSelectedFilter,
    navigate,
  };
};
