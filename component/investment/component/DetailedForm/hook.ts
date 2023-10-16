import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";
import { selectAuth, toggleSignupModal } from "../../../../redux/auth";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import { selectUser, updateUser } from "../../../../redux/user";
import {
  getInvestmentReturnDetail
} from "./utils";


let isSetFormValues = false;

const financialValues = {
  initialDeposit: "",
  monthlyDeposit: "",
  investmentDuration: "",
  targetAmount: "",
  liquidity: "",
};

const riskValues = {
  financialRisk: "",
  riskyAssets: "",
  investmentConcept: "",
  investmentProduct: "",
  stockMarket: "",
  action: "",
};

export const useDetailForm = () => {
  const dispatch = useAppDispatch();
  const { auth } = useAppSelector(selectAuth);
  const { user } = useAppSelector(selectUser);

  const { t } = useTranslation("investmentdetailedInputs");

  const navigate = useRouter();

  const prefferedCurrency = user?.profileData?.prefferedCurrency || "USD";

  const [isLoading, setIsLoading] = useState(false);

  const [currentTab, setCurrentTab] = useState<number>(1);
  const [goalFormData, setGoalFormData] = useState([
    {
      goal: 1,
      data: financialValues,
    },
  ]);
  const [riskFormData, setRiskFormData] = useState({
    ...riskValues,
  });

  useEffect(() => {
    if (user && !isSetFormValues) {
      setGoalFormData(
        user?.detailInvestmentView?.goals ?? [
          {
            goal: 1,
            data: financialValues,
          },
        ]
      );

      setRiskFormData(
        user?.detailInvestmentView?.risks ?? {
          ...riskValues,
        }
      );
    }
  }, [user]);

  const handleAddGoal = () => {
    setGoalFormData([
      ...goalFormData,
      {
        goal: goalFormData.length + 1,
        data: financialValues,
      },
    ]);
  };

  const handleChangeTab = (goal: number) => {
    setCurrentTab(goal);
  };

  const handleFieldChange = (
    goalIndex: number,
    fieldName: string,
    newValue: string
  ) => {
    setGoalFormData((prevFormData) => {
      const updatedFormData = prevFormData.map((item, index) => {
        if (index === goalIndex) {
          return {
            ...item,
            data: {
              ...item.data,
              [fieldName]: newValue,
            },
          };
        }
        return item;
      });
      return updatedFormData;
    });
  };

  const handleRiskFieldChange = (fieldName: string, newValue: string) => {
    setRiskFormData({
      ...riskFormData,
      [fieldName]: newValue,
    });
  };

  const fetchData = async () => {
    try {
      if (!auth.authenticated) {
        isSetFormValues = true;

        dispatch(toggleSignupModal());
      } else {
        isSetFormValues = false;

        setIsLoading(true);

        const investmentData = {
          goals: goalFormData,
          risks: riskFormData,
        };

        const userData = {
          ...user,
          detailInvestmentView: investmentData,
        };

        const data = await getInvestmentReturnDetail(investmentData);
        await dispatch(updateUser(userData));

        navigate.push({
          pathname: "/investment-result-detailed",
          query: {
            data: JSON.stringify(data), //TODO: Change to data when api start giving result, Replcae with data
          },
        });

        setIsLoading(false);
      }
    } catch (err: any) {
      console.error(err.message);

      setIsLoading(false);
    }
  };

  return {
    t,
    goalFormData,
    riskFormData,
    currentTab,
    isLoading,
    prefferedCurrency,
    fetchData,
    handleAddGoal,
    handleChangeTab,
    handleFieldChange,
    handleRiskFieldChange,
  };
};
