/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import { useRouter } from "next/router";

import { selectLanguage } from "../../redux/language";
import {
  BankFilterType,
  DashboardResponseType,
  TransactionListType,
} from "./type";
import {
  getFinanceDetailsData,
  getFinanceFilterData,
  getSortedMonth,
  getSortedWeekDays,
  getTransactionDetails,
  getWebViewRedirectURL,
} from "./util";

import { selectAuth } from "../../redux/auth";
import { useAppSelector } from "../../redux/hooks";

export const useFinanceResult = () => {
  const [selectedTabFilter, setSelectedTabFilter] = useState("thisWeek");
  const [leftPanel, setLeftPanel] = useState<BankFilterType[]>([]);
  const [dashboardData, setDashboardData] =
    useState<DashboardResponseType | null>(null);
  const [transactionList, setTransactionList] = useState<TransactionListType[]>(
    []
  );
  const [checkedAccounts, setCheckedAccounts] = useState<number[]>([]);
  const [openMobileFilter, setOpenMobileFilter] = useState(false);
  const { lang } = useSelector(selectLanguage);

  const router = useRouter();

  const { user, auth } = useAppSelector(selectAuth);

  const [isLoading, setIsLoading] = useState(true);
  const [hasAccess, setHasAccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { t } = useTranslation("myfinance");

  useEffect(() => {
    if (auth.status === "pending") return;

    if (auth.status === "rejected") {
      toast.error("Please login to continue!", {
        position: "bottom-right",
      });

      router.push("/");
      return;
    }

    if (user && !user?.powensConnection) {
      toast.error("You need to connect your wallet to continue", {
        position: "bottom-right",
      });

      router.push("/myfinance");
      return;
    }

    if (user && user?.powensConnection) {
      setHasAccess(true);
      // setIsLoading(false);
    }
  }, [user, auth]);

  useEffect(() => {
    if (hasAccess && checkedAccounts) {
      fetchDashboardData(checkedAccounts);
      fetchTransactionData(checkedAccounts);
    }
  }, [hasAccess, checkedAccounts]);

  useEffect(() => {
    if (hasAccess) {
      fetchFinanceFilter();
    }
  }, [hasAccess]);

  const fetchFinanceFilter = () => {
    getFinanceFilterData().then((data) => {
      if (data.length === 0) {
        return;
      }

      if (data[0].state) {
        handleErrorState(data[0].state);
        return;
      }

      setLeftPanel(data);

      const checkAccountId: number[] = [];

      data.forEach((item) => {
        item.account.forEach((check) => {
          check.defaultCheck && checkAccountId.push(check.id);
        });
      });

      setCheckedAccounts(checkAccountId);
    });
  };

  const handleErrorState = (state: string) => {
    switch (state) {
      case "SCARequired":
      case "webauthRequired":
      case "additionalInformationNeeded":
      case "decoupled":
      case "validating":
        setError(t("SCARequiredError"));
        break;

      case "actionNeeded":
        setError(t("actionNeededError"));
        break;

      case "passwordExpired":
        setError(t("passwordExpiredError"));
        break;

      case "wrongpass":
        setError(t("wrongpassError"));
        break;

      case "rateLimiting":
        setError(t("rateLimitingError"));

        break;

      case "websiteUnavailable":
        setError(t("websiteUnavailableError"));
        break;

      case "bug":
        setError(t("bugError"));
        break;

      default:
        setError(t("defaultError"));
        break;
    }
  };

  const fetchDashboardData = (accountNumber: number[]) => {
    getFinanceDetailsData({
      banks: [],
      accounts: accountNumber,
      language: lang,
    }).then((data) => {
      const sortedBalanceMonth = getSortedMonth(
        data.balance.thisMonth.lineChart
      );

      const sortedBalanceWeekDays = getSortedWeekDays(
        data.balance.thisWeek.lineChart
      );

      const sortedIncomeMonth = getSortedMonth(data.income.thisMonth.lineChart);

      const sortedIncomeWeekDays = getSortedWeekDays(
        data.income.thisWeek.lineChart
      );

      const sortedSpendingMonth = getSortedMonth(
        data.spending.thisMonth.lineChart
      );

      const sortedSpendingWeekDays = getSortedWeekDays(
        data.spending.thisWeek.lineChart
      );

      const statisticData = {
        ...data,
        balance: {
          ...data.balance,
          thisMonth: {
            ...data.balance.thisMonth,
            lineChart: sortedBalanceMonth,
          },
          thisWeek: {
            ...data.balance.thisWeek,
            lineChart: sortedBalanceWeekDays,
          },
        },
        income: {
          ...data.income,
          thisMonth: {
            ...data.income.thisMonth,
            lineChart: sortedIncomeMonth,
          },
          thisWeek: {
            ...data.income.thisWeek,
            lineChart: sortedIncomeWeekDays,
          },
        },
        spending: {
          ...data.spending,
          thisMonth: {
            ...data.spending.thisMonth,
            lineChart: sortedSpendingMonth,
          },
          thisWeek: {
            ...data.spending.thisWeek,
            lineChart: sortedSpendingWeekDays,
          },
        },
      };

      setDashboardData(statisticData);
      setIsLoading(false);
    });
  };

  const fetchTransactionData = (accountNumber: number[]) => {
    getTransactionDetails({
      accounts: accountNumber,
      banks: [],
    }).then((data) => {
      setTransactionList(data);
    });
  };

  const handleCheckedAccount = (accountId: number) => {
    if (checkedAccounts.find((item) => item === accountId)) {
      if (checkedAccounts.length === 1) {
        return;
      }
      setCheckedAccounts((prev) => prev.filter((item) => item !== accountId));
      return;
    }
    setCheckedAccounts((prev) => [...prev, accountId]);
  };

  const handleConnectBank = async () => {
    try {
      toast.loading("loading...", {
        position: "bottom-right",
      });

      const response = await getWebViewRedirectURL();

      toast.dismiss();
      toast.loading("Redirecting...", {
        position: "bottom-right",
      });

      router.push(response.webview_url);
    } catch (error: any) {
      toast.error(error.message, {
        position: "bottom-right",
      });
    } finally {
      toast.dismiss();
    }
  };

  return {
    isLoading,
    selectedTabFilter,
    setSelectedTabFilter,
    leftPanel,
    dashboardData,
    transactionList,
    checkedAccounts,
    error,
    setError,
    handleCheckedAccount,
    setCheckedAccounts,
    openMobileFilter,
    setOpenMobileFilter,
    handleConnectBank,
  };
};
