import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { selectAuth, toggleSignupModal } from "../../redux/auth";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { selectUser, updateUser } from "../../redux/user";
import {
  InvestmentCalcultorType,
  InvetmentReturnGraphType,
} from "../retirementplanner/type";
import { getInvestmentCalculatorDetail } from "../retirementplanner/util";
import { useRouter } from "next/router";

let isSetFormValues = false;

export const useRetirementPlannerResult = () => {
  const { t } = useTranslation("retirementplanner");
  const navigate = useRouter();
  const { query } = navigate;
  const stringQuery = query.data as unknown as string;
  const graphData: InvetmentReturnGraphType = JSON.parse(stringQuery);

  return {
    graphData,
  };
};
export const useRetirementPlanner = () => {
  const { t } = useTranslation("retirementplanner");

  const dispatch = useAppDispatch();
  const { auth } = useAppSelector(selectAuth);
  const { user } = useAppSelector(selectUser);

  const prefferedCurrency = user?.profileData?.prefferedCurrency || "USD";
  const route = useRouter();
  const theme = useTheme();
  const mobileView = useMediaQuery(theme.breakpoints.down(900));

  const [isLoading, setIsLoading] = useState(false);

  const [initialData, setInitialData] = useState({
    age: [0, 100],
    saveAmount: "0",
    saveEachMonth: "100",
    customSaveAmount: "",
    customSaveEachMonth: "",
  });

  const fetchData = async (values: InvestmentCalcultorType) => {
    try {
      if (!auth.authenticated) {
        isSetFormValues = true;

        dispatch(toggleSignupModal());
      } else {
        isSetFormValues = false;

        setIsLoading(true);
        const userData = {
          ...user,
          retirementView: {
            age: values.age,
            saveAmount: !values.customSaveAmount ? values.saveAmount : "0",
            saveEachMonth: !values.customSaveEachMonth
              ? values.saveEachMonth
              : "100",
            customSaveAmount: values.customSaveAmount,
            customSaveEachMonth: values.customSaveEachMonth,
          },
        };

        const data = await getInvestmentCalculatorDetail(values);
        await dispatch(updateUser(userData));
        route.push({
          pathname: "/retirement-planner-result",
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
      setInitialData({
        age: user?.retirementView?.age || [0, 100],
        saveAmount: user?.retirementView?.saveAmount || "0",
        saveEachMonth: user?.retirementView?.saveEachMonth || "100",
        customSaveAmount: user?.retirementView?.customSaveAmount || "",
        customSaveEachMonth: user?.retirementView?.customSaveEachMonth || "",
      });
    }
  }, [user]);

  return {
    fetchData,
    isLoading,
    mobileView,
    t,
    initialData,
    prefferedCurrency,
  };
};
