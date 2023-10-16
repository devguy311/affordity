import { FormikErrors } from "formik";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { selectAuth, toggleSignupModal } from "../../redux/auth";
import { selectUser, updateUser } from "../../redux/user";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { DetailedGraphType, FinancialGoalType, MetricType } from "./type";
import {
  financialGoalInitialValue,
  getAffordifiedDetailedGraph,
  getFinancialAdvice,
  reverseGraphTranformData,
} from "./util";
import { useRouter } from "next/router";

let isSetFormValues = false;

export const useShoppingAssistantForm = () => {
  const dispatch = useAppDispatch();
  const navigate = useRouter();
  const { auth } = useAppSelector(selectAuth);
  const { user } = useAppSelector(selectUser);

  const [initialData, setInitialData] = useState(financialGoalInitialValue);
  const [saveToExtensionOnly, setSaveToExtensionOnly] = useState(false);

  const { t } = useTranslation("shoppingassistant");

  useEffect(() => {
    if (user && !isSetFormValues) {
      setInitialData({
        currentCapital: user?.finances?.startCapital || "",
        monthlySavings: user?.finances?.saving || "",
        monthlySalary: user?.finances?.revenue || "",
        price: user?.finances?.price || "",
        purchaseDate: new Date(user?.finances?.purchaseDate as string) || "",
        loanAmount: user?.finances?.loan || "",
        loanInterestRate: user?.finances?.interestRate || "",
        maintenance: user?.finances?.maintenance || "",
        insurance: user?.finances?.insurance || "",
        loanTerm: user?.finances?.loanTerm || "",
        financingAdviceType: user?.finances?.financingAdviceType || "loan",
        monthlyPayment: user?.finances?.monthlyPayment || "",
        downPayment: user?.finances?.downPayment || "",
        leasingLength: user?.finances?.leasingLength || "",
        isLoanAmountInValue: user?.finances?.amountInValue ?? true,
        isInsuranceInValue: user?.finances?.insuranceInValue ?? true,
        isLoanInterestInValue: user?.finances?.interestInValue ?? false,
        isMaintenanceInValue: user?.finances?.maintenanceInValue ?? true,
        isDownPaymentInValue: user?.finances?.downPaymentInValue ?? false,
      });
    }
  }, [user]);

  const handleError = (
    validationErrors: FormikErrors<FinancialGoalType>,
    setFieldValue: (
      field: string,
      value: any,
      shouldValidate?: boolean | undefined
    ) => void
  ) => {
    // const errorsField = Object.keys(validationErrors);
    // errorsField.forEach((key) => {
    //   const field = financialGoalField.find((item) => item.name === key);
    //   field?.selectedFieldName && setFieldValue(field?.selectedFieldName, true);
    // });
  };

  const getDetails = (values: FinancialGoalType) => {
    if (auth.authenticated) {
      isSetFormValues = false;

      getFinancialAdvice(values, user, auth).then((updatedFinancesUser) => {
        updatedFinancesUser && dispatch(updateUser(updatedFinancesUser));

        if (window.dataLayer) {
          window.dataLayer.push({ event: "budget_results" });
        }

        if (!saveToExtensionOnly) {
          navigate.push({
            pathname: "/shopping-assistant-result",
            query: {
              data: JSON.stringify(reverseGraphTranformData(values)),
            },
          });
        } else {
          toast.success("Saved Successfully");
        }
      });
    } else {
      isSetFormValues = true;

      dispatch(toggleSignupModal());
    }
  };

  return {
    getDetails,
    handleError,
    initialData,
    t,
    setSaveToExtensionOnly,
  };
};

export const useShoppingAssistantResult = () => {
  const [selectedMetric, setSelectedMetric] = useState("SAVINGS");
  const [detailedGraphData, setDetailedGraphData] =
    useState<DetailedGraphType | null>(null);
  const navigate = useRouter();
  const { query } = navigate;
  const stringQuery = query.data as unknown as string;
  const data = JSON.parse(stringQuery);
  const { t } = useTranslation("shoppingassistantresult");

  useEffect(() => {
    getAffordifiedDetailedGraph(data as MetricType)
      .then((res) => {
        setDetailedGraphData(res);
      })
      .catch(() => {
        setDetailedGraphData(null);
      });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    data,
    t,
    selectedMetric,
    setSelectedMetric,
    detailedGraphData,
    navigate,
  };
};
