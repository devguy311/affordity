import React from "react";

// hook
import { selectAuth } from "../../redux/auth";
import { useAppSelector } from "../../redux/hooks";

// components
import ChoosePlan from "./ChoosePlan";
import ConnectBanks from "./ConnectBanks";
import FinanceResult from "./FinanceResult";
import DashboardOverview from "../dashboard/Overview"

const FinanceOverview = () => {
  const { user, auth } = useAppSelector(selectAuth);

  const isActive = user?.subscription?.status === "active" || user?.subscription?.status === "trialing";

  if (!auth.authenticated) {
    return <DashboardOverview />

  } else {
    if (!isActive) {
      return <ChoosePlan />;
    } else {
      if (user?.powensConnection) {
        return <FinanceResult />;
      } else {
        return <ConnectBanks />;
      }
    }
  }

};

export default FinanceOverview;
