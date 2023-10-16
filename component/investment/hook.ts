import { useTranslation } from "react-i18next";
import { selectAuth, toggleSignupModal } from "../../redux/auth";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { selectUser, updateUser } from "../../redux/user";
import { useEffect, useState } from "react";
import {
  CompletedTransactionImpactType,
  InvestmentFilterType,
  InvestmentReturnType,
} from "./type";
import {
  InvestmentFilterInitialValues,
  getInvestmentReturnDetail,
} from "./util";
import { useRouter } from "next/router";
import { useWindowSize } from "../../hooks";

let isSetFormValues = false;

export const useInvestmentResult = () => {
  const navigate = useRouter();

  const { mobileView } = useWindowSize();

  const { query } = navigate;

  const stringQuery = query.data as unknown as string;

  const comparatorResult: CompletedTransactionImpactType =
    JSON.parse(stringQuery);

  const { user } = useAppSelector(selectUser);

  const prefferedCurrency = user?.profileData?.prefferedCurrency || "USD";

  return {
    comparatorResult: comparatorResult,
    mobileView,
    prefferedCurrency,
  };
};

export const useInvestmentQuickWayResult = () => {
  const navigate = useRouter();
  const { mobileView } = useWindowSize();
  const { query } = navigate;
  const stringQuery = query.data as unknown as string;
  const comparatorResult: InvestmentReturnType = JSON.parse(stringQuery);
  const { user } = useAppSelector(selectUser);
  const prefferedCurrency = user?.profileData?.prefferedCurrency || "USD";

  return {
    comparatorResult,
    mobileView,
    prefferedCurrency,
  };
};

export const useInvetmentResultForm = () => {
  const dispatch = useAppDispatch();
  const { auth } = useAppSelector(selectAuth);
  const { user } = useAppSelector(selectUser);
  const { t } = useTranslation("investmentview");
  const navigate = useRouter();

  const prefferedCurrency = user?.profileData?.prefferedCurrency || "USD";

  const [isLoading, setIsLoading] = useState(false);

  const [initialInvestmentData, setInitialInvestmentData] = useState(
    InvestmentFilterInitialValues
  );

  const fetchData = async (values: InvestmentFilterType) => {
    try {
      if (!auth.authenticated) {
        isSetFormValues = true;

        dispatch(toggleSignupModal());
      } else {
        isSetFormValues = false;

        setIsLoading(true);
        const userData = {
          ...user,
          investmentView: values,
        };
        const data = await getInvestmentReturnDetail(values);
        await dispatch(updateUser(userData));
        navigate.push({
          pathname: "/investment-result",
          query: {
            data: JSON.stringify(data),
          },
        });
        setIsLoading(false);
      }
    } catch (error: any) {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (user && !isSetFormValues) {
      setInitialInvestmentData({
        targetAmount: user?.investmentView?.targetAmount || "",
        riskType: user?.investmentView?.riskType || "low",
        investmentDuration: user?.investmentView?.investmentDuration || "",
        importanceType: user?.investmentView?.importanceType || "very",
        initialDeposit: user?.investmentView?.initialDeposit || "",
        monthlyDeposit: user?.investmentView?.monthlyDeposit || "",
      });
    }
  }, [user]);

  return {
    initialInvestmentData,
    isLoading,
    fetchData,
    prefferedCurrency,
    t,
  };
};
